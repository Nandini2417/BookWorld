// ==============================
// 📢 BANNER SLIDER
// ==============================

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
let autoSlide;

// FIX: wait for DOM properly
document.addEventListener("DOMContentLoaded", () => {
  showBanner();

  autoSlide = setInterval(nextImage, 3000);

  const bannerSection = document.querySelector("section");

  if (bannerSection) {
    bannerSection.addEventListener("mouseenter", () => {
      clearInterval(autoSlide);
    });

    bannerSection.addEventListener("mouseleave", () => {
      autoSlide = setInterval(nextImage, 3000);
    });
  }
});

function showBanner() {
  const img = document.getElementById("bannerImage");
  const title = document.getElementById("bannerTitle");
  const text = document.getElementById("bannerText");

  if (!img || !title || !text) return;

  img.src = banners[index].img;
  title.innerText = banners[index].title;
  text.innerText = banners[index].text;
}

function nextImage() {
  index = (index + 1) % banners.length;
  showBanner();
}

function prevImage() {
  index = (index - 1 + banners.length) % banners.length;
  showBanner();
}


// ==============================
// 🛒 CART FUNCTION (FIXED)
// ==============================

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart 🛒`);
}