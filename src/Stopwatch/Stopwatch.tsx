import React from 'react';
import { StateStopwatch } from './StateStopwatch';



const formatTime = (time: number): string =>
    (time / 1000).toLocaleString(undefined, { minimumFractionDigits: 3 });

const Stopwatch: React.FC<StateStopwatch> = ({ time, isRunning, start, pause, reset, srcImg }) => (
    <div className="card">
        <img className="card-img-top" src={srcImg} alt={srcImg} />
        <div className="card-body">
            <h5 className="card-title text-center">Chronom&#xE8;tre</h5>
            <p className="text-center font-weight-bold">
                <span> {formatTime(time)}</span>              
            </p>
                      
            {isRunning ? (
                <button type="button" className="btn btn-primary btn-block" onClick={() => pause()}>
                    Pause
                </button>
            ) : (
                    <button type="button" className="btn btn-danger btn-block" onClick={() => start()}>
                    Start
                </button>
            )}
            <button type="button" className="btn btn-warning btn-block" onClick={() => reset()}>
                Reset
            </button>
        </div>
    </div>
);

export default Stopwatch;
