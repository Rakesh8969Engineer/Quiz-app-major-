// let seco = 10;
// document.getElementById('cn_btn').addEventListener('click',maintime)





// function maintime(){

//     function timer() {
//         document.getElementById('cn_demo').innerHTML = seco;
//                    seco--;
//                    if (seco == 00) {



//                     end_cn_quiz();
//                        clearInterval(cle);

//                    }

//                }

//                let cle = setInterval(timer, 1000)  

// }


setTimeout(function () {
    alert("Enter Your Name and Start the quiz")

}, 1000)









var username;
const getusername = () => {


    username = document.getElementById('usern').value;
    alert("Hii" + " " + username + " " + "Please Select Category")


}































const Question = [

    {
        'ques': 'full form of HTML?',
        'a': 'Hyper text maekup language',
        'b': 'hyper text markup langugae',
        'c': 'hero text marvellous language',
        'd': 'honda text transfer markup language',
        'correct': 'b'
    },
    {
        'ques': 'full form of css?',
        'a': 'Casceding style sheets',
        'b': 'clear chat shareing',
        'c': 'cartoon style sharing',
        'd': 'chat style sharing',
        'correct': 'a'
    },

    {


        'ques': 'Full form of HTTP?',
        'a': 'hyper texture transfering process',
        'b': 'hyper text transfer protocol',
        'c': 'High bread text protocol',
        'd': 'hyper transfer text process',
        'correct': 'b'

    },
    {


        "ques": "When HTML was introudeed",
        "a": "1952",
        "b": "1958",
        "c": "1993",
        "d": "2002",
        "correct": "c"

    },
    {

        'ques': "who invented PHP language",
        'a': 'Rasmus Lerdorf',
        'b': 'denis ritchi',
        'c': 'teens berners lee',
        'd': 'Marros gemi',
        'correct': 'a'

    },

    {



        "ques": "When Spring Boot was introudeed",
        "a": "1952",
        "b": "1958",
        "c": "2014",
        "d": "2002",
        "correct": "c"





    },

        {



            "ques": "When Electron.js  was introudeed",
            "a": "1952",
            "b": "1958",
            "c": "2013",
            "d": "2002",
            "correct": "c"
    
    
    
    
    
        },{


            'ques': 'full form of xml?',
            'a': 'xtra text maekup language',
            'b': 'Extensible Markup Language',
            'c': 'hero text marvellous language',
            'd': 'honda text transfer markup language',
            'correct': 'b'





        },{


            "ques": "When Xml was introudeed",
            "a": "1952",
            "b": "1958",
            "c": "1998",
            "d": "2002",
            "correct": "c"





        },{



            "ques": "When Node.js was introudeed",
            "a": "1952",
            "b": "1958",
            "c": "2009",
            "d": "2002",
            "correct": "c"




        }






    

]
let ques_ = document.querySelectorAll('.ques_');
let index = 0;
let correct = 0;
let incorrect = 0;
let total = Question.length;









let webseco = 70;
document.getElementById('web_quiz').addEventListener('click', webmaintime);
function webmaintime() {

    function webtimer() {
        document.getElementById('webtime').innerHTML = webseco;
        webseco--;
        if (webseco == 10) {
            document.getElementById('webwarn').innerText = "Your quiz will be end now";

        }



        if (webseco == 00) {


            document.getElementById('webwarn').innerHTML = "Times up "
            endquiz();
            clearInterval(cle);

        }


    }

    let cle = setInterval(webtimer, 1000)
}
















const loadquestion = () => {



    document.getElementById('wbscore').innerHTML = `<strong>SCORE:${correct}</strong>
    `;

    if (index === total) {
        return endquiz();

    }
    reset_quiz();

    const data = Question[index];
    let ques_box = document.getElementById('ques_box').innerText = `${index + 1})${data.ques}`;
    ques_[0].nextElementSibling.innerText = data.a;
    ques_[1].nextElementSibling.innerText = data.b;
    ques_[2].nextElementSibling.innerText = data.c;
    ques_[3].nextElementSibling.innerText = data.d;



}





const submitQues = () => {

    const data = Question[index];

    let ans = getanswer();
    if (ans === data.correct) {
        correct++;

    } else {

        incorrect++;

    }
    index++;
    loadquestion();
    return;


}
const getanswer = () => {
    let anss;

    ques_.forEach(
        (inp) => {
            if (inp.checked) {

                anss = inp.value;


            }


        }


    )
    return anss;
}

