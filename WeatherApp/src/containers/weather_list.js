import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {
    renderWeather(weather) {
        const temp = weather.list.map( item => item.main.temp );
        const pres = weather.list.map( item => item.main.pressure );
        const humid = weather.list.map( item => item.main.humidity );
        return (
            <tr key={weather.city.name}>
                <td><GoogleMap lon={weather.city.coord.lon} lat={weather.city.coord.lat} /></td>
                <td><Chart data={temp} color="red"/></td>
                <td><Chart data={pres} color="red"/></td>
                <td><Chart data={humid} color="red"/></td>
            </tr>
        )
    }
    render() {
        return (
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
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
