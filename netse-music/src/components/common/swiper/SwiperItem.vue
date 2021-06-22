<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
    transform: scale(0.9);
  }

  .slide img {
    width: 100%;
    border-radius: 10px;
  }
</style>
