import React from 'react';
import Select from "react-select-plus";
// Commented out because they're in my css
// Be sure to include styles at some point, probably during your bootstrapping
import '../../../node_modules/react-select-plus/dist/react-select-plus.css';
import './styles.css';


export const TariffSelect = ({skillIndex, options, onSkillChange, error}) => (
    <Select value={skillIndex} options={options} onChange={onSkillChange} className={error}
                optionRenderer={optionRenderer} filterOptions={fuzzyFilterOptions}/>
);


// Takes an options object, outputs a styled select-option element
const optionRenderer = (option) => (
    (option.makeDim) ?
        <div className="clearfix" style={{color: '#aaa'}}>{option.label} <span className="pull-right">{option.tariff}</span></div>
        :
        <div className="clearfix">{option.label} <span className="pull-right">{option.tariff}</span></div>
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