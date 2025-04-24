

const loginForm = document.getElementById('loginForm'); 
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Brute force username validation
        let isUsernameValid = true;
        if (username.length <4) {
            isUsernameValid = false;
        }
        for (let i = 0; i < username.length; i++) {
            const charCode = username.charCodeAt(i);
            if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                isUsernameValid = false;
                break;
            }
        }
        if (!isUsernameValid) {
            alert('Username should only contain alphabets and be greater than or equal to 4 characters.');
            return;
        }

        // Brute force password validation
        let hasLowercase = false;
        let hasUppercase = false;
        let hasDigit = false;
        let hasSpecialChar = false;
        const specialChars = "@$!%*?&";
        if (password.length < 8) {
            alert('Password should be more than 8 characters.');
            return;
        }
        for (let i = 0; i < password.length; i++) {
            const charCode = password.charCodeAt(i);
            if (charCode >= 97 && charCode <= 122) {
                hasLowercase = true;
            } else if (charCode >= 65 && charCode <= 90) {
                hasUppercase = true;
            } else if (charCode >= 48 && charCode <= 57) {
                hasDigit = true;
            } else if (specialChars.indexOf(password[i]) !== -1) {
                hasSpecialChar = true;
            }
        }
        if (!hasLowercase || !hasUppercase || !hasDigit || !hasSpecialChar) {
            alert('Password should contain at least one digit, one alphabet, one uppercase letter, and one special symbol.');
            return;
        }

        const storedUsername = "rishi";
        const storedPassword = "@RG172004rg";

        if (username === storedUsername && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'register.html'; 
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    
}

document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailAlert = document.getElementById('emailAlert');
    if (!email.endsWith('@gmail.com')) {
        emailAlert.textContent = 'Email should contain @gmail.com.';
    } else {
        emailAlert.textContent = '';
    }
});

document.getElementById('mobileno').addEventListener('input', function() {
    const mobileno = this.value;
    const mobileAlert = document.getElementById('mobileAlert');
    if (mobileno.length !== 10 || isNaN(mobileno)) {
        mobileAlert.textContent = 'Mobile number should be 10 digits.';
    } else {
        mobileAlert.textContent = '';
    }
});

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobileno = document.getElementById('mobileno').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value).join(', ');

    const emailAlert = document.getElementById('emailAlert');
    const mobileAlert = document.getElementById('mobileAlert');

    let isValid = true;

    // Email validation
    if (!email.endsWith('@gmail.com')) {
        emailAlert.textContent = 'Email should contain @gmail.com.';
        isValid = false;
    } else {
        emailAlert.textContent = '';
    }

    // Mobile number validation
    if (mobileno.length !== 10 || isNaN(mobileno)) {
        mobileAlert.textContent = 'Mobile number should be 10 digits.';
        isValid = false;
    } else {
        mobileAlert.textContent = '';
    }

    if (isValid) {
        const userData = {
            name,
            email,
            mobileno,
            address,
            city,
            gender,
            hobbies
        };

        
        
            addUserToTable(userData);
            showTable();
        
    }
    return isValid;
}

function addUserToTable(userData) {
    const tableBody = document.getElementById('userTable').querySelector('tbody');
    const row = document.createElement('tr');

    Object.values(userData).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
}

function showTable() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('tableContainer').style.display = 'block';
}