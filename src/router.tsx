import type { ReactNode } from "react";
import { ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, CheckCircle2, Download, ExternalLink, FileSearch, Globe2, Mail, Search, Sparkles, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { cn } from "./lib/utils";

const stats = [
  ["60%", "Avg Revenue Growth"],
  ["5+", "Years International"],
  ["4.9", "Client Rating"],
  ["12+", "Countries Worked"],
  ["600+", "SEO Articles Delivered"],
  ["250+", "Website Pages"],
  ["150+", "Landing Pages Optimized"],
  ["100+", "SEO Audits"],
];

const featuredResults = [
  ["600+", "SEO articles delivered", "Long-form, YMYL, SaaS, local, and enterprise content."],
  ["250+", "Website pages created", "Home, service, location, product, and pillar pages."],
  ["150+", "Landing pages optimized", "Conversion-led pages for paid, organic, and local intent."],
  ["100+", "SEO audits completed", "Technical, content, local, and entity SEO audits."],
  ["12+", "Countries served", "UK, USA, UAE, Australia, India, and global remote markets."],
  ["20+", "Industries worked with", "Healthcare, legal, education, SaaS, energy, wellness, and more."],
];

const clients = ["VIT", "Medlounges", "Foton Energy", "AIKO Global", "Athira Spa", "INIYA Clinic", "Kapil Dixit LLP", "Unified Home Care", "Flodesk", "Lateral Connect"];

const expertise = [
  ["Technical SEO", "Crawl audits, indexation, Core Web Vitals, schema, architecture, hreflang, and internal linking."],
  ["Content Strategy", "Topic clusters, editorial calendars, briefs, EEAT systems, content refreshes, and governance."],
  ["AI Search", "GEO, AEO, AI Overviews, ChatGPT, Gemini, Perplexity, entity SEO, and knowledge graph readiness."],
  ["Local & Enterprise SEO", "Multi-location visibility, local packs, GBP systems, enterprise architecture, and reporting."],
];

const contentTypes = ["Website Copy", "Landing Pages", "Product Pages", "Category Pages", "Blog Clusters", "Pillar Pages", "Glossary Pages", "FAQ Pages", "Knowledge Base", "Case Studies", "Press Releases", "Whitepapers", "Email Campaigns", "LinkedIn Content", "Location Pages", "Resource Centers"];

const deliverables = [
  ["SEO", ["Technical SEO", "Enterprise SEO", "Local SEO", "International SEO", "Programmatic SEO", "Core Web Vitals"]],
  ["Content", ["Website Content", "Landing Pages", "Blog Systems", "Case Studies", "Product Pages", "Service Pages"]],
  ["AI Search", ["AEO", "GEO", "Entity SEO", "AI Overviews", "Knowledge Graph", "Schema Markup"]],
  ["Operations", ["Content Briefs", "Topical Maps", "Content Calendars", "Editorial Systems", "Content Audits", "Workflow Design"]],
];

const proofDownloads = [
  ["SEO Audit Sample", "/samples/seo-audit-sample.md"],
  ["Content Brief Sample", "/samples/content-brief-sample.md"],
  ["Keyword Research Sample", "/samples/keyword-research-sample.md"],
  ["Content Calendar", "/samples/content-calendar-sample.md"],
  ["Technical SEO Checklist", "/samples/technical-seo-checklist.md"],
];

const cases = [
  ["Vellore Institute of Technology", "Education / Enterprise", ["Enterprise SEO", "Multi-Campus Local", "AEO + GEO"], ["Search Console screenshots", "Program keyword movement", "Campus page indexation"]],
  ["Foton Energy Storage", "B2B / Renewable Energy", ["60% Revenue", "52% Conversion", "3.2x ROAS"], ["GA4 revenue trend", "Ahrefs keyword growth", "Landing page ranking movement"]],
  ["INIYA Skin & Laser Clinic", "Healthcare / Local SEO", ["+38% CTR", "Local Pack Visibility"], ["GBP actions", "Search Console CTR lift", "Local pack screenshots"]],
  ["Kapil Dixit LLP", "Legal / YMYL", ["Topical Authority", "Local Pack"], ["Practice-area rankings", "Content hub coverage", "Before-after rankings"]],
];

const process = ["Research", "Audit", "Strategy", "Content Brief", "Entity Map", "Writing", "Optimization", "Internal Linking", "Schema", "AI Optimization", "Reporting"];

const thoughtLeadership = [
  ["LinkedIn", "AI Search, GEO, and the Future of Organic Visibility"],
  ["Medium", "Technical SEO and Content Strategy Playbooks"],
  ["Newsletter", "Search Strategy Notes"],
  ["Workshops", "SEO and AI Search Training for Teams"],
];

export function App() {
  useScrollReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <FeaturedResults />
      <TrustedBy />
      <About />
      <AILab />
      <Expertise />
      <ContentExpertise />
      <ContentEcosystem />
      <WhatIDeliver />
      <ProofDownloads />
      <Tools />
      <Cases />
      <Process />
      <WhyDifferent />
      <ContentOperations />
      <ThoughtLeadership />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

function Nav() {
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

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content reveal">
        <p className="eyebrow">Senior SEO & Content Strategist</p>
        <h1>Organic growth systems for search, AI answers, and revenue.</h1>
        <p className="hero__copy">I build technical SEO, content strategy, GEO, AEO, local SEO, and scalable content operations for brands that need authority, visibility, and qualified demand.</p>
        <div className="actions">
          <a className="button button--primary" href="#contact">Book a Strategy Call <ArrowRight size={18} /></a>
          <a className="button button--ghost" href="/Premaswini-Kamatham-Resume.pdf" download>Download Resume <Download size={18} /></a>
        </div>
      </div>
      <div className="hero__panel reveal">
        <div className="signal"><Sparkles /><span>AI Search Ready</span></div>
        <div className="signal"><Search /><span>Technical + Content</span></div>
        <div className="signal"><Globe2 /><span>12+ Countries</span></div>
        <div className="signal"><TrendingUp /><span>Revenue Measured</span></div>
      </div>
    </section>
  );
}

function Stats() {
  return <section className="stats">{stats.map(([n, l]) => <div className="stat reveal" key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>;
}

function FeaturedResults() {
  return (
    <Section eyebrow="Featured Results" title="Proof of volume, depth, and repeatable execution.">
      <div className="grid three">{featuredResults.map(([n, l, d]) => <Card key={l}><strong className="big">{n}</strong><h3>{l}</h3><p>{d}</p></Card>)}</div>
    </Section>
  );
}

function TrustedBy() {
  return <section className="trusted reveal"><p>Trusted By</p><div>{clients.map((c) => <span key={c}>{c}</span>)}</div></section>;
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="I build complete organic growth systems.">
      <div className="split">
        <div className="copy">
          <p>Five plus years building organic growth across the UK, USA, UAE, Australia, India, and remote global markets.</p>
          <p>My work sits at the intersection of Technical SEO, Content Strategy, AI Search Optimization, Local SEO, Enterprise SEO, and scalable content operations.</p>
          <p>Every engagement starts with a working hypothesis, lives in a real roadmap, and gets measured in revenue, not vanity metrics.</p>
        </div>
        <Card>
          <h3>Core Strengths</h3>
          <ul className="checks">
            {["Strategy to execution", "AI search ready", "YMYL experience", "International track record"].map((x) => <li key={x}><CheckCircle2 size={18} />{x}</li>)}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function AILab() {
  return (
    <Section dark eyebrow="AI Search Lab" title="Optimization for answer engines and generative discovery.">
      <div className="grid four">{["GEO", "AEO", "Entity SEO", "Knowledge Graph", "AI Overviews", "ChatGPT", "Gemini", "Perplexity"].map((x) => <Card dark key={x}><Sparkles /><h3>{x}</h3><p>Structured content for citations, entities, and answer visibility.</p></Card>)}</div>
    </Section>
  );
}

function Expertise() {
  return <Section id="expertise" eyebrow="Expertise" title="Technical depth plus editorial systems."><div className="grid two">{expertise.map(([t, d]) => <Card key={t}><h3>{t}</h3><p>{d}</p></Card>)}</div></Section>;
}

function ContentExpertise() {
  return <Section dark eyebrow="Content Expertise" title="Every content type. Every format. Built to rank."><div className="pills">{contentTypes.map((x) => <span key={x}>{x}</span>)}</div></Section>;
}

function ContentEcosystem() {
  const nodes = ["Homepage", "Service Pages", "Location Pages", "Pillar Pages", "Blog Clusters", "FAQs", "Glossary", "Knowledge Base", "Case Studies", "Internal Links", "AI Search"];
  return <Section eyebrow="Content Ecosystem" title="How it all connects."><div className="flow">{nodes.map((x, i) => <span key={x}>{String(i + 1).padStart(2, "0")} {x}</span>)}</div></Section>;
}

function WhatIDeliver() {
  return <Section dark eyebrow="What I Deliver" title="Not just SEO. A complete growth system."><div className="grid four">{deliverables.map(([t, list]) => <Card dark key={t as string}><h3>{t as string}</h3><ul>{(list as string[]).map((x) => <li key={x}>{x}</li>)}</ul></Card>)}</div></Section>;
}

function ProofDownloads() {
  return <Section dark eyebrow="Downloadable Proof" title="Sample deliverables visitors can inspect."><div className="download-grid">{proofDownloads.map(([label, href]) => <a className="download" href={href} download key={label}><FileSearch />{label}<Download size={18} /></a>)}</div></Section>;
}

function Tools() {
  return <Section eyebrow="Tools" title="SEO, analytics, AI, and CMS platforms."><div className="pills">{["GA4", "Search Console", "Looker Studio", "Ahrefs", "SEMrush", "Screaming Frog", "BrightLocal", "ChatGPT", "Gemini", "Perplexity", "WordPress", "RankMath"].map((x) => <span key={x}>{x}</span>)}</div></Section>;
}

function Cases() {
  return <Section id="work" eyebrow="Case Studies" title="Results framed around evidence, not decoration."><div className="grid two">{cases.map(([name, industry, results, proof]) => <Card key={name as string}><p className="eyebrow tight">{industry as string}</p><h3>{name as string}</h3><div className="tags">{(results as string[]).map((x) => <span key={x}>{x}</span>)}</div><h4>Evidence to add</h4><ul>{(proof as string[]).map((x) => <li key={x}>{x}</li>)}</ul></Card>)}</div></Section>;
}

function Process() {
  return <Section eyebrow="Process" title="A repeatable operating model for organic growth."><div className="timeline">{process.map((x, i) => <span key={x}>{String(i + 1).padStart(2, "0")} {x}</span>)}</div></Section>;
}

function WhyDifferent() {
  return <Section dark eyebrow="Why I Am Different" title="SEO strategy with content systems and AI-search fluency."><div className="grid three">{["Technical + Content", "EEAT Driven", "International Portfolio", "AI Search Focus", "Enterprise Experience", "Human-First Content"].map((x) => <Card dark key={x}><Target /><h3>{x}</h3></Card>)}</div></Section>;
}

function ContentOperations() {
  return <Section eyebrow="Content Operations" title="I do not just write. I build systems."><div className="grid three">{["Planning", "Production", "Performance"].map((x) => <Card key={x}><CalendarDays /><h3>{x}</h3><p>Calendars, briefs, governance, QA, refresh systems, and reporting workflows.</p></Card>)}</div></Section>;
}

function ThoughtLeadership() {
  return <Section eyebrow="Speaking & Thought Leadership" title="Public thinking that reinforces EEAT."><div className="grid two">{thoughtLeadership.map(([type, title]) => <Card key={type}><p className="eyebrow tight">{type}</p><h3>{title}</h3><a href="#contact">Add live link <ExternalLink size={16} /></a></Card>)}</div></Section>;
}

function Testimonials() {
  return <Section dark id="reviews" eyebrow="Testimonials" title="What clients say."><div className="grid two"><Card dark><p>"Clear roadmap, fast execution, and high-standard delivery."</p><h3>Blesson Kuriakose</h3></Card><Card dark><p>"Great communication, quick delivery, and strong SEO copywriting."</p><h3>Mohammed Saquib Sherief K</h3></Card></div></Section>;
}

function FAQ() {
  return <Section eyebrow="FAQ" title="Common questions."><div className="grid two">{["How long before SEO shows results?", "What is GEO and AEO?", "Do you work internationally?", "Do you work with healthcare and legal clients?"].map((q) => <Card key={q}><h3>{q}</h3><p>Timelines and scope depend on the market, site health, content depth, and competitive landscape.</p></Card>)}</div></Section>;
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="reveal">
        <p className="eyebrow">Contact</p>
        <h2>Ready to build your organic growth system?</h2>
        <div className="actions centered">
          <a className="button button--primary" href="mailto:hello@premaswini.com?subject=Strategy%20Call%20Request"><Mail size={18} />Book a Strategy Call</a>
          <a className="button button--ghost" href="/Premaswini-Kamatham-Resume.pdf" download><Download size={18} />Download Resume</a>
          <a className="button button--ghost" href="https://www.linkedin.com/"><BriefcaseBusiness size={18} />View LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, dark = false }: { id?: string; eyebrow: string; title: string; children: ReactNode; dark?: boolean }) {
  return <section id={id} className={cn("section", dark && "section--dark")}><div className="section__head reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{children}</section>;
}

function Card({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <article className={cn("card reveal", dark && "card--dark")}>{children}</article>;
}
