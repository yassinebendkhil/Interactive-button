// Get references to the elements
const animatedBox = document.getElementById('animatedBox');
const animateButton = document.getElementById('animateButton');

// Add event listener to the button
animateButton.addEventListener('click', () => {
  // Toggle between animations
  if (animatedBox.classList.contains('spin')) {
    animatedBox.classList.remove('spin');
    animatedBox.classList.add('bounce');
  } else if (animatedBox.classList.contains('bounce')) {
    animatedBox.classList.remove('bounce');
  } else {
    animatedBox.classList.add('spin');
  }
});