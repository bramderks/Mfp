import Link from "next/link";
import {products} from "@/lib/products";

export const metadata={title:"Downloads",description:"Datasheets en productdocumentatie van de MFP's in het Iselto-portfolio.",alternates:{canonical:"/downloads"},openGraph:{type:"website",title:"Downloads",description:"Datasheets en productdocumentatie van de MFP's in het Iselto-portfolio.",url:"https://mfp.iselto.nl/downloads"}};

export default function Downloads(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">DOWNLOADS</div><h1>Documentatie bij uw MFP.</h1><p>Bekijk de beschikbare productdocumentatie. Wilt u weten welke uitvoering en opties bij uw organisatie passen? Wij helpen u verder.</p></div></section>
  <section className="container editorial-section"><div className="eyebrow">PRODUCTDOCUMENTATIE</div><h2>Datasheets en brochures.</h2><p className="lead">Selecteer een model om de productspecificaties te bekijken of de beschikbare documentatie te openen.</p>
   <div className="download-grid">{products.map(p=><article className="download-card" key={p.slug}><div className="download-image"><img src={p.image} alt={p.name} loading="lazy"/></div><div className="download-copy"><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><p>{p.speed} · {p.format} · {p.colour?"Kleur":"Zwart-wit"}</p><div className="download-actions"><Link className="btn btn-secondary" href={"/producten/"+p.slug}>Product bekijken</Link></div></div></article>)}</div>
  </section>
  <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">HULP NODIG?</div><h2>Specificaties zijn het begin van de keuze.</h2></div><div><p className="large-copy">Papierformaten, snelheid en opties zeggen niet alles. Uw volumes en workflow bepalen welke configuratie logisch is.</p><Link className="btn btn-primary" href="/offerte">Vraag advies</Link></div></div></section>
 </main>
}