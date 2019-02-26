import React from 'react';
import axios from 'axios';
import {
  CircularProgress, Button,
} from '@material-ui/core';
import ListItem from './ListItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truckList: [],
      isFetching: true,
    };
  }

  componentWillMount() {
    const { latitude, longitude, location } = this.props;
    const data = {
      latitude,
      longitude,
      location,
    };
    axios.post('https://v0nnu8eif4.execute-api.us-west-2.amazonaws.com/dev/sfFoodTrucks', data).then((resp) => {
      this.setState({ truckList: resp.data.message, isFetching: false });
    }).catch((err) => {
      console.error(err, ' Failed to fetch resource');
    });
  }

  render() {
    if(this.state.isFetching) {
      return (
        <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </div>
      );
    }
    if(!this.state.isFetching && this.state.truckList.length === 0) {
      return (
        <div style={{ height: '80hv', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <h1>No Results Within Walking Distance.</h1>
          <div>
            <Button onClick={this.props.changeListView} style={{ margin: '20px 0' }} variant="contained" color="primary">Try Again</Button>
          </div>
        </div>
      )
    }
    const truckList = this.state.truckList.length > 0 ? this.state.truckList.map((truck) => {
      return (
        <ListItem key={`${truck.address},${truck.applicant}`} truck={truck} />
      );
    }) : null;

    return (
      <div>
        {truckList}
      </div>
    );
  }
}

export default ListView;
