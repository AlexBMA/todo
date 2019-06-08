import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import beersReducer from './beerReducer';

export default combineReducers({
    form: formReducer,
    beers: beersReducer
})


