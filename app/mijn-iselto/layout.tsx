import type {Metadata} from "next";
import "./portal.css";
export const metadata:Metadata={title:"Mijn Iselto klantomgeving",robots:{index:false,follow:false}};
export default function MijnIseltoLayout({children}:{children:React.ReactNode}){return <div className="portal-shell">{children}</div>}
