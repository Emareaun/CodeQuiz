var startButton = document.getElementById("start")
var questionSection = document.getElementById("questions")
var startPage = document.getElementById("start-screen")

function startQuiz() {
    console.log("startQuiz function started");

    var timer = 0;
    var questionIndex = 0;

    console.log("Removing hide class from question section");
    questionSection.classList.remove("hide");

    console.log("Adding hide class to start page");
    startPage.classList.add("hide");
    showQuestion(questions[questionIndex]);
    // while (questionIndex < questions.length) {

    //   console.log("Showing question");
    //   showQuestion(questions[questionIndex]);

    //   console.log("Getting user answer");
    //   var answer = getUserAnswer();

    //   if (answer === questions[questionIndex].answer) {
    //     console.log("User answered correctly, moving to next question");
    //     questionIndex++;
    //   } else {
    //     console.log("User answered incorrectly, deducting 10 seconds from timer");
    //     timer -= 10;
    //   }
    // }
  
    console.log("Showing final score");
    // showScore(timer);

    // console.log("Saving score with initials");
    // saveScore(timer, initials);
  }
  

function showQuestion(question) {
  console.log("question", question);
  console.log(question.title);
  document.getElementById("question-title").innerHTML = question.title;

  for (var i = 0; i < question.choices.length; i++) {
   var option = document.createElement("option");
    option.value = question.choices[i];
    option.innerHTML=question.choices[i];
    document.getElementById("choices").appendChild(option);
  }
}
  
  // function getUserAnswer() {
  //   var answer = document.getElementById("choices").value;
  
  //   return answer;
  // }
  
  function showScore(timer) {
    document.getElementById("score").innerHTML = timer;
  }
  
  function saveScore(timer, initials) {
    var score = {
      timer: timer,
      initials: initials
    };
  
    db.saveScore(score);

  }

  startButton.addEventListener("click", startQuiz)
