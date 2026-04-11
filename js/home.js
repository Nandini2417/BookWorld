// ==========================
// SEARCH FUNCTION
// ==========================
const searchInput = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// ==========================
// ADD TO CART FUNCTION
// ==========================
let cartCount = 0;

const buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        cartCount++;

        let bookName = this.parentElement.querySelector("h3").innerText;

        alert(bookName + " added to cart 🛒");

        console.log("Cart Items:", cartCount);
    });
});


// ==========================
// SIMPLE WELCOME MESSAGE
// ==========================
window.onload = function () {
    console.log("Welcome to BookWorld 📚");
};


// ==========================
// MENU ACTIVE LINK
// ==========================
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});