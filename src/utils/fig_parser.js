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