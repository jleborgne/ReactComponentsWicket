import { createStore, Reducer } from 'redux';
import { ActionTypes, CounterAction } from './ActionsCounter'; 

interface State {
    counter: number;
    initialValue: number;
    srcImgLogo: string;
}

const initialState: State = {
    counter: 0,
    initialValue: 0,
    srcImgLogo: ''
};


const reducerCompteur: Reducer<State, CounterAction> = (state: State = initialState, action: CounterAction): State => {
    switch (action.type) {
        case ActionTypes.INIT:
            return { ...state, counter: action.initvalue, initialValue: action.initvalue, srcImgLogo: action.intitsrcImgLogo };
        case ActionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ActionTypes.RESET:
            return { ...state, counter: state.counter = state.initialValue, srcImgLogo: action.srcImgLogo };
        case ActionTypes.DECREASE:
            return { ...state, counter: (state.counter>0) ? state.counter - 1 : 0 };
        default:
            return state;
    }
};
export default createStore(reducerCompteur);


