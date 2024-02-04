import { Action } from 'redux';


export enum ActionTypes {
    INIT = 'initialize'
}

export interface InitializeAction extends Action {
    type: ActionTypes.INIT;
    initsrcImgLogo: string;
    cardTitle: string;
    cardDescritption: string;
}



export type CardAction = InitializeAction;

export const actions = {
    setInitialValue: (srcImagevalue: string, title: string, cardDescritption:string): InitializeAction => (
        {
            Action_type: '', type: ActionTypes.INIT, initsrcImgLogo: srcImagevalue, cardTitle: title, cardDescritption: cardDescritption
        })
};