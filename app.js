const startCaptchaBTN = document.getElementById("btn-start");
const modalBackground = document.getElementById("modal-background");
const audio = document.getElementById("uwu");

function showModal() {
    modalBackground.setAttribute("show", true);
    audio.volume = 0.1;
    audio.play();
}

function startCaptcha() {
    if (startCaptchaBTN.classList.contains("loading")) {
        return;
    } else {
        startCaptchaBTN.classList.add("loading");
    }

    modalBackground.style.display = "block";
    setTimeout(showModal, 1000);
}