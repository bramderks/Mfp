"use client";
import {useState} from "react";
import {products} from "@/lib/products";

export default function LeadForm({type,product}:{type:"quote"|"contact";product?:string}){
  const [done,setDone]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const selected=products.find(p=>p.slug===product);

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true);setError("");
    const data=Object.fromEntries(new FormData(e.currentTarget));
    const r=await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...data,type,product:data.product||product||""})});
    setLoading(false);
    if(r.ok)setDone(true);else setError("Er ging iets mis. Controleer uw gegevens en probeer het opnieuw.");
  }

  if(done)return <div className="card success-card"><div className="eyebrow">AANVRAAG ONTVANGEN</div><h2>Bedankt voor uw aanvraag.</h2><p>We hebben uw gegevens ontvangen. We nemen persoonlijk contact met u op om uw aanvraag te bespreken.</p></div>;

  return <form onSubmit={submit} className="lead-form">
    {type==="quote" && <div className="selected-product">
      <div>
        <div className="eyebrow">MFP VAN UW KEUZE</div>
        <strong>{selected?.name || "Nog te bepalen"}</strong>
      </div>
      {selected && <Link href={"/producten/"+selected.slug}>Bekijk specificaties →</Link>}
    </div>}
    {type==="quote" && <label className="field"><span>Mijn keuze *</span><select className="input" name="product" defaultValue={product||""} required><option value="">Ik weet het nog niet — graag advies</option>{products.map(p=><option key={p.slug} value={p.slug}>{p.name} · {p.speed} · {p.format}</option>)}</select></label>}
    <div className="form-grid"><label className="field"><span>Naam *</span><input className="input" name="name" placeholder="Uw naam" required/></label><label className="field"><span>Bedrijf</span><input className="input" name="company" placeholder="Uw organisatie"/></label></div>
    <div className="form-grid"><label className="field"><span>E-mail *</span><input className="input" name="email" type="email" placeholder="uw@email.nl" required/></label><label className="field"><span>Telefoon</span><input className="input" name="phone" placeholder="Uw telefoonnummer"/></label></div>
    <label className="field"><span>Plaats</span><input className="input" name="city" placeholder="Vestigingsplaats"/></label>
    <label className="field"><span>{type==="quote"?"Uw situatie en wensen":"Uw vraag"}</span><textarea className="input" name="message" placeholder={type==="quote"?"Bijvoorbeeld aantal medewerkers, printvolume, huidige MFP of gewenste functies.":"Uw vraag"} rows={7}/></label>
    {error && <p className="form-error">{error}</p>}
    <button className="btn btn-primary form-submit" disabled={loading}>{loading?"Aanvraag wordt verstuurd…":"Offerte aanvragen"}</button>
  </form>;
}