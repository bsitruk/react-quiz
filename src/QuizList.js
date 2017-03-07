import { observer } from 'mobx-react';

import toBlockList from "./BlockList";
import QuizItem from "./QuizItem";

let QuizList = toBlockList(QuizItem, "Quizzes");
QuizList.displayName = "QuizList";

QuizList = observer(QuizList);

export default QuizList;