const reset_quiz = () => {


    ques_.forEach(


        (inss) => {

            inss.checked = false;
        }

    )
}







const endquiz = () => {



    let appear = document.getElementById('container');
    appear.innerHTML = `

<div style=text-align:center>
<h3>Thanks for playing the quiz</h3>


<h3>   ${username}:This is your result:-        </h3><br>
Total Time Taken:<b>37:00</b> sec<br>
Total Question's:<strong>${total}<br></strong>
Attempt:<strong>${total}<br></strong>

Correct:<strong>${correct}</strong><br>



incorrect:<strong>${incorrect}</strong><br>
Precentage:<strong>${correct * 100 / 10}.00%;</strong><br><br>


<button onclick="location.reload()">Go To Home</button><br><br>
<button onclick="location.reload()">Start Quiz Again</button>
</div>





















<h2> ${correct}/of${total} are correct</h2></div> `

}

loadquestion();
// web-development quiz section-end


// Dbms quiz section start








let dbmseco = 70;
document.getElementById('dbmquiz').addEventListener('click', dbmmaintime);
function dbmmaintime() {

    function dbmtimer() {
        document.getElementById('dbms_timer').innerHTML = dbmseco;
        dbmseco--;
        if (dbmseco == 10) {
            document.getElementById('dbms_warn').innerText = "Your quiz will be end now";

        }



        if (dbmseco == 00) {


            document.getElementById('webwarn').innerHTML = "Times up "
            end_dbm_quiz();
            clearInterval(cle);

        }


    }

    let cle = setInterval(dbmtimer, 1000)
}


















const quizData = [
    {
        question: "Full form of DBMS?",
        a: "DISK BOOTING MANAGEMENT SYSTEM",
        b: "DATABASE MANAGEMENT SYSTEMS",
        c: "DATASERVER MANAGED SKILLS",
        d: "DIRECT BOOSTUP MANAGEMENT SECTION",
        correct: "b",
    },
    {
        question: "When Sql Was introduced?",
        a: "2000",
        b: "1990",
        c: "1970",
        d: "1955",
        correct: "b",
    },
    {
        question: "RDBMS  stand for?",
        a: "RATION DATABASE SCHEMES",
        b: "RELATIONAL DATABSE MANAGEMENT SYSTEM",
        c: "RELAX DATASTORE MECHANISM",
        d: "REPEAT DATASET BASE MECHANISM",
        correct: "b"
    },
    {
        question: "When mongodb launched?",
        a: "1996",
        b: "2009",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },



{


    question: "When Redis launched?",
    a: "1996",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "b"

},{


   question: "When  IBM DB2 launched?",
    a: "1983",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "a",

},{

    question: "When  postgresqL launched?",
    a: "1986",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "a",






},{
    question: "SQL  stand for?",
    a: "STRUCTURED QUERY LANGUAGE",
    b: "SETUP QUERY LANGUAGE",
    c: "SETTING QUESTION LANDMARK",
    d: "SERRUP QUOTAION LARGER",
    correct: "A"



},{


    question: "When  oracle launched?",
    a: "1977",
    b: "2009",
    c: "1994",
    d: "none of the above",
    correct: "a",




},{


    question: "Who launched oracle?",
    a: "Larry Ellison",
    b: "teen berner lee",
    c: "Denis ritci",
    d: "none of the above",
    correct: "a",



}
















];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

let dbwrong = 0;
loadQuiz()
function loadQuiz() {

    document.getElementById('dbms_score').innerHTML = ` <h3>Score:${score} </h3>`


    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        else {

            dbwrong++;

        }


        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            // quiz.innerHTML = `

            end_dbm_quiz();


            //    `
        }
    }
})

























function end_dbm_quiz() {



    document.getElementById('quiz').innerHTML = `

<div style="text-align:center; height:450px; width:450px;background-color:	#FF1493;margin:auto;border-radius:20px ">
<h2>Thanks For Playing The Quiz</h2>
    <h3>   ${username}:This is your result:-        </h3><br>
   
    Total Time Taken:<b>37:00 </b>sec<br>
    Total Question's:<strong>${quizData.length}<br></strong>
    Attempt:<strong>${quizData.length}<br></strong>
   
    Correct:<strong>${score}</strong><br>
    incorrect:<strong>${dbwrong}</strong><br>
 Precentage:<strong>${score * 100 / 10}.00%;</strong><br><br>
 
<button onclick="location.reload()">Go To Home</button><br><br>
<button onclick="location.reload()">Start  Again</button
 </div>

 <h2> ${score}/of${quizData.length} are correct</h2></div>


`

}




































