import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={1} size="24"></Icon>
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
    outline: 1px solid red;
  }

  ${NativeSelect}:hover + & {
    background-color: ${COLORS.gray300};
  }
`;

export default Select;
