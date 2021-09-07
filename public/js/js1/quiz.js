window.onload = function () {
    show(0);
}
// questions
let questions = [
    {
        id: 1,
        question: "What do you think will be a fair material saving % if we convert a simple rigid packaging to flexibles ?",
        answer: "a) 40-50",
        options: [
            "a) 40-50g",
            "b) 80-90",
            "c) 20-30",
            "d) 5-10"
        ]
    },
    {
        id: 2,
        question: "Which of the following can be considered as flexible packaging?",
        answer: "b) Printed Carry bags",
        options: [
            "a) Trays for chocklates",
            "b) Printed Carry bags",
            "c) PET bottles",
            "d) Milk pouches"
        ]
    },
    {
        id: 3,
        question: "What do you think is the main reason for using flexible packaging?",
        answer: "d.	Combination of many properties",
        options: [
            "a. Easy availability",
            "b.	Reusability",
            "c.	Food safety",
            "d. Combination of many properties"
        ]
    },
    {
        id: 4,
        question: "Which material represents the highest volume in flexible packaging materials?",
        answer: "c.	PE",
        options: [
            "a.	PP",
            "b.	PET",
            "c.	PE",
            "d.	Paper"

        ]
    },
    {
        id: 5,
        question: "What technologies are used to combine a foil with film (check all that apply)",
        answer: "a.	Adhesive lamination",
        options: [
            "a.	Adhesive lamination",
            "b.	Heat & Pressure lamination",
            "c.	Extrusion lamination",
            "d.	Primer"
        ]
    },
    {
        id: 6,
        question: "Which of the following are essential for safety in flexible packaging operations ( check all that apply)?",
        answer: "c.	Gloves",
        options: [
            "a.	Helmets",
            "b.	Safety Goggles",
            "c.	Gloves",
            "d.	Safety shoes"
        ]
    },
    {
        id: 7,
        question: "What kind of mechanical Risks do you see in lamination process",
        answer: "c.	Cuts",
        options: [
            "a.	Burns",
            "b.	Itching & Irritation",
            "c. Cuts",
            "d.	Inhalation of chemicals"
        ]
    },
    {
        id: 8,
        question: "Which one of the following is a must have while going into adhesive lamination shop floor",
        answer: "c.	Safety Shoes & goggles",
        options: [
            "a. Helmets & Safety shoes",
            "b.	Safety goggles & Gloves",
            "c.	Safety Shoes & goggles",
            "d.	Aprons and gloves"
        ]
    },
    {
        id: 9,
        question: "What are the important three parts of the body which have to be protected?",
        answer: "d.	All of the above",
        options: [
            "a.	Skin",
            "b.	Eyes",
            "c.	Respiratory Organs",
            "d.	All of the above"
        ]
    }
    // {
    //     id: 10,
    //     question: "In which country you do not find snakes/reptiles?",
    //     answer: "b.	New Zealand",
    //     options: [
    //         "a.	Australia",
    //         "b.	New Zealand",
    //         "c.	 USA ",
    //         "d.	Canada"
    //     ]
    // },
    // {
    //     id: 11,
    //     question: "Who was the first women to host the Oscars on her own?",
    //     answer: "a.	Whoopi Goldberg",
    //     options: [
    //         "a.	Whoopi Goldberg",
    //         "b.	Agnes Moorhead",
    //         "c.	Ellen DeGeneres",
    //         "d.	Anne Hathway"
    //     ]
    // },
    // {
    //     id: 12,
    //     question: "Who was the first Indian scientist to win a Nobel prize?",
    //     answer: "b.	CV Raman",
    //     options: [
    //         "a.	Rabindranath Tagore",
    //         "b.	CV Raman",
    //         "c.	Amartya Sen",
    //         "d.	Hargobind Khorana"
    //     ]
    // },
    // {
    //     id: 13,
    //     question: "Deepest point of the earth is called ",
    //     answer: "c.	Mariana Trench",
    //     options: [
    //         "a.	Tongo Trench ",
    //         "b.	Philliphine Trench",
    //         "c.	Mariana Trench",
    //         "d.	Japan Trench"
    //     ]
    // },
    // {
    //     id: 14,
    //     question: "India is NOT the largest producer of",
    //     answer: "d.	Rice",
    //     options: [
    //         "a.	Milk",
    //         "b.	Pulses",
    //         "c.	Jute",
    //         "d.	Rice"
    //     ]
    // },
    // {
    //     id: 15,
    //     question: "India's First Indigenous COVID-19 Vaccine is",
    //     answer: "a.	Covaxin",
    //     options: [
    //         "a.	Covaxin",
    //         "b.	Covi Shield",
    //         "c.	Coronil",
    //         "d.	Pfizer"
    //     ]
    // },
    // {
    //     id: 16,
    //     question: "What does the “19” in “COVID-19” refer to?",
    //     answer: "d.	The corona virus and the disease it causes were identified in 2019",
    //     options: [
    //         "a.	There are 19 variants of the coronavirus",
    //         "b.	There are 19 symptoms of Corona Virus",
    //         "c.	This is the 19th corona virus pandemic",
    //         "d.	The corona virus and the disease it causes were identified in 2019"
    //     ]
    // },
    // {
    //     id: 17,
    //     question: "The corona in coronavirus means",
    //     answer: "c.	Crown",
    //     options: [
    //         "a.	Sun",
    //         "b.	Beer",
    //         "c.	Crown",
    //         "d.	Strong"
    //     ]
    // },
    // {
    //     id: 18,
    //     question: "The second phase of vaccination started in India that allows all Indians above the age of 60 and Indians between the age of 45 and 59 with comorbidities to be vaccinated, was started from ",
    //     answer: "b.	March 2021",
    //     options: [
    //         "a.	December 2020",
    //         "b.	March 2021",
    //         "c.	January 2021",
    //         "d.	February 2021"
    //     ]
    // },  
    // {
    //     id: 19,
    //     question: "Before August 1st 2021, the retirement age for FTE in Henkel India was",
    //     answer: "b.	58",
    //     options: [
    //         "a.	56",
    //         "b.	58",
    //         "c.	60",
    //         "d.	59 "
    //     ]
    // },
    // {
    //     id: 20,
    //     question: "Carsten Knobel succeed whom as Henkel’s CEO",
    //     answer: "c.	Hans Van Bylen",
    //     options: [
    //         "a.	Kasper Rorsted",
    //         "b.	Jan-Dirk Auris",
    //         "c.	Hans Van Bylen",
    //         "d.	Marco Swoboda"
    //     ]
    // },
    // {
    //     id: 21,
    //     question: "Which of the following foundations is Henkel associated with for Rethink packaging, Redesign packaging and circular economy?",
    //     answer: "d.	Ellen Macarthur Foundation ",
    //     options: [
    //         "a.	Bill and Melinda Gates foundation",
    //         "b.	Rockefeller Foundation ",
    //         "c.	Nobel foundation",
    //         "d.	Ellen Macarthur Foundation "
    //     ]
    // },
    // {
    //     id: 22,
    //     question: "For Henkel’s padded mailer EPIX technology which of the following awards was given Henkel in 2020",
    //     answer: "c.	Dow packaging innovation award",
    //     options: [
    //         "a.	Diamond packaging awards",
    //         "b.	United nations packaging innovation",
    //         "c.	Dow packaging innovation award",
    //         "d.	Plastic bank innovation award  "
    //     ]
    // },
    // {
    //     id: 23,
    //     question: "Which of the following is not the pillar of Henkel’s purposeful growth of winning the 20s?",
    //     answer: "b.	Own our results",
    //     options: [
    //         "a.	Future ready operating models ",
    //         "b.	Own our results",
    //         "c.	Winning portfolio",
    //         "d.	Collaborative culture and Empowered people "
    //     ]
    // }
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


