"use client";

import { useEffect, useState } from "react";
import type { PortfolioContent } from "../../content";
import { ArrowIcon } from "./ArrowIcon";

export function SiteHeader({ navigation }: { navigation: PortfolioContent["navigation"] }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px)");
    const closeOnResize = () => { if (!query.matches) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    query.addEventListener("change", closeOnResize); window.addEventListener("keydown", closeOnEscape);
    return () => { query.removeEventListener("change", closeOnResize); window.removeEventListener("keydown", closeOnEscape); };
  }, []);
  return <header className="site-header">
    <a className="brand" href="#top" aria-label={navigation.brandName.replace("\n", " ")} onClick={() => setOpen(false)}><span className="brand-mark">{navigation.brandMark}<span className="brand-mark-dot">{navigation.brandMarkDot}</span></span><span className="brand-name">{navigation.brandName.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</span></a>
    <nav id="mobile-navigation" className={"site-nav" + (open ? " site-nav-open" : "")} aria-label="Main navigation">{navigation.links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-contact" href={navigation.contactHref} onClick={() => setOpen(false)}>{navigation.contactLabel} <ArrowIcon diagonal /></a></nav>
    <button className={"menu-toggle" + (open ? " menu-toggle-open" : "")} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span /><span /></button>
  </header>;
}