let seco = 70;
document.getElementById('cn_btn').addEventListener('click', maintime)



function maintime() {

    function timer() {
        document.getElementById('cn_dem').innerHTML = seco;
        seco--;
        if (seco == 10) {
            document.getElementById('spp').innerText = "Your quiz will be end now";

        }



        if (seco == 00) {


            document.getElementById('cn_dem').innerHTML = "Times up "
            end_cn_quiz();
            clearInterval(cle);

        }


    }

    let cle = setInterval(timer, 1000)
}






// clearInterval(cle);







const cn_question = [
    {
        'ques': 'Full Form Of PAN?',
        'a': 'Personal Access Network.',
        'b': ' Personal Area Network.',
        'c': 'Permanent Access Node.',
        'd': 'Personal Account node',
        'correct': 'b'
    },
    {
        'ques': "OSI stands for?",
        'a': "Open Services infrastructure",
        'b': "Open system interconnection model",
        'c': "Open Setup internet model",
        'd': "Outlet Setup interconnection",
        'correct': "b"

    },
    {
        'ques': ' PoP stand for?',
        'a': 'Post Office protocol  ',
        'b': 'pre-office-protocol',
        'c': 'protocl of post',
        'd': 'None of the above',
        'correct': 'a'
    },
    {
        'ques': 'port number of PoP?',
        'a': '45',
        "b": "52",
        "c": "41",
        "d": '110',
        "correct": "d"

    }, {

        'ques': "layer which provides service to the user?",
        'a': 'Application layer',
        "b": "Presentation Layer",
        'c': "Physical Layer",
        'd': 'Network Layer',
        "correct": "a"
    },
    {
        'ques': 'What is a HUB?',
        'a': 'Computing Device',
        'b': 'Network Device',
        'c': 'Calculating Device',
        'd': 'Electrical Device',
        'correct': "b"
    },
    {

        'ques': ' Which of the following  is mainly used to host  a Website',
        'a': 'Mail server',
        'b': 'Web Server',
        'c': 'Database server',
        'd': 'None of the above',
        'correct': 'b'

    },
    {
        'ques': ' protocol primarily used for browsing data?',
        'a': 'HTTP',
        "b": 'TFTP',
        "c": "FTP",
        "d": "Tcp",
        "correct": "a"
    }
    , {
        "ques": "Identify the total versions of IP",
        'a': '2',
        "b": "20",
        "c": "1024",
        "d": "256",
        "correct": "a"
    }, {
        "ques": "  TCP/IP stand for",
        "a": "TELEPHONE CONTROL PROTOCOL/INTERNET PROTOCOL",
        "b": "TRANSMISSION CONTROL PROTOCOL/INTERNET PROTOCOL",
        "c": "TRANSMETER CONTROL PROCESS/INTERCATION PROTOCOL",
        "d": "None of the Above",
        "correct": "b"
    }
]
let cn_correct = 0;
let cn_incorrect = 0;
let cn_total = cn_question.length;
let cn_index = 0;

let cn_ques_options = document.querySelectorAll('.cn-ques');

const cn_loadquestion = () => {













    document.getElementById('cn_score').innerHTML = `<strong>SCORE:${cn_correct}</strong>`;

    if (cn_index === cn_total) {
        return end_cn_quiz();

    }

    reset_cn_quiz();

    const cn_ques_data = cn_question[cn_index];


    let cn_ques_head = document.getElementById('sample-question').innerText = `${cn_index + 1}/${cn_total})${cn_ques_data.ques}`;
    cn_ques_options[0].nextElementSibling.innerText = cn_ques_data.a;
    cn_ques_options[1].nextElementSibling.innerText = cn_ques_data.b;
    cn_ques_options[2].nextElementSibling.innerText = cn_ques_data.c;
    cn_ques_options[3].nextElementSibling.innerText = cn_ques_data.d;



}

const submit_cnQuiz = () => {
    const cn_ques_data = cn_question[cn_index];
    let cn_anss = getcn_answer();
    if (cn_anss === cn_ques_data.correct) {

        cn_correct++;

    }



    else {

        cn_incorrect++;

    }
    cn_index++;
    cn_loadquestion();
    return;



}







