import React, { useState, useEffect, Component } from 'react'
import {socket} from '../socketInstance';

import EasyTimer from "easytimer"

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
			isChosen: -1,
			timer: new EasyTimer(),
			timeValues: ""
		}
		this.choiceHandler = this.choiceHandler.bind(this)
		this.tick = this.tick.bind(this)
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
	
	componentDidMount()
	{
		let { timer } = this.state;
		timer.start({countdown: true, startValues: {seconds: 10}});
		timer.addEventListener('secondsUpdated', this.tick)
		timer.addEventListener('targetAchieved', () => {this.choiceHandler(1)})
	}

	tick(e) {
		let { timer } = this.state;
		const timeValues = timer.getTimeValues().toString();
		console.log("Time Values: ", timeValues)
		this.setState({ timeValues: timeValues });
}

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
					<span>{this.state.timeValues}</span>
				</div>
			</div>
		)
	}
}