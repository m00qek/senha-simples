(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Basics$add = _Basics_add;
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$Basics$le = _Utils_le;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var author$project$Diceware$indexedDict = function (list) {
	return elm$core$Dict$fromList(
		A2(
			elm$core$List$indexedMap,
			F2(
				function (index, symbol) {
					return _Utils_Tuple2(index, symbol);
				}),
			list));
};
var author$project$Diceware$wordlist = _List_fromArray(
	['aba', 'abaco', 'abade', 'abadia', 'abafa', 'abafar', 'abafo', 'abaixo', 'abajur', 'abalar', 'abalo', 'abanar', 'abano', 'abate', 'abater', 'abc', 'abdicar', 'abdome', 'abelha', 'aberta', 'aberto', 'abeto', 'abismo', 'abjeto', 'ablaut', 'abobada', 'abobado', 'abobar', 'abolir', 'abonar', 'abono', 'aborto', 'abraco', 'abrico', 'abrigo', 'abril', 'abrir', 'abrupto', 'abster', 'abusar', 'abuso', 'abutre', 'acabar', 'acacia', 'acai', 'acaju', 'acamar', 'acanhar', 'acao', 'acaraje', 'acaro', 'acaso', 'acatar', 'acato', 'ace', 'aceder', 'aceito', 'acelga', 'acem', 'acenar', 'aceno', 'acento', 'acerca', 'acerto', 'aceso', 'acessar', 'acesso', 'acha', 'achado', 'achar', 'achava', 'acida', 'acidez', 'acido', 'acima', 'acinte', 'aclive', 'acne', 'aco', 'acoite', 'acola', 'acorde', 'acordo', 'acre', 'acuado', 'acuar', 'acucar', 'acude', 'acudir', 'acusar', 'ada', 'adaga', 'adagio', 'adega', 'adendo', 'adepto', 'adereco', 'aderir', 'adesao', 'adeus', 'adiar', 'adicao', 'adido', 'adn', 'adobe', 'adocao', 'adocar', 'adonde', 'adonis', 'adorar', 'adorno', 'adotar', 'adubar', 'adubo', 'adular', 'adulto', 'adunco', 'advir', 'aerea', 'aereo', 'afa', 'afagar', 'afago', 'afamar', 'afanar', 'afano', 'afasia', 'afavel', 'afegao', 'afelio', 'aferir', 'afetar', 'afeto', 'afiada', 'afiado', 'afiar', 'afinal', 'afinar', 'afinco', 'afixar', 'afixo', 'aflito', 'afluir', 'afobar', 'afofar', 'afogado', 'afogar', 'afoito', 'afora', 'afro', 'afta', 'aftosa', 'aga', 'agarrar', 'agata', 'agenda', 'agente', 'agil', 'agio', 'agiota', 'agir', 'agitar', 'agito', 'agnus', 'agogo', 'agonia', 'agora', 'agosto', 'agouro', 'agrado', 'agrados', 'agriao', 'agrura', 'agua', 'aguado', 'aguar', 'aguas', 'agucado', 'agucar', 'agudo', 'aguia', 'agulha', 'aia', 'aids', 'aimore', 'ainda', 'aino', 'aipim', 'aipo', 'airoso', 'ajeitar', 'ajuda', 'ajudar', 'ajustar', 'ajuste', 'ala', 'alado', 'alagar', 'alamo', 'alarde', 'alarme', 'alaude', 'alazao', 'albedo', 'albino', 'album', 'albume', 'alca', 'alcada', 'alcado', 'alcaide', 'alcali', 'alcapao', 'alcar', 'alce', 'alceno', 'alcino', 'alcool', 'alcova', 'aldeao', 'aldeia', 'alea', 'alef', 'alegar', 'alegre', 'aleia', 'alem', 'alemao', 'aleno', 'alento', 'alerta', 'alfa', 'alface', 'alfafa', 'alga', 'algema', 'algo', 'algol', 'algoz', 'alguem', 'algum', 'alguma', 'alguns', 'alheio', 'alho', 'alhos', 'ali', 'aliado', 'aliar', 'alias', 'alibi', 'alii', 'alijar', 'alinea', 'alinhar', 'alinho', 'alisar', 'alisio', 'aliviar', 'alivio', 'aljava', 'allen', 'alma', 'almejo', 'almoco', 'alo', 'alocar', 'aloe', 'alojar', 'alpaca', 'alpino', 'alta', 'altar', 'altas', 'alter', 'alteza', 'altivo', 'alto', 'altos', 'altura', 'alua', 'aludir', 'alugar', 'aluno', 'alunos', 'alusao', 'alvara', 'alvo', 'alvura', 'ama', 'amado', 'amador', 'amago', 'amanha', 'amante', 'amar', 'amargo', 'amarra', 'amasia', 'amasio', 'amavel', 'ambar', 'ambiguo', 'ambito', 'ambos', 'ameba', 'ameixa', 'amelia', 'amem', 'ameno', 'ame-o', 'amical', 'amido', 'amigo', 'amigos', 'amina', 'amiude', 'amizade', 'amo', 'amolar', 'amonia', 'amonio', 'amor', 'amora', 'amoral', 'amorfo', 'amparo', 'ampere', 'amplo', 'ampola', 'amuado', 'amuar', 'ana', 'anagua', 'anais', 'anal', 'anao', 'anca', 'ancho', 'anciao', 'ancora', 'anda', 'andada', 'andador', 'andar', 'andino', 'andor', 'andrajo', 'anel', 'anelar', 'anemia', 'anexar', 'anexo', 'anfora', 'angina', 'anglo', 'angora', 'angra', 'angu', 'angulo', 'anil', 'animal', 'animar', 'animo', 'anion', 'anis', 'anjo', 'ano', 'anodo', 'ano-luz', 'anos', 'anotada', 'anotado', 'anotar', 'anseio', 'ansia', 'ansiar', 'anta', 'ante', 'antena', 'antes', 'antigo', 'antro', 'anu', 'anual', 'anuenio', 'anuir', 'anular', 'anus', 'anzol', 'aonde', 'aorta', 'aos', 'apache', 'apagar', 'apara', 'aparar', 'aparece', 'aparte', 'apatia', 'apear', 'apegar', 'apego', 'apelar', 'apelo', 'apenas', 'apepsia', 'aperto', 'apesar', 'apex', 'apice', 'apicola', 'apis', 'apitar', 'apito', 'apneia', 'apogeu', 'apoiar', 'apoio', 'apolo', 'apor', 'aporte', 'apos', 'aposta', 'aposto', 'apre', 'apreco', 'aprumar', 'aprumo', 'apto', 'apupar', 'apupo', 'apurar', 'apuro', 'apuros', 'aquela', 'aquele', 'aquem', 'aqui', 'aquilo', 'aquoso', 'arabe', 'arado', 'aragem', 'arame', 'aranha', 'arapuca', 'arar', 'arara', 'arauto', 'arbusto', 'arca', 'arcada', 'arcado', 'arcano', 'arcar', 'arco', 'arder', 'ardido', 'ardil', 'ardor', 'arduo', 'are', 'area', 'areia', 'arejar', 'arena', 'ares', 'aresta', 'arfar', 'argila', 'argo', 'argola', 'argot', 'arguir', 'arguto', 'aria', 'ariano', 'aridez', 'arido', 'aries', 'ariete', 'arisco', 'arma', 'armada', 'armado', 'armar', 'armas', 'aro', 'aroma', 'arpao', 'arpejo', 'arpoar', 'arraia', 'arre', 'arriar', 'arrimo', 'arroba', 'arroio', 'arrojo', 'arroto', 'arroz', 'arruda', 'arruela', 'art', 'arte', 'artes', 'artico', 'artigo', 'artrite', 'arvore', 'asa', 'asceta', 'ascii', 'asco', 'asilar', 'asilo', 'asma', 'asno', 'aspas', 'aspero', 'assado', 'assalto', 'assar', 'assaz', 'assear', 'asseio', 'assim', 'assoar', 'asteca', 'astral', 'astro', 'astuto', 'ata', 'atacar', 'atache', 'atadas', 'atado', 'atalho', 'ataque', 'atar', 'ataude', 'ate', 'atear', 'atelie', 'ateneu', 'atento', 'ater', 'aterro', 'ateu', 'aticar', 'atimo', 'atinar', 'atirar', 'ativa', 'ativar', 'ativo', 'atlas', 'atleta', 'ato', 'a-toa', 'atol', 'atolar', 'atomo', 'atona', 'atonal', 'atono', 'ator', 'atrair', 'atras', 'atraso', 'atrio', 'atritar', 'atrito', 'atriz', 'atroz', 'atual', 'atuante', 'atuar', 'atum', 'aturar', 'au-au', 'audaz', 'audio', 'aue', 'auge', 'aula', 'aura', 'aurea', 'aureo', 'aurora', 'author', 'auto', 'autor', 'autos', 'autuar', 'aval', 'avanco', 'avante', 'avaria', 'avaro', 'avatar', 'ave', 'aveia', 'avela', 'avenca', 'averso', 'aves', 'avesso', 'avexar', 'aviao', 'aviar', 'avidez', 'avido', 'avioes', 'avisar', 'aviso', 'avivar', 'avo', 'avoado', 'avocar', 'avulso', 'axe', 'axial', 'axila', 'axilar', 'axioma', 'azar', 'azarao', 'azarar', 'azedar', 'azedo', 'azeite', 'azia', 'azimo', 'azimute', 'azoto', 'azul', 'azulao', 'baba', 'babaca', 'babacu', 'babalao', 'babar', 'babel', 'babosa', 'bacana', 'bacara', 'bacia', 'bacilo', 'baco', 'badalo', 'badejo', 'bafafa', 'bafo', 'bagaco', 'bagre', 'bah', 'baia', 'baiana', 'baiano', 'baiao', 'bailar', 'baile', 'bainha', 'baio', 'bairro', 'baita', 'baiuca', 'baixa', 'baixar', 'baixo', 'baixos', 'bala', 'balaco', 'balada', 'balaio', 'balanco', 'balao', 'balas', 'balcao', 'balde', 'baldio', 'bale', 'balear', 'baleia', 'balela', 'balido', 'balines', 'balir', 'baliza', 'balofo', 'balsa', 'bamba', 'bambo', 'bambu', 'banal', 'banana', 'banca', 'bancar', 'banco', 'banda', 'bandas', 'bando', 'banha', 'banhar', 'banho', 'banido', 'banir', 'banjo', 'banto', 'banze', 'banzo', 'baoba', 'baque', 'bar', 'barao', 'barata', 'barato', 'barba', 'barca', 'barco', 'bardo', 'bario', 'barman', 'barra', 'barraco', 'barrar', 'barras', 'barril', 'barro', 'basca', 'basco', 'base', 'basear', 'basic', 'basica', 'basico', 'basse', 'basta', 'bastao', 'bastar', 'bata', 'batata', 'batavo', 'batch', 'bateia', 'bater', 'batida', 'batido', 'batina', 'batista', 'batom', 'batuta', 'bau', 'baud', 'bavaro', 'bazar', 'bazuca', 'bcd', 'beat', 'beata', 'beato', 'bebaco', 'bebado', 'bebe', 'bebedo', 'beber', 'bebes', 'bebida', 'bebum', 'beca', 'beco', 'bedel', 'beduino', 'bege', 'beico', 'beijar', 'beijo', 'beira', 'beirar', 'bel', 'beleleu', 'beleza', 'belga', 'belico', 'belo', 'bem', 'bemol', 'bencao', 'bendito', 'bene', 'bens', 'benta', 'bento', 'benzer', 'beocio', 'beque', 'bequer', 'berber', 'berco', 'berne', 'berrar', 'berro', 'besta', 'beta', 'betamax', 'betula', 'betume', 'bexiga', 'bibelo', 'biblia', 'biboca', 'bica', 'bicada', 'bicama', 'bicar', 'bicas', 'biceps', 'bicha', 'bichar', 'bicho', 'bichos', 'bico', 'bicota', 'bicudo', 'bid', 'bide', 'biela', 'bienal', 'bienio', 'bife', 'big', 'biga', 'bigamo', 'bigle', 'bigode', 'bijecao', 'bile', 'bilhao', 'bilhar', 'biliar', 'bilis', 'biltre', 'bimbar', 'bimotor', 'bingo', 'biogas', 'bioma', 'biombo', 'bipar', 'bipe', 'bipede', 'bird', 'biriba', 'birita', 'birra', 'biruta', 'bis', 'bisao', 'bisar', 'bisavo', 'bisca', 'biscate', 'bisneto', 'bispado', 'bispo', 'bistro', 'bit', 'bitola', 'bitter', 'bituca', 'bloco', 'blusa', 'blusao', 'boa', 'boa-fe', 'boas', 'boate', 'boato', 'bobagem', 'bobear', 'bobi', 'bobina', 'bobo', 'boboca', 'boca', 'bocado', 'bocal', 'bocejo', 'bocha', 'bocio', 'boco', 'boda', 'bodas', 'bode', 'bodega', 'boemia', 'boemio', 'boer', 'bofe', 'bofete', 'bohrio', 'boi', 'boia', 'boiada', 'boiar', 'boina', 'bois', 'boista', 'bojo', 'bojudo', 'bola', 'bolaco', 'bolada', 'bolao', 'bolar', 'bolas', 'boleia', 'bolero', 'boleto', 'bolha', 'bolide', 'bolido', 'bolo', 'bolor', 'bolota', 'bolsa', 'bolso', 'bom', 'bomba', 'bombom', 'bonde', 'bone', 'boneca', 'boneco', 'bongo', 'bonito', 'bons', 'bonsai', 'bonus', 'bonzo', 'book', 'boom', 'boot', 'borato', 'borax', 'borco', 'borda', 'bordao', 'bordar', 'bordel', 'bordo', 'boreal', 'boro', 'borra', 'borrao', 'borrar', 'borsch', 'boson', 'bosque', 'bossa', 'bosta', 'bota', 'botao', 'botar', 'botas', 'bote', 'boteco', 'botica', 'botija', 'botina', 'boto', 'bovino', 'boxe', 'brabo', 'braca', 'bracal', 'braco', 'bradar', 'brado', 'braile', 'brama', 'branca', 'branco', 'brandir', 'brando', 'brasa', 'brasao', 'brasil', 'bravio', 'bravo', 'breca', 'brecar', 'brecha', 'brecho', 'brega', 'brejo', 'breque', 'bretao', 'breu', 'breve', 'brida', 'bridge', 'briga', 'brigar', 'brilho', 'brim', 'brinco', 'brinde', 'brio', 'brioso', 'brisa', 'britar', 'broa', 'broca', 'brocado', 'broche', 'bromato', 'bromo', 'bronca', 'bronco', 'bronha', 'bronze', 'brotar', 'broto', 'broxa', 'broxar', 'bruaca', 'bruma', 'brusco', 'brutal', 'bruto', 'bruxa', 'bruxo', 'bucha', 'bucho', 'buda', 'budista', 'bueiro', 'bufalo', 'bufao', 'bufar', 'bufe', 'buffer', 'bug', 'bugre', 'bujao', 'bula', 'bulbo', 'bule', 'bum', 'bumbum', 'bunda', 'bundao', 'bunsen', 'buque', 'buraco', 'burgo', 'burla', 'burlar', 'burro', 'burros', 'busca', 'buscar', 'bustie', 'busto', 'butano', 'buzina', 'buzio', 'buzios', 'caaba', 'cabaco', 'cabal', 'cabala', 'cabana', 'cabare', 'cabeca', 'cabelo', 'caber', 'cabide', 'cabina', 'cabine', 'cabo', 'cabra', 'caca', 'cacada', 'cacao', 'cacapa', 'cacar', 'cacau', 'cacete', 'cache', 'cacho', 'cacife', 'caco', 'cacoar', 'cacto', 'cacula', 'cada', 'cade', 'cadeia', 'cadela', 'cadete', 'cadmio', 'caduco', 'cafe', 'cafezal', 'cafila', 'cafona', 'cafune', 'cafuzo', 'cagado', 'cai', 'caiado', 'caiapo', 'caiar', 'caibra', 'caibro', 'caida', 'caido', 'cair', 'cais', 'caiser', 'caixa', 'caixao', 'cajado', 'caju', 'cal', 'calado', 'calao', 'calar', 'calca', 'calcao', 'calcar', 'calcas', 'calcio', 'calco', 'calda', 'caldeu', 'caldo', 'calha', 'calhar', 'calice', 'calido', 'califa', 'call', 'calma', 'calmo', 'calo', 'calombo', 'calor', 'calos', 'caloso', 'calota', 'calote', 'calva', 'calvo', 'cama', 'camada', 'camara', 'cambio', 'camelo', 'camera', 'camisa', 'campal', 'campea', 'campi', 'campo', 'campus', 'cana', 'canal', 'canape', 'canario', 'canca', 'cancao', 'cancer', 'cancha', 'cancro', 'candor', 'caneca', 'caneco', 'canela', 'caneta', 'canga', 'cangaco', 'canhao', 'canico', 'canil', 'canino', 'canja', 'cano', 'canoa', 'canon', 'canoro', 'cansar', 'cantao', 'cantar', 'cantil', 'canto', 'cantor', 'canudo', 'cao', 'caol', 'caolho', 'caos', 'capa', 'capado', 'capar', 'capaz', 'capela', 'capeta', 'capilar', 'capim', 'capita', 'capitao', 'capo', 'capota', 'captar', 'captor', 'caput', 'capuz', 'caqui', 'cara', 'carao', 'carate', 'cardume', 'careca', 'careta', 'carga', 'cargo', 'cariar', 'carie', 'carijo', 'caril', 'carma', 'carmim', 'carnal', 'carne', 'caro', 'caroco', 'carola', 'carona', 'carpa', 'carpal', 'carpir', 'carpo', 'carro', 'carta', 'cartao', 'cartaz', 'carte', 'cartel', 'cartum', 'carvao', 'cas', 'casa', 'casaca', 'casaco', 'casado', 'casal', 'casar', 'casario', 'casba', 'casca', 'cascata', 'casco', 'casear', 'caserna', 'caso', 'casos', 'cassar', 'casta', 'casto', 'castor', 'casual', 'casulo', 'catalao', 'catar', 'catch', 'cateto', 'cation', 'cativo', 'catodo', 'cauboi', 'caucao', 'cauda', 'cauim', 'caule', 'causa', 'causal', 'causar', 'causo', 'cavado', 'cavala', 'cavalo', 'cavar', 'cave', 'caviar', 'cavilha', 'cavo', 'caxias', 'cde', 'cear', 'cebola', 'ceco', 'ceder', 'cedo', 'cedro', 'cedula', 'cegar', 'cego', 'cei', 'ceia', 'ceifa', 'ceifar', 'cela', 'celere', 'celo', 'celta', 'celula', 'cem', 'cena', 'cenico', 'censo', 'censor', 'cento', 'centro', 'cep', 'cepa', 'cera', 'cerca', 'cercar', 'cerco', 'cerda', 'cereal', 'cereja', 'ceres', 'cerio', 'cerne', 'cerol', 'cerrar', 'cerro', 'certo', 'cervo', 'cerzir', 'cesar', 'cesio', 'cessao', 'cessar', 'cesta', 'cesto', 'cetim', 'cetona', 'cetro', 'ceu', 'ceus', 'cevada', 'cevado', 'cevar', 'cha', 'chabu', 'chador', 'chaga', 'chagas', 'chale', 'chama', 'chamar', 'chamine', 'chance', 'chao', 'chapa', 'chapada', 'chapas', 'chapeu', 'charco', 'charge', 'charme', 'chassi', 'chat', 'chata', 'chato', 'chavao', 'chave', 'che', 'checar', 'check', 'checo', 'chefe', 'chefia', 'chega', 'chegar', 'chegou', 'cheia', 'cheio', 'cheire', 'cheiro', 'cheque', 'chiado', 'chiar', 'chico', 'chifre', 'china', 'chinela', 'chines', 'chintz', 'chip', 'chique', 'chispa', 'chiste', 'chita', 'choca', 'chocar', 'chocho', 'chofer', 'chop', 'chope', 'choque', 'chorao', 'chorar', 'choro', 'chova', 'chover', 'chua', 'chuchar', 'chuchu', 'chue', 'chule', 'chulo', 'chumbo', 'chupar', 'churro', 'chutar', 'chute', 'chuva', 'chuvao', 'ciciar', 'cicio', 'ciclo', 'cicuta', 'cidade', 'cidra', 'ciente', 'cifra', 'cifrao', 'cifrar', 'cigano', 'cilada', 'cilha', 'cilhar', 'cilio', 'cima', 'cimo', 'cinco', 'cindir', 'cine', 'cinema', 'cingir', 'cinico', 'cinta', 'cinto', 'cinza', 'cinzas', 'cinzel', 'cio', 'cioso', 'cipo', 'cipoal', 'circo', 'cirio', 'cirro', 'ciscar', 'cisco', 'cisma', 'cismar', 'cisne', 'cisto', 'citado', 'citar', 'citara', 'ciume', 'civel', 'civico', 'civil', 'cla', 'clamar', 'clamor', 'clara', 'clarao', 'clarim', 'claro', 'classe', 'clava', 'clave', 'clero', 'clicar', 'cliche', 'clima', 'climax', 'clip', 'clipe', 'cliper', 'clique', 'cloaca', 'clonal', 'clonar', 'clone', 'clorar', 'cloro', 'close', 'clt', 'clube', 'coacao', 'coador', 'coagir', 'coala', 'coalhar', 'coar', 'coaxar', 'cobaia', 'cobica', 'cobol', 'cobra', 'cobrar', 'cobre', 'cobrir', 'coca', 'cocada', 'cocar', 'coccix', 'coche', 'cocker', 'coco', 'cocota', 'codice', 'codigo', 'codon', 'coelho', 'coesao', 'coeso', 'cofre', 'cogito', 'coibir', 'coice', 'coio', 'coiote', 'coisa', 'coisas', 'coito', 'cola', 'colado', 'colar', 'colcha', 'colcos', 'coldre', 'colega', 'colera', 'coleta', 'colete', 'colher', 'colica', 'colina', 'colite', 'colmar', 'colo', 'colon', 'colono', 'coluna', 'com', 'coma', 'comeco', 'comer', 'comes', 'cometa', 'comeu', 'comico', 'comida', 'comido', 'comigo', 'comite', 'como', 'comoda', 'comodo', 'complo', 'compor', 'compra', 'comum', 'comuna', 'comunal', 'concha', 'condao', 'conde', 'condor', 'conduz', 'cone', 'conego', 'conexo', 'confete', 'conga', 'conico', 'conluio', 'conosco', 'consome', 'consul', 'conta', 'contar', 'contas', 'contem', 'conter', 'conto', 'contra', 'conves', 'convir', 'copa', 'copas', 'copia', 'copiao', 'copiar', 'copo', 'copos', 'copta', 'coptico', 'copula', 'coque', 'cor', 'corado', 'coragem', 'coral', 'corar', 'corca', 'corcel', 'corda', 'cordao', 'cordas', 'cordel', 'coreto', 'coriza', 'corja', 'cornea', 'corneo', 'corner', 'corno', 'coro', 'coroa', 'coroar', 'coroca', 'corpo', 'corpus', 'correr', 'corso', 'cortar', 'corte', 'cortes', 'cortex', 'coruja', 'corvo', 'cos', 'coser', 'cosmo', 'costa', 'costas', 'cota', 'cotacao', 'cotado', 'cotar', 'cotejo', 'coto', 'couro', 'couve', 'cova', 'covado', 'covil', 'coxa', 'coxear', 'coxo', 'cozer', 'cozido', 'cpu', 'cracha', 'crack', 'cranio', 'craque', 'crase', 'crasso', 'cravar', 'cravo', 'crawl', 'creche', 'credo', 'credor', 'cremar', 'creme', 'crenca', 'crente', 'crepe', 'crepom', 'crer', 'crespo', 'cria', 'criacao', 'criada', 'criado', 'criar', 'cricri', 'criei', 'crime', 'crimes', 'crina', 'cripta', 'crise', 'crisma', 'crista', 'cristo', 'crivar', 'crivel', 'crivo', 'croata', 'croche', 'cromado', 'cromar', 'cromo', 'croqui', 'crosta', 'cru', 'cruel', 'cruz', 'cruzar', 'cruzes', 'cuba', 'cubano', 'cubica', 'cubico', 'cubito', 'cubo', 'cuca', 'cuco', 'cucuia', 'cueca', 'cueiro', 'cuia', 'cuica', 'cuidam', 'cuidar', 'cujo', 'culote', 'culpa', 'culpar', 'cultivo', 'culto', 'cultuar', 'cume', 'cumulo', 'cunha', 'cunhar', 'cunho', 'cupe', 'cupido', 'cupim', 'cupom', 'cupreo', 'cupula', 'cura', 'curado', 'curar', 'curare', 'curau', 'curdo', 'curia', 'curie', 'curio', 'curra', 'curral', 'currar', 'cursar', 'cursivo', 'curso', 'cursor', 'curta', 'curtir', 'curto', 'curtos', 'curva', 'curvar', 'curvas', 'curvo', 'cuscuz', 'cuspe', 'cuspir', 'custa', 'custar', 'custas', 'custe', 'custo', 'cutelo', 'cutia', 'cutis', 'czar', 'czarina', 'dablio', 'dacha', 'dacota', 'dadiva', 'dado', 'dados', 'dai', 'daimio', 'dali', 'dalia', 'dalton', 'dama', 'damas', 'danado', 'danar', 'danca', 'dancar', 'dano', 'danoso', 'dantes', 'daqui', 'dar', 'dardo', 'darma', 'das', 'dasein', 'data', 'datar', 'datcha', 'dativo', 'deao', 'debaixo', 'debate', 'debil', 'debito', 'decada', 'decair', 'decano', 'decidi', 'decimo', 'deco', 'decorar', 'decoro', 'decote', 'decurso', 'dedal', 'dedao', 'dedar', 'dedo', 'dedos', 'def', 'defesa', 'defumar', 'degas', 'degelo', 'degola', 'degrade', 'degrau', 'dei', 'deitar', 'deixa', 'deixar', 'deja', 'dejeto', 'dela', 'delacao', 'delas', 'dele', 'delfim', 'delito', 'delta', 'demais', 'demao', 'demo', 'demode', 'demonio', 'demora', 'demover', 'dende', 'dengue', 'denodo', 'denso', 'dental', 'dente', 'dentes', 'dentre', 'dentro', 'depilar', 'depois', 'depor', 'deque', 'derby', 'deriva', 'derme', 'des', 'descer', 'desde', 'desdem', 'desejo', 'desenho', 'design', 'desova', 'despir', 'dessa', 'desse', 'desta', 'deste', 'destro', 'desunir', 'desuso', 'desvio', 'deter', 'detido', 'detras', 'deu', 'deum', 'deus', 'deusa', 'deve', 'dever', 'devido', 'devo', 'devora', 'devoto', 'dez', 'dezena', 'dezoito', 'dia', 'diabo', 'diacho', 'dial', 'diante', 'diaria', 'diario', 'dias', 'dica', 'diccao', 'didata', 'diedro', 'diesel', 'dieta', 'difusa', 'difuso', 'digito', 'digno', 'digo', 'dilema', 'dileto', 'diluir', 'dina', 'dinamo', 'dinar', 'diodo', 'dique', 'direito', 'direm', 'direta', 'direto', 'discar', 'disco', 'dispar', 'dispor', 'disso', 'distar', 'disto', 'dita', 'ditado', 'ditame', 'ditar', 'dito', 'ditto', 'diurno', 'diva', 'divida', 'dividir', 'divino', 'divisa', 'divisao', 'dizer', 'dizima', 'dizimo', 'doacao', 'doado', 'doador', 'doar', 'dobra', 'dobrar', 'dobro', 'doca', 'doce', 'doces', 'docil', 'docura', 'dodo', 'dodoi', 'doenca', 'doente', 'doer', 'dog', 'doge', 'dogma', 'dogue', 'doidao', 'doido', 'dois', 'dolar', 'dolby', 'dolly', 'dolmen', 'dolo', 'dolosa', 'doloso', 'dom', 'domado', 'domar', 'dome', 'domino', 'domo', 'dona', 'donde', 'dono', 'dopado', 'dopar', 'doping', 'dor', 'dorido', 'dormir', 'dorsal', 'dos', 'dosar', 'dose', 'dossie', 'dotado', 'dotar', 'dote', 'dourar', 'douto', 'doutor', 'doutro', 'doze', 'dracar', 'dracma', 'draga', 'dragao', 'dragar', 'dragea', 'drama', 'drenar', 'dreno', 'driada', 'driade', 'drible', 'drive', 'driver', 'droga', 'drogar', 'dropes', 'druida', 'druso', 'dual', 'duas', 'dubio', 'dublar', 'duble', 'dubnio', 'ducado', 'ducal', 'ducha', 'ductil', 'ducto', 'duelar', 'duelo', 'duende', 'dueto', 'dulija', 'dum', 'duma', 'duna', 'dundum', 'duo', 'dupla', 'duplex', 'duplo', 'duque', 'dura', 'durao', 'durar', 'dureza', 'duro', 'durou', 'duvida', 'duzia', 'ebano', 'ebcdic', 'ebrio', 'eburneo', 'eca', 'ecg', 'ecler', 'eclusa', 'eco', 'ecoar', 'eczema', 'edema', 'eden', 'edicao', 'edil', 'edipo', 'edital', 'editar', 'edito', 'editor', 'educar', 'efe', 'efeito', 'efendi', 'efg', 'eficaz', 'efigie', 'efusao', 'egide', 'ego', 'egoismo', 'egregio', 'egua', 'eia', 'eira', 'eis', 'eivar', 'eixo', 'eixos', 'ejecao', 'ejetar', 'ela', 'elas', 'ele', 'eleger', 'elegia', 'eleito', 'elenco', 'elepe', 'elevar', 'elipse', 'elisao', 'elite', 'elixir', 'elmo', 'elo', 'elogio', 'ema', 'e-mail', 'emanar', 'embalo', 'embate', 'embolo', 'embora', 'eme', 'emenda', 'emfa', 'emir', 'emitir', 'emocao', 'empada', 'empate', 'empuxo', 'emular', 'encaixe', 'encher', 'enduro', 'ene', 'enema', 'enfado', 'enfase', 'enfermo', 'enfiar', 'enfim', 'engano', 'engaste', 'engate', 'engodo', 'enguia', 'enho', 'enigma', 'enjoar', 'enjoo', 'enlacar', 'enlace', 'enlevo', 'enojar', 'enol', 'enorme', 'enredo', 'ensaio', 'enseada', 'ensejo', 'ensino', 'entao', 'ente', 'entoar', 'entojo', 'entorse', 'entrar', 'entre', 'entulho', 'enviar', 'envio', 'enxada', 'enxame', 'enxuto', 'enzima', 'eolico', 'epica', 'epico', 'epoca', 'epoxi', 'epsom', 'epura', 'equino', 'equipar', 'equipe', 'era', 'eram', 'erario', 'erbio', 'erecao', 'ereto', 'erg', 'ergo', 'erguer', 'erguido', 'ericar', 'erigir', 'ermo', 'erodido', 'erodir', 'eros', 'erosao', 'errado', 'errar', 'errata', 'erre', 'erro', 'erros', 'ersatz', 'erupcao', 'erva', 'ervilha', 'esbelto', 'esboco', 'escada', 'escala', 'escama', 'escape', 'escoar', 'escola', 'escopa', 'escopo', 'escora', 'escore', 'escova', 'escrava', 'escudo', 'escuna', 'escura', 'escuro', 'escuta', 'esfera', 'esforco', 'esgoto', 'esguio', 'eslavo', 'esmero', 'esmo', 'esmola', 'esnobe', 'espaco', 'espada', 'espera', 'espero', 'espeto', 'espiao', 'espiar', 'espiga', 'espiral', 'espora', 'esposa', 'esposo', 'espuma', 'esqui', 'essa', 'essas', 'esse', 'est', 'esta', 'estaca', 'estacar', 'estada', 'estado', 'estafa', 'estalo', 'estante', 'estao', 'estar', 'estara', 'estatal', 'este', 'esteio', 'estepe', 'ester', 'esteta', 'estiar', 'estica', 'estilo', 'estima', 'estio', 'estiva', 'estojo', 'estopa', 'estou', 'estria', 'estudo', 'estufa', 'esvair', 'eta', 'etano', 'etanol', 'etapa', 'etario', 'etc', 'eteno', 'eter', 'etereo', 'eterno', 'etica', 'etico', 'etiope', 'etnia', 'etnico', 'etos', 'eunuco', 'eureca', 'euro', 'europa', 'evadir', 'evasao', 'evasivo', 'evento', 'evitar', 'evocar', 'exalar', 'exaltar', 'exame', 'exata', 'exatas', 'exato', 'exceto', 'excluir', 'exibir', 'exigir', 'exiguo', 'exilar', 'exilio', 'eximio', 'eximir', 'existe', 'existem', 'exito', 'exodo', 'expedir', 'expert', 'expiar', 'expo', 'expor', 'extase', 'externa', 'extinto', 'extra', 'exu', 'exumar', 'fab', 'fabril', 'fabula', 'faca', 'facada', 'facao', 'faccao', 'face', 'faceta', 'facho', 'facial', 'facil', 'factica', 'facto', 'fada', 'fadado', 'fadar', 'fadiga', 'fado', 'fagote', 'faina', 'faisao', 'faisca', 'faixa', 'faixas', 'fajuto', 'fala', 'falado', 'falador', 'falar', 'falcao', 'falha', 'falhar', 'falho', 'falico', 'falida', 'falido', 'falir', 'falo', 'falou', 'falsa', 'falso', 'falta', 'faltar', 'faltoso', 'fama', 'famoso', 'fanho', 'fao', 'fapesp', 'faquir', 'farad', 'farao', 'farda', 'fardao', 'fardar', 'fardo', 'farelo', 'faro', 'farofa', 'farol', 'farpa', 'farra', 'farsa', 'farsi', 'fartar', 'farto', 'fase', 'fases', 'fastio', 'fatal', 'fatia', 'fatiar', 'fato', 'fator', 'fatos', 'fatura', 'fauna', 'fauno', 'fausto', 'fava', 'favela', 'favo', 'favor', 'fax', 'faxina', 'faz', 'fazer', 'feb', 'febem', 'febrao', 'febre', 'febril', 'fecal', 'fechar', 'fecho', 'fecula', 'feder', 'fedido', 'fedor', 'feed', 'feia', 'feias', 'feicao', 'feijao', 'feio', 'feioso', 'feira', 'feita', 'feitas', 'feitio', 'feito', 'feitor', 'feiura', 'feixe', 'fel', 'felino', 'feliz', 'feltro', 'femea', 'femur', 'fenda', 'fender', 'fenix', 'feno', 'fera', 'feria', 'ferias', 'ferida', 'ferido', 'ferino', 'ferir', 'fermi', 'fermio', 'feroz', 'ferrao', 'ferrar', 'ferrea', 'ferreo', 'ferro', 'ferros', 'ferry', 'fertil', 'ferver', 'fervor', 'festa', 'festas', 'festim', 'fetal', 'fetido', 'feto', 'feudal', 'feudo', 'fezes', 'fgh', 'fia', 'fiacao', 'fiada', 'fiado', 'fiador', 'fianca', 'fiapo', 'fiar', 'fiasco', 'fibra', 'ficam', 'ficar', 'ficcao', 'ficha', 'fichar', 'fico', 'fiel', 'fiesp', 'fifa', 'figa', 'figado', 'figo', 'figura', 'fila', 'filao', 'filar', 'file', 'fileira', 'filha', 'filho', 'filial', 'filiar', 'filmar', 'filme', 'filmes', 'filo', 'filtrar', 'filtro', 'fim', 'fina', 'finado', 'final', 'finar', 'fincar', 'findar', 'fineza', 'fingido', 'fingir', 'finito', 'fino', 'finura', 'fio', 'fiorde', 'fipe', 'fiquei', 'firma', 'firmar', 'firme', 'firula', 'fiscal', 'fisco', 'fisgar', 'fisica', 'fisico', 'fissao', 'fita', 'fitar', 'fivela', 'fixa', 'fixado', 'fixar', 'fixo', 'fiz', 'fla', 'flagra', 'flama', 'flanco', 'flap', 'flash', 'flauta', 'flecha', 'flerte', 'fleuma', 'flexao', 'flexivo', 'flexor', 'floco', 'flor', 'flora', 'floral', 'florao', 'florete', 'florim', 'florir', 'fluido', 'fluir', 'fluor', 'flush', 'flute', 'fluxo', 'f.o.b.', 'fobia', 'fobias', 'fobos', 'foca', 'focal', 'foco', 'fofo', 'fofoca', 'fofura', 'fog', 'fogaca', 'fogao', 'foge', 'fogo', 'fogos', 'fogoso', 'foi', 'foice', 'foie', 'fole', 'folego', 'foles', 'folga', 'folgar', 'folha', 'folia', 'foliao', 'folico', 'fome', 'fonado', 'fondue', 'fone', 'fonema', 'fonfom', 'fonte', 'for', 'fora', 'foram', 'forca', 'forcar', 'forcas', 'forja', 'forjar', 'forma', 'formal', 'formao', 'formar', 'formas', 'formol', 'formou', 'forno', 'foro', 'forra', 'forrar', 'forro', 'forte', 'forum', 'fosco', 'fossa', 'fossil', 'fosso', 'foto', 'foton', 'foz', 'fraca', 'fracao', 'fraco', 'frade', 'fragil', 'fragor', 'fralda', 'franca', 'franco', 'frango', 'franja', 'frappe', 'fraque', 'frasal', 'frasco', 'frase', 'fraude', 'freada', 'frear', 'frei', 'freio', 'freira', 'freire', 'frenesi', 'frente', 'freon', 'fresa', 'fresar', 'fresco', 'fresta', 'fretar', 'frete', 'frevo', 'fria', 'frieza', 'frigido', 'frigir', 'frio', 'frios', 'frisa', 'frisar', 'fritar', 'frito', 'fronde', 'fronha', 'front', 'fronte', 'frota', 'frouxo', 'frufru', 'frugal', 'fruir', 'fruta', 'frutas', 'fruto', 'frutos', 'fuba', 'fuca', 'fucar', 'fucas', 'fucsia', 'fuga', 'fugaz', 'fugido', 'fugir', 'fuinha', 'fujao', 'fulano', 'fulgor', 'fulo', 'fumaca', 'fumar', 'fume', 'fumo', 'funcao', 'funda', 'fundao', 'fundar', 'fundir', 'fundo', 'funesto', 'fungar', 'fungo', 'funil', 'furada', 'furado', 'furar', 'furgao', 'furia', 'furias', 'furo', 'furor', 'furtar', 'furto', 'fusa', 'fusao', 'fusca', 'fuscao', 'fusco', 'fuso', 'futil', 'futuro', 'fuxico', 'fuzil', 'fuzue', 'gabar', 'gabiru', 'gado', 'gafe', 'gag', 'gaga', 'gago', 'gaiato', 'gaijin', 'gaiola', 'gaita', 'gajo', 'gala', 'galao', 'gale', 'galeao', 'galego', 'galera', 'galeto', 'galgar', 'galgo', 'galho', 'galico', 'galio', 'galo', 'galope', 'galpao', 'gama', 'gamado', 'gamao', 'gamar', 'gamba', 'game', 'gamela', 'gameta', 'gamo', 'gana', 'gancho', 'ganglio', 'ganhar', 'ganho', 'ganso', 'garapa', 'garbo', 'garca', 'garcom', 'garfar', 'garfo', 'gari', 'garoa', 'garoar', 'garota', 'garoto', 'garra', 'gas', 'gasoso', 'gastao', 'gastar', 'gasto', 'gata', 'gato', 'gatuno', 'gaucho', 'gaules', 'gauss', 'gaveta', 'gaviao', 'gaxeta', 'gaze', 'gazela', 'gazeta', 'geada', 'gear', 'geiser', 'gel', 'gelado', 'gelar', 'geleia', 'gelido', 'gelo', 'gema', 'gemada', 'gemeo', 'gemeos', 'gemer', 'gemido', 'gene', 'general', 'genero', 'genese', 'gengiva', 'genial', 'genio', 'genioso', 'genoma', 'genro', 'gente', 'gentil', 'gentio', 'geolog', 'geral', 'gerar', 'gerir', 'germe', 'gesso', 'gestao', 'gesto', 'ghi', 'gibao', 'gibi', 'gigolo', 'gilete', 'gim', 'ginete', 'gira', 'girafa', 'girar', 'giria', 'girino', 'girl', 'giro', 'giz', 'glace', 'gladio', 'glande', 'gleba', 'glicol', 'glide', 'glifo', 'global', 'globo', 'gloria', 'glotal', 'glote', 'gluglu', 'gluon', 'glutao', 'gluten', 'gluteo', 'gnomo', 'gnose', 'gnu', 'goela', 'gogo', 'goi', 'goiaba', 'goiano', 'gol', 'gola', 'golaco', 'gole', 'golear', 'goleiro', 'golfada', 'golfar', 'golfe', 'golfo', 'golpe', 'goma', 'gomo', 'gonada', 'gongo', 'gonzo', 'gorar', 'gorda', 'gordio', 'gordo', 'gorila', 'gorro', 'gosma', 'gospel', 'gostar', 'gosto', 'gostou', 'gota', 'gotica', 'gotico', 'gouda', 'gozado', 'gozar', 'gozo', 'graal', 'graca', 'gracas', 'grade', 'grades', 'gradil', 'grafar', 'grafema', 'grafia', 'gralha', 'grama', 'gramar', 'grana', 'grande', 'granel', 'grao', 'gras', 'grassar', 'gratis', 'grato', 'grau', 'gravar', 'grave', 'graxa', 'graxo', 'grega', 'grego', 'gregos', 'grelha', 'gremio', 'greve', 'grifar', 'grifo', 'grilar', 'grilo', 'gringo', 'gripado', 'gripal', 'gripe', 'grita', 'gritar', 'grito', 'grogue', 'grosa', 'grossa', 'grosso', 'grua', 'grudar', 'grude', 'grupal', 'grupo', 'grupos', 'gruta', 'guache', 'guapo', 'guara', 'guarani', 'guarda', 'gude', 'guei', 'gueixa', 'guelra', 'guerra', 'gueto', 'guia', 'guiado', 'guiar', 'guiche', 'guidao', 'guidom', 'guincho', 'guineu', 'guisar', 'guizo', 'gula', 'gulag', 'guloso', 'gume', 'guri', 'guru', 'gusa', 'habil', 'habito', 'hacker', 'hadron', 'hafnio', 'haia', 'haicai', 'halito', 'hall', 'halley', 'halo', 'haltere', 'hand', 'hangar', 'hansa', 'haras', 'harem', 'harpa', 'harpia', 'haste', 'havana', 'haver', 'hebreu', 'hegira', 'hein', 'helice', 'helio', 'henry', 'hera', 'heranca', 'herdar', 'herege', 'hernia', 'heroi', 'heroina', 'herpes', 'hertz', 'hiato', 'hidra', 'hiena', 'hifen', 'hij', 'himen', 'hinario', 'hindu', 'hino', 'hipico', 'hippie', 'hit', 'hitita', 'hiv', 'hobby', 'hoje', 'holismo', 'holmio', 'homem', 'homens', 'homilia', 'homo', 'homos', 'homus', 'honra', 'honrar', 'honras', 'honroso', 'hopi', 'hoquei', 'hora', 'horario', 'horas', 'horda', 'horror', 'horta', 'horto', 'hostia', 'hostil', 'hot', 'hotel', 'hum', 'humana', 'humano', 'humo', 'humor', 'humus', 'huno', 'huri', 'hurra', 'husky', 'hutu', 'iaia', 'ianque', 'iansa', 'iaque', 'iara', 'iataga', 'iate', 'ibis', 'icar', 'icone', 'ida', 'idade', 'ideal', 'ideia', 'idem', 'idiche', 'idilio', 'idioma', 'idiota', 'ido', 'idolo', 'idoneo', 'idos', 'idoso', 'ien', 'iene', 'igapo', 'igara', 'iglu', 'ignaro', 'igneo', 'ignicao', 'igreja', 'igual', 'iguana', 'ijk', 'ilacao', 'ilegal', 'ileso', 'ilha', 'ilhar', 'iliaco', 'iludido', 'iludir', 'ilusao', 'ima', 'imagem', 'imbu', 'imbuia', 'imbuir', 'imenso', 'imerso', 'imitar', 'iml', 'imolar', 'imoral', 'imovel', 'impala', 'impar', 'impeto', 'impio', 'impor', 'impune', 'impuro', 'imundo', 'imune', 'inabil', 'inacao', 'inalar', 'inapto', 'inato', 'inca', 'incaico', 'inchar', 'inciso', 'incolor', 'incubo', 'index', 'indice', 'indico', 'indigo', 'indio', 'indole', 'inepto', 'inerte', 'infame', 'infiel', 'infimo', 'infixo', 'inflar', 'ingles', 'ingua', 'inhaca', 'inhame', 'inibir', 'inicio', 'iniquo', 'injetar', 'inning', 'inocuo', 'inovar', 'input', 'insano', 'inseto', 'insone', 'instar', 'insumo', 'inte', 'interim', 'inti', 'intimo', 'intuir', 'inutil', 'invasor', 'inveja', 'inves', 'iodado', 'iodar', 'iodo', 'iof', 'ioga', 'iogue', 'ioio', 'ion', 'ionica', 'ionico', 'ioruba', 'iota', 'ipe', 'ira', 'irado', 'irar', 'iria', 'iridio', 'iris', 'irma', 'irmao', 'irmaos', 'ironia', 'irra', 'irreal', 'ir-se', 'isbn', 'isca', 'isento', 'isla', 'iso', 'isolar', 'isopor', 'isotopo', 'iss', 'isso', 'istmo', 'isto', 'italia', 'item', 'iterar', 'itrio', 'iuane', 'jaba', 'jaburu', 'jabuti', 'jaca', 'jacare', 'jacta', 'jacu', 'jade', 'jaguar', 'jaina', 'jaleco', 'jamais', 'jambo', 'janela', 'janota', 'janta', 'jantar', 'japao', 'japona', 'jarda', 'jardim', 'jargao', 'jarra', 'jarro', 'jasmim', 'jato', 'jaula', 'java', 'javali', 'javel', 'jaz', 'jazer', 'jazida', 'jazigo', 'jazz', 'jeca', 'jegue', 'jeitao', 'jeito', 'jejuar', 'jejum', 'jeova', 'jerico', 'jersei', 'jesus', 'jetom', 'jiboia', 'jihad', 'jilo', 'jingle', 'jipe', 'jkl', 'joana', 'joao', 'job', 'joca', 'jocoso', 'joelho', 'jogada', 'jogado', 'jogar', 'jogo', 'jogos', 'jogral', 'joia', 'joio', 'jojoba', 'joquei', 'jorge', 'jornal', 'jorrar', 'jorro', 'jota', 'joule', 'jovem', 'jovial', 'juba', 'jubilo', 'judeu', 'judia', 'judiar', 'judice', 'judo', 'judoca', 'jugo', 'jugular', 'juiz', 'juizo', 'jujuba', 'julgar', 'julho', 'juncao', 'junco', 'jungir', 'junho', 'junino', 'junior', 'junta', 'juntar', 'junto', 'jura', 'jurado', 'jurar', 'jure', 'jurema', 'juri', 'juriti', 'juro', 'jururu', 'jus', 'justa', 'justo', 'juta', 'juvenil', 'klm', 'labaro', 'labia', 'labial', 'labio', 'labios', 'labor', 'labuta', 'labutar', 'lacada', 'lacaio', 'lacar', 'laco', 'lacrar', 'lacre', 'lactar', 'lactea', 'lacteo', 'lacuna', 'ladino', 'lado', 'ladra', 'ladrao', 'ladrar', 'ladroa', 'lady', 'lago', 'lagoa', 'laguna', 'laia', 'laico', 'laje', 'lajota', 'lama', 'lambda', 'lamber', 'lamela', 'lamina', 'laminar', 'lanca', 'lancar', 'lance', 'lancha', 'lanche', 'landau', 'langor', 'lanoso', 'lapada', 'lapao', 'lapela', 'lapide', 'lapis', 'lapso', 'laque', 'lar', 'larga', 'largar', 'largo', 'larva', 'larval', 'lasca', 'lascar', 'laser', 'lasso', 'lastro', 'lata', 'latao', 'latex', 'latido', 'latim', 'latino', 'latir', 'lato', 'lauda', 'laurea', 'lauto', 'lava', 'lavabo', 'lavada', 'lavar', 'lavra', 'lavrado', 'lavrar', 'lazer', 'leal', 'leao', 'lebre', 'ledo', 'legacao', 'legado', 'legal', 'legar', 'legiao', 'legivel', 'legua', 'legume', 'lei', 'leigo', 'leilao', 'leis', 'leitao', 'leite', 'leito', 'leitoa', 'leitor', 'lele', 'lema', 'leme', 'lemure', 'lenco', 'lencol', 'lenda', 'lendea', 'lenha', 'lente', 'lentes', 'lento', 'leoa', 'leone', 'lepido', 'lepra', 'lepton', 'leque', 'ler', 'lerdo', 'lerna', 'lesado', 'lesao', 'lesar', 'lesma', 'leste', 'letal', 'letao', 'letivo', 'letra', 'letras', 'leu', 'lev', 'leva', 'levado', 'levar', 'leve', 'levedo', 'leveza', 'levita', 'lexema', 'lexico', 'lhama', 'lhe', 'lhufas', 'liame', 'libelo', 'libero', 'libido', 'libio', 'libra', 'libre', 'libreto', 'licao', 'liceu', 'licito', 'licor', 'lida', 'lidar', 'lider', 'liga', 'ligada', 'ligado', 'ligar', 'ligeiro', 'light', 'lilas', 'lima', 'limao', 'limar', 'limbo', 'limiar', 'limite', 'limo', 'limpa', 'limpar', 'limpeza', 'limpo', 'lince', 'lindo', 'linear', 'linfa', 'lingua', 'linha', 'linhas', 'linho', 'lipase', 'liquen', 'lira', 'lirica', 'lirico', 'lirio', 'lisa', 'liso', 'lisol', 'lisp', 'lista', 'listar', 'listas', 'listra', 'lisura', 'litio', 'litro', 'lituano', 'livido', 'living', 'livrar', 'livre', 'livro', 'livros', 'lixa', 'lixao', 'lixar', 'lixeiro', 'lixo', 'lmn', 'lob', 'lobby', 'lobo', 'lobulo', 'locais', 'local', 'locao', 'lockout', 'locucao', 'lodo', 'log', 'logica', 'logico', 'login', 'logo', 'logoff', 'lograr', 'logro', 'loja', 'lojista', 'lombar', 'lombo', 'lona', 'longa', 'longe', 'longo', 'longos', 'lontra', 'loop', 'loquaz', 'lorde', 'lorota', 'lot', 'lotar', 'lote', 'lotear', 'loteca', 'loto', 'lotus', 'louca', 'louco', 'loura', 'louro', 'louros', 'lousa', 'louvar', 'louvor', 'lua', 'luar', 'lucido', 'lucio', 'lucrar', 'lucro', 'lucros', 'ludico', 'ludo', 'lugar', 'luis', 'lula', 'lulu', 'lume', 'lumen', 'lunar', 'lundu', 'luneta', 'lupa', 'lupulo', 'lupus', 'luso', 'lustre', 'lustro', 'luta', 'lutador', 'lutar', 'luto', 'luva', 'luvas', 'lux', 'luxacao', 'luxar', 'luxo', 'luz', 'maca', 'macaco', 'macada', 'macado', 'macar', 'machado', 'macho', 'macico', 'maciez', 'macio', 'maco', 'macom', 'macudo', 'macula', 'madame', 'madeira', 'madre', 'madura', 'maduro', 'mae', 'ma-fe', 'mafia', 'magia', 'magica', 'magico', 'magma', 'magna', 'magno', 'mago', 'magoa', 'magoado', 'magoar', 'magos', 'magras', 'magro', 'maia', 'maio', 'maior', 'mais', 'maisena', 'major', 'mal', 'mala', 'malaio', 'malar', 'maleta', 'malha', 'malhar', 'malho', 'maloca', 'malote', 'malta', 'malte', 'maltes', 'maluco', 'mama', 'mamae', 'mamao', 'mamar', 'mamata', 'mambo', 'mamilo', 'mamona', 'mamute', 'mana', 'manada', 'mancal', 'mancar', 'mancha', 'manchu', 'manco', 'mandao', 'mandar', 'mando', 'mane', 'manear', 'manejo', 'maneta', 'manga', 'mangar', 'mangas', 'mangue', 'manha', 'mania', 'manjar', 'mano', 'mansao', 'manso', 'manta', 'manter', 'manto', 'mantra', 'manual', 'mao', 'maori', 'maos', 'mapa', 'maqui', 'mar', 'maraca', 'maraja', 'marca', 'marcar', 'marcha', 'marco', 'mare', 'mares', 'marfim', 'margem', 'maria', 'marido', 'marina', 'marinar', 'marola', 'maroto', 'marrom', 'marta', 'marte', 'martim', 'martini', 'martir', 'marujo', 'mas', 'mascar', 'maser', 'massa', 'mastim', 'mastro', 'mata', 'matada', 'matar', 'match', 'mate', 'mater', 'matina', 'matine', 'matiz', 'mato', 'matrio', 'matriz', 'matuto', 'mau', 'maus', 'maxima', 'maximo', 'maxixe', 'mazela', 'mazorca', 'mdc', 'meada', 'meado', 'mece', 'mecha', 'media', 'mediar', 'medica', 'medico', 'medida', 'medio', 'medir', 'medium', 'medley', 'medo', 'medula', 'medusa', 'meeiro', 'megera', 'meia', 'meigo', 'meio', 'meios', 'meiose', 'mel', 'melaco', 'melado', 'melao', 'melar', 'mele', 'meleca', 'melhor', 'meloso', 'melro', 'membro', 'mencao', 'menear', 'meneio', 'menina', 'menino', 'menir', 'menor', 'menora', 'menos', 'mensal', 'menta', 'mental', 'mente', 'mentir', 'mentol', 'mentor', 'menu', 'merce', 'merito', 'mero', 'mes', 'mesa', 'mesada', 'mesario', 'mescal', 'mescla', 'meses', 'mesma', 'mesmo', 'meson', 'mestra', 'mestre', 'meta', 'metade', 'metais', 'metal', 'metano', 'meter', 'metida', 'metido', 'metila', 'metodo', 'metrica', 'metro', 'meu', 'mexer', 'mexida', 'mexido', 'miado', 'miar', 'miau', 'mica', 'micado', 'miccao', 'mico', 'micose', 'micro', 'micron', 'midi', 'midia', 'mig', 'mignon', 'migrar', 'mil', 'milha', 'milhao', 'milhar', 'milho', 'milico', 'mim', 'mimado', 'mimar', 'mimica', 'mimico', 'mimo', 'mimosa', 'mina', 'minado', 'minar', 'minerio', 'mingau', 'mingua', 'minha', 'minhas', 'minima', 'minimo', 'minucia', 'minuta', 'minuto', 'miolo', 'miope', 'miopia', 'mira', 'mirar', 'mirim', 'mirra', 'mirrar', 'misero', 'missa', 'missal', 'missao', 'missil', 'mista', 'mister', 'misto', 'mitico', 'mito', 'mitose', 'mitra', 'miuda', 'miudo', 'miudos', 'mixar', 'mmc', 'mno', 'moagem', 'mobile', 'moca', 'mocada', 'moco', 'mocoto', 'moda', 'modal', 'modas', 'modelo', 'modem', 'modico', 'modo', 'modorra', 'modos', 'modulo', 'moeda', 'moedas', 'moedor', 'moela', 'moenda', 'moer', 'mofado', 'mofar', 'mofo', 'mogno', 'moido', 'moinho', 'moises', 'moita', 'mol', 'mola', 'molar', 'moldar', 'molde', 'moldura', 'mole', 'molejo', 'moleza', 'molhar', 'molho', 'momo', 'moncao', 'monge', 'mongol', 'montao', 'montar', 'monte', 'montes', 'mora', 'morada', 'morais', 'moral', 'morar', 'mordaz', 'morder', 'mordomo', 'morena', 'moreno', 'morgue', 'mormon', 'morno', 'moroso', 'morrer', 'morro', 'morsa', 'morse', 'morta', 'mortal', 'mortas', 'morte', 'mortem', 'mortis', 'morto', 'mortos', 'mosca', 'mostra', 'mote', 'motel', 'motete', 'motim', 'motivo', 'moto', 'motoca', 'motor', 'motora', 'motriz', 'mouco', 'mouro', 'mouse', 'moveis', 'movel', 'movem', 'mover', 'muamba', 'muar', 'muarra', 'mucama', 'muco', 'mucosa', 'mucoso', 'muda', 'mudado', 'mudar', 'mudez', 'mudo', 'mufti', 'mugido', 'mugir', 'muitas', 'muito', 'muitos', 'mula', 'mulata', 'mulato', 'muleta', 'mulher', 'mulo', 'multa', 'multar', 'mumia', 'mundial', 'mundo', 'munir', 'muon', 'muque', 'murado', 'mural', 'murar', 'murcho', 'mureta', 'muro', 'murro', 'murros', 'musa', 'museu', 'musgo', 'musica', 'musico', 'musse', 'mutua', 'mutuca', 'mutuo', 'nababo', 'nabo', 'nacao', 'nacar', 'nacela', 'naco', 'nacoes', 'nada', 'nadar', 'nadega', 'nadica', 'nadinha', 'nadir', 'nado', 'nafta', 'nago', 'naiade', 'nailon', 'naipe', 'naja', 'nalgum', 'namoro', 'nana', 'nanar', 'nanica', 'nanico', 'nanquim', 'nao', 'napa', 'napalm', 'narina', 'nariz', 'narrar', 'narval', 'nas', 'nasa', 'nasal', 'nascer', 'nata', 'natal', 'nativa', 'nativo', 'nato', 'nau', 'nausea', 'navajo', 'naval', 'nave', 'navio', 'navios', 'nazi', 'neca', 'necas', 'nectar', 'nefasto', 'negar', 'nego', 'negra', 'negro', 'negus', 'nele', 'nelore', 'nem', 'nene', 'nenem', 'nenhum', 'neon', 'neonio', 'nereida', 'nervo', 'nervos', 'nervosa', 'nescio', 'nesga', 'nessa', 'nesse', 'nesses', 'neste', 'net', 'neta', 'neto', 'netuno', 'neura', 'neural', 'neutra', 'neutro', 'nevado', 'neve', 'neves', 'nevoa', 'newton', 'nexo', 'nhoque', 'niaia', 'nicho', 'nife', 'nimbo', 'ninar', 'ninfa', 'ninguem', 'ninho', 'niobio', 'niple', 'niquel', 'nisa', 'nisei', 'nisso', 'nisto', 'nit', 'nitido', 'nitrato', 'nitrilo', 'nivel', 'nivoso', 'nobre', 'nocao', 'nocivo', 'nodal', 'nodoa', 'noe', 'noel', 'noitada', 'noite', 'noiva', 'noivar', 'noivo', 'nojo', 'nomade', 'nome', 'nomeado', 'nomear', 'nomes', 'nono', 'nop', 'nora', 'norma', 'normal', 'normas', 'norte', 'nos', 'nossa', 'nosso', 'nota', 'notado', 'notar', 'notas', 'nova', 'novato', 'nove', 'novela', 'novelo', 'novena', 'noves', 'novica', 'novico', 'novo', 'noz', 'nuanca', 'nubente', 'nubio', 'nublado', 'nublar', 'nuca', 'nuclear', 'nucleo', 'nudez', 'nulo', 'num', 'numa', 'numero', 'numeros', 'nunca', 'nuncio', 'nupcias', 'nutrir', 'nuvem', 'nuvens', 'oab', 'oasis', 'oba', 'obcecar', 'obeso', 'obito', 'objeto', 'oboe', 'obolo', 'obra', 'obrar', 'obras', 'obs', 'obstar', 'obter', 'obtuso', 'obus', 'obvio', 'oca', 'ocapi', 'ocara', 'ocaso', 'oce', 'oceano', 'ocio', 'ocioso', 'oco', 'ocre', 'octal', 'octano', 'octeto', 'ocular', 'oculos', 'oculto', 'ocupar', 'ode', 'odiar', 'odio', 'odioso', 'odor', 'oea', 'oeste', 'ofegar', 'ofensa', 'oferta', 'oficial', 'oficio', 'ofidico', 'ofidio', 'ogiva', 'ogum', 'ohm', 'oigale', 'oit', 'oitava', 'oitavo', 'oito', 'ola', 'olaria', 'ole', 'oleico', 'oleiro', 'oleo', 'oleoso', 'olfato', 'olhada', 'olhado', 'olhar', 'olhe', 'olho', 'olhos', 'olimpo', 'olmo', 'olor', 'ombro', 'ombros', 'omega', 'omisso', 'omitir', 'omolu', 'onca', 'onda', 'ondas', 'onde', 'onerar', 'ong', 'onibus', 'onix', 'ontem', 'onu', 'onus', 'onze', 'opa', 'opaco', 'opala', 'opcao', 'open', 'opep', 'opera', 'operar', 'opinar', 'opiniao', 'opio', 'opor', 'oposta', 'oposto', 'opq', 'optar', 'optico', 'opus', 'ora', 'oracao', 'orador', 'oral', 'orar', 'orbita', 'orca', 'orcar', 'ordem', 'orelha', 'orfao', 'orgao', 'orgia', 'origem', 'orion', 'orixa', 'orla', 'ornar', 'ornato', 'oscar', 'osco', 'osculo', 'osmio', 'osmose', 'ossada', 'ossea', 'osseo', 'osso', 'ossudo', 'ostra', 'otario', 'otica', 'otico', 'otimo', 'otite', 'oua', 'ouricar', 'ourico', 'ouro', 'ousado', 'ousar', 'out', 'outono', 'output', 'outra', 'outras', 'outrem', 'outro', 'outros', 'ouvi', 'ouvido', 'ouvir', 'ova', 'ovacao', 'oval', 'ovalar', 'ovario', 'ovelha', 'over', 'ovni', 'ovo', 'ovos', 'ovulo', 'oxala', 'oxente', 'oxidar', 'oxido', 'oxiuro', 'oxossi', 'ozonio', 'paca', 'pacas', 'pacato', 'paco', 'pacoca', 'pacote', 'pacto', 'padrao', 'padre', 'paelha', 'paete', 'paga', 'pagador', 'pagao', 'pagar', 'pagina', 'pagode', 'pai', 'painel', 'paio', 'paiol', 'pairar', 'pais', 'paises', 'paixao', 'paje', 'pajem', 'pala', 'palato', 'palco', 'paleta', 'paleto', 'palha', 'paliar', 'palido', 'palito', 'palma', 'palmar', 'palmas', 'palmo', 'palmos', 'palpo', 'palpos', 'palrar', 'pampa', 'pampas', 'panaca', 'panama', 'panca', 'panda', 'pane', 'panela', 'panico', 'pano', 'pao', 'papa', 'papada', 'papado', 'papai', 'papaia', 'papal', 'papao', 'papar', 'papas', 'papear', 'papeis', 'papel', 'paper', 'papila', 'papiro', 'papisa', 'papo', 'papua', 'papudo', 'par', 'para', 'parada', 'parado', 'parar', 'parati', 'parca', 'parcial', 'parco', 'pardal', 'pardo', 'parede', 'pareo', 'paria', 'parir', 'paroco', 'parque', 'parsec', 'partam', 'parte', 'partes', 'partir', 'parto', 'parvo', 'pascal', 'pascoa', 'pasmar', 'pasmo', 'passa', 'passar', 'passe', 'passes', 'passo', 'passou', 'pasta', 'pastar', 'pastel', 'pasto', 'pastor', 'pastoso', 'pata', 'pataca', 'patada', 'patamar', 'pataxo', 'pate', 'patela', 'pateta', 'patife', 'patim', 'patio', 'pato', 'patoa', 'patota', 'patrao', 'patria', 'patrio', 'patroa', 'patrono', 'patua', 'pau', 'paulo', 'paus', 'pausa', 'pausado', 'pauta', 'pautar', 'pavao', 'pave', 'pavio', 'pavoa', 'pavor', 'paxa', 'paz', 'pazada', 'pazes', 'peao', 'peca', 'pecado', 'pecar', 'pecas', 'pecha', 'pectina', 'pedaco', 'pedal', 'pedida', 'pedido', 'pedir', 'pedra', 'pegada', 'pegar', 'pegaso', 'peito', 'peixe', 'peixes', 'pela', 'pelada', 'pelado', 'pelar', 'pelas', 'pele', 'pelego', 'peleja', 'pelica', 'pelo', 'pelos', 'pelota', 'peludo', 'pelve', 'pelvis', 'pena', 'penada', 'penal', 'penar', 'penas', 'penca', 'pendao', 'pender', 'pendor', 'pendulo', 'penedo', 'peneira', 'penhor', 'peniano', 'penico', 'penis', 'penosa', 'penoso', 'pensao', 'pensar', 'pensil', 'penso', 'pente', 'pepino', 'pepita', 'pequno', 'per', 'pera', 'perda', 'perdao', 'perder', 'perdiz', 'perdoar', 'pereba', 'perene', 'perfil', 'perigo', 'perito', 'permuta', 'perna', 'pernas', 'pernil', 'peroba', 'perola', 'persa', 'perseu', 'perto', 'peru', 'perua', 'peruar', 'peruca', 'pes', 'pesa', 'pesada', 'pesado', 'pesar', 'pesca', 'pescar', 'peseta', 'peso', 'pessoa', 'peste', 'petala', 'peteca', 'petiz', 'pezada', 'philips', 'pia', 'piada', 'piado', 'piano', 'piao', 'piar', 'pib', 'pica', 'picada', 'picado', 'picanha', 'picape', 'picar', 'pichar', 'piche', 'pick-up', 'picles', 'pico', 'picole', 'picote', 'pidao', 'pidgin', 'piegas', 'pier', 'pierro', 'pifado', 'pifar', 'pigmeu', 'pijama', 'pila', 'pilao', 'pilar', 'pilha', 'pilhar', 'piloro', 'pilotar', 'piloto', 'pilula', 'pimba', 'pinca', 'pincar', 'pincel', 'pinel', 'pinga', 'pingar', 'pingo', 'pinha', 'pinhao', 'pinho', 'pino', 'pinoia', 'pinote', 'pinta', 'pintar', 'pinto', 'pintor', 'pin-up', 'pio', 'piolho', 'pior', 'piora', 'piorar', 'pique', 'pira', 'pirado', 'pirao', 'pirar', 'pirata', 'pires', 'pirex', 'pirita', 'piroca', 'piroga', 'pirua', 'pis', 'pisada', 'pisar', 'piscar', 'piso', 'pista', 'pistao', 'pistola', 'pitada', 'pitanga', 'pitar', 'pito', 'piton', 'pivete', 'pivo', 'pivotar', 'pixaim', 'pixel', 'pixote', 'pizza', 'pla', 'placa', 'placar', 'place', 'plagio', 'plaina', 'planar', 'plano', 'planta', 'plasma', 'plato', 'plebe', 'plebeu', 'pleito', 'pleno', 'plenos', 'pleura', 'plisse', 'plotar', 'plugar', 'plugue', 'pluma', 'plural', 'plutao', 'pnb', 'pneu', 'pobre', 'pobres', 'poca', 'pocao', 'poco', 'poda', 'podar', 'pode', 'podem', 'poder', 'podio', 'podrao', 'podre', 'podres', 'poe', 'poeira', 'poema', 'poente', 'poesia', 'poeta', 'pogrom', 'pois', 'polaca', 'polaco', 'polar', 'polca', 'polen', 'polia', 'polida', 'polido', 'polio', 'polipo', 'polir', 'polo', 'polpa', 'poluir', 'polux', 'polvo', 'pomada', 'pomar', 'pomba', 'pombal', 'pombas', 'pombo', 'pomo', 'pompa', 'pompom', 'ponca', 'ponche', 'poncho', 'ponei', 'ponta', 'pontas', 'ponte', 'ponto', 'pontos', 'poodle', 'pool', 'pop', 'populi', 'poquer', 'por', 'porao', 'porca', 'porcao', 'porco', 'porem', 'porno', 'poro', 'poroso', 'porque', 'porra', 'porre', 'porreta', 'por-se', 'porta', 'portal', 'portao', 'portar', 'porte', 'porto', 'porvir', 'posar', 'pose', 'posse', 'posses', 'posso', 'post', 'posta', 'postal', 'postar', 'poste', 'poster', 'posto', 'postos', 'posudo', 'pote', 'potoca', 'potro', 'poucas', 'pouco', 'poucos', 'poupar', 'pousar', 'pouso', 'povao', 'povinho', 'povo', 'povoar', 'pqr', 'pra', 'praca', 'prado', 'praga', 'praia', 'pranto', 'prata', 'pratica', 'prato', 'pratos', 'praxe', 'prazer', 'prazo', 'prea', 'prece', 'preco', 'precos', 'predio', 'prega', 'pregao', 'pregar', 'prego', 'preito', 'prelo', 'premer', 'premie', 'premio', 'prenda', 'prendas', 'prenha', 'prenhe', 'prensa', 'presa', 'preso', 'pressa', 'presto', 'preta', 'preto', 'pretor', 'prever', 'previa', 'previo', 'prezar', 'prima', 'primar', 'primaz', 'primo', 'primor', 'primos', 'prior', 'prisao', 'prisma', 'privar', 'pro', 'proa', 'probo', 'procon', 'prodigo', 'proeza', 'prol', 'prole', 'prolog', 'prom', 'prompt', 'pronto', 'propina', 'propor', 'prosa', 'proteu', 'proton', 'prova', 'provar', 'provas', 'prover', 'proveta', 'provir', 'prumo', 'psi', 'psique', 'psit', 'psiu', 'pub', 'pubere', 'pubico', 'pubis', 'public', 'pude', 'pudera', 'pudico', 'pudim', 'pudor', 'pueril', 'pufe', 'puido', 'puir', 'pular', 'pule', 'pulga', 'pulgao', 'pulmao', 'pulo', 'pulsar', 'pulso', 'pum', 'puma', 'pumba', 'puncao', 'puncar', 'punhal', 'punho', 'punico', 'punir', 'punk', 'pura', 'pure', 'pureza', 'purgar', 'puro', 'pus', 'puta', 'putsch', 'puxa', 'puxada', 'puxado', 'puxao', 'puxar', 'puxe', 'puzzle', 'qrs', 'qua', 'quadra', 'quadro', 'quais', 'qual', 'quando', 'quanto', 'quao', 'quarar', 'quark', 'quarta', 'quartel', 'quarto', 'quarup', 'quasar', 'quase', 'quati', 'quatro', 'que', 'quebra', 'queda', 'quedar', 'quede', 'queijo', 'queima', 'queixa', 'queixar', 'queixo', 'quem', 'quente', 'quepe', 'quer', 'querer', 'queria', 'qui', 'quiabo', 'quibe', 'quica', 'quicar', 'quiche', 'quieto', 'quilo', 'quina', 'quinta', 'quinto', 'quinze', 'quiser', 'quisto', 'quitar', 'quite', 'quitute', 'quo', 'quorum', 'quota', 'rabada', 'rabano', 'rabeca', 'rabecao', 'rabi', 'rabino', 'rabiola', 'rabo', 'raca', 'racao', 'racas', 'racha', 'rachar', 'racial', 'rad', 'radar', 'radial', 'radiar', 'radicar', 'radio', 'rafia', 'ragu', 'raia', 'raiado', 'raiar', 'rainha', 'raio', 'raios', 'raiva', 'raiz', 'raja', 'rajada', 'rajado', 'ralar', 'rale', 'ralhar', 'ralho', 'rali', 'ralo', 'ram', 'rama', 'ramada', 'ramado', 'ramal', 'ramela', 'ramo', 'ramos', 'rampa', 'rancho', 'ranco', 'rancor', 'rangar', 'ranger', 'rango', 'rap', 'rapa', 'rapar', 'rapaz', 'rape', 'rapido', 'rapina', 'raposa', 'raptar', 'rapto', 'raptor', 'rarear', 'raro', 'rasar', 'rasgao', 'rasgar', 'rasgo', 'raso', 'raspa', 'raspao', 'raspar', 'rasto', 'rastro', 'rasura', 'rata', 'rateio', 'rato', 'ravina', 'razao', 'reaca', 'reacao', 'reagir', 'real', 'realce', 'reatar', 'reator', 'reaver', 'rebite', 'reboco', 'rebu', 'recado', 'recair', 'recato', 'recear', 'receio', 'recibo', 'recife', 'reco', 'recuado', 'recuar', 'recuo', 'recusa', 'rede', 'redea', 'redigir', 'redoma', 'redor', 'refem', 'refere', 'refil', 'refino', 'refrao', 'refugo', 'regaco', 'regalo', 'regar', 'regata', 'regato', 'reger', 'regiao', 'regime', 'regio', 'rego', 'regra', 'regrar', 'regras', 'regua', 'rei', 'reich', 'reinar', 'reino', 'reis', 'reitor', 'relar', 'relato', 'relaxo', 'rele', 'relegar', 'reler', 'reles', 'relevo', 'relha', 'reluzir', 'relva', 'remar', 'remate', 'remela', 'remido', 'remir', 'remo', 'remocao', 'remoer', 'remora', 'remoto', 'rena', 'renal', 'renda', 'render', 'renio', 'renome', 'renque', 'rente', 'reparo', 'repasse', 'replay', 'repleto', 'repor', 'reptil', 'repuxo', 'res', 'resgate', 'resina', 'resma', 'reso', 'restar', 'restia', 'resto', 'restos', 'resumo', 'reta', 'retal', 'reter', 'retido', 'retina', 'retiro', 'reto', 'retrair', 'retro', 'retros', 'reu', 'reuniao', 'reunir', 'rever', 'reves', 'revide', 'revoar', 'reza', 'rezado', 'rezar', 'rezas', 'riacho', 'ribeiro', 'ricaco', 'ricas', 'ricino', 'rico', 'ricota', 'rifa', 'rifar', 'rifle', 'rigel', 'rigido', 'rigor', 'rijo', 'rim', 'rima', 'rimado', 'rimar', 'rimas', 'rimel', 'rincar', 'rincho', 'ringue', 'rinite', 'rinque', 'rins', 'rio', 'rios', 'rir', 'risada', 'risca', 'riscar', 'risco', 'riscos', 'riso', 'rispido', 'ritmar', 'ritmo', 'rito', 'ritual', 'rival', 'rixa', 'robalo', 'robe', 'robo', 'roca', 'rocar', 'rocha', 'rocim', 'rock', 'rococo', 'roda', 'rodada', 'rodado', 'rodape', 'rodar', 'rodas', 'rodear', 'rodeio', 'rodela', 'rodo', 'roedor', 'roer', 'rogado', 'rogar', 'rogo', 'rojao', 'rol', 'rola', 'rolar', 'roleta', 'rolha', 'rolico', 'rolima', 'rolo', 'rom', 'roma', 'roman', 'romana', 'romano', 'rombo', 'romeno', 'romper', 'roncar', 'ronco', 'ronda', 'rondar', 'ronrom', 'roque', 'rosa', 'rosado', 'rosas', 'rosca', 'roseo', 'rosnado', 'rosnar', 'rosto', 'rota', 'rotina', 'rotor', 'rotula', 'rotulo', 'roubar', 'roubo', 'rouco', 'round', 'roupa', 'roupao', 'roupas', 'roxo', 'royal', 'rst', 'rua', 'ruas', 'rubi', 'rubidio', 'rublo', 'rubor', 'rubro', 'ruco', 'rucula', 'rude', 'rudeza', 'rueiro', 'ruela', 'rufar', 'rufiao', 'rufo', 'ruga', 'rugbi', 'ruge', 'rugido', 'rugir', 'rugoso', 'ruido', 'ruim', 'ruina', 'ruinas', 'ruins', 'ruir', 'ruivo', 'rule', 'rum', 'rumar', 'rumba', 'rumo', 'rumor', 'runa', 'runico', 'rupia', 'rural', 'rusga', 'rush', 'russia', 'russo', 'rutilar', 'sabado', 'sabao', 'saber', 'sabia', 'sabido', 'sabio', 'sabor', 'sabre', 'sabugo', 'sabujo', 'saca', 'sacal', 'sacana', 'sacar', 'sache', 'saci', 'saciar', 'saco', 'sacola', 'sacro', 'sadico', 'sadio', 'safa', 'safado', 'safar', 'safari', 'safena', 'safira', 'safra', 'saga', 'sagaz', 'sagrar', 'sagu', 'saguao', 'sagui', 'saia', 'saibro', 'saida', 'saido', 'saiote', 'sair', 'sais', 'sal', 'sala', 'salada', 'salame', 'salao', 'saldar', 'saldo', 'saleta', 'salgar', 'salina', 'salino', 'saliva', 'salmao', 'salmo', 'salsa', 'salsao', 'saltar', 'salto', 'saltos', 'salva', 'salvar', 'salve', 'salvo', 'samba', 'sambar', 'sanar', 'sancao', 'sanear', 'sangue', 'sanha', 'sansei', 'santa', 'santo', 'sao', 'sapato', 'sape', 'sapear', 'sapeca', 'sapo', 'saque', 'sarado', 'sarar', 'sarara', 'sarau', 'sarava', 'sarda', 'sardo', 'sari', 'sarna', 'sarrafo', 'sarro', 'sata', 'satira', 'satiro', 'saudar', 'saude', 'sauna', 'saurio', 'sauva', 'savana', 'sax', 'saxao', 'sazonal', 'screen', 'script', 'seara', 'sebe', 'sebo', 'seca', 'secante', 'secao', 'secar', 'seco', 'secos', 'seculo', 'secura', 'seda', 'sedan', 'sedar', 'sede', 'sedoso', 'seguem', 'seguir', 'seguro', 'seio', 'seis', 'seita', 'seiva', 'seixo', 'seja', 'sela', 'selado', 'selar', 'seleta', 'seleto', 'selim', 'selo', 'selva', 'selvas', 'sem', 'sema', 'semana', 'semear', 'semen', 'seminu', 'semita', 'semola', 'sempre', 'sena', 'senado', 'senao', 'senda', 'sendo', 'senha', 'senhor', 'senhora', 'senil', 'senior', 'seno', 'senso', 'sensor', 'sentar', 'sentir', 'sepala', 'sepia', 'septo', 'sequaz', 'sequer', 'ser', 'serao', 'sereia', 'serem', 'sereno', 'serial', 'seriam', 'serie', 'serio', 'sermao', 'serra', 'serrar', 'serrote', 'sertao', 'serva', 'serve', 'servil', 'servio', 'servir', 'servo', 'sesamo', 'sessao', 'sesta', 'set', 'seta', 'sete', 'setima', 'setimo', 'setor', 'seu', 'seus', 'severo', 'sexo', 'sexta', 'sexto', 'sexual', 'sexy', 'shalom', 'sheik', 'shevat', 'short', 'show', 'siames', 'sicrano', 'sida', 'sidra', 'sifao', 'sigilo', 'sigla', 'siglas', 'sigma', 'signo', 'signos', 'silaba', 'silex', 'silfo', 'silica', 'silo', 'silvo', 'sim', 'simio', 'sina', 'sinais', 'sinal', 'sincero', 'sineta', 'sinete', 'sinha', 'sinho', 'sino', 'sinodo', 'sinos', 'sinteco', 'sinuca', 'sir', 'sirene', 'siri', 'sirio', 'sisal', 'sismo', 'siso', 'sisudo', 'sitcom', 'sitema', 'sitiado', 'sitiar', 'sitio', 'situar', 'sivan', 'slide', 'slogan', 'soado', 'soalho', 'soante', 'soar', 'sob', 'sobra', 'sobrar', 'sobras', 'sobre', 'sobrio', 'socar', 'social', 'socio', 'soco', 'soda', 'sodio', 'sofa', 'sofito', 'sofrer', 'sogra', 'sogro', 'soja', 'sol', 'sola', 'solado', 'solar', 'solda', 'soldar', 'soldo', 'solene', 'solido', 'solo', 'soltar', 'soluco', 'solver', 'som', 'soma', 'somali', 'somar', 'sombra', 'sonante', 'sonar', 'sonata', 'sonda', 'sondar', 'soneca', 'soneto', 'sonhar', 'sonho', 'sonico', 'sono', 'sonora', 'sonoro', 'sons', 'sonso', 'sopa', 'sopapo', 'sope', 'soprar', 'sopro', 'soro', 'soror', 'sorrir', 'sorte', 'sorver', 'sos', 's.o.s.', 'sosia', 'soslaio', 'sotao', 'sou', 'sova', 'sovaco', 'sovado', 'sovar', 'sovina', 'spa', 'spaniel', 'spin', 'spot', 'spray', 'spread', 'sprint', 'staff', 'stand', 'star', 'status', 'stf', 'stress', 'stu', 'sua', 'suadar', 'suado', 'suaili', 'suar', 'suas', 'suave', 'sub', 'subida', 'subir', 'subita', 'subito', 'sucata', 'succao', 'sucia', 'sucio', 'suco', 'sucre', 'sucubo', 'sucuri', 'sudam', 'sudene', 'sudito', 'sueco', 'sueter', 'suey', 'sufixar', 'sufixo', 'sufle', 'sufoco', 'sugar', 'suicas', 'suico', 'suino', 'suite', 'sujar', 'sujo', 'sul', 'sulcar', 'sulco', 'sulino', 'sultana', 'sultao', 'sum', 'suma', 'sumico', 'sumido', 'sumir', 'sumo', 'sumula', 'sunab', 'sundae', 'sunga', 'sunita', 'suor', 'supino', 'supor', 'suprir', 'sura', 'surata', 'surdez', 'surdo', 'surfar', 'surfe', 'surgir', 'surra', 'surrar', 'sursis', 'surtir', 'surto', 'suruba', 'sushi', 'sustar', 'suster', 'susto', 'sutia', 'sutil', 'sutra', 'sutura', 'swing', 'taba', 'tabaco', 'tabefe', 'tabela', 'tabu', 'tabua', 'tabuada', 'taca', 'tacada', 'tacape', 'tacar', 'tachar', 'tacho', 'tacito', 'taco', 'tafeta', 'tai', 'taiga', 'tainha', 'tal', 'tala', 'talamo', 'talao', 'talco', 'talha', 'talhar', 'talher', 'talho', 'taliao', 'talio', 'talo', 'talvez', 'tamara', 'tambem', 'tambor', 'tamil', 'tamoio', 'tampa', 'tampao', 'tampar', 'tanga', 'tango', 'tanque', 'tanta', 'tantalo', 'tanto', 'tantra', 'tao', 'tao-so', 'tapa', 'tapado', 'tapajo', 'tapar', 'tapear', 'tapera', 'tapete', 'tapir', 'tapume', 'tara', 'tarado', 'tarar', 'tardar', 'tarde', 'tardio', 'tarefa', 'tarefas', 'tarifa', 'taro', 'tarugo', 'tascar', 'tatame', 'tatear', 'tatica', 'tato', 'tatu', 'tatuar', 'taverna', 'tavola', 'taxa', 'taxado', 'taxar', 'taxi', 'tcha', 'tchau', 'tcheco', 'tear', 'teaser', 'teatro', 'tecela', 'tecer', 'tecido', 'tecla', 'teclar', 'teclas', 'tecnica', 'tedio', 'teflon', 'teia', 'teima', 'teimar', 'teipe', 'teismo', 'teista', 'teixo', 'tela', 'telao', 'telex', 'telha', 'telhado', 'telugu', 'tem', 'tema', 'temas', 'temer', 'temido', 'temor', 'tempao', 'templo', 'tempo', 'tenaz', 'tenda', 'tendao', 'tender', 'tenho', 'tenia', 'tenis', 'tenor', 'tenro', 'tensao', 'tenso', 'tentar', 'tentei', 'tento', 'tenue', 'teor', 'teoria', 'tepido', 'ter', 'terbio', 'terca', 'terco', 'tercol', 'tergal', 'termal', 'termas', 'termo', 'termos', 'terno', 'terra', 'terras', 'terreo', 'terror', 'tesao', 'tese', 'tesla', 'teso', 'testa', 'testar', 'teste', 'teta', 'tetano', 'teto', 'tetra', 'teu', 'teutao', 'teuto', 'teve', 'texano', 'textil', 'texto', 'texugo', 'tez', 'tia', 'tiara', 'tibia', 'ticao', 'ticar', 'tietar', 'tiete', 'tifo', 'tigela', 'tigre', 'tigres', 'tijolo', 'til', 'tilia', 'timaco', 'timao', 'timbira', 'timbre', 'time', 'timer', 'times', 'timido', 'timing', 'tina', 'tiner', 'tingir', 'tinha', 'tinido', 'tinir', 'tino', 'tinta', 'tintim', 'tinto', 'tio', 'tipao', 'tipico', 'tipo', 'tipoia', 'tipos', 'tique', 'tira', 'tirada', 'tirado', 'tirano', 'tirar', 'tiro', 'tiros', 'tishri', 'tisica', 'tisico', 'tita', 'titere', 'titia', 'titica', 'tititi', 'titulo', 'tive', 'toada', 'toalha', 'toante', 'toar', 'toboga', 'toca', 'tocaia', 'tocar', 'tocata', 'tocha', 'toco', 'toda', 'todas', 'todo', 'todos', 'tofe', 'tofu', 'toga', 'toldo', 'tolher', 'tolice', 'tolo', 'tom', 'toma', 'tomada', 'tomar', 'tomara', 'tomate', 'tombar', 'tombo', 'tomo', 'tonal', 'tonel', 'toner', 'tonica', 'tonico', 'tonta', 'tonto', 'topada', 'topar', 'topete', 'topico', 'topo', 'toque', 'tora', 'toranja', 'torax', 'torcao', 'torcer', 'torio', 'tornado', 'tornar', 'tornear', 'torno', 'toro', 'torpe', 'torpor', 'torque', 'torrao', 'torrar', 'torre', 'torso', 'torta', 'torto', 'tosa', 'tosado', 'tosar', 'tosco', 'tosse', 'tossir', 'tostao', 'tostar', 'total', 'totem', 'toto', 'touca', 'touro', 'toxico', 'toxina', 'trabuco', 'traca', 'tracao', 'tracar', 'traco', 'tracos', 'tragar', 'trago', 'traido', 'trair', 'traira', 'trajar', 'traje', 'trajes', 'tralha', 'trama', 'tramar', 'trampo', 'tranca', 'tranco', 'transa', 'transe', 'trapo', 'tras', 'traste', 'tratam', 'tratar', 'trato', 'trator', 'trauma', 'trava', 'travar', 'trave', 'traves', 'trazer', 'tre', 'trecho', 'treco', 'tregua', 'treino', 'trela', 'trem', 'trema', 'tremer', 'tremor', 'trena', 'treno', 'trepar', 'tres', 'treta', 'treva', 'trevas', 'trevo', 'treze', 'trf', 'tri', 'triade', 'triar', 'tribal', 'tribo', 'tribos', 'trico', 'trienal', 'trigo', 'trilha', 'trilho', 'trinar', 'trinca', 'trinco', 'trinta', 'trintao', 'trio', 'tripa', 'tripas', 'tripe', 'triplo', 'triste', 'tritao', 'troar', 'troca', 'trocar', 'troco', 'trofeu', 'troia', 'troica', 'tromba', 'trompa', 'tronco', 'trono', 'tropa', 'tropel', 'trotar', 'trote', 'trouxa', 'trova', 'trovao', 'trucar', 'truco', 'trufa', 'trunfo', 'trupe', 'truque', 'truta', 'tuba', 'tubo', 'tubos', 'tucano', 'tudo', 'tufao', 'tufo', 'tuiste', 'tule', 'tulio', 'tulipa', 'tumba', 'tumor', 'tumulo', 'tunda', 'tundra', 'tunel', 'tunica', 'tupa', 'tupi', 'turba', 'turco', 'turfe', 'turma', 'turne', 'turno', 'turrao', 'turvar', 'turvo', 'tussa', 'tutano', 'tutela', 'tutor', 'tutsi', 'tutu', 'tuv', 'uai', 'uau', 'ubere', 'ucp', 'ufa', 'ufanar', 'ufania', 'ufo', 'ugrico', 'uisque', 'uiste', 'uivar', 'uivo', 'ulcera', 'ulema', 'ultima', 'ultimo', 'ulular', 'uma', 'umbanda', 'umbigo', 'ume', 'umero', 'umido', 'umlaut', 'uncao', 'uncial', 'unesco', 'ungido', 'ungir', 'unha', 'unhada', 'unhar', 'uniao', 'unico', 'unido', 'unidos', 'unir', 'uno', 'uns', 'untar', 'upa', 'upload', 'uranio', 'urano', 'urbana', 'urbano', 'urdir', 'ureia', 'ureter', 'uretra', 'urico', 'urina', 'urinar', 'urinol', 'urna', 'urrar', 'urro', 'ursa', 'urso', 'urtiga', 'urubu', 'uruca', 'urupe', 'usa', 'usado', 'usados', 'usar', 'usavel', 'usei', 'usina', 'usinar', 'uso', 'usp', 'usual', 'usura', 'utero', 'uti', 'util', 'utopia', 'uva', 'uvula', 'uvular', 'uvw', 'vaca', 'vacas', 'vacina', 'vacuo', 'vadia', 'vadiar', 'vadio', 'vaga', 'vagao', 'vagar', 'vagem', 'vagina', 'vago', 'vai', 'vaia', 'vaiar', 'vaivem', 'vala', 'valao', 'valdir', 'vale', 'valer', 'valeta', 'valete', 'valia', 'valido', 'valise', 'valor', 'valsa', 'valsar', 'vampe', 'vao', 'vapor', 'vara', 'varal', 'varao', 'varar', 'vareio', 'varejo', 'vareta', 'variar', 'varias', 'vario', 'variz', 'varrer', 'varzea', 'vaso', 'vasto', 'vatapa', 'vaza', 'vazado', 'vazao', 'vazar', 'vazia', 'vazio', 'veado', 'veda', 'vedado', 'vedar', 'vedete', 'vedico', 'vega', 'veia', 'veio', 'veja', 'vela', 'velado', 'velar', 'velcro', 'velha', 'velho', 'velhos', 'veloz', 'veludo', 'vem', 'venal', 'vencer', 'venda', 'vendar', 'vendas', 'vender', 'veneno', 'veneta', 'venia', 'venoso', 'venta', 'ventar', 'ventas', 'vento', 'ventral', 'ventre', 'venus', 'ver', 'verao', 'verba', 'verbal', 'verbo', 'verbos', 'verde', 'verdor', 'vereda', 'vergao', 'vergar', 'verme', 'vermute', 'verniz', 'versao', 'ver-se', 'verso', 'versus', 'verter', 'verve', 'vesgo', 'vespa', 'vesper', 'vestal', 'veste', 'vestir', 'vetar', 'veto', 'vetor', 'veu', 'vexado', 'vexame', 'vexar', 'vez', 'vezes', 'via', 'viacao', 'viaduto', 'viagem', 'viajar', 'viario', 'viavel', 'vibora', 'vibrar', 'vicejo', 'viciar', 'vicio', 'vicios', 'vico', 'vicoso', 'vida', 'vidao', 'video', 'vidrar', 'vidro', 'vidros', 'viela', 'vies', 'viga', 'vigia', 'vigiar', 'vigor', 'vil', 'vila', 'vilao', 'vime', 'vinco', 'vinda', 'vingar', 'vinha', 'vinho', 'vinil', 'vino', 'vinte', 'vintem', 'viola', 'violado', 'violao', 'violar', 'vip', 'vir', 'vira', 'virada', 'virado', 'viral', 'virar', 'virgem', 'viril', 'virose', 'virus', 'visado', 'visao', 'visar', 'visita', 'visor', 'vista', 'visto', 'visual', 'vital', 'vitela', 'vitima', 'vitral', 'vitreo', 'vitro', 'viuva', 'viuvez', 'viuvo', 'viva', 'vivaz', 'vive', 'viver', 'viveu', 'vivido', 'vivo', 'vizir', 'voador', 'voar', 'vocal', 'voce', 'vodca', 'vodu', 'voga', 'vogal', 'vogar', 'voile', 'volante', 'volei', 'voleio', 'volt', 'volta', 'voltar', 'volume', 'volver', 'vomer', 'vomito', 'voo', 'voraz', 'vos', 'vossa', 'vosso', 'votado', 'votar', 'voto', 'vou', 'vovo', 'vox', 'voyeur', 'voz', 'vozes', 'vulcao', 'vulgar', 'vulgo', 'vulto', 'vulva', 'vupt', 'vwx', 'wxy', 'xador', 'xadrez', 'xale', 'xama', 'xampu', 'xango', 'xarope', 'xaual', 'xaxado', 'xaxim', 'xepa', 'xeque', 'xereta', 'xerez', 'xerife', 'xerocar', 'xerox', 'xicara', 'xiita', 'xingar', 'xingo', 'xinto', 'xinxim', 'xis', 'xisto', 'xixi', 'xodo', 'xogum', 'xua', 'xucro', 'xyz', 'zaga', 'zangao', 'zanzar', 'zarpar', 'zas', 'zebra', 'zebu', 'zefir', 'zefiro', 'zelar', 'zelo', 'zeloso', 'zen', 'zenite', 'zerado', 'zerar', 'zero', 'zeta', 'zeugma', 'zigoma', 'zigoto', 'zinco', 'ziper', 'zippado', 'zoada', 'zoar', 'zoeira', 'zombar', 'zona', 'zonado', 'zonal', 'zonear', 'zonzo', 'zoo', 'zoom', 'zorra', 'zulu', 'zum', 'zumbi', 'zumbir', 'zunido', 'zunir', 'zunzum', 'zureta', 'zurrar']);
var author$project$Diceware$alphabet = {
	size: elm$core$List$length(author$project$Diceware$wordlist),
	symbols: author$project$Diceware$indexedDict(author$project$Diceware$wordlist)
};
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var author$project$Password$traverse = A2(
	elm$core$List$foldr,
	elm$core$Maybe$map2(elm$core$List$cons),
	elm$core$Maybe$Just(_List_Nil));
var elm$core$Basics$modBy = _Basics_modBy;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var author$project$Password$from = F2(
	function (_n0, seed) {
		var size = _n0.size;
		var symbols = _n0.symbols;
		return A2(
			elm$core$Maybe$map,
			elm$core$String$join(' '),
			author$project$Password$traverse(
				A2(
					elm$core$List$map,
					function (key) {
						return A2(elm$core$Dict$get, key, symbols);
					},
					A2(
						elm$core$List$map,
						elm$core$Basics$modBy(size),
						seed))));
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Encode$int = _Json_wrap;
var author$project$Password$generateRandomSeed = _Platform_outgoingPort('generateRandomSeed', elm$json$Json$Encode$int);
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$update = F2(
	function (message, model) {
		if (message.$ === 'NewPassword') {
			return _Utils_Tuple2(
				model,
				author$project$Password$generateRandomSeed(8));
		} else {
			var seed = message.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						password: A2(author$project$Password$from, model.alphabet, seed)
					}),
				elm$core$Platform$Cmd$none);
		}
	});
