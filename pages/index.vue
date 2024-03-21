<template>
  <NuxtLayout name="default">
    <Section
      title="Featured State: Bavaria"
      paragraph="Discover Bavaria's rich culture, breathtaking landscapes, and historic landmarks, including the fairy-tale Neuschwanstein Castle and the bustling city of Munich."
    />
    <Section
      title="Must-Visit Cities"
      paragraph="Explore vibrant cities such as Berlin, known for its history and arts; Hamburg, with its famous harbor; and Cologne, renowned for its Gothic cathedral and lively cultural scene."
    />
    <Section
      title="Cultural Highlights"
      paragraph="Engage with Germany's diverse cultural offerings, from Oktoberfest in Munich to the classical music scene in Leipzig and cutting-edge art in Berlin."
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
import { useAuth } from "#imports";
// import FormData from 'form-data'

const { token } = useAuth();
</script>
