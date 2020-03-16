function anonymous(
) {
	"use strict";
	return new Promise((_resolve, _reject) => {
		var _sync = true;
		function _error(_err) {
			if (_sync)
				_resolve(Promise.resolve().then(() => { throw _err; }));
			else
				_reject(_err);
		};
		var _context;
		var _x = this._x;
		function _next2() {
			var _fn3 = _x[3];
			var _hasError3 = false;
			try {
				_fn3();
			} catch (_err) {
				_hasError3 = true;
				_error(_err);
			}
			if (!_hasError3) {
				_resolve();
			}
		}
		function _next1() {
			var _fn2 = _x[2];
			_fn2(_err2 => {
				if (_err2) {
					_error(_err2);
				} else {
					_next2();
				}
			});
		}
		var _fn0 = _x[0];
		var _hasError0 = false;
		try {
			_fn0();
		} catch (_err) {
			_hasError0 = true;
			_error(_err);
		}
		if (!_hasError0) {
			var _fn1 = _x[1];
			var _hasResult1 = false;
			var _promise1 = _fn1();
			if (!_promise1 || !_promise1.then)
				throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
			_promise1.then(_result1 => {
				_hasResult1 = true;
				_next1();
			}, _err1 => {
				if (_hasResult1) throw _err1;
				_error(_err1);
			});
		}
		_sync = false;
	});

}
