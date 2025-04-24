// Signup functionality

const signupForm = document.getElementById('signupForm'); 
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usernameRegex = /^[a-zA-Z]{1,10}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!usernameRegex.test(username)) {
            alert('Username should only contain alphabets and be less than or equal to 10 characters.');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('Password should be more than 8 characters and contain at least one digit, one alphabet, one uppercase letter, and one special symbol.');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('userPassword', password);

        alert('Signup successful!');
        
        window.location.href = 'register.html';
    });
}

const loginForm = document.getElementById('loginForm'); 
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('userPassword');

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            
            window.location.href = 'index.html'; 
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
}
