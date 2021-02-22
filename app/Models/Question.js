import { ProxyState } from '../AppState.js'



export default class Question {
    constructor(data) {
        this.category = data.category
        this.correctAnswer = data.correctAnswer || data.correct_answer
        this.incorrectAnswers = data.incorrectAnswers || data.incorrect_answers
        this.question = data.question
        this.answers = this.randomizeAnswers()
    }

    randomizeAnswers() {
        let answers = [...this.incorrectAnswers, this.correctAnswer]

        for (let i = answers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = answers[i]
            answers[i] = answers[j]
            answers[j] = k
        } return answers
    }

    get Template() {
        // console.log(this.answers);
        return /*html*/ `
                <div class="card" style="background-color: maroon;">
                    <div class="card-body">
                        <h3 style="color: gray;">${this.question}</h3>
                            <div class="text-center">
                <button class="col" onclick="app.questionsController.submitAnswer('${this.answers[0]}')">${this.answers[0]}</button>
                <button class="col" onclick="app.questionsController.submitAnswer('${this.answers[1]}')">${this.answers[1]}</button>
                <button class="col" onclick="app.questionsController.submitAnswer('${this.answers[2]}')">${this.answers[2]}</button>
                <button class="col" onclick="app.questionsController.submitAnswer('${this.answers[3]}')">${this.answers[3]}</button>
                            </div>
                    </div>
                </div>
        `
    }
}
