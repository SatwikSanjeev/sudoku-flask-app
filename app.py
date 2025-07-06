from flask import Flask, render_template, request, jsonify
from solver import solve_sudoku
import math

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    data = request.get_json()
    puzzle = data.get('puzzle', [])

    if not puzzle or not isinstance(puzzle, list):
        return jsonify({'error': 'Invalid input format'}), 400

    size = len(puzzle)
    if any(len(row) != size for row in puzzle):
        return jsonify({'error': 'Puzzle must be square'}), 400

    solution = solve_sudoku(puzzle)
    if solution:
        return jsonify({'solution': solution})
    else:
        return jsonify({'error': 'Unsolvable puzzle'}), 400

if __name__ == '__main__':
    app.run(debug=True)
