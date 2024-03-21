<template>
  <NuxtLayout name="default">
  <div class="container mx-auto p-4 max-w-md">
    <h1 class="text-xl font-bold mb-4">Update State</h1>
    <form
      @submit.prevent="updateState"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          for="stateName"
          class="block text-gray-700 text-sm font-bold mb-2"
          >State Name</label
        >
        <input
          v-model="stateDetails.state_name"
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
          v-model="stateDetails.state_capital"
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
          v-model="stateDetails.state_population"
          id="statePopulation"
          type="number"
          placeholder="Population"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="stateImageUrl"
          class="block text-gray-700 text-sm font-bold mb-2"
          >State Image URL</label
        >
        <input
          v-model="stateDetails.state_image_url"
          id="stateImageUrl"
          type="text"
          placeholder="Image URL"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div class="mb-6">
        <label
          for="stateSpecialFact"
          class="block text-gray-700 text-sm font-bold mb-2"
          >Special Fact</label
        >
        <textarea
          v-model="stateDetails.state_special_fact"
          id="stateSpecialFact"
          placeholder="Special Fact"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="updateState"
        >
          Update
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
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const runtimeConfig = useRuntimeConfig();

const router = useRouter();
const route = useRoute();

const stateDetails = ref({
  state_name: "",
  state_capital: "",
  state_population: "",
  state_special_fact: "",
  state_image_url: "",
});

// Initially fetch the state details
const fetchStateDetails = async () => {
  try {
    stateDetails.value = await $fetch(
      `${runtimeConfig.public.backendUrl}/states/${route.params.id}`
    );
    console.log(stateDetails.value);
  } catch (error) {
    console.error("Error requesting state details:", error);
  }
};

fetchStateDetails();

const formData = reactive({
  state_name: "",
  state_capital: "",
  state_population: "",
  state_special_fact: "",
  state_image_url: "",
});

// Watch for stateDetails to update formData
watch(
  stateDetails,
  (newState) => {
    if (newState) {
      Object.assign(formData, newState);
    }
  },
  { immediate: true }
);

const updateState = async () => {
  try {
    const response = await $fetch(`${runtimeConfig.public.backendUrl}/states/${route.params.id}`, {
      method: "PUT",
      body: JSON.stringify(stateDetails.value),
    });

    if (response.error) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("State updated successfully");
    router.push("/states");
  } catch (error) {
    console.error("Error updating state:", error);
  }
};

</script>
