import Link from "next/link";
import {products} from "@/lib/products";
import {brand} from "@/lib/brand";

export default function Home(){
  return <main>
    <section className="dark-hero home-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">MFP ISELTO · PRINT · SCAN · MANAGE</div>
          <h1>Print slimmer.<br/>Werk beter.</h1>
          <p>Professionele multifunctionals, printers en documentoplossingen voor organisaties die betrouwbaar en efficiënt willen werken.</p>
          <div className="hero-actions">
            <Link className="btn btn-light" href="/producten">Bekijk producten</Link>
            <Link className="btn btn-outline-light" href="/offerte">Vraag advies</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={products[1].image} alt="Professionele multifunctional" className="home-product-image" loading="eager"/>
        </div>
      </div>
    </section>

    <section className="container editorial-section">
      <div className="eyebrow">ERVARING & AANPAK</div>
      <h2>{brand.experience}. Kennis die we vertalen naar een oplossing die past.</h2>
      <p className="lead">Geen machine om de machine, maar een oplossing die aansluit op uw volumes, processen, medewerkers en toekomstplannen.</p>
      <Link className="text-link" href="/over-iselto">Ontdek onze missie, visie en strategie →</Link>
    </section>

    <section className="split-section">
      <div className="container split-grid">
        <div><div className="eyebrow">ONZE MISSIE</div><h2>Van printapparaat naar een oplossing die dagelijks waarde toevoegt.</h2></div>
        <div><p className="large-copy">{brand.mission}</p><Link className="btn btn-primary" href="/oplossingen">Bekijk onze oplossingen</Link></div>
      </div>
    </section>

    <section className="container editorial-section">
      <div className="eyebrow">PRODUCTEN</div>
      <h2>De juiste MFP voor uw organisatie.</h2>
      <p className="lead">Van compacte A4-oplossingen tot krachtige A3-systemen. Bekijk, vergelijk en vraag gericht advies.</p>
      <div className="product-grid">{products.slice(0,3).map(p=><Link href={"/producten/"+p.slug} className="card" key={p.slug}><div className="product-image"><img src={p.image} alt={p.name} className="product-image-element" loading="lazy"/></div><div className="product-copy"><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><p>{p.description}</p><b>Bekijk product →</b></div></Link>)}</div>
    </section>

    <section className="strategy-section">
      <div className="container">
        <div className="eyebrow eyebrow-light">ONZE WERKWIJZE</div>
        <h2>Van behoefte naar oplossing.</h2>
        <p className="strategy-intro">Begrijpen. Adviseren. Inrichten. Optimaliseren.</p>
        <div className="strategy-grid">{brand.strategy.map(step=><article key={step.title}><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>

    <section className="container cta-section">
      <div className="cta-panel">
        <div><div className="eyebrow eyebrow-light">PERSOONLIJK ADVIES</div><h2>Welke MFP past bij u?</h2><p>Vertel ons wat u nodig heeft. Wij helpen u de juiste oplossing samenstellen.</p></div>
        <Link className="btn btn-light" href="/offerte">Start adviesaanvraag</Link>
      </div>
    </section>
  </main>
}