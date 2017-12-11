//  ids are not used

let skills = [
  {
    "name": "Tuck Jump",
    "comp": 1,
    "category": "Shape",
    "fig_notation": ["","","o"],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Pike Jump",
    "comp": 1,
    "category": "Shape",
    "fig_notation": ["","","<"],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Straddle Jump",
    "comp": 1,
    "category": "Shape",
    "fig_notation": ["0","-",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half Twist Jump",
    "comp": 1,
    "category": "Twist",
    "fig_notation": ["0","1",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full Twist Jump",
    "comp": 1,
    "category": "Twist",
    "fig_notation": ["0","2",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Seat Drop",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","-",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "seat"
  },
  {
    "name": "Half Twist to Seat Drop",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","1",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "seat"
  },
  {
    "name": "Seat Half Twist To Seat",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","1",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "seat"
  },
  {
    "name": "To Feet from Seat",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","-",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "feet"
  },
  {
    "name": "Half Twist to Feet from Seat",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","1",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "seat"
  },
  {
    "name": "Full Twist to Feet from Seat",
    "comp": 1,
    "category": "Seat",
    "fig_notation": ["0","2",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "seat"
  },
  {
    "name": "Roller",
    "comp": 0,
    "category": "Seat",
    "fig_notation": ["0","2",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "seat"
  },
  {
    "name": "Front Drop",
    "comp": 1,
    "category": "Front",
    "fig_notation": ["1","-",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "front"
  },
  {
    "name": "Half Twist to Front Drop",
    "comp": 1,
    "category": "Front",
    "fig_notation": ["1","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "front"
  },
  {
    "name": "Full Twist to Front Drop",
    "comp": 0,
    "category": "Front",
    "fig_notation": ["2","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "front"
  },
  {
    "name": "To Feet from Front",
    "comp": 1,
    "category": "Front",
    "fig_notation": ["1","-",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "feet"
  },
  {
    "name": "Half Twist to Feet from Front",
    "comp": 1,
    "category": "Front",
    "fig_notation": ["1","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "feet"
  },
  {
    "name": "Full Twist to Feet from Front",
    "comp": 0,
    "category": "Front",
    "fig_notation": ["1","2",""],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "feet"
  },
  {
    "name": "Log Roll",
    "comp": 0,
    "category": "Front",
    "fig_notation": ["0","2",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "front"
  },
  {
    "name": "Tom Cruise",
    "comp": 0,
    "category": "Front",
    "fig_notation": ["2","1","/"],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "front"
  },
  {
    "name": "Turntable",
    "comp": 0,
    "category": "Front",
    "fig_notation": ["","",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "front",
    "end_position": "front"
  },
  {
    "name": "Back Drop",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["1","-",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Half Twist to Back Drop",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["1","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Full Twist to Back Drop",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["2","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "To Feet from Back",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["1","-",""],
    "tariff": 0.1,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Half Twist to Feet from Back",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["1","1",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Full Twist to Feet from Back",
    "comp": 1,
    "category": "Back",
    "fig_notation": ["1","2",""],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Cat Twist",
    "comp": 0,
    "category": "Back",
    "fig_notation": ["0","2",""],
    "tariff": 0.2,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Cradle",
    "comp": 0,
    "category": "Back",
    "fig_notation": ["2","1",""],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Corkscrew",
    "comp": 0,
    "category": "Back",
    "fig_notation": ["2","3",""],
    "tariff": 0.5,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Toilet Bowl",
    "comp": 0,
    "category": "Back",
    "fig_notation": ["","",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Front Somersault",
    "comp": 1,
    "category": "Front Somersault",
    "fig_notation": ["4","-","o"],
    "tariff": 0.5,
    "shape_bonus": 0.1,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Barani",
    "comp": 1,
    "category": "Front Somersault",
    "fig_notation": ["4","1","o"],
    "tariff": 0.6,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Crash Dive",
    "comp": 1,
    "category": "Front Somersault",
    "fig_notation": ["3","-","o"],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Half Twist to Crash Dive",
    "comp": 1,
    "category": "Front Somersault",
    "fig_notation": ["3","1",""],
    "tariff": 0.4,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "Bacj"
  },
  {
    "name": "Bounce Roll",
    "comp": 0,
    "category": "Front Somersault",
    "fig_notation": ["4","-","o"],
    "tariff": 0.5,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "1 and 3 Front Somersault",
    "comp": 1,
    "category": "Front Somersault",
    "fig_notation": ["7","-","o"],
    "tariff": 0.8,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Back Pullover to Feet",
    "comp": 0,
    "category": "Back Somersault",
    "fig_notation": ["3","-",""],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Back Somersault",
    "comp": 1,
    "category": "Back Somersault",
    "fig_notation": ["4","-","o"],
    "tariff": 0.5,
    "shape_bonus": 0.1,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Back Somersault to Seat",
    "comp": 1,
    "category": "Back Somersault",
    "fig_notation": ["4","-","o"],
    "tariff": 0.5,
    "shape_bonus": 0.1,
    "start_position": "feet",
    "end_position": "seat"
  },
  {
    "name": "Lazy Back",
    "comp": 1,
    "category": "Back Somersault",
    "fig_notation": ["3","-","o"],
    "tariff": 0.3,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "front"
  },
  {
    "name": "Cody",
    "comp": 1,
    "category": "Back Somersault",
    "fig_notation": ["5","-","o"],
    "tariff": 0.6,
    "shape_bonus": 0.1,
    "start_position": "front",
    "end_position": "front"
  },
  {
    "name": "Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","-","o"],
    "tariff": 0.6,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Barani Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","1","o"],
    "tariff": 0.7,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Baby Fliffus",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","1 -",""],
    "tariff": 0.7,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Rudy Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","3","/"],
    "tariff": 0.9,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Randy Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","5","/"],
    "tariff": 1.1,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Adolf Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["5","7","/"],
    "tariff": 1.3,
    "shape_bonus": 0,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Half Out Ball Out",
    "comp": 1,
    "category": "Ball Outs",
    "fig_notation": ["9","- 1","o"],
    "tariff": 1.2,
    "shape_bonus": 0.2,
    "start_position": "back",
    "end_position": "feet"
  },
  {
    "name": "Rudolph/Rudi",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","3","/"],
    "tariff": 0.8,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Randolph/Randy",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","5","/"],
    "tariff": 1,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Adolph/Ady",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","7","/"],
    "tariff": 1.2,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Periwinkle",
    "comp": 0,
    "category": "Twisting Single Somersault",
    "fig_notation": ["7","2 -","o"],
    "tariff": 1,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full Back",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","2","/"],
    "tariff": 0.7,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Double Full",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","4","/"],
    "tariff": 0.9,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Double Front",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","- -","o"],
    "tariff": 1,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Double Bounce-Roll",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","- -","o"],
    "tariff": 1,
    "shape_bonus": 0.2,
    "start_position": "back",
    "end_position": "back"
  },
  {
    "name": "Half Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","- 1","o"],
    "tariff": 1.1,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Rudi Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","- 3","o"],
    "tariff": 1.3,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Randy Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","- 5","o"],
    "tariff": 1.5,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In - Back Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","1 -","o"],
    "tariff": 1.1,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full In - Half Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","2 1","o"],
    "tariff": 1.3,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full In - Rudi Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","2 3","o"],
    "tariff": 1.5,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full In - Double Full Out",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["8","2 4","o"],
    "tariff": 1.6,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "2 and 3 Quarter Front Somersault",
    "comp": 1,
    "category": "Double Front Somersaults",
    "fig_notation": ["11","- - -","o"],
    "tariff": 1.3,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Double Back",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","- -","o"],
    "tariff": 1,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Miller",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","2 1","o"],
    "tariff": 1.6,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Poliarush/Miller Plus",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","4 4","o"],
    "tariff": 1.8,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In - Half Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","1 1","o"],
    "tariff": 1.2,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In - Rudi Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","1 3","o"],
    "tariff": 1.4,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In - Randy Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","1 5","o"],
    "tariff": 1.6,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full In - Back Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","2 -","o"],
    "tariff": 1.2,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Back In - Full Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","- 2","o"],
    "tariff": 1.2,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full In - Full Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","2 2","o"],
    "tariff": 1.4,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Full Out",
    "comp": 1,
    "category": "Double Back Somersaults",
    "fig_notation": ["8","- 2","o"],
    "tariff": 1.2,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Triffus",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["12","- - 1","<"],
    "tariff": 1.8,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half Out Triffus",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["12","- - 1","o"],
    "tariff": 1.7,
    "shape_bonus": 0.3,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Rudi Out Triffus",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["12","- - 3","o"],
    "tariff": 1.8,
    "shape_bonus": 0.2,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In Half Out Triffus",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["12","1 - 1","o"],
    "tariff": 1.8,
    "shape_bonus": 0.3,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half In Rudi Out Triffus",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["12","1 - 3","o"],
    "tariff": 2,
    "shape_bonus": 0.3,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Half Out Quad",
    "comp": 1,
    "category": "Tripples +",
    "fig_notation": ["16","- - - 1","o"],
    "tariff": 2.3,
    "shape_bonus": 0.4,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Porpoise/Dolphin",
    "comp": 0,
    "category": "Front Somersault",
    "fig_notation": ["","",""],
    "tariff": 0,
    "shape_bonus": 0,
    "start_position": "seat",
    "end_position": "seat"
  },
  {
    "name": "Back Somersault to Back",
    "comp": 0,
    "category": "Back Somersault",
    "fig_notation": ["5","-","/"],
    "tariff": 0.6,
    "shape_bonus": 0.1,
    "start_position": "feet",
    "end_position": "back"
  },
  {
    "name": "Full Front",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","2","/"],
    "tariff": 0.7,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  },
  {
    "name": "Back Half",
    "comp": 1,
    "category": "Twisting Single Somersault",
    "fig_notation": ["4","1","/"],
    "tariff": 0.6,
    "shape_bonus": 0,
    "start_position": "feet",
    "end_position": "feet"
  }
];
