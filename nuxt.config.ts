export default defineNuxtConfig({
  // @ts-ignore
  runtimeConfig: {
    public: {
      // @ts-ignore
      backendUrl: process.env.BACKEND_URL,
    },
  },
  modules: ["@sidebase/nuxt-auth"],
  // @ts-ignore
  auth: {
    baseURL: process.env.BACKEND_URL + "/",
    provider: {
      type: "local",

      endpoints: {
        signIn: { path: "/login", method: "post" },
        signOut: { path: "/logout", method: "post" },
        signUp: { path: "/signup", method: "post" },
        getSession: { path: "/user/profile", method: "get" },
      },
      pages: {
        login: "/login",
      },
      token: {
        signInResponseTokenPointer: "/token",
      },
      sessionDataType: {
        id: "integer",
        email: "string",
        username: "string",
        createdAt: "string",
        updatedAt: "string",
        role: "admin | editor",
        // subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]",
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
