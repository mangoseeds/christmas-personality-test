const q = {
    1: {
        q: "연말 파티에 초대 받은 당신!<br>꽤 많은 사람이 모여 있을 거라고 하는데",
        type: "EI",
        A: "오랜만에 못보던 친구들 보고<br>파티 좋지!",
        B: "귀찮은데.. <br>집에서 재밌는 영화나 볼래",
        c1: "#77241e",
        c2: "#1aa611",
    },
    2: {
        q: "일년동안 한번도 사용한 적이<br>없는 친구의 작년 크리스마스 선물을",
        type: "TF",
        A: "못쓰니 아깝네,<br>더 잘 활용할 친구한테 줘야겠다!",
        B: "선물이니까 일단 간직하고 있을래!<br>추억이 있지",
        c1: "#144928",
        c2: "#a4333f",
    },
    3: {
        q: "드레스코드가 정해진<br>크리스마스 파티에 나는",
        type: "EI",
        A: "화려한 옷을 고른다",
        B: "무난한 옷을 고른다",
        c1: "#6a1c0f",
        c2: "#c83735",
    },
    4: {
        q: "만약 내일 아침에 내가<br>크리스마스 트리로 변해있으면?",
        type: "SN",
        A: "크리스마스 트리...?<br>대체 내가 그럴리가",
        B: "으악 다른 사람이<br>나를 알아볼 수 있을까?",
        c1: "#138015",
        c2: "#7f2910",
    },
    5: {
        q: "내일 하루종일 비가 온다는데,<br>친구가 내일 점심을 먹자고 물어본다",
        type: "EI",
        A: "비가 와도 친구 보는거<br>뭐 크게 상관 없지",
        B: "내일 계속 비 온대ㅜㅜ<br>혹시 다른날 어때?",
        c1: "#ac2c44",
        c2: "#60a72c",
    },
    6: {
        q: "친구에게 크리스마스 선물을<br>주었을 때 더 듣기 좋은 말은",
        type: "TF",
        A: "헉 내가 갖고 싶다고 얘기했던거!<br>어떻게 그걸 기억했어?",
        B: "내가 딱 원했던건데,<br>역시 넌 섬세하구나 어떻게 알았어!",
        c1: "#25602f",
        c2: "#490d0d",
    },
    7: {
        q: "바로 내일이 크리스마스 파티!<br>잠들기 전에",
        type: "SN",
        A: "내일 선물도 다 챙겼고, 알람도 맞췄고,<br>이제 푹 잠만 자면 된다!",
        B: "내일 파티에 누가 올까?<br>이런 일 있으면 재밌겠다...(상상중)",
        c1: "#d71d1d",
        c2: "#185033",
    },
    8: {
        q: "연말 파티에 친구와 나는 케이크 담당!<br>어디서 살지 심사숙고하여 고르는데",
        type: "SN",
        A: "대충 검색해보면 바로 느낌이 온다",
        B: "꼼꼼히 후기를 다 읽어보고 고른다",
        c1: "#42852c",
        c2: "#960c21",
    },
    9: {
        q: "케이크를 사기 위해 친구랑 만나기로 했지만<br>연말이라 차가 막혀 약속 시간에<br>30분이나 늦을 것 같은데,",
        type: "TF",
        A: "친구야ㅜㅜ 미안 30분정도 늦을 것 같아<br>연말이라 그런지 차가 많이 막힌다",
        B: "친구야ㅜㅜ 30분 뒤에야 도착할 것 같네<br>추운데 기다리게 해서 미안해",
        c1: "#931a3b",
        c2: "#5b8a3d",
    },
    10: {
        q: "내 지각으로 원래 가려고 했던<br>케이크 가게의 영업 시간이 끝났을 때",
        type: "JP",
        A: "이미 마감 시간을 알고 있어서<br>가는 길에 새로운 케이크 가게를 찾아뒀지~",
        B: "친구랑 함께 다시 의논하며<br>새로운 가게를 찾아본다",
        c1: "#769439",
        c2: "#c02231",
    },
    11: {
        q: "원래 가려던 케이크 가게에서<br>원하던 케이크를 사지 못한 것에 대해",
        type: "JP",
        A: "아무렇지 않으려고 해도<br>조금은 스트레스를 받는다",
        B: "이게 뭐 별건가!!<br>아무 생각 없이 넘길 수 있다",
        c1: "#af383c",
        c2: "#26cc68",
    },
    12: {
        q: "곧 시작되는 2023년,나는",
        type: "JP",
        A: "내년을 위한 상세한 계획을 세워 뒀다",
        B: "이루고 싶은 목표 정도는 생각해 봤다",
        c1: "#144928",
        c2: "#a61812",
    }
};

