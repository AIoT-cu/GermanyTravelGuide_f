<template>
  <NuxtLayout name="login">
    <div class="container mx-auto p-4 max-w-sm">
      <h1 class="text-xl font-bold mb-4">Login</h1>
      <form
        @submit.prevent="signIn({ username, password }, { callbackUrl: '/' })"
      >
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Username</label
          >
          <input
            v-model="username"
            id="username"
            type="text"
            placeholder="Username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { definePageMeta, useAuth } from "#imports";

const { signIn, token, data, status, lastRefreshedAt } = useAuth();

const username = ref("");
const password = ref("");

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
</script>
