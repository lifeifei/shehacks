import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { sendEmailAddress } from './posted_reducer';

const rootReducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    routing: routerReducer,
    sendEmailAddress
});

export default rootReducer;