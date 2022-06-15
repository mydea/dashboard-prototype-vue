<template>
  <div
    class="dashboard-add-new-button"
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
  >
    Add: {{ width }} \ {{ height }}
  </div>

  <div class="dashboard-add-new-overlay" ref="overlay">
    Add: {{ width }} \ {{ height }}
  </div>
</template>

<script setup>
let overlay = ref(null);

let props = defineProps(["width", "height"]);

function onDragStart(event) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("mode", "new");
  event.dataTransfer.setData("width", props.width);
  event.dataTransfer.setData("height", props.height);

  let dragOverlay = overlay.value.cloneNode();
  dragOverlay.innerHTML = overlay.value.innerHTML;
  dragOverlay.style.display = "block";

  document.body.appendChild(dragOverlay);
  event.dataTransfer.setDragImage(dragOverlay, 0, 0);
}
</script>

<style scoped>
.dashboard-add-new-overlay,
.dashboard-add-new-button {
  display: inline-block;
  border: 2px dotted rgba(0, 0, 0, 0.2);
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.1);
}

.dashboard-add-new-overlay {
  position: absolute;
  top: 0;
  right: 100%;
  display: none;
  z-index: 2;
  width: calc(
    (100% / var(--grid-columns)) * v-bind(width) -2 * var(--grid-gap)
  );
  height: calc(var(--grid-row-height) * v-bind(height));
}
</style>
