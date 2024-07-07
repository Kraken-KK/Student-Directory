document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    if (username && phone) {
        const user = {
            username: username,
            phone: phone
        };

        // Save the user data to local storage (for demonstration purposes)
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful!');

        // Redirect to the "private" page
        window.location.href = 'private.html';
    } else {
        alert('Please fill in all fields.');
    }
});
