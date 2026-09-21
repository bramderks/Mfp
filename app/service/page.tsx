import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata={title:"MFP service en storingsservice voor bedrijven",description:"Zakelijke MFP service met technische ondersteuning, onderhoud, supplies en een praktische servicemeldroute."};

export default async function Service({searchParams}:{searchParams:Promise<{type?:string}>}){
 const q=await searchParams;
 const allowed=["Storing melden","Toner / supplies","Tellerstand doorgeven","Onderhoud / service","Vraag over apparatuur","Anders"];
 const initial=allowed.includes(q.type||"")?q.type:"Storing melden";
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">SERVICE & SUPPORT</div><h1>Uw MFP moet gewoon blijven werken.</h1><p>Een praktische route voor storingen, toner, tellerstanden, onderhoud en vragen over uw apparatuur.</p><div className="hero-actions"><Link className="btn btn-light" href="#serviceformulier">Servicemelding doen</Link><Link className="btn btn-outline-light" href="/managed-print">Managed print</Link></div></div></section>
  <section className="container editorial-section"><div className="section-intro"><div><div className="eyebrow">DIRECTE ROUTE</div><h2>Kies wat u nodig heeft.</h2></div><p className="lead">Beschrijf uw melding zo concreet mogelijk. Na verzending komt de aanvraag binnen bij ISELTO en kunnen we de vervolgstap bepalen.</p></div>
   <div className="service-action-grid">
    <Link className="service-action" href="/service?type=Storing%20melden#serviceformulier"><strong>Storing melden</strong><span>Beschrijf het probleem en geef aan om welk apparaat het gaat.</span></Link>
    <Link className="service-action" href="/service?type=Toner%20%2F%20supplies#serviceformulier"><strong>Toner / supplies</strong><span>Vraag verbruiksmaterialen of ondersteuning aan.</span></Link>
    <Link className="service-action" href="/service?type=Tellerstand%20doorgeven#serviceformulier"><strong>Tellerstand</strong><span>Geef een tellerstand of gebruik een andere servicemelding.</span></Link>
    <Link className="service-action" href="/service?type=Onderhoud%20%2F%20service#serviceformulier"><strong>Onderhoud</strong><span>Plan of bespreek onderhoud en technische ondersteuning.</span></Link>
    <Link className="service-action" href="/service?type=Vraag%20over%20apparatuur#serviceformulier"><strong>Apparatuurvraag</strong><span>Een vraag over functies, instellingen of gebruik.</span></Link>
    <Link className="service-action" href="/contact"><strong>Algemene vraag</strong><span>Voor advies of vragen die niet onder service vallen.</span></Link>
   </div>
  </section>
  <section className="container service-form-section" id="serviceformulier"><div className="service-form-card"><div className="eyebrow">SERVICEMELDING</div><h2>{initial}</h2><p>Vul uw gegevens in en beschrijf de melding. Dit formulier is bedoeld voor zakelijke servicevragen.</p><LeadForm type="service" serviceType={initial}/></div></section>
  <section className="container editorial-section"><div className="section-intro"><div><div className="eyebrow">ONTZORGEN</div><h2>Ook preventief kunnen we veel regelen.</h2></div><p className="lead">Onderhoud, monitoring, supplies en printerparkbeheer kunnen onderdeel worden van een bredere dienstverlening.</p></div><div className="service-grid"><article className="service-card"><div className="service-number">01</div><h3>Preventief onderhoud</h3><p>Onderhoud helpt om de continuïteit van uw printomgeving te ondersteunen.</p></article><article className="service-card"><div className="service-number">02</div><h3>Monitoring</h3><p>Waar passend kunnen apparatuur en verbruik proactief worden gevolgd.</p></article><article className="service-card"><div className="service-number">03</div><h3>Supplies</h3><p>Maak toner en andere verbruiksartikelen onderdeel van uw serviceafspraken.</p></article></div></section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">CONTINUÏTEIT</div><h2>Ook uw hele printerpark onder controle?</h2><p>Bekijk Managed Print of vraag een printerparkscan aan.</p></div><Link className="btn btn-light" href="/tco-scan">Start printerparkscan</Link></div></section>
 </main>;
}