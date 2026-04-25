document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        // get values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // simple validation
        if (name === "" || email === "" || message === "") {
            alert("⚠ Please fill all fields!");
            return;
        }

        // email format check (basic)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("⚠ Please enter a valid email!");
            return;
        }

        // show success message
        successMsg.classList.remove("hidden");

        // reset form
        form.reset();

        // hide message after 3 seconds
        setTimeout(() => {
            successMsg.classList.add("hidden");
        }, 3000);
    });
});