document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html';
    } else {
        alert('Passwords do not match. Please try again.');
    }
});