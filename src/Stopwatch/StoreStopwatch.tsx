import { createStore, applyMiddleware, Reducer } from 'redux';
import { thunk } from 'redux-thunk';
import { TypesActionStopwatch, StopwatchAction } from './ActionsStopwatch'
import { StateStopwatch, initialStateStopwatch } from './StateStopwatch';
import { FREQUENCE_TIMER } from './ConstantsStopwatch';





const reducerChronometre: Reducer<StateStopwatch, StopwatchAction> = (state: StateStopwatch = initialStateStopwatch, action: StopwatchAction): StateStopwatch => {
    switch (action.type) {
        case TypesActionStopwatch.INIT:
            return {
                ...state,
                srcImg: action.imgLogoSrc,
               
            };

        case TypesActionStopwatch.START:
            return {
                ...state,
                isRunning: true,
                intervalId: action.intervalId,
             
                
            };
        case TypesActionStopwatch.PAUSE:
            clearInterval(state.intervalId as number);
            return {
                ...state,
                isRunning: false,
                intervalId: state.intervalId,
              
                
            };
       case TypesActionStopwatch.RESET:
              clearInterval(state.intervalId as number);
            return {
                ...initialStateStopwatch,
                    time: initialStateStopwatch.time,
                    intervalId: initialStateStopwatch.intervalId, 
                   
                
              };
        case TypesActionStopwatch.INCREMENT:
            return { ...state, time: state.time + FREQUENCE_TIMER };

        default:
            clearInterval(state.intervalId as number);
            return {
                ...state, time: state.time, intervalId:state.intervalId
            };
    }
};

export default createStore(reducerChronometre, applyMiddleware(thunk));



