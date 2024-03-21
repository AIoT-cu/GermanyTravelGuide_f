<template>
  <section class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-3xl font-semibold mb-4 text-red-600">{{ title }}</h2>
    <p>{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
};
</script>
