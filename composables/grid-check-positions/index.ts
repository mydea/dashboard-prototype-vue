import { Cell } from "~~/global";
import canIncreaseWidth from "./can-increase-width";
import canDecreaseWidth from "./can-decrease-width";
import canIncreaseHeight from "./can-increase-height";
import canDecreaseHeight from "./can-decrease-height";
import canMoveUp from "./can-move-up";
import canMoveDown from "./can-move-down";
import canMoveLeft from "./can-move-left";
import canMoveRight from "./can-move-right";

export default function gridCheckPositions(cell: Cell, cells: Cell[]) {
  return {
    canIncreaseWidth: canIncreaseWidth(cell, cells),
    canDecreaseWidth: canDecreaseWidth(cell, cells),
    canIncreaseHeight: canIncreaseHeight(cell, cells),
    canDecreaseHeight: canDecreaseHeight(cell, cells),
    canMoveUp: canMoveUp(cell, cells),
    canMoveDown: canMoveDown(cell, cells),
    canMoveLeft: canMoveLeft(cell, cells),
    canMoveRight: canMoveRight(cell, cells),
  };
}
