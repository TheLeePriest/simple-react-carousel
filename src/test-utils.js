import React from "react";
import { render } from "@testing-library/react";
import { StateProvider } from "./store/store";

const CarouselProvider = ({ children }) => {
  return <StateProvider>{children}</StateProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: CarouselProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
