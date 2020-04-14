import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const store = createContext({});
const { Provider } = store;

const StateProvider = ({
  children,
  childCount,
  autoPlay = false,
  autoChangeTime = 3
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
            translateValue: (payload) * state.carouselWidth
          };
        }
        case "setNextItem": {
          if (payload.isLast) {
            return { ...state, translateValue: 0, activeItem: 0 };
          } else {
            return {
              ...state,
              activeItem: state.activeItem + 1,
              translateValue: (state.activeItem + 1) * state.carouselWidth
            };
          }
        }
        case "setPreviousItem": {
          if (payload.isFirst) {
            return {
              ...state,
              activeItem: childCount - 1,
              translateValue: (childCount - 1) * state.carouselWidth
            };
          } else {
            return {
              ...state,
              activeItem: state.activeItem - 1,
              translateValue: (state.activeItem - 1) * state.carouselWidth
            };
          }
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
      autoChangeTime
    }
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {};

export { store, StateProvider };
