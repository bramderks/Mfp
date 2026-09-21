import {NextRequest,NextResponse} from "next/server";
import {auth} from "@/lib/auth/server";

export async function proxy(request:NextRequest){
 const response=NextResponse.next();
 const headers={"X-Content-Type-Options":"nosniff","X-Frame-Options":"DENY","Referrer-Policy":"strict-origin-when-cross-origin","Permissions-Policy":"camera=(), microphone=(), geolocation=(), payment=()","Strict-Transport-Security":"max-age=31536000; includeSubDomains"};
 Object.entries(headers).forEach(([key,value])=>response.headers.set(key,value));
 if(request.nextUrl.pathname.startsWith("/api/"))response.headers.set("Cache-Control","no-store");
 if(request.nextUrl.pathname.startsWith("/mijn-iselto") && !request.nextUrl.pathname.startsWith("/mijn-iselto/login")){
   const guarded=await auth.middleware({loginUrl:"/mijn-iselto/login"})(request);
   return guarded;
 }
 return response;
}
export const config={matcher:["/((?!_next/static|_next/image|favicon.ico).*)"]};
