#!/bin/bash

# Task 18: Real-time Form Validation
cat > task-18-real-time-form-validation/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 18: Real-time Form Validation</title>
    <link rel="stylesheet" href="/src/style.css">
</head>
<body>
    <div class="container">
        <h1>📋 Form Validation</h1>
        <p>Fill out the form with real-time validation feedback</p>

        <form id="validationForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="At least 3 characters">
                <span class="error" id="usernameError"></span>
                <span class="success" id="usernameSuccess"></span>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Valid email address">
                <span class="error" id="emailError"></span>
                <span class="success" id="emailSuccess"></span>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="At least 8 characters">
                <span class="error" id="passwordError"></span>
                <span class="success" id="passwordSuccess"></span>
            </div>

            <div class="form-group">
                <label for="confirm">Confirm Password</label>
                <input type="password" id="confirm" placeholder="Must match password">
                <span class="error" id="confirmError"></span>
                <span class="success" id="confirmSuccess"></span>
            </div>

            <button type="submit" class="btn btn-primary" id="submitBtn" disabled>Submit</button>
        </form>

        <div class="validation-status">
            <p><strong>Form Status:</strong> <span id="formStatus">Invalid</span></p>
        </div>
    </div>

    <script type="module" src="/src/main.js"></script>
</body>
</html>
EOF

cat > task-18-real-time-form-validation/src/main.js << 'EOF'
import './style.css'

const form = document.getElementById('validationForm')
const usernameInput = document.getElementById('username')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const confirmInput = document.getElementById('confirm')
const submitBtn = document.getElementById('submitBtn')
const formStatus = document.getElementById('formStatus')

let formValid = {
  username: false,
  email: false,
  password: false,
  confirm: false
}

function validateUsername(value) {
  const error = document.getElementById('usernameError')
  const success = document.getElementById('usernameSuccess')
  
  if (value.length < 3) {
    error.textContent = 'Username must be at least 3 characters'
    success.textContent = ''
    formValid.username = false
  } else {
    error.textContent = ''
    success.textContent = '✓ Valid username'
    formValid.username = true
  }
  updateFormStatus()
}

function validateEmail(value) {
  const error = document.getElementById('emailError')
  const success = document.getElementById('emailSuccess')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!emailRegex.test(value)) {
    error.textContent = 'Please enter a valid email'
    success.textContent = ''
    formValid.email = false
  } else {
    error.textContent = ''
    success.textContent = '✓ Valid email'
    formValid.email = true
  }
  updateFormStatus()
}

function validatePassword(value) {
  const error = document.getElementById('passwordError')
  const success = document.getElementById('passwordSuccess')
  
  if (value.length < 8) {
    error.textContent = 'Password must be at least 8 characters'
    success.textContent = ''
    formValid.password = false
  } else {
    error.textContent = ''
    success.textContent = '✓ Strong password'
    formValid.password = true
  }
  updateFormStatus()
  validateConfirm(confirmInput.value)
}

function validateConfirm(value) {
  const error = document.getElementById('confirmError')
  const success = document.getElementById('confirmSuccess')
  
  if (value !== passwordInput.value || value === '') {
    error.textContent = 'Passwords do not match'
    success.textContent = ''
    formValid.confirm = false
  } else {
    error.textContent = ''
    success.textContent = '✓ Passwords match'
    formValid.confirm = true
  }
  updateFormStatus()
}

function updateFormStatus() {
  const isValid = Object.values(formValid).every(v => v === true)
  submitBtn.disabled = !isValid
  formStatus.textContent = isValid ? 'Valid ✓' : 'Invalid'
  formStatus.style.color = isValid ? '#10b981' : '#ef4444'
}

usernameInput.addEventListener('input', (e) => validateUsername(e.target.value))
emailInput.addEventListener('input', (e) => validateEmail(e.target.value))
passwordInput.addEventListener('input', (e) => validatePassword(e.target.value))
confirmInput.addEventListener('input', (e) => validateConfirm(e.target.value))

form.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Form submitted successfully!')
})

console.log('✓ Task 18 loaded: Real-time Form Validation')
EOF

cat >> task-18-real-time-form-validation/src/style.css << 'EOF'

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.error {
  display: block;
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
}

.success {
  display: block;
  color: #10b981;
  font-size: 12px;
  margin-top: 4px;
}

.validation-status {
  margin-top: 30px;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 6px;
  text-align: center;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
EOF

cat > task-18-real-time-form-validation/README.md << 'EOF'
# Task 18: Real-time Form Validation

Learn how to validate form inputs in real-time and provide instant feedback to users.

## Learning Points

- Input event listeners for real-time validation
- Regular expressions for email validation
- Custom validation logic
- Conditional CSS classes for visual feedback
- Form state management

## Why This Matters

Form validation is critical for SaaS applications. Users expect immediate feedback when they make mistakes. This task teaches you how to create a smooth, user-friendly form experience.

## Features

- Real-time validation as user types
- Visual feedback (red for errors, green for success)
- Submit button disabled until form is valid
- Multiple validation rules
- Password confirmation matching
EOF

echo "✓ Task 18 created"
