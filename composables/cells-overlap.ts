import { Cell } from "~~/global";

export default function cellsOverlap(cell1: Cell, cell2: Cell): boolean {
  // top left & bottom right corner of both cells
  let l1 = {
    x: cell1.x,
    y: cell1.y,
  };
  let r1 = {
    x: cell1.x + cell1.width,
    y: cell1.y + cell1.height,
  };
  let l2 = {
    x: cell2.x,
    y: cell2.y,
  };
  let r2 = {
    x: cell2.x + cell2.width,
    y: cell2.y + cell2.height,
  };

  // If one rectangle is on left side of other
  if (l1.x >= r2.x || l2.x >= r1.x) {
    return false;
  }

  // If one rectangle is above other
  if (r1.y <= l2.y || r2.y <= l1.y) {
    return false;
  }

  return true;
}
