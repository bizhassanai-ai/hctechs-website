import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = { title: {default:'HC ThoughtLab Consultant | HCTech',template:'%s | HCTech'},description:'Industrial computing, embedded edge AI, infrastructure and digital transformation consulting in Thailand.',metadataBase:new URL('https://hctech.info') };
const links=[['Home','/'],['Solutions','/solutions'],['Products','/products'],['Demo','/demo'],['Contact','/contact']];
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header><div className="container bar"><Link className="brand" href="/">HC<span>ThoughtLab</span></Link><nav aria-label="Main navigation">{links.map(([name,path])=><Link key={path} href={path}>{name}</Link>)}</nav></div></header><main>{children}</main><footer><div className="container">© {new Date().getFullYear()} HC ThoughtLab Consultant · Thailand · <a href="mailto:hassanai@hctech.info">hassanai@hctech.info</a><p>Product and partner references are subject to confirmation of current commercial arrangements.</p></div></footer></body></html>}
