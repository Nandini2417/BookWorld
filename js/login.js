document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (!email || !password) {
    alert("Please fill all fields!");
    return;
  }

  // Get stored user
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && email === user.email && password === user.password) {
    alert("Login Successful 🎉");

    // Save login state
    localStorage.setItem("isLoggedIn", true);

    // Redirect
    window.location.href = "../index.html";
  } else {
    alert("Invalid Email or Password ❌");
  }
});