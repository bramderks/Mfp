"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {products} from "@/lib/products";

function spec(p:typeof products[number],label:string){
  return p.specs.find(s=>s.label.toLowerCase().includes(label.toLowerCase()))?.value || "Zie productspecificaties";
}

export default function MfpCompare(){
  const initial=products.slice(0,3).map(p=>p.slug);
  const [selected,setSelected]=useState<string[]>(initial);
  const toggle=(slug:string)=>{
    setSelected(current=>{
      if(current.includes(slug)) return current.filter(x=>x!==slug);
      if(current.length>=3) return current;
      return [...current,slug];
    });
  };
  const chosen=useMemo(()=>selected.map(slug=>products.find(p=>p.slug===slug)).filter(Boolean) as typeof products,[selected]);

  return <div className="compare-tool">
    <div className="compare-picker">
      <div>
        <div className="eyebrow">KIES TOT 3 MODELLEN</div>
        <h3>Vergelijk wat voor u relevant is.</h3>
        <p>Selecteer maximaal drie modellen. De vergelijking is technisch; voor een advies op basis van uw volumes en workflow kunt u de keuzehulp gebruiken.</p>
      </div>
      <span className="compare-count">{selected.length}/3 geselecteerd</span>
    </div>
    <div className="compare-model-grid">
      {products.map(p=><button type="button" key={p.slug} className={selected.includes(p.slug)?"compare-model active":"compare-model"} onClick={()=>toggle(p.slug)} aria-pressed={selected.includes(p.slug)}>
        <img src={p.image} alt="" loading="lazy"/>
        <span><strong>{p.name}</strong><small>{p.speed} · {p.format} · {p.colour?"Kleur":"Zwart-wit"}</small></span>
        <b>{selected.includes(p.slug)?"Geselecteerd":"Vergelijk"}</b>
      </button>)}
    </div>
    <div className="compare-scroll">
      <table className="compare-table compare-table-focused">
        <thead><tr><th>Eigenschap</th>{chosen.map(p=><th key={p.slug}>{p.name}</th>)}</tr></thead>
        <tbody>
          <tr><th>Snelheid</th>{chosen.map(p=><td key={p.slug}>{p.speed}</td>)}</tr>
          <tr><th>Formaat</th>{chosen.map(p=><td key={p.slug}>{p.format}</td>)}</tr>
          <tr><th>Kleur</th>{chosen.map(p=><td key={p.slug}>{p.colour?"Kleur":"Zwart-wit"}</td>)}</tr>
          <tr><th>Type</th>{chosen.map(p=><td key={p.slug}>{p.category}</td>)}</tr>
          <tr><th>Scannen</th>{chosen.map(p=><td key={p.slug}>{spec(p,"scansnelheid")}</td>)}</tr>
          <tr><th>Papierinvoer</th>{chosen.map(p=><td key={p.slug}>{spec(p,"papierinvoer")}</td>)}</tr>
          <tr><th>Beveiliging / workflow</th>{chosen.map(p=><td key={p.slug}>{p.features.filter(f=>/security|secure|cloud|tpm|tls|hy|data/i.test(f)).slice(0,3).join(" · ")||p.features.slice(0,2).join(" · ")}</td>)}</tr>
          <tr><th>Belangrijkste functies</th>{chosen.map(p=><td key={p.slug}>{p.features.slice(0,4).join(" · ")}</td>)}</tr>
          <tr className="compare-actions"><th></th>{chosen.map(p=><td key={p.slug}><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte</Link> <Link className="text-link" href={"/producten/"+p.slug}>Specificaties →</Link></td>)}</tr>
        </tbody>
      </table>
    </div>
  </div>;
}
