import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select-plus";
// Be sure to include styles at some point, probably during your bootstrapping
// import '../node_modules/react-select-plus/dist/react-select-plus.css';
import "./style.css";


// Set up the select options
// Group by category
const selectCategories = {};
let selectOptions = [];

for (let i = 0; i < skills.length; i++) {
    const category = skills[i].category;
    // Make array for each category
    if (!selectCategories[category]) {
        selectCategories[category] = [];
    }

    let skill = skills[i];
    if (skill.comp === 1) {
        selectCategories[category].push({
            'value': i,
            'label': skill.name,
            // Custom attrs
            'tariff': skill.tariff.toFixed(1),
            'start_position': skill.start_position,
            'end_position': skill.end_position,
            'makeDim': false
        });
    }
}

for (let category in selectCategories) {
    const options = selectCategories[category];
    selectOptions.push({
        'label': category,
        'options': options
    })
}


// Helper Functions
function filterOps(startPosition, endPosition = null) {
    let newOps = JSON.parse(JSON.stringify(selectOptions));
    for (let i = 0; i < newOps.length; i++) {
        let options = newOps[i].options;
        for (let k = 0; k < options.length; k++) {
            let option = options[k];
            if (option.start_position !== startPosition) {
                option.makeDim = true;
            }
            if (endPosition !== null
                && option.end_position !== endPosition) {
                option.makeDim = true;
            }
        }
    }
    return newOps;
}

// Takes an options object, outputs a styled select-option element
const optionRenderer = (option) => (
    (option.makeDim) ?
        <div className="clearfix" style={{color: '#aaa'}}>{option.label} <span className="pull-right">{option.tariff}</span></div>
        :
        <div className="clearfix">{option.label} <span className="pull-right">{option.tariff}</span></div>
);
const saltoRegex = /^(\d{1,2})/; //new RegExp("^(\d{1,2}) ", "g");
const shapeRegex = /([o</])$/; // new RegExp("(o|<|/)", "gi");
function figNotationArray(fig_notation) {
    let res = saltoRegex.exec(fig_notation);
    let saltos = (res === null) ? "" : res[1];

    res = shapeRegex.exec(fig_notation);
    let shape = (res === null) ? "" : res[1];

    let twists = fig_notation.substr(saltos.length);
    twists = twists.replace(shape, "").trim();

    let fig_array = [saltos, twists, shape];
    return fig_array
}

// function splitAllFig() {
//     let figs = ["o", "<", "0 -", "0 1", "0 2", "0 -", "0 1", "0 1", "0 -", "0 1", "0 2", "0 2", "1 -", "1 1", "2 1", "1 -", "1 1", "1 2", "0 2", "2 1 /", "", "1 -", "1 1", "2 1", "1 -", "1 1", "1 2", "0 2", "2 1", "2 3", "", "4 - o", "4 - o", "4 1 o", "3 - o", "3 1", "7 - o", "3 -", "4 - o", "4 - o", "3 - o", "5 - o", "5 - o", "5 1 o", "5 1 -", "5 3 /", "5 5 /", "5 7 /", "9 - 1 o", "4 3 /", "4 5 /", "4 7 /", "7 2 - o", "4 2 /", "4 4 /", "8 - - o", "8 - - o", "8 - 1 o", "8 - 3 o", "8 - 5 o", "8 1 - o", "8 2 1 o", "8 2 3 o", "8 2 4 o", "11 - - - o", "8 - - o", "8 2 1 o", "8 4 4 o", "8 1 1 o", "8 1 3 o", "8 1 5 o", "8 2 - o", "8 - 2 o", "8 2 2 o", "8 - 2 o", "12 - - 1 <", "12 - - 1 o", "12 - - 3 o", "12 1 - 1 o", "12 1 - 3 o", "16 - - - 1 o", "", "5 - /", "4 2 /", "4 1 /"];
//     let figArray = [];
//     for (let i = 0; i < figs.length; i++) {
//         let fig = figs[i];
//         let newFig = figNotationArray(fig);
//         figArray.push(newFig);
//     }
//     let str = JSON.stringify(figArray);
//     console.log(str);
// }
// splitAllFig();


// React Components
// Shape Button
// const shapes = ['/images/pages/tariff_calculator/tariff_btn_tuck.png', '/images/pages/tariff_calculator/tariff_btn_pike.png', '/images/pages/tariff_calculator/tariff_btn_straight.png'];
const shapes = ['/images/tariff_btn_tuck.png', '/images/tariff_btn_pike.png', '/images/tariff_btn_straight.png'];
const alts = ['Tuck', 'Pike', 'Straight'];
const ShapeBtn = ({shapeIndex, onClick}) => (
    (shapeIndex === null) ?
        <button type="button" className="btn-bs4 shape-btn" disabled="true"><img src={shapes[0]} alt={alts[0]}/></button>
        :
        <button type="button" className="btn-bs4 shape-btn" onClick={onClick}><img src={shapes[shapeIndex]} alt={alts[shapeIndex]}/></button>
);

