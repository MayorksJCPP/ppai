# Pattern & Produce website

Plain HTML, CSS and JavaScript. No build step needed.

## Files
- index.html: all four pages (Home, FashionTech, Garment Manufacturing, Workforce Upscaling). Pages switch using the address hash (#home, #fashiontech, #manufacturing, #workforce).
- styles.css: all styling. Colours are the variables at the top (:root and .dk).
- script.js: page switching, form tabs, form/email thank-you messages.
- assets/: put the logo and photos here.

## Deploy on Vercel
1. Push this folder to a GitHub repository (files at the repo root).
2. In Vercel choose Add New > Project, import the repo.
3. Framework Preset: Other. Leave build command and output directory empty. Deploy.

## For the developer (still to do)
- Replace the logo text in the header with the logo image.
- Replace image placeholders (.img boxes) and the tutorial video placeholder.
- Connect the contact form (#form), the tech pack checklist email box, and the WhatsApp number (a.wa).
- Replace all [bracketed] placeholder text and contact details.
- Add payments, booking calendar and analytics as needed.
