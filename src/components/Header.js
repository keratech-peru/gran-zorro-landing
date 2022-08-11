import React from "react";
import styled from "styled-components";
import logo from "../assets/gran-zorro-logo.png";
import Button from "./Button";

const StyledHeader = styled.header`
  outline: 1px solid red;
  height: 100px;

  & > .header_content {
    outline: 1px solid blue;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    & > .header__logo {
      outline: 1px solid green;
      & > img {
        height: 100px;
      }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header_content">
        <a className="header__logo" href=".">
          <img src={logo} alt="Gran Zorro Official Logo" />
        </a>
        <Button text="¡ÚNETE YA!" />
      </div>
    </StyledHeader>
  );
};

export default Header;
