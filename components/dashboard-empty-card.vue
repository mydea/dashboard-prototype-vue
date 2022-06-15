<template>
  <div class="dashboard-empty" @click="$emit('addCell', x, y)">
    {{ x }} / {{ y }}
  </div>
</template>

<script setup>
defineProps(["x", "y"]);
</script>

<style scoped>
.dashboard-empty {
  border: 2px dotted rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background: rgba(0, 0, 0, 0.01);
  opacity: 0.5;
  grid-column: calc(v-bind(x) + 1) / span 1;
  grid-row: calc(v-bind(y) + 1) / span 1;
  min-height: calc(100% / 8);
}
</style>
