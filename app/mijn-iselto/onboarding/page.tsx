import {redirect} from "next/navigation";
import {auth} from "@/lib/auth/server";
import {OnboardingForm} from "./form";
export const dynamic="force-dynamic";
export default async function OnboardingPage(){
 const {user}=await auth.getSession();if(!user)redirect("/mijn-iselto/login");
 return <main className="portal-wrap"><div className="portal-onboarding"><div className="portal-main-head"><div><div className="portal-label">Mijn Iselto</div><h1>Je klantomgeving instellen</h1><p>Vul eenmalig je bedrijfsgegevens in. Daarna staat je persoonlijke omgeving klaar.</p></div></div><div className="portal-note">Je account is veilig aangemaakt. Je gegevens zijn alleen zichtbaar voor jouw organisatie.</div><OnboardingForm name={user.name||""} email={user.email}/></div></main>
}
