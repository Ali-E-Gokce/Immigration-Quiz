(function() {
  const myQuestions =  [
    {
      question: "How many refugees do you think the United States will be admitting by 2020?",
      answers: {
        a: "10,000",
        b: "18,000",
        c: "25,000",
        d: "20,000"
      },
      correctAnswer: "b",
      explanation: "The United States is overflowing with people coming in, and the Trump presidency looks to reduce this number (18,000) even more soon."
    },
    {
      question: "How many refugees do you think were admitted since September of 2018?",
      answers: {
        a: "30,000",
        b: "25,000",
        c: "10,000",
        d: "15,000"
      },
      correctAnswer: "a",
      explanation: "Since 1975, the United States has vetted and resettled more than 3 million refugees. These former refugees and their children are now coworkers, classmates and family members. One view to this number is: The administration’s announced intention to abandon refugees comes despite the worst refugee crisis in history, with more than 25 million refugees worldwide—more than half of whom are children—who are in need of safety and 1.4 million in need of resettlement globally."
    },
    {
      question: "What country do you think led in having refugees coming into the United States in 2019?",
      answers: {
        a: "Mexico",
        b: "Turkey",
        c: "Dominican Republic",
        d: "Afghanistan"
      },
      correctAnswer: "c",
      explanation:"The Dominican Republic is currently having many crises arise, some of the most prominent are corruption and public security, since a wide amount of crime is currently happening, and people are being forced to leave."
    },
    {
      question: "What religion is United States admitting the most?",
      answers: {
        a: "Chrsitian",
        b: "Jewish",
        c: "Muslim",
        d: "Buddhist"
      },
      correctAnswer: "a",
      explanation: "This might not come as a surprise since Christianity, especially within Latin American countries, is a widely popular religion."
    },
    {
      question: "What State takes in the most refugees?",
      answers: {
        a: "California",
        b: "New York",
        c: "Arizona",
        d: "Texas"
      },
      correctAnswer: "d",
      explanation: "From the Refugee Services of Texas site, it says in Texas, which ranks No.1 in the resettlement of refugees, refugees have been vital to the state’s economic success and cultural diversity."
    },
    {
      question: "In regards to Syrian refugees, how many U.S. citizens think that the refugees are our responsibility to accept them into the U.S?",
      answers: {
        a: "40%",
        b: "74%",
        c: "48%",
        d: "25%"
      },
      correctAnswer: "c",
      explanation: "In a time where refugees coming into the country has seemed to be a more prominent controversy, the country is split in half when talking about responsibility of accepting refugees."
    },
    {
      question: "Since 2007, how many illegal mexican immigrants have left/been deported by the United States?",
      answers: {
        a: "2 million",
        b: "10 million",
        c: "1 million",
        d: "5 million"
      },
      correctAnswer: "a",
      explanation:"Again, the United States is attempting to ease the amount of people coming in, and therefore have had a great amount of deportations recently."
    },
    {
      question: "About how many apprehensions (arrests) at the U.S./Mexico border have been non-mexican (in percentage)?",
      answers: {
        a: "62%",
        b: "40%",
        c: "33%",
        d: "15%"
      },
      correctAnswer: "a",
      explanation:"Keep in mind, people from many other countries are seeking to come to the U.S., and they may have more of a need to be in the U.S. than others."
    },
    {
      question: "How many times (roughly) were Mexicans deported from the U.S. in 2017?",
      answers: {
        a: "350,000",
        b: "190,000",
        c: "85,000",
        d: "20,000"
      },
      correctAnswer: "b",
      explanation:"This number will likely continue to grow under the Trump administration that sees the border crisis as a national emergency, and deporting people is a priority for this administration."
    },
    {
      question: "As of April 2019, how many unauthorized immigrants from Mexico are enrolled in DACA?",
      answers: {
        a: "224,000",
        b: "150,000",
        c: "119,000",
        d: "536,000"
      },
      correctAnswer: "d",
      explanation:"Deferred Action for Childhood Arrivals (DACA) is an American immigration policy that allows some individuals with unlawful presence in the United States after being brought to the country as children to receive a renewable two-year period of deferred action from deportation and become eligible for a work permit in the U.S."
    },
    {
      question: "What percent of immigrants living in the United States are legal citizens?",
      answers: {
        a: "25%",
        b: "12%",
        c: "77%",
        d: "50%"
      },
      correctAnswer: "c",
      explanation:"Many people are also legal, and/or were born in the U.S. with an unauthorized or illegal immigrant pregnant mother giving birth in the U.S."
    },
    {
      question: "What country led in birth of immigrants in the United States?",
      answers: {
        a: "Mexico",
        b: "China",
        c: "India",
        d: "Canada"
      },
      correctAnswer: "a",
      explanation:"Again, the plan for many is to come unauthorized into the United States and have a baby on U.S. soil, so that they may have more of a chance of getting citizenship themselves via DACA."
    },
    {
      question: "What race and/or ethnicity is leading when coming to the United States?",
      answers: {
        a: "Hispanic",
        b: "Asian",
        c: "African American",
        d: "White"
      },
      correctAnswer: "b",
      explanation:"From the migration policy site, migration from Asia to the United States rose dramatically with passage of the 1965 Immigration and Nationality Act, which removed national-origin quotas established in 1921 barring immigration from Asian and Arab countries and sharply limiting arrivals from Africa and eastern and southern Europe. The number of Asian immigrants grew from 491,000 in 1960 to about 12.8 million in 2014, representing a 2,597 percent increase."
    },
    {
      question: "What do you think the immigration/foreign-born population in the U.S. will reach by the year 2065?",
      answers: {
        a: "78 million",
        b: "32 million",
        c: "50 million",
        d: "125 million"
      },
      correctAnswer: "a",
      explanation: "With more people coming in and having children born in the United States, this number will undoubtedly, and steadily grow to 78 million as expected."
    },
    {
      question: "How many unauthorized immigrants are working in the U.S.?",
      answers: {
        a: "7.6 million",
        b: "5 million",
        c: "15 million",
        d: "10.3 million"
      },
      correctAnswer: "a",
      explanation: "A widespread number of unauthorized immigrants are spread throughout the U.S. and 7.6 million of them have jobs. Depending on your political views, you may see this as an opportunity for job growth or a controversy for job loss."
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
      const choices = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        choices.push(
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
           <div class="choices"> ${choices.join("")} </div>
         </div>`
      );
      // console.log(currentAnswer)

      output.push(
        `<div class="slide">
        <span class="correctOrNot"></span>
        <div class="answer">
        The right answer is: ${currentQuestion["correctAnswer"]}) ${currentQuestion["answers"][currentQuestion["correctAnswer"]]} </br> </br>
        ${currentQuestion["explanation"]}
        </div>
        </div>
        `
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
    const answerContainers = document.querySelectorAll(".choices");
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
  let answerContainer = document.querySelector(".active-slide .choices")
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide % 2 == 0 && currentSlide > 0){
    nextButton.style.display = "inline-block";
    let answerContainer = slides[currentSlide-1].querySelector(".choices")
    let correctOrNot = slides[currentSlide].querySelector(".correctOrNot")
    let questionNumber = Math.floor(currentSlide/2) - 1
    let selector = `input[name=question${questionNumber}]:checked`;
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;
    if (userAnswer == myQuestions[questionNumber]["correctAnswer"]){
      correctOrNot.textContent = "Correct";
    correctOrNot.style.color = "green";
      }
    else {
      correctOrNot.textContent = "Wrong";
      correctOrNot.style.color = "red";
    }
    }
  else{
          // if the user has already chosen something, the submit button will be visible
          //this happens if the user goes back to a previous question
    let selected = document.querySelector(".active-slide input:checked");
    if (selected == null){
        nextButton.style.display = "none";
              // submit button will appear when the user selects a choice
      let radios = document.querySelectorAll(".active-slide input");
      for (var i=0; i<radios.length; i++)
          radios[i].onclick = function(){nextButton.style.display = "inline-block"};
      }
  }
  // if (currentSlide === 0) {
  //   previousButton.style.display = "none";
  //   }

  // else {
  //   previousButton.style.display = "inline-block";
  //   }

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
    }
  else {
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


  // previousButton.addEventListener("click", showPreviousSlide);
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
