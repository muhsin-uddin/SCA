// Toggle Sidebar
const openBtn = document.getElementById("open-btn");
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