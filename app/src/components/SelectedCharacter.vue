<template>
  <div class="selected-character" v-if="character">
    <img :src="`/img/${character.image}`" :alt="character.name" class="selected-image" />
    <h2>{{ character.name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
}
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
</style>
