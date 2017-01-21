import React, {Component} from 'react';
import Board from '../Board/Board';
import calculateWinner from './calculate-winner';
import './Game.css';

class Game extends Component {

    constructor() {
        super();
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            moveNum: 0
        };
        this.onSquareClick = this.onSquareClick.bind(this);
    }

    onSquareClick(i) {
        if(this.state.moveNum < this.state.history.length - 1) return;
        const squares = this.state.history[this.state.moveNum].squares.slice();
        if(calculateWinner(squares) || squares[i]) return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: this.state.history.concat([{squares: squares}]),
            xIsNext: !this.state.xIsNext,
            moveNum: +this.state.history.length
        });
    }

    jumpTo(moveNum) {
        this.setState({
            moveNum: moveNum,
            xIsNext: (moveNum % 2) ? false : true
        });
    }

    render() {
        const squares = this.state.history[this.state.moveNum].squares.slice();
        const winner = calculateWinner(squares);

        var status;
        if(winner) status = `${winner} wins!`;
        else status = `Current Turn: ${this.state.xIsNext ? 'X' : 'O'}`;

        const moves = this.state.history.map((move, moveNum) => {
            const desc = moveNum ? 'Move #' + moveNum : 'Game start';
            return (
                <li key={moveNum}>
                    <a href="#" onClick={() => this.jumpTo(moveNum)}>{desc}</a>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={squares} xIsNext={this.state.xIsNext} onSquareClick={this.onSquareClick}/>
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
