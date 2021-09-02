// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2021.9.2.16.51
// @description  Hodgepodge of dev utils
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @author       Jack McCown
// @match        *://*/*
// @namespace    jackmscripts
// @run-at       document-end
// ==/UserScript==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@typed/compose/lib.es2015/compose.js":
/*!***********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/compose.js ***!
  \***********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
function compose() {
    switch (arguments.length) {
        case 1: return _compose1(arguments[0]);
        case 2: return _compose2(arguments[0], arguments[1]);
        case 3: return _compose3(arguments[0], arguments[1], arguments[2]);
        case 4: return _compose4(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5: return _compose5(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    ;
}
function _compose1(f) {
    return function compose1Fn(a) {
        return f(a);
    };
}
function _compose2(g, f) {
    return function compose2Fn(a) {
        return g(f(a));
    };
}
function _compose3(h, g, f) {
    return function compose3Fn(a) {
        return h(g(f(a)));
    };
}
function _compose4(i, h, g, f) {
    return function compose3Fn(a) {
        return i(h(g(f(a))));
    };
}
function _compose5(j, i, h, g, f) {
    return function compose5Fn(a) {
        return j(i(h(g(f(a)))));
    };
}
//# sourceMappingURL=compose.js.map

/***/ }),

/***/ "./node_modules/@typed/compose/lib.es2015/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@typed/compose/lib.es2015/index.js ***!
  \*********************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/@typed/compose/lib.es2015/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__["compose"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/deep-entries/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/deep-entries/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: deepEntries, deepEntriesIterator, delimitEntry, delimitEntryBy, rotateEntry, rotateEntryBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEntries", function() { return deepEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepEntriesIterator", function() { return deepEntriesIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimitEntry", function() { return delimitEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimitEntryBy", function() { return delimitEntryBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateEntry", function() { return rotateEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateEntryBy", function() { return rotateEntryBy; });
const identity = x => x;

const getInterface = x => {
	const str = Object.prototype.toString.call(x);
	return str.substring(8, str.length - 1)
};

const isObjectLike = x => {
	const tag = getInterface(x);
	switch (tag) {
		case 'String':
		case 'Number':
		case 'Boolean':
		case 'RegExp':
		case 'Date':
			return false

		default:
			if (x === null) {
				return false
			}

			if (tag.startsWith('HTML')) {
				return false
			}

			return typeof x === 'object'
	}
};

function* entriesIterator(input) {
	switch (getInterface(input)) {
		case 'Array':
		case 'Map':
		case 'URLSearchParams':
			yield* input.entries();
			break

		case 'Set':
		case 'NodeList':
		case 'Int8Array':
		case 'Uint8Array':
		case 'Uint8ClampedArray':
		case 'Int16Array':
		case 'Uint16Array':
		case 'Int32Array':
		case 'Uint32Array':
		case 'Float32Array':
		case 'Float64Array':
		case 'BigInt64Array':
		case 'BigUint64Array':
			let i = 0;
			for (let value of input) yield [i++, value];
			break

		case 'Object':
		default:
			if (isObjectLike(input))
				for (let key in input)
					if (Object.prototype.hasOwnProperty.call(input, key))
						yield [key, input[key]];
			break
	}
}

function* deepEntriesIterator_(input, mapFn, parentCircularSet) {
	const map = typeof mapFn === 'function' ? mapFn : identity;
	for (let [key, value] of entriesIterator(input)) {
		if (!isObjectLike(value)) {
			const entry = map([key, value]);
			if (entry !== undefined) yield entry;
		} else {
			const circularSet = parentCircularSet || new WeakSet();
			circularSet.add(input);

			if (!circularSet.has(value)) {
				for (let entries of deepEntriesIterator_(
					value,
					undefined,
					circularSet
				)) {
					const entry = map([key, ...entries]);
					if (entry !== undefined) yield entry;
				}
			}
		}
	}
}

function* deepEntriesIterator(input, mapFn) {
	yield* deepEntriesIterator_(input, mapFn);
}

const deepEntries = (input, mapFn) =>
	Array.from(deepEntriesIterator(input, mapFn));

const rotateEntryBy = n => entry => {
	if (entry === undefined) return
	const mod = (-1 * (Number(n) || 0)) % entry.length;
	const keys = entry.slice(0, mod);
	const value = entry.slice(mod);
	return [...value, ...keys]
};

const rotateEntry = rotateEntryBy(1);

const delimitEntryBy = delimiter => entry => {
	if (entry === undefined) return
	const [value, ...keys] = rotateEntry(entry);
	return [keys.join(delimiter), value]
};

const delimitEntry = delimitEntryBy('.');




/***/ }),

/***/ "./node_modules/lines-unlines/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/lines-unlines/dist/index.mjs ***!
  \***************************************************/
/*! exports provided: lines, unlines */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lines", function() { return lines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlines", function() { return unlines; });
function lines(s) {
    return s === "" ? [] : s.replace(/\n$/, "").split("\n");
}
function unlines(ls) {
    return ls.map(line => line + "\n").join("");
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/array.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/array.mjs ***!
  \****************************************************/
/*! exports provided: isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfBooleans", function() { return isArrayOfBooleans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNumbers", function() { return isArrayOfNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfStrings", function() { return isArrayOfStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfSymbols", function() { return isArrayOfSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNulls", function() { return isArrayOfNulls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfUndefineds", function() { return isArrayOfUndefineds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfPrimitives", function() { return isArrayOfPrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfObjects", function() { return isArrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOf", function() { return isArrayOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayOfLike", function() { return isArrayOfLike; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");

function isArrayOfBooleans(x) {
    return isArrayOfLike(true)(x);
}
function isArrayOfNumbers(x) {
    return isArrayOfLike(1)(x);
}
function isArrayOfStrings(x) {
    return isArrayOfLike("")(x);
}
function isArrayOfSymbols(x) {
    return isArrayOfLike(Symbol())(x);
}
function isArrayOfNulls(x) {
    return isArrayOfLike(null)(x);
}
function isArrayOfUndefineds(x) {
    return isArrayOfLike(undefined)(x);
}
function isArrayOfPrimitives(x) {
    return Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]);
}
function isArrayOfObjects(x) {
    return Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(_is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]);
}
function isArrayOf(type) {
    return (xs) => Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(xs) && xs.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(type));
}
function isArrayOfLike(reference) {
    return (x) => Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(Array)(x) && x.every(Object(_is__WEBPACK_IMPORTED_MODULE_0__["isLike"])(reference));
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/index.mjs ***!
  \****************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike, isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike, onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLike", function() { return _is__WEBPACK_IMPORTED_MODULE_0__["isLike"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/ts-type-guards/dist/array.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfBooleans", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfBooleans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNumbers", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfStrings", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfSymbols", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfSymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfNulls", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfNulls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfUndefineds", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfUndefineds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfPrimitives", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfPrimitives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfObjects", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOf", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayOfLike", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["isArrayOfLike"]; });

/* harmony import */ var _only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./only */ "./node_modules/ts-type-guards/dist/only.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyBooleans", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyBooleans"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyNumbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyStrings", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyStrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlySymbols", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyNulls", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyNulls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyUndefineds", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyUndefineds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyPrimitives", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyPrimitives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyObjects", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "only", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["only"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onlyLike", function() { return _only__WEBPACK_IMPORTED_MODULE_2__["onlyLike"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/is.mjs":
/*!*************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/is.mjs ***!
  \*************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonPrimitive", function() { return isNonPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLike", function() { return isLike; });
const TYPE_GUARDS_PRIMITIVE = [isBoolean, isNumber, isString, isSymbol, isNull, isUndefined];
function isBoolean(x) {
    return typeof x === "boolean";
}
function isNumber(x) {
    return typeof x === "number";
}
function isString(x) {
    return typeof x === "string";
}
function isSymbol(x) {
    return typeof x === "symbol";
}
function isNull(x) {
    return x === null;
}
function isUndefined(x) {
    return x === undefined;
}
function isPrimitive(x) {
    return TYPE_GUARDS_PRIMITIVE.some(f => f(x));
}
function isNonPrimitive(x) {
    return !isPrimitive(x);
}
function namedFunction(name, fun) {
    return Object.defineProperty(fun, "name", { value: name, writable: false });
}
function namedTypeGuard(creator, type, typeGuard) {
    return namedFunction(`${creator.name}(${type.name})`, typeGuard);
}
function is(type) {
    if (isPrimitive(type)) {
        return (_) => false;
    }
    return namedTypeGuard(is, type, (x) => x instanceof type);
}
function isLike(reference) {
    for (const f of TYPE_GUARDS_PRIMITIVE) {
        if (f(reference)) {
            return (x) => f(x);
        }
    }
    if (is(Array)(reference)) {
        const referenceAsArray = reference;
        return (x) => is(Array)(x) && (referenceAsArray.length > 0 ? x.every(isLike(referenceAsArray[0])) : true);
    }
    if (reference.constructor === Object) {
        return (x) => (![undefined, null].includes(x)
            &&
                Object.keys(reference).every(k => isLike(reference[k])(x[k])));
    }
    if (reference.constructor instanceof Function) {
        return is(reference.constructor);
    }
    throw new TypeError(isLike.name + ` cannot use this object as reference because it has no constructor: ` + JSON.stringify(reference));
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/ts-type-guards/dist/only.mjs":
/*!***************************************************!*\
  !*** ./node_modules/ts-type-guards/dist/only.mjs ***!
  \***************************************************/
/*! exports provided: onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyBooleans", function() { return onlyBooleans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyStrings", function() { return onlyStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlySymbols", function() { return onlySymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNulls", function() { return onlyNulls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUndefineds", function() { return onlyUndefineds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyPrimitives", function() { return onlyPrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyObjects", function() { return onlyObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "only", function() { return only; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyLike", function() { return onlyLike; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/ts-type-guards/dist/is.mjs");

function onlyBooleans(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]);
}
function onlyNumbers(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNumber"]);
}
function onlyStrings(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isString"]);
}
function onlySymbols(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isSymbol"]);
}
function onlyNulls(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNull"]);
}
function onlyUndefineds(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
}
function onlyPrimitives(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]);
}
function onlyObjects(xs) {
    return xs.filter(_is__WEBPACK_IMPORTED_MODULE_0__["isNonPrimitive"]);
}
function only(type) {
    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__["is"])(type));
}
function onlyLike(reference) {
    return (xs) => xs.filter(Object(_is__WEBPACK_IMPORTED_MODULE_0__["isLike"])(reference));
}
//# sourceMappingURL=only.js.map

/***/ }),

/***/ "./node_modules/userscripter/lib/environment.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/environment.mjs ***!
  \*******************************************************/
/*! exports provided: ALWAYS, NEVER, DOMCONTENTLOADED, LOAD */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS", function() { return ALWAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMCONTENTLOADED", function() { return DOMCONTENTLOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
const ALWAYS = () => true;
const NEVER = () => false;
const DOMCONTENTLOADED = (state) => state !== "loading";
const LOAD = (state) => state === "complete";


/***/ }),

