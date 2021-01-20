import React, { useContext, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import CarouselItem from "../CarouselItem/CarouselItem";
import useWindowResizeEvent from "../../hooks/useWindowResizeEvent";
import CarouselButton from "../CarouselButton/CarouselButton";
import Indicators from "../Indicators/Indicators";
import { getDimensions } from "../../modules/helpers";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  max-height: 100%;
  height: 100%;
`;

const CarouselWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: no-wrap;
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform ease-out ${({ transition }) => transition}s;
  transform: translate(-${({ translateValue }) => translateValue}px, 0);
`;

const Carousel = ({ children }) => {
  const { state, dispatch } = useContext(store);
  const {
    activeItem,
    translateValue,
    autoPlay,
    autoChangeTime,
    childCount,
    controlsOptions,
    indicatorOptions,
    activeSlides,
    slideTransitionValue,
    currentSlideTransition
  } = state;
  const wrapperRef = useRef(null);
  const windowWidth = useWindowResizeEvent();
  const autoPlayRef = useRef(null);
  const transitionRef = useRef(null);

  const handleNext = () => {
    dispatch({
      type: "setNextItem",
      payload: { isLast: activeItem === childCount - 1 }
    });
  };

  const setActiveSlides = useCallback(() => {
    if (Array.isArray(children)) {
      dispatch({
        type: "setActiveSlidesArray",
        payload: children.slice(children.slice(0, activeItem + 3))
      });

      return;
    }

    dispatch({
      type: "setActiveSlidesArray",
      payload: [children]
    });
  }, [children]);

  useEffect(() => {
    if (!children) {
      return;
    }
    setActiveSlides();
  }, []);

  useEffect(() => {
    autoPlayRef.current = handleNext;
    transitionRef.current = slideTransition;
  });

  useEffect(() => {
    if (currentSlideTransition === 0)
      dispatch({
        type: "setCurrentSlideTransitionValue",
        payload: slideTransitionValue
      });
  }, [currentSlideTransition]);

  useEffect(() => {
    const fireTransition = event => {
      if (event.target.dataset.name !== "carouselWrapper") return;
      transitionRef.current();
    };

    const transitionEnd = window.addEventListener(
      "transitionend",
      fireTransition
    );

    if (autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };

      const interval = setInterval(play, autoChangeTime * 1000);
      return () => {
        clearInterval(interval);
        window.removeEventListener("transitionend", transitionEnd);
      };
    }

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: "handleWindowResize",
      payload: {
        translateValue: activeItem * getDimensions(wrapperRef.current).width,
        currentSlideTransition: 0
      }
    });
  }, [windowWidth]);

  useEffect(() => {
    const { width } = wrapperRef.current.getBoundingClientRect();
    dispatch({ type: "setCarouselWidth", payload: width });
  }, [wrapperRef]);

  const slideTransition = () => {
    let newActiveSlides = [];

    if (activeItem === children.length - 1)
      newActiveSlides = [
        children[children.length - 2],
        children[children.length - 1],
        children[0]
      ];
    else if (activeItem === 0)
      newActiveSlides = [
        children[children.length - 1],
        children[0],
        children[1]
      ];
    else newActiveSlides = children.slice(activeItem - 1, activeItem + 2);

    dispatch({
      type: "triggerSlideTransition",
      payload: {
        activeSlides: newActiveSlides,
        translateValue: getDimensions(wrapperRef.current).width,
        currentSlideTransition: 0
      }
    });
  };

  const renderChildren = () =>
    activeSlides.map((slide, i) => (
      <CarouselItem
        key={i}
        index={i}
        overrideFit={slide ? slide?.props["data-itemFit"] : false}
      >
        {slide}
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
          data-name="carouselWrapper"
        >
          <h2>You need to pass some elements in to navigate through!</h2>
        </CarouselWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper tabIndex={0} ref={wrapperRef} data-testid="carousel-wrapper">
      {controlsOptions.show && activeSlides.length > 1 && (
        <CarouselButton previous />
      )}

      <CarouselWrapper
        translateValue={translateValue}
        width={getDimensions(wrapperRef.current).width * activeSlides.length}
        height={getDimensions(wrapperRef.current).height}
        transition={currentSlideTransition}
        data-name="carouselWrapper"
      >
        {renderChildren()}
      </CarouselWrapper>

      {controlsOptions.show && activeSlides.length > 1 && <CarouselButton />}

      {indicatorOptions.show && activeSlides.length > 1 && <Indicators />}
    </Wrapper>
  );
};
export default Carousel;
