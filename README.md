# Nutpapop Yasawut — Portfolio

Single-page Next.js portfolio site.

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → Import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.

## Customise

| What | Where |
|------|-------|
| Resume PDF | Drop `resume.pdf` into `/public/` |
| Your name / links | `pages/index.tsx` — search for `winth03` or `nutpapop` |
| Colors | CSS variables in the `<style jsx global>` block |
| Sections | Add/remove `<section>` blocks in `index.tsx` |
