document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("⚠ Please fill all fields!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("⚠ Please enter a valid email!");
            return;
        }

        // Show success message
        successMsg.classList.remove("hidden");

        // Reset form
        form.reset();

        // Hide after 3 seconds
        setTimeout(() => {
            successMsg.classList.add("hidden");
        }, 3000);
    });
});