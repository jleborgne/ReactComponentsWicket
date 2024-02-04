import { Action, Dispatch } from 'redux';
import { FREQUENCE_TIMER } from './ConstantsStopwatch';
import { ThunkAction } from 'redux-thunk';
import { StateStopwatch } from './StateStopwatch';



export enum TypesActionStopwatch {
    INIT = 'initialize',
    START = 'start',
    PAUSE = 'pause',
    RESET = 'reset',
    INCREMENT = 'increment'
}
interface InitializeAction extends Action {
    Action_type: string;
    type: TypesActionStopwatch.INIT;
    intervalId: number;
    imgLogoSrc: string;
}

interface StartAction extends Action {
    Action_type: '';
    type: TypesActionStopwatch.START;
    intervalId: number;
   
}

interface PauseAction extends Action {
    Action_type: '';
    type: TypesActionStopwatch.PAUSE;
}

interface ResetAction extends Action {
    Action_type: '';
    type: TypesActionStopwatch.RESET;
}
interface IncrementAction extends Action {
    Action_type: '';
    type: TypesActionStopwatch.INCREMENT;
}

export type StopwatchAction = InitializeAction |  StartAction | PauseAction | ResetAction | IncrementAction;

export const actions =
{
    setInitialValue: (srcImg: string): InitializeAction => (
        {
            intervalId: 0, Action_type: '', type: TypesActionStopwatch.INIT, imgLogoSrc: srcImg
        }),
    start: (): ThunkAction<void, StateStopwatch, null, StartAction> => {
        return (dispatch: Dispatch<StopwatchAction>) => {
            const idintervalaction = setInterval(() => dispatch(actions.increment() as IncrementAction), FREQUENCE_TIMER);
            
            dispatch({
                Action_type: '',
                type: TypesActionStopwatch.START,
                intervalId: idintervalaction,
                
            } as StartAction);
        };
    },

    pause: (): PauseAction => ({ type: TypesActionStopwatch.PAUSE, Action_type:'' }),
    reset: (): ResetAction => ({ type: TypesActionStopwatch.RESET, Action_type: '' }),
    increment: (): IncrementAction => ({ type: TypesActionStopwatch.INCREMENT, Action_type: '' })
};
