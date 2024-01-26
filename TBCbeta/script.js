function toggleAnswer(index) {
  const answer = document.querySelectorAll(".answer")[index - 1];
  const arrow = document.querySelectorAll(".arrow")[index - 1];

  answer.style.display = answer.style.display === "block" ? "none" : "block";
  arrow.classList.toggle("opened", answer.style.display === "block");
}
