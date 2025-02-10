<template>
  <div>
    <CharacterCard :characters="characterArray" />
  </div>
</template>

<script>
import CharacterCard from './components/CharacterCard.vue';
import { characterArray } from './assets/CharacterArray.js';  // Import the array

export default {
  components: {
    CharacterCard,
  },
  data() {
    return {
      characterArray: characterArray,  // Bind the array to the component
    };
  },
};
</script>
