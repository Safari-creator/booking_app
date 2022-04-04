import { combineReducers, createStore } from 'redux';
import { demoReducer } from '../reducers/reducer';
import { IDemoState } from '../actions/types';

export interface IRootState {
    bookingList: IDemoState;
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        bookingList: demoReducer,
    }),
);

export default store;
