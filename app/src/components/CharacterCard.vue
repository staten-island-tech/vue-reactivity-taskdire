<template>
  <div>
    <CharacterCard :characters="characterArray" @character-selected="handleCharacterSelection" />
  </div>
</template>

<script>
import { ref } from "vue";
import { characterArray } from "../CharacterArray"; // Import the character array
import CharacterCard from "./CharacterCard.vue";

export default {
  components: {
    CharacterCard,
  },
  setup() {
    const selectedCharacter = ref(null);

    const handleCharacterSelection = (character) => {
      selectedCharacter.value = character;
      console.log("Selected character:", selectedCharacter.value);
    };

    return {
      characterArray,
      selectedCharacter,
      handleCharacterSelection,
    };
  },
};
</script>
