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

const gifMod1 = document.getElementById('gif-mod1');
const modalGif1 = document.getElementById('modal-gif1');
const modalImgGif1 = document.getElementById('img-modal-gif1');
const closeGifBtn1 = document.querySelector('.close-gif1');

const gifMod2 = document.getElementById('gif-mod2');
const modalGif2 = document.getElementById('modal-gif2');
const modalImgGif2 = document.getElementById('img-modal-gif2');
const closeGifBtn2 = document.querySelector('.close-gif2');

const gifMod3 = document.getElementById('gif-mod3');
const modalGif3 = document.getElementById('modal-gif3');
const modalImgGif3 = document.getElementById('img-modal-gif3');
const closeGifBtn3 = document.querySelector('.close-gif3');


gifMod.onclick = function() {
    modalGif.style.display = "flex"; 
    modalImgGif.src = this.src; 
}

closeGifBtn.onclick = function() {
    modalGif.style.display = "none";
}

modalGif.onclick = function() {
    modalGif.style.display = "none";
}

gifMod1.onclick = function() {
    modalGif.style.display = "flex"; 
    modalImgGif.src = this.src; 
}

closeGifBtn1.onclick = function() {
    modalGif.style.display = "none";
}

modalGif1.onclick = function() {
    modalGif.style.display = "none";
}
gifMod2.onclick = function() {
    modalGif.style.display = "flex"; 
    modalImgGif.src = this.src; 
}

closeGifBtn2.onclick = function() {
    modalGif.style.display = "none";
}

modalGif2.onclick = function() {
    modalGif.style.display = "none";
}
gifMod3.onclick = function() {
    modalGif.style.display = "flex"; 
    modalImgGif.src = this.src; 
}

closeGifBtn3.onclick = function() {
    modalGif.style.display = "none";
}

modalGif3.onclick = function() {
    modalGif.style.display = "none";
}
