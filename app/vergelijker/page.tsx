import Link from "next/link";
import {products} from "@/lib/products";

export const metadata={title:"MFP vergelijker",description:"Vergelijk de belangrijkste eigenschappen van de MFP's in het ISELTO-portfolio."};

export default function Compare(){
 const rows:Array<[string,(p:typeof products[number])=>string]>=[["Categorie",p=>p.category],["Snelheid",p=>p.speed],["Formaat",p=>p.format],["Kleur",p=>p.colour?"Kleur":"Zwart-wit"],["Belangrijkste functies",p=>p.features.slice(0,2).join(" · ")]];
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">MFP VERGELIJKER</div><h1>Leg modellen naast elkaar.</h1><p>Vergelijk de belangrijkste eigenschappen van het huidige ISELTO-portfolio. Voor de juiste configuratie kijken we daarna naar uw volumes en workflow.</p></div></section>
  <section className="container compare-section"><div className="compare-intro"><div><div className="eyebrow">OVERZICHT</div><h2>Techniek overzichtelijk naast elkaar.</h2></div><Link className="btn btn-primary" href="/offerte">Ik wil advies</Link></div>
   <div className="compare-scroll"><table className="compare-table"><thead><tr><th>Eigenschap</th>{products.map(p=><th key={p.slug}>{p.name}</th>)}</tr></thead><tbody>{rows.map(([label,get])=><tr key={label}><th>{label}</th>{products.map(p=><td key={p.slug}>{get(p)}</td>)}</tr>)}<tr className="compare-actions"><th></th>{products.map(p=><td key={p.slug}><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte</Link></td>)}</tr></tbody></table></div>
  </section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">KOMT U ER NIET UIT?</div><h2>De beste specificatie is niet altijd de beste oplossing.</h2><p>Laat ons uw printvolume, gebruikers en wensen meenemen in de keuze.</p></div><Link className="btn btn-light" href="/contact">Bespreek uw situatie</Link></div></section>
 </main>
}