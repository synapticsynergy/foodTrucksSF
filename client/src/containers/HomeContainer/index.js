import React from 'react';
import FormView from '../../components/FormView';

export default function HomeContainer(props) {
  return (
    <div className="homeContainer">
      <FormView {...props} />
    </div>
  );
}
