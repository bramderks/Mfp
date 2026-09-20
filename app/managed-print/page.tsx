import Link from "next/link";

const pillars=[
 {n:"01",title:"Inzicht",text:"Breng apparatuur, volumes, gebruikers en verbruik in kaart. Zo ontstaat een helder beeld van de huidige printomgeving."},
 {n:"02",title:"Beheer",text:"Maak tellerstanden, verbruik, toner en onderhoud voorspelbaar en beperk handmatig beheer."},
 {n:"03",title:"Beveiliging",text:"Bescherm vertrouwelijke documenten met authenticatie, printvrijgave en een inrichting die past bij uw organisatie."},
 {n:"04",title:"Optimalisatie",text:"Verminder onnodige apparatuur en verspilling en stem de omgeving af op werkplekken, locaties en printgedrag."},
];

export const metadata={title:"Managed Print",description:"Managed Print van ISELTO: inzicht, beheer, beveiliging en optimalisatie van uw volledige printomgeving."};

export default function ManagedPrint(){
 return <main>
  <section className="dark-hero managed-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">MANAGED PRINT</div><h1>Uw printomgeving geregeld.</h1><p>Niet alleen een goede MFP, maar een printomgeving die beheersbaar, veilig en voorspelbaar blijft. ISELTO kijkt naar het totaal.</p><div className="hero-actions"><Link className="btn btn-light" href="/contact">Plan een printscan</Link><Link className="btn btn-outline-light" href="/producten">Bekijk MFP's</Link></div></div></section>

  <section className="container editorial-section"><div className="section-intro"><div><div className="eyebrow">VAN MACHINE NAAR OMGEVING</div><h2>Print is onderdeel van uw werkplek.</h2></div><div><p className="lead">Een printerpark groeit gemakkelijk zonder dat iemand het overzicht houdt. Wij brengen apparatuur, gebruik en processen samen en maken daar één beheersbare omgeving van.</p><Link className="text-link" href="/oplossingen">Bekijk alle oplossingen →</Link></div></div>
   <div className="solution-grid">{pillars.map(p=><article className="solution-card" key={p.n}><div className="solution-number">{p.n}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
  </section>

  <section className="dark-band"><div className="container band-grid"><div><div className="eyebrow eyebrow-light">WAT WE KUNNEN INRICHTEN</div><h2>Van toner tot beveiligde printvrijgave.</h2></div><p>Afhankelijk van uw situatie kunnen monitoring, automatische tonerlevering, onderhoud, gebruikersauthenticatie en follow-me printing onderdeel worden van de oplossing.</p></div></section>

  <section className="container editorial-section"><div className="eyebrow">VEILIG & SLIM</div><h2>Ook documenten verdienen een duidelijke route.</h2><p className="lead">Een document dat wordt geprint, gescand of gearchiveerd maakt onderdeel uit van een proces. Daarom kijken we naast de hardware ook naar documentstromen, beveiliging en de manier waarop medewerkers ermee werken.</p><div className="feature-banner"><div><h2>Begin met een printscan.</h2><p>We brengen uw huidige omgeving in kaart en bespreken waar vereenvoudiging, beveiliging of kostenbeheersing mogelijk is.</p></div><Link className="btn btn-primary" href="/contact">Aanvragen</Link></div></section>

  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">ISELTO</div><h2>Niet de machine staat centraal. Uw organisatie wel.</h2><p>Vertel ons hoe uw printomgeving vandaag werkt. Vanuit daar bepalen we samen de volgende stap.</p></div><Link className="btn btn-light" href="/offerte">Bespreek uw situatie</Link></div></section>
 </main>
}