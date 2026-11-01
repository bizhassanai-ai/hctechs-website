
import Link from "next/link";

const aiSolutions = [
  {
    name: "HC Business AI Intelligence",
    category: "BUSINESS AI",
    description:
      "Business analytics, strategic planning and AI-assisted decision support.",
  },
  {
    name: "HC Enterprise AI Gateway",
    category: "ENTERPRISE AI",
    description:
      "AI orchestration and department-specific intelligent assistants.",
  },
  {
    name: "HC Document Intelligence",
    category: "DOCUMENT AI",
    description:
      "Document analysis, knowledge extraction and intelligent search.",
  },
  {
    name: "HC Learning & Workforce Intelligence",
    category: "WORKFORCE AI",
    description:
      "AI-powered learning, training analytics and workforce development.",
  },
  {
    name: "HC Personal AI Experience",
    category: "CONSUMER AI",
    description:
      "Personalized digital engagement and AI-assisted experiences.",
  },
  {
    name: "HC AI Knowledge & Media Intelligence",
    category: "KNOWLEDGE AI",
    description:
      "AI-assisted publishing, knowledge workflows and content intelligence.",
  },
];

export default function Home() {
  return (
    <main className="hc-home">
      <section className="hero hc-hero">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HC TECH / INTELLIGENCE · INNOVATION · TRANSFORMATION
          </div>

          <h1>
            Engineering Intelligence.
            <br />
            <span className="hc-yellow">
              Enabling Transformation.
            </span>
          </h1>

          <p className="lead">
            Transforming business through enterprise AI,
            strategic advisory and industrial technology.
            From intelligent software to edge computing,
            HC Tech connects innovation with measurable value.
          </p>

          <div className="actions">
            <Link className="btn hc-btn-yellow" href="/contact">
              Start Your Transformation
            </Link>
            <Link className="btn secondary" href="/products">
              Explore Our Solutions
            </Link>
          </div>

          <div className="hc-highlights">
            <span>Enterprise AI</span>
            <span>Business Intelligence</span>
            <span>Industrial Edge Computing</span>
          </div>
        </div>
      </section>

      <section className="section hc-section">
        <div className="container">
          <div className="eyebrow hc-yellow">
            OUR BUSINESS ECOSYSTEM
          </div>
          <h2>
            One Ecosystem.
            <span className="hc-yellow"> Integrated Intelligence.</span>
          </h2>
          <p className="lead">
            HC Tech brings together business transformation
            advisory and industrial technology capabilities.
          </p>

          <div className="grid">
            <article className="card hc-card">
              <div className="tag">AI / STRATEGY</div>
              <h3>HC ThoughtLab</h3>
              <p>
                Strategic advisory, business intelligence,
                enterprise AI, document intelligence,
                workforce development and AI implementation.
              </p>
              <Link className="hc-text-link" href="/products">
                Explore AI Solutions →
              </Link>
            </article>

            <article className="card hc-card">
              <div className="tag">INDUSTRIAL / ENGINEERING</div>
              <h3>HyperTech Corporation</h3>
              <p>
                Industrial-grade server boards, embedded
                computers, edge AI platforms, customized
                hardware and solution integration.
              </p>
              <Link className="hc-text-link" href="/solutions">
                Explore Industrial Solutions →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section hc-section-alt">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HC THOUGHTLAB / AI PORTFOLIO
          </div>
          <h2>
            AI Solutions.
            <span className="hc-yellow"> Real Business Impact.</span>
          </h2>
          <p className="lead">
            Practical AI solutions designed to improve
            decisions, automate workflows and strengthen
            organizational capabilities.
          </p>

          <div className="grid">
            {aiSolutions.map((solution, index) => (
              <article className="card hc-card" key={solution.name}>
                <div className="hc-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="tag">{solution.category}</div>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
              </article>
            ))}
          </div>

          <div className="actions">
            <Link className="btn hc-btn-yellow" href="/products">
              Explore All AI Products
            </Link>
            <Link className="btn secondary" href="/demo">
              View Technology Demos
            </Link>
          </div>
        </div>
      </section>

      <section className="section hc-section">
        <div className="container">
          <div className="eyebrow hc-yellow">
            HYPERTECH / INDUSTRIAL INTELLIGENCE
          </div>
          <h2>
            Industrial Strength.
            <span className="hc-yellow"> Intelligent Future.</span>
          </h2>
          <p className="lead">
            Connecting industrial computing, embedded
            technologies and edge AI with enterprise
            applications and operational requirements.
          </p>

          <div className="grid">
            {[
              ["SERVER TECHNOLOGY", "Industrial Server Boards",
                "Industrial-grade platforms for embedded and server applications."],
              ["EDGE COMPUTING", "Embedded Edge AI",
                "Industrial computing for AIoT, automation and machine vision."],
              ["CUSTOM ENGINEERING", "Board-Level Customization",
                "Hardware selection and customization for OEM applications."],
            ].map(([tag, title, description]) => (
              <article className="card hc-card" key={title}>
                <div className="tag">{tag}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="actions">
            <Link className="btn hc-btn-yellow" href="/products">
              Explore Industrial Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section hc-section-alt">
        <div className="container">
          <div className="eyebrow hc-yellow">
            TECHNOLOGY PARTNERSHIP
          </div>
          <h2>Built Through Collaboration.</h2>
          <p className="lead">
            HC ThoughtLab collaborates with TOM Digital Lab
            on AI solution opportunities across business
            intelligence, enterprise AI, document intelligence,
            learning and specialized digital applications.
          </p>
          <p>
            Licensing, branding, deployment and commercial
            availability are subject to partner agreements.
          </p>
          <div className="actions">
            <Link className="btn secondary" href="/contact">
              Discuss Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner hc-banner">
          <div className="eyebrow hc-yellow">
            LET'S BUILD WHAT'S NEXT
          </div>
          <h2>
            Your Business.
            <span className="hc-yellow"> Our Intelligence.</span>
          </h2>
          <p>
            Accelerate your AI transformation with practical
            solutions, industrial technology and strategic expertise.
          </p>
          <div className="actions">
            <Link className="btn hc-btn-yellow" href="/contact">
              Request AI Consultation
            </Link>
            <Link className="btn secondary" href="/solutions">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
