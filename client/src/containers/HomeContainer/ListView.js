import React from 'react';
import axios from 'axios';

export default function ListView(props) {
  const truckList = props.truckList ? props.truckList.map((truck) => {
    return (
      <div>
        <p>{truck.applicant}</p>
      </div>
    );
  }) : null;

  return (
    <div>
      {truckList}
    </div>
  );
}
