import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  squars: any[];
  xIsNext: boolean;
  winner: string;
  constructor() {}

  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.squars = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? "X" : "O";
  }
  makeMove(idx: number) {
    if (!this.squars[idx]) {
      this.squars.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squars[a] &&
        this.squars[a] === this.squars[b] &&
        this.squars[a] === this.squars[c]
      ) {
        return this.squars[a];
      }
    }
    return null;
  }
}
