/**
 * Everything sold on the Shop page. Prices in AUD.
 * Checkout links: set `checkout` for each item (Stripe Payment Link or Shopify link).
 * Until a link is set, the button opens the contact form with an order request pre-filled.
 */
import { products as programs } from './products';
import { site } from '../config/site';

export type Variant = { label: string; price: number; was?: number; checkout?: string };
export type ShopItem = {
  id: string;
  name: string;
  category: 'programs' | 'essentials' | 'books' | 'wellness';
  image: string; // file name in src/assets/products or src/assets/images
  size?: string;
  price: number;
  was?: number;
  blurb: string;
  note?: string;
  href?: string; // detail page, programs only
  badge?: string;
  checkout?: string;
  variants?: Variant[];
};

export const categories = [
  { id: 'programs', label: 'Programs', title: 'The Reset Box', intro: 'Everything you need for your cleanse, in one box. Just add fresh lemons and cayenne.' },
  { id: 'essentials', label: 'Essentials', title: 'Lemon Detox essentials', intro: 'Top up your program, extend it, or make it for two.' },
  { id: 'books', label: 'Books', title: 'Books', intro: 'The background, the method and the recipes.' },
  { id: 'wellness', label: 'Wellness', title: 'Wellness', intro: 'Natural pantry staples for everyday life after your reset.' },
] as const;

const p14 = programs.find((p) => p.days === 14)!;
const p7 = programs.find((p) => p.days === 7)!;

export const shop: ShopItem[] = [
  { id: 'reset-14', name: p14.name, category: 'programs', image: 'product-14day', price: p14.price, badge: 'Most popular', href: `/products/${p14.slug}`, checkout: p14.checkoutUrl,
    blurb: 'Our most complete program. Two weeks to settle into the routine and build habits that last.' },
  { id: 'reset-7', name: p7.name, category: 'programs', image: 'product-7day', price: p7.price, href: `/products/${p7.slug}`, checkout: p7.checkoutUrl,
    blurb: 'Seven structured days for a focused reset. Ideal for your first cleanse.' },

  { id: 'madal-bal', name: 'Madal Bal® Natural Tree Syrup', category: 'essentials', image: 'madal-bal-syrup', size: '1000 ml', price: 79, checkout: site.checkout.shop?.['madal-bal'],
    blurb: 'The key ingredient of the Lemon Detox drink — a balanced blend of maple and palm syrups. Extend your program or share it with a partner.' },
  { id: 'senna', name: 'Senna Tea Leaves', category: 'essentials', image: 'senna-tea-pack', size: '18 g', price: 5, checkout: site.checkout.shop?.['senna'],
    blurb: 'Mild herbal senna tea for the evening routine.' },
  { id: 'sea-salt', name: 'Detox Sea Salt', category: 'essentials', image: 'sea-salt-pack', size: '100 g', price: 2.8, checkout: site.checkout.shop?.['sea-salt'],
    blurb: 'Natural, uniodised sea salt for the morning salt-water flush.' },
  { id: 'cayenne', name: 'Cayenne Pepper', category: 'essentials', image: 'cayenne-pepper', size: '30 g', price: 2.6, checkout: site.checkout.shop?.['cayenne'],
    blurb: 'Just a pinch adds gentle warmth to every glass.' },

  { id: 'lemon-detox-book', name: 'The Lemon Detox Diet Program', category: 'books', image: 'lemon-detox-diet-book', size: 'Book · K.A. Beyer', price: 18.95, checkout: site.checkout.shop?.['lemon-detox-book'],
    blurb: 'The original program book by K.A. Beyer — the background to the cleanse, how it works and how to follow it.' },
  { id: 'lemon-book', name: 'The Lemon Book', category: 'books', image: 'the-lemon-book', size: 'Book · Ray Collins', price: 20.95, checkout: site.checkout.shop?.['lemon-book'],
    blurb: 'A handy guide to the many everyday uses of the humble lemon — in the kitchen and around the home.' },

  { id: 'bee-pollen', name: 'Pollen Power Bee Pollen', category: 'wellness', image: 'bee-pollen', price: 28, checkout: site.checkout.shop?.['bee-pollen-250'],
    blurb: 'Pure bee pollen granules. Sprinkle over breakfast, smoothies or yoghurt.',
    note: 'Not suitable for anyone with bee, pollen or honey allergies. Best enjoyed after your cleanse, not during it.',
    variants: [
      { label: '250 g', price: 28, checkout: site.checkout.shop?.['bee-pollen-250'] },
      { label: '500 g', price: 42, checkout: site.checkout.shop?.['bee-pollen-500'] },
      { label: '750 g', price: 55, was: 75, checkout: site.checkout.shop?.['bee-pollen-750'] },
      { label: '1 kg', price: 65, was: 80, checkout: site.checkout.shop?.['bee-pollen-1000'] },
    ] },
];

export const money = (n: number) => '$' + (Number.isInteger(n) ? n.toString() : n.toFixed(2));
export const orderLink = (name: string) => `/contact?topic=order&product=${encodeURIComponent(name)}`;
