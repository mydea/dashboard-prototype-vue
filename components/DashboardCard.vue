<template>
  <div class="dashboard-grid-item" draggable="true" @dragstart="onDragStart">
    <div># {{ index }}</div>
    <div>Pos: {{ x }} / {{ y }}</div>
    <div>Size: {{ width }} / {{ height }}</div>

    <button @click="$emit('deleteCell', index)">X</button>
  </div>
</template>

<script setup>
let props = defineProps([
  "index",
  "width",
  "height",
  "x",
  "y",
  "checkPosition",
]);

function onDragStart(event) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("index", props.index);

  let offset = getPointerOffset(event);

  event.dataTransfer.setData("offsetX", offset.x);
  event.dataTransfer.setData("offsetY", offset.y);
}

function getPointerOffset(event) {
  let percentage = getPointerPercentagePos(event);
  let { width, height } = props;

  let x = getClosestPos(percentage.x, width);
  let y = getClosestPos(percentage.y, height);

  return { x: x - 1, y: y - 1 };
}

function getClosestPos(percentage, size) {
  let exact = size * percentage;

  for (let i = 1; i <= size; i++) {
    if (exact < i) {
      return i;
    }
  }

  return size;
}

// pos. in percent of the container size
function getPointerPercentagePos(event) {
  let el = event.target;

  let { width, x, y, height } = el.getBoundingClientRect();
  let { clientX, clientY } = event;

  let xInside = clientX - x;
  let yInside = clientY - y;

  let xPercentage = xInside / width;
  let yPercentage = yInside / height;

  return {
    x: xPercentage,
    y: yPercentage,
  };
}
</script>

<style>
.dashboard-grid-item {
  border: 2px dotted rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  grid-column: calc(v-bind(x) + 1) / span v-bind(width);
  grid-row: calc(v-bind(y) + 1) / span v-bind(height);
  min-height: calc(100% / var(--grid-columns));
}
</style>
