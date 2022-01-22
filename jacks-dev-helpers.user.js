// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2022.1.22.1.58
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

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
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
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
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

/***/ "./node_modules/filter-obj/index.js":
/*!******************************************!*\
  !*** ./node_modules/filter-obj/index.js ***!
  \******************************************/
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

/***/ "./node_modules/git-up/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/git-up/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies

var parseUrl = __webpack_require__(/*! parse-url */ "./node_modules/parse-url/lib/index.js"),
    isSsh = __webpack_require__(/*! is-ssh */ "./node_modules/is-ssh/lib/index.js");

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

/***/ "./node_modules/git-url-parse/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/git-url-parse/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gitUp = __webpack_require__(/*! git-up */ "./node_modules/git-up/lib/index.js");

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

/***/ "./node_modules/is-ssh/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-ssh/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var protocols = __webpack_require__(/*! protocols */ "./node_modules/protocols/lib/index.js");

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

/***/ "./node_modules/normalize-url/index.js":
/*!*********************************************!*\
  !*** ./node_modules/normalize-url/index.js ***!
  \*********************************************/
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

/***/ "./node_modules/parse-path/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-path/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var protocols = __webpack_require__(/*! protocols */ "./node_modules/protocols/lib/index.js"),
    isSsh = __webpack_require__(/*! is-ssh */ "./node_modules/is-ssh/lib/index.js"),
    qs = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");

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
    url = (url || "").trim();
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
        if (splits[1]) {
            output.port = Number(splits[1]);
            if (isNaN(output.port)) {
                output.port = null;
                parts.unshift(splits[1]);
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

/***/ "./node_modules/parse-url/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/parse-url/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var parsePath = __webpack_require__(/*! parse-path */ "./node_modules/parse-path/lib/index.js"),
    normalizeUrl = __webpack_require__(/*! normalize-url */ "./node_modules/normalize-url/index.js");

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

/***/ "./node_modules/protocols/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/protocols/lib/index.js ***!
  \*********************************************/
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

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "./node_modules/filter-obj/index.js");

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

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
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

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


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
        let lastElement = document.body;
        let shouldClearAll = false;
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
            if (shouldClearAll) {
                clearCurrentSelection();
                shouldClearAll = false;
            }
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
            shouldClearAll = true;
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
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! git-url-parse */ "./node_modules/git-url-parse/lib/index.js");
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! userscripter/lib/environment */ "./node_modules/userscripter/lib/environment.mjs");
/* harmony import */ var deep_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-entries */ "./node_modules/deep-entries/dist/index.esm.js");
/* harmony import */ var userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! userscripter/lib/operations */ "./node_modules/userscripter/lib/operations.mjs");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/utils */ "./src/helpers/utils.ts");
/* harmony import */ var _helpers_extractTableInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/extractTableInfo */ "./src/helpers/extractTableInfo.ts");
/* harmony import */ var _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/htmlTreeSelection */ "./src/helpers/htmlTreeSelection.ts");







