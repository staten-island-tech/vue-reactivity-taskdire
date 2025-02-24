<template>
  <div class="background-card-container">
    <!-- Loop through backgrounds and render BackgroundCard for each -->
    <BackgroundCard
      v-for="background in backgrounds" :key="background.name" :background="background" @background-selected="selectBackground"
    />
  </div>
</template>

<script>
import BackgroundCard from './BackgroundCard.vue'

export default {
  components: {
    BackgroundCard,
  },
  props: {
    backgrounds: Array, // Array of backgrounds passed from parent component
  },
  methods: {
    // Emit the selected background to the parent
    selectBackground(background) {
      this.$emit('background-selected', background)
    },
  },
}
</script>

<style scoped>
.background-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns in a row */
  position: absolute;
  bottom: 0px; /* Keep it at the bottom of the screen */
  left: 0px; /* Align to the left */
  background-color: #333333;
  padding: 10px;
  width: 68.5%; /* Make the container width full minus padding */
  height: 8rem;
}

.background-title {
  margin-top: 10px;
  color: white; /* Text color white for contrast */
  font-size: 1.5rem;
  font-weight: bold;
}

</style>
