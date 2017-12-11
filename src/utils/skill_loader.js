import {skills} from "../data/tariff_skills";

// Does some stuff
//TODO exaplin these functions
function buildCategories() {
    const selectCategories = {};

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
                // Custom attrs on Select Options
                'tariff': skill.tariff.toFixed(1),
                'start_position': skill.start_position,
                'end_position': skill.end_position,
                'makeDim': false
            });
        }
    }
    return selectCategories;
}

function buildOptions(selectCategories) {
    let selectOptions = [];
    for (let category in selectCategories) {
        const options = selectCategories[category];
        selectOptions.push({
            'label': category,
            'options': options
        })
    }
    return selectOptions;
}

let selectCategories = buildCategories();
let selectOptions = buildOptions(selectCategories);

export function filterSelectOptions(startPosition, endPosition = null) {
    let newOptions = JSON.parse(JSON.stringify(selectOptions));
    if (startPosition === null && endPosition === null){
        return newOptions

    }
    for (let i = 0; i < newOptions.length; i++) {
        let options = newOptions[i].options;
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
    return newOptions;
}