// script-services.js

document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('open-btn');
    const sidebar = document.getElementById('sidebar');
    const serviceCards = document.querySelectorAll('.service-card');
    const heroText = document.querySelector('.hero');
    const headerElements = document.querySelectorAll('h1, h2');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Open Sidebar
    openBtn.addEventListener("click", function () {
        sidebar.classList.add("open");
        openBtn.style.display = 'none';
    });

    // Close Sidebar by clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
            sidebar.classList.remove("open");
            openBtn.style.display = 'block';
        }
    });


    // Service Cards Hover Effect
    serviceCards.forEach((card) => {
        card.addEventListener('mouseenter', function () {
            card.classList.add('active');
        });

        card.addEventListener('mouseleave', function () {
            card.classList.remove('active');
        });
    });

    // Hero Section Animation
    setTimeout(() => {
        heroText.classList.add('animate');
    }, 500);

    // Scroll to Top Button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer for Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    headerElements.forEach((el) => observer.observe(el));
    serviceCards.forEach((card) => observer.observe(card));
});