window.onload = function () {
    show(0);
}
// questions
let questions = [
    {
        id: 1,
        question: "Which of the following SB adhesive scenario will have the lowest adhesive dry cost?",
        answer: "c. Adhesive running at 35% application solids with solvent cost at 130 Rs per Kg",
        options: [
            "a. Adhesive running at 30% application solids with solvent cost at 70 Rs per Kg",
            "b. Adhesive running at 35% application solids with solvent cost at 70  Rs per Kg",
            "c. Adhesive running at 35% application solids with solvent cost at 130 Rs per Kg",
            "d. Adhesive dry cost will remain the same for same adhesive."
        ]
    },
    {
        id: 2,
        question: "As a general guidance what percentage is the cost of adhesive in a typical 3 ply GP laminate? (Eg.: 12 PET/12 met PET/ 30 PE with adhesive gsm of 2 on each pass)",
        answer: "b. Between 8-12 percent of total laminate cost",
        options: [
            "a. Less than 5 percent of total laminate cost",
            "b. Between 8-12 percent of total laminate cost",
            "c. Between 15-20 percent of total laminate cost",
            "d. It cannot be calculated and not possible"
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
        question: "Does the cost of 100 gsm laminate remains the same per square meter and per Kg?",
        answer: "d.	Cost per GSM will be 1/10th of the cost per Kg",
        options: [
            "a.	It will remain the same",
            "b.	Cost of Per GSM will be lower than per Kg by 50 percent",
            "c.	Cost per GSM will be higher than per Kg by 20 percent",
            "d.	Cost per GSM will be 1/10th of the cost per Kg"

        ]
    },
    {
        id: 5,
        question: "Which of the following adhesive combination is cheapest for a GP application?",
        answer: "b.	SF adhesive running at 250 mpm",
        options: [
            "a.	SB adhesive running at 35 percent solids and at 200 mpm",
            "b.	SF adhesive running at 250 mpm",
            "c.	SB adhesive running at 30 percent solids and 250 mpm",
            "d.	SF adhesive running at 200 mpm"
        ]
    },
    {
        id: 6,
        question: "What happens to the laminate when it is not fully cured with respect to food safety?",
        answer: "a. PAA migration possibility",
        options: [
            "a. PAA migration possibility",
            "b. No effect",
            "c. Laminate will be good once the bond strength is achieved.   ",
            "d. Free of Substance of concern"
        ]
    },
    {
        id: 7,
        question: "Which of the following is not a part of Henkel’s triple food safety process?",
        answer: "c. Customer laminate testing",
        options: [
            "a.	Use safe materials",
            "b.	Prove your safety",
            "c. Customer laminate testing",
            "d.	Use safe processes"
        ]
    },
    {
        id: 8,
        question: "What is the OML (overall migration limit) according to EU 10/2011 regulations for flexible packaging?",
        answer: "c.	60 ppm",
        options: [
            "a. 10 ppm",
            "b.	20 ppm",
            "c.	60 ppm",
            "d.	150 ppm"
        ]
    },
    {
        id: 9,
        question: "What is the full form of NIAS?",
        answer: "b. Non intentionally added substances",
        options: [
            "a. Non Ionic adhesive substances",
            "b. Non intentionally added substances",
            "c. Necessary information of adhesive substances",
            "d. Newly identified adhesive substances"
        ]
    },
    {
        id: 10,
        question: "What are the sources of PAA?",
        answer: "a.	Adhesive",
        options: [
            "a.	Adhesive",
            "b.	PP film",
            "c.	Vinyl Ink",
            "d.	PET/BOPP film"
        ]
    },
    {
        id: 11,
        question: "What is the relevance of PAA in adhesive laminates?",
        answer: "c.	Direct impact on food contact legislation",
        options: [
            "a.	No Significance at all",
            "b.	It is only related to Poly only",
            "c.	Direct impact on food contact legislation",
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


