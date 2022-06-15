<template>
  <div
    class="dashboard-empty"
    @click="$emit('addCell', { x, y, width: 1, height: 1 })"
    @drop="onDrop"
    @dragover="onDragOver"
  >
    {{ x }} / {{ y }}
  </div>
</template>

<script setup>
let props = defineProps(["x", "y"]);
let emits = defineEmits(["addCell", "dropCell"]);

function onDrop(event) {
  let mode = event.dataTransfer.getData("mode");

  if (mode === "new") {
    addNewCell(event.dataTransfer);
  } else {
    moveCell(event.dataTransfer);
  }
}

function moveCell(dataTransfer) {
  let index = dataTransfer.getData("index") * 1;
  let offsetX = dataTransfer.getData("offsetX") * 1;
  let offsetY = dataTransfer.getData("offsetY") * 1;

  emits("dropCell", index, { x: props.x, y: props.y, offsetX, offsetY });
}

function addNewCell(dataTransfer) {
  let width = dataTransfer.getData("width") * 1;
  let height = dataTransfer.getData("height") * 1;

  emits("addCell", { x: props.x, y: props.y, width, height });
}

function onDragOver(event) {
  event.preventDefault();
}
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
