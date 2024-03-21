<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Header :name="name" :lastName="lastName" :fullName="fullName" />
    <main class="flex-grow container mx-auto p-5 space-y-5">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      name: "Pepe",
      lastName: "Doe",
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    },
  },
};
</script>
