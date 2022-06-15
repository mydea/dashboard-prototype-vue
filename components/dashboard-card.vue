<template>
  <div class="dashboard-grid-item">
    <div># {{ index }}</div>
    <div>Pos: {{ x }} / {{ y }}</div>
    <div>Size: {{ width }} / {{ height }}</div>

    <DashboardCardControl
      :check-position="checkPosition"
      :index="index"
      v-bind="$attrs"
    />

    <button @click="$emit('deleteCell', index)">X</button>
  </div>
</template>

<script setup>
defineProps(["index", "width", "height", "x", "y", "checkPosition"]);
</script>

<style>
.dashboard-grid-item {
  border: 2px dotted rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  grid-column: calc(v-bind(x) + 1) / span v-bind(width);
  grid-row: calc(v-bind(y) + 1) / span v-bind(height);
  min-height: calc(100% / 8);
}
</style>
