import React from "react";
import MainComponent from "./components/MainComponents";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
