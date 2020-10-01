import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PairingPage from './pages/PairingPage'
import GameplayPage from './pages/GameplayPage'
import HomePage from './pages/HomePage'
import ScoreboardPage from './pages/ScoreboardPage'

const routes = (
	<Switch>
		<Route exact path='/pairing' component={PairingPage}/>
		<Route exact path='/' component={HomePage}/>
		<Route exact path='/chart' component={ScoreboardPage}/>
		
		<Route exact path='/gameplay' component={GameplayPage}/>
	</Switch>
)

export default routes