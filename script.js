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

    // Example usage: show the first section on page load
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

            // Wait for the fade-out transition to complete before hiding the preloader
            setTimeout(() => {
                preloader.style.display = 'none'; // Hide the preloader
            }, 1000); // Match this duration with the CSS transition duration
        }
    }, 20); // Speed of loading (Adjust if needed)

    // Scroll Progress Bar
    window.addEventListener('scroll', function () {
        const scrollTop = document.documentElement.scrollTop; // Current scroll position
        const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
        const clientHeight = document.documentElement.clientHeight; // Height of the viewport

        // Calculate the scroll percentage
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

            if (sectionTop < windowHeight - 100) { // Adjust threshold if needed
                section.classList.add("visible");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", fadeInOnScroll);

    // Run once on page load in case some sections are already in view
    fadeInOnScroll();
});

