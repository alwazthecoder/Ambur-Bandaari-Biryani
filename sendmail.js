// sendMail.js

(function () {
  emailjs.init("TDA7PlliKlbMHkesD"); // Replace with your actual Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic field validations
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone_number").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (message.length < 10) {
      alert("Message should be at least 10 characters.");
      return;
    }

    // Send the form if all validations pass
    emailjs.sendForm("service_adi1688", "template_ufqbhse", form).then(
      function (response) {
        alert("✅ Message sent successfully!");
        form.reset();
      },
      function (error) {
        console.error("❌ Failed to send message:", error);
        alert("⚠️ Message failed to send. Please try again.");
      }
    );
  });

  function validateEmail(email) {
    // Simple regex for email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    // Accepts 10-digit numbers only
    const re = /^\d{10}$/;
    return re.test(phone);
  }
});




// Hamburger
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinksContainer = document.querySelector('.nav-links'); // renamed

// Toggle the hamburger menu when the button is clicked
hamburgerBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('show');
});

// Close the menu when any navigation link is clicked
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('show');
  });
});



// active state
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth active toggle on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });




  