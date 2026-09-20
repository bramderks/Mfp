import type {Metadata} from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata:Metadata={
  title:{default:"MFP ISELTO | Multifunctionals en documentoplossingen",template:"%s | MFP ISELTO"},
  description:"MFP ISELTO helpt organisaties met professionele multifunctionals, printers, documentoplossingen en persoonlijke service."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <>
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="MFP ISELTO home">
          <Image src="/iselto-logo.svg" alt="MFP ISELTO" width={285} height={68} priority />
        </Link>
        <nav className="desktop-nav">
          <Link href="/producten">Producten</Link>
          <Link href="/oplossingen">Oplossingen</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/vergelijker">Vergelijken</Link>
          <Link href="/over-iselto">Over ISELTO</Link>
          <Link href="/zoeken">Zoeken</Link>
          <Link className="btn btn-primary" href="/offerte">Offerte aanvragen</Link>
        </nav>
        <nav className="mobile-nav">
          <Link href="/producten">Producten</Link>
          <Link href="/over-iselto">Over</Link>
          <Link href="/zoeken">Zoeken</Link>
          <Link className="btn btn-primary" href="/offerte">Offerte</Link>
        </nav>
      </div>
    </header>
    {children}
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src="/iselto-logo.svg" alt="MFP ISELTO" width={240} height={57} className="footer-logo" />
          <p>Slimmer printen, scannen en documentstromen organiseren.</p>
          <p>25 jaar ervaring in de printbranche.</p>
        </div>
        <div><b>Producten</b><p><Link href="/producten">Multifunctionals</Link></p><p><Link href="/vergelijker">Vergelijken</Link></p></div>
        <div><b>Service</b><p><Link href="/oplossingen">Oplossingen</Link></p><p><Link href="/diensten">Diensten</Link></p></div>
        <div><b>ISELTO</b><p><Link href="/over-iselto">Missie & visie</Link></p><p><Link href="/contact">Contact</Link></p></div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} MFP ISELTO · Print · Scan · Manage</div>
    </footer>
  </>
}