import Link from "next/link";
import {products} from "@/lib/products";
import {brand} from "@/lib/brand";

const stats=[["25+","jaar ervaring"],["A4 & A3","MFP portfolio"],["1","persoonlijk aanspreekpunt"],["360°","print & document"]];

export default function Home(){
 return <main>
  <section className="home-hero">
   <div className="container hero-grid">
    <div className="hero-copy"><div className="eyebrow eyebrow-light">MFP ISELTO · PRINT · SCAN · MANAGE</div><h1>Print slimmer.<br/><span>Werk beter.</span></h1><p>Professionele multifunctionals en documentoplossingen voor organisaties die betrouwbaar, veilig en efficiënt willen werken.</p><div className="hero-actions"><Link className="btn btn-light" href="/producten">Bekijk MFP's</Link><Link className="btn btn-outline-light" href="/offerte">Vraag advies</Link></div><div className="hero-note">25 jaar ervaring in de printbranche</div></div>
    <div className="hero-product"><div className="hero-product-label">UITGELICHT</div><img src={products[1].image} alt={products[1].name} loading="eager"/><div className="hero-product-caption"><span>{products[1].category}</span><strong>{products[1].name}</strong><small>{products[1].speed} · {products[1].format}</small></div></div>
   </div>
  </section>

  <section className="stat-strip"><div className="container stat-grid">{stats.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

  <section className="container editorial-section home-intro"><div className="section-intro"><div><div className="eyebrow">ERVARING & AANPAK</div><h2>Geen machine om de machine.</h2></div><div><p className="lead">We beginnen bij uw organisatie. Hoeveel print u? Wie gebruikt de apparatuur? Welke documenten moeten veilig blijven? En waar kan het proces slimmer?</p><Link className="text-link" href="/over-iselto">Meer over ISELTO →</Link></div></div></section>

  <section className="light-product-section"><div className="container"><div className="section-head"><div><div className="eyebrow">MFP PORTFOLIO</div><h2>De juiste machine begint met de juiste vraag.</h2></div><Link className="btn btn-secondary" href="/producten">Alle MFP's bekijken</Link></div><div className="product-grid">{products.slice(0,3).map(p=><Link href={"/producten/"+p.slug} className="card product-card" key={p.slug}><div className="product-image"><img src={p.image} alt={p.name} className="product-image-element" loading="lazy"/></div><div className="product-copy"><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><p>{p.description}</p><div className="product-specs"><span>{p.speed}</span><span>{p.format}</span></div><b>Bekijk product →</b></div></Link>)}</div></div></section>

  <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">ONZE MISSIE</div><h2>Van printapparaat naar een oplossing die dagelijks waarde toevoegt.</h2></div><div><p className="large-copy">{brand.mission}</p><Link className="btn btn-primary" href="/oplossingen">Ontdek oplossingen</Link></div></div></section>

  <section className="strategy-section"><div className="container"><div className="eyebrow eyebrow-light">ONZE WERKWIJZE</div><h2>Van behoefte naar oplossing.</h2><p className="strategy-intro">Begrijpen. Adviseren. Inrichten. Optimaliseren.</p><div className="strategy-grid">{brand.strategy.map(s=><article key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

  <section className="container editorial-section"><div className="feature-banner"><div><div className="eyebrow">HULP BIJ UW KEUZE</div><h2>Weet u al welke MFP u nodig heeft?</h2><p>Bekijk specificaties, vergelijk modellen of vraag direct een offerte aan.</p></div><div className="feature-actions"><Link className="btn btn-primary" href="/vergelijker">Vergelijk MFP's</Link><Link className="text-link" href="/offerte">Ik wil advies →</Link></div></div></section>
 </main>
}