// Tariff Value Text
const TariffValue = ({tariff}) => (
    (tariff !== "Rpt") ?
        <input type="text" className="form-control-bs4 tariff-value" value={tariff.toFixed(1)} disabled></input>
        :
        <input type="text" className="form-control-bs4 tariff-value highlight-orange" value={tariff} disabled></input>
);

const FigNotation = ({figNotation}) => (
    <div className="fig_notation">
        <span title="Number of quarter somersault rotations">{figNotation[0]}</span>
        <span title="Number of half twists in each somersault">{figNotation[1]}</span>
        <span title="Shape of skill">{figNotation[2]}</span>
    </div>
);

// Calculator row
const Row = ({index, options, onSkillChange, onShapeClick, skillIndex, shapeIndex, tariff, figNotation, error}) => (
    <div className="calculator-row">
        <span className="index">{index}. </span>
        <Select value={skillIndex} options={options} onChange={onSkillChange} className={error} optionRenderer={optionRenderer} filterOptions={fuzzyFilterOptions}/>
        <ShapeBtn shapeIndex={shapeIndex} onClick={onShapeClick}/>
        <FigNotation figNotation={figNotation}/>
        <TariffValue tariff={tariff}/>
    </div>
);

// Fuzzy Search for filtering options
function fuzzyFilterOptions(options, filterValue, excludeOptions, props) {
    filterValue = filterValue.toUpperCase();

    return options.filter(function (option) {
        if (!filterValue) return true;

        option = option.label.toUpperCase();

        let j = -1; // remembers position of last found character

        // consider each filterValue character one at a time
        for (let i = 0; i < filterValue.length; i++) {
            const l = filterValue[i];
            if (l === ' ') continue;     // ignore spaces

            j = option.indexOf(l, j + 1);     // search for character & update position
            if (j === -1) return false;  // if it's not found, exclude this item
        }
        return true;
    })
}


class Calculator extends React.Component {
    constructor() {
        super();

        this.state = {
            skills: new Array(10).fill(null),
            shapes: new Array(10).fill(null),
            tariffs: new Array(10).fill(0.0),
            fig_notations: new Array(10).fill(new Array(3).fill("")),

            errors_position: new Array(10).fill(""),
            errors_repeat: new Array(10).fill(""),
        };
    }

    componentDidMount() {
        // let skills = new Array(10).fill(null);
        // skills[0] = 12;
        // skills[1] = 1;
        // skills[2] = 12;
        // this.setState({
        //     skills: skills
        // });
        // this.handleSkillChange(0, {value: skills[0]});
    }

    setStateAllRows(skillsState, shapesState) {
        let tariffsState = this.state.tariffs.slice();
        let figNotationsState = this.state.fig_notations.slice();

        // Get tariff values
        for (let i in skillsState) {
            let skill = skills[i];
            tariffsState[i] = skill.tariff;
            figNotationsState[i] = skill.fig_notation;
        }

        const errorsPosState = this.checkPositionErrors(skillsState);
        const errorsRptState = this.checkRepeatErrors(skillsState, shapesState);

        this.setState({
            skills: skillsState,
            shapes: shapesState,
            tariffs: tariffsState,
            errors_position: errorsPosState,
            errors_repeat: errorsRptState
        });
    }


    // onChange handler for react-selects
    handleSkillChange(i, data) {
        let skillsState = this.state.skills.slice();
        let tariffsState = this.state.tariffs.slice();
        let shapesState = this.state.shapes.slice();
        let figNotationsState = this.state.fig_notations.slice();

        if (data === null) {
            skillsState[i] = null;
            shapesState[i] = null;
            tariffsState[i] = 0.0;
            figNotationsState[i] = new Array(3).fill("");
        } else {
            skillsState[i] = data.value;
            let skill = skills[skillsState[i]];
            if (skill.shape_bonus > 0.0) {
                // Enable shape button
                shapesState[i] = 0;
            }
            tariffsState[i] = skill.tariff;
            figNotationsState[i] = skill.fig_notation;

        }

        const errorsPosState = this.checkPositionErrors(skillsState);
        const errorsRptState = this.checkRepeatErrors(skillsState, shapesState);

        this.setState({
            skills: skillsState,
            shapes: shapesState,
            tariffs: tariffsState,
            fig_notations: figNotationsState,
            errors_position: errorsPosState,
            errors_repeat: errorsRptState
        });
    }

    figNotationShapes = ['o', '<', '/'];

