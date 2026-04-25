document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) return;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password. Please register first.");
      return;
    }

    // Save session
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login successful!");

    // Redirect to home page
    window.location.href = "../index.html";
  });
});
