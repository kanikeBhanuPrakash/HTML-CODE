function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Logging in with Email: ${email} and Password: ${password}`);
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up form submitted!');
});
