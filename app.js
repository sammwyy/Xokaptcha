const startCaptchaBTN = document.getElementById("btn-start");
const modalBackground = document.getElementById("modal-background");

function showModal() {
    modalBackground.setAttribute("show", true);
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