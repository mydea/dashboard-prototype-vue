import { Cell } from "~~/global";

export default function canDecreaseWidth(cell: Cell, cells: Cell[]): boolean {
  return cell.width > 1;
}
