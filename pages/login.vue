<template>
  <NuxtLayout name="login">
    <div class="container mx-auto p-4 max-w-sm">
      <h1 class="text-xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Username</label
          >
          <input
            v-model="credentials.username"
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
            v-model="credentials.password"
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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const credentials = ref({
  username: "",
  password: "",
});

const login = async () => {
  try {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials.value),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    console.log(data);

    localStorage.setItem("authToken", data.token);

    router.push("/");
  } catch (error) {
    console.error("Error during login:", error);
  }
};
</script>
