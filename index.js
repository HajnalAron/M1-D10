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

const startGame = function(){
    gameStartingButtons = document.getElementsByClassName('startButton')
    for (let i = gameStartingButtons.length -1; i >= 0; i--){
        gameStartingButtons[i].remove()
    }

    getAQuestion()

    shuffleAnswers(possibleAnswers)
    for (let i=0; i < possibleAnswers.length;i++){
        let newQuizButton = document.createElement('button')
        newQuizButton.classList.add('answerButton')
        newQuizButton.addEventListener('onclick', answer())
        newQuizButton.innerText = possibleAnswers[i]
        document.getElementById('buttonContainer').appendChild(newQuizButton)
    }
    
}

const answer = function(){
    alert('test')
}


