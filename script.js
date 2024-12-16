// References to DOM Elements
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const card = document.querySelector("#card");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 1;
let maxLocation = numOfPapers + 1;

function openBook() {
    card.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        card.style.transform = "translateX(0%)";
    } else {
        card.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                break;
            case 2:
                paper2.classList.add("flipped");
                break;
        }
        currentLocation++;
    }

    if (currentLocation < maxLocation) {
        nextBtn.style.display = "block";
    }

    if (currentLocation === 1) {
        prevBtn.style.display = "none";
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                break;
            case 3:
                paper2.classList.remove("flipped");
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
    }
}