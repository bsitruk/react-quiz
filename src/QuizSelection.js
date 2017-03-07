import React from "react";
import { observer } from 'mobx-react';

import SectionTitle from "./SectionTitle";
import QuizList from "./QuizList";

let QuizSelection = ({ quizzes }) => (
  <div>
    <SectionTitle title="Select a quiz" />
    <QuizList list={quizzes} />
  </div>
);
QuizSelection = observer(QuizSelection);

export default QuizSelection;
