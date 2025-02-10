<template>
  <div>
    <CardList :characters="characters" @character-selected="selectCharacter" />
    <SelectedCharacter :character="selectedCharacter" />
  </div>
</template>

<script>
import CardList from "./components/CharacterCard.vue";
import SelectedCharacter from "./components/SelectedCharacter.vue";
import { characterArray } from "./assets/CharacterArray.js"; // '@' resolves to 'src/'

export default {
  components: {
    CardList,
    SelectedCharacter,
  },
  data() {
    return {
      characters: characterArray,
      selectedCharacter: null,
    };
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character;
    },
  },
};
</script>
