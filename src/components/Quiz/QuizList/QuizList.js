import { observer } from "mobx-react";

import { toBlockList } from "../..";
import { QuizItem } from "../QuizItem";

let QuizList = toBlockList(QuizItem, "Quizzes");
QuizList.displayName = "QuizList";

export default observer(QuizList);
