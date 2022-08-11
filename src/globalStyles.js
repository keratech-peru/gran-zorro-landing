import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: #514ffe;
    --color1: #514ffe;
    --color2: #ff0e94;
    --color3: #ff8d3f;
    --color4: #fdf94b;
    --color5: #74ffd1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background-color);
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
