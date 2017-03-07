import { observable, computed, action } from "mobx";
import axios from "axios";

const endPoint = "http://58bdeca3a0cc651200a4bed3.mockapi.io/api/quizzes";

class QuizStore {
  @observable _quizzes = null;

  @computed get quizzes() {
    if (this._quizzes == null) {
      this.fetchQuizzesFromServer();
    }
    return this._quizzes;
  }

  fetchQuizzesFromServer() {
    const url = endPoint;
    axios.get(url).then(response => {
      this.quizzesLoaded(response.data);
    })
    .catch(error => {
        console.log(error);
    });
  }

  @action quizzesLoaded(data) {
    this._quizzes = data;
  }
}

export default QuizStore;