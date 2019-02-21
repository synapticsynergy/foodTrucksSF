import React from 'react';
import ListView from './ListView';
import FormView from './FormView';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listView: 1,
      formView: true,
    };
  }

  render() {
    const formOrListView = this.state.formView ? <FormView /> : <ListView />;
    return (
      <div className="homeContainer">
        {formOrListView}
      </div>
    );
  }
}

export default HomeContainer;
