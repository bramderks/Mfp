import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export default async function Quote({searchParams}:{searchParams:Promise<{product?:string}>}){
  const q=await searchParams;
  return <main>
    <section className="dark-hero">
      <div className="container hero-copy">
        <div className="eyebrow eyebrow-light">OFFERTE & ADVIES</div>
        <h1>Vraag een offerte aan voor uw MFP.</h1>
        <p>Kies een model en vertel ons kort wat u nodig heeft. We nemen persoonlijk contact op om de configuratie en dienstverlening goed af te stemmen.</p>
      </div>
    </section>
    <section className="container quote-section">
      <div className="quote-intro">
        <div className="eyebrow">UW KEUZE</div>
        <h2>Welke MFP wilt u aanvragen?</h2>
        <p>U kunt hieronder direct een model selecteren. Wilt u eerst advies? Kies dan voor “Ik weet het nog niet”.</p>
      </div>
      <LeadForm type="quote" product={q.product}/>
    </section>
  </main>
}