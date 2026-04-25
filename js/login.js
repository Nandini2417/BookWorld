document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("loginForm");

  if (!form) return; // safety check

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // ✅ Validation
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // ✅ Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Enter a valid email!");
      return;
    }

    // ✅ Get stored user safely
    const storedData = localStorage.getItem("user");
    const user = storedData ? JSON.parse(storedData) : null;

    if (!user) {
      alert("No account found! Please register first.");
      return;
    }

    // ✅ Check credentials
    if (email === user.email && password === user.password) {
      alert("Login Successful 🎉");

      // Save login state (string for consistency)
      localStorage.setItem("isLoggedIn", "true");

      // Redirect
      window.location.href = "../index.html";
    } else {
      alert("Invalid Email or Password ❌");
    }
  });

});