import { Cell } from "~~/global";
import cellHasNoOverlap from "../cellHasNoOverlap";

export default function canMoveLeft(cell: Cell, cells: Cell[]): boolean {
  if (cell.x === 0) {
    return false;
  }

  let virtualCell: Cell = Object.assign({}, cell, {
    x: cell.x - 1,
  });

  return cellHasNoOverlap(virtualCell, cells);
}
