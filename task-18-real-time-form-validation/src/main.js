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
