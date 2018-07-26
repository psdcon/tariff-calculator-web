import React, {Component} from 'react';
import './styles.css';
// Import the bootstrap 4 styles
// Required to make Calculator look awesome. (so maybe they should be part of the calc module...
import './styles_bs4.css';

import {filterSelectOptions, skillIndexFromName} from '../../utils/skill_loader'
import skills from '../../data/databases/new_tariff_skills.json'
import routines from '../../data/databases/new_routines.json'
import * as consts from '../../utils/consts'
import {CalculatorRow} from "../CalculatorRow";
import {RoutineLevel} from "../RoutinesLevel";
import {RoutineCard} from "../RoutinesLevel/RoutineCard";

export class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            skills: new Array(10).fill(null),
            shapes: new Array(10).fill(null),
            tariffs: new Array(10).fill(0.0),
            figNotations: new Array(10).fill(new Array(3).fill("")),

            errorsPosition: new Array(10).fill(""),
            errorsRepeat: new Array(10).fill(""),
            showRoutines: false
        };
    }

    // componentDidMount() {
    //     // let skills = new Array(10).fill(null);
    //     // skills[0] = 12;
    //     // skills[1] = 1;
    //     // skills[2] = 12;
    //     // this.setState({
    //     //     skills: skills
    //     // });
    //     // this.handleSkillChange(0, {value: skills[0]});
    //     let skz = [109, 2, 3, 4, 55, 60, 7].concat(new Array(3).fill(null));
    //     let shps = [1, 1].concat(new Array(8).fill(1));
    //     this.setStateAllRows(skz, shps)
    // }

    setStateAllRows(skillIndexes, shapesState) {
        if (skillIndexes.length !== consts.numRows || shapesState.length !== consts.numRows) {
            console.log('Error: Too many skills in routine:', skillIndexes.length, shapesState.length);
        }

        let tariffsState = new Array(10).fill(0.0);
        let figNotationsState = new Array(10).fill(new Array(3).fill(""));

        // Get tariff values
        for (let i = 0; i < skillIndexes.length; i++) {
            let skillIndex = skillIndexes[i];
            if (skillIndex === null) {
                shapesState[i] = null;
                continue;
            }

            // Get skill obj
            let skill = skills[skillIndex];
            if (typeof skill === 'undefined') {
                console.log('Error: Could not find skill index in list of skills:', skillIndex);
                skillIndexes[i] = null;
                shapesState[i] = null;
                continue;
            }

            // If there was a shape specified but the skill shouldn't have one.
            if (shapesState[i] !== null && skill.shapeBonus === 0) {
                console.log('Warning: Resetting shape bonus of', shapesState[i], 'to null for skill', skill.name);
                shapesState[i] = null;
            }
            // Else a shape wasn't provided but it should be enabled...
            else if (shapesState[i] === null && skill.shapeBonus > 0) {
                shapesState[i] = 0;
            }

            // Updates states with appropriate values from skill obj
            figNotationsState[i] = skill.figNotation;
            if (shapesState[i])
                figNotationsState[i][2] = consts.figNotationShapes[shapesState[i]];

            let tariff = skill.tariff;
            if (shapesState[i] > 0) { // shapeIndex = 1,2 is pike, straddle
                tariff += skill.shapeBonus;
            }
            tariffsState[i] = tariff;
        }

        // Check errors on all rows
        const errorsPosState = this.checkPositionErrors(skillIndexes);
        const errorsRptState = this.checkRepeatErrors(skillIndexes, shapesState);

        // Update state with results
        this.setState({
            skills: skillIndexes,
            shapes: shapesState,
            tariffs: tariffsState,
            figNotations: figNotationsState,
            errorsPosition: errorsPosState,
            errorsRepeat: errorsRptState
        });
    }

    handleRoutineLoad(routineIndex) {
        // console.log(routineIndex);
        const routine = routines[routineIndex];
        const routineSkillIndices = routine.skills.map((skillName)=>(
            skillIndexFromName(skillName)
        ));
        // checkout barani shape bonus
        this.setStateAllRows(routineSkillIndices, routine.shapes)
    }

    handleRoutinesToggle() {
        const showRoutines = !this.state.showRoutines;
        this.setState({showRoutines: showRoutines})
    }

    // onChange handler for react-selects
    handleSkillChange(i, data) {
        let skillsState = this.state.skills.slice();
        let tariffsState = this.state.tariffs.slice();
        let shapesState = this.state.shapes.slice();
        let figNotationsState = this.state.figNotations.slice();

        if (data === null) {
            skillsState[i] = null;
            shapesState[i] = null;
            tariffsState[i] = 0.0;
            figNotationsState[i] = new Array(3).fill("");
        } else {
            skillsState[i] = data.value;
            let skill = skills[skillsState[i]];
            if (skill.shapeBonus > 0.0) {
                // Enable shape button
                shapesState[i] = 0;
            }
            tariffsState[i] = skill.tariff;
            figNotationsState[i] = skill.figNotation;
        }

        const errorsPosState = this.checkPositionErrors(skillsState);
        const errorsRptState = this.checkRepeatErrors(skillsState, shapesState);

        this.setState({
            skills: skillsState,
            shapes: shapesState,
            tariffs: tariffsState,
            figNotations: figNotationsState,
            errorsPosition: errorsPosState,
            errorsRepeat: errorsRptState
        });
    }

    handleShapeClick(i) {
        let tariffsState = this.state.tariffs.slice();
        let shapesState = this.state.shapes.slice();
        let figNotationsState = this.state.figNotations.slice();
        const skill = skills[this.state.skills[i]];

        // Handle rolling over shapeIndex to keep it between 0 and 2 inclusive
        let shapeIndex = shapesState[i];
        shapeIndex = (shapeIndex === 2) ? 0 : shapeIndex + 1;
        shapesState[i] = shapeIndex;

        // Update FIG Notation
        figNotationsState[i][2] = consts.figNotationShapes[shapeIndex];

        let tariff = skill.tariff;
        if (shapeIndex > 0) { // shapeIndex = 1,2 is pike, straddle
            tariff += skill.shapeBonus;
        }
        tariffsState[i] = tariff;

        let skillsState = this.state.skills.slice();
        const errorsRptState = this.checkRepeatErrors(skillsState, shapesState);

        this.setState({
            shapes: shapesState,
            tariffs: tariffsState,
            figNotations: figNotationsState,
            errorsRepeat: errorsRptState
        });
    }

    render() {
        let score = 0;
        let calcRows = [];
        for (let i = 0; i < consts.numRows; i++) {
            // Flag to <TariffValue> to show 'Rpt' instead of <this.state.tariffs[i]>
            const tariffValueRpt = Boolean(this.state.errorsRepeat[i]);
            if (!tariffValueRpt) {
                score += this.state.tariffs[i];
            }

            // If there's an error with the position, highlight the offending row.
            const error = (this.state.errorsPosition[i]) ? "highlight-red" : null;

            // Get the select options for this row, filtered.
            const selectedOptions = this.filterOptions(i);

            calcRows.push(
                <CalculatorRow
                    key={i}
                    index={i + 1}
                    options={selectedOptions}
                    onSkillChange={(data) => this.handleSkillChange(i, data)}
                    onShapeClick={() => this.handleShapeClick(i)}
                    skillIndex={this.state.skills[i]}
                    shapeIndex={this.state.shapes[i]}
                    tariff={this.state.tariffs[i]}
                    tariffValueRpt={tariffValueRpt}
                    figNotation={this.state.figNotations[i]}
                    error={error}
                />
            )
        }

        // Render routines if the toggle button has been pressed.
        let routinesHTML = [];
        if (this.state.showRoutines) {
            // Create RoutineCard cards for each level
            let routinesByLevel = {'Novice': [], 'Intermediate': [], 'Intervanced': [], 'Advanced': [], 'Elite': []};
            for (let i = 0; i < routines.length; i++) {
                const routine = routines[i];
                routinesByLevel[routine.level].push(
                    <RoutineCard
                        key={i}
                        routine={routine}
                        onRoutineClick={() => this.handleRoutineLoad(i)}/>
                )
            }

            // Create routine rows for each skill level to contain the RoutineCards
            let count = 0;
            for (let skillLevel in routinesByLevel) {
                if (routinesByLevel.hasOwnProperty(skillLevel)) {
                    count += 1;
                    routinesHTML.push(
                        <RoutineLevel
                            key={count}
                            routineSkillLevel={skillLevel}
                            routines={routinesByLevel[skillLevel]}/>
                    );
                }
            }
        }

        return (
            <div className="calculator">
                <div className="routine-btn-cont">
                    <button className="btn btn-default routines-btn" onClick={() => this.handleRoutinesToggle()}>Routines</button>
                </div>

                <h4 className="calculator__score">
                    <small>Total Tariff:&nbsp;</small>
                    {score.toFixed(1)}
                </h4>
                <div className="calculator__rows">
                    {calcRows}
                </div>

                {/*The routines are stuck in here for convenience...*/}
                <div className="calculator__errors">
                    {routinesHTML}
                    {this.generatePositionErrors()}
                    {this.generateRepeatErrors()}
                </div>
            </div>
        )
    }

    generateRepeatErrors() {
        let errorsRpt = [];
        for (let i = 0; i < consts.numRows; i++) {
            //Check repeat errors
            let repeat = this.state.errorsRepeat[i];
            if (repeat) {
                errorsRpt.push(<div key={i}>{repeat}</div>);
            }
        }
        return (errorsRpt.length === 0) ?
            null :
            (<div className="errors highlight-orange">
                {errorsRpt}
                <small>
                    <div>Repeats only allowed in Voluntary routines.</div>
                    <div>No tariff is awarded for repeated skill.</div>
                </small>
            </div>);
    }

    generatePositionErrors() {
        let errorsPos = [];
        for (let i = 0; i < consts.numRows; i++) {
            // Check position errors
            let position = this.state.errorsPosition[i];
            if (position !== "") {
                errorsPos.push(<div key={i}>{position}</div>);
            }
        }
        return (errorsPos.length === 0) ?
            null :
            <div className="errors highlight-red">{errorsPos}</div>;
    }

    // Called 10 times whenever a skill is changed to filter <select> options
    filterOptions(i) {
        if (i === 0) {
            return filterSelectOptions('feet');
        }
        // If there's a previous skill
        else if (this.state.skills[i - 1] !== null) {
            // If not the last row (don't off by one), and there's a next skill
            if (i !== consts.numRows - 1 && this.state.skills[i + 1] !== null) {
                return filterSelectOptions(
                    skills[this.state.skills[i - 1]].endPosition,
                    skills[this.state.skills[i + 1]].startPosition
                );
            } else {
                // No next row, i.e. last row
                return filterSelectOptions(skills[this.state.skills[i - 1]].endPosition);
            }
        }
        else {
            return filterSelectOptions()
        }
    }

    checkPositionErrors(skillsState) {
        // Check for landing and starting position matches
        let errorsPosState = new Array(10).fill("");

        for (let i = 0; i < 10; i++) {
            // const skill = skills[skillsState[i]];

            // Landing of previous == start of this
            if (i > 0
                && skillsState[i] !== null
                && skillsState[i - 1] !== null
                && !(skills[skillsState[i - 1]].endPosition === skills[skillsState[i]].startPosition)) {

                errorsPosState[i] = `Skill ${i + 1} starts from ${skills[skillsState[i]].startPosition} `
                    + `but the previous skill ends with ${skills[skillsState[i - 1]].endPosition}.`;
            }
            if (i === 0
                && skillsState[i] !== null
                && skills[skillsState[i]].startPosition !== 'feet') {

                errorsPosState[i] = `The first skill should start from feet.`;
            }
            // if (i < 10
            //     && skillsState[i + 1] !== null
            //     && !(skills[skillsState[i + 1]].startPosition === skill.endPosition)) {
            //
            //     errorsPosState[i] += `Skill ${i + 1} ends with ${skill.endPosition} but the next skill starts from ${skills[skillsState[i + 1]].startPosition}.`;
            // }
        }

        return errorsPosState;
    }

    checkRepeatErrors(skillsState, shapesState) {
        let errorsRptState = new Array(10).fill("");

        // Check for repeat
        for (let i = 10; i >= 0; i--) {
            for (let k = i - 1; k >= 0; k--) {
                if (skillsState[i] !== null
                    && skillsState[k] !== null
                    && skillsState[i] === skillsState[k]
                    && shapesState[i] === shapesState[k]) {

                    errorsRptState[i] = `Skill ${k + 1} and ${i + 1} are the same.`;
                }
            }
        }

        return errorsRptState;
    }
}
