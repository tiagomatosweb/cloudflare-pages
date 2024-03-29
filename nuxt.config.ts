// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      bodyAttrs: {
        class: 'bg-neutral-100'
      }
    }
  },
  runtimeConfig: {
    public: {
      apiURL: 'https://jsonplaceholder.typicode.com',
    }
  },
})
