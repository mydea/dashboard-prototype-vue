import { Cell } from "~~/global";

export default function canDecreaseHeight(cell: Cell, cells: Cell[]): boolean {
  return cell.height > 1;
}
