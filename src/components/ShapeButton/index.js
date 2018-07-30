import React from 'react';
import './styles.css';

import tuck from './images/tariff_btn_tuck.png'
import pike from './images/tariff_btn_pike.png'
import straight from './images/tariff_btn_straight.png'

const images = [
    {
        url: tuck,
        alt: 'Tuck'
    },
    {
        url: pike,
        alt: 'Pike'
    },
    {
        url: straight,
        alt: 'Straight'
    },
];

export const ShapeBtn = function({shapeIndex, onClick}) {
    const image = (shapeIndex === null) ? images[0]: images[shapeIndex];
    const disabled = shapeIndex === null;

    const title = disabled? 'This skill cannot have a shape': 'Click to change shape';

    return (
        <button type="button" className="btn-bs4 shape-btn" title={title} disabled={disabled} onClick={onClick}>
            <img src={image.url} alt={image.alt}/>
        </button>
    )
};