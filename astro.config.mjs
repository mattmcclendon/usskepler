// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.usskepler.org',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.usskepler.org/search/',
    }),
  ],
});
