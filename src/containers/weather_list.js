import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import './style/weather_list.css';



class WeatherList extends Component {
    constructor(props) {
        super(props)
    }


    extractData(list, type) {
        switch (type) {
            case 'temp':
                return list.map((data) => {
                    return data.main.temp;
                });
            case 'pres':
                return list.map((data) => {
                    return data.main.pressure;
                });
            case 'humid':
                return list.map((data) => {
                    return data.main.humidity;
                });
        }
    }

    makeListRow(weatherData) {
        return weatherData.map((data) => {
            if (!data) {
                return false;
            }
            return (
                <tr key={data.city.id}>
                    <td>
                        {data.city.name}
                    </td>
                    <Chart color='orange' data={this.extractData(data.list, 'temp')} />
                    <Chart color='red' data={this.extractData(data.list, 'pres')} />
                    <Chart color='green' data={this.extractData(data.list, 'humid')} />
                </tr>
            );
        })
    }

    render() {
        return (<div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.makeListRow(this.props.weatherData)}
                </tbody>
            </table>
        </div>);
    }
}

function mapStateToProps({ weatherData }) {
    return { weatherData }
}

export default connect(mapStateToProps)(WeatherList);
