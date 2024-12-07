const typingElement = document.getElementById("typing");

// List of titles to display
const titles = [
  "software engineer",
  "developer",
  "programmer",
  "problem solver",
  "tech enthusiast",
];

let charIndex = 0; // Tracks the current character being typed
let wordIndex = 0; // Tracks the current word being displayed
let isDeleting = false; // Whether the text is being deleted

function typeEffect() {
  const currentWord = titles[wordIndex];
  const displayText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typingElement.textContent = displayText;

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % titles.length; // Move to the next word
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();
