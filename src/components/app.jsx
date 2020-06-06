import React, { Component } from 'react';
import flats from '../data/flats.js'
import FlatList from './flat-list.jsx'
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker">&nbsp;</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  };

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div style={{ height: '100vh', width: '50%' }}>
          <GoogleMapReact
            center={this.center()}
            defaultZoom={12}
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>

    );
  }
}

export default App;
