// ===== Banner Data (Fixed + Improved) =====
const banners = [
  {
    img: "./assets/banner1.jpg",
    title: "📚 Welcome to BookWorld",
    text: "Explore thousands of books & start your reading journey today!"
  },
  {
    img: "./assets/banner2.jpg",
    title: "🚀 TRENDING BESTSELLERS",
    text: "Discover what everyone is reading right now across all genres"
  },
  {
    img: "./assets/banner3.jpg",
    title: "📖 NEW ARRIVALS",
    text: "Fresh collection of trending books added every week!"
  },
  {
    img: "./assets/banner4.jpg",
    title: "🔥 MEGA OFFER IS LIVE",
    text: "Flat 40% OFF on all books + Extra discount on your first order 🎉"
  }
];

let index = 0;

// ===== Show Banner =====
function showBanner() {
  document.getElementById("bannerImage").src = banners[index].img;
  document.getElementById("bannerTitle").innerText = banners[index].title;
  document.getElementById("bannerText").innerText = banners[index].text;
}

// ===== Next =====
function nextImage() {
  index = (index + 1) % banners.length;
  showBanner();
}

// ===== Prev =====
function prevImage() {
  index = (index - 1 + banners.length) % banners.length;
  showBanner();
}

// ===== Auto Slide =====
let autoSlide = setInterval(nextImage, 3000);

// ===== Pause on Hover =====
const bannerSection = document.querySelector("section");

if (bannerSection) {
  bannerSection.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  bannerSection.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextImage, 3000);
  });
}

// ===== First Load =====
window.onload = showBanner;


// ==============================
// 🛒 ADD TO CART FUNCTION
// ==============================

function addItem(name, price) {

  // get existing cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // check if product already exists
  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1; // increase quantity
  } else {
    cart.push({
      name: name,
      price: price,
      qty: 1
    });
  }

  // save back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // alert
  alert(name + " added to cart 🛒");
}