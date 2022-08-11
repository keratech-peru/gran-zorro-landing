import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: 1px solid blue;
  background-color: #74ffd1;
  color: #0f2133;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  padding: 8px;
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
