<template>
  <div>
    <!-- Card container on the right side -->
    <div class="card-container">
      <div v-for="character in characters" :key="character.name" class="card">
        <button @click="selectCharacter(character)">
          <div class="card-image-container">
            <img :src="`/img/${character.image}`" :alt="character.name" class="card-image" />
          </div>
        </button>
        <h2 class="card-title">{{ character.name }}</h2>
      </div>
    </div>

    <div class="selected-character">
      <img
        v-if="selectedCharacter"
        :src="`/img/${selectedCharacter.image}`"
        :alt="selectedCharacter.name"
        class="selected-image"
      />
      <h2 v-if="selectedCharacter">{{ selectedCharacter.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: Array,
  },
  data() {
    return {
      selectedCharacter: null, // Stores the clicked character
    }
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character // Set the clicked character as the selected character
    },
  },
}
</script>

<style scoped>
/* Right side card container */
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 9px;
  position: absolute; /* Positioning container absolutely */
  top: 50%; /* Vertically center the container */
  right: 0; /* Move the container to the right */
  transform: translateY(-50%); /* Center vertically */
  background-color: #333333; /* Grayish-black background */
  padding: 20px; /* Optional: Add some padding inside the card container */
  border-radius: 10px; /* Optional: Add rounded corners to the card container */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Optional: Add a more pronounced shadow */
  
  height: 66rem; /* Set a fixed height (adjust as needed) */
  overflow-y: auto; /* Enable vertical scrolling */
}


.card {
  text-align: center;
}

.card-image-container {
  position: relative;
}

.card-image {
  width: 100%;
  height: auto;
  cursor: pointer; /* Change cursor to pointer */
}

.card-title {
  margin-top: 10px;
  color: white; /* Text color white for contrast */
  font-size: 1.5rem;
  font-weight: bold;
}

button {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

/* Left side selected character image */
.selected-character {
  position: fixed;
  top: 40%;
  left: 33%;
  transform: translateY(-20%); /* Center vertically */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.selected-image {
  width: 200px; /* Adjust size of the selected image */
  height: auto;
}

.selected-character h2 {
  color: white; /* White text for the selected character */
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
}
</style>
