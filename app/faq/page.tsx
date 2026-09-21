import Link from "next/link";

const faq=[
 ["Welke MFP heb ik nodig?","Dat hangt onder meer af van printvolume, A4/A3, kleurgebruik, scansnelheid, aantal gebruikers, beveiliging en gewenste workflow. De keuzehulp geeft een eerste selectie."],
 ["Is een A4-MFP voldoende?","Voor veel kantoorwerkgroepen wel. A3 is vooral relevant wanneer u A3-documenten, grotere papierformaten of specifieke afwerking nodig heeft."],
 ["Wanneer is lease interessant?","Lease kan de investering spreiden en apparatuur en dienstverlening combineren. De precieze financiële uitwerking hangt af van looptijd, machine en contract."],
 ["Kan ik ook huren?","Ja. Huur kan passen wanneer flexibiliteit of een tijdelijke behoefte belangrijk is. We kunnen huur, lease en koop naast elkaar bespreken."],
 ["Kan ik een MFP kopen?","Ja. Bij koop wordt de apparatuur eigendom van uw organisatie. Service en onderhoud kunnen daarnaast worden afgesproken."],
 ["Wat valt onder Managed Print?","Managed Print kan bestaan uit inzicht in het printerpark, monitoring, tellerstanden, supplies, onderhoud, rapportage en optimalisatie. De exacte dienstverlening wordt afgestemd op de organisatie."],
 ["Kunnen documenten veilig worden geprint?","Dat kan met functies zoals gebruikersauthenticatie en printvrijgave. De juiste inrichting hangt af van uw omgeving en beveiligingsbeleid."],
 ["Kan ik rechtstreeks naar cloudopslag scannen?","Afhankelijk van machine en software kunnen scanworkflows worden ingericht richting e-mail, mappen en cloudomgevingen. We bepalen samen welke koppeling past."],
 ["Kan software ook zonder nieuwe MFP?","Ja. Een bestaande printomgeving kan het startpunt zijn voor software, workflow of documentbeheer."],
 ["Hoe werkt service bij een storing?","U kunt via de servicepagina een melding doen. Daarna wordt de aanvraag beoordeeld en kan technische ondersteuning of service op locatie worden ingezet."],
 ["Kunnen jullie mijn huidige printerpark analyseren?","Ja. Met een inventarisatie van apparaten, volumes, locaties, contracten en gebruik kunnen we een uitgangssituatie maken en verbeterpunten bespreken."],
 ["Kan ISELTO helpen bij de keuze tussen meerdere modellen?","Ja. Gebruik de vergelijker voor de technische verschillen en de keuzehulp voor een eerste selectie op basis van uw werksituatie."]
];

export const metadata={title:"Veelgestelde vragen over MFP, print en service",description:"Veelgestelde vragen over zakelijke multifunctionals, lease, huur, koop, managed print, software en service.",alternates:{canonical:"/faq"},openGraph:{type:"website",title:"Veelgestelde vragen over MFP, print en service",description:"Veelgestelde vragen over zakelijke multifunctionals, lease, huur, koop, managed print, software en service.",url:"https://mfp.iselto.nl/faq"}};

export default function Faq(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">VEELGESTELDE VRAGEN</div><h1>Heldere antwoorden op praktische vragen.</h1><p>Van MFP-keuze en financiering tot software, beveiliging en service.</p><div className="hero-actions"><Link className="btn btn-light" href="/mfp-kiezen">Start keuzehulp</Link><Link className="btn btn-outline-light" href="/contact">Stel een vraag</Link></div></div></section>
  <section className="container editorial-section"><div className="faq-list">{faq.map(([q,a],i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span><strong>{q}</strong></summary><p>{a}</p></details>)}</div></section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">NIET GEVONDEN?</div><h2>Uw situatie past niet in een standaardantwoord.</h2><p>Vertel ons wat u nodig heeft. We kijken naar de praktijk.</p></div><Link className="btn btn-light" href="/contact">Neem contact op</Link></div></section>
 </main>;
}
