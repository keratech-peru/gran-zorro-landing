import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  outline: 1px solid blue;
  & > i {
    outline: 1px solid red;
    &:before {
      background-color: var(--color5);
      color: ${(props) => props.color};
      font-size: ${(props) => props.size}px;
      border-radius: ${(props) => props.size}px;
      padding: ${(props) => props.size / 8}px;
    }
  }
`;

const Icon = ({ children, size, color }) => {
  return (
    <StyledIcon size={size} color={color}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
