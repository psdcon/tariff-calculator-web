import React from 'react';
import './styles.css';

// RoutineCard block
export const RoutineLevel = function ({routineSkillLevel, routines}) {

    return (
        <div className='routines-level__row'>
            <h4>{routineSkillLevel}</h4>
            <div className={'routines-level__scroll'}>
                {routines}
            </div>
        </div>
    )
};