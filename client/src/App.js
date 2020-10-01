import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

import routes from './routes'

import HomePage from './pages/HomePage'
import ScoreboardPage from './pages/ScoreboardPage'

const ENDPOINT = `ws://127.0.0.1:3030`

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
