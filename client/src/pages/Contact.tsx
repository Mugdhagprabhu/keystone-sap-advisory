import { ArrowUpRight, Github, Linkedin, Mail, PenLine } from "lucide-react";
import { Link } from "wouter";

const contacts = [
  { label: "Email", value: "mugdhagprabhu@gmail.com", href: "mailto:mugdhagprabhu@gmail.com", icon: <Mail size={20} /> },
  { label: "LinkedIn", value: "linkedin.com/in/mugdha-prabhu-0777233aa", href: "https://linkedin.com/in/mugdha-prabhu-0777233aa", icon: <Linkedin size={20} /> },
  { label: "GitHub", value: "github.com/Mugdhagprabhu", href: "https://github.com/Mugdhagprabhu", icon: <Github size={20} /> },
  { label: "Medium", value: "placeholder — URL coming later", href: "#medium-placeholder", icon: <PenLine size={20} /> },
];

export default function Contact() {
  return (
    <div className="inner-page contact-page"><section className="inner-hero contact-hero"><div className="container inner-hero-inner"><span className="eyebrow">05 / hello, human</span><h1>Let's build<br /><em>together.</em></h1><p>This is an invitation, not a contact form. Tell me what you're making, what you're thinking about, or what you're still figuring out.</p></div></section><section className="section-block contact-section"><div className="container contact-layout"><div className="contact-note"><span className="contact-scribble">open to good questions ✦</span><h2>Bring the early<br /><em>messy part.</em></h2><p>I like the moment before the answer is obvious. That's usually where the interesting design work begins.</p><Link className="text-link" href="/">Back to the homepage <ArrowUpRight size={15} /></Link></div><div className="contact-list">{contacts.map((contact) => <a className={`contact-row ${contact.label === "Medium" ? "is-placeholder" : ""}`} href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}><span className="contact-icon">{contact.icon}</span><span><small>{contact.label}</small><strong>{contact.value}</strong></span><ArrowUpRight className="contact-arrow" size={19} /></a>)}</div></div></section></div>
  );
}
