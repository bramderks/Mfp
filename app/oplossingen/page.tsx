import Link from "next/link";

const solutions = [
  {num:"01", title:"Beveiligd printen", text:"Gevoelige documenten blijven onder controle met gebruikersauthenticatie, printvrijgave en duidelijke toegangsrechten.", tags:["Follow-me printing","Authenticatie","Print release"]},
  {num:"02", title:"Slimmer scannen", text:"Maak van scannen een workflow. Routeer documenten naar e-mail, mappen, cloudomgevingen of andere bedrijfsprocessen.", tags:["Scan workflows","OCR","Document routing"]},
  {num:"03", title:"Cloud & mobiel werken", text:"Laat medewerkers veilig printen en scannen vanaf de werkplek, laptop of mobiele omgeving zonder onnodige tussenstappen.", tags:["Mobiel printen","Cloud","Hybride werken"]},
  {num:"04", title:"Kosten & beheer", text:"Krijg grip op volumes, verbruik en apparatuur. Centraal beheer maakt de printomgeving overzichtelijker.", tags:["Monitoring","Tellerstanden","Rapportage"]},
  {num:"05", title:"Document management", text:"Breng papier en digitale documenten samen in een werkwijze die past bij uw organisatie en informatiebehoefte.", tags:["Archiveren","Documentstromen","Automatisering"]},
  {num:"06", title:"Duurzaam printen", text:"Een passende machine op de juiste plek, minder verspilling en inzicht in gebruik vormen samen een efficiëntere printomgeving.", tags:["Efficiëntie","Verbruik","Lifecycle"]},
];

export const metadata={title:"Oplossingen",description:"Beveiligd printen, scanworkflows, cloud, document management en beheer van uw printomgeving."};

export default function Solutions(){
  return <main>
    <section className="dark-hero solution-hero">
      <div className="container hero-copy">
        <div className="eyebrow eyebrow-light">OPLOSSINGEN</div>
        <h1>Meer uit uw documenten.</h1>
        <p>Een multifunctional is het begin. Met de juiste software, inrichting en begeleiding wordt uw documentomgeving een onderdeel van hoe uw organisatie werkt.</p>
        <div className="hero-actions"><Link className="btn btn-light" href="/offerte">Bespreek uw situatie</Link><Link className="btn btn-outline-light" href="/producten">Bekijk MFP's</Link></div>
      </div>
    </section>

    <section className="container editorial-section">
      <div className="section-intro">
        <div><div className="eyebrow">VAN APPARAAT NAAR WORKFLOW</div><h2>Printen, scannen en beheren als één geheel.</h2></div>
        <p className="lead">Wij kijken niet alleen naar de machine. We kijken naar wie ermee werkt, wat er met documenten gebeurt en waar het proces slimmer, veiliger of eenvoudiger kan.</p>
      </div>
      <div className="solution-grid">{solutions.map(s=><article className="solution-card" key={s.num}><div className="solution-number">{s.num}</div><h3>{s.title}</h3><p>{s.text}</p><div className="tag-list">{s.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
    </section>

    <section className="split-section">
      <div className="container split-grid">
        <div><div className="eyebrow">PRAKTISCH ADVIES</div><h2>Niet meer software dan u nodig heeft.</h2></div>
        <div><p className="large-copy">De juiste oplossing is niet automatisch de uitgebreidste. We beginnen bij uw dagelijkse praktijk en bouwen alleen verder waar dat echt waarde toevoegt.</p><Link className="btn btn-primary" href="/contact">Bespreek uw workflow</Link></div>
      </div>
    </section>

    <section className="container cta-section"><div className="cta-panel"><div><div className="eyebrow eyebrow-light">ISELTO AANPAK</div><h2>Wat kan er bij u slimmer?</h2><p>Vertel ons hoe uw organisatie print en scant. We brengen de mogelijkheden overzichtelijk in kaart.</p></div><Link className="btn btn-light" href="/offerte">Vraag advies aan</Link></div></section>
  </main>
}