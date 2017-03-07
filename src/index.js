import React from "react";
import ReactDOM from "react-dom";
import {App} from "./containers/App";
import "./index.css";

import {QuizStore} from "./stores";

const quizStore = new QuizStore();
ReactDOM.render(<App quizStore={quizStore} />, document.getElementById("root"));