const OPERATIONS = [
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide parse github url",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
        action: () => {
            // @ts-expect-error
            window.parseGitUrl = git_url_parse__WEBPACK_IMPORTED_MODULE_0___default.a;
        },
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide helper funcs for surfingkeys",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
        action: () => {
            // @ts-expect-error
            window.htmlTreeSelection = _helpers_htmlTreeSelection__WEBPACK_IMPORTED_MODULE_6__["htmlTreeSelection"];
        },
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Provide helper funcs for dev console",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
        action: () => {
            const findKeyDeep = (obj, str) => {
                const flatObj = Object(deep_entries__WEBPACK_IMPORTED_MODULE_2__["deepEntries"])(obj, deep_entries__WEBPACK_IMPORTED_MODULE_2__["delimitEntry"]);
                return flatObj.filter(([k, _value]) => k.includes(str));
            };
            // @ts-expect-error
            window.findKeyDeep = findKeyDeep;
        },
    }),
    Object(userscripter_lib_operations__WEBPACK_IMPORTED_MODULE_3__["operation"])({
        description: "Copy table as json via right click",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtZW50cmllcy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsdGVyLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVybC1wYXJzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXNzaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmVzLXVubGluZXMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLXBhdGgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZS11cmwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9leHRyYWN0VGFibGVJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2h0bWxUcmVlU2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUMxQixpQzs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYix1QkFBdUIsRUFBRTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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Q0FBQzs7Ozs7Ozs7Ozs7OztBQ05wQztBQUFBO0FBQUE7QUFBc0Q7QUFDaUI7QUFFdkUsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLCtFQUFVLENBQUM7UUFDbEIsU0FBUyxFQUFFLG1FQUFNO1FBQ2pCLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQW1CSztLQUNYLENBQUM7SUFDRix3QkFBd0IsRUFBRSwrRUFBVSxDQUFDO1FBQ25DLFNBQVMsRUFBRSxtRUFBTTtRQUNqQixHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QlI7S0FDRSxDQUFDO0NBQ00sQ0FBQztBQUNYLGtDQUFrQztBQUVsQyxzSkFBc0o7QUFDdEosTUFBTSxDQUFDLEdBQWdCLFdBQVcsQ0FBQztBQUNuQyxLQUFLLENBQUMsQ0FBQztBQUVRLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNsRTNCO0FBQWU7SUFDWCxFQUFFLEVBQUUsbUJBQW1CO0lBQ3ZCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsT0FBTyxFQUFFLE9BQU87SUFDaEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxRQUFRLEVBQUUsR0FBRztJQUNiLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFFBQVEsRUFBRSxZQUFZO0lBQ3RCLEtBQUssRUFBRSxjQUFjO0NBQ2YsRUFBQyIsImZpbGUiOiJqYWNrcy1kZXYtaGVscGVycy51c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKCkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDE6IHJldHVybiBfY29tcG9zZTEoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gX2NvbXBvc2UyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gX2NvbXBvc2UzKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBfY29tcG9zZTQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgY2FzZSA1OiByZXR1cm4gX2NvbXBvc2U1KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICB9XG4gICAgO1xufVxuZnVuY3Rpb24gX2NvbXBvc2UxKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTFGbihhKSB7XG4gICAgICAgIHJldHVybiBmKGEpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTIoZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMkZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGcoZihhKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMyhoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaChnKGYoYSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U0KGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBpKGgoZyhmKGEpKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTUoaiwgaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlNUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGooaShoKGcoZihhKSkpKSk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2UuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb3NlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKHRva2VuLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIiwiY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG5cbmNvbnN0IGdldEludGVyZmFjZSA9IHggPT4ge1xuXHRjb25zdCBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCk7XG5cdHJldHVybiBzdHIuc3Vic3RyaW5nKDgsIHN0ci5sZW5ndGggLSAxKVxufTtcblxuY29uc3QgaXNPYmplY3RMaWtlID0geCA9PiB7XG5cdGNvbnN0IHRhZyA9IGdldEludGVyZmFjZSh4KTtcblx0c3dpdGNoICh0YWcpIHtcblx0XHRjYXNlICdTdHJpbmcnOlxuXHRcdGNhc2UgJ051bWJlcic6XG5cdFx0Y2FzZSAnQm9vbGVhbic6XG5cdFx0Y2FzZSAnUmVnRXhwJzpcblx0XHRjYXNlICdEYXRlJzpcblx0XHRcdHJldHVybiBmYWxzZVxuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmICh4ID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGFnLnN0YXJ0c1dpdGgoJ0hUTUwnKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0J1xuXHR9XG59O1xuXG5mdW5jdGlvbiogZW50cmllc0l0ZXJhdG9yKGlucHV0KSB7XG5cdHN3aXRjaCAoZ2V0SW50ZXJmYWNlKGlucHV0KSkge1xuXHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRjYXNlICdNYXAnOlxuXHRcdGNhc2UgJ1VSTFNlYXJjaFBhcmFtcyc6XG5cdFx0XHR5aWVsZCogaW5wdXQuZW50cmllcygpO1xuXHRcdFx0YnJlYWtcblxuXHRcdGNhc2UgJ1NldCc6XG5cdFx0Y2FzZSAnTm9kZUxpc3QnOlxuXHRcdGNhc2UgJ0ludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhBcnJheSc6XG5cdFx0Y2FzZSAnVWludDhDbGFtcGVkQXJyYXknOlxuXHRcdGNhc2UgJ0ludDE2QXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQxNkFycmF5Jzpcblx0XHRjYXNlICdJbnQzMkFycmF5Jzpcblx0XHRjYXNlICdVaW50MzJBcnJheSc6XG5cdFx0Y2FzZSAnRmxvYXQzMkFycmF5Jzpcblx0XHRjYXNlICdGbG9hdDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ0ludDY0QXJyYXknOlxuXHRcdGNhc2UgJ0JpZ1VpbnQ2NEFycmF5Jzpcblx0XHRcdGxldCBpID0gMDtcblx0XHRcdGZvciAobGV0IHZhbHVlIG9mIGlucHV0KSB5aWVsZCBbaSsrLCB2YWx1ZV07XG5cdFx0XHRicmVha1xuXG5cdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKGlzT2JqZWN0TGlrZShpbnB1dCkpXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBpbnB1dClcblx0XHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKVxuXHRcdFx0XHRcdFx0eWllbGQgW2tleSwgaW5wdXRba2V5XV07XG5cdFx0XHRicmVha1xuXHR9XG59XG5cbmZ1bmN0aW9uKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4sIHBhcmVudENpcmN1bGFyU2V0KSB7XG5cdGNvbnN0IG1hcCA9IHR5cGVvZiBtYXBGbiA9PT0gJ2Z1bmN0aW9uJyA/IG1hcEZuIDogaWRlbnRpdHk7XG5cdGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzSXRlcmF0b3IoaW5wdXQpKSB7XG5cdFx0aWYgKCFpc09iamVjdExpa2UodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBlbnRyeSA9IG1hcChba2V5LCB2YWx1ZV0pO1xuXHRcdFx0aWYgKGVudHJ5ICE9PSB1bmRlZmluZWQpIHlpZWxkIGVudHJ5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjaXJjdWxhclNldCA9IHBhcmVudENpcmN1bGFyU2V0IHx8IG5ldyBXZWFrU2V0KCk7XG5cdFx0XHRjaXJjdWxhclNldC5hZGQoaW5wdXQpO1xuXG5cdFx0XHRpZiAoIWNpcmN1bGFyU2V0Lmhhcyh2YWx1ZSkpIHtcblx0XHRcdFx0Zm9yIChsZXQgZW50cmllcyBvZiBkZWVwRW50cmllc0l0ZXJhdG9yXyhcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRcdFx0Y2lyY3VsYXJTZXRcblx0XHRcdFx0KSkge1xuXHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gbWFwKFtrZXksIC4uLmVudHJpZXNdKTtcblx0XHRcdFx0XHRpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkgeWllbGQgZW50cnk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24qIGRlZXBFbnRyaWVzSXRlcmF0b3IoaW5wdXQsIG1hcEZuKSB7XG5cdHlpZWxkKiBkZWVwRW50cmllc0l0ZXJhdG9yXyhpbnB1dCwgbWFwRm4pO1xufVxuXG5jb25zdCBkZWVwRW50cmllcyA9IChpbnB1dCwgbWFwRm4pID0+XG5cdEFycmF5LmZyb20oZGVlcEVudHJpZXNJdGVyYXRvcihpbnB1dCwgbWFwRm4pKTtcblxuY29uc3Qgcm90YXRlRW50cnlCeSA9IG4gPT4gZW50cnkgPT4ge1xuXHRpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdGNvbnN0IG1vZCA9ICgtMSAqIChOdW1iZXIobikgfHwgMCkpICUgZW50cnkubGVuZ3RoO1xuXHRjb25zdCBrZXlzID0gZW50cnkuc2xpY2UoMCwgbW9kKTtcblx0Y29uc3QgdmFsdWUgPSBlbnRyeS5zbGljZShtb2QpO1xuXHRyZXR1cm4gWy4uLnZhbHVlLCAuLi5rZXlzXVxufTtcblxuY29uc3Qgcm90YXRlRW50cnkgPSByb3RhdGVFbnRyeUJ5KDEpO1xuXG5jb25zdCBkZWxpbWl0RW50cnlCeSA9IGRlbGltaXRlciA9PiBlbnRyeSA9PiB7XG5cdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0Y29uc3QgW3ZhbHVlLCAuLi5rZXlzXSA9IHJvdGF0ZUVudHJ5KGVudHJ5KTtcblx0cmV0dXJuIFtrZXlzLmpvaW4oZGVsaW1pdGVyKSwgdmFsdWVdXG59O1xuXG5jb25zdCBkZWxpbWl0RW50cnkgPSBkZWxpbWl0RW50cnlCeSgnLicpO1xuXG5leHBvcnQgeyBkZWVwRW50cmllcywgZGVlcEVudHJpZXNJdGVyYXRvciwgZGVsaW1pdEVudHJ5LCBkZWxpbWl0RW50cnlCeSwgcm90YXRlRW50cnksIHJvdGF0ZUVudHJ5QnkgfTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgcHJlZGljYXRlKSB7XG5cdHZhciByZXQgPSB7fTtcblx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHR2YXIgaXNBcnIgPSBBcnJheS5pc0FycmF5KHByZWRpY2F0ZSk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGtleSA9IGtleXNbaV07XG5cdFx0dmFyIHZhbCA9IG9ialtrZXldO1xuXG5cdFx0aWYgKGlzQXJyID8gcHJlZGljYXRlLmluZGV4T2Yoa2V5KSAhPT0gLTEgOiBwcmVkaWNhdGUoa2V5LCB2YWwsIG9iaikpIHtcblx0XHRcdHJldFtrZXldID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xuXG52YXIgcGFyc2VVcmwgPSByZXF1aXJlKFwicGFyc2UtdXJsXCIpLFxuICAgIGlzU3NoID0gcmVxdWlyZShcImlzLXNzaFwiKTtcblxuLyoqXG4gKiBnaXRVcFxuICogUGFyc2VzIHRoZSBpbnB1dCB1cmwuXG4gKlxuICogQG5hbWUgZ2l0VXBcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB1cmwuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZ2l0IHVybCBwcm90b2NvbC5cbiAqICAtIGB0b2tlbmAgKFN0cmluZyk6IFRoZSBvYXV0aCB0b2tlbiAoY291bGQgYXBwZWFyIGluIHRoZSBodHRwcyB1cmxzKS5cbiAqL1xuZnVuY3Rpb24gZ2l0VXAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gcGFyc2VVcmwoaW5wdXQpO1xuICAgIG91dHB1dC50b2tlbiA9IFwiXCI7XG5cbiAgICB2YXIgc3BsaXRzID0gb3V0cHV0LnVzZXIuc3BsaXQoXCI6XCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmIChzcGxpdHNbMV0gPT09IFwieC1vYXV0aC1iYXNpY1wiKSB7XG4gICAgICAgICAgICBvdXRwdXQudG9rZW4gPSBzcGxpdHNbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzWzBdID09PSBcIngtdG9rZW4tYXV0aFwiKSB7XG4gICAgICAgICAgICBvdXRwdXQudG9rZW4gPSBzcGxpdHNbMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTc2gob3V0cHV0LnByb3RvY29scykgfHwgaXNTc2goaW5wdXQpKSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwic3NoXCI7XG4gICAgfSBlbHNlIGlmIChvdXRwdXQucHJvdG9jb2xzLmxlbmd0aCkge1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBvdXRwdXQucHJvdG9jb2xzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgIH1cblxuICAgIG91dHB1dC5ocmVmID0gb3V0cHV0LmhyZWYucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2l0VXA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnaXRVcCA9IHJlcXVpcmUoXCJnaXQtdXBcIik7XG5cbi8qKlxuICogZ2l0VXJsUGFyc2VcbiAqIFBhcnNlcyBhIEdpdCB1cmwuXG4gKlxuICogQG5hbWUgZ2l0VXJsUGFyc2VcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgR2l0IHVybCB0byBwYXJzZS5cbiAqIEByZXR1cm4ge0dpdFVybH0gVGhlIGBHaXRVcmxgIG9iamVjdCBjb250YWluaW5nOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZ2l0IHVybCBwcm90b2NvbC5cbiAqICAtIGB0b2tlbmAgKFN0cmluZyk6IFRoZSBvYXV0aCB0b2tlbiAoY291bGQgYXBwZWFyIGluIHRoZSBodHRwcyB1cmxzKS5cbiAqICAtIGBzb3VyY2VgIChTdHJpbmcpOiBUaGUgR2l0IHByb3ZpZGVyIChlLmcuIGBcImdpdGh1Yi5jb21cImApLlxuICogIC0gYG93bmVyYCAoU3RyaW5nKTogVGhlIHJlcG9zaXRvcnkgb3duZXIuXG4gKiAgLSBgbmFtZWAgKFN0cmluZyk6IFRoZSByZXBvc2l0b3J5IG5hbWUuXG4gKiAgLSBgcmVmYCAoU3RyaW5nKTogVGhlIHJlcG9zaXRvcnkgcmVmIChlLmcuLCBcIm1hc3RlclwiIG9yIFwiZGV2XCIpLlxuICogIC0gYGZpbGVwYXRoYCAoU3RyaW5nKTogQSBmaWxlcGF0aCByZWxhdGl2ZSB0byB0aGUgcmVwb3NpdG9yeSByb290LlxuICogIC0gYGZpbGVwYXRodHlwZWAgKFN0cmluZyk6IFRoZSB0eXBlIG9mIGZpbGVwYXRoIGluIHRoZSB1cmwgKFwiYmxvYlwiIG9yIFwidHJlZVwiKS5cbiAqICAtIGBmdWxsX25hbWVgIChTdHJpbmcpOiBUaGUgb3duZXIgYW5kIG5hbWUgdmFsdWVzIGluIHRoZSBgb3duZXIvbmFtZWAgZm9ybWF0LlxuICogIC0gYHRvU3RyaW5nYCAoRnVuY3Rpb24pOiBBIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSB0aGUgcGFyc2VkIHVybCBpbnRvIGFub3RoZXIgdXJsIHR5cGUuXG4gKiAgLSBgb3JnYW5pemF0aW9uYCAoU3RyaW5nKTogVGhlIG9yZ2FuaXphdGlvbiB0aGUgb3duZXIgYmVsb25ncyB0by4gVGhpcyBpcyBDbG91ZEZvcmdlIHNwZWNpZmljLlxuICogIC0gYGdpdF9zdWZmaXhgIChCb29sZWFuKTogV2hldGhlciB0byBhZGQgdGhlIGAuZ2l0YCBzdWZmaXggb3Igbm90LlxuICpcbiAqL1xuZnVuY3Rpb24gZ2l0VXJsUGFyc2UodXJsKSB7XG5cbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdXJsIG11c3QgYmUgYSBzdHJpbmcuXCIpO1xuICAgIH1cblxuICAgIHZhciB1cmxJbmZvID0gZ2l0VXAodXJsKSxcbiAgICAgICAgc291cmNlUGFydHMgPSB1cmxJbmZvLnJlc291cmNlLnNwbGl0KFwiLlwiKSxcbiAgICAgICAgc3BsaXRzID0gbnVsbDtcblxuICAgIHVybEluZm8udG9TdHJpbmcgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICByZXR1cm4gZ2l0VXJsUGFyc2Uuc3RyaW5naWZ5KHRoaXMsIHR5cGUpO1xuICAgIH07XG5cbiAgICB1cmxJbmZvLnNvdXJjZSA9IHNvdXJjZVBhcnRzLmxlbmd0aCA+IDIgPyBzb3VyY2VQYXJ0cy5zbGljZSgxIC0gc291cmNlUGFydHMubGVuZ3RoKS5qb2luKFwiLlwiKSA6IHVybEluZm8uc291cmNlID0gdXJsSW5mby5yZXNvdXJjZTtcblxuICAgIC8vIE5vdGU6IFNvbWUgaG9zdGluZyBzZXJ2aWNlcyAoZS5nLiBWaXN1YWwgU3R1ZGlvIFRlYW0gU2VydmljZXMpIGFsbG93IHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuICAgIC8vIGluIHRoZSByZXBvc2l0b3J5IGFuZCBvd25lciBuYW1lcyBzbyB3ZSBkZWNvZGUgdGhlIFVSTCBwaWVjZXMgdG8gZ2V0IHRoZSBjb3JyZWN0IHJlc3VsdFxuICAgIHVybEluZm8uZ2l0X3N1ZmZpeCA9IC9cXC5naXQkLy50ZXN0KHVybEluZm8ucGF0aG5hbWUpO1xuICAgIHVybEluZm8ubmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxJbmZvLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykucmVwbGFjZSgvXFwuZ2l0JC8sIFwiXCIpKTtcbiAgICB1cmxJbmZvLm93bmVyID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybEluZm8udXNlcik7XG5cbiAgICBzd2l0Y2ggKHVybEluZm8uc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJnaXQuY2xvdWRmb3JnZS5jb21cIjpcbiAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSB1cmxJbmZvLnVzZXI7XG4gICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNvdXJjZVBhcnRzWzBdO1xuICAgICAgICAgICAgdXJsSW5mby5zb3VyY2UgPSBcImNsb3VkZm9yZ2UuY29tXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInZpc3VhbHN0dWRpby5jb21cIjpcbiAgICAgICAgICAgIC8vIEhhbmRsZSBWU1RTIFNTSCBVUkxzXG4gICAgICAgICAgICBpZiAodXJsSW5mby5yZXNvdXJjZSA9PT0gJ3ZzLXNzaC52aXN1YWxzdHVkaW8uY29tJykge1xuICAgICAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSBzcGxpdHNbMl0gKyAnLycgKyBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSAnX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdHNbMF0gPT09ICdEZWZhdWx0Q29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vcmdhbml6YXRpb24gKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy8nICsgdXJsSW5mby5vd25lciArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBBenVyZSBEZXZPcHMgKGZvcm1lcmx5IFZpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcylcbiAgICAgICAgY2FzZSBcImRldi5henVyZS5jb21cIjpcbiAgICAgICAgY2FzZSBcImF6dXJlLmNvbVwiOlxuICAgICAgICAgICAgaWYgKHVybEluZm8ucmVzb3VyY2UgPT09ICdzc2guZGV2LmF6dXJlLmNvbScpIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbNF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gJ19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRzWzBdID09PSAnRGVmYXVsdENvbGxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm9yZ2FuaXphdGlvbiArICcvJyArIHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybEluZm8ucXVlcnkgJiYgdXJsSW5mby5xdWVyeVsncGF0aCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSB1cmxJbmZvLnF1ZXJ5WydwYXRoJ10ucmVwbGFjZSgvXlxcLysvZywgJycpOyAvLyBTdHJpcCBsZWFkaW5nIHNsYXNoICgvKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXJsSW5mby5xdWVyeSAmJiB1cmxJbmZvLnF1ZXJ5Wyd2ZXJzaW9uJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVyc2lvbj1HQjxicmFuY2g+XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ucmVmID0gdXJsSW5mby5xdWVyeVsndmVyc2lvbiddLnJlcGxhY2UoL15HQi8sICcnKTsgLy8gcmVtb3ZlIEdCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgIHZhciBuYW1lSW5kZXggPSBzcGxpdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGFzaEluZGV4ID0gc3BsaXRzLmluZGV4T2YoXCItXCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciBibG9iSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcImJsb2JcIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIHRyZWVJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwidHJlZVwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWl0SW5kZXggPSBzcGxpdHMuaW5kZXhPZihcImNvbW1pdFwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3JjSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcInNyY1wiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgcmF3SW5kZXggPSBzcGxpdHMuaW5kZXhPZihcInJhd1wiLCAyKTtcbiAgICAgICAgICAgICAgICBuYW1lSW5kZXggPSBkYXNoSW5kZXggPiAwID8gZGFzaEluZGV4IC0gMSA6IGJsb2JJbmRleCA+IDAgPyBibG9iSW5kZXggLSAxIDogdHJlZUluZGV4ID4gMCA/IHRyZWVJbmRleCAtIDEgOiBjb21taXRJbmRleCA+IDAgPyBjb21taXRJbmRleCAtIDEgOiBzcmNJbmRleCA+IDAgPyBzcmNJbmRleCAtIDEgOiByYXdJbmRleCA+IDAgPyByYXdJbmRleCAtIDEgOiBuYW1lSW5kZXg7XG5cbiAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzLnNsaWNlKDAsIG5hbWVJbmRleCkuam9pbignLycpO1xuICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1tuYW1lSW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChjb21taXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmNvbW1pdCA9IHNwbGl0c1tuYW1lSW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybEluZm8ucmVmID0gXCJcIjtcbiAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGh0eXBlID0gXCJcIjtcbiAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSBcIlwiO1xuICAgICAgICAgICAgdmFyIG9mZnNldE5hbWVJbmRleCA9IHNwbGl0cy5sZW5ndGggPiBuYW1lSW5kZXggJiYgc3BsaXRzW25hbWVJbmRleCArIDFdID09PSBcIi1cIiA/IG5hbWVJbmRleCArIDEgOiBuYW1lSW5kZXg7XG4gICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IG9mZnNldE5hbWVJbmRleCArIDIgJiYgW1wicmF3XCIsIFwic3JjXCIsIFwiYmxvYlwiLCBcInRyZWVcIl0uaW5kZXhPZihzcGxpdHNbb2Zmc2V0TmFtZUluZGV4ICsgMV0pID49IDApIHtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRodHlwZSA9IHNwbGl0c1tvZmZzZXROYW1lSW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLnJlZiA9IHNwbGl0c1tvZmZzZXROYW1lSW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IG9mZnNldE5hbWVJbmRleCArIDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aCA9IHNwbGl0cy5zbGljZShvZmZzZXROYW1lSW5kZXggKyAzKS5qb2luKCcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSB1cmxJbmZvLm93bmVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCF1cmxJbmZvLmZ1bGxfbmFtZSkge1xuICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXI7XG4gICAgICAgIGlmICh1cmxJbmZvLm5hbWUpIHtcbiAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lICYmICh1cmxJbmZvLmZ1bGxfbmFtZSArPSBcIi9cIik7XG4gICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSArPSB1cmxJbmZvLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQml0YnVja2V0IFNlcnZlclxuICAgIGlmICh1cmxJbmZvLm93bmVyLnN0YXJ0c1dpdGgoXCJzY20vXCIpKSB7XG4gICAgICAgIHVybEluZm8uc291cmNlID0gXCJiaXRidWNrZXQtc2VydmVyXCI7XG4gICAgICAgIHVybEluZm8ub3duZXIgPSB1cmxJbmZvLm93bmVyLnJlcGxhY2UoXCJzY20vXCIsIFwiXCIpO1xuICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHVybEluZm8ub3duZXI7XG4gICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArIFwiL1wiICsgdXJsSW5mby5uYW1lO1xuICAgIH1cblxuICAgIHZhciBiaXRidWNrZXQgPSAvKHByb2plY3RzfHVzZXJzKVxcLyguKj8pXFwvcmVwb3NcXC8oLio/KSgoXFwvLiokKXwkKS87XG4gICAgdmFyIG1hdGNoZXMgPSBiaXRidWNrZXQuZXhlYyh1cmxJbmZvLnBhdGhuYW1lKTtcbiAgICBpZiAobWF0Y2hlcyAhPSBudWxsKSB7XG4gICAgICAgIHVybEluZm8uc291cmNlID0gXCJiaXRidWNrZXQtc2VydmVyXCI7XG4gICAgICAgIGlmIChtYXRjaGVzWzFdID09PSBcInVzZXJzXCIpIHtcbiAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBcIn5cIiArIG1hdGNoZXNbMl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gbWF0Y2hlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gdXJsSW5mby5vd25lcjtcbiAgICAgICAgdXJsSW5mby5uYW1lID0gbWF0Y2hlc1szXTtcblxuICAgICAgICBzcGxpdHMgPSBtYXRjaGVzWzRdLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAoW1wicmF3XCIsIFwiYnJvd3NlXCJdLmluZGV4T2Yoc3BsaXRzWzFdKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aHR5cGUgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSBzcGxpdHMuc2xpY2UoMikuam9pbignLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzWzFdID09PSBcImNvbW1pdHNcIiAmJiBzcGxpdHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHVybEluZm8uY29tbWl0ID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArIFwiL1wiICsgdXJsSW5mby5uYW1lO1xuXG4gICAgICAgIGlmICh1cmxJbmZvLnF1ZXJ5LmF0KSB7XG4gICAgICAgICAgICB1cmxJbmZvLnJlZiA9IHVybEluZm8ucXVlcnkuYXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxJbmZvLnJlZiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybEluZm87XG59XG5cbi8qKlxuICogc3RyaW5naWZ5XG4gKiBTdHJpbmdpZmllcyBhIGBHaXRVcmxgIG9iamVjdC5cbiAqXG4gKiBAbmFtZSBzdHJpbmdpZnlcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtHaXRVcmx9IG9iaiBUaGUgcGFyc2VkIEdpdCB1cmwgb2JqZWN0LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHN0cmluZ2lmaWVkIHVybCAoZGVmYXVsdCBgb2JqLnByb3RvY29sYCkuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB1cmwuXG4gKi9cbmdpdFVybFBhcnNlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZSB8fCAob2JqLnByb3RvY29scyAmJiBvYmoucHJvdG9jb2xzLmxlbmd0aCA/IG9iai5wcm90b2NvbHMuam9pbignKycpIDogb2JqLnByb3RvY29sKTtcbiAgICB2YXIgcG9ydCA9IG9iai5wb3J0ID8gXCI6XCIgKyBvYmoucG9ydCA6ICcnO1xuICAgIHZhciB1c2VyID0gb2JqLnVzZXIgfHwgJ2dpdCc7XG4gICAgdmFyIG1heWJlR2l0U3VmZml4ID0gb2JqLmdpdF9zdWZmaXggPyBcIi5naXRcIiA6IFwiXCI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJzc2hcIjpcbiAgICAgICAgICAgIGlmIChwb3J0KSByZXR1cm4gXCJzc2g6Ly9cIiArIHVzZXIgKyBcIkBcIiArIG9iai5yZXNvdXJjZSArIHBvcnQgKyBcIi9cIiArIG9iai5mdWxsX25hbWUgKyBtYXliZUdpdFN1ZmZpeDtlbHNlIHJldHVybiB1c2VyICsgXCJAXCIgKyBvYmoucmVzb3VyY2UgKyBcIjpcIiArIG9iai5mdWxsX25hbWUgKyBtYXliZUdpdFN1ZmZpeDtcbiAgICAgICAgY2FzZSBcImdpdCtzc2hcIjpcbiAgICAgICAgY2FzZSBcInNzaCtnaXRcIjpcbiAgICAgICAgY2FzZSBcImZ0cFwiOlxuICAgICAgICBjYXNlIFwiZnRwc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyBcIjovL1wiICsgdXNlciArIFwiQFwiICsgb2JqLnJlc291cmNlICsgcG9ydCArIFwiL1wiICsgb2JqLmZ1bGxfbmFtZSArIG1heWJlR2l0U3VmZml4O1xuICAgICAgICBjYXNlIFwiaHR0cFwiOlxuICAgICAgICBjYXNlIFwiaHR0cHNcIjpcbiAgICAgICAgICAgIHZhciBhdXRoID0gb2JqLnRva2VuID8gYnVpbGRUb2tlbihvYmopIDogb2JqLnVzZXIgJiYgKG9iai5wcm90b2NvbHMuaW5jbHVkZXMoJ2h0dHAnKSB8fCBvYmoucHJvdG9jb2xzLmluY2x1ZGVzKCdodHRwcycpKSA/IG9iai51c2VyICsgXCJAXCIgOiBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgKyBcIjovL1wiICsgYXV0aCArIG9iai5yZXNvdXJjZSArIHBvcnQgKyBcIi9cIiArIGJ1aWxkUGF0aChvYmopICsgbWF5YmVHaXRTdWZmaXg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gb2JqLmhyZWY7XG4gICAgfVxufTtcblxuLyohXG4gKiBidWlsZFRva2VuXG4gKiBCdWlsZHMgT0F1dGggdG9rZW4gcHJlZml4IChoZWxwZXIgZnVuY3Rpb24pXG4gKlxuICogQG5hbWUgYnVpbGRUb2tlblxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0dpdFVybH0gb2JqIFRoZSBwYXJzZWQgR2l0IHVybCBvYmplY3QuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRva2VuIHByZWZpeFxuICovXG5mdW5jdGlvbiBidWlsZFRva2VuKG9iaikge1xuICAgIHN3aXRjaCAob2JqLnNvdXJjZSkge1xuICAgICAgICBjYXNlIFwiYml0YnVja2V0Lm9yZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwieC10b2tlbi1hdXRoOlwiICsgb2JqLnRva2VuICsgXCJAXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gb2JqLnRva2VuICsgXCJAXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWlsZFBhdGgob2JqKSB7XG4gICAgc3dpdGNoIChvYmouc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJiaXRidWNrZXQtc2VydmVyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJzY20vXCIgKyBvYmouZnVsbF9uYW1lO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBvYmouZnVsbF9uYW1lO1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdpdFVybFBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcbnZhciBwcm90b2NvbHMgPSByZXF1aXJlKFwicHJvdG9jb2xzXCIpO1xuXG4vKipcbiAqIGlzU3NoXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgdmFsdWUgaXMgYSBzc2ggdXJsIG9yIG5vdC5cbiAqXG4gKiBAbmFtZSBpc1NzaFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gaW5wdXQgVGhlIGlucHV0IHVybCBvciBhbiBhcnJheSBvZiBwcm90b2NvbHMuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIGlucHV0IGlzIGEgc3NoIHVybCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzU3NoKGlucHV0KSB7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LmluZGV4T2YoXCJzc2hcIikgIT09IC0xIHx8IGlucHV0LmluZGV4T2YoXCJyc3luY1wiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHByb3RzID0gcHJvdG9jb2xzKGlucHV0KTtcbiAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZyhpbnB1dC5pbmRleE9mKFwiOi8vXCIpICsgMyk7XG4gICAgaWYgKGlzU3NoKHByb3RzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPIFRoaXMgcHJvYmFibHkgY291bGQgYmUgaW1wcm92ZWQgOilcbiAgICB2YXIgdXJsUG9ydFBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXC4oW2EtekEtWlxcXFxkXSspOihcXFxcZCspXFwvJyk7XG4gICAgcmV0dXJuICFpbnB1dC5tYXRjaCh1cmxQb3J0UGF0dGVybikgJiYgaW5wdXQuaW5kZXhPZihcIkBcIikgPCBpbnB1dC5pbmRleE9mKFwiOlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NzaDsiLCJleHBvcnQgZnVuY3Rpb24gbGluZXMocykge1xuICAgIHJldHVybiBzID09PSBcIlwiID8gW10gOiBzLnJlcGxhY2UoL1xcbiQvLCBcIlwiKS5zcGxpdChcIlxcblwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmxpbmVzKGxzKSB7XG4gICAgcmV0dXJuIGxzLm1hcChsaW5lID0+IGxpbmUgKyBcIlxcblwiKS5qb2luKFwiXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuY29uc3QgREFUQV9VUkxfREVGQVVMVF9NSU1FX1RZUEUgPSAndGV4dC9wbGFpbic7XG5jb25zdCBEQVRBX1VSTF9ERUZBVUxUX0NIQVJTRVQgPSAndXMtYXNjaWknO1xuXG5jb25zdCB0ZXN0UGFyYW1ldGVyID0gKG5hbWUsIGZpbHRlcnMpID0+IHtcblx0cmV0dXJuIGZpbHRlcnMuc29tZShmaWx0ZXIgPT4gZmlsdGVyIGluc3RhbmNlb2YgUmVnRXhwID8gZmlsdGVyLnRlc3QobmFtZSkgOiBmaWx0ZXIgPT09IG5hbWUpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplRGF0YVVSTCA9ICh1cmxTdHJpbmcsIHtzdHJpcEhhc2h9KSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gL15kYXRhOig/PHR5cGU+W14sXSo/KSwoPzxkYXRhPlteI10qPykoPzojKD88aGFzaD4uKikpPyQvLmV4ZWModXJsU3RyaW5nKTtcblxuXHRpZiAoIW1hdGNoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVSTDogJHt1cmxTdHJpbmd9YCk7XG5cdH1cblxuXHRsZXQge3R5cGUsIGRhdGEsIGhhc2h9ID0gbWF0Y2guZ3JvdXBzO1xuXHRjb25zdCBtZWRpYVR5cGUgPSB0eXBlLnNwbGl0KCc7Jyk7XG5cdGhhc2ggPSBzdHJpcEhhc2ggPyAnJyA6IGhhc2g7XG5cblx0bGV0IGlzQmFzZTY0ID0gZmFsc2U7XG5cdGlmIChtZWRpYVR5cGVbbWVkaWFUeXBlLmxlbmd0aCAtIDFdID09PSAnYmFzZTY0Jykge1xuXHRcdG1lZGlhVHlwZS5wb3AoKTtcblx0XHRpc0Jhc2U2NCA9IHRydWU7XG5cdH1cblxuXHQvLyBMb3dlcmNhc2UgTUlNRSB0eXBlXG5cdGNvbnN0IG1pbWVUeXBlID0gKG1lZGlhVHlwZS5zaGlmdCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBhdHRyaWJ1dGVzID0gbWVkaWFUeXBlXG5cdFx0Lm1hcChhdHRyaWJ1dGUgPT4ge1xuXHRcdFx0bGV0IFtrZXksIHZhbHVlID0gJyddID0gYXR0cmlidXRlLnNwbGl0KCc9JykubWFwKHN0cmluZyA9PiBzdHJpbmcudHJpbSgpKTtcblxuXHRcdFx0Ly8gTG93ZXJjYXNlIGBjaGFyc2V0YFxuXHRcdFx0aWYgKGtleSA9PT0gJ2NoYXJzZXQnKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IERBVEFfVVJMX0RFRkFVTFRfQ0hBUlNFVCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYCR7a2V5fSR7dmFsdWUgPyBgPSR7dmFsdWV9YCA6ICcnfWA7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRNZWRpYVR5cGUgPSBbXG5cdFx0Li4uYXR0cmlidXRlc1xuXHRdO1xuXG5cdGlmIChpc0Jhc2U2NCkge1xuXHRcdG5vcm1hbGl6ZWRNZWRpYVR5cGUucHVzaCgnYmFzZTY0Jyk7XG5cdH1cblxuXHRpZiAobm9ybWFsaXplZE1lZGlhVHlwZS5sZW5ndGggIT09IDAgfHwgKG1pbWVUeXBlICYmIG1pbWVUeXBlICE9PSBEQVRBX1VSTF9ERUZBVUxUX01JTUVfVFlQRSkpIHtcblx0XHRub3JtYWxpemVkTWVkaWFUeXBlLnVuc2hpZnQobWltZVR5cGUpO1xuXHR9XG5cblx0cmV0dXJuIGBkYXRhOiR7bm9ybWFsaXplZE1lZGlhVHlwZS5qb2luKCc7Jyl9LCR7aXNCYXNlNjQgPyBkYXRhLnRyaW0oKSA6IGRhdGF9JHtoYXNoID8gYCMke2hhc2h9YCA6ICcnfWA7XG59O1xuXG5jb25zdCBub3JtYWxpemVVcmwgPSAodXJsU3RyaW5nLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZGVmYXVsdFByb3RvY29sOiAnaHR0cDonLFxuXHRcdG5vcm1hbGl6ZVByb3RvY29sOiB0cnVlLFxuXHRcdGZvcmNlSHR0cDogZmFsc2UsXG5cdFx0Zm9yY2VIdHRwczogZmFsc2UsXG5cdFx0c3RyaXBBdXRoZW50aWNhdGlvbjogdHJ1ZSxcblx0XHRzdHJpcEhhc2g6IGZhbHNlLFxuXHRcdHN0cmlwVGV4dEZyYWdtZW50OiB0cnVlLFxuXHRcdHN0cmlwV1dXOiB0cnVlLFxuXHRcdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyczogWy9edXRtX1xcdysvaV0sXG5cdFx0cmVtb3ZlVHJhaWxpbmdTbGFzaDogdHJ1ZSxcblx0XHRyZW1vdmVTaW5nbGVTbGFzaDogdHJ1ZSxcblx0XHRyZW1vdmVEaXJlY3RvcnlJbmRleDogZmFsc2UsXG5cdFx0c29ydFF1ZXJ5UGFyYW1ldGVyczogdHJ1ZSxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuXHQvLyBEYXRhIFVSTFxuXHRpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuXHRcdHJldHVybiBub3JtYWxpemVEYXRhVVJMKHVybFN0cmluZywgb3B0aW9ucyk7XG5cdH1cblxuXHRpZiAoL152aWV3LXNvdXJjZTovaS50ZXN0KHVybFN0cmluZykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2B2aWV3LXNvdXJjZTpgIGlzIG5vdCBzdXBwb3J0ZWQgYXMgaXQgaXMgYSBub24tc3RhbmRhcmQgcHJvdG9jb2wnKTtcblx0fVxuXG5cdGNvbnN0IGhhc1JlbGF0aXZlUHJvdG9jb2wgPSB1cmxTdHJpbmcuc3RhcnRzV2l0aCgnLy8nKTtcblx0Y29uc3QgaXNSZWxhdGl2ZVVybCA9ICFoYXNSZWxhdGl2ZVByb3RvY29sICYmIC9eXFwuKlxcLy8udGVzdCh1cmxTdHJpbmcpO1xuXG5cdC8vIFByZXBlbmQgcHJvdG9jb2xcblx0aWYgKCFpc1JlbGF0aXZlVXJsKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL14oPyEoPzpcXHcrOik/XFwvXFwvKXxeXFwvXFwvLywgb3B0aW9ucy5kZWZhdWx0UHJvdG9jb2wpO1xuXHR9XG5cblx0Y29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmxTdHJpbmcpO1xuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cCAmJiBvcHRpb25zLmZvcmNlSHR0cHMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZm9yY2VIdHRwYCBhbmQgYGZvcmNlSHR0cHNgIG9wdGlvbnMgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXInKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cCAmJiB1cmxPYmoucHJvdG9jb2wgPT09ICdodHRwczonKSB7XG5cdFx0dXJsT2JqLnByb3RvY29sID0gJ2h0dHA6Jztcblx0fVxuXG5cdGlmIChvcHRpb25zLmZvcmNlSHR0cHMgJiYgdXJsT2JqLnByb3RvY29sID09PSAnaHR0cDonKSB7XG5cdFx0dXJsT2JqLnByb3RvY29sID0gJ2h0dHBzOic7XG5cdH1cblxuXHQvLyBSZW1vdmUgYXV0aFxuXHRpZiAob3B0aW9ucy5zdHJpcEF1dGhlbnRpY2F0aW9uKSB7XG5cdFx0dXJsT2JqLnVzZXJuYW1lID0gJyc7XG5cdFx0dXJsT2JqLnBhc3N3b3JkID0gJyc7XG5cdH1cblxuXHQvLyBSZW1vdmUgaGFzaFxuXHRpZiAob3B0aW9ucy5zdHJpcEhhc2gpIHtcblx0XHR1cmxPYmouaGFzaCA9ICcnO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuc3RyaXBUZXh0RnJhZ21lbnQpIHtcblx0XHR1cmxPYmouaGFzaCA9IHVybE9iai5oYXNoLnJlcGxhY2UoLyM/On46dGV4dC4qPyQvaSwgJycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZSBzbGFzaGVzIGlmIG5vdCBwcmVjZWRlZCBieSBhIHByb3RvY29sXG5cdGlmICh1cmxPYmoucGF0aG5hbWUpIHtcblx0XHR1cmxPYmoucGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUucmVwbGFjZSgvKD88IVxcYig/OlthLXpdW2EtelxcZCtcXC0uXXsxLDUwfTopKVxcL3syLH0vZywgJy8nKTtcblx0fVxuXG5cdC8vIERlY29kZSBVUkkgb2N0ZXRzXG5cdGlmICh1cmxPYmoucGF0aG5hbWUpIHtcblx0XHR0cnkge1xuXHRcdFx0dXJsT2JqLnBhdGhuYW1lID0gZGVjb2RlVVJJKHVybE9iai5wYXRobmFtZSk7XG5cdFx0fSBjYXRjaCAoXykge31cblx0fVxuXG5cdC8vIFJlbW92ZSBkaXJlY3RvcnkgaW5kZXhcblx0aWYgKG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXggPT09IHRydWUpIHtcblx0XHRvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4ID0gWy9eaW5kZXhcXC5bYS16XSskL107XG5cdH1cblxuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4KSAmJiBvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4Lmxlbmd0aCA+IDApIHtcblx0XHRsZXQgcGF0aENvbXBvbmVudHMgPSB1cmxPYmoucGF0aG5hbWUuc3BsaXQoJy8nKTtcblx0XHRjb25zdCBsYXN0Q29tcG9uZW50ID0gcGF0aENvbXBvbmVudHNbcGF0aENvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cblx0XHRpZiAodGVzdFBhcmFtZXRlcihsYXN0Q29tcG9uZW50LCBvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4KSkge1xuXHRcdFx0cGF0aENvbXBvbmVudHMgPSBwYXRoQ29tcG9uZW50cy5zbGljZSgwLCBwYXRoQ29tcG9uZW50cy5sZW5ndGggLSAxKTtcblx0XHRcdHVybE9iai5wYXRobmFtZSA9IHBhdGhDb21wb25lbnRzLnNsaWNlKDEpLmpvaW4oJy8nKSArICcvJztcblx0XHR9XG5cdH1cblxuXHRpZiAodXJsT2JqLmhvc3RuYW1lKSB7XG5cdFx0Ly8gUmVtb3ZlIHRyYWlsaW5nIGRvdFxuXHRcdHVybE9iai5ob3N0bmFtZSA9IHVybE9iai5ob3N0bmFtZS5yZXBsYWNlKC9cXC4kLywgJycpO1xuXG5cdFx0Ly8gUmVtb3ZlIGB3d3cuYFxuXHRcdGlmIChvcHRpb25zLnN0cmlwV1dXICYmIC9ed3d3XFwuKD8hd3d3XFwuKSg/OlthLXpcXC1cXGRdezEsNjN9KVxcLig/OlthLXouXFwtXFxkXXsyLDYzfSkkLy50ZXN0KHVybE9iai5ob3N0bmFtZSkpIHtcblx0XHRcdC8vIEVhY2ggbGFiZWwgc2hvdWxkIGJlIG1heCA2MyBhdCBsZW5ndGggKG1pbjogMSkuXG5cdFx0XHQvLyBTb3VyY2U6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hvc3RuYW1lI1Jlc3RyaWN0aW9uc19vbl92YWxpZF9ob3N0X25hbWVzXG5cdFx0XHQvLyBFYWNoIFRMRCBzaG91bGQgYmUgdXAgdG8gNjMgY2hhcmFjdGVycyBsb25nIChtaW46IDIpLlxuXHRcdFx0Ly8gSXQgaXMgdGVjaG5pY2FsbHkgcG9zc2libGUgdG8gaGF2ZSBhIHNpbmdsZSBjaGFyYWN0ZXIgVExELCBidXQgbm9uZSBjdXJyZW50bHkgZXhpc3QuXG5cdFx0XHR1cmxPYmouaG9zdG5hbWUgPSB1cmxPYmouaG9zdG5hbWUucmVwbGFjZSgvXnd3d1xcLi8sICcnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgcXVlcnkgdW53YW50ZWQgcGFyYW1ldGVyc1xuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycykpIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBbLi4udXJsT2JqLnNlYXJjaFBhcmFtcy5rZXlzKCldKSB7XG5cdFx0XHRpZiAodGVzdFBhcmFtZXRlcihrZXksIG9wdGlvbnMucmVtb3ZlUXVlcnlQYXJhbWV0ZXJzKSkge1xuXHRcdFx0XHR1cmxPYmouc2VhcmNoUGFyYW1zLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycyA9PT0gdHJ1ZSkge1xuXHRcdHVybE9iai5zZWFyY2ggPSAnJztcblx0fVxuXG5cdC8vIFNvcnQgcXVlcnkgcGFyYW1ldGVyc1xuXHRpZiAob3B0aW9ucy5zb3J0UXVlcnlQYXJhbWV0ZXJzKSB7XG5cdFx0dXJsT2JqLnNlYXJjaFBhcmFtcy5zb3J0KCk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG5cdFx0dXJsT2JqLnBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHRjb25zdCBvbGRVcmxTdHJpbmcgPSB1cmxTdHJpbmc7XG5cblx0Ly8gVGFrZSBhZHZhbnRhZ2Ugb2YgbWFueSBvZiB0aGUgTm9kZSBgdXJsYCBub3JtYWxpemF0aW9uc1xuXHR1cmxTdHJpbmcgPSB1cmxPYmoudG9TdHJpbmcoKTtcblxuXHRpZiAoIW9wdGlvbnMucmVtb3ZlU2luZ2xlU2xhc2ggJiYgdXJsT2JqLnBhdGhuYW1lID09PSAnLycgJiYgIW9sZFVybFN0cmluZy5lbmRzV2l0aCgnLycpICYmIHVybE9iai5oYXNoID09PSAnJykge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGVuZGluZyBgL2AgdW5sZXNzIHJlbW92ZVNpbmdsZVNsYXNoIGlzIGZhbHNlXG5cdGlmICgob3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoIHx8IHVybE9iai5wYXRobmFtZSA9PT0gJy8nKSAmJiB1cmxPYmouaGFzaCA9PT0gJycgJiYgb3B0aW9ucy5yZW1vdmVTaW5nbGVTbGFzaCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Ly8gUmVzdG9yZSByZWxhdGl2ZSBwcm90b2NvbCwgaWYgYXBwbGljYWJsZVxuXHRpZiAoaGFzUmVsYXRpdmVQcm90b2NvbCAmJiAhb3B0aW9ucy5ub3JtYWxpemVQcm90b2NvbCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vLCAnLy8nKTtcblx0fVxuXG5cdC8vIFJlbW92ZSBodHRwL2h0dHBzXG5cdGlmIChvcHRpb25zLnN0cmlwUHJvdG9jb2wpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXig/Omh0dHBzPzopP1xcL1xcLy8sICcnKTtcblx0fVxuXG5cdHJldHVybiB1cmxTdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVVybDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcbnZhciBwcm90b2NvbHMgPSByZXF1aXJlKFwicHJvdG9jb2xzXCIpLFxuICAgIGlzU3NoID0gcmVxdWlyZShcImlzLXNzaFwiKSxcbiAgICBxcyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7XG5cbi8qKlxuICogcGFyc2VQYXRoXG4gKiBQYXJzZXMgdGhlIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBwYXJzZVBhdGhcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgaW5wdXQgdXJsLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZmlyc3QgcHJvdG9jb2wsIGBcInNzaFwiYCAoaWYgdGhlIHVybCBpcyBhIHNzaCB1cmwpIG9yIGBcImZpbGVcImAuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHF1ZXJ5YCAoT2JqZWN0KTogVGhlIHVybCBxdWVyeXN0cmluZywgcGFyc2VkIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VQYXRoKHVybCkge1xuICAgIHVybCA9ICh1cmwgfHwgXCJcIikudHJpbSgpO1xuICAgIHZhciBvdXRwdXQgPSB7XG4gICAgICAgIHByb3RvY29sczogcHJvdG9jb2xzKHVybCksXG4gICAgICAgIHByb3RvY29sOiBudWxsLFxuICAgICAgICBwb3J0OiBudWxsLFxuICAgICAgICByZXNvdXJjZTogXCJcIixcbiAgICAgICAgdXNlcjogXCJcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiXCIsXG4gICAgICAgIGhhc2g6IFwiXCIsXG4gICAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgICAgaHJlZjogdXJsLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIH0sXG4gICAgICAgIHByb3RvY29sSW5kZXggPSB1cmwuaW5kZXhPZihcIjovL1wiKSxcbiAgICAgICAgcmVzb3VyY2VJbmRleCA9IC0xLFxuICAgICAgICBzcGxpdHMgPSBudWxsLFxuICAgICAgICBwYXJ0cyA9IG51bGw7XG5cbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi4vXCIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IHVybDtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhciA9IHVybC5jaGFyQXQoMSk7XG4gICAgaWYgKCFvdXRwdXQucHJvdG9jb2wpIHtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gb3V0cHV0LnByb3RvY29sc1swXTtcbiAgICAgICAgaWYgKCFvdXRwdXQucHJvdG9jb2wpIHtcbiAgICAgICAgICAgIGlmIChpc1NzaCh1cmwpKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJzc2hcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDaGFyID09PSBcIi9cIiB8fCBmaXJzdENoYXIgPT09IFwiflwiKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcImZpbGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvdG9jb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyhwcm90b2NvbEluZGV4ICsgMyk7XG4gICAgfVxuXG4gICAgcGFydHMgPSB1cmwuc3BsaXQoL1xcL3xcXFxcLyk7XG4gICAgaWYgKG91dHB1dC5wcm90b2NvbCAhPT0gXCJmaWxlXCIpIHtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gcGFydHMuc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucmVzb3VyY2UgPSBcIlwiO1xuICAgIH1cblxuICAgIC8vIHVzZXJAZG9tYWluXG4gICAgc3BsaXRzID0gb3V0cHV0LnJlc291cmNlLnNwbGl0KFwiQFwiKTtcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBvdXRwdXQudXNlciA9IHNwbGl0c1swXTtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gc3BsaXRzWzFdO1xuICAgIH1cblxuICAgIC8vIGRvbWFpbi5jb206cG9ydFxuICAgIHNwbGl0cyA9IG91dHB1dC5yZXNvdXJjZS5zcGxpdChcIjpcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gc3BsaXRzWzBdO1xuICAgICAgICBpZiAoc3BsaXRzWzFdKSB7XG4gICAgICAgICAgICBvdXRwdXQucG9ydCA9IE51bWJlcihzcGxpdHNbMV0pO1xuICAgICAgICAgICAgaWYgKGlzTmFOKG91dHB1dC5wb3J0KSkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wb3J0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBwYXJ0cy51bnNoaWZ0KHNwbGl0c1sxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXQucG9ydCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgZWxlbWVudHNcbiAgICBwYXJ0cyA9IHBhcnRzLmZpbHRlcihCb29sZWFuKTtcblxuICAgIC8vIFN0cmluZ2lmeSB0aGUgcGF0aG5hbWVcbiAgICBpZiAob3V0cHV0LnByb3RvY29sID09PSBcImZpbGVcIikge1xuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSBvdXRwdXQuaHJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSBvdXRwdXQucGF0aG5hbWUgfHwgKG91dHB1dC5wcm90b2NvbCAhPT0gXCJmaWxlXCIgfHwgb3V0cHV0LmhyZWZbMF0gPT09IFwiL1wiID8gXCIvXCIgOiBcIlwiKSArIHBhcnRzLmpvaW4oXCIvXCIpO1xuICAgIH1cblxuICAgIC8vICNzb21lLWhhc2hcbiAgICBzcGxpdHMgPSBvdXRwdXQucGF0aG5hbWUuc3BsaXQoXCIjXCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IHNwbGl0c1swXTtcbiAgICAgICAgb3V0cHV0Lmhhc2ggPSBzcGxpdHNbMV07XG4gICAgfVxuXG4gICAgLy8gP2Zvbz1iYXJcbiAgICBzcGxpdHMgPSBvdXRwdXQucGF0aG5hbWUuc3BsaXQoXCI/XCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IHNwbGl0c1swXTtcbiAgICAgICAgb3V0cHV0LnNlYXJjaCA9IHNwbGl0c1sxXTtcbiAgICB9XG5cbiAgICBvdXRwdXQucXVlcnkgPSBxcy5wYXJzZShvdXRwdXQuc2VhcmNoKTtcbiAgICBvdXRwdXQuaHJlZiA9IG91dHB1dC5ocmVmLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICBvdXRwdXQucGF0aG5hbWUgPSBvdXRwdXQucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VQYXRoOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBwYXJzZVBhdGggPSByZXF1aXJlKFwicGFyc2UtcGF0aFwiKSxcbiAgICBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwibm9ybWFsaXplLXVybFwiKTtcblxuLyoqXG4gKiBwYXJzZVVybFxuICogUGFyc2VzIHRoZSBpbnB1dCB1cmwuXG4gKlxuICogKipOb3RlKio6IFRoaXMgKnRocm93cyogaWYgaW52YWxpZCB1cmxzIGFyZSBwcm92aWRlZC5cbiAqXG4gKiBAbmFtZSBwYXJzZVVybFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBpbnB1dCB1cmwuXG4gKiBAcGFyYW0ge0Jvb2xlYW58T2JqZWN0fSBub3JtYWxpemUgV2hldGVyIHRvIG5vcm1hbGl6ZSB0aGUgdXJsIG9yIG5vdC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgYGZhbHNlYC4gSWYgYHRydWVgLCB0aGUgdXJsIHdpbGxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIGJlIG5vcm1hbGl6ZWQuIElmIGFuIG9iamVjdCwgaXQgd2lsbCBiZSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgb2JqZWN0IHNlbnQgdG8gW2Bub3JtYWxpemUtdXJsYF0oaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9ub3JtYWxpemUtdXJsKS5cbiAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgU1NIIHVybHMsIG5vcm1hbGl6ZSB3b24ndCB3b3JrLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gKlxuICogIC0gYHByb3RvY29sc2AgKEFycmF5KTogQW4gYXJyYXkgd2l0aCB0aGUgdXJsIHByb3RvY29scyAodXN1YWxseSBpdCBoYXMgb25lIGVsZW1lbnQpLlxuICogIC0gYHByb3RvY29sYCAoU3RyaW5nKTogVGhlIGZpcnN0IHByb3RvY29sLCBgXCJzc2hcImAgKGlmIHRoZSB1cmwgaXMgYSBzc2ggdXJsKSBvciBgXCJmaWxlXCJgLlxuICogIC0gYHBvcnRgIChudWxsfE51bWJlcik6IFRoZSBkb21haW4gcG9ydC5cbiAqICAtIGByZXNvdXJjZWAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluIChpbmNsdWRpbmcgc3ViZG9tYWlucykuXG4gKiAgLSBgdXNlcmAgKFN0cmluZyk6IFRoZSBhdXRoZW50aWNhdGlvbiB1c2VyICh1c3VhbGx5IGZvciBzc2ggdXJscykuXG4gKiAgLSBgcGF0aG5hbWVgIChTdHJpbmcpOiBUaGUgdXJsIHBhdGhuYW1lLlxuICogIC0gYGhhc2hgIChTdHJpbmcpOiBUaGUgdXJsIGhhc2guXG4gKiAgLSBgc2VhcmNoYCAoU3RyaW5nKTogVGhlIHVybCBxdWVyeXN0cmluZyB2YWx1ZS5cbiAqICAtIGBocmVmYCAoU3RyaW5nKTogVGhlIGlucHV0IHVybC5cbiAqICAtIGBxdWVyeWAgKE9iamVjdCk6IFRoZSB1cmwgcXVlcnlzdHJpbmcsIHBhcnNlZCBhcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICAgIHZhciBub3JtYWxpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgfHwgIXVybC50cmltKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB1cmwuXCIpO1xuICAgIH1cbiAgICBpZiAobm9ybWFsaXplKSB7XG4gICAgICAgIGlmICgodHlwZW9mIG5vcm1hbGl6ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5vcm1hbGl6ZSkpICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBub3JtYWxpemUgPSB7XG4gICAgICAgICAgICAgICAgc3RyaXBIYXNoOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSBub3JtYWxpemVVcmwodXJsLCBub3JtYWxpemUpO1xuICAgIH1cbiAgICB2YXIgcGFyc2VkID0gcGFyc2VQYXRoKHVybCk7XG4gICAgcmV0dXJuIHBhcnNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVVybDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBwcm90b2NvbHNcbiAqIFJldHVybnMgdGhlIHByb3RvY29scyBvZiBhbiBpbnB1dCB1cmwuXG4gKlxuICogQG5hbWUgcHJvdG9jb2xzXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdXJsLlxuICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZmlyc3QgSWYgYHRydWVgLCB0aGUgZmlyc3QgcHJvdG9jb2wgd2lsbCBiZSByZXR1cm5lZC4gSWYgbnVtYmVyLCBpdCB3aWxsIHJlcHJlc2VudCB0aGUgemVyby1iYXNlZCBpbmRleCBvZiB0aGUgcHJvdG9jb2xzIGFycmF5LlxuICogQHJldHVybiB7QXJyYXl8U3RyaW5nfSBUaGUgYXJyYXkgb2YgcHJvdG9jb2xzIG9yIHRoZSBzcGVjaWZpZWQgcHJvdG9jb2wuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJvdG9jb2xzKGlucHV0LCBmaXJzdCkge1xuXG4gICAgaWYgKGZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZpcnN0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBpbnB1dC5pbmRleE9mKFwiOi8vXCIpLFxuICAgICAgICBzcGxpdHMgPSBpbnB1dC5zdWJzdHJpbmcoMCwgaW5kZXgpLnNwbGl0KFwiK1wiKS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBzcGxpdHNbZmlyc3RdO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdHM7XG59OyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG5jb25zdCBkZWNvZGVDb21wb25lbnQgPSByZXF1aXJlKCdkZWNvZGUtdXJpLWNvbXBvbmVudCcpO1xuY29uc3Qgc3BsaXRPbkZpcnN0ID0gcmVxdWlyZSgnc3BsaXQtb24tZmlyc3QnKTtcbmNvbnN0IGZpbHRlck9iamVjdCA9IHJlcXVpcmUoJ2ZpbHRlci1vYmonKTtcblxuY29uc3QgaXNOdWxsT3JVbmRlZmluZWQgPSB2YWx1ZSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGluZGV4LCAnXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXG5cdFx0XHRcdFx0Li4ucmVzdWx0LFxuXHRcdFx0XHRcdFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBlbmNvZGUoaW5kZXgsIG9wdGlvbnMpLCAnXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKVxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnW109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gW1tlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1tyZXN1bHQsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4ob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcildO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBlbmNvZGUoa2V5LCBvcHRpb25zKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucykge1xuXHRsZXQgcmVzdWx0O1xuXG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gL1xcWyhcXGQqKVxcXSQvLmV4ZWMoa2V5KTtcblxuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxkKlxcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV1bcmVzdWx0WzFdXSA9IHZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2JyYWNrZXQnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvKFxcW1xcXSkkLy5leGVjKGtleSk7XG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0Y29uc3QgaXNBcnJheSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cdFx0XHRcdGNvbnN0IGlzRW5jb2RlZEFycmF5ID0gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzQXJyYXkgJiYgZGVjb2RlKHZhbHVlLCBvcHRpb25zKS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKSk7XG5cdFx0XHRcdHZhbHVlID0gaXNFbmNvZGVkQXJyYXkgPyBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gaXNBcnJheSB8fCBpc0VuY29kZWRBcnJheSA/IHZhbHVlLnNwbGl0KG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpLm1hcChpdGVtID0+IGRlY29kZShpdGVtLCBvcHRpb25zKSkgOiB2YWx1ZSA9PT0gbnVsbCA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IG5ld1ZhbHVlO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3IodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUubGVuZ3RoICE9PSAxKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXlGb3JtYXRTZXBhcmF0b3IgbXVzdCBiZSBzaW5nbGUgY2hhcmFjdGVyIHN0cmluZycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmRlY29kZSkge1xuXHRcdHJldHVybiBkZWNvZGVDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBrZXlzU29ydGVyKGlucHV0KSB7XG5cdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXHRcdHJldHVybiBpbnB1dC5zb3J0KCk7XG5cdH1cblxuXHRpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xuXHRcdHJldHVybiBrZXlzU29ydGVyKE9iamVjdC5rZXlzKGlucHV0KSlcblx0XHRcdC5zb3J0KChhLCBiKSA9PiBOdW1iZXIoYSkgLSBOdW1iZXIoYikpXG5cdFx0XHQubWFwKGtleSA9PiBpbnB1dFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFzaChpbnB1dCkge1xuXHRjb25zdCBoYXNoU3RhcnQgPSBpbnB1dC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aW5wdXQgPSBpbnB1dC5zbGljZSgwLCBoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKHVybCkge1xuXHRsZXQgaGFzaCA9ICcnO1xuXHRjb25zdCBoYXNoU3RhcnQgPSB1cmwuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGhhc2ggPSB1cmwuc2xpY2UoaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KGlucHV0KSB7XG5cdGlucHV0ID0gcmVtb3ZlSGFzaChpbnB1dCk7XG5cdGNvbnN0IHF1ZXJ5U3RhcnQgPSBpbnB1dC5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBpbnB1dC5zbGljZShxdWVyeVN0YXJ0ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMucGFyc2VOdW1iZXJzICYmICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlKSkgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpICE9PSAnJykpIHtcblx0XHR2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5wYXJzZUJvb2xlYW5zICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJykpIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZSxcblx0XHRzb3J0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJyxcblx0XHRwYXJzZU51bWJlcnM6IGZhbHNlLFxuXHRcdHBhcnNlQm9vbGVhbnM6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRjb25zdCByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdGlmICh0eXBlb2YgcXVlcnkgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL15bPyMmXS8sICcnKTtcblxuXHRpZiAoIXF1ZXJ5KSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdGZvciAoY29uc3QgcGFyYW0gb2YgcXVlcnkuc3BsaXQoJyYnKSkge1xuXHRcdGlmIChwYXJhbSA9PT0gJycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBba2V5LCB2YWx1ZV0gPSBzcGxpdE9uRmlyc3Qob3B0aW9ucy5kZWNvZGUgPyBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKSA6IHBhcmFtLCAnPScpO1xuXG5cdFx0Ly8gTWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IFsnY29tbWEnLCAnc2VwYXJhdG9yJ10uaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdCkgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0Zm9ybWF0dGVyKGRlY29kZShrZXksIG9wdGlvbnMpLCB2YWx1ZSwgcmV0KTtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJldCkpIHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModmFsdWUpKSB7XG5cdFx0XHRcdHZhbHVlW2tdID0gcGFyc2VWYWx1ZSh2YWx1ZVtrXSwgb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFtrZXldID0gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cmV0dXJuIChvcHRpb25zLnNvcnQgPT09IHRydWUgPyBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKSA6IE9iamVjdC5rZXlzKHJldCkuc29ydChvcHRpb25zLnNvcnQpKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAoQm9vbGVhbih2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdC8vIFNvcnQgb2JqZWN0IGtleXMsIG5vdCB2YWx1ZXNcblx0XHRcdHJlc3VsdFtrZXldID0ga2V5c1NvcnRlcih2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRpZiAoIW9iamVjdCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZScsXG5cdFx0YXJyYXlGb3JtYXRTZXBhcmF0b3I6ICcsJ1xuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IHNob3VsZEZpbHRlciA9IGtleSA9PiAoXG5cdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgaXNOdWxsT3JVbmRlZmluZWQob2JqZWN0W2tleV0pKSB8fFxuXHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiBvYmplY3Rba2V5XSA9PT0gJycpXG5cdCk7XG5cblx0Y29uc3QgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdGNvbnN0IG9iamVjdENvcHkgPSB7fTtcblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0aWYgKCFzaG91bGRGaWx0ZXIoa2V5KSkge1xuXHRcdFx0b2JqZWN0Q29weVtrZXldID0gb2JqZWN0W2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdENvcHkpO1xuXG5cdGlmIChvcHRpb25zLnNvcnQgIT09IGZhbHNlKSB7XG5cdFx0a2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG5cdH1cblxuXHRyZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG5cdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHQucmVkdWNlKGZvcm1hdHRlcihrZXkpLCBbXSlcblx0XHRcdFx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucykgKyAnPScgKyBlbmNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHR9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSAodXJsLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgW3VybF8sIGhhc2hdID0gc3BsaXRPbkZpcnN0KHVybCwgJyMnKTtcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHR7XG5cdFx0XHR1cmw6IHVybF8uc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRcdHF1ZXJ5OiBwYXJzZShleHRyYWN0KHVybCksIG9wdGlvbnMpXG5cdFx0fSxcblx0XHRvcHRpb25zICYmIG9wdGlvbnMucGFyc2VGcmFnbWVudElkZW50aWZpZXIgJiYgaGFzaCA/IHtmcmFnbWVudElkZW50aWZpZXI6IGRlY29kZShoYXNoLCBvcHRpb25zKX0gOiB7fVxuXHQpO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnlVcmwgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHVybCA9IHJlbW92ZUhhc2gob2JqZWN0LnVybCkuc3BsaXQoJz8nKVswXSB8fCAnJztcblx0Y29uc3QgcXVlcnlGcm9tVXJsID0gZXhwb3J0cy5leHRyYWN0KG9iamVjdC51cmwpO1xuXHRjb25zdCBwYXJzZWRRdWVyeUZyb21VcmwgPSBleHBvcnRzLnBhcnNlKHF1ZXJ5RnJvbVVybCwge3NvcnQ6IGZhbHNlfSk7XG5cblx0Y29uc3QgcXVlcnkgPSBPYmplY3QuYXNzaWduKHBhcnNlZFF1ZXJ5RnJvbVVybCwgb2JqZWN0LnF1ZXJ5KTtcblx0bGV0IHF1ZXJ5U3RyaW5nID0gZXhwb3J0cy5zdHJpbmdpZnkocXVlcnksIG9wdGlvbnMpO1xuXHRpZiAocXVlcnlTdHJpbmcpIHtcblx0XHRxdWVyeVN0cmluZyA9IGA/JHtxdWVyeVN0cmluZ31gO1xuXHR9XG5cblx0bGV0IGhhc2ggPSBnZXRIYXNoKG9iamVjdC51cmwpO1xuXHRpZiAob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllcikge1xuXHRcdGhhc2ggPSBgIyR7ZW5jb2RlKG9iamVjdC5mcmFnbWVudElkZW50aWZpZXIsIG9wdGlvbnMpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7dXJsfSR7cXVlcnlTdHJpbmd9JHtoYXNofWA7XG59O1xuXG5leHBvcnRzLnBpY2sgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0cGFyc2VGcmFnbWVudElkZW50aWZpZXI6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3Qge3VybCwgcXVlcnksIGZyYWdtZW50SWRlbnRpZmllcn0gPSBleHBvcnRzLnBhcnNlVXJsKGlucHV0LCBvcHRpb25zKTtcblx0cmV0dXJuIGV4cG9ydHMuc3RyaW5naWZ5VXJsKHtcblx0XHR1cmwsXG5cdFx0cXVlcnk6IGZpbHRlck9iamVjdChxdWVyeSwgZmlsdGVyKSxcblx0XHRmcmFnbWVudElkZW50aWZpZXJcblx0fSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmV4Y2x1ZGUgPSAoaW5wdXQsIGZpbHRlciwgb3B0aW9ucykgPT4ge1xuXHRjb25zdCBleGNsdXNpb25GaWx0ZXIgPSBBcnJheS5pc0FycmF5KGZpbHRlcikgPyBrZXkgPT4gIWZpbHRlci5pbmNsdWRlcyhrZXkpIDogKGtleSwgdmFsdWUpID0+ICFmaWx0ZXIoa2V5LCB2YWx1ZSk7XG5cblx0cmV0dXJuIGV4cG9ydHMucGljayhpbnB1dCwgZXhjbHVzaW9uRmlsdGVyLCBvcHRpb25zKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKHN0cmluZywgc2VwYXJhdG9yKSA9PiB7XG5cdGlmICghKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZXBhcmF0b3IgPT09ICdzdHJpbmcnKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBhcmd1bWVudHMgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCcpO1xuXHR9XG5cblx0aWYgKHNlcGFyYXRvciA9PT0gJycpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN0cmluZy5pbmRleE9mKHNlcGFyYXRvcik7XG5cblx0aWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0c3RyaW5nLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KSxcblx0XHRzdHJpbmcuc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyBzZXBhcmF0b3IubGVuZ3RoKVxuXHRdO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgeCA9PiBgJSR7eC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWApO1xuIiwiaW1wb3J0IHsgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZCb29sZWFucyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UodHJ1ZSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVtYmVycyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UoMSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mU3RyaW5ncyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UoXCJcIikoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mU3ltYm9scyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UoU3ltYm9sKCkpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk51bGxzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShudWxsKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZVbmRlZmluZWRzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh1bmRlZmluZWQpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlByaW1pdGl2ZXMoeCkge1xuICAgIHJldHVybiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mT2JqZWN0cyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2YodHlwZSkge1xuICAgIHJldHVybiAoeHMpID0+IGlzKEFycmF5KSh4cykgJiYgeHMuZXZlcnkoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkxpa2UocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheS5qcy5tYXAiLCJleHBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSwgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IHsgaXNBcnJheU9mQm9vbGVhbnMsIGlzQXJyYXlPZk51bWJlcnMsIGlzQXJyYXlPZlN0cmluZ3MsIGlzQXJyYXlPZlN5bWJvbHMsIGlzQXJyYXlPZk51bGxzLCBpc0FycmF5T2ZVbmRlZmluZWRzLCBpc0FycmF5T2ZQcmltaXRpdmVzLCBpc0FycmF5T2ZPYmplY3RzLCBpc0FycmF5T2YsIGlzQXJyYXlPZkxpa2UsIH0gZnJvbSBcIi4vYXJyYXlcIjtcbmV4cG9ydCB7IG9ubHlCb29sZWFucywgb25seU51bWJlcnMsIG9ubHlTdHJpbmdzLCBvbmx5U3ltYm9scywgb25seU51bGxzLCBvbmx5VW5kZWZpbmVkcywgb25seVByaW1pdGl2ZXMsIG9ubHlPYmplY3RzLCBvbmx5LCBvbmx5TGlrZSwgfSBmcm9tIFwiLi9vbmx5XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJjb25zdCBUWVBFX0dVQVJEU19QUklNSVRJVkUgPSBbaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkXTtcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJib29sZWFuXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJudW1iZXJcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN0cmluZ1wiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ltYm9sKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKHgpIHtcbiAgICByZXR1cm4geCA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCh4KSB7XG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuIFRZUEVfR1VBUkRTX1BSSU1JVElWRS5zb21lKGYgPT4gZih4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOb25QcmltaXRpdmUoeCkge1xuICAgIHJldHVybiAhaXNQcmltaXRpdmUoeCk7XG59XG5mdW5jdGlvbiBuYW1lZEZ1bmN0aW9uKG5hbWUsIGZ1bikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuLCBcIm5hbWVcIiwgeyB2YWx1ZTogbmFtZSwgd3JpdGFibGU6IGZhbHNlIH0pO1xufVxuZnVuY3Rpb24gbmFtZWRUeXBlR3VhcmQoY3JlYXRvciwgdHlwZSwgdHlwZUd1YXJkKSB7XG4gICAgcmV0dXJuIG5hbWVkRnVuY3Rpb24oYCR7Y3JlYXRvci5uYW1lfSgke3R5cGUubmFtZX0pYCwgdHlwZUd1YXJkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpcyh0eXBlKSB7XG4gICAgaWYgKGlzUHJpbWl0aXZlKHR5cGUpKSB7XG4gICAgICAgIHJldHVybiAoXykgPT4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBuYW1lZFR5cGVHdWFyZChpcywgdHlwZSwgKHgpID0+IHggaW5zdGFuY2VvZiB0eXBlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xpa2UocmVmZXJlbmNlKSB7XG4gICAgZm9yIChjb25zdCBmIG9mIFRZUEVfR1VBUkRTX1BSSU1JVElWRSkge1xuICAgICAgICBpZiAoZihyZWZlcmVuY2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gKHgpID0+IGYoeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzKEFycmF5KShyZWZlcmVuY2UpKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUFzQXJyYXkgPSByZWZlcmVuY2U7XG4gICAgICAgIHJldHVybiAoeCkgPT4gaXMoQXJyYXkpKHgpICYmIChyZWZlcmVuY2VBc0FycmF5Lmxlbmd0aCA+IDAgPyB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2VBc0FycmF5WzBdKSkgOiB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHJlZmVyZW5jZS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAoeCkgPT4gKCFbdW5kZWZpbmVkLCBudWxsXS5pbmNsdWRlcyh4KVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZWZlcmVuY2UpLmV2ZXJ5KGsgPT4gaXNMaWtlKHJlZmVyZW5jZVtrXSkoeFtrXSkpKTtcbiAgICB9XG4gICAgaWYgKHJlZmVyZW5jZS5jb25zdHJ1Y3RvciBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBpcyhyZWZlcmVuY2UuY29uc3RydWN0b3IpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGlzTGlrZS5uYW1lICsgYCBjYW5ub3QgdXNlIHRoaXMgb2JqZWN0IGFzIHJlZmVyZW5jZSBiZWNhdXNlIGl0IGhhcyBubyBjb25zdHJ1Y3RvcjogYCArIEpTT04uc3RyaW5naWZ5KHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMuanMubWFwIiwiaW1wb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIG9ubHlCb29sZWFucyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNCb29sZWFuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5TnVtYmVycyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdW1iZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlTdHJpbmdzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1N0cmluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN5bWJvbHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3ltYm9sKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5TnVsbHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTnVsbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVVuZGVmaW5lZHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzVW5kZWZpbmVkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5UHJpbWl0aXZlcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNQcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlPYmplY3RzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc05vblByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seSh0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4geHMuZmlsdGVyKGlzKHR5cGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5TGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXNMaWtlKHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b25seS5qcy5tYXAiLCJleHBvcnQgY29uc3QgQUxXQVlTID0gKCkgPT4gdHJ1ZTtcbmV4cG9ydCBjb25zdCBORVZFUiA9ICgpID0+IGZhbHNlO1xuZXhwb3J0IGNvbnN0IERPTUNPTlRFTlRMT0FERUQgPSAoc3RhdGUpID0+IHN0YXRlICE9PSBcImxvYWRpbmdcIjtcbmV4cG9ydCBjb25zdCBMT0FEID0gKHN0YXRlKSA9PiBzdGF0ZSA9PT0gXCJjb21wbGV0ZVwiO1xuIiwiaW1wb3J0IHsgdW5saW5lcyB9IGZyb20gXCJsaW5lcy11bmxpbmVzXCI7XG5jb25zdCBJTkRFTlRBVElPTiA9IFwiICBcIjtcbmZ1bmN0aW9uIGZvcm1hdERlcGVuZGVuY3koZCkge1xuICAgIHJldHVybiBJTkRFTlRBVElPTiArIGQua2V5ICsgXCI6IFwiICsgZC5zZWxlY3Rvcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHBsYW5hdGlvbihmYWlsdXJlKSB7XG4gICAgc3dpdGNoIChmYWlsdXJlLnJlc3VsdC5yZWFzb24pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGVzZSBkZXBlbmRlbmNpZXMgd2VyZSBub3QgZm91bmQ6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICB1bmxpbmVzKGZhaWx1cmUucmVzdWx0LmRlcGVuZGVuY2llcy5tYXAoZm9ybWF0RGVwZW5kZW5jeSkpLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB1bmxpbmVzKFtcbiAgICAgICAgICAgICAgICBgVGhlIG9wZXJhdGlvbiBmYWlsZWQgd2l0aCB0aGlzIGVycm9yOmAsXG4gICAgICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICAgICAgZmFpbHVyZS5yZXN1bHQubWVzc2FnZSxcbiAgICAgICAgICAgIF0pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlRGVzY3JpYmVyKGNvbnRleHQpIHtcbiAgICByZXR1cm4gZmFpbHVyZSA9PiB1bmxpbmVzKFtcbiAgICAgICAgYENvdWxkIG5vdCAke2ZhaWx1cmUub3BlcmF0aW9uLmRlc2NyaXB0aW9ufSBvbiB0aGlzIHBhZ2U6YCxcbiAgICAgICAgYGAsXG4gICAgICAgIElOREVOVEFUSU9OICsgbG9jYXRpb24uaHJlZixcbiAgICAgICAgYGAsXG4gICAgICAgIGV4cGxhbmF0aW9uKGZhaWx1cmUpLnRyaW0oKSxcbiAgICAgICAgYGAsXG4gICAgICAgIGBUaGlzIHByb2JsZW0gbWlnaHQgYmUgY2F1c2VkIGJ5ICR7Y29udGV4dC5zaXRlTmFtZX0gY2hhbmdpbmcgaXRzIGNvbnRlbnQvc3RydWN0dXJlLCBpbiB3aGljaCBjYXNlICR7Y29udGV4dC5leHRlbnNpb25OYW1lfSBuZWVkcyB0byBiZSB1cGRhdGVkIGFjY29yZGluZ2x5LiBPdGhlcndpc2UsIGl0J3MgcHJvYmFibHkgYSBidWcgaW4gJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9LmAsXG4gICAgICAgIGBgLFxuICAgICAgICBgSWYgeW91IGZpbGUgYSBidWcgcmVwb3J0LCBwbGVhc2UgaW5jbHVkZSB0aGlzIG1lc3NhZ2UuYCxcbiAgICBdKTtcbn1cbiIsImltcG9ydCAqIGFzIGVudmlyb25tZW50IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgKiBhcyBlcnJvcnMgZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHByZWZlcmVuY2VzIGZyb20gXCIuL3ByZWZlcmVuY2VzXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXNoZWV0cyBmcm9tIFwiLi9zdHlsZXNoZWV0c1wiO1xuaW1wb3J0ICogYXMgdXNlcnNjcmlwdGVyIGZyb20gXCIuL3VzZXJzY3JpcHRlclwiO1xuZXhwb3J0IHsgZW52aXJvbm1lbnQsIGVycm9ycywgbG9nLCBvcGVyYXRpb25zLCBwcmVmZXJlbmNlcywgc3R5bGVzaGVldHMsIHVzZXJzY3JpcHRlciwgfTtcbiIsImxldCBwcmVmaXggPSBcIlwiO1xubGV0IGxvZ2dlciA9IGNvbnNvbGU7XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJlZml4KHApIHtcbiAgICBwcmVmaXggPSBwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldExvZ2dlcihsKSB7XG4gICAgbG9nZ2VyID0gbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2coc3RyKSB7XG4gICAgbG9nZ2VyLmxvZyhwcmVmaXgsIHN0cik7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5mbyhzdHIpIHtcbiAgICBsb2dnZXIuaW5mbyhwcmVmaXgsIHN0cik7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyhzdHIpIHtcbiAgICBsb2dnZXIud2FybihwcmVmaXgsIHN0cik7XG59XG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RyKSB7XG4gICAgbG9nZ2VyLmVycm9yKHByZWZpeCwgc3RyKTtcbn1cbiIsImltcG9ydCB7IGlzTnVsbCwgaXNOdW1iZXIsIGlzU3RyaW5nIH0gZnJvbSBcInRzLXR5cGUtZ3VhcmRzXCI7XG5jb25zdCBTVUNDRVNTID0gdW5kZWZpbmVkO1xuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGlvbihzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWM7XG59XG5leHBvcnQgZnVuY3Rpb24gcnVuKHBsYW4pIHtcbiAgICBmdW5jdGlvbiByZWN1cnNlKG9wZXJhdGlvbnMsIGZhaWx1cmVzLCB0cmllc0xlZnQpIHtcbiAgICAgICAgY29uc3QgbGFzdFRyeSA9IGlzTnVtYmVyKHRyaWVzTGVmdCkgJiYgdHJpZXNMZWZ0IDw9IDA7XG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnNUb1J1bk5vdyA9IFtdO1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBbXTtcbiAgICAgICAgY29uc3QgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gICAgICAgIGZvciAoY29uc3QgbyBvZiBvcGVyYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRSdW5Ob3cgPSBvLmRlZmVyVW50aWwgPT09IHVuZGVmaW5lZCB8fCBvLmRlZmVyVW50aWwocmVhZHlTdGF0ZSk7XG4gICAgICAgICAgICAoc2hvdWxkUnVuTm93ID8gb3BlcmF0aW9uc1RvUnVuTm93IDogcmVtYWluaW5nKS5wdXNoKG8pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbyBvZiBvcGVyYXRpb25zVG9SdW5Ob3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeVRvUGVyZm9ybShvKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IFNVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdC5yZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRyeSA/IGZhaWx1cmVzLnB1c2goeyByZXN1bHQsIG9wZXJhdGlvbjogbyB9KSA6IHJlbWFpbmluZy5wdXNoKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWx1cmVzLnB1c2goeyByZXN1bHQsIG9wZXJhdGlvbjogbyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVjdXJzZShyZW1haW5pbmcsIGZhaWx1cmVzLCAoaXNOdW1iZXIodHJpZXNMZWZ0KVxuICAgICAgICAgICAgICAgID8gdHJpZXNMZWZ0IC0gMVxuICAgICAgICAgICAgICAgIDogcGxhbi50cnlVbnRpbChyZWFkeVN0YXRlKSA/IHBsYW4uZXh0cmFUcmllcyA6IHVuZGVmaW5lZCkpLCBwbGFuLmludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmYWlsdXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwbGFuLmhhbmRsZUZhaWx1cmVzKGZhaWx1cmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWN1cnNlKHBsYW4ub3BlcmF0aW9ucy5maWx0ZXIobyA9PiBvLmNvbmRpdGlvbih3aW5kb3cpKSwgW10pO1xufVxuZnVuY3Rpb24gdHJ5VG9QZXJmb3JtKG8pIHtcbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBvLmRlcGVuZGVuY2llcyA9PT0gdW5kZWZpbmVkID8ge30gOiBvLmRlcGVuZGVuY2llcztcbiAgICBjb25zdCBxdWVyeVJlc3VsdHMgPSBPYmplY3QuZW50cmllcyhkZXBlbmRlbmNpZXMpLm1hcCgoW2tleSwgc2VsZWN0b3JdKSA9PiAoe1xuICAgICAgICBrZXksIHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSxcbiAgICB9KSk7XG4gICAgY29uc3QgbWlzc2luZ0RlcGVuZGVuY2llcyA9IHF1ZXJ5UmVzdWx0cy5maWx0ZXIoeCA9PiBpc051bGwoeC5lbGVtZW50KSk7XG4gICAgaWYgKG1pc3NpbmdEZXBlbmRlbmNpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4geyByZWFzb246IDAsIGRlcGVuZGVuY2llczogbWlzc2luZ0RlcGVuZGVuY2llcyB9O1xuICAgIH1cbiAgICBjb25zdCBlID0gcXVlcnlSZXN1bHRzLnJlZHVjZSgoYWNjLCB4KSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWNjLCB4LmtleSwgeyB2YWx1ZTogeC5lbGVtZW50IH0pLCB7fSk7XG4gICAgcmV0dXJuIGZyb21BY3Rpb25SZXN1bHQoby5hY3Rpb24oZSkpO1xufVxuZnVuY3Rpb24gZnJvbUFjdGlvblJlc3VsdChyKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHIpID8geyByZWFzb246IDEsIG1lc3NhZ2U6IHIgfSA6IFNVQ0NFU1M7XG59XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaXB0YWJsZShoYW5kbGVyKSB7XG4gICAgY29uc3QgY2hhbmdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZTogKGxpc3RlbmVyKSA9PiB7IGNoYW5nZUxpc3RlbmVycy5hZGQobGlzdGVuZXIpOyB9LFxuICAgICAgICB1bnN1YnNjcmliZTogKGxpc3RlbmVyKSA9PiB7IGNoYW5nZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpOyB9LFxuICAgICAgICBoYW5kbGVyOiAoc3VtbWFyeSwgcHJlZmVyZW5jZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGYgPT4gZihzdW1tYXJ5LnByZWZlcmVuY2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2dpbmdSZXNwb25zZUhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IHN1bW1hcnkucmVzcG9uc2U7XG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyAoJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS5zYXZlZCl9KSB3YXMgaW52YWxpZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJzZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBDb3VsZCBub3Qgc2V0IHZhbHVlICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBpdCB3YXMgaW52YWxpZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgaGFkIHRoZSB3cm9uZyB0eXBlLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBjb3VsZCBub3QgYmUgcGFyc2VkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBzd2l0Y2ggKHN1bW1hcnkuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCByZWFkIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgbG9jYWxTdG9yYWdlIGNvdWxkIG5vdCBiZSBhY2Nlc3NlZC4gVXNpbmcgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShzdW1tYXJ5LnByZWZlcmVuY2UuZGVmYXVsdCl9LmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHNhdmUgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShzdW1tYXJ5LnJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgbG9jYWxTdG9yYWdlIGNvdWxkIG5vdCBiZSBhY2Nlc3NlZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0VW5yZWFjaGFibGUoc3VtbWFyeS5hY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGFzc2VydFVucmVhY2hhYmxlKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3BSZXNwb25zZUhhbmRsZXIoc3VtbWFyeSwgXykge1xuICAgIHJldHVybiBzdW1tYXJ5LnJlc3BvbnNlO1xufVxuZnVuY3Rpb24gYXNzZXJ0VW5yZWFjaGFibGUoeCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydFVucmVhY2hhYmxlOiBcIiArIHgpO1xufVxuIiwiY29uc3QgTUFUQ0hfQUxMID0gXCJhbGxcIjtcbmNvbnN0IE1BVENIX05PTkUgPSBcIm5vdCBhbGxcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNoZWV0KHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnQoc3R5bGVzaGVldHMpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBPYmplY3QuZW50cmllcyhzdHlsZXNoZWV0cykuZm9yRWFjaCgoW18sIHNoZWV0XSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgaWYgKHNoZWV0LmlkICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBzdHlsZS5pZCA9IHNoZWV0LmlkO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHNoZWV0LmNzcztcbiAgICAgICAgc3R5bGUubWVkaWEgPSBzaGVldC5jb25kaXRpb24od2luZG93KSA/IE1BVENIX0FMTCA6IE1BVENIX05PTkU7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuY29uc3Qgc2V0TWVkaWFRdWVyeSA9IChtKSA9PiAocykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzLmlkKTtcbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG0pO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgZW5hYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9BTEwpO1xuZXhwb3J0IGNvbnN0IGRpc2FibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX05PTkUpO1xuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXNoZWV0cyBmcm9tIFwiLi9zdHlsZXNoZWV0c1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bih1c2Vyc2NyaXB0KSB7XG4gICAgbG9nLnNldFByZWZpeChgWyR7dXNlcnNjcmlwdC5uYW1lfV1gKTtcbiAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlKHVzZXJzY3JpcHQuaWQpO1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIGxvZy53YXJuaW5nKGBJdCBsb29rcyBhcyB0aG91Z2ggJHt1c2Vyc2NyaXB0Lm5hbWV9IGhhcyBhbHJlYWR5IHJ1biAoYmVjYXVzZSB0aGUgYXR0cmlidXRlIFwiJHthdHRyfVwiIHdhcyBmb3VuZCBvbiA8aGVhZD4pLiBTdG9wcGluZy5gKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgXCJcIik7XG4gICAgICAgIHVzZXJzY3JpcHQuaW5pdGlhbEFjdGlvbigpO1xuICAgICAgICBzdHlsZXNoZWV0cy5pbnNlcnQodXNlcnNjcmlwdC5zdHlsZXNoZWV0cyk7XG4gICAgICAgIG9wZXJhdGlvbnMucnVuKHVzZXJzY3JpcHQub3BlcmF0aW9uc1BsYW4pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZShpZCkge1xuICAgIHJldHVybiBcImRhdGEtXCIgKyBpZCArIFwiLWhhcy1ydW5cIjtcbn1cbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cblxuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfSU5URVJWQUwgPSAyMDA7IC8vIG1zXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19FWFRSQV9UUklFUyA9IDM7XG4iLCJjb25zdCBhcnIgPSBBcnJheS5mcm9tO1xuXG5jb25zdCBleHRyYWN0TGlua2VkVGV4dCA9IChub2RlOiBIVE1MRWxlbWVudCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdG1wTm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgIGFycih0bXBOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpKS5mb3JFYWNoKFxuICAgICAgICAoZWwpID0+IChlbC5pbm5lclRleHQgPSBgWyR7ZWwuaW5uZXJUZXh0fV0oJHtlbC5ocmVmfSlgKVxuICAgICk7XG4gICAgcmV0dXJuIHRtcE5vZGUuaW5uZXJUZXh0LnRyaW0oKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGFibGVBc0pzb24odGFibGU6IEhUTUxUYWJsZUVsZW1lbnQpOiBvYmplY3Qge1xuICAgIC8vIElkZWFsbHkgZmlyc3QgY2hlY2sgaWYgdGFibGUgaXMgXCJyZWd1bGFyXCIgYWthIGhhcyBlcXVhbCBudW1iZXIgb2YgdGggdG8gdGQvdHJcbiAgICBsZXQga2V5czogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmICh0YWJsZS50SGVhZCAhPT0gbnVsbCkge1xuICAgICAgICBrZXlzID0gYXJyKHRhYmxlLnRIZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpKVxuICAgIH1cblxuICAgIHJldHVybiBhcnIodGFibGUudEJvZGllcykuZmxhdE1hcCgoZWwpID0+XG4gICAgICAgIGFycihlbC5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpLm1hcCgodGFibGVSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDZWxscyA9IGFycih0YWJsZVJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGRhdGFDZWxscy5sZW5ndGggIT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRm91bmQgYSByb3cgd2l0aCBhIG1pc21hdGNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFDZWxscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAodGFibGVSb3csIGRhdGFLZXksIGlkeCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGFibGVSb3csXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhS2V5XTogZGF0YUNlbGxzW2lkeF0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlR2ZtVGFibGUodGFibGU6IEhUTUxUYWJsZUVsZW1lbnQpIHtcbiAgICBsZXQga2V5czogc3RyaW5nW10gPSBbXTtcbiAgICBrZXlzID0gYXJyKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgKTtcbiAgICByZXR1cm4gYXJyKHRhYmxlLnRCb2RpZXMpLm1hcCgoZWwpID0+XG4gICAgICAgIGFycihlbC5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpLm1hcCgodGFibGVSb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDZWxscyA9IGFycih0YWJsZVJvdy5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGRhdGFDZWxscy5sZW5ndGggIT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRm91bmQgYSByb3cgd2l0aCBhIG1pc21hdGNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFDZWxscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAodGFibGVSb3csIGRhdGFLZXksIGlkeCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGFibGVSb3csXG4gICAgICAgICAgICAgICAgICAgIFtkYXRhS2V5XTogZGF0YUNlbGxzW2lkeF0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBodG1sVHJlZVNlbGVjdGlvbigpOiBQcm9taXNlPEhUTUxFbGVtZW50PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIC8vIFRPRE8gc2VsZWN0IHZpYSBrZXlib2FyZD9cbiAgICAvLyBObyBuZWVkIHRvIHdhaXQgZm9yIGEgJ0RPTUNvbnRlbnRMb2FkZWQnIGV2ZW50IHNpbmNlIHRoZSBtYW5pZmVzdFxuICAgIC8vIHNwZWNpZmllczpcbiAgICAvL1xuICAgIC8vICAgXCJydW5fYXRcIjogXCJkb2N1bWVudF9lbmRcIlxuICAgIC8vXG5cbiAgICBsZXQgY2xpY2thYmxlID0gW1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJidXR0b25cIiksXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW3JvbGU9YnV0dG9uXVwiKSxcbiAgICBdO1xuICAgIGNvbnN0IGlmcmFtZU92ZXJsYXlzOiB7XG4gICAgICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgICAgb3ZlcmxheTogSFRNTERpdkVsZW1lbnQ7XG4gICAgfVtdID0gW107XG5cbiAgICBsZXQgbGFzdEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICBsZXQgc2hvdWxkQ2xlYXJBbGwgPSBmYWxzZTtcblxuICAgIGxldCBvdmVySGFuZGxlciA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGFzdEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcblxuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIikpIHtcbiAgICAgICAgaWYgKHRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICAgICAgbGV0IGlmcmFtZSA9XG4gICAgICAgICAgICBpZnJhbWVPdmVybGF5c1twYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApXS5pZnJhbWU7XG4gICAgICAgICAgaWZyYW1lLmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcImZhaWxlZCB0byBmaW5kIGlmcmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgbGV0IG91dEhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKHNob3VsZENsZWFyQWxsKSB7XG4gICAgICAgIGNsZWFyQ3VycmVudFNlbGVjdGlvbigpO1xuICAgICAgICBzaG91bGRDbGVhckFsbCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgbGV0IGNsaWNrSGFuZGxlciA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgZGlzYWJsZSgpO1xuXG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIikpIHtcbiAgICAgICAgaWYgKHRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaWZyYW1lT3ZlcmxheXNbcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKV0uaWZyYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIm1heWJlIGZhaWxlZCB0byBmaW5kIGlmcmFtZT9cIiwgdGFyZ2V0LCBpZnJhbWVPdmVybGF5cyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZSh0YXJnZXQpO1xuICAgIH07XG5cbiAgICBsZXQgZGlzYWJsZSA9ICgpID0+IHtcbiAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgIGNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNbaV0ub25jbGlja0JhY2t1cCk7XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgIGRlbGV0ZSBjW2ldLm9uY2xpY2tCYWNrdXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZnJhbWVPdmVybGF5cy5mb3JFYWNoKChvKSA9PiBvLm92ZXJsYXkucmVtb3ZlKCkpO1xuXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yXCIpO1xuXG4gICAgICAvLyBjbGVhbiBhbnkgb3JwaGFuZWQgaG92ZXIgYXBwbGllZCBjbGFzc1xuICAgICAgbGV0IG9ycGhhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICAgIGlmIChvcnBoYW4gIT09IG51bGwpIHtcbiAgICAgICAgb3JwaGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG92ZXJIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvdXRIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5SGFuZGxlciwgdHJ1ZSk7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNlbGVjdE5vZGUgPSAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdmVyXCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfTtcbiAgICBjb25zdCB1bnNlbGVjdE5vZGUgPSAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwibW91c2VvdXRcIiwgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IGNsZWFyQ3VycmVudFNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICAgIGNsaWNrYWJsZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHVuc2VsZWN0Tm9kZShjW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50ID0gKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzaG91bGRDbGVhckFsbCA9IHRydWU7XG4gICAgICBjbGVhckN1cnJlbnRTZWxlY3Rpb24oKTtcbiAgICAgIHNlbGVjdE5vZGUoZWwpO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVNlbGVjdGlvblRvUGFyZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50ID0gbGFzdEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgbW92ZVNlbGVjdGlvblRvRWxlbWVudChwYXJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbW92ZVNlbGVjdGlvblRvQ2hpbGQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGxhc3RFbGVtZW50LmNoaWxkcmVuICYmIGxhc3RFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkICE9PSBudWxsKSB7XG4gICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoY2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbW92ZVNlbGVjdGlvblRvTmV4dFNpYmxpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaWJsaW5nID0gbGFzdEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKHNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgbW92ZVNlbGVjdGlvblRvRWxlbWVudChzaWJsaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub1ByZXZTaWJsaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2libGluZyA9IGxhc3RFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoc2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50KHNpYmxpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsZXQga2V5SGFuZGxlciA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBoID0ge1xuICAgICAgICBFc2NhcGU6IGRpc2FibGUsXG4gICAgICAgIEFycm93TGVmdDogbW92ZVNlbGVjdGlvblRvUGFyZW50LFxuICAgICAgICBBcnJvd1JpZ2h0OiBtb3ZlU2VsZWN0aW9uVG9DaGlsZCxcbiAgICAgICAgQXJyb3dVcDogbW92ZVNlbGVjdGlvblRvTmV4dFNpYmxpbmcsXG4gICAgICAgIEFycm93RG93bjogbW92ZVNlbGVjdGlvblRvUHJldlNpYmxpbmcsXG4gICAgICB9O1xuICAgICAgY29uc29sZS5kZWJ1ZyhlLmtleSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBoYW5kbGVyID0gaFtlLmtleV07XG4gICAgICBoYW5kbGVyICYmIGhhbmRsZXIoKTtcbiAgICB9O1xuXG4gICAgbGV0IHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMgPSAoX2U6IEV2ZW50KSA9PiB7XG4gICAgICBpZnJhbWVPdmVybGF5cy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICAgIGxldCBpZnJhbWUgPSBvLmlmcmFtZTtcbiAgICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSBpZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBvdmVybGF5ID0gby5vdmVybGF5O1xuICAgICAgICBsZXQgb2Zmc2V0WCA9IGlmcmFtZUNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IGlmcmFtZUNsaWVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGA7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZW5hYmxlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG5cbiAgICAvLyBvdmVycmlkZSBjbGljayBoYW5kbGVycyBvbiBhbnkgY2xpY2thYmxlIGVsZW1lbnRcbiAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY1tpXS5vbmNsaWNrQmFja3VwID0gY1tpXS5vbmNsaWNrO1xuICAgICAgICBjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGlmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaWZyYW1lXCIpO1xuXG4gICAgaWZyYW1lcy5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgaWZyYW1lQ2xpZW50UmVjdCA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgb2Zmc2V0WCA9IGlmcmFtZUNsaWVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuICAgICAgbGV0IG9mZnNldFkgPSBpZnJhbWVDbGllbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXlcIik7XG4gICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gYCR7b2Zmc2V0WH1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLndpZHRoID0gYCR7aWZyYW1lQ2xpZW50UmVjdC53aWR0aH1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IGAke2lmcmFtZUNsaWVudFJlY3QuaGVpZ2h0fXB4YDtcblxuICAgICAgb3ZlcmxheS5kYXRhc2V0LmluZGV4ID0gYCR7aWZyYW1lT3ZlcmxheXMubGVuZ3RofWA7XG5cbiAgICAgIGlmcmFtZU92ZXJsYXlzLnB1c2goe1xuICAgICAgICBpZnJhbWU6IGksXG4gICAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3JcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG91dEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBhZGRUb0NsaXBib2FyZCA9IChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGVybWlzc2lvbk5hbWUgPSBcImNsaXBib2FyZC13cml0ZVwiIGFzIFBlcm1pc3Npb25OYW1lO1xuICByZXR1cm4gbmF2aWdhdG9yLnBlcm1pc3Npb25zXG4gICAgLnF1ZXJ5KHsgbmFtZTogcGVybWlzc2lvbk5hbWUgfSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnN0YXRlID09IFwiZ3JhbnRlZFwiIHx8IHJlc3VsdC5zdGF0ZSA9PSBcInByb21wdFwiKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb250ZW50KS50aGVuKCgpID0+IHt9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBcIlBlcm1pc3Npb24gZm9yIGNsaXBib2FyZC13cml0ZSB3YXMgbm90IG9idGFpbmVkIFwiICsgcmVzdWx0LnN0YXRlXG4gICAgICApO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpYmxpbmdzID0gKGVsZW06IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIGNvbnN0IHNpYmxpbmdzID0gW107XG4gIGxldCBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlICYmIGVsZW0ucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICBpZiAoIXNpYmxpbmcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxuICB3aGlsZSAoc2libGluZykge1xuICAgIGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW0pIHtcbiAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyBhcyBIVE1MRWxlbWVudCk7XG4gICAgfVxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBzaWJsaW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRCdG5Ub0VsZW1lbnRzID0gPFogZXh0ZW5kcyBIVE1MRWxlbWVudD4oXG4gIGVsZW1lbnRzOiBOb2RlTGlzdE9mPFo+LFxuICBjbGlja0hhbmRsZXI6IChlOiBaLCBhOiBFdmVudCkgPT4gdm9pZCxcbiAgbW9kaWZ5QnRuOiAoYjogSFRNTEVsZW1lbnQpID0+IHZvaWRcbik6IEhUTUxFbGVtZW50W10gPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChjb2RlQmxvY2spID0+IHtcbiAgICBjb2RlQmxvY2suY2xhc3NMaXN0LmFkZChcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldFwiKTtcbiAgICBjb2RlQmxvY2suaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiamFja3MtZGV2LWhlbHBlcnMtb3V0ZXItd3JhcFwiID4ke2NvZGVCbG9jay5pbm5lckhUTUx9PC9zcGFuPmA7XG4gICAgY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvcHlCdG4uY2xhc3NMaXN0LmFkZChcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldFwiKTtcbiAgICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRtcENvZGVCbG9jayA9IGNvZGVCbG9jay5jbG9uZU5vZGUodHJ1ZSkgYXMgWjtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdG1wQ29kZUJsb2NrLmNoaWxkcmVuO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZENvbXBvbmVudCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGRDb21wb25lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHRtcENvZGVCbG9jay5yZW1vdmVDaGlsZChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNsaWNrSGFuZGxlcih0bXBDb2RlQmxvY2sgYXMgWiwgZXZlbnQpO1xuICAgIH0pO1xuICAgIG1vZGlmeUJ0bihjb3B5QnRuKTtcbiAgICBjb2RlQmxvY2suYXBwZW5kQ2hpbGQoY29weUJ0bik7XG4gICAgcmV0dXJuIGNvcHlCdG47XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc3RhbGxFc01vZHVsZShtb2R1bGVVcmw6IHN0cmluZykge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm1vZHVsZVwiKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBtb2R1bGVVcmwpO1xuICBjb25zdCBoZWFkID1cbiAgICBkb2N1bWVudC5oZWFkIHx8XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdIHx8XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQubGFzdENoaWxkKTtcbn1cbiIsImltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwiQHR5cGVkL2NvbXBvc2VcIjtcbmltcG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgdXNlcnNjcmlwdGVyIH0gZnJvbSBcInVzZXJzY3JpcHRlclwiO1xuXG5pbXBvcnQgKiBhcyBDT05GSUcgZnJvbSBcIn5zcmMvY29uZmlnXCI7XG5pbXBvcnQgT1BFUkFUSU9OUyBmcm9tIFwifnNyYy9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBTSVRFIGZyb20gXCJ+c3JjL3NpdGVcIjtcbmltcG9ydCBTVFlMRVNIRUVUUyBmcm9tIFwifnNyYy9zdHlsZXNoZWV0c1wiO1xuaW1wb3J0IFUgZnJvbSBcIn5zcmMvdXNlcnNjcmlwdFwiO1xuXG5jb25zdCBkZXNjcmliZUZhaWx1cmUgPSBlcnJvcnMuZmFpbHVyZURlc2NyaWJlcih7XG4gICAgc2l0ZU5hbWU6IFNJVEUuTkFNRSxcbiAgICBleHRlbnNpb25OYW1lOiBVLm5hbWUsXG4gICAgbG9jYXRpb246IGRvY3VtZW50LmxvY2F0aW9uLFxufSk7XG5cbnVzZXJzY3JpcHRlci5ydW4oe1xuICAgIGlkOiBVLmlkLFxuICAgIG5hbWU6IFUubmFtZSxcbiAgICBpbml0aWFsQWN0aW9uOiAoKSA9PiBsb2cubG9nKGAke1UubmFtZX0gJHtVLnZlcnNpb259YCksXG4gICAgc3R5bGVzaGVldHM6IFNUWUxFU0hFRVRTLFxuICAgIG9wZXJhdGlvbnNQbGFuOiB7XG4gICAgICAgIG9wZXJhdGlvbnM6IE9QRVJBVElPTlMsXG4gICAgICAgIGludGVydmFsOiBDT05GSUcuT1BFUkFUSU9OU19JTlRFUlZBTCxcbiAgICAgICAgdHJ5VW50aWw6IGVudmlyb25tZW50LkRPTUNPTlRFTlRMT0FERUQsXG4gICAgICAgIGV4dHJhVHJpZXM6IENPTkZJRy5PUEVSQVRJT05TX0VYVFJBX1RSSUVTLFxuICAgICAgICBoYW5kbGVGYWlsdXJlczogZmFpbHVyZXMgPT4gZmFpbHVyZXMuZm9yRWFjaChjb21wb3NlKGxvZy5lcnJvciwgZGVzY3JpYmVGYWlsdXJlKSksXG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHBhcnNlR2l0VXJsIGZyb20gXCJnaXQtdXJsLXBhcnNlXCI7XG5pbXBvcnQgeyBBTFdBWVMgfSBmcm9tIFwidXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgZGVlcEVudHJpZXMsIGRlbGltaXRFbnRyeSB9IGZyb20gXCJkZWVwLWVudHJpZXNcIjtcbmltcG9ydCB7IE9wZXJhdGlvbiwgb3BlcmF0aW9uIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvb3BlcmF0aW9uc1wiO1xuaW1wb3J0IHsgYWRkVG9DbGlwYm9hcmQgfSBmcm9tIFwiLi9oZWxwZXJzL3V0aWxzXCI7XG5pbXBvcnQgeyBleHRyYWN0VGFibGVBc0pzb24gfSBmcm9tIFwiLi9oZWxwZXJzL2V4dHJhY3RUYWJsZUluZm9cIjtcbmltcG9ydCB7IGh0bWxUcmVlU2VsZWN0aW9uIH0gZnJvbSBcIi4vaGVscGVycy9odG1sVHJlZVNlbGVjdGlvblwiO1xuXG5jb25zdCBPUEVSQVRJT05TOiBSZWFkb25seUFycmF5PE9wZXJhdGlvbjxhbnk+PiA9IFtcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIHBhcnNlIGdpdGh1YiB1cmxcIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIHdpbmRvdy5wYXJzZUdpdFVybCA9IHBhcnNlR2l0VXJsO1xuICAgIH0sXG4gIH0pLFxuICBvcGVyYXRpb24oe1xuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgaGVscGVyIGZ1bmNzIGZvciBzdXJmaW5na2V5c1wiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgd2luZG93Lmh0bWxUcmVlU2VsZWN0aW9uID0gaHRtbFRyZWVTZWxlY3Rpb247XG4gICAgfSxcbiAgfSksXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIGRldiBjb25zb2xlXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBjb25zdCBmaW5kS2V5RGVlcCA9IChvYmo6IG9iamVjdCwgc3RyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgZmxhdE9iaiA9IGRlZXBFbnRyaWVzKG9iaiwgZGVsaW1pdEVudHJ5KTtcbiAgICAgICAgcmV0dXJuIGZsYXRPYmouZmlsdGVyKChbaywgX3ZhbHVlXTogW3N0cmluZywgdW5rbm93bl0pID0+XG4gICAgICAgICAgay5pbmNsdWRlcyhzdHIpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgd2luZG93LmZpbmRLZXlEZWVwID0gZmluZEtleURlZXA7XG4gICAgfSxcbiAgfSksXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiQ29weSB0YWJsZSBhcyBqc29uIHZpYSByaWdodCBjbGlja1wiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgbGV0IG1lbnVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gY2xpY2tMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBjb25zdCBtYXliZVRhYmxlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIW1lbnVBY3RpdmUgJiYgbWF5YmVUYWJsZSBpbnN0YW5jZW9mIEhUTUxUYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICBHTV9yZWdpc3Rlck1lbnVDb21tYW5kKFwiQ29weSB0aGlzIHRhYmxlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSnNvbiA9IGV4dHJhY3RUYWJsZUFzSnNvbihtYXliZVRhYmxlKTtcbiAgICAgICAgICAgIGFkZFRvQ2xpcGJvYXJkKEpTT04uc3RyaW5naWZ5KHRhYmxlSnNvbiwgbnVsbCwgNCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1lbnVBY3RpdmUgJiYgIShtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkpIHtcbiAgICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0pLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgT1BFUkFUSU9OUztcbiIsIi8vIFRoaXMgZmlsZSBjYW5ub3QgY29udGFpbiBXZWJwYWNrLXJlc29sdmVkIGltcG9ydHMgKGUuZy4gXCJ+c3JjL2Zvb1wiKS5cblxuaW1wb3J0IFUgZnJvbSBcIi4vdXNlcnNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgTkFNRSA9IFUuc2l0ZW5hbWU7XG5leHBvcnQgY29uc3QgSE9TVE5BTUUgPSBVLmhvc3RuYW1lO1xuZXhwb3J0IGNvbnN0IFNFTEVDVE9SX0NPREUgPSBcImNvZGVcIjtcbiIsImltcG9ydCB7IEFMV0FZUyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBTdHlsZXNoZWV0cywgc3R5bGVzaGVldCB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL3N0eWxlc2hlZXRzXCI7XG5cbmNvbnN0IFNUWUxFU0hFRVRTID0ge1xuICBnZW5lcmFsOiBzdHlsZXNoZWV0KHtcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBjc3M6IGBcbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXItb3V0ZXItd3JhcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC10YXJnZXQ6aG92ZXIgPiAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0OmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgYCxcbiAgfSksXG4gIGh0bWxUcmVlU2VsZWN0aW9uT3ZlcmxheTogc3R5bGVzaGVldCh7XG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgY3NzOiBgXG46cm9vdCB7XG4gIC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybDogXCJcIlxufVxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGEsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgaW5wdXQsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3Igc2VsZWN0LFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGJ1dHRvbixcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBkaXZbcm9sZT1idXR0b25dIHtcbiAgY3Vyc29yOiB2YXIoLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsKSwgY3Jvc3NoYWlyICFpbXBvcnRhbnQ7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uIHtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuMik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjVweCByZ2JhKDI1NSwwLDAsLjUpO1xufVxuXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xuICBiYWNrZ3JvdW5kOlxuICAgIG5vLXJlcGVhdCBjZW50ZXIvNzAlIHZhcigtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmwpLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSksXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXG4gICAgKTtcbn1cbmAsXG4gIH0pLFxufSBhcyBjb25zdDtcbi8vIDxzcGFuIGNsYXNzPVwidzMtYmFkZ2VcIj45PC9zcGFuPlxuXG4vLyBUaGlzIHRyaWNrIHVuY292ZXJzIHR5cGUgZXJyb3JzIGluIFNUWUxFU0hFRVRTIHdoaWxlIHJldGFpbmluZyB0aGUgc3RhdGljIGtub3dsZWRnZSBvZiBpdHMgcHJvcGVydGllcyAoc28gd2UgY2FuIHN0aWxsIHdyaXRlIGUuZy4gU1RZTEVTSEVFVFMuZm9vKTpcbmNvbnN0IF86IFN0eWxlc2hlZXRzID0gU1RZTEVTSEVFVFM7XG52b2lkIF87XG5cbmV4cG9ydCBkZWZhdWx0IFNUWUxFU0hFRVRTO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkOiBcImphY2tzLWRldi1oZWxwZXJzXCIsXG4gICAgbmFtZTogXCJKYWNrJ3MgRGV2IEhlbHBlcnNcIixcbiAgICB2ZXJzaW9uOiBcIjAuMS4wXCIsXG4gICAgYXV0aG9yOiBcIkphY2sgTWNDb3duXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSG9kZ2Vwb2RnZSBvZiBkZXYgdXRpbHNcIixcbiAgICBob3N0bmFtZTogXCIqXCIsXG4gICAgbmFtZXNwYWNlOiBcImphY2ttc2NyaXB0c1wiLFxuICAgIHNpdGVuYW1lOiBcImdvb2dsZS5jb21cIixcbiAgICBydW5BdDogXCJkb2N1bWVudC1lbmRcIixcbn0gYXMgY29uc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9