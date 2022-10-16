import React from "react";
import Router from "@/routes/Router";
import GlobalStyle from "@/styles/GlobalStyle";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Router />
    </React.StrictMode>
  );
}

export default App;
