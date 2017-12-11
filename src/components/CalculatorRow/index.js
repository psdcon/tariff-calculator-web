import React from 'react';
import {ShapeBtn} from "../ShapeButton";
import {TariffSelect} from "../TariffSelect";
import {FigNotation} from "../FigNotation";
import {TariffValue} from "../TariffValue";
import './styles.css';


// Calculator row
export const CalculatorRow = ({
                                  index, options, onSkillChange, onShapeClick,
                                  skillIndex, shapeIndex, tariff, tariffValueRpt,
                                  figNotation, error
                              }) => (
    <div className="calculator__row">
        <span className="index">{index}. </span>
        <TariffSelect skillIndex={skillIndex} options={options} onSkillChange={onSkillChange} error={error}/>
        <ShapeBtn shapeIndex={shapeIndex} onClick={onShapeClick}/>
        <FigNotation figNotation={figNotation}/>
        <TariffValue tariff={tariff} tariffValueRpt={tariffValueRpt}/>
    </div>
);