import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PairingPage from './pages/PairingPage'

const routes = (
	<Switch>
		<Route exact path='/pairing' component={PairingPage}/>
	</Switch>
)

export default routes