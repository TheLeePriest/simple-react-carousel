import React, {useContext} from "react";
import styled from "styled-components";
import { store } from "../../store/store";

const CarouselButtonElement = styled.button`
  position: absolute;
  top: 0;
  ${props => (props.previous ? "left: 0;" : "right: 0;")};
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
`;

const CarouselButton = ({ previous }) => {
  const {state, dispatch} = useContext(store);
  const {activeItem, childCount, carouselWidth} = state;

  const handleNext = () => {
    if (activeItem === childCount - 1) {
      dispatch({ type: "setTranslateValue", payload: 0 });
      dispatch({ type: "updateActiveItem", payload: 0 });
      return;
    }

    dispatch({ type: "updateActiveItem", payload: activeItem + 1 });
    dispatch({
      type: "setTranslateValue",
      payload: (activeItem + 1) * carouselWidth
    });
  };

  const handlePrev = () => {
    if (activeItem === 0) {
      dispatch({
        type: "setTranslateValue",
        payload: (childCount - 1) * carouselWidth
      });
      dispatch({ type: "updateActiveItem", payload: childCount - 1 });
      return;
    }

    dispatch({ type: "updateActiveItem", payload: activeItem - 1 });
    dispatch({
      type: "setTranslateValue",
      payload: (activeItem - 1) * carouselWidth
    });
  };

  const handleClick = () => {
    if (previous) {
      handlePrev();
      return;
    }

    handleNext();
  };

  return (
    <CarouselButtonElement onClick={handleClick} previous={previous}>
      {previous ? 'Prev' : 'Next'}
    </CarouselButtonElement>
  );
};

export default CarouselButton;
