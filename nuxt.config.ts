// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_URL,
    }
  },
  // appConfig: {
  //   buildDate: new Date().toISOString(),
  // },
  modules: [
    '@vite-pwa/nuxt',
  ],
  pwa: {
    manifest: {
      name: 'Assurance',
      icons: [
        // {
        //   src: 'icons/512x512.png',
        //   sizes: '512x512',
        //   type: 'image/png'
        // }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null,
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    // devOptions: {
    //   enabled: true,
    //   suppressWarnings: true,
    //   navigateFallbackAllowlist: [/^\/$/],
    //   type: 'module',
    // },
  },
})


// workbox-7cfec069.js:1 Uncaught (in promise) non-precached-url: non-precached-url :: [{"url":"/"}]
// at O.createHandlerBoundToURL (https://test.tiagomatos.com/workbox-7cfec069.js:1:13245)
// at Object.createHandlerBoundToURL (https://test.tiagomatos.com/workbox-7cfec069.js:1:14828)
// at https://test.tiagomatos.com/sw.js:1:1376
//     at https://test.tiagomatos.com/sw.js:1:565
