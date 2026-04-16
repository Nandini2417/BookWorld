document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return;
  }

  // Show success message
  document.getElementById("successMsg").classList.remove("hidden");

  // Clear form
  document.getElementById("contactForm").reset();

  // Hide message after 3 sec
  setTimeout(() => {
    document.getElementById("successMsg").classList.add("hidden");
  }, 3000);
});