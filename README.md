# HCTech.info — HC ThoughtLab Consultant

Next.js App Router, responsive five-page corporate website. Static export suitable for Cloudflare Pages free tier. No database or paid API needed.

## Local preview

Install Node.js 20.9+ and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Free deployment via Cloudflare Pages

1. Create a GitHub repository and upload the contents of this folder (not the ZIP itself).
2. Log in to Cloudflare and open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository. Framework preset: Next.js (Static HTML Export) if available; otherwise set build command `npm run build` and output directory `out`.
4. Deploy and test the generated `*.pages.dev` URL.
5. Add custom domain `hctech.info` in the Pages project's Custom domains settings, then follow the displayed DNS/zone setup steps.
6. If moving authoritative nameservers to Cloudflare, **first copy existing MX, SPF, DKIM, DMARC and other DNS records** to avoid disrupting hassanai@hctech.info. Never delete mail records to connect the website.
7. Test HTTPS, both apex and www as configured, navigation, email and phone links.

## Notes

- Hosting can be free within Cloudflare's plan limits; domain renewal remains payable to your registrar.
- Contact uses `mailto:` and does not store leads. For a real web form, add spam protection, consent/privacy notices and a secure form backend.
- Demo is a landing page, not a functioning dashboard.
- Verify branding, authorization to use partner logos, product models, privacy policy and legal company details before launch.
- For dynamic Next.js features, Cloudflare Pages static export will not suffice; choose an appropriate Workers deployment architecture.
