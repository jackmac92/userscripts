// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2021.2.25.0.39
// @description  Hodgepodge of dev utils
// @license      GNU GPLv3
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
        description: "Insert copy tooltip on codeblocks",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        // dependencies: { heading: SITE.SELECTOR_HEADING },
        // action: e => {
        //     e.heading.textContent = "Working userscript!"
        // },
        action: () => {
            Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["appendBtnToElements"])(document.querySelectorAll('code'), (codeBlock) => Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["addToClipboard"])(codeBlock.innerText), (spanEl) => { spanEl.innerText = "Copy"; });
        }
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_1__["operation"])({
        description: "Insert a copy tooltip on tables",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        action: () => {
            Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["appendBtnToElements"])(document.querySelectorAll('table'), (htmlElement, _event) => {
                const tableJson = Object(_helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_3__["extractTableAsJson"])(htmlElement);
                Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["addToClipboard"])(JSON.stringify(tableJson, null, 4));
            }, (spanEl) => { spanEl.innerText = "Copy"; });
        }
    })
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
            .jacks-dev-helpers-interact-target:hover .jacks-dev-helpers-interact-widget {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGluZXMtdW5saW5lcy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9leHRyYWN0VGFibGVJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QixHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FtQkM7S0FDVCxDQUFDO0NBQ0ksQ0FBQztBQUNYLGtDQUFrQztBQUVsQyxzSkFBc0o7QUFDdEosTUFBTSxDQUFDLEdBQWdCLFdBQVcsQ0FBQztBQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTVCLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQzNCO0FBQWU7SUFDWCxFQUFFLEVBQUUsbUJBQW1CO0lBQ3ZCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsT0FBTyxFQUFFLE9BQU87SUFDaEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxRQUFRLEVBQUUsR0FBRztJQUNiLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLEtBQUssRUFBRSxjQUFjO0NBQ2YsRUFBQyIsImZpbGUiOiJqYWNrcy1kZXYtaGVscGVycy51c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IHJldHVybiBfY29tcG9zZTEoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gX2NvbXBvc2UyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gX2NvbXBvc2UzKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBfY29tcG9zZTQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgY2FzZSA1OiByZXR1cm4gX2NvbXBvc2U1KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICB9XG4gICAgO1xufVxuZnVuY3Rpb24gX2NvbXBvc2UxKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTFGbihhKSB7XG4gICAgICAgIHJldHVybiBmKGEpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTIoZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMkZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGcoZihhKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMyhoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaChnKGYoYSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U0KGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBpKGgoZyhmKGEpKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTUoaiwgaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlNUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGooaShoKGcoZihhKSkpKSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2UuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb3NlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBsaW5lcyhzKSB7XG4gICAgcmV0dXJuIHMgPT09IFwiXCIgPyBbXSA6IHMucmVwbGFjZSgvXFxuJC8sIFwiXCIpLnNwbGl0KFwiXFxuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubGluZXMobHMpIHtcbiAgICByZXR1cm4gbHMubWFwKGxpbmUgPT4gbGluZSArIFwiXFxuXCIpLmpvaW4oXCJcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkJvb2xlYW5zKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh0cnVlKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdW1iZXJzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSgxKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmdzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShcIlwiKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTeW1ib2xzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShTeW1ib2woKSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVsbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKG51bGwpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlVuZGVmaW5lZHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHVuZGVmaW5lZCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mUHJpbWl0aXZlcyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZPYmplY3RzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZih0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4gaXMoQXJyYXkpKHhzKSAmJiB4cy5ldmVyeShpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsImV4cG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlLCB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgeyBpc0FycmF5T2ZCb29sZWFucywgaXNBcnJheU9mTnVtYmVycywgaXNBcnJheU9mU3RyaW5ncywgaXNBcnJheU9mU3ltYm9scywgaXNBcnJheU9mTnVsbHMsIGlzQXJyYXlPZlVuZGVmaW5lZHMsIGlzQXJyYXlPZlByaW1pdGl2ZXMsIGlzQXJyYXlPZk9iamVjdHMsIGlzQXJyYXlPZiwgaXNBcnJheU9mTGlrZSwgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgb25seUJvb2xlYW5zLCBvbmx5TnVtYmVycywgb25seVN0cmluZ3MsIG9ubHlTeW1ib2xzLCBvbmx5TnVsbHMsIG9ubHlVbmRlZmluZWRzLCBvbmx5UHJpbWl0aXZlcywgb25seU9iamVjdHMsIG9ubHksIG9ubHlMaWtlLCB9IGZyb20gXCIuL29ubHlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IFRZUEVfR1VBUkRTX1BSSU1JVElWRSA9IFtpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWRdO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm51bWJlclwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gVFlQRV9HVUFSRFNfUFJJTUlUSVZFLnNvbWUoZiA9PiBmKHgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vblByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KTtcbn1cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24obmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XG59XG5mdW5jdGlvbiBuYW1lZFR5cGVHdWFyZChjcmVhdG9yLCB0eXBlLCB0eXBlR3VhcmQpIHtcbiAgICByZXR1cm4gbmFtZWRGdW5jdGlvbihgJHtjcmVhdG9yLm5hbWV9KCR7dHlwZS5uYW1lfSlgLCB0eXBlR3VhcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVkVHlwZUd1YXJkKGlzLCB0eXBlLCAoeCkgPT4geCBpbnN0YW5jZW9mIHR5cGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlrZShyZWZlcmVuY2UpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgVFlQRV9HVUFSRFNfUFJJTUlUSVZFKSB7XG4gICAgICAgIGlmIChmKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoeCkgPT4gZih4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXMoQXJyYXkpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQXNBcnJheSA9IHJlZmVyZW5jZTtcbiAgICAgICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgKHJlZmVyZW5jZUFzQXJyYXkubGVuZ3RoID4gMCA/IHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZUFzQXJyYXlbMF0pKSA6IHRydWUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh4KSA9PiAoIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHgpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZmVyZW5jZSkuZXZlcnkoayA9PiBpc0xpa2UocmVmZXJlbmNlW2tdKSh4W2tdKSkpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzKHJlZmVyZW5jZS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXNMaWtlLm5hbWUgKyBgIGNhbm5vdCB1c2UgdGhpcyBvYmplY3QgYXMgcmVmZXJlbmNlIGJlY2F1c2UgaXQgaGFzIG5vIGNvbnN0cnVjdG9yOiBgICsgSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25seUJvb2xlYW5zKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc0Jvb2xlYW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdW1iZXJzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN0cmluZ3MoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3ltYm9scyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTeW1ib2wpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdWxscyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5kZWZpbmVkcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNVbmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlQcmltaXRpdmVzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU9iamVjdHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5KHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmx5LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBTFdBWVMgPSAoKSA9PiB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gKCkgPT4gZmFsc2U7XG5leHBvcnQgY29uc3QgRE9NQ09OVEVOVExPQURFRCA9IChzdGF0ZSkgPT4gc3RhdGUgIT09IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IExPQUQgPSAoc3RhdGUpID0+IHN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4iLCJpbXBvcnQgeyB1bmxpbmVzIH0gZnJvbSBcImxpbmVzLXVubGluZXNcIjtcbmNvbnN0IElOREVOVEFUSU9OID0gXCIgIFwiO1xuZnVuY3Rpb24gZm9ybWF0RGVwZW5kZW5jeShkKSB7XG4gICAgcmV0dXJuIElOREVOVEFUSU9OICsgZC5rZXkgKyBcIjogXCIgKyBkLnNlbGVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKGZhaWx1cmUpIHtcbiAgICBzd2l0Y2ggKGZhaWx1cmUucmVzdWx0LnJlYXNvbikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZXNlIGRlcGVuZGVuY2llcyB3ZXJlIG5vdCBmb3VuZDpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIHVubGluZXMoZmFpbHVyZS5yZXN1bHQuZGVwZW5kZW5jaWVzLm1hcChmb3JtYXREZXBlbmRlbmN5KSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIGZhaWxlZCB3aXRoIHRoaXMgZXJyb3I6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICBmYWlsdXJlLnJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmVEZXNjcmliZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmYWlsdXJlID0+IHVubGluZXMoW1xuICAgICAgICBgQ291bGQgbm90ICR7ZmFpbHVyZS5vcGVyYXRpb24uZGVzY3JpcHRpb259IG9uIHRoaXMgcGFnZTpgLFxuICAgICAgICBgYCxcbiAgICAgICAgSU5ERU5UQVRJT04gKyBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBgYCxcbiAgICAgICAgZXhwbGFuYXRpb24oZmFpbHVyZSkudHJpbSgpLFxuICAgICAgICBgYCxcbiAgICAgICAgYFRoaXMgcHJvYmxlbSBtaWdodCBiZSBjYXVzZWQgYnkgJHtjb250ZXh0LnNpdGVOYW1lfSBjaGFuZ2luZyBpdHMgY29udGVudC9zdHJ1Y3R1cmUsIGluIHdoaWNoIGNhc2UgJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9IG5lZWRzIHRvIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaXQncyBwcm9iYWJseSBhIGJ1ZyBpbiAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBJZiB5b3UgZmlsZSBhIGJ1ZyByZXBvcnQsIHBsZWFzZSBpbmNsdWRlIHRoaXMgbWVzc2FnZS5gLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIGVycm9ycyBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgcHJlZmVyZW5jZXMgZnJvbSBcIi4vcHJlZmVyZW5jZXNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgKiBhcyB1c2Vyc2NyaXB0ZXIgZnJvbSBcIi4vdXNlcnNjcmlwdGVyXCI7XG5leHBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIG9wZXJhdGlvbnMsIHByZWZlcmVuY2VzLCBzdHlsZXNoZWV0cywgdXNlcnNjcmlwdGVyLCB9O1xuIiwibGV0IHByZWZpeCA9IFwiXCI7XG5sZXQgbG9nZ2VyID0gY29uc29sZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmaXgocCkge1xuICAgIHByZWZpeCA9IHA7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGwpIHtcbiAgICBsb2dnZXIgPSBsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBsb2dnZXIubG9nKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHN0cikge1xuICAgIGxvZ2dlci5pbmZvKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHN0cikge1xuICAgIGxvZ2dlci53YXJuKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdHIpIHtcbiAgICBsb2dnZXIuZXJyb3IocHJlZml4LCBzdHIpO1xufVxuIiwiaW1wb3J0IHsgaXNOdWxsLCBpc051bWJlciwgaXNTdHJpbmcgfSBmcm9tIFwidHMtdHlwZS1ndWFyZHNcIjtcbmNvbnN0IFNVQ0NFU1MgPSB1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGxhbikge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uob3BlcmF0aW9ucywgZmFpbHVyZXMsIHRyaWVzTGVmdCkge1xuICAgICAgICBjb25zdCBsYXN0VHJ5ID0gaXNOdW1iZXIodHJpZXNMZWZ0KSAmJiB0cmllc0xlZnQgPD0gMDtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1RvUnVuTm93ID0gW107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IFtdO1xuICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJ1bk5vdyA9IG8uZGVmZXJVbnRpbCA9PT0gdW5kZWZpbmVkIHx8IG8uZGVmZXJVbnRpbChyZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIChzaG91bGRSdW5Ob3cgPyBvcGVyYXRpb25zVG9SdW5Ob3cgOiByZW1haW5pbmcpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnNUb1J1bk5vdykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5VG9QZXJmb3JtKG8pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0LnJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VHJ5ID8gZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pIDogcmVtYWluaW5nLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWN1cnNlKHJlbWFpbmluZywgZmFpbHVyZXMsIChpc051bWJlcih0cmllc0xlZnQpXG4gICAgICAgICAgICAgICAgPyB0cmllc0xlZnQgLSAxXG4gICAgICAgICAgICAgICAgOiBwbGFuLnRyeVVudGlsKHJlYWR5U3RhdGUpID8gcGxhbi5leHRyYVRyaWVzIDogdW5kZWZpbmVkKSksIHBsYW4uaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZhaWx1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsYW4uaGFuZGxlRmFpbHVyZXMoZmFpbHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UocGxhbi5vcGVyYXRpb25zLmZpbHRlcihvID0+IG8uY29uZGl0aW9uKHdpbmRvdykpLCBbXSk7XG59XG5mdW5jdGlvbiB0cnlUb1BlcmZvcm0obykge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG8uZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQgPyB7fSA6IG8uZGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKGRlcGVuZGVuY2llcykubWFwKChba2V5LCBzZWxlY3Rvcl0pID0+ICh7XG4gICAgICAgIGtleSwgc2VsZWN0b3IsIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgIH0pKTtcbiAgICBjb25zdCBtaXNzaW5nRGVwZW5kZW5jaWVzID0gcXVlcnlSZXN1bHRzLmZpbHRlcih4ID0+IGlzTnVsbCh4LmVsZW1lbnQpKTtcbiAgICBpZiAobWlzc2luZ0RlcGVuZGVuY2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogMCwgZGVwZW5kZW5jaWVzOiBtaXNzaW5nRGVwZW5kZW5jaWVzIH07XG4gICAgfVxuICAgIGNvbnN0IGUgPSBxdWVyeVJlc3VsdHMucmVkdWNlKChhY2MsIHgpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY2MsIHgua2V5LCB7IHZhbHVlOiB4LmVsZW1lbnQgfSksIHt9KTtcbiAgICByZXR1cm4gZnJvbUFjdGlvblJlc3VsdChvLmFjdGlvbihlKSk7XG59XG5mdW5jdGlvbiBmcm9tQWN0aW9uUmVzdWx0KHIpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcocikgPyB7IHJlYXNvbjogMSwgbWVzc2FnZTogciB9IDogU1VDQ0VTUztcbn1cbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpcHRhYmxlKGhhbmRsZXIpIHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7IH0sXG4gICAgICAgIHVuc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7IH0sXG4gICAgICAgIGhhbmRsZXI6IChzdW1tYXJ5LCBwcmVmZXJlbmNlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZiA9PiBmKHN1bW1hcnkucHJlZmVyZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nZ2luZ1Jlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gc3VtbWFyeS5yZXNwb25zZTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nICgke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnNhdmVkKX0pIHdhcyBpbnZhbGlkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYENvdWxkIG5vdCBzZXQgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGl0IHdhcyBpbnZhbGlkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBoYWQgdGhlIHdyb25nIHR5cGUuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGNvdWxkIG5vdCBiZSBwYXJzZWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN3aXRjaCAoc3VtbWFyeS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHJlYWQgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLiBVc2luZyB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucHJlZmVyZW5jZS5kZWZhdWx0KX0uYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3Qgc2F2ZSB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShzdW1tYXJ5LmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYXNzZXJ0VW5yZWFjaGFibGUocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcFJlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBfKSB7XG4gICAgcmV0dXJuIHN1bW1hcnkucmVzcG9uc2U7XG59XG5mdW5jdGlvbiBhc3NlcnRVbnJlYWNoYWJsZSh4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0VW5yZWFjaGFibGU6IFwiICsgeCk7XG59XG4iLCJjb25zdCBNQVRDSF9BTEwgPSBcImFsbFwiO1xuY29uc3QgTUFUQ0hfTk9ORSA9IFwibm90IGFsbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2hlZXQoc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydChzdHlsZXNoZWV0cykge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlc2hlZXRzKS5mb3JFYWNoKChbXywgc2hlZXRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBpZiAoc2hlZXQuaWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHN0eWxlLmlkID0gc2hlZXQuaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc2hlZXQuY3NzO1xuICAgICAgICBzdHlsZS5tZWRpYSA9IHNoZWV0LmNvbmRpdGlvbih3aW5kb3cpID8gTUFUQ0hfQUxMIDogTUFUQ0hfTk9ORTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5jb25zdCBzZXRNZWRpYVF1ZXJ5ID0gKG0pID0+IChzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMuaWQpO1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBlbmFibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX0FMTCk7XG5leHBvcnQgY29uc3QgZGlzYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfTk9ORSk7XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5leHBvcnQgZnVuY3Rpb24gcnVuKHVzZXJzY3JpcHQpIHtcbiAgICBsb2cuc2V0UHJlZml4KGBbJHt1c2Vyc2NyaXB0Lm5hbWV9XWApO1xuICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUodXNlcnNjcmlwdC5pZCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYEl0IGxvb2tzIGFzIHRob3VnaCAke3VzZXJzY3JpcHQubmFtZX0gaGFzIGFscmVhZHkgcnVuIChiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgXCIke2F0dHJ9XCIgd2FzIGZvdW5kIG9uIDxoZWFkPikuIFN0b3BwaW5nLmApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBcIlwiKTtcbiAgICAgICAgdXNlcnNjcmlwdC5pbml0aWFsQWN0aW9uKCk7XG4gICAgICAgIHN0eWxlc2hlZXRzLmluc2VydCh1c2Vyc2NyaXB0LnN0eWxlc2hlZXRzKTtcbiAgICAgICAgb3BlcmF0aW9ucy5ydW4odXNlcnNjcmlwdC5vcGVyYXRpb25zUGxhbik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGlkKSB7XG4gICAgcmV0dXJuIFwiZGF0YS1cIiArIGlkICsgXCItaGFzLXJ1blwiO1xufVxuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19JTlRFUlZBTCA9IDIwMDsgLy8gbXNcbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0VYVFJBX1RSSUVTID0gMztcbiIsImNvbnN0IGFyciA9IEFycmF5LmZyb207XG5cbmNvbnN0IGV4dHJhY3RMaW5rZWRUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB0bXBOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgYXJyKHRtcE5vZGUucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goXG4gICAgICAgIChlbCkgPT4gKGVsLmlubmVyVGV4dCA9IGBbJHtlbC5pbm5lclRleHR9XSgke2VsLmhyZWZ9KWApXG4gICAgKTtcbiAgICByZXR1cm4gdG1wTm9kZS5pbm5lclRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYWJsZUFzSnNvbih0YWJsZTogSFRNTFRhYmxlRWxlbWVudCk6IG9iamVjdCB7XG4gICAgLy8gSWRlYWxseSBmaXJzdCBjaGVjayBpZiB0YWJsZSBpcyBcInJlZ3VsYXJcIiBha2EgaGFzIGVxdWFsIG51bWJlciBvZiB0aCB0byB0ZC90clxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKHRhYmxlLnRIZWFkICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMgPSBhcnIodGFibGUudEhlYWQucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5mbGF0TWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VHZm1UYWJsZSh0YWJsZTogSFRNTFRhYmxlRWxlbWVudCkge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICApO1xuICAgIHJldHVybiBhcnIodGFibGUudEJvZGllcykubWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFkZFRvQ2xpcGJvYXJkID0gKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IFwiY2xpcGJvYXJkLXdyaXRlXCIgYXMgUGVybWlzc2lvbk5hbWU7XG4gIHJldHVybiBuYXZpZ2F0b3IucGVybWlzc2lvbnNcbiAgICAucXVlcnkoeyBuYW1lOiBwZXJtaXNzaW9uTmFtZSB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT0gXCJncmFudGVkXCIgfHwgcmVzdWx0LnN0YXRlID09IFwicHJvbXB0XCIpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbnRlbnQpLnRoZW4oKCkgPT4geyB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBcIlBlcm1pc3Npb24gZm9yIGNsaXBib2FyZC13cml0ZSB3YXMgbm90IG9idGFpbmVkIFwiICsgcmVzdWx0LnN0YXRlXG4gICAgICApO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IHNpYmxpbmdzID0gW107XG4gIGxldCBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZFxuXG4gIGlmICghc2libGluZykge1xuICAgIHJldHVybiBbXVxuICB9XG5cbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcgYXMgSFRNTEVsZW1lbnQpO1xuICAgIH1cbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gc2libGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kQnRuVG9FbGVtZW50cyA9IDxaIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnRzOiBOb2RlTGlzdE9mPFo+LCBjbGlja0hhbmRsZXI6IChlOiBaLCBhOiBFdmVudCkgPT4gdm9pZCwgbW9kaWZ5QnRuOiAoYjogSFRNTEVsZW1lbnQpID0+IHZvaWQpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMpLm1hcChjb2RlQmxvY2sgPT4ge1xuICAgIGNvZGVCbG9jay5jbGFzc0xpc3QuYWRkKCdqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC10YXJnZXQnKVxuICAgIGNvZGVCbG9jay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJqYWNrcy1kZXYtaGVscGVycy1vdXRlci13cmFwXCIgPiR7Y29kZUJsb2NrLmlubmVySFRNTH08L3NwYW4+YFxuICAgIGNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBjb3B5QnRuLmNsYXNzTGlzdC5hZGQoJ2phY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCcpXG4gICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdG1wQ29kZUJsb2NrID0gY29kZUJsb2NrLmNsb25lTm9kZSh0cnVlKSBhcyBaO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0bXBDb2RlQmxvY2suY2hpbGRyZW5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50LmNsYXNzTGlzdC5jb250YWlucyhcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldFwiKSkge1xuICAgICAgICAgIHRtcENvZGVCbG9jay5yZW1vdmVDaGlsZChjaGlsZENvbXBvbmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xpY2tIYW5kbGVyKHRtcENvZGVCbG9jayBhcyBaLCBldmVudClcbiAgICB9KVxuICAgIG1vZGlmeUJ0bihjb3B5QnRuKVxuICAgIGNvZGVCbG9jay5hcHBlbmRDaGlsZChjb3B5QnRuKVxuICAgIHJldHVybiBjb3B5QnRuXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcIkB0eXBlZC9jb21wb3NlXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIHVzZXJzY3JpcHRlciB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXJcIjtcblxuaW1wb3J0ICogYXMgQ09ORklHIGZyb20gXCJ+c3JjL2NvbmZpZ1wiO1xuaW1wb3J0IE9QRVJBVElPTlMgZnJvbSBcIn5zcmMvb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgU0lURSBmcm9tIFwifnNyYy9zaXRlXCI7XG5pbXBvcnQgU1RZTEVTSEVFVFMgZnJvbSBcIn5zcmMvc3R5bGVzaGVldHNcIjtcbmltcG9ydCBVIGZyb20gXCJ+c3JjL3VzZXJzY3JpcHRcIjtcblxuY29uc3QgZGVzY3JpYmVGYWlsdXJlID0gZXJyb3JzLmZhaWx1cmVEZXNjcmliZXIoe1xuICAgIHNpdGVOYW1lOiBTSVRFLk5BTUUsXG4gICAgZXh0ZW5zaW9uTmFtZTogVS5uYW1lLFxuICAgIGxvY2F0aW9uOiBkb2N1bWVudC5sb2NhdGlvbixcbn0pO1xuXG51c2Vyc2NyaXB0ZXIucnVuKHtcbiAgICBpZDogVS5pZCxcbiAgICBuYW1lOiBVLm5hbWUsXG4gICAgaW5pdGlhbEFjdGlvbjogKCkgPT4gbG9nLmxvZyhgJHtVLm5hbWV9ICR7VS52ZXJzaW9ufWApLFxuICAgIHN0eWxlc2hlZXRzOiBTVFlMRVNIRUVUUyxcbiAgICBvcGVyYXRpb25zUGxhbjoge1xuICAgICAgICBvcGVyYXRpb25zOiBPUEVSQVRJT05TLFxuICAgICAgICBpbnRlcnZhbDogQ09ORklHLk9QRVJBVElPTlNfSU5URVJWQUwsXG4gICAgICAgIHRyeVVudGlsOiBlbnZpcm9ubWVudC5ET01DT05URU5UTE9BREVELFxuICAgICAgICBleHRyYVRyaWVzOiBDT05GSUcuT1BFUkFUSU9OU19FWFRSQV9UUklFUyxcbiAgICAgICAgaGFuZGxlRmFpbHVyZXM6IGZhaWx1cmVzID0+IGZhaWx1cmVzLmZvckVhY2goY29tcG9zZShsb2cuZXJyb3IsIGRlc2NyaWJlRmFpbHVyZSkpLFxuICAgIH0sXG59KTtcbiIsImltcG9ydCB7IGxvZyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXJcIjtcbmltcG9ydCB7IEFMV0FZUyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBPcGVyYXRpb24sIG9wZXJhdGlvbiB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIFNJVEUgZnJvbSBcIn5zcmMvc2l0ZVwiO1xuaW1wb3J0IFUgZnJvbSBcIn5zcmMvdXNlcnNjcmlwdFwiO1xuaW1wb3J0IHsgYWRkVG9DbGlwYm9hcmQsIGFwcGVuZEJ0blRvRWxlbWVudHMgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWxzXCI7XG5pbXBvcnQgeyBleHRyYWN0VGFibGVBc0pzb24gfSBmcm9tICcuL2hlbHBlcnMvZXh0cmFjdFRhYmxlSW5mbyc7XG5cbmNvbnN0IE9QRVJBVElPTlM6IFJlYWRvbmx5QXJyYXk8T3BlcmF0aW9uPGFueT4+ID0gW1xuICAgIG9wZXJhdGlvbih7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkluc2VydCBjb3B5IHRvb2x0aXAgb24gY29kZWJsb2Nrc1wiLFxuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgLy8gZGVwZW5kZW5jaWVzOiB7IGhlYWRpbmc6IFNJVEUuU0VMRUNUT1JfSEVBRElORyB9LFxuICAgICAgICAvLyBhY3Rpb246IGUgPT4ge1xuICAgICAgICAvLyAgICAgZS5oZWFkaW5nLnRleHRDb250ZW50ID0gXCJXb3JraW5nIHVzZXJzY3JpcHQhXCJcbiAgICAgICAgLy8gfSxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICBhcHBlbmRCdG5Ub0VsZW1lbnRzKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NvZGUnKSxcbiAgICAgICAgICAgICAgICAoY29kZUJsb2NrKSA9PiBhZGRUb0NsaXBib2FyZChjb2RlQmxvY2suaW5uZXJUZXh0KSxcbiAgICAgICAgICAgICAgICAoc3BhbkVsKSA9PiB7IHNwYW5FbC5pbm5lclRleHQgPSBcIkNvcHlcIiB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBvcGVyYXRpb24oe1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnNlcnQgYSBjb3B5IHRvb2x0aXAgb24gdGFibGVzXCIsXG4gICAgICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgIGFwcGVuZEJ0blRvRWxlbWVudHMoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUnKSxcbiAgICAgICAgICAgICAgICAoaHRtbEVsZW1lbnQsIF9ldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZUpzb24gPSBleHRyYWN0VGFibGVBc0pzb24oaHRtbEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ2xpcGJvYXJkKEpTT04uc3RyaW5naWZ5KHRhYmxlSnNvbiwgbnVsbCwgNCkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoc3BhbkVsKSA9PiB7IHNwYW5FbC5pbm5lclRleHQgPSBcIkNvcHlcIiB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9KVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgT1BFUkFUSU9OUztcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cblxuaW1wb3J0IFUgZnJvbSBcIi4vdXNlcnNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgTkFNRSA9IFUuc2l0ZW5hbWU7XG5leHBvcnQgY29uc3QgSE9TVE5BTUUgPSBVLmhvc3RuYW1lO1xuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX0NPREUgPSBcImNvZGVcIjtcbiIsImltcG9ydCB7IEFMV0FZUyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBTdHlsZXNoZWV0cywgc3R5bGVzaGVldCB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL3N0eWxlc2hlZXRzXCI7XG5cbmNvbnN0IFNUWUxFU0hFRVRTID0ge1xuICAgIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgY3NzOiBgXG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVyLW91dGVyLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0OmhvdmVyIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQ6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgXG4gICAgfSksXG59IGFzIGNvbnN0O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG5cbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxuY29uc3QgXzogU3R5bGVzaGVldHMgPSBTVFlMRVNIRUVUUzsgdm9pZCBfO1xuXG5leHBvcnQgZGVmYXVsdCBTVFlMRVNIRUVUUztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBpZDogXCJqYWNrcy1kZXYtaGVscGVyc1wiLFxuICAgIG5hbWU6IFwiSmFjaydzIERldiBIZWxwZXJzXCIsXG4gICAgdmVyc2lvbjogXCIwLjEuMFwiLFxuICAgIGF1dGhvcjogXCJKYWNrIE1jQ293blwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhvZGdlcG9kZ2Ugb2YgZGV2IHV0aWxzXCIsXG4gICAgaG9zdG5hbWU6IFwiKlwiLFxuICAgIG5hbWVzcGFjZTogXCJqYWNrbXNjcmlwdHNcIixcbiAgICBzaXRlbmFtZTogXCJnb29nbGUuY29tXCIsXG4gICAgcnVuQXQ6IFwiZG9jdW1lbnQtZW5kXCIsXG59IGFzIGNvbnN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==