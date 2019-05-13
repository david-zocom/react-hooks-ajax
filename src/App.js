import React from 'react';
import './App.css';
import WorldInfo from './components/WorldInfo';
import HooksDemo from './components/HooksDemo';

const App = () => {
  return (
    <div className="App">
		<h1>Hooks!</h1>
		Let's see some information about the world.
		<WorldInfo />

		<HooksDemo/>
    </div>
  );
}

export default App;
