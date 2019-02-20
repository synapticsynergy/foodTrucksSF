import React from 'react';
import ListView from './ListView';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: 1,
    };
  }

  render() {
    // const mapOrListView = this.state.listView ? <ListView /> : <MapView />;
    return (
      <div className="homeContainer">
        <ListView />
      </div>
    );
  }
}

export default HomeContainer;
