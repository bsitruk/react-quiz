import React, { Component } from "react";
import { observable } from "mobx";
import { Provider, observer } from "mobx-react";

import { Block, SectionTitle } from "../../components";
import Quiz from "./Quiz";

@observer class QuizDisplay extends Component {
  @observable quizState;

  constructor(props) {
    super(props);
    this.quizState = {
      step: 0,
      answers: observable.map(),
      get loading() {
        const quiz = props.quizStore.currentQuiz;
        return !quiz;
      },
      get title() {
        const quiz = props.quizStore.currentQuiz;
        return quiz && quiz.title;
      },
      get counter() {
        return this.step + 1;
      },
      get question() {
        const quiz = props.quizStore.currentQuiz;
        return quiz && quiz.questions[this.step];
      },
      get total() {
        const quiz = props.quizStore.currentQuiz;
        return quiz && quiz.questions.length;
      }
    };
  }

  render() {
    if (this.quizState.loading) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <SectionTitle title={this.quizState.title} />
        <Block>
          <Provider quizState={this.quizState}>
            <Quiz quizState={this.quizState} />
          </Provider>
        </Block>
      </div>
    );
  }
}

export default QuizDisplay;
