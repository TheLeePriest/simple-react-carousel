import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { render } from "../test-utils";
import {StateProvider} from "../store/store";

test("It loads displaying a message that no children have been passed", () => {
  const { getByTestId } = render(<Carousel />);
  const carouselWrapper = getByTestId(/carousel-wrapper-no-children/);
  expect(carouselWrapper).toBeInTheDocument();
  expect(carouselWrapper).toHaveTextContent(
    "You need to pass some elements in to navigate through!"
  );
});

test("It loads with two children", async () => {
  const { getByTestId, findAllByTestId } = render(
    <StateProvider childCount={2}>
      <Carousel>
        <h2 data-testid="first-slide">First Item</h2>
        <h2 data-testid="second-slide">Second Item</h2>
      </Carousel>
    </StateProvider>
  );
  const carouselWrapper = getByTestId(/carousel-wrapper/);
  expect(carouselWrapper).toBeInTheDocument();

  const slides = await findAllByTestId(/carouselItem/);
  expect(slides).toHaveLength(2);
});

test("It loads with two children and only the first is visible", async () => {
  const { getByTestId } = render(
    <StateProvider childCount={2}>
      <Carousel>
        <h2 data-testid="first-slide">First Item</h2>
        <h2 data-testid="second-slide">Second Item</h2>
      </Carousel>
    </StateProvider>
  );

  expect(getByTestId(/first-slide/)).toBeVisible();
  expect(getByTestId(/second-slide/)).not.toBeVisible();
});

test("It loads and sets the first slide to active", async () => {
  const { getByTestId } = render(
    <StateProvider childCount={2}>
      <Carousel>
        <h2 data-testid="first-slide">First Item</h2>
        <h2 data-testid="second-slide">Second Item</h2>
      </Carousel>
    </StateProvider>
  );

  expect(getByTestId(/carouselItem-0/)).toHaveAttribute('data-active', 'true');
});

test("It loads and sets the first indicator to active", async () => {
  const { getByTestId } = render(
    <StateProvider childCount={2}>
      <Carousel>
        <h2 data-testid="first-slide">First Item</h2>
        <h2 data-testid="second-slide">Second Item</h2>
      </Carousel>
    </StateProvider>
  );
  const firstElement = getByTestId("indicator-0");
  expect(firstElement).toHaveAttribute('data-active', 'true');
});
