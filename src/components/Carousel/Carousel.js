import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import CarouselItem from "../CarouselItem/CarouselItem";
import useWindowResizeEvent from "../../hooks/useWindowResizeEvent";
import CarouselButton from "../CarouselButton/CarouselButton";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  transition: all 250ms ease-in-out;
  position: relative;
  width: ${props => props.width}px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const getWidth = element => {
  if (element) {
    const { width } = element.getBoundingClientRect();
    return width;
  }
};

const Carousel = ({ children }) => {
  const { state, dispatch } = useContext(store);
  const { activeItem, translateValue, autoPlay, autoChangeTime, childCount } = state;
  const wrapperRef = useRef(null);
  const windowWidth = useWindowResizeEvent();
  const autoPlayRef = useRef(null);

  const handleNext = () => {
    dispatch({
      type: "setNextItem",
      payload: { isLast: activeItem === childCount - 1 }
    });
  };

  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    console.log(autoPlay, 'logging autoPlay in useEffect')
    if(autoPlay) {
      const play = () => {
        autoPlayRef.current()
      };

      const interval = setInterval(play, autoChangeTime * 1000);
      return () => clearInterval(interval)
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: "setTranslateValue",
      payload: activeItem * getWidth(wrapperRef.current)
    });
  }, [windowWidth]);

  useEffect(() => {
    const { width } = wrapperRef.current.getBoundingClientRect();
    dispatch({ type: "setCarouselWidth", payload: width });
  }, [wrapperRef]);

  const renderChildren = () =>
    children.map((child, i) => <CarouselItem key={i}>{child}</CarouselItem>);

  return (
    <Wrapper tabIndex={0} ref={wrapperRef}>
      <CarouselButton previous />
      <CarouselWrapper
        translateValue={translateValue}
        width={getWidth(wrapperRef.current) * children.length}
        style={{ transform: `translate(-${translateValue}px, 0)` }}
      >
        {renderChildren()}
      </CarouselWrapper>
      <CarouselButton />
    </Wrapper>
  );
};

export default Carousel;
