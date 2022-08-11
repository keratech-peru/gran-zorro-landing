import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
};

export default App;
