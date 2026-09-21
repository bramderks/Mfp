import type {MetadataRoute} from "next";
import {products} from "@/lib/products";

const base="https://mfp.iselto.nl";
const pages=[
 "/","/producten","/producten/a3-multifunctionals","/producten/a4-multifunctionals","/producten/taskalfa-mz-serie",
 "/zakelijke-mfp","/zakelijke-printer","/printer-leasen","/kopieerapparaat","/mfp-leasen","/mfp-huren","/mfp-kopen",
 "/mfp-kiezen","/lease-huur-koop","/tco-scan","/oplossingen","/software","/managed-print","/diensten","/service",
 "/branches","/branches/zakelijke-dienstverlening","/branches/zorg-welzijn","/branches/onderwijs","/branches/industrie-techniek",
 "/branches/handel-logistiek","/branches/mkb","/downloads","/offerte","/contact","/vergelijker","/klantverhalen","/faq",
 "/over-iselto","/vacatures","/kennis","/kennis/mfp-kosten","/kennis/a4-of-a3-mfp","/kennis/managed-print","/kennis/mfp-kiezen-kantoor","/kennis/printkosten-verlagen","/kennis/mfp-kopen-leasen-huren","/kennis/printbeveiliging","/kennis/slim-archiveren-scannen","/kennis/mfp-voor-mkb","/kennis/mfp-voor-50-medewerkers"
];

const priority:Record<string,number>={
 "/":1,"/producten":0.95,"/kennis":0.8,"/kennis/mfp-kosten":0.75,"/kennis/a4-of-a3-mfp":0.75,"/kennis/managed-print":0.75,"/mfp-kiezen":0.9,"/vergelijker":0.85,"/zakelijke-mfp":0.9,"/zakelijke-printer":0.85,
 "/mfp-leasen":0.8,"/mfp-huren":0.8,"/mfp-kopen":0.8,"/lease-huur-koop":0.85,"/tco-scan":0.8,"/managed-print":0.85,
 "/software":0.85,"/service":0.8,"/oplossingen":0.8,"/branches":0.75,"/faq":0.7,"/contact":0.65,"/offerte":0.8
};

export default function sitemap():MetadataRoute.Sitemap{
 const staticEntries=pages.map(path=>({url:base+path,changeFrequency:"monthly" as const,priority:priority[path]??0.6}));
 const productEntries=products.map(p=>({url:base+"/producten/"+p.slug,changeFrequency:"monthly" as const,priority:0.8}));
 return [...staticEntries,...productEntries];
}