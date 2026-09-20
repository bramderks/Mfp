import Link from "next/link";

const services=[
  {num:"01",title:"Advies & inventarisatie",text:"We brengen apparatuur, volumes, gebruikers, locaties en wensen in kaart. Zo ontstaat een duidelijk vertrekpunt."},
  {num:"02",title:"Installatie & inrichting",text:"Van plaatsing en configuratie tot netwerk, gebruikersinstellingen en documentflows: we zorgen dat de oplossing klaar is voor gebruik."},
  {num:"03",title:"Gebruikersinstructie",text:"Een goede oplossing werkt pas echt wanneer mensen weten hoe ze hem gebruiken. We houden uitleg praktisch en begrijpelijk."},
  {num:"04",title:"Onderhoud & support",text:"Preventief onderhoud, storingen en vragen horen bij de dagelijkse praktijk. Daarom hoort service bij de oplossing."},
  {num:"05",title:"Proactief printbeheer",text:"Maak apparatuur, verbruik, tellerstanden, supplies en onderhoud voorspelbaarder. Waar passend kunnen monitoring en automatische signalering onderdeel van de inrichting zijn."},
  {num:"06",title:"Continuïteit & supplies",text:"De printomgeving moet blijven werken. Daarom kijken we ook naar toner, onderhoud, reservecapaciteit en een duidelijke route bij vragen of storingen."},
  {num:"07",title:"Optimalisatie",text:"Uw organisatie verandert. Daarom blijven we kijken of apparatuur, software en werkwijze nog aansluiten."},
];

export const metadata={title:"Diensten",description:"Advies, installatie, training, support, printbeheer en optimalisatie door ISELTO."};

export default function Services(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">DIENSTEN</div><h1>Service die verder gaat dan de machine.</h1><p>Een betrouwbare printomgeving vraagt om meer dan goede hardware. ISELTO begeleidt de oplossing van eerste inventarisatie tot dagelijks beheer.</p><div className="hero-actions"><Link className="btn btn-light" href="/contact">Neem contact op</Link><Link className="btn btn-outline-light" href="/oplossingen">Bekijk oplossingen</Link></div></div></section>
  <section className="container editorial-section"><div className="eyebrow">VAN START TOT DAGELIJKS GEBRUIK</div><h2>Één aanpak voor de hele levenscyclus, inclusief beheer en continuïteit.</h2><p className="lead">Van het eerste advies tot onderhoud en optimalisatie: we houden de oplossing praktisch, persoonlijk en overzichtelijk.</p><div className="service-grid">{services.map(s=><article className="service-card" key={s.num}><div className="service-number">{s.num}</div><h3>{s.title}</h3><p>{s.text}</p><Link className="text-link" href="/contact">Bespreek dit →</Link></article>)}</div></section>
  <section className="dark-band"><div className="container band-grid"><div><div className="eyebrow eyebrow-light">PERSOONLIJKE SERVICE</div><h2>Een aanspreekpunt dat de praktijk begrijpt.</h2></div><p>Geen ingewikkeld loket. We willen weten wat er speelt en welke oplossing in uw organisatie werkt.</p></div></section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">STARTPUNT</div><h2>Laat uw huidige situatie bekijken.</h2><p>Een kort gesprek is genoeg om te bepalen waar we kunnen helpen.</p></div><Link className="btn btn-light" href="/offerte">Plan een adviesgesprek</Link></div></section>
 </main>
}