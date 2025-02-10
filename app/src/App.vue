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
        class="selected-background-image"
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
.selected-background-display {
  position: fixed;
  bottom: 10%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Slight dark overlay */
  padding: 20px;
  border-radius: 10px;
}

.selected-background-image {
  width: 200px;
  height: auto;
}

.selected-background-display h2 {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
}
</style>
