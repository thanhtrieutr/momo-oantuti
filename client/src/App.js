import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

import routes from './routes'

import HomePage from './HomePage'
import ScoreboardPage from './ScoreboardPage'

function App() {
  return (
    <div className="App">
      <Router>
				{routes}
			</Router>
    </div>
  );
}

export default App;
