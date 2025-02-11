<template>
  <div class="background-card">
    <button @click="selectBackground">
      <div class="background-image-container">
        <img :src="`/img/${background.image}`" :alt="background.name" class="background-image" />
      </div>
    </button>
    <h2 class="background-title">{{ background.name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    background: Object, // The background object (name and image)
  },
  methods: {
    // Emit the selected background to the parent
    selectBackground() {
      this.$emit('background-selected', this.background)
    },
  },
}
</script>

<style scoped>
.background-card {
  text-align: center;
  cursor: pointer;
  flex-shrink: 0; 
  width: 100px; /* Set a fixed width for the card */
  height: 100px; /* Set a fixed height for the card */
}

.background-image-container {
  position: relative;
}

.background-image {
  width: 10rem; 
  height: auto;
  border-radius: 10px;
}

.background-title {
  margin-top: 10px;
  color: white;
  font-size: 1rem; 
  font-weight: bold;
}

button {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
</style>