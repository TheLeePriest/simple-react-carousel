import React from "react";
import { StateProvider } from "./store/store";
import Carousel from "./components/Carousel/Carousel";

const SimpleCarousel = ({ children, autoPlay, showIndicators }) => (
  <StateProvider
    childCount={children ? children.length : 0}
    autoPlay={autoPlay}
    showIndicators={showIndicators}
  >
    <Carousel>{children}</Carousel>
  </StateProvider>
);

export default SimpleCarousel;
