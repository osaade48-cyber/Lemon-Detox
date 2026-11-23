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
  photo?: boolean; // full-bleed studio photo (cropped to fill) rather than a cut-out on white
  size?: string;
  price: number;
  was?: number;
  blurb: string;
  note?: string;
  href?: string; // detail page, programs only
  badge?: string;
  checkout?: string;
  variants?: Variant[];
  slug?: string; // buy page at /products/<slug> (non-program items)
  detail?: Detail;
};

export type Detail = {
  eyebrow: string;
  tagline: string; // short line under the name
  intro: string[];
  highlights: string[];
  facts: [string, string][];
  howTo?: { title: string; intro?: string; steps: [string, string][] };
  story?: { label: string; title: string; paras: string[]; bullets?: string[] };
  warning?: string;
  inBox?: boolean; // included in every Reset Box
  related: string[];
};

export const categories = [
  { id: 'programs', label: 'Programs', title: 'The Reset Box', intro: 'Everything you need for your cleanse, in one box — plus the Madal Bal® syrup on its own to extend or repeat your program.' },
  { id: 'essentials', label: 'Essentials', title: 'Lemon Detox essentials', intro: 'Top up your program, extend it, or make it for two.' },
  { id: 'books', label: 'Books', title: 'Books', intro: 'The background, the method and the recipes.' },
  { id: 'wellness', label: 'Wellness', title: 'Wellness', intro: 'Natural pantry staples for everyday life after your reset.' },
] as const;

const p14 = programs.find((p) => p.days === 14)!;
const p7 = programs.find((p) => p.days === 7)!;

