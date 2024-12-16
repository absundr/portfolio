const typingElement = document.getElementById("typing");

// List of titles to display
const titles = ["software engineer", "programmer", "developer"];

let charIndex = 0;
let wordIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = titles[wordIndex];
  const displayText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typingElement.textContent = displayText;

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % titles.length;
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
