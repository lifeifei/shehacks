import { combineReducers } from 'redux'
import { teamReducer } from './team_reducer';

const rootReducer = combineReducers({
    team: teamReducer
});

export default rootReducer;