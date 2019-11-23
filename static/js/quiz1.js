(function() {
  const myQuestions = [
    {
      question: "How many refugees do you think the United States will be admitting by 2020?",
      answers: {
        a: "10,000",
        b: "18,000",
        c: "25,000",
        d: "20,000"
      },
      correctAnswer: "b"
    },
    {
      question: "How many refugees do you think were admitted since September of 2018?",
      answers: {
        a: "30,000",
        b: "25,000",
        c: "10,000",
        d: "15,000"
      },
      correctAnswer: "a"
    },
    {
      question: "What country do you think led in having refugees coming into the United States in 2019?",
      answers: {
        a: "Mexico",
        b: "Turkey",
        c: "Dominican Republic",
        d: "Afghanistan"
      },
      correctAnswer: "d"
    },
    {
      question: "What religion is United States admitting the most?",
      answers: {
        a: "Chrsitian",
        b: "Jewish",
        c: "Muslim",
        d: "Buddhist"
      },
      correctAnswer: "a"
    },
    {
      question: "What State takes in the most refugees?",
      answers: {
        a: "California",
        b: "New York",
        c: "Arizona",
        d: "Texas"
      },
      correctAnswer: "d"
    },
    {
      question: "In regards to Syrian refugees, how many U.S. citizens think that the refugees are our responsibility to accept them into the U.S?",
      answers: {
        a: "40%",
        b: "74%",
        c: "48%",
        d: "25%"
      },
      correctAnswer: "c"
    },
    {
      question: "Since 2007, how many illegal mexican immigrants have left/been deported by the United States?",
      answers: {
        a: "2 million",
        b: "10 million",
        c: "1 million",
        d: "5 million"
      },
      correctAnswer: "a"
    },
    {
      question: "About how many apprehensions (arrests) at the U.S./Mexico border have been non-mexican (in percentage)?",
      answers: {
        a: "62%",
        b: "40%",
        c: "33%",
        d: "15%"
      },
      correctAnswer: "a"
    },
    {
      question: "How many times (roughly) were Mexicans deported from the U.S. in 2017?",
      answers: {
        a: "350,000",
        b: "190,000",
        c: "85,000",
        d: "20,000"
      },
      correctAnswer: "b"
    },
    {
      question: "As of April 2019, how many unauthorized immigrants from Mexico are enrolled in DACA?",
      answers: {
        a: "224,000",
        b: "150,000",
        c: "119,000",
        d: "536,000"
      },
      correctAnswer: "d"
    },
    {
      question: "What percent of immigrants living in the United States are legal citizens?",
      answers: {
        a: "25%",
        b: "12%",
        c: "77%",
        d: "50%"
      },
      correctAnswer: "c"
    },
    {
      question: "What country led in birth of immigrants in the United States?",
      answers: {
        a: "Mexico",
        b: "China",
        c: "India",
        d: "Canada"
      },
      correctAnswer: "d"
    },
    {
      question: "What race and/or ethnicity is leading when coming to the United States?",
      answers: {
        a: "Hispanic",
        b: "Asian",
        c: "African American",
        d: "White"
      },
      correctAnswer: "b"
    },
    {
      question: "What do you think the immigration/foreign-born population in the U.S. will reach by the year 2065?",
      answers: {
        a: "78 million",
        b: "32 million",
        c: "50 million",
        d: "125 million"
      },
      correctAnswer: "a"
    },
    {
      question: "How many unauthorized immigrants are working in the U.S.?",
      answers: {
        a: "7.6 million",
        b: "5 million",
        c: "15 million",
        d: "10.3 million"
      },
      correctAnswer: "a"
    }
  ];

function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
      output.push(
        `<div class="slide">
           <div class="question"> First of all, what is your political affiliation? </div>
           <div class="politicalView"><label>
             <input type="radio" name="politicalView" value="Left leaning">
              a : Left leaning
           </label><label>
             <input type="radio" name="politicalView" value="Right leaning">
              b : Right leaning
           </label>
          </div>
        </div>`
      );
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
// get political political affiliation
function getPoliticalView(){
  const selector = `input[name=politicalView]:checked`;
  const politicalView = (document.querySelector(selector) || {}).value;
  return politicalView;
}

//calculate the results
  function calculateResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
      }
    });
    return numCorrect;
  }

function showResults(score, worseRight, worseLeft){
    let quizContainer = document.querySelector(".quizContainer")
    let resultsHtml = `
    <div class=results>
      <h2>
      	Your Score is:
      	<br>
      	<span class=score>${score}%</span>
      </h2>
      <div class=comperativePoliticalAffiliation>
      <p>You did better than ${worseRight}% of right-leaning quiz takers</p>
      <p>You did better than ${worseLeft}% of left-leaning quiz-takers</p>
      </div>

      </div>
    `
    // insert into the empty div once essay is ready
    // <a href=EU-AU-Essay.html>Click here to find out more</a>
    quizContainer.innerHTML = resultsHtml
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    // if the user has already chosen a choice, the submit button will be visible
    let selected = document.querySelector(".active-slide input:checked");
    if (selected == null)
      nextButton.style.display = "none";
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    }
     else {
      let radios = document.querySelectorAll(".active-slide input");
      // submit button will appear when the user selects a choice
      for (var i=0; i<radios.length; i++)
          radios[i].onclick = function(){nextButton.style.display = "inline-block"};
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 1;

  showSlide(0);


  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  //return number or right answers to the backend to get results
  $(document).ready(function(){
      $("#submit").click(function(){
          let numCorrect = calculateResults().toString();
          let score = Math.floor((numCorrect / myQuestions.length) * 100)
          let politicalView = getPoliticalView();
          $.ajax({
            type: "GET",
            dataType: "json",
            url: "results",
            cache: false,
            data: {"numCorrect": numCorrect, "politicalView": politicalView, "quizId": "1"},
            success: function(response) {
              console.log(response);
              let worseLeft = response["worseLeft"];
              let worseRight = response["worseRight"];
                showResults(score, worseRight, worseLeft);
              }
          });
        });
      });

})();
