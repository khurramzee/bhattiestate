# Bhatti Estate & Builders — Website (Netlify-ready)

This repository is a scaffold for a modern real-estate website for **Bhatti Estate & Builders**. It includes:

- Next.js + Tailwind scaffold and components (static-export friendly)
- Netlify CMS config for listings and blog
- 6 prewritten blog posts (English) in `/content/blog`
- 4 sample property listings in `/content/listings`
- `public/assets/BhattiEstate.png` (logo)
- `netlify.toml`, `CNAME`, and deployment instructions

> **Note:** This is a static repository scaffold. To fully enable Netlify CMS with Identity & Git Gateway, follow the steps in the "Netlify Deployment" section below.

## Quick local preview (developer)

You will need Node.js and npm installed.

```bash
npm install
npm run dev
```

This scaffold is designed to be deployable on Netlify with static export (`next export`).

## Netlify Deployment (non-developer checklist)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Create a new site in Netlify and connect the repository.
3. In Netlify site settings -> Domain management -> Add custom domain `bhattiestate.com` and verify DNS as needed.
4. Enable HTTPS (Netlify provides a free certificate).
5. Enable **Identity** in Netlify dashboard -> Settings -> Identity -> Enable Identity. Invite the admin user (owner) email `info@bhattiestate.com`.
6. In Identity settings, enable **Git Gateway**. Go to "Services" and enable Git Gateway.
7. Visit `https://<your-site>/admin` to log in to Netlify CMS (it will prompt for Identity login).
8. Use the CMS to add/edit listings and blog posts. The collections are preconfigured in `public/admin/config.yml`.

## Files of interest
- `public/admin/config.yml` — Netlify CMS configuration
- `content/blog/*.md` — 6 blog posts (ready)
- `content/listings/*.md` — sample listings
- `netlify.toml` — Netlify build config
- `CNAME` — contains `bhattiestate.com`
- `public/assets/BhattiEstate.png` — logo provided

## Fill placeholders
- Add Google Maps API key or analytics ID to environment variables as documented in this README.
- Update contact email/phone in CMS Settings collection after enabling CMS if needed.

If you want, I can now (if you approve) prepare this repository as a downloadable zip file (already included) and you can upload to GitHub/Netlify. 
