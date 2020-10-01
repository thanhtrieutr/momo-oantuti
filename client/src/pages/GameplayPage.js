import React, { useState, useEffect, Component } from 'react'
import {socket} from '../socketInstance'
// const styles = {
// 	playerContainer: {
// 		display: 'flex', 
// 		flexDirection: 'row'
// 	}
// }

export default class GameplayPage extends Component{
	constructor(){
		super()
		this.state = {
			isChosen: -1
		}
		this.choiceHandler = this.choiceHandler.bind(this)
	}

	componentDidMount(){
		// if (this.state.isChosen !== -1){
		// 	const {player} = this.props
		// 	const data = {
		// 		playerId: player.id,
		// 		choice: this.state.isChosen
		// 	}
		// 	const socket = socketIOClient(ENDPOINT)
		// 	socket.emit('player-choice', JSON.stringify(data))
		// 	socket.on('round-result', (data) => { 
		// 		console.log("Round result: ", data)
		// 	})
		// }
		// this.renderCounter()
	}

	// renderCounter(){
	// 	ReactDOM.render(
	// 		<Countdown date={Date.now() + 5000}/>,
	// 		document.getElementById("counter")
	// 	)
	// }

	
	choiceHandler(value){
		// const socket = JSON.parse(localStorage.getItem("socket"))
		// console.log(localStorage.getItem("socket"))

		console.log(localStorage.getItem("UserInfo"))
		const playerMessage = {
			roomId: JSON.parse(localStorage.getItem("MatchInfo")).id,
			playerId: JSON.parse(localStorage.getItem("UserInfo")).idUser,
			action: value
		}
		socket.emit('ra_nuoc_di', playerMessage)
		socket.on('round_result', (data) => {
			console.log(data)
			// { ti_so: { player_1: 2, player_2: 0 }}
			localStorage.setItem("ti_so", JSON.stringify(data))
			window.location.href = "http://localhost:3001/result"
		})
	}

	render() { 
		return(
			<div>
				<div>
					<button onClick={() => this.choiceHandler(3)}>
						<span>Keo</span>
					</button>
					<button onClick={() => this.choiceHandler(2)}>
						<span>Bua</span>
					</button>
					<button onClick={() => this.choiceHandler(1)}>
						<span>Bao</span>
					</button>
				</div>
				<div>
					{/* Ti so */}
					
					{/* Gio */}
					<span id="counter"></span>
				</div>
			</div>
		)
	}
}