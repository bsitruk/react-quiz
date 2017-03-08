import { observable, computed, action } from "mobx";
//import axios from "axios";

//const endPoint = "http://58bdeca3a0cc651200a4bed3.mockapi.io/api/quizzes";

const quizzesData = [
  {
    id: 1,
    title: "Quizz 1",
    description: "My First Quizz",
    questions: [
      {
        id: 1,
        question: "What is the first question ?",
        answers: [
          { id: 1, value: "The first choice" },
          { id: 2, value: "The second choice" }
        ]
      },
      {
        id: 2,
        question: "What is the second question ?",
        answers: [
          { id: 3, value: "The first choice" },
          { id: 4, value: "The second choice" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Quizz 2",
    description: "My Second Quizz",
    questions: [
      {
        id: 3,
        question: "What is the first question ?",
        answers: [
          { id: 5, value: "The first choice" },
          { id: 6, value: "The second choice" }
        ]
      },
      {
        id: 4,
        question: "What is the second question ?",
        answers: [
          { id: 7, value: "The first choice" },
          { id: 8, value: "The second choice" }
        ]
      }
    ]
  }
];

class QuizStore {
  @observable _quizzes = [];

  @computed get quizzes() {
    if (!this._quizzes.length) {
      this.fetchQuizzesFromServer().then(response =>
        this.quizzesLoaded(response.data));
    }
    return this._quizzes;
  }

  fetchQuizzesFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({data: quizzesData}), 1500);
    });
  }

  @action quizzesLoaded(data) {
    this._quizzes.push(...data);
  }
}

export default QuizStore;
