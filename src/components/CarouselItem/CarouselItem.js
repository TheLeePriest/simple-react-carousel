import React, { useContext } from "react";
import styled from "styled-components";
import { store } from "../../store/store";

const Item = styled.li`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.active ? "1" : "0")};
`;

const ChildWrapper = styled.div`
  position: relative;
  max-width: 100%;
  display: inherit;

  > *:first-child {
    max-width: 100%;
  }
`;

const CarouselItem = ({ children, index }) => {
  const { state } = useContext(store);
  const { activeItem } = state;

  return (
    <Item
      data-testid={`carouselItem-${index}`}
      active={index === activeItem}
      data-active={index === activeItem}
    >
      <ChildWrapper>{children}</ChildWrapper>
    </Item>
  );
};

export default CarouselItem;
