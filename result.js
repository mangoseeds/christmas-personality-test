const r = {
    ISTJ: {
        img: "candy.png",
        result: "시원한 페퍼민트 사탕",
        extra: "",
        gift: "차 세트",
        explain:
            "규칙을 잘 지키고, 원리 원칙적이에요.<br>정리정돈을 잘해요.<br>주어진 일은 끝까지 해내요.<br>휴일에는 집에 있는게 좋아요.<br>가까운 사람에게는 직설적이에요.<br>다른 사람들이 내 일에 참견하는 건 싫어요.<br>예고 없이 갑작스러운 변화는 싫어요.",
    },

    ISFJ: {
        img: "snowman.png",
        result: "맑은 눈사람",
        extra: "",
        gift: "달력",
        explain:
            "혼자 있는 시간이 좋아요.<br>길고 안정적인 관계가 좋아요.<br>동정심이 많아 타인에게 꾸준하고 헌신적이에요.<br>타인의 신뢰가 좋아요.<br>실용적이에요.<br>.<br>.",
    },

    INTJ: {
        img: "stockings.png",
        result: "선물이 가득 담긴 양말 주머니",
        extra: "",
        gift: "나무 체스보드",
        explain:
            "독립적이고 논리적이에요.<br>나에 대한 확신이 있어요. 무엇이든 잘 해낼 수 있을 것 같아요.<br>계획과 전략을 세우는 것이 재밌어요.<br>기존의 편의성보다는 혁신적인 발상을 하고 싶어요.<br>과정보다 결과가 중요해요.<br>이유 없이 무언가를 맹목적으로 따르는 건 싫어요.<br>재미만 추구하는 관계에는 별 관심이 없어요.",
    },

    INFJ: {
        img: "rudolph.png",
        result: "미스테리 루돌프",
        extra: "",
        gift: "책",
        explain:
            "감정적이면서 동시에 이성적이에요.<br>타인을 잘 꿰뚫어봐요.<br>타인에 의해 휘둘리지 않고 결단력 있어요.<br>몽상에 빠지는 건 재밌어요.<br>왜? 라는 말을 자주 해요.<br>영감이 뛰어나고 통찰력이 깊어요.<br>궁금한 사람이 생기면 빤히 처다보며 분석해요.",
    },

    ISTP: {
        img: "candle.png",
        result: "따뜻하고 향기로운 캔들",
        extra: "",
        gift: "폴라로이드",
        explain:
            "틀에 박히고 규칙을 따르는 생활은 싫어요.<br>주관이 뚜렷해요.<br>마음에 없는 이야기는 안해요.<br>관심분야가 아니면 눈길도 안줘요.<br>생각은 적극적이지만 행동은 소극적이에요.<br>혼자 보내는 시간을 즐겨요.<br>정밀함과 주의를 기울여야하는 일을 잘해요.",
    },

    ISFP: {
        img: "movie.png",
        result: "크리스마스 영화",
        extra: "",
        gift: "파자마",
        explain:
            "현재에 집중하며 순간순간에 몰두해요.<br>남을 잘 믿고 의심하지 않아요.<br>분쟁을 피하고 조화롭게 지내려고 노력해요.<br>차분함을 유지해요.<br>타인의 비판에도 개방적이며 잘 수긍해요.<br>인내심이 있고 성실해요.<br>규칙이란 틀에 묶이는 건 싫어요.",
    },

    INTP: {
        img: "fireplace.png",
        result: "따뜻한 온기를 주는 벽난로",
        extra: "",
        gift: "목도리",
        explain:
            "엉뚱함과 특이한 유머감각이 있어요.<br>사람의 심리를 잘 꿰뚫어봐요.<br>결과보다 과정이 중요해요.<br>스스로에게 엄격하고 타인에게 너그러워요.<br>논리적으로 맞다고 생각되면 본인을 향한 비난도 수긍해요.<br>친해지기 전에는 마음 속을 이해하기 어려워요.<br>강강약약 스타일이에요.",
    },

    INFP: {
        img: "gift.png",
        result: "포장지 속의 선물",
        extra: "",
        gift: "손편지",
        explain:
            "이해심이 많고, 개방적이에요.<br>고정관념이 없어요.<br>가식적인 것은 싫어요. 진실과 진정성을 추구해요.<br>도덕적인 것이 중요해요.<br>독특한 감수성을 가지고 있어요.<br>.<br>.",
    },

    ESTJ: {
        img: "snowflake.png",
        result: "새하얀 눈송이",
        extra: "",
        gift: "딸기 케이크",
        explain:
            ".<br>.<br>새로운 지식을 학습하거나 취미를 배우는 것을 좋아해요.<br>영혼 없는 리액션이 티날 때가 있어요.<br>명확한 결론이 나는 대화를 선호해요.<br>.<br>.",
    },

    ESFJ: {
        img: "lease.png",
        result: "화사한 크리스마스 리스",
        extra: "",
        gift: "공연 티켓",
        explain:
            "사람이 좋아요. 스트레스를 받으면 누군가를 만나야해요.<br>공감 능력이 좋아요. 진심으로 공감하지 않아도 상대방 기분을 잘 맞춰줘요.<br>마음 속으론 옳고 그름을 날카롭게 구분하지만 주위 분위기를 살피며 행동하고 말해요.<br>정이 많아요.<br>단호한 의견을 내면, 그것은 매우 진심이에요.<br>귀가 얇아요.<br>한번 좋아하면 헌신하고, 배신하지 않아요.",
    },

    ENTJ: {
        img: "globe.png",
        result: "스노우맨 스노우글로브",
        extra: "",
        gift: "알람 시계",
        explain:
            "내 분야에서 완변주의를 추구해요.<br>항상 계획하고, 반드시 실행에 옮겨요.<br>사람의 능력을 빠르게 알아차려요.<br>감정 표현을 솔직하게 해요.<br>고집이 세지만, 논리적으로 납득 가능한 비판에 대한 수용은 빨라요.<br>반복되는 일상은 싫지만, 갑작스러운 변화도 싫어요.<br>다른 사람의 평가를 신경 쓰지 않아요.",
    },

    ENFJ: {
        img: "jazz.png",
        result: "배경을 채우는 묵직한 재즈 음악",
        extra: "",
        gift: "꽃",
        explain:
            "인생과 인간을 따뜻하게 바라봐요.<br>사람을 좋아하기 때문에 호감있는 사람에게는 더 대가없이 배풀어요.<br>관심사가 다양하며, 학습 속도가 빨라요.<br>감정이입에 뛰어나 스스로 스트레스를 받는 경우가 있어요.<br>타인을 잘 배려해주고, 동시에 배려 받는 걸 당연히 여기지 않고 고마움을 잘 표현해요.<br>타인을 비판하지 않지만, 자기 반성은 잘하고, 이를 원동력으로 삼아요.<br>관계에 있어 진실함과 온전함이 중요해요.",
    },

    ESTP: {
        img: "nutcracker.png",
        result: "백조 사이의 넛크래커",
        extra: "",
        gift: "딸기 타르트",
        explain:
            "장난치는 걸 좋아하는 말썽꾸러기에요.<br>현재를 중요한 시점으로 여겨요.<br>중심에 서는 것과 관심을 즐겨요.<br>관찰력이 뛰어나 사람 분석을 잘해요.<br>내기를 좋아하고, 스릴 있는 것도 좋아해요.<br>.<br>.",
    },

    ESFP: {
        img: "star.png",
        result: "반짝반짝 트리 위의 별",
        extra: "",
        gift: "장갑",
        explain:
            "매우 밝은 성격으로 모임을 주도하는 분위기 메이커에요.<br>정이 많고 사람을 좋아해요.<br>내 이야기를 할 때 솔직하게 진심을 잘 털어놓는 편이에요.<br>자유로울 때 능력을 발휘해요.<br>예전의 일을 쉽게 잊고 잘 털어내요.<br>집에 혼자 있는 건 답답해요.<br>하고 싶은 말이 많은데, 이를 다 못할 때가 있어요.",
    },

    ENTP: {
        img: "gingerbread.png",
        result: "앙증맞은 진저브레드 쿠키",
        extra: "",
        gift: "목도리",
        explain:
            "즉흥적이고, 유연하고, 순발력이 좋아요.<br>가치관이 뚜렷하며 이를 거리낌 없이 드러내요.<br>경쟁심이 강하고, 논리력이 뛰어나요.<br>벼락치기 공부를 선호해요.<br>알고만 지내는 사이와 친한 사이의 선이 확실해요.<br>외향적이지만 혼자 있는 시간도 중요해요.<br>평소 자신감 넘쳐요.",
    },

    ENFP: {
        img: "sangria.png",
        result: "분위기를 띄우는 샹그리아",
        extra: "",
        gift: "무드등",
        explain:
            "사람을 기쁘게 해주는 능력이 있어요. 고민도 잘 들어줘요.<br>분위기를 잘 띄운 후에 나는 뒤로 빠져요.<br>외향적인 사람보다는 내향적인 사람들 사이에서 모임을 잘 주도해요.<br>선생님이 마음에 들면 하기 싫은 과목도 잘해요.<br>인생을 즐겁게 살려고 노력해요.<br>반복적이고 변화가 없는 일상은 답답하고 지루해요.<br>계획하기 보다는 그때 그때 일을 처리해요.",
    },
};

const passedResult = sessionStorage.getItem('mbtiResult');
// const mbti = r[passedResult]
const mbti = r["ISTJ"];

let result;
let resultImg;
let explain;
let gift;
let shareButton = document.getElementById("share");

function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute("href")).then(
        () => {
            /*clipboard successfully set */
            alert("링크가 클립보드에 복사되었습니다.")
        },
        () => {
            /*clipboard set failed */
        }
    );
}

document.addEventListener("DOMContentLoaded", function () {

    shareButton.addEventListener("click", copyURI);
    result = document.getElementById("result");
    resultImg = document.getElementById("result-image");
    explain = document.getElementById("explain");
    gift = document.getElementById("gift");

    document.body.style.backgroundColor = "#185033";


    console.log(passedResult);
    console.log(mbti);

    result.textContent = mbti.result;
    resultImg.src = "./img/" + mbti.img;

    exp = mbti.explain.split("<br>");
    console.log(exp);

    for (let i = 0; i < exp.length; i++) {
        const newParagraph = document.createElement("p");

        newParagraph.textContent = exp[i];

        explain.appendChild(newParagraph);
    }

    // explain.textContent = mbti.explain.split("<br>") ;
    gift.textContent = "선물 추천: " + mbti.gift;

});