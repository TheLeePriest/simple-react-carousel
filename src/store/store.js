import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const store = createContext({});
const { Provider } = store;

const StateProvider = ({children, childCount, autoPlay = false, autoChangeTime = 3}) => {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        case 'updateActiveItem':
          return {...state, activeItem: payload};
        case 'setCarouselWidth':
          return {...state, carouselWidth: payload};
        case 'setTranslateValue':
          return {...state, translateValue: payload};
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
    }
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {};

export { store, StateProvider };
