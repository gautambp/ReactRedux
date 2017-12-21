import axios from 'axios';

const API_KEY = '81f774e8da0fd2d1a00e038186bc3506';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return (
        {
            type : 'FETCH_WEATHER',
            payload: request
        }
    )
}