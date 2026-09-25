import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudyLayout({ children, number, title, subtitle, role, nextHref, nextLabel }: { children: React.ReactNode; number: string; title: string; subtitle: string; role: string; nextHref: string; nextLabel: string }) {
  return (
    <div className="case-study-page">
      <section className="case-hero">
        <div className="container case-hero-inner">
          <Link href="/#work" className="back-link"><ArrowLeft size={15} /> back to selected work</Link>
          <div className="case-hero-number">{number}</div>
          <h1>{title}</h1>
          <p className="case-subtitle">{subtitle}</p>
          <div className="case-meta"><span>my role</span><strong>{role}</strong><span>status</span><strong>placeholders ready for the real work</strong></div>
          <a href="#figma" className="figma-cta">View Figma <ArrowUpRight size={17} /></a>
        </div>
      </section>
      {children}
      <section className="case-next">
        <div className="container case-next-inner">
          <span>keep wandering</span>
          <Link href={nextHref}>{nextLabel} <ArrowUpRight size={21} /></Link>
        </div>
      </section>
    </div>
  );
}

export function CaseSection({ number, eyebrow, title, intro, children, className = "" }: { number: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`case-section ${className}`}>
      <div className="container">
        <div className="case-section-heading">
          <span className="section-index">{number}</span>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
