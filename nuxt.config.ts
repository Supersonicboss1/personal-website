import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Supersonicboss1's Website!"
    }
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: [
    '~/assets/css/main.css'
  ],
})
