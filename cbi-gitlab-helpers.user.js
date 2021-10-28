// ==UserScript==
// @name       Cbi Gitlab Helpers
// @version    0.1.0.2021.10.28.19.21
// @match      *://gitlab.cbinsights.com/*
// @license    GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace  jackmscripts
// @run-at     document-end
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
        key, selector,
        element: document.querySelector(selector),
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
        handleFailures: (failures) => failures.forEach(Object(_typed_compose__WEBPACK_IMPORTED_MODULE_0__["compose"])(userscripter__WEBPACK_IMPORTED_MODULE_1__["log"].error, describeFailure)),
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
/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/lib/operations */ "./node_modules/userscripter/lib/operations.mjs");

const OPERATIONS = [
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_0__["operation"])({
        description: "cbi-ssh helper",
        condition: (win) => win.location.pathname.includes("/jobs/"),
        action: () => {
            console.debug("Starting gitlab cbi-ssh");
            document.addEventListener("readystatechange", (event) => {
                console.debug("readystate change", document.readyState, event);
                if (document.readyState === "complete") {
                    console.debug("running!");
                    const info = document.querySelector("#content-body > div:nth-child(2) > aside > div > div.blocks-container > div:nth-child(3) > p:nth-child(3) > span");
                    if (info === null) {
                        console.error("Didnt find job runner info");
                        return;
                    }
                    //@ts-expect-error
                    const a = info.innerText;
                    const targetIp = a.match(/shell-\w+-(\S+)/)[1];
                    console.debug("Got ip", targetIp);
                    const command = "popupexec";
                    // document
                    // hackydanger to openTerm with command for cbi-ssh
                    const url = new URL("hackydanger://" + command);
                    const params = {
                        targetExecStr: `cbi-ssh ${targetIp}`,
                    };
                    const q = new URLSearchParams(params);
                    url.search = q.toString();
                    const btn = document.createElement("button");
                    btn.innerText = "SSH to box";
                    btn.onclick = () => {
                        console.debug("clicked link");
                        window.location.href = url.toString();
                    };
                    console.debug("Appending link");
                    info.appendChild(btn);
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
/*! exports provided: NAME, HOSTNAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOSTNAME", function() { return HOSTNAME; });
/* harmony import */ var _userscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript */ "./src/userscript.ts");
// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

const NAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].sitename;
const HOSTNAME = _userscript__WEBPACK_IMPORTED_MODULE_0__["default"].hostname;


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
    main: Object(userscripter_lib_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        css: `
            html body {
            }
        `,
    }),
};
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
    id: "cbi-gitlab-helpers",
    name: "Cbi Gitlab Helpers",
    version: "0.1.0",
    hostname: "gitlab.cbinsights.com",
    sitename: "Example.com",
    namespace: "jackmscripts",
    runAt: "document-end",
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2JpLWdpdGxhYi1oZWxwZXJzLnVzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGluZXMtdW5saW5lcy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3BlcmF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2l0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXJzY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IHJldHVybiBfY29tcG9zZTEoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gX2NvbXBvc2UyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gX2NvbXBvc2UzKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBfY29tcG9zZTQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgY2FzZSA1OiByZXR1cm4gX2NvbXBvc2U1KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICB9XG4gICAgO1xufVxuZnVuY3Rpb24gX2NvbXBvc2UxKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTFGbihhKSB7XG4gICAgICAgIHJldHVybiBmKGEpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTIoZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMkZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGcoZihhKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMyhoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaChnKGYoYSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U0KGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBpKGgoZyhmKGEpKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTUoaiwgaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlNUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGooaShoKGcoZihhKSkpKSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2UuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb3NlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBsaW5lcyhzKSB7XG4gICAgcmV0dXJuIHMgPT09IFwiXCIgPyBbXSA6IHMucmVwbGFjZSgvXFxuJC8sIFwiXCIpLnNwbGl0KFwiXFxuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubGluZXMobHMpIHtcbiAgICByZXR1cm4gbHMubWFwKGxpbmUgPT4gbGluZSArIFwiXFxuXCIpLmpvaW4oXCJcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkJvb2xlYW5zKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh0cnVlKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdW1iZXJzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSgxKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmdzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShcIlwiKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTeW1ib2xzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShTeW1ib2woKSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVsbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKG51bGwpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlVuZGVmaW5lZHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHVuZGVmaW5lZCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mUHJpbWl0aXZlcyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZPYmplY3RzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZih0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4gaXMoQXJyYXkpKHhzKSAmJiB4cy5ldmVyeShpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsImV4cG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlLCB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgeyBpc0FycmF5T2ZCb29sZWFucywgaXNBcnJheU9mTnVtYmVycywgaXNBcnJheU9mU3RyaW5ncywgaXNBcnJheU9mU3ltYm9scywgaXNBcnJheU9mTnVsbHMsIGlzQXJyYXlPZlVuZGVmaW5lZHMsIGlzQXJyYXlPZlByaW1pdGl2ZXMsIGlzQXJyYXlPZk9iamVjdHMsIGlzQXJyYXlPZiwgaXNBcnJheU9mTGlrZSwgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgb25seUJvb2xlYW5zLCBvbmx5TnVtYmVycywgb25seVN0cmluZ3MsIG9ubHlTeW1ib2xzLCBvbmx5TnVsbHMsIG9ubHlVbmRlZmluZWRzLCBvbmx5UHJpbWl0aXZlcywgb25seU9iamVjdHMsIG9ubHksIG9ubHlMaWtlLCB9IGZyb20gXCIuL29ubHlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IFRZUEVfR1VBUkRTX1BSSU1JVElWRSA9IFtpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWRdO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm51bWJlclwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gVFlQRV9HVUFSRFNfUFJJTUlUSVZFLnNvbWUoZiA9PiBmKHgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vblByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KTtcbn1cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24obmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XG59XG5mdW5jdGlvbiBuYW1lZFR5cGVHdWFyZChjcmVhdG9yLCB0eXBlLCB0eXBlR3VhcmQpIHtcbiAgICByZXR1cm4gbmFtZWRGdW5jdGlvbihgJHtjcmVhdG9yLm5hbWV9KCR7dHlwZS5uYW1lfSlgLCB0eXBlR3VhcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVkVHlwZUd1YXJkKGlzLCB0eXBlLCAoeCkgPT4geCBpbnN0YW5jZW9mIHR5cGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlrZShyZWZlcmVuY2UpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgVFlQRV9HVUFSRFNfUFJJTUlUSVZFKSB7XG4gICAgICAgIGlmIChmKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoeCkgPT4gZih4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXMoQXJyYXkpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQXNBcnJheSA9IHJlZmVyZW5jZTtcbiAgICAgICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgKHJlZmVyZW5jZUFzQXJyYXkubGVuZ3RoID4gMCA/IHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZUFzQXJyYXlbMF0pKSA6IHRydWUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh4KSA9PiAoIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHgpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZmVyZW5jZSkuZXZlcnkoayA9PiBpc0xpa2UocmVmZXJlbmNlW2tdKSh4W2tdKSkpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzKHJlZmVyZW5jZS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXNMaWtlLm5hbWUgKyBgIGNhbm5vdCB1c2UgdGhpcyBvYmplY3QgYXMgcmVmZXJlbmNlIGJlY2F1c2UgaXQgaGFzIG5vIGNvbnN0cnVjdG9yOiBgICsgSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25seUJvb2xlYW5zKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc0Jvb2xlYW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdW1iZXJzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN0cmluZ3MoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3ltYm9scyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTeW1ib2wpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdWxscyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5kZWZpbmVkcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNVbmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlQcmltaXRpdmVzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU9iamVjdHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5KHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmx5LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBTFdBWVMgPSAoKSA9PiB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gKCkgPT4gZmFsc2U7XG5leHBvcnQgY29uc3QgRE9NQ09OVEVOVExPQURFRCA9IChzdGF0ZSkgPT4gc3RhdGUgIT09IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IExPQUQgPSAoc3RhdGUpID0+IHN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4iLCJpbXBvcnQgeyB1bmxpbmVzIH0gZnJvbSBcImxpbmVzLXVubGluZXNcIjtcbmNvbnN0IElOREVOVEFUSU9OID0gXCIgIFwiO1xuZnVuY3Rpb24gZm9ybWF0RGVwZW5kZW5jeShkKSB7XG4gICAgcmV0dXJuIElOREVOVEFUSU9OICsgZC5rZXkgKyBcIjogXCIgKyBkLnNlbGVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKGZhaWx1cmUpIHtcbiAgICBzd2l0Y2ggKGZhaWx1cmUucmVzdWx0LnJlYXNvbikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZXNlIGRlcGVuZGVuY2llcyB3ZXJlIG5vdCBmb3VuZDpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIHVubGluZXMoZmFpbHVyZS5yZXN1bHQuZGVwZW5kZW5jaWVzLm1hcChmb3JtYXREZXBlbmRlbmN5KSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIGZhaWxlZCB3aXRoIHRoaXMgZXJyb3I6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICBmYWlsdXJlLnJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmVEZXNjcmliZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmYWlsdXJlID0+IHVubGluZXMoW1xuICAgICAgICBgQ291bGQgbm90ICR7ZmFpbHVyZS5vcGVyYXRpb24uZGVzY3JpcHRpb259IG9uIHRoaXMgcGFnZTpgLFxuICAgICAgICBgYCxcbiAgICAgICAgSU5ERU5UQVRJT04gKyBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBgYCxcbiAgICAgICAgZXhwbGFuYXRpb24oZmFpbHVyZSkudHJpbSgpLFxuICAgICAgICBgYCxcbiAgICAgICAgYFRoaXMgcHJvYmxlbSBtaWdodCBiZSBjYXVzZWQgYnkgJHtjb250ZXh0LnNpdGVOYW1lfSBjaGFuZ2luZyBpdHMgY29udGVudC9zdHJ1Y3R1cmUsIGluIHdoaWNoIGNhc2UgJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9IG5lZWRzIHRvIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaXQncyBwcm9iYWJseSBhIGJ1ZyBpbiAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBJZiB5b3UgZmlsZSBhIGJ1ZyByZXBvcnQsIHBsZWFzZSBpbmNsdWRlIHRoaXMgbWVzc2FnZS5gLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIGVycm9ycyBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgcHJlZmVyZW5jZXMgZnJvbSBcIi4vcHJlZmVyZW5jZXNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgKiBhcyB1c2Vyc2NyaXB0ZXIgZnJvbSBcIi4vdXNlcnNjcmlwdGVyXCI7XG5leHBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIG9wZXJhdGlvbnMsIHByZWZlcmVuY2VzLCBzdHlsZXNoZWV0cywgdXNlcnNjcmlwdGVyLCB9O1xuIiwibGV0IHByZWZpeCA9IFwiXCI7XG5sZXQgbG9nZ2VyID0gY29uc29sZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmaXgocCkge1xuICAgIHByZWZpeCA9IHA7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGwpIHtcbiAgICBsb2dnZXIgPSBsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBsb2dnZXIubG9nKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHN0cikge1xuICAgIGxvZ2dlci5pbmZvKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHN0cikge1xuICAgIGxvZ2dlci53YXJuKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdHIpIHtcbiAgICBsb2dnZXIuZXJyb3IocHJlZml4LCBzdHIpO1xufVxuIiwiaW1wb3J0IHsgaXNOdWxsLCBpc051bWJlciwgaXNTdHJpbmcgfSBmcm9tIFwidHMtdHlwZS1ndWFyZHNcIjtcbmNvbnN0IFNVQ0NFU1MgPSB1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGxhbikge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uob3BlcmF0aW9ucywgZmFpbHVyZXMsIHRyaWVzTGVmdCkge1xuICAgICAgICBjb25zdCBsYXN0VHJ5ID0gaXNOdW1iZXIodHJpZXNMZWZ0KSAmJiB0cmllc0xlZnQgPD0gMDtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1RvUnVuTm93ID0gW107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IFtdO1xuICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJ1bk5vdyA9IG8uZGVmZXJVbnRpbCA9PT0gdW5kZWZpbmVkIHx8IG8uZGVmZXJVbnRpbChyZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIChzaG91bGRSdW5Ob3cgPyBvcGVyYXRpb25zVG9SdW5Ob3cgOiByZW1haW5pbmcpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnNUb1J1bk5vdykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5VG9QZXJmb3JtKG8pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0LnJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VHJ5ID8gZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pIDogcmVtYWluaW5nLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWN1cnNlKHJlbWFpbmluZywgZmFpbHVyZXMsIChpc051bWJlcih0cmllc0xlZnQpXG4gICAgICAgICAgICAgICAgPyB0cmllc0xlZnQgLSAxXG4gICAgICAgICAgICAgICAgOiBwbGFuLnRyeVVudGlsKHJlYWR5U3RhdGUpID8gcGxhbi5leHRyYVRyaWVzIDogdW5kZWZpbmVkKSksIHBsYW4uaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZhaWx1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsYW4uaGFuZGxlRmFpbHVyZXMoZmFpbHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UocGxhbi5vcGVyYXRpb25zLmZpbHRlcihvID0+IG8uY29uZGl0aW9uKHdpbmRvdykpLCBbXSk7XG59XG5mdW5jdGlvbiB0cnlUb1BlcmZvcm0obykge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG8uZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQgPyB7fSA6IG8uZGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKGRlcGVuZGVuY2llcykubWFwKChba2V5LCBzZWxlY3Rvcl0pID0+ICh7XG4gICAgICAgIGtleSwgc2VsZWN0b3IsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgIH0pKTtcbiAgICBjb25zdCBtaXNzaW5nRGVwZW5kZW5jaWVzID0gcXVlcnlSZXN1bHRzLmZpbHRlcih4ID0+IGlzTnVsbCh4LmVsZW1lbnQpKTtcbiAgICBpZiAobWlzc2luZ0RlcGVuZGVuY2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogMCwgZGVwZW5kZW5jaWVzOiBtaXNzaW5nRGVwZW5kZW5jaWVzIH07XG4gICAgfVxuICAgIGNvbnN0IGUgPSBxdWVyeVJlc3VsdHMucmVkdWNlKChhY2MsIHgpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY2MsIHgua2V5LCB7IHZhbHVlOiB4LmVsZW1lbnQgfSksIHt9KTtcbiAgICByZXR1cm4gZnJvbUFjdGlvblJlc3VsdChvLmFjdGlvbihlKSk7XG59XG5mdW5jdGlvbiBmcm9tQWN0aW9uUmVzdWx0KHIpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcocikgPyB7IHJlYXNvbjogMSwgbWVzc2FnZTogciB9IDogU1VDQ0VTUztcbn1cbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpcHRhYmxlKGhhbmRsZXIpIHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7IH0sXG4gICAgICAgIHVuc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7IH0sXG4gICAgICAgIGhhbmRsZXI6IChzdW1tYXJ5LCBwcmVmZXJlbmNlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZiA9PiBmKHN1bW1hcnkucHJlZmVyZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nZ2luZ1Jlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gc3VtbWFyeS5yZXNwb25zZTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nICgke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnNhdmVkKX0pIHdhcyBpbnZhbGlkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYENvdWxkIG5vdCBzZXQgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGl0IHdhcyBpbnZhbGlkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBoYWQgdGhlIHdyb25nIHR5cGUuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGNvdWxkIG5vdCBiZSBwYXJzZWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN3aXRjaCAoc3VtbWFyeS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHJlYWQgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLiBVc2luZyB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucHJlZmVyZW5jZS5kZWZhdWx0KX0uYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3Qgc2F2ZSB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShzdW1tYXJ5LmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYXNzZXJ0VW5yZWFjaGFibGUocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcFJlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBfKSB7XG4gICAgcmV0dXJuIHN1bW1hcnkucmVzcG9uc2U7XG59XG5mdW5jdGlvbiBhc3NlcnRVbnJlYWNoYWJsZSh4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0VW5yZWFjaGFibGU6IFwiICsgeCk7XG59XG4iLCJjb25zdCBNQVRDSF9BTEwgPSBcImFsbFwiO1xuY29uc3QgTUFUQ0hfTk9ORSA9IFwibm90IGFsbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2hlZXQoc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydChzdHlsZXNoZWV0cykge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlc2hlZXRzKS5mb3JFYWNoKChbXywgc2hlZXRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBpZiAoc2hlZXQuaWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHN0eWxlLmlkID0gc2hlZXQuaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc2hlZXQuY3NzO1xuICAgICAgICBzdHlsZS5tZWRpYSA9IHNoZWV0LmNvbmRpdGlvbih3aW5kb3cpID8gTUFUQ0hfQUxMIDogTUFUQ0hfTk9ORTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5jb25zdCBzZXRNZWRpYVF1ZXJ5ID0gKG0pID0+IChzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMuaWQpO1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBlbmFibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX0FMTCk7XG5leHBvcnQgY29uc3QgZGlzYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfTk9ORSk7XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5leHBvcnQgZnVuY3Rpb24gcnVuKHVzZXJzY3JpcHQpIHtcbiAgICBsb2cuc2V0UHJlZml4KGBbJHt1c2Vyc2NyaXB0Lm5hbWV9XWApO1xuICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUodXNlcnNjcmlwdC5pZCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYEl0IGxvb2tzIGFzIHRob3VnaCAke3VzZXJzY3JpcHQubmFtZX0gaGFzIGFscmVhZHkgcnVuIChiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgXCIke2F0dHJ9XCIgd2FzIGZvdW5kIG9uIDxoZWFkPikuIFN0b3BwaW5nLmApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBcIlwiKTtcbiAgICAgICAgdXNlcnNjcmlwdC5pbml0aWFsQWN0aW9uKCk7XG4gICAgICAgIHN0eWxlc2hlZXRzLmluc2VydCh1c2Vyc2NyaXB0LnN0eWxlc2hlZXRzKTtcbiAgICAgICAgb3BlcmF0aW9ucy5ydW4odXNlcnNjcmlwdC5vcGVyYXRpb25zUGxhbik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGlkKSB7XG4gICAgcmV0dXJuIFwiZGF0YS1cIiArIGlkICsgXCItaGFzLXJ1blwiO1xufVxuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfSU5URVJWQUwgPSAyMDA7IC8vIG1zXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19FWFRSQV9UUklFUyA9IDM7XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcIkB0eXBlZC9jb21wb3NlXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIHVzZXJzY3JpcHRlciB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXJcIjtcbmltcG9ydCAqIGFzIENPTkZJRyBmcm9tIFwifnNyYy9jb25maWdcIjtcbmltcG9ydCBPUEVSQVRJT05TIGZyb20gXCJ+c3JjL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIFNJVEUgZnJvbSBcIn5zcmMvc2l0ZVwiO1xuaW1wb3J0IFNUWUxFU0hFRVRTIGZyb20gXCJ+c3JjL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgVSBmcm9tIFwifnNyYy91c2Vyc2NyaXB0XCI7XG5jb25zdCBkZXNjcmliZUZhaWx1cmUgPSBlcnJvcnMuZmFpbHVyZURlc2NyaWJlcih7XG4gICAgc2l0ZU5hbWU6IFNJVEUuTkFNRSxcbiAgICBleHRlbnNpb25OYW1lOiBVLm5hbWUsXG4gICAgbG9jYXRpb246IGRvY3VtZW50LmxvY2F0aW9uLFxufSk7XG51c2Vyc2NyaXB0ZXIucnVuKHtcbiAgICBpZDogVS5pZCxcbiAgICBuYW1lOiBVLm5hbWUsXG4gICAgaW5pdGlhbEFjdGlvbjogKCkgPT4gbG9nLmxvZyhgJHtVLm5hbWV9ICR7VS52ZXJzaW9ufWApLFxuICAgIHN0eWxlc2hlZXRzOiBTVFlMRVNIRUVUUyxcbiAgICBvcGVyYXRpb25zUGxhbjoge1xuICAgICAgICBvcGVyYXRpb25zOiBPUEVSQVRJT05TLFxuICAgICAgICBpbnRlcnZhbDogQ09ORklHLk9QRVJBVElPTlNfSU5URVJWQUwsXG4gICAgICAgIHRyeVVudGlsOiBlbnZpcm9ubWVudC5ET01DT05URU5UTE9BREVELFxuICAgICAgICBleHRyYVRyaWVzOiBDT05GSUcuT1BFUkFUSU9OU19FWFRSQV9UUklFUyxcbiAgICAgICAgaGFuZGxlRmFpbHVyZXM6IChmYWlsdXJlcykgPT4gZmFpbHVyZXMuZm9yRWFjaChjb21wb3NlKGxvZy5lcnJvciwgZGVzY3JpYmVGYWlsdXJlKSksXG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgb3BlcmF0aW9uIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvb3BlcmF0aW9uc1wiO1xuY29uc3QgT1BFUkFUSU9OUyA9IFtcbiAgICBvcGVyYXRpb24oe1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJjYmktc3NoIGhlbHBlclwiLFxuICAgICAgICBjb25kaXRpb246ICh3aW4pID0+IHdpbi5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhcIi9qb2JzL1wiKSxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU3RhcnRpbmcgZ2l0bGFiIGNiaS1zc2hcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwicmVhZHlzdGF0ZSBjaGFuZ2VcIiwgZG9jdW1lbnQucmVhZHlTdGF0ZSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcInJ1bm5pbmchXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50LWJvZHkgPiBkaXY6bnRoLWNoaWxkKDIpID4gYXNpZGUgPiBkaXYgPiBkaXYuYmxvY2tzLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMykgPiBwOm50aC1jaGlsZCgzKSA+IHNwYW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmZvID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRGlkbnQgZmluZCBqb2IgcnVubmVyIGluZm9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBpbmZvLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SXAgPSBhLm1hdGNoKC9zaGVsbC1cXHcrLShcXFMrKS8pWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiR290IGlwXCIsIHRhcmdldElwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IFwicG9wdXBleGVjXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhY2t5ZGFuZ2VyIHRvIG9wZW5UZXJtIHdpdGggY29tbWFuZCBmb3IgY2JpLXNzaFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKFwiaGFja3lkYW5nZXI6Ly9cIiArIGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFeGVjU3RyOiBgY2JpLXNzaCAke3RhcmdldElwfWAsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIHVybC5zZWFyY2ggPSBxLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJ0bi5pbm5lclRleHQgPSBcIlNTSCB0byBib3hcIjtcbiAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiY2xpY2tlZCBsaW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkFwcGVuZGluZyBsaW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSksXG5dO1xuZXhwb3J0IGRlZmF1bHQgT1BFUkFUSU9OUztcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cbmltcG9ydCBVIGZyb20gXCIuL3VzZXJzY3JpcHRcIjtcbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG4iLCJpbXBvcnQgeyBBTFdBWVMgfSBmcm9tIFwidXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgc3R5bGVzaGVldCB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL3N0eWxlc2hlZXRzXCI7XG5jb25zdCBTVFlMRVNIRUVUUyA9IHtcbiAgICBtYWluOiBzdHlsZXNoZWV0KHtcbiAgICAgICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgICAgIGNzczogYFxuICAgICAgICAgICAgaHRtbCBib2R5IHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYCxcbiAgICB9KSxcbn07XG4vLyBUaGlzIHRyaWNrIHVuY292ZXJzIHR5cGUgZXJyb3JzIGluIFNUWUxFU0hFRVRTIHdoaWxlIHJldGFpbmluZyB0aGUgc3RhdGljIGtub3dsZWRnZSBvZiBpdHMgcHJvcGVydGllcyAoc28gd2UgY2FuIHN0aWxsIHdyaXRlIGUuZy4gU1RZTEVTSEVFVFMuZm9vKTpcbmNvbnN0IF8gPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcbmV4cG9ydCBkZWZhdWx0IFNUWUxFU0hFRVRTO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkOiBcImNiaS1naXRsYWItaGVscGVyc1wiLFxuICAgIG5hbWU6IFwiQ2JpIEdpdGxhYiBIZWxwZXJzXCIsXG4gICAgdmVyc2lvbjogXCIwLjEuMFwiLFxuICAgIGhvc3RuYW1lOiBcImdpdGxhYi5jYmluc2lnaHRzLmNvbVwiLFxuICAgIHNpdGVuYW1lOiBcIkV4YW1wbGUuY29tXCIsXG4gICAgbmFtZXNwYWNlOiBcImphY2ttc2NyaXB0c1wiLFxuICAgIHJ1bkF0OiBcImRvY3VtZW50LWVuZFwiLFxufTtcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==