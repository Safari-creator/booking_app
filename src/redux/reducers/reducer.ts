import { Constants, DemoActions, IDemoState } from '../actions/types';

const init: IDemoState = {
    list: [],
    loading: false,
};

export function demoReducer(state: IDemoState = init, action: DemoActions): IDemoState {
    switch (action.type) {
        case Constants.ADD_ITEM:
            const list = action.payload.item;
            return { ...state, list: list };
        case Constants.SET_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
