import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather'
const rootReducer = combineReducers({
    weatherData: weatherReducer,
});

export default rootReducer;
