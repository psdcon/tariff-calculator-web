import React from 'react';
import './styles.css';

// Tariff Value Text
export const TariffValue = ({tariff, tariffValueRpt}) => (
    (tariffValueRpt) ?
        <span className="tariff-value highlight-orange">Rpt</span>
        :
        <span className="tariff-value">{tariff.toFixed(1)}</span>
);