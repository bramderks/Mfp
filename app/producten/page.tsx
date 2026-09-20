import Link from "next/link";
import {products} from "@/lib/products";

export const metadata={title:"MFP's kiezen",description:"Bekijk Kyocera MFP's voor A4 en A3, vergelijk specificaties en vraag direct een offerte aan via ISELTO."};

export default function Products(){
  return <main>
    <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">MFP SELECTEREN</div><h1>Kies de MFP die bij uw organisatie past.</h1><p>Bekijk de Kyocera-modellen in het ISELTO-portfolio, vergelijk de belangrijkste eigenschappen en vraag direct een offerte aan voor de MFP van uw keuze.</p></div></section>
    <section className="container editorial-section"><div className="eyebrow">KYOCERA MFP PORTFOLIO</div><h2>Van compacte A4 tot krachtige A3.</h2><p className="lead">Kies op formaat, snelheid en functionaliteit. Komt u er niet uit? Vertel ons hoe uw organisatie werkt; wij helpen u de juiste configuratie bepalen.</p>
      <div className="product-grid">{products.map(p=><article className="card" key={p.slug}>
        <Link href={"/producten/"+p.slug} className="product-image-link"><div className="product-image"><img src={p.image} alt={p.name} className="product-image-element" loading="lazy"/></div></Link>
        <div className="product-copy"><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><p>{p.description}</p><div className="product-specs"><span>{p.speed}</span><span>{p.format}</span><span>{p.colour?"Kleur":"Zwart-wit"}</span></div><div className="product-actions"><Link className="text-link" href={"/producten/"+p.slug}>Specificaties →</Link><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte aanvragen</Link></div><a className="source-link" href={p.brochurePath} target="_blank" rel="noreferrer">Brochure downloaden →</a></div>
      </article>)}</div>
    </section>
    <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">HULP BIJ UW KEUZE</div><h2>Twijfelt u tussen meerdere MFP's?</h2></div><div><p className="large-copy">U hoeft niet zelf alle technische verschillen uit te zoeken. Vertel ons hoe uw organisatie print en scant. Wij helpen u de opties naast elkaar te zetten.</p><Link className="btn btn-primary" href="/vergelijker">Vergelijk MFP's</Link><Link className="text-link" href="/offerte">Ik wil advies →</Link></div></div></section>
  </main>
}
