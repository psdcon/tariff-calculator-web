import React from 'react';
import './styles.css';
import * as consts from '../../../utils/consts'

export const RoutineCard = function ({routine, onRoutineClick}) {
    let shapedSkillList = [];
    for (let i = 0; i < consts.numRows; i++) {
        let skill = routine.skills[i];
        const shape = routine.shapes[i];
        if (shape) {
            const shapeName = consts.shapeNames[shape];
            skill = `${skill} (${shapeName})`;
        }
        shapedSkillList.push(<li key={i}>{skill}</li>)
    }

    return (
        <div className="routine" onClick={onRoutineClick}>
            <div className="routine-header">
                <strong>{routine.level} {routine.name}</strong>
                <br/>
                <small>{routine.competition} {routine.year}</small>
            </div>
            <div className="routine-body">
                <ol>
                    {shapedSkillList}
                </ol>
            </div>
        </div>
    )
};