
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hctech.info"),
  title: {
    default: "HC Tech | AI & Industrial Technology",
    template: "%s | HC Tech",
  },
  description:
    "HC Tech connects enterprise AI, strategic advisory, industrial computing, embedded edge systems and digital transformation solutions in Thailand.",
  applicationName: "HC Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HC Tech",
    title: "HC Tech | AI & Industrial Technology",
    description:
      "Engineering Intelligence. Enabling Transformation.",
    url: "https://www.hctech.info",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Demo", href: "/demo" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <header className="site-header">
          <div className="container bar">
            <Link
              href="/"
              className="brand"
              aria-label="HC Tech — Home"
            >
              HC<span>Tech</span>
            </Link>

            <nav
              className="site-nav"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="header-cta"
            >
              Let's Talk
            </Link>
          </div>
        </header>

        <div id="main-content">
          {children}
        </div>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/" className="brand">
                  HC<span>Tech</span>
                </Link>
                <p>
                  Engineering Intelligence.
                  <br />
                  Enabling Transformation.
                </p>
                <p>
                  Enterprise AI · Industrial Computing ·
                  Strategic Advisory
                </p>
              </div>

              <div className="footer-column">
                <h3>Our Businesses</h3>

                <p>
                  <strong>HC ThoughtLab Consultant</strong>
                  <br />
                  AI, Strategic Advisory & Digital
                  Transformation
                </p>

                <p>
                  <strong>
                    HyperTech Corporation Co., Ltd.
                  </strong>
                  <br />
                  Industrial Computing, Embedded Systems
                  & Edge AI
                </p>
              </div>

              <div className="footer-column">
                <h3>Explore</h3>
                <Link href="/solutions">Solutions</Link>
                <Link href="/products">Products</Link>
                <Link href="/demo">Live Demos</Link>
                <Link href="/contact">Contact</Link>
              </div>

              <div className="footer-column">
                <h3>Contact</h3>

                <a href="mailto:hassanai@hctech.info">
                  hassanai@hctech.info
                </a>

                <a href="tel:+66919266669">
                  +66 91 926 6669
                </a>

                <p>Thailand</p>
              </div>
            </div>

            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} HC Tech.
                All rights reserved.
              </span>

              <span>
                Partner products and commercial offerings
                are subject to applicable agreements.
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
