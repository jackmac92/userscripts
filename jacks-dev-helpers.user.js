// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2021.9.2.17.20
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
/*! exports provided: htmlTreeSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeSelection", function() { return htmlTreeSelection; });
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
            // @ts-expect-error
            window.htmlTreeSelection = _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_5__["htmlTreeSelection"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVlcC1lbnRyaWVzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5lcy11bmxpbmVzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L29ubHkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lcnJvcnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9sb2cubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3ByZWZlcmVuY2VzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9zdHlsZXNoZWV0cy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvdXNlcnNjcmlwdGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy91c2Vyc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQzFCLGlDOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzRzs7Ozs7Ozs7Ozs7OztBQ2xIdEc7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RUFBdUU7QUFFMUM7QUFFdEIsTUFBTSxJQUFJLEdBQUcsbURBQUMsQ0FBQyxRQUFRLENBQUM7QUFDeEIsTUFBTSxRQUFRLEdBQUcsbURBQUMsQ0FBQyxRQUFRLENBQUM7QUFDNUIsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTnBDO0FBQUE7QUFBQTtBQUFzRDtBQUNpQjtBQUV2RSxNQUFNLFdBQVcsR0FBRztJQUNsQixPQUFPLEVBQUUsK0VBQVUsQ0FBQztRQUNsQixTQUFTLEVBQUUsbUVBQU07UUFDakIsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBbUJLO0tBQ1gsQ0FBQztJQUNGLHdCQUF3QixFQUFFLCtFQUFVLENBQUM7UUFDbkMsU0FBUyxFQUFFLG1FQUFNO1FBQ2pCLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRCUjtLQUNFLENBQUM7Q0FDTSxDQUFDO0FBQ1gsa0NBQWtDO0FBRWxDLHNKQUFzSjtBQUN0SixNQUFNLENBQUMsR0FBZ0IsV0FBVyxDQUFDO0FBQ25DLEtBQUssQ0FBQyxDQUFDO0FBRVEsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xFM0I7QUFBZTtJQUNYLEVBQUUsRUFBRSxtQkFBbUI7SUFDdkIsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQixPQUFPLEVBQUUsT0FBTztJQUNoQixNQUFNLEVBQUUsYUFBYTtJQUNyQixXQUFXLEVBQUUseUJBQXlCO0lBQ3RDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsU0FBUyxFQUFFLGNBQWM7SUFDekIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsS0FBSyxFQUFFLGNBQWM7Q0FDZixFQUFDIiwiZmlsZSI6ImphY2tzLWRldi1oZWxwZXJzLnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIF9jb21wb3NlMShhcmd1bWVudHNbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBfY29tcG9zZTIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBfY29tcG9zZTMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIF9jb21wb3NlNChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICBjYXNlIDU6IHJldHVybiBfY29tcG9zZTUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgIH1cbiAgICA7XG59XG5mdW5jdGlvbiBfY29tcG9zZTEoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGYoYSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMihnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UyRm4oYSkge1xuICAgICAgICByZXR1cm4gZyhmKGEpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UzKGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBoKGcoZihhKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTQoaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGkoaChnKGYoYSkpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNShqLCBpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2U1Rm4oYSkge1xuICAgICAgICByZXR1cm4gaihpKGgoZyhmKGEpKSkpKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvc2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5cbmNvbnN0IGdldEludGVyZmFjZSA9IHggPT4ge1xuXHRjb25zdCBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCk7XG5cdHJldHVybiBzdHIuc3Vic3RyaW5nKDgsIHN0ci5sZW5ndGggLSAxKVxufTtcblxuY29uc3QgaXNPYmplY3RMaWtlID0geCA9PiB7XG5cdGNvbnN0IHRhZyA9IGdldEludGVyZmFjZSh4KTtcblx0c3dpdGNoICh0YWcpIHtcblx0XHRjYXNlICdTdHJpbmcnOlxuXHRcdGNhc2UgJ051bWJlcic6XG5cdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0Y2FzZSAnUmVnRXhwJzpcblx0XHRjYXNlICdEYXRlJzpcblx0XHRcdHJldHVybiBmYWxzZVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGFnLnN0YXJ0c1dpdGgoJ0hUTUwnKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0J1xuXHR9XG59O1xuXG5mdW5jdGlvbiogZW50cmllc0l0ZXJhdG9yKGlucHV0KSB7XG5cdHN3aXRjaCAoZ2V0SW50ZXJmYWNlKGlucHV0KSkge1xuXHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRjYXNlICdNYXAnOlxuXHRcdGNhc2UgJ1VSTFNlYXJjaFBhcmFtcyc6XG5cdFx0XHR5aWVsZCogaW5wdXQuZW50cmllcygpO1xuXHRcdFx0YnJlYWtcblxuXHRcdGNhc2UgJ1NldCc6XG5cdFx0Y2FzZSAnTm9kZUxpc3QnOlxuXHRcdGNhc2UgJ0ludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhDbGFtcGVkQXJyYXknOlxuXHRcdGNhc2UgJ0ludDE2QXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQxNkFycmF5Jzpcblx0XHRjYXNlICdJbnQzMkFycmF5Jzpcblx0XHRjYXNlICdVaW50MzJBcnJheSc6XG5cdFx0Y2FzZSAnRmxvYXQzMkFycmF5Jzpcblx0XHRjYXNlICdGbG9hdDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ0ludDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ1VpbnQ2NEFycmF5Jzpcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGZvciAobGV0IHZhbHVlIG9mIGlucHV0KSB5aWVsZCBbaSsrLCB2YWx1ZV07XG5cdFx0XHRicmVha1xuXG5cdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKGlzT2JqZWN0TGlrZShpbnB1dCkpXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBpbnB1dClcblx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKVxuXHRcdFx0XHRcdFx0eWllbGQgW2tleSwgaW5wdXRba2V5XV07XG5cdFx0XHRicmVha1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4sIHBhcmVudENpcmN1bGFyU2V0KSB7XG5cdGNvbnN0IG1hcCA9IHR5cGVvZiBtYXBGbiA9PT0gJ2Z1bmN0aW9uJyA/IG1hcEZuIDogaWRlbnRpdHk7XG5cdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzSXRlcmF0b3IoaW5wdXQpKSB7XG5cdFx0aWYgKCFpc09iamVjdExpa2UodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9IG1hcChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0aWYgKGVudHJ5ICE9PSB1bmRlZmluZWQpIHlpZWxkIGVudHJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjaXJjdWxhclNldCA9IHBhcmVudENpcmN1bGFyU2V0IHx8IG5ldyBXZWFrU2V0KCk7XG5cdFx0XHRjaXJjdWxhclNldC5hZGQoaW5wdXQpO1xuXG5cdFx0XHRpZiAoIWNpcmN1bGFyU2V0Lmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0Zm9yIChsZXQgZW50cmllcyBvZiBkZWVwRW50cmllc0l0ZXJhdG9yXyhcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRcdFx0Y2lyY3VsYXJTZXRcblx0XHRcdFx0KSkge1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gbWFwKFtrZXksIC4uLmVudHJpZXNdKTtcblx0XHRcdFx0XHRpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkgeWllbGQgZW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24qIGRlZXBFbnRyaWVzSXRlcmF0b3IoaW5wdXQsIG1hcEZuKSB7XG5cdHlpZWxkKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4pO1xufVxuXG5jb25zdCBkZWVwRW50cmllcyA9IChpbnB1dCwgbWFwRm4pID0+XG5cdEFycmF5LmZyb20oZGVlcEVudHJpZXNJdGVyYXRvcihpbnB1dCwgbWFwRm4pKTtcblxuY29uc3Qgcm90YXRlRW50cnlCeSA9IG4gPT4gZW50cnkgPT4ge1xuXHRpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdGNvbnN0IG1vZCA9ICgtMSAqIChOdW1iZXIobikgfHwgMCkpICUgZW50cnkubGVuZ3RoO1xuXHRjb25zdCBrZXlzID0gZW50cnkuc2xpY2UoMCwgbW9kKTtcblx0Y29uc3QgdmFsdWUgPSBlbnRyeS5zbGljZShtb2QpO1xuXHRyZXR1cm4gWy4uLnZhbHVlLCAuLi5rZXlzXVxufTtcblxuY29uc3Qgcm90YXRlRW50cnkgPSByb3RhdGVFbnRyeUJ5KDEpO1xuXG5jb25zdCBkZWxpbWl0RW50cnlCeSA9IGRlbGltaXRlciA9PiBlbnRyeSA9PiB7XG5cdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0Y29uc3QgW3ZhbHVlLCAuLi5rZXlzXSA9IHJvdGF0ZUVudHJ5KGVudHJ5KTtcblx0cmV0dXJuIFtrZXlzLmpvaW4oZGVsaW1pdGVyKSwgdmFsdWVdXG59O1xuXG5jb25zdCBkZWxpbWl0RW50cnkgPSBkZWxpbWl0RW50cnlCeSgnLicpO1xuXG5leHBvcnQgeyBkZWVwRW50cmllcywgZGVlcEVudHJpZXNJdGVyYXRvciwgZGVsaW1pdEVudHJ5LCBkZWxpbWl0RW50cnlCeSwgcm90YXRlRW50cnksIHJvdGF0ZUVudHJ5QnkgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsaW5lcyhzKSB7XG4gICAgcmV0dXJuIHMgPT09IFwiXCIgPyBbXSA6IHMucmVwbGFjZSgvXFxuJC8sIFwiXCIpLnNwbGl0KFwiXFxuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubGluZXMobHMpIHtcbiAgICByZXR1cm4gbHMubWFwKGxpbmUgPT4gbGluZSArIFwiXFxuXCIpLmpvaW4oXCJcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkJvb2xlYW5zKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh0cnVlKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdW1iZXJzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSgxKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmdzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShcIlwiKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTeW1ib2xzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShTeW1ib2woKSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVsbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKG51bGwpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlVuZGVmaW5lZHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHVuZGVmaW5lZCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mUHJpbWl0aXZlcyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZPYmplY3RzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZih0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4gaXMoQXJyYXkpKHhzKSAmJiB4cy5ldmVyeShpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsImV4cG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlLCB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgeyBpc0FycmF5T2ZCb29sZWFucywgaXNBcnJheU9mTnVtYmVycywgaXNBcnJheU9mU3RyaW5ncywgaXNBcnJheU9mU3ltYm9scywgaXNBcnJheU9mTnVsbHMsIGlzQXJyYXlPZlVuZGVmaW5lZHMsIGlzQXJyYXlPZlByaW1pdGl2ZXMsIGlzQXJyYXlPZk9iamVjdHMsIGlzQXJyYXlPZiwgaXNBcnJheU9mTGlrZSwgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgb25seUJvb2xlYW5zLCBvbmx5TnVtYmVycywgb25seVN0cmluZ3MsIG9ubHlTeW1ib2xzLCBvbmx5TnVsbHMsIG9ubHlVbmRlZmluZWRzLCBvbmx5UHJpbWl0aXZlcywgb25seU9iamVjdHMsIG9ubHksIG9ubHlMaWtlLCB9IGZyb20gXCIuL29ubHlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IFRZUEVfR1VBUkRTX1BSSU1JVElWRSA9IFtpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWRdO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm51bWJlclwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gVFlQRV9HVUFSRFNfUFJJTUlUSVZFLnNvbWUoZiA9PiBmKHgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vblByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KTtcbn1cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24obmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XG59XG5mdW5jdGlvbiBuYW1lZFR5cGVHdWFyZChjcmVhdG9yLCB0eXBlLCB0eXBlR3VhcmQpIHtcbiAgICByZXR1cm4gbmFtZWRGdW5jdGlvbihgJHtjcmVhdG9yLm5hbWV9KCR7dHlwZS5uYW1lfSlgLCB0eXBlR3VhcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVkVHlwZUd1YXJkKGlzLCB0eXBlLCAoeCkgPT4geCBpbnN0YW5jZW9mIHR5cGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlrZShyZWZlcmVuY2UpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgVFlQRV9HVUFSRFNfUFJJTUlUSVZFKSB7XG4gICAgICAgIGlmIChmKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoeCkgPT4gZih4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXMoQXJyYXkpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQXNBcnJheSA9IHJlZmVyZW5jZTtcbiAgICAgICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgKHJlZmVyZW5jZUFzQXJyYXkubGVuZ3RoID4gMCA/IHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZUFzQXJyYXlbMF0pKSA6IHRydWUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh4KSA9PiAoIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHgpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZmVyZW5jZSkuZXZlcnkoayA9PiBpc0xpa2UocmVmZXJlbmNlW2tdKSh4W2tdKSkpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzKHJlZmVyZW5jZS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXNMaWtlLm5hbWUgKyBgIGNhbm5vdCB1c2UgdGhpcyBvYmplY3QgYXMgcmVmZXJlbmNlIGJlY2F1c2UgaXQgaGFzIG5vIGNvbnN0cnVjdG9yOiBgICsgSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25seUJvb2xlYW5zKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc0Jvb2xlYW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdW1iZXJzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN0cmluZ3MoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3ltYm9scyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTeW1ib2wpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdWxscyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5kZWZpbmVkcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNVbmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlQcmltaXRpdmVzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU9iamVjdHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5KHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmx5LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBTFdBWVMgPSAoKSA9PiB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gKCkgPT4gZmFsc2U7XG5leHBvcnQgY29uc3QgRE9NQ09OVEVOVExPQURFRCA9IChzdGF0ZSkgPT4gc3RhdGUgIT09IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IExPQUQgPSAoc3RhdGUpID0+IHN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4iLCJpbXBvcnQgeyB1bmxpbmVzIH0gZnJvbSBcImxpbmVzLXVubGluZXNcIjtcbmNvbnN0IElOREVOVEFUSU9OID0gXCIgIFwiO1xuZnVuY3Rpb24gZm9ybWF0RGVwZW5kZW5jeShkKSB7XG4gICAgcmV0dXJuIElOREVOVEFUSU9OICsgZC5rZXkgKyBcIjogXCIgKyBkLnNlbGVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKGZhaWx1cmUpIHtcbiAgICBzd2l0Y2ggKGZhaWx1cmUucmVzdWx0LnJlYXNvbikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZXNlIGRlcGVuZGVuY2llcyB3ZXJlIG5vdCBmb3VuZDpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIHVubGluZXMoZmFpbHVyZS5yZXN1bHQuZGVwZW5kZW5jaWVzLm1hcChmb3JtYXREZXBlbmRlbmN5KSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIGZhaWxlZCB3aXRoIHRoaXMgZXJyb3I6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICBmYWlsdXJlLnJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmVEZXNjcmliZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmYWlsdXJlID0+IHVubGluZXMoW1xuICAgICAgICBgQ291bGQgbm90ICR7ZmFpbHVyZS5vcGVyYXRpb24uZGVzY3JpcHRpb259IG9uIHRoaXMgcGFnZTpgLFxuICAgICAgICBgYCxcbiAgICAgICAgSU5ERU5UQVRJT04gKyBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBgYCxcbiAgICAgICAgZXhwbGFuYXRpb24oZmFpbHVyZSkudHJpbSgpLFxuICAgICAgICBgYCxcbiAgICAgICAgYFRoaXMgcHJvYmxlbSBtaWdodCBiZSBjYXVzZWQgYnkgJHtjb250ZXh0LnNpdGVOYW1lfSBjaGFuZ2luZyBpdHMgY29udGVudC9zdHJ1Y3R1cmUsIGluIHdoaWNoIGNhc2UgJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9IG5lZWRzIHRvIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaXQncyBwcm9iYWJseSBhIGJ1ZyBpbiAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBJZiB5b3UgZmlsZSBhIGJ1ZyByZXBvcnQsIHBsZWFzZSBpbmNsdWRlIHRoaXMgbWVzc2FnZS5gLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIGVycm9ycyBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgcHJlZmVyZW5jZXMgZnJvbSBcIi4vcHJlZmVyZW5jZXNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgKiBhcyB1c2Vyc2NyaXB0ZXIgZnJvbSBcIi4vdXNlcnNjcmlwdGVyXCI7XG5leHBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIG9wZXJhdGlvbnMsIHByZWZlcmVuY2VzLCBzdHlsZXNoZWV0cywgdXNlcnNjcmlwdGVyLCB9O1xuIiwibGV0IHByZWZpeCA9IFwiXCI7XG5sZXQgbG9nZ2VyID0gY29uc29sZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmaXgocCkge1xuICAgIHByZWZpeCA9IHA7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGwpIHtcbiAgICBsb2dnZXIgPSBsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBsb2dnZXIubG9nKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHN0cikge1xuICAgIGxvZ2dlci5pbmZvKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHN0cikge1xuICAgIGxvZ2dlci53YXJuKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdHIpIHtcbiAgICBsb2dnZXIuZXJyb3IocHJlZml4LCBzdHIpO1xufVxuIiwiaW1wb3J0IHsgaXNOdWxsLCBpc051bWJlciwgaXNTdHJpbmcgfSBmcm9tIFwidHMtdHlwZS1ndWFyZHNcIjtcbmNvbnN0IFNVQ0NFU1MgPSB1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGxhbikge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uob3BlcmF0aW9ucywgZmFpbHVyZXMsIHRyaWVzTGVmdCkge1xuICAgICAgICBjb25zdCBsYXN0VHJ5ID0gaXNOdW1iZXIodHJpZXNMZWZ0KSAmJiB0cmllc0xlZnQgPD0gMDtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1RvUnVuTm93ID0gW107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IFtdO1xuICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJ1bk5vdyA9IG8uZGVmZXJVbnRpbCA9PT0gdW5kZWZpbmVkIHx8IG8uZGVmZXJVbnRpbChyZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIChzaG91bGRSdW5Ob3cgPyBvcGVyYXRpb25zVG9SdW5Ob3cgOiByZW1haW5pbmcpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnNUb1J1bk5vdykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5VG9QZXJmb3JtKG8pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0LnJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VHJ5ID8gZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pIDogcmVtYWluaW5nLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWN1cnNlKHJlbWFpbmluZywgZmFpbHVyZXMsIChpc051bWJlcih0cmllc0xlZnQpXG4gICAgICAgICAgICAgICAgPyB0cmllc0xlZnQgLSAxXG4gICAgICAgICAgICAgICAgOiBwbGFuLnRyeVVudGlsKHJlYWR5U3RhdGUpID8gcGxhbi5leHRyYVRyaWVzIDogdW5kZWZpbmVkKSksIHBsYW4uaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZhaWx1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsYW4uaGFuZGxlRmFpbHVyZXMoZmFpbHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UocGxhbi5vcGVyYXRpb25zLmZpbHRlcihvID0+IG8uY29uZGl0aW9uKHdpbmRvdykpLCBbXSk7XG59XG5mdW5jdGlvbiB0cnlUb1BlcmZvcm0obykge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG8uZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQgPyB7fSA6IG8uZGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKGRlcGVuZGVuY2llcykubWFwKChba2V5LCBzZWxlY3Rvcl0pID0+ICh7XG4gICAgICAgIGtleSwgc2VsZWN0b3IsIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgIH0pKTtcbiAgICBjb25zdCBtaXNzaW5nRGVwZW5kZW5jaWVzID0gcXVlcnlSZXN1bHRzLmZpbHRlcih4ID0+IGlzTnVsbCh4LmVsZW1lbnQpKTtcbiAgICBpZiAobWlzc2luZ0RlcGVuZGVuY2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogMCwgZGVwZW5kZW5jaWVzOiBtaXNzaW5nRGVwZW5kZW5jaWVzIH07XG4gICAgfVxuICAgIGNvbnN0IGUgPSBxdWVyeVJlc3VsdHMucmVkdWNlKChhY2MsIHgpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY2MsIHgua2V5LCB7IHZhbHVlOiB4LmVsZW1lbnQgfSksIHt9KTtcbiAgICByZXR1cm4gZnJvbUFjdGlvblJlc3VsdChvLmFjdGlvbihlKSk7XG59XG5mdW5jdGlvbiBmcm9tQWN0aW9uUmVzdWx0KHIpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcocikgPyB7IHJlYXNvbjogMSwgbWVzc2FnZTogciB9IDogU1VDQ0VTUztcbn1cbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpcHRhYmxlKGhhbmRsZXIpIHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7IH0sXG4gICAgICAgIHVuc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7IH0sXG4gICAgICAgIGhhbmRsZXI6IChzdW1tYXJ5LCBwcmVmZXJlbmNlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZiA9PiBmKHN1bW1hcnkucHJlZmVyZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nZ2luZ1Jlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gc3VtbWFyeS5yZXNwb25zZTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nICgke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnNhdmVkKX0pIHdhcyBpbnZhbGlkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYENvdWxkIG5vdCBzZXQgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGl0IHdhcyBpbnZhbGlkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBoYWQgdGhlIHdyb25nIHR5cGUuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGNvdWxkIG5vdCBiZSBwYXJzZWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN3aXRjaCAoc3VtbWFyeS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHJlYWQgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLiBVc2luZyB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucHJlZmVyZW5jZS5kZWZhdWx0KX0uYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3Qgc2F2ZSB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShzdW1tYXJ5LmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYXNzZXJ0VW5yZWFjaGFibGUocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcFJlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBfKSB7XG4gICAgcmV0dXJuIHN1bW1hcnkucmVzcG9uc2U7XG59XG5mdW5jdGlvbiBhc3NlcnRVbnJlYWNoYWJsZSh4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0VW5yZWFjaGFibGU6IFwiICsgeCk7XG59XG4iLCJjb25zdCBNQVRDSF9BTEwgPSBcImFsbFwiO1xuY29uc3QgTUFUQ0hfTk9ORSA9IFwibm90IGFsbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2hlZXQoc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydChzdHlsZXNoZWV0cykge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlc2hlZXRzKS5mb3JFYWNoKChbXywgc2hlZXRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBpZiAoc2hlZXQuaWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHN0eWxlLmlkID0gc2hlZXQuaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc2hlZXQuY3NzO1xuICAgICAgICBzdHlsZS5tZWRpYSA9IHNoZWV0LmNvbmRpdGlvbih3aW5kb3cpID8gTUFUQ0hfQUxMIDogTUFUQ0hfTk9ORTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5jb25zdCBzZXRNZWRpYVF1ZXJ5ID0gKG0pID0+IChzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMuaWQpO1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBlbmFibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX0FMTCk7XG5leHBvcnQgY29uc3QgZGlzYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfTk9ORSk7XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5leHBvcnQgZnVuY3Rpb24gcnVuKHVzZXJzY3JpcHQpIHtcbiAgICBsb2cuc2V0UHJlZml4KGBbJHt1c2Vyc2NyaXB0Lm5hbWV9XWApO1xuICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUodXNlcnNjcmlwdC5pZCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYEl0IGxvb2tzIGFzIHRob3VnaCAke3VzZXJzY3JpcHQubmFtZX0gaGFzIGFscmVhZHkgcnVuIChiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgXCIke2F0dHJ9XCIgd2FzIGZvdW5kIG9uIDxoZWFkPikuIFN0b3BwaW5nLmApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBcIlwiKTtcbiAgICAgICAgdXNlcnNjcmlwdC5pbml0aWFsQWN0aW9uKCk7XG4gICAgICAgIHN0eWxlc2hlZXRzLmluc2VydCh1c2Vyc2NyaXB0LnN0eWxlc2hlZXRzKTtcbiAgICAgICAgb3BlcmF0aW9ucy5ydW4odXNlcnNjcmlwdC5vcGVyYXRpb25zUGxhbik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGlkKSB7XG4gICAgcmV0dXJuIFwiZGF0YS1cIiArIGlkICsgXCItaGFzLXJ1blwiO1xufVxuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19JTlRFUlZBTCA9IDIwMDsgLy8gbXNcbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0VYVFJBX1RSSUVTID0gMztcbiIsImNvbnN0IGFyciA9IEFycmF5LmZyb207XG5cbmNvbnN0IGV4dHJhY3RMaW5rZWRUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB0bXBOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgYXJyKHRtcE5vZGUucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goXG4gICAgICAgIChlbCkgPT4gKGVsLmlubmVyVGV4dCA9IGBbJHtlbC5pbm5lclRleHR9XSgke2VsLmhyZWZ9KWApXG4gICAgKTtcbiAgICByZXR1cm4gdG1wTm9kZS5pbm5lclRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYWJsZUFzSnNvbih0YWJsZTogSFRNTFRhYmxlRWxlbWVudCk6IG9iamVjdCB7XG4gICAgLy8gSWRlYWxseSBmaXJzdCBjaGVjayBpZiB0YWJsZSBpcyBcInJlZ3VsYXJcIiBha2EgaGFzIGVxdWFsIG51bWJlciBvZiB0aCB0byB0ZC90clxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKHRhYmxlLnRIZWFkICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMgPSBhcnIodGFibGUudEhlYWQucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5mbGF0TWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VHZm1UYWJsZSh0YWJsZTogSFRNTFRhYmxlRWxlbWVudCkge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICApO1xuICAgIHJldHVybiBhcnIodGFibGUudEJvZGllcykubWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGh0bWxUcmVlU2VsZWN0aW9uKCkge1xuICAvLyBUT0RPIHNlbGVjdCB2aWEga2V5Ym9hcmQ/XG4gIC8vIE5vIG5lZWQgdG8gd2FpdCBmb3IgYSAnRE9NQ29udGVudExvYWRlZCcgZXZlbnQgc2luY2UgdGhlIG1hbmlmZXN0XG4gIC8vIHNwZWNpZmllczpcbiAgLy9cbiAgLy8gICBcInJ1bl9hdFwiOiBcImRvY3VtZW50X2VuZFwiXG4gIC8vXG5cbiAgbGV0IGNsaWNrYWJsZSA9IFtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIiksXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltyb2xlPWJ1dHRvbl1cIiksXG4gIF07XG4gIGNvbnN0IGlmcmFtZU92ZXJsYXlzOiB7XG4gICAgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICBvdmVybGF5OiBIVE1MRGl2RWxlbWVudDtcbiAgfVtdID0gW107XG5cbiAgbGV0IG92ZXJIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcblxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpKSB7XG4gICAgICBpZiAodGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgbGV0IGlmcmFtZSA9IGlmcmFtZU92ZXJsYXlzW3BhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCldLmlmcmFtZTtcbiAgICAgICAgaWZyYW1lLmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiZmFpbGVkIHRvIGZpbmQgaWZyYW1lXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG4gIGxldCBvdXRIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGxldCBjbGlja0hhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICBkaXNhYmxlKCk7XG5cbiAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIikpIHtcbiAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgICB0YXJnZXQgPSBpZnJhbWVPdmVybGF5c1twYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApXS5pZnJhbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJmYWlsZWQgdG8gZmluZCBpZnJhbWVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETyBpbnN0ZWFkIG9mIHJlbW92aW5nIHRhcmdldCwgcmV0dXJuIGl0IChvciBwb3NzaWJseSBtYW55KVxuICAgIHRhcmdldC5yZW1vdmUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGxldCBlbmFibGUgPSAoKSA9PiB7XG4gICAgLy8gb3ZlcnJpZGUgY2xpY2sgaGFuZGxlcnMgb24gYW55IGNsaWNrYWJsZSBlbGVtZW50XG4gICAgY2xpY2thYmxlLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGNbaV0ub25jbGlja0JhY2t1cCA9IGNbaV0ub25jbGljaztcbiAgICAgICAgY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBpZnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKTtcblxuICAgIGlmcmFtZXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSBpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IG9mZnNldFggPSBpZnJhbWVDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIGxldCBvZmZzZXRZID0gaWZyYW1lQ2xpZW50UmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpO1xuICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgICAgIG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2lmcmFtZUNsaWVudFJlY3Qud2lkdGh9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtpZnJhbWVDbGllbnRSZWN0LmhlaWdodH1weGA7XG5cbiAgICAgIG92ZXJsYXkuZGF0YXNldC5pbmRleCA9IGAke2lmcmFtZU92ZXJsYXlzLmxlbmd0aH1gO1xuXG4gICAgICBpZnJhbWVPdmVybGF5cy5wdXNoKHtcbiAgICAgICAgaWZyYW1lOiBpLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb3ZlckhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvdXRIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyLCB0cnVlKTtcbiAgfTtcblxuICBsZXQgZGlzYWJsZSA9ICgpID0+IHtcbiAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY1tpXS5vbmNsaWNrQmFja3VwKTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBkZWxldGUgY1tpXS5vbmNsaWNrQmFja3VwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWZyYW1lT3ZlcmxheXMuZm9yRWFjaCgobykgPT4gby5vdmVybGF5LnJlbW92ZSgpKTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3JcIik7XG5cbiAgICAvLyBjbGVhbiBhbnkgb3JwaGFuZWQgaG92ZXIgYXBwbGllZCBjbGFzc1xuICAgIGxldCBvcnBoYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgaWYgKG9ycGhhbiAhPT0gbnVsbCkge1xuICAgICAgb3JwaGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb3ZlckhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvdXRIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyLCB0cnVlKTtcbiAgfTtcblxuICBsZXQga2V5SGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuICB9O1xuXG4gIGxldCB1cGRhdGVPdmVybGF5UG9zaXRpb25zID0gKF9lOiBFdmVudCkgPT4ge1xuICAgIGlmcmFtZU92ZXJsYXlzLmZvckVhY2goKG8pID0+IHtcbiAgICAgIGxldCBpZnJhbWUgPSBvLmlmcmFtZTtcbiAgICAgIGxldCBpZnJhbWVDbGllbnRSZWN0ID0gaWZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IG92ZXJsYXkgPSBvLm92ZXJsYXk7XG4gICAgICBsZXQgb2Zmc2V0WCA9IGlmcmFtZUNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgbGV0IG9mZnNldFkgPSBpZnJhbWVDbGllbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGA7XG4gICAgfSk7XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gICAgY2xlYW51cCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBhZGRUb0NsaXBib2FyZCA9IChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGVybWlzc2lvbk5hbWUgPSBcImNsaXBib2FyZC13cml0ZVwiIGFzIFBlcm1pc3Npb25OYW1lO1xuICByZXR1cm4gbmF2aWdhdG9yLnBlcm1pc3Npb25zXG4gICAgLnF1ZXJ5KHsgbmFtZTogcGVybWlzc2lvbk5hbWUgfSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnN0YXRlID09IFwiZ3JhbnRlZFwiIHx8IHJlc3VsdC5zdGF0ZSA9PSBcInByb21wdFwiKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb250ZW50KS50aGVuKCgpID0+IHt9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBcIlBlcm1pc3Npb24gZm9yIGNsaXBib2FyZC13cml0ZSB3YXMgbm90IG9idGFpbmVkIFwiICsgcmVzdWx0LnN0YXRlXG4gICAgICApO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IHNpYmxpbmdzID0gW107XG4gIGxldCBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICBpZiAoIXNpYmxpbmcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyBhcyBIVE1MRWxlbWVudCk7XG4gICAgfVxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBzaWJsaW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRCdG5Ub0VsZW1lbnRzID0gPFogZXh0ZW5kcyBIVE1MRWxlbWVudD4oXG4gIGVsZW1lbnRzOiBOb2RlTGlzdE9mPFo+LFxuICBjbGlja0hhbmRsZXI6IChlOiBaLCBhOiBFdmVudCkgPT4gdm9pZCxcbiAgbW9kaWZ5QnRuOiAoYjogSFRNTEVsZW1lbnQpID0+IHZvaWRcbik6IEhUTUxFbGVtZW50W10gPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChjb2RlQmxvY2spID0+IHtcbiAgICBjb2RlQmxvY2suY2xhc3NMaXN0LmFkZChcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldFwiKTtcbiAgICBjb2RlQmxvY2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiamFja3MtZGV2LWhlbHBlcnMtb3V0ZXItd3JhcFwiID4ke2NvZGVCbG9jay5pbm5lckhUTUx9PC9zcGFuPmA7XG4gICAgY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvcHlCdG4uY2xhc3NMaXN0LmFkZChcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldFwiKTtcbiAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRtcENvZGVCbG9jayA9IGNvZGVCbG9jay5jbG9uZU5vZGUodHJ1ZSkgYXMgWjtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdG1wQ29kZUJsb2NrLmNoaWxkcmVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGRDb21wb25lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHRtcENvZGVCbG9jay5yZW1vdmVDaGlsZChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNsaWNrSGFuZGxlcih0bXBDb2RlQmxvY2sgYXMgWiwgZXZlbnQpO1xuICAgIH0pO1xuICAgIG1vZGlmeUJ0bihjb3B5QnRuKTtcbiAgICBjb2RlQmxvY2suYXBwZW5kQ2hpbGQoY29weUJ0bik7XG4gICAgcmV0dXJuIGNvcHlCdG47XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGxFc01vZHVsZShtb2R1bGVVcmw6IHN0cmluZykge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm1vZHVsZVwiKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBtb2R1bGVVcmwpO1xuICBjb25zdCBoZWFkID1cbiAgICBkb2N1bWVudC5oZWFkIHx8XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdIHx8XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQubGFzdENoaWxkKTtcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwiQHR5cGVkL2NvbXBvc2VcIjtcbmltcG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgdXNlcnNjcmlwdGVyIH0gZnJvbSBcInVzZXJzY3JpcHRlclwiO1xuXG5pbXBvcnQgKiBhcyBDT05GSUcgZnJvbSBcIn5zcmMvY29uZmlnXCI7XG5pbXBvcnQgT1BFUkFUSU9OUyBmcm9tIFwifnNyYy9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBTSVRFIGZyb20gXCJ+c3JjL3NpdGVcIjtcbmltcG9ydCBTVFlMRVNIRUVUUyBmcm9tIFwifnNyYy9zdHlsZXNoZWV0c1wiO1xuaW1wb3J0IFUgZnJvbSBcIn5zcmMvdXNlcnNjcmlwdFwiO1xuXG5jb25zdCBkZXNjcmliZUZhaWx1cmUgPSBlcnJvcnMuZmFpbHVyZURlc2NyaWJlcih7XG4gICAgc2l0ZU5hbWU6IFNJVEUuTkFNRSxcbiAgICBleHRlbnNpb25OYW1lOiBVLm5hbWUsXG4gICAgbG9jYXRpb246IGRvY3VtZW50LmxvY2F0aW9uLFxufSk7XG5cbnVzZXJzY3JpcHRlci5ydW4oe1xuICAgIGlkOiBVLmlkLFxuICAgIG5hbWU6IFUubmFtZSxcbiAgICBpbml0aWFsQWN0aW9uOiAoKSA9PiBsb2cubG9nKGAke1UubmFtZX0gJHtVLnZlcnNpb259YCksXG4gICAgc3R5bGVzaGVldHM6IFNUWUxFU0hFRVRTLFxuICAgIG9wZXJhdGlvbnNQbGFuOiB7XG4gICAgICAgIG9wZXJhdGlvbnM6IE9QRVJBVElPTlMsXG4gICAgICAgIGludGVydmFsOiBDT05GSUcuT1BFUkFUSU9OU19JTlRFUlZBTCxcbiAgICAgICAgdHJ5VW50aWw6IGVudmlyb25tZW50LkRPTUNPTlRFTlRMT0FERUQsXG4gICAgICAgIGV4dHJhVHJpZXM6IENPTkZJRy5PUEVSQVRJT05TX0VYVFJBX1RSSUVTLFxuICAgICAgICBoYW5kbGVGYWlsdXJlczogZmFpbHVyZXMgPT4gZmFpbHVyZXMuZm9yRWFjaChjb21wb3NlKGxvZy5lcnJvciwgZGVzY3JpYmVGYWlsdXJlKSksXG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGRlZXBFbnRyaWVzLCBkZWxpbWl0RW50cnkgfSBmcm9tIFwiZGVlcC1lbnRyaWVzXCI7XG5pbXBvcnQgeyBPcGVyYXRpb24sIG9wZXJhdGlvbiB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnNcIjtcbmltcG9ydCB7IGFkZFRvQ2xpcGJvYXJkIH0gZnJvbSBcIi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IHsgZXh0cmFjdFRhYmxlQXNKc29uIH0gZnJvbSBcIi4vaGVscGVycy9leHRyYWN0VGFibGVJbmZvXCI7XG5pbXBvcnQgeyBodG1sVHJlZVNlbGVjdGlvbiB9IGZyb20gXCIuL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb25cIjtcblxuY29uc3QgT1BFUkFUSU9OUzogUmVhZG9ubHlBcnJheTxPcGVyYXRpb248YW55Pj4gPSBbXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIHN1cmZpbmdrZXlzXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuaHRtbFRyZWVTZWxlY3Rpb24gPSBodG1sVHJlZVNlbGVjdGlvbjtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIGhlbHBlciBmdW5jcyBmb3IgZGV2IGNvbnNvbGVcIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmRLZXlEZWVwID0gKG9iajogb2JqZWN0LCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBmbGF0T2JqID0gZGVlcEVudHJpZXMob2JqLCBkZWxpbWl0RW50cnkpO1xuICAgICAgICByZXR1cm4gZmxhdE9iai5maWx0ZXIoKFtrLCBfdmFsdWVdOiBbc3RyaW5nLCB1bmtub3duXSkgPT5cbiAgICAgICAgICBrLmluY2x1ZGVzKHN0cilcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuZmluZEtleURlZXAgPSBmaW5kS2V5RGVlcDtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IHRhYmxlIGFzIGpzb24gdmlhIHJpZ2h0IGNsaWNrXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBsZXQgbWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiBjbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1heWJlVGFibGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghbWVudUFjdGl2ZSAmJiBtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkge1xuICAgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGVKc29uID0gZXh0cmFjdFRhYmxlQXNKc29uKG1heWJlVGFibGUpO1xuICAgICAgICAgICAgYWRkVG9DbGlwYm9hcmQoSlNPTi5zdHJpbmdpZnkodGFibGVKc29uLCBudWxsLCA0KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUFjdGl2ZSAmJiAhKG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSkge1xuICAgICAgICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChcIkNvcHkgdGhpcyB0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBPUEVSQVRJT05TO1xuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5pbXBvcnQgVSBmcm9tIFwiLi91c2Vyc2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQ09ERSA9IFwiY29kZVwiO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFN0eWxlc2hlZXRzLCBzdHlsZXNoZWV0IH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHNcIjtcblxuY29uc3QgU1RZTEVTSEVFVFMgPSB7XG4gIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGNzczogYFxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlci1vdXRlci13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldDpob3ZlciA+IC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQ6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgLFxuICB9KSxcbiAgaHRtbFRyZWVTZWxlY3Rpb25PdmVybGF5OiBzdHlsZXNoZWV0KHtcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBjc3M6IGBcbjpyb290IHtcbiAgLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsOiBcIlwiXG59XG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYSxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBpbnB1dCxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBzZWxlY3QsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYnV0dG9uLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGRpdltyb2xlPWJ1dHRvbl0ge1xuICBjdXJzb3I6IHZhcigtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmwpLCBjcm9zc2hhaXIgIWltcG9ydGFudDtcbn1cblxuLmh0bWwtdHJlZS1zZWxlY3Rpb24ge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IHJnYmEoMjU1LDAsMCwuNSk7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGJhY2tncm91bmQ6XG4gICAgbm8tcmVwZWF0IGNlbnRlci83MCUgdmFyKC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybCksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcbiAgICApO1xufVxuYCxcbiAgfSksXG59IGFzIGNvbnN0O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG5cbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxuY29uc3QgXzogU3R5bGVzaGVldHMgPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcblxuZXhwb3J0IGRlZmF1bHQgU1RZTEVTSEVFVFM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaWQ6IFwiamFja3MtZGV2LWhlbHBlcnNcIixcbiAgICBuYW1lOiBcIkphY2sncyBEZXYgSGVscGVyc1wiLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICBhdXRob3I6IFwiSmFjayBNY0Nvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb2RnZXBvZGdlIG9mIGRldiB1dGlsc1wiLFxuICAgIGhvc3RuYW1lOiBcIipcIixcbiAgICBuYW1lc3BhY2U6IFwiamFja21zY3JpcHRzXCIsXG4gICAgc2l0ZW5hbWU6IFwiZ29vZ2xlLmNvbVwiLFxuICAgIHJ1bkF0OiBcImRvY3VtZW50LWVuZFwiLFxufSBhcyBjb25zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=