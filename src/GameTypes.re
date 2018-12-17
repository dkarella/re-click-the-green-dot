type cellT = {
  x: int,
  y: int,
};

type dotT = {
  cell: cellT,
  color: Colors.colorT,
};

type stateT = {
  isGameOver: bool,
  gridSize: int,
  score: int,
  dummyDotColors: array(Colors.colorT),
  dots: list(dotT),
  lastUpdatedTimeRemaining: int,
  timeRemaining: int,
  maxTimeRemaining: int,
};