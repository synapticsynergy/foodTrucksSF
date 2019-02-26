import React from 'react';
import {
  TextField,
  Typography,
  Button,
  FormHelperText,
  LinearProgress,
} from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationSearching';
import ListView from '../ListView';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      latitude: '',
      longitude: '',
      food: '',
      // listView: false,
      isFetching: false,
    };

    this.changeLocation = this.changeLocation.bind(this);
    this.useCurrentLocation = this.useCurrentLocation.bind(this);
    this.updateCurrentLocation = this.updateCurrentLocation.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    // this.changeListView = this.changeListView.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  changeLocation(event) {
    this.setState({ location: event.target.value });
  }

  updateCurrentLocation(location) {
    const { coords } = location;
    const { latitude, longitude } = coords;
    this.setState({ location: 'Current Location', latitude, longitude, isFetching: false });
  }

  useCurrentLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    this.setState(
      () => ({ isFetching: true }),
      () => {
        navigator.geolocation.getCurrentPosition(this.updateCurrentLocation, (err) => {
          console.error(err, ' Error Getting Position');
        }, options);
      },
    );
  }

  changeCategory(event) {
    this.setState({ food: event.target.value });
  }

  // changeListView() {
  //   this.setState({ listView: !this.state.listView });
  // }

  handleEnter(e) {
    console.log(' can I see listView here?', this.props);
    //This is the keyCode for the enter key
    if (e.keyCode === 13) {
      this.props.toggleListView();
    }
  }

  render() {
    let submitButton;
    let formOrListView;
    if(this.state.location) {
      submitButton = (
        <Button onClick={this.props.toggleListView} variant="contained" color="primary">
          Submit
        </Button>
      );
    } else {
      submitButton = (
        <Button onClick={this.props.toggleListView} variant="contained" color="primary" disabled>
          Submit
        </Button>
      );
    }

    if (this.props.listView) {
      formOrListView = <ListView {...this.state} changeListView={this.props.toggleListView} />;
    } else {
      formOrListView = (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <h2>Great Food is Waiting</h2>
            <form
              className="formContainer"
              noValidate
              autoComplete="off"
              style={{ display: 'flex', flexDirection: 'column'}}
            >
            <div style={{display: 'flex', padding: '0', margin: '0', justifyContent: 'center'}}>
              <Button onClick={this.useCurrentLocation} variant="contained" color="primary">
                <LocationIcon />
              </Button>
              <TextField
                id="filled-location"
                label="Location"
                className="textField"
                value={this.state.location}
                onChange={this.changeLocation}
                onKeyDown={this.handleEnter}
                variant="filled"
              />              
            </div>
              <p style={{fontSize: 12, color: 'grey'}}>Example: 278 Post St, San Francisco, CA 94108</p>
              <br />
              {submitButton}
            </form>
          </div>
        </div>
      );
    }

    return formOrListView;
  }
}

export default FormView;
