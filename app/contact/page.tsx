import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export const metadata={title:"Contact",description:"Neem contact op met MFP Iselto voor advies over multifunctionals, print en documentoplossingen.",alternates:{canonical:"/contact"},openGraph:{type:"website",title:"Contact",description:"Neem contact op met MFP Iselto voor advies over multifunctionals, print en documentoplossingen.",url:"https://mfp.iselto.nl/contact"};

export default function Contact(){
 return <main>
  <section className="dark-hero"><div className="container hero-copy"><div className="eyebrow eyebrow-light">CONTACT</div><h1>We denken graag met u mee.</h1><p>Een vraag over een MFP, documentworkflow, service of uw huidige printomgeving? Laat uw gegevens en vraag achter.</p></div></section>
  <section className="container contact-section"><div className="contact-grid"><div className="contact-intro"><div className="eyebrow">PERSOONLIJK CONTACT</div><h2>Vertel waar u tegenaan loopt.</h2><p>Hoe meer we weten over uw organisatie en situatie, hoe gerichter we kunnen meedenken. Een korte omschrijving is al voldoende.</p><div className="contact-points"><div><strong>Productadvies</strong><span>Hulp bij MFP-keuze en configuratie.</span></div><div><strong>Oplossingen</strong><span>Print, scan, documentflows en beheer.</span></div><div><strong>Service</strong><span>Ondersteuning en optimalisatie van uw omgeving.</span></div></div><Link className="text-link" href="/producten">Bekijk eerst het MFP-portfolio →</Link></div><div className="contact-form-wrap"><LeadForm type="contact"/></div></div></section>
 </main>
}