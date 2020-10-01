import React from 'react';

const FinalResultPage = (props) => {
		const {point, player1_action, player2_action, numTurn, winner} = JSON.parse(localStorage.getItem("ti_so")).roundResult
		console.log("Point:" ,point)
		const userInfo = JSON.parse(localStorage.getItem("UserInfo"))
		const matchInfo  = JSON.parse(localStorage.getItem("MatchInfo"))

		const getLabel = (x) => {
			if (x === 1) return("Bao")
			else if (x === 2) return ("Bua")
			else if (x === 3) return ("Keo")
		}

		
		return(
        <div style={{alignContent: 'center', alignItems:'center'}}>
						<div>
							<span>{getLabel(player1_action)}</span>
							- 
							<span>{getLabel(player2_action)}</span>
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
							<button onClick={() => {window.location.href="http://localhost:3001/gameplay"}}>Back</button>
						)}
        </div>
    )
}

export default FinalResultPage;