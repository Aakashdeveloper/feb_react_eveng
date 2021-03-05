import {combineReducers} from 'redux';
import films from './MoviesReducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer;