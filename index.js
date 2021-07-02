const questions = ["https://opentdb.com/api.php?amount=10&category=18&difficulty=easy", "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium", "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard"]
let userScore = 0
let questionsCounter = 0
let currentQuestion = {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    "correct_answer": "Apple",
    "incorrect_answers": [
      "Microsoft",
      "Atari",
      "Commodore"
    ]
  }
let currentAnswer = ""
let possibleAnswers = [currentQuestion.correct_answer,]

  const getAQuestion = function(){
    document.getElementById('questionContainer').innerText = currentQuestion.question
    for (let i = 0; i < currentQuestion.incorrect_answers.length; i++){
            possibleAnswers.push(currentQuestion.incorrect_answers[i])
        }       
}

const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let idOfThis = function(){
      alert(this.id)
  }
  const createAnswerButtons = function(){
    for (let i=0; i < possibleAnswers.length;i++){
        let newQuizButton = document.createElement('button')
        newQuizButton.classList.add('answerButton')
        newQuizButton.onclick = function(event) {
            currentAnswer = this.innerText}
        newQuizButton.addEventListener('click', answer)
        newQuizButton.innerText = possibleAnswers[i]
        document.getElementById('buttonContainer').appendChild(newQuizButton)
     }
}
const deleteButtons = function(){
    let answerButtons = document.getElementsByClassName('answerButton')
    let buttonContainerDiv = document.getElementById('buttonContainer')
    while(answerButtons.length > 0){
        answerButtons[0].parentNode.removeChild(answerButtons[0]);
    }
}

const startGame = function(){
    gameStartingButtons = document.getElementsByClassName('startButton')
    for (let i = gameStartingButtons.length -1; i >= 0; i--){
        gameStartingButtons[i].remove()
    }
    getAQuestion()
    shuffleAnswers(possibleAnswers)
    createAnswerButtons()    
}

    const answer = function(){
        if (currentAnswer === currentQuestion.correct_answer){
            userScore += 1
        document.getElementById('userScore').innerText = userScore
        }
    questionsCounter += 1
    document.getElementById('questionCounter').innerText = questionsCounter    
    
    deleteButtons()
    possibleAnswers = [currentQuestion.correct_answer,]
    getAQuestion()
    shuffleAnswers(possibleAnswers)
    createAnswerButtons()  
    }