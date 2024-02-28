<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Header with Germany's national colors and improved navigation -->
    <header class="bg-black text-white">
      <div class="container mx-auto flex justify-between items-center p-5 border-b-4 border-red-600">
        <h1 class="text-4xl font-bold">Germany Travel Guide</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-yellow-500 hover:text-yellow-400">Home</a></li>
            <li><a href="#" class="text-yellow-500 hover:text-yellow-400">States</a></li>
            <li><a href="#" class="text-yellow-500 hover:text-yellow-400">Cities</a></li>
            <li><a href="#" class="text-yellow-500 hover:text-yellow-400">Culture</a></li>
            <li><a href="#" class="text-yellow-500 hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="mt-2 text-center">
        <p class="text-lg">Explore the diversity and beauty of Germany's regions</p>
      </div>
    </header>

    <!-- Main content with sections for states, cities, and cultural highlights -->
    <main class="flex-grow container mx-auto p-5 space-y-5">
      <section class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-3xl font-semibold mb-4 text-red-600">Featured State: Bavaria</h2>
        <p>Discover Bavaria's rich culture, breathtaking landscapes, and historic landmarks, including the fairy-tale Neuschwanstein Castle and the bustling city of Munich.</p>
      </section>

      <section class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-3xl font-semibold mb-4 text-red-600">Must-Visit Cities</h2>
        <p>Explore vibrant cities such as Berlin, known for its history and arts; Hamburg, with its famous harbor; and Cologne, renowned for its Gothic cathedral and lively cultural scene.</p>
      </section>

      <section class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-3xl font-semibold mb-4 text-red-600">Cultural Highlights</h2>
        <p>Engage with Germany's diverse cultural offerings, from Oktoberfest in Munich to the classical music scene in Leipzig and cutting-edge art in Berlin.</p>
      </section>
      
      <!-- Additional sections for other states or places can be added here -->
    </main>

    <!-- Footer with Germany's national colors -->
    <footer class="bg-gray-900 text-white text-center p-4">
      <p>&copy; 2024 Germany Travel Guide. All rights reserved.</p>
      <p class="text-sm text-yellow-500">Connect with us on social media for the latest updates.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Scoped styles for specific adjustments if needed */
</style>
