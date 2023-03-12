import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("button", () => {
  const renderButton = (props?: any) =>
    render(<Button {...props}>test</Button>);

  it("renders correctly", () => {
    renderButton();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("sets the correct class based on variant", () => {
    renderButton({ variant: "primary" });
    expect(screen.getByRole("button")).toHaveClass("button--primary");
  });

  it("gets disabled when passed the prop", () => {
    render(<Button disabled>test</Button>);
    expect(screen.getByRole("button")).toHaveProperty("disabled", true);
  });

  it("should render the text correctly", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button").textContent).toBe("Test");
  });

  it("should have the right styling as primary button", () => {
    render(<Button>test</Button>);
    expect(window.getComputedStyle(screen.getByRole("button")).padding).toBe(
      "1rem"
    );
  });
});
