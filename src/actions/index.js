import beers from "../apis/beers";
import {CREATE_BEER} from './types';

export const createBeer = formValues => async dispatch => {
    const response = await beers.post('/beers', formValues)
    dispatch({type: CREATE_BEER, payload: response.data})
}