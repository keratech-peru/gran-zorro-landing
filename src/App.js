import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Hero />
    </Fragment>
  );
};

export default App;
