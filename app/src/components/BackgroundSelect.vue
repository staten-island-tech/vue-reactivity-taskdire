<template>
  <div class="background-card-container">
    <!-- Loop through backgrounds and render BackgroundCard for each -->
    <BackgroundCard
      v-for="background in backgrounds"
      :key="background.name"
      :background="background"
      @background-selected="selectBackground"
      :class="{ selected: isSelected(background) }"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import BackgroundCard from './BackgroundCard.vue';

export default {
  components: {
    BackgroundCard,
  },
  props: {
    backgrounds: Array, // Array of backgrounds passed from parent component
  },
  setup(props, { emit }) {
    const selectedBackground = ref(null);

    // Check if the background is selected
    const isSelected = (background) => {
      return selectedBackground.value?.name === background.name;
    };

    // Select background and emit the event
    const selectBackground = (background) => {
      // Toggle selection
      selectedBackground.value = selectedBackground.value?.name === background.name ? null : background;
      // Emit the selected background to the parent
      emit("background-selected", selectedBackground.value);
    };

    return {
      selectedBackground,
      isSelected,
      selectBackground,
    };
  },
};
</script>

<style scoped>
.background-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns in a row */
  gap: 10px; /* Reduced gap between the cards */
  position: absolute;
  bottom: 20px; /* Keep it at the bottom of the screen */
  left: 20px; /* Align to the left */
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: calc(68.5% - 40px); /* Make the container width full minus padding */
}

.background-card {
  text-align: center;
}

.background-image-container {
  position: relative;
}

.background-image {
  width: 100%; /* Image will take up the whole width of the card */
  height: auto;
  border-radius: 10px;
}

.background-title {
  margin-top: 10px;
  color: white;
  font-size: 1rem; /* Reduced font size */
  font-weight: bold;
}

button {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.selected {
  transform: scale(1.1); /* Slight zoom effect */
  box-shadow: 0px 0px 10px rgba(0, 255, 0, 0.5); /* Green glow when selected */
}
</style>
