import {createNeonAuth} from "@neondatabase/auth/next/server";

export const auth=createNeonAuth({
  baseUrl:process.env.NEON_AUTH_BASE_URL||"https://ep-snowy-glade-aub62ix7.neonauth.c-10.us-east-1.aws.neon.tech/neondb/auth",
});
