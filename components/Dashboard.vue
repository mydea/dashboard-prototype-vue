<template>
  <DashboardAdd />

  <div class="dashboard-grid">
    <DashboardCard
      v-for="cell in cells"
      :key="cell.index"
      :index="cell.index"
      :x="cell.x"
      :y="cell.y"
      :width="cell.width"
      :height="cell.height"
      :check-position="gridCheckPositions(cell, cells)"
      @width-increase="widthIncrease"
      @width-decrease="widthDecrease"
      @height-increase="heightIncrease"
      @height-decrease="heightDecrease"
      @move-up="moveUp"
      @move-down="moveDown"
      @move-left="moveLeft"
      @move-right="moveRight"
      @delete-cell="deleteCell"
    />

    <DashboardEmptyCard
      v-for="(cell, index) in emptyCells"
      :key="index"
      :x="cell.x"
      :y="cell.y"
      @add-cell="addCell"
      @drop-cell="dropCell"
    />
  </div>
</template>

<script setup>
let _colCount = 8;

let _cells = [
  { index: 0, x: 0, y: 0, height: 2, width: 4 },
  { index: 1, x: 4, y: 0, height: 1, width: 2 },
  { index: 2, x: 4, y: 1, height: 1, width: 2 },
  { index: 3, x: 6, y: 0, height: 4, width: 2 },
  { index: 4, x: 0, y: 2, height: 2, width: 2 },
  { index: 5, x: 2, y: 2, height: 2, width: 2 },
  { index: 6, x: 4, y: 2, height: 2, width: 2 },
  { index: 7, x: 0, y: 4, height: 1, width: 2 },
  { index: 8, x: 2, y: 4, height: 1, width: 2 },
  { index: 9, x: 6, y: 4, height: 2, width: 2 },
];

let lastIndex = _cells.length;

let cells = reactive(_cells);

let emptyCells = computed(() => {
  let emptyCells = [];
  let maxY = Math.max(...cells.map((cell) => cell.y + cell.height));

  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x < _colCount; x++) {
      let tmpCell = { x, y, width: 1, height: 1, index: null };

      if (cellHasNoOverlap(tmpCell, cells)) {
        emptyCells.push(tmpCell);
      }
    }
  }

  return emptyCells;
});

function getCellForIndex(index) {
  return cells.find((cell) => cell.index === index);
}

function widthIncrease(index) {
  let cell = getCellForIndex(index);
  cell.width = Math.min(_colCount, cell.width + 1);
}

function widthDecrease(index) {
  let cell = getCellForIndex(index);
  cell.width = Math.max(1, cell.width - 1);
}

function heightIncrease(index) {
  let cell = getCellForIndex(index);
  cell.height = Math.min(3, cell.height + 1);
}

function heightDecrease(index) {
  let cell = getCellForIndex(index);
  cell.height = Math.max(1, cell.height - 1);
}

function moveLeft(index) {
  let cell = getCellForIndex(index);
  cell.x = Math.max(0, cell.x - 1);
}

function moveRight(index) {
  let cell = getCellForIndex(index);
  cell.x = Math.min(_colCount, cell.x + 1);
}

function moveUp(index) {
  let cell = getCellForIndex(index);
  cell.y = Math.max(0, cell.y - 1);
}

function moveDown(index) {
  let cell = getCellForIndex(index);
  cell.y = cell.y + 1;
}

function addCell({ x, y, width, height }) {
  let cell = { x, y, width, height, index: lastIndex++ };

  if (cellHasNoOverlap(cell, cells)) {
    cells.push(cell);
  }
}

function deleteCell(index) {
  let pos = cells.findIndex((cell) => cell.index === index);

  if (pos > -1) {
    cells.splice(pos, 1);
  }
}

function dropCell(index, { x, y, offsetX, offsetY }) {
  let cell = getCellForIndex(index);

  let cellX = x - offsetX;
  let cellY = y - offsetY;

  let virtualCell = Object.assign({}, cell, {
    x: cellX,
    y: cellY,
  });

  if (virtualCell.x + virtualCell.width > _colCount) {
    return;
  }

  if (virtualCell.y < 0 || virtualCell.x < 0) {
    return;
  }

  if (!cellHasNoOverlap(virtualCell, cells)) {
    return;
  }

  cell.x = cellX;
  cell.y = cellY;
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  grid-auto-rows: minmax(var(--grid-row-height), auto);
}

.dashboard-grid > * {
  min-width: 0;
}
</style>
