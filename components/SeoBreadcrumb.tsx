import Link from "next/link";

type Item={name:string;href?:string};

export default function SeoBreadcrumb({items}:{items:Item[]}){
 const all=[{name:"Home",href:"/"},...items];
 const jsonLd={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":all.map((item,i)=>({"@type":"ListItem","position":i+1,"name":item.name,"item":"https://mfp.iselto.nl"+(item.href||"/")}))};
 return <><nav aria-label="Broodkruimelpad" className="seo-breadcrumb">{all.map((item,i)=><span key={item.name}>{i>0&&" / "}{item.href&&i<all.length-1?<Link href={item.href}>{item.name}</Link>:item.name}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></>;
}