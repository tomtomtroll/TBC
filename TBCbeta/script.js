function toggleAnswer(index) {
  const answer = document.querySelectorAll(".answer")[index - 1];
  const arrow = document.querySelectorAll(".arrow")[index - 1];

  answer.style.display = answer.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("opened", answer.style.display === "block");
}

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

showSlide(currentIndex);
const intervalId = setInterval(() => {
  nextSlide();
}, 5000);
