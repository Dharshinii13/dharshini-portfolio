const topButton = document.getElementById("topButton");

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Please enter your name");
    }
    else if (emailInput.value.trim() === "") {
        alert("Please enter your email");
    }
    else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        alert("Please enter a valid email");
    }
    else if (messageInput.value.trim() === "") {
        alert("Please enter your message");
    }
    else {
        alert("Your message is ready!");
        contactForm.reset();
    }
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});