import React from "react";
import { StateProvider } from "./store/store";
import Carousel from "./components/Carousel/Carousel";

const SimpleCarousel = ({ children, autoPlay }) => (
  <StateProvider
    childCount={children ? children.length : 0}
    autoPlay={autoPlay}
  >
    <Carousel>{children}</Carousel>
  </StateProvider>
);

export default SimpleCarousel;
