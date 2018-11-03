import axios from 'axios'
import api from '../apiConfig'
export const FETCH_WEATHER = 'FETCH_WEATHER';


const url = 'https://api.openweathermap.org/data/2.5/forecast?';

export default function fetchWeather(term) {
    console.log(term)
    let request = axios.get(url, {
        params: {
            q: term,
            units: 'metric',
            appid: api.API_KEY
        }
    });
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}