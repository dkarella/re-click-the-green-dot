open GameTypes;

let remainingDummyColors =
  ref([
    Colors.Black,
    Colors.Grey,
    Colors.Red,
    Colors.Purple,
    Colors.Blue,
    Colors.Yellow,
    Colors.Aqua,
    Colors.Teal,
  ]);

let getNextRemainingDummyColor = () =>
  switch (remainingDummyColors^) {
  | [color, ...tail] =>
    remainingDummyColors := tail;
    Some(color);
  | [] => None
  };

let getRandomCell = gridSize => {
  x: Random.int(gridSize),
  y: Random.int(gridSize),
};

let getCellLength = gridSize => Constants.gridWidth / gridSize;

let generateDots = (gridSize, dummyDotColors) => {
  let dots = ref([{cell: getRandomCell(gridSize), color: Colors.Green}]);

  for (y in 0 to gridSize - 1) {
    for (x in 0 to gridSize - 1) {
      let cell = {x, y};
      let color = dummyDotColors[Random.int(Array.length(dummyDotColors))];

      Random.bool() ? dots := [{cell, color}, ...dots^] : ();
    };
  };

  dots^;
};

let now = (): int => [%bs.raw "Date.now()"];

let clickedGreenDot = ({gridSize, dots}, clickX, clickY) => {
  let cellLength = getCellLength(gridSize);

  let rec loop = dots =>
    switch (dots) {
    | [] => false
    | [{cell: {x, y}, color}, ...tail] =>
      let trueX = x * cellLength;
      let trueY = y * cellLength + Constants.timeBarHeight;

      let didClickDot =
        clickX >= trueX
        && clickX <= trueX
        + cellLength
        && clickY >= trueY
        && clickY <= trueY
        + cellLength;

      if (didClickDot && color === Colors.Green) {
        true;
      } else {
        loop(tail);
      };
    };

  loop(dots);
};

let increaseDifficulty = state => {
  let {gridSize, maxTimeRemaining, dummyDotColors} = state;
  {
    ...state,
    gridSize: gridSize + 1,
    maxTimeRemaining:
      max(
        Constants.minMaxTimeRemaining,
        maxTimeRemaining - Constants.msToSubtractFromMaxTimeRemaining,
      ),
    dummyDotColors:
      switch (getNextRemainingDummyColor()) {
      | Some(color) => Array.append(dummyDotColors, [|color|])
      | None => dummyDotColors
      },
  };
};