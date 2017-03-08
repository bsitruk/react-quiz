import React from "react";
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import Header from "./Header";

import "./App.css";

const App = ({ quizStore, children }) => (
  <div className="App">
    <Header />

    <div className="App-container">
      {React.cloneElement(children, { quizStore })}
    </div>

    <DevTools />
  </div>
);

export default inject("quizStore")(observer(App));
