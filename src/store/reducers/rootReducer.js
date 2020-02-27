import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import LoginReducer from './loginReducer'; 

const rootReducer= combineReducers({
    form:reduxFormReducer,
    login:LoginReducer,
});
export default rootReducer;