/***/ "./node_modules/userscripter/lib/errors.mjs":
/*!**************************************************!*\
  !*** ./node_modules/userscripter/lib/errors.mjs ***!
  \**************************************************/
/*! exports provided: explanation, failureDescriber */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explanation", function() { return explanation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failureDescriber", function() { return failureDescriber; });
/* harmony import */ var lines_unlines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lines-unlines */ "./node_modules/lines-unlines/dist/index.mjs");

const INDENTATION = "  ";
function formatDependency(d) {
    return INDENTATION + d.key + ": " + d.selector;
}
function explanation(failure) {
    switch (failure.result.reason) {
        case 0:
            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
                `These dependencies were not found:`,
                ``,
                Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])(failure.result.dependencies.map(formatDependency)),
            ]);
        case 1:
            return Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
                `The operation failed with this error:`,
                ``,
                failure.result.message,
            ]);
    }
}
function failureDescriber(context) {
    return failure => Object(lines_unlines__WEBPACK_IMPORTED_MODULE_0__["unlines"])([
        `Could not ${failure.operation.description} on this page:`,
        ``,
        INDENTATION + location.href,
        ``,
        explanation(failure).trim(),
        ``,
        `This problem might be caused by ${context.siteName} changing its content/structure, in which case ${context.extensionName} needs to be updated accordingly. Otherwise, it's probably a bug in ${context.extensionName}.`,
        ``,
        `If you file a bug report, please include this message.`,
    ]);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/userscripter/lib/index.mjs ***!
  \*************************************************/
/*! exports provided: environment, errors, log, operations, preferences, stylesheets, userscripter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/userscripter/lib/errors.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _log__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "operations", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preferences */ "./node_modules/userscripter/lib/preferences.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "preferences", function() { return _preferences__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "stylesheets", function() { return _stylesheets__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _userscripter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userscripter */ "./node_modules/userscripter/lib/userscripter.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userscripter", function() { return _userscripter__WEBPACK_IMPORTED_MODULE_6__; });










/***/ }),

/***/ "./node_modules/userscripter/lib/log.mjs":
/*!***********************************************!*\
  !*** ./node_modules/userscripter/lib/log.mjs ***!
  \***********************************************/
/*! exports provided: setPrefix, setLogger, log, info, warning, error */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrefix", function() { return setPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogger", function() { return setLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
let prefix = "";
let logger = console;
function setPrefix(p) {
    prefix = p;
}
function setLogger(l) {
    logger = l;
}
function log(str) {
    logger.log(prefix, str);
}
function info(str) {
    logger.info(prefix, str);
}
function warning(str) {
    logger.warn(prefix, str);
}
function error(str) {
    logger.error(prefix, str);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/operations.mjs":
/*!******************************************************!*\
  !*** ./node_modules/userscripter/lib/operations.mjs ***!
  \******************************************************/
/*! exports provided: operation, run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operation", function() { return operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var ts_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-type-guards */ "./node_modules/ts-type-guards/dist/index.mjs");

const SUCCESS = undefined;
function operation(spec) {
    return spec;
}
function run(plan) {
    function recurse(operations, failures, triesLeft) {
        const lastTry = Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(triesLeft) && triesLeft <= 0;
        const operationsToRunNow = [];
        const remaining = [];
        const readyState = document.readyState;
        for (const o of operations) {
            const shouldRunNow = o.deferUntil === undefined || o.deferUntil(readyState);
            (shouldRunNow ? operationsToRunNow : remaining).push(o);
        }
        for (const o of operationsToRunNow) {
            const result = tryToPerform(o);
            if (result !== SUCCESS) {
                switch (result.reason) {
                    case 0:
                        lastTry ? failures.push({ result, operation: o }) : remaining.push(o);
                        break;
                    case 1:
                        failures.push({ result, operation: o });
                        break;
                }
            }
        }
        if (remaining.length > 0) {
            setTimeout(() => recurse(remaining, failures, (Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(triesLeft)
                ? triesLeft - 1
                : plan.tryUntil(readyState) ? plan.extraTries : undefined)), plan.interval);
        }
        else if (failures.length > 0) {
            plan.handleFailures(failures);
        }
    }
    recurse(plan.operations.filter(o => o.condition(window)), []);
}
function tryToPerform(o) {
    const dependencies = o.dependencies === undefined ? {} : o.dependencies;
    const queryResults = Object.entries(dependencies).map(([key, selector]) => ({
        key, selector, element: document.querySelector(selector),
    }));
    const missingDependencies = queryResults.filter(x => Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isNull"])(x.element));
    if (missingDependencies.length > 0) {
        return { reason: 0, dependencies: missingDependencies };
    }
    const e = queryResults.reduce((acc, x) => Object.defineProperty(acc, x.key, { value: x.element }), {});
    return fromActionResult(o.action(e));
}
function fromActionResult(r) {
    return Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isString"])(r) ? { reason: 1, message: r } : SUCCESS;
}


/***/ }),

/***/ "./node_modules/userscripter/lib/preferences.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/preferences.mjs ***!
  \*******************************************************/
/*! exports provided: subscriptable, loggingResponseHandler, noopResponseHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptable", function() { return subscriptable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggingResponseHandler", function() { return loggingResponseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopResponseHandler", function() { return noopResponseHandler; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");

function subscriptable(handler) {
    const changeListeners = new Set();
    return {
        subscribe: (listener) => { changeListeners.add(listener); },
        unsubscribe: (listener) => { changeListeners.delete(listener); },
        handler: (summary, preferences) => {
            if (summary.action === "set") {
                changeListeners.forEach(f => f(summary.preference));
            }
            return handler(summary, preferences);
        },
    };
}
function loggingResponseHandler(summary, preferences) {
    const response = summary.response;
    switch (response.status) {
        case 0:
            return response;
        case 1:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' (${JSON.stringify(response.saved)}) was invalid. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            if (summary.action === "set") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`Could not set value ${JSON.stringify(response.value)} for preference '${summary.preference.key}' because it was invalid.`);
            }
            return response;
        case 2:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' had the wrong type. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 3:
            if (summary.action === "get") {
                _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`The saved value for preference '${summary.preference.key}' could not be parsed. Replacing it with ${JSON.stringify(response.value)}.`);
                preferences.set(summary.preference, response.value);
            }
            return response;
        case 4:
            switch (summary.action) {
                case "get":
                    _log__WEBPACK_IMPORTED_MODULE_0__["error"](`Could not read preference '${summary.preference.key}' because localStorage could not be accessed. Using value ${JSON.stringify(summary.preference.default)}.`);
                    break;
                case "set":
                    _log__WEBPACK_IMPORTED_MODULE_0__["error"](`Could not save value ${JSON.stringify(summary.response.value)} for preference '${summary.preference.key}' because localStorage could not be accessed.`);
                    break;
                default:
                    assertUnreachable(summary.action);
            }
            return response;
        default:
            return assertUnreachable(response.status);
    }
}
function noopResponseHandler(summary, _) {
    return summary.response;
}
function assertUnreachable(x) {
    throw new Error("assertUnreachable: " + x);
}


/***/ }),

/***/ "./node_modules/userscripter/lib/stylesheets.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/userscripter/lib/stylesheets.mjs ***!
  \*******************************************************/
/*! exports provided: stylesheet, insert, enable, disable */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return stylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
const MATCH_ALL = "all";
const MATCH_NONE = "not all";
function stylesheet(spec) {
    return spec;
}
function insert(stylesheets) {
    const fragment = document.createDocumentFragment();
    Object.entries(stylesheets).forEach(([_, sheet]) => {
        const style = document.createElement("style");
        if (sheet.id !== undefined)
            style.id = sheet.id;
        style.textContent = sheet.css;
        style.media = sheet.condition(window) ? MATCH_ALL : MATCH_NONE;
        fragment.appendChild(style);
    });
    document.documentElement.appendChild(fragment);
}
const setMediaQuery = (m) => (s) => {
    const element = document.getElementById(s.id);
    if (element !== null) {
        element.setAttribute("media", m);
    }
};
const enable = setMediaQuery(MATCH_ALL);
const disable = setMediaQuery(MATCH_NONE);


/***/ }),

/***/ "./node_modules/userscripter/lib/userscripter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/userscripter/lib/userscripter.mjs ***!
  \********************************************************/
