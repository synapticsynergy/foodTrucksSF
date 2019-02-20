import React from 'react';
import axios from 'axios';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    axios.get('https://data.sfgov.org/resource/6a9r-agq8.json').then((resp) => {
      console.log(resp.data);
    });
  }
  render() {
    return (
      <div>
        <p>This is a test</p>
      </div>
    )
  }
}

export default ListView;
