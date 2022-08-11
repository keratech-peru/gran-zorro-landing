import React from "react";
import styled from "styled-components";
import logo from "../assets/gran-zorro-logo.png";

const HeaderStyled = styled.header`
  outline: 1px solid red;

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
        width: 100px;
      }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header_content">
        <a className="header__logo" href=".">
          <img src={logo} alt="Gran Zorro Official Logo" />
        </a>
        <button>¡Únete ya!</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
