import React from "react";
import CarouselButton from "../components/CarouselButton/CarouselButton";
import { render } from "../test-utils";

test("It loads the next button", () => {
  const { getByTestId } = render(<CarouselButton />);
  expect(getByTestId("next-chevron")).toBeInTheDocument();
});

test("It loads the previous button as the previous prop is passed in", () => {
  const { getByTestId, debug } = render(<CarouselButton previous />);
  expect(getByTestId("previous-chevron")).toBeInTheDocument();
});
