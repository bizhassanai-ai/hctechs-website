
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & AI Solutions | HC Tech",
  description:
    "Explore HC ThoughtLab AI solutions and HyperTech industrial computing products, including enterprise AI, document intelligence, business analytics and edge computing.",
};

const aiProducts = [
  {
    name: "HC Business AI Intelligence",
    description:
      "AI-powered business analysis, strategic planning and decision support for SMEs and growing enterprises.",
    features: "Business Analytics · Strategy · Decision Support",
    demo: "https://biz-demo.kiatdamrong.shop/",
  },
  {
    name: "HC Enterprise AI Gateway",
    description:
      "A unified AI gateway concept for connecting departmental AI assistants and enterprise workflows.",
    features: "Enterprise AI · API Integration · AI Orchestration",
    demo: "https://gateway.kiatdamrong.shop/",
  },
  {
    name: "HC Document Intelligence",
    description:
      "AI-assisted document analysis, knowledge extraction and question answering for complex business documents.",
    features: "Document AI · Knowledge Search · Summarization",
    demo: "https://docintel-demo.kiatdamrong.shop/",
  },
  {
    name: "HC Learning & Workforce Intelligence",
    description:
      "AI-supported learning management, course analysis and workforce capability development.",
    features: "Learning AI · HR Development · Upskilling",
    demo: "https://lms-demo.kiatdamrong.shop/",
  },
  {
    name: "HC Personal AI Experience",
    description:
      "Personalized AI experiences for consumer engagement, cultural knowledge and lifestyle applications.",
    features: "Consumer AI · Personalization · Digital Experience",
    demo: "https://myduang.com/",
  },
  {
    name: "HC AI Knowledge & Media Intelligence",
    description:
      "AI-assisted knowledge publishing, content intelligence and bilingual technology communication.",
    features: "AI Content · Knowledge Publishing · Media Intelligence",
    demo: "https://koishiai.com/th",
  },
];

const industrialProducts = [
  {
    name: "Industrial-grade Server Boards",
    description:
      "Server-class board platforms for demanding industrial and embedded deployments.",
  },
  {
    name: "Board-level Customization",
    description:
      "Form factor, I/O, lifecycle and integration requirements tailored to your project.",
  },
  {
    name: "Embedded Edge Computers",
    description:
      "Compact, industrial-ready computing for AIoT, machine vision and automation.",
  },
  {
    name: "Industrial Motherboards",
    description:
      "Long-lifecycle boards for industrial applications and OEM integration.",
  },
  {
    name: "Edge AI Platforms",
    description:
      "Hardware platform selection and system-level integration for edge inference.",
  },
];

export default function Page() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="eyebrow">
            HC ThoughtLab / AI Solutions
          </div>

          <h1>Intelligent Solutions for Business Transformation.</h1>

          <p className="lead">
            Explore AI-powered business intelligence, enterprise AI,
            document intelligence, workforce development and
            specialized digital experiences through our technology
            partner ecosystem.
          </p>

          <div className="grid">
            {aiProducts.map((product) => (
              <article className="card" key={product.name}>
                <div className="tag">AI SOLUTIONS</div>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <p>{product.features}</p>

                <div className="actions">
                  <a
                    href={product.demo}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore ${product.name} technology reference`}
                  >
                    Explore Technology
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p>
            AI solutions are offered through technology partnerships.
            Product branding, licensing, deployment and commercial
            availability are subject to partner agreements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            HyperTech / ASRock Industrial Focus
          </div>

          <h2>Industrial Computing Built Around Your Requirements.</h2>

          <p className="lead">
            Industrial-grade computing platforms, embedded systems
            and customized hardware solutions for AIoT,
            automation and edge AI applications.
          </p>

          <div className="grid">
            {industrialProducts.map((product) => (
              <article className="card" key={product.name}>
                <div className="tag">INDUSTRIAL COMPUTING</div>

                <h3>{product.name}</h3>

                <p>{product.description}</p>
              </article>
            ))}
          </div>

          <div className="actions">
            <Link href="/contact" className="btn">
              Request Product Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">
            Technology Partnership
          </div>

          <h2>From AI Strategy to Implementation.</h2>

          <p className="lead">
            HC ThoughtLab works with technology partners,
            including TOM Digital Lab, to connect AI
            applications with practical business requirements.
            HyperTech complements these solutions through
            industrial computing and system integration.
          </p>

          <div className="actions">
            <Link href="/contact" className="btn">
              Discuss Your AI Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
