
var questions = [
  {
    "question": "What's Principal Skinner's REAL name?",
    "answers": ["Robert Underdunk Terwilliger", "Armin Tamzarian", "Lyle Lanley"],
    "correct": 1
  },
  {
    "question": "Who voices Homer's half brother, Herbert Powell?",
    "answers": ["Danny DeVito", "Phil Hartman", "Jon Lovitz"],
    "correct": 0
  },
  {
    "question": "What is Sideshow Bob's son's name?",
    "answers": ["Gianni", "Gino", "Giovanni"],
    "correct": 1
  },
  {
    "question": "What is Homer Simpson's middle name?",
    "answers": ["Jerry", "JoJo", "Jay"],
    "correct": 2
  },
  {
    "question": "Why does Homer end up in a mental institution, where he meets \"Michael Jackson\"?",
    "answers": ["He wears a pink shirt to work", "He does a poor job as Mr. Burns' assistant", "He choked the boy ONE too many times"],
    "correct": 0
  },
  {
    "question": "What's the name of the energy bar that Homer endorses?",
    "answers": ["Lightspeed Energy Bar", "Buzz Energy Bar", "PowerSauce"],
    "correct": 2
  },
  {
    "question": "What common garden item is Sideshow Bob's arch nemesis?",
    "answers": ["Hoses", "Rakes", "Brooms"],
    "correct": 1
  },
  {
    "question": "Who are the guest stars in the \"Lisa the Vegetarian\" episode?",
    "answers": ["Paul and Linda McCartney", "Alec Baldwin and Kim Basinger", "Gillian Anderson and David Duchovny"],
    "correct": 0
  },
  {
    "question": "Who has had a creepy unrequited crush on Marge since high school?",
    "answers": ["Moe Syzslak", "Artie Ziff", "Seymour Skinner"],
    "correct": 1
  },
  {
    "question": "What is Chief Wiggum's first name?",
    "answers": ["Clancy", "Carlton", "Clarent"],
    "correct": 0
  },
  {
    "question": "What is the name of Radioactive Man's sidekick?",
    "answers": ["Toxic Avenger", "Radioactive Boy", "Fallout Boy"],
    "correct": 2
  },
  {
    "question": "What is the secret ingredient in a Flaming Moe?",
    "answers": ["Vodka", "Blueberry Syrup", "Cough Medicine"],
    "correct": 2
  },
  {
    "question": "What is Marge's maiden name?",
    "answers": ["Onassis", "Bouvier", "Kennedy"],
    "correct": 1
  },
  {
    "question": "What is the name of the company owned by Homer's former boss Hank Scorpio",
    "answers": ["Globex", "Scorpio Industries", "Compu-Global-Hyper-Net"],
    "correct": 0
  },
  {
    "question": "What game company released a Simpson's game around the same time as The Simpsons Movie?",
    "answers": ["Bethesda Softworks", "Blizzard-Activision", "Electronic Arts"],
    "correct": 2
  },
  {
    "question": "What name does Homer have his legally changed to when a TV show steals his?",
    "answers": ["Max Power", "Guy Incognito", "Ned Flanders"],
    "correct": 0
  },
  {
    "question": "What drink is Homer disgusted by in the episode \"Homer vs New York\"?",
    "answers": ["Clam Juice", "Goat's milk", "Mountain Dew"],
    "correct": 2
  },
  {
    "question": "What was the original color of Bart's shirt?",
    "answers": ["Blue", "Orange", "Red"],
    "correct": 0
  },
  {
    "question": "They have ________ on computers now? - Homer Simpson",
    "answers": ["Games", "The Internet", "TV"],
    "correct": 1
  },
  {
    "question": "Which friend does homer have to beat out so he can go on to be the first \"Average Joe\" in space?",
    "answers": ["Moe", "Barney", "Lenny"],
    "correct": 1
  }
];
var Game = function (questions) {
    this.questions = questions;
    this.numberCorrect = 0;
    this.numberWrong = 0;
    this.numberQuestions = questions.length;
    this.guess = '';
    this.answer = 0;
    this.questionNumber = 0;
  };
Game.prototype.randomQuestion = function () {
  return Math.floor(Math.random() * this.questions.length);
};
Game.prototype.askQuestion = function () {
  this.questionNumber = this.randomQuestion();
  var currentQuestionObject = this.questions[this.questionNumber];
  var currentQuestion = currentQuestionObject["question"];
  var currentAnswers = currentQuestionObject["answers"];
  this.answer = currentQuestionObject["correct"];
  document.getElementById('question').textContent = currentQuestion;
  document.getElementById('answer0').textContent = currentAnswers[0];
  document.getElementById('answer1').textContent = currentAnswers[1];
  document.getElementById('answer2').textContent = currentAnswers[2];
};
Game.prototype.checkAnswer = function (answer) {
  if (answer === this.answer) {
    document.getElementById('score').textContent = ++this.numberCorrect;
    if (this.numberCorrect === 20) {
      this.victory();
    } else {
      this.removeCorrect();
    }
  } else {
    document.getElementById('wrong').textContent = ++this.numberWrong;
    if (this.numberWrong > 4) {
      this.failure();
    } else {
      this.askQuestion();
    }
  }
};
Game.prototype.removeCorrect = function () {
  this.questions.splice(this.questionNumber, 1);
  this.askQuestion();
};
Game.prototype.victory = function () {
  document.getElementById('main').textContent = "YOU WIN!!!!";
};
Game.prototype.failure = function () {
  document.getElementById('main').innerHTML = '<h2>You fail trivia? That unpossible!</h2><p>Don\'t worry, I\'m sure you won\'t end up like Homer!</p> <img src="Xq9Mtxa.jpg"/>';
};
var simpsonsTrivia = new Game(questions);
simpsonsTrivia.askQuestion();
var button0 = document.getElementById('answer0');
var button1 = document.getElementById('answer1');
var button2 = document.getElementById('answer2');
button0.addEventListener("click", function (event) {
  event.preventDefault();
  simpsonsTrivia.checkAnswer(0);
});
button1.addEventListener("click", function (event) {
  event.preventDefault();
  simpsonsTrivia.checkAnswer(1);
});
button2.addEventListener("click", function (event) {
  event.preventDefault();
  simpsonsTrivia.checkAnswer(2);
});
