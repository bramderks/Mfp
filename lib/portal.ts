import {neon} from "@neondatabase/serverless";
import {randomUUID} from "node:crypto";
import {auth} from "@/lib/auth/server";
const sql=()=>{if(!process.env.DATABASE_URL)throw new Error("DATABASE_URL ontbreekt");return neon(process.env.DATABASE_URL)};
export async function getPortalSession(){const {session,user}=await auth.getSession();if(!session||!user)return null;return {session,user};}
export async function getCustomerForSession(){
 const current=await getPortalSession();if(!current)return null;const db=sql();
 const rows=await db\`select c.* from public."Customer" c join neon_auth.member m on m."organizationId"=c."authOrganizationId" where m."userId"=${current.user.id}::uuid limit 1\`;
 if(!rows[0])return null;return {session:current.session,user:current.user,customer:rows[0]};
}
export async function requireCustomer(){const result=await getCustomerForSession();if(!result)throw new Error("PORTAL_UNAUTHORIZED");return result;}
export async function audit(customerId:string,userId:string,action:string,resource?:string,resourceId?:string,metadata?:unknown){
 const db=sql();await db\`insert into public."AuditLog" ("id","customerId","userId","action","resource","resourceId","metadata") values (${randomUUID()},${customerId},${userId}::uuid,${action},${resource||null},${resourceId||null},${metadata?JSON.stringify(metadata):null}::jsonb)\`;
}
