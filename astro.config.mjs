// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://usskepler.org',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://usskepler.org/search/',
    }),
  ],
});
