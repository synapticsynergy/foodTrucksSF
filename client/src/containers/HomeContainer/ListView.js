import React from 'react';
import axios from 'axios';
import {

} from '@material-ui/core';
import ListItem from './ListItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      truckList: [],
    };
  }

  componentWillMount() {
    // axios.get('https://data.sfgov.org/resource/6a9r-agq8.json').then((resp) => {
    axios.get('https://v0nnu8eif4.execute-api.us-west-2.amazonaws.com/dev/sfFoodTrucks').then((resp) => {
      console.log(resp.data.message,' was data defined?');
      this.setState({ truckList: resp.data.message });
    }).catch((err) => {
      console.error(err, ' Failed to fetch resource');
    });
  }

  render() {
    const truckList = this.state.truckList.length > 0 ? this.state.truckList.map((truck) => {
      return (
        // <div>
        //   <p>{truck.applicant}</p>
        // </div>
        <ListItem truck={truck} />
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
