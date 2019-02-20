import React from 'react';
import axios from 'axios';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const truckList = this.state.truckList.map((truck) => {
      return (
        <div>
          <p>{truck.applicant}</p>
        </div>
      );
    });
    return (
      <div>
        {truckList}
      </div>
    );
  }
}

export default ListView;
