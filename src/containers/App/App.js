import React from "react";
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import "./App.css";

const App = ({ quizStore, children }) => (
  <div className="App">
    <div className="App-header">
      <h1>Hello World !</h1>
    </div>

    <div className="App-container">
      {React.cloneElement(children, { quizStore })}
    </div>

    <DevTools />
  </div>
);

export default inject("quizStore")(observer(App));
