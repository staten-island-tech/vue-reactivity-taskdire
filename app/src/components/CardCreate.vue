<template>
  <div class="card-container">
    <!-- Loop through the characterarray and create a card for each character -->
    <div v-for="character in characterarray" :key="character.name" class="card">
      <img :src="`/assets/images/${character.image}`" :alt="character.name" class="card-image" />
      <h2 class="card-title">{{ character.name }}</h2>
      <!-- Display character name -->
    </div>
  </div>
</template>

<script setup>
// Import characterarray from assets folder
import { characterarray } from './assets/CharacterArray.js'
</script>

<style scoped>
/* Container for the cards */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
}

/* Styling for individual cards */
.card {
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

/* Styling for card images */
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

/* Styling for the character title */
.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}
</style>
