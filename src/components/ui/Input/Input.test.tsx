import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("input", () => {
  const testPlaceholder = "Test Placeholder";

  it.todo("renders");

  it("displays the placeholder", () => {
    render(
      <Input value="" onChange={() => {}} placeholder={testPlaceholder} />
    );

    expect(screen.getByPlaceholderText(testPlaceholder)).toBeTruthy();
  });
});
