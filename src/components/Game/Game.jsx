import React, { useState } from 'react'
import { Board } from '../index'
import { calculateWinner } from '../../helper'

import './Game.css'


const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null))
	const [stepX, setStepX] = useState(true)
	const winner = calculateWinner(board)


	const handleClick = (index) => {
		const boardCopy = [...board]

		if (winner || boardCopy[index]) return
		boardCopy[index] = stepX ? 'X' : '0'
		setBoard(boardCopy)
		setStepX(!stepX)
	}

	const startNewGame = () => {
		return (
			<button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> New game </button>
		)
	}


	return (
		<div className="wrapper">
			{ startNewGame()}
			<Board squears={board} handleClick={handleClick} />
			<p className="game__info" > { winner ? "Победил " + winner : "Сейчас ходит" + (stepX ? " X" : " O")} </p>
		</div>
	)
}


export default Game
