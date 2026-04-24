document.addEventListener("DOMContentLoaded", loadCart);
 
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
 
  const emptyCart = document.getElementById("emptyCart");
  const cartItems = document.getElementById("cartItems");
  const itemsList = document.getElementById("itemsList");
  const totalPrice = document.getElementById("totalPrice");
 
  itemsList.innerHTML = "";
 
  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    cartItems.classList.add("hidden");
    return;
  }
 
  emptyCart.classList.add("hidden");
  cartItems.classList.remove("hidden");
 
  let total = 0;
 
  cart.forEach((item, index) => {
    total += item.price;
 
    const div = document.createElement("div");
    div.className =
      "flex items-center justify-between bg-white p-3 rounded-lg mb-3 shadow";
 
    div.innerHTML = `
<div class="flex items-center gap-3">
<img src="${item.image}" class="w-12 h-16 object-cover rounded" />
<div>
<h3 class="text-sm font-semibold text-[#6B3518]">${item.title}</h3>
<p class="text-xs text-[#8A4B2A]">₹${item.price}</p>
</div>
</div>
 
      <button onclick="removeItem(${index})"
        class="text-red-500 text-sm hover:underline">
        Remove
</button>
    `;
 
    itemsList.appendChild(div);
  });
 
  totalPrice.innerText = total;
}
 
// Remove item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
 
// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}
 
// Optional: Start shopping button
function startShopping() {
  window.location.href = "../index.html";
}