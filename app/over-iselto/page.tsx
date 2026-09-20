import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata = {
  title: "Over ISELTO",
  description: "De missie, visie en werkwijze van MFP ISELTO."
};

export default function OverIselto() {
  return (
    <main>
      <section className="dark-hero">
        <div className="container hero-copy">
          <div className="eyebrow eyebrow-light">MFP ISELTO</div>
          <h1>Techniek die werkt voor uw organisatie.</h1>
          <p>
            ISELTO is gebouwd vanuit jarenlange ervaring in de printbranche.
            We combineren die praktijkkennis met moderne print-, scan- en
            documentoplossingen.
          </p>
        </div>
      </section>

      <section className="container editorial-section">
        <div className="eyebrow">ONZE MISSIE</div>
        <h2>{brand.mission}</h2>
        <p className="lead">
          Wij geloven dat een multifunctional pas echt waardevol is wanneer
          techniek, mensen en processen goed op elkaar aansluiten.
        </p>
      </section>

      <section className="split-section">
        <div className="container split-grid">
          <div>
            <div className="eyebrow">ONZE VISIE</div>
            <h2>Van printapparaat naar slimme documentpartner.</h2>
          </div>
          <div>
            <p className="large-copy">{brand.vision}</p>
            <p>{brand.promise}</p>
          </div>
        </div>
      </section>

      <section className="container editorial-section">
        <div className="eyebrow">WAAR WE VOOR STAAN</div>
        <h2>Vier uitgangspunten in alles wat we doen.</h2>
        <div className="value-grid">
          {brand.values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="strategy-section">
        <div className="container">
          <div className="eyebrow eyebrow-light">ONZE STRATEGIE</div>
          <h2>Van behoefte naar een oplossing die blijft werken.</h2>
          <p className="strategy-intro">
            Onze aanpak is bewust praktisch: eerst begrijpen, daarna kiezen,
            goed implementeren en vervolgens blijven verbeteren.
          </p>
          <div className="strategy-grid">
            {brand.strategy.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container cta-section">
        <div className="cta-panel">
          <div>
            <div className="eyebrow eyebrow-light">25 JAAR ERVARING</div>
            <h2>Benieuwd wat dit voor uw organisatie betekent?</h2>
            <p>
              Bespreek uw huidige situatie, volumes en wensen. Vanuit daar
              bepalen we samen welke oplossing past.
            </p>
          </div>
          <Link className="btn btn-light" href="/offerte">
            Plan een adviesgesprek
          </Link>
        </div>
      </section>
    </main>
  );
}
