<template>
  <div class="control">
    <button
      @click="$emit('widthIncrease', index)"
      :disabled="!checkPosition.canIncreaseWidth"
      class="width-increase"
    >
      +w
    </button>
    <button
      @click="$emit('widthDecrease', index)"
      :disabled="!checkPosition.canDecreaseWidth"
      class="width-decrease"
    >
      -w
    </button>
    <button
      @click="$emit('heightIncrease', index)"
      :disabled="!checkPosition.canIncreaseHeight"
      class="height-increase"
    >
      +h
    </button>
    <button
      @click="$emit('heightDecrease', index)"
      :disabled="!checkPosition.canDecreaseHeight"
      class="height-decrease"
    >
      -h
    </button>

    <button
      @click="$emit('moveUp', index)"
      :disabled="!checkPosition.canMoveUp"
      class="move-up"
    >
      ⌃
    </button>

    <button
      @click="$emit('moveDown', index)"
      :disabled="!checkPosition.canMoveDown"
      class="move-down"
    >
      ⌄
    </button>

    <button
      @click="$emit('moveLeft', index)"
      :disabled="!checkPosition.canMoveLeft"
      class="move-left"
    >
      ‹
    </button>

    <button
      @click="$emit('moveRight', index)"
      :disabled="!checkPosition.canMoveRight"
      class="move-right"
    >
      ›
    </button>
  </div>
</template>

<script setup>
defineProps(["checkPosition", "index"]);
</script>

<style scoped>
.control {
  display: grid;
  grid-template-areas:
    ". up up ."
    "left widthDecrease widthIncrease right"
    "left heightDecrease heightIncrease right"
    ". down down .";

  grid-template-rows: 20px 40px 40px 20px;
  grid-template-columns: 20px 40px 40px 20px;
}

.width-increase {
  grid-area: widthIncrease;
}
.width-decrease {
  grid-area: widthDecrease;
}
.height-increase {
  grid-area: heightIncrease;
}
.height-decrease {
  grid-area: heightDecrease;
}

.move-left {
  grid-area: left;
}

.move-right {
  grid-area: right;
}
.move-up {
  grid-area: up;
}
.move-down {
  grid-area: down;
}
</style>
