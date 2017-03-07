import React from "react";
import { observer } from "mobx-react";

import { SectionTitle } from "../../components/SectionTitle";
import { QuizList } from "../../components/Quiz/QuizList";

let QuizSelection = ({ quizStore, router }) => (
  <div>
    <SectionTitle title="Select a quiz" />
    <QuizList
      list={quizStore.quizzes}
      onItemClick={quizId => {
        router.push(`/quiz/${quizId}`);
      }}
    />
  </div>
);
QuizSelection = observer(QuizSelection);

export default QuizSelection;
