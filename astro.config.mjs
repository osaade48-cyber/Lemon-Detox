// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lemondetox.com.au',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/thanks') && !page.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
  // Old Manus URLs -> new pages (also mirrored in netlify.toml / vercel.json for real 301s)
  redirects: {
    '/why-it-works': '/how-it-works',
    '/stockists': '/',
    '/testimonials': '/stories',
    '/products/7-day-focused': '/products/7-day-focused-cleanse',
    '/products/14-day-extended': '/products/14-day-extended-cleanse',
    '/checkout': '/#programs',
  },
});
