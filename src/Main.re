[@bs.config {no_export: no_export}];

let randSeed: int = [%bs.raw
  "parseInt(Math.random() * Number.MAX_SAFE_INTEGER)"
];

let init = () => {
  Random.init(randSeed);
  Canvas.setSize(
    Constants.gridWidth,
    Constants.gridWidth + Constants.timeBarHeight,
  );

  let stateRef = ref(Game.init());

  Canvas.start(() => {
    Canvas.clear();
    if (stateRef^.isGameOver) {
      Game.drawGameOver(stateRef^);
    } else {
      stateRef := Game.update(stateRef^);
      Game.draw(stateRef^);
    };
  });
};

init();