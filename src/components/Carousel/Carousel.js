import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import CarouselItem from "../CarouselItem/CarouselItem";
import useWindowResizeEvent from "../../hooks/useWindowResizeEvent";
import CarouselButton from "../CarouselButton/CarouselButton";
import Indicators from "../Indicators/Indicators";

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
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const getDimensions = element => {
  if (element) {
    const { width, height } = element.getBoundingClientRect();
    return { width, height };
  }

  return { width: 500, height: 500 };
};

const Carousel = ({ children }) => {
  const { state, dispatch } = useContext(store);
  const {
    activeItem,
    translateValue,
    autoPlay,
    autoChangeTime,
    childCount,
    showIndicators
  } = state;
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
    if (autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };

      const interval = setInterval(play, autoChangeTime * 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: "setTranslateValue",
      payload: activeItem * getDimensions(wrapperRef.current).width
    });
  }, [windowWidth]);

  useEffect(() => {
    const { width } = wrapperRef.current.getBoundingClientRect();
    dispatch({ type: "setCarouselWidth", payload: width });
  }, [wrapperRef]);

  const renderChildren = () =>
    children.map((child, i) => (
      <CarouselItem key={i} index={i} overrideFit={child.props["data-itemFit"]}>
        {child}
      </CarouselItem>
    ));

  if (!children) {
    return (
      <Wrapper
        tabIndex={0}
        ref={wrapperRef}
        data-testid="carousel-wrapper-no-children"
      >
        <CarouselWrapper
          translateValue={translateValue}
          style={{
            width: "100%",
            transform: `translate(-${translateValue}px, 0)`
          }}
        >
          <h2>You need to pass some elements in to navigate through!</h2>
        </CarouselWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper tabIndex={0} ref={wrapperRef} data-testid="carousel-wrapper">
      <CarouselButton previous />
      <CarouselWrapper
        translateValue={translateValue}
        width={getDimensions(wrapperRef.current).width * children.length}
        height={getDimensions(wrapperRef.current).height}
        style={{ transform: `translate(-${translateValue}px, 0)` }}
      >
        {renderChildren()}
      </CarouselWrapper>
      <CarouselButton />
      {showIndicators && <Indicators />}
    </Wrapper>
  );
};

export default Carousel;
