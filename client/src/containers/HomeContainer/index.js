import React from 'react';
import axios from 'axios';
import ListView from './ListView';
import MapView from './MapView';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: 1,
      truckList: [],
    };
  }

  componentWillMount() {
    axios.get('https://data.sfgov.org/resource/6a9r-agq8.json').then((resp) => {
      this.setState({ truckList: resp.data });
    }).catch((err) => {
      console.error(err, ' Failed to fetch resource');
    });
  }

  render() {
    // const mapOrListView = this.state.listView ? <ListView /> : <MapView />;
    return (
      <div className="homeContainer">
        {/* <ListView {...this.state} /> */}
        <MapView {...this.state} />
      </div>
    );
  }
}

export default HomeContainer;
