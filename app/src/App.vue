<template>
  <div>
    <!-- Character selection will go here (optional) -->
    <CardList :characters="characters" @character-selected="selectCharacter" />
    <SelectedCharacter :character="selectedCharacter" />

    <!-- Background selection -->
    <BackgroundSelect :backgrounds="backgrounds" @background-selected="selectBackground" />

    <!-- Display selected background -->
    <div v-if="selectedBackground" class="selected-background-display">
      <img
        :src="`/img/${selectedBackground.image}`"
        :alt="selectedBackground.name"
        class="selected-background-display"
      />
      <h2>{{ selectedBackground.name }}</h2>
    </div>
  </div>
</template>

<script>
import CardList from './components/CharacterCard.vue'
import SelectedCharacter from './components/SelectedCharacter.vue'
import BackgroundSelect from './components/BackgroundSelect.vue' // Import BackgroundSelect
import { characterArray } from './assets/CharacterArray.js'
import { backgroundArray } from './assets/BackgroundArray.js' // Array of backgrounds

export default {
  components: {
    CardList,
    SelectedCharacter,
    BackgroundSelect, // Include BackgroundSelect here
  },
  data() {
    return {
      characters: characterArray,
      selectedCharacter: null,
      backgrounds: backgroundArray, // Backgrounds array
      selectedBackground: null, // Store selected background here
    }
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character
    },
    selectBackground(background) {
      this.selectedBackground = background // Set selected background
    },
  },
}
</script>

<style scoped>
.app-container {
  position: relative;
  height: 100vh;
}

.selected-background-display {
  position: absolute;
  top: 0;
  left: 0;
  width: 80rem;
  height: 52rem;
  z-index: -1;
  background-size: cover;
}

.selected-background {
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
}
</style>
