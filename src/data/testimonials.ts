import raw from './testimonials.json';

export type Testimonial = {
  category: string;
  name: string;
  role: string | null;
  location: string | null;
  pullQuote: string;
  story: string;
  result: string | null;
  featured?: boolean;
};

// Only the published list is exported. `_removed_do_not_publish` is never read.
export const categories: { id: string; label: string; blurb: string }[] = raw.categories;
export const testimonials: Testimonial[] = raw.testimonials as Testimonial[];
export const disclaimer: string = raw.disclaimer;

const featuredOrder = ['Nick Bilbija', 'Kate Winton', 'Ashley Day', 'Geri Graham'];
export const featured = featuredOrder
  .map((n) => testimonials.find((t) => t.name === n && t.featured))
  .filter(Boolean) as Testimonial[];

export const byName = (names: string[]) =>
  names.map((n) => testimonials.find((t) => t.name === n)).filter(Boolean) as Testimonial[];
