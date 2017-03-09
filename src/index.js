import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "mobx-react";
import "./index.css";

import { App } from "./containers/App";
import { QuizSelection } from "./containers/QuizSelection";
import { QuizDisplay } from "./containers/QuizDisplay";

import stores from "./stores";

const getRoutes = stores => {
  const setQuizId = nextState => {
    stores.quizStore.setCurrentQuizId(nextState.params.quizId);
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={QuizSelection} />
      <Route path="quiz/:quizId" component={QuizDisplay} onEnter={setQuizId} />
    </Route>
  );
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={browserHistory}>
      {getRoutes(stores)}
    </Router>
  </Provider>,
  document.getElementById("root")
);
