open GameTypes;
open GameUtils;

/* Update Functions */
let updateTimeRemaining = state => {
  let {lastUpdatedTimeRemaining, timeRemaining} = state;
  let now = now();
  let updatedTimeRemaining =
    max(0, timeRemaining - (now - lastUpdatedTimeRemaining));
  {
    ...state,
    timeRemaining: updatedTimeRemaining,
    lastUpdatedTimeRemaining: now,
    isGameOver: updatedTimeRemaining == 0,
  };
};

let handleClicked = state =>
  switch (Canvas.clicked()) {
  | None => state
  | Some(clickX, clickY) =>
    if (clickedGreenDot(state, clickX, clickY)) {
      let updatedScore = state.score + 1;
      let state =
        updatedScore mod Constants.numClickedToIncreaseDifficulty == 0 ?
          increaseDifficulty(state) : state;
      let {maxTimeRemaining, timeRemaining, gridSize, dummyDotColors} = state;

      {
        ...state,
        score: updatedScore,
        timeRemaining:
          min(
            maxTimeRemaining,
            timeRemaining + Constants.msToAddToTimeRemaining,
          ),
        dots: generateDots(gridSize, dummyDotColors),
      };
    } else {
      state;
    }
  };

let update = (state: stateT): stateT =>
  state |> updateTimeRemaining |> handleClicked;

/* Draw Functions */
let drawTimeRemaining = ({maxTimeRemaining, timeRemaining}) =>
  Canvas.drawRect(
    0,
    0,
    int_of_float(
      float_of_int(timeRemaining)
      /. float_of_int(maxTimeRemaining)
      *. float_of_int(Constants.gridWidth),
    ),
    Constants.timeBarHeight - Constants.timeBarMarginBottom,
    Colors.Green,
  );

let drawDots = ({gridSize, dots}) => {
  let rec loop = dots =>
    switch (dots) {
    | [{cell: {x, y}, color}, ...tail] =>
      let cellLength = getCellLength(gridSize);
      let trueX = x * cellLength;
      let trueY = y * cellLength;

      Canvas.drawDot(
        trueX + cellLength / 2,
        Constants.timeBarHeight + trueY + cellLength / 2,
        cellLength / 2,
        color,
      );
      loop(tail);
    | [] => ()
    };

  loop(dots);
};

let draw = state => {
  drawTimeRemaining(state);
  drawDots(state);
};

let drawGameOver = ({score}) =>
  Canvas.drawText(
    "Game over! Your score: " ++ string_of_int(score),
    Constants.gameOverTextX,
    Constants.gameOverTextY,
  );

/* Init */
let init = (): stateT => {
  let gridSize = Constants.initialGridSize;
  let dummyDotColors =
    switch (getNextRemainingDummyColor()) {
    | Some(color) => [|color|]
    | None => [|Colors.Black|]
    };

  {
    isGameOver: false,
    gridSize,
    score: 0,
    dummyDotColors,
    dots: generateDots(gridSize, dummyDotColors),
    lastUpdatedTimeRemaining: now(),
    maxTimeRemaining: Constants.initialMaxTimeRemaining,
    timeRemaining: Constants.initialMaxTimeRemaining,
  };
};