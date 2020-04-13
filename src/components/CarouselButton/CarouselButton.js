import React, { useContext } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import NextChevron from "../SVG/NextChevron";
import PreviousChevron from "../SVG/PreviousChevron";

const CarouselButtonElement = styled.button`
  position: absolute;
  top: 0;
  ${props => (props.previous ? "left: 0;" : "right: 0;")};
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
`;

const CarouselButton = ({ previous }) => {
  const { state, dispatch } = useContext(store);
  const { activeItem, childCount } = state;

  const handleNext = () => {
    dispatch({
      type: "setNextItem",
      payload: { isLast: activeItem === childCount - 1 }
    });
  };

  const handlePrev = () => {
    dispatch({
      type: 'setPreviousItem',
      payload: {isFirst: activeItem === 0}
    });
  };

  const handleClick = () => {
    if (previous) {
      handlePrev();
      return;
    }

    handleNext();
  };

  const renderButtonBody = () => {
    if(previous) {
      return <PreviousChevron />
    }

    return <NextChevron />
  };

  return (
    <CarouselButtonElement onClick={handleClick} previous={previous}>
      {renderButtonBody()}
    </CarouselButtonElement>
  );
};

export default CarouselButton;
