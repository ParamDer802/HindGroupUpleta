// Hamburger Menu Toggle for Mobile View
const menuButton = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Product Filtering (same as before)
function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-item');
    allProducts.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Smooth Scrolling for Navigation (same as before)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    // Basic validation for empty fields
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert("All fields are required!");
        return;
    }

    // If validation passes
    alert("Your message has been sent successfully!");
    contactForm.reset();  // Reset the form after submission
});

// Scroll Animation for Elements
const elements = document.querySelectorAll('.animate-on-scroll');
window.addEventListener('scroll', () => {
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
});
