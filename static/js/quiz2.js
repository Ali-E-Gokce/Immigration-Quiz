(function() {
  const myQuestions = [
    {
      question: "What do the acronyms “EU” and “AU” stand for?",
      answers: {
        a: "'European Unification' and 'African Unification'",
        b: "'European Union' and 'African Union'",
        c: "'European Unification' and 'African Unity'",
        d: "None of the above"
      },
      correctAnswer: "b",
      explanation: "This is the explanation"

    },
    {
      question: "Who were the founding members of the EU?",
      answers: {
        a: "The United Kingdom, France, Belgium, Germany Italy, and Luxembourg",
        b: "Belgium, France, Germany, Italy, Luxembourg, and the Netherlands",
        c: "The United Kingdom, Italy, France, Germany, the Netherlands, and Belgium",
        d: "The United Kingdom, France, Italy, Germany, the Netherlands, and Switzerland"
      },
      correctAnswer: "b",
      explanation: "This is the explanation"
    },
    {
      question: "The EU Integrates what aspects of Europe?",
      answers: {
        a: "Economics and politics",
        b: "Economics and Borders",
        c: "Politics and Borders",
        d: "Economics and the welfare state"
      },
      correctAnswer: "b",
      explanation: "This is the explanation"
    },
    {
      question: "The European Economy is ranked at which place in the world economy?",
      answers: {
        a: "1st Largest",
        b: "2nd Largest",
        c: "Tied for 2nd Largest",
        d: "3rd Largest"
      },
      correctAnswer: "b",
      explanation: "This is the explanation"
    },
    {
      question: "What is the EU’s Freedom of Movement Policy?",
      answers: {
        a: "One can live wherever they want but must work in their home country",
        b: "One can work wherever they want but must live in their country of origin",
        c: "One may live and work anywhere but must live under the political institutions of their home country",
        d: "Can live and work anywhere regardless of their place of birth"
      },
      correctAnswer: "d"
    },
    {
      question: "How many countries are currently apart of the EU?",
      answers: {
        a: "34",
        b: "29",
        c: "28",
        d: "None of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Due to Freedom of Movement, how is Europe’s unemployment affected?",
      answers: {
        a: "Welfare increases in countries with high immigration due to the increase in workers who are unable to find a job",
        b: "Unemployment increases in countries with high immigration, but the Welfare state remains stationary",
        c: "Welfare decreases in states with high immigration to encourage workers to return to their country of origin",
        d: "Unemployment remains stationary because Europe shares a common economy"
      },
      correctAnswer: "a"
    },
    {
      question: "Do the EU and the AU work together?",
      answers: {
        a: "Sometimes, but only on political matters",
        b: "Sometimes, but with a third-party present for consultation",
        c: "No, there is too much history",
        d: "Yes, but mostly on economic matters"
      },
      correctAnswer: "b"
    },
    {
      question: "Why was the Organization of African Unity (OAU) created?",
      answers: {
        a: "To encourage the development of Africa economically, technologically, and infrastructurally",
        b: "To promote the liberation/sovereignty of Africa and eradicate colonization",
        c: "To create one unified government system titled 'the United States of Africa'",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What agreement resulted in the push for economic integration in Africa",
      answers: {
        a: "Regional Economic Communities Agreement",
        b: "The Minimum Integration Programme",
        c: "The Continental Free Trade Area Agreement",
        d: "The Abuja Treaty"
      },
      correctAnswer: "d"
    },
    {
      question: "How many stages did the Abuja Treaty put into place for Economic Integration?",
      answers: {
        a: "4",
        b: "5",
        c: "6",
        d: "7"
      },
      correctAnswer: "c"
    },
    {
      question: "Why did the OAU change its name to the AU?",
      answers: {
        a: "Changes in organization, implementation, and goals called for a distinction from the previous way structure",
        b: "The Secretary General proposed that the organization’s title should be updated with the change in era",
        c: "It was more similar to the European Union’s abbreviation, reflecting the EU’s general success which the OAU hoped to emulate",
        d: "The influx of a newer generation into the OAU wanted to demonstrate the new thinking of the organization"
      },
      correctAnswer: "a"
    },
    {
      question: "How many Regional Economic Communities (RECs) are there in the continent of Africa?",
      answers: {
        a: "5",
        b: "6",
        c: "8",
        d: "10"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the AU’s current policy on immigration?",
      answers: {
        a: "One can work in a country outside of their country of origin with a passport",
        b: "One can live wherever they want but must work in their country of origin",
        c: "One can work wherever they want but must live in their country of origin",
        d: "Can live and work anywhere regardless of their place of birth"
      },
      correctAnswer: "a"
    }
  ];

  const myAnswers =
    {0: {'rightChoice': 'b', 'answer': 'European Union and African Union.', 'explanation': 'Although the EU is more widely known, the AU took its roots from the Organization of African Unity formed on the 25th of May 1963 while the EU was only formed on the 1st of November, 1993.The AU changed its name in 2001, adding more counsels and communities due to the ratification of the current 54 African states.'}, 1: {'rightChoice': 'b', 'answer': 'Belgium, France, Germany, Italy, Luxembourg, and the Netherlands.', 'explanation': 'The EU was created to end the constant wars between countries which had ultimately resulted in World War II.The EU began with the coal and steel communities in Europe integrating so that the founding countries were economically dependent on each other—if one went down, the others went down with it.In 1957, the Treaty of Rome created the European common market.'}, 2: {'rightChoice': 'b', 'answer': 'Economics and Boarders.', 'explanation': 'Although the EU does have a meeting of representatives from most member countries to form general economic laws, their politics and welfare states are not integrated.Their economies were joined by the common currency—the Euro—on the 1st of January, 1999, but there was free-movement between borders even before that in 1992 after the Treaty of Maastricht.'}, 3: {'rightChoice': 'b', 'answer': '2nd largest.', 'explanation': 'According to the IMF, as of 2018, the United States’ Gross Domestic Product (GDP) was growing by 2.9% and the EU’s was growing by 2.2%.This is commonly listed as the major benefit of the EU—that it prevented the smaller countries’ economies from being swallowed by the US economy after World War II.'}, 4: {'rightChoice': 'd', 'answer': 'Can live and work anywhere regardless of their place of birth.', 'explanation': 'Most citizens of member countries are given not only a passport from their own country but also an EU passport.This means that while still being a citizen of one country, one may immigrate to another country for work, retirement, or just a change of scenery.'}, 5: {'rightChoice': 'd', 'answer': 'None of the above.', 'explanation': 'The answer is, it’s complicated.The EU is divided into different sectors—the European Economic Area, the EU, and the Eurozone—none of which include all the same countries.In addition to this, several EU countries still hold overseas territories that, in general, allow for EU citizenship, but do not allow members of countries in Europe to live abroad in those states, nor do those states participate in EU law making or the use of the Euro.'}, 6: {'rightChoice': 'a', 'answer': 'Welfare increases in countries with high immigration due to the increase in workers who are unable to find a job.', 'explanation': 'In a 2011 study of immigration impacts on political institutions in EU countries, Christine Lipsmeyer and Ling Zhu discovered that in countries with an already high welfare state, immigration causes unemployment to increase in those countries, resulting in policy-makers increase of the welfare state.'}, 7: {'rightChoice': 'd', 'answer': 'Sometimes, but with a third-party present for consultation.', 'explanation': 'The EU and AU do work together in what is called the Joint Africa-EU Strategy adapted in 2007.The EU and AU representatives generally meet every 3 years, alternated between locations in Africa and Europe.Because of the history between the two continents, meetings also involve third-party members of non-state organizations such as civil society organizations, youth organizations, and academic institutions.The majority of conversations between the EU and the AU revolve around funding for political agendas and development.'}, 8: {'rightChoice': 'd', 'answer': 'All of the above.', 'explanation': 'After the formation of the OAU on the 25th of May, 1963, this organization’s main goals, according to Muhammad Gassama, a previous French/Arab/English translator within the OAU, were to create a common market, a unified government, and ultimately the United States of Africa after fighting to gain independence of the current 54 African states and end apartheid.'}, 9: {'rightChoice': 'd', 'answer': 'The Abuja Treaty.', 'explanation': 'The Abuja Treaty established the African Economic Community (AEC) to be achieved through dividing economic development plans among various regions that all struggle in similar areas.These are called Regional Economic Communities (RECs).'}, 10: {'rightChoice': 'c', 'answer': '6.', 'explanation': 'These principle stages were to establish and strengthen existing regional economic communities, Eliminate tariffs and non-tariff barriers throughout the continent, to create an inter-regional economic community, free-trade area and customs union, thus resulting in a continental customs union, to create a common market, and finally, to create a pan-African monetary and economic union.'}, 11: {'rightChoice': 'a', 'answer': 'Changes in organization, implementation, and goals called for a distinction from the previous way structure.', 'explanation': 'After the Abuja Treaty, the economic goals of the OAU were fairly clear, yet the government structure of the OAU had gone through some major changes with the liberation of many African states, calling for a structural change in the organization.Col. Muammar Gaddafi suggested that the structural reorganization model the EU’s success rather than waste time deciphering the intricacies a more complex organization to accommodate the increase of states.'}, 12: {'rightChoice': 'c', 'answer': '8.', 'explanation': 'They are, the East African Community, the Economic Community of West African States, The Southern African Development Community, The economic Community of Central Africa, The Community of Sahel Saharan States, The Intergovernmental Authority on Development, The Common Market for Eastern and Southern Africa, and finally, the Arab Maghreb Union.States may be apart of more than one community after the African Continental Free Trade Area agreement (AfCFTA), which was established on the 21st of March, 2018.While these communities allow for free-trade similar to how NAFTA function in the U.S., only one economic community has begun integrating to a single currency: The East African Community.'}, 13: {'rightChoice': 'a', 'answer': 'One can work in a country outside of their country of origin with a passport.', 'explanation': 'In most RECs of the AU, there are policies in place that allow workers from one member country to work in another if they apply for the proper passport.However, those agreements are only in place between members of the specific REC the country is joined with, not the whole of Africa.The AU hopes to further integrate to avoid the Brain Drain affect—where skilled labor moves out of the country or continent to a different economy where they can make a better living.'}}

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
        let currentAnswer = myAnswers[questionNumber];
        console.log(currentAnswer["answer"]);
        output.push(
          `<div class="slide">
          <span class="correctOrNot"></span>
          <div class="answer">
          The right answer is: ${currentAnswer["rightChoice"]})
          ${currentAnswer["answer"]} </br> </br>
          ${currentAnswer["explanation"]}
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
      const answerContainers = quizContainer.querySelectorAll(".choices");
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
        <a href=EU-AU-Essay.html>Click here to find out more</a>
        </div>
      `
      quizContainer.innerHTML = resultsHtml
    }

    //slides start with -1 because first slide asks about plitical affiliation,
    //for each slide after even numbered slides are questions, and
    // even numbered slides are answeres
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
        if (userAnswer == myAnswers[questionNumber]["rightChoice"]){
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
//      if (currentSlide === 0) {
//        previousButton.style.display = "none";
//        }

//    else {
//        previousButton.style.display = "inline-block";
//        }

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
        output.push(
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    // display quiz right away
    buildQuiz();
//    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(0);
//    previousButton.addEventListener("click", showPreviousSlide);
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
              data: {"numCorrect": numCorrect, "politicalView": politicalView, "quizId": "2"},
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
