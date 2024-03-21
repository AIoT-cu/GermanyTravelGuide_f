<template>
  <header class="bg-black text-white">
    <div
      class="container mx-auto flex justify-between items-center p-5 border-b-4 border-red-600"
    >
      <h1 class="text-4xl font-bold">Germany Travel Guide</h1>
      <h3 class="text-2xl">Welcome {{ fullName }}!!</h3>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink
              to="/"
              class="text-yellow-500 hover:text-yellow-400"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/states"
              class="text-yellow-500 hover:text-yellow-400"
            >
              States
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="/places"
              class="text-yellow-500 hover:text-yellow-400"
            >
              Places
            </NuxtLink>
          </li>
          <li>
            <a href="#" class="text-yellow-500 hover:text-yellow-400"
              >Culture</a
            >
          </li>
          <li>
            <a href="#" class="text-yellow-500 hover:text-yellow-400"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="mt-2 text-center">
      <p class="text-lg">
        Explore the diversity and beauty of Germany's regions
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      required: true,
    },
  },
};
</script>
