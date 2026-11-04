import { site } from '../config/site';

export type Product = {
  slug: string;
  name: string;
  short: string;
  days: number;
  price: number;
  eyebrow: string;
  badge?: string;
  cardLine: string;
  cardIncludes: string;
  body: string;
  body2?: string;
  inTheBox: string[];
  whyTitle: string;
  why: string[];
  lemons: number;
  checkoutUrl: string;
  seoTitle: string;
  seoDescription: string;
  boxLasts: { full: string; relaxed: string; fiftyFifty: string };
};

export const products: Product[] = [
  {
    slug: '7-day-focused-cleanse',
    name: '7-Day Focused Cleanse',
    short: '7-Day',
    days: 7,
    price: 95,
    eyebrow: '7-day program',
    cardLine: 'For first-timers or a quick reset.',
    cardIncludes: 'Includes enough tree syrup for 7 Full Cleanse days (or 9 days on 50/50).',
    body:
      "Seven structured days for a fast, focused reset. Ideal if it's your first cleanse, or if you want a defined week to step away from snacking and overeating and start again with clear habits.",
    // [[confirm size / quantity]] — sizes are left off until confirmed.
    inTheBox: [
      'Madal Bal® Natural Tree Syrup',
      'Senna herbal tea',
      'Natural sea salt for the morning flush',
      'Printed program guide',
    ],
    whyTitle: 'Why 7 days',
    why: [
      'A clear, achievable timeframe',
      'Enough time to break the snacking cycle',
      'Most people feel the routine settle by Day 3 or 4',
      'The ideal introduction to cleansing',
    ],
    lemons: 25,
    checkoutUrl: site.checkout.CHECKOUT_URL_7DAY,
    seoTitle: '7-Day Focused Cleanse — Lemon Detox Cleanse',
    seoDescription: 'Seven structured days for a focused reset. $95 with free tracked shipping.',
    boxLasts: { full: '7 days', relaxed: 'about 10 days', fiftyFifty: '9 days' },
  },
  {
    slug: '14-day-extended-cleanse',
    name: '14-Day Extended Cleanse',
    short: '14-Day',
    days: 14,
    price: 159,
    eyebrow: '14-day program',
    badge: 'Most popular',
    cardLine: 'For a deeper reset and returning cleansers. Best value per day.',
    cardIncludes: 'Includes enough tree syrup for 14 Full Cleanse days (or 18 days on 50/50).',
    body:
      'Our most complete program. Two weeks gives you time to settle fully into the routine and to build habits that last — ideal for returning cleansers, or anyone committed to a bigger change.',
    body2:
      'Many people say the second week is where it clicks — the routine feels effortless, energy feels steady, and the pull back to old habits is noticeably weaker.',
    inTheBox: [
      'Madal Bal® Natural Tree Syrup',
      'Senna herbal tea',
      'Natural sea salt for the morning flush',
      'Printed program guide',
    ],
    whyTitle: 'Why 14 days',
    why: [
      'More time to settle into the routine',
      'A longer break from old eating patterns',
      'Room to try the Relaxed or 50/50 approach over 2–3 weeks',
      'The strongest foundation for long-term habits',
    ],
    lemons: 50,
    checkoutUrl: site.checkout.CHECKOUT_URL_14DAY,
    seoTitle: '14-Day Extended Cleanse — Lemon Detox Cleanse',
    seoDescription: 'Our most complete program. $159 with free tracked shipping.',
    boxLasts: { full: '14 days', relaxed: 'about 20 days', fiftyFifty: '18 days (6 · 6 · 6)' },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)!;
