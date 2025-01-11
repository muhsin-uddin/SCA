document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const agentId = document.getElementById('agent-id').value.trim();
    const agentPassword = document.getElementById('agent-password').value.trim();
    const agencyPassword = document.getElementById('agency-password').value.trim();

    // Validate input and show notification
    if (agentId && agentPassword && agencyPassword) {
        showNotification("Login Successful! Redirecting...", "success");
        setTimeout(() => {
            window.location.href = "agent-portal.html";
        }, 2000);
    } else {
        showNotification("Please fill in all fields.", "error");
    }
});

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}
