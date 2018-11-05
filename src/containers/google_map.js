import React, { Component } from 'react';
import './style/city_map.css'


class CityMap extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const google = window.google;
        console.log(`Lat : ${this.props.lat}`);
        new google.maps.Map(this.refs.map, {
            center: { lat: this.props.lat, lng: this.props.lon },
            zoom: 12
        });

    }
    render() {
        return (
            <td>
                <div ref="map" />
            </td>
        );
    }
}

export default CityMap;
