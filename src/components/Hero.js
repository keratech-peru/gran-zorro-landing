import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledHero = styled.div`
  outline: 1px solid black;
`;

const Hero = () => {
  return (
    <StyledHero>
      <h1>Únete a nuestra comunidad de apuestas deportivas</h1>
      <p>
        Contamos con un ratio de 80% de aciertos semanales. Regístrate
        con nosotros y recibe diariamente Las Fijas. Rápido, sencillo
        y seguro.
      </p>
      <div className="hero__media">
        <Icon size={32} color="white">
          <i class="ri-instagram-fill"></i>
        </Icon>
        <Icon size={32} color="white">
          <i class="ri-facebook-fill"></i>
        </Icon>
      </div>
    </StyledHero>
  );
};

export default Hero;