/*! exports provided: run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/userscripter/lib/log.mjs");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");



function run(userscript) {
    _log__WEBPACK_IMPORTED_MODULE_0__["setPrefix"](`[${userscript.name}]`);
    const attr = attribute(userscript.id);
    if (document.documentElement.hasAttribute(attr)) {
        _log__WEBPACK_IMPORTED_MODULE_0__["warning"](`It looks as though ${userscript.name} has already run (because the attribute "${attr}" was found on <head>). Stopping.`);
    }
    else {
        document.documentElement.setAttribute(attr, "");
        userscript.initialAction();
        _stylesheets__WEBPACK_IMPORTED_MODULE_2__["insert"](userscript.stylesheets);
        _operations__WEBPACK_IMPORTED_MODULE_1__["run"](userscript.operationsPlan);
    }
}
function attribute(id) {
    return "data-" + id + "-has-run";
}


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: OPERATIONS_INTERVAL, OPERATIONS_EXTRA_TRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONS_INTERVAL", function() { return OPERATIONS_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATIONS_EXTRA_TRIES", function() { return OPERATIONS_EXTRA_TRIES; });
// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").
const OPERATIONS_INTERVAL = 200; // ms
const OPERATIONS_EXTRA_TRIES = 3;


/***/ }),

/***/ "./src/helpers/extractTableInfo.ts":
/*!*****************************************!*\
  !*** ./src/helpers/extractTableInfo.ts ***!
  \*****************************************/
/*! exports provided: extractTableAsJson, traverseGfmTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTableAsJson", function() { return extractTableAsJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseGfmTable", function() { return traverseGfmTable; });
const arr = Array.from;
const extractLinkedText = (node) => {
    const tmpNode = node.cloneNode(true);
    arr(tmpNode.querySelectorAll("a")).forEach((el) => (el.innerText = `[${el.innerText}](${el.href})`));
    return tmpNode.innerText.trim();
};
function extractTableAsJson(table) {
    // Ideally first check if table is "regular" aka has equal number of th to td/tr
    let keys = [];
    if (table.tHead !== null) {
        keys = arr(table.tHead.querySelectorAll("th")).map((el) => extractLinkedText(el));
    }
    else {
        keys = arr(table.querySelectorAll("th")).map((el) => extractLinkedText(el));
    }
    return arr(table.tBodies).flatMap((el) => arr(el.querySelectorAll("tr")).map((tableRow) => {
        const dataCells = arr(tableRow.querySelectorAll("td")).map((el) => extractLinkedText(el));
        if (dataCells.length !== keys.length) {
            console.warn("Found a row with a mismatch");
        }
        if (keys.length === 0) {
            return dataCells;
        }
        return keys.reduce((tableRow, dataKey, idx) => ({
            ...tableRow,
            [dataKey]: dataCells[idx],
        }), {});
    }));
}
function traverseGfmTable(table) {
    let keys = [];
    keys = arr(table.querySelectorAll("th")).map((el) => extractLinkedText(el));
    return arr(table.tBodies).map((el) => arr(el.querySelectorAll("tr")).map((tableRow) => {
        const dataCells = arr(tableRow.querySelectorAll("td")).map((el) => extractLinkedText(el));
        if (dataCells.length !== keys.length) {
            console.warn("Found a row with a mismatch");
        }
        if (keys.length === 0) {
            return dataCells;
        }
        return keys.reduce((tableRow, dataKey, idx) => ({
            ...tableRow,
            [dataKey]: dataCells[idx],
        }), {});
    }));
}


/***/ }),

/***/ "./src/helpers/htmlTreeSelection.ts":
/*!******************************************!*\
  !*** ./src/helpers/htmlTreeSelection.ts ***!
  \******************************************/
/*! exports provided: htmlTreeSelection, installHtmlTreeSelectionApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeSelection", function() { return htmlTreeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installHtmlTreeSelectionApi", function() { return installHtmlTreeSelectionApi; });
function htmlTreeSelection() {
    // TODO select via keyboard?
    // No need to wait for a 'DOMContentLoaded' event since the manifest
    // specifies:
    //
    //   "run_at": "document_end"
    //
    let clickable = [
        document.getElementsByTagName("a"),
        document.getElementsByTagName("button"),
        document.querySelectorAll("[role=button]"),
    ];
    const iframeOverlays = [];
    let overHandler = (e) => {
        let target = e.target;
        if (target === null) {
            return;
        }
        target.classList.add("html-tree-selection");
        if (target.classList.contains("html-tree-selection-overlay")) {
            if (target.dataset.index) {
                let iframe = iframeOverlays[parseInt(target.dataset.index, 10)].iframe;
                iframe.classList.add("html-tree-selection");
            }
            else {
                console.warn("failed to find iframe");
            }
        }
        e.stopPropagation();
    };
    let outHandler = (e) => {
        let target = e.target;
        if (target === null) {
            return;
        }
        target.classList.remove("html-tree-selection");
        e.stopPropagation();
    };
    let clickHandler = (e) => {
        disable();
        let target = e.target;
        if (target === null) {
            return;
        }
        if (target.classList.contains("html-tree-selection-overlay")) {
            if (target.dataset.index) {
                target = iframeOverlays[parseInt(target.dataset.index, 10)].iframe;
            }
            else {
                console.warn("failed to find iframe");
            }
        }
        // TODO instead of removing target, return it (or possibly many)
        target.remove();
        e.preventDefault();
        e.stopPropagation();
    };
    let enable = () => {
        // override click handlers on any clickable element
        clickable.forEach((c) => {
            for (var i = 0; i < c.length; i++) {
                // @ts-expect-error
                c[i].onclickBackup = c[i].onclick;
                c[i].addEventListener("click", clickHandler);
            }
        });
        let iframes = document.querySelectorAll("iframe");
        iframes.forEach((i) => {
            let overlay = document.createElement("div");
            let iframeClientRect = i.getBoundingClientRect();
            let offsetX = iframeClientRect.left + window.scrollX;
            let offsetY = iframeClientRect.top + window.scrollY;
            overlay.classList.add("html-tree-selection-overlay");
            overlay.style.top = `${offsetY}px`;
            overlay.style.left = `${offsetX}px`;
            overlay.style.width = `${iframeClientRect.width}px`;
            overlay.style.height = `${iframeClientRect.height}px`;
            overlay.dataset.index = `${iframeOverlays.length}`;
            iframeOverlays.push({
                iframe: i,
                overlay: overlay,
            });
            document.body.appendChild(overlay);
        });
        document.documentElement.classList.add("html-tree-selection-cursor");
        document.addEventListener("mouseover", overHandler);
        document.addEventListener("mouseout", outHandler);
        document.addEventListener("click", clickHandler);
        document.addEventListener("keydown", keyHandler, true);
    };
    let disable = () => {
        clickable.forEach((c) => {
            for (var i = 0; i < c.length; i++) {
                c[i].removeEventListener("click", clickHandler);
                // @ts-expect-error
                c[i].addEventListener("click", c[i].onclickBackup);
                // @ts-expect-error
                delete c[i].onclickBackup;
            }
        });
        iframeOverlays.forEach((o) => o.overlay.remove());
        document.documentElement.classList.remove("html-tree-selection-cursor");
        // clean any orphaned hover applied class
        let orphan = document.querySelector(".html-tree-selection");
        if (orphan !== null) {
            orphan.classList.remove("html-tree-selection");
        }
        document.removeEventListener("mouseover", overHandler);
        document.removeEventListener("mouseout", outHandler);
        document.removeEventListener("click", clickHandler);
        document.removeEventListener("keydown", keyHandler, true);
    };
    let keyHandler = (e) => {
        if (e.key === "Escape") {
            disable();
        }
    };
    let updateOverlayPositions = (_e) => {
        iframeOverlays.forEach((o) => {
            let iframe = o.iframe;
            let iframeClientRect = iframe.getBoundingClientRect();
            let overlay = o.overlay;
            let offsetX = iframeClientRect.left + window.scrollX;
            let offsetY = iframeClientRect.top + window.scrollY;
            overlay.style.top = `${offsetY}px`;
            overlay.style.left = `${offsetX}px`;
        });
    };
    window.addEventListener("scroll", updateOverlayPositions);
    window.addEventListener("resize", updateOverlayPositions);
    return {
        enable,
        disable,
        cleanup() {
            window.removeEventListener("scroll", updateOverlayPositions);
            window.removeEventListener("resize", updateOverlayPositions);
        },
    };
}
function installHtmlTreeSelectionApi() {
    // @ts-expect-error
    window.htmlTreeSelection = htmlTreeSelection;
}


/***/ }),

/***/ "./src/helpers/utils.ts":
/*!******************************!*\
  !*** ./src/helpers/utils.ts ***!
  \******************************/
/*! exports provided: addToClipboard, getSiblings, appendBtnToElements, installEsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToClipboard", function() { return addToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblings", function() { return getSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendBtnToElements", function() { return appendBtnToElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installEsModule", function() { return installEsModule; });
const addToClipboard = (content) => {
    const permissionName = "clipboard-write";
    return navigator.permissions
        .query({ name: permissionName })
        .then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
            return navigator.clipboard.writeText(content).then(() => { });
        }
        throw Error("Permission for clipboard-write was not obtained " + result.state);
    });
};
const getSiblings = (elem) => {
    const siblings = [];
    let sibling = elem.parentNode && elem.parentNode.firstElementChild;
    if (!sibling) {
        return [];
    }
    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling;
    }
    return siblings;
};
const appendBtnToElements = (elements, clickHandler, modifyBtn) => {
    return Array.from(elements).map((codeBlock) => {
        codeBlock.classList.add("jacks-dev-helpers-interact-target");
        codeBlock.innerHTML = `<span class="jacks-dev-helpers-outer-wrap" >${codeBlock.innerHTML}</span>`;
        const copyBtn = document.createElement("span");
        copyBtn.classList.add("jacks-dev-helpers-interact-widget");
        copyBtn.addEventListener("click", (event) => {
            const tmpCodeBlock = codeBlock.cloneNode(true);
            const children = tmpCodeBlock.children;
            for (let i = 0; i < children.length; i++) {
                const childComponent = children[i];
                if (childComponent.classList.contains("jacks-dev-helpers-interact-widget")) {
                    tmpCodeBlock.removeChild(childComponent);
                }
            }
            clickHandler(tmpCodeBlock, event);
        });
        modifyBtn(copyBtn);
        codeBlock.appendChild(copyBtn);
        return copyBtn;
    });
};
async function installEsModule(moduleUrl) {
    const script = document.createElement("script");
    script.setAttribute("type", "module");
    script.setAttribute("src", moduleUrl);
    const head = document.head ||
        document.getElementsByTagName("head")[0] ||
        document.documentElement;
    head.insertBefore(script, head.lastChild);
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typed_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typed/compose */ "./node_modules/@typed/compose/lib.es2015/index.js");
/* harmony import */ var userscripter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter */ "./node_modules/userscripter/lib/index.mjs");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~src/config */ "./src/config.ts");
/* harmony import */ var _src_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~src/operations */ "./src/operations.ts");
/* harmony import */ var _src_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~src/site */ "./src/site.ts");
/* harmony import */ var _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~src/stylesheets */ "./src/stylesheets.ts");
/* harmony import */ var _src_userscript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~src/userscript */ "./src/userscript.ts");







