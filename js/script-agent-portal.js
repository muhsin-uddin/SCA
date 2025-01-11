document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout-btn');
    const logoutNotification = document.getElementById('logout-notification');

    logoutBtn.addEventListener('click', function () {
        // Show logout notification
        logoutNotification.classList.remove('hidden');
        logoutNotification.classList.add('show');

        // Redirect after 3 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    });
});
