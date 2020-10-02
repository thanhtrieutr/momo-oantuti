import React, { Component } from 'react';
import EasyTimer from "easytimer"


export default class FinalResultPage extends Component{
		constructor(){
			super()
			this.state = {
				timer: new EasyTimer(),
				timeValues: ""
			}
			this.tick = this.tick.bind(this)
		}

		componentDidMount()
		{
			let { timer } = this.state;
			timer.start({countdown: true, startValues: {seconds: 10}});
			if (JSON.parse(localStorage.getItem("ti_so")).roundResult.numTurn !== 3){
				timer.addEventListener('secondsUpdated', this.tick)
				timer.addEventListener('targetAchieved', () => {window.location.href="http://localhost:3001/gameplay"})
			}			
		}

		tick(e) {
			let { timer } = this.state;
			const timeValues = timer.getTimeValues().toString();
			console.log("Time Values: ", timeValues)
			this.setState({ timeValues: timeValues });
		}

		getLabel = (x) => {
			if (x === 1) return("Bao")
			else if (x === 2) return ("Bua")
			else if (x === 3) return ("Keo")
		}

		render (){
			const {point, player1_action, player2_action, numTurn, winner} = JSON.parse(localStorage.getItem("ti_so")).roundResult
			console.log("Point:" ,point)
			const userInfo = JSON.parse(localStorage.getItem("UserInfo"))
			const matchInfo  = JSON.parse(localStorage.getItem("MatchInfo"))
			return(
        <div style={{alignContent: 'center', alignItems:'center'}}>
						<h4>
							PLAYER 1 - PLAYER 2
						</h4>

						{userInfo.idUser === matchInfo.playerID_1.idUser ? (
							<h3>
								<span className="text-primary" style={{fontWeight: 'bold'}}>{matchInfo.playerID_1.name}</span>
								- 
								<span className="text-secondary">{matchInfo.playerID_2.name}</span>
						</h3>
						) :
						(
						<h3>
							<span className="text-secondary" >{matchInfo.playerID_1.name}</span>
							- 
							<span className="text-primary" style={{fontWeight: 'bold'}}>{matchInfo.playerID_2.name}</span>
						</h3>
						)}
						<h5>
							<span>{this.getLabel(player1_action)}</span>
							- 
							<span>{this.getLabel(player2_action)}</span>
						</h5>
						
						<h2>
							<span>{point[matchInfo.playerID_1.idUser] || 0}</span>
							<span> - </span>
							<span>{point[matchInfo.playerID_2.idUser] || 0}</span>
						</h2>
						{numTurn === 3 && winner!==0 ? 
						(
							<h3>
							winner: <span className="text-danger">
								{winner === 1 ? matchInfo.playerID_1.name : matchInfo.playerID_2.name}
								</span>	
							</h3>
						) : (
							null
						)}
						{numTurn === 3 ? (   
							<a href="http://localhost:3001/">Home</a>
						) : (
							<div>{this.state.timeValues}</div>
							// <button onClick={() => {window.location.href="http://localhost:3001/gameplay"}}>Back</button>
						)}
        </div>
    	)
		}
}

