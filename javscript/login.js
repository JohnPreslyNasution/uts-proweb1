document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        const loading = document.getElementById('loading');
        loading.classList.add('active');

        setTimeout(function() {
            window.location.href = 'mainmenu.html';
        }, 3000);
    } else {
    alert('Invalid username or password. Please try again.');
    }
});