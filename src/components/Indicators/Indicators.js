import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { store } from "../../store/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: ${props => props.width}px;
  justify-content: space-between;
  margin: auto;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
`;

const Indicator = styled.div`
  width: 20px;
  height: 5px;
  background-color: ${props =>
    props.active ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)"};
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.23);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

const Indicators = () => {
  const { state, dispatch } = useContext(store);
  const { childCount, activeItem } = state;
  const [wrapperWidth, setWrapperWidth] = useState(20 * childCount);

  const handleClick = index => {
    dispatch({ type: "setToSpecificItem", payload: index });
  };

  const renderIndicators = () => {
    return [...Array(childCount)].map((_, index) => (
      <Indicator
        key={`indicator-${index}`}
        data-testid={`indicator-${index}`}
        data-active={index === activeItem}
        active={index === activeItem}
        onClick={() => handleClick(index)}
      />
    ));
  };

  useEffect(() => {
    setWrapperWidth(20 * childCount + 5 * childCount);
  }, [childCount]);

  return (
    <Wrapper width={wrapperWidth || 0} data-testid="indicators">
      {renderIndicators()}
    </Wrapper>
  );
};

export default Indicators;
