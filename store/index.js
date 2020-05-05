import {createStore, combineReducers} from 'redux';
import {userReducers} from './reducers/user'

const rootReducer = combineReducers({
  user: userReducers
})

const store = createStore(rootReducer);

export default store;