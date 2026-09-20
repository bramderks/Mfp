import {NextResponse} from "next/server";
import {z} from "zod";
import {PrismaClient} from "@prisma/client";
import {Resend} from "resend";

const schema=z.object({
  type:z.enum(["quote","contact"]),
  name:z.string().min(2),
  company:z.string().optional(),
  email:z.string().email(),
  phone:z.string().optional(),
  city:z.string().optional(),
  message:z.string().optional(),
  product:z.string().optional()
});

function escapeHtml(value:string){
  return value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}

export async function POST(req:Request){
  try{
    const parsed=schema.safeParse(await req.json());
    if(!parsed.success)return NextResponse.json({error:"Ongeldige gegevens"},{status:400});
    if(!process.env.DATABASE_URL)return NextResponse.json({error:"Leadopslag is nog niet geconfigureerd"},{status:503});
    if(!process.env.RESEND_API_KEY)return NextResponse.json({error:"E-mailverzending is nog niet geconfigureerd"},{status:503});

    const data=parsed.data;
    const prisma=new PrismaClient();

    try{
      await prisma.lead.create({data});
    }finally{
      await prisma.$disconnect();
    }

    const resend=new Resend(process.env.RESEND_API_KEY);
    const recipient=process.env.LEAD_EMAIL_TO || "bram.derks@outlook.com";
    const sender=process.env.LEAD_EMAIL_FROM || "MFP ISELTO <aanvragen@iselto.nl>";
    const subject=data.type==="quote"
      ? `Nieuwe offerteaanvraag – ${data.product || "MFP advies"}`
      : "Nieuwe contactaanvraag – MFP ISELTO";

    const {error}=await resend.emails.send({
      from:sender,
      to:[recipient],
      replyTo:data.email,
      subject,
      html:`
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17202a;max-width:700px">
          <h1 style="font-size:24px">Nieuwe ${data.type==="quote" ? "offerteaanvraag" : "contactaanvraag"}</h1>
          <p>Er is een nieuwe aanvraag binnengekomen via mfp.iselto.nl.</p>
          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
            <tr><td><strong>Naam</strong></td><td>${escapeHtml(data.name)}</td></tr>
            <tr><td><strong>Bedrijf</strong></td><td>${escapeHtml(data.company || "-")}</td></tr>
            <tr><td><strong>E-mail</strong></td><td>${escapeHtml(data.email)}</td></tr>
            <tr><td><strong>Telefoon</strong></td><td>${escapeHtml(data.phone || "-")}</td></tr>
            <tr><td><strong>Plaats</strong></td><td>${escapeHtml(data.city || "-")}</td></tr>
            <tr><td><strong>MFP</strong></td><td>${escapeHtml(data.product || "Nog te bepalen")}</td></tr>
          </table>
          <h2 style="font-size:18px;margin-top:24px">Vraag / wensen</h2>
          <p style="white-space:pre-wrap">${escapeHtml(data.message || "-")}</p>
        </div>
      `
    });

    if(error){
      return NextResponse.json({ok:false,error:"De aanvraag is opgeslagen, maar de e-mail kon niet worden verzonden. Neem contact met ons op als dit blijft gebeuren."},{status:502});
    }

    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:"Kon aanvraag niet verwerken"},{status:500});
  }
}