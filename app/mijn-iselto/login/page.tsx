import {AuthView} from "@neondatabase/auth-ui";
export const dynamic="force-dynamic";
export default function LoginPage(){return <main className="portal-login"><div className="portal-login-card"><div className="portal-login-brand">Mijn <span>Iselto</span></div><h1>Welkom terug</h1><p>Log veilig in op je persoonlijke Iselto klantomgeving. Bekijk je machines, contracten, storingen en documenten of bestel toners.</p><AuthView path="sign-in"/></div></main>}
