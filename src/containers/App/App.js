import React from "react";
import {QuizSelection} from "../QuizSelection";
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import "./App.css";

let App = ({ quizStore }) => (
  <div className="App">
    <div className="App-header">
      <h1>Hello World !</h1>
    </div>

    <div className="App-container">
      <QuizSelection quizzes={quizStore.quizzes} />
    </div>

    <DevTools />
  </div>
);
App = observer(App);

export default App;
