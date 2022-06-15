import { describe, test, expect } from "vitest";
import cellHasNoOverlap from "./cellHasNoOverlap";
import { setup } from "@nuxt/test-utils-edge";

describe("unit | composable | cellHasNoOverlap", function () {
  setup({});

  test("it works with one cell", function () {
    let cell = {
      index: 1,
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    };

    let result = cellHasNoOverlap(cell, [cell]);

    expect(result).toBe(true);
  });

  test("it works with no overlap", function () {
    let cell = {
      index: 0,
      x: 0,
      y: 0,
      width: 1,
      height: 1,
    };

    let cells = [
      cell,
      {
        index: 1,
        x: 1,
        y: 1,
        width: 1,
        height: 1,
      },
      {
        index: 2,
        x: 2,
        y: 1,
        width: 1,
        height: 1,
      },
      {
        index: 3,
        x: 1,
        y: 2,
        width: 1,
        height: 1,
      },
    ];

    let result = cellHasNoOverlap(cell, cells);

    expect(result).toBe(true);
  });

  test("it works with x overlap", function () {
    let cell = {
      index: 0,
      x: 1,
      y: 0,
      width: 1,
      height: 1,
    };

    let cells = [
      cell,
      {
        index: 1,
        x: 0,
        y: 0,
        width: 2,
        height: 1,
      },
      {
        index: 2,
        x: 2,
        y: 1,
        width: 1,
        height: 1,
      },
      {
        index: 3,
        x: 1,
        y: 2,
        width: 1,
        height: 1,
      },
    ];

    let result = cellHasNoOverlap(cell, cells);

    expect(result).toBe(false);
  });

  test("it works with y overlap", function () {
    let cell = {
      index: 0,
      x: 0,
      y: 1,
      width: 1,
      height: 1,
    };

    let cells = [
      cell,
      {
        index: 1,
        x: 0,
        y: 0,
        width: 1,
        height: 2,
      },
      {
        index: 2,
        x: 2,
        y: 1,
        width: 1,
        height: 1,
      },
      {
        index: 3,
        x: 1,
        y: 2,
        width: 1,
        height: 1,
      },
    ];

    let result = cellHasNoOverlap(cell, cells);

    expect(result).toBe(false);
  });
});
