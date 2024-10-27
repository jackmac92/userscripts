// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2024.10.26.20.35
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

/***/ "./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/compose.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/compose.js ***!
  \***************************************************************************************************/
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

/***/ "./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/index.js ***!
  \*************************************************************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_0__["compose"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/.pnpm/deep-entries@4.0.2/node_modules/deep-entries/dist/index.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/deep-entries@4.0.2/node_modules/deep-entries/dist/index.esm.js ***!
  \*******************************************************************************************/
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

/***/ "./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/.pnpm/git-up@4.0.5/node_modules/git-up/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/git-up@4.0.5/node_modules/git-up/lib/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies

var parseUrl = __webpack_require__(/*! parse-url */ "./node_modules/.pnpm/parse-url@6.0.5/node_modules/parse-url/lib/index.js"),
    isSsh = __webpack_require__(/*! is-ssh */ "./node_modules/.pnpm/is-ssh@1.4.0/node_modules/is-ssh/lib/index.js");

/**
 * gitUp
 * Parses the input url.
 *
 * @name gitUp
 * @function
 * @param {String} input The input url.
 * @return {Object} An object containing the following fields:
 *
 *  - `protocols` (Array): An array with the url protocols (usually it has one element).
 *  - `port` (null|Number): The domain port.
 *  - `resource` (String): The url domain (including subdomains).
 *  - `user` (String): The authentication user (usually for ssh urls).
 *  - `pathname` (String): The url pathname.
 *  - `hash` (String): The url hash.
 *  - `search` (String): The url querystring value.
 *  - `href` (String): The input url.
 *  - `protocol` (String): The git url protocol.
 *  - `token` (String): The oauth token (could appear in the https urls).
 */
function gitUp(input) {
    var output = parseUrl(input);
    output.token = "";

    var splits = output.user.split(":");
    if (splits.length === 2) {
        if (splits[1] === "x-oauth-basic") {
            output.token = splits[0];
        } else if (splits[0] === "x-token-auth") {
            output.token = splits[1];
        }
    }

    if (isSsh(output.protocols) || isSsh(input)) {
        output.protocol = "ssh";
    } else if (output.protocols.length) {
        output.protocol = output.protocols[0];
    } else {
        output.protocol = "file";
    }

    output.href = output.href.replace(/\/$/, "");
    return output;
}

module.exports = gitUp;

/***/ }),

/***/ "./node_modules/.pnpm/git-url-parse@11.6.0/node_modules/git-url-parse/lib/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/git-url-parse@11.6.0/node_modules/git-url-parse/lib/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gitUp = __webpack_require__(/*! git-up */ "./node_modules/.pnpm/git-up@4.0.5/node_modules/git-up/lib/index.js");

/**
 * gitUrlParse
 * Parses a Git url.
 *
 * @name gitUrlParse
 * @function
 * @param {String} url The Git url to parse.
 * @return {GitUrl} The `GitUrl` object containing:
 *
 *  - `protocols` (Array): An array with the url protocols (usually it has one element).
 *  - `port` (null|Number): The domain port.
 *  - `resource` (String): The url domain (including subdomains).
 *  - `user` (String): The authentication user (usually for ssh urls).
 *  - `pathname` (String): The url pathname.
 *  - `hash` (String): The url hash.
 *  - `search` (String): The url querystring value.
 *  - `href` (String): The input url.
 *  - `protocol` (String): The git url protocol.
 *  - `token` (String): The oauth token (could appear in the https urls).
 *  - `source` (String): The Git provider (e.g. `"github.com"`).
 *  - `owner` (String): The repository owner.
 *  - `name` (String): The repository name.
 *  - `ref` (String): The repository ref (e.g., "master" or "dev").
 *  - `filepath` (String): A filepath relative to the repository root.
 *  - `filepathtype` (String): The type of filepath in the url ("blob" or "tree").
 *  - `full_name` (String): The owner and name values in the `owner/name` format.
 *  - `toString` (Function): A function to stringify the parsed url into another url type.
 *  - `organization` (String): The organization the owner belongs to. This is CloudForge specific.
 *  - `git_suffix` (Boolean): Whether to add the `.git` suffix or not.
 *
 */
function gitUrlParse(url) {

    if (typeof url !== "string") {
        throw new Error("The url must be a string.");
    }

    var urlInfo = gitUp(url),
        sourceParts = urlInfo.resource.split("."),
        splits = null;

    urlInfo.toString = function (type) {
        return gitUrlParse.stringify(this, type);
    };

    urlInfo.source = sourceParts.length > 2 ? sourceParts.slice(1 - sourceParts.length).join(".") : urlInfo.source = urlInfo.resource;

    // Note: Some hosting services (e.g. Visual Studio Team Services) allow whitespace characters
    // in the repository and owner names so we decode the URL pieces to get the correct result
    urlInfo.git_suffix = /\.git$/.test(urlInfo.pathname);
    urlInfo.name = decodeURIComponent(urlInfo.pathname.replace(/^\//, '').replace(/\.git$/, ""));
    urlInfo.owner = decodeURIComponent(urlInfo.user);

    switch (urlInfo.source) {
        case "git.cloudforge.com":
            urlInfo.owner = urlInfo.user;
            urlInfo.organization = sourceParts[0];
            urlInfo.source = "cloudforge.com";
            break;
        case "visualstudio.com":
            // Handle VSTS SSH URLs
            if (urlInfo.resource === 'vs-ssh.visualstudio.com') {
                splits = urlInfo.name.split("/");
                if (splits.length === 4) {
                    urlInfo.organization = splits[1];
                    urlInfo.owner = splits[2];
                    urlInfo.name = splits[3];
                    urlInfo.full_name = splits[2] + '/' + splits[3];
                }
                break;
            } else {
                splits = urlInfo.name.split("/");
                if (splits.length === 2) {
                    urlInfo.owner = splits[1];
                    urlInfo.name = splits[1];
                    urlInfo.full_name = '_git/' + urlInfo.name;
                } else if (splits.length === 3) {
                    urlInfo.name = splits[2];
                    if (splits[0] === 'DefaultCollection') {
                        urlInfo.owner = splits[2];
                        urlInfo.organization = splits[0];
                        urlInfo.full_name = urlInfo.organization + '/_git/' + urlInfo.name;
                    } else {
                        urlInfo.owner = splits[0];
                        urlInfo.full_name = urlInfo.owner + '/_git/' + urlInfo.name;
                    }
                } else if (splits.length === 4) {
                    urlInfo.organization = splits[0];
                    urlInfo.owner = splits[1];
                    urlInfo.name = splits[3];
                    urlInfo.full_name = urlInfo.organization + '/' + urlInfo.owner + '/_git/' + urlInfo.name;
                }
                break;
            }

        // Azure DevOps (formerly Visual Studio Team Services)
        case "dev.azure.com":
        case "azure.com":
            if (urlInfo.resource === 'ssh.dev.azure.com') {
                splits = urlInfo.name.split("/");
                if (splits.length === 4) {
                    urlInfo.organization = splits[1];
                    urlInfo.owner = splits[2];
                    urlInfo.name = splits[3];
                }
                break;
            } else {
                splits = urlInfo.name.split("/");
                if (splits.length === 5) {
                    urlInfo.organization = splits[0];
                    urlInfo.owner = splits[1];
                    urlInfo.name = splits[4];
                    urlInfo.full_name = '_git/' + urlInfo.name;
                } else if (splits.length === 3) {
                    urlInfo.name = splits[2];
                    if (splits[0] === 'DefaultCollection') {
                        urlInfo.owner = splits[2];
                        urlInfo.organization = splits[0];
                        urlInfo.full_name = urlInfo.organization + '/_git/' + urlInfo.name;
                    } else {
                        urlInfo.owner = splits[0];
                        urlInfo.full_name = urlInfo.owner + '/_git/' + urlInfo.name;
                    }
                } else if (splits.length === 4) {
                    urlInfo.organization = splits[0];
                    urlInfo.owner = splits[1];
                    urlInfo.name = splits[3];
                    urlInfo.full_name = urlInfo.organization + '/' + urlInfo.owner + '/_git/' + urlInfo.name;
                }
                if (urlInfo.query && urlInfo.query['path']) {
                    urlInfo.filepath = urlInfo.query['path'].replace(/^\/+/g, ''); // Strip leading slash (/)
                }
                if (urlInfo.query && urlInfo.query['version']) {
                    // version=GB<branch>
                    urlInfo.ref = urlInfo.query['version'].replace(/^GB/, ''); // remove GB
                }
                break;
            }
        default:
            splits = urlInfo.name.split("/");
            var nameIndex = splits.length - 1;
            if (splits.length >= 2) {
                var dashIndex = splits.indexOf("-", 2);
                var blobIndex = splits.indexOf("blob", 2);
                var treeIndex = splits.indexOf("tree", 2);
                var commitIndex = splits.indexOf("commit", 2);
                var srcIndex = splits.indexOf("src", 2);
                var rawIndex = splits.indexOf("raw", 2);
                nameIndex = dashIndex > 0 ? dashIndex - 1 : blobIndex > 0 ? blobIndex - 1 : treeIndex > 0 ? treeIndex - 1 : commitIndex > 0 ? commitIndex - 1 : srcIndex > 0 ? srcIndex - 1 : rawIndex > 0 ? rawIndex - 1 : nameIndex;

                urlInfo.owner = splits.slice(0, nameIndex).join('/');
                urlInfo.name = splits[nameIndex];
                if (commitIndex) {
                    urlInfo.commit = splits[nameIndex + 2];
                }
            }

            urlInfo.ref = "";
            urlInfo.filepathtype = "";
            urlInfo.filepath = "";
            var offsetNameIndex = splits.length > nameIndex && splits[nameIndex + 1] === "-" ? nameIndex + 1 : nameIndex;
            if (splits.length > offsetNameIndex + 2 && ["raw", "src", "blob", "tree"].indexOf(splits[offsetNameIndex + 1]) >= 0) {
                urlInfo.filepathtype = splits[offsetNameIndex + 1];
                urlInfo.ref = splits[offsetNameIndex + 2];
                if (splits.length > offsetNameIndex + 3) {
                    urlInfo.filepath = splits.slice(offsetNameIndex + 3).join('/');
                }
            }
            urlInfo.organization = urlInfo.owner;
            break;
    }

    if (!urlInfo.full_name) {
        urlInfo.full_name = urlInfo.owner;
        if (urlInfo.name) {
            urlInfo.full_name && (urlInfo.full_name += "/");
            urlInfo.full_name += urlInfo.name;
        }
    }
    // Bitbucket Server
    if (urlInfo.owner.startsWith("scm/")) {
        urlInfo.source = "bitbucket-server";
        urlInfo.owner = urlInfo.owner.replace("scm/", "");
        urlInfo.organization = urlInfo.owner;
        urlInfo.full_name = urlInfo.owner + "/" + urlInfo.name;
    }

    var bitbucket = /(projects|users)\/(.*?)\/repos\/(.*?)((\/.*$)|$)/;
    var matches = bitbucket.exec(urlInfo.pathname);
    if (matches != null) {
        urlInfo.source = "bitbucket-server";
        if (matches[1] === "users") {
            urlInfo.owner = "~" + matches[2];
        } else {
            urlInfo.owner = matches[2];
        }

        urlInfo.organization = urlInfo.owner;
        urlInfo.name = matches[3];

        splits = matches[4].split("/");
        if (splits.length > 1) {
            if (["raw", "browse"].indexOf(splits[1]) >= 0) {
                urlInfo.filepathtype = splits[1];
                if (splits.length > 2) {
                    urlInfo.filepath = splits.slice(2).join('/');
                }
            } else if (splits[1] === "commits" && splits.length > 2) {
                urlInfo.commit = splits[2];
            }
        }
        urlInfo.full_name = urlInfo.owner + "/" + urlInfo.name;

        if (urlInfo.query.at) {
            urlInfo.ref = urlInfo.query.at;
        } else {
            urlInfo.ref = "";
        }
    }
    return urlInfo;
}

/**
 * stringify
 * Stringifies a `GitUrl` object.
 *
 * @name stringify
 * @function
 * @param {GitUrl} obj The parsed Git url object.
 * @param {String} type The type of the stringified url (default `obj.protocol`).
 * @return {String} The stringified url.
 */
gitUrlParse.stringify = function (obj, type) {
    type = type || (obj.protocols && obj.protocols.length ? obj.protocols.join('+') : obj.protocol);
    var port = obj.port ? ":" + obj.port : '';
    var user = obj.user || 'git';
    var maybeGitSuffix = obj.git_suffix ? ".git" : "";
    switch (type) {
        case "ssh":
            if (port) return "ssh://" + user + "@" + obj.resource + port + "/" + obj.full_name + maybeGitSuffix;else return user + "@" + obj.resource + ":" + obj.full_name + maybeGitSuffix;
        case "git+ssh":
        case "ssh+git":
        case "ftp":
        case "ftps":
            return type + "://" + user + "@" + obj.resource + port + "/" + obj.full_name + maybeGitSuffix;
        case "http":
        case "https":
            var auth = obj.token ? buildToken(obj) : obj.user && (obj.protocols.includes('http') || obj.protocols.includes('https')) ? obj.user + "@" : "";
            return type + "://" + auth + obj.resource + port + "/" + buildPath(obj) + maybeGitSuffix;
        default:
            return obj.href;
    }
};

/*!
 * buildToken
 * Builds OAuth token prefix (helper function)
 *
 * @name buildToken
 * @function
 * @param {GitUrl} obj The parsed Git url object.
 * @return {String} token prefix
 */
function buildToken(obj) {
    switch (obj.source) {
        case "bitbucket.org":
            return "x-token-auth:" + obj.token + "@";
        default:
            return obj.token + "@";
    }
}

function buildPath(obj) {
    switch (obj.source) {
        case "bitbucket-server":
            return "scm/" + obj.full_name;
        default:
            return "" + obj.full_name;

    }
}

module.exports = gitUrlParse;

/***/ }),

/***/ "./node_modules/.pnpm/is-ssh@1.4.0/node_modules/is-ssh/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/is-ssh@1.4.0/node_modules/is-ssh/lib/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var protocols = __webpack_require__(/*! protocols */ "./node_modules/.pnpm/protocols@2.0.1/node_modules/protocols/lib/index.js");

/**
 * isSsh
 * Checks if an input value is a ssh url or not.
 *
 * @name isSsh
 * @function
 * @param {String|Array} input The input url or an array of protocols.
 * @return {Boolean} `true` if the input is a ssh url, `false` otherwise.
 */
function isSsh(input) {

    if (Array.isArray(input)) {
        return input.indexOf("ssh") !== -1 || input.indexOf("rsync") !== -1;
    }

    if (typeof input !== "string") {
        return false;
    }

    var prots = protocols(input);
    input = input.substring(input.indexOf("://") + 3);
    if (isSsh(prots)) {
        return true;
    }

    // TODO This probably could be improved :)
    var urlPortPattern = new RegExp('\.([a-zA-Z\\d]+):(\\d+)\/');
    return !input.match(urlPortPattern) && input.indexOf("@") < input.indexOf(":");
}

module.exports = isSsh;

/***/ }),

/***/ "./node_modules/.pnpm/lines-unlines@1.0.0/node_modules/lines-unlines/dist/index.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/lines-unlines@1.0.0/node_modules/lines-unlines/dist/index.mjs ***!
  \******************************************************************************************/
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

/***/ "./node_modules/.pnpm/normalize-url@6.1.0/node_modules/normalize-url/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/normalize-url@6.1.0/node_modules/normalize-url/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';
const DATA_URL_DEFAULT_CHARSET = 'us-ascii';

const testParameter = (name, filters) => {
	return filters.some(filter => filter instanceof RegExp ? filter.test(name) : filter === name);
};

const normalizeDataURL = (urlString, {stripHash}) => {
	const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);

	if (!match) {
		throw new Error(`Invalid URL: ${urlString}`);
	}

	let {type, data, hash} = match.groups;
	const mediaType = type.split(';');
	hash = stripHash ? '' : hash;

	let isBase64 = false;
	if (mediaType[mediaType.length - 1] === 'base64') {
		mediaType.pop();
		isBase64 = true;
	}

	// Lowercase MIME type
	const mimeType = (mediaType.shift() || '').toLowerCase();
	const attributes = mediaType
		.map(attribute => {
			let [key, value = ''] = attribute.split('=').map(string => string.trim());

			// Lowercase `charset`
			if (key === 'charset') {
				value = value.toLowerCase();

				if (value === DATA_URL_DEFAULT_CHARSET) {
					return '';
				}
			}

			return `${key}${value ? `=${value}` : ''}`;
		})
		.filter(Boolean);

	const normalizedMediaType = [
		...attributes
	];

	if (isBase64) {
		normalizedMediaType.push('base64');
	}

	if (normalizedMediaType.length !== 0 || (mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE)) {
		normalizedMediaType.unshift(mimeType);
	}

	return `data:${normalizedMediaType.join(';')},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ''}`;
};

