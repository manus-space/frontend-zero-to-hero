# Task 16: Theme Toggle + Counter

## Introduction

This is your first Vanilla JavaScript task! You'll build an interactive counter with a theme toggle feature. This task introduces you to fundamental JavaScript concepts like DOM manipulation, event listeners, and localStorage persistence.

## Learning Points

**DOM Manipulation**: Learn how to select HTML elements using `getElementById()` and update their content with `textContent`.

**Event Listeners**: Understand how to attach click handlers to buttons using `addEventListener()`.

**localStorage API**: Learn how to persist data across page refreshes using `localStorage.getItem()` and `localStorage.setItem()`.

**classList Methods**: Master the `classList.add()`, `classList.remove()`, and `classList.toggle()` methods for managing CSS classes dynamically.

**State Management**: Learn how to manage application state in vanilla JavaScript without a framework.

## Why This Matters for SaaS

Every interactive SaaS app needs to respond to user actions. This task teaches you the fundamentals of user interaction. Theme toggling is a common SaaS feature that improves user experience. Persistence with localStorage is essential for remembering user preferences.

## How to Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## What You'll Learn

- How to get HTML elements from the DOM
- How to listen for user clicks
- How to update the page dynamically
- How to save data that persists after refresh
- How to toggle CSS classes for styling changes
- How to manage simple application state

## Features

- **Theme Toggle**: Switch between light and dark modes
- **Counter**: Increment, decrement, and reset a counter
- **Persistence**: Your theme preference and counter value are saved automatically
- **Visual Feedback**: The counter scales up when changed for visual feedback
- **Responsive Design**: Works on mobile and desktop

## Key Code Concepts

```javascript
// Get an element from the DOM
const button = document.getElementById('myButton')

// Listen for clicks
button.addEventListener('click', () => {
  // Do something
})

// Save data to localStorage
localStorage.setItem('key', 'value')

// Get data from localStorage
const value = localStorage.getItem('key')

// Toggle a CSS class
element.classList.toggle('dark-theme')
```

## Challenge

Try extending this task:
- Add a maximum and minimum limit to the counter
- Add keyboard shortcuts (arrow keys to increment/decrement)
- Add more themes (e.g., "blue", "green", "purple")
- Add a counter history that shows the last 5 values
