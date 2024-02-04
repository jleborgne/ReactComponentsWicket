import { Action } from 'redux';

export enum ActionTypes {

    INCREMENT = 'increment',
    DECREASE = 'decrease',
    RESET = 'reset',
    INIT = 'initialize'
}

interface InitializeAction extends Action {
    type: ActionTypes.INIT;
    initvalue: number;
    intitsrcImgLogo: string;
}
interface IncrementAction extends Action {
    type: ActionTypes.INCREMENT;
}
interface ResetAction extends Action {
    type: ActionTypes.RESET;
    srcImgLogo: string;
}
interface DecreaseAction extends Action {
    type: ActionTypes.DECREASE;
}


export type CounterAction = InitializeAction | ResetAction | IncrementAction | DecreaseAction;

export const actions = {
    setInitialValue: (value: number, srcImagevalue: string): InitializeAction => ({
        Action_type: '', type: ActionTypes.INIT, initvalue: value, intitsrcImgLogo: srcImagevalue
    }),
    increment: (): IncrementAction => ({type: ActionTypes.INCREMENT, Action_type: '' }),
    reset: (srcImagevalue: string): ResetAction => ({type: ActionTypes.RESET, srcImgLogo: srcImagevalue, Action_type: ''}),
    decrease: (): DecreaseAction => ({type: ActionTypes.DECREASE, Action_type: ''})
};