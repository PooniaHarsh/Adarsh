let slideIndex = 0; // Initialize slide index

function showSlides() {
    const slides = document.querySelectorAll('.slide'); // Get all slides
    const totalSlides = slides.length;

    // Calculate the translateX value based on the current slide index
    const offset = -slideIndex * 100; // Move left by 100% of the slide width
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Apply the transform

    // Optionally, you can also set the opacity for a fade effect
    slides.forEach((slide, index) => {
        slide.style.opacity = (index === slideIndex) ? '1' : '0'; // Fade effect
    });
}

function changeSlide(n) {
    slideIndex += n; // Update slide index
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) { slideIndex = 0; } // Loop back to first slide
    if (slideIndex < 0) { slideIndex = slides.length - 1; } // Loop to last slide
    showSlides(); // Show updated slide
}

// Automatic slide change every 3 seconds
setInterval(() => {
    changeSlide(1); // Change to the next slide
}, 3000); // Change interval (3000 ms = 3 seconds)

// Initial call to display the first slide
showSlides();
