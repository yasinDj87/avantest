# Aurelia & Cie — Luxury Watch Store

Static multi-page site. Works on Vercel with **zero dashboard settings**.

## Pages

| URL | File | Description |
|-----|------|-------------|
| `/` | `index.html` | Homepage |
| `/collections` | `collections.html` | The Vault Collections |
| `/product` | `product.html` | Product detail |
| `/checkout` | `checkout.html` | Private Client Vault |

## Deploy on Vercel (no settings needed)

1. Upload the contents of this folder to your GitHub repo (or replace existing files)
2. In Vercel: Import the repo → **Deploy**
3. Done. The included `vercel.json` handles everything.

No Framework Preset change. No Build Command. No Output Directory.

## Clean URLs

Links use clean paths (`/collections` instead of `/collections.html`) thanks to `vercel.json`.
