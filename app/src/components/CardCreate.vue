<template>
  <div
    class="card w-[90%] sm:w-[50%] md:w-[33%] lg:w-[24%] h-auto rounded-3xl flex flex-col items-center justify-around m-4 bg-blue-200 text-center"
  >
    <!-- Card Title (Character Name) -->
    <h2 class="card-title text-2xl text-black">{{ character.name }}</h2>

    <!-- Character Image -->
    <img
      :src="require(`@/assets/${character.image}`)"
      :alt="character.name"
      class="object-contain w-[65%]"
    />

    <!-- Character Description (Function) -->
    <h3 class="text-xl text-black">{{ character.name }} is a powerful character.</h3>

    <!-- Add to Cart Button -->
    <button
      @click="addToCart(character)"
      class="text-center text-black bg-white rounded-xl w-[30%] border-black border-2 transition-transform duration-300 hover:scale-110 m-2"
      :id="character.name"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
defineProps({
  character: Object, // Define the prop to receive the character object
})

const cart = ref([]) // Initialize the cart array as a ref to make it reactive

// Method to add character to the cart
function addToCart(character) {
  cart.value.push(character)
  console.log('Added to Cart:', character.name)
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
