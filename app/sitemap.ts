import type {MetadataRoute} from "next";
import {products} from "@/lib/products";
// SEO sitemap for the full B2B acquisition funnel.
const base="https://mfp.iselto.nl";
const pages=["/","/producten","/zakelijke-mfp","/mfp-leasen","/mfp-huren","/mfp-kopen","/mfp-kiezen","/seo-mfp","/oplossingen","/software","/managed-print","/diensten","/service","/branches","/branches/zakelijke-dienstverlening","/branches/zorg-welzijn","/branches/onderwijs","/branches/industrie-techniek","/branches/handel-logistiek","/branches/mkb","/downloads","/offerte","/contact","/zoeken","/vergelijker","/over-iselto","/vacatures"];
export default function sitemap():MetadataRoute.Sitemap{return pages.map(path=>({url:base+path,lastModified:new Date()})).concat(products.map(p=>({url:base+"/producten/"+p.slug,lastModified:new Date()})))}