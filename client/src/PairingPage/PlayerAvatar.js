import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

const styles = {
	mainContainer: {
		display: 'flex',
		flexDirection: 'column'
	}, 
	avatarContainer: {
		width: 80,
		height: 80
	}
}

export default class PlayerAvatar extends Component{
	constructor(){
		super();
	}

	render() { 
		const { player } = this.props
		console.log("Player: ", player)
		return(
			<div>
				{/* <img src={require(player.avatarUrl)} alt={"player-avatar"}/> */}
				<div>
					<Image src={require("../assets/default-avatar.png")}></Image>
				</div>
				<span>{player.name}</span>
			</div>
		)
	}
}