const getcn_answer = () => {
    let cn_ans;
    cn_ques_options.forEach(
        (inp) => {
            if (inp.checked) {
                cn_ans = inp.value;
            }


        }

    )
    return cn_ans;
}
const reset_cn_quiz = () => {

    cn_ques_options.forEach(

        (inp) => {

            inp.checked = false

        }

    )

}

function end_cn_quiz() {



    document.getElementById('whole_cn_quiz_section').innerHTML = `

<div style="text-align:center; height:450px; width:450px;background-color:	#FF1493;margin:auto;border-radius:20px ">
<h2>Thanks For Playing The Quiz</h2>
    <h3>   ${username}:This is your result:-        </h3><br>
   
    Total Time Taken:<b>36:00</b> sec<br>
    Total Question's:<strong>${cn_total}<br></strong>
    Attempt:<strong>${cn_total}<br></strong>
   
    Correct:<strong>${cn_correct}</strong><br>
    incorrect:<strong>${cn_incorrect}</strong><br>
 Precentage:<strong>${cn_correct * 100 / 10}.00%;</strong><br><br>
 
<button onclick="location.reload()">Go To Home</button><br><br>
<button onclick="location.reload()">Start  Again</button
 </div>


 <h2> ${cn_correct}/of${cn_total} are correct</h2></div>

`

}


cn_loadquestion();




// Computer network quize end from here{javascript}




// OPERATING SYSTEM QUIZ JAVASCRIPT STARTED FROM HERE 




let osseco = 70;
document.getElementById('os-btn').addEventListener('click', osmmaintime);
function osmmaintime() {

    function osmtimer() {
        document.getElementById('os-timer').innerHTML = osseco;
        osseco--;
        if (osseco == 10) {
            document.getElementById('os-warn').innerText = "Your quiz will be end now";

        }



        if (osseco == 0) {


            document.getElementById('os-warn').innerHTML = "Times up "
            end_os_quiz();
            clearInterval(cle);

        }


    }

    let cle = setInterval(osmtimer, 1000)
}


















