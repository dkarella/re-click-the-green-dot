type colorT =
  | Black
  | Green
  | Grey
  | Red
  | Purple
  | Blue
  | Yellow
  | Teal
  | Aqua;

let colorToHexStr = color =>
  switch (color) {
  | Black => "#000000"
  | Green => "#008000"
  | Grey => "#808080"
  | Red => "#FF0000"
  | Purple => "#800080"
  | Blue => "#0000FF"
  | Yellow => "#FFFF00"
  | Aqua => "#00FFFF"
  | Teal => "#008080"
  };