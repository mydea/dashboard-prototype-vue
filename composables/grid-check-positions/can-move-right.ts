import { Cell } from "~~/global";
import cellHasNoOverlap from "../cell-has-no-overlap";

export default function canMoveRight(cell: Cell, cells: Cell[]): boolean {
  if (cell.x + cell.width === 8) {
    return false;
  }

  let virtualCell: Cell = Object.assign({}, cell, {
    x: cell.x + 1,
  });

  return cellHasNoOverlap(virtualCell, cells);
}
