function startQuiz() {
    // Initialize the timer and the question index.
    var timer = 0;
    var questionIndex = 0;
  
    // Start the quiz.
    while (questionIndex < questions.length) {
      // Display the question.
      showQuestion(questions[questionIndex]);
  
      // Get the user's answer.
      var answer = getUserAnswer();
  
      // Check the answer.
      if (answer === questions[questionIndex].answer) {
        // The answer is correct.
        questionIndex++;
      } else {
        // The answer is incorrect.
        timer -= 10;
      }
    }
  
    // The quiz is over.
    showScore(timer);
    saveScore(timer, initials);
  }
  
  function showQuestion(question) {
    // Display the question text.
    document.getElementById("question").innerHTML = question.text;
  
    // Display the answer options.
    for (var i = 0; i < question.options.length; i++) {
      var option = document.createElement("option");
      option.value = question.options[i];
      option.text = question.options[i];
      document.getElementById("options").appendChild(option);
    }
  }
  
  function getUserAnswer() {
    // Get the user's answer from the select element.
    var answer = document.getElementById("options").value;
  
    // Return the user's answer.
    return answer;
  }
  
  function showScore(timer) {
    // Display the score.
    document.getElementById("score").innerHTML = timer;
  }
  
  function saveScore(timer, initials) {
    // Save the score to the database.
    var score = {
      timer: timer,
      initials: initials
    };
  
    // Save the score.
    db.saveScore(score);
  }