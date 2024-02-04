
import { createStore } from 'redux';
import { ActionTypes, CardAction } from './ActionsCard'; 

export interface CardState {

    srcImgLogo: string;
    cardTitle: string;
    cardDescritption: string;
}

const initialState: CardState = {
    srcImgLogo: '',
    cardTitle: '',
    cardDescritption: ''
};


const reducerCompteur = (state: CardState = initialState, action: CardAction): CardState => {
    switch (action.type) {
        case ActionTypes.INIT:
            return { ...state, srcImgLogo: action.initsrcImgLogo, cardTitle:action.cardTitle, cardDescritption:action.cardDescritption   };

        default:
            return state;
    }
};
export default createStore(reducerCompteur);


