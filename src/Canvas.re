type canvasT;
type contextT;
type windowT;
type eventT;
type clickedT =
  | None
  | Some(int, int);

module Dom = {
  /* window methods */
  [@bs.send]
  external requestAnimationFrame: (windowT, unit => unit) => unit = "";

  /* canvas methods */
  [@bs.send] external getContext: (canvasT, string) => contextT = "";
  [@bs.send]
  external addEventListener: (canvasT, string, eventT => unit) => unit = "";
  [@bs.get] external getWidth: canvasT => int = "width";
  [@bs.get] external getHeight: canvasT => int = "height";
  [@bs.set] external setWidth: (canvasT, string) => unit = "width";
  [@bs.set] external setHeight: (canvasT, string) => unit = "height";
  [@bs.get] external offsetTop: canvasT => int = "";
  [@bs.get] external offsetLeft: canvasT => int = "";

  /* context methods */
  [@bs.send] external clearRect: (contextT, int, int, int, int) => unit = "";
  [@bs.send] external beginPath: contextT => unit = "";
  [@bs.send] external fill: contextT => unit = "";
  [@bs.send] external fillRect: (contextT, int, int, int, int) => unit = "";
  [@bs.send] external fillText: (contextT, string, int, int) => unit = "";
  [@bs.send]
  external arc: (contextT, int, int, int, float, float) => unit = "";
  [@bs.set] external fillStyle: (contextT, string) => unit = "";
  [@bs.set] external font: (contextT, string) => unit = "";

  /* event methods */
  [@bs.get] external clientX: eventT => int = "";
  [@bs.get] external clientY: eventT => int = "";

  let window = [%bs.raw "window"];
  let canvas: canvasT = [%bs.raw "document.getElementById('root')"];
  let ctx = getContext(canvas, "2d");

  let clickedState: ref(clickedT) = ref(None);
};

Dom.addEventListener(Dom.canvas, "mousedown", event =>
  Dom.clickedState :=
    Some(
      Dom.clientX(event) - Dom.offsetTop(Dom.canvas),
      Dom.clientY(event) - Dom.offsetLeft(Dom.canvas),
    )
);

Dom.addEventListener(Dom.canvas, "mouseup", _event =>
  Dom.clickedState := None
);

let clicked = () => Dom.clickedState^;

let setSize = (width, height) => {
  Dom.setWidth(Dom.canvas, string_of_int(width));
  Dom.setHeight(Dom.canvas, string_of_int(height));
};

let clear = () =>
  Dom.clearRect(
    Dom.ctx,
    0,
    0,
    Dom.getWidth(Dom.canvas),
    Dom.getHeight(Dom.canvas),
  );

let drawDot = (x, y, radius, color) => {
  let pi: float = [%bs.raw "Math.PI"];

  Dom.fillStyle(Dom.ctx, Colors.colorToHexStr(color));
  Dom.beginPath(Dom.ctx);
  Dom.arc(Dom.ctx, x, y, radius, 0., 2. *. pi);
  Dom.fill(Dom.ctx);
};

let drawRect = (x, y, width, height, color) => {
  Dom.fillStyle(Dom.ctx, Colors.colorToHexStr(color));
  Dom.fillRect(Dom.ctx, x, y, width, height);
};

let drawText = (text, x, y) => {
  Dom.fillStyle(Dom.ctx, Colors.colorToHexStr(Colors.Black));
  Dom.font(Dom.ctx, "20px Georgia");
  Dom.fillText(Dom.ctx, text, x, y);
};

let start = handler => {
  let rec animate = () => {
    handler();
    Dom.requestAnimationFrame(Dom.window, animate);
  };

  Dom.requestAnimationFrame(Dom.window, animate);
};