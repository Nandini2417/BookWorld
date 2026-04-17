// Page loaded message
window.onload = function () {
    console.log("Return Policy Page Loaded Successfully");
};


// Navbar active link highlight
let links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.style.color = "white");
        this.style.color = "#F39C4A";
    });
});


// Smooth scroll effect (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
    });
});