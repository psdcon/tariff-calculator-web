import React from 'react';
import './styles.css';

export const FigNotation = ({figNotation}) => (
    <div className="fig-notation">
        <span title="Number of quarter somersault rotations">{figNotation[0]}</span>
        <span title="Number of half twists in each somersault">{figNotation[1]}</span>
        <span title="Shape of skill">{figNotation[2]}</span>
    </div>
);