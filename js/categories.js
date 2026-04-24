// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add item
function addItem(name, price) {
  const product = {
    name: name,
    price: price,
    quantity: 1
  };

  // Check if item already exists
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}