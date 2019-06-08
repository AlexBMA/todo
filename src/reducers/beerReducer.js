import _ from 'lodash'
import {CREATE_BEER} from "../actions/types";

export default (state = {}, action) =>{
    switch (action.type) {
        case CREATE_BEER:
            return { ...state, [action.payload.id] : action.payload }
        default:
            return state;

    }
}