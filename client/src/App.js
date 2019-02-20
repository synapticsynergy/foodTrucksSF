import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Just Truck it.
        </p>
      </header>
      <HomeContainer />
    </div>
  );
}
