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
  display: inherit;
  max-width: 100%;
  flex: ${({ coverContainer }) => (coverContainer ? "1" : "unset")};
  height: 100%;

  > *:first-child {
    max-width: 100%;
    width: ${({ width }) => `${width}px`};
    flex: ${({ coverContainer }) => (coverContainer ? "1" : "unset")};
    object-fit: ${({ coverContainer, itemFit }) =>
      coverContainer ? itemFit : "unset"};
  }
`;

const CarouselItem = ({ children, index, overrideFit = false }) => {
  const { state } = useContext(store);
  const { activeItem, contentCoversContainer, carouselWidth, itemFit } = state;
  const objectFitValue = overrideFit || itemFit;

  return (
    <Item
      data-testid={`carouselItem-${index}`}
      active={index === activeItem}
      data-active={index === activeItem}
    >
      <ChildWrapper
        coverContainer={contentCoversContainer}
        width={carouselWidth}
        itemFit={objectFitValue}
      >
        {children}
      </ChildWrapper>
    </Item>
  );
};

export default CarouselItem;
