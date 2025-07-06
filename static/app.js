function generateGrid(containerId, size) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 3rem)`;
  container.style.gap = '0.4rem';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const input = document.createElement('input');
      input.type = 'number';
      input.min = 1;
      input.max = size;
      input.id = `${containerId}-cell-${i}-${j}`;
      input.className = 'w-12 h-12 border text-center text-lg bg-gray-100 rounded';
      container.appendChild(input);
    }
  }
}

function getGrid(containerId, size) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      let val = document.getElementById(`${containerId}-cell-${i}-${j}`).value;
      row.push(val === '' ? 0 : parseInt(val));
    }
    grid.push(row);
  }
  return grid;
}

function displaySolution(containerId, solution, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      document.getElementById(`${containerId}-cell-${i}-${j}`).value = solution[i][j];
    }
  }
}

function clearGrid(containerId, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      document.getElementById(`${containerId}-cell-${i}-${j}`).value = '';
    }
  }
  document.getElementById("result").textContent = '';
}

async function solveSudokuGeneric(containerId, size) {
  const puzzle = getGrid(containerId, size);
  const res = await fetch('/solve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ puzzle }),
  });
  const data = await res.json();
  if (data.solution) {
    displaySolution(containerId, data.solution, size);
  } else {
    document.getElementById("result").textContent = "Unsolvable puzzle.";
  }
}

function solveSudoku4() { solveSudokuGeneric('grid-4', 4); }
function solveSudoku6() { solveSudokuGeneric('grid-6', 6); }
function solveSudoku9() { solveSudokuGeneric('grid-9', 9); }

function clearGrid4() { clearGrid('grid-4', 4); }
function clearGrid6() { clearGrid('grid-6', 6); }
function clearGrid9() { clearGrid('grid-9', 9); }

window.onload = function () {
  generateGrid('grid-4', 4);
  generateGrid('grid-6', 6);
  generateGrid('grid-9', 9);
};
