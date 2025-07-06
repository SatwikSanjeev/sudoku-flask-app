# 🧠 Smart Sudoku Solver

A dynamic, responsive web app that solves Sudoku puzzles of sizes **4x4**, **6x6**, and **9x9** using a generalized **recursive backtracking algorithm**.

## 🔗 Live Demo

Check it out live on Render:https://gridiq.onrender.com/

## 📌 Features

- ✅ Supports 4x4, 6x6, and 9x9 Sudoku grids
- 🎯 Solves using a universal backtracking algorithm
- 🧩 Instant UI-based solving with input validations
- ⚙️ Built with Python (Flask) backend & Tailwind CSS frontend
- 💡 Optimized for desktop and mobile screens
- 📤 Deployed via Netlify for frontend & Render for backend *(optional setup)*

## 🧪 Algorithm Overview

The app uses a **recursive backtracking algorithm** which:
- Locates the next empty cell
- Tries all valid numbers based on row, column, and subgrid constraints
- Recursively proceeds with partially filled board
- Backtracks if no valid move is found
- Supports any **NxN** puzzle (where √N is an integer)

Learn more in the `solver.py` file.

## 🧰 Tech Stack

- **Frontend**: HTML, JavaScript, Tailwind CSS
- **Backend**: Python (Flask)
- **Deployment**: Render/Localhost (Backend)

## 🚀 Getting Started Locally
