import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("searchbar", function () {
  it.todo("disables submit button if input is empty", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    );

    const submitButton = screen.getByText("Search");
    expect(submitButton.getAttribute("disabled")).toBeTruthy();
  });
});
