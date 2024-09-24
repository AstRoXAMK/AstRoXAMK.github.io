import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
const LIVE_URL = 'https://astroxamk.github.io';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: LIVE_URL,
});