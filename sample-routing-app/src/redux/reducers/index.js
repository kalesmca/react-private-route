import players from './players'

import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'


const rootReducer = (history)=>combineReducers({
    router:connectRouter(history),
    players
})

export default rootReducer;

