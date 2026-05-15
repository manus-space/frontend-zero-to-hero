/**
 * calculator.js - Pure calculation functions
 * 
 * This module demonstrates ES6 module pattern.
 * Each function is a pure function with no side effects.
 */

export function add(a, b) {
  return a + b
}

export function subtract(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

export function percentage(value, percent) {
  return (value * percent) / 100
}
