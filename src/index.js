import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from "mobx-react";
import "./index.css";

import { App } from "./containers/App";
import { QuizSelection } from "./containers/QuizSelection";

import stores from "./stores";

ReactDOM.render((
  <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={QuizSelection}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))