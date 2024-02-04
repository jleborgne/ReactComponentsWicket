import React, {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CardAction, actions } from './ActionsCard';

import cardLogo from './img/bootstrap_CardLogo.png'
import { Dispatch } from 'redux';
import { CardState } from './StoreCard';



const Card: React.FC<CardState> = ({ srcImgLogo, cardTitle, cardDescritption }) => {
    const dispatch = useDispatch<Dispatch<CardAction>>();
    useEffect(() => {
        dispatch(actions.setInitialValue(srcImgLogo, cardTitle, cardDescritption));
    }, [dispatch, srcImgLogo, cardTitle, cardDescritption]);

 
   
    return (
        <div className="card" >
            <img className="card-img-top" src={srcImgLogo === '' ? cardLogo : srcImgLogo} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-center">{cardTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">Une image, vaut mille mots...</h6>
                <p className="card-text text-center">{cardDescritption}</p>
                <p className="card-text text-center"> <a href={srcImgLogo === '' ? cardLogo : srcImgLogo} className="btn btn-primary">Image</a></p>
            </div>
            

        </div>

    );
};

export default Card;
