import React, { createContext, useReducer } from "react";
import {
  defaultControlsOptions,
  defaultIndicatorOptions
} from "./defaultOptions";

const store = createContext({});
const { Provider } = store;

const StateProvider = ({
  children,
  childCount = 0,
  autoPlay = false,
  autoChangeTime = 3,
  contentCoversContainer = true,
  itemFit = "contain",
  controlsOptions,
  indicatorOptions,
  slideTransitionValue = 0.3,
  currentSlideTransition = slideTransitionValue
}) => {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case "updateActiveItem":
          return { ...state, activeItem: payload };
        case "setCarouselWidth":
          return { ...state, carouselWidth: payload };
        case "setTranslateValue":
          return { ...state, translateValue: payload };
        case "setToSpecificItem": {
          return {
            ...state,
            activeItem: payload,
            translateValue: state.translateValue + state.carouselWidth
          };
        }
        case "setNextItem": {
          return {
            ...state,
            translateValue: state.translateValue + state.carouselWidth,
            activeItem:
              state.activeItem === childCount - 1 ? 0 : state.activeItem + 1
          };
        }
        case "setPreviousItem": {
          return {
            ...state,
            translateValue: 0,
            activeItem:
              state.activeItem === 0 ? childCount - 1 : state.activeItem - 1
          };
        }
        case "setActiveSlidesArray": {
          return {
            ...state,
            activeSlides: payload
          };
        }
        case "setCurrentSlideTransitionValue": {
          return {
            ...state,
            currentSlideTransition: payload
          };
        }
        case "triggerSlideTransition": {
          return {
            ...state,
            ...payload
          };
        }
        case "handleWindowResize": {
          return {
            ...state,
            ...payload
          };
        }
        default:
          return state;
      }
    },
    {
      activeItem: 0,
      childCount,
      translateValue: 0,
      carouselWidth: 0,
      autoPlay,
      autoChangeTime,
      contentCoversContainer,
      itemFit,
      controlsOptions: {
        ...defaultControlsOptions,
        ...controlsOptions
      },
      indicatorOptions: {
        ...defaultIndicatorOptions,
        ...indicatorOptions
      },
      activeSlides: [],
      slideTransitionValue,
      currentSlideTransition
    }
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
