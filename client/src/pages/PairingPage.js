import React, { Component } from 'react'
import PlayerAvatar from '../PairingPage/PlayerAvatar'

const dummyData={
	player1: {
		name: "Thanh", 
		avatarUrl: "../assets/default-avatar.png"
	},
	player2: {
		name: "Thanh1", 
		avatarUrl: "../assets/default-avatar.png"
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

	render() { 
		return(
			<div>
				<PlayerAvatar player={dummyData.player1}/>
				<span>VS</span>
				<PlayerAvatar player={dummyData.player2}/>
			</div>
		)
	}
}