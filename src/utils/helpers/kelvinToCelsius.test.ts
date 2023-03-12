import { describe, expect, it } from "vitest";
import { kelvinToCelsius } from "./kelvinToCelsius";

describe("kelvinToCelsius", () => {
  it("calculates the value correctly", () => {
    expect(kelvinToCelsius(-10000000)).toBe(-10000273.15);
    expect(kelvinToCelsius(0)).toBe(-273.15);
    expect(kelvinToCelsius(10)).toBe(-263.15);
    expect(kelvinToCelsius(10000000)).toBe(9999726.85);
  });

  it("returns value fixed to 2 digits", () => {
    expect(kelvinToCelsius(0.0000005)).toBe(-273.15);
    expect(kelvinToCelsius(-0.0000005)).toBe(-273.15);
  });
});
