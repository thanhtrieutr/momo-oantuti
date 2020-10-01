import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import {socket} from '../socketInstance'
import axios from 'axios'
import { event } from 'jquery';

export default class HomePage extends Component{
    state = {
        showStart:false,
        showInput:true,
        showResults:false,
        name:''
		}
		async componentWillMount() { 
			if (localStorage.getItem("UserInfo")){
				const userId = JSON.parse(localStorage.getItem("UserInfo")).idUser;
				const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
				const data = response.data
				if (response.status === 200&&data) {
					this.setState({
						data: data,
						showStart: true
					})
				}
				else {
					localStorage.clear()
				}
			}
		}
    onClickName = async (event) => {
        // setShowResults(true)
        if (event.key === 'Enter') {
            this.state.showResults = true
            this.setState({name:this.refs.name.value})
            this.setState({showInput:false})
            this.setState({showStart:true})
            // send id request
			// console.log(this.refs.name.value)
        }
    }
    onClickStart = async (event)=>
    {
				let userinfo
				if (!this.state.data) {
					userinfo = (await axios.post("http://localhost:3000/signup", {name: this.state.name})).data;
					// console.log(socket);
				}
				else userinfo = this.state.data
				localStorage.setItem("UserInfo", JSON.stringify(userinfo))		

        // localStorage.setItem("socket", socket)

        socket.emit("play_request", userinfo);
        socket.on('match_found',(matchInfo)=>
        {
					console.log("MatchInfo",matchInfo);
					localStorage.setItem("MatchInfo", JSON.stringify(matchInfo))
					window.location.href = "http://localhost:3001/gameplay"
				});
    }
    render () {
			console.log("Data", this.state.data)
        return(
        <div style={{alignContent: 'center', alignItems:'center'}}>
            { !this.state.data && this.state.showInput ? 
            <div >
            <label>
                Enter Your Name:
                <input tabIndex = "0" type="text" ref="name" onKeyDown={this.onClickName}/>
            </label>
            </div>
            : <div>
								<p>{this.state.name || this.state.data.name}</p>
							</div>}
            { this.state.showStart && ((this.state.data && this.state.data.numTurn !== 0)|| !this.state.data) ? 
            <button onClick={this.onClickStart}>
            Start
            </button>
            : null}
            <p>Score: {
								this.state && this.state.data && this.state.data.point || 0
							}</p>
						<p>Turns left:
							{this.state && this.state.data && this.state.data.numTurn || 20}
						</p>
            
            <div>
                <a href="/chart">Chart</a>
            </div>
        </div>
    )}
}

