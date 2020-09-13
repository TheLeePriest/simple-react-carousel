import React, { useContext } from "react";
import styled from "styled-components";
import { store } from "../../store/store";
import NextChevron from "../SVG/NextChevron";
import PreviousChevron from "../SVG/PreviousChevron";

const CarouselButtonElement = styled.button`
  position: absolute;
  ${props => (props.previous ? "left: 10px;" : "right: 10px;")};
  z-index: 9;
  top: ${({ options }) => {
    switch (options.position) {
      case "top":
        return "10px";
      case "bottom":
        return "calc(100% - (42px + 1rem))";
      default:
        return "50%";
    }
  }};

  ${({ options }) => {
    switch (options.shape) {
      case "circle": {
        if (options.width === "auto") {
          console.log("You haven't specified a width for the button!");
        }

        return `width: ${options.width};
        height: ${options.width};
        border-radius: 50%;`;
      }
      case "square": {
        if (options.width === "auto") {
          console.log("You haven't specified a width for the button!");
        }

        return `width: ${options.width};
        height: ${options.width};
        border-radius: 0;`;
      }
      default:
        return `
            width: ${options.width};
            height: ${options.height};
            border-radius: ${options.borderRadius};
          `;
    }
  }}

  ${({ options }) => {
    if (options.position === "middle") {
      return "transform: scale(1);";
    }
  }}


  background: rgba(0, 0, 0, 0.75);
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  transition: all ease
    ${({ currentSlideTransition }) => currentSlideTransition}s;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.23);

  &:hover {
    cursor: pointer;

    ${({ options }) => {
      if (options.position === "middle") {
        return "transform: scale(1.05);";
      } else {
        return "transform: scale(1.05)";
      }
    }}
  }
`;

const CarouselButton = ({ previous }) => {
  const { state, dispatch } = useContext(store);
  const { controlsOptions, currentSlideTransition } = state;

  const handleNext = () => {
    dispatch({
      type: "setNextItem"
    });
  };

  const handlePrev = () => {
    dispatch({
      type: "setPreviousItem"
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
    if (previous) {
      if (
        controlsOptions.leftControlIcon &&
        React.isValidElement(controlsOptions.leftControlIcon)
      ) {
        return controlsOptions.leftControlIcon;
      }

      return (
        <PreviousChevron
          width={controlsOptions.iconWidth}
          height={controlsOptions.iconWidth}
          fill={controlsOptions.iconFill}
        />
      );
    }

    if (
      controlsOptions.rightControlIcon &&
      React.isValidElement(controlsOptions.rightControlIcon)
    ) {
      return controlsOptions.leftControlIcon;
    }

    return (
      <NextChevron
        width={controlsOptions.iconWidth}
        height={controlsOptions.iconWidth}
        fill={controlsOptions.iconFill}
      />
    );
  };

  return (
    <CarouselButtonElement
      onClick={handleClick}
      previous={previous}
      options={controlsOptions}
      currentSlideTransition={currentSlideTransition}
      aria-label={`${previous ? 'Previous' : 'Next'} image button`}
    >
      {renderButtonBody()}
    </CarouselButtonElement>
  );
};

export default CarouselButton;
