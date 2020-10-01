import React, { useState, useEffect, Component } from 'react'
import { Button } from 'react-bootstrap'
import socketIOClient from 'socket.io-client';
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown'

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
		this.choiceHanlder = this.choiceHanlder.bind(this)
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
	
	choiceHanlder(index){
		// this.setState({
		// 	isChosen: index
		// })
		console.log("Choose: ", index)
	}

	render() { 
		return(
			<div>
				<div>
					<Button onClick={this.choiceHanlder(0)}>
						<span>Keo</span>
					</Button>
					<Button onClick={this.choiceHanlder(1)}>
						<span>Bua</span>
					</Button>
					<Button onClick={this.choiceHanlder(2)}>
						<span>Bao</span>
					</Button>
				</div>
				<div>
					{/* Ti so */}
					<span>2 - 1</span>
					{/* Gio */}
					<span id="counter"></span>
				</div>
			</div>
		)
	}
}