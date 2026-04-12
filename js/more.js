// Fade-in animation
const items = document.querySelectorAll('.card');

function showCards() {
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < triggerBottom) {
      card.classList.add('fade-in', 'show');
    }
  });
}

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);

// Active bottom nav highlight
const navLinks = document.querySelectorAll('.fixed a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('text-[#6B3518]'));
    link.classList.add('text-[#6B3518]');
  });
});

// Console check
console.log("More Page Loaded 🚀");