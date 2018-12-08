import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

import './css/Map.scss';

class GoogleMap extends Component {
    state = {
        center: {
            lat: 13.0436079,
            lng: 77.6050626
        }
    };

    snackBarOpen = () => this.props.dispatch({ type: 'SNACKBAR_OPEN' })

    render() {

        const Marker = ({ v_data }) => {
            return (
                <div className="mapMarker" onClick={this.snackBarOpen}>
                    {
                        (
                            v_data.vehicle_type === "car" ?
                                <Icon name='bicycle' /> :
                                <Icon name="car" />
                        )
                    }
                    <span>{v_data.accidents}</span>
                </div>
            )
        }

        const markers = (this.props.map_marker.length) ? this.props.map_marker : this.props.vehicle_data;

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAqoKn7XDYIcG-xiLlE38n7x2rDb3hju9c' }}
                    defaultCenter={this.state.center}
                    defaultZoom={15}>
                    {
                        markers.map((vehicle, index) =>
                            <Marker
                                key={index}
                                lat={vehicle.lat}
                                lng={vehicle.lng}
                                v_data={vehicle} />
                        )
                    }
                </GoogleMapReact>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        vehicle_data: state.vehicle_data,
        map_marker: state.map_marker
    };
}

export default connect(mapStateToProps)(GoogleMap);