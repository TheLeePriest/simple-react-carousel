import React from "react";
import { render } from "../test-utils";
import Indicators from "../components/Indicators/Indicators";
import { StateProvider } from "../store/store";
import { fireEvent } from "@testing-library/react";

test("It loads!", () => {
  const { getByTestId } = render(<Indicators />);
  expect(getByTestId("indicators")).toBeInTheDocument();
});

test("It should render out 5 indicators", async () => {
  const { findAllByTestId } = render(
    <StateProvider childCount={5}>
      <Indicators />
    </StateProvider>
  );
  const indicators = await findAllByTestId(/indicator-/);
  expect(indicators).toHaveLength(5);
});

test("The first indicator should be active by default", () => {
  const { getByTestId } = render(
    <StateProvider childCount={5}>
      <Indicators />
    </StateProvider>
  );
  const firstElement = getByTestId("indicator-0");
  const thirdElement = getByTestId("indicator-2");

  expect(firstElement).toHaveAttribute("data-active", "true");
  expect(thirdElement).toHaveAttribute("data-active", "false");
});

test("Clicking on the 3rd indicator should set it to active", () => {
  const { getByTestId } = render(
    <StateProvider childCount={5}>
      <Indicators />
    </StateProvider>
  );
  const firstElement = getByTestId("indicator-0");
  const thirdElement = getByTestId("indicator-2");

  expect(firstElement).toHaveAttribute("data-active", "true");
  expect(thirdElement).toHaveAttribute("data-active", "false");

  fireEvent.click(thirdElement);

  expect(firstElement).toHaveAttribute("data-active", "false");
  expect(thirdElement).toHaveAttribute("data-active", "true");
});