const normalizeUrl = (urlString, options) => {
	options = {
		defaultProtocol: 'http:',
		normalizeProtocol: true,
		forceHttp: false,
		forceHttps: false,
		stripAuthentication: true,
		stripHash: false,
		stripTextFragment: true,
		stripWWW: true,
		removeQueryParameters: [/^utm_\w+/i],
		removeTrailingSlash: true,
		removeSingleSlash: true,
		removeDirectoryIndex: false,
		sortQueryParameters: true,
		...options
	};

	urlString = urlString.trim();

	// Data URL
	if (/^data:/i.test(urlString)) {
		return normalizeDataURL(urlString, options);
	}

	if (/^view-source:/i.test(urlString)) {
		throw new Error('`view-source:` is not supported as it is a non-standard protocol');
	}

	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);

	// Prepend protocol
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
	}

	const urlObj = new URL(urlString);

	if (options.forceHttp && options.forceHttps) {
		throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
	}

	if (options.forceHttp && urlObj.protocol === 'https:') {
		urlObj.protocol = 'http:';
	}

	if (options.forceHttps && urlObj.protocol === 'http:') {
		urlObj.protocol = 'https:';
	}

	// Remove auth
	if (options.stripAuthentication) {
		urlObj.username = '';
		urlObj.password = '';
	}

	// Remove hash
	if (options.stripHash) {
		urlObj.hash = '';
	} else if (options.stripTextFragment) {
		urlObj.hash = urlObj.hash.replace(/#?:~:text.*?$/i, '');
	}

	// Remove duplicate slashes if not preceded by a protocol
	if (urlObj.pathname) {
		urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, '/');
	}

	// Decode URI octets
	if (urlObj.pathname) {
		try {
			urlObj.pathname = decodeURI(urlObj.pathname);
		} catch (_) {}
	}

	// Remove directory index
	if (options.removeDirectoryIndex === true) {
		options.removeDirectoryIndex = [/^index\.[a-z]+$/];
	}

	if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
		let pathComponents = urlObj.pathname.split('/');
		const lastComponent = pathComponents[pathComponents.length - 1];

		if (testParameter(lastComponent, options.removeDirectoryIndex)) {
			pathComponents = pathComponents.slice(0, pathComponents.length - 1);
			urlObj.pathname = pathComponents.slice(1).join('/') + '/';
		}
	}

	if (urlObj.hostname) {
		// Remove trailing dot
		urlObj.hostname = urlObj.hostname.replace(/\.$/, '');

		// Remove `www.`
		if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
			// Each label should be max 63 at length (min: 1).
			// Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
			// Each TLD should be up to 63 characters long (min: 2).
			// It is technically possible to have a single character TLD, but none currently exist.
			urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
		}
	}

	// Remove query unwanted parameters
	if (Array.isArray(options.removeQueryParameters)) {
		for (const key of [...urlObj.searchParams.keys()]) {
			if (testParameter(key, options.removeQueryParameters)) {
				urlObj.searchParams.delete(key);
			}
		}
	}

	if (options.removeQueryParameters === true) {
		urlObj.search = '';
	}

	// Sort query parameters
	if (options.sortQueryParameters) {
		urlObj.searchParams.sort();
	}

	if (options.removeTrailingSlash) {
		urlObj.pathname = urlObj.pathname.replace(/\/$/, '');
	}

	const oldUrlString = urlString;

	// Take advantage of many of the Node `url` normalizations
	urlString = urlObj.toString();

	if (!options.removeSingleSlash && urlObj.pathname === '/' && !oldUrlString.endsWith('/') && urlObj.hash === '') {
		urlString = urlString.replace(/\/$/, '');
	}

	// Remove ending `/` unless removeSingleSlash is false
	if ((options.removeTrailingSlash || urlObj.pathname === '/') && urlObj.hash === '' && options.removeSingleSlash) {
		urlString = urlString.replace(/\/$/, '');
	}

	// Restore relative protocol, if applicable
	if (hasRelativeProtocol && !options.normalizeProtocol) {
		urlString = urlString.replace(/^http:\/\//, '//');
	}

	// Remove http/https
	if (options.stripProtocol) {
		urlString = urlString.replace(/^(?:https?:)?\/\//, '');
	}

	return urlString;
};

module.exports = normalizeUrl;


/***/ }),

/***/ "./node_modules/.pnpm/parse-path@4.0.4/node_modules/parse-path/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/parse-path@4.0.4/node_modules/parse-path/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var protocols = __webpack_require__(/*! protocols */ "./node_modules/.pnpm/protocols@1.4.8/node_modules/protocols/lib/index.js"),
    isSsh = __webpack_require__(/*! is-ssh */ "./node_modules/.pnpm/is-ssh@1.4.0/node_modules/is-ssh/lib/index.js"),
    qs = __webpack_require__(/*! query-string */ "./node_modules/.pnpm/query-string@6.14.1/node_modules/query-string/index.js");

/**
 * parsePath
 * Parses the input url.
 *
 * @name parsePath
 * @function
 * @param {String} url The input url.
 * @return {Object} An object containing the following fields:
 *
 *  - `protocols` (Array): An array with the url protocols (usually it has one element).
 *  - `protocol` (String): The first protocol, `"ssh"` (if the url is a ssh url) or `"file"`.
 *  - `port` (null|Number): The domain port.
 *  - `resource` (String): The url domain (including subdomains).
 *  - `user` (String): The authentication user (usually for ssh urls).
 *  - `pathname` (String): The url pathname.
 *  - `hash` (String): The url hash.
 *  - `search` (String): The url querystring value.
 *  - `href` (String): The input url.
 *  - `query` (Object): The url querystring, parsed as object.
 */
function parsePath(url) {
    url = (url || "").trim().replace(/\r?\n|\r/gm, "");
    var output = {
        protocols: protocols(url),
        protocol: null,
        port: null,
        resource: "",
        user: "",
        pathname: "",
        hash: "",
        search: "",
        href: url,
        query: Object.create(null)
    },
        protocolIndex = url.indexOf("://"),
        resourceIndex = -1,
        splits = null,
        parts = null;

    if (url.startsWith(".")) {
        if (url.startsWith("./")) {
            url = url.substring(2);
        }
        output.pathname = url;
        output.protocol = "file";
    }

    var firstChar = url.charAt(1);
    if (!output.protocol) {
        output.protocol = output.protocols[0];
        if (!output.protocol) {
            if (isSsh(url)) {
                output.protocol = "ssh";
            } else if (firstChar === "/" || firstChar === "~") {
                url = url.substring(2);
                output.protocol = "file";
            } else {
                output.protocol = "file";
            }
        }
    }

    if (protocolIndex !== -1) {
        url = url.substring(protocolIndex + 3);
    }

    parts = url.split(/\/|\\/);
    if (output.protocol !== "file") {
        output.resource = parts.shift();
    } else {
        output.resource = "";
    }

    // user@domain
    splits = output.resource.split("@");
    if (splits.length === 2) {
        output.user = splits[0];
        output.resource = splits[1];
    }

    // domain.com:port
    splits = output.resource.split(":");
    if (splits.length === 2) {
        output.resource = splits[0];
        var port = splits[1];
        if (port) {
            output.port = Number(port);
            if (isNaN(output.port) || port.match(/^\d+$/) === null) {
                output.port = null;
                parts.unshift(port);
            }
        } else {
            output.port = null;
        }
    }

    // Remove empty elements
    parts = parts.filter(Boolean);

    // Stringify the pathname
    if (output.protocol === "file") {
        output.pathname = output.href;
    } else {
        output.pathname = output.pathname || (output.protocol !== "file" || output.href[0] === "/" ? "/" : "") + parts.join("/");
    }

    // #some-hash
    splits = output.pathname.split("#");
    if (splits.length === 2) {
        output.pathname = splits[0];
        output.hash = splits[1];
    }

    // ?foo=bar
    splits = output.pathname.split("?");
    if (splits.length === 2) {
        output.pathname = splits[0];
        output.search = splits[1];
    }

    output.query = qs.parse(output.search);
    output.href = output.href.replace(/\/$/, "");
    output.pathname = output.pathname.replace(/\/$/, "");
    return output;
}

module.exports = parsePath;

/***/ }),

/***/ "./node_modules/.pnpm/parse-url@6.0.5/node_modules/parse-url/lib/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/parse-url@6.0.5/node_modules/parse-url/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var parsePath = __webpack_require__(/*! parse-path */ "./node_modules/.pnpm/parse-path@4.0.4/node_modules/parse-path/lib/index.js"),
    normalizeUrl = __webpack_require__(/*! normalize-url */ "./node_modules/.pnpm/normalize-url@6.1.0/node_modules/normalize-url/index.js");

/**
 * parseUrl
 * Parses the input url.
 *
 * **Note**: This *throws* if invalid urls are provided.
 *
 * @name parseUrl
 * @function
 * @param {String} url The input url.
 * @param {Boolean|Object} normalize Wheter to normalize the url or not.
 *                         Default is `false`. If `true`, the url will
 *                         be normalized. If an object, it will be the
 *                         options object sent to [`normalize-url`](https://github.com/sindresorhus/normalize-url).
 *
 *                         For SSH urls, normalize won't work.
 *
 * @return {Object} An object containing the following fields:
 *
 *  - `protocols` (Array): An array with the url protocols (usually it has one element).
 *  - `protocol` (String): The first protocol, `"ssh"` (if the url is a ssh url) or `"file"`.
 *  - `port` (null|Number): The domain port.
 *  - `resource` (String): The url domain (including subdomains).
 *  - `user` (String): The authentication user (usually for ssh urls).
 *  - `pathname` (String): The url pathname.
 *  - `hash` (String): The url hash.
 *  - `search` (String): The url querystring value.
 *  - `href` (String): The input url.
 *  - `query` (Object): The url querystring, parsed as object.
 */
function parseUrl(url) {
    var normalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof url !== "string" || !url.trim()) {
        throw new Error("Invalid url.");
    }
    if (normalize) {
        if ((typeof normalize === "undefined" ? "undefined" : _typeof(normalize)) !== "object") {
            normalize = {
                stripHash: false
            };
        }
        url = normalizeUrl(url, normalize);
    }
    var parsed = parsePath(url);
    return parsed;
}

module.exports = parseUrl;

/***/ }),

/***/ "./node_modules/.pnpm/protocols@1.4.8/node_modules/protocols/lib/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/protocols@1.4.8/node_modules/protocols/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * protocols
 * Returns the protocols of an input url.
 *
 * @name protocols
 * @function
 * @param {String} input The input url.
 * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.
 * @return {Array|String} The array of protocols or the specified protocol.
 */
module.exports = function protocols(input, first) {

    if (first === true) {
        first = 0;
    }

    var index = input.indexOf("://"),
        splits = input.substring(0, index).split("+").filter(Boolean);

    if (typeof first === "number") {
        return splits[first];
    }

    return splits;
};

/***/ }),

/***/ "./node_modules/.pnpm/protocols@2.0.1/node_modules/protocols/lib/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/protocols@2.0.1/node_modules/protocols/lib/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * protocols
 * Returns the protocols of an input url.
 *
 * @name protocols
 * @function
 * @param {String|URL} input The input url (string or `URL` instance)
 * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.
 * @return {Array|String} The array of protocols or the specified protocol.
 */
module.exports = function protocols(input, first) {

    if (first === true) {
        first = 0;
    }

    var prots = "";
    if (typeof input === "string") {
        try {
            prots = new URL(input).protocol;
        } catch (e) {}
    } else if (input && input.constructor === URL) {
        prots = input.protocol;
    }

    var splits = prots.split(/\:|\+/).filter(Boolean);

    if (typeof first === "number") {
        return splits[first];
    }

    return splits;
};

/***/ }),

/***/ "./node_modules/.pnpm/query-string@6.14.1/node_modules/query-string/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/query-string@6.14.1/node_modules/query-string/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/.pnpm/decode-uri-component@0.2.2/node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/.pnpm/filter-obj@1.1.0/node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/split-on-first@1.1.0/node_modules/split-on-first/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/strict-uri-encode@2.0.0/node_modules/strict-uri-encode/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/array.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/array.mjs ***!
  \********************************************************************************************/
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
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/is.mjs");

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

/***/ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/index.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/index.mjs ***!
  \********************************************************************************************/
/*! exports provided: isBoolean, isNumber, isString, isSymbol, isNull, isUndefined, isPrimitive, isNonPrimitive, is, isLike, isArrayOfBooleans, isArrayOfNumbers, isArrayOfStrings, isArrayOfSymbols, isArrayOfNulls, isArrayOfUndefineds, isArrayOfPrimitives, isArrayOfObjects, isArrayOf, isArrayOfLike, onlyBooleans, onlyNumbers, onlyStrings, onlySymbols, onlyNulls, onlyUndefineds, onlyPrimitives, onlyObjects, only, onlyLike */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/is.mjs");
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

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/array.mjs");
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

/* harmony import */ var _only__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./only */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/only.mjs");
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

/***/ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/is.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/is.mjs ***!
  \*****************************************************************************************/
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

/***/ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/only.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/only.mjs ***!
  \*******************************************************************************************/
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
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/is.mjs");

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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/environment.mjs":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/environment.mjs ***!
  \***********************************************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/errors.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/errors.mjs ***!
  \******************************************************************************************************************************************************/
/*! exports provided: explanation, failureDescriber */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "explanation", function() { return explanation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failureDescriber", function() { return failureDescriber; });
/* harmony import */ var lines_unlines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lines-unlines */ "./node_modules/.pnpm/lines-unlines@1.0.0/node_modules/lines-unlines/dist/index.mjs");

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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/index.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/index.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: environment, errors, log, operations, preferences, stylesheets, userscripter */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/environment.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return _environment__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/errors.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return _errors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/log.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "log", function() { return _log__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/operations.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "operations", function() { return _operations__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preferences */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/preferences.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "preferences", function() { return _preferences__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/stylesheets.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "stylesheets", function() { return _stylesheets__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _userscripter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userscripter */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/userscripter.mjs");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userscripter", function() { return _userscripter__WEBPACK_IMPORTED_MODULE_6__; });










/***/ }),

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/log.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/log.mjs ***!
  \***************************************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/operations.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/operations.mjs ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: operation, run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operation", function() { return operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var ts_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-type-guards */ "./node_modules/.pnpm/ts-type-guards@0.6.1/node_modules/ts-type-guards/dist/index.mjs");

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
                        if (lastTry) {
                            failures.push({ result, operation: o });
                        }
                        else {
                            remaining.push(o);
                        }
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
    const e = queryResults.reduce((acc, x) => Object.defineProperty(acc, x.key, { value: x.element, enumerable: true }), {});
    return fromActionResult(o.action(e));
}
function fromActionResult(r) {
    return Object(ts_type_guards__WEBPACK_IMPORTED_MODULE_0__["isString"])(r) ? { reason: 1, message: r } : SUCCESS;
}


/***/ }),

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/preferences.mjs":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/preferences.mjs ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: subscriptable, loggingResponseHandler, noopResponseHandler */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptable", function() { return subscriptable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggingResponseHandler", function() { return loggingResponseHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noopResponseHandler", function() { return noopResponseHandler; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/log.mjs");

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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/stylesheets.mjs":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/stylesheets.mjs ***!
  \***********************************************************************************************************************************************************/
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

/***/ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/userscripter.mjs":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/userscripter.mjs ***!
  \************************************************************************************************************************************************************/
/*! exports provided: run */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/log.mjs");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/operations.mjs");
/* harmony import */ var _stylesheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheets */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/stylesheets.mjs");



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
    return new Promise((resolve) => {
        // TODO select via keyboard?
        let clickable = [
            document.getElementsByTagName("a"),
            document.getElementsByTagName("button"),
            document.querySelectorAll("[role=button]"),
        ];
        const iframeOverlays = [];
        let lastElement = document.body;
        let overHandler = (e) => {
            let target = e.target;
            if (target === null) {
                return;
            }
            lastElement = target;
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
            const selectionClass = "html-tree-selection";
            if (target.classList.contains(selectionClass)) {
                target.classList.remove(selectionClass);
            }
            e.stopPropagation();
        };
        let clickHandler = (e) => {
            disable();
            let target = e.target;
            if (target === null) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            if (target.classList.contains("html-tree-selection-overlay")) {
                if (target.dataset.index) {
                    target = iframeOverlays[parseInt(target.dataset.index, 10)].iframe;
                }
                else {
                    console.warn("maybe failed to find iframe?", target, iframeOverlays);
                }
            }
            resolve(target);
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
            window.removeEventListener("scroll", updateOverlayPositions);
            window.removeEventListener("resize", updateOverlayPositions);
        };
        const selectNode = (el) => {
            return el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        };
        const unselectNode = (el) => {
            return el.dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
        };
        const clearCurrentSelection = () => {
            clickable.forEach((c) => {
                for (var i = 0; i < c.length; i++) {
                    unselectNode(c[i]);
                }
            });
        };
        const moveSelectionToElement = (el) => {
            clearCurrentSelection();
            selectNode(el);
        };
        const moveSelectionToParent = () => {
            const parent = lastElement.parentElement;
            if (parent !== null) {
                moveSelectionToElement(parent);
            }
        };
        const moveSelectionToChild = () => {
            const child = lastElement.children && lastElement.children[0];
            if (child && child !== null) {
                moveSelectionToElement(child);
            }
        };
        const moveSelectionToNextSibling = () => {
            const sibling = lastElement.nextElementSibling;
            if (sibling !== null) {
                moveSelectionToElement(sibling);
            }
        };
        const moveSelectionToPrevSibling = () => {
            const sibling = lastElement.previousElementSibling;
            if (sibling !== null) {
                moveSelectionToElement(sibling);
            }
        };
        let keyHandler = (e) => {
            const h = {
                Escape: disable,
                ArrowLeft: moveSelectionToParent,
                ArrowRight: moveSelectionToChild,
                ArrowUp: moveSelectionToNextSibling,
                ArrowDown: moveSelectionToPrevSibling,
            };
            console.debug(e.key);
            // @ts-ignore
            const handler = h[e.key];
            handler && handler();
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
        // enable
        window.addEventListener("scroll", updateOverlayPositions);
        window.addEventListener("resize", updateOverlayPositions);
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
    });
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
/* harmony import */ var _typed_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @typed/compose */ "./node_modules/.pnpm/@typed+compose@1.0.0/node_modules/@typed/compose/lib.es2015/index.js");
/* harmony import */ var userscripter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/index.mjs");
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
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! git-url-parse */ "./node_modules/.pnpm/git-url-parse@11.6.0/node_modules/git-url-parse/lib/index.js");
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deep_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-entries */ "./node_modules/.pnpm/deep-entries@4.0.2/node_modules/deep-entries/dist/index.esm.js");
/* harmony import */ var userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! userscripter/run-time/environment */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/environment.mjs");
/* harmony import */ var userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! userscripter/run-time/operations */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/operations.mjs");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.ts");
/* harmony import */ var _helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/extractTableInfo */ "./src/helpers/extractTableInfo.ts");
/* harmony import */ var _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/htmlTreeSelection */ "./src/helpers/htmlTreeSelection.ts");







