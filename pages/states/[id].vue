<template>
  <NuxtLayout name="default">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">State Details</h1>
      <div v-if="state" class="bg-white p-4 rounded shadow">
        <p><strong>Name:</strong> {{ state.state_name }}</p>
        <p><strong>Capital:</strong> {{ state.state_capital }}</p>
        <p><strong>Population:</strong> {{ state.state_population }}</p>
        <p><strong>Special Fact:</strong> {{ state.state_special_fact }}</p>
      </div>
      <div v-else>
        <p>State not found or loading...</p>
      </div>
    </div>
  </NuxtLayout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRuntimeConfig } from '#app';
  
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();
  const state = ref(null);
  
  onMounted(async () => {
    const stateId = route.params.id;
    try {
      const data = await $fetch(`/states/${stateId}`, {
        baseURL: runtimeConfig.public.backendUrl,
      });
      state.value = data;
    } catch (error) {
      console.error('Failed to fetch state details:', error);
    }
  });
  </script>