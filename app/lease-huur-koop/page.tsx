import Link from "next/link";

const options=[
 {title:"Leasen",tag:"Spreid de investering",text:"Een zakelijke MFP wordt over een afgesproken looptijd gefinancierd. Service en verbruik kunnen afhankelijk van het voorstel worden gecombineerd.",points:["Geen grote aanschaf ineens","Vaste contractstructuur mogelijk","Geschikt voor planbare vervanging"],href:"/mfp-leasen"},
 {title:"Huren",tag:"Flexibiliteit",text:"Huur kan passen wanneer de behoefte tijdelijk of veranderlijk is. De voorwaarden en looptijd worden afgestemd op de situatie.",points:["Flexibel bij veranderende behoefte","Geen directe aanschaf","Service kan worden meegenomen"],href:"/mfp-huren"},
 {title:"Kopen",tag:"Direct eigendom",text:"Bij koop wordt de apparatuur eigendom van uw organisatie. Ook dan kunnen service, onderhoud en ondersteuning worden ingericht.",points:["Direct eigendom","Geen leaseconstructie nodig","Servicecontract mogelijk"],href:"/mfp-kopen"}
];

export const metadata={title:"MFP leasen, huren of kopen",description:"Vergelijk MFP leasen, huren en kopen en ontdek welke contractvorm bij uw organisatie en printerpark past."};

export default function LeaseRentBuy(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">LEASE · HUUR · KOOP</div><h1>Niet alleen de juiste MFP. Ook de juiste manier van aanschaffen.</h1><p>De contractvorm beïnvloedt investering, looptijd, service en flexibiliteit. Daarom bekijken we apparatuur en financiële structuur samen.</p><div className="hero-actions"><Link className="btn btn-light" href="/offerte">Laat opties uitwerken</Link><Link className="btn btn-outline-light" href="/mfp-kiezen">Vind uw MFP</Link></div></div></section>
  <section className="container editorial-section"><div className="section-intro"><div><div className="eyebrow">DRIE ROUTES</div><h2>Leasen, huren en kopen naast elkaar.</h2></div><p className="lead">Er is geen universele contractvorm. Kijk naar investering, looptijd, eigendom, flexibiliteit en de manier waarop u service en verbruik wilt organiseren.</p></div><div className="finance-grid">{options.map(o=><article className="finance-card" key={o.title}><div className="eyebrow">{o.tag}</div><h2>{o.title}</h2><p>{o.text}</p><ul>{o.points.map(x=><li key={x}>{x}</li>)}</ul><Link className="btn btn-secondary" href={o.href}>Meer over {o.title.toLowerCase()}</Link></article>)}</div></section>
  <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">WAT WE MEEWEGEN</div><h2>Een maandbedrag vertelt niet het hele verhaal.</h2></div><div><p className="large-copy">We kunnen de machine, looptijd, service, verbruik, vervanging en gewenste flexibiliteit samen bekijken. Zo bespreekt u niet alleen de aanschafprijs, maar de totale inrichting van de printomgeving.</p><Link className="btn btn-primary" href="/tco-scan">Bekijk TCO-scan</Link></div></div></section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">PERSOONLIJK ADVIES</div><h2>Wilt u drie scenario's naast elkaar?</h2><p>Geef uw huidige situatie door; we bespreken lease, huur en koop als onderdeel van één voorstel.</p></div><Link className="btn btn-light" href="/offerte">Vraag advies aan</Link></div></section>
 </main>;
}
