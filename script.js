document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    const sections = document.querySelectorAll('.section');

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add('visible');
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
                section.classList.remove('visible');
            }
        });
    }
  //the first section on page load
    showSection(0);

    // Preloader functionality
    let progress = document.getElementById("progress");
    let preloader = document.getElementById("preloader");
    let load = 0;

    let loadingInterval = setInterval(() => {
        load++;
        progress.innerText = load;

        if (load >= 100) {
            clearInterval(loadingInterval);
            // Fade out the preloader
            preloader.style.opacity = '0';

            setTimeout(() => {
                preloader.style.display = 'none'; // Hide the preloader
            }, 1000);
        }
    }, 20); // Speed of loading

    // Scroll Progress Bar
    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop; // Current scroll position
        const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
        const clientHeight = document.documentElement.clientHeight; // Height of the viewport

        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

        // Update the width of the progress bar
        document.getElementById('progress-bar').style.width = scrollPercent + '%';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", fadeInOnScroll);

    // Run once on page load in case some sections are already in view
    fadeInOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        let nameInput = document.querySelector('input[type="text"]');
        let emailInput = document.querySelector('input[type="email"]');
        let messageInput = document.querySelector('textarea');

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let message = messageInput.value.trim();

        let nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format

        if (!nameRegex.test(name)) {
            alert("❌ Please enter a valid name (letters only).");
            nameInput.focus();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("❌ Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (message.length < 5) {
            alert("❌ Your message must be at least 5 characters long.");
            messageInput.focus();
            return;
        }

        alert("✅ Form submitted successfully!");
        this.submit(); // Submit form if all checks pass
    });
});


