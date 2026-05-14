import './style.css'

/**
 * TASK 16: Theme Toggle + Counter
 * 
 * Learning Points:
 * - DOM manipulation (getElementById, querySelector)
 * - Event listeners (addEventListener)
 * - localStorage API (getItem, setItem)
 * - classList methods (add, remove, toggle)
 * - State management in vanilla JS
 */

// ============================================
// 1. DOM ELEMENTS - Get references to HTML elements
// ============================================
const themeToggleBtn = document.getElementById('themeToggle')
const incrementBtn = document.getElementById('incrementBtn')
const decrementBtn = document.getElementById('decrementBtn')
const resetBtn = document.getElementById('resetBtn')
const counterValue = document.getElementById('counterValue')
const counterStatus = document.getElementById('counterStatus')
const themeStatus = document.getElementById('themeStatus')

// ============================================
// 2. STATE MANAGEMENT - Initialize state from localStorage
// ============================================

// Get counter value from localStorage, default to 0 if not found
let counter = parseInt(localStorage.getItem('counter')) || 0

// Get theme preference from localStorage, default to 'light' if not found
let theme = localStorage.getItem('theme') || 'light'

// ============================================
// 3. INITIALIZATION - Set up the app on page load
// ============================================

function initializeApp() {
  // Apply the saved theme to the body element
  if (theme === 'dark') {
    document.body.classList.add('dark-theme')
    themeToggleBtn.textContent = '☀️ Light Mode'
    themeStatus.textContent = 'Dark'
  } else {
    document.body.classList.remove('dark-theme')
    themeToggleBtn.textContent = '🌙 Dark Mode'
    themeStatus.textContent = 'Light'
  }

  // Display the saved counter value
  updateCounterDisplay()
}

// ============================================
// 4. COUNTER FUNCTIONS - Handle counter logic
// ============================================

/**
 * Update the counter display on the page
 * This function is called whenever the counter changes
 */
function updateCounterDisplay() {
  counterValue.textContent = counter
  counterStatus.textContent = counter

  // Add a visual effect when counter changes
  counterValue.style.transform = 'scale(1.1)'
  setTimeout(() => {
    counterValue.style.transform = 'scale(1)'
  }, 100)
}

/**
 * Increment the counter by 1
 */
function incrementCounter() {
  counter++
  localStorage.setItem('counter', counter)
  updateCounterDisplay()
}

/**
 * Decrement the counter by 1
 */
function decrementCounter() {
  counter--
  localStorage.setItem('counter', counter)
  updateCounterDisplay()
}

/**
 * Reset the counter to 0
 */
function resetCounter() {
  counter = 0
  localStorage.setItem('counter', counter)
  updateCounterDisplay()
}

// ============================================
// 5. THEME FUNCTIONS - Handle theme toggling
// ============================================

/**
 * Toggle between light and dark theme
 * This demonstrates:
 * - classList.toggle() to add/remove classes
 * - localStorage to persist user preference
 * - Updating UI elements based on state
 */
function toggleTheme() {
  // Toggle the dark-theme class on the body element
  document.body.classList.toggle('dark-theme')

  // Update the theme variable
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark'
    themeToggleBtn.textContent = '☀️ Light Mode'
    themeStatus.textContent = 'Dark'
  } else {
    theme = 'light'
    themeToggleBtn.textContent = '🌙 Dark Mode'
    themeStatus.textContent = 'Light'
  }

  // Save the theme preference to localStorage
  localStorage.setItem('theme', theme)
}

// ============================================
// 6. EVENT LISTENERS - Attach click handlers
// ============================================

// Theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme)

// Counter buttons
incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)
resetBtn.addEventListener('click', resetCounter)

// ============================================
// 7. RUN INITIALIZATION
// ============================================

initializeApp()

console.log('✓ Task 16 loaded: Theme Toggle + Counter')
console.log('Counter:', counter)
console.log('Theme:', theme)
