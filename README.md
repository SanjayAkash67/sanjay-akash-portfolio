# Sanjay Akash V — Portfolio

A dark, editorial-style AI engineer portfolio built with Next.js, React, TypeScript, custom CSS and GSAP scroll reveals.

## Run locally

1. Install Node.js 20 or later.
2. Extract this project.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open http://localhost:3000

## Before publishing

- Add your actual domain to the metadata configuration in `app/layout.tsx` when you have one.
- Add a resume PDF to `public/` and add a download link in the contact section if desired.
- Add verified GitHub repository and live-demo links to each project card when available.
- Confirm award names, project descriptions and technologies are accurate.
- Update the copyright year when needed.

## Deploy to Vercel

Push the folder to a GitHub repository, import that repository into Vercel, and deploy with the default Next.js settings.

## Notes

- The project cards currently use original CSS-generated abstract artwork rather than fabricated screenshots of your actual applications.
- The site uses a responsive mobile navigation and respects reduced-motion preferences.
- Google Fonts are loaded remotely; provide local font files if you need fully self-hosted typography.