let count = 1;
let EI = 0;
let SN = 0;
let TF = 0;
let JP = 0;

let quizPage;
let question;
let buttonA;
let buttonB;
let docBody;

let c1;
let c2;

document.addEventListener("DOMContentLoaded", function () {
    quizPage = document.getElementById("quiz_page");
    question = document.getElementById("question");
    buttonA= document.getElementById("buttonA");
    buttonB= document.getElementById("buttonB");
    docBody = document.body;

    console.log(question, buttonA, buttonB);
    showQuestion();
});

function showQuestion() {
    console.log(q[count]);

    c1 = q[count].c1;
    c2 = q[count].c2;
    console.log(c1, c2);

    question.innerHTML = q[count].q;
    buttonA.innerHTML = q[count].A;
    buttonB.innerHTML = q[count].B;

    quizPage.style.backgroundColor = c1;
    docBody.style.backgroundColor = c1;
    question.style.color = c2;
    buttonA.style.color = c2;
    buttonA.style.backgroundColor = c1;
    buttonA.style.border = "3px solid " + c2;
    buttonB.style.color = c2;
    buttonB.style.backgroundColor = c1;
    buttonB.style.border = "3px solid " + c2;


    buttonA.onmouseover = function (){
        buttonA.style.backgroundColor = c2;
        buttonA.style.color = c1;
    }
    buttonA.onmouseout = function (){
        buttonA.style.backgroundColor = c1;
        buttonA.style.color = c2;
    }

    buttonB.onmouseover = function (){
        buttonB.style.backgroundColor = c2;
        buttonB.style.color = c1;
    }
    buttonB.onmouseout = function (){
        buttonB.style.backgroundColor = c1;
        buttonB.style.color = c2;
    }
}

function mbtiResult() {
    let mbti = "";
    console.log(EI, SN, TF, JP);

    mbti += EI < 2 ? "I" : "E";
    mbti += SN < 2 ? "N" : "S";
    mbti += TF < 2 ? "F" : "T";
    mbti += JP < 2 ? "P" : "J";

    sessionStorage.setItem('mbtiResult', mbti);
    window.location.href = 'result.html';

}

function nextQuestion(ans) {

    if (ans === 'A') {
        buttonA.style.backgroundColor = c2;
        buttonA.style.color = c1;
        quizPage.style.color = c2;
        setTimeout(() => {}, 500); // 500 milliseconds (0.5 seconds)

        let questionType = q[count]["type"];
        switch (questionType) {
            case "EI":
                EI++;
                break;
            case "SN":
                SN++;
                break
            case "TF":
                TF++;
                break;
            case "JP":
                JP++;
                break;
        }
    } else if (ans === 'B') {

        buttonB.style.backgroundColor = c2;
        buttonB.style.color = c1;
        quizPage.style.color = c2;
        setTimeout(() => {
        }, 500); // 500 milliseconds (0.5 seconds)
    }

    count++;

    if (count >= 13) {
        mbtiResult();
    }

    setTimeout(() => {
      showQuestion();
      // Set the hover color dynamically
      // document.getElementById("buttonA").style.backgroundColor = "#4CAF50"; // Change to your desired color
      // document.getElementById("buttonB").style.backgroundColor = "#4CAF50"; // Change to your desired color
    }, 500);

}
