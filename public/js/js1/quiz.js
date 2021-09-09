window.onload = function () {
    show(0);
}
// questions
let questions = [
    {
        id: 1,
        question: "Which of the following is least essential for safety in flexible packaging operations ?",
        answer: "a. Helmets",
        options: [
            "a. Helmets",
            "b. Safety Goggles",
            "c. Gloves",
            "d. Safety shoes"
        ]
    },
    {
        id: 2,
        question: "What kind of mechanical Risks do you see in lamination process?",
        answer: "c. Cuts",
        options: [
            "a. Burns",
            "b. Itching & Irritation",  
            "c. Cuts",
            "d. Inhalation of chemicals"
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
        question: "What are the important three parts of the body which have to be protected?",
        answer: "d.	All of the above",
        options: [
            "a.	Skin",
            "b.	Eyes",
            "c.	Respiratory Organs",
            "d.	All of the above"

        ]
    },
    {
        id: 5,
        question: "What kind of substrates can be bonded to make laminates ?",
        answer: "a.	Films, Metal, Paper",
        options: [
            "a.	Films, Metal, Paper",
            "b.	Glass",
            "c.	All of the above",
            "d.	None of the above"
        ]
    },
    {
        id: 6,
        question: "Which are the critical factors in adhesion ?",
        answer: "d.	All of the above",
        options: [
            "a.	Surface tension",
            "b.	Contact Angle",
            "c.	Vanderwaal forces",
            "d.	All of the above"
        ]
    },
    {
        id: 7,
        question: "Which amongst the following materials is easiest to wet?",
        answer: "c. Uncoated Paper",
        options: [
            "a.	Corona treated PET",
            "b.	Foil",
            "c. Uncoated Paper",
            "d.	Met OPP"
        ]
    },
    {
        id: 8,
        question: "Impurities on the surface of substrates leads to ",
        answer: "d.	Poor bond strength",
        options: [
            "a. Very good wettability",
            "b.	Strong chemical adhesion to substrates",
            "c.	Higher dyne retention",
            "d.	Poor bond strength"
        ]
    },
    {
        id: 9,
        question: "Corona treatment given to substrates in lamination should not lead to",
        answer: "c.	Material degradation",
        options: [
            "a.	Improvement in Polarity",
            "b.	Surface roughness",
            "c.	Material degradation",
            "d.	Cleaning"
        ]
    },
    {
        id: 10,
        question: "Which of the following is not a synthetic polymer substrate ?",
        answer: "b.	Paper",
        options: [
            "a.	Poly Ethylene Terephthalate",
            "b.	Paper",
            "c.	Oriented Polyamide ",
            "d.	BOPP"
        ]
    },
    {
        id: 11,
        question: "Which one of the following is a must have while going into adhesive lamination shop floor?",
        answer: "a.	Safety Shoes and Goggles",
        options: [
            "a.	Safety Shoes and Goggles",
            "b.	Helmets and Safety Shoes",
            "c.	Aprons and Gloves",
            "d.	None of the above"
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


