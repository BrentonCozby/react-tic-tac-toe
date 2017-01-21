import React from 'react';
import './Square.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.value}
        </button>
    );
}

export default Square;