export const shop: ShopItem[] = [
  { id: 'reset-14', name: p14.name, category: 'programs', image: 'product-14day', photo: true, price: p14.price, badge: 'Most popular', href: `/products/${p14.slug}`, checkout: p14.checkoutUrl,
    blurb: 'Our most complete program. Two weeks to settle into the routine and build habits that last.' },
  { id: 'reset-7', name: p7.name, category: 'programs', image: 'product-7day', photo: true, price: p7.price, href: `/products/${p7.slug}`, checkout: p7.checkoutUrl,
    blurb: 'Seven structured days for a focused reset. Ideal for your first cleanse.' },

  { id: 'madal-bal',
    slug: 'madal-bal-natural-tree-syrup',
    detail: {
      eyebrow: 'The main ingredient',
      tagline: 'The heart of every Lemon Detox drink.',
      intro: [
        'Madal Bal® Natural Tree Syrup is the main ingredient in the Lemon Detox cleanse — a unique blend of select palm syrup and Grade C maple syrup, formulated using only the purest ingredients, specifically for the program.',
        'It supplies natural carbohydrates throughout the day, so your body stays nourished and energised while your digestive system rests. It’s included in every Reset Box, and available on its own to extend, repeat or share your program.',
      ],
      highlights: ['Formulated specifically for the Lemon Detox cleanse', 'A balanced blend of palm and Grade C maple syrup', 'Natural carbohydrates for steady energy', 'Buy on its own to extend or restart a program'],
      facts: [['Size', '1 litre tin'], ['Makes', 'About seven 2-litre batches'], ['Use', 'Mixed with lemon, cayenne and water'], ['Included in', 'Every Reset Box']],
      howTo: { title: 'Mixing the drink', intro: 'A 2-litre batch covers most of the day. Shake well, then mix:', steps: [
        ['140 ml', 'Madal Bal® Natural Tree Syrup'],
        ['3½ lemons', 'freshly squeezed (about 140 ml of juice)'],
        ['2–3 pinches', 'of cayenne pepper'],
        ['≈ 1700 ml', 'fresh or filtered water'],
      ] },
      story: { label: 'Its history', title: 'Five years in the <em>making.</em>', paras: [
        'In the early 1980s, a worldwide team of specialists led by Swiss practitioner Dr K.A. Beyer — with the experience, advice and help of Stanley Burroughs — set out to improve the original lemon drink.',
        'They found that maple syrup alone did not fully support the cleanse. Cleansing the body mattered, but so did giving it plenty of energy along the way. Five intensive years and thousands of development tests later, the Madal Bal® Natural Tree Syrup was created to replace maple syrup in the original recipe.',
        'The result is a finely balanced mixture that meets every requirement of the Lemon Detox cleanse. No other syrup mix will do.',
      ] },
      inBox: true,
      related: ['cayenne', 'senna', 'sea-salt'],
    }, name: 'Madal Bal® Natural Tree Syrup', category: 'programs', image: 'madal-bal-syrup', photo: true, size: '1000 ml', price: 79, checkout: site.checkout.shop?.['madal-bal'],
    blurb: 'The key ingredient of the Lemon Detox drink — a balanced blend of maple and palm syrups. Extend your program or share it with a partner.' },
  { id: 'senna',
    slug: 'senna-tea-leaves',
    detail: {
      eyebrow: 'Evening elimination',
      tagline: 'Organic senna leaves for your evening cup.',
      intro: [
        'Eliminating toxins is the key to a successful cleanse. Senna is a gentle herbal laxative tea that supports your body’s natural elimination while you’re on the program.',
        'While cleansing, aim for at least one bowel movement a day. A cup of senna tea before bed helps keep things moving overnight.',
      ],
      highlights: ['Organic senna tea leaves', 'A mild, natural herbal laxative', 'Taken in the evening, before bed', 'Packed in a sturdy resealable bag'],
      facts: [['Size', '18 g resealable bag'], ['When', 'Evening, before bed'], ['Alternative to', 'The morning sea salt drink'], ['Included in', 'Every Reset Box']],
      howTo: { title: 'Making your evening tea', steps: [
        ['1', 'Add a teaspoon of senna leaves to a tea infuser or pot.'],
        ['2', 'Pour over a cup of freshly boiled water.'],
        ['3', 'Steep for 5–10 minutes — longer for a stronger effect.'],
        ['4', 'Strain and drink before bed.'],
      ] },
      warning: 'Senna is a laxative. Don’t use it for long periods outside the cleanse, and speak with your doctor first if you are pregnant, breastfeeding, taking medication or have a bowel condition.',
      inBox: true,
      related: ['sea-salt', 'madal-bal', 'cayenne'],
    }, name: 'Senna Tea Leaves', category: 'essentials', image: 'senna-tea-pack', photo: true, size: '18 g', price: 5, checkout: site.checkout.shop?.['senna'],
    blurb: 'Mild herbal senna tea for the evening routine.' },
  { id: 'sea-salt',
    slug: 'detox-sea-salt',
    detail: {
      eyebrow: 'Morning elimination',
      tagline: 'For the morning salt-water flush.',
      intro: [
        'The sea salt water drink is a natural way to start each cleansing day. Taken first thing in the morning on an empty stomach, it helps make sure the toxins dissolved during the cleanse are leaving your body.',
        'Each pack holds a 7-day supply in a sturdy resealable bag.',
      ],
      highlights: ['Natural, uniodised sea salt', 'Taken first thing each morning', 'A 7-day supply per pack', 'Sturdy resealable bag'],
      facts: [['Size', '100 g resealable bag'], ['Supply', '7 days'], ['When', 'First thing in the morning'], ['Included in', 'Every Reset Box']],
      howTo: { title: 'The morning drink', steps: [
        ['1', 'Dissolve two teaspoons of sea salt in one litre of warm, purified water.'],
        ['2', 'Drink it on an empty stomach, first thing in the morning.'],
        ['3', 'Stay close to a bathroom for the next hour or so.'],
        ['4', 'Prefer not to? A cup of senna tea is the gentler alternative.'],
      ] },
      warning: 'Not suitable if you have high blood pressure, heart or kidney conditions, or are on a salt-restricted diet. If in doubt, use senna tea instead and check with your doctor.',
      inBox: true,
      related: ['senna', 'madal-bal', 'cayenne'],
    }, name: 'Detox Sea Salt', category: 'essentials', image: 'sea-salt-pack', photo: true, size: '100 g', price: 2.8, checkout: site.checkout.shop?.['sea-salt'],
    blurb: 'Natural, uniodised sea salt for the morning salt-water flush.' },
  { id: 'cayenne',
    slug: 'cayenne-pepper',
    detail: {
      eyebrow: 'In every glass',
      tagline: 'A pinch of warmth in every glass.',
      intro: [
        'Pure ground cayenne pepper is a natural metaboliser and gives the Lemon Detox drink its signature zing.',
        'Just a pinch or two per batch is enough. Prefer something milder? You can swap cayenne for fresh ginger.',
      ],
      highlights: ['Pure ground cayenne pepper', 'Adds a gentle warmth to the drink', 'Can be swapped for ginger', 'Sturdy resealable bag'],
      facts: [['Size', '30 g resealable bag'], ['Use', '2–3 pinches per 2-litre batch'], ['Swap', 'Fresh ginger, if you prefer'], ['Included in', 'Every Reset Box']],
      howTo: { title: 'How much to add', steps: [
        ['2–3 pinches', 'per 2-litre batch of the drink'],
        ['½ pinch', 'per glass, adjusted to taste'],
        ['Tip', 'Start small — you can always add more.'],
      ] },
      inBox: true,
      related: ['madal-bal', 'senna', 'sea-salt'],
    }, name: 'Cayenne Pepper', category: 'essentials', image: 'cayenne-pepper', photo: true, size: '30 g', price: 2.6, checkout: site.checkout.shop?.['cayenne'],
    blurb: 'Just a pinch adds gentle warmth to every glass.' },

  { id: 'lemon-detox-book',
    slug: 'lemon-detox-diet-book',
    detail: {
      eyebrow: 'The program book',
      tagline: 'The original guide to the Lemon Detox cleanse.',
      intro: [
        'The Lemon Detox Diet Program by K.A. Beyer — the specialist who led the team behind the Madal Bal® Natural Tree Syrup — is the original guide to the cleanse.',
        'It covers where the program came from, how and why it works, and how to prepare for, follow and finish your cleanse. A copy comes in every Reset Box; buy an extra for a friend or partner doing the program with you.',
      ],
      highlights: ['Written by Dr K.A. Beyer', 'The background and the method', 'Preparing, cleansing and easing out', 'Included in every Reset Box'],
      facts: [['Author', 'K.A. Beyer'], ['Format', 'Paperback'], ['Best for', 'Anyone doing the cleanse'], ['Included in', 'Every Reset Box']],
      inBox: true,
      related: ['lemon-book', 'madal-bal', 'bee-pollen'],
    }, name: 'The Lemon Detox Diet Program', category: 'books', image: 'lemon-detox-diet-book', photo: true, size: 'Book · K.A. Beyer', price: 18.95, checkout: site.checkout.shop?.['lemon-detox-book'],
    blurb: 'The original program book by K.A. Beyer — the background to the cleanse, how it works and how to follow it.' },
  { id: 'lemon-book',
    slug: 'the-lemon-book',
    detail: {
      eyebrow: 'Ray Collins',
      tagline: '“Mother Nature’s cure-all for everyday problems.”',
      intro: [
        'Prepare to be amazed by the hundreds of ways a lemon could improve your life.',
        'In this entertaining handbook, Ray Collins shows how to use lemons around the home and for everyday wellbeing — as a home cleaner, stain remover, insect repellent and beauty enhancer. By the end, you’ll have new ideas about how you eat, clean your home, buy food and care for yourself.',
      ],
      highlights: ['Hundreds of everyday uses for lemons', 'Natural cleaning without harsh chemicals', 'Kitchen, home and beauty ideas', 'Fresher home, less waste'],
      facts: [['Author', 'Ray Collins'], ['Format', 'Paperback'], ['Best for', 'Lemon lovers and natural living']],
      story: { label: 'Inside the book', title: 'A few things you’ll <em>learn.</em>', paras: [
        'Your home will smell fresher, you’ll be more environmentally friendly, and you might even save money on products you don’t need.',
      ], bullets: [
        'Clean kitchen surfaces without nasty, abrasive chemicals',
        'Remove unpleasant odours from your fridge, instantly and easily',
        'Simple lemon remedies for the digestive system',
        'Soothing ideas for sore throats and coughs',
        'Keep your scalp healthy and your breath fresh',
        'Tips to reduce water retention',
      ] },
      related: ['lemon-detox-book', 'bee-pollen', 'madal-bal'],
    }, name: 'The Lemon Book', category: 'books', image: 'the-lemon-book', photo: true, size: 'Book · Ray Collins', price: 20.95, checkout: site.checkout.shop?.['lemon-book'],
    blurb: 'A handy guide to the many everyday uses of the humble lemon — in the kitchen and around the home.' },

  { id: 'bee-pollen',
    slug: 'pollen-power-bee-pollen',
    detail: {
      eyebrow: 'After your cleanse',
      tagline: 'Pure Western Australian eucalyptus bee pollen.',
      intro: [
        'Bee pollen has been called “food of the gods” and has been used as a food source throughout history, prized for energy and stamina.',
        'Pollen Power is home grown, chemical free and harvested in the unpopulated forests and conservation reserves of Western Australia, from the highest-quality eucalyptus species. Western Australian eucalyptus pollen is renowned as some of the tastiest in the world.',
      ],
      highlights: ['Home grown in Western Australia', 'Chemical free, from eucalyptus forests', 'Easy-to-digest granules', 'Ideal after your cleanse'],
      facts: [['Sizes', '250 g, 500 g, 750 g, 1 kg'], ['Origin', 'Western Australia'], ['Form', 'Granules'], ['Use', 'Sprinkle on breakfast, smoothies or yoghurt']],
      howTo: { title: 'How to enjoy it', steps: [
        ['Start small', 'Begin with a few granules to check you tolerate it.'],
        ['Daily', 'Build up to about a teaspoon a day.'],
        ['Sprinkle', 'Over cereal, yoghurt, toast or into smoothies.'],
        ['Store', 'Keep sealed in a cool, dry place.'],
      ] },
      story: { label: 'Lemon Detox & bee pollen', title: 'The perfect <em>next step.</em>', paras: [
        'The Lemon Detox cleanse is followed by a recovery stage. To get the most from your program, it’s a good idea to follow it with a natural food supplement for a while — and bee pollen is ideal.',
        'Where your bee pollen comes from matters: it can be the difference between a high-quality product and one that offers very little.',
      ], bullets: [
        'Provides trace elements, minerals, amino acids, vitamins, fatty acids and enzymes',
        'Granule form for easy digestion',
        'A natural source of protein',
        'Favoured by athletes for energy and stamina',
      ] },
      warning: 'Not suitable for anyone allergic to bees, pollen or honey — in rare cases bee pollen can cause a severe allergic reaction. Not for children under 2. Enjoy after your cleanse, not during it.',
      related: ['lemon-book', 'madal-bal', 'lemon-detox-book'],
    }, name: 'Pollen Power Bee Pollen', category: 'wellness', image: 'bee-pollen', photo: true, price: 28, checkout: site.checkout.shop?.['bee-pollen-250'],
    blurb: 'Pure bee pollen granules. Sprinkle over breakfast, smoothies or yoghurt.',
    note: 'Not suitable for anyone with bee, pollen or honey allergies. Best enjoyed after your cleanse, not during it.',
    variants: [
      { label: '250 g', price: 28, checkout: site.checkout.shop?.['bee-pollen-250'] },
      { label: '500 g', price: 42, checkout: site.checkout.shop?.['bee-pollen-500'] },
      { label: '750 g', price: 55, was: 75, checkout: site.checkout.shop?.['bee-pollen-750'] },
      { label: '1 kg', price: 65, was: 80, checkout: site.checkout.shop?.['bee-pollen-1000'] },
    ] },
];

for (const it of shop) if (it.slug) it.href = `/products/${it.slug}`;
export const bySlug = (slug: string) => shop.find((i) => i.slug === slug);
export const byId = (id: string) => shop.find((i) => i.id === id);

export const money = (n: number) => '$' + (Number.isInteger(n) ? n.toString() : n.toFixed(2));
export const orderLink = (name: string) => `/contact?topic=order&product=${encodeURIComponent(name)}`;
