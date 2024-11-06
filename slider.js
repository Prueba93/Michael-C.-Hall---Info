let currentIndex = 0;
const images = document.querySelectorAll('.slider-container img');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos
