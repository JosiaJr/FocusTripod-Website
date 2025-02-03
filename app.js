const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//picture shuffling
document.querySelectorAll(".portfolio__card").forEach(card => {
    let imgElement = card.querySelector(".portfolio__image");
    let images = card.dataset.images.split(",");
    let index = 0;
    let interval;

    function changeImage() {
        imgElement.style.opacity = 0; // Fade out immediately

        setTimeout(() => {
            index = (index + 1) % images.length; // Loop through images
            imgElement.src = images[index]; // Change image
            imgElement.style.opacity = 1; // Fade in
        }, 500); // Wait for fade-out to complete
    }

    card.addEventListener("mouseenter", () => {
        changeImage(); // Start fade effect immediately on hover

        interval = setInterval(() => {
            changeImage(); // Continue loop every 2 seconds
        }, 2000);
    });

    card.addEventListener("mouseleave", () => {
        clearInterval(interval);
        imgElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            imgElement.src = images[0]; // Reset to first image
            imgElement.style.opacity = 1; // Fade in
        }, 500);
    });
});
