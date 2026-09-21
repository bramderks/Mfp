"use client";

import {useMemo,useState} from "react";
import Link from "next/link";
import {products} from "@/lib/products";

type Volume="unknown"|"low"|"medium"|"high"|"very-high";
type Speed="any"|"20-40"|"40+";
type Users="any"|"1-5"|"6-15"|"16-40"|"40+";
type Priority="any"|"security"|"speed"|"scan"|"cost";
type Function="print"|"scan"|"copy";

const volumeLabel:Record<Volume,string>={unknown:"Weet ik niet",low:"0–1.000 pagina's",medium:"1.000–5.000 pagina's",high:"5.000–20.000 pagina's","very-high":"20.000+ pagina's"};

function ppm(p:string){const m=p.match(/(\\d+)\\s*ppm/);return m?Number(m[1]):0;}

export default function MfpSelector(){
 const [volume,setVolume]=useState<Volume>("unknown");const [speed,setSpeed]=useState<Speed>("any");const [users,setUsers]=useState<Users>("any");const [priority,setPriority]=useState<Priority>("any");const [functions,setFunctions]=useState<Function[]>(["print"]);const [format,setFormat]=useState<"any"|"A4"|"A3">("any");const [colour,setColour]=useState<"any"|"colour"|"mono">("any");
 const toggleFunction=(f:Function)=>setFunctions(current=>current.includes(f)?current.filter(x=>x!==f):[...current,f]);
 const matches=useMemo(()=>{
  const scored=products.map(p=>{const pppm=ppm(p.speed);let score=0;const reasons:string[]=[];
   if(format==="any"||p.format.startsWith(format)){score+=2;if(format!=="any")reasons.push(format)}
   if(colour==="any"||(colour==="colour"&&p.colour)||(colour==="mono"&&!p.colour)){score+=2;if(colour!=="any")reasons.push(colour==="colour"?"kleur":"zwart-wit")}
   if(speed==="any"||(speed==="20-40"&&pppm>=20&&pppm<=40)||(speed==="40+"&&pppm>=40)){score+=2;if(speed!=="any")reasons.push(speed==="40+"?"40+ ppm":"20–40 ppm")}
   if(volume==="low"&&pppm<=40){score+=1}if(volume==="medium"&&pppm>=25&&pppm<=50){score+=2}if(volume==="high"&&pppm>=35){score+=2}if(volume==="very-high"&&pppm>=60){score+=3}
   if(volume!=="unknown")reasons.push(volumeLabel[volume]);
   if(users==="1-5"&&pppm<=40){score+=1}if(users==="6-15"&&pppm>=25){score+=1}if(users==="16-40"&&pppm>=35){score+=2}if(users==="40+"&&pppm>=50){score+=2}if(users!=="any")reasons.push(users+" gebruikers");
   if(priority==="security"&&p.features.some(f=>/security|secure|tpm|tls/i.test(f))){score+=3;reasons.push("beveiliging")}
   if(priority==="speed"&&pppm>=40){score+=3;reasons.push("snelheid")}
   if(priority==="scan"&&p.features.some(f=>/scan|ipm/i.test(f))){score+=3;reasons.push("scan")}
   if(priority==="cost"&&pppm<=45){score+=2;reasons.push("efficiënt formaat")}
   if(functions.includes("scan")){score+=1;reasons.push("scannen")}if(functions.includes("copy")){score+=1;reasons.push("kopiëren")}
   return {...p,score,reasons};
  }).sort((a,b)=>b.score-a.score);
  const active=volume!=="unknown"||speed!=="any"||users!=="any"||priority!=="any"||format!=="any"||colour!=="any"||functions.length>1;
  return active?scored.slice(0,6):products.slice(0,6).map(p=>({...p,score:0,reasons:[] as string[]}));
 },[volume,speed,users,priority,functions,format,colour]);
 return <section className="selector-section" id="mfp-kiezen"><div className="selector-shell"><div className="selector-head"><div><div className="eyebrow eyebrow-light">MFP KEUZEHULP</div><h2>Vind een MFP op basis van uw werksituatie.</h2><p>Beantwoord vijf praktische vragen. De uitkomst is een eerste selectie; we kunnen daarna volumes, workflow, beveiliging en service verder verfijnen.</p></div><Link className="btn btn-light" href="/offerte">Liever persoonlijk advies</Link></div>
 <div className="selector-fields"><label><span>Printvolume per maand</span><select className="input" value={volume} onChange={e=>setVolume(e.target.value as Volume)}>{Object.entries(volumeLabel).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></label><label><span>Gewenste snelheid</span><select className="input" value={speed} onChange={e=>setSpeed(e.target.value as Speed)}><option value="any">Maakt niet uit</option><option value="20-40">20–40 ppm</option><option value="40+">40+ ppm</option></select></label><label><span>Aantal gebruikers</span><select className="input" value={users} onChange={e=>setUsers(e.target.value as Users)}><option value="any">Weet ik niet</option><option value="1-5">1–5</option><option value="6-15">6–15</option><option value="16-40">16–40</option><option value="40+">40+</option></select></label><label><span>Papierformaat</span><select className="input" value={format} onChange={e=>setFormat(e.target.value as "any"|"A4"|"A3")}><option value="any">A4 of A3</option><option value="A4">A4</option><option value="A3">A3</option></select></label><label><span>Print in kleur?</span><select className="input" value={colour} onChange={e=>setColour(e.target.value as "any"|"colour"|"mono")}><option value="any">Kleur of zwart-wit</option><option value="colour">Kleur</option><option value="mono">Zwart-wit</option></select></label><label><span>Belangrijkste prioriteit</span><select className="input" value={priority} onChange={e=>setPriority(e.target.value as Priority)}><option value="any">Nog niet bepaald</option><option value="security">Beveiliging</option><option value="speed">Snelheid</option><option value="scan">Scannen</option><option value="cost">Efficiëntie</option></select></label></div>
 <div className="selector-checks"><span>Wat moet de MFP kunnen?</span>{(["print","scan","copy"] as Function[]).map(f=><button type="button" key={f} className={functions.includes(f)?"selector-chip active":"selector-chip"} onClick={()=>toggleFunction(f)}>{f==="print"?"Printen":f==="scan"?"Scannen":"Kopiëren"}</button>)}</div>
 <div className="selector-results"><div className="selector-results-head"><div><div className="eyebrow eyebrow-light">PASSENDE MODELLEN</div><strong>{matches.length} modellen in beeld</strong></div><span>De uitkomst is geen offerte of definitieve productkeuze. Voor een definitief advies kijken we ook naar scanvolume, afwerking, beveiliging en werkplek.</span></div><div className="selector-result-grid">{matches.map(p=><article className="selector-result" key={p.slug}><div className="selector-result-image"><img src={p.image} alt={p.name}/></div><div><div className="eyebrow">{p.category}</div><h3>{p.name}</h3><div className="product-specs"><span>{p.speed}</span><span>{p.format}</span><span>{p.colour?"Kleur":"Zwart-wit"}</span></div>{p.reasons.length>0&&<p className="selector-reasons">{p.reasons.slice(0,5).join(" · ")}</p>}<div className="selector-result-actions"><Link className="text-link" href={"/producten/"+p.slug}>Specificaties →</Link><Link className="btn btn-primary" href={"/offerte?product="+p.slug}>Offerte</Link></div></div></article>)}</div></div></div></section>;
}
