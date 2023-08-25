import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  input {
    outline: none;
  }

  button, a {
    cursor: pointer;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  legend, button, a, h3, legend{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
`;