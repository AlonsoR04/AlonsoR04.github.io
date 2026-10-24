import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alonsor04.github.io',
  // La barra de desarrollo de Astro solo sale en `npm run dev` y confunde al revisar.
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
