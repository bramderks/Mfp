import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import "./refinement.css";
import "./suite.css";
import "./marketing.css";
import "@neondatabase/auth-ui/css";
import {Providers} from "./providers";

const siteUrl="https://mfp.iselto.nl";
const siteName="MFP Iselto";
const siteDescription="Zakelijke multifunctionals, printers, printsoftware, managed print en documentoplossingen voor organisaties in Nederland en de Benelux.";
const organizationJsonLd={"@context":"https://schema.org","@type":"Organization","@id":siteUrl+"/#organization","name":"Iselto","alternateName":"MFP Iselto","url":siteUrl,"logo":{"@type":"ImageObject","url":siteUrl+"/iselto-logo.svg"},"description":siteDescription,"areaServed":[{"@type":"Country","name":"Nederland"},{"@type":"Place","name":"Benelux"}],"knowsAbout":["Zakelijke multifunctionals","MFP","Zakelijke printers","Print management","Document management","OCR","Workflow software","Beveiligd printen"]};
const websiteJsonLd={"@context":"https://schema.org","@type":"WebSite","@id":siteUrl+"/#website","name":siteName,"url":siteUrl,"publisher":{"@id":siteUrl+"/#organization"},"inLanguage":"nl-NL","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":siteUrl+"/zoeken?q={search_term_string}"},"query-input":"required name=search_term_string"}};

export const metadata:Metadata={
 title:{default:"Zakelijke multifunctionals (MFP's) & printers | Iselto",template:"%s | MFP Iselto"},
 description:siteDescription,
 metadataBase:new URL(siteUrl),
 alternates:{canonical:"/"},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
 applicationName:siteName,
 authors:[{name:"Iselto"}],
 creator:"Iselto",
 publisher:"Iselto",
 category:"Business",
 formatDetection:{telephone:false,address:false,email:false},
 openGraph:{type:"website",locale:"nl_NL",url:siteUrl,siteName,title:"Zakelijke multifunctionals (MFP's) & printers | Iselto",description:siteDescription,images:[{url:"/iselto-logo.svg",alt:"Iselto zakelijke multifunctionals en printers"}]},
 twitter:{card:"summary",title:"Zakelijke multifunctionals (MFP's) & printers | Iselto",description:siteDescription},
 icons:{icon:"/icon.svg"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="nl"><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd)}}/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteJsonLd)}}/>
  <Providers><div className="topbar"><div className="container topbar-inner"><span>25 jaar ervaring in de printbranche</span><span>Persoonlijk advies · Passende techniek · Service</span></div></div>
  <header className="site-header"><div className="container header-inner">
   <Link href="/" className="logo-link" aria-label="MFP Iselto home"><Image src="/iselto-logo.svg" alt="Iselto zakelijke MFP's en printers" width={285} height={68} priority/></Link>
   <nav className="desktop-nav" aria-label="Hoofdnavigatie"><Link href="/producten">Zakelijke MFP's</Link><Link href="/mfp-kiezen">MFP kiezen</Link><Link href="/oplossingen">Oplossingen</Link><Link href="/software">Software</Link><Link href="/managed-print">Managed print</Link><Link href="/service">Service</Link><Link href="/over-iselto">Over Iselto</Link><Link className="btn btn-primary nav-cta" href="/offerte">Offerte aanvragen</Link></nav>
   <nav className="mobile-nav" aria-label="Mobiele navigatie"><Link href="/producten">MFP's</Link><Link href="/mfp-kiezen">Kiezen</Link><Link href="/zoeken">Zoeken</Link><Link className="btn btn-primary" href="/offerte">Offerte</Link></nav>
  </div></header>
  {children}
  <footer className="site-footer"><div className="container footer-grid">
   <div className="footer-brand"><div className="footer-wordmark" aria-label="MFP Iselto">MFP <span>Iselto</span></div><p>{siteDescription}</p><p className="footer-muted">25 jaar ervaring · Praktisch advies voor zakelijke print- en documentomgevingen.</p></div>
   <div><b>MFP's & printers</b><p><Link href="/producten">Alle zakelijke MFP's</Link></p><p><Link href="/producten/a4-multifunctionals">A4 multifunctionals</Link></p><p><Link href="/producten/a3-multifunctionals">A3 multifunctionals</Link></p><p><Link href="/zakelijke-printer">Zakelijke printers</Link></p><p><Link href="/kopieerapparaat">Zakelijk kopieerapparaat</Link></p></div>
   <div><b>Kiezen & financieren</b><p><Link href="/mfp-kiezen">MFP keuzehulp</Link></p><p><Link href="/vergelijker">MFP vergelijker</Link></p><p><Link href="/lease-huur-koop">MFP leasen, huren of kopen</Link></p><p><Link href="/mfp-leasen">MFP leasen</Link></p><p><Link href="/mfp-huren">MFP huren</Link></p><p><Link href="/mfp-kopen">MFP kopen</Link></p></div>
   <div><b>Oplossingen & service</b><p><Link href="/software">Print- en documentsoftware</Link></p><p><Link href="/managed-print">Managed print</Link></p><p><Link href="/oplossingen">Documentoplossingen</Link></p><p><Link href="/tco-scan">Printerparkscan & TCO</Link></p><p><Link href="/service">MFP service</Link></p><p><Link href="/branches">MFP per branche</Link></p></div>
   <div><b>Iselto</b><p><Link href="/klantverhalen">Klantverhalen</Link></p><p><Link href="/faq">Veelgestelde vragen</Link></p><p><Link href="/kennis">MFP kennis & advies</Link></p><p><Link href="/over-iselto">Over Iselto</Link></p><p><Link href="/vacatures">Vacatures</Link></p><p><Link href="/contact">Contact</Link></p></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MFP Iselto</span><span>PRINT · SCAN · MANAGE</span></div></footer>
 </Providers></body></html>;
}