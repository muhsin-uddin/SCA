// Get the login form and add an event listener for form submission
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve values from the input fields
    const agentId = document.getElementById('agent-id').value;
    const agentPassword = document.getElementById('agent-password').value;
    const agencyPassword = document.getElementById('agency-password').value;

    // You can add your own login logic here
    // For example, checking if the credentials match a predefined set

    if (agentId && agentPassword && agencyPassword) {
        alert("Login Successful!");
        // Redirect to another page (e.g., dashboard or agent portal)
        window.location.href = "dashboard.html"; // Replace with your desired page
    } else {
        alert("Please fill in all fields correctly.");
    }
});
