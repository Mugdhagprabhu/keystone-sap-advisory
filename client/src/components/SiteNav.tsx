import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/fun-projects", label: "Side quests" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const go = () => setOpen(false);

  return (
    <header className={`site-nav ${open ? "is-open" : ""}`}>
      <div className="nav-pill">
        <Link className="nav-brand" href="/" onClick={go} aria-label="Mugdha Prabhu home">
          <span className="brand-dot" />
          <span>Mugdha Prabhu</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={go}
              className={location === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a className="nav-availability" href="mailto:mugdhagprabhu@gmail.com" aria-label="Email Mugdha Prabhu">
          <span className="availability-dot" /> Available to build
        </a>
        <button className="nav-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}
