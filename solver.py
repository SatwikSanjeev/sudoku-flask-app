import math

# Predefined box sizes for each grid size
BOX_SHAPES = {
    4: (2, 2),
    6: (2, 3),
    9: (3, 3),
    16: (4, 4)
}

def is_valid(board, row, col, num):
    N = len(board)
    box_rows, box_cols = BOX_SHAPES.get(N, (int(math.sqrt(N)), int(math.sqrt(N))))

    # Row
    if num in board[row]:
        return False

    # Column
    if num in [board[i][col] for i in range(N)]:
        return False

    # Subgrid
    start_row = (row // box_rows) * box_rows
    start_col = (col // box_cols) * box_cols
    for i in range(start_row, start_row + box_rows):
        for j in range(start_col, start_col + box_cols):
            if board[i][j] == num:
                return False

    return True

def solve(board):
    N = len(board)
    for row in range(N):
        for col in range(N):
            if board[row][col] == 0:
                for num in range(1, N + 1):
                    if is_valid(board, row, col, num):
                        board[row][col] = num
                        if solve(board):
                            return True
                        board[row][col] = 0
                return False
    return True

def solve_sudoku(puzzle):
    board = [row[:] for row in puzzle]
    N = len(board)

    if N not in BOX_SHAPES:
        return None

    if solve(board):
        return board
    return None
