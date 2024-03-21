<template>
  <NuxtLayout name="default">
  <div class="container mx-auto p-4 max-w-md">
    <h1 class="text-xl font-bold mb-4">Add New State</h1>
    <form
      @submit.prevent="submitState"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          for="stateName"
          class="block text-gray-700 text-sm font-bold mb-2"
          >State Name</label
        >
        <input
          v-model="newState.state_name"
          id="stateName"
          type="text"
          placeholder="State Name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="stateCapital"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Capital</label
        >
        <input
          v-model="newState.state_capital"
          id="stateCapital"
          type="text"
          placeholder="Capital"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="statePopulation"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Population</label
        >
        <input
          v-model="newState.state_population"
          id="statePopulation"
          type="number"
          placeholder="Population"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="stateSpecialFact"
          class="block text-gray-700 text-sm font-bold mb-2"
          >State Image</label
        >
        <input
          v-model="newState.state_image_url"
          id="stateImageUrl"
          placeholder="state_image_url"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></input>
      </div>

      <div class="mb-6">
        <label
          for="stateSpecialFact"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Special Fact</label
        >
        <textarea
          v-model="newState.state_special_fact"
          id="stateSpecialFact"
          placeholder="Special Fact"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div>

      <!-- Buttons -->
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="submitState"
        >
          Submit
        </button>
        <NuxtLink
          to="/states"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >Cancel</NuxtLink
        >
      </div>
    </form>
  </div>
</NuxtLayout>
</template>

<script setup>
import { useRouter } from "vue-router";

const runtimeConfig = useRuntimeConfig();

const router = useRouter();

const newState = reactive({
  state_name: "",
  state_capital: "",
  state_population: "",
  state_special_fact: "",
  state_image_url: ""
});

const submitState = async () => {
  try {
    const response = await $fetch(`${runtimeConfig.public.backendUrl}/states/create`, {
      method: "POST",
      body: JSON.stringify(newState),
    });

    if (response.error) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("State added successfully");
    router.push("/states");
  } catch (error) {
    console.error("Error adding state:", error);
  }
};
</script>
