import { Cell } from "~~/global";
import cellHasNoOverlap from "../cell-has-no-overlap";

export default function canIncreaseHeight(cell: Cell, cells: Cell[]): boolean {
  if (cell.height >= 3) {
    return false;
  }

  let virtualCell: Cell = Object.assign({}, cell, {
    height: cell.height + 1,
  });

  return cellHasNoOverlap(virtualCell, cells);
}