const os_quizData = [
    {
        question: "OS STANDS FOR?",
        a: "Operator setup",
        b: "Olympic setting",
        c: "Oscar settup mail",
        d: "Operating Systems",
        correct: "d"
    },
    {
        question: "C-D Stands for?",
        a: "Central Style Sheets",
        b: "Compact Disk",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What does FCFS stand for?",
        a: "First Come First Serve",
        b: "fresh chamber for setup",
        c: "furrier Machine Language",
        d: "Fire Terminals Motorboats ",
        correct: "a"
    },
    {
        question: "When M.s Windows launched?",
        a: "1996",
        b: "1985",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
{



    question: "When Kali Linux launched?",
    a: "1994",
    b: "2013",
    c: "1995",
    d: "none of the above",
    correct: "b"


},{



    question: "When Windows xp launched?",
    a: "1985",
    b: "2001",
    c: "1999",
    d: "none of the above",
    correct: "b"




},{



    question: "When Windows 11 launched?",
    a: "1984",
    b: "2021",
    c: "1999",
    d: "none of the above",
    correct: "b"





},{


    question: "When Windows 10 launched?",
    a: "2015",
    b: "2020",
    c: "1999",
    d: "none of the above",
    correct: "a"




},{



    question: "When was the first operating system built?",
    a: "1996",
    b: "2000",
    c: "1999",
    d: "1956",
    correct: "d"





},{




    question: "Full Form of BIOS?",
    a: "Booster interconnection setup",
    b: "Basic Input Output System",
    c: "Binary input-output system",
    d: "Between input-output system",
    correct: "b"
















}




























];
const os_quiz = document.getElementById('quiz')
const os_answerEls = document.querySelectorAll('.os-answer')
const os_questionEl = document.getElementById('os-question')
const os_a_text = document.getElementById('os_a_text')
const os_b_text = document.getElementById('os_b_text')
const os_c_text = document.getElementById('os_c_text')
const os_d_text = document.getElementById('os_d_text')
const oos_submitBtn = document.getElementById('os_submitBtn')
let os_currentQuiz = 0
let os_score = 0

let os_wrong = 0;
os_loadQuiz()
function os_loadQuiz() {

    document.getElementById('os-score').innerHTML = ` <h3>Score:${os_score} </h3>`


    os_deselectAnswers()
    const os_currentQuizData = os_quizData[os_currentQuiz]
    os_questionEl.innerText = os_currentQuizData.question
    os_a_text.innerText = os_currentQuizData.a
    os_b_text.innerText = os_currentQuizData.b
    os_c_text.innerText = os_currentQuizData.c
    os_d_text.innerText = os_currentQuizData.d
}
function os_deselectAnswers() {
    os_answerEls.forEach(os_answerEls => os_answerEls.checked = false)
}
function os_getSelected() {
    let os_answer;
    let color_s;
    os_answerEls.forEach(os_answerEls => {
        if (os_answerEls.checked) {
            os_answer = os_answerEls.value;



        }
    })
    return os_answer
}
oos_submitBtn.addEventListener('click', () => {
    const oss_answer = os_getSelected()
    if (oss_answer) {
        if (oss_answer === os_quizData[os_currentQuiz].correct) {
            os_score++






        }

        else {

            os_wrong++;

        }


        os_currentQuiz++
        if (os_currentQuiz < os_quizData.length) {
            os_loadQuiz()
        } else {
            // quiz.innerHTML = `

            end_os_quiz();


            //    `
        }
    }
})

























function end_os_quiz() {



    document.getElementById('os_quiz').innerHTML = `

<div style="text-align:center; height:450px; width:450px;background-color:	#FF1493;margin:auto;border-radius:20px ">
<h2>Thanks For Playing The Quiz</h2>
    <h3>   ${username}:This is your result:-        </h3><br>
   
    Total Time Taken: <b>35:00 sec</b><br>
    Total Question's:<strong>${os_quizData.length}<br></strong>
    Attempt:<strong>${os_quizData.length}<br></strong>
   
    Correct:<strong>${os_score}</strong><br>
    incorrect:<strong>${os_wrong}</strong><br>
 Precentage:<strong>${os_score * 100 / 10}.00%;</strong><br><br>
 
<button onclick="location.reload()">Go To Home</button><br><br>
<button onclick="location.reload()">Start  Again</button
 </div>

 <h2> ${os_score}/of${os_quizData.length} are correct</h2></div>


`

}



// OPERATING SYSTEM QUIZ ENDS HERE{JAVASCRIPT}



























const homepageafterwd = () => {

    document.getElementById('welcome-logo').style.display = "block";
    document.getElementById('second-welcome-logo').style.display = "none";
    // document.getElementById('whole_cn_quiz_section').style.display = "none";
    document.getElementById('web-quiz-section').style.display = "none";





}

const homepageaftercn = () => {

    again
    document.getElementById('welcome-logo').style.display = "block";
    document.getElementById('second-welcome-logo').style.display = "none";
    // document.getElementById('web-quiz-section').style.display = "none";
    document.getElementById('whole_cn_quiz_section').style.display = "none";



}





// const againcn_quiz = () => {
//     document.getElementById('parentofcn').style.display = "block";
//     // document.getElementById('second-welcome-logo').style.display = "none";
//     document.getElementById('cn_quiz_section').style.display = "block";

//     document.getElementById('cn-btn').style.display = "block";

// }




const greetone = () => {
    document.getElementById('welcome-logo').style.display = "block";
    document.getElementById('second-welcome-logo').style.display = "none";

    // document.getElementById('second-welcome-logo').


}
const greettwo = () => {
    // 
    document.getElementById('welcome-logo').style.display = "none";
    document.getElementById('second-welcome-logo').style.display = "block";


}



document.getElementById('main-btn').addEventListener("click", greetone);
document.getElementById('main-btn').addEventListener("click", greettwo);
document.getElementById('main-btn').addEventListener("click", getusername);







const web_quiz = () => {

    document.getElementById('second-welcome-logo').style.display = "none";
    document.getElementById('web-quiz-section').style.display = "block";


}


const dbms_quiz = () => {
    document.getElementById('second-welcome-logo').style.display = "none";
    document.getElementById('dbms_quiz').style.display = "block";


}
const cn_quiz = () => {

    document.getElementById('second-welcome-logo').style.display = "none";
    document.getElementById('cn_quiz_section').style.display = "block";

    document.getElementById('cn-btn').style.display = "block";

}

const os_Quiz = () => {
    document.getElementById('second-welcome-logo').style.display = "none";
    document.getElementById('os_quiz').style.display = "block";

}










