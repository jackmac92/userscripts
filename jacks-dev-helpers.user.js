// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2021.3.11.5.3
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

/***/ "./src/helpers/utils.ts":
/*!******************************!*\
  !*** ./src/helpers/utils.ts ***!
  \******************************/
/*! exports provided: addToClipboard, getSiblings, appendBtnToElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToClipboard", function() { return addToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblings", function() { return getSiblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendBtnToElements", function() { return appendBtnToElements; });
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
    return Array.from(elements).map(codeBlock => {
        codeBlock.classList.add('jacks-dev-helpers-interact-target');
        codeBlock.innerHTML = `<span class="jacks-dev-helpers-outer-wrap" >${codeBlock.innerHTML}</span>`;
        const copyBtn = document.createElement('span');
        copyBtn.classList.add('jacks-dev-helpers-interact-widget');
        copyBtn.addEventListener('click', (event) => {
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
/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.ts");
/* harmony import */ var _helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/extractTableInfo */ "./src/helpers/extractTableInfo.ts");




const OPERATIONS = [
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_1__["operation"])({
        description: "Copy table as json via right click",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        action: () => {
            let menuActive = false;
            document.addEventListener("mousemove", function clickListener(event) {
                const maybeTable = event.target;
                if (!menuActive && maybeTable instanceof HTMLTableElement) {
                    GM_registerMenuCommand('Copy this table', () => {
                        const tableJson = Object(_helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_3__["extractTableAsJson"])(maybeTable);
                        Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["addToClipboard"])(JSON.stringify(tableJson, null, 4));
                    });
                }
                else if (menuActive && !(maybeTable instanceof HTMLTableElement)) {
                    GM_unregisterMenuCommand('Copy this table');
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
             `
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGluZXMtdW5saW5lcy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9leHRyYWN0VGFibGVJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztBQ2pDM0I7QUFBZTtJQUNYLEVBQUUsRUFBRSxtQkFBbUI7SUFDdkIsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQixPQUFPLEVBQUUsT0FBTztJQUNoQixNQUFNLEVBQUUsYUFBYTtJQUNyQixXQUFXLEVBQUUseUJBQXlCO0lBQ3RDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsU0FBUyxFQUFFLGNBQWM7SUFDekIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsS0FBSyxFQUFFLGNBQWM7Q0FDZixFQUFDIiwiZmlsZSI6ImphY2tzLWRldi1oZWxwZXJzLnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIF9jb21wb3NlMShhcmd1bWVudHNbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBfY29tcG9zZTIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBfY29tcG9zZTMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIF9jb21wb3NlNChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICBjYXNlIDU6IHJldHVybiBfY29tcG9zZTUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgIH1cbiAgICA7XG59XG5mdW5jdGlvbiBfY29tcG9zZTEoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGYoYSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMihnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UyRm4oYSkge1xuICAgICAgICByZXR1cm4gZyhmKGEpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UzKGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBoKGcoZihhKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTQoaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGkoaChnKGYoYSkpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNShqLCBpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2U1Rm4oYSkge1xuICAgICAgICByZXR1cm4gaihpKGgoZyhmKGEpKSkpKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvc2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVzKHMpIHtcbiAgICByZXR1cm4gcyA9PT0gXCJcIiA/IFtdIDogcy5yZXBsYWNlKC9cXG4kLywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5saW5lcyhscykge1xuICAgIHJldHVybiBscy5tYXAobGluZSA9PiBsaW5lICsgXCJcXG5cIikuam9pbihcIlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mQm9vbGVhbnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHRydWUpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk51bWJlcnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKDEpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN0cmluZ3MoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFwiXCIpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN5bWJvbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFN5bWJvbCgpKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdWxscyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UobnVsbCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mVW5kZWZpbmVkcyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UodW5kZWZpbmVkKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZQcmltaXRpdmVzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNQcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk9iamVjdHMoeCkge1xuICAgIHJldHVybiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc05vblByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mKHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiBpcyhBcnJheSkoeHMpICYmIHhzLmV2ZXJ5KGlzKHR5cGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeCkgPT4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXkuanMubWFwIiwiZXhwb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UsIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCB7IGlzQXJyYXlPZkJvb2xlYW5zLCBpc0FycmF5T2ZOdW1iZXJzLCBpc0FycmF5T2ZTdHJpbmdzLCBpc0FycmF5T2ZTeW1ib2xzLCBpc0FycmF5T2ZOdWxscywgaXNBcnJheU9mVW5kZWZpbmVkcywgaXNBcnJheU9mUHJpbWl0aXZlcywgaXNBcnJheU9mT2JqZWN0cywgaXNBcnJheU9mLCBpc0FycmF5T2ZMaWtlLCB9IGZyb20gXCIuL2FycmF5XCI7XG5leHBvcnQgeyBvbmx5Qm9vbGVhbnMsIG9ubHlOdW1iZXJzLCBvbmx5U3RyaW5ncywgb25seVN5bWJvbHMsIG9ubHlOdWxscywgb25seVVuZGVmaW5lZHMsIG9ubHlQcmltaXRpdmVzLCBvbmx5T2JqZWN0cywgb25seSwgb25seUxpa2UsIH0gZnJvbSBcIi4vb25seVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgVFlQRV9HVUFSRFNfUFJJTUlUSVZFID0gW2lzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZF07XG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwibnVtYmVyXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4KSB7XG4gICAgcmV0dXJuIHggPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoeCkge1xuICAgIHJldHVybiBUWVBFX0dVQVJEU19QUklNSVRJVkUuc29tZShmID0+IGYoeCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHgpO1xufVxuZnVuY3Rpb24gbmFtZWRGdW5jdGlvbihuYW1lLCBmdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUsIHdyaXRhYmxlOiBmYWxzZSB9KTtcbn1cbmZ1bmN0aW9uIG5hbWVkVHlwZUd1YXJkKGNyZWF0b3IsIHR5cGUsIHR5cGVHdWFyZCkge1xuICAgIHJldHVybiBuYW1lZEZ1bmN0aW9uKGAke2NyZWF0b3IubmFtZX0oJHt0eXBlLm5hbWV9KWAsIHR5cGVHdWFyZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXModHlwZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gKF8pID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZWRUeXBlR3VhcmQoaXMsIHR5cGUsICh4KSA9PiB4IGluc3RhbmNlb2YgdHlwZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMaWtlKHJlZmVyZW5jZSkge1xuICAgIGZvciAoY29uc3QgZiBvZiBUWVBFX0dVQVJEU19QUklNSVRJVkUpIHtcbiAgICAgICAgaWYgKGYocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuICh4KSA9PiBmKHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpcyhBcnJheSkocmVmZXJlbmNlKSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VBc0FycmF5ID0gcmVmZXJlbmNlO1xuICAgICAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiAocmVmZXJlbmNlQXNBcnJheS5sZW5ndGggPiAwID8geC5ldmVyeShpc0xpa2UocmVmZXJlbmNlQXNBcnJheVswXSkpIDogdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICByZXR1cm4gKHgpID0+ICghW3VuZGVmaW5lZCwgbnVsbF0uaW5jbHVkZXMoeClcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmZXJlbmNlKS5ldmVyeShrID0+IGlzTGlrZShyZWZlcmVuY2Vba10pKHhba10pKSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gaXMocmVmZXJlbmNlLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpc0xpa2UubmFtZSArIGAgY2Fubm90IHVzZSB0aGlzIG9iamVjdCBhcyByZWZlcmVuY2UgYmVjYXVzZSBpdCBoYXMgbm8gY29uc3RydWN0b3I6IGAgKyBKU09OLnN0cmluZ2lmeShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvbmx5Qm9vbGVhbnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzQm9vbGVhbik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bWJlcnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTnVtYmVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3RyaW5ncyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlTeW1ib2xzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1N5bWJvbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bGxzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlVbmRlZmluZWRzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1VuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVByaW1pdGl2ZXMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5T2JqZWN0cyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHkodHlwZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seUxpa2UocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICh4cykgPT4geHMuZmlsdGVyKGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ubHkuanMubWFwIiwiZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICgpID0+IHRydWU7XG5leHBvcnQgY29uc3QgTkVWRVIgPSAoKSA9PiBmYWxzZTtcbmV4cG9ydCBjb25zdCBET01DT05URU5UTE9BREVEID0gKHN0YXRlKSA9PiBzdGF0ZSAhPT0gXCJsb2FkaW5nXCI7XG5leHBvcnQgY29uc3QgTE9BRCA9IChzdGF0ZSkgPT4gc3RhdGUgPT09IFwiY29tcGxldGVcIjtcbiIsImltcG9ydCB7IHVubGluZXMgfSBmcm9tIFwibGluZXMtdW5saW5lc1wiO1xuY29uc3QgSU5ERU5UQVRJT04gPSBcIiAgXCI7XG5mdW5jdGlvbiBmb3JtYXREZXBlbmRlbmN5KGQpIHtcbiAgICByZXR1cm4gSU5ERU5UQVRJT04gKyBkLmtleSArIFwiOiBcIiArIGQuc2VsZWN0b3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwbGFuYXRpb24oZmFpbHVyZSkge1xuICAgIHN3aXRjaCAoZmFpbHVyZS5yZXN1bHQucmVhc29uKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB1bmxpbmVzKFtcbiAgICAgICAgICAgICAgICBgVGhlc2UgZGVwZW5kZW5jaWVzIHdlcmUgbm90IGZvdW5kOmAsXG4gICAgICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICAgICAgdW5saW5lcyhmYWlsdXJlLnJlc3VsdC5kZXBlbmRlbmNpZXMubWFwKGZvcm1hdERlcGVuZGVuY3kpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZSBvcGVyYXRpb24gZmFpbGVkIHdpdGggdGhpcyBlcnJvcjpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIGZhaWx1cmUucmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZURlc2NyaWJlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZhaWx1cmUgPT4gdW5saW5lcyhbXG4gICAgICAgIGBDb3VsZCBub3QgJHtmYWlsdXJlLm9wZXJhdGlvbi5kZXNjcmlwdGlvbn0gb24gdGhpcyBwYWdlOmAsXG4gICAgICAgIGBgLFxuICAgICAgICBJTkRFTlRBVElPTiArIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGBgLFxuICAgICAgICBleHBsYW5hdGlvbihmYWlsdXJlKS50cmltKCksXG4gICAgICAgIGBgLFxuICAgICAgICBgVGhpcyBwcm9ibGVtIG1pZ2h0IGJlIGNhdXNlZCBieSAke2NvbnRleHQuc2l0ZU5hbWV9IGNoYW5naW5nIGl0cyBjb250ZW50L3N0cnVjdHVyZSwgaW4gd2hpY2ggY2FzZSAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0gbmVlZHMgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBpdCdzIHByb2JhYmx5IGEgYnVnIGluICR7Y29udGV4dC5leHRlbnNpb25OYW1lfS5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYElmIHlvdSBmaWxlIGEgYnVnIHJlcG9ydCwgcGxlYXNlIGluY2x1ZGUgdGhpcyBtZXNzYWdlLmAsXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBwcmVmZXJlbmNlcyBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmltcG9ydCAqIGFzIHVzZXJzY3JpcHRlciBmcm9tIFwiLi91c2Vyc2NyaXB0ZXJcIjtcbmV4cG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgb3BlcmF0aW9ucywgcHJlZmVyZW5jZXMsIHN0eWxlc2hlZXRzLCB1c2Vyc2NyaXB0ZXIsIH07XG4iLCJsZXQgcHJlZml4ID0gXCJcIjtcbmxldCBsb2dnZXIgPSBjb25zb2xlO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWZpeChwKSB7XG4gICAgcHJlZml4ID0gcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobCkge1xuICAgIGxvZ2dlciA9IGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nKHN0cikge1xuICAgIGxvZ2dlci5sb2cocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluZm8oc3RyKSB7XG4gICAgbG9nZ2VyLmluZm8ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcoc3RyKSB7XG4gICAgbG9nZ2VyLndhcm4ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0cikge1xuICAgIGxvZ2dlci5lcnJvcihwcmVmaXgsIHN0cik7XG59XG4iLCJpbXBvcnQgeyBpc051bGwsIGlzTnVtYmVyLCBpc1N0cmluZyB9IGZyb20gXCJ0cy10eXBlLWd1YXJkc1wiO1xuY29uc3QgU1VDQ0VTUyA9IHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb24oc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwbGFuKSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzZShvcGVyYXRpb25zLCBmYWlsdXJlcywgdHJpZXNMZWZ0KSB7XG4gICAgICAgIGNvbnN0IGxhc3RUcnkgPSBpc051bWJlcih0cmllc0xlZnQpICYmIHRyaWVzTGVmdCA8PSAwO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zVG9SdW5Ob3cgPSBbXTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gW107XG4gICAgICAgIGNvbnN0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUnVuTm93ID0gby5kZWZlclVudGlsID09PSB1bmRlZmluZWQgfHwgby5kZWZlclVudGlsKHJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgKHNob3VsZFJ1bk5vdyA/IG9wZXJhdGlvbnNUb1J1bk5vdyA6IHJlbWFpbmluZykucHVzaChvKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9uc1RvUnVuTm93KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlUb1BlcmZvcm0obyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBTVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQucmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUcnkgPyBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSkgOiByZW1haW5pbmcucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlY3Vyc2UocmVtYWluaW5nLCBmYWlsdXJlcywgKGlzTnVtYmVyKHRyaWVzTGVmdClcbiAgICAgICAgICAgICAgICA/IHRyaWVzTGVmdCAtIDFcbiAgICAgICAgICAgICAgICA6IHBsYW4udHJ5VW50aWwocmVhZHlTdGF0ZSkgPyBwbGFuLmV4dHJhVHJpZXMgOiB1bmRlZmluZWQpKSwgcGxhbi5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmFpbHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGxhbi5oYW5kbGVGYWlsdXJlcyhmYWlsdXJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShwbGFuLm9wZXJhdGlvbnMuZmlsdGVyKG8gPT4gby5jb25kaXRpb24od2luZG93KSksIFtdKTtcbn1cbmZ1bmN0aW9uIHRyeVRvUGVyZm9ybShvKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gby5kZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogby5kZXBlbmRlbmNpZXM7XG4gICAgY29uc3QgcXVlcnlSZXN1bHRzID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKS5tYXAoKFtrZXksIHNlbGVjdG9yXSkgPT4gKHtcbiAgICAgICAga2V5LCBzZWxlY3RvciwgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksXG4gICAgfSkpO1xuICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBxdWVyeVJlc3VsdHMuZmlsdGVyKHggPT4gaXNOdWxsKHguZWxlbWVudCkpO1xuICAgIGlmIChtaXNzaW5nRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgcmVhc29uOiAwLCBkZXBlbmRlbmNpZXM6IG1pc3NpbmdEZXBlbmRlbmNpZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZSA9IHF1ZXJ5UmVzdWx0cy5yZWR1Y2UoKGFjYywgeCkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywgeC5rZXksIHsgdmFsdWU6IHguZWxlbWVudCB9KSwge30pO1xuICAgIHJldHVybiBmcm9tQWN0aW9uUmVzdWx0KG8uYWN0aW9uKGUpKTtcbn1cbmZ1bmN0aW9uIGZyb21BY3Rpb25SZXN1bHQocikge1xuICAgIHJldHVybiBpc1N0cmluZyhyKSA/IHsgcmVhc29uOiAxLCBtZXNzYWdlOiByIH0gOiBTVUNDRVNTO1xufVxuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmlwdGFibGUoaGFuZGxlcikge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgaGFuZGxlcjogKHN1bW1hcnksIHByZWZlcmVuY2VzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmID0+IGYoc3VtbWFyeS5wcmVmZXJlbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2dnaW5nUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBzdW1tYXJ5LnJlc3BvbnNlO1xuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgKCR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2Uuc2F2ZWQpfSkgd2FzIGludmFsaWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgQ291bGQgbm90IHNldCB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgaXQgd2FzIGludmFsaWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGhhZCB0aGUgd3JvbmcgdHlwZS4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgY291bGQgbm90IGJlIHBhcnNlZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc3dpdGNoIChzdW1tYXJ5LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgcmVhZCBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuIFVzaW5nIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5wcmVmZXJlbmNlLmRlZmF1bHQpfS5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBzYXZlIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5yZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHN1bW1hcnkuYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhc3NlcnRVbnJlYWNoYWJsZShyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub29wUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIF8pIHtcbiAgICByZXR1cm4gc3VtbWFyeS5yZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGFzc2VydFVucmVhY2hhYmxlKHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRVbnJlYWNoYWJsZTogXCIgKyB4KTtcbn1cbiIsImNvbnN0IE1BVENIX0FMTCA9IFwiYWxsXCI7XG5jb25zdCBNQVRDSF9OT05FID0gXCJub3QgYWxsXCI7XG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzaGVldChzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWM7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHN0eWxlc2hlZXRzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzaGVldHMpLmZvckVhY2goKFtfLCBzaGVldF0pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGlmIChzaGVldC5pZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc3R5bGUuaWQgPSBzaGVldC5pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzaGVldC5jc3M7XG4gICAgICAgIHN0eWxlLm1lZGlhID0gc2hlZXQuY29uZGl0aW9uKHdpbmRvdykgPyBNQVRDSF9BTEwgOiBNQVRDSF9OT05FO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbmNvbnN0IHNldE1lZGlhUXVlcnkgPSAobSkgPT4gKHMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocy5pZCk7XG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGVuYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfQUxMKTtcbmV4cG9ydCBjb25zdCBkaXNhYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9OT05FKTtcbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBydW4odXNlcnNjcmlwdCkge1xuICAgIGxvZy5zZXRQcmVmaXgoYFske3VzZXJzY3JpcHQubmFtZX1dYCk7XG4gICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSh1c2Vyc2NyaXB0LmlkKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBsb2cud2FybmluZyhgSXQgbG9va3MgYXMgdGhvdWdoICR7dXNlcnNjcmlwdC5uYW1lfSBoYXMgYWxyZWFkeSBydW4gKGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBcIiR7YXR0cn1cIiB3YXMgZm91bmQgb24gPGhlYWQ+KS4gU3RvcHBpbmcuYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIFwiXCIpO1xuICAgICAgICB1c2Vyc2NyaXB0LmluaXRpYWxBY3Rpb24oKTtcbiAgICAgICAgc3R5bGVzaGVldHMuaW5zZXJ0KHVzZXJzY3JpcHQuc3R5bGVzaGVldHMpO1xuICAgICAgICBvcGVyYXRpb25zLnJ1bih1c2Vyc2NyaXB0Lm9wZXJhdGlvbnNQbGFuKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoaWQpIHtcbiAgICByZXR1cm4gXCJkYXRhLVwiICsgaWQgKyBcIi1oYXMtcnVuXCI7XG59XG4iLCIvLyBUaGlzIGZpbGUgY2Fubm90IGNvbnRhaW4gV2VicGFjay1yZXNvbHZlZCBpbXBvcnRzIChlLmcuIFwifnNyYy9mb29cIikuXG5cbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0lOVEVSVkFMID0gMjAwOyAvLyBtc1xuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfRVhUUkFfVFJJRVMgPSAzO1xuIiwiY29uc3QgYXJyID0gQXJyYXkuZnJvbTtcblxuY29uc3QgZXh0cmFjdExpbmtlZFRleHQgPSAobm9kZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHRtcE5vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBhcnIodG1wTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChcbiAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJUZXh0ID0gYFske2VsLmlubmVyVGV4dH1dKCR7ZWwuaHJlZn0pYClcbiAgICApO1xuICAgIHJldHVybiB0bXBOb2RlLmlubmVyVGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRhYmxlQXNKc29uKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogb2JqZWN0IHtcbiAgICAvLyBJZGVhbGx5IGZpcnN0IGNoZWNrIGlmIHRhYmxlIGlzIFwicmVndWxhclwiIGFrYSBoYXMgZXF1YWwgbnVtYmVyIG9mIHRoIHRvIHRkL3RyXG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAodGFibGUudEhlYWQgIT09IG51bGwpIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS50SGVhZC5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gYXJyKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyKHRhYmxlLnRCb2RpZXMpLmZsYXRNYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUdmbVRhYmxlKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICk7XG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5tYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG4iLCJleHBvcnQgY29uc3QgYWRkVG9DbGlwYm9hcmQgPSAoY29udGVudDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBlcm1pc3Npb25OYW1lID0gXCJjbGlwYm9hcmQtd3JpdGVcIiBhcyBQZXJtaXNzaW9uTmFtZTtcbiAgcmV0dXJuIG5hdmlnYXRvci5wZXJtaXNzaW9uc1xuICAgIC5xdWVyeSh7IG5hbWU6IHBlcm1pc3Npb25OYW1lIH0pXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5zdGF0ZSA9PSBcImdyYW50ZWRcIiB8fCByZXN1bHQuc3RhdGUgPT0gXCJwcm9tcHRcIikge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29udGVudCkudGhlbigoKSA9PiB7IH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIFwiUGVybWlzc2lvbiBmb3IgY2xpcGJvYXJkLXdyaXRlIHdhcyBub3Qgb2J0YWluZWQgXCIgKyByZXN1bHQuc3RhdGVcbiAgICAgICk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZWxlbTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgY29uc3Qgc2libGluZ3MgPSBbXTtcbiAgbGV0IHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkXG5cbiAgaWYgKCFzaWJsaW5nKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyBhcyBIVE1MRWxlbWVudCk7XG4gICAgfVxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBzaWJsaW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRCdG5Ub0VsZW1lbnRzID0gPFogZXh0ZW5kcyBIVE1MRWxlbWVudD4oZWxlbWVudHM6IE5vZGVMaXN0T2Y8Wj4sIGNsaWNrSGFuZGxlcjogKGU6IFosIGE6IEV2ZW50KSA9PiB2b2lkLCBtb2RpZnlCdG46IChiOiBIVE1MRWxlbWVudCkgPT4gdm9pZCk6IEhUTUxFbGVtZW50W10gPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKGNvZGVCbG9jayA9PiB7XG4gICAgY29kZUJsb2NrLmNsYXNzTGlzdC5hZGQoJ2phY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldCcpXG4gICAgY29kZUJsb2NrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImphY2tzLWRldi1oZWxwZXJzLW91dGVyLXdyYXBcIiA+JHtjb2RlQmxvY2suaW5uZXJIVE1MfTwvc3Bhbj5gXG4gICAgY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvcHlCdG4uY2xhc3NMaXN0LmFkZCgnamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0JylcbiAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0bXBDb2RlQmxvY2sgPSBjb2RlQmxvY2suY2xvbmVOb2RlKHRydWUpIGFzIFo7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRtcENvZGVCbG9jay5jaGlsZHJlblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpKSB7XG4gICAgICAgICAgdG1wQ29kZUJsb2NrLnJlbW92ZUNoaWxkKGNoaWxkQ29tcG9uZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjbGlja0hhbmRsZXIodG1wQ29kZUJsb2NrIGFzIFosIGV2ZW50KVxuICAgIH0pXG4gICAgbW9kaWZ5QnRuKGNvcHlCdG4pXG4gICAgY29kZUJsb2NrLmFwcGVuZENoaWxkKGNvcHlCdG4pXG4gICAgcmV0dXJuIGNvcHlCdG5cbiAgfSlcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwiQHR5cGVkL2NvbXBvc2VcIjtcbmltcG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgdXNlcnNjcmlwdGVyIH0gZnJvbSBcInVzZXJzY3JpcHRlclwiO1xuXG5pbXBvcnQgKiBhcyBDT05GSUcgZnJvbSBcIn5zcmMvY29uZmlnXCI7XG5pbXBvcnQgT1BFUkFUSU9OUyBmcm9tIFwifnNyYy9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBTSVRFIGZyb20gXCJ+c3JjL3NpdGVcIjtcbmltcG9ydCBTVFlMRVNIRUVUUyBmcm9tIFwifnNyYy9zdHlsZXNoZWV0c1wiO1xuaW1wb3J0IFUgZnJvbSBcIn5zcmMvdXNlcnNjcmlwdFwiO1xuXG5jb25zdCBkZXNjcmliZUZhaWx1cmUgPSBlcnJvcnMuZmFpbHVyZURlc2NyaWJlcih7XG4gICAgc2l0ZU5hbWU6IFNJVEUuTkFNRSxcbiAgICBleHRlbnNpb25OYW1lOiBVLm5hbWUsXG4gICAgbG9jYXRpb246IGRvY3VtZW50LmxvY2F0aW9uLFxufSk7XG5cbnVzZXJzY3JpcHRlci5ydW4oe1xuICAgIGlkOiBVLmlkLFxuICAgIG5hbWU6IFUubmFtZSxcbiAgICBpbml0aWFsQWN0aW9uOiAoKSA9PiBsb2cubG9nKGAke1UubmFtZX0gJHtVLnZlcnNpb259YCksXG4gICAgc3R5bGVzaGVldHM6IFNUWUxFU0hFRVRTLFxuICAgIG9wZXJhdGlvbnNQbGFuOiB7XG4gICAgICAgIG9wZXJhdGlvbnM6IE9QRVJBVElPTlMsXG4gICAgICAgIGludGVydmFsOiBDT05GSUcuT1BFUkFUSU9OU19JTlRFUlZBTCxcbiAgICAgICAgdHJ5VW50aWw6IGVudmlyb25tZW50LkRPTUNPTlRFTlRMT0FERUQsXG4gICAgICAgIGV4dHJhVHJpZXM6IENPTkZJRy5PUEVSQVRJT05TX0VYVFJBX1RSSUVTLFxuICAgICAgICBoYW5kbGVGYWlsdXJlczogZmFpbHVyZXMgPT4gZmFpbHVyZXMuZm9yRWFjaChjb21wb3NlKGxvZy5lcnJvciwgZGVzY3JpYmVGYWlsdXJlKSksXG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IE9wZXJhdGlvbiwgb3BlcmF0aW9uIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvb3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgYWRkVG9DbGlwYm9hcmQgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWxzXCI7XG5pbXBvcnQgeyBleHRyYWN0VGFibGVBc0pzb24gfSBmcm9tIFwiLi9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm9cIjtcblxuY29uc3QgT1BFUkFUSU9OUzogUmVhZG9ubHlBcnJheTxPcGVyYXRpb248YW55Pj4gPSBbXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiQ29weSB0YWJsZSBhcyBqc29uIHZpYSByaWdodCBjbGlja1wiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICBsZXQgbWVudUFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gY2xpY2tMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgICAgY29uc3QgbWF5YmVUYWJsZSA9IGV2ZW50LnRhcmdldFxuICAgICAgICAgICAgaWYgKCFtZW51QWN0aXZlICYmIG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZCgnQ29weSB0aGlzIHRhYmxlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUpzb24gPSBleHRyYWN0VGFibGVBc0pzb24obWF5YmVUYWJsZSlcbiAgICAgICAgICAgICAgICAgICAgYWRkVG9DbGlwYm9hcmQoSlNPTi5zdHJpbmdpZnkodGFibGVKc29uLCBudWxsLCA0KSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51QWN0aXZlICYmICEobWF5YmVUYWJsZSBpbnN0YW5jZW9mIEhUTUxUYWJsZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgR01fdW5yZWdpc3Rlck1lbnVDb21tYW5kKCdDb3B5IHRoaXMgdGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gIH0pLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgT1BFUkFUSU9OUztcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cblxuaW1wb3J0IFUgZnJvbSBcIi4vdXNlcnNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgTkFNRSA9IFUuc2l0ZW5hbWU7XG5leHBvcnQgY29uc3QgSE9TVE5BTUUgPSBVLmhvc3RuYW1lO1xuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX0NPREUgPSBcImNvZGVcIjtcbiIsImltcG9ydCB7IEFMV0FZUyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBTdHlsZXNoZWV0cywgc3R5bGVzaGVldCB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL3N0eWxlc2hlZXRzXCI7XG5cbmNvbnN0IFNUWUxFU0hFRVRTID0ge1xuICAgIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgY3NzOiBgXG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVyLW91dGVyLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0OmhvdmVyID4gLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldDpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGBcbiAgICB9KSxcbn0gYXMgY29uc3Q7XG4vLyA8c3BhbiBjbGFzcz1cInczLWJhZGdlXCI+OTwvc3Bhbj5cblxuLy8gVGhpcyB0cmljayB1bmNvdmVycyB0eXBlIGVycm9ycyBpbiBTVFlMRVNIRUVUUyB3aGlsZSByZXRhaW5pbmcgdGhlIHN0YXRpYyBrbm93bGVkZ2Ugb2YgaXRzIHByb3BlcnRpZXMgKHNvIHdlIGNhbiBzdGlsbCB3cml0ZSBlLmcuIFNUWUxFU0hFRVRTLmZvbyk6XG5jb25zdCBfOiBTdHlsZXNoZWV0cyA9IFNUWUxFU0hFRVRTOyB2b2lkIF87XG5cbmV4cG9ydCBkZWZhdWx0IFNUWUxFU0hFRVRTO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkOiBcImphY2tzLWRldi1oZWxwZXJzXCIsXG4gICAgbmFtZTogXCJKYWNrJ3MgRGV2IEhlbHBlcnNcIixcbiAgICB2ZXJzaW9uOiBcIjAuMS4wXCIsXG4gICAgYXV0aG9yOiBcIkphY2sgTWNDb3duXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9kZ2Vwb2RnZSBvZiBkZXYgdXRpbHNcIixcbiAgICBob3N0bmFtZTogXCIqXCIsXG4gICAgbmFtZXNwYWNlOiBcImphY2ttc2NyaXB0c1wiLFxuICAgIHNpdGVuYW1lOiBcImdvb2dsZS5jb21cIixcbiAgICBydW5BdDogXCJkb2N1bWVudC1lbmRcIixcbn0gYXMgY29uc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9