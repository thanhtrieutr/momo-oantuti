import React from 'react'
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown'

ReactDOM.render(
	<Countdown date={Date.now() + 5000}/>,
	document.getElementById("counter")
)