const describeFailure = userscripter__WEBPACK_IMPORTED_MODULE_1__["errors"].failureDescriber({
    siteName: _src_site__WEBPACK_IMPORTED_MODULE_4__["NAME"],
    extensionName: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name,
    location: document.location,
});
userscripter__WEBPACK_IMPORTED_MODULE_1__["userscripter"].run({
    id: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].id,
    name: _src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name,
    initialAction: () => userscripter__WEBPACK_IMPORTED_MODULE_1__["log"].log(`${_src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].name} ${_src_userscript__WEBPACK_IMPORTED_MODULE_6__["default"].version}`),
    stylesheets: _src_stylesheets__WEBPACK_IMPORTED_MODULE_5__["default"],
    operationsPlan: {
        operations: _src_operations__WEBPACK_IMPORTED_MODULE_3__["default"],
        interval: _src_config__WEBPACK_IMPORTED_MODULE_2__["OPERATIONS_INTERVAL"],
        tryUntil: userscripter__WEBPACK_IMPORTED_MODULE_1__["environment"].DOMCONTENTLOADED,
        extraTries: _src_config__WEBPACK_IMPORTED_MODULE_2__["OPERATIONS_EXTRA_TRIES"],
        handleFailures: failures => failures.forEach(Object(_typed_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(userscripter__WEBPACK_IMPORTED_MODULE_1__["log"].error, describeFailure)),
    },
});


/***/ }),

/***/ "./src/operations.ts":
/*!***************************!*\
  !*** ./src/operations.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony import */ var deep_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-entries */ "./node_modules/deep-entries/dist/index.esm.js");
/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! userscripter/lib/operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.ts");
/* harmony import */ var _helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/extractTableInfo */ "./src/helpers/extractTableInfo.ts");
/* harmony import */ var _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/htmlTreeSelection */ "./src/helpers/htmlTreeSelection.ts");






const OPERATIONS = [
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__["operation"])({
        description: "Provide helper funcs for surfingkeys",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        action: () => {
            Object(_helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_5__["installHtmlTreeSelectionApi"])();
        },
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__["operation"])({
        description: "Provide helper funcs for dev console",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        action: () => {
            const findKeyDeep = (obj, str) => {
                const flatObj = Object(deep_entries__WEBPACK_IMPORTED_MODULE_1__["deepEntries"])(obj, deep_entries__WEBPACK_IMPORTED_MODULE_1__["delimitEntry"]);
                return flatObj.filter(([k, _value]) => k.includes(str));
            };
            // @ts-expect-error
            window.findKeyDeep = findKeyDeep;
        },
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_2__["operation"])({
        description: "Copy table as json via right click",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        action: () => {
            let menuActive = false;
            document.addEventListener("mousemove", function clickListener(event) {
                const maybeTable = event.target;
                if (!menuActive && maybeTable instanceof HTMLTableElement) {
                    GM_registerMenuCommand("Copy this table", () => {
                        const tableJson = Object(_helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_4__["extractTableAsJson"])(maybeTable);
                        Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["addToClipboard"])(JSON.stringify(tableJson, null, 4));
                    });
                }
                else if (menuActive && !(maybeTable instanceof HTMLTableElement)) {
                    GM_unregisterMenuCommand("Copy this table");
                }
            });
        },
    }),
];
/* harmony default export */ __webpack_exports__["default"] = (OPERATIONS);


/***/ }),

/***/ "./src/site.ts":
/*!*********************!*\
  !*** ./src/site.ts ***!
  \*********************/
/*! exports provided: NAME, HOSTNAME, SELECTOR_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTNAME", function() { return HOSTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTOR_CODE", function() { return SELECTOR_CODE; });
/* harmony import */ var _userscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript */ "./src/userscript.ts");
// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

const NAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].sitename;
const HOSTNAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].hostname;
const SELECTOR_CODE = "code";


/***/ }),

/***/ "./src/stylesheets.ts":
/*!****************************!*\
  !*** ./src/stylesheets.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony import */ var userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/stylesheets */ "./node_modules/userscripter/lib/stylesheets.mjs");


const STYLESHEETS = {
    general: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        css: `
            .jacks-dev-helpers-interact-widget {
              display: none;
              top: 0px;
              right: 0px;
              padding: 5px 10px;
              cursor: grab;
              background: unset;
              align-self: flex-end;
            }
            .jacks-dev-helper-outer-wrap {
              display: flex
            }
            .jacks-dev-helpers-interact-target:hover > .jacks-dev-helpers-interact-widget {
              display: inline-flex;
            }
            .jacks-dev-helpers-interact-widget:hover {
              text-decoration: underline;
            }
             `,
    }),
    htmlTreeSelectionOverlay: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        css: `
:root {
  --html-tree-selection-icon-url: ""
}
.html-tree-selection-cursor,
.html-tree-selection-cursor a,
.html-tree-selection-cursor input,
.html-tree-selection-cursor select,
.html-tree-selection-cursor button,
.html-tree-selection-cursor div[role=button] {
  cursor: var(--html-tree-selection-icon-url), crosshair !important;
}

.html-tree-selection {
  filter: opacity(0.2);
  box-shadow: inset 0px 0px 25px rgba(255,0,0,.5);
}

.html-tree-selection-overlay {
  position: absolute;
  z-index: 2147483647;
  background:
    no-repeat center/70% var(--html-tree-selection-icon-url),
    linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    );
}
`,
    }),
};
// <span class="w3-badge">9</span>
// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _ = STYLESHEETS;
void _;
/* harmony default export */ __webpack_exports__["default"] = (STYLESHEETS);


/***/ }),

