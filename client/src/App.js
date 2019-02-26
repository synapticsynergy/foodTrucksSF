import React from 'react';
import {
  AppBar,
  Typography,
} from '@material-ui/core';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: false,
    };
    this.toggleListView = this.toggleListView.bind(this);
  }

  toggleListView() {
    this.setState({ listView: !this.state.listView });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          position="static"
        >
          <Typography
            style={{ margin: '10px 0' }}
            variant="h6"
            color="inherit"
            onClick={this.toggleListView}
          >
            Just Truck It.
          </Typography>
        </AppBar>
        <HomeContainer toggleListView={this.toggleListView} {...this.state} />
      </div>
    );
  }
}

export default App;
