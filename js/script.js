
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous messages and indicators
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('successMessage').textContent = '';
    document.getElementById('emailSuccess').style.display = 'none';
    document.getElementById('passwordSuccess').style.display = 'none';

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    let valid = true;

    // Validate email
    if (!email || !validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailSuccess').style.display = 'none';
        valid = false;
    } else {
        document.getElementById('emailSuccess').style.display = 'inline-block';
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('passwordSuccess').style.display = 'none';
        valid = false;
    } else {
        document.getElementById('passwordSuccess').style.display = 'inline-block';
    }

    // If valid, show success message and redirect
    if (valid) {
        document.getElementById('successMessage').textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'cat.html'; // Redirect to home page
        }, 1000); // Redirect after 1 second
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
