import Link from "next/link";
import {notFound} from "next/navigation";
import {products} from "@/lib/products";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(x=>x.slug===slug);return p?{title:p.name,description:p.description}:{};}

export default async function ProductDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=products.find(x=>x.slug===slug);if(!p)notFound();
 return <main>
  <section className="product-detail-hero"><div className="container product-detail-grid"><div className="product-detail-image"><img src={p.image} alt={p.name} className="product-detail-image-element" loading="eager"/></div><div className="product-detail-copy"><div className="eyebrow">{p.category} · {p.manufacturer}</div><h1>{p.name}</h1><p>{p.description}</p><div className="product-detail-stats"><span>{p.speed}</span><span>{p.format}</span><span>{p.colour?"Kleur":"Zwart-wit"}</span></div><div className="product-detail-actions"><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte aanvragen</Link><Link className="btn btn-secondary" href="/vergelijker">Vergelijken</Link></div><a className="source-link" href={p.brochurePath} target="_blank" rel="noreferrer">Brochure / documentatie bekijken →</a></div></div></section>
  <section className="container product-spec-section"><div className="eyebrow">SPECIFICATIES</div><h2>De belangrijkste eigenschappen.</h2><div className="spec-table">{p.specs.map(s=><div className="spec-row" key={s.label}><strong>{s.label}</strong><span>{s.value}</span></div>)}</div></section>
  <section className="product-feature-section"><div className="container"><div className="eyebrow">MOGELIJKHEDEN</div><h2>Functies en mogelijkheden.</h2><div className="feature-grid">{p.features.map((f,i)=><div className="card feature-card" key={f}><span>{String(i+1).padStart(2,"0")}</span><strong>{f}</strong></div>)}</div></div></section>
  <section className="container cta-section product-cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">DEZE MFP OVERWEGEN?</div><h2>Laat ons de juiste configuratie bepalen.</h2><p>We kunnen meedenken over opties, volumes, inrichting en dienstverlening.</p></div><Link className="btn btn-light" href={"/offerte?product="+p.slug}>Vraag offerte aan</Link></div></section>
 </main>
}