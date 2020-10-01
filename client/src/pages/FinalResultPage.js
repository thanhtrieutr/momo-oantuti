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
						<div>
							<span>{this.getLabel(player1_action)}</span>
							- 
							<span>{this.getLabel(player2_action)}</span>
						</div>
						{userInfo.idUser === matchInfo.playerID_1.idUser ? (
							<div>
								<span style={{fontWeight: 'bold'}}>{matchInfo.playerID_1.name}</span>
								- 
								<span>{matchInfo.playerID_2.name}</span>
						</div>
						) :
						(
						<div>
							<span>{matchInfo.playerID_1.name}</span>
							- 
							<span style={{fontWeight: 'bold'}}>{matchInfo.playerID_2.name}</span>
						</div>
						)}
						<div>
							<span>{point[matchInfo.playerID_1.idUser] || 0}</span>
							<span> - </span>
							<span>{point[matchInfo.playerID_2.idUser] || 0}</span>
						</div>
						{numTurn === 3 && winner!==0 ? 
						(
							<div>
								{winner === 1 ? matchInfo.playerID_1.name : matchInfo.playerID_2.name}
							</div>
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

