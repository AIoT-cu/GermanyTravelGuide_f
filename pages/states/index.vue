<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4">States List</h1>
    <div class="mb-4">
      <NuxtLink
        to="/states/add"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New State
      </NuxtLink>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6">State Name</th>
            <th scope="col" class="py-3 px-6">Capital</th>
            <th scope="col" class="py-3 px-6">Population</th>
            <th scope="col" class="py-3 px-6">Special Fact</th>
            <th scope="col" class="py-3 px-6">Actions</th>
            <!-- Added Actions column -->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="state in states"
            :key="state.id"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="py-4 px-6">{{ state.state_name }}</td>
            <td class="py-4 px-6">{{ state.state_capital }}</td>
            <td class="py-4 px-6">{{ state.state_population }}</td>
            <td class="py-4 px-6">{{ state.state_special_fact }}</td>
            <td class="py-4 px-6 flex justify-center">
              <NuxtLink
                :to="`/states/update/${state.id}`"
                class="text-blue-600 hover:text-blue-900 mr-3"
                >Edit</NuxtLink
              >
              <button
                @click="deleteState(state.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="states.length === 0">
            <td colspan="5" class="text-center py-4">No states available.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const states = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3001/states");
    if (!response.ok) {
      throw new Error("Failed to fetch states");
    }
    const data = await response.json();
    states.value = data;
  } catch (error) {
    console.error("Error fetching states:", error);
  }
});

const deleteState = async (stateId) => {
  // Confirmation prompt before deleting
  const isConfirmed = confirm("Are you sure you want to delete this state?");
  if (!isConfirmed) {
    return;
  }
  try {
    const response = await fetch(`http://localhost:3001/states/${stateId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete state");
    }
    // Remove the deleted state from the states array
    states.value = states.value.filter((state) => state.id !== stateId);
    alert("State successfully deleted");
  } catch (error) {
    console.error("Error deleting state:", error);
    alert("Failed to delete state");
  }
};
</script>
