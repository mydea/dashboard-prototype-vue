import { Cell } from "~~/global";

export default function cellHasNoOverlap(cell: Cell, cells: Cell[]): boolean {
  return !cells.some((compareCell) => {
    if (compareCell.index === cell.index) {
      return false;
    }

    return cellsOverlap(cell, compareCell);
  });
}
