import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import {socket} from '../socketInstance'
import axios from 'axios'

export default class HomePage extends Component{
    state = {
        showStart:false,
        showInput:true,
        showResults:false,
        name:''
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
						console.log(this.state.name)
						const userinfo = await (await axios.post("http://localhost:3000/signup", {name: this.state.name})).data;
						console.log(userinfo)
						socket.emit("play_request", userinfo)
        }
    }
    render () {
        return(
        <div style={{alignContent: 'center', alignItems:'center'}}>
            { this.state.showInput ? 
            <div >
            <label>
                Enter Your Name:
                <input tabIndex = "0" type="text" ref="name" onKeyDown={this.onClickName}/>
            </label>
            </div>
            : null}
            { this.state.showStart ? 
            <button>
            Start
            </button>
            : null}
            { this.state.showResults ? <p>{this.state.name}</p> : null }
            <p>Score: 0</p>
            <p>Turns left: 20</p>
            
            <div>
                <a href="/chart">Chart</a>
            </div>
        </div>
    )}
}

