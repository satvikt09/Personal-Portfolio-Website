document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");
});
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

document.addEventListener("DOMContentLoaded", function () {
    let progress = document.getElementById("progress");
    let preloader = document.getElementById("preloader");
    let load = 0;

    let loadingInterval = setInterval(() => {
        load++;
        progress.innerText = load;

        if (load >= 100) {
            clearInterval(loadingInterval);
            preloader.classList.add("hidden"); // Hides loader smoothly
        }
    }, 20); // Speed of loading (Adjust if needed)
});

