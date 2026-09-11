import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock3 } from "lucide-react";
import type { ReactNode } from "react";
import type { SongStatus } from "@/lib/songs";
export function Button({children,variant="primary",className="",type="button",onClick}:{children:ReactNode;variant?:"primary"|"secondary"|"danger"|"ghost";className?:string;type?:"button"|"submit";onClick?:()=>void}) { return <button type={type} onClick={onClick} className={`btn btn-${variant} ${className}`}>{children}</button> }
export function StatusBadge({status}:{status:SongStatus}) { const Icon=status==="Published"?CheckCircle2:Clock3; return <span className={`status status-${status.toLowerCase()}`}><Icon size={12}/>{status}</span> }
export function PageHeader({eyebrow,title,description,children}:{eyebrow?:string;title:string;description?:string;children?:ReactNode}) { return <div className="page-heading"><div className="min-w-0">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{description&&<p className="page-description">{description}</p>}</div>{children&&<div className="heading-actions">{children}</div>}</div> }
export function Panel({children,className="",id}:{children:ReactNode;className?:string;id?:string}) { return <section id={id} className={`panel ${className}`}>{children}</section> }
export function Artwork({src,title,size="md"}:{src:string;title:string;size?:"sm"|"md"|"lg"}) { return <img className={`artwork artwork-${size}`} src={src} alt={`${title} cover`} width={768} height={768} loading="lazy"/> }
export function BackLink({to,label}:{to:"/songs"|"/";label:string}) { return <Link to={to} className="back-link">← {label}</Link> }
