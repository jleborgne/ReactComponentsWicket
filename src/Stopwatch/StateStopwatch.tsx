/* eslint-disable @typescript-eslint/no-unused-vars */

export interface StateStopwatch {
    time: number;
    isRunning: boolean;
    intervalId: number;
    srcImg: string;
    start: () => void;
    pause: () => void;
    reset: () => void;
}

export const initialStateStopwatch: StateStopwatch = {
    time: 0,
    isRunning: false,
    intervalId: 0,
    srcImg: '',
    start: () => { },
    pause: () => { },
    reset: () => { }
};




