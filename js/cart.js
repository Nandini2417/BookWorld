let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.onload = function () {
  displayCart();
};

function displayCart() {
  let emptyCart = document.getElementById("emptyCart");
  let cartItems = document.getElementById("cartItems");
  let itemsList = document.getElementById("itemsList");
  let totalPrice = document.getElementById("totalPrice");

  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    cartItems.classList.add("hidden");
  } else {
    emptyCart.classList.add("hidden");
    cartItems.classList.remove("hidden");

    itemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      itemsList.innerHTML += `
        <div class="bg-white p-3 mb-3 rounded-lg border border-[#D8C3AF] flex justify-between items-center">
          
          <div>
            <p class="font-medium text-[#6B3518]">${item.name}</p>
            <p class="text-sm text-[#8A4B2A]">₹${item.price}</p>
          </div>

          <button onclick="removeItem(${index})"
            class="text-xs text-red-500 hover:text-red-700">
            Remove
          </button>

        </div>
      `;
    });

    totalPrice.innerText = total;
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function startShopping() {
  window.location.href = "index.html";
}
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart ✅");
}