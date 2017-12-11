import React from 'react';
import './styles.css';

// Tariff Value Text
export const TariffValue = ({tariff, tariffValueRpt}) => (
    (tariffValueRpt) ?
        <input type="text" className="form-control-bs4 tariff-value highlight-orange" value="Rpt" disabled/>
        :
        <input type="text" className="form-control-bs4 tariff-value" value={tariff.toFixed(1)} disabled/>
);