import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PairingPage from './pages/PairingPage'
import GameplayPage from './pages/GameplayPage'
import HomePage from './pages/HomePage'
import ScoreboardPage from './pages/ScoreboardPage'
import FinalResultPage from './pages/FinalResultPage'

const routes = (
	<Switch>
		<Route exact path='/pairing' component={PairingPage}/>
		<Route exact path='/' component={HomePage}/>
		<Route exact path='/chart' component={ScoreboardPage}/>
		<Route exact path='/gameplay' component={GameplayPage}/>
		<Route exact path='/result' component={FinalResultPage}/>
	</Switch>
)

export default routes