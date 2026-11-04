# Lemon Detox Cleanse — website

The new **lemondetox.com.au**: a fast, static site built with [Astro](https://astro.build) and Tailwind CSS.
Owned by you, no subscription, deployable to Netlify or Vercel for free.

**Pages:** `/` · `/how-it-works` · `/products/7-day-focused-cleanse` · `/products/14-day-extended-cleanse` ·
`/stories` · `/faqs` · `/contact` · `/shipping` · `/returns` · `/privacy` · `/terms` · custom `404`.
Old Manus URLs (`/why-it-works`, `/stockists`, `/testimonials`, `/products/7-day-focused`,
`/products/14-day-extended`, `/checkout`) redirect to their new homes.

Quality checks at the time of build: Lighthouse **100 / 100 / 100 / 100** (mobile — performance,
accessibility, best practices, SEO) on Home, a product page and How It Works; **0 axe-core
WCAG 2.2 AA violations** on every page at 375px and 1440px.

---

## Run it locally

You need [Node.js 22+](https://nodejs.org).

```bash
npm install
npm run dev        # http://localhost:4321 — live reload while you edit
npm run build      # production build into ./dist
npm run preview    # serve ./dist locally
```

## Where things live

| What | File |
|---|---|
| **Every business detail** (email, phone, ABN, shipping times, checkout links, analytics…) | `src/config/site.ts` |
| Products, prices, "in the box", "why 7/14 days" | `src/data/products.ts` |
| Customer stories (never edit the `story` text) | `src/data/testimonials.json` |
| Page copy | `src/pages/*.astro` (source of truth: `docs/brief/content.md`) |
| Colours, fonts, buttons | `src/styles/global.css` |
| Photos | `src/assets/images/` — see the README in that folder |
| Program Guide PDF | `public/downloads/Lemon-Detox-Cleanse-Program-Guide.pdf` (regenerate from `docs/brief/program-guide/`) |
| Social share image | `public/og.png` (regenerate: `node scripts/og.cjs`) |

Any value left empty in `site.ts` renders **nothing** — no placeholder text, no fake details.

---

## Deploy

### Netlify (recommended — the contact form works with zero setup)
1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
   Build settings come from `netlify.toml` (`npm run build`, publish `dist`).
3. **Domain management → Add a domain** → `lemondetox.com.au`. Netlify shows the DNS
   records to set at your domain registrar (or move nameservers to Netlify). HTTPS is automatic.
4. **Forms:** Netlify detects the `contact` form on the first deploy. Under
   **Forms → Form notifications** add an email notification so messages reach your inbox.

### Vercel
1. Import the repo at vercel.com/new (it detects Astro automatically). Redirects come from `vercel.json`.
2. **Settings → Domains** → add `lemondetox.com.au` and follow the DNS instructions.
3. Vercel has no built-in forms: create a free form at [formspree.io](https://formspree.io) and paste its
   endpoint into `forms.FORMSPREE_ENDPOINT` in `src/config/site.ts`.

---

## Selling: set up checkout links

There is **no card form on this site** (the old Manus "checkout" took no payment and has been removed).
Buy buttons link to a hosted checkout. Until a link is set, the button shows **"Coming soon"**.

**Option A — Stripe Payment Links** (simplest, no monthly fee)
1. Stripe Dashboard → **Product catalogue → Add product**: "7-Day Focused Cleanse", $95.00 AUD, one-off.
   Repeat for "14-Day Extended Cleanse", $159.00 AUD.
2. **Payment Links → New** for each product. Turn on *Collect customers' addresses* (shipping, Australia only)
   and add a free shipping rate (plus an express rate if you offer it).
3. After payment, redirect to `https://lemondetox.com.au/` (or a thank-you page).
4. Paste the two `https://buy.stripe.com/...` links into `CHECKOUT_URL_7DAY` / `CHECKOUT_URL_14DAY`,
   and set `checkout.provider` to `'Stripe'`.

**Option B — Shopify Starter plan**
1. Create the two products in Shopify with the prices above and set up free shipping.
2. For each product, copy its **checkout link** (Shopify Starter → product → *Share link*, or
   `https://YOURSTORE.myshopify.com/cart/VARIANT_ID:1`).
3. Paste them into `CHECKOUT_URL_7DAY` / `CHECKOUT_URL_14DAY`. Optionally set `CART_URL`
   (adds a **Cart** link to the nav) and set `checkout.provider` to `'Shopify'`.

Then rebuild/redeploy. The product JSON-LD automatically switches from *PreOrder* to *InStock*.

## Program Guide & email sign-up
By default the guide is a direct PDF download (no fake email gate). If you connect an email platform
(Mailchimp, Klaviyo, ConvertKit…), paste its form action URL into `forms.EMAIL_PLATFORM_FORM_URL`
(and `EMAIL_FIELD_NAME` if it expects something other than `email`). The guide block then shows a real
email field with an **unticked** marketing opt-in.

## Analytics
Set `analytics.PLAUSIBLE_DOMAIN` to `lemondetox.com.au` to enable [Plausible](https://plausible.io)
(cookie-free). The privacy policy mentions it automatically when enabled.

---

## ✅ Before you publish

Everything below is currently **empty** in `src/config/site.ts` (or marked `[[…]]` in the brief) and is
hidden on the live site until you fill it in.

**Selling**
- [ ] `checkout.CHECKOUT_URL_7DAY` and `CHECKOUT_URL_14DAY` — buttons say "Coming soon" until set
- [ ] `checkout.provider` — "Stripe" or "Shopify" (named in Privacy and Terms)
- [ ] `checkout.CART_URL` (optional)

**Business details**
- [ ] `legalName`, `abn` (ABN also appears in the footer legal line)
- [ ] `email`, `phone`, `address` — currently the contact form is the only contact method (as briefed)
- [ ] `state` — governing law in the Terms
- [ ] `gstRegistered` — `true` adds "incl. GST" next to prices and in Terms
- [ ] `social.instagram` / `facebook` / `tiktok`

**Shipping & returns**
- [ ] `shipping.dispatchDays` (brief suggests 1), `metro` (2–5), `regional` (4–8), `remote` (5–10) — confirm with your carrier
- [ ] `shipping.expressPrice` (brief suggests $15) and `expressDays` (1–3)
- [ ] `returns.damagedReportDays` (brief suggests 7)

**Box contents** (in `src/data/products.ts` → `inTheBox`; sizes deliberately left off until confirmed)
- [ ] Tree syrup size — 7-Day: 1 litre? 14-Day: 2 × 1 litre?
- [ ] Senna herbal tea quantity
- [ ] Sea salt included?

**Privacy & data**
- [ ] `forms.EMAIL_PLATFORM_NAME` (if you add email sign-up)
- [ ] `data.overseasCountries` — where your providers store data (e.g. "the United States")
- [ ] `privacyLastUpdated` — e.g. "4 November 2026"
- [ ] Have the Privacy Policy and Terms reviewed — they follow the brief's required structure but aren't legal advice

**Photos** — none of the original images could be downloaded during the build (the Manus storage and
CloudFront hosts were unreachable from the build environment). Every spot currently shows a designed
illustration. To use real photography, save files into `src/assets/images/` with the names listed in
that folder's README:
- [ ] `hero` (was `hero_user_supplied_v2.webp`)
- [ ] `product-7day`, `product-14day` (was `lemon_detox_box_refine.png`)
- [ ] `lifestyle-1` (was `girllemon.png`)
- [ ] `ing-syrup`, `ing-lemon`, `ing-cayenne` (were `ing_syrup` / `ing_lemon` / `ing_cayenne`)
- [ ] Optional: recreate the logo from your original artwork (currently rebuilt in code)

**Domain**
- [ ] Point `lemondetox.com.au` at Netlify/Vercel. The site URL is set in `astro.config.mjs` and `site.ts`.
