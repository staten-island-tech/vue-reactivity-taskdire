<template>
  <div>
    <div class="selected-character" v-if="selectedCharacter">
      <img :src="`/img/${selectedCharacter.image}`" :alt="selectedCharacter.name" class="selected-image" />
      <h2>{{ selectedCharacter.name }}</h2>
    </div>

    <div class="button-container">
      <button v-for="character in characters" :key="character.name" @click="selectCharacter(character)">
        <img :src="`/img/${character.image}`" :alt="character.name" class="button-image" />
        <p>{{ character.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    characters: Array,
  },
  setup(props) {
    const selectedCharacter = ref(null);
    const characterList = reactive([...props.characters]); // Ensures reactivity for characters

    const selectCharacter = (character) => {
      selectedCharacter.value = selectedCharacter.value?.name === character.name ? null : character; // Toggle selection
    };

    return {
      selectedCharacter,
      characterList,
      selectCharacter,
    };
  },
};
</script>

<style scoped>
.selected-character {
  position: fixed;
  top: 40%;
  left: 33%;
  transform: translateY(-20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.selected-image {
  width: 200px;
  height: auto;
}

.selected-character h2 {
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
}

.button-image {
  width: 100px;
  height: auto;
}
</style>
