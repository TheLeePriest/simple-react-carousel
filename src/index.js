import React from "react";
import { StateProvider } from "./store/store";
import Carousel from "./components/Carousel/Carousel";

const SimpleCarousel = ({
  children,
  autoPlay,
  autoChangeTime,
  showIndicators,
  contentCoversContainer,
  itemFit,
  controlsOptions,
  indicatorOptions
}) => (
  <StateProvider
    childCount={children ? children.length : 0}
    autoPlay={autoPlay}
    autoChangeTime={autoChangeTime}
    showIndicators={showIndicators}
    contentCoversContainer={contentCoversContainer}
    itemFit={itemFit}
    controlsOptions={controlsOptions}
    indicatorOptions={indicatorOptions}
  >
    <Carousel>{children}</Carousel>
  </StateProvider>
);

export default SimpleCarousel;