    handleShapeClick(i) {
        let tariffsState = this.state.tariffs.slice();
        let shapesState = this.state.shapes.slice();
        let figNotationsState = this.state.fig_notations.slice();
        const skill = skills[this.state.skills[i]];

        let shapeIndex = shapesState[i];
        shapeIndex = (shapeIndex === 2) ? 0 : shapeIndex + 1;
        shapesState[i] = shapeIndex;

        // Update FIG Notation
        figNotationsState[i][2] = this.figNotationShapes[shapeIndex];

        let tariff = skill.tariff;
        if (shapeIndex > 0) { // shapeIndex = 1,2 is pike, straddle
            tariff += skill.shape_bonus;
        }
        tariffsState[i] = tariff;

        let skillsState = this.state.skills.slice();
        const errorsRptState = this.checkRepeatErrors(skillsState, shapesState);

        this.setState({
            shapes: shapesState,
            tariffs: tariffsState,
            fig_notations: figNotationsState,
            errors_repeat: errorsRptState
        });
    }

    render() {
        let rows = [];
        let score = 0;
        let errorsPos = [], errorsRpt = [];
        for (let i = 0; i < 10; i++) {
            let tariff = this.state.tariffs[i];
            let repeat = this.state.errors_repeat[i];
            if (repeat !== "") {
                tariff = "Rpt";
                errorsRpt.push(<div key={i}>{repeat}</div>);
            }
            else {
                score += this.state.tariffs[i];
            }

            let position = this.state.errors_position[i];
            let error = null;
            if (position !== "") {
                errorsPos.push(<div key={i}>{position}</div>);
                error = "highlight-red"
            }

            let filteredOps = selectOptions;
            if (i === 0) {
                filteredOps = filterOps('feet');
            }
            else if (this.state.skills[i - 1] !== null) {
                if (i !== 10 && this.state.skills[i + 1] !== null) {
                    filteredOps = filterOps(
                        skills[this.state.skills[i - 1]].end_position,
                        skills[this.state.skills[i + 1]].start_position);
                } else {
                    filteredOps = filterOps(skills[this.state.skills[i - 1]].end_position);
                }
            }

            rows.push(
                <Row key={i}
                     index={i + 1}
                     options={filteredOps}
                     onSkillChange={(data) => this.handleSkillChange(i, data)}
                     onShapeClick={() => this.handleShapeClick(i)}
                     skillIndex={this.state.skills[i]}
                     shapeIndex={this.state.shapes[i]}
                     tariff={tariff}
                     figNotation={this.state.fig_notations[i]}
                     error={error}
                />)
        }

        let pos_errors = (errorsPos.length === 0) ? null : <div className="errors highlight-red">{errorsPos}</div>;
        let rpt_errors = (errorsRpt.length === 0) ? null : <div className="errors highlight-orange">
            {errorsRpt}
            <small>
                <div>Repeats only allowed in Voluntary routines.</div>
                <div>No tariff is awarded for repeated skill.</div>
            </small>
        </div>;

        return (
            <div className="calculator">
                <div className="calculator__main">
                    <h4 className="score">
                        <small>Total Tariff:&nbsp;</small>
                        {score.toFixed(1)}</h4>
                    {rows}
                    <div className="clearfix mt-2">
                        {/*<button className="btn btn-primary">Save</button>*/}
                        <button className="btn btn-default pull-right">Routines</button>
                    </div>
                </div>
                <div className="calculator__errors">
                    {pos_errors}
                    {rpt_errors}
                </div>
            </div>
        )
    }

    checkPositionErrors(skillsState) {
        // Check for landing and starting position matches
        let errorsPosState = new Array(10).fill("");

        for (let i = 0; i < 10; i++) {
            const skill = skills[skillsState[i]];

            // Landing of previous == start of this
            if (i > 0
                && skillsState[i] !== null
                && skillsState[i - 1] !== null
                && !(skills[skillsState[i - 1]].end_position === skills[skillsState[i]].start_position)) {

                errorsPosState[i] = `Skill ${i + 1} starts from ${skills[skillsState[i]].start_position} `
                    + `but the previous skill ends with ${skills[skillsState[i - 1]].end_position}.`;
            }
            if (i === 0
                && skillsState[i] !== null
                && skills[skillsState[i]].start_position !== 'feet') {

                errorsPosState[i] = `The first skill should start from feet.`;
            }
            // if (i < 10
            //     && skillsState[i + 1] !== null
            //     && !(skills[skillsState[i + 1]].start_position === skill.end_position)) {
            //
            //     errorsPosState[i] += `Skill ${i + 1} ends with ${skill.end_position} but the next skill starts from ${skills[skillsState[i + 1]].start_position}.`;
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

ReactDOM.render(
    <Calculator />,
    document.getElementById('react-container')
);
