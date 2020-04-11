import React, {useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';

const Item = styled.div`
  transform: translateX(${props => props.itemOffset}%);
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChildWrapper = styled.div`
  position: relative;
`;

const CarouselItem = ({children, itemOffset}) => {
    return (
      <Item itemOffset={itemOffset}>
        <ChildWrapper>
          {children}
        </ChildWrapper>
      </Item>
    )
};

export default CarouselItem;
