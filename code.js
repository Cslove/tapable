function anonymous(_callback
) {
"use strict";
var _context;
var _x = this._x;
function _next1() {
var _fn2 = _x[2];
var _hasError2 = false;
try {
_fn2();
} catch(_err) {
_hasError2 = true;
_callback(_err);
}
if(!_hasError2) {
_callback();
}
}
var _fn0 = _x[0];
var _hasError0 = false;
try {
_fn0();
} catch(_err) {
_hasError0 = true;
_callback(_err);
}
if(!_hasError0) {
var _fn1 = _x[1];
_fn1(_err1 => {
if(_err1) {
_callback(_err1);
} else {
_next1();
}
});
}

}