import type { ImageMetadata } from 'astro';
import raw from './testimonials.json';

export type Testimonial = {
  id: number;
  category: string;
  name: string;
  role: string | null;
  location: string | null;
  headline: string | null;
  story: string[]; // paragraphs; may contain <strong>/<em> from the customer's original formatting
  photo: string | null;
};

export const categories: { id: string; label: string; blurb: string }[] = raw.categories;
export const testimonials: Testimonial[] = raw.testimonials as Testimonial[];
export const disclaimer: string = raw.disclaimer;

const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/testimonials/*', { eager: true });
export const photoFor = (file: string | null) =>
  file ? Object.entries(photos).find(([p]) => p.endsWith('/' + file))?.[1].default ?? null : null;

export const byName = (names: string[]) =>
  names.map((n) => testimonials.find((t) => t.name === n)).filter(Boolean) as Testimonial[];

/** Short quotes for the home page cards (from the home page brief). */
export const homeCards = [
  { quote: 'As a personal trainer for over 18 years, I’ve seen many products that don’t deliver. I found the Lemon Detox terrific.', name: 'Nick Bilbija', role: null, location: 'Sydney', photo: 'nick-bilbija.jpeg' },
  { quote: 'We’ve introduced over 400 clients to the program in our clinic and the feedback has been consistently positive.', name: 'Claudia Tcaciuc', role: 'The Detox Clinic', location: 'Victoria', photo: 'claudia-tcaciuc.jpeg' },
  { quote: 'After 5 days I could have stayed on it forever.', name: 'Kerryn Bracken', role: null, location: 'NSW', photo: 'kerryn-bracken.jpeg' },
  { quote: 'By the third day I was springing out of bed before my alarm with a whole new lease on life.', name: 'Kate Winton', role: null, location: 'South Australia', photo: 'kate-winton.jpeg' },
];
