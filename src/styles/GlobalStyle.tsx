import { createGlobalStyle } from "styled-components";
import reset from "./reset-styled";

const GlobalStyleComponent = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
`;

const GlobalStyle = () => {
  return <GlobalStyleComponent />;
};

export default GlobalStyle;
