let startButton = document.getElementById("start-button");
let shareButton = document.getElementById("share");
const link = "https://christmastest.netlify.app"

function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(deploylink).then(
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

        startButton.addEventListener("click", function () {
            window.location.href = 'quiz.html';

        });
        shareButton.addEventListener("click", copyURI);
    }
);
