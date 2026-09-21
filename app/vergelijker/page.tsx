import Link from "next/link";
import MfpCompare from "@/components/MfpCompare";

export const metadata={title:"MFP vergelijker",description:"Vergelijk zakelijke MFP's van ISELTO op snelheid, formaat, kleur, scanmogelijkheden, papiercapaciteit en workflowfuncties."};

export default function Compare(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">MFP VERGELIJKER</div><h1>Leg maximaal drie modellen naast elkaar.</h1><p>Vergelijk de belangrijkste technische eigenschappen en ga daarna door naar de keuzehulp of een persoonlijk advies.</p><div className="hero-actions"><Link className="btn btn-light" href="/mfp-kiezen">MFP keuzehulp</Link><Link className="btn btn-outline-light" href="/offerte">Ik wil advies</Link></div></div></section>
  <section className="container compare-section"><MfpCompare/></section>
  <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">KOMT U ER NIET UIT?</div><h2>Specificaties zijn pas het begin.</h2><p>Laat ons uw printvolume, gebruikers, documentstromen en contractwensen meenemen.</p></div><Link className="btn btn-light" href="/contact">Bespreek uw situatie</Link></div></section>
 </main>;
}