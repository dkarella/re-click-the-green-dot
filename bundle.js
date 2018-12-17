(function () {
  'use strict';

  var out_of_memory = /* tuple */[
    "Out_of_memory",
    0
  ];

  var sys_error = /* tuple */[
    "Sys_error",
    -1
  ];

  var failure = /* tuple */[
    "Failure",
    -2
  ];

  var invalid_argument = /* tuple */[
    "Invalid_argument",
    -3
  ];

  var end_of_file = /* tuple */[
    "End_of_file",
    -4
  ];

  var division_by_zero = /* tuple */[
    "Division_by_zero",
    -5
  ];

  var not_found = /* tuple */[
    "Not_found",
    -6
  ];

  var match_failure = /* tuple */[
    "Match_failure",
    -7
  ];

  var stack_overflow = /* tuple */[
    "Stack_overflow",
    -8
  ];

  var sys_blocked_io = /* tuple */[
    "Sys_blocked_io",
    -9
  ];

  var assert_failure = /* tuple */[
    "Assert_failure",
    -10
  ];

  var undefined_recursive_module = /* tuple */[
    "Undefined_recursive_module",
    -11
  ];

  out_of_memory.tag = 248;

  sys_error.tag = 248;

  failure.tag = 248;

  invalid_argument.tag = 248;

  end_of_file.tag = 248;

  division_by_zero.tag = 248;

  not_found.tag = 248;

  match_failure.tag = 248;

  stack_overflow.tag = 248;

  sys_blocked_io.tag = 248;

  assert_failure.tag = 248;

  undefined_recursive_module.tag = 248;
  /*  Not a pure module */

  function caml_array_sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while(j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }  return result;
  }

  function caml_array_set(xs, index, newval) {
    if (index < 0 || index >= xs.length) {
      throw [
            invalid_argument,
            "index out of bounds"
          ];
    } else {
      xs[index] = newval;
      return /* () */0;
    }
  }

  function caml_array_get(xs, index) {
    if (index < 0 || index >= xs.length) {
      throw [
            invalid_argument,
            "index out of bounds"
          ];
    } else {
      return xs[index];
    }
  }
  /* No side effect */

  function app(_f, _args) {
    while(true) {
      var args = _args;
      var f = _f;
      var arity = f.length;
      var len = args.length;
      var d = arity - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      } else if (d < 0) {
        _args = caml_array_sub(args, arity, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity));
        continue ;
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    }}

  function curry_1(o, a0, arity) {
    switch (arity) {
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      default:
        return app(o, /* array */[a0]);
    }
  }

  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1) {
      return o(a0);
    } else {
      return curry_1(o, a0, arity);
    }
  }

  function curry_2(o, a0, a1, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1
                  ]);
    }
  }

  function _2(o, a0, a1) {
    var arity = o.length;
    if (arity === 2) {
      return o(a0, a1);
    } else {
      return curry_2(o, a0, a1, arity);
    }
  }
  /* No side effect */

  var id = /* record */[/* contents */0];

  function caml_fresh_oo_id(param) {
    id[0] += 1;
    return id[0];
  }

  function create(str) {
    var v_001 = caml_fresh_oo_id(/* () */0);
    var v = /* tuple */[
      str,
      v_001
    ];
    v.tag = 248;
    return v;
  }
  /* No side effect */

  /* No side effect */

  var $$Error = create("Caml_js_exceptions.Error");
  /* No side effect */

  function copy(a) {
    var l = a.length;
    if (l === 0) {
      return /* array */[];
    } else {
      return caml_array_sub(a, 0, l);
    }
  }

  function append(a1, a2) {
    var l1 = a1.length;
    if (l1 === 0) {
      return copy(a2);
    } else if (a2.length === 0) {
      return caml_array_sub(a1, 0, l1);
    } else {
      return a1.concat(a2);
    }
  }

  var Bottom = create("Array.Bottom");
  /* No side effect */

  function div(x, y) {
    if (y === 0) {
      throw division_by_zero;
    } else {
      return x / y | 0;
    }
  }

  function mod_(x, y) {
    if (y === 0) {
      throw division_by_zero;
    } else {
      return x % y;
    }
  }

  var imul = ( Math.imul || function (x,y) {
    y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
  }
  );
  /* imul Not a pure module */

  /* No side effect */

  function caml_int_min(x, y) {
    if (x < y) {
      return x;
    } else {
      return y;
    }
  }

  function caml_int_max(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  /* No side effect */

  /* Caml_int32 Not a pure module */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  var stdout = /* record */[
    /* buffer */"",
    /* output */(function (param, s) {
        var v = s.length - 1 | 0;
        if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
          return ( process.stdout.write )(s);
        } else if (s[v] === "\n") {
          console.log(s.slice(0, v));
          return /* () */0;
        } else {
          console.log(s);
          return /* () */0;
        }
      })
  ];

  var stderr = /* record */[
    /* buffer */"",
    /* output */(function (param, s) {
        var v = s.length - 1 | 0;
        if (s[v] === "\n") {
          console.log(s.slice(0, v));
          return /* () */0;
        } else {
          console.log(s);
          return /* () */0;
        }
      })
  ];

  function caml_ml_flush(oc) {
    if (oc[/* buffer */0] !== "") {
      _2(oc[/* output */1], oc, oc[/* buffer */0]);
      oc[/* buffer */0] = "";
      return /* () */0;
    } else {
      return 0;
    }
  }

  function caml_ml_output(oc, str, offset, len) {
    var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
    if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
      return ( process.stdout.write )(str$1);
    } else {
      var id = str$1.lastIndexOf("\n");
      if (id < 0) {
        oc[/* buffer */0] = oc[/* buffer */0] + str$1;
        return /* () */0;
      } else {
        oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
        caml_ml_flush(oc);
        oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
        return /* () */0;
      }
    }
  }

  function caml_ml_output_char(oc, $$char) {
    return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
  }

  function caml_ml_out_channels_list(param) {
    return /* :: */[
            stdout,
            /* :: */[
              stderr,
              /* [] */0
            ]
          ];
  }
  /* No side effect */

  var Caml_io = /*#__PURE__*/Object.freeze({
    stdout: stdout,
    stderr: stderr,
    caml_ml_flush: caml_ml_flush,
    caml_ml_output: caml_ml_output,
    caml_ml_output_char: caml_ml_output_char,
    caml_ml_out_channels_list: caml_ml_out_channels_list
  });

  /* No side effect */

  function get$1(s, i) {
    if (i < 0 || i >= s.length) {
      throw [
            invalid_argument,
            "index out of bounds"
          ];
    } else {
      return s.charCodeAt(i);
    }
  }
  /* No side effect */

  /* No side effect */

  /* No side effect */

  var Exit = create("Pervasives.Exit");

  var stdin = undefined;
  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  function cmn(q, a, b, x, s, t) {
    var a$1 = ((a + q | 0) + x | 0) + t | 0;
    return ((a$1 << s) | (a$1 >>> (32 - s | 0)) | 0) + b | 0;
  }

  function f(a, b, c, d, x, s, t) {
    return cmn(b & c | (b ^ -1) & d, a, b, x, s, t);
  }

  function g(a, b, c, d, x, s, t) {
    return cmn(b & d | c & (d ^ -1), a, b, x, s, t);
  }

  function h(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function i(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | d ^ -1), a, b, x, s, t);
  }

  function cycle(x, k) {
    var a = x[0];
    var b = x[1];
    var c = x[2];
    var d = x[3];
    a = f(a, b, c, d, k[0], 7, -680876936);
    d = f(d, a, b, c, k[1], 12, -389564586);
    c = f(c, d, a, b, k[2], 17, 606105819);
    b = f(b, c, d, a, k[3], 22, -1044525330);
    a = f(a, b, c, d, k[4], 7, -176418897);
    d = f(d, a, b, c, k[5], 12, 1200080426);
    c = f(c, d, a, b, k[6], 17, -1473231341);
    b = f(b, c, d, a, k[7], 22, -45705983);
    a = f(a, b, c, d, k[8], 7, 1770035416);
    d = f(d, a, b, c, k[9], 12, -1958414417);
    c = f(c, d, a, b, k[10], 17, -42063);
    b = f(b, c, d, a, k[11], 22, -1990404162);
    a = f(a, b, c, d, k[12], 7, 1804603682);
    d = f(d, a, b, c, k[13], 12, -40341101);
    c = f(c, d, a, b, k[14], 17, -1502002290);
    b = f(b, c, d, a, k[15], 22, 1236535329);
    a = g(a, b, c, d, k[1], 5, -165796510);
    d = g(d, a, b, c, k[6], 9, -1069501632);
    c = g(c, d, a, b, k[11], 14, 643717713);
    b = g(b, c, d, a, k[0], 20, -373897302);
    a = g(a, b, c, d, k[5], 5, -701558691);
    d = g(d, a, b, c, k[10], 9, 38016083);
    c = g(c, d, a, b, k[15], 14, -660478335);
    b = g(b, c, d, a, k[4], 20, -405537848);
    a = g(a, b, c, d, k[9], 5, 568446438);
    d = g(d, a, b, c, k[14], 9, -1019803690);
    c = g(c, d, a, b, k[3], 14, -187363961);
    b = g(b, c, d, a, k[8], 20, 1163531501);
    a = g(a, b, c, d, k[13], 5, -1444681467);
    d = g(d, a, b, c, k[2], 9, -51403784);
    c = g(c, d, a, b, k[7], 14, 1735328473);
    b = g(b, c, d, a, k[12], 20, -1926607734);
    a = h(a, b, c, d, k[5], 4, -378558);
    d = h(d, a, b, c, k[8], 11, -2022574463);
    c = h(c, d, a, b, k[11], 16, 1839030562);
    b = h(b, c, d, a, k[14], 23, -35309556);
    a = h(a, b, c, d, k[1], 4, -1530992060);
    d = h(d, a, b, c, k[4], 11, 1272893353);
    c = h(c, d, a, b, k[7], 16, -155497632);
    b = h(b, c, d, a, k[10], 23, -1094730640);
    a = h(a, b, c, d, k[13], 4, 681279174);
    d = h(d, a, b, c, k[0], 11, -358537222);
    c = h(c, d, a, b, k[3], 16, -722521979);
    b = h(b, c, d, a, k[6], 23, 76029189);
    a = h(a, b, c, d, k[9], 4, -640364487);
    d = h(d, a, b, c, k[12], 11, -421815835);
    c = h(c, d, a, b, k[15], 16, 530742520);
    b = h(b, c, d, a, k[2], 23, -995338651);
    a = i(a, b, c, d, k[0], 6, -198630844);
    d = i(d, a, b, c, k[7], 10, 1126891415);
    c = i(c, d, a, b, k[14], 15, -1416354905);
    b = i(b, c, d, a, k[5], 21, -57434055);
    a = i(a, b, c, d, k[12], 6, 1700485571);
    d = i(d, a, b, c, k[3], 10, -1894986606);
    c = i(c, d, a, b, k[10], 15, -1051523);
    b = i(b, c, d, a, k[1], 21, -2054922799);
    a = i(a, b, c, d, k[8], 6, 1873313359);
    d = i(d, a, b, c, k[15], 10, -30611744);
    c = i(c, d, a, b, k[6], 15, -1560198380);
    b = i(b, c, d, a, k[13], 21, 1309151649);
    a = i(a, b, c, d, k[4], 6, -145523070);
    d = i(d, a, b, c, k[11], 10, -1120210379);
    c = i(c, d, a, b, k[2], 15, 718787259);
    b = i(b, c, d, a, k[9], 21, -343485551);
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
    return /* () */0;
  }

  var state = /* array */[
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ];

  var md5blk = /* array */[
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];

  function caml_md5_string(s, start, len) {
    var s$1 = s.slice(start, len);
    var n = s$1.length;
    state[0] = 1732584193;
    state[1] = -271733879;
    state[2] = -1732584194;
    state[3] = 271733878;
    for(var i = 0; i <= 15; ++i){
      md5blk[i] = 0;
    }
    var i_end = n / 64 | 0;
    for(var i$1 = 1; i$1 <= i_end; ++i$1){
      for(var j = 0; j <= 15; ++j){
        var k = ((i$1 << 6) - 64 | 0) + (j << 2) | 0;
        md5blk[j] = ((s$1.charCodeAt(k) + (s$1.charCodeAt(k + 1 | 0) << 8) | 0) + (s$1.charCodeAt(k + 2 | 0) << 16) | 0) + (s$1.charCodeAt(k + 3 | 0) << 24) | 0;
      }
      cycle(state, md5blk);
    }
    var s_tail = s$1.slice((i_end << 6));
    for(var kk = 0; kk <= 15; ++kk){
      md5blk[kk] = 0;
    }
    var i_end$1 = s_tail.length - 1 | 0;
    for(var i$2 = 0; i$2 <= i_end$1; ++i$2){
      md5blk[i$2 / 4 | 0] = md5blk[i$2 / 4 | 0] | (s_tail.charCodeAt(i$2) << (i$2 % 4 << 3));
    }
    var i$3 = i_end$1 + 1 | 0;
    md5blk[i$3 / 4 | 0] = md5blk[i$3 / 4 | 0] | (128 << (i$3 % 4 << 3));
    if (i$3 > 55) {
      cycle(state, md5blk);
      for(var i$4 = 0; i$4 <= 15; ++i$4){
        md5blk[i$4] = 0;
      }
    }
    md5blk[14] = (n << 3);
    cycle(state, md5blk);
    return String.fromCharCode(state[0] & 255, (state[0] >> 8) & 255, (state[0] >> 16) & 255, (state[0] >> 24) & 255, state[1] & 255, (state[1] >> 8) & 255, (state[1] >> 16) & 255, (state[1] >> 24) & 255, state[2] & 255, (state[2] >> 8) & 255, (state[2] >> 16) & 255, (state[2] >> 24) & 255, state[3] & 255, (state[3] >> 8) & 255, (state[3] >> 16) & 255, (state[3] >> 24) & 255);
  }
  /* No side effect */

  function string(str) {
    return caml_md5_string(str, 0, str.length);
  }
  /* No side effect */

  /* No side effect */

  function full_init(s, seed) {
    var combine = function (accu, x) {
      return string(accu + String(x));
    };
    var extract = function (d) {
      return ((get$1(d, 0) + (get$1(d, 1) << 8) | 0) + (get$1(d, 2) << 16) | 0) + (get$1(d, 3) << 24) | 0;
    };
    var seed$1 = seed.length === 0 ? /* array */[0] : seed;
    var l = seed$1.length;
    for(var i = 0; i <= 54; ++i){
      caml_array_set(s[/* st */0], i, i);
    }
    var accu = "x";
    for(var i$1 = 0 ,i_finish = 54 + (
        55 > l ? 55 : l
      ) | 0; i$1 <= i_finish; ++i$1){
      var j = i$1 % 55;
      var k = i$1 % l;
      accu = combine(accu, caml_array_get(seed$1, k));
      caml_array_set(s[/* st */0], j, (caml_array_get(s[/* st */0], j) ^ extract(accu)) & 1073741823);
    }
    s[/* idx */1] = 0;
    return /* () */0;
  }

  function bits(s) {
    s[/* idx */1] = (s[/* idx */1] + 1 | 0) % 55;
    var curval = caml_array_get(s[/* st */0], s[/* idx */1]);
    var newval = caml_array_get(s[/* st */0], (s[/* idx */1] + 24 | 0) % 55) + (curval ^ (curval >>> 25) & 31) | 0;
    var newval30 = newval & 1073741823;
    caml_array_set(s[/* st */0], s[/* idx */1], newval30);
    return newval30;
  }

  function $$int(s, bound) {
    if (bound > 1073741823 || bound <= 0) {
      throw [
            invalid_argument,
            "Random.int"
          ];
    } else {
      var s$1 = s;
      var n = bound;
      while(true) {
        var r = bits(s$1);
        var v = r % n;
        if ((r - v | 0) > ((1073741823 - n | 0) + 1 | 0)) {
          continue ;
        } else {
          return v;
        }
      }  }
  }

  function bool(s) {
    return (bits(s) & 1) === 0;
  }

  var $$default = /* record */[
    /* st : array */[
      987910699,
      495797812,
      364182224,
      414272206,
      318284740,
      990407751,
      383018966,
      270373319,
      840823159,
      24560019,
      536292337,
      512266505,
      189156120,
      730249596,
      143776328,
      51606627,
      140166561,
      366354223,
      1003410265,
      700563762,
      981890670,
      913149062,
      526082594,
      1021425055,
      784300257,
      667753350,
      630144451,
      949649812,
      48546892,
      415514493,
      258888527,
      511570777,
      89983870,
      283659902,
      308386020,
      242688715,
      482270760,
      865188196,
      1027664170,
      207196989,
      193777847,
      619708188,
      671350186,
      149669678,
      257044018,
      87658204,
      558145612,
      183450813,
      28133145,
      901332182,
      710253903,
      510646120,
      652377910,
      409934019,
      801085050
    ],
    /* idx */0
  ];

  function $$int$1(bound) {
    return $$int($$default, bound);
  }

  function bool$1(param) {
    return bool($$default);
  }

  function init$3(seed) {
    return full_init($$default, /* array */[seed]);
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE


  function colorToHexStr(color) {
    switch (color) {
      case 0 : 
          return "#000000";
      case 1 : 
          return "#008000";
      case 2 : 
          return "#808080";
      case 3 : 
          return "#FF0000";
      case 4 : 
          return "#800080";
      case 5 : 
          return "#0000FF";
      case 6 : 
          return "#FFFF00";
      case 7 : 
          return "#008080";
      case 8 : 
          return "#00FFFF";
      
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE

  var $$window = window;

  var canvas = (document.getElementById('root'));

  var ctx = canvas.getContext("2d");

  var clickedState = /* record */[/* contents : None */0];

  canvas.addEventListener("mousedown", (function ($$event) {
          clickedState[0] = /* Some */[
            $$event.clientX - canvas.offsetTop | 0,
            $$event.clientY - canvas.offsetLeft | 0
          ];
          return /* () */0;
        }));

  canvas.addEventListener("mouseup", (function (_event) {
          clickedState[0] = /* None */0;
          return /* () */0;
        }));

  function clicked(param) {
    return clickedState[0];
  }

  function setSize(width, height) {
    canvas.width = String(width);
    canvas.height = String(height);
    return /* () */0;
  }

  function clear(param) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return /* () */0;
  }

  function drawDot(x, y, radius, color) {
    var pi = (Math.PI);
    ctx.fillStyle = colorToHexStr(color);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * pi);
    ctx.fill();
    return /* () */0;
  }

  function drawRect(x, y, width, height, color) {
    ctx.fillStyle = colorToHexStr(color);
    ctx.fillRect(x, y, width, height);
    return /* () */0;
  }

  function drawText(text, x, y) {
    ctx.fillStyle = colorToHexStr(/* Black */0);
    ctx.font = "20px Georgia";
    ctx.fillText(text, x, y);
    return /* () */0;
  }

  function start(handler) {
    var animate = function (param) {
      _1(handler, /* () */0);
      $$window.requestAnimationFrame(animate);
      return /* () */0;
    };
    $$window.requestAnimationFrame(animate);
    return /* () */0;
  }
  /* window Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE


  var gridWidth = 500;

  var timeBarHeight = 25;

  var timeBarMarginBottom = 5;

  var initialMaxTimeRemaining = 10000;

  var initialGridSize = 10;

  var numClickedToIncreaseDifficulty = 5;

  var msToAddToTimeRemaining = 1000;

  var msToSubtractFromMaxTimeRemaining = 1000;

  var minMaxTimeRemaining = 1000;

  var gameOverTextX = 10;

  var gameOverTextY = 25;
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE

  var remainingDummyColors = /* record */[/* contents : :: */[
      /* Black */0,
      /* :: */[
        /* Grey */2,
        /* :: */[
          /* Red */3,
          /* :: */[
            /* Purple */4,
            /* :: */[
              /* Blue */5,
              /* :: */[
                /* Yellow */6,
                /* :: */[
                  /* Aqua */8,
                  /* :: */[
                    /* Teal */7,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]];

  function getNextRemainingDummyColor(param) {
    var match = remainingDummyColors[0];
    if (match) {
      remainingDummyColors[0] = match[1];
      return match[0];
    }
    
  }

  function getRandomCell(gridSize) {
    return /* record */[
            /* x */$$int$1(gridSize),
            /* y */$$int$1(gridSize)
          ];
  }

  function getCellLength(gridSize) {
    return div(gridWidth, gridSize);
  }

  function generateDots(gridSize, dummyDotColors) {
    var dots = /* :: */[
      /* record */[
        /* cell */getRandomCell(gridSize),
        /* color : Green */1
      ],
      /* [] */0
    ];
    for(var y = 0 ,y_finish = gridSize - 1 | 0; y <= y_finish; ++y){
      for(var x = 0 ,x_finish = gridSize - 1 | 0; x <= x_finish; ++x){
        var cell = /* record */[
          /* x */x,
          /* y */y
        ];
        var color = caml_array_get(dummyDotColors, $$int$1(dummyDotColors.length));
        var match = bool$1(/* () */0);
        if (match) {
          dots = /* :: */[
            /* record */[
              /* cell */cell,
              /* color */color
            ],
            dots
          ];
        }
        
      }
    }
    return dots;
  }

  function now(param) {
    return (Date.now());
  }

  function clickedGreenDot(param, clickX, clickY) {
    var cellLength = div(gridWidth, param[/* gridSize */1]);
    var _dots = param[/* dots */4];
    while(true) {
      var dots = _dots;
      if (dots) {
        var match = dots[0];
        var match$1 = match[/* cell */0];
        var trueX = imul(match$1[/* x */0], cellLength);
        var trueY = imul(match$1[/* y */1], cellLength) + timeBarHeight | 0;
        var didClickDot = clickX >= trueX && clickX <= (trueX + cellLength | 0) && clickY >= trueY && clickY <= (trueY + cellLength | 0);
        if (didClickDot && match[/* color */1] === /* Green */1) {
          return true;
        } else {
          _dots = dots[1];
          continue ;
        }
      } else {
        return false;
      }
    }}

  function increaseDifficulty(state) {
    var dummyDotColors = state[/* dummyDotColors */3];
    var match = getNextRemainingDummyColor(/* () */0);
    return /* record */[
            /* isGameOver */state[/* isGameOver */0],
            /* gridSize */state[/* gridSize */1] + 1 | 0,
            /* score */state[/* score */2],
            /* dummyDotColors */match !== undefined ? append(dummyDotColors, /* array */[match]) : dummyDotColors,
            /* dots */state[/* dots */4],
            /* lastUpdatedTimeRemaining */state[/* lastUpdatedTimeRemaining */5],
            /* timeRemaining */state[/* timeRemaining */6],
            /* maxTimeRemaining */caml_int_max(minMaxTimeRemaining, state[/* maxTimeRemaining */7] - msToSubtractFromMaxTimeRemaining | 0)
          ];
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE

  function updateTimeRemaining(state) {
    var now$$1 = now(/* () */0);
    var updatedTimeRemaining = caml_int_max(0, state[/* timeRemaining */6] - (now$$1 - state[/* lastUpdatedTimeRemaining */5] | 0) | 0);
    return /* record */[
            /* isGameOver */updatedTimeRemaining === 0,
            /* gridSize */state[/* gridSize */1],
            /* score */state[/* score */2],
            /* dummyDotColors */state[/* dummyDotColors */3],
            /* dots */state[/* dots */4],
            /* lastUpdatedTimeRemaining */now$$1,
            /* timeRemaining */updatedTimeRemaining,
            /* maxTimeRemaining */state[/* maxTimeRemaining */7]
          ];
  }

  function handleClicked(state) {
    var match = clicked(/* () */0);
    if (match && clickedGreenDot(state, match[0], match[1])) {
      var updatedScore = state[/* score */2] + 1 | 0;
      var match$1 = mod_(updatedScore, numClickedToIncreaseDifficulty) === 0;
      var state$1 = match$1 ? increaseDifficulty(state) : state;
      return /* record */[
              /* isGameOver */state$1[/* isGameOver */0],
              /* gridSize */state$1[/* gridSize */1],
              /* score */updatedScore,
              /* dummyDotColors */state$1[/* dummyDotColors */3],
              /* dots */generateDots(state$1[/* gridSize */1], state$1[/* dummyDotColors */3]),
              /* lastUpdatedTimeRemaining */state$1[/* lastUpdatedTimeRemaining */5],
              /* timeRemaining */caml_int_min(state$1[/* maxTimeRemaining */7], state$1[/* timeRemaining */6] + msToAddToTimeRemaining | 0),
              /* maxTimeRemaining */state$1[/* maxTimeRemaining */7]
            ];
    } else {
      return state;
    }
  }

  function update(state) {
    return handleClicked(updateTimeRemaining(state));
  }

  function drawTimeRemaining(param) {
    return drawRect(0, 0, param[/* timeRemaining */6] / param[/* maxTimeRemaining */7] * gridWidth | 0, timeBarHeight - timeBarMarginBottom | 0, /* Green */1);
  }

  function drawDots(param) {
    var gridSize = param[/* gridSize */1];
    var _dots = param[/* dots */4];
    while(true) {
      var dots = _dots;
      if (dots) {
        var match = dots[0];
        var match$1 = match[/* cell */0];
        var cellLength = getCellLength(gridSize);
        var trueX = imul(match$1[/* x */0], cellLength);
        var trueY = imul(match$1[/* y */1], cellLength);
        drawDot(trueX + (cellLength / 2 | 0) | 0, (timeBarHeight + trueY | 0) + (cellLength / 2 | 0) | 0, cellLength / 2 | 0, match[/* color */1]);
        _dots = dots[1];
        continue ;
      } else {
        return /* () */0;
      }
    }}

  function draw(state) {
    drawTimeRemaining(state);
    return drawDots(state);
  }

  function drawGameOver(param) {
    return drawText("Game over! Your score: " + String(param[/* score */2]), gameOverTextX, gameOverTextY);
  }

  function init$4(param) {
    var match = getNextRemainingDummyColor(/* () */0);
    var dummyDotColors = match !== undefined ? /* array */[match] : /* array */[/* Black */0];
    return /* record */[
            /* isGameOver */false,
            /* gridSize */initialGridSize,
            /* score */0,
            /* dummyDotColors */dummyDotColors,
            /* dots */generateDots(initialGridSize, dummyDotColors),
            /* lastUpdatedTimeRemaining */now(/* () */0),
            /* timeRemaining */initialMaxTimeRemaining,
            /* maxTimeRemaining */initialMaxTimeRemaining
          ];
  }
  /* Canvas-ReClickTheGreenDot Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.8, PLEASE EDIT WITH CARE

  var randSeed = (parseInt(Math.random() * Number.MAX_SAFE_INTEGER));

  function init$5(param) {
    init$3(randSeed);
    setSize(gridWidth, gridWidth + timeBarHeight | 0);
    var stateRef = /* record */[/* contents */init$4(/* () */0)];
    return start((function (param) {
                  clear(/* () */0);
                  if (stateRef[0][/* isGameOver */0]) {
                    return drawGameOver(stateRef[0]);
                  } else {
                    stateRef[0] = update(stateRef[0]);
                    return draw(stateRef[0]);
                  }
                }));
  }

  init$5(/* () */0);
  /* randSeed Not a pure module */

}());
