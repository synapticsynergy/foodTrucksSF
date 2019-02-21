import React from 'react';
import {
  AppBar,
  Typography,
} from '@material-ui/core';
import './App.css';
import HomeContainer from './containers/HomeContainer';

export default function App() {
  return (
    <div className="App">
      <AppBar
        position="static"
      >
        <Typography 
        style={{margin: '10px 0'}} 
        variant="h6" 
        color="inherit"
        >
          SF Food Trucks
        </Typography>
      </AppBar>
      {/* <header className="App-header">
        <p>
          Just Truck it.
        </p>
      </header> */}
      <HomeContainer />
    </div>
  );
}
