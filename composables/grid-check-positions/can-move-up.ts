import { Cell } from "~~/global";
import cellHasNoOverlap from "../cellHasNoOverlap";

export default function canMoveUp(cell: Cell, cells: Cell[]): boolean {
  if (cell.y === 0) {
    return false;
  }

  let virtualCell: Cell = Object.assign({}, cell, {
    y: cell.y - 1,
  });

  return cellHasNoOverlap(virtualCell, cells);
}
