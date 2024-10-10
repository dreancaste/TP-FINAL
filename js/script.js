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












const gifMod = document.getElementById('gif-mod');
const modalGif = document.getElementById('modal-gif');
const modalImgGif = document.getElementById('img-modal-gif');
const closeGifBtn = document.querySelector('.close-gif');

gifMod.onclick = function() {
    modalGif.style.display = "flex"; // Cambiamos a flex para centrar contenido
    modalImgGif.src = this.src; // Asigna la fuente del GIF al modal
}

closeGifBtn.onclick = function() {
    modalGif.style.display = "none";
}

modalGif.onclick = function() {
    modalGif.style.display = "none";
}