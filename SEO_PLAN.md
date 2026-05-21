# SEO Improvement Plan — Rena Aesthetic Lab

Last updated: 2026-05-20

---

## Critical Issues

### 1. Broken OG image
- **File:** `index.html` — `og:image` and `twitter:image`
- **Problem:** Points to `/resources/rena-aesthetic-lab-ai-beauty-concierge.png` which was deleted. Every social share shows a broken image.
- **Fix:** Replace with an existing asset or create a proper 1200×630 social card image.

### 2. Stale "launching" copy in metadata
- **File:** `index.html` — `<title>`, `og:description`, `twitter:description`
- **Problem:** All say "Launching iOS Summer 2026" — the app is already live on the App Store.
- **Fix:**
  - Title: `"Rena — AI Cosmetic Surgery Recovery App | Available on App Store"`
  - Description: Remove launch date, emphasize live app and core value props.

### 3. FAQPage structured data mismatched and stale
- **File:** `index.html` — third `<script type="application/ld+json">` block
- **Problem:** 4 schema Q&As don't match the 4 on-page FAQ items. Also includes "When does Rena launch?" — outdated now that app is live.
- **Fix:** Sync schema Q&As exactly to the FAQ items rendered in `FAQSection` in `Index.tsx`.

### 4. MobileApplication schema has wrong availability
- **File:** `index.html` — first `<script type="application/ld+json">` block
- **Problem:** `"availability": "https://schema.org/PreOrder"` — app is live.
- **Fix:** Change to `"https://schema.org/InStock"`. Also add `"downloadUrl"` pointing to the App Store listing.

---

## High-Impact Wins

### 5. Missing sitemap.xml and robots.txt
- **Problem:** No sitemap exists. Google needs this to discover all 4 pages (home, privacy, terms, support).
- **Fix:** Generate `public/sitemap.xml` listing all routes. Add `public/robots.txt` with sitemap reference.

### 6. Organization schema missing social profiles
- **File:** `index.html` — second `<script type="application/ld+json">` block
- **Problem:** `sameAs` only includes `@RenaAestheticLab` Twitter. Missing real socials.
- **Fix:** Add `"https://www.instagram.com/renaestheticslab/"` and `"https://www.tiktok.com/@renaestheticslab"` to `sameAs` array.

### 7. Hero CTA is an unlinked `<button>`
- **File:** `src/pages/Index.tsx` — `HeroSection`
- **Problem:** "Try it for free" renders as a `<button>` with no `href`. Bots don't follow it.
- **Fix:** Replace with an `<a>` tag linking to `https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432`.

### 8. FAQSection is outside `<main>`
- **File:** `src/pages/Index.tsx` — bottom of `Index` component
- **Problem:** `<FAQSection />` is rendered as sibling of `<main>`, not inside it. Breaks semantic landmark structure.
- **Fix:** Move `<FAQSection />` inside the `<main>` block.

### 9. Missing theme-color and apple-touch-icon
- **File:** `index.html` — `<head>`
- **Fix:**
  ```html
  <meta name="theme-color" content="#584cf4" />
  <link rel="apple-touch-icon" href="/resources/AppIcon-rounded.png" />
  ```

---

## On-Page Content SEO

### 10. H1 too brand-focused, not keyword-rich
- **File:** `src/pages/Index.tsx` — `HeroSection`
- **Current:** "Everyday support for your aesthetic journey"
- **Problem:** No search terms people actually use.
- **Suggestion:** "AI-Powered Cosmetic Surgery Recovery Companion" or similar — preserving brand voice while including target keywords.

### 11. Procedure keywords only appear in one FAQ answer
- **File:** `src/pages/Index.tsx` — `PrepSection`, `AskRenaSection` copy
- **Problem:** BBL, Rhinoplasty, Tummy Tuck, Breast Augmentation named only in FAQ. Google rewards topical density.
- **Fix:** Naturally mention 2–3 procedure names in section body copy (PrepSection and AskRenaSection are best candidates).

### 12. Image alt text could be more keyword-rich
- **File:** `src/pages/Index.tsx` — all `<img>` tags
- **Current:**
  - `alt="Aesthetic wellness community"` — generic
  - `alt="Consultation Prep Screen"` — generic
- **Suggested:**
  - `alt="Rena AI cosmetic surgery recovery app — aesthetic wellness"` 
  - `alt="Rena app consultation prep — procedure research and cost estimates for rhinoplasty, BBL, and more"`

### 13. Add loading="lazy" to below-fold images
- **File:** `src/pages/Index.tsx` — all images except the hero
- **Problem:** No `loading` attribute. Affects LCP and Core Web Vitals (ranking signals).
- **Fix:** Add `loading="lazy"` to prep, roadmap, tracking, and ctaBg images.

---

## Schema Additions

### 14. Add WebSite schema
Enables sitelinks search box in Google for branded queries.
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rena",
  "url": "https://renaesthetic.com"
}
```

### 15. Add SoftwareApplication schema with downloadUrl
Enables "Install" button in Google search results for branded queries.
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rena — Cosmetic Surgery Care",
  "operatingSystem": "iOS",
  "applicationCategory": "HealthApplication",
  "downloadUrl": "https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

---

## Long-Term (Content Strategy)

### 16. No indexable content pages
- **Problem:** Site can only rank for branded terms ("Rena app"). Zero coverage of long-tail queries the app directly serves:
  - "BBL recovery week 3 swelling normal"
  - "rhinoplasty consultation questions to ask"
  - "tummy tuck recovery timeline week by week"
  - "what to expect after breast augmentation"
- **Fix:** Add a blog or resource section targeting 5–10 of these queries. Highest-leverage SEO investment long-term.

---

## Priority Order

| # | Change | File | Effort | Impact |
|---|---|---|---|---|
| 1 | Fix broken OG/Twitter image | `index.html` | Low | High |
| 2 | Update stale launch copy in metadata | `index.html` | Low | High |
| 3 | Sync FAQPage schema to actual FAQ | `index.html` | Low | High |
| 4 | Fix `availability: InStock` + add App Store URL | `index.html` | Low | High |
| 5 | Add `sitemap.xml` + `robots.txt` | `public/` | Low | High |
| 6 | Add social profiles to Organization `sameAs` | `index.html` | Low | Medium |
| 7 | Fix hero CTA button → `<a>` tag | `Index.tsx` | Low | Medium |
| 8 | Move FAQSection inside `<main>` | `Index.tsx` | Low | Low |
| 9 | Add `theme-color` + `apple-touch-icon` | `index.html` | Low | Low |
| 10 | Keyword-enrich H1 + section body copy | `Index.tsx` | Medium | High |
| 11 | Add `loading="lazy"` + explicit img dimensions | `Index.tsx` | Medium | Medium |
| 12 | Improve image `alt` text | `Index.tsx` | Low | Medium |
| 13 | Add WebSite + SoftwareApplication schemas | `index.html` | Low | Medium |
| 14 | Blog/resource content for long-tail keywords | New pages | High | Very High |
