import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {getProduct,products} from "@/lib/products";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=getProduct(slug);
  return p?{title:p.name,description:p.description}:{title:"MFP"};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p=getProduct(slug); if(!p)return notFound();
  return <main>
    <section className="product-detail-hero">
      <div className="container product-detail-grid">
        <div className="product-detail-image"><Image src={p.image} alt={p.name} fill priority sizes="(max-width:900px) 92vw, 50vw" style={{objectFit:"contain"}}/></div>
        <div className="product-detail-copy">
          <div className="eyebrow">{p.manufacturer} · {p.category}</div>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <div className="product-detail-stats"><span>{p.speed}</span><span>{p.format}</span><span>{p.colour?"Kleur":"Zwart-wit"}</span></div>
          <div className="product-detail-actions"><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte aanvragen</Link><a className="btn btn-secondary" href={p.brochurePath} target="_blank" rel="noreferrer">{p.brochurePath.toLowerCase().includes(".pdf")?"Brochure downloaden":"Documentatie bekijken"}</a></div>
          <a className="source-link" href={p.sourceUrl} target="_blank" rel="noreferrer">Bekijk productinformatie bij Kyocera →</a>
        </div>
      </div>
    </section>
    <section className="container product-spec-section">
      <div className="eyebrow">TECHNISCHE SPECIFICATIES</div>
      <h2>Belangrijkste specificaties</h2>
      <div className="spec-table">{p.specs.map(s=><div className="spec-row" key={s.label}><strong>{s.label}</strong><span>{s.value}</span></div>)}</div>
    </section>
    <section className="container product-feature-section">
      <div className="eyebrow">KENMERKEN</div>
      <h2>Wat deze MFP biedt</h2>
      <div className="feature-grid">{p.features.map(f=><div className="card feature-card" key={f}><span>✓</span><strong>{f}</strong></div>)}</div>
    </section>
    <section className="split-section product-cta-section"><div className="container split-grid"><div><div className="eyebrow">ISELTO ADVIES</div><h2>Past deze MFP bij uw organisatie?</h2></div><div><p className="large-copy">Specificaties zijn een goed begin. Wij kijken daarnaast naar uw printvolume, gebruikers, scanworkflows, beveiliging en gewenste dienstverlening.</p><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Vraag een offerte aan</Link></div></div></section>
  </main>;
}
