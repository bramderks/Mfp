import Link from "next/link";
import Image from "next/image";
import {products} from "@/lib/products";

export const metadata={title:"MFP's kiezen"};

export default function Products(){
  return <main>
    <section className="dark-hero">
      <div className="container hero-copy">
        <div className="eyebrow eyebrow-light">MFP SELECTEREN</div>
        <h1>Kies de MFP die bij uw organisatie past.</h1>
        <p>Bekijk de beschikbare modellen, vergelijk de belangrijkste eigenschappen en vraag direct een offerte aan voor de MFP van uw keuze.</p>
      </div>
    </section>

    <section className="container editorial-section">
      <div className="eyebrow">ONZE MFP'S</div>
      <h2>Van compacte A4 tot krachtige A3.</h2>
      <p className="lead">Nog niet zeker welk model past? Kies een model dat u aanspreekt of vraag eerst persoonlijk advies. We kijken naar volumes, gebruikers, functies en kosten.</p>

      <div className="product-grid">
        {products.map(p=>
          <article className="card" key={p.slug}>
            <Link href={"/producten/"+p.slug} className="product-image-link">
              <div className="product-image">
                <Image src={p.image} alt={p.name} fill style={{objectFit:"cover"}} sizes="(max-width:650px) 92vw, 33vw"/>
              </div>
            </Link>
            <div className="product-copy">
              <div className="eyebrow">{p.category}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="product-specs"><span>{p.speed}</span><span>{p.format}</span><span>{p.colour?"Kleur":"Zwart-wit"}</span></div>
              <div className="product-actions">
                <Link className="text-link" href={"/producten/"+p.slug}>Specificaties →</Link>
                <Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte aanvragen</Link>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>

    <section className="split-section">
      <div className="container split-grid">
        <div>
          <div className="eyebrow">HULP BIJ UW KEUZE</div>
          <h2>Twijfelt u tussen meerdere MFP's?</h2>
        </div>
        <div>
          <p className="large-copy">U hoeft niet zelf alle technische verschillen uit te zoeken. Vertel ons hoe uw organisatie print en scant. Wij helpen u de opties naast elkaar te zetten.</p>
          <Link className="btn btn-primary" href="/vergelijker">Vergelijk MFP's</Link>
          <Link className="text-link" href="/offerte">Ik wil advies →</Link>
        </div>
      </div>
    </section>
  </main>
}