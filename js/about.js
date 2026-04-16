// Fade-in animation
const elements = document.querySelectorAll('.shadow');

function reveal() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add('fade-in', 'show');
    }
  });
}

// Run on scroll + load
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Console check
console.log("About Page Loaded Successfully 🚀");