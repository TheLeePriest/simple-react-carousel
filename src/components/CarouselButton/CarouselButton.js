import React, { useContext } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import NextChevron from "../SVG/NextChevron";
import PreviousChevron from "../SVG/PreviousChevron";

const CarouselButtonElement = styled.button`
  position: absolute;
  top: 0;
  ${props => (props.previous ? "left: 10px;" : "right: 10px;")};
  z-index: 9;
  top: 50%;
  transform: translateY(-50%) scale(1);
  background: rgba(0,0,0,0.75);
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  border-radius: 3px;
  transition: all .3s ease;
  box-shadow: 0 0 3px rgba(0,0,0,0.16), 0 0 3px rgba(0,0,0,0.23);

  &:hover {
    cursor: pointer;
    transform: translateY(-50%) scale(1.05);
  }
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
      return <PreviousChevron width={32} height={32} fill="#ffffff"/>
    }

    return <NextChevron width={32} height={32} fill="#ffffff"/>
  };

  return (
    <CarouselButtonElement onClick={handleClick} previous={previous}>
      {renderButtonBody()}
    </CarouselButtonElement>
  );
};

export default CarouselButton;
