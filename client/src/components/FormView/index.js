import React from 'react';
import { 
  TextField,
  Typography,
  Button,
  FormHelperText,
  LinearProgress,
} from '@material-ui/core';
import ListView from '../ListView';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      latitude: '',
      longitude: '',
      food: '',
      listView: false,
      isFetching: false,
    };

    this.changeLocation = this.changeLocation.bind(this);
    this.useCurrentLocation = this.useCurrentLocation.bind(this);
    this.updateCurrentLocation = this.updateCurrentLocation.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeListView = this.changeListView.bind(this);
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

  changeListView() {
    this.setState({ listView: !this.state.listView });
  }

  render() {
    let submitButton;
    let formOrListView;
    if(this.state.location) {
      submitButton = (
        <Button onClick={this.changeListView} style={{ marginTop: '20px' }} variant="contained" color="primary">
          Submit
        </Button>
      );
    } else {
      submitButton = (
        <Button onClick={this.changeListView} style={{ marginTop: '20px' }} variant="contained" color="primary" disabled>
          Submit
        </Button>
      );
    }

    if (this.state.listView) {
      formOrListView = <ListView {...this.state} changeListView={this.changeListView} />;
    } else {
      formOrListView = (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <h2>Great Food is Waiting</h2>
            <form
              className="formContainer"
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-location"
                label="Location"
                className="textField"
                value={this.state.location}
                onChange={this.changeLocation}
                // margin="normal"
                variant="filled"
              />
              <Button onClick={this.useCurrentLocation} style={{ margin: '20px 0' }} variant="contained" color="primary">
                Use Current Location
              </Button>
              <TextField
                id="filled-category"
                label="Feed me this..."
                className="textField"
                value={this.state.food}
                onChange={this.changeCategory}
                // margin="normal"
                variant="filled"
              />
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
