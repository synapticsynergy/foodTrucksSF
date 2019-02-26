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
    this.backToFormView = this.backToFormView.bind(this);
  }

  toggleListView() {
    this.setState({ listView: !this.state.listView });
  }

  backToFormView() {
    this.setState({ listView: false });
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
            onClick={this.backToFormView}
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
