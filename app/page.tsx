
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HC Tech | AI & Industrial Technology",
  description:
    "HC Tech brings together HC ThoughtLab and HyperTech Corporation to deliver AI solutions, strategic advisory, industrial computing and digital transformation.",
};

const aiSolutions = [
  {
    number: "01",
    category: "BUSINESS INTELLIGENCE",
    name: "Business AI Intelligence",
    description:
      "AI-powered business analytics, strategic planning and decision support for SMEs and growing organizations.",
    demo: "https://biz-demo.kiatdamrong.shop/",
  },
  {
    number: "02",
    category: "ENTERPRISE AI",
    name: "Enterprise AI Gateway",
    description:
      "Unified AI access and orchestration for different departments, workflows and enterprise requirements.",
    demo: "https://gateway.kiatdamrong.shop/",
  },
  {
    number: "03",
    category: "DOCUMENT INTELLIGENCE",
    name: "Document Intelligence",
    description:
      "AI-assisted analysis, knowledge extraction and intelligent search across complex business documents.",
    demo: "https://docintel-demo.kiatdamrong.shop/",
  },
  {
    number: "04",
    category: "LEARNING & HR",
    name: "Learning & Workforce Intelligence",
    description:
      "AI-supported course development, learning analytics, employee training and workforce capability building.",
    demo: "https://lms-demo.kiatdamrong.shop/",
  },
  {
    number: "05",
    category: "CONSUMER AI",
    name: "Personal AI Experience",
    description:
      "Personalized AI applications and digital experiences for consumer engagement and specialized services.",
    demo: "https://myduang.com/",
  },
  {
    number: "06",
    category: "AI MEDIA & KNOWLEDGE",
    name: "AI Knowledge & Media Intelligence",
    description:
      "AI-assisted publishing, knowledge workflows and bilingual technology content through a human-guided approach.",
    demo: "https://koishiai.com/th",
  },
];

const industrialSolutions = [
  {
    category: "INDUSTRIAL COMPUTING",
    title: "Industrial Server & Embedded Boards",
    description:
      "Industrial-grade server boards, motherboards and embedded computing platforms for demanding environments.",
  },
  {
    category: "EDGE AI & AIOT",
    title: "Intelligent Edge Computing",
    description:
      "Embedded edge computers and AIoT platforms for machine vision, automation, security and industrial analytics.",
  },
  {
    category: "CUSTOM ENGINEERING",
    title: "Board-Level Customization",
    description:
      "Customized hardware platforms, I/O configurations, system integration and OEM application support.",
  },
];

