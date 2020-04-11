import React, { useContext, useRef, useEffect, useState } from "react";
import styled from 'styled-components';
import { store } from "../../store/store";
import CarouselItem from "./CarouselItem";

const Wrapper = styled.div`
  width: 100%;
  overflow:hidden;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  transition: all 250ms ease-in-out;
  position: relative;
  width: ${props => props.width}px;
  transform: translateX(-${props => props.translateValue}px);
`;

const useWindowResizeEvent = () => {
  const getWindowWidth = () => window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const resize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener('resize', resize);

    return () => {window.removeEventListener('resize', resize)};
  }, []);

  console.log(windowWidth, 'inside the hook')
  return windowWidth;
};

const Carousel = ({ children }) => {
  const { state, dispatch } = useContext(store);
  const { activeItem, carouselWidth, translateValue } = state;
  const wrapperRef = useRef(null);
  const windowWidth = useWindowResizeEvent();

  useEffect(() => {
    dispatch({type: 'setTranslateValue', payload: activeItem * getWidth()});
  }, [windowWidth]);

  useEffect(() => {
      const {width} = wrapperRef.current.getBoundingClientRect();
      dispatch({type: 'setCarouselWidth', payload: width})
  }, [wrapperRef]);

  const getWidth = () => {
    if(wrapperRef.current) {
      const {width} = wrapperRef.current.getBoundingClientRect();
      return width;
    }
  };

  const renderChildren = () => children.map((child, i) => (<CarouselItem key={i}>{child}</CarouselItem>));

  const handleNext = () => {
    if (activeItem === children.length - 1) {
      dispatch({type: 'setTranslateValue', payload: 0});
      dispatch({type: 'updateActiveItem', payload: 0});
      return;
    }

    dispatch({type: 'updateActiveItem', payload: activeItem + 1});
    dispatch({type: 'setTranslateValue', payload: (activeItem + 1) * getWidth()})
  };

  const handlePrev = () => {
    if (activeItem === 0) {
      dispatch({type: 'setTranslateValue', payload: (children.length -1) * getWidth()});
      dispatch({type: 'updateActiveItem', payload: children.length -1});
      return;
    }

    dispatch({type: 'updateActiveItem', payload: activeItem - 1});
    dispatch({type: 'setTranslateValue', payload: (activeItem - 1) * getWidth()})
  };

  return (
    <Wrapper ref={wrapperRef}>
      <button onClick={handlePrev}> Prev </button>
      <CarouselWrapper translateValue={translateValue} width={getWidth() * children.length}>
        {renderChildren()}
      </CarouselWrapper>
      <button onClick={handleNext}> Next </button>
    </Wrapper>
  );
};

export default Carousel;