var author$project$Models$NewPassword = {$: 'NewPassword'};
var author$project$Main$init = function (_n0) {
	return A2(
		author$project$Main$update,
		author$project$Models$NewPassword,
		{alphabet: author$project$Diceware$alphabet, password: elm$core$Maybe$Nothing});
};
var author$project$Models$NewSeed = function (a) {
	return {$: 'NewSeed', a: a};
};
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Password$newSeed = _Platform_incomingPort(
	'newSeed',
	elm$json$Json$Decode$list(elm$json$Json$Decode$int));
var author$project$Main$subscriptions = function (_n0) {
	return author$project$Password$newSeed(author$project$Models$NewSeed);
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$header = _VirtualDom_node('header');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Views$pageHeader = A2(
	elm$html$Html$header,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			elm$html$Html$h1,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Sua senha:')
				]))
		]));
var elm$html$Html$p = _VirtualDom_node('p');
var author$project$Views$diceware = function (pwd) {
	if (pwd.$ === 'Just') {
		var words = pwd.a;
		return A2(
			elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text(words)
				]));
	} else {
		return A2(elm$html$Html$p, _List_Nil, _List_Nil);
	}
};
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$main_ = _VirtualDom_node('main');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Views$passwordGenerator = function (_n0) {
	var password = _n0.password;
	return A2(
		elm$html$Html$main_,
		_List_Nil,
		_List_fromArray(
			[
				author$project$Views$diceware(password),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Events$onClick(author$project$Models$NewPassword)
					]),
				_List_fromArray(
					[
						elm$html$Html$text('↻')
					]))
			]));
};
var elm$html$Html$section = _VirtualDom_node('section');
var author$project$Views$page = function (model) {
	return {
		body: _List_fromArray(
			[
				A2(
				elm$html$Html$section,
				_List_Nil,
				_List_fromArray(
					[
						author$project$Views$pageHeader,
						author$project$Views$passwordGenerator(model)
					]))
			]),
		title: 'Senha Simples'
	};
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$document = _Browser_document;
var author$project$Main$main = elm$browser$Browser$document(
	{init: author$project$Main$init, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Views$page});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));