import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import MainPageContainer from "./Containers/MainPageContainer";
function App() {
  return (
    <BrowserRouter>
      <MainPageContainer />
    </BrowserRouter>
  );
}

export default App;
