/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLE = {
  large: {
    width: "24px",
    height: "24px",
    padding: "4px",
    radius: "8px",
  },

  medium: {
    width: "12px",
    height: "12px",
    padding: "0px",
    radius: "4px;",
  },
  small: {
    width: "8px",
    height: "8px",
    padding: "0px",
    radius: "2px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = STYLE[size];

  if (!style) throw new Error(`Style for ${size} does not exist!`);
  return (
    <Wrapper
      style={{
        "--padding": style.padding,
        "--radius": style.radius,
      }}
      size={size}
    >
      <SliderWrapper style={{ "--radius": style.radius }}>
        <Slider
          value={value}
          style={{
            "--width": value + "%",
            "--height": style.height,
          }}
        >
          <VisuallyHidden>{value + "%"}</VisuallyHidden>
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* width: 370px; */
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray35};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
  padding: var(--padding);
`;

const SliderWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Slider = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
