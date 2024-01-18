// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_URL,
    }
  },
  modules: [
    '@vite-pwa/nuxt',
  ],
  pwa: {
    periodicSyncForUpdates: '5',
    manifest: {
      name: 'Assurance',
      icons: [
        {
          src: 'icons/512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: null, // Fallback to index.html
      globPatterns: [
        "**/*.{js,css,html,png,jpg,jpeg,svg,woff2,woff,ttf,eot,webmanifest}",
      ],
    },
    client: {
      installPrompt: true,
    },
    registerWebManifestInRouteRules: true,
    devOptions: {
      enabled: true,
    },
    registerType: "autoUpdate",
  },
})
