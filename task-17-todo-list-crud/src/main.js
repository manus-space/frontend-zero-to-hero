import './style.css'

/**
 * TASK 17: Todo List CRUD
 * 
 * Learning Points:
 * - Array operations (push, filter, map, find)
 * - Dynamic HTML creation (createElement, innerHTML)
 * - CRUD operations (Create, Read, Update, Delete)
 * - Event delegation
 * - localStorage persistence
 */

// ============================================
// 1. DOM ELEMENTS
// ============================================
const todoInput = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
const clearBtn = document.getElementById('clearBtn')
const totalCount = document.getElementById('totalCount')
const completedCount = document.getElementById('completedCount')
const remainingCount = document.getElementById('remainingCount')

// ============================================
// 2. STATE
// ============================================

// Load todos from localStorage or start with empty array
let todos = JSON.parse(localStorage.getItem('todos')) || []

// ============================================
// 3. RENDER FUNCTIONS
// ============================================

/**
 * Render all todos to the page
 * This creates HTML elements for each todo in the array
 */
function renderTodos() {
  // Clear the current list
  todoList.innerHTML = ''

  // Loop through each todo and create an HTML element
  todos.forEach((todo) => {
    // Create a list item element
    const li = document.createElement('li')
    li.className = 'todo-item'
    if (todo.completed) {
      li.classList.add('completed')
    }

    // Create the HTML for this todo item
    li.innerHTML = `
      <div class="todo-content">
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
        <span class="todo-text">${todo.text}</span>
      </div>
      <button class="btn-delete">Delete</button>
    `

    // Add event listeners to the checkbox and delete button
    const checkbox = li.querySelector('.todo-checkbox')
    const deleteBtn = li.querySelector('.btn-delete')

    checkbox.addEventListener('change', () => toggleTodo(todo.id))
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id))

    // Add the item to the list
    todoList.appendChild(li)
  })

  // Update the statistics
  updateStats()
}

/**
 * Update the statistics display
 */
function updateStats() {
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const remaining = total - completed

  totalCount.textContent = total
  completedCount.textContent = completed
  remainingCount.textContent = remaining
}

// ============================================
// 4. CRUD OPERATIONS
// ============================================

/**
 * CREATE: Add a new todo
 */
function addTodo(text) {
  if (!text.trim()) {
    alert('Please enter a todo')
    return
  }

  // Create a new todo object with a unique ID
  const newTodo = {
    id: Date.now(), // Use current timestamp as unique ID
    text: text,
    completed: false
  }

  // Add the new todo to the array
  todos.push(newTodo)

  // Save to localStorage
  saveTodos()

  // Re-render the list
  renderTodos()

  // Clear the input
  todoInput.value = ''
}

/**
 * UPDATE: Toggle a todo's completed status
 */
function toggleTodo(id) {
  // Find the todo with this ID and toggle its completed status
  const todo = todos.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
    renderTodos()
  }
}

/**
 * DELETE: Remove a todo
 */
function deleteTodo(id) {
  // Filter out the todo with this ID
  todos = todos.filter(t => t.id !== id)
  saveTodos()
  renderTodos()
}

/**
 * DELETE ALL: Remove all completed todos
 */
function clearCompleted() {
  // Filter to keep only incomplete todos
  todos = todos.filter(t => !t.completed)
  saveTodos()
  renderTodos()
}

// ============================================
// 5. PERSISTENCE
// ============================================

/**
 * Save todos to localStorage
 */
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// ============================================
// 6. EVENT LISTENERS
// ============================================

// Add todo when button is clicked
addBtn.addEventListener('click', () => {
  addTodo(todoInput.value)
})

// Add todo when Enter key is pressed
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(todoInput.value)
  }
})

// Clear completed todos
clearBtn.addEventListener('click', clearCompleted)

// ============================================
// 7. INITIALIZATION
// ============================================

renderTodos()

console.log('✓ Task 17 loaded: Todo List CRUD')
console.log('Todos:', todos)
