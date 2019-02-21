import React from 'react';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapIsReady: false,
    };
  }

  componentDidMount() {
    // after some research the standard npm module used in react for google maps was not displaying correctly.
    // as a work around I attached the script tag to the document globally to access it within React.
    const ApiKey = 'XXXXXXXXXXXXXXXXXXXX';
    const script = document.createElement('script');
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
    script.src = 'https://maps.googleapis.com/maps/api/js';
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({ mapIsReady: true });
    });

    document.body.appendChild(script);
  }

  componentDidUpdate() {
    if (this.state.mapIsReady && this.props.truckList.length > 0) {
      const truckList = this.props.truckList.map((truck) => {
        if (truck.latitude !== '0' && truck.longitude !== '0') {
          return {
            lat: Number(truck.latitude),
            lng: Number(truck.longitude),
          };
        }
        return null;
      }).filter(val => val);
      console.log(truckList);
      // Display the map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7887, lng: -122.4067 },
        zoom: 11,
        mapTypeId: 'roadmap',
      });
      truckList.forEach((truck)=> {
        const marker = new window.google.maps.Marker({
          position: { lat: truck.lat, lng: truck.lng },
          map: map,
        });
      });
    }
  }

  render() {
    return (
      <div id="map" style={{ width: '100vw', height: '100vw' }} />
    );
  }
}

export default MapView;
