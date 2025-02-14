<template>
  <div class="background-card-container">
    <div v-for="background in backgroundList" :key="background.name" class="background-card" 
         :class="{ selected: selectedBackground?.name === background.name }"
         @click="selectBackground(background)">
      <button>
        <div class="background-image-container">
          <img :src="`/img/${background.image}`" :alt="background.name" class="background-image" />
        </div>
      </button>
      <h2 class="background-title">{{ background.name }}</h2>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    backgrounds: Array, // Array of background objects
  },
  setup(props, { emit }) {
    const selectedBackground = ref(props.backgrounds[0] || null); // Set default selection

    const backgroundList = reactive([...props.backgrounds]); // Ensure reactivity

    const selectBackground = (background) => {
      if (selectedBackground.value?.name !== background.name) {
        selectedBackground.value = background;
        emit("background-selected", selectedBackground.value);
      }
    };

    return {
      selectedBackground,
      backgroundList,
      selectBackground,
    };
  },
};
</script>

<style scoped>
.background-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  width: calc(68.5% - 40px);
}

.background-card {
  text-align: center;
  cursor: pointer;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.background-image-container {
  position: fixed;
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

/* Style for the selected background card */
.selected {
  transform: scale(1.1);
}
</style>
