import React from 'react';
import './styles.css';
import * as consts from '../../utils/consts'

const shapeNames = ['Tuck', 'Straddle', 'Straight'];

// Routine block
export const Routine = function ({routine, onRoutineClick}) {
    let shaped_skill_list = [];
    for (let i = 0; i < consts.num_rows; i++) {
        let skill = routine.skills[i];
        const shape = routine.shapes[i];
        if (shape) {
            const shapeName = shapeNames[shape];
            skill = `${skill} (${shapeName})`;
        }
        shaped_skill_list.push(<li key={i}>{skill}</li>)
    }

    return (
        <div className="routine" onClick={onRoutineClick}>
            <div><strong>{routine.level} {routine.name}</strong></div>
            <div><small>{routine.competition} {routine.year}</small></div>
            <ol>
                {shaped_skill_list}
            </ol>
            {/*<div className="btn btn-default">Load</div>*/}
        </div>
    )
};