const OPERATIONS = [
    Object(userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Hacky automate page interaction",
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__["ALWAYS"],
        action: () => {
            const urlParams = new URLSearchParams(window.location.search);
            const autoEvalStr = urlParams.get("hackyDangerScript");
            if (autoEvalStr === null)
                return;
            const autoEvalCmd = atob(autoEvalStr);
            if (!localStorage.getItem(`hackydanger-allowed-${autoEvalStr}`) &&
                confirm("Ok to run command?")) {
                localStorage.setItem(`hackydanger-allowed-${autoEvalStr}`, "surethisistottallysafe");
            }
            localStorage.getItem(`hackydanger-allowed-${autoEvalStr}`) &&
                eval(autoEvalCmd);
        },
    }),
    Object(userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide parse github url",
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__["ALWAYS"],
        action: () => {
            // @ts-expect-error
            window.parseGitUrl = git_url_parse__WEBPACK_IMPORTED_MODULE_0___default.a;
        },
    }),
    Object(userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide helper funcs for surfingkeys",
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__["ALWAYS"],
        action: () => {
            // @ts-expect-error
            window.htmlTreeSelection = _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_6__["htmlTreeSelection"];
        },
    }),
    Object(userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide helper funcs for dev console",
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__["ALWAYS"],
        action: () => {
            const findKeyDeep = (obj, str) => {
                const flatObj = Object(deep_entries__WEBPACK_IMPORTED_MODULE_1__["deepEntries"])(obj, deep_entries__WEBPACK_IMPORTED_MODULE_1__["delimitEntry"]);
                return flatObj.filter(([k, _value]) => k.includes(str));
            };
            // @ts-expect-error
            window.findKeyDeep = findKeyDeep;
        },
    }),
    Object(userscripter_run_time_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Copy table as json via right click",
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_2__["ALWAYS"],
        action: () => {
            let menuActive = false;
            document.addEventListener("mousemove", function clickListener(event) {
                const maybeTable = event.target;
                if (!menuActive && maybeTable instanceof HTMLTableElement) {
                    GM_registerMenuCommand("Copy this table", () => {
                        const tableJson = Object(_helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_5__["extractTableAsJson"])(maybeTable);
                        Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["addToClipboard"])(JSON.stringify(tableJson, null, 4));
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
/* harmony import */ var userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! userscripter/run-time/environment */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/environment.mjs");
/* harmony import */ var userscripter_run_time_stylesheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/run-time/stylesheets */ "./node_modules/.pnpm/userscripter@5.0.0_ts-preferences@2.0.0_typescript@5.6.3_webpack-cli@4.10.0/node_modules/userscripter/run-time/stylesheets.mjs");


const STYLESHEETS = {
    general: Object(userscripter_run_time_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
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
    htmlTreeSelectionOverlay: Object(userscripter_run_time_stylesheets__WEBPACK_IMPORTED_MODULE_1__["stylesheet"])({
        condition: userscripter_run_time_environment__WEBPACK_IMPORTED_MODULE_0__["ALWAYS"],
        css: `
:root {
  --html-tree-selection-icon-url: "";
  --html-tree-selection-highlight: rgba(255, 0, 0, 0.5);
  --html-tree-selection-overlay-bg: rgba(128, 128, 128, 0.85);
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
  box-shadow: inset 0px 0px 25px var(--html-tree-selection-highlight);
}

.html-tree-selection-overlay {
  position: absolute;
  z-index: 2147483647;
  background:
    no-repeat center/70% var(--html-tree-selection-icon-url),
    color-mix(in srgb, currentColor 85%, transparent);
  mix-blend-mode: difference;
}

@media (prefers-color-scheme: dark) {
  :root {
    --html-tree-selection-highlight: rgba(0, 255, 255, 0.5);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFja3MtZGV2LWhlbHBlcnMudXNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHR5cGVkK2NvbXBvc2VAMS4wLjAvbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHR5cGVkK2NvbXBvc2VAMS4wLjAvbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2RlY29kZS11cmktY29tcG9uZW50QDAuMi4yL25vZGVfbW9kdWxlcy9kZWNvZGUtdXJpLWNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vZGVlcC1lbnRyaWVzQDQuMC4yL25vZGVfbW9kdWxlcy9kZWVwLWVudHJpZXMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZpbHRlci1vYmpAMS4xLjAvbm9kZV9tb2R1bGVzL2ZpbHRlci1vYmovaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdC11cEA0LjAuNS9ub2RlX21vZHVsZXMvZ2l0LXVwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0LXVybC1wYXJzZUAxMS42LjAvbm9kZV9tb2R1bGVzL2dpdC11cmwtcGFyc2UvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9pcy1zc2hAMS40LjAvbm9kZV9tb2R1bGVzL2lzLXNzaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2xpbmVzLXVubGluZXNAMS4wLjAvbm9kZV9tb2R1bGVzL2xpbmVzLXVubGluZXMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25vcm1hbGl6ZS11cmxANi4xLjAvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3BhcnNlLXBhdGhANC4wLjQvbm9kZV9tb2R1bGVzL3BhcnNlLXBhdGgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wYXJzZS11cmxANi4wLjUvbm9kZV9tb2R1bGVzL3BhcnNlLXVybC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3Byb3RvY29sc0AxLjQuOC9ub2RlX21vZHVsZXMvcHJvdG9jb2xzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vcHJvdG9jb2xzQDIuMC4xL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWVyeS1zdHJpbmdANi4xNC4xL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3NwbGl0LW9uLWZpcnN0QDEuMS4wL25vZGVfbW9kdWxlcy9zcGxpdC1vbi1maXJzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vc3RyaWN0LXVyaS1lbmNvZGVAMi4wLjAvbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90cy10eXBlLWd1YXJkc0AwLjYuMS9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3RzLXR5cGUtZ3VhcmRzQDAuNi4xL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vdHMtdHlwZS1ndWFyZHNAMC42LjEvbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaXMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS90cy10eXBlLWd1YXJkc0AwLjYuMS9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlcnNjcmlwdGVyQDUuMC4wX3RzLXByZWZlcmVuY2VzQDIuMC4wX3R5cGVzY3JpcHRANS42LjNfd2VicGFjay1jbGlANC4xMC4wL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvcnVuLXRpbWUvZW52aXJvbm1lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS91c2Vyc2NyaXB0ZXJANS4wLjBfdHMtcHJlZmVyZW5jZXNAMi4wLjBfdHlwZXNjcmlwdEA1LjYuM193ZWJwYWNrLWNsaUA0LjEwLjAvbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9ydW4tdGltZS9lcnJvcnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS91c2Vyc2NyaXB0ZXJANS4wLjBfdHMtcHJlZmVyZW5jZXNAMi4wLjBfdHlwZXNjcmlwdEA1LjYuM193ZWJwYWNrLWNsaUA0LjEwLjAvbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9ydW4tdGltZS9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZXJzY3JpcHRlckA1LjAuMF90cy1wcmVmZXJlbmNlc0AyLjAuMF90eXBlc2NyaXB0QDUuNi4zX3dlYnBhY2stY2xpQDQuMTAuMC9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL3J1bi10aW1lL2xvZy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZXJzY3JpcHRlckA1LjAuMF90cy1wcmVmZXJlbmNlc0AyLjAuMF90eXBlc2NyaXB0QDUuNi4zX3dlYnBhY2stY2xpQDQuMTAuMC9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL3J1bi10aW1lL29wZXJhdGlvbnMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS91c2Vyc2NyaXB0ZXJANS4wLjBfdHMtcHJlZmVyZW5jZXNAMi4wLjBfdHlwZXNjcmlwdEA1LjYuM193ZWJwYWNrLWNsaUA0LjEwLjAvbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9ydW4tdGltZS9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3VzZXJzY3JpcHRlckA1LjAuMF90cy1wcmVmZXJlbmNlc0AyLjAuMF90eXBlc2NyaXB0QDUuNi4zX3dlYnBhY2stY2xpQDQuMTAuMC9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL3J1bi10aW1lL3N0eWxlc2hlZXRzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlcnNjcmlwdGVyQDUuMC4wX3RzLXByZWZlcmVuY2VzQDIuMC4wX3R5cGVzY3JpcHRANS42LjNfd2VicGFjay1jbGlANC4xMC4wL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvcnVuLXRpbWUvdXNlcnNjcmlwdGVyLm1qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXRzLnRzIiwid2VicGFjazovLy8uL3NyYy91c2Vyc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gX2NvbXBvc2UxKGFyZ3VtZW50c1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIF9jb21wb3NlMihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIF9jb21wb3NlMyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gX2NvbXBvc2U0KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIGNhc2UgNTogcmV0dXJuIF9jb21wb3NlNShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XG4gICAgfVxuICAgIDtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMShmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UxRm4oYSkge1xuICAgICAgICByZXR1cm4gZihhKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UyKGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTJGbihhKSB7XG4gICAgICAgIHJldHVybiBnKGYoYSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTMoaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGgoZyhmKGEpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNChpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaShoKGcoZihhKSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U1KGosIGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTVGbihhKSB7XG4gICAgICAgIHJldHVybiBqKGkoaChnKGYoYSkpKSkpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NlLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9zZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG52YXIgdG9rZW4gPSAnJVthLWYwLTldezJ9JztcbnZhciBzaW5nbGVNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpfChbXiVdKz8pJywgJ2dpJyk7XG52YXIgbXVsdGlNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpKycsICdnaScpO1xuXG5mdW5jdGlvbiBkZWNvZGVDb21wb25lbnRzKGNvbXBvbmVudHMsIHNwbGl0KSB7XG5cdHRyeSB7XG5cdFx0Ly8gVHJ5IHRvIGRlY29kZSB0aGUgZW50aXJlIHN0cmluZyBmaXJzdFxuXHRcdHJldHVybiBbZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpXTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpIHx8IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKSB8fCBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIiwiY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5cbmNvbnN0IGdldEludGVyZmFjZSA9IHggPT4ge1xuXHRjb25zdCBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCk7XG5cdHJldHVybiBzdHIuc3Vic3RyaW5nKDgsIHN0ci5sZW5ndGggLSAxKVxufTtcblxuY29uc3QgaXNPYmplY3RMaWtlID0geCA9PiB7XG5cdGNvbnN0IHRhZyA9IGdldEludGVyZmFjZSh4KTtcblx0c3dpdGNoICh0YWcpIHtcblx0XHRjYXNlICdTdHJpbmcnOlxuXHRcdGNhc2UgJ051bWJlcic6XG5cdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0Y2FzZSAnUmVnRXhwJzpcblx0XHRjYXNlICdEYXRlJzpcblx0XHRcdHJldHVybiBmYWxzZVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGFnLnN0YXJ0c1dpdGgoJ0hUTUwnKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0J1xuXHR9XG59O1xuXG5mdW5jdGlvbiogZW50cmllc0l0ZXJhdG9yKGlucHV0KSB7XG5cdHN3aXRjaCAoZ2V0SW50ZXJmYWNlKGlucHV0KSkge1xuXHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRjYXNlICdNYXAnOlxuXHRcdGNhc2UgJ1VSTFNlYXJjaFBhcmFtcyc6XG5cdFx0XHR5aWVsZCogaW5wdXQuZW50cmllcygpO1xuXHRcdFx0YnJlYWtcblxuXHRcdGNhc2UgJ1NldCc6XG5cdFx0Y2FzZSAnTm9kZUxpc3QnOlxuXHRcdGNhc2UgJ0ludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhDbGFtcGVkQXJyYXknOlxuXHRcdGNhc2UgJ0ludDE2QXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQxNkFycmF5Jzpcblx0XHRjYXNlICdJbnQzMkFycmF5Jzpcblx0XHRjYXNlICdVaW50MzJBcnJheSc6XG5cdFx0Y2FzZSAnRmxvYXQzMkFycmF5Jzpcblx0XHRjYXNlICdGbG9hdDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ0ludDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ1VpbnQ2NEFycmF5Jzpcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGZvciAobGV0IHZhbHVlIG9mIGlucHV0KSB5aWVsZCBbaSsrLCB2YWx1ZV07XG5cdFx0XHRicmVha1xuXG5cdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKGlzT2JqZWN0TGlrZShpbnB1dCkpXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBpbnB1dClcblx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKVxuXHRcdFx0XHRcdFx0eWllbGQgW2tleSwgaW5wdXRba2V5XV07XG5cdFx0XHRicmVha1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4sIHBhcmVudENpcmN1bGFyU2V0KSB7XG5cdGNvbnN0IG1hcCA9IHR5cGVvZiBtYXBGbiA9PT0gJ2Z1bmN0aW9uJyA/IG1hcEZuIDogaWRlbnRpdHk7XG5cdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzSXRlcmF0b3IoaW5wdXQpKSB7XG5cdFx0aWYgKCFpc09iamVjdExpa2UodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9IG1hcChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0aWYgKGVudHJ5ICE9PSB1bmRlZmluZWQpIHlpZWxkIGVudHJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjaXJjdWxhclNldCA9IHBhcmVudENpcmN1bGFyU2V0IHx8IG5ldyBXZWFrU2V0KCk7XG5cdFx0XHRjaXJjdWxhclNldC5hZGQoaW5wdXQpO1xuXG5cdFx0XHRpZiAoIWNpcmN1bGFyU2V0Lmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0Zm9yIChsZXQgZW50cmllcyBvZiBkZWVwRW50cmllc0l0ZXJhdG9yXyhcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRcdFx0Y2lyY3VsYXJTZXRcblx0XHRcdFx0KSkge1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gbWFwKFtrZXksIC4uLmVudHJpZXNdKTtcblx0XHRcdFx0XHRpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkgeWllbGQgZW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24qIGRlZXBFbnRyaWVzSXRlcmF0b3IoaW5wdXQsIG1hcEZuKSB7XG5cdHlpZWxkKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4pO1xufVxuXG5jb25zdCBkZWVwRW50cmllcyA9IChpbnB1dCwgbWFwRm4pID0+XG5cdEFycmF5LmZyb20oZGVlcEVudHJpZXNJdGVyYXRvcihpbnB1dCwgbWFwRm4pKTtcblxuY29uc3Qgcm90YXRlRW50cnlCeSA9IG4gPT4gZW50cnkgPT4ge1xuXHRpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdGNvbnN0IG1vZCA9ICgtMSAqIChOdW1iZXIobikgfHwgMCkpICUgZW50cnkubGVuZ3RoO1xuXHRjb25zdCBrZXlzID0gZW50cnkuc2xpY2UoMCwgbW9kKTtcblx0Y29uc3QgdmFsdWUgPSBlbnRyeS5zbGljZShtb2QpO1xuXHRyZXR1cm4gWy4uLnZhbHVlLCAuLi5rZXlzXVxufTtcblxuY29uc3Qgcm90YXRlRW50cnkgPSByb3RhdGVFbnRyeUJ5KDEpO1xuXG5jb25zdCBkZWxpbWl0RW50cnlCeSA9IGRlbGltaXRlciA9PiBlbnRyeSA9PiB7XG5cdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0Y29uc3QgW3ZhbHVlLCAuLi5rZXlzXSA9IHJvdGF0ZUVudHJ5KGVudHJ5KTtcblx0cmV0dXJuIFtrZXlzLmpvaW4oZGVsaW1pdGVyKSwgdmFsdWVdXG59O1xuXG5jb25zdCBkZWxpbWl0RW50cnkgPSBkZWxpbWl0RW50cnlCeSgnLicpO1xuXG5leHBvcnQgeyBkZWVwRW50cmllcywgZGVlcEVudHJpZXNJdGVyYXRvciwgZGVsaW1pdEVudHJ5LCBkZWxpbWl0RW50cnlCeSwgcm90YXRlRW50cnksIHJvdGF0ZUVudHJ5QnkgfTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgcHJlZGljYXRlKSB7XG5cdHZhciByZXQgPSB7fTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHR2YXIgaXNBcnIgPSBBcnJheS5pc0FycmF5KHByZWRpY2F0ZSk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGtleSA9IGtleXNbaV07XG5cdFx0dmFyIHZhbCA9IG9ialtrZXldO1xuXG5cdFx0aWYgKGlzQXJyID8gcHJlZGljYXRlLmluZGV4T2Yoa2V5KSAhPT0gLTEgOiBwcmVkaWNhdGUoa2V5LCB2YWwsIG9iaikpIHtcblx0XHRcdHJldFtrZXldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xuXG52YXIgcGFyc2VVcmwgPSByZXF1aXJlKFwicGFyc2UtdXJsXCIpLFxuICAgIGlzU3NoID0gcmVxdWlyZShcImlzLXNzaFwiKTtcblxuLyoqXG4gKiBnaXRVcFxuICogUGFyc2VzIHRoZSBpbnB1dCB1cmwuXG4gKlxuICogQG5hbWUgZ2l0VXBcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB1cmwuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZ2l0IHVybCBwcm90b2NvbC5cbiAqICAtIGB0b2tlbmAgKFN0cmluZyk6IFRoZSBvYXV0aCB0b2tlbiAoY291bGQgYXBwZWFyIGluIHRoZSBodHRwcyB1cmxzKS5cbiAqL1xuZnVuY3Rpb24gZ2l0VXAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gcGFyc2VVcmwoaW5wdXQpO1xuICAgIG91dHB1dC50b2tlbiA9IFwiXCI7XG5cbiAgICB2YXIgc3BsaXRzID0gb3V0cHV0LnVzZXIuc3BsaXQoXCI6XCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChzcGxpdHNbMV0gPT09IFwieC1vYXV0aC1iYXNpY1wiKSB7XG4gICAgICAgICAgICBvdXRwdXQudG9rZW4gPSBzcGxpdHNbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzWzBdID09PSBcIngtdG9rZW4tYXV0aFwiKSB7XG4gICAgICAgICAgICBvdXRwdXQudG9rZW4gPSBzcGxpdHNbMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTc2gob3V0cHV0LnByb3RvY29scykgfHwgaXNTc2goaW5wdXQpKSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwic3NoXCI7XG4gICAgfSBlbHNlIGlmIChvdXRwdXQucHJvdG9jb2xzLmxlbmd0aCkge1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBvdXRwdXQucHJvdG9jb2xzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgIH1cblxuICAgIG91dHB1dC5ocmVmID0gb3V0cHV0LmhyZWYucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2l0VXA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnaXRVcCA9IHJlcXVpcmUoXCJnaXQtdXBcIik7XG5cbi8qKlxuICogZ2l0VXJsUGFyc2VcbiAqIFBhcnNlcyBhIEdpdCB1cmwuXG4gKlxuICogQG5hbWUgZ2l0VXJsUGFyc2VcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgR2l0IHVybCB0byBwYXJzZS5cbiAqIEByZXR1cm4ge0dpdFVybH0gVGhlIGBHaXRVcmxgIG9iamVjdCBjb250YWluaW5nOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZ2l0IHVybCBwcm90b2NvbC5cbiAqICAtIGB0b2tlbmAgKFN0cmluZyk6IFRoZSBvYXV0aCB0b2tlbiAoY291bGQgYXBwZWFyIGluIHRoZSBodHRwcyB1cmxzKS5cbiAqICAtIGBzb3VyY2VgIChTdHJpbmcpOiBUaGUgR2l0IHByb3ZpZGVyIChlLmcuIGBcImdpdGh1Yi5jb21cImApLlxuICogIC0gYG93bmVyYCAoU3RyaW5nKTogVGhlIHJlcG9zaXRvcnkgb3duZXIuXG4gKiAgLSBgbmFtZWAgKFN0cmluZyk6IFRoZSByZXBvc2l0b3J5IG5hbWUuXG4gKiAgLSBgcmVmYCAoU3RyaW5nKTogVGhlIHJlcG9zaXRvcnkgcmVmIChlLmcuLCBcIm1hc3RlclwiIG9yIFwiZGV2XCIpLlxuICogIC0gYGZpbGVwYXRoYCAoU3RyaW5nKTogQSBmaWxlcGF0aCByZWxhdGl2ZSB0byB0aGUgcmVwb3NpdG9yeSByb290LlxuICogIC0gYGZpbGVwYXRodHlwZWAgKFN0cmluZyk6IFRoZSB0eXBlIG9mIGZpbGVwYXRoIGluIHRoZSB1cmwgKFwiYmxvYlwiIG9yIFwidHJlZVwiKS5cbiAqICAtIGBmdWxsX25hbWVgIChTdHJpbmcpOiBUaGUgb3duZXIgYW5kIG5hbWUgdmFsdWVzIGluIHRoZSBgb3duZXIvbmFtZWAgZm9ybWF0LlxuICogIC0gYHRvU3RyaW5nYCAoRnVuY3Rpb24pOiBBIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSB0aGUgcGFyc2VkIHVybCBpbnRvIGFub3RoZXIgdXJsIHR5cGUuXG4gKiAgLSBgb3JnYW5pemF0aW9uYCAoU3RyaW5nKTogVGhlIG9yZ2FuaXphdGlvbiB0aGUgb3duZXIgYmVsb25ncyB0by4gVGhpcyBpcyBDbG91ZEZvcmdlIHNwZWNpZmljLlxuICogIC0gYGdpdF9zdWZmaXhgIChCb29sZWFuKTogV2hldGhlciB0byBhZGQgdGhlIGAuZ2l0YCBzdWZmaXggb3Igbm90LlxuICpcbiAqL1xuZnVuY3Rpb24gZ2l0VXJsUGFyc2UodXJsKSB7XG5cbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdXJsIG11c3QgYmUgYSBzdHJpbmcuXCIpO1xuICAgIH1cblxuICAgIHZhciB1cmxJbmZvID0gZ2l0VXAodXJsKSxcbiAgICAgICAgc291cmNlUGFydHMgPSB1cmxJbmZvLnJlc291cmNlLnNwbGl0KFwiLlwiKSxcbiAgICAgICAgc3BsaXRzID0gbnVsbDtcblxuICAgIHVybEluZm8udG9TdHJpbmcgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICByZXR1cm4gZ2l0VXJsUGFyc2Uuc3RyaW5naWZ5KHRoaXMsIHR5cGUpO1xuICAgIH07XG5cbiAgICB1cmxJbmZvLnNvdXJjZSA9IHNvdXJjZVBhcnRzLmxlbmd0aCA+IDIgPyBzb3VyY2VQYXJ0cy5zbGljZSgxIC0gc291cmNlUGFydHMubGVuZ3RoKS5qb2luKFwiLlwiKSA6IHVybEluZm8uc291cmNlID0gdXJsSW5mby5yZXNvdXJjZTtcblxuICAgIC8vIE5vdGU6IFNvbWUgaG9zdGluZyBzZXJ2aWNlcyAoZS5nLiBWaXN1YWwgU3R1ZGlvIFRlYW0gU2VydmljZXMpIGFsbG93IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGluIHRoZSByZXBvc2l0b3J5IGFuZCBvd25lciBuYW1lcyBzbyB3ZSBkZWNvZGUgdGhlIFVSTCBwaWVjZXMgdG8gZ2V0IHRoZSBjb3JyZWN0IHJlc3VsdFxuICAgIHVybEluZm8uZ2l0X3N1ZmZpeCA9IC9cXC5naXQkLy50ZXN0KHVybEluZm8ucGF0aG5hbWUpO1xuICAgIHVybEluZm8ubmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxJbmZvLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpKTtcbiAgICB1cmxJbmZvLm93bmVyID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybEluZm8udXNlcik7XG5cbiAgICBzd2l0Y2ggKHVybEluZm8uc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJnaXQuY2xvdWRmb3JnZS5jb21cIjpcbiAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSB1cmxJbmZvLnVzZXI7XG4gICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNvdXJjZVBhcnRzWzBdO1xuICAgICAgICAgICAgdXJsSW5mby5zb3VyY2UgPSBcImNsb3VkZm9yZ2UuY29tXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInZpc3VhbHN0dWRpby5jb21cIjpcbiAgICAgICAgICAgIC8vIEhhbmRsZSBWU1RTIFNTSCBVUkxzXG4gICAgICAgICAgICBpZiAodXJsSW5mby5yZXNvdXJjZSA9PT0gJ3ZzLXNzaC52aXN1YWxzdHVkaW8uY29tJykge1xuICAgICAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSBzcGxpdHNbMl0gKyAnLycgKyBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSAnX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdHNbMF0gPT09ICdEZWZhdWx0Q29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vcmdhbml6YXRpb24gKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy8nICsgdXJsSW5mby5vd25lciArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBBenVyZSBEZXZPcHMgKGZvcm1lcmx5IFZpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcylcbiAgICAgICAgY2FzZSBcImRldi5henVyZS5jb21cIjpcbiAgICAgICAgY2FzZSBcImF6dXJlLmNvbVwiOlxuICAgICAgICAgICAgaWYgKHVybEluZm8ucmVzb3VyY2UgPT09ICdzc2guZGV2LmF6dXJlLmNvbScpIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbNF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gJ19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRzWzBdID09PSAnRGVmYXVsdENvbGxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm9yZ2FuaXphdGlvbiArICcvJyArIHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybEluZm8ucXVlcnkgJiYgdXJsSW5mby5xdWVyeVsncGF0aCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSB1cmxJbmZvLnF1ZXJ5WydwYXRoJ10ucmVwbGFjZSgvXlxcLysvZywgJycpOyAvLyBTdHJpcCBsZWFkaW5nIHNsYXNoICgvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXJsSW5mby5xdWVyeSAmJiB1cmxJbmZvLnF1ZXJ5Wyd2ZXJzaW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbj1HQjxicmFuY2g+XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ucmVmID0gdXJsSW5mby5xdWVyeVsndmVyc2lvbiddLnJlcGxhY2UoL15HQi8sICcnKTsgLy8gcmVtb3ZlIEdCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgIHZhciBuYW1lSW5kZXggPSBzcGxpdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGFzaEluZGV4ID0gc3BsaXRzLmluZGV4T2YoXCItXCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciBibG9iSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcImJsb2JcIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwidHJlZVwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWl0SW5kZXggPSBzcGxpdHMuaW5kZXhPZihcImNvbW1pdFwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3JjSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcInNyY1wiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgcmF3SW5kZXggPSBzcGxpdHMuaW5kZXhPZihcInJhd1wiLCAyKTtcbiAgICAgICAgICAgICAgICBuYW1lSW5kZXggPSBkYXNoSW5kZXggPiAwID8gZGFzaEluZGV4IC0gMSA6IGJsb2JJbmRleCA+IDAgPyBibG9iSW5kZXggLSAxIDogdHJlZUluZGV4ID4gMCA/IHRyZWVJbmRleCAtIDEgOiBjb21taXRJbmRleCA+IDAgPyBjb21taXRJbmRleCAtIDEgOiBzcmNJbmRleCA+IDAgPyBzcmNJbmRleCAtIDEgOiByYXdJbmRleCA+IDAgPyByYXdJbmRleCAtIDEgOiBuYW1lSW5kZXg7XG5cbiAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzLnNsaWNlKDAsIG5hbWVJbmRleCkuam9pbignLycpO1xuICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1tuYW1lSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChjb21taXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmNvbW1pdCA9IHNwbGl0c1tuYW1lSW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybEluZm8ucmVmID0gXCJcIjtcbiAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGh0eXBlID0gXCJcIjtcbiAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG9mZnNldE5hbWVJbmRleCA9IHNwbGl0cy5sZW5ndGggPiBuYW1lSW5kZXggJiYgc3BsaXRzW25hbWVJbmRleCArIDFdID09PSBcIi1cIiA/IG5hbWVJbmRleCArIDEgOiBuYW1lSW5kZXg7XG4gICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IG9mZnNldE5hbWVJbmRleCArIDIgJiYgW1wicmF3XCIsIFwic3JjXCIsIFwiYmxvYlwiLCBcInRyZWVcIl0uaW5kZXhPZihzcGxpdHNbb2Zmc2V0TmFtZUluZGV4ICsgMV0pID49IDApIHtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRodHlwZSA9IHNwbGl0c1tvZmZzZXROYW1lSW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLnJlZiA9IHNwbGl0c1tvZmZzZXROYW1lSW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IG9mZnNldE5hbWVJbmRleCArIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aCA9IHNwbGl0cy5zbGljZShvZmZzZXROYW1lSW5kZXggKyAzKS5qb2luKCcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSB1cmxJbmZvLm93bmVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCF1cmxJbmZvLmZ1bGxfbmFtZSkge1xuICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXI7XG4gICAgICAgIGlmICh1cmxJbmZvLm5hbWUpIHtcbiAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lICYmICh1cmxJbmZvLmZ1bGxfbmFtZSArPSBcIi9cIik7XG4gICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSArPSB1cmxJbmZvLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQml0YnVja2V0IFNlcnZlclxuICAgIGlmICh1cmxJbmZvLm93bmVyLnN0YXJ0c1dpdGgoXCJzY20vXCIpKSB7XG4gICAgICAgIHVybEluZm8uc291cmNlID0gXCJiaXRidWNrZXQtc2VydmVyXCI7XG4gICAgICAgIHVybEluZm8ub3duZXIgPSB1cmxJbmZvLm93bmVyLnJlcGxhY2UoXCJzY20vXCIsIFwiXCIpO1xuICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHVybEluZm8ub3duZXI7XG4gICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArIFwiL1wiICsgdXJsSW5mby5uYW1lO1xuICAgIH1cblxuICAgIHZhciBiaXRidWNrZXQgPSAvKHByb2plY3RzfHVzZXJzKVxcLyguKj8pXFwvcmVwb3NcXC8oLio/KSgoXFwvLiokKXwkKS87XG4gICAgdmFyIG1hdGNoZXMgPSBiaXRidWNrZXQuZXhlYyh1cmxJbmZvLnBhdGhuYW1lKTtcbiAgICBpZiAobWF0Y2hlcyAhPSBudWxsKSB7XG4gICAgICAgIHVybEluZm8uc291cmNlID0gXCJiaXRidWNrZXQtc2VydmVyXCI7XG4gICAgICAgIGlmIChtYXRjaGVzWzFdID09PSBcInVzZXJzXCIpIHtcbiAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBcIn5cIiArIG1hdGNoZXNbMl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gbWF0Y2hlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gdXJsSW5mby5vd25lcjtcbiAgICAgICAgdXJsSW5mby5uYW1lID0gbWF0Y2hlc1szXTtcblxuICAgICAgICBzcGxpdHMgPSBtYXRjaGVzWzRdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAoW1wicmF3XCIsIFwiYnJvd3NlXCJdLmluZGV4T2Yoc3BsaXRzWzFdKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aHR5cGUgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSBzcGxpdHMuc2xpY2UoMikuam9pbignLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzWzFdID09PSBcImNvbW1pdHNcIiAmJiBzcGxpdHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHVybEluZm8uY29tbWl0ID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArIFwiL1wiICsgdXJsSW5mby5uYW1lO1xuXG4gICAgICAgIGlmICh1cmxJbmZvLnF1ZXJ5LmF0KSB7XG4gICAgICAgICAgICB1cmxJbmZvLnJlZiA9IHVybEluZm8ucXVlcnkuYXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxJbmZvLnJlZiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybEluZm87XG59XG5cbi8qKlxuICogc3RyaW5naWZ5XG4gKiBTdHJpbmdpZmllcyBhIGBHaXRVcmxgIG9iamVjdC5cbiAqXG4gKiBAbmFtZSBzdHJpbmdpZnlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtHaXRVcmx9IG9iaiBUaGUgcGFyc2VkIEdpdCB1cmwgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHN0cmluZ2lmaWVkIHVybCAoZGVmYXVsdCBgb2JqLnByb3RvY29sYCkuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB1cmwuXG4gKi9cbmdpdFVybFBhcnNlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZSB8fCAob2JqLnByb3RvY29scyAmJiBvYmoucHJvdG9jb2xzLmxlbmd0aCA/IG9iai5wcm90b2NvbHMuam9pbignKycpIDogb2JqLnByb3RvY29sKTtcbiAgICB2YXIgcG9ydCA9IG9iai5wb3J0ID8gXCI6XCIgKyBvYmoucG9ydCA6ICcnO1xuICAgIHZhciB1c2VyID0gb2JqLnVzZXIgfHwgJ2dpdCc7XG4gICAgdmFyIG1heWJlR2l0U3VmZml4ID0gb2JqLmdpdF9zdWZmaXggPyBcIi5naXRcIiA6IFwiXCI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzc2hcIjpcbiAgICAgICAgICAgIGlmIChwb3J0KSByZXR1cm4gXCJzc2g6Ly9cIiArIHVzZXIgKyBcIkBcIiArIG9iai5yZXNvdXJjZSArIHBvcnQgKyBcIi9cIiArIG9iai5mdWxsX25hbWUgKyBtYXliZUdpdFN1ZmZpeDtlbHNlIHJldHVybiB1c2VyICsgXCJAXCIgKyBvYmoucmVzb3VyY2UgKyBcIjpcIiArIG9iai5mdWxsX25hbWUgKyBtYXliZUdpdFN1ZmZpeDtcbiAgICAgICAgY2FzZSBcImdpdCtzc2hcIjpcbiAgICAgICAgY2FzZSBcInNzaCtnaXRcIjpcbiAgICAgICAgY2FzZSBcImZ0cFwiOlxuICAgICAgICBjYXNlIFwiZnRwc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyBcIjovL1wiICsgdXNlciArIFwiQFwiICsgb2JqLnJlc291cmNlICsgcG9ydCArIFwiL1wiICsgb2JqLmZ1bGxfbmFtZSArIG1heWJlR2l0U3VmZml4O1xuICAgICAgICBjYXNlIFwiaHR0cFwiOlxuICAgICAgICBjYXNlIFwiaHR0cHNcIjpcbiAgICAgICAgICAgIHZhciBhdXRoID0gb2JqLnRva2VuID8gYnVpbGRUb2tlbihvYmopIDogb2JqLnVzZXIgJiYgKG9iai5wcm90b2NvbHMuaW5jbHVkZXMoJ2h0dHAnKSB8fCBvYmoucHJvdG9jb2xzLmluY2x1ZGVzKCdodHRwcycpKSA/IG9iai51c2VyICsgXCJAXCIgOiBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyBcIjovL1wiICsgYXV0aCArIG9iai5yZXNvdXJjZSArIHBvcnQgKyBcIi9cIiArIGJ1aWxkUGF0aChvYmopICsgbWF5YmVHaXRTdWZmaXg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gb2JqLmhyZWY7XG4gICAgfVxufTtcblxuLyohXG4gKiBidWlsZFRva2VuXG4gKiBCdWlsZHMgT0F1dGggdG9rZW4gcHJlZml4IChoZWxwZXIgZnVuY3Rpb24pXG4gKlxuICogQG5hbWUgYnVpbGRUb2tlblxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0dpdFVybH0gb2JqIFRoZSBwYXJzZWQgR2l0IHVybCBvYmplY3QuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRva2VuIHByZWZpeFxuICovXG5mdW5jdGlvbiBidWlsZFRva2VuKG9iaikge1xuICAgIHN3aXRjaCAob2JqLnNvdXJjZSkge1xuICAgICAgICBjYXNlIFwiYml0YnVja2V0Lm9yZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwieC10b2tlbi1hdXRoOlwiICsgb2JqLnRva2VuICsgXCJAXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gb2JqLnRva2VuICsgXCJAXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFBhdGgob2JqKSB7XG4gICAgc3dpdGNoIChvYmouc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJiaXRidWNrZXQtc2VydmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJzY20vXCIgKyBvYmouZnVsbF9uYW1lO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBvYmouZnVsbF9uYW1lO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdpdFVybFBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcbnZhciBwcm90b2NvbHMgPSByZXF1aXJlKFwicHJvdG9jb2xzXCIpO1xuXG4vKipcbiAqIGlzU3NoXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgdmFsdWUgaXMgYSBzc2ggdXJsIG9yIG5vdC5cbiAqXG4gKiBAbmFtZSBpc1NzaFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gaW5wdXQgVGhlIGlucHV0IHVybCBvciBhbiBhcnJheSBvZiBwcm90b2NvbHMuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGlucHV0IGlzIGEgc3NoIHVybCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzU3NoKGlucHV0KSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmluZGV4T2YoXCJzc2hcIikgIT09IC0xIHx8IGlucHV0LmluZGV4T2YoXCJyc3luY1wiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHByb3RzID0gcHJvdG9jb2xzKGlucHV0KTtcbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZyhpbnB1dC5pbmRleE9mKFwiOi8vXCIpICsgMyk7XG4gICAgaWYgKGlzU3NoKHByb3RzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIFRoaXMgcHJvYmFibHkgY291bGQgYmUgaW1wcm92ZWQgOilcbiAgICB2YXIgdXJsUG9ydFBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXC4oW2EtekEtWlxcXFxkXSspOihcXFxcZCspXFwvJyk7XG4gICAgcmV0dXJuICFpbnB1dC5tYXRjaCh1cmxQb3J0UGF0dGVybikgJiYgaW5wdXQuaW5kZXhPZihcIkBcIikgPCBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NzaDsiLCJleHBvcnQgZnVuY3Rpb24gbGluZXMocykge1xuICAgIHJldHVybiBzID09PSBcIlwiID8gW10gOiBzLnJlcGxhY2UoL1xcbiQvLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmxpbmVzKGxzKSB7XG4gICAgcmV0dXJuIGxzLm1hcChsaW5lID0+IGxpbmUgKyBcIlxcblwiKS5qb2luKFwiXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuY29uc3QgREFUQV9VUkxfREVGQVVMVF9NSU1FX1RZUEUgPSAndGV4dC9wbGFpbic7XG5jb25zdCBEQVRBX1VSTF9ERUZBVUxUX0NIQVJTRVQgPSAndXMtYXNjaWknO1xuXG5jb25zdCB0ZXN0UGFyYW1ldGVyID0gKG5hbWUsIGZpbHRlcnMpID0+IHtcblx0cmV0dXJuIGZpbHRlcnMuc29tZShmaWx0ZXIgPT4gZmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwID8gZmlsdGVyLnRlc3QobmFtZSkgOiBmaWx0ZXIgPT09IG5hbWUpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplRGF0YVVSTCA9ICh1cmxTdHJpbmcsIHtzdHJpcEhhc2h9KSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gL15kYXRhOig/PHR5cGU+W14sXSo/KSwoPzxkYXRhPlteI10qPykoPzojKD88aGFzaD4uKikpPyQvLmV4ZWModXJsU3RyaW5nKTtcblxuXHRpZiAoIW1hdGNoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVSTDogJHt1cmxTdHJpbmd9YCk7XG5cdH1cblxuXHRsZXQge3R5cGUsIGRhdGEsIGhhc2h9ID0gbWF0Y2guZ3JvdXBzO1xuXHRjb25zdCBtZWRpYVR5cGUgPSB0eXBlLnNwbGl0KCc7Jyk7XG5cdGhhc2ggPSBzdHJpcEhhc2ggPyAnJyA6IGhhc2g7XG5cblx0bGV0IGlzQmFzZTY0ID0gZmFsc2U7XG5cdGlmIChtZWRpYVR5cGVbbWVkaWFUeXBlLmxlbmd0aCAtIDFdID09PSAnYmFzZTY0Jykge1xuXHRcdG1lZGlhVHlwZS5wb3AoKTtcblx0XHRpc0Jhc2U2NCA9IHRydWU7XG5cdH1cblxuXHQvLyBMb3dlcmNhc2UgTUlNRSB0eXBlXG5cdGNvbnN0IG1pbWVUeXBlID0gKG1lZGlhVHlwZS5zaGlmdCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gbWVkaWFUeXBlXG5cdFx0Lm1hcChhdHRyaWJ1dGUgPT4ge1xuXHRcdFx0bGV0IFtrZXksIHZhbHVlID0gJyddID0gYXR0cmlidXRlLnNwbGl0KCc9JykubWFwKHN0cmluZyA9PiBzdHJpbmcudHJpbSgpKTtcblxuXHRcdFx0Ly8gTG93ZXJjYXNlIGBjaGFyc2V0YFxuXHRcdFx0aWYgKGtleSA9PT0gJ2NoYXJzZXQnKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IERBVEFfVVJMX0RFRkFVTFRfQ0hBUlNFVCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYCR7a2V5fSR7dmFsdWUgPyBgPSR7dmFsdWV9YCA6ICcnfWA7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRNZWRpYVR5cGUgPSBbXG5cdFx0Li4uYXR0cmlidXRlc1xuXHRdO1xuXG5cdGlmIChpc0Jhc2U2NCkge1xuXHRcdG5vcm1hbGl6ZWRNZWRpYVR5cGUucHVzaCgnYmFzZTY0Jyk7XG5cdH1cblxuXHRpZiAobm9ybWFsaXplZE1lZGlhVHlwZS5sZW5ndGggIT09IDAgfHwgKG1pbWVUeXBlICYmIG1pbWVUeXBlICE9PSBEQVRBX1VSTF9ERUZBVUxUX01JTUVfVFlQRSkpIHtcblx0XHRub3JtYWxpemVkTWVkaWFUeXBlLnVuc2hpZnQobWltZVR5cGUpO1xuXHR9XG5cblx0cmV0dXJuIGBkYXRhOiR7bm9ybWFsaXplZE1lZGlhVHlwZS5qb2luKCc7Jyl9LCR7aXNCYXNlNjQgPyBkYXRhLnRyaW0oKSA6IGRhdGF9JHtoYXNoID8gYCMke2hhc2h9YCA6ICcnfWA7XG59O1xuXG5jb25zdCBub3JtYWxpemVVcmwgPSAodXJsU3RyaW5nLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZGVmYXVsdFByb3RvY29sOiAnaHR0cDonLFxuXHRcdG5vcm1hbGl6ZVByb3RvY29sOiB0cnVlLFxuXHRcdGZvcmNlSHR0cDogZmFsc2UsXG5cdFx0Zm9yY2VIdHRwczogZmFsc2UsXG5cdFx0c3RyaXBBdXRoZW50aWNhdGlvbjogdHJ1ZSxcblx0XHRzdHJpcEhhc2g6IGZhbHNlLFxuXHRcdHN0cmlwVGV4dEZyYWdtZW50OiB0cnVlLFxuXHRcdHN0cmlwV1dXOiB0cnVlLFxuXHRcdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyczogWy9edXRtX1xcdysvaV0sXG5cdFx0cmVtb3ZlVHJhaWxpbmdTbGFzaDogdHJ1ZSxcblx0XHRyZW1vdmVTaW5nbGVTbGFzaDogdHJ1ZSxcblx0XHRyZW1vdmVEaXJlY3RvcnlJbmRleDogZmFsc2UsXG5cdFx0c29ydFF1ZXJ5UGFyYW1ldGVyczogdHJ1ZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuXHQvLyBEYXRhIFVSTFxuXHRpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuXHRcdHJldHVybiBub3JtYWxpemVEYXRhVVJMKHVybFN0cmluZywgb3B0aW9ucyk7XG5cdH1cblxuXHRpZiAoL152aWV3LXNvdXJjZTovaS50ZXN0KHVybFN0cmluZykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2B2aWV3LXNvdXJjZTpgIGlzIG5vdCBzdXBwb3J0ZWQgYXMgaXQgaXMgYSBub24tc3RhbmRhcmQgcHJvdG9jb2wnKTtcblx0fVxuXG5cdGNvbnN0IGhhc1JlbGF0aXZlUHJvdG9jb2wgPSB1cmxTdHJpbmcuc3RhcnRzV2l0aCgnLy8nKTtcblx0Y29uc3QgaXNSZWxhdGl2ZVVybCA9ICFoYXNSZWxhdGl2ZVByb3RvY29sICYmIC9eXFwuKlxcLy8udGVzdCh1cmxTdHJpbmcpO1xuXG5cdC8vIFByZXBlbmQgcHJvdG9jb2xcblx0aWYgKCFpc1JlbGF0aXZlVXJsKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL14oPyEoPzpcXHcrOik/XFwvXFwvKXxeXFwvXFwvLywgb3B0aW9ucy5kZWZhdWx0UHJvdG9jb2wpO1xuXHR9XG5cblx0Y29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmxTdHJpbmcpO1xuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cCAmJiBvcHRpb25zLmZvcmNlSHR0cHMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZm9yY2VIdHRwYCBhbmQgYGZvcmNlSHR0cHNgIG9wdGlvbnMgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXInKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cCAmJiB1cmxPYmoucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG5cdFx0dXJsT2JqLnByb3RvY29sID0gJ2h0dHA6Jztcblx0fVxuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cHMgJiYgdXJsT2JqLnByb3RvY29sID09PSAnaHR0cDonKSB7XG5cdFx0dXJsT2JqLnByb3RvY29sID0gJ2h0dHBzOic7XG5cdH1cblxuXHQvLyBSZW1vdmUgYXV0aFxuXHRpZiAob3B0aW9ucy5zdHJpcEF1dGhlbnRpY2F0aW9uKSB7XG5cdFx0dXJsT2JqLnVzZXJuYW1lID0gJyc7XG5cdFx0dXJsT2JqLnBhc3N3b3JkID0gJyc7XG5cdH1cblxuXHQvLyBSZW1vdmUgaGFzaFxuXHRpZiAob3B0aW9ucy5zdHJpcEhhc2gpIHtcblx0XHR1cmxPYmouaGFzaCA9ICcnO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuc3RyaXBUZXh0RnJhZ21lbnQpIHtcblx0XHR1cmxPYmouaGFzaCA9IHVybE9iai5oYXNoLnJlcGxhY2UoLyM/On46dGV4dC4qPyQvaSwgJycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZSBzbGFzaGVzIGlmIG5vdCBwcmVjZWRlZCBieSBhIHByb3RvY29sXG5cdGlmICh1cmxPYmoucGF0aG5hbWUpIHtcblx0XHR1cmxPYmoucGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUucmVwbGFjZSgvKD88IVxcYig/OlthLXpdW2EtelxcZCtcXC0uXXsxLDUwfTopKVxcL3syLH0vZywgJy8nKTtcblx0fVxuXG5cdC8vIERlY29kZSBVUkkgb2N0ZXRzXG5cdGlmICh1cmxPYmoucGF0aG5hbWUpIHtcblx0XHR0cnkge1xuXHRcdFx0dXJsT2JqLnBhdGhuYW1lID0gZGVjb2RlVVJJKHVybE9iai5wYXRobmFtZSk7XG5cdFx0fSBjYXRjaCAoXykge31cblx0fVxuXG5cdC8vIFJlbW92ZSBkaXJlY3RvcnkgaW5kZXhcblx0aWYgKG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXggPT09IHRydWUpIHtcblx0XHRvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4ID0gWy9eaW5kZXhcXC5bYS16XSskL107XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4KSAmJiBvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4Lmxlbmd0aCA+IDApIHtcblx0XHRsZXQgcGF0aENvbXBvbmVudHMgPSB1cmxPYmoucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRjb25zdCBsYXN0Q29tcG9uZW50ID0gcGF0aENvbXBvbmVudHNbcGF0aENvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cblx0XHRpZiAodGVzdFBhcmFtZXRlcihsYXN0Q29tcG9uZW50LCBvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4KSkge1xuXHRcdFx0cGF0aENvbXBvbmVudHMgPSBwYXRoQ29tcG9uZW50cy5zbGljZSgwLCBwYXRoQ29tcG9uZW50cy5sZW5ndGggLSAxKTtcblx0XHRcdHVybE9iai5wYXRobmFtZSA9IHBhdGhDb21wb25lbnRzLnNsaWNlKDEpLmpvaW4oJy8nKSArICcvJztcblx0XHR9XG5cdH1cblxuXHRpZiAodXJsT2JqLmhvc3RuYW1lKSB7XG5cdFx0Ly8gUmVtb3ZlIHRyYWlsaW5nIGRvdFxuXHRcdHVybE9iai5ob3N0bmFtZSA9IHVybE9iai5ob3N0bmFtZS5yZXBsYWNlKC9cXC4kLywgJycpO1xuXG5cdFx0Ly8gUmVtb3ZlIGB3d3cuYFxuXHRcdGlmIChvcHRpb25zLnN0cmlwV1dXICYmIC9ed3d3XFwuKD8hd3d3XFwuKSg/OlthLXpcXC1cXGRdezEsNjN9KVxcLig/OlthLXouXFwtXFxkXXsyLDYzfSkkLy50ZXN0KHVybE9iai5ob3N0bmFtZSkpIHtcblx0XHRcdC8vIEVhY2ggbGFiZWwgc2hvdWxkIGJlIG1heCA2MyBhdCBsZW5ndGggKG1pbjogMSkuXG5cdFx0XHQvLyBTb3VyY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hvc3RuYW1lI1Jlc3RyaWN0aW9uc19vbl92YWxpZF9ob3N0X25hbWVzXG5cdFx0XHQvLyBFYWNoIFRMRCBzaG91bGQgYmUgdXAgdG8gNjMgY2hhcmFjdGVycyBsb25nIChtaW46IDIpLlxuXHRcdFx0Ly8gSXQgaXMgdGVjaG5pY2FsbHkgcG9zc2libGUgdG8gaGF2ZSBhIHNpbmdsZSBjaGFyYWN0ZXIgVExELCBidXQgbm9uZSBjdXJyZW50bHkgZXhpc3QuXG5cdFx0XHR1cmxPYmouaG9zdG5hbWUgPSB1cmxPYmouaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcXVlcnkgdW53YW50ZWQgcGFyYW1ldGVyc1xuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycykpIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBbLi4udXJsT2JqLnNlYXJjaFBhcmFtcy5rZXlzKCldKSB7XG5cdFx0XHRpZiAodGVzdFBhcmFtZXRlcihrZXksIG9wdGlvbnMucmVtb3ZlUXVlcnlQYXJhbWV0ZXJzKSkge1xuXHRcdFx0XHR1cmxPYmouc2VhcmNoUGFyYW1zLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycyA9PT0gdHJ1ZSkge1xuXHRcdHVybE9iai5zZWFyY2ggPSAnJztcblx0fVxuXG5cdC8vIFNvcnQgcXVlcnkgcGFyYW1ldGVyc1xuXHRpZiAob3B0aW9ucy5zb3J0UXVlcnlQYXJhbWV0ZXJzKSB7XG5cdFx0dXJsT2JqLnNlYXJjaFBhcmFtcy5zb3J0KCk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG5cdFx0dXJsT2JqLnBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHRjb25zdCBvbGRVcmxTdHJpbmcgPSB1cmxTdHJpbmc7XG5cblx0Ly8gVGFrZSBhZHZhbnRhZ2Ugb2YgbWFueSBvZiB0aGUgTm9kZSBgdXJsYCBub3JtYWxpemF0aW9uc1xuXHR1cmxTdHJpbmcgPSB1cmxPYmoudG9TdHJpbmcoKTtcblxuXHRpZiAoIW9wdGlvbnMucmVtb3ZlU2luZ2xlU2xhc2ggJiYgdXJsT2JqLnBhdGhuYW1lID09PSAnLycgJiYgIW9sZFVybFN0cmluZy5lbmRzV2l0aCgnLycpICYmIHVybE9iai5oYXNoID09PSAnJykge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGVuZGluZyBgL2AgdW5sZXNzIHJlbW92ZVNpbmdsZVNsYXNoIGlzIGZhbHNlXG5cdGlmICgob3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoIHx8IHVybE9iai5wYXRobmFtZSA9PT0gJy8nKSAmJiB1cmxPYmouaGFzaCA9PT0gJycgJiYgb3B0aW9ucy5yZW1vdmVTaW5nbGVTbGFzaCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Ly8gUmVzdG9yZSByZWxhdGl2ZSBwcm90b2NvbCwgaWYgYXBwbGljYWJsZVxuXHRpZiAoaGFzUmVsYXRpdmVQcm90b2NvbCAmJiAhb3B0aW9ucy5ub3JtYWxpemVQcm90b2NvbCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vLCAnLy8nKTtcblx0fVxuXG5cdC8vIFJlbW92ZSBodHRwL2h0dHBzXG5cdGlmIChvcHRpb25zLnN0cmlwUHJvdG9jb2wpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXig/Omh0dHBzPzopP1xcL1xcLy8sICcnKTtcblx0fVxuXG5cdHJldHVybiB1cmxTdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcbnZhciBwcm90b2NvbHMgPSByZXF1aXJlKFwicHJvdG9jb2xzXCIpLFxuICAgIGlzU3NoID0gcmVxdWlyZShcImlzLXNzaFwiKSxcbiAgICBxcyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7XG5cbi8qKlxuICogcGFyc2VQYXRoXG4gKiBQYXJzZXMgdGhlIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBwYXJzZVBhdGhcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgaW5wdXQgdXJsLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZmlyc3QgcHJvdG9jb2wsIGBcInNzaFwiYCAoaWYgdGhlIHVybCBpcyBhIHNzaCB1cmwpIG9yIGBcImZpbGVcImAuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHF1ZXJ5YCAoT2JqZWN0KTogVGhlIHVybCBxdWVyeXN0cmluZywgcGFyc2VkIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQYXRoKHVybCkge1xuICAgIHVybCA9ICh1cmwgfHwgXCJcIikudHJpbSgpLnJlcGxhY2UoL1xccj9cXG58XFxyL2dtLCBcIlwiKTtcbiAgICB2YXIgb3V0cHV0ID0ge1xuICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyh1cmwpLFxuICAgICAgICBwcm90b2NvbDogbnVsbCxcbiAgICAgICAgcG9ydDogbnVsbCxcbiAgICAgICAgcmVzb3VyY2U6IFwiXCIsXG4gICAgICAgIHVzZXI6IFwiXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB9LFxuICAgICAgICBwcm90b2NvbEluZGV4ID0gdXJsLmluZGV4T2YoXCI6Ly9cIiksXG4gICAgICAgIHJlc291cmNlSW5kZXggPSAtMSxcbiAgICAgICAgc3BsaXRzID0gbnVsbCxcbiAgICAgICAgcGFydHMgPSBudWxsO1xuXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIuL1wiKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSB1cmw7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXIgPSB1cmwuY2hhckF0KDEpO1xuICAgIGlmICghb3V0cHV0LnByb3RvY29sKSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IG91dHB1dC5wcm90b2NvbHNbMF07XG4gICAgICAgIGlmICghb3V0cHV0LnByb3RvY29sKSB7XG4gICAgICAgICAgICBpZiAoaXNTc2godXJsKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwic3NoXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2hhciA9PT0gXCIvXCIgfHwgZmlyc3RDaGFyID09PSBcIn5cIikge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3RvY29sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcocHJvdG9jb2xJbmRleCArIDMpO1xuICAgIH1cblxuICAgIHBhcnRzID0gdXJsLnNwbGl0KC9cXC98XFxcXC8pO1xuICAgIGlmIChvdXRwdXQucHJvdG9jb2wgIT09IFwiZmlsZVwiKSB7XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gXCJcIjtcbiAgICB9XG5cbiAgICAvLyB1c2VyQGRvbWFpblxuICAgIHNwbGl0cyA9IG91dHB1dC5yZXNvdXJjZS5zcGxpdChcIkBcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnVzZXIgPSBzcGxpdHNbMF07XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHNwbGl0c1sxXTtcbiAgICB9XG5cbiAgICAvLyBkb21haW4uY29tOnBvcnRcbiAgICBzcGxpdHMgPSBvdXRwdXQucmVzb3VyY2Uuc3BsaXQoXCI6XCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHNwbGl0c1swXTtcbiAgICAgICAgdmFyIHBvcnQgPSBzcGxpdHNbMV07XG4gICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICBvdXRwdXQucG9ydCA9IE51bWJlcihwb3J0KTtcbiAgICAgICAgICAgIGlmIChpc05hTihvdXRwdXQucG9ydCkgfHwgcG9ydC5tYXRjaCgvXlxcZCskLykgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucG9ydCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcGFydHMudW5zaGlmdChwb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dC5wb3J0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbXB0eSBlbGVtZW50c1xuICAgIHBhcnRzID0gcGFydHMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgLy8gU3RyaW5naWZ5IHRoZSBwYXRobmFtZVxuICAgIGlmIChvdXRwdXQucHJvdG9jb2wgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5ocmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5wYXRobmFtZSB8fCAob3V0cHV0LnByb3RvY29sICE9PSBcImZpbGVcIiB8fCBvdXRwdXQuaHJlZlswXSA9PT0gXCIvXCIgPyBcIi9cIiA6IFwiXCIpICsgcGFydHMuam9pbihcIi9cIik7XG4gICAgfVxuXG4gICAgLy8gI3NvbWUtaGFzaFxuICAgIHNwbGl0cyA9IG91dHB1dC5wYXRobmFtZS5zcGxpdChcIiNcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gc3BsaXRzWzBdO1xuICAgICAgICBvdXRwdXQuaGFzaCA9IHNwbGl0c1sxXTtcbiAgICB9XG5cbiAgICAvLyA/Zm9vPWJhclxuICAgIHNwbGl0cyA9IG91dHB1dC5wYXRobmFtZS5zcGxpdChcIj9cIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gc3BsaXRzWzBdO1xuICAgICAgICBvdXRwdXQuc2VhcmNoID0gc3BsaXRzWzFdO1xuICAgIH1cblxuICAgIG91dHB1dC5xdWVyeSA9IHFzLnBhcnNlKG91dHB1dC5zZWFyY2gpO1xuICAgIG91dHB1dC5ocmVmID0gb3V0cHV0LmhyZWYucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVBhdGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIHBhcnNlUGF0aCA9IHJlcXVpcmUoXCJwYXJzZS1wYXRoXCIpLFxuICAgIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCJub3JtYWxpemUtdXJsXCIpO1xuXG4vKipcbiAqIHBhcnNlVXJsXG4gKiBQYXJzZXMgdGhlIGlucHV0IHVybC5cbiAqXG4gKiAqKk5vdGUqKjogVGhpcyAqdGhyb3dzKiBpZiBpbnZhbGlkIHVybHMgYXJlIHByb3ZpZGVkLlxuICpcbiAqIEBuYW1lIHBhcnNlVXJsXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIGlucHV0IHVybC5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxPYmplY3R9IG5vcm1hbGl6ZSBXaGV0ZXIgdG8gbm9ybWFsaXplIHRoZSB1cmwgb3Igbm90LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBgZmFsc2VgLiBJZiBgdHJ1ZWAsIHRoZSB1cmwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgYmUgbm9ybWFsaXplZC4gSWYgYW4gb2JqZWN0LCBpdCB3aWxsIGJlIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyBvYmplY3Qgc2VudCB0byBbYG5vcm1hbGl6ZS11cmxgXShodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL25vcm1hbGl6ZS11cmwpLlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBTU0ggdXJscywgbm9ybWFsaXplIHdvbid0IHdvcmsuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZmlyc3QgcHJvdG9jb2wsIGBcInNzaFwiYCAoaWYgdGhlIHVybCBpcyBhIHNzaCB1cmwpIG9yIGBcImZpbGVcImAuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHF1ZXJ5YCAoT2JqZWN0KTogVGhlIHVybCBxdWVyeXN0cmluZywgcGFyc2VkIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VVcmwodXJsKSB7XG4gICAgdmFyIG5vcm1hbGl6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiB8fCAhdXJsLnRyaW0oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHVybC5cIik7XG4gICAgfVxuICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygbm9ybWFsaXplID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yobm9ybWFsaXplKSkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IHtcbiAgICAgICAgICAgICAgICBzdHJpcEhhc2g6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IG5vcm1hbGl6ZVVybCh1cmwsIG5vcm1hbGl6ZSk7XG4gICAgfVxuICAgIHZhciBwYXJzZWQgPSBwYXJzZVBhdGgodXJsKTtcbiAgICByZXR1cm4gcGFyc2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlVXJsOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIHByb3RvY29sc1xuICogUmV0dXJucyB0aGUgcHJvdG9jb2xzIG9mIGFuIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBwcm90b2NvbHNcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB1cmwuXG4gKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBmaXJzdCBJZiBgdHJ1ZWAsIHRoZSBmaXJzdCBwcm90b2NvbCB3aWxsIGJlIHJldHVybmVkLiBJZiBudW1iZXIsIGl0IHdpbGwgcmVwcmVzZW50IHRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBwcm90b2NvbHMgYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9IFRoZSBhcnJheSBvZiBwcm90b2NvbHMgb3IgdGhlIHNwZWNpZmllZCBwcm90b2NvbC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcm90b2NvbHMoaW5wdXQsIGZpcnN0KSB7XG5cbiAgICBpZiAoZmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmlyc3QgPSAwO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoXCI6Ly9cIiksXG4gICAgICAgIHNwbGl0cyA9IGlucHV0LnN1YnN0cmluZygwLCBpbmRleCkuc3BsaXQoXCIrXCIpLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHNwbGl0c1tmaXJzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogcHJvdG9jb2xzXG4gKiBSZXR1cm5zIHRoZSBwcm90b2NvbHMgb2YgYW4gaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIHByb3RvY29sc1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xVUkx9IGlucHV0IFRoZSBpbnB1dCB1cmwgKHN0cmluZyBvciBgVVJMYCBpbnN0YW5jZSlcbiAqIEBwYXJhbSB7Qm9vbGVhbnxOdW1iZXJ9IGZpcnN0IElmIGB0cnVlYCwgdGhlIGZpcnN0IHByb3RvY29sIHdpbGwgYmUgcmV0dXJuZWQuIElmIG51bWJlciwgaXQgd2lsbCByZXByZXNlbnQgdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHByb3RvY29scyBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fFN0cmluZ30gVGhlIGFycmF5IG9mIHByb3RvY29scyBvciB0aGUgc3BlY2lmaWVkIHByb3RvY29sLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByb3RvY29scyhpbnB1dCwgZmlyc3QpIHtcblxuICAgIGlmIChmaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBmaXJzdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHByb3RzID0gXCJcIjtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm90cyA9IG5ldyBVUkwoaW5wdXQpLnByb3RvY29sO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0gZWxzZSBpZiAoaW5wdXQgJiYgaW5wdXQuY29uc3RydWN0b3IgPT09IFVSTCkge1xuICAgICAgICBwcm90cyA9IGlucHV0LnByb3RvY29sO1xuICAgIH1cblxuICAgIHZhciBzcGxpdHMgPSBwcm90cy5zcGxpdCgvXFw6fFxcKy8pLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHNwbGl0c1tmaXJzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbmNvbnN0IGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5jb25zdCBzcGxpdE9uRmlyc3QgPSByZXF1aXJlKCdzcGxpdC1vbi1maXJzdCcpO1xuY29uc3QgZmlsdGVyT2JqZWN0ID0gcmVxdWlyZSgnZmlsdGVyLW9iaicpO1xuXG5jb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHZhbHVlID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSByZXN1bHQubGVuZ3RoO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgaW5kZXgsICddJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHQuLi5yZXN1bHQsXG5cdFx0XHRcdFx0W2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGVuY29kZShpbmRleCwgb3B0aW9ucyksICddPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXG5cdFx0XHRcdF07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBbW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbW3Jlc3VsdCwgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKV07XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIGVuY29kZShrZXksIG9wdGlvbnMpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0FycmF5ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblx0XHRcdFx0Y29uc3QgaXNFbmNvZGVkQXJyYXkgPSAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNBcnJheSAmJiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpKTtcblx0XHRcdFx0dmFsdWUgPSBpc0VuY29kZWRBcnJheSA/IGRlY29kZSh2YWx1ZSwgb3B0aW9ucykgOiB2YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBpc0FycmF5IHx8IGlzRW5jb2RlZEFycmF5ID8gdmFsdWUuc3BsaXQob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikubWFwKGl0ZW0gPT4gZGVjb2RlKGl0ZW0sIG9wdGlvbnMpKSA6IHZhbHVlID09PSBudWxsID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gbmV3VmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcih2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCB2YWx1ZS5sZW5ndGggIT09IDEpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdhcnJheUZvcm1hdFNlcGFyYXRvciBtdXN0IGJlIHNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRpb25zLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGVjb2RlKSB7XG5cdFx0cmV0dXJuIGRlY29kZUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKVxuXHRcdFx0LnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSlcblx0XHRcdC5tYXAoa2V5ID0+IGlucHV0W2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYXNoKGlucHV0KSB7XG5cdGNvbnN0IGhhc2hTdGFydCA9IGlucHV0LmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRpbnB1dCA9IGlucHV0LnNsaWNlKDAsIGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2godXJsKSB7XG5cdGxldCBoYXNoID0gJyc7XG5cdGNvbnN0IGhhc2hTdGFydCA9IHVybC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aGFzaCA9IHVybC5zbGljZShoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3QoaW5wdXQpIHtcblx0aW5wdXQgPSByZW1vdmVIYXNoKGlucHV0KTtcblx0Y29uc3QgcXVlcnlTdGFydCA9IGlucHV0LmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0LnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5wYXJzZU51bWJlcnMgJiYgIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKSAmJiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnKSkge1xuXHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLnBhcnNlQm9vbGVhbnMgJiYgdmFsdWUgIT09IG51bGwgJiYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSkge1xuXHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZGVjb2RlOiB0cnVlLFxuXHRcdHNvcnQ6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnLFxuXHRcdHBhcnNlTnVtYmVyczogZmFsc2UsXG5cdFx0cGFyc2VCb29sZWFuczogZmFsc2Vcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdGNvbnN0IHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBxdWVyeSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXls/IyZdLywgJycpO1xuXG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwYXJhbSBvZiBxdWVyeS5zcGxpdCgnJicpKSB7XG5cdFx0aWYgKHBhcmFtID09PSAnJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFtrZXksIHZhbHVlXSA9IHNwbGl0T25GaXJzdChvcHRpb25zLmRlY29kZSA/IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpIDogcGFyYW0sICc9Jyk7XG5cblx0XHQvLyBNaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogWydjb21tYScsICdzZXBhcmF0b3InXS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0KSA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRmb3JtYXR0ZXIoZGVjb2RlKGtleSwgb3B0aW9ucyksIHZhbHVlLCByZXQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmV0KSkge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcblx0XHRcdFx0dmFsdWVba10gPSBwYXJzZVZhbHVlKHZhbHVlW2tdLCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0W2tleV0gPSBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRyZXR1cm4gKG9wdGlvbnMuc29ydCA9PT0gdHJ1ZSA/IE9iamVjdC5rZXlzKHJldCkuc29ydCgpIDogT2JqZWN0LmtleXMocmV0KS5zb3J0KG9wdGlvbnMuc29ydCkpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdGlmICghb2JqZWN0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3Qgc2hvdWxkRmlsdGVyID0ga2V5ID0+IChcblx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiBpc051bGxPclVuZGVmaW5lZChvYmplY3Rba2V5XSkpIHx8XG5cdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIG9iamVjdFtrZXldID09PSAnJylcblx0KTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Y29uc3Qgb2JqZWN0Q29weSA9IHt9O1xuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRpZiAoIXNob3VsZEZpbHRlcihrZXkpKSB7XG5cdFx0XHRvYmplY3RDb3B5W2tleV0gPSBvYmplY3Rba2V5XTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0Q29weSk7XG5cblx0aWYgKG9wdGlvbnMuc29ydCAhPT0gZmFsc2UpIHtcblx0XHRrZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcblx0fVxuXG5cdHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG5cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdC5yZWR1Y2UoZm9ybWF0dGVyKGtleSksIFtdKVxuXHRcdFx0XHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKSArICc9JyArIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9ICh1cmwsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCBbdXJsXywgaGFzaF0gPSBzcGxpdE9uRmlyc3QodXJsLCAnIycpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHtcblx0XHRcdHVybDogdXJsXy5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3QodXJsKSwgb3B0aW9ucylcblx0XHR9LFxuXHRcdG9wdGlvbnMgJiYgb3B0aW9ucy5wYXJzZUZyYWdtZW50SWRlbnRpZmllciAmJiBoYXNoID8ge2ZyYWdtZW50SWRlbnRpZmllcjogZGVjb2RlKGhhc2gsIG9wdGlvbnMpfSA6IHt9XG5cdCk7XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeVVybCA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgdXJsID0gcmVtb3ZlSGFzaChvYmplY3QudXJsKS5zcGxpdCgnPycpWzBdIHx8ICcnO1xuXHRjb25zdCBxdWVyeUZyb21VcmwgPSBleHBvcnRzLmV4dHJhY3Qob2JqZWN0LnVybCk7XG5cdGNvbnN0IHBhcnNlZFF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMucGFyc2UocXVlcnlGcm9tVXJsLCB7c29ydDogZmFsc2V9KTtcblxuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5hc3NpZ24ocGFyc2VkUXVlcnlGcm9tVXJsLCBvYmplY3QucXVlcnkpO1xuXHRsZXQgcXVlcnlTdHJpbmcgPSBleHBvcnRzLnN0cmluZ2lmeShxdWVyeSwgb3B0aW9ucyk7XG5cdGlmIChxdWVyeVN0cmluZykge1xuXHRcdHF1ZXJ5U3RyaW5nID0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG5cdH1cblxuXHRsZXQgaGFzaCA9IGdldEhhc2gob2JqZWN0LnVybCk7XG5cdGlmIChvYmplY3QuZnJhZ21lbnRJZGVudGlmaWVyKSB7XG5cdFx0aGFzaCA9IGAjJHtlbmNvZGUob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllciwgb3B0aW9ucyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHt1cmx9JHtxdWVyeVN0cmluZ30ke2hhc2h9YDtcbn07XG5cbmV4cG9ydHMucGljayA9IChpbnB1dCwgZmlsdGVyLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRwYXJzZUZyYWdtZW50SWRlbnRpZmllcjogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCB7dXJsLCBxdWVyeSwgZnJhZ21lbnRJZGVudGlmaWVyfSA9IGV4cG9ydHMucGFyc2VVcmwoaW5wdXQsIG9wdGlvbnMpO1xuXHRyZXR1cm4gZXhwb3J0cy5zdHJpbmdpZnlVcmwoe1xuXHRcdHVybCxcblx0XHRxdWVyeTogZmlsdGVyT2JqZWN0KHF1ZXJ5LCBmaWx0ZXIpLFxuXHRcdGZyYWdtZW50SWRlbnRpZmllclxuXHR9LCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydHMuZXhjbHVkZSA9IChpbnB1dCwgZmlsdGVyLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IGV4Y2x1c2lvbkZpbHRlciA9IEFycmF5LmlzQXJyYXkoZmlsdGVyKSA/IGtleSA9PiAhZmlsdGVyLmluY2x1ZGVzKGtleSkgOiAoa2V5LCB2YWx1ZSkgPT4gIWZpbHRlcihrZXksIHZhbHVlKTtcblxuXHRyZXR1cm4gZXhwb3J0cy5waWNrKGlucHV0LCBleGNsdXNpb25GaWx0ZXIsIG9wdGlvbnMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RyaW5nLCBzZXBhcmF0b3IpID0+IHtcblx0aWYgKCEodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGFyZ3VtZW50cyB0byBiZSBvZiB0eXBlIGBzdHJpbmdgJyk7XG5cdH1cblxuXHRpZiAoc2VwYXJhdG9yID09PSAnJykge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdGNvbnN0IHNlcGFyYXRvckluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VwYXJhdG9yKTtcblxuXHRpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRzdHJpbmcuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLFxuXHRcdHN0cmluZy5zbGljZShzZXBhcmF0b3JJbmRleCArIHNlcGFyYXRvci5sZW5ndGgpXG5cdF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCJpbXBvcnQgeyBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkJvb2xlYW5zKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh0cnVlKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdW1iZXJzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSgxKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmdzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShcIlwiKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTeW1ib2xzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShTeW1ib2woKSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVsbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKG51bGwpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlVuZGVmaW5lZHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHVuZGVmaW5lZCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mUHJpbWl0aXZlcyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZPYmplY3RzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZih0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4gaXMoQXJyYXkpKHhzKSAmJiB4cy5ldmVyeShpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsImV4cG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlLCB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgeyBpc0FycmF5T2ZCb29sZWFucywgaXNBcnJheU9mTnVtYmVycywgaXNBcnJheU9mU3RyaW5ncywgaXNBcnJheU9mU3ltYm9scywgaXNBcnJheU9mTnVsbHMsIGlzQXJyYXlPZlVuZGVmaW5lZHMsIGlzQXJyYXlPZlByaW1pdGl2ZXMsIGlzQXJyYXlPZk9iamVjdHMsIGlzQXJyYXlPZiwgaXNBcnJheU9mTGlrZSwgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgb25seUJvb2xlYW5zLCBvbmx5TnVtYmVycywgb25seVN0cmluZ3MsIG9ubHlTeW1ib2xzLCBvbmx5TnVsbHMsIG9ubHlVbmRlZmluZWRzLCBvbmx5UHJpbWl0aXZlcywgb25seU9iamVjdHMsIG9ubHksIG9ubHlMaWtlLCB9IGZyb20gXCIuL29ubHlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IFRZUEVfR1VBUkRTX1BSSU1JVElWRSA9IFtpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWRdO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm51bWJlclwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gVFlQRV9HVUFSRFNfUFJJTUlUSVZFLnNvbWUoZiA9PiBmKHgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vblByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KTtcbn1cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24obmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XG59XG5mdW5jdGlvbiBuYW1lZFR5cGVHdWFyZChjcmVhdG9yLCB0eXBlLCB0eXBlR3VhcmQpIHtcbiAgICByZXR1cm4gbmFtZWRGdW5jdGlvbihgJHtjcmVhdG9yLm5hbWV9KCR7dHlwZS5uYW1lfSlgLCB0eXBlR3VhcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVkVHlwZUd1YXJkKGlzLCB0eXBlLCAoeCkgPT4geCBpbnN0YW5jZW9mIHR5cGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlrZShyZWZlcmVuY2UpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgVFlQRV9HVUFSRFNfUFJJTUlUSVZFKSB7XG4gICAgICAgIGlmIChmKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoeCkgPT4gZih4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXMoQXJyYXkpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQXNBcnJheSA9IHJlZmVyZW5jZTtcbiAgICAgICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgKHJlZmVyZW5jZUFzQXJyYXkubGVuZ3RoID4gMCA/IHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZUFzQXJyYXlbMF0pKSA6IHRydWUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh4KSA9PiAoIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHgpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZmVyZW5jZSkuZXZlcnkoayA9PiBpc0xpa2UocmVmZXJlbmNlW2tdKSh4W2tdKSkpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzKHJlZmVyZW5jZS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXNMaWtlLm5hbWUgKyBgIGNhbm5vdCB1c2UgdGhpcyBvYmplY3QgYXMgcmVmZXJlbmNlIGJlY2F1c2UgaXQgaGFzIG5vIGNvbnN0cnVjdG9yOiBgICsgSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25seUJvb2xlYW5zKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc0Jvb2xlYW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdW1iZXJzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN0cmluZ3MoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3ltYm9scyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTeW1ib2wpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdWxscyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5kZWZpbmVkcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNVbmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlQcmltaXRpdmVzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU9iamVjdHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5KHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmx5LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBTFdBWVMgPSAoKSA9PiB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gKCkgPT4gZmFsc2U7XG5leHBvcnQgY29uc3QgRE9NQ09OVEVOVExPQURFRCA9IChzdGF0ZSkgPT4gc3RhdGUgIT09IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IExPQUQgPSAoc3RhdGUpID0+IHN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4iLCJpbXBvcnQgeyB1bmxpbmVzIH0gZnJvbSBcImxpbmVzLXVubGluZXNcIjtcbmNvbnN0IElOREVOVEFUSU9OID0gXCIgIFwiO1xuZnVuY3Rpb24gZm9ybWF0RGVwZW5kZW5jeShkKSB7XG4gICAgcmV0dXJuIElOREVOVEFUSU9OICsgZC5rZXkgKyBcIjogXCIgKyBkLnNlbGVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKGZhaWx1cmUpIHtcbiAgICBzd2l0Y2ggKGZhaWx1cmUucmVzdWx0LnJlYXNvbikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZXNlIGRlcGVuZGVuY2llcyB3ZXJlIG5vdCBmb3VuZDpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIHVubGluZXMoZmFpbHVyZS5yZXN1bHQuZGVwZW5kZW5jaWVzLm1hcChmb3JtYXREZXBlbmRlbmN5KSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIGZhaWxlZCB3aXRoIHRoaXMgZXJyb3I6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICBmYWlsdXJlLnJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmVEZXNjcmliZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmYWlsdXJlID0+IHVubGluZXMoW1xuICAgICAgICBgQ291bGQgbm90ICR7ZmFpbHVyZS5vcGVyYXRpb24uZGVzY3JpcHRpb259IG9uIHRoaXMgcGFnZTpgLFxuICAgICAgICBgYCxcbiAgICAgICAgSU5ERU5UQVRJT04gKyBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBgYCxcbiAgICAgICAgZXhwbGFuYXRpb24oZmFpbHVyZSkudHJpbSgpLFxuICAgICAgICBgYCxcbiAgICAgICAgYFRoaXMgcHJvYmxlbSBtaWdodCBiZSBjYXVzZWQgYnkgJHtjb250ZXh0LnNpdGVOYW1lfSBjaGFuZ2luZyBpdHMgY29udGVudC9zdHJ1Y3R1cmUsIGluIHdoaWNoIGNhc2UgJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9IG5lZWRzIHRvIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaXQncyBwcm9iYWJseSBhIGJ1ZyBpbiAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBJZiB5b3UgZmlsZSBhIGJ1ZyByZXBvcnQsIHBsZWFzZSBpbmNsdWRlIHRoaXMgbWVzc2FnZS5gLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIGVycm9ycyBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgcHJlZmVyZW5jZXMgZnJvbSBcIi4vcHJlZmVyZW5jZXNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgKiBhcyB1c2Vyc2NyaXB0ZXIgZnJvbSBcIi4vdXNlcnNjcmlwdGVyXCI7XG5leHBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIG9wZXJhdGlvbnMsIHByZWZlcmVuY2VzLCBzdHlsZXNoZWV0cywgdXNlcnNjcmlwdGVyLCB9O1xuIiwibGV0IHByZWZpeCA9IFwiXCI7XG5sZXQgbG9nZ2VyID0gY29uc29sZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmaXgocCkge1xuICAgIHByZWZpeCA9IHA7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGwpIHtcbiAgICBsb2dnZXIgPSBsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBsb2dnZXIubG9nKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHN0cikge1xuICAgIGxvZ2dlci5pbmZvKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHN0cikge1xuICAgIGxvZ2dlci53YXJuKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdHIpIHtcbiAgICBsb2dnZXIuZXJyb3IocHJlZml4LCBzdHIpO1xufVxuIiwiaW1wb3J0IHsgaXNOdWxsLCBpc051bWJlciwgaXNTdHJpbmcgfSBmcm9tIFwidHMtdHlwZS1ndWFyZHNcIjtcbmNvbnN0IFNVQ0NFU1MgPSB1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGxhbikge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uob3BlcmF0aW9ucywgZmFpbHVyZXMsIHRyaWVzTGVmdCkge1xuICAgICAgICBjb25zdCBsYXN0VHJ5ID0gaXNOdW1iZXIodHJpZXNMZWZ0KSAmJiB0cmllc0xlZnQgPD0gMDtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1RvUnVuTm93ID0gW107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IFtdO1xuICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJ1bk5vdyA9IG8uZGVmZXJVbnRpbCA9PT0gdW5kZWZpbmVkIHx8IG8uZGVmZXJVbnRpbChyZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIChzaG91bGRSdW5Ob3cgPyBvcGVyYXRpb25zVG9SdW5Ob3cgOiByZW1haW5pbmcpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnNUb1J1bk5vdykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5VG9QZXJmb3JtKG8pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0LnJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVzLnB1c2goeyByZXN1bHQsIG9wZXJhdGlvbjogbyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZy5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVzLnB1c2goeyByZXN1bHQsIG9wZXJhdGlvbjogbyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVjdXJzZShyZW1haW5pbmcsIGZhaWx1cmVzLCAoaXNOdW1iZXIodHJpZXNMZWZ0KVxuICAgICAgICAgICAgICAgID8gdHJpZXNMZWZ0IC0gMVxuICAgICAgICAgICAgICAgIDogcGxhbi50cnlVbnRpbChyZWFkeVN0YXRlKSA/IHBsYW4uZXh0cmFUcmllcyA6IHVuZGVmaW5lZCkpLCBwbGFuLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmYWlsdXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwbGFuLmhhbmRsZUZhaWx1cmVzKGZhaWx1cmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNlKHBsYW4ub3BlcmF0aW9ucy5maWx0ZXIobyA9PiBvLmNvbmRpdGlvbih3aW5kb3cpKSwgW10pO1xufVxuZnVuY3Rpb24gdHJ5VG9QZXJmb3JtKG8pIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBvLmRlcGVuZGVuY2llcyA9PT0gdW5kZWZpbmVkID8ge30gOiBvLmRlcGVuZGVuY2llcztcbiAgICBjb25zdCBxdWVyeVJlc3VsdHMgPSBPYmplY3QuZW50cmllcyhkZXBlbmRlbmNpZXMpLm1hcCgoW2tleSwgc2VsZWN0b3JdKSA9PiAoe1xuICAgICAgICBrZXksIHNlbGVjdG9yLCBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICB9KSk7XG4gICAgY29uc3QgbWlzc2luZ0RlcGVuZGVuY2llcyA9IHF1ZXJ5UmVzdWx0cy5maWx0ZXIoeCA9PiBpc051bGwoeC5lbGVtZW50KSk7XG4gICAgaWYgKG1pc3NpbmdEZXBlbmRlbmNpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyByZWFzb246IDAsIGRlcGVuZGVuY2llczogbWlzc2luZ0RlcGVuZGVuY2llcyB9O1xuICAgIH1cbiAgICBjb25zdCBlID0gcXVlcnlSZXN1bHRzLnJlZHVjZSgoYWNjLCB4KSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWNjLCB4LmtleSwgeyB2YWx1ZTogeC5lbGVtZW50LCBlbnVtZXJhYmxlOiB0cnVlIH0pLCB7fSk7XG4gICAgcmV0dXJuIGZyb21BY3Rpb25SZXN1bHQoby5hY3Rpb24oZSkpO1xufVxuZnVuY3Rpb24gZnJvbUFjdGlvblJlc3VsdChyKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHIpID8geyByZWFzb246IDEsIG1lc3NhZ2U6IHIgfSA6IFNVQ0NFU1M7XG59XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaXB0YWJsZShoYW5kbGVyKSB7XG4gICAgY29uc3QgY2hhbmdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogKGxpc3RlbmVyKSA9PiB7IGNoYW5nZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpOyB9LFxuICAgICAgICB1bnN1YnNjcmliZTogKGxpc3RlbmVyKSA9PiB7IGNoYW5nZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpOyB9LFxuICAgICAgICBoYW5kbGVyOiAoc3VtbWFyeSwgcHJlZmVyZW5jZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGYgPT4gZihzdW1tYXJ5LnByZWZlcmVuY2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dpbmdSZXNwb25zZUhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IHN1bW1hcnkucmVzcG9uc2U7XG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyAoJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5zYXZlZCl9KSB3YXMgaW52YWxpZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBDb3VsZCBub3Qgc2V0IHZhbHVlICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBpdCB3YXMgaW52YWxpZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgaGFkIHRoZSB3cm9uZyB0eXBlLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBjb3VsZCBub3QgYmUgcGFyc2VkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBzd2l0Y2ggKHN1bW1hcnkuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCByZWFkIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgbG9jYWxTdG9yYWdlIGNvdWxkIG5vdCBiZSBhY2Nlc3NlZC4gVXNpbmcgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShzdW1tYXJ5LnByZWZlcmVuY2UuZGVmYXVsdCl9LmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHNhdmUgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShzdW1tYXJ5LnJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgbG9jYWxTdG9yYWdlIGNvdWxkIG5vdCBiZSBhY2Nlc3NlZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUoc3VtbWFyeS5hY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGFzc2VydFVucmVhY2hhYmxlKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3BSZXNwb25zZUhhbmRsZXIoc3VtbWFyeSwgXykge1xuICAgIHJldHVybiBzdW1tYXJ5LnJlc3BvbnNlO1xufVxuZnVuY3Rpb24gYXNzZXJ0VW5yZWFjaGFibGUoeCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydFVucmVhY2hhYmxlOiBcIiArIHgpO1xufVxuIiwiY29uc3QgTUFUQ0hfQUxMID0gXCJhbGxcIjtcbmNvbnN0IE1BVENIX05PTkUgPSBcIm5vdCBhbGxcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNoZWV0KHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnQoc3R5bGVzaGVldHMpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBPYmplY3QuZW50cmllcyhzdHlsZXNoZWV0cykuZm9yRWFjaCgoW18sIHNoZWV0XSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgaWYgKHNoZWV0LmlkICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzdHlsZS5pZCA9IHNoZWV0LmlkO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHNoZWV0LmNzcztcbiAgICAgICAgc3R5bGUubWVkaWEgPSBzaGVldC5jb25kaXRpb24od2luZG93KSA/IE1BVENIX0FMTCA6IE1BVENIX05PTkU7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuY29uc3Qgc2V0TWVkaWFRdWVyeSA9IChtKSA9PiAocykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzLmlkKTtcbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG0pO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZW5hYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9BTEwpO1xuZXhwb3J0IGNvbnN0IGRpc2FibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX05PTkUpO1xuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXNoZWV0cyBmcm9tIFwiLi9zdHlsZXNoZWV0c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bih1c2Vyc2NyaXB0KSB7XG4gICAgbG9nLnNldFByZWZpeChgWyR7dXNlcnNjcmlwdC5uYW1lfV1gKTtcbiAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlKHVzZXJzY3JpcHQuaWQpO1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIGxvZy53YXJuaW5nKGBJdCBsb29rcyBhcyB0aG91Z2ggJHt1c2Vyc2NyaXB0Lm5hbWV9IGhhcyBhbHJlYWR5IHJ1biAoYmVjYXVzZSB0aGUgYXR0cmlidXRlIFwiJHthdHRyfVwiIHdhcyBmb3VuZCBvbiA8aGVhZD4pLiBTdG9wcGluZy5gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgXCJcIik7XG4gICAgICAgIHVzZXJzY3JpcHQuaW5pdGlhbEFjdGlvbigpO1xuICAgICAgICBzdHlsZXNoZWV0cy5pbnNlcnQodXNlcnNjcmlwdC5zdHlsZXNoZWV0cyk7XG4gICAgICAgIG9wZXJhdGlvbnMucnVuKHVzZXJzY3JpcHQub3BlcmF0aW9uc1BsYW4pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZShpZCkge1xuICAgIHJldHVybiBcImRhdGEtXCIgKyBpZCArIFwiLWhhcy1ydW5cIjtcbn1cbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0lOVEVSVkFMID0gMjAwOyAvLyBtc1xuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfRVhUUkFfVFJJRVMgPSAzO1xuIiwiY29uc3QgYXJyID0gQXJyYXkuZnJvbTtcbmNvbnN0IGV4dHJhY3RMaW5rZWRUZXh0ID0gKG5vZGUpID0+IHtcbiAgICBjb25zdCB0bXBOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYXJyKHRtcE5vZGUucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goKGVsKSA9PiAoZWwuaW5uZXJUZXh0ID0gYFske2VsLmlubmVyVGV4dH1dKCR7ZWwuaHJlZn0pYCkpO1xuICAgIHJldHVybiB0bXBOb2RlLmlubmVyVGV4dC50cmltKCk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYWJsZUFzSnNvbih0YWJsZSkge1xuICAgIC8vIElkZWFsbHkgZmlyc3QgY2hlY2sgaWYgdGFibGUgaXMgXCJyZWd1bGFyXCIgYWthIGhhcyBlcXVhbCBudW1iZXIgb2YgdGggdG8gdGQvdHJcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGlmICh0YWJsZS50SGVhZCAhPT0gbnVsbCkge1xuICAgICAgICBrZXlzID0gYXJyKHRhYmxlLnRIZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT4gZXh0cmFjdExpbmtlZFRleHQoZWwpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PiBleHRyYWN0TGlua2VkVGV4dChlbCkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyKHRhYmxlLnRCb2RpZXMpLmZsYXRNYXAoKGVsKSA9PiBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFDZWxscyA9IGFycih0YWJsZVJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikpLm1hcCgoZWwpID0+IGV4dHJhY3RMaW5rZWRUZXh0KGVsKSk7XG4gICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRm91bmQgYSByb3cgd2l0aCBhIG1pc21hdGNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFDZWxscztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgIFtkYXRhS2V5XTogZGF0YUNlbGxzW2lkeF0sXG4gICAgICAgIH0pLCB7fSk7XG4gICAgfSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlR2ZtVGFibGUodGFibGUpIHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PiBleHRyYWN0TGlua2VkVGV4dChlbCkpO1xuICAgIHJldHVybiBhcnIodGFibGUudEJvZGllcykubWFwKChlbCkgPT4gYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PiBleHRyYWN0TGlua2VkVGV4dChlbCkpO1xuICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKCh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgLi4udGFibGVSb3csXG4gICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICB9KSwge30pO1xuICAgIH0pKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBodG1sVHJlZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgLy8gVE9ETyBzZWxlY3QgdmlhIGtleWJvYXJkP1xuICAgICAgICBsZXQgY2xpY2thYmxlID0gW1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIiksXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9YnV0dG9uXVwiKSxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaWZyYW1lT3ZlcmxheXMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG92ZXJIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0RWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZnJhbWUgPSBpZnJhbWVPdmVybGF5c1twYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApXS5pZnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZhaWxlZCB0byBmaW5kIGlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgb3V0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2xhc3MgPSBcImh0bWwtdHJlZS1zZWxlY3Rpb25cIjtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdGlvbkNsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGlvbkNsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZGlzYWJsZSgpO1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheVwiKSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBpZnJhbWVPdmVybGF5c1twYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApXS5pZnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtYXliZSBmYWlsZWQgdG8gZmluZCBpZnJhbWU/XCIsIHRhcmdldCwgaWZyYW1lT3ZlcmxheXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRpc2FibGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNbaV0ub25jbGlja0JhY2t1cCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNbaV0ub25jbGlja0JhY2t1cDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmcmFtZU92ZXJsYXlzLmZvckVhY2goKG8pID0+IG8ub3ZlcmxheS5yZW1vdmUoKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yXCIpO1xuICAgICAgICAgICAgLy8gY2xlYW4gYW55IG9ycGhhbmVkIGhvdmVyIGFwcGxpZWQgY2xhc3NcbiAgICAgICAgICAgIGxldCBvcnBoYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICAgICAgICBpZiAob3JwaGFuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3JwaGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb3V0SGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2VsZWN0Tm9kZSA9IChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW92ZXJcIiwgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zZWxlY3ROb2RlID0gKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWwuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3V0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsZWFyQ3VycmVudFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2VsZWN0Tm9kZShjW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbW92ZVNlbGVjdGlvblRvRWxlbWVudCA9IChlbCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJDdXJyZW50U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBzZWxlY3ROb2RlKGVsKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbW92ZVNlbGVjdGlvblRvUGFyZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbGFzdEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50KHBhcmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub0NoaWxkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBsYXN0RWxlbWVudC5jaGlsZHJlbiAmJiBsYXN0RWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9OZXh0U2libGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBsYXN0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoc2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoc2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub1ByZXZTaWJsaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGxhc3RFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICBpZiAoc2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoc2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBrZXlIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGggPSB7XG4gICAgICAgICAgICAgICAgRXNjYXBlOiBkaXNhYmxlLFxuICAgICAgICAgICAgICAgIEFycm93TGVmdDogbW92ZVNlbGVjdGlvblRvUGFyZW50LFxuICAgICAgICAgICAgICAgIEFycm93UmlnaHQ6IG1vdmVTZWxlY3Rpb25Ub0NoaWxkLFxuICAgICAgICAgICAgICAgIEFycm93VXA6IG1vdmVTZWxlY3Rpb25Ub05leHRTaWJsaW5nLFxuICAgICAgICAgICAgICAgIEFycm93RG93bjogbW92ZVNlbGVjdGlvblRvUHJldlNpYmxpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlLmtleSk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaFtlLmtleV07XG4gICAgICAgICAgICBoYW5kbGVyICYmIGhhbmRsZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMgPSAoX2UpID0+IHtcbiAgICAgICAgICAgIGlmcmFtZU92ZXJsYXlzLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaWZyYW1lID0gby5pZnJhbWU7XG4gICAgICAgICAgICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSBpZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG92ZXJsYXkgPSBvLm92ZXJsYXk7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFggPSBpZnJhbWVDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IGlmcmFtZUNsaWVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBlbmFibGVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuICAgICAgICAvLyBvdmVycmlkZSBjbGljayBoYW5kbGVycyBvbiBhbnkgY2xpY2thYmxlIGVsZW1lbnRcbiAgICAgICAgY2xpY2thYmxlLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICBjW2ldLm9uY2xpY2tCYWNrdXAgPSBjW2ldLm9uY2xpY2s7XG4gICAgICAgICAgICAgICAgY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBpZnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyYW1lcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAgICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBsZXQgaWZyYW1lQ2xpZW50UmVjdCA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IGlmcmFtZUNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBpZnJhbWVDbGllbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2lmcmFtZUNsaWVudFJlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtpZnJhbWVDbGllbnRSZWN0LmhlaWdodH1weGA7XG4gICAgICAgICAgICBvdmVybGF5LmRhdGFzZXQuaW5kZXggPSBgJHtpZnJhbWVPdmVybGF5cy5sZW5ndGh9YDtcbiAgICAgICAgICAgIGlmcmFtZU92ZXJsYXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlmcmFtZTogaSxcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvclwiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvdXRIYW5kbGVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFkZFRvQ2xpcGJvYXJkID0gKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IFwiY2xpcGJvYXJkLXdyaXRlXCI7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5wZXJtaXNzaW9uc1xuICAgICAgICAucXVlcnkoeyBuYW1lOiBwZXJtaXNzaW9uTmFtZSB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT0gXCJncmFudGVkXCIgfHwgcmVzdWx0LnN0YXRlID09IFwicHJvbXB0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb250ZW50KS50aGVuKCgpID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRXJyb3IoXCJQZXJtaXNzaW9uIGZvciBjbGlwYm9hcmQtd3JpdGUgd2FzIG5vdCBvYnRhaW5lZCBcIiArIHJlc3VsdC5zdGF0ZSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGVsZW0pID0+IHtcbiAgICBjb25zdCBzaWJsaW5ncyA9IFtdO1xuICAgIGxldCBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBpZiAoIXNpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICAgIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gc2libGluZ3M7XG59O1xuZXhwb3J0IGNvbnN0IGFwcGVuZEJ0blRvRWxlbWVudHMgPSAoZWxlbWVudHMsIGNsaWNrSGFuZGxlciwgbW9kaWZ5QnRuKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoY29kZUJsb2NrKSA9PiB7XG4gICAgICAgIGNvZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0XCIpO1xuICAgICAgICBjb2RlQmxvY2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiamFja3MtZGV2LWhlbHBlcnMtb3V0ZXItd3JhcFwiID4ke2NvZGVCbG9jay5pbm5lckhUTUx9PC9zcGFuPmA7XG4gICAgICAgIGNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY29weUJ0bi5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpO1xuICAgICAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRtcENvZGVCbG9jayA9IGNvZGVCbG9jay5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRtcENvZGVCbG9jay5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wQ29kZUJsb2NrLnJlbW92ZUNoaWxkKGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGlja0hhbmRsZXIodG1wQ29kZUJsb2NrLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtb2RpZnlCdG4oY29weUJ0bik7XG4gICAgICAgIGNvZGVCbG9jay5hcHBlbmRDaGlsZChjb3B5QnRuKTtcbiAgICAgICAgcmV0dXJuIGNvcHlCdG47XG4gICAgfSk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGxFc01vZHVsZShtb2R1bGVVcmwpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibW9kdWxlXCIpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbW9kdWxlVXJsKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0gfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5sYXN0Q2hpbGQpO1xufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJAdHlwZWQvY29tcG9zZVwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQsIGVycm9ycywgbG9nLCB1c2Vyc2NyaXB0ZXIgfSBmcm9tIFwidXNlcnNjcmlwdGVyXCI7XG5pbXBvcnQgKiBhcyBDT05GSUcgZnJvbSBcIn5zcmMvY29uZmlnXCI7XG5pbXBvcnQgT1BFUkFUSU9OUyBmcm9tIFwifnNyYy9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBTSVRFIGZyb20gXCJ+c3JjL3NpdGVcIjtcbmltcG9ydCBTVFlMRVNIRUVUUyBmcm9tIFwifnNyYy9zdHlsZXNoZWV0c1wiO1xuaW1wb3J0IFUgZnJvbSBcIn5zcmMvdXNlcnNjcmlwdFwiO1xuY29uc3QgZGVzY3JpYmVGYWlsdXJlID0gZXJyb3JzLmZhaWx1cmVEZXNjcmliZXIoe1xuICAgIHNpdGVOYW1lOiBTSVRFLk5BTUUsXG4gICAgZXh0ZW5zaW9uTmFtZTogVS5uYW1lLFxuICAgIGxvY2F0aW9uOiBkb2N1bWVudC5sb2NhdGlvbixcbn0pO1xudXNlcnNjcmlwdGVyLnJ1bih7XG4gICAgaWQ6IFUuaWQsXG4gICAgbmFtZTogVS5uYW1lLFxuICAgIGluaXRpYWxBY3Rpb246ICgpID0+IGxvZy5sb2coYCR7VS5uYW1lfSAke1UudmVyc2lvbn1gKSxcbiAgICBzdHlsZXNoZWV0czogU1RZTEVTSEVFVFMsXG4gICAgb3BlcmF0aW9uc1BsYW46IHtcbiAgICAgICAgb3BlcmF0aW9uczogT1BFUkFUSU9OUyxcbiAgICAgICAgaW50ZXJ2YWw6IENPTkZJRy5PUEVSQVRJT05TX0lOVEVSVkFMLFxuICAgICAgICB0cnlVbnRpbDogZW52aXJvbm1lbnQuRE9NQ09OVEVOVExPQURFRCxcbiAgICAgICAgZXh0cmFUcmllczogQ09ORklHLk9QRVJBVElPTlNfRVhUUkFfVFJJRVMsXG4gICAgICAgIGhhbmRsZUZhaWx1cmVzOiBmYWlsdXJlcyA9PiBmYWlsdXJlcy5mb3JFYWNoKGNvbXBvc2UobG9nLmVycm9yLCBkZXNjcmliZUZhaWx1cmUpKSxcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQgcGFyc2VHaXRVcmwgZnJvbSBcImdpdC11cmwtcGFyc2VcIjtcbmltcG9ydCB7IGRlZXBFbnRyaWVzLCBkZWxpbWl0RW50cnkgfSBmcm9tIFwiZGVlcC1lbnRyaWVzXCI7XG5pbXBvcnQgeyBBTFdBWVMgfSBmcm9tIFwidXNlcnNjcmlwdGVyL3J1bi10aW1lL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBvcGVyYXRpb24gfSBmcm9tIFwidXNlcnNjcmlwdGVyL3J1bi10aW1lL29wZXJhdGlvbnNcIjtcbmltcG9ydCB7IGFkZFRvQ2xpcGJvYXJkIH0gZnJvbSBcIi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IHsgZXh0cmFjdFRhYmxlQXNKc29uIH0gZnJvbSBcIi4vaGVscGVycy9leHRyYWN0VGFibGVJbmZvXCI7XG5pbXBvcnQgeyBodG1sVHJlZVNlbGVjdGlvbiB9IGZyb20gXCIuL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb25cIjtcbmNvbnN0IE9QRVJBVElPTlMgPSBbXG4gICAgb3BlcmF0aW9uKHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGFja3kgYXV0b21hdGUgcGFnZSBpbnRlcmFjdGlvblwiLFxuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgY29uc3QgYXV0b0V2YWxTdHIgPSB1cmxQYXJhbXMuZ2V0KFwiaGFja3lEYW5nZXJTY3JpcHRcIik7XG4gICAgICAgICAgICBpZiAoYXV0b0V2YWxTdHIgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgYXV0b0V2YWxDbWQgPSBhdG9iKGF1dG9FdmFsU3RyKTtcbiAgICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGhhY2t5ZGFuZ2VyLWFsbG93ZWQtJHthdXRvRXZhbFN0cn1gKSAmJlxuICAgICAgICAgICAgICAgIGNvbmZpcm0oXCJPayB0byBydW4gY29tbWFuZD9cIikpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgaGFja3lkYW5nZXItYWxsb3dlZC0ke2F1dG9FdmFsU3RyfWAsIFwic3VyZXRoaXNpc3RvdHRhbGx5c2FmZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBoYWNreWRhbmdlci1hbGxvd2VkLSR7YXV0b0V2YWxTdHJ9YCkgJiZcbiAgICAgICAgICAgICAgICBldmFsKGF1dG9FdmFsQ21kKTtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBvcGVyYXRpb24oe1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIHBhcnNlIGdpdGh1YiB1cmxcIixcbiAgICAgICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgd2luZG93LnBhcnNlR2l0VXJsID0gcGFyc2VHaXRVcmw7XG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgb3BlcmF0aW9uKHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIHN1cmZpbmdrZXlzXCIsXG4gICAgICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIHdpbmRvdy5odG1sVHJlZVNlbGVjdGlvbiA9IGh0bWxUcmVlU2VsZWN0aW9uO1xuICAgICAgICB9LFxuICAgIH0pLFxuICAgIG9wZXJhdGlvbih7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgaGVscGVyIGZ1bmNzIGZvciBkZXYgY29uc29sZVwiLFxuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaW5kS2V5RGVlcCA9IChvYmosIHN0cikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYXRPYmogPSBkZWVwRW50cmllcyhvYmosIGRlbGltaXRFbnRyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXRPYmouZmlsdGVyKChbaywgX3ZhbHVlXSkgPT4gay5pbmNsdWRlcyhzdHIpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICB3aW5kb3cuZmluZEtleURlZXAgPSBmaW5kS2V5RGVlcDtcbiAgICAgICAgfSxcbiAgICB9KSxcbiAgICBvcGVyYXRpb24oe1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJDb3B5IHRhYmxlIGFzIGpzb24gdmlhIHJpZ2h0IGNsaWNrXCIsXG4gICAgICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtZW51QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uIGNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVRhYmxlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICghbWVudUFjdGl2ZSAmJiBtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBHTV9yZWdpc3Rlck1lbnVDb21tYW5kKFwiQ29weSB0aGlzIHRhYmxlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSnNvbiA9IGV4dHJhY3RUYWJsZUFzSnNvbihtYXliZVRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2xpcGJvYXJkKEpTT04uc3RyaW5naWZ5KHRhYmxlSnNvbiwgbnVsbCwgNCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVudUFjdGl2ZSAmJiAhKG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSksXG5dO1xuZXhwb3J0IGRlZmF1bHQgT1BFUkFUSU9OUztcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cbmltcG9ydCBVIGZyb20gXCIuL3VzZXJzY3JpcHRcIjtcbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQ09ERSA9IFwiY29kZVwiO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9ydW4tdGltZS9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgc3R5bGVzaGVldCB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvcnVuLXRpbWUvc3R5bGVzaGVldHNcIjtcbmNvbnN0IFNUWUxFU0hFRVRTID0ge1xuICAgIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgICAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICAgICAgY3NzOiBgXG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVuc2V0O1xuICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVyLW91dGVyLXdyYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0OmhvdmVyID4gLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldDpob3ZlciB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGAsXG4gICAgfSksXG4gICAgaHRtbFRyZWVTZWxlY3Rpb25PdmVybGF5OiBzdHlsZXNoZWV0KHtcbiAgICAgICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgICAgIGNzczogYFxuOnJvb3Qge1xuICAtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmw6IFwiXCI7XG4gIC0taHRtbC10cmVlLXNlbGVjdGlvbi1oaWdobGlnaHQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAtLWh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheS1iZzogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjg1KTtcbn1cblxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGEsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgaW5wdXQsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3Igc2VsZWN0LFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGJ1dHRvbixcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBkaXZbcm9sZT1idXR0b25dIHtcbiAgY3Vyc29yOiB2YXIoLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsKSwgY3Jvc3NoYWlyICFpbXBvcnRhbnQ7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uIHtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuMik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCB2YXIoLS1odG1sLXRyZWUtc2VsZWN0aW9uLWhpZ2hsaWdodCk7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGJhY2tncm91bmQ6XG4gICAgbm8tcmVwZWF0IGNlbnRlci83MCUgdmFyKC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybCksXG4gICAgY29sb3ItbWl4KGluIHNyZ2IsIGN1cnJlbnRDb2xvciA4NSUsIHRyYW5zcGFyZW50KTtcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOnJvb3Qge1xuICAgIC0taHRtbC10cmVlLXNlbGVjdGlvbi1oaWdobGlnaHQ6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbn1cbmAsXG4gICAgfSksXG59O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG4vLyBUaGlzIHRyaWNrIHVuY292ZXJzIHR5cGUgZXJyb3JzIGluIFNUWUxFU0hFRVRTIHdoaWxlIHJldGFpbmluZyB0aGUgc3RhdGljIGtub3dsZWRnZSBvZiBpdHMgcHJvcGVydGllcyAoc28gd2UgY2FuIHN0aWxsIHdyaXRlIGUuZy4gU1RZTEVTSEVFVFMuZm9vKTpcbmNvbnN0IF8gPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcbmV4cG9ydCBkZWZhdWx0IFNUWUxFU0hFRVRTO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkOiBcImphY2tzLWRldi1oZWxwZXJzXCIsXG4gICAgbmFtZTogXCJKYWNrJ3MgRGV2IEhlbHBlcnNcIixcbiAgICB2ZXJzaW9uOiBcIjAuMS4wXCIsXG4gICAgYXV0aG9yOiBcIkphY2sgTWNDb3duXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9kZ2Vwb2RnZSBvZiBkZXYgdXRpbHNcIixcbiAgICBob3N0bmFtZTogXCIqXCIsXG4gICAgbmFtZXNwYWNlOiBcImphY2ttc2NyaXB0c1wiLFxuICAgIHNpdGVuYW1lOiBcImdvb2dsZS5jb21cIixcbiAgICBydW5BdDogXCJkb2N1bWVudC1lbmRcIixcbn07XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==