import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata:Metadata={
 title:{default:"MFP ISELTO | Print · Scan · Manage",template:"%s | MFP ISELTO"},
 description:"MFP ISELTO helpt organisaties met professionele multifunctionals, printers, documentoplossingen en persoonlijke service.",
 metadataBase:new URL("https://mfp.iselto.nl")
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <><div className="topbar"><div className="container topbar-inner"><span>25 jaar ervaring in de printbranche</span><span>Persoonlijk advies · Passende techniek · Service</span></div></div>
 <header className="site-header"><div className="container header-inner"><Link href="/" className="logo-link" aria-label="MFP ISELTO home"><Image src="/iselto-logo.svg" alt="MFP ISELTO" width={285} height={68} priority/></Link>
 <nav className="desktop-nav" aria-label="Hoofdnavigatie"><Link href="/producten">Producten</Link><Link href="/oplossingen">Oplossingen</Link><Link href="/diensten">Diensten</Link><Link href="/vergelijker">Vergelijken</Link><Link href="/over-iselto">Over ISELTO</Link><Link href="/zoeken">Zoeken</Link><Link className="btn btn-primary nav-cta" href="/offerte">Offerte aanvragen</Link></nav>
 <nav className="mobile-nav" aria-label="Mobiele navigatie"><Link href="/producten">Producten</Link><Link href="/oplossingen">Oplossingen</Link><Link href="/zoeken">Zoeken</Link><Link className="btn btn-primary" href="/offerte">Offerte</Link></nav></div></header>{children}
 <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Image src="/iselto-logo.svg" alt="MFP ISELTO" width={240} height={57} className="footer-logo"/><p>Slimmer printen, scannen en documentstromen organiseren.</p><p className="footer-muted">25 jaar ervaring in de printbranche.</p></div><div><b>Producten</b><p><Link href="/producten">MFP portfolio</Link></p><p><Link href="/vergelijker">MFP vergelijker</Link></p><p><Link href="/downloads">Downloads</Link></p></div><div><b>Oplossingen</b><p><Link href="/oplossingen">Print & document</Link></p><p><Link href="/diensten">Service & support</Link></p><p><Link href="/zoeken">Zoeken</Link></p></div><div><b>ISELTO</b><p><Link href="/over-iselto">Over ISELTO</Link></p><p><Link href="/contact">Contact</Link></p><p><Link href="/offerte">Offerte aanvragen</Link></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MFP ISELTO</span><span>PRINT · SCAN · MANAGE</span></div></footer></>;
}