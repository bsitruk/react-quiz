import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import QuizStore from "./QuizStore";

const quizStore = new QuizStore();
ReactDOM.render(<App quizStore={quizStore} />, document.getElementById("root"));
