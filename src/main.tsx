import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Compteur/Counter';
import StopwatchContainer from './Stopwatch/ContainerStopwatch'; // Importez le composant connecté
import Card from './BoostrapCard/Card';

import './index.css';
import { Provider } from 'react-redux';
import stopwatchStore from './Stopwatch/StoreStopwatch';
import counterStore from './Compteur/StoreCounter';
import cardStore from './BoostrapCard/StoreCard';

const container = document.getElementById('root');

if (container) {
    const root = ReactDOM.createRoot(container)

    root.render(
        <React.StrictMode>
            <div className="card-deck">
                <Provider store={stopwatchStore} >
                    <StopwatchContainer srcImg='./Images/chronometreLogo.png' />
                </Provider>
                <Provider store={counterStore}>
                    <Counter initialValue={0} intitsrcImgLogo='https://cdn-icons-png.flaticon.com/128/2128/2128441.png' />
                </Provider>
                <Provider store={cardStore}>
                    <Card srcImgLogo='./Images/DamedeCoeur.jpg' cardTitle='La Dame de c&#x153;ur'
                        cardDescritption={
                            "Les dames repr\u00e9sentent chacune un personnage, typiquement une femme noble en costume associ\u00e9 \u00e0 l'Europe des xvie et xviie si\u00e8cles. \
                            \nChacune des figures des cartes fran\u00e7aises porte un nom, inscrit dans un coin, dont l'origine et la signification sont incertaines :\n \
                            Dame de c\u0153ur : *Judith* r\u00e9f\u00e9rence possible \u00e0 Judith, h\u00e9ro\u00efne biblique."} />
                </Provider>
            </div>
        </React.StrictMode>,
    );
}
