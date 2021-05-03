import React from 'react'
import { Square } from '../index'
import './Board.css'


const Board = ({ squears, handleClick }) => {
	return (
		<div className="board">
			{ squears.map( (item, index )=> (
				<Square key={ index }  value={ item } onClick = { ()=>handleClick(index)} />
			))}
		</div>
	)
} 

export default Board
