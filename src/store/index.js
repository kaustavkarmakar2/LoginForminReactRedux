import {createStore,combineReducers} from 'redux';

import {
        modelReducer,
        formReducer
      } from 'react-redux-form';
export const initialUserState = {
        email: 'kaustav',
        pass: 'kaustav'
      };
const store= createStore((combineReducers({
        user: modelReducer('user', initialUserState),
        userForm: formReducer('user', initialUserState)
      })));

  
  export default store;