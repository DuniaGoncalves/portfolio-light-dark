import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
  body {
    background-color: ${(props) => props.theme.primaryBg};
    color: ${(props) => props.theme.textColor};
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  h1, h2, h3 {
    font-weight: 700;
  }

  button {
    background-color: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.buttonText};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600px;
    transition: transform 0.2 s ease-in-out 
  }

  button:hover {
    transform: scale(1.05);
  }
`;

export default GlobalStyles;