import {NextResponse} from "next/server";
import {randomUUID} from "node:crypto";
import {z} from "zod";
import {neon} from "@neondatabase/serverless";
import {auth} from "@/lib/auth/server";
const schema=z.object({company:z.string().trim().min(2).max(180),customerNumber:z.string().trim().max(60).optional(),city:z.string().trim().max(100).optional(),email:z.string().email().max(254),name:z.string().trim().max(150)});
export async function POST(req:Request){
 try{
  const {user}=await auth.getSession();if(!user)return NextResponse.json({error:"Niet ingelogd."},{status:401});
  const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"Controleer de gegevens."},{status:400});
  const db=neon(process.env.DATABASE_URL!);
  const existing=await db\`select id from public."Customer" c join neon_auth.member m on m."organizationId"=c."authOrganizationId" where m."userId"=${user.id}::uuid limit 1\`;
  if(existing[0])return NextResponse.json({ok:true});
  const org=await auth.organization.create({name:parsed.data.company,slug:("iselto-"+randomUUID()).toLowerCase()});
  if(!org?.data?.id)return NextResponse.json({error:"Kon organisatie niet aanmaken."},{status:500});
  const id=randomUUID();const customerNumber=parsed.data.customerNumber||("MI-"+new Date().getFullYear()+"-"+Math.random().toString(36).slice(2,8).toUpperCase());
  await db\`insert into public."Customer" ("id","authOrganizationId","name","customerNumber","email","city") values (${id},${org.data.id}::uuid,${parsed.data.company},${customerNumber},${parsed.data.email},${parsed.data.city||null})\`;
  return NextResponse.json({ok:true});
 }catch(e){console.error(e);return NextResponse.json({error:"Kon de klantomgeving niet activeren."},{status:500})}
}
