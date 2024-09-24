import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';
const LIVE_URL = 'https://astroxamk.github.io';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  site: LIVE_URL,
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});