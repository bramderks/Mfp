import Link from "next/link";
import {products} from "@/lib/products";
import {brand} from "@/lib/brand";

const stats=[["25+","jaar printkennis"],["1.000+","klanten in de Benelux"],["B2B","volledige focus"],["360°","hardware · software · service"]];

export default function Home(){
 return <main>
  <section className="home-hero">
   <div className="container hero-grid">
    <div className="hero-copy"><div className="eyebrow eyebrow-light">MFP Iselto · PRINT · SCAN · MANAGE</div><h1>Print slimmer.<br/><span>Werk beter.</span></h1><p>Zakelijke multifunctionals (MFP's), printers, printsoftware en service voor organisaties die betrouwbaar, veilig en efficiënt willen werken. Kies uit A4- en A3-oplossingen en bespreek lease, huur of koop met één aanspreekpunt voor uw complete printomgeving.</p><div className="hero-actions"><Link className="btn btn-light" href="/mfp-kiezen">Vind mijn MFP</Link><Link className="btn btn-outline-light" href="/offerte">Vraag offerte</Link></div><div className="hero-note">25 jaar ervaring in de printbranche</div></div>
    <div className="hero-product"><div className="hero-product-label">UITGELICHT</div><img src={products[1].image} alt={products[1].name} loading="eager"/><div className="hero-product-caption"><span>{products[1].category}</span><strong>{products[1].name}</strong><small>{products[1].speed} · {products[1].format}</small></div></div>
   </div>
  </section>

  <section className="stat-strip"><div className="container stat-grid">{stats.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>

  <section className="container editorial-section home-intro"><div className="section-intro"><div><div className="eyebrow">ERVARING & AANPAK</div><h2>Geen machine om de machine.</h2></div><div><p className="lead">We beginnen bij uw organisatie. Hoeveel print u? Wie gebruikt de apparatuur? Welke documenten moeten veilig blijven? En waar kan het proces slimmer?</p><Link className="text-link" href="/over-iselto">Meer over Iselto →</Link></div></div></section>

  <section className="light-product-section"><div className="container"><div className="section-head"><div><div className="eyebrow">MFP PORTFOLIO</div><h2>De juiste machine begint met de juiste vraag.</h2></div><Link className="btn btn-secondary" href="/producten">Alle MFP's bekijken</Link></div><div className="product-grid">{products.slice(0,3).map(p=><Link href={"/producten/"+p.slug} className="card product-card" key={p.slug}><div className="product-image"><img src={p.image} alt={p.name} className="product-image-element" loading="lazy"/></div><div className="product-copy"><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><p>{p.description}</p><div className="product-specs"><span>{p.speed}</span><span>{p.format}</span></div><b>Bekijk product →</b></div></Link>)}</div></div></section>

  <section className="split-section"><div className="container split-grid"><div><div className="eyebrow">ZAKELIJKE PRINTOPLOSSINGEN</div><h2>Van zakelijke MFP en printer tot documentworkflow.</h2></div><div><p className="large-copy">Een goede printomgeving draait om meer dan hardware. Iselto combineert zakelijke multifunctionals, print- en documentsoftware, managed print en service met advies over lease, huur of koop.</p><div className="feature-actions"><Link className="btn btn-primary" href="/oplossingen">Bekijk documentoplossingen</Link><Link className="text-link" href="/managed-print">Managed print →</Link><Link className="text-link" href="/software">Printsoftware →</Link></div></div></div></section>

  <section className="strategy-section"><div className="container"><div className="eyebrow eyebrow-light">ONZE WERKWIJZE</div><h2>Van behoefte naar oplossing.</h2><p className="strategy-intro">Begrijpen. Adviseren. Inrichten. Optimaliseren.</p><div className="strategy-grid">{brand.strategy.map(s=><article key={s.title}><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

  <section className="container editorial-section"><div className="seo-article"><div className="eyebrow">MFP ADVIES</div><h2>Zakelijke MFP kiezen? Begin bij uw werkproces.</h2><p>Het juiste model hangt af van printvolume, aantal gebruikers, A4 of A3, kleurgebruik, scansnelheid, beveiliging en gewenste workflow. Gebruik onze <Link className="text-link" href="/mfp-kiezen">MFP keuzehulp</Link>, bekijk de <Link className="text-link" href="/vergelijker">MFP vergelijker</Link> of lees de <Link className="text-link" href="/seo-mfp">complete gids voor zakelijke multifunctionals</Link>.</p></div></section><section className="container editorial-section"><div className="feature-banner"><div><div className="eyebrow">HULP BIJ UW KEUZE</div><h2>Weet u al welke MFP u nodig heeft?</h2><p>Bekijk specificaties, vergelijk modellen of vraag direct een offerte aan.</p></div><div className="feature-actions"><Link className="btn btn-primary" href="/producten#mfp-kiezen">Vind mijn MFP</Link><Link className="text-link" href="/vergelijker">Vergelijk modellen →</Link><Link className="text-link" href="/offerte">Ik wil advies →</Link></div></div></section>
 </main>
}