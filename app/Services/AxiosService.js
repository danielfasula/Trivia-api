
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple',
    timeout: 3000
})