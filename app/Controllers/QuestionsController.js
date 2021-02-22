import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import { questionsService } from "../Services/QuestionsService.js";


function _draw() {
    let template = ''
    ProxyState.questions.forEach(q => template += q.Template)
    document.getElementById('app').innerHTML = /*html*/`
        <div class="card-columns questions">
            ${template}
        </div>
    `
}



//Public
export default class QuestionsController {
    constructor() {
        ProxyState.on('questions', _draw)
    }
    getQuestions() {
        questionsService.getQuestions()
    }
    submitAnswer(answer) {
        questionsService.submitAnswer(answer)
    }

}
