/**
 * Every business detail lives here. Pages read from this file only.
 *
 * Empty string = not confirmed yet. Any component that reads an empty value
 * renders NOTHING (no placeholder text, no fake details). Fill these in before
 * launch — see the "Before you publish" checklist in README.md.
 */
export const site = {
  name: 'Lemon Detox Cleanse',
  tagline: 'Reset. Refine. Restore.',
  url: 'https://lemondetox.com.au',
  description:
    'A structured 7- or 14-day cleanse built around one simple drink.',

  // ── Business details (leave empty until confirmed) ─────────────────────────
  legalName: '', // e.g. "Lemon Detox Cleanse Pty Ltd"
  abn: '', // e.g. "12 345 678 901"
  email: '',
  phone: '',
  address: '',
  state: '', // governing-law state for Terms, e.g. "New South Wales"
  gstRegistered: null as boolean | null, // true → prices shown "incl. GST"

  // ── Shipping ───────────────────────────────────────────────────────────────
  shipping: {
    dispatchDays: '', // e.g. "1"
    metro: '', // e.g. "2–5"
    regional: '', // e.g. "4–8"
    remote: '', // WA, NT and TAS, e.g. "5–10"
    expressPrice: '', // e.g. "$15"
    expressDays: '', // e.g. "1–3"
  },
  returns: {
    damagedReportDays: '', // e.g. "7"
  },

  // ── Commerce: external checkout (Shopify Buy Button / Stripe Payment Links) ─
  // Until these are set, buy buttons show "Coming soon".
  checkout: {
    CHECKOUT_URL_7DAY: '',
    CHECKOUT_URL_14DAY: '',
    CART_URL: '', // optional — e.g. your Shopify cart URL; shows a Cart link in the nav
    provider: '', // "Shopify" or "Stripe" — named in the privacy policy
  },

  // ── Forms & integrations ───────────────────────────────────────────────────
  forms: {
    // Leave empty to use Netlify Forms (works automatically on Netlify).
    // Set to a Formspree endpoint (https://formspree.io/f/xxxx) to use Formspree instead.
    FORMSPREE_ENDPOINT: '',
    // Optional: an email-platform form action (Mailchimp, Klaviyo, ConvertKit…).
    // When set, the guide block shows an email field that posts here.
    EMAIL_PLATFORM_FORM_URL: '',
    EMAIL_PLATFORM_NAME: '', // e.g. "Mailchimp" — named in the privacy policy
    EMAIL_FIELD_NAME: 'email', // the field name your platform expects
  },
  analytics: {
    PLAUSIBLE_DOMAIN: '', // e.g. "lemondetox.com.au" — enables Plausible + privacy mention
  },
  data: {
    overseasCountries: '', // where providers may store data, e.g. "the United States"
  },
  privacyLastUpdated: '', // e.g. "4 November 2026"

  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
  },

  guidePdf: '/downloads/Lemon-Detox-Cleanse-Program-Guide.pdf',
};

export type Site = typeof site;
