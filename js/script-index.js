// Toggle Sidebar
const openBtn = document.getElementById("open-btn"); // Declare openBtn once
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

// Open Sidebar
openBtn.addEventListener("click", function () {
    sidebar.classList.add("open");
});

// Close Sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
});

// Scroll event for hiding the button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Check if the scroll position is greater than 50px
        openBtn.style.opacity = '0'; // Hide the button
        openBtn.style.pointerEvents = 'none'; // Disable button interaction
    } else {
        openBtn.style.opacity = '1'; // Show the button
        openBtn.style.pointerEvents = 'auto'; // Enable button interaction
    }
});
