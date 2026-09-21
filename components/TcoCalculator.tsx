"use client";

import {useMemo,useState} from "react";
import Link from "next/link";

const euro=(value:number)=>new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(value);

export default function TcoCalculator(){
  const [machines,setMachines]=useState(3);
  const [monthlyLease,setMonthlyLease]=useState(450);
  const [monthlyPrint,setMonthlyPrint]=useState(650);
  const [monthlyService,setMonthlyService]=useState(275);
  const [monthlySupplies,setMonthlySupplies]=useState(175);
  const result=useMemo(()=>{
    const monthly=monthlyLease+monthlyPrint+monthlyService+monthlySupplies;
    return {monthly,annual:monthly*12,perMachine:monthly/machines};
  },[machines,monthlyLease,monthlyPrint,monthlyService,monthlySupplies]);

  return <div className="tco-tool">
    <div className="tco-fields">
      <label className="field"><span>Aantal printers / MFP's</span><input className="input" type="number" min={1} max={200} value={machines} onChange={e=>setMachines(Math.max(1,Math.min(200,Number(e.target.value)||1)))}/></label>
      <label className="field"><span>Lease / afschrijving per maand</span><input className="input" type="number" min={0} step={25} value={monthlyLease} onChange={e=>setMonthlyLease(Math.max(0,Number(e.target.value)||0))}/></label>
      <label className="field"><span>Printkosten per maand</span><input className="input" type="number" min={0} step={25} value={monthlyPrint} onChange={e=>setMonthlyPrint(Math.max(0,Number(e.target.value)||0))}/></label>
      <label className="field"><span>Service / onderhoud per maand</span><input className="input" type="number" min={0} step={25} value={monthlyService} onChange={e=>setMonthlyService(Math.max(0,Number(e.target.value)||0))}/></label>
      <label className="field"><span>Toner / supplies per maand</span><input className="input" type="number" min={0} step={25} value={monthlySupplies} onChange={e=>setMonthlySupplies(Math.max(0,Number(e.target.value)||0))}/></label>
    </div>
    <div className="tco-result">
      <div><span>Indicatieve maandlast</span><strong>{euro(result.monthly)}</strong></div>
      <div><span>Indicatieve jaarlast</span><strong>{euro(result.annual)}</strong></div>
      <div><span>Per apparaat / maand</span><strong>{euro(result.perMachine)}</strong></div>
    </div>
    <div className="tco-note"><strong>Dit is een rekentool, geen offerte.</strong><span>Vul uw eigen bedragen in. Werkelijke kosten hangen onder meer af van volumes, contracten, kleur/zwart-wit, apparatuur, service en verbruik.</span></div>
    <Link className="btn btn-primary" href="/offerte">Laat mijn printerpark analyseren</Link>
  </div>;
}
