const slides = document.querySelectorAll('.slides img');
let  slideIndex = 0;
let interval = null;

// initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {

  if(slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
    intervalId =  setInterval(nextSlide, 3000);
  }
}

function showSlide(index) {

  if(index >= slides.length) {
    slideIndex = 0;

  }
  else if (index < 0) {
    slideIndex = slides.length - 1;

  }


  slides.forEach(slide => slide.classList.remove('displaySlide'));
  slides[slideIndex].classList.add('displaySlide');
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}