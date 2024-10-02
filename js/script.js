let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}




const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal");
const span = document.getElementsByClassName("close")[0];
const cvModal = document.getElementById("cv-modal");
const btnCv = document.getElementById("open-cv-modal");
const span1 = document.getElementsByClassName("close")[1];




btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

btnCv.onclick = function() {
    cvModal.style.display = "block";
}

span1.onclick = function() {
    cvModal.style.display = "none";
}