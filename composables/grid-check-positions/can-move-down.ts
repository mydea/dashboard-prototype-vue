import { Cell } from "~~/global";
import cellHasNoOverlap from "../cell-has-no-overlap";

export default function canMoveDown(cell: Cell, cells: Cell[]): boolean {
  let virtualCell: Cell = Object.assign({}, cell, {
    y: cell.y + 1,
  });

  return cellHasNoOverlap(virtualCell, cells);
}
