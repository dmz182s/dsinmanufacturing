import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
  ],
  output: 'hybrid',
  adapter: vercel(),
});