/***/ "./src/userscript.ts":
/*!***************************!*\
  !*** ./src/userscript.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    id: "jacks-dev-helpers",
    name: "Jack's Dev Helpers",
    version: "0.1.0",
    author: "Jack McCown",
    description: "Hodgepodge of dev utils",
    hostname: "*",
    namespace: "jackmscripts",
    sitename: "google.com",
    runAt: "document-end",
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1lbnRyaWVzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5lcy11bmxpbmVzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L29ubHkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lcnJvcnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9sb2cubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3ByZWZlcmVuY2VzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9zdHlsZXNoZWV0cy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvdXNlcnNjcmlwdGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy91c2Vyc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzFCLGlDOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzRzs7Ozs7Ozs7Ozs7OztBQ2xIdEc7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7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QztLQUNGLENBQUM7Q0FDSCxDQUFDO0FBRWEseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2pEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVFQUF1RTtBQUUxQztBQUV0QixNQUFNLElBQUksR0FBRyxtREFBQyxDQUFDLFFBQVEsQ0FBQztBQUN4QixNQUFNLFFBQVEsR0FBRyxtREFBQyxDQUFDLFFBQVEsQ0FBQztBQUM1QixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNOcEM7QUFBQTtBQUFBO0FBQXNEO0FBQ2lCO0FBRXZFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSwrRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBRSxtRUFBTTtRQUNqQixHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FtQks7S0FDWCxDQUFDO0lBQ0Ysd0JBQXdCLEVBQUUsK0VBQVUsQ0FBQztRQUNuQyxTQUFTLEVBQUUsbUVBQU07UUFDakIsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEJSO0tBQ0UsQ0FBQztDQUNNLENBQUM7QUFDWCxrQ0FBa0M7QUFFbEMsc0pBQXNKO0FBQ3RKLE1BQU0sQ0FBQyxHQUFnQixXQUFXLENBQUM7QUFDbkMsS0FBSyxDQUFDLENBQUM7QUFFUSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEUzQjtBQUFlO0lBQ1gsRUFBRSxFQUFFLG1CQUFtQjtJQUN2QixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7SUFDdEMsUUFBUSxFQUFFLEdBQUc7SUFDYixTQUFTLEVBQUUsY0FBYztJQUN6QixRQUFRLEVBQUUsWUFBWTtJQUN0QixLQUFLLEVBQUUsY0FBYztDQUNmLEVBQUMiLCJmaWxlIjoiamFja3MtZGV2LWhlbHBlcnMudXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gX2NvbXBvc2UxKGFyZ3VtZW50c1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIF9jb21wb3NlMihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIF9jb21wb3NlMyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gX2NvbXBvc2U0KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIGNhc2UgNTogcmV0dXJuIF9jb21wb3NlNShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XG4gICAgfVxuICAgIDtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMShmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UxRm4oYSkge1xuICAgICAgICByZXR1cm4gZihhKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UyKGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTJGbihhKSB7XG4gICAgICAgIHJldHVybiBnKGYoYSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTMoaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGgoZyhmKGEpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNChpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaShoKGcoZihhKSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U1KGosIGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTVGbihhKSB7XG4gICAgICAgIHJldHVybiBqKGkoaChnKGYoYSkpKSkpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NlLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9zZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBpZGVudGl0eSA9IHggPT4geDtcblxuY29uc3QgZ2V0SW50ZXJmYWNlID0geCA9PiB7XG5cdGNvbnN0IHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KTtcblx0cmV0dXJuIHN0ci5zdWJzdHJpbmcoOCwgc3RyLmxlbmd0aCAtIDEpXG59O1xuXG5jb25zdCBpc09iamVjdExpa2UgPSB4ID0+IHtcblx0Y29uc3QgdGFnID0gZ2V0SW50ZXJmYWNlKHgpO1xuXHRzd2l0Y2ggKHRhZykge1xuXHRcdGNhc2UgJ1N0cmluZyc6XG5cdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRjYXNlICdSZWdFeHAnOlxuXHRcdGNhc2UgJ0RhdGUnOlxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YWcuc3RhcnRzV2l0aCgnSFRNTCcpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnXG5cdH1cbn07XG5cbmZ1bmN0aW9uKiBlbnRyaWVzSXRlcmF0b3IoaW5wdXQpIHtcblx0c3dpdGNoIChnZXRJbnRlcmZhY2UoaW5wdXQpKSB7XG5cdFx0Y2FzZSAnQXJyYXknOlxuXHRcdGNhc2UgJ01hcCc6XG5cdFx0Y2FzZSAnVVJMU2VhcmNoUGFyYW1zJzpcblx0XHRcdHlpZWxkKiBpbnB1dC5lbnRyaWVzKCk7XG5cdFx0XHRicmVha1xuXG5cdFx0Y2FzZSAnU2V0Jzpcblx0XHRjYXNlICdOb2RlTGlzdCc6XG5cdFx0Y2FzZSAnSW50OEFycmF5Jzpcblx0XHRjYXNlICdVaW50OEFycmF5Jzpcblx0XHRjYXNlICdVaW50OENsYW1wZWRBcnJheSc6XG5cdFx0Y2FzZSAnSW50MTZBcnJheSc6XG5cdFx0Y2FzZSAnVWludDE2QXJyYXknOlxuXHRcdGNhc2UgJ0ludDMyQXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQzMkFycmF5Jzpcblx0XHRjYXNlICdGbG9hdDMyQXJyYXknOlxuXHRcdGNhc2UgJ0Zsb2F0NjRBcnJheSc6XG5cdFx0Y2FzZSAnQmlnSW50NjRBcnJheSc6XG5cdFx0Y2FzZSAnQmlnVWludDY0QXJyYXknOlxuXHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0Zm9yIChsZXQgdmFsdWUgb2YgaW5wdXQpIHlpZWxkIFtpKyssIHZhbHVlXTtcblx0XHRcdGJyZWFrXG5cblx0XHRjYXNlICdPYmplY3QnOlxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZiAoaXNPYmplY3RMaWtlKGlucHV0KSlcblx0XHRcdFx0Zm9yIChsZXQga2V5IGluIGlucHV0KVxuXHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5wdXQsIGtleSkpXG5cdFx0XHRcdFx0XHR5aWVsZCBba2V5LCBpbnB1dFtrZXldXTtcblx0XHRcdGJyZWFrXG5cdH1cbn1cblxuZnVuY3Rpb24qIGRlZXBFbnRyaWVzSXRlcmF0b3JfKGlucHV0LCBtYXBGbiwgcGFyZW50Q2lyY3VsYXJTZXQpIHtcblx0Y29uc3QgbWFwID0gdHlwZW9mIG1hcEZuID09PSAnZnVuY3Rpb24nID8gbWFwRm4gOiBpZGVudGl0eTtcblx0Zm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGVudHJpZXNJdGVyYXRvcihpbnB1dCkpIHtcblx0XHRpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gbWFwKFtrZXksIHZhbHVlXSk7XG5cdFx0XHRpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkgeWllbGQgZW50cnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNpcmN1bGFyU2V0ID0gcGFyZW50Q2lyY3VsYXJTZXQgfHwgbmV3IFdlYWtTZXQoKTtcblx0XHRcdGNpcmN1bGFyU2V0LmFkZChpbnB1dCk7XG5cblx0XHRcdGlmICghY2lyY3VsYXJTZXQuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRmb3IgKGxldCBlbnRyaWVzIG9mIGRlZXBFbnRyaWVzSXRlcmF0b3JfKFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdFx0XHRjaXJjdWxhclNldFxuXHRcdFx0XHQpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW50cnkgPSBtYXAoW2tleSwgLi4uZW50cmllc10pO1xuXHRcdFx0XHRcdGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB5aWVsZCBlbnRyeTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiogZGVlcEVudHJpZXNJdGVyYXRvcihpbnB1dCwgbWFwRm4pIHtcblx0eWllbGQqIGRlZXBFbnRyaWVzSXRlcmF0b3JfKGlucHV0LCBtYXBGbik7XG59XG5cbmNvbnN0IGRlZXBFbnRyaWVzID0gKGlucHV0LCBtYXBGbikgPT5cblx0QXJyYXkuZnJvbShkZWVwRW50cmllc0l0ZXJhdG9yKGlucHV0LCBtYXBGbikpO1xuXG5jb25zdCByb3RhdGVFbnRyeUJ5ID0gbiA9PiBlbnRyeSA9PiB7XG5cdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0Y29uc3QgbW9kID0gKC0xICogKE51bWJlcihuKSB8fCAwKSkgJSBlbnRyeS5sZW5ndGg7XG5cdGNvbnN0IGtleXMgPSBlbnRyeS5zbGljZSgwLCBtb2QpO1xuXHRjb25zdCB2YWx1ZSA9IGVudHJ5LnNsaWNlKG1vZCk7XG5cdHJldHVybiBbLi4udmFsdWUsIC4uLmtleXNdXG59O1xuXG5jb25zdCByb3RhdGVFbnRyeSA9IHJvdGF0ZUVudHJ5QnkoMSk7XG5cbmNvbnN0IGRlbGltaXRFbnRyeUJ5ID0gZGVsaW1pdGVyID0+IGVudHJ5ID0+IHtcblx0aWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHJldHVyblxuXHRjb25zdCBbdmFsdWUsIC4uLmtleXNdID0gcm90YXRlRW50cnkoZW50cnkpO1xuXHRyZXR1cm4gW2tleXMuam9pbihkZWxpbWl0ZXIpLCB2YWx1ZV1cbn07XG5cbmNvbnN0IGRlbGltaXRFbnRyeSA9IGRlbGltaXRFbnRyeUJ5KCcuJyk7XG5cbmV4cG9ydCB7IGRlZXBFbnRyaWVzLCBkZWVwRW50cmllc0l0ZXJhdG9yLCBkZWxpbWl0RW50cnksIGRlbGltaXRFbnRyeUJ5LCByb3RhdGVFbnRyeSwgcm90YXRlRW50cnlCeSB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVzKHMpIHtcbiAgICByZXR1cm4gcyA9PT0gXCJcIiA/IFtdIDogcy5yZXBsYWNlKC9cXG4kLywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5saW5lcyhscykge1xuICAgIHJldHVybiBscy5tYXAobGluZSA9PiBsaW5lICsgXCJcXG5cIikuam9pbihcIlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mQm9vbGVhbnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHRydWUpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk51bWJlcnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKDEpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN0cmluZ3MoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFwiXCIpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN5bWJvbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFN5bWJvbCgpKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdWxscyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UobnVsbCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mVW5kZWZpbmVkcyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UodW5kZWZpbmVkKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZQcmltaXRpdmVzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNQcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk9iamVjdHMoeCkge1xuICAgIHJldHVybiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc05vblByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mKHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiBpcyhBcnJheSkoeHMpICYmIHhzLmV2ZXJ5KGlzKHR5cGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeCkgPT4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXkuanMubWFwIiwiZXhwb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UsIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCB7IGlzQXJyYXlPZkJvb2xlYW5zLCBpc0FycmF5T2ZOdW1iZXJzLCBpc0FycmF5T2ZTdHJpbmdzLCBpc0FycmF5T2ZTeW1ib2xzLCBpc0FycmF5T2ZOdWxscywgaXNBcnJheU9mVW5kZWZpbmVkcywgaXNBcnJheU9mUHJpbWl0aXZlcywgaXNBcnJheU9mT2JqZWN0cywgaXNBcnJheU9mLCBpc0FycmF5T2ZMaWtlLCB9IGZyb20gXCIuL2FycmF5XCI7XG5leHBvcnQgeyBvbmx5Qm9vbGVhbnMsIG9ubHlOdW1iZXJzLCBvbmx5U3RyaW5ncywgb25seVN5bWJvbHMsIG9ubHlOdWxscywgb25seVVuZGVmaW5lZHMsIG9ubHlQcmltaXRpdmVzLCBvbmx5T2JqZWN0cywgb25seSwgb25seUxpa2UsIH0gZnJvbSBcIi4vb25seVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgVFlQRV9HVUFSRFNfUFJJTUlUSVZFID0gW2lzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZF07XG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwibnVtYmVyXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4KSB7XG4gICAgcmV0dXJuIHggPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoeCkge1xuICAgIHJldHVybiBUWVBFX0dVQVJEU19QUklNSVRJVkUuc29tZShmID0+IGYoeCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHgpO1xufVxuZnVuY3Rpb24gbmFtZWRGdW5jdGlvbihuYW1lLCBmdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUsIHdyaXRhYmxlOiBmYWxzZSB9KTtcbn1cbmZ1bmN0aW9uIG5hbWVkVHlwZUd1YXJkKGNyZWF0b3IsIHR5cGUsIHR5cGVHdWFyZCkge1xuICAgIHJldHVybiBuYW1lZEZ1bmN0aW9uKGAke2NyZWF0b3IubmFtZX0oJHt0eXBlLm5hbWV9KWAsIHR5cGVHdWFyZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXModHlwZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gKF8pID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZWRUeXBlR3VhcmQoaXMsIHR5cGUsICh4KSA9PiB4IGluc3RhbmNlb2YgdHlwZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMaWtlKHJlZmVyZW5jZSkge1xuICAgIGZvciAoY29uc3QgZiBvZiBUWVBFX0dVQVJEU19QUklNSVRJVkUpIHtcbiAgICAgICAgaWYgKGYocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuICh4KSA9PiBmKHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpcyhBcnJheSkocmVmZXJlbmNlKSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VBc0FycmF5ID0gcmVmZXJlbmNlO1xuICAgICAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiAocmVmZXJlbmNlQXNBcnJheS5sZW5ndGggPiAwID8geC5ldmVyeShpc0xpa2UocmVmZXJlbmNlQXNBcnJheVswXSkpIDogdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICByZXR1cm4gKHgpID0+ICghW3VuZGVmaW5lZCwgbnVsbF0uaW5jbHVkZXMoeClcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmZXJlbmNlKS5ldmVyeShrID0+IGlzTGlrZShyZWZlcmVuY2Vba10pKHhba10pKSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gaXMocmVmZXJlbmNlLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpc0xpa2UubmFtZSArIGAgY2Fubm90IHVzZSB0aGlzIG9iamVjdCBhcyByZWZlcmVuY2UgYmVjYXVzZSBpdCBoYXMgbm8gY29uc3RydWN0b3I6IGAgKyBKU09OLnN0cmluZ2lmeShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvbmx5Qm9vbGVhbnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzQm9vbGVhbik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bWJlcnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTnVtYmVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3RyaW5ncyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlTeW1ib2xzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1N5bWJvbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bGxzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlVbmRlZmluZWRzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1VuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVByaW1pdGl2ZXMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5T2JqZWN0cyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHkodHlwZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seUxpa2UocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICh4cykgPT4geHMuZmlsdGVyKGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ubHkuanMubWFwIiwiZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICgpID0+IHRydWU7XG5leHBvcnQgY29uc3QgTkVWRVIgPSAoKSA9PiBmYWxzZTtcbmV4cG9ydCBjb25zdCBET01DT05URU5UTE9BREVEID0gKHN0YXRlKSA9PiBzdGF0ZSAhPT0gXCJsb2FkaW5nXCI7XG5leHBvcnQgY29uc3QgTE9BRCA9IChzdGF0ZSkgPT4gc3RhdGUgPT09IFwiY29tcGxldGVcIjtcbiIsImltcG9ydCB7IHVubGluZXMgfSBmcm9tIFwibGluZXMtdW5saW5lc1wiO1xuY29uc3QgSU5ERU5UQVRJT04gPSBcIiAgXCI7XG5mdW5jdGlvbiBmb3JtYXREZXBlbmRlbmN5KGQpIHtcbiAgICByZXR1cm4gSU5ERU5UQVRJT04gKyBkLmtleSArIFwiOiBcIiArIGQuc2VsZWN0b3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwbGFuYXRpb24oZmFpbHVyZSkge1xuICAgIHN3aXRjaCAoZmFpbHVyZS5yZXN1bHQucmVhc29uKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB1bmxpbmVzKFtcbiAgICAgICAgICAgICAgICBgVGhlc2UgZGVwZW5kZW5jaWVzIHdlcmUgbm90IGZvdW5kOmAsXG4gICAgICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICAgICAgdW5saW5lcyhmYWlsdXJlLnJlc3VsdC5kZXBlbmRlbmNpZXMubWFwKGZvcm1hdERlcGVuZGVuY3kpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZSBvcGVyYXRpb24gZmFpbGVkIHdpdGggdGhpcyBlcnJvcjpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIGZhaWx1cmUucmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZURlc2NyaWJlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZhaWx1cmUgPT4gdW5saW5lcyhbXG4gICAgICAgIGBDb3VsZCBub3QgJHtmYWlsdXJlLm9wZXJhdGlvbi5kZXNjcmlwdGlvbn0gb24gdGhpcyBwYWdlOmAsXG4gICAgICAgIGBgLFxuICAgICAgICBJTkRFTlRBVElPTiArIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGBgLFxuICAgICAgICBleHBsYW5hdGlvbihmYWlsdXJlKS50cmltKCksXG4gICAgICAgIGBgLFxuICAgICAgICBgVGhpcyBwcm9ibGVtIG1pZ2h0IGJlIGNhdXNlZCBieSAke2NvbnRleHQuc2l0ZU5hbWV9IGNoYW5naW5nIGl0cyBjb250ZW50L3N0cnVjdHVyZSwgaW4gd2hpY2ggY2FzZSAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0gbmVlZHMgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBpdCdzIHByb2JhYmx5IGEgYnVnIGluICR7Y29udGV4dC5leHRlbnNpb25OYW1lfS5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYElmIHlvdSBmaWxlIGEgYnVnIHJlcG9ydCwgcGxlYXNlIGluY2x1ZGUgdGhpcyBtZXNzYWdlLmAsXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBwcmVmZXJlbmNlcyBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmltcG9ydCAqIGFzIHVzZXJzY3JpcHRlciBmcm9tIFwiLi91c2Vyc2NyaXB0ZXJcIjtcbmV4cG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgb3BlcmF0aW9ucywgcHJlZmVyZW5jZXMsIHN0eWxlc2hlZXRzLCB1c2Vyc2NyaXB0ZXIsIH07XG4iLCJsZXQgcHJlZml4ID0gXCJcIjtcbmxldCBsb2dnZXIgPSBjb25zb2xlO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWZpeChwKSB7XG4gICAgcHJlZml4ID0gcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobCkge1xuICAgIGxvZ2dlciA9IGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nKHN0cikge1xuICAgIGxvZ2dlci5sb2cocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluZm8oc3RyKSB7XG4gICAgbG9nZ2VyLmluZm8ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcoc3RyKSB7XG4gICAgbG9nZ2VyLndhcm4ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0cikge1xuICAgIGxvZ2dlci5lcnJvcihwcmVmaXgsIHN0cik7XG59XG4iLCJpbXBvcnQgeyBpc051bGwsIGlzTnVtYmVyLCBpc1N0cmluZyB9IGZyb20gXCJ0cy10eXBlLWd1YXJkc1wiO1xuY29uc3QgU1VDQ0VTUyA9IHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb24oc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwbGFuKSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzZShvcGVyYXRpb25zLCBmYWlsdXJlcywgdHJpZXNMZWZ0KSB7XG4gICAgICAgIGNvbnN0IGxhc3RUcnkgPSBpc051bWJlcih0cmllc0xlZnQpICYmIHRyaWVzTGVmdCA8PSAwO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zVG9SdW5Ob3cgPSBbXTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gW107XG4gICAgICAgIGNvbnN0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUnVuTm93ID0gby5kZWZlclVudGlsID09PSB1bmRlZmluZWQgfHwgby5kZWZlclVudGlsKHJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgKHNob3VsZFJ1bk5vdyA/IG9wZXJhdGlvbnNUb1J1bk5vdyA6IHJlbWFpbmluZykucHVzaChvKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9uc1RvUnVuTm93KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlUb1BlcmZvcm0obyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBTVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQucmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUcnkgPyBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSkgOiByZW1haW5pbmcucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlY3Vyc2UocmVtYWluaW5nLCBmYWlsdXJlcywgKGlzTnVtYmVyKHRyaWVzTGVmdClcbiAgICAgICAgICAgICAgICA/IHRyaWVzTGVmdCAtIDFcbiAgICAgICAgICAgICAgICA6IHBsYW4udHJ5VW50aWwocmVhZHlTdGF0ZSkgPyBwbGFuLmV4dHJhVHJpZXMgOiB1bmRlZmluZWQpKSwgcGxhbi5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmFpbHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGxhbi5oYW5kbGVGYWlsdXJlcyhmYWlsdXJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShwbGFuLm9wZXJhdGlvbnMuZmlsdGVyKG8gPT4gby5jb25kaXRpb24od2luZG93KSksIFtdKTtcbn1cbmZ1bmN0aW9uIHRyeVRvUGVyZm9ybShvKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gby5kZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogby5kZXBlbmRlbmNpZXM7XG4gICAgY29uc3QgcXVlcnlSZXN1bHRzID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKS5tYXAoKFtrZXksIHNlbGVjdG9yXSkgPT4gKHtcbiAgICAgICAga2V5LCBzZWxlY3RvciwgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksXG4gICAgfSkpO1xuICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBxdWVyeVJlc3VsdHMuZmlsdGVyKHggPT4gaXNOdWxsKHguZWxlbWVudCkpO1xuICAgIGlmIChtaXNzaW5nRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgcmVhc29uOiAwLCBkZXBlbmRlbmNpZXM6IG1pc3NpbmdEZXBlbmRlbmNpZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZSA9IHF1ZXJ5UmVzdWx0cy5yZWR1Y2UoKGFjYywgeCkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywgeC5rZXksIHsgdmFsdWU6IHguZWxlbWVudCB9KSwge30pO1xuICAgIHJldHVybiBmcm9tQWN0aW9uUmVzdWx0KG8uYWN0aW9uKGUpKTtcbn1cbmZ1bmN0aW9uIGZyb21BY3Rpb25SZXN1bHQocikge1xuICAgIHJldHVybiBpc1N0cmluZyhyKSA/IHsgcmVhc29uOiAxLCBtZXNzYWdlOiByIH0gOiBTVUNDRVNTO1xufVxuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmlwdGFibGUoaGFuZGxlcikge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgaGFuZGxlcjogKHN1bW1hcnksIHByZWZlcmVuY2VzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmID0+IGYoc3VtbWFyeS5wcmVmZXJlbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2dnaW5nUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBzdW1tYXJ5LnJlc3BvbnNlO1xuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgKCR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2Uuc2F2ZWQpfSkgd2FzIGludmFsaWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgQ291bGQgbm90IHNldCB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgaXQgd2FzIGludmFsaWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGhhZCB0aGUgd3JvbmcgdHlwZS4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgY291bGQgbm90IGJlIHBhcnNlZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc3dpdGNoIChzdW1tYXJ5LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgcmVhZCBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuIFVzaW5nIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5wcmVmZXJlbmNlLmRlZmF1bHQpfS5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBzYXZlIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5yZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHN1bW1hcnkuYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhc3NlcnRVbnJlYWNoYWJsZShyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub29wUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIF8pIHtcbiAgICByZXR1cm4gc3VtbWFyeS5yZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGFzc2VydFVucmVhY2hhYmxlKHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRVbnJlYWNoYWJsZTogXCIgKyB4KTtcbn1cbiIsImNvbnN0IE1BVENIX0FMTCA9IFwiYWxsXCI7XG5jb25zdCBNQVRDSF9OT05FID0gXCJub3QgYWxsXCI7XG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzaGVldChzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWM7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHN0eWxlc2hlZXRzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzaGVldHMpLmZvckVhY2goKFtfLCBzaGVldF0pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGlmIChzaGVldC5pZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc3R5bGUuaWQgPSBzaGVldC5pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzaGVldC5jc3M7XG4gICAgICAgIHN0eWxlLm1lZGlhID0gc2hlZXQuY29uZGl0aW9uKHdpbmRvdykgPyBNQVRDSF9BTEwgOiBNQVRDSF9OT05FO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbmNvbnN0IHNldE1lZGlhUXVlcnkgPSAobSkgPT4gKHMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocy5pZCk7XG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGVuYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfQUxMKTtcbmV4cG9ydCBjb25zdCBkaXNhYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9OT05FKTtcbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBydW4odXNlcnNjcmlwdCkge1xuICAgIGxvZy5zZXRQcmVmaXgoYFske3VzZXJzY3JpcHQubmFtZX1dYCk7XG4gICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSh1c2Vyc2NyaXB0LmlkKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBsb2cud2FybmluZyhgSXQgbG9va3MgYXMgdGhvdWdoICR7dXNlcnNjcmlwdC5uYW1lfSBoYXMgYWxyZWFkeSBydW4gKGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBcIiR7YXR0cn1cIiB3YXMgZm91bmQgb24gPGhlYWQ+KS4gU3RvcHBpbmcuYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIFwiXCIpO1xuICAgICAgICB1c2Vyc2NyaXB0LmluaXRpYWxBY3Rpb24oKTtcbiAgICAgICAgc3R5bGVzaGVldHMuaW5zZXJ0KHVzZXJzY3JpcHQuc3R5bGVzaGVldHMpO1xuICAgICAgICBvcGVyYXRpb25zLnJ1bih1c2Vyc2NyaXB0Lm9wZXJhdGlvbnNQbGFuKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoaWQpIHtcbiAgICByZXR1cm4gXCJkYXRhLVwiICsgaWQgKyBcIi1oYXMtcnVuXCI7XG59XG4iLCIvLyBUaGlzIGZpbGUgY2Fubm90IGNvbnRhaW4gV2VicGFjay1yZXNvbHZlZCBpbXBvcnRzIChlLmcuIFwifnNyYy9mb29cIikuXG5cbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0lOVEVSVkFMID0gMjAwOyAvLyBtc1xuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfRVhUUkFfVFJJRVMgPSAzO1xuIiwiY29uc3QgYXJyID0gQXJyYXkuZnJvbTtcblxuY29uc3QgZXh0cmFjdExpbmtlZFRleHQgPSAobm9kZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHRtcE5vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBhcnIodG1wTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChcbiAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJUZXh0ID0gYFske2VsLmlubmVyVGV4dH1dKCR7ZWwuaHJlZn0pYClcbiAgICApO1xuICAgIHJldHVybiB0bXBOb2RlLmlubmVyVGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRhYmxlQXNKc29uKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogb2JqZWN0IHtcbiAgICAvLyBJZGVhbGx5IGZpcnN0IGNoZWNrIGlmIHRhYmxlIGlzIFwicmVndWxhclwiIGFrYSBoYXMgZXF1YWwgbnVtYmVyIG9mIHRoIHRvIHRkL3RyXG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAodGFibGUudEhlYWQgIT09IG51bGwpIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS50SGVhZC5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gYXJyKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyKHRhYmxlLnRCb2RpZXMpLmZsYXRNYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUdmbVRhYmxlKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICk7XG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5tYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaHRtbFRyZWVTZWxlY3Rpb24oKSB7XG4gIC8vIFRPRE8gc2VsZWN0IHZpYSBrZXlib2FyZD9cbiAgLy8gTm8gbmVlZCB0byB3YWl0IGZvciBhICdET01Db250ZW50TG9hZGVkJyBldmVudCBzaW5jZSB0aGUgbWFuaWZlc3RcbiAgLy8gc3BlY2lmaWVzOlxuICAvL1xuICAvLyAgIFwicnVuX2F0XCI6IFwiZG9jdW1lbnRfZW5kXCJcbiAgLy9cblxuICBsZXQgY2xpY2thYmxlID0gW1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9YnV0dG9uXVwiKSxcbiAgXTtcbiAgY29uc3QgaWZyYW1lT3ZlcmxheXM6IHtcbiAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xuICB9W10gPSBbXTtcblxuICBsZXQgb3ZlckhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIikpIHtcbiAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgICBsZXQgaWZyYW1lID0gaWZyYW1lT3ZlcmxheXNbcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKV0uaWZyYW1lO1xuICAgICAgICBpZnJhbWUuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJmYWlsZWQgdG8gZmluZCBpZnJhbWVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcbiAgbGV0IG91dEhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgbGV0IGNsaWNrSGFuZGxlciA9IChlOiBFdmVudCkgPT4ge1xuICAgIGRpc2FibGUoKTtcblxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheVwiKSkge1xuICAgICAgaWYgKHRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICAgIHRhcmdldCA9IGlmcmFtZU92ZXJsYXlzW3BhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCldLmlmcmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImZhaWxlZCB0byBmaW5kIGlmcmFtZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPIGluc3RlYWQgb2YgcmVtb3ZpbmcgdGFyZ2V0LCByZXR1cm4gaXQgKG9yIHBvc3NpYmx5IG1hbnkpXG4gICAgdGFyZ2V0LnJlbW92ZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgbGV0IGVuYWJsZSA9ICgpID0+IHtcbiAgICAvLyBvdmVycmlkZSBjbGljayBoYW5kbGVycyBvbiBhbnkgY2xpY2thYmxlIGVsZW1lbnRcbiAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY1tpXS5vbmNsaWNrQmFja3VwID0gY1tpXS5vbmNsaWNrO1xuICAgICAgICBjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGlmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpO1xuXG4gICAgaWZyYW1lcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgaWZyYW1lQ2xpZW50UmVjdCA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgb2Zmc2V0WCA9IGlmcmFtZUNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgbGV0IG9mZnNldFkgPSBpZnJhbWVDbGllbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIik7XG4gICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7aWZyYW1lQ2xpZW50UmVjdC53aWR0aH1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2lmcmFtZUNsaWVudFJlY3QuaGVpZ2h0fXB4YDtcblxuICAgICAgb3ZlcmxheS5kYXRhc2V0LmluZGV4ID0gYCR7aWZyYW1lT3ZlcmxheXMubGVuZ3RofWA7XG5cbiAgICAgIGlmcmFtZU92ZXJsYXlzLnB1c2goe1xuICAgICAgICBpZnJhbWU6IGksXG4gICAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3JcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG91dEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuICB9O1xuXG4gIGxldCBkaXNhYmxlID0gKCkgPT4ge1xuICAgIGNsaWNrYWJsZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjW2ldLm9uY2xpY2tCYWNrdXApO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGRlbGV0ZSBjW2ldLm9uY2xpY2tCYWNrdXA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZnJhbWVPdmVybGF5cy5mb3JFYWNoKChvKSA9PiBvLm92ZXJsYXkucmVtb3ZlKCkpO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvclwiKTtcblxuICAgIC8vIGNsZWFuIGFueSBvcnBoYW5lZCBob3ZlciBhcHBsaWVkIGNsYXNzXG4gICAgbGV0IG9ycGhhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICBpZiAob3JwaGFuICE9PSBudWxsKSB7XG4gICAgICBvcnBoYW4uY2xhc3NMaXN0LnJlbW92ZShcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG91dEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuICB9O1xuXG4gIGxldCBrZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGRpc2FibGUoKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgaWZyYW1lT3ZlcmxheXMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgbGV0IGlmcmFtZSA9IG8uaWZyYW1lO1xuICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSBpZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgb3ZlcmxheSA9IG8ub3ZlcmxheTtcbiAgICAgIGxldCBvZmZzZXRYID0gaWZyYW1lQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICBsZXQgb2Zmc2V0WSA9IGlmcmFtZUNsaWVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIG92ZXJsYXkuc3R5bGUudG9wID0gYCR7b2Zmc2V0WX1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcbiAgICB9KTtcbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICBjbGVhbnVwKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbEh0bWxUcmVlU2VsZWN0aW9uQXBpKCkge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHdpbmRvdy5odG1sVHJlZVNlbGVjdGlvbiA9IGh0bWxUcmVlU2VsZWN0aW9uO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFkZFRvQ2xpcGJvYXJkID0gKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IFwiY2xpcGJvYXJkLXdyaXRlXCIgYXMgUGVybWlzc2lvbk5hbWU7XG4gIHJldHVybiBuYXZpZ2F0b3IucGVybWlzc2lvbnNcbiAgICAucXVlcnkoeyBuYW1lOiBwZXJtaXNzaW9uTmFtZSB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT0gXCJncmFudGVkXCIgfHwgcmVzdWx0LnN0YXRlID09IFwicHJvbXB0XCIpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbnRlbnQpLnRoZW4oKCkgPT4ge30pO1xuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIFwiUGVybWlzc2lvbiBmb3IgY2xpcGJvYXJkLXdyaXRlIHdhcyBub3Qgb2J0YWluZWQgXCIgKyByZXN1bHQuc3RhdGVcbiAgICAgICk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZWxlbTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgY29uc3Qgc2libGluZ3MgPSBbXTtcbiAgbGV0IHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIGlmICghc2libGluZykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nIGFzIEhUTUxFbGVtZW50KTtcbiAgICB9XG4gICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIHNpYmxpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcGVuZEJ0blRvRWxlbWVudHMgPSA8WiBleHRlbmRzIEhUTUxFbGVtZW50PihcbiAgZWxlbWVudHM6IE5vZGVMaXN0T2Y8Wj4sXG4gIGNsaWNrSGFuZGxlcjogKGU6IFosIGE6IEV2ZW50KSA9PiB2b2lkLFxuICBtb2RpZnlCdG46IChiOiBIVE1MRWxlbWVudCkgPT4gdm9pZFxuKTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGNvZGVCbG9jaykgPT4ge1xuICAgIGNvZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0XCIpO1xuICAgIGNvZGVCbG9jay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJqYWNrcy1kZXYtaGVscGVycy1vdXRlci13cmFwXCIgPiR7Y29kZUJsb2NrLmlubmVySFRNTH08L3NwYW4+YDtcbiAgICBjb25zdCBjb3B5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29weUJ0bi5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpO1xuICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdG1wQ29kZUJsb2NrID0gY29kZUJsb2NrLmNsb25lTm9kZSh0cnVlKSBhcyBaO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0bXBDb2RlQmxvY2suY2hpbGRyZW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGlsZENvbXBvbmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdG1wQ29kZUJsb2NrLnJlbW92ZUNoaWxkKGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xpY2tIYW5kbGVyKHRtcENvZGVCbG9jayBhcyBaLCBldmVudCk7XG4gICAgfSk7XG4gICAgbW9kaWZ5QnRuKGNvcHlCdG4pO1xuICAgIGNvZGVCbG9jay5hcHBlbmRDaGlsZChjb3B5QnRuKTtcbiAgICByZXR1cm4gY29weUJ0bjtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFsbEVzTW9kdWxlKG1vZHVsZVVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibW9kdWxlXCIpO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1vZHVsZVVybCk7XG4gIGNvbnN0IGhlYWQgPVxuICAgIGRvY3VtZW50LmhlYWQgfHxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0gfHxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5sYXN0Q2hpbGQpO1xufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJAdHlwZWQvY29tcG9zZVwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQsIGVycm9ycywgbG9nLCB1c2Vyc2NyaXB0ZXIgfSBmcm9tIFwidXNlcnNjcmlwdGVyXCI7XG5cbmltcG9ydCAqIGFzIENPTkZJRyBmcm9tIFwifnNyYy9jb25maWdcIjtcbmltcG9ydCBPUEVSQVRJT05TIGZyb20gXCJ+c3JjL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIFNJVEUgZnJvbSBcIn5zcmMvc2l0ZVwiO1xuaW1wb3J0IFNUWUxFU0hFRVRTIGZyb20gXCJ+c3JjL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgVSBmcm9tIFwifnNyYy91c2Vyc2NyaXB0XCI7XG5cbmNvbnN0IGRlc2NyaWJlRmFpbHVyZSA9IGVycm9ycy5mYWlsdXJlRGVzY3JpYmVyKHtcbiAgICBzaXRlTmFtZTogU0lURS5OQU1FLFxuICAgIGV4dGVuc2lvbk5hbWU6IFUubmFtZSxcbiAgICBsb2NhdGlvbjogZG9jdW1lbnQubG9jYXRpb24sXG59KTtcblxudXNlcnNjcmlwdGVyLnJ1bih7XG4gICAgaWQ6IFUuaWQsXG4gICAgbmFtZTogVS5uYW1lLFxuICAgIGluaXRpYWxBY3Rpb246ICgpID0+IGxvZy5sb2coYCR7VS5uYW1lfSAke1UudmVyc2lvbn1gKSxcbiAgICBzdHlsZXNoZWV0czogU1RZTEVTSEVFVFMsXG4gICAgb3BlcmF0aW9uc1BsYW46IHtcbiAgICAgICAgb3BlcmF0aW9uczogT1BFUkFUSU9OUyxcbiAgICAgICAgaW50ZXJ2YWw6IENPTkZJRy5PUEVSQVRJT05TX0lOVEVSVkFMLFxuICAgICAgICB0cnlVbnRpbDogZW52aXJvbm1lbnQuRE9NQ09OVEVOVExPQURFRCxcbiAgICAgICAgZXh0cmFUcmllczogQ09ORklHLk9QRVJBVElPTlNfRVhUUkFfVFJJRVMsXG4gICAgICAgIGhhbmRsZUZhaWx1cmVzOiBmYWlsdXJlcyA9PiBmYWlsdXJlcy5mb3JFYWNoKGNvbXBvc2UobG9nLmVycm9yLCBkZXNjcmliZUZhaWx1cmUpKSxcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQgeyBBTFdBWVMgfSBmcm9tIFwidXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgZGVlcEVudHJpZXMsIGRlbGltaXRFbnRyeSB9IGZyb20gXCJkZWVwLWVudHJpZXNcIjtcbmltcG9ydCB7IE9wZXJhdGlvbiwgb3BlcmF0aW9uIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvb3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgYWRkVG9DbGlwYm9hcmQgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWxzXCI7XG5pbXBvcnQgeyBleHRyYWN0VGFibGVBc0pzb24gfSBmcm9tIFwiLi9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm9cIjtcbmltcG9ydCB7IGluc3RhbGxIdG1sVHJlZVNlbGVjdGlvbkFwaSB9IGZyb20gXCIuL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb25cIjtcblxuY29uc3QgT1BFUkFUSU9OUzogUmVhZG9ubHlBcnJheTxPcGVyYXRpb248YW55Pj4gPSBbXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIHN1cmZpbmdrZXlzXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBpbnN0YWxsSHRtbFRyZWVTZWxlY3Rpb25BcGkoKTtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIGhlbHBlciBmdW5jcyBmb3IgZGV2IGNvbnNvbGVcIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmRLZXlEZWVwID0gKG9iajogb2JqZWN0LCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBmbGF0T2JqID0gZGVlcEVudHJpZXMob2JqLCBkZWxpbWl0RW50cnkpO1xuICAgICAgICByZXR1cm4gZmxhdE9iai5maWx0ZXIoKFtrLCBfdmFsdWVdOiBbc3RyaW5nLCB1bmtub3duXSkgPT5cbiAgICAgICAgICBrLmluY2x1ZGVzKHN0cilcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuZmluZEtleURlZXAgPSBmaW5kS2V5RGVlcDtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IHRhYmxlIGFzIGpzb24gdmlhIHJpZ2h0IGNsaWNrXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBsZXQgbWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiBjbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1heWJlVGFibGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghbWVudUFjdGl2ZSAmJiBtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkge1xuICAgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGVKc29uID0gZXh0cmFjdFRhYmxlQXNKc29uKG1heWJlVGFibGUpO1xuICAgICAgICAgICAgYWRkVG9DbGlwYm9hcmQoSlNPTi5zdHJpbmdpZnkodGFibGVKc29uLCBudWxsLCA0KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUFjdGl2ZSAmJiAhKG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSkge1xuICAgICAgICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChcIkNvcHkgdGhpcyB0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBPUEVSQVRJT05TO1xuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5pbXBvcnQgVSBmcm9tIFwiLi91c2Vyc2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQ09ERSA9IFwiY29kZVwiO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFN0eWxlc2hlZXRzLCBzdHlsZXNoZWV0IH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHNcIjtcblxuY29uc3QgU1RZTEVTSEVFVFMgPSB7XG4gIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGNzczogYFxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlci1vdXRlci13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldDpob3ZlciA+IC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQ6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgLFxuICB9KSxcbiAgaHRtbFRyZWVTZWxlY3Rpb25PdmVybGF5OiBzdHlsZXNoZWV0KHtcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBjc3M6IGBcbjpyb290IHtcbiAgLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsOiBcIlwiXG59XG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYSxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBpbnB1dCxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBzZWxlY3QsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYnV0dG9uLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGRpdltyb2xlPWJ1dHRvbl0ge1xuICBjdXJzb3I6IHZhcigtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmwpLCBjcm9zc2hhaXIgIWltcG9ydGFudDtcbn1cblxuLmh0bWwtdHJlZS1zZWxlY3Rpb24ge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IHJnYmEoMjU1LDAsMCwuNSk7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGJhY2tncm91bmQ6XG4gICAgbm8tcmVwZWF0IGNlbnRlci83MCUgdmFyKC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybCksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcbiAgICApO1xufVxuYCxcbiAgfSksXG59IGFzIGNvbnN0O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG5cbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxuY29uc3QgXzogU3R5bGVzaGVldHMgPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcblxuZXhwb3J0IGRlZmF1bHQgU1RZTEVTSEVFVFM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaWQ6IFwiamFja3MtZGV2LWhlbHBlcnNcIixcbiAgICBuYW1lOiBcIkphY2sncyBEZXYgSGVscGVyc1wiLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICBhdXRob3I6IFwiSmFjayBNY0Nvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb2RnZXBvZGdlIG9mIGRldiB1dGlsc1wiLFxuICAgIGhvc3RuYW1lOiBcIipcIixcbiAgICBuYW1lc3BhY2U6IFwiamFja21zY3JpcHRzXCIsXG4gICAgc2l0ZW5hbWU6IFwiZ29vZ2xlLmNvbVwiLFxuICAgIHJ1bkF0OiBcImRvY3VtZW50LWVuZFwiLFxufSBhcyBjb25zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=