import skills from '../data/databases/new_tariff_skills.json'

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
                'startPosition': skill.startPosition,
                'endPosition': skill.endPosition,
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
    // Make a copy of object in a really blunt way...
    let newOptions = JSON.parse(JSON.stringify(selectOptions));
    if (startPosition === null && endPosition === null){
        return newOptions

    }
    for (let i = 0; i < newOptions.length; i++) {
        let options = newOptions[i].options;
        for (let k = 0; k < options.length; k++) {
            let option = options[k];
            if (option.startPosition !== startPosition) {
                option.makeDim = true;
            }
            if (endPosition !== null
                && option.endPosition !== endPosition) {
                option.makeDim = true;
            }
        }
    }
    return newOptions;
}

export function skillIndexFromName(skillName) {
    for(let i = 0; i < skills.length; i += 1) {
        if(skills[i]['name'] === skillName) {
            return i;
        }
    }
    console.log('Error: Didn\'t find skill:', skillName);
    return -1;
}