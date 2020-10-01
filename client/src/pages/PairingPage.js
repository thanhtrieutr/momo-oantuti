import React, { Component } from 'react'
import PlayerAvatar from '../components/PairingPage/PlayerAvatar'
import { Button } from 'react-bootstrap'

const dummyData={
	player1: {
		name: "Thanh"
	},
	player2: {
		name: "Thanh1"
	}
}

// const styles = {
// 	playerContainer: {
// 		display: 'flex', 
// 		flexDirection: 'row'
// 	}
// }

export default class PairingPage extends Component{
	constructor(){
		super()
	}

	handleReady() { 
		alert("You are ready")
	}

	render() { 
		return(
			<div>
				<PlayerAvatar player={dummyData.player1}/>
				<span>VS</span>
				<PlayerAvatar player={dummyData.player2}/>
				<Button onClick={this.handleReady}>
					<span>Ready</span>
				</Button>
			</div>
		)
	}
}