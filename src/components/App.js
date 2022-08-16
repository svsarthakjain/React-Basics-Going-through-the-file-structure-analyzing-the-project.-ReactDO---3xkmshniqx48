import React, { Component, useState } from "react";
import "../styles/App.css";
import Heading from "./components/Heading.js";
import Description from "./components/Description.js";
const App = () => {
  return (
    <div id="main">
      <Heading />
      <Description />
    </div>
  );
};

export default App;
