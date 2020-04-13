import React from "react";
import styled from "styled-components";

const Item = styled.li`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChildWrapper = styled.div`
  position: relative;
`;

const CarouselItem = ({ children }) => {
  return (
    <Item>
      <ChildWrapper>{children}</ChildWrapper>
    </Item>
  );
};

export default CarouselItem;
