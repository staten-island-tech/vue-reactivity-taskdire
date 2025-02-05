<template>
  <div class="card">
    <img :src="imageSrc" alt="Class Image" class="class-image" />
    <div class="card-content">
      <h2 class="class-name">{{ className }}</h2>
    </div>
  </div>
</template>

<script setup>
// Props to receive class image and name
defineProps({
  className: String,
  imageSrc: String,
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 10px;
  background-color: #f9f9f9;
  text-align: center;
}

.class-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.card-content {
  padding: 10px;
}

.class-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}
</style>
