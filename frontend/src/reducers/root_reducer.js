import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    routing: routerReducer
});

export default rootReducer;