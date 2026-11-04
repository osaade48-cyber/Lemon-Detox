# Prompt for Claude Code — rebuild the Lemon Detox Cleanse website

> How to use: unzip this pack into an empty folder, open that folder in Claude Code, and paste everything below the line as your first message.

---

You're rebuilding the e-commerce website for **Lemon Detox Cleanse**, an Australian business selling a 7-day and a 14-day lemon detox program ("Reset Box"). The current site was made in Manus and lives at https://lemondetox-j8zpe92z.manus.space/ — that subscription is cancelled, so you're recreating it from scratch, owned by me, deployable anywhere.

I love the current look. Keep its spirit — warm cream paper, ink-black serif headlines, gold accents, lemon yellow, airy editorial spacing — but make it **cleaner, calmer and more like a premium consumer brand** (think Aesop, Ritual, Seed) with a clearer path to purchase.

## Files in this folder — read these first
- `content.md` — **the single source of truth for every word on the site.** Use it verbatim. It already fixes the wording, naming and claims problems from the old site. Don't invent copy, stats, testimonials, stores or contact details. Anything in `[[double brackets]]` is unconfirmed: render it from a config file (below), leave it empty/hidden on the live site, and list it in the README.
- `testimonials.json` — 38 customer stories (customers' own words — never edit the `story` text). `pullQuote` is an exact excerpt. `featured: true` ones go on the home page. Never render `_removed_do_not_publish`.
- `program-guide/Lemon-Detox-Cleanse-Program-Guide.pdf` — the corrected 12-page guide. Serve it from `/public/downloads/`. `program-guide/guide.html` + `build.py` regenerate it if the copy changes.

## Step 1 — download the original assets
Download these into `public/images/` (keep the base file names, drop the hash). If any fail, keep going, list them in the README, and use a tasteful cream placeholder with the alt text.

```
https://lemondetox-j8zpe92z.manus.space/manus-storage/detox_logo_f7232bff.png            -> logo.png
https://lemondetox-j8zpe92z.manus.space/manus-storage/hero_user_supplied_v2_30be6aed.webp -> hero.webp
https://lemondetox-j8zpe92z.manus.space/manus-storage/girllemon_5e4dd56d.png              -> lifestyle-1.png
https://lemondetox-j8zpe92z.manus.space/manus-storage/girllemon2_205ccb6f.png             -> lifestyle-2.png
https://lemondetox-j8zpe92z.manus.space/manus-storage/lemon_detox_box_refine_2a1c4ec5.png -> reset-box.png
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_hero-bFwVyTPmdY7Wi99LcAwaPR.webp     -> hiw-hero.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_morning-4nDhC68FhcwBeVzEtCStt9.webp  -> hiw-morning.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_evening-SZyqtZkU37tn9sTtYc6eD9.webp  -> hiw-evening.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_full-PZbhWHBcERRp6bGmfZ6Uqc.webp     -> way-full.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_relaxed-iFULypJZxGTqpGrGYBvgaN.webp  -> way-relaxed.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/ing_syrup-NChkE6Qnq7VaDjPa6eu3jX.webp    -> ing-syrup.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/ing_lemon-4eBSXgNPS9iUECoK6tvuZY.webp    -> ing-lemon.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/ing_cayenne-7nXsWFAhkhaGzExz7aDLkb.webp  -> ing-cayenne.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/hiw_ingredient_senna_leaves_v2-kwHBoCigL6jPKCZChxxErz.webp -> senna.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/cat_weight-bhyQdXSLRB5hVRgzS2N46F.webp   -> story-weight.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/cat_energy_v2-XzS4yjSgdEP3KCn7498WAW.webp -> story-energy.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/cat_digestive_v2-oFweJxPPFJ3jVhAkYK62u9.webp -> story-lighter.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/cat_skin_v2-VgDwpx3Eoq4LDm8U52Biv4.webp   -> story-skin.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/cat_lifestyle_v2-jpDt8QeFuPNYgbzS6vGukG.webp -> story-lifestyle.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/faq_hero-5mmAeg5WKHTCDVKi3zjTfr.webp     -> faq-hero.webp
https://d2xsxph8kpxj0f.cloudfront.net/310519663515825387/J8zpE92ZBsrSpD8FjtFHeJ/faq_break-JMQ4ccZtEUTukKdoBzkmD6.webp    -> faq-break.webp
```
Optimise everything (AVIF/WebP, responsive sizes, width/height set, lazy-load below the fold). Recreate the "detox" logo as an SVG if the PNG is low-res (bold geometric sans "det", a lemon-slice "o", "x"; "LEMON DETOX CLEANSE" spaced underneath).

## Step 2 — stack
- **Astro + Tailwind CSS**, static output, TypeScript. Content from `content.md` moved into typed data files / MDX; testimonials from `testimonials.json`.
- A single `src/config/site.ts` holds every business detail: business name, ABN, email, phone, address, shipping times, express price, social links, checkout URLs, analytics ID. **Leave email, phone, address and ABN empty for now** — any component that reads an empty value must render nothing (no placeholder text, no fake details). Pages read from config only — no hard-coded contact details anywhere.
- Deploy target: Netlify or Vercel (include config + a short README on deploying and connecting a domain).
- No client-side JS frameworks unless a component truly needs it (Astro islands for: mobile menu, story filter, FAQ accordion, cart link).

## Step 3 — commerce (important)
The old site had a **fake checkout** — a card form that took no payment. Do not recreate it. Never build a form that collects card numbers.
- Products: `7-Day Focused Cleanse` $95 AUD, `14-Day Extended Cleanse` $159 AUD.
- "Add to cart / Buy now" buttons link to external checkout URLs from config (`CHECKOUT_URL_7DAY`, `CHECKOUT_URL_14DAY`) so I can use **Shopify** (Starter plan / Buy Button) or **Stripe Payment Links**. Until the URLs are set, buttons show "Coming soon" and the README explains how to create each.
- Show price, "Free tracked shipping", and "14-day returns on unopened boxes" next to every buy button.

## Step 4 — site map & flow
`/` · `/how-it-works` · `/products/7-day-focused-cleanse` · `/products/14-day-extended-cleanse` · `/stories` · `/faqs` · `/contact` · `/shipping` · `/returns` · `/privacy` · `/terms` · custom `404`.
**Do not build** a science/research page or a stockists/store-locator page, and don't cite any studies — the old ones were removed on purpose. Do not reuse any contact details, store names or addresses from the old Manus site; they were fake.
Add redirects: `/why-it-works`→`/how-it-works`, `/stockists`→`/`, `/testimonials`→`/stories`, `/products/7-day-focused`→`/products/7-day-focused-cleanse`, `/products/14-day-extended`→`/products/14-day-extended-cleanse`, `/checkout`→`/#programs`.

Cleaner flow — every page should move people toward choosing a program:
1. Home: hero → why → what changes → **programs (side-by-side cards)** → 4 featured stories → guide download → after → CTA. Only ONE guide section (the old home had two).
2. A slim sticky "Shop" bar on mobile once the hero scrolls out.
3. Product pages: image left, details right (price, in the box, you'll also need, buy button), then why-this-length, three-ways summary, short FAQ accordion (shipping / returns / who it isn't for), 2–3 stories.
4. How It Works: sticky in-page section nav on desktop; includes the new "Who it isn't for" and "Coming off the cleanse" sections.
5. Stories: filter tabs, masonry or 2-column cards, disclaimer under the grid.
6. Footer with the exact disclaimer and legal line from `content.md`.

## Step 5 — design system
Colours (CSS variables): cream `#FBF8EF`, paper `#FAF9F6`, ink `#1A1A1A`, ink-soft `#2B2E2F`, muted `#6B6863`, gold `#C9A24A`, gold-deep `#8A6418`, gold-soft `#E8D8A5`, honey `#F4D27A`, lemon `#F2D64B` (from the box).
Type: **Cormorant Garamond** (headlines, 300–500, italic for one emphasised word) + **Plus Jakarta Sans** (body/UI). Self-host via `@fontsource`. Eyebrow labels: 11–12px, uppercase, 0.3em tracking, gold-deep.
Feel: generous whitespace, 1200px max content width, 8px spacing scale, 14px card radius, hairline gold-soft borders, soft shadows only on hover, subtle fade-up on scroll (respect `prefers-reduced-motion`). Buttons: solid ink primary, outlined secondary, both pill-shaped. Product cards should feel like premium packaging, not a pricing table. Keep it light-mode only.
Make it feel more "business": consistent CTAs, trust row (free shipping · returns · secure checkout), clear prices, no gimmicky animated stats, no fake counters.

## Step 6 — forms & integrations
- Contact form: Netlify Forms (or Formspree via config) with honeypot spam protection and the success message from `content.md`. The form is the only contact method shown for now.
- Program Guide: direct download link by default. If `EMAIL_PLATFORM_FORM_URL` is set in config, show an email field that actually posts there with an unticked marketing opt-in. Never fake email capture.
- Analytics: optional Plausible via config; if enabled, mention it in the privacy policy.

## Step 7 — rules that must not be broken
- Copy comes from `content.md`. Don't add health claims (detox, burns fat, boosts metabolism, autophagy, inflammation, cures). Don't add stats, ratings, counts, "since 2008", or "as seen in".
- Never alter a testimonial's words. Always show the testimonial disclaimer.
- Australian English. Names exactly as in the house-style table (Reset Box, 7-Day Focused Cleanse, Full Cleanse / Relaxed / 50/50, "Reset. Refine. Restore.").
- Accessibility: WCAG 2.2 AA contrast (check gold text on cream — use gold-deep for text), visible focus states, semantic headings, alt text, keyboard-usable menu/tabs/accordions.
- SEO: titles and descriptions from `content.md`, Open Graph image (make one from the hero), `sitemap.xml`, `robots.txt`, Product JSON-LD with AUD prices, Organization JSON-LD.
- Performance: Lighthouse 95+ on mobile for Home and a product page.

## Step 8 — finish
1. Run the build, fix all errors, and check every page at 375px, 768px and 1440px.
2. Run Lighthouse and an accessibility check; fix issues.
3. Write `README.md`: how to run locally, how to deploy, how to set checkout links, and a **"Before you publish" checklist** listing every `[[…]]` / empty config value still unset (contact details, ABN, shipping times, box contents) and any image downloads that failed.
4. Give me a short summary of what you built and what I still need to provide.
