// Search functionality for bookstore website

let cart = [];

// Add item to card
function addItem(name, price) {
  //find()
  let item = cart.find((i) => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name: name, price: price, qty: 1 });
  }

  showItem();
}

//Display Cart Item
function showItem() {
  let list = document.getElementById("cart");

  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    list.innerHTML += `
        <li>
        ${item.name} (Rs. ${item.price} * ${item.qty})

        <button onclick = "inc(${index})"> ➕ </button>
        <button onclick = "dec(${index})"> ➖ </button>
        <button onclick = "dlt(${index})"> ✖️ </button>
        </li>`;
  });

  document.getElementById("total").innerText = "Total: ₹ " + total + "/-";
}

function inc(i) {
  cart[i].qty++;
  showItem();
}

function dec(i) {
  if (cart[i].qty > 1) {
    cart[i].qty--;
  }
  showItem();
}

function dlt(i) {
  cart.splice(i, 1);
  showItem();
}

// Product card hover + Add to Cart functionality

// Select all product cards
const productCards = document.querySelectorAll(".product-card");

// Hover effect
productCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s ease";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

// Add to Cart button functionality
const cartButtons = document.querySelectorAll(".add-to-cart");
let cartCount = 0;

// Cart count display (if you have cart icon)
const cartCountDisplay = document.getElementById("cart-count");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;

    // Update cart count
    if (cartCountDisplay) {
      cartCountDisplay.textContent = cartCount;
    }

    // Button feedback
    button.innerText = "Added ✔";
    button.style.backgroundColor = "#4CAF50";

    setTimeout(() => {
      button.innerText = "Add to Cart";
      button.style.backgroundColor = "";
    }, 1500);
  });
});
