import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, Bell, LogOut, Menu, Music2, Plus, Search, Settings, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/infinite-notes-logo.png";
const nav=[{to:"/" as const,label:"Dashboard",icon:BarChart3},{to:"/songs" as const,label:"Songs",icon:Music2},{to:"/songs/new" as const,label:"Add song",icon:Plus},{to:"/settings" as const,label:"Settings",icon:Settings}];
export function AdminShell({children}:{children:ReactNode}){
 const [open,setOpen]=useState(false); const pathname=useRouterState({select:s=>s.location.pathname});
 return <div className="admin-shell">
  {open&&<button className="drawer-scrim" aria-label="Close navigation" onClick={()=>setOpen(false)}/>} 
  <aside className={`sidebar ${open?"sidebar-open":""}`}>
   <div className="brand"><img src={logo} alt="Infinite Notes"/><div><strong>Infinite<span>Notes</span></strong><small>Admin Console</small></div><button className="icon-button close-drawer" onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button></div>
   <nav aria-label="Admin navigation"><p className="nav-label">Workspace</p>{nav.map(({to,label,icon:Icon})=>{const active=to==="/"?pathname==="/":pathname===to||(to==="/songs"&&pathname.startsWith("/songs/")&&pathname!=="/songs/new");return <Link key={to} to={to} className={`nav-item ${active?"nav-active":""}`} onClick={()=>setOpen(false)}><Icon/><span>{label}</span></Link>})}</nav>
   <div className="system-card"><span className="system-dot"/><div><strong>Catalog online</strong><small>All systems operational</small></div></div>
   <div className="admin-profile"><div className="avatar">AV</div><div><strong>Aria V.</strong><small>Chief Curator</small></div><button className="icon-button" aria-label="Sign out"><LogOut/></button></div>
  </aside>
  <div className="admin-main"><header className="topbar"><div className="topbar-left"><button className="icon-button menu-button" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button><div><small>Friday, September 11</small><strong>Infinite Notes Catalog</strong></div></div><div className="topbar-actions"><label className="header-search"><Search/><input aria-label="Search catalog" placeholder="Search catalog..."/></label><button className="icon-button notification" aria-label="Notifications"><Bell/><span/></button><Link to="/songs/new" className="btn btn-primary header-add"><Plus/> Add song</Link></div></header><main className="content">{children}</main></div>
 </div>
}
