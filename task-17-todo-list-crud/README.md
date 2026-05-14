# Task 17: Todo List CRUD

## Introduction

Build a fully functional todo list app with Create, Read, Update, and Delete operations. This task teaches you how to manage arrays of data and dynamically update the DOM.

## Learning Points

**Array Operations**: Master `push()`, `filter()`, `find()`, and `map()` methods for manipulating lists of data.

**Dynamic HTML Creation**: Learn how to create HTML elements with `createElement()` and insert them into the DOM.

**CRUD Operations**: Understand the four fundamental database operations: Create (add), Read (display), Update (mark complete), and Delete (remove).

**Event Listeners**: Attach listeners to dynamically created elements and handle user interactions.

**Data Persistence**: Save and load data from localStorage to persist across page refreshes.

## Why This Matters for SaaS

Every SaaS app manages lists of data. Todo lists, user lists, product lists, etc. Learning CRUD operations is essential for building real applications. This task teaches you the patterns you'll use throughout your career.

## How to Run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## What You'll Learn

- How to add items to an array
- How to filter arrays to remove items
- How to find specific items in an array
- How to dynamically create HTML elements
- How to attach event listeners to dynamic elements
- How to update the DOM when data changes
- How to persist data with localStorage

## Features

- **Add Todos**: Type and click "Add Todo" or press Enter
- **Complete Todos**: Click the checkbox to mark as complete
- **Delete Todos**: Click the delete button to remove a todo
- **Statistics**: See total, completed, and remaining todos
- **Persistence**: Your todos are saved automatically
- **Clear Completed**: Remove all completed todos at once

## Key Code Concepts

```javascript
// Add to array
todos.push(newTodo)

// Filter array
todos = todos.filter(t => t.id !== id)

// Find in array
const todo = todos.find(t => t.id === id)

// Create HTML element
const li = document.createElement('li')

// Save to localStorage
localStorage.setItem('todos', JSON.stringify(todos))

// Load from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || []
```

## Challenge

Try extending this task:
- Add due dates to todos
- Add priority levels (high, medium, low)
- Add categories or tags
- Add a search/filter feature
- Add drag-and-drop to reorder todos
- Add local notifications when a todo is due
