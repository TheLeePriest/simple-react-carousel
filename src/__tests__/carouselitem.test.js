import React from "react";
import { render } from "../test-utils";
import CarouselItem from "../components/CarouselItem/CarouselItem";

test("It loads!", () => {
  const { getByTestId } = render(<CarouselItem index={0} />);
  expect(getByTestId(/carouselItem-/)).toBeInTheDocument();
});

test("It renders the children", () => {
  const { getByTestId, debug, getByText } = render(
    <CarouselItem index={0}>
      <div data-testid="test-div">
        <p>I am a paragraph</p>
        <span>I am a span</span>
      </div>
    </CarouselItem>
  );

  expect(getByText("I am a paragraph")).toBeTruthy();
  expect(getByText("I am a span")).toBeTruthy();
  expect(getByTestId(/test-div/)).toBeInTheDocument();
});
