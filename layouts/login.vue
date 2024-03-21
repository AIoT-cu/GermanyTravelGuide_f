<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <HeaderLogin />
    <main class="flex-grow container mx-auto p-5 space-y-5">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderLogin from "@/components/HeaderLogin.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    HeaderLogin,
    Footer,
  },
};
</script>