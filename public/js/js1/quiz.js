window.onload = function () {
    show(0);
}
// questions
let questions = [
    {
        id: 1,
        question: "What is the Olympic sport in which athletes cross the finish line backwards?",
        answer: "b.	Rowing",
        options: [
            "a.	Sailing",
            "b.	Rowing",
            "c.	Pole jump",
            "d.	Racewalking"
        ]
    },
    {
        id: 2,
        question: "What was the length of Neeraj Chopra’s Javelin throw?",
        answer: "a.	87.58",
        options: [
            "a.	87.58",
            "b.	85.78",
            "c.	88.75",
            "d.	87.85"
        ]
    },
    {
        id: 3,
        question: "Name the only Indian women who has won two individual medals in Olympics ?",
        answer: "c.	P V Sindhu",
        options: [
            "a.	P T Usha",
            "b.	Saina Nehwal",
            "c.	P V Sindhu",
            "d.	Chanu Saikhom Mirabai"
        ]
    },
    {
        id: 4,
        question: "The goal keeper of our women’s hockey team, in Tokyo Olympics 2020",
        answer: "c.	Savita Punia",
        options: [
            "a.	Tejaswini Rajshekar",
            "b.	Rajani Etimarpu",
            "c.	Savita Punia",
            "d.	Rani Rampal"
        ]
    },
    {
        id: 5,
        question: "Olympics 2028 will be held in which place and country ?",
        answer: "a.	Los Angeles, USA",
        options: [
            "a.	Los Angeles, USA",
            "b.	Paris, France",
            "c.	Beijing, China",
            "d.	Moscow, Russia"
        ]
    },
    {
        id: 6,
        question: "What is the longest distance among the Olympic events in athletics?",
        answer: "b.	50Kms",
        options: [
            "a.	100kms",
            "b.	50Kms",
            "c.	125Kms",
            "d.	75Kms"
        ]
    },
    {
        id: 7,
        question: "Who was the Equestrian athlete from India who entered finals but finished in 23rd place in Tokyo Olympics 2020?",
        answer: "c.	Fouaad Mirza",
        options: [
            "a.	Jitendarjit Singh Ahluwalia",
            "b.	Hussian Khan",
            "c.	Fouaad Mirza",
            "d.	Darya Singh"
        ]
    },
    {
        id: 8,
        question: "How many black and white squares are there on a chess board in total?",
        answer: "c.	64",
        options: [
            "a.	91",
            "b.	49",
            "c.	64",
            "d.	100"
        ]
    },
    {
        id: 9,
        question: "Which planet is the hottest planet in our solar system?",
        answer: "d.	Venus",
        options: [
            "a.	Mars",
            "b.	Jupiter",
            "c.	Saturn",
            "d.	Venus"
        ]
    },
    {
        id: 10,
        question: "In which country you do not find snakes/reptiles?",
        answer: "b.	New Zealand",
        options: [
            "a.	Australia",
            "b.	New Zealand",
            "c.	 USA ",
            "d.	Canada"
        ]
    },
    {
        id: 11,
        question: "Who was the first women to host the Oscars on her own?",
        answer: "a.	Whoopi Goldberg",
        options: [
            "a.	Whoopi Goldberg",
            "b.	Agnes Moorhead",
            "c.	Ellen DeGeneres",
            "d.	Anne Hathway"
        ]
    },
    {
        id: 12,
        question: "Who was the first Indian scientist to win a Nobel prize?",
        answer: "b.	CV Raman",
        options: [
            "a.	Rabindranath Tagore",
            "b.	CV Raman",
            "c.	Amartya Sen",
            "d.	Hargobind Khorana"
        ]
    },
    {
        id: 13,
        question: "Deepest point of the earth is called ",
        answer: "c.	Mariana Trench",
        options: [
            "a.	Tongo Trench ",
            "b.	Philliphine Trench",
            "c.	Mariana Trench",
            "d.	Japan Trench"
        ]
    },
    {
        id: 14,
        question: "India is NOT the largest producer of",
        answer: "d.	Rice",
        options: [
            "a.	Milk",
            "b.	Pulses",
            "c.	Jute",
            "d.	Rice"
        ]
    },
    {
        id: 15,
        question: "India's First Indigenous COVID-19 Vaccine is",
        answer: "a.	Covaxin",
        options: [
            "a.	Covaxin",
            "b.	Covi Shield",
            "c.	Coronil",
            "d.	Pfizer"
        ]
    },
    {
        id: 16,
        question: "What does the “19” in “COVID-19” refer to?",
        answer: "d.	The corona virus and the disease it causes were identified in 2019",
        options: [
            "a.	There are 19 variants of the coronavirus",
            "b.	There are 19 symptoms of Corona Virus",
            "c.	This is the 19th corona virus pandemic",
            "d.	The corona virus and the disease it causes were identified in 2019"
        ]
    },
    {
        id: 17,
        question: "The corona in coronavirus means",
        answer: "c.	Crown",
        options: [
            "a.	Sun",
            "b.	Beer",
            "c.	Crown",
            "d.	Strong"
        ]
    },
    {
        id: 18,
        question: "The second phase of vaccination started in India that allows all Indians above the age of 60 and Indians between the age of 45 and 59 with comorbidities to be vaccinated, was started from ",
        answer: "b.	March 2021",
        options: [
            "a.	December 2020",
            "b.	March 2021",
            "c.	January 2021",
            "d.	February 2021"
        ]
    },  
    {
        id: 19,
        question: "Before August 1st 2021, the retirement age for FTE in Henkel India was",
        answer: "b.	58",
        options: [
            "a.	56",
            "b.	58",
            "c.	60",
            "d.	59 "
        ]
    },
    {
        id: 20,
        question: "Carsten Knobel succeed whom as Henkel’s CEO",
        answer: "c.	Hans Van Bylen",
        options: [
            "a.	Kasper Rorsted",
            "b.	Jan-Dirk Auris",
            "c.	Hans Van Bylen",
            "d.	Marco Swoboda"
        ]
    },
    {
        id: 21,
        question: "Which of the following foundations is Henkel associated with for Rethink packaging, Redesign packaging and circular economy?",
        answer: "d.	Ellen Macarthur Foundation ",
        options: [
            "a.	Bill and Melinda Gates foundation",
            "b.	Rockefeller Foundation ",
            "c.	Nobel foundation",
            "d.	Ellen Macarthur Foundation "
        ]
    },
    {
        id: 22,
        question: "For Henkel’s padded mailer EPIX technology which of the following awards was given Henkel in 2020",
        answer: "c.	Dow packaging innovation award",
        options: [
            "a.	Diamond packaging awards",
            "b.	United nations packaging innovation",
            "c.	Dow packaging innovation award",
            "d.	Plastic bank innovation award  "
        ]
    },
    {
        id: 23,
        question: "Which of the following is not the pillar of Henkel’s purposeful growth of winning the 20s?",
        answer: "b.	Own our results",
        options: [
            "a.	Future ready operating models ",
            "b.	Own our results",
            "c.	Winning portfolio",
            "d.	Collaborative culture and Empowered people "
        ]
    }
]



function submitform(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;


    // store player name
    sessionStorage.setItem("name", name)

    location.href = "/quiz"


}




let question_count = 0;
let point = 0;

function next() {
    let user_answer = document.querySelector("li.option.active").innerHTML;

      //check answer by the user
      if (user_answer == questions[question_count].answer) {
        point += 5;
        sessionStorage.setItem("points", point);
    }
    // else {
    //     document.querySelectorAll("li.option").add("grey");
    // }



    if(question_count == questions.length -1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "/end"
        return;
    }
   

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `
    <h3>Q${question_count +1}. ${questions[count].question} </h3>
    <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>
`;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option")

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }

            option[i].classList.add('active');
        }
    }
}


