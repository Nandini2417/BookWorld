document.getElementById("bulkForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let comment = document.getElementById("comment").value;

    if(name === "" || email === "") {
        alert("Name and Email are required!");
        return;
    }

    console.log("Form Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Comment:", comment);

    alert("Form Submitted Successfully!");

    document.getElementById("bulkForm").reset();
});