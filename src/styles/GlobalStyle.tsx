import { createGlobalStyle } from "styled-components";

import reset from "./reset-styled";

const GlobalStyleSetting = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }
`;

const GlobalStyle = () => {
  return <GlobalStyleSetting />;
};

export default GlobalStyle;
