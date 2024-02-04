import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'; 
import compteurLogo from './img/compteurLogo.png'
import { CounterAction, actions } from './ActionsCounter';


interface CounterProps {
    initialValue: number; 
    intitsrcImgLogo: string;
}

const Counter: React.FC<CounterProps> = ({ initialValue, intitsrcImgLogo }) =>
{
    const counter = useSelector((state: { counter: number }) => state.counter);
    const dispatch = useDispatch<Dispatch<CounterAction>>();

    useEffect(() => {
        dispatch(actions.setInitialValue(initialValue, intitsrcImgLogo));
    }, [dispatch, initialValue, intitsrcImgLogo]);

    const increment = useCallback(() => {
        dispatch<CounterAction>(actions.increment());
    }, [dispatch]);

    const reset = useCallback(() => {
        dispatch<CounterAction>(actions.reset(intitsrcImgLogo));
    }, [dispatch, intitsrcImgLogo]);

    const decrease = useCallback(() => {
        dispatch<CounterAction>(actions.decrease());
    }, [dispatch]);

    return (
        <div className="card" >
            <img className="card-img-top" src={intitsrcImgLogo === '' ? compteurLogo : intitsrcImgLogo} alt="Card image cap" />
          <div className="card-body">
                <h5 className="card-title text-center">Compteur : {counter} </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><button type="button" className="btn btn-primary btn-block" onClick={increment}>+</button></li>
                    <li className="list-group-item"><button type="button" className="btn btn-danger btn-block" onClick={decrease}>-</button></li>
                    <li className="list-group-item"><button type="button" className="btn btn-dark btn-block" onClick={reset}>RAZ</button></li>
                </ul>                
            </div>

        </div>
       
    );
};

export default Counter;
