import React, { Component } from 'react'
import PlayerAvatar from '../components/PairingPage/PlayerAvatar'
import BottomBar from '../components/GameplayPage/BottomBar'

export default class RoundResultPage extends Component{
	constructor(){
		super()
	}

	resultHandle(player1, player2, winnerId){
		if (winnerId === player1.id){ 
			player1.score += 1
		}
		else player2.score += 1
		return(
			<div>
				<span>{player1.score}</span> - <span>{player2.score}</span>
			</div>
		)
	}

	render() { 
		const {player1, player2, winnerId} = this.props
		return(
			<div>
				<PlayerAvatar player={player1}></PlayerAvatar>
				<PlayerAvatar player={player2}></PlayerAvatar>
				<BottomBar content={this.resultHandle(player1, player2, winnerId)}></BottomBar>
			</div>
		)
	}
}