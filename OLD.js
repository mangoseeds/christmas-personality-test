
$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function () {
    next();
});

$("#A").hover(
    function () {
        $(this).css("background-color", q[num]["c2"]);
        $(this).css("color", q[num]["c1"]);
        $(this).css("border", "3px solid" + q[num]["c2"]);
    },
    function () {
        $(this).css("background-color", q[num - 1]["c2"]);
        $(this).css("color", q[num - 1]["c1"]);
        $(this).css("border", "3px solid" + q[num - 1]["c1"]);
    }
);
$("#B").hover(
    function () {
        $(this).css("background-color", q[num]["c2"]);
        $(this).css("color", q[num]["c1"]);
        $(this).css("border", "3px solid" + q[num]["c2"]);
    },
    function () {
        $(this).css("background-color", q[num - 1]["c2"]);
        $(this).css("color", q[num - 1]["c1"]);
        $(this).css("border", "3px solid" + q[num - 1]["c1"]);
    }
);

function next() {
    if (num == 13) {
        // let colors = ['#914E72', '#0078BF', '#00A95C', '#3255A4', '#3D5588', '#00838A', '#BB8B41', '#407060', '#FF665E', '#925F52', '#FFE800', '#FF6C2F', '#FF48B0', '#AC936E', '#67B346', '#009DA5', '#BB76CF', '#FFB511', '#928D88', '#5EC8E5', '#82D8D5', '#FFE900', '#FF4C65', '#44D62C', '#FFFFFF']
        // const choose = colors[Math.floor(Math.random() * colors.length)]

        $(".quiz_page").hide();
        $(".result_page").show();


        $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
        $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
        $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
        $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");

        $("#img").attr("src", result[mbti]["img"]);
        $("#result").html(result[mbti]["result"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#extra").html(result[mbti]["extra"]);
        $("#gift").html(result[mbti]["gift"]);
    } else {
        //문제 & 선택지
        $("#question").html(q[num]["q"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        //색 세팅
        $(".quiz_page").attr("style", "background-color: " + q[num]["c1"]);
        $("#question").css("color", q[num]["c2"]);
        $("#A").css("background-color", q[num]["c2"]);
        $("#A").css("color", q[num]["c1"]);
        $("#A").css("border", "3px solid" + q[num]["c1"]);
        $("#B").css("background-color", q[num]["c2"]);
        $("#B").css("color", q[num]["c1"]);
        $("#B").css("border", "3px solid" + q[num]["c1"]);

        num++;
    }