export default function Home() {
  return (
    <main className="hc-home">

      {/* HERO SECTION */}
      <section className="hero hc-hero">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HC TECH / AI · INDUSTRIAL TECHNOLOGY · TRANSFORMATION
          </div>

          <h1>
            Engineering Intelligence.
            <br />
            <span className="hc-yellow">
              Enabling Transformation.
            </span>
          </h1>

          <p className="lead">
            HC Tech connects enterprise AI, industrial computing
            and strategic advisory to help organizations
            turn technology investments into measurable
            business value.
          </p>

          <div className="actions">
            <Link href="/contact" className="btn hc-btn-yellow">
              Discuss Your Project
            </Link>

            <Link href="/products" className="btn secondary">
              Explore Our Solutions
            </Link>
          </div>

          <div className="hc-highlights">
            <span>Enterprise AI</span>
            <span>Business Intelligence</span>
            <span>Industrial Edge Computing</span>
            <span>Digital Transformation</span>
          </div>
        </div>
      </section>

      {/* HC TECH BUSINESS ECOSYSTEM */}
      <section className="section hc-section">
        <div className="container">
          <div className="eyebrow hc-yellow">
            OUR BUSINESS ECOSYSTEM
          </div>

          <h2>
            One Ecosystem.
            <span className="hc-yellow">
              {" "}Integrated Intelligence.
            </span>
          </h2>

          <p className="lead">
            HC Tech brings together complementary business
            capabilities in strategic consulting, enterprise
            AI and industrial technology implementation.
          </p>

          <div className="grid">
            <article className="card hc-card">
              <div className="tag">AI / STRATEGY</div>

              <h3>HC ThoughtLab Consultant</h3>

              <p>
                Strategic advisory, enterprise AI,
                business intelligence, document intelligence,
                workforce development and digital transformation.
              </p>

              <Link href="/products" className="hc-text-link">
                Explore AI Solutions →
              </Link>
            </article>

            <article className="card hc-card">
              <div className="tag">
                INDUSTRIAL / ENGINEERING
              </div>

              <h3>HyperTech Corporation</h3>

              <p>
                Industrial computing, embedded edge systems,
                server platforms, customized hardware
                and solution integration for enterprise
                and industrial applications.
              </p>

              <Link href="/solutions" className="hc-text-link">
                Explore Industrial Solutions →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* AI PORTFOLIO */}
      <section className="section hc-section-alt">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HC THOUGHTLAB / AI SOLUTIONS
          </div>

          <h2>
            AI Solutions.
            <span className="hc-yellow">
              {" "}Real Business Impact.
            </span>
          </h2>

          <p className="lead">
            Explore practical AI technologies for business
            intelligence, enterprise operations, document
            analysis, workforce development and digital services.
          </p>

          <div className="grid">
            {aiSolutions.map((solution) => (
              <article className="card hc-card" key={solution.number}>
                <div className="hc-card-number">
                  {solution.number}
                </div>

                <div className="tag">
                  {solution.category}
                </div>

                <h3>{solution.name}</h3>

                <p>{solution.description}</p>

                <a
                  className="hc-text-link"
                  href={solution.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Partner Technology Demo →
                </a>
              </article>
            ))}
          </div>

          <div className="actions">
            <Link href="/products" className="btn hc-btn-yellow">
              Explore AI Portfolio
            </Link>

            <Link href="/contact" className="btn secondary">
              Request AI Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL TECHNOLOGY */}
      <section className="section hc-section">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HYPERTECH / INDUSTRIAL TECHNOLOGY
          </div>

          <h2>
            Industrial Strength.
            <span className="hc-yellow">
              {" "}Intelligent Future.
            </span>
          </h2>

          <p className="lead">
            From industrial-grade computing to intelligent
            edge systems, we support the infrastructure
            behind connected and automated operations.
          </p>

          <div className="grid">
            {industrialSolutions.map((item) => (
              <article className="card hc-card" key={item.title}>
                <div className="tag">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="actions">
            <Link href="/products" className="btn hc-btn-yellow">
              Explore Industrial Products
            </Link>
          </div>
        </div>
      </section>

      {/* CONSULTING & TRANSFORMATION */}
      <section className="section hc-section-alt">
        <div className="container">
          <div className="eyebrow hc-yellow">
            FROM STRATEGY TO EXECUTION
          </div>

          <h2>
            Transform Technology into
            <span className="hc-yellow">
              {" "}Business Value.
            </span>
          </h2>

          <div className="grid">
            <article className="card hc-card">
              <div className="tag">01 / ADVISORY</div>
              <h3>Strategic Advisory</h3>
              <p>
                Digital strategy, AI opportunity assessment,
                operational cost optimization and ROI modeling.
              </p>
            </article>

            <article className="card hc-card">
              <div className="tag">02 / IMPLEMENTATION</div>
              <h3>Solution Orchestration</h3>
              <p>
                Technology selection, partner integration,
                solution architecture and deployment planning.
              </p>
            </article>

            <article className="card hc-card">
              <div className="tag">03 / CAPABILITY</div>
              <h3>Capability Building</h3>
              <p>
                AI literacy, digital leadership, workforce
                development and organizational readiness.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM */}
      <section className="section hc-section">
        <div className="container">
          <div className="eyebrow hc-yellow">
            TECHNOLOGY PARTNER ECOSYSTEM
          </div>

          <h2>Innovation Through Collaboration.</h2>

          <p className="lead">
            HC ThoughtLab works with technology partners,
            including TOM Digital Lab, to explore and
            implement AI solutions aligned with real
            business requirements.
          </p>

          <p>
            Technology demonstrations are provided for
            reference. Licensing, branding, integration
            and commercial availability depend on
            applicable partner agreements.
          </p>

          <div className="actions">
            <Link href="/contact" className="btn secondary">
              Discuss Technology Partnership
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container banner hc-banner">
          <div className="eyebrow hc-yellow">
            LET'S BUILD WHAT'S NEXT
          </div>

          <h2>
            Your Business.
            <span className="hc-yellow">
              {" "}Our Intelligence.
            </span>
          </h2>

          <p>
            Whether you are exploring AI adoption,
            industrial computing or digital transformation,
            HC Tech can help you define the next step.
          </p>

          <div className="actions">
            <Link href="/contact" className="btn hc-btn-yellow">
              Request Consultation
            </Link>

            <Link href="/solutions" className="btn secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
