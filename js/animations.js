
// Animation functions for the Question Maker website

// Generate floating question marks for the hero section
document.addEventListener('DOMContentLoaded', function() {
  const questionMarksContainer = document.getElementById('question-marks-container');
  if (!questionMarksContainer) return;
  
  // Create question marks
  for (let i = 0; i < 15; i++) {
    createQuestionMark(questionMarksContainer);
  }
});

// Function to create a floating question mark
function createQuestionMark(container) {
  const questionMark = document.createElement('div');
  questionMark.className = 'question-mark';
  questionMark.innerHTML = '<i class="fas fa-question-circle"></i>';
  
  // Random positioning
  const randomX = Math.random() * 100 - 50; // Range: -50 to 50
  const randomStartY = Math.random() * 200 - 100; // Range: -100 to 100
  const randomDuration = 15 + Math.random() * 20; // Range: 15-35s
  const randomScale = 0.3 + Math.random() * 1.2; // Range: 0.3-1.5
  const randomDelay = Math.random() * 8; // Range: 0-8s
  const randomOpacity = 0.1 + Math.random() * 0.3; // Range: 0.1-0.4
  
  // Apply styles
  questionMark.style.left = '0';
  questionMark.style.top = `${50 + randomStartY}px`;
  questionMark.style.fontSize = `${24 + (randomScale * 10)}px`;
  questionMark.style.opacity = randomOpacity;
  questionMark.style.animationDuration = `${randomDuration}s`;
  questionMark.style.animationDelay = `${randomDelay}s`;
  
  // Add to container
  container.appendChild(questionMark);
}

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Elements to animate on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Initial check for elements in viewport
  animateElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('animated');
    }
  });
  
  // Add scroll event listener
  window.addEventListener('scroll', function() {
    animateElements.forEach(element => {
      if (isElementInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
      }
    });
  });
});

// Parallax effect for hero section
document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;
  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < window.innerHeight) {
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
  });
});
