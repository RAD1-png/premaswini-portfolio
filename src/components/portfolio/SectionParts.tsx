import type { ReactNode } from "react";
import { CheckCircle2, Download, Mail, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import { CASES, CLIENTS, CONTENT_TYPES, DELIVERABLES, FEATURED_RESULTS, PROOF_DOWNLOADS, STATS, THOUGHT_LEADERSHIP } from "./data";

export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top">Premaswini</a>
      <nav>
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export function Cursor() {
  return null;
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content reveal">
        <p className="eyebrow">Senior SEO & Content Strategist</p>
        <h1>Organic growth systems for search, AI answers, and revenue.</h1>
        <p className="hero__copy">Technical SEO, content strategy, AI search, local SEO, and scalable content operations for brands that need authority and qualified demand.</p>
        <div className="actions">
          <a className="button button--primary" href="#contact">Book a Strategy Call</a>
          <a className="button button--ghost" href="/Premaswini-Kamatham-Resume.pdf" download>Download Resume <Download size={18} /></a>
        </div>
      </div>
      <div className="hero__panel reveal">
        {["AI Search Ready", "Technical + Content", "12+ Countries", "Revenue Measured"].map((item) => (
          <div className="signal" key={item}><Sparkles /><span>{item}</span></div>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return <section className="stats">{STATS.map((s) => <div className="stat reveal" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</section>;
}

export function FeaturedResults() {
  return <Section eyebrow="Featured Results" title="Proof of volume, depth, and repeatable execution."><div className="grid three">{FEATURED_RESULTS.map((item) => <Card key={item.label}><strong className="big">{item.value}</strong><h3>{item.label}</h3><p>{item.note}</p></Card>)}</div></Section>;
}

export function TrustedBy() {
  return <section className="trusted reveal"><p>Trusted By</p><div>{CLIENTS.map((client) => <span key={client}>{client}</span>)}</div></section>;
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="I build complete organic growth systems.">
      <div className="split">
        <div className="copy">
          <p>Five plus years building organic growth across the UK, USA, UAE, Australia, India, and remote global markets.</p>
          <p>My work sits at the intersection of Technical SEO, Content Strategy, AI Search Optimization, Local SEO, Enterprise SEO, and scalable content operations.</p>
        </div>
        <Card><h3>Core Strengths</h3><ul className="checks">{["Strategy to execution", "AI search ready", "YMYL experience", "International track record"].map((x) => <li key={x}><CheckCircle2 size={18} />{x}</li>)}</ul></Card>
      </div>
    </Section>
  );
}

export function AILab() {
  return <Section dark eyebrow="AI Search Lab" title="Optimization for answer engines and generative discovery."><div className="grid four">{["GEO", "AEO", "Entity SEO", "Knowledge Graph", "AI Overviews", "ChatGPT", "Gemini", "Perplexity"].map((x) => <Card dark key={x}><Sparkles /><h3>{x}</h3><p>Structured content for citations, entities, and answer visibility.</p></Card>)}</div></Section>;
}

export function Expertise() {
  return <Section id="expertise" eyebrow="Expertise" title="Technical depth plus editorial systems."><div className="grid two">{["Technical SEO", "Content Strategy", "AI Search", "Local & Enterprise SEO"].map((x) => <Card key={x}><Search /><h3>{x}</h3><p>Crawl health, content architecture, entity optimization, reporting, and scalable execution.</p></Card>)}</div></Section>;
}

export function ContentExpertise() {
  return <Section dark eyebrow="Content Expertise" title="Every content type. Every format. Built to rank."><div className="pills">{CONTENT_TYPES.map((x) => <span key={x}>{x}</span>)}</div></Section>;
}

export function ContentEcosystem() {
  return <Section eyebrow="Content Ecosystem" title="How it all connects."><div className="flow">{["Homepage", "Service Pages", "Location Pages", "Pillar Pages", "Blog Clusters", "FAQs", "Glossary", "Knowledge Base", "Case Studies", "Internal Links", "AI Search"].map((x, i) => <span key={x}>{String(i + 1).padStart(2, "0")} {x}</span>)}</div></Section>;
}

export function WhatIDeliver() {
  return <Section dark eyebrow="What I Deliver" title="Not just SEO. A complete growth system."><div className="grid four">{DELIVERABLES.map((item) => <Card dark key={item.title}><h3>{item.title}</h3><ul>{item.items.map((x) => <li key={x}>{x}</li>)}</ul></Card>)}</div></Section>;
}

export function ProofDownloads() {
  return <Section dark eyebrow="Downloadable Proof" title="Sample deliverables visitors can inspect."><div className="download-grid">{PROOF_DOWNLOADS.map((item) => <a className="download" href={item.href} download key={item.label}>{item.label}<Download size={18} /></a>)}</div></Section>;
}

export function Tools() {
  return <Section eyebrow="Tools" title="SEO, analytics, AI, and CMS platforms."><div className="pills">{["GA4", "Search Console", "Looker Studio", "Ahrefs", "SEMrush", "Screaming Frog", "BrightLocal", "ChatGPT", "Gemini", "Perplexity", "WordPress", "RankMath"].map((x) => <span key={x}>{x}</span>)}</div></Section>;
}

export function Cases() {
  return <Section id="work" eyebrow="Case Studies" title="Results framed around evidence, not decoration."><div className="grid two">{CASES.map((item) => <Card key={item.name}><p className="eyebrow tight">{item.industry}</p><h3>{item.name}</h3><div className="tags">{item.results.map((x) => <span key={x}>{x}</span>)}</div></Card>)}</div></Section>;
}

export function Process() {
  return <Section eyebrow="Process" title="A repeatable operating model for organic growth."><div className="timeline">{["Research", "Audit", "Strategy", "Content Brief", "Entity Map", "Writing", "Optimization", "Internal Linking", "Schema", "AI Optimization", "Reporting"].map((x, i) => <span key={x}>{String(i + 1).padStart(2, "0")} {x}</span>)}</div></Section>;
}

export function Marquee() {
  return null;
}

export function WhyDifferent() {
  return <Section dark eyebrow="Why I Am Different" title="SEO strategy with content systems and AI-search fluency."><div className="grid three">{["Technical + Content", "EEAT Driven", "International Portfolio", "AI Search Focus", "Enterprise Experience", "Human-First Content"].map((x) => <Card dark key={x}><Target /><h3>{x}</h3></Card>)}</div></Section>;
}

export function ContentOperations() {
  return <Section eyebrow="Content Operations" title="I do not just write. I build systems."><div className="grid three">{["Planning", "Production", "Performance"].map((x) => <Card key={x}><TrendingUp /><h3>{x}</h3><p>Calendars, briefs, governance, QA, refresh systems, and reporting workflows.</p></Card>)}</div></Section>;
}

export function ThoughtLeadership() {
  return <Section eyebrow="Speaking & Thought Leadership" title="Public thinking that reinforces EEAT."><div className="grid two">{THOUGHT_LEADERSHIP.map((item) => <Card key={item.type}><p className="eyebrow tight">{item.type}</p><h3>{item.title}</h3></Card>)}</div></Section>;
}

export function Testimonials() {
  return <Section dark id="reviews" eyebrow="Testimonials" title="What clients say."><div className="grid two"><Card dark><p>"Clear roadmap, fast execution, and high-standard delivery."</p><h3>Blesson Kuriakose</h3></Card><Card dark><p>"Great communication, quick delivery, and strong SEO copywriting."</p><h3>Mohammed Saquib Sherief K</h3></Card></div></Section>;
}

export function FAQ() {
  return <Section eyebrow="FAQ" title="Common questions."><div className="grid two">{["How long before SEO shows results?", "What is GEO and AEO?", "Do you work internationally?", "Do you work with healthcare and legal clients?"].map((q) => <Card key={q}><h3>{q}</h3><p>Timelines and scope depend on the market, site health, content depth, and competitive landscape.</p></Card>)}</div></Section>;
}

export function ContactActions() {
  return null;
}

export function Contact() {
  return <section id="contact" className="contact"><div className="reveal"><p className="eyebrow">Contact</p><h2>Ready to build your organic growth system?</h2><div className="actions centered"><a className="button button--primary" href="mailto:hello@premaswini.com"><Mail size={18} />Email Me</a></div></div></section>;
}

export function StickyCTA() {
  return null;
}

function Section({ id, eyebrow, title, children, dark = false }: { id?: string; eyebrow: string; title: string; children: ReactNode; dark?: boolean }) {
  return <section id={id} className={dark ? "section section--dark" : "section"}><div className="section__head reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</section>;
}

function Card({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <article className={dark ? "card card--dark reveal" : "card reveal"}>{children}</article>;
}
