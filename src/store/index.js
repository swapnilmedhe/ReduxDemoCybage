import {createStore} from 'redux';
import Postreducer from '../reducers/PostReducer';

const store =createStore(Postreducer);

export default store;