document.addEventListener('DOMContentLoaded', function () {
    // Toggle Sidebar
    const openBtn = document.getElementById("open-btn");
    const sidebar = document.getElementById("sidebar");

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

    // Scroll animation for the open button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            openBtn.style.opacity = '0';
            openBtn.style.pointerEvents = 'none';
        } else {
            openBtn.style.opacity = '1';
            openBtn.style.pointerEvents = 'auto';
        }
    });
});
