import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Question from '../Models/Question.js'

class QuestionsService {
    constructor() {
        this.getQuestions()

    }
    getQuestions() {
        api.get().then(res => {
            console.log(res)
            ProxyState.questions = res.data.results.map(rawQuestionData => new Question(rawQuestionData))
        }).catch(err => console.error(err))
    }

    submitAnswer(answer) {
        console.log(ProxyState.questions);
        console.log(answer);
        let thisAnswer = ProxyState.questions.find(q => q.correctAnswer == answer)
        if (!thisAnswer) {
            swal({
                text: "AAAHHHHH!",
                icon: "error"
        })
        } else {
            swal({
                text: "DING DING DING!",
                icon: "success"
            })
        }
    }


}

export const questionsService = new QuestionsService();
