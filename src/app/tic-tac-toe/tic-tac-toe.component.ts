import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent {
  board: string[] = Array(9).fill(null); // 3x3 grid
  currentPlayer: string = 'X'; // Start with player 'X'
  winner: string | null = null; // Track the winner
  isDraw: boolean = false; // Track if the game is a draw

  makeMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      this.winner = this.calculateWinner();
      if (!this.winner) {
        this.isDraw = this.board.every((cell) => cell); // Check for draw
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'; // Switch player
      }
    }
  }

  resetGame(): void {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }

  calculateWinner(): string | null {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Vertical
      [0, 4, 8],
      [2, 4, 6], // Diagonal
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a]; // Return the winner
      }
    }

    return null; // No winner
  }
}
