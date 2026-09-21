import Link from "next/link";

const branches=[
 {slug:"zakelijke-dienstverlening",label:"Zakelijke dienstverlening",focus:"Veel documenten, vertrouwelijke informatie en behoefte aan veilige, snelle workflows.",points:["Beveiligd printen","Scan naar documentomgeving","A4/A3 per team"]},
 {slug:"zorg-welzijn",label:"Zorg & welzijn",focus:"Vertrouwelijke documenten en verschillende gebruikers vragen om duidelijke beveiliging en eenvoudige bediening.",points:["Authenticatie","Scanworkflows","Gebruiksgemak"]},
 {slug:"onderwijs",label:"Onderwijs",focus:"Veel gebruikers en wisselende printbehoeften maken beheer en inzicht belangrijk.",points:["Gebruikersbeheer","Printbeleid","Kosteninzicht"]},
 {slug:"industrie-techniek",label:"Industrie & techniek",focus:"Werkvloer, kantoor en technische documentatie stellen verschillende eisen aan apparatuur en workflow.",points:["A3-mogelijkheden","Scan naar processen","Robuuste inzet"]},
 {slug:"handel-logistiek",label:"Handel & logistiek",focus:"Orderdocumenten, pakbonnen en facturen vragen om snelheid en slimme documentrouting.",points:["Snelle verwerking","OCR","Workflow automatisering"]},
 {slug:"mkb",label:"MKB",focus:"Een praktische oplossing zonder onnodige complexiteit, afgestemd op teamgrootte en printvolume.",points:["A4 of A3","Keuzehulp","Lease, huur of koop"]}
];

export const metadata={title:"MFP per branche",description:"Zakelijke MFP-oplossingen per branche: MKB, zakelijke dienstverlening, zorg, onderwijs, industrie, techniek, handel en logistiek.",alternates:{canonical:"/branches"},openGraph:{type:"website",title:"MFP per branche",description:"Zakelijke MFP-oplossingen per branche: MKB, zakelijke dienstverlening, zorg, onderwijs, industrie, techniek, handel en logistiek.",url:"https://mfp.iselto.nl/branches"}};

export default function Branches(){
 return <main><section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">BRANCHES</div><h1>Een MFP-oplossing die past bij uw branche.</h1><p>Dezelfde machine is niet automatisch de juiste oplossing voor iedere organisatie. Bekijk de aandachtspunten per branche en ontdek welke functies vaak relevant zijn.</p><div className="hero-actions"><Link className="btn btn-light" href="/mfp-kiezen">Vind uw MFP</Link><Link className="btn btn-outline-light" href="/offerte">Vraag advies</Link></div></div></section>
 <section className="container editorial-section"><div className="branch-intro-grid"><div><div className="eyebrow">SECTORSPECIFIEK</div><h2>Begin bij uw werkproces.</h2></div><p>Branchekennis vervangt geen inventarisatie. Gebruik deze pagina als startpunt en laat ons daarna kijken naar volumes, gebruikers, documentstromen, locaties en beveiliging.</p></div>
 <div className="branch-focus-grid">{branches.map(b=><article key={b.slug}><strong>{b.label}</strong><p>{b.focus}</p><div className="tag-list">{b.points.map(x=><span key={x}>{x}</span>)}</div><Link className="text-link" href={"/branches/"+b.slug}>Bekijk branche →</Link></article>)}</div></section>
 <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">EÉN BASIS, ANDERE PRIORITEITEN</div><h2>Print, scan en service worden per organisatie anders ingericht.</h2></div><div><p className="large-copy">Daarom combineren we branche-informatie met uw eigen gebruikssituatie. De keuzehulp en vergelijker geven richting; het advies maakt de vertaling naar uw praktijk.</p><Link className="btn btn-primary" href="/mfp-kiezen">Start keuzehulp</Link></div></div></section></main>;
}