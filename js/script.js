(function () {
  var questions = ["Who is the voice actor for Homer?", "What is the name of the only bully with a child?", "Who is the news reporter on Channel 6 news?"];
  var answers = ["dan castellaneta", "kearney", "kent brockman"];
  var Game = function (questions, answers) {
    this.questions = questions;
    this.answers = answers;
    this.numberCorrect = 0;
    this.numberQuestions = questions.length;
    this.guess = '';
    this.questionNumber = 0;
  };
  Game.prototype.randomQuestion = function () {
    return Math.floor(Math.random() * this.questions.length);
  };
  Game.prototype.askQuestion = function () {
    document.getElementById('question').innerHTML = this.questions[this.questionNumber];
  };
  Game.prototype.checkAnswer = function () {
    if (this.guess.toLowerCase() === this.answers[this.questionNumber]) {
      this.numberCorrect++;
      alert("Correct! " + (this.numberQuestions - this.numberCorrect) + " left");
      this.removeCorrect(this.questionNumber);
    } else {
      alert("Sorry, that's not right. " + (this.numberQuestions - this.numberCorrect) + " left");
    }
  };
  Game.prototype.removeCorrect = function () {
    this.questions.splice(this.questionNumber, 1);
    this.answers.splice(this.questionNumber, 1);
  };
  var simpsonsTrivia = new Game(questions, answers);
  var onClick = function () {
    simpsonsTrivia.guess = document.getElementById('answer').value;
    simpsonsTrivia.checkAnswer();
  };
  simpsonsTrivia.questionNumber = simpsonsTrivia.randomQuestion();
  simpsonsTrivia.askQuestion();
  //console.log(simpsonsTrivia);
  // while (simpsonsTrivia.numberCorrect < 3) {
  //   alert("Let's play The Simpsons trivia! Answer all Question to Win!!!");
  //     simpsonsTrivia.questionNumber = simpsonsTrivia.randomQuestion();
  //     simpsonsTrivia.askQuestion();
  // }
  //alert("Congratulations! You Win!");
  if (simpsonsTrivia.numberCorrect === 3) {
    document.getElementById('homer').innerHTML = "<img src = 'http://static.fjcdn.com/comments/Home+has+hidden+depths+unfortunately+they+are+filled+with+donuts+_7cb6c1d35d38ec82f99058af4b42f3b5.jpg'></img>";
  }
})();
