document.addEventListener('DOMContentLoaded', function () {
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

    // Form Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('All fields are required.');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Enter a valid email address.');
                return;
            }

            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
});
