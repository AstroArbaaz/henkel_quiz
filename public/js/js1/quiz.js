window.onload = function () {
    show(0);
}
// questions
let questions = [
    {
        id: 1,
        question: "Which one of the following adhesive property is least affected by temperatures?",
        answer: "c. Specific gravity",
        options: [
            "a. Pot life",
            "b. Mix Viscosity",
            "c. Specific gravity",
            "d. Stringing Property"
        ]
    },
    {
        id: 2,
        question: "Which of the following is not found in MSDS & TDS of adhesives?",
        answer: "d. Adhesive formulations",
        options: [
            "a. Mixing Ratio",
            "b. Safe handling & storage",  
            "c. Directions of use",
            "d. Adhesive formulations"
        ]
    },
    // {
    //     id: 3,
    //     question: "Which one of the following is a must have while going into adhesive lamination shop floor?",
    //     answer: "b. Safety Shoes & goggles",
    //     options: [
    //         "a. Helmets & Safety shoes",
    //         "b. Safety Shoes & goggles",  
    //         "c. Aprons and gloves",
    //         "d. None of the above"
    //     ]
    // },
    {
        id: 4,
        question: "Amongst the following adhesive systems, which one has the least pot life",
        answer: "a.	Two component Solvent free",
        options: [
            "a.	Two component Solvent free",
            "b.	Two component Solvent Base",
            "c.	Mono component Solvent free",
            "d.	Water Based Adhesives"

        ]
    },
    {
        id: 5,
        question: "Which of the following you do not have to study prior to any adhesive component handling?",
        answer: "c.	Company profile",
        options: [
            "a.	Material Safety Data sheet ( MSDS)",
            "b.	Technical Data sheet (TDS)",
            "c.	Company profile",
            "d.	Certificate of Quality (COQ)"
        ]
    },
    {
        id: 6,
        question: "Which one of the following parameter is mainly responsible for misting in SF adhesives?",
        answer: "c.	Temperature & Adhesive viscosity",
        options: [
            "a.	Pressure of rollers in contact",
            "b.	Roller Gap",
            "c.	Temperature & Adhesive viscosity",
            "d.	Specific Gravity"
        ]
    },
    {
        id: 7,
        question: "What is not a mandatory requirement on mixing dosing unit systems?",
        answer: "c. Auto feeding of adhesive in the system",
        options: [
            "a.	It should be free & protected from moisture",
            "b.	No mixing of components prior to static mixer",
            "c. Auto feeding of adhesive in the system",
            "d.	It should be clear from cured adhesive particles"
        ]
    },
    {
        id: 8,
        question: "What is not the major function of dosing head in SF system? ",
        answer: "b.	To increase shelf life of machine",
        options: [
            "a. Keep the adhesive separate before static mixer",
            "b.	To increase shelf life of machine",
            "c.	Pump the components in required ratio",
            "d.	Mixing of adhesive and hardener"
        ]
    },
    {
        id: 9,
        question: "What is the correct order of mixing solvent based adhesive systems ?",
        answer: "c.	Solvent, Adhesive & Hardener",
        options: [
            "a.	Adhesive, Hardener, Solvent",
            "b.	Hardener, adhesive, Solvent",
            "c.	Solvent, Adhesive & Hardener",
            "d.	Hardener, Solvent, Adhesive"
        ]
    },
    {
        id: 10,
        question: "Which of the following is the most common method of dosing the adhesive into the adhesive dam in SF systems?",
        answer: "a.	Intermittent Pumping of adhesive with oscillation",
        options: [
            "a.	Intermittent Pumping of adhesive with oscillation",
            "b.	Constant pumping of adhesive without movement of head",
            "c.	Constant Pumping with oscillation",
            "d.	Intermittent Pumping without Oscillation"
        ]
    },
    {
        id: 11,
        question: "Why do we need temperatures in SF adhesive dosing systems?",
        answer: "c.	To lower the viscosities of the product for better mixing",
        options: [
            "a.	To remove entrapped moisture in the product",
            "b.	To remove entrapped solvents in the product",
            "c.	To lower the viscosities of the product for better mixing",
            "d.	All the above"
        ]
    },
    // {
    //     id: 11,
    //     question: "Which of the following polymers has a highly branched structure",
    //     answer: "a.	LDPE",
    //     options: [
    //         "a.	LDPE",
    //         "b.	LLDPE",
    //         "c.	HDPE",
    //         "d.	PPHP"
    //     ]
    // },
    // {
    //     id: 12,
    //     question: "Which of the substrates given below has best moisture barrier property in correct order",
    //     answer: "b.	Al Foil > PP > HDPE > PET > Paper",
    //     options: [
    //         "a.	Al Foil > HDPE > Paper > PET > PP",
    //         "b.	Al Foil > PP > HDPE > PET > Paper",
    //         "c.	Paper > PET > HDPE > PP > Al foil",
    //         "d.	PP > HDPE > Al Foil > Paper > PET"
    //     ]
    // },  
    // {
    //     id: 13,
    //     question: "Which of the following techniques are not used to improve barrier properties",
    //     answer: "d.	Incorporating Additives like Euracamide",
    //     options: [
    //         "a.	Metallisation ",
    //         "b.	SiOx Coating",
    //         "c.	Biaxial Orientation",
    //         "d.	Incorporating Additives like Euracamide"
    //     ]
    // },
    // {
    //     id: 14,
    //     question: "Which amongst the following has the best in class Optical properties for similar thickness",
    //     answer: "a.	BOPET",
    //     options: [
    //         "a.	BOPET",
    //         "b.	Metallocene",
    //         "c.	EVA",
    //         "d.	PVC"
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


