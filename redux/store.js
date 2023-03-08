import {createStore} from 'redux';
import messageReducer from './reducer-message';

const store = createStore(messageReducer);

export default store;
