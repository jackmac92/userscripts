// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2022.3.20.18.37
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
        // TODO I should change this, helper lib shouldn't limit consumer to document end
        // No need to wait for a 'DOMContentLoaded' event since the manifest
        // specifies:
        //
        //   "run_at": "document_end"
        //
        // TODO select via keyboard?
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
        description: "Hacky automate page interaction",
        condition: userscripter_lib_environment__WEBPACK_IMPORTED_MODULE_1__["ALWAYS"],
        action: () => {
            const urlParams = new URLSearchParams(window.location.search);
            const autoEvalStr = urlParams.get("hackyDangerScript");
            if (autoEvalStr === null)
                return;
            const autoEvalCmd = atob(autoEvalStr);
            eval(autoEvalCmd);
        },
    }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtZW50cmllcy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsdGVyLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVybC1wYXJzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXNzaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmVzLXVubGluZXMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLXBhdGgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZS11cmwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9leHRyYWN0VGFibGVJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2h0bWxUcmVlU2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUMxQixpQzs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYix1QkFBdUIsRUFBRTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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U0FBUyxFQUFFLGNBQWM7SUFDekIsUUFBUSxFQUFFLFlBQVk7SUFDdEIsS0FBSyxFQUFFLGNBQWM7Q0FDZixFQUFDIiwiZmlsZSI6ImphY2tzLWRldi1oZWxwZXJzLnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIF9jb21wb3NlMShhcmd1bWVudHNbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBfY29tcG9zZTIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBfY29tcG9zZTMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIF9jb21wb3NlNChhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICBjYXNlIDU6IHJldHVybiBfY29tcG9zZTUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgIH1cbiAgICA7XG59XG5mdW5jdGlvbiBfY29tcG9zZTEoZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlMUZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGYoYSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMihnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UyRm4oYSkge1xuICAgICAgICByZXR1cm4gZyhmKGEpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UzKGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTNGbihhKSB7XG4gICAgICAgIHJldHVybiBoKGcoZihhKSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTQoaSwgaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGkoaChnKGYoYSkpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNShqLCBpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2U1Rm4oYSkge1xuICAgICAgICByZXR1cm4gaihpKGgoZyhmKGEpKSkpKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zZS5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvc2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRva2VuID0gJyVbYS1mMC05XXsyfSc7XG52YXIgc2luZ2xlTWF0Y2hlciA9IG5ldyBSZWdFeHAodG9rZW4sICdnaScpO1xudmFyIG11bHRpTWF0Y2hlciA9IG5ldyBSZWdFeHAoJygnICsgdG9rZW4gKyAnKSsnLCAnZ2knKTtcblxuZnVuY3Rpb24gZGVjb2RlQ29tcG9uZW50cyhjb21wb25lbnRzLCBzcGxpdCkge1xuXHR0cnkge1xuXHRcdC8vIFRyeSB0byBkZWNvZGUgdGhlIGVudGlyZSBzdHJpbmcgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGNvbXBvbmVudHMuam9pbignJykpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBEbyBub3RoaW5nXG5cdH1cblxuXHRpZiAoY29tcG9uZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gY29tcG9uZW50cztcblx0fVxuXG5cdHNwbGl0ID0gc3BsaXQgfHwgMTtcblxuXHQvLyBTcGxpdCB0aGUgYXJyYXkgaW4gMiBwYXJ0c1xuXHR2YXIgbGVmdCA9IGNvbXBvbmVudHMuc2xpY2UoMCwgc3BsaXQpO1xuXHR2YXIgcmlnaHQgPSBjb21wb25lbnRzLnNsaWNlKHNwbGl0KTtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5jYWxsKFtdLCBkZWNvZGVDb21wb25lbnRzKGxlZnQpLCBkZWNvZGVDb21wb25lbnRzKHJpZ2h0KSk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR2YXIgdG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW5wdXQgPSBkZWNvZGVDb21wb25lbnRzKHRva2VucywgaSkuam9pbignJyk7XG5cblx0XHRcdHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxufVxuXG5mdW5jdGlvbiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoaW5wdXQpIHtcblx0Ly8gS2VlcCB0cmFjayBvZiBhbGwgdGhlIHJlcGxhY2VtZW50cyBhbmQgcHJlZmlsbCB0aGUgbWFwIHdpdGggdGhlIGBCT01gXG5cdHZhciByZXBsYWNlTWFwID0ge1xuXHRcdCclRkUlRkYnOiAnXFx1RkZGRFxcdUZGRkQnLFxuXHRcdCclRkYlRkUnOiAnXFx1RkZGRFxcdUZGRkQnXG5cdH07XG5cblx0dmFyIG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR3aGlsZSAobWF0Y2gpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gRGVjb2RlIGFzIGJpZyBjaHVua3MgYXMgcG9zc2libGVcblx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzBdKTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHZhciByZXN1bHQgPSBkZWNvZGUobWF0Y2hbMF0pO1xuXG5cdFx0XHRpZiAocmVzdWx0ICE9PSBtYXRjaFswXSkge1xuXHRcdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IHJlc3VsdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0fVxuXG5cdC8vIEFkZCBgJUMyYCBhdCB0aGUgZW5kIG9mIHRoZSBtYXAgdG8gbWFrZSBzdXJlIGl0IGRvZXMgbm90IHJlcGxhY2UgdGhlIGNvbWJpbmF0b3IgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZVxuXHRyZXBsYWNlTWFwWyclQzInXSA9ICdcXHVGRkZEJztcblxuXHR2YXIgZW50cmllcyA9IE9iamVjdC5rZXlzKHJlcGxhY2VNYXApO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFJlcGxhY2UgYWxsIGRlY29kZWQgY29tcG9uZW50c1xuXHRcdHZhciBrZXkgPSBlbnRyaWVzW2ldO1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgcmVwbGFjZU1hcFtrZXldKTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW5jb2RlZFVSSSkge1xuXHRpZiAodHlwZW9mIGVuY29kZWRVUkkgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYGVuY29kZWRVUklgIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AsIGdvdCBgJyArIHR5cGVvZiBlbmNvZGVkVVJJICsgJ2AnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0ZW5jb2RlZFVSSSA9IGVuY29kZWRVUkkucmVwbGFjZSgvXFwrL2csICcgJyk7XG5cblx0XHQvLyBUcnkgdGhlIGJ1aWx0IGluIGRlY29kZXIgZmlyc3Rcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBGYWxsYmFjayB0byBhIG1vcmUgYWR2YW5jZWQgZGVjb2RlclxuXHRcdHJldHVybiBjdXN0b21EZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH1cbn07XG4iLCJjb25zdCBpZGVudGl0eSA9IHggPT4geDtcblxuY29uc3QgZ2V0SW50ZXJmYWNlID0geCA9PiB7XG5cdGNvbnN0IHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KTtcblx0cmV0dXJuIHN0ci5zdWJzdHJpbmcoOCwgc3RyLmxlbmd0aCAtIDEpXG59O1xuXG5jb25zdCBpc09iamVjdExpa2UgPSB4ID0+IHtcblx0Y29uc3QgdGFnID0gZ2V0SW50ZXJmYWNlKHgpO1xuXHRzd2l0Y2ggKHRhZykge1xuXHRcdGNhc2UgJ1N0cmluZyc6XG5cdFx0Y2FzZSAnTnVtYmVyJzpcblx0XHRjYXNlICdCb29sZWFuJzpcblx0XHRjYXNlICdSZWdFeHAnOlxuXHRcdGNhc2UgJ0RhdGUnOlxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0aWYgKHggPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YWcuc3RhcnRzV2l0aCgnSFRNTCcpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnXG5cdH1cbn07XG5cbmZ1bmN0aW9uKiBlbnRyaWVzSXRlcmF0b3IoaW5wdXQpIHtcblx0c3dpdGNoIChnZXRJbnRlcmZhY2UoaW5wdXQpKSB7XG5cdFx0Y2FzZSAnQXJyYXknOlxuXHRcdGNhc2UgJ01hcCc6XG5cdFx0Y2FzZSAnVVJMU2VhcmNoUGFyYW1zJzpcblx0XHRcdHlpZWxkKiBpbnB1dC5lbnRyaWVzKCk7XG5cdFx0XHRicmVha1xuXG5cdFx0Y2FzZSAnU2V0Jzpcblx0XHRjYXNlICdOb2RlTGlzdCc6XG5cdFx0Y2FzZSAnSW50OEFycmF5Jzpcblx0XHRjYXNlICdVaW50OEFycmF5Jzpcblx0XHRjYXNlICdVaW50OENsYW1wZWRBcnJheSc6XG5cdFx0Y2FzZSAnSW50MTZBcnJheSc6XG5cdFx0Y2FzZSAnVWludDE2QXJyYXknOlxuXHRcdGNhc2UgJ0ludDMyQXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQzMkFycmF5Jzpcblx0XHRjYXNlICdGbG9hdDMyQXJyYXknOlxuXHRcdGNhc2UgJ0Zsb2F0NjRBcnJheSc6XG5cdFx0Y2FzZSAnQmlnSW50NjRBcnJheSc6XG5cdFx0Y2FzZSAnQmlnVWludDY0QXJyYXknOlxuXHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0Zm9yIChsZXQgdmFsdWUgb2YgaW5wdXQpIHlpZWxkIFtpKyssIHZhbHVlXTtcblx0XHRcdGJyZWFrXG5cblx0XHRjYXNlICdPYmplY3QnOlxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZiAoaXNPYmplY3RMaWtlKGlucHV0KSlcblx0XHRcdFx0Zm9yIChsZXQga2V5IGluIGlucHV0KVxuXHRcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5wdXQsIGtleSkpXG5cdFx0XHRcdFx0XHR5aWVsZCBba2V5LCBpbnB1dFtrZXldXTtcblx0XHRcdGJyZWFrXG5cdH1cbn1cblxuZnVuY3Rpb24qIGRlZXBFbnRyaWVzSXRlcmF0b3JfKGlucHV0LCBtYXBGbiwgcGFyZW50Q2lyY3VsYXJTZXQpIHtcblx0Y29uc3QgbWFwID0gdHlwZW9mIG1hcEZuID09PSAnZnVuY3Rpb24nID8gbWFwRm4gOiBpZGVudGl0eTtcblx0Zm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGVudHJpZXNJdGVyYXRvcihpbnB1dCkpIHtcblx0XHRpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gbWFwKFtrZXksIHZhbHVlXSk7XG5cdFx0XHRpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkgeWllbGQgZW50cnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNpcmN1bGFyU2V0ID0gcGFyZW50Q2lyY3VsYXJTZXQgfHwgbmV3IFdlYWtTZXQoKTtcblx0XHRcdGNpcmN1bGFyU2V0LmFkZChpbnB1dCk7XG5cblx0XHRcdGlmICghY2lyY3VsYXJTZXQuaGFzKHZhbHVlKSkge1xuXHRcdFx0XHRmb3IgKGxldCBlbnRyaWVzIG9mIGRlZXBFbnRyaWVzSXRlcmF0b3JfKFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdFx0XHRjaXJjdWxhclNldFxuXHRcdFx0XHQpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW50cnkgPSBtYXAoW2tleSwgLi4uZW50cmllc10pO1xuXHRcdFx0XHRcdGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB5aWVsZCBlbnRyeTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiogZGVlcEVudHJpZXNJdGVyYXRvcihpbnB1dCwgbWFwRm4pIHtcblx0eWllbGQqIGRlZXBFbnRyaWVzSXRlcmF0b3JfKGlucHV0LCBtYXBGbik7XG59XG5cbmNvbnN0IGRlZXBFbnRyaWVzID0gKGlucHV0LCBtYXBGbikgPT5cblx0QXJyYXkuZnJvbShkZWVwRW50cmllc0l0ZXJhdG9yKGlucHV0LCBtYXBGbikpO1xuXG5jb25zdCByb3RhdGVFbnRyeUJ5ID0gbiA9PiBlbnRyeSA9PiB7XG5cdGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cblx0Y29uc3QgbW9kID0gKC0xICogKE51bWJlcihuKSB8fCAwKSkgJSBlbnRyeS5sZW5ndGg7XG5cdGNvbnN0IGtleXMgPSBlbnRyeS5zbGljZSgwLCBtb2QpO1xuXHRjb25zdCB2YWx1ZSA9IGVudHJ5LnNsaWNlKG1vZCk7XG5cdHJldHVybiBbLi4udmFsdWUsIC4uLmtleXNdXG59O1xuXG5jb25zdCByb3RhdGVFbnRyeSA9IHJvdGF0ZUVudHJ5QnkoMSk7XG5cbmNvbnN0IGRlbGltaXRFbnRyeUJ5ID0gZGVsaW1pdGVyID0+IGVudHJ5ID0+IHtcblx0aWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHJldHVyblxuXHRjb25zdCBbdmFsdWUsIC4uLmtleXNdID0gcm90YXRlRW50cnkoZW50cnkpO1xuXHRyZXR1cm4gW2tleXMuam9pbihkZWxpbWl0ZXIpLCB2YWx1ZV1cbn07XG5cbmNvbnN0IGRlbGltaXRFbnRyeSA9IGRlbGltaXRFbnRyeUJ5KCcuJyk7XG5cbmV4cG9ydCB7IGRlZXBFbnRyaWVzLCBkZWVwRW50cmllc0l0ZXJhdG9yLCBkZWxpbWl0RW50cnksIGRlbGltaXRFbnRyeUJ5LCByb3RhdGVFbnRyeSwgcm90YXRlRW50cnlCeSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUpIHtcblx0dmFyIHJldCA9IHt9O1xuXHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdHZhciBpc0FyciA9IEFycmF5LmlzQXJyYXkocHJlZGljYXRlKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIga2V5ID0ga2V5c1tpXTtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAoaXNBcnIgPyBwcmVkaWNhdGUuaW5kZXhPZihrZXkpICE9PSAtMSA6IHByZWRpY2F0ZShrZXksIHZhbCwgb2JqKSkge1xuXHRcdFx0cmV0W2tleV0gPSB2YWw7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzXG5cbnZhciBwYXJzZVVybCA9IHJlcXVpcmUoXCJwYXJzZS11cmxcIiksXG4gICAgaXNTc2ggPSByZXF1aXJlKFwiaXMtc3NoXCIpO1xuXG4vKipcbiAqIGdpdFVwXG4gKiBQYXJzZXMgdGhlIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBnaXRVcFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHVybC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gKlxuICogIC0gYHByb3RvY29sc2AgKEFycmF5KTogQW4gYXJyYXkgd2l0aCB0aGUgdXJsIHByb3RvY29scyAodXN1YWxseSBpdCBoYXMgb25lIGVsZW1lbnQpLlxuICogIC0gYHBvcnRgIChudWxsfE51bWJlcik6IFRoZSBkb21haW4gcG9ydC5cbiAqICAtIGByZXNvdXJjZWAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluIChpbmNsdWRpbmcgc3ViZG9tYWlucykuXG4gKiAgLSBgdXNlcmAgKFN0cmluZyk6IFRoZSBhdXRoZW50aWNhdGlvbiB1c2VyICh1c3VhbGx5IGZvciBzc2ggdXJscykuXG4gKiAgLSBgcGF0aG5hbWVgIChTdHJpbmcpOiBUaGUgdXJsIHBhdGhuYW1lLlxuICogIC0gYGhhc2hgIChTdHJpbmcpOiBUaGUgdXJsIGhhc2guXG4gKiAgLSBgc2VhcmNoYCAoU3RyaW5nKTogVGhlIHVybCBxdWVyeXN0cmluZyB2YWx1ZS5cbiAqICAtIGBocmVmYCAoU3RyaW5nKTogVGhlIGlucHV0IHVybC5cbiAqICAtIGBwcm90b2NvbGAgKFN0cmluZyk6IFRoZSBnaXQgdXJsIHByb3RvY29sLlxuICogIC0gYHRva2VuYCAoU3RyaW5nKTogVGhlIG9hdXRoIHRva2VuIChjb3VsZCBhcHBlYXIgaW4gdGhlIGh0dHBzIHVybHMpLlxuICovXG5mdW5jdGlvbiBnaXRVcChpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBwYXJzZVVybChpbnB1dCk7XG4gICAgb3V0cHV0LnRva2VuID0gXCJcIjtcblxuICAgIHZhciBzcGxpdHMgPSBvdXRwdXQudXNlci5zcGxpdChcIjpcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHNwbGl0c1sxXSA9PT0gXCJ4LW9hdXRoLWJhc2ljXCIpIHtcbiAgICAgICAgICAgIG91dHB1dC50b2tlbiA9IHNwbGl0c1swXTtcbiAgICAgICAgfSBlbHNlIGlmIChzcGxpdHNbMF0gPT09IFwieC10b2tlbi1hdXRoXCIpIHtcbiAgICAgICAgICAgIG91dHB1dC50b2tlbiA9IHNwbGl0c1sxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1NzaChvdXRwdXQucHJvdG9jb2xzKSB8fCBpc1NzaChpbnB1dCkpIHtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJzc2hcIjtcbiAgICB9IGVsc2UgaWYgKG91dHB1dC5wcm90b2NvbHMubGVuZ3RoKSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IG91dHB1dC5wcm90b2NvbHNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgfVxuXG4gICAgb3V0cHV0LmhyZWYgPSBvdXRwdXQuaHJlZi5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnaXRVcDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGdpdFVwID0gcmVxdWlyZShcImdpdC11cFwiKTtcblxuLyoqXG4gKiBnaXRVcmxQYXJzZVxuICogUGFyc2VzIGEgR2l0IHVybC5cbiAqXG4gKiBAbmFtZSBnaXRVcmxQYXJzZVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBHaXQgdXJsIHRvIHBhcnNlLlxuICogQHJldHVybiB7R2l0VXJsfSBUaGUgYEdpdFVybGAgb2JqZWN0IGNvbnRhaW5pbmc6XG4gKlxuICogIC0gYHByb3RvY29sc2AgKEFycmF5KTogQW4gYXJyYXkgd2l0aCB0aGUgdXJsIHByb3RvY29scyAodXN1YWxseSBpdCBoYXMgb25lIGVsZW1lbnQpLlxuICogIC0gYHBvcnRgIChudWxsfE51bWJlcik6IFRoZSBkb21haW4gcG9ydC5cbiAqICAtIGByZXNvdXJjZWAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluIChpbmNsdWRpbmcgc3ViZG9tYWlucykuXG4gKiAgLSBgdXNlcmAgKFN0cmluZyk6IFRoZSBhdXRoZW50aWNhdGlvbiB1c2VyICh1c3VhbGx5IGZvciBzc2ggdXJscykuXG4gKiAgLSBgcGF0aG5hbWVgIChTdHJpbmcpOiBUaGUgdXJsIHBhdGhuYW1lLlxuICogIC0gYGhhc2hgIChTdHJpbmcpOiBUaGUgdXJsIGhhc2guXG4gKiAgLSBgc2VhcmNoYCAoU3RyaW5nKTogVGhlIHVybCBxdWVyeXN0cmluZyB2YWx1ZS5cbiAqICAtIGBocmVmYCAoU3RyaW5nKTogVGhlIGlucHV0IHVybC5cbiAqICAtIGBwcm90b2NvbGAgKFN0cmluZyk6IFRoZSBnaXQgdXJsIHByb3RvY29sLlxuICogIC0gYHRva2VuYCAoU3RyaW5nKTogVGhlIG9hdXRoIHRva2VuIChjb3VsZCBhcHBlYXIgaW4gdGhlIGh0dHBzIHVybHMpLlxuICogIC0gYHNvdXJjZWAgKFN0cmluZyk6IFRoZSBHaXQgcHJvdmlkZXIgKGUuZy4gYFwiZ2l0aHViLmNvbVwiYCkuXG4gKiAgLSBgb3duZXJgIChTdHJpbmcpOiBUaGUgcmVwb3NpdG9yeSBvd25lci5cbiAqICAtIGBuYW1lYCAoU3RyaW5nKTogVGhlIHJlcG9zaXRvcnkgbmFtZS5cbiAqICAtIGByZWZgIChTdHJpbmcpOiBUaGUgcmVwb3NpdG9yeSByZWYgKGUuZy4sIFwibWFzdGVyXCIgb3IgXCJkZXZcIikuXG4gKiAgLSBgZmlsZXBhdGhgIChTdHJpbmcpOiBBIGZpbGVwYXRoIHJlbGF0aXZlIHRvIHRoZSByZXBvc2l0b3J5IHJvb3QuXG4gKiAgLSBgZmlsZXBhdGh0eXBlYCAoU3RyaW5nKTogVGhlIHR5cGUgb2YgZmlsZXBhdGggaW4gdGhlIHVybCAoXCJibG9iXCIgb3IgXCJ0cmVlXCIpLlxuICogIC0gYGZ1bGxfbmFtZWAgKFN0cmluZyk6IFRoZSBvd25lciBhbmQgbmFtZSB2YWx1ZXMgaW4gdGhlIGBvd25lci9uYW1lYCBmb3JtYXQuXG4gKiAgLSBgdG9TdHJpbmdgIChGdW5jdGlvbik6IEEgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IHRoZSBwYXJzZWQgdXJsIGludG8gYW5vdGhlciB1cmwgdHlwZS5cbiAqICAtIGBvcmdhbml6YXRpb25gIChTdHJpbmcpOiBUaGUgb3JnYW5pemF0aW9uIHRoZSBvd25lciBiZWxvbmdzIHRvLiBUaGlzIGlzIENsb3VkRm9yZ2Ugc3BlY2lmaWMuXG4gKiAgLSBgZ2l0X3N1ZmZpeGAgKEJvb2xlYW4pOiBXaGV0aGVyIHRvIGFkZCB0aGUgYC5naXRgIHN1ZmZpeCBvciBub3QuXG4gKlxuICovXG5mdW5jdGlvbiBnaXRVcmxQYXJzZSh1cmwpIHtcblxuICAgIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSB1cmwgbXVzdCBiZSBhIHN0cmluZy5cIik7XG4gICAgfVxuXG4gICAgdmFyIHVybEluZm8gPSBnaXRVcCh1cmwpLFxuICAgICAgICBzb3VyY2VQYXJ0cyA9IHVybEluZm8ucmVzb3VyY2Uuc3BsaXQoXCIuXCIpLFxuICAgICAgICBzcGxpdHMgPSBudWxsO1xuXG4gICAgdXJsSW5mby50b1N0cmluZyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiBnaXRVcmxQYXJzZS5zdHJpbmdpZnkodGhpcywgdHlwZSk7XG4gICAgfTtcblxuICAgIHVybEluZm8uc291cmNlID0gc291cmNlUGFydHMubGVuZ3RoID4gMiA/IHNvdXJjZVBhcnRzLnNsaWNlKDEgLSBzb3VyY2VQYXJ0cy5sZW5ndGgpLmpvaW4oXCIuXCIpIDogdXJsSW5mby5zb3VyY2UgPSB1cmxJbmZvLnJlc291cmNlO1xuXG4gICAgLy8gTm90ZTogU29tZSBob3N0aW5nIHNlcnZpY2VzIChlLmcuIFZpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcykgYWxsb3cgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzXG4gICAgLy8gaW4gdGhlIHJlcG9zaXRvcnkgYW5kIG93bmVyIG5hbWVzIHNvIHdlIGRlY29kZSB0aGUgVVJMIHBpZWNlcyB0byBnZXQgdGhlIGNvcnJlY3QgcmVzdWx0XG4gICAgdXJsSW5mby5naXRfc3VmZml4ID0gL1xcLmdpdCQvLnRlc3QodXJsSW5mby5wYXRobmFtZSk7XG4gICAgdXJsSW5mby5uYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybEluZm8ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5yZXBsYWNlKC9cXC5naXQkLywgXCJcIikpO1xuICAgIHVybEluZm8ub3duZXIgPSBkZWNvZGVVUklDb21wb25lbnQodXJsSW5mby51c2VyKTtcblxuICAgIHN3aXRjaCAodXJsSW5mby5zb3VyY2UpIHtcbiAgICAgICAgY2FzZSBcImdpdC5jbG91ZGZvcmdlLmNvbVwiOlxuICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHVybEluZm8udXNlcjtcbiAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc291cmNlUGFydHNbMF07XG4gICAgICAgICAgICB1cmxJbmZvLnNvdXJjZSA9IFwiY2xvdWRmb3JnZS5jb21cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidmlzdWFsc3R1ZGlvLmNvbVwiOlxuICAgICAgICAgICAgLy8gSGFuZGxlIFZTVFMgU1NIIFVSTHNcbiAgICAgICAgICAgIGlmICh1cmxJbmZvLnJlc291cmNlID09PSAndnMtc3NoLnZpc3VhbHN0dWRpby5jb20nKSB7XG4gICAgICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHNwbGl0c1syXSArICcvJyArIHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9ICdfZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0c1swXSA9PT0gJ0RlZmF1bHRDb2xsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm9yZ2FuaXphdGlvbiArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vcmdhbml6YXRpb24gKyAnLycgKyB1cmxJbmZvLm93bmVyICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIEF6dXJlIERldk9wcyAoZm9ybWVybHkgVmlzdWFsIFN0dWRpbyBUZWFtIFNlcnZpY2VzKVxuICAgICAgICBjYXNlIFwiZGV2LmF6dXJlLmNvbVwiOlxuICAgICAgICBjYXNlIFwiYXp1cmUuY29tXCI6XG4gICAgICAgICAgICBpZiAodXJsSW5mby5yZXNvdXJjZSA9PT0gJ3NzaC5kZXYuYXp1cmUuY29tJykge1xuICAgICAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1s0XTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSAnX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdHNbMF0gPT09ICdEZWZhdWx0Q29sbGVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vcmdhbml6YXRpb24gKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy8nICsgdXJsSW5mby5vd25lciArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXJsSW5mby5xdWVyeSAmJiB1cmxJbmZvLnF1ZXJ5WydwYXRoJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aCA9IHVybEluZm8ucXVlcnlbJ3BhdGgnXS5yZXBsYWNlKC9eXFwvKy9nLCAnJyk7IC8vIFN0cmlwIGxlYWRpbmcgc2xhc2ggKC8pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cmxJbmZvLnF1ZXJ5ICYmIHVybEluZm8ucXVlcnlbJ3ZlcnNpb24nXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJzaW9uPUdCPGJyYW5jaD5cbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5yZWYgPSB1cmxJbmZvLnF1ZXJ5Wyd2ZXJzaW9uJ10ucmVwbGFjZSgvXkdCLywgJycpOyAvLyByZW1vdmUgR0JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgdmFyIG5hbWVJbmRleCA9IHNwbGl0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHZhciBkYXNoSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcIi1cIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2JJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwiYmxvYlwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJlZUluZGV4ID0gc3BsaXRzLmluZGV4T2YoXCJ0cmVlXCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciBjb21taXRJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwiY29tbWl0XCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciBzcmNJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwic3JjXCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciByYXdJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwicmF3XCIsIDIpO1xuICAgICAgICAgICAgICAgIG5hbWVJbmRleCA9IGRhc2hJbmRleCA+IDAgPyBkYXNoSW5kZXggLSAxIDogYmxvYkluZGV4ID4gMCA/IGJsb2JJbmRleCAtIDEgOiB0cmVlSW5kZXggPiAwID8gdHJlZUluZGV4IC0gMSA6IGNvbW1pdEluZGV4ID4gMCA/IGNvbW1pdEluZGV4IC0gMSA6IHNyY0luZGV4ID4gMCA/IHNyY0luZGV4IC0gMSA6IHJhd0luZGV4ID4gMCA/IHJhd0luZGV4IC0gMSA6IG5hbWVJbmRleDtcblxuICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHMuc2xpY2UoMCwgbmFtZUluZGV4KS5qb2luKCcvJyk7XG4gICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzW25hbWVJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1pdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uY29tbWl0ID0gc3BsaXRzW25hbWVJbmRleCArIDJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsSW5mby5yZWYgPSBcIlwiO1xuICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aHR5cGUgPSBcIlwiO1xuICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0TmFtZUluZGV4ID0gc3BsaXRzLmxlbmd0aCA+IG5hbWVJbmRleCAmJiBzcGxpdHNbbmFtZUluZGV4ICsgMV0gPT09IFwiLVwiID8gbmFtZUluZGV4ICsgMSA6IG5hbWVJbmRleDtcbiAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID4gb2Zmc2V0TmFtZUluZGV4ICsgMiAmJiBbXCJyYXdcIiwgXCJzcmNcIiwgXCJibG9iXCIsIFwidHJlZVwiXS5pbmRleE9mKHNwbGl0c1tvZmZzZXROYW1lSW5kZXggKyAxXSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGh0eXBlID0gc3BsaXRzW29mZnNldE5hbWVJbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHVybEluZm8ucmVmID0gc3BsaXRzW29mZnNldE5hbWVJbmRleCArIDJdO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID4gb2Zmc2V0TmFtZUluZGV4ICsgMykge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRoID0gc3BsaXRzLnNsaWNlKG9mZnNldE5hbWVJbmRleCArIDMpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHVybEluZm8ub3duZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIXVybEluZm8uZnVsbF9uYW1lKSB7XG4gICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lcjtcbiAgICAgICAgaWYgKHVybEluZm8ubmFtZSkge1xuICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgJiYgKHVybEluZm8uZnVsbF9uYW1lICs9IFwiL1wiKTtcbiAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lICs9IHVybEluZm8ubmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBCaXRidWNrZXQgU2VydmVyXG4gICAgaWYgKHVybEluZm8ub3duZXIuc3RhcnRzV2l0aChcInNjbS9cIikpIHtcbiAgICAgICAgdXJsSW5mby5zb3VyY2UgPSBcImJpdGJ1Y2tldC1zZXJ2ZXJcIjtcbiAgICAgICAgdXJsSW5mby5vd25lciA9IHVybEluZm8ub3duZXIucmVwbGFjZShcInNjbS9cIiwgXCJcIik7XG4gICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gdXJsSW5mby5vd25lcjtcbiAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyICsgXCIvXCIgKyB1cmxJbmZvLm5hbWU7XG4gICAgfVxuXG4gICAgdmFyIGJpdGJ1Y2tldCA9IC8ocHJvamVjdHN8dXNlcnMpXFwvKC4qPylcXC9yZXBvc1xcLyguKj8pKChcXC8uKiQpfCQpLztcbiAgICB2YXIgbWF0Y2hlcyA9IGJpdGJ1Y2tldC5leGVjKHVybEluZm8ucGF0aG5hbWUpO1xuICAgIGlmIChtYXRjaGVzICE9IG51bGwpIHtcbiAgICAgICAgdXJsSW5mby5zb3VyY2UgPSBcImJpdGJ1Y2tldC1zZXJ2ZXJcIjtcbiAgICAgICAgaWYgKG1hdGNoZXNbMV0gPT09IFwidXNlcnNcIikge1xuICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IFwiflwiICsgbWF0Y2hlc1syXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBtYXRjaGVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSB1cmxJbmZvLm93bmVyO1xuICAgICAgICB1cmxJbmZvLm5hbWUgPSBtYXRjaGVzWzNdO1xuXG4gICAgICAgIHNwbGl0cyA9IG1hdGNoZXNbNF0uc3BsaXQoXCIvXCIpO1xuICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlmIChbXCJyYXdcIiwgXCJicm93c2VcIl0uaW5kZXhPZihzcGxpdHNbMV0pID49IDApIHtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRodHlwZSA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aCA9IHNwbGl0cy5zbGljZSgyKS5qb2luKCcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdHNbMV0gPT09IFwiY29tbWl0c1wiICYmIHNwbGl0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgdXJsSW5mby5jb21taXQgPSBzcGxpdHNbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyICsgXCIvXCIgKyB1cmxJbmZvLm5hbWU7XG5cbiAgICAgICAgaWYgKHVybEluZm8ucXVlcnkuYXQpIHtcbiAgICAgICAgICAgIHVybEluZm8ucmVmID0gdXJsSW5mby5xdWVyeS5hdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybEluZm8ucmVmID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsSW5mbztcbn1cblxuLyoqXG4gKiBzdHJpbmdpZnlcbiAqIFN0cmluZ2lmaWVzIGEgYEdpdFVybGAgb2JqZWN0LlxuICpcbiAqIEBuYW1lIHN0cmluZ2lmeVxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0dpdFVybH0gb2JqIFRoZSBwYXJzZWQgR2l0IHVybCBvYmplY3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiB0aGUgc3RyaW5naWZpZWQgdXJsIChkZWZhdWx0IGBvYmoucHJvdG9jb2xgKS5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHVybC5cbiAqL1xuZ2l0VXJsUGFyc2Uuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlIHx8IChvYmoucHJvdG9jb2xzICYmIG9iai5wcm90b2NvbHMubGVuZ3RoID8gb2JqLnByb3RvY29scy5qb2luKCcrJykgOiBvYmoucHJvdG9jb2wpO1xuICAgIHZhciBwb3J0ID0gb2JqLnBvcnQgPyBcIjpcIiArIG9iai5wb3J0IDogJyc7XG4gICAgdmFyIHVzZXIgPSBvYmoudXNlciB8fCAnZ2l0JztcbiAgICB2YXIgbWF5YmVHaXRTdWZmaXggPSBvYmouZ2l0X3N1ZmZpeCA/IFwiLmdpdFwiIDogXCJcIjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInNzaFwiOlxuICAgICAgICAgICAgaWYgKHBvcnQpIHJldHVybiBcInNzaDovL1wiICsgdXNlciArIFwiQFwiICsgb2JqLnJlc291cmNlICsgcG9ydCArIFwiL1wiICsgb2JqLmZ1bGxfbmFtZSArIG1heWJlR2l0U3VmZml4O2Vsc2UgcmV0dXJuIHVzZXIgKyBcIkBcIiArIG9iai5yZXNvdXJjZSArIFwiOlwiICsgb2JqLmZ1bGxfbmFtZSArIG1heWJlR2l0U3VmZml4O1xuICAgICAgICBjYXNlIFwiZ2l0K3NzaFwiOlxuICAgICAgICBjYXNlIFwic3NoK2dpdFwiOlxuICAgICAgICBjYXNlIFwiZnRwXCI6XG4gICAgICAgIGNhc2UgXCJmdHBzXCI6XG4gICAgICAgICAgICByZXR1cm4gdHlwZSArIFwiOi8vXCIgKyB1c2VyICsgXCJAXCIgKyBvYmoucmVzb3VyY2UgKyBwb3J0ICsgXCIvXCIgKyBvYmouZnVsbF9uYW1lICsgbWF5YmVHaXRTdWZmaXg7XG4gICAgICAgIGNhc2UgXCJodHRwXCI6XG4gICAgICAgIGNhc2UgXCJodHRwc1wiOlxuICAgICAgICAgICAgdmFyIGF1dGggPSBvYmoudG9rZW4gPyBidWlsZFRva2VuKG9iaikgOiBvYmoudXNlciAmJiAob2JqLnByb3RvY29scy5pbmNsdWRlcygnaHR0cCcpIHx8IG9iai5wcm90b2NvbHMuaW5jbHVkZXMoJ2h0dHBzJykpID8gb2JqLnVzZXIgKyBcIkBcIiA6IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gdHlwZSArIFwiOi8vXCIgKyBhdXRoICsgb2JqLnJlc291cmNlICsgcG9ydCArIFwiL1wiICsgYnVpbGRQYXRoKG9iaikgKyBtYXliZUdpdFN1ZmZpeDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBvYmouaHJlZjtcbiAgICB9XG59O1xuXG4vKiFcbiAqIGJ1aWxkVG9rZW5cbiAqIEJ1aWxkcyBPQXV0aCB0b2tlbiBwcmVmaXggKGhlbHBlciBmdW5jdGlvbilcbiAqXG4gKiBAbmFtZSBidWlsZFRva2VuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7R2l0VXJsfSBvYmogVGhlIHBhcnNlZCBHaXQgdXJsIG9iamVjdC5cbiAqIEByZXR1cm4ge1N0cmluZ30gdG9rZW4gcHJlZml4XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkVG9rZW4ob2JqKSB7XG4gICAgc3dpdGNoIChvYmouc291cmNlKSB7XG4gICAgICAgIGNhc2UgXCJiaXRidWNrZXQub3JnXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ4LXRva2VuLWF1dGg6XCIgKyBvYmoudG9rZW4gKyBcIkBcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBvYmoudG9rZW4gKyBcIkBcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGF0aChvYmopIHtcbiAgICBzd2l0Y2ggKG9iai5zb3VyY2UpIHtcbiAgICAgICAgY2FzZSBcImJpdGJ1Y2tldC1zZXJ2ZXJcIjpcbiAgICAgICAgICAgIHJldHVybiBcInNjbS9cIiArIG9iai5mdWxsX25hbWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIG9iai5mdWxsX25hbWU7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2l0VXJsUGFyc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xudmFyIHByb3RvY29scyA9IHJlcXVpcmUoXCJwcm90b2NvbHNcIik7XG5cbi8qKlxuICogaXNTc2hcbiAqIENoZWNrcyBpZiBhbiBpbnB1dCB2YWx1ZSBpcyBhIHNzaCB1cmwgb3Igbm90LlxuICpcbiAqIEBuYW1lIGlzU3NoXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBpbnB1dCBUaGUgaW5wdXQgdXJsIG9yIGFuIGFycmF5IG9mIHByb3RvY29scy5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgaW5wdXQgaXMgYSBzc2ggdXJsLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNTc2goaW5wdXQpIHtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQuaW5kZXhPZihcInNzaFwiKSAhPT0gLTEgfHwgaW5wdXQuaW5kZXhPZihcInJzeW5jXCIpICE9PSAtMTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvdHMgPSBwcm90b2NvbHMoaW5wdXQpO1xuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyaW5nKGlucHV0LmluZGV4T2YoXCI6Ly9cIikgKyAzKTtcbiAgICBpZiAoaXNTc2gocHJvdHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIFRPRE8gVGhpcyBwcm9iYWJseSBjb3VsZCBiZSBpbXByb3ZlZCA6KVxuICAgIHZhciB1cmxQb3J0UGF0dGVybiA9IG5ldyBSZWdFeHAoJ1xcLihbYS16QS1aXFxcXGRdKyk6KFxcXFxkKylcXC8nKTtcbiAgICByZXR1cm4gIWlucHV0Lm1hdGNoKHVybFBvcnRQYXR0ZXJuKSAmJiBpbnB1dC5pbmRleE9mKFwiQFwiKSA8IGlucHV0LmluZGV4T2YoXCI6XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3NoOyIsImV4cG9ydCBmdW5jdGlvbiBsaW5lcyhzKSB7XG4gICAgcmV0dXJuIHMgPT09IFwiXCIgPyBbXSA6IHMucmVwbGFjZSgvXFxuJC8sIFwiXCIpLnNwbGl0KFwiXFxuXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVubGluZXMobHMpIHtcbiAgICByZXR1cm4gbHMubWFwKGxpbmUgPT4gbGluZSArIFwiXFxuXCIpLmpvaW4oXCJcIik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG5jb25zdCBEQVRBX1VSTF9ERUZBVUxUX01JTUVfVFlQRSA9ICd0ZXh0L3BsYWluJztcbmNvbnN0IERBVEFfVVJMX0RFRkFVTFRfQ0hBUlNFVCA9ICd1cy1hc2NpaSc7XG5cbmNvbnN0IHRlc3RQYXJhbWV0ZXIgPSAobmFtZSwgZmlsdGVycykgPT4ge1xuXHRyZXR1cm4gZmlsdGVycy5zb21lKGZpbHRlciA9PiBmaWx0ZXIgaW5zdGFuY2VvZiBSZWdFeHAgPyBmaWx0ZXIudGVzdChuYW1lKSA6IGZpbHRlciA9PT0gbmFtZSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVEYXRhVVJMID0gKHVybFN0cmluZywge3N0cmlwSGFzaH0pID0+IHtcblx0Y29uc3QgbWF0Y2ggPSAvXmRhdGE6KD88dHlwZT5bXixdKj8pLCg/PGRhdGE+W14jXSo/KSg/OiMoPzxoYXNoPi4qKSk/JC8uZXhlYyh1cmxTdHJpbmcpO1xuXG5cdGlmICghbWF0Y2gpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVVJMOiAke3VybFN0cmluZ31gKTtcblx0fVxuXG5cdGxldCB7dHlwZSwgZGF0YSwgaGFzaH0gPSBtYXRjaC5ncm91cHM7XG5cdGNvbnN0IG1lZGlhVHlwZSA9IHR5cGUuc3BsaXQoJzsnKTtcblx0aGFzaCA9IHN0cmlwSGFzaCA/ICcnIDogaGFzaDtcblxuXHRsZXQgaXNCYXNlNjQgPSBmYWxzZTtcblx0aWYgKG1lZGlhVHlwZVttZWRpYVR5cGUubGVuZ3RoIC0gMV0gPT09ICdiYXNlNjQnKSB7XG5cdFx0bWVkaWFUeXBlLnBvcCgpO1xuXHRcdGlzQmFzZTY0ID0gdHJ1ZTtcblx0fVxuXG5cdC8vIExvd2VyY2FzZSBNSU1FIHR5cGVcblx0Y29uc3QgbWltZVR5cGUgPSAobWVkaWFUeXBlLnNoaWZ0KCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGF0dHJpYnV0ZXMgPSBtZWRpYVR5cGVcblx0XHQubWFwKGF0dHJpYnV0ZSA9PiB7XG5cdFx0XHRsZXQgW2tleSwgdmFsdWUgPSAnJ10gPSBhdHRyaWJ1dGUuc3BsaXQoJz0nKS5tYXAoc3RyaW5nID0+IHN0cmluZy50cmltKCkpO1xuXG5cdFx0XHQvLyBMb3dlcmNhc2UgYGNoYXJzZXRgXG5cdFx0XHRpZiAoa2V5ID09PSAnY2hhcnNldCcpIHtcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gREFUQV9VUkxfREVGQVVMVF9DSEFSU0VUKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBgJHtrZXl9JHt2YWx1ZSA/IGA9JHt2YWx1ZX1gIDogJyd9YDtcblx0XHR9KVxuXHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0Y29uc3Qgbm9ybWFsaXplZE1lZGlhVHlwZSA9IFtcblx0XHQuLi5hdHRyaWJ1dGVzXG5cdF07XG5cblx0aWYgKGlzQmFzZTY0KSB7XG5cdFx0bm9ybWFsaXplZE1lZGlhVHlwZS5wdXNoKCdiYXNlNjQnKTtcblx0fVxuXG5cdGlmIChub3JtYWxpemVkTWVkaWFUeXBlLmxlbmd0aCAhPT0gMCB8fCAobWltZVR5cGUgJiYgbWltZVR5cGUgIT09IERBVEFfVVJMX0RFRkFVTFRfTUlNRV9UWVBFKSkge1xuXHRcdG5vcm1hbGl6ZWRNZWRpYVR5cGUudW5zaGlmdChtaW1lVHlwZSk7XG5cdH1cblxuXHRyZXR1cm4gYGRhdGE6JHtub3JtYWxpemVkTWVkaWFUeXBlLmpvaW4oJzsnKX0sJHtpc0Jhc2U2NCA/IGRhdGEudHJpbSgpIDogZGF0YX0ke2hhc2ggPyBgIyR7aGFzaH1gIDogJyd9YDtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZVVybCA9ICh1cmxTdHJpbmcsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IHtcblx0XHRkZWZhdWx0UHJvdG9jb2w6ICdodHRwOicsXG5cdFx0bm9ybWFsaXplUHJvdG9jb2w6IHRydWUsXG5cdFx0Zm9yY2VIdHRwOiBmYWxzZSxcblx0XHRmb3JjZUh0dHBzOiBmYWxzZSxcblx0XHRzdHJpcEF1dGhlbnRpY2F0aW9uOiB0cnVlLFxuXHRcdHN0cmlwSGFzaDogZmFsc2UsXG5cdFx0c3RyaXBUZXh0RnJhZ21lbnQ6IHRydWUsXG5cdFx0c3RyaXBXV1c6IHRydWUsXG5cdFx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJzOiBbL151dG1fXFx3Ky9pXSxcblx0XHRyZW1vdmVUcmFpbGluZ1NsYXNoOiB0cnVlLFxuXHRcdHJlbW92ZVNpbmdsZVNsYXNoOiB0cnVlLFxuXHRcdHJlbW92ZURpcmVjdG9yeUluZGV4OiBmYWxzZSxcblx0XHRzb3J0UXVlcnlQYXJhbWV0ZXJzOiB0cnVlLFxuXHRcdC4uLm9wdGlvbnNcblx0fTtcblxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG5cdC8vIERhdGEgVVJMXG5cdGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZURhdGFVUkwodXJsU3RyaW5nLCBvcHRpb25zKTtcblx0fVxuXG5cdGlmICgvXnZpZXctc291cmNlOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignYHZpZXctc291cmNlOmAgaXMgbm90IHN1cHBvcnRlZCBhcyBpdCBpcyBhIG5vbi1zdGFuZGFyZCBwcm90b2NvbCcpO1xuXHR9XG5cblx0Y29uc3QgaGFzUmVsYXRpdmVQcm90b2NvbCA9IHVybFN0cmluZy5zdGFydHNXaXRoKCcvLycpO1xuXHRjb25zdCBpc1JlbGF0aXZlVXJsID0gIWhhc1JlbGF0aXZlUHJvdG9jb2wgJiYgL15cXC4qXFwvLy50ZXN0KHVybFN0cmluZyk7XG5cblx0Ly8gUHJlcGVuZCBwcm90b2NvbFxuXHRpZiAoIWlzUmVsYXRpdmVVcmwpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXig/ISg/Olxcdys6KT9cXC9cXC8pfF5cXC9cXC8vLCBvcHRpb25zLmRlZmF1bHRQcm90b2NvbCk7XG5cdH1cblxuXHRjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybFN0cmluZyk7XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwICYmIG9wdGlvbnMuZm9yY2VIdHRwcykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIGBmb3JjZUh0dHBgIGFuZCBgZm9yY2VIdHRwc2Agb3B0aW9ucyBjYW5ub3QgYmUgdXNlZCB0b2dldGhlcicpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwICYmIHVybE9iai5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcblx0XHR1cmxPYmoucHJvdG9jb2wgPSAnaHR0cDonO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuZm9yY2VIdHRwcyAmJiB1cmxPYmoucHJvdG9jb2wgPT09ICdodHRwOicpIHtcblx0XHR1cmxPYmoucHJvdG9jb2wgPSAnaHR0cHM6Jztcblx0fVxuXG5cdC8vIFJlbW92ZSBhdXRoXG5cdGlmIChvcHRpb25zLnN0cmlwQXV0aGVudGljYXRpb24pIHtcblx0XHR1cmxPYmoudXNlcm5hbWUgPSAnJztcblx0XHR1cmxPYmoucGFzc3dvcmQgPSAnJztcblx0fVxuXG5cdC8vIFJlbW92ZSBoYXNoXG5cdGlmIChvcHRpb25zLnN0cmlwSGFzaCkge1xuXHRcdHVybE9iai5oYXNoID0gJyc7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5zdHJpcFRleHRGcmFnbWVudCkge1xuXHRcdHVybE9iai5oYXNoID0gdXJsT2JqLmhhc2gucmVwbGFjZSgvIz86fjp0ZXh0Lio/JC9pLCAnJyk7XG5cdH1cblxuXHQvLyBSZW1vdmUgZHVwbGljYXRlIHNsYXNoZXMgaWYgbm90IHByZWNlZGVkIGJ5IGEgcHJvdG9jb2xcblx0aWYgKHVybE9iai5wYXRobmFtZSkge1xuXHRcdHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC8oPzwhXFxiKD86W2Etel1bYS16XFxkK1xcLS5dezEsNTB9OikpXFwvezIsfS9nLCAnLycpO1xuXHR9XG5cblx0Ly8gRGVjb2RlIFVSSSBvY3RldHNcblx0aWYgKHVybE9iai5wYXRobmFtZSkge1xuXHRcdHRyeSB7XG5cdFx0XHR1cmxPYmoucGF0aG5hbWUgPSBkZWNvZGVVUkkodXJsT2JqLnBhdGhuYW1lKTtcblx0XHR9IGNhdGNoIChfKSB7fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIGRpcmVjdG9yeSBpbmRleFxuXHRpZiAob3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCA9PT0gdHJ1ZSkge1xuXHRcdG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXggPSBbL15pbmRleFxcLlthLXpdKyQvXTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgpICYmIG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgubGVuZ3RoID4gMCkge1xuXHRcdGxldCBwYXRoQ29tcG9uZW50cyA9IHVybE9iai5wYXRobmFtZS5zcGxpdCgnLycpO1xuXHRcdGNvbnN0IGxhc3RDb21wb25lbnQgPSBwYXRoQ29tcG9uZW50c1twYXRoQ29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuXHRcdGlmICh0ZXN0UGFyYW1ldGVyKGxhc3RDb21wb25lbnQsIG9wdGlvbnMucmVtb3ZlRGlyZWN0b3J5SW5kZXgpKSB7XG5cdFx0XHRwYXRoQ29tcG9uZW50cyA9IHBhdGhDb21wb25lbnRzLnNsaWNlKDAsIHBhdGhDb21wb25lbnRzLmxlbmd0aCAtIDEpO1xuXHRcdFx0dXJsT2JqLnBhdGhuYW1lID0gcGF0aENvbXBvbmVudHMuc2xpY2UoMSkuam9pbignLycpICsgJy8nO1xuXHRcdH1cblx0fVxuXG5cdGlmICh1cmxPYmouaG9zdG5hbWUpIHtcblx0XHQvLyBSZW1vdmUgdHJhaWxpbmcgZG90XG5cdFx0dXJsT2JqLmhvc3RuYW1lID0gdXJsT2JqLmhvc3RuYW1lLnJlcGxhY2UoL1xcLiQvLCAnJyk7XG5cblx0XHQvLyBSZW1vdmUgYHd3dy5gXG5cdFx0aWYgKG9wdGlvbnMuc3RyaXBXV1cgJiYgL153d3dcXC4oPyF3d3dcXC4pKD86W2EtelxcLVxcZF17MSw2M30pXFwuKD86W2Etei5cXC1cXGRdezIsNjN9KSQvLnRlc3QodXJsT2JqLmhvc3RuYW1lKSkge1xuXHRcdFx0Ly8gRWFjaCBsYWJlbCBzaG91bGQgYmUgbWF4IDYzIGF0IGxlbmd0aCAobWluOiAxKS5cblx0XHRcdC8vIFNvdXJjZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSG9zdG5hbWUjUmVzdHJpY3Rpb25zX29uX3ZhbGlkX2hvc3RfbmFtZXNcblx0XHRcdC8vIEVhY2ggVExEIHNob3VsZCBiZSB1cCB0byA2MyBjaGFyYWN0ZXJzIGxvbmcgKG1pbjogMikuXG5cdFx0XHQvLyBJdCBpcyB0ZWNobmljYWxseSBwb3NzaWJsZSB0byBoYXZlIGEgc2luZ2xlIGNoYXJhY3RlciBUTEQsIGJ1dCBub25lIGN1cnJlbnRseSBleGlzdC5cblx0XHRcdHVybE9iai5ob3N0bmFtZSA9IHVybE9iai5ob3N0bmFtZS5yZXBsYWNlKC9ed3d3XFwuLywgJycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSBxdWVyeSB1bndhbnRlZCBwYXJhbWV0ZXJzXG5cdGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucmVtb3ZlUXVlcnlQYXJhbWV0ZXJzKSkge1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIFsuLi51cmxPYmouc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcblx0XHRcdGlmICh0ZXN0UGFyYW1ldGVyKGtleSwgb3B0aW9ucy5yZW1vdmVRdWVyeVBhcmFtZXRlcnMpKSB7XG5cdFx0XHRcdHVybE9iai5zZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMucmVtb3ZlUXVlcnlQYXJhbWV0ZXJzID09PSB0cnVlKSB7XG5cdFx0dXJsT2JqLnNlYXJjaCA9ICcnO1xuXHR9XG5cblx0Ly8gU29ydCBxdWVyeSBwYXJhbWV0ZXJzXG5cdGlmIChvcHRpb25zLnNvcnRRdWVyeVBhcmFtZXRlcnMpIHtcblx0XHR1cmxPYmouc2VhcmNoUGFyYW1zLnNvcnQoKTtcblx0fVxuXG5cdGlmIChvcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpIHtcblx0XHR1cmxPYmoucGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcblx0fVxuXG5cdGNvbnN0IG9sZFVybFN0cmluZyA9IHVybFN0cmluZztcblxuXHQvLyBUYWtlIGFkdmFudGFnZSBvZiBtYW55IG9mIHRoZSBOb2RlIGB1cmxgIG5vcm1hbGl6YXRpb25zXG5cdHVybFN0cmluZyA9IHVybE9iai50b1N0cmluZygpO1xuXG5cdGlmICghb3B0aW9ucy5yZW1vdmVTaW5nbGVTbGFzaCAmJiB1cmxPYmoucGF0aG5hbWUgPT09ICcvJyAmJiAhb2xkVXJsU3RyaW5nLmVuZHNXaXRoKCcvJykgJiYgdXJsT2JqLmhhc2ggPT09ICcnKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHQvLyBSZW1vdmUgZW5kaW5nIGAvYCB1bmxlc3MgcmVtb3ZlU2luZ2xlU2xhc2ggaXMgZmFsc2Vcblx0aWYgKChvcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggfHwgdXJsT2JqLnBhdGhuYW1lID09PSAnLycpICYmIHVybE9iai5oYXNoID09PSAnJyAmJiBvcHRpb25zLnJlbW92ZVNpbmdsZVNsYXNoKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cdH1cblxuXHQvLyBSZXN0b3JlIHJlbGF0aXZlIHByb3RvY29sLCBpZiBhcHBsaWNhYmxlXG5cdGlmIChoYXNSZWxhdGl2ZVByb3RvY29sICYmICFvcHRpb25zLm5vcm1hbGl6ZVByb3RvY29sKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL15odHRwOlxcL1xcLy8sICcvLycpO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGh0dHAvaHR0cHNcblx0aWYgKG9wdGlvbnMuc3RyaXBQcm90b2NvbCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eKD86aHR0cHM/Oik/XFwvXFwvLywgJycpO1xuXHR9XG5cblx0cmV0dXJuIHVybFN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplVXJsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIERlcGVuZGVuY2llc1xudmFyIHByb3RvY29scyA9IHJlcXVpcmUoXCJwcm90b2NvbHNcIiksXG4gICAgaXNTc2ggPSByZXF1aXJlKFwiaXMtc3NoXCIpLFxuICAgIHFzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTtcblxuLyoqXG4gKiBwYXJzZVBhdGhcbiAqIFBhcnNlcyB0aGUgaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIHBhcnNlUGF0aFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBpbnB1dCB1cmwuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwcm90b2NvbGAgKFN0cmluZyk6IFRoZSBmaXJzdCBwcm90b2NvbCwgYFwic3NoXCJgIChpZiB0aGUgdXJsIGlzIGEgc3NoIHVybCkgb3IgYFwiZmlsZVwiYC5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcXVlcnlgIChPYmplY3QpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nLCBwYXJzZWQgYXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBwYXJzZVBhdGgodXJsKSB7XG4gICAgdXJsID0gKHVybCB8fCBcIlwiKS50cmltKCk7XG4gICAgdmFyIG91dHB1dCA9IHtcbiAgICAgICAgcHJvdG9jb2xzOiBwcm90b2NvbHModXJsKSxcbiAgICAgICAgcHJvdG9jb2w6IG51bGwsXG4gICAgICAgIHBvcnQ6IG51bGwsXG4gICAgICAgIHJlc291cmNlOiBcIlwiLFxuICAgICAgICB1c2VyOiBcIlwiLFxuICAgICAgICBwYXRobmFtZTogXCJcIixcbiAgICAgICAgaGFzaDogXCJcIixcbiAgICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgICBocmVmOiB1cmwsXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuY3JlYXRlKG51bGwpXG4gICAgfSxcbiAgICAgICAgcHJvdG9jb2xJbmRleCA9IHVybC5pbmRleE9mKFwiOi8vXCIpLFxuICAgICAgICByZXNvdXJjZUluZGV4ID0gLTEsXG4gICAgICAgIHNwbGl0cyA9IG51bGwsXG4gICAgICAgIHBhcnRzID0gbnVsbDtcblxuICAgIGlmICh1cmwuc3RhcnRzV2l0aChcIi5cIikpIHtcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiLi9cIikpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gdXJsO1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcImZpbGVcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyID0gdXJsLmNoYXJBdCgxKTtcbiAgICBpZiAoIW91dHB1dC5wcm90b2NvbCkge1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBvdXRwdXQucHJvdG9jb2xzWzBdO1xuICAgICAgICBpZiAoIW91dHB1dC5wcm90b2NvbCkge1xuICAgICAgICAgICAgaWYgKGlzU3NoKHVybCkpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcInNzaFwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXJzdENoYXIgPT09IFwiL1wiIHx8IGZpcnN0Q2hhciA9PT0gXCJ+XCIpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDIpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcImZpbGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm90b2NvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHByb3RvY29sSW5kZXggKyAzKTtcbiAgICB9XG5cbiAgICBwYXJ0cyA9IHVybC5zcGxpdCgvXFwvfFxcXFwvKTtcbiAgICBpZiAob3V0cHV0LnByb3RvY29sICE9PSBcImZpbGVcIikge1xuICAgICAgICBvdXRwdXQucmVzb3VyY2UgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLy8gdXNlckBkb21haW5cbiAgICBzcGxpdHMgPSBvdXRwdXQucmVzb3VyY2Uuc3BsaXQoXCJAXCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG91dHB1dC51c2VyID0gc3BsaXRzWzBdO1xuICAgICAgICBvdXRwdXQucmVzb3VyY2UgPSBzcGxpdHNbMV07XG4gICAgfVxuXG4gICAgLy8gZG9tYWluLmNvbTpwb3J0XG4gICAgc3BsaXRzID0gb3V0cHV0LnJlc291cmNlLnNwbGl0KFwiOlwiKTtcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBvdXRwdXQucmVzb3VyY2UgPSBzcGxpdHNbMF07XG4gICAgICAgIGlmIChzcGxpdHNbMV0pIHtcbiAgICAgICAgICAgIG91dHB1dC5wb3J0ID0gTnVtYmVyKHNwbGl0c1sxXSk7XG4gICAgICAgICAgICBpZiAoaXNOYU4ob3V0cHV0LnBvcnQpKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnBvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHBhcnRzLnVuc2hpZnQoc3BsaXRzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dC5wb3J0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBlbXB0eSBlbGVtZW50c1xuICAgIHBhcnRzID0gcGFydHMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgLy8gU3RyaW5naWZ5IHRoZSBwYXRobmFtZVxuICAgIGlmIChvdXRwdXQucHJvdG9jb2wgPT09IFwiZmlsZVwiKSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5ocmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5wYXRobmFtZSB8fCAob3V0cHV0LnByb3RvY29sICE9PSBcImZpbGVcIiB8fCBvdXRwdXQuaHJlZlswXSA9PT0gXCIvXCIgPyBcIi9cIiA6IFwiXCIpICsgcGFydHMuam9pbihcIi9cIik7XG4gICAgfVxuXG4gICAgLy8gI3NvbWUtaGFzaFxuICAgIHNwbGl0cyA9IG91dHB1dC5wYXRobmFtZS5zcGxpdChcIiNcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gc3BsaXRzWzBdO1xuICAgICAgICBvdXRwdXQuaGFzaCA9IHNwbGl0c1sxXTtcbiAgICB9XG5cbiAgICAvLyA/Zm9vPWJhclxuICAgIHNwbGl0cyA9IG91dHB1dC5wYXRobmFtZS5zcGxpdChcIj9cIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gc3BsaXRzWzBdO1xuICAgICAgICBvdXRwdXQuc2VhcmNoID0gc3BsaXRzWzFdO1xuICAgIH1cblxuICAgIG91dHB1dC5xdWVyeSA9IHFzLnBhcnNlKG91dHB1dC5zZWFyY2gpO1xuICAgIG91dHB1dC5ocmVmID0gb3V0cHV0LmhyZWYucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICAgIG91dHB1dC5wYXRobmFtZSA9IG91dHB1dC5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVBhdGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIHBhcnNlUGF0aCA9IHJlcXVpcmUoXCJwYXJzZS1wYXRoXCIpLFxuICAgIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCJub3JtYWxpemUtdXJsXCIpO1xuXG4vKipcbiAqIHBhcnNlVXJsXG4gKiBQYXJzZXMgdGhlIGlucHV0IHVybC5cbiAqXG4gKiAqKk5vdGUqKjogVGhpcyAqdGhyb3dzKiBpZiBpbnZhbGlkIHVybHMgYXJlIHByb3ZpZGVkLlxuICpcbiAqIEBuYW1lIHBhcnNlVXJsXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIGlucHV0IHVybC5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxPYmplY3R9IG5vcm1hbGl6ZSBXaGV0ZXIgdG8gbm9ybWFsaXplIHRoZSB1cmwgb3Igbm90LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyBgZmFsc2VgLiBJZiBgdHJ1ZWAsIHRoZSB1cmwgd2lsbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgYmUgbm9ybWFsaXplZC4gSWYgYW4gb2JqZWN0LCBpdCB3aWxsIGJlIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyBvYmplY3Qgc2VudCB0byBbYG5vcm1hbGl6ZS11cmxgXShodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL25vcm1hbGl6ZS11cmwpLlxuICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBTU0ggdXJscywgbm9ybWFsaXplIHdvbid0IHdvcmsuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcHJvdG9jb2xgIChTdHJpbmcpOiBUaGUgZmlyc3QgcHJvdG9jb2wsIGBcInNzaFwiYCAoaWYgdGhlIHVybCBpcyBhIHNzaCB1cmwpIG9yIGBcImZpbGVcImAuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHF1ZXJ5YCAoT2JqZWN0KTogVGhlIHVybCBxdWVyeXN0cmluZywgcGFyc2VkIGFzIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGFyc2VVcmwodXJsKSB7XG4gICAgdmFyIG5vcm1hbGl6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiB8fCAhdXJsLnRyaW0oKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHVybC5cIik7XG4gICAgfVxuICAgIGlmIChub3JtYWxpemUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2Ygbm9ybWFsaXplID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yobm9ybWFsaXplKSkgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZSA9IHtcbiAgICAgICAgICAgICAgICBzdHJpcEhhc2g6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHVybCA9IG5vcm1hbGl6ZVVybCh1cmwsIG5vcm1hbGl6ZSk7XG4gICAgfVxuICAgIHZhciBwYXJzZWQgPSBwYXJzZVBhdGgodXJsKTtcbiAgICByZXR1cm4gcGFyc2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlVXJsOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIHByb3RvY29sc1xuICogUmV0dXJucyB0aGUgcHJvdG9jb2xzIG9mIGFuIGlucHV0IHVybC5cbiAqXG4gKiBAbmFtZSBwcm90b2NvbHNcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB1cmwuXG4gKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBmaXJzdCBJZiBgdHJ1ZWAsIHRoZSBmaXJzdCBwcm90b2NvbCB3aWxsIGJlIHJldHVybmVkLiBJZiBudW1iZXIsIGl0IHdpbGwgcmVwcmVzZW50IHRoZSB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBwcm90b2NvbHMgYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9IFRoZSBhcnJheSBvZiBwcm90b2NvbHMgb3IgdGhlIHNwZWNpZmllZCBwcm90b2NvbC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwcm90b2NvbHMoaW5wdXQsIGZpcnN0KSB7XG5cbiAgICBpZiAoZmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmlyc3QgPSAwO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoXCI6Ly9cIiksXG4gICAgICAgIHNwbGl0cyA9IGlucHV0LnN1YnN0cmluZygwLCBpbmRleCkuc3BsaXQoXCIrXCIpLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3QgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHNwbGl0c1tmaXJzdF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbmNvbnN0IGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5jb25zdCBzcGxpdE9uRmlyc3QgPSByZXF1aXJlKCdzcGxpdC1vbi1maXJzdCcpO1xuY29uc3QgZmlsdGVyT2JqZWN0ID0gcmVxdWlyZSgnZmlsdGVyLW9iaicpO1xuXG5jb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHZhbHVlID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdHN3aXRjaCAob3B0aW9ucy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0Y29uc3QgaW5kZXggPSByZXN1bHQubGVuZ3RoO1xuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgaW5kZXgsICddJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHQuLi5yZXN1bHQsXG5cdFx0XHRcdFx0W2VuY29kZShrZXksIG9wdGlvbnMpLCAnWycsIGVuY29kZShpbmRleCwgb3B0aW9ucyksICddPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXG5cdFx0XHRcdF07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcE51bGwgJiYgdmFsdWUgPT09IG51bGwpIHx8XG5cdFx0XHRcdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIHZhbHVlID09PSAnJylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXSddLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbXT0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4ga2V5ID0+IChyZXN1bHQsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBbW2VuY29kZShrZXksIG9wdGlvbnMpLCAnPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbW3Jlc3VsdCwgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKV07XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIGVuY29kZShrZXksIG9wdGlvbnMpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCBbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKSB7XG5cdGxldCByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGNhc2UgJ2NvbW1hJzpcblx0XHRjYXNlICdzZXBhcmF0b3InOlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0FycmF5ID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblx0XHRcdFx0Y29uc3QgaXNFbmNvZGVkQXJyYXkgPSAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNBcnJheSAmJiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpKTtcblx0XHRcdFx0dmFsdWUgPSBpc0VuY29kZWRBcnJheSA/IGRlY29kZSh2YWx1ZSwgb3B0aW9ucykgOiB2YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBpc0FycmF5IHx8IGlzRW5jb2RlZEFycmF5ID8gdmFsdWUuc3BsaXQob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikubWFwKGl0ZW0gPT4gZGVjb2RlKGl0ZW0sIG9wdGlvbnMpKSA6IHZhbHVlID09PSBudWxsID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gbmV3VmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0aWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gW10uY29uY2F0KGFjY3VtdWxhdG9yW2tleV0sIHZhbHVlKTtcblx0XHRcdH07XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcih2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCB2YWx1ZS5sZW5ndGggIT09IDEpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdhcnJheUZvcm1hdFNlcGFyYXRvciBtdXN0IGJlIHNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLmVuY29kZSkge1xuXHRcdHJldHVybiBvcHRpb25zLnN0cmljdCA/IHN0cmljdFVyaUVuY29kZSh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZGVjb2RlKSB7XG5cdFx0cmV0dXJuIGRlY29kZUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGtleXNTb3J0ZXIoaW5wdXQpIHtcblx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0cmV0dXJuIGlucHV0LnNvcnQoKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnKSB7XG5cdFx0cmV0dXJuIGtleXNTb3J0ZXIoT2JqZWN0LmtleXMoaW5wdXQpKVxuXHRcdFx0LnNvcnQoKGEsIGIpID0+IE51bWJlcihhKSAtIE51bWJlcihiKSlcblx0XHRcdC5tYXAoa2V5ID0+IGlucHV0W2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYXNoKGlucHV0KSB7XG5cdGNvbnN0IGhhc2hTdGFydCA9IGlucHV0LmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRpbnB1dCA9IGlucHV0LnNsaWNlKDAsIGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2godXJsKSB7XG5cdGxldCBoYXNoID0gJyc7XG5cdGNvbnN0IGhhc2hTdGFydCA9IHVybC5pbmRleE9mKCcjJyk7XG5cdGlmIChoYXNoU3RhcnQgIT09IC0xKSB7XG5cdFx0aGFzaCA9IHVybC5zbGljZShoYXNoU3RhcnQpO1xuXHR9XG5cblx0cmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3QoaW5wdXQpIHtcblx0aW5wdXQgPSByZW1vdmVIYXNoKGlucHV0KTtcblx0Y29uc3QgcXVlcnlTdGFydCA9IGlucHV0LmluZGV4T2YoJz8nKTtcblx0aWYgKHF1ZXJ5U3RhcnQgPT09IC0xKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0LnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5wYXJzZU51bWJlcnMgJiYgIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKSAmJiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgIT09ICcnKSkge1xuXHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLnBhcnNlQm9vbGVhbnMgJiYgdmFsdWUgIT09IG51bGwgJiYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSkge1xuXHRcdHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZGVjb2RlOiB0cnVlLFxuXHRcdHNvcnQ6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnLFxuXHRcdHBhcnNlTnVtYmVyczogZmFsc2UsXG5cdFx0cGFyc2VCb29sZWFuczogZmFsc2Vcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHQvLyBDcmVhdGUgYW4gb2JqZWN0IHdpdGggbm8gcHJvdG90eXBlXG5cdGNvbnN0IHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBxdWVyeSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0cXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXls/IyZdLywgJycpO1xuXG5cdGlmICghcXVlcnkpIHtcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwYXJhbSBvZiBxdWVyeS5zcGxpdCgnJicpKSB7XG5cdFx0aWYgKHBhcmFtID09PSAnJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFtrZXksIHZhbHVlXSA9IHNwbGl0T25GaXJzdChvcHRpb25zLmRlY29kZSA/IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpIDogcGFyYW0sICc9Jyk7XG5cblx0XHQvLyBNaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogWydjb21tYScsICdzZXBhcmF0b3InXS5pbmNsdWRlcyhvcHRpb25zLmFycmF5Rm9ybWF0KSA/IHZhbHVlIDogZGVjb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0XHRmb3JtYXR0ZXIoZGVjb2RlKGtleSwgb3B0aW9ucyksIHZhbHVlLCByZXQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmV0KSkge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcblx0XHRcdGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh2YWx1ZSkpIHtcblx0XHRcdFx0dmFsdWVba10gPSBwYXJzZVZhbHVlKHZhbHVlW2tdLCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0W2tleV0gPSBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zb3J0ID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRyZXR1cm4gKG9wdGlvbnMuc29ydCA9PT0gdHJ1ZSA/IE9iamVjdC5rZXlzKHJldCkuc29ydCgpIDogT2JqZWN0LmtleXMocmV0KS5zb3J0KG9wdGlvbnMuc29ydCkpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcblx0XHRjb25zdCB2YWx1ZSA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LCBPYmplY3QuY3JlYXRlKG51bGwpKTtcbn1cblxuZXhwb3J0cy5leHRyYWN0ID0gZXh0cmFjdDtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSAob2JqZWN0LCBvcHRpb25zKSA9PiB7XG5cdGlmICghb2JqZWN0KSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWUsXG5cdFx0YXJyYXlGb3JtYXQ6ICdub25lJyxcblx0XHRhcnJheUZvcm1hdFNlcGFyYXRvcjogJywnXG5cdH0sIG9wdGlvbnMpO1xuXG5cdHZhbGlkYXRlQXJyYXlGb3JtYXRTZXBhcmF0b3Iob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcik7XG5cblx0Y29uc3Qgc2hvdWxkRmlsdGVyID0ga2V5ID0+IChcblx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiBpc051bGxPclVuZGVmaW5lZChvYmplY3Rba2V5XSkpIHx8XG5cdFx0KG9wdGlvbnMuc2tpcEVtcHR5U3RyaW5nICYmIG9iamVjdFtrZXldID09PSAnJylcblx0KTtcblxuXHRjb25zdCBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0aW9ucyk7XG5cblx0Y29uc3Qgb2JqZWN0Q29weSA9IHt9O1xuXG5cdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRpZiAoIXNob3VsZEZpbHRlcihrZXkpKSB7XG5cdFx0XHRvYmplY3RDb3B5W2tleV0gPSBvYmplY3Rba2V5XTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0Q29weSk7XG5cblx0aWYgKG9wdGlvbnMuc29ydCAhPT0gZmFsc2UpIHtcblx0XHRrZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcblx0fVxuXG5cdHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG5cblx0XHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdC5yZWR1Y2UoZm9ybWF0dGVyKGtleSksIFtdKVxuXHRcdFx0XHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRpb25zKSArICc9JyArIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdH0pLmZpbHRlcih4ID0+IHgubGVuZ3RoID4gMCkuam9pbignJicpO1xufTtcblxuZXhwb3J0cy5wYXJzZVVybCA9ICh1cmwsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGRlY29kZTogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCBbdXJsXywgaGFzaF0gPSBzcGxpdE9uRmlyc3QodXJsLCAnIycpO1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxuXHRcdHtcblx0XHRcdHVybDogdXJsXy5zcGxpdCgnPycpWzBdIHx8ICcnLFxuXHRcdFx0cXVlcnk6IHBhcnNlKGV4dHJhY3QodXJsKSwgb3B0aW9ucylcblx0XHR9LFxuXHRcdG9wdGlvbnMgJiYgb3B0aW9ucy5wYXJzZUZyYWdtZW50SWRlbnRpZmllciAmJiBoYXNoID8ge2ZyYWdtZW50SWRlbnRpZmllcjogZGVjb2RlKGhhc2gsIG9wdGlvbnMpfSA6IHt9XG5cdCk7XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeVVybCA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWVcblx0fSwgb3B0aW9ucyk7XG5cblx0Y29uc3QgdXJsID0gcmVtb3ZlSGFzaChvYmplY3QudXJsKS5zcGxpdCgnPycpWzBdIHx8ICcnO1xuXHRjb25zdCBxdWVyeUZyb21VcmwgPSBleHBvcnRzLmV4dHJhY3Qob2JqZWN0LnVybCk7XG5cdGNvbnN0IHBhcnNlZFF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMucGFyc2UocXVlcnlGcm9tVXJsLCB7c29ydDogZmFsc2V9KTtcblxuXHRjb25zdCBxdWVyeSA9IE9iamVjdC5hc3NpZ24ocGFyc2VkUXVlcnlGcm9tVXJsLCBvYmplY3QucXVlcnkpO1xuXHRsZXQgcXVlcnlTdHJpbmcgPSBleHBvcnRzLnN0cmluZ2lmeShxdWVyeSwgb3B0aW9ucyk7XG5cdGlmIChxdWVyeVN0cmluZykge1xuXHRcdHF1ZXJ5U3RyaW5nID0gYD8ke3F1ZXJ5U3RyaW5nfWA7XG5cdH1cblxuXHRsZXQgaGFzaCA9IGdldEhhc2gob2JqZWN0LnVybCk7XG5cdGlmIChvYmplY3QuZnJhZ21lbnRJZGVudGlmaWVyKSB7XG5cdFx0aGFzaCA9IGAjJHtlbmNvZGUob2JqZWN0LmZyYWdtZW50SWRlbnRpZmllciwgb3B0aW9ucyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHt1cmx9JHtxdWVyeVN0cmluZ30ke2hhc2h9YDtcbn07XG5cbmV4cG9ydHMucGljayA9IChpbnB1dCwgZmlsdGVyLCBvcHRpb25zKSA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRwYXJzZUZyYWdtZW50SWRlbnRpZmllcjogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCB7dXJsLCBxdWVyeSwgZnJhZ21lbnRJZGVudGlmaWVyfSA9IGV4cG9ydHMucGFyc2VVcmwoaW5wdXQsIG9wdGlvbnMpO1xuXHRyZXR1cm4gZXhwb3J0cy5zdHJpbmdpZnlVcmwoe1xuXHRcdHVybCxcblx0XHRxdWVyeTogZmlsdGVyT2JqZWN0KHF1ZXJ5LCBmaWx0ZXIpLFxuXHRcdGZyYWdtZW50SWRlbnRpZmllclxuXHR9LCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydHMuZXhjbHVkZSA9IChpbnB1dCwgZmlsdGVyLCBvcHRpb25zKSA9PiB7XG5cdGNvbnN0IGV4Y2x1c2lvbkZpbHRlciA9IEFycmF5LmlzQXJyYXkoZmlsdGVyKSA/IGtleSA9PiAhZmlsdGVyLmluY2x1ZGVzKGtleSkgOiAoa2V5LCB2YWx1ZSkgPT4gIWZpbHRlcihrZXksIHZhbHVlKTtcblxuXHRyZXR1cm4gZXhwb3J0cy5waWNrKGlucHV0LCBleGNsdXNpb25GaWx0ZXIsIG9wdGlvbnMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoc3RyaW5nLCBzZXBhcmF0b3IpID0+IHtcblx0aWYgKCEodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGFyZ3VtZW50cyB0byBiZSBvZiB0eXBlIGBzdHJpbmdgJyk7XG5cdH1cblxuXHRpZiAoc2VwYXJhdG9yID09PSAnJykge1xuXHRcdHJldHVybiBbc3RyaW5nXTtcblx0fVxuXG5cdGNvbnN0IHNlcGFyYXRvckluZGV4ID0gc3RyaW5nLmluZGV4T2Yoc2VwYXJhdG9yKTtcblxuXHRpZiAoc2VwYXJhdG9ySW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRzdHJpbmcuc2xpY2UoMCwgc2VwYXJhdG9ySW5kZXgpLFxuXHRcdHN0cmluZy5zbGljZShzZXBhcmF0b3JJbmRleCArIHNlcGFyYXRvci5sZW5ndGgpXG5cdF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCB4ID0+IGAlJHt4LmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4iLCJpbXBvcnQgeyBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UgfSBmcm9tIFwiLi9pc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZkJvb2xlYW5zKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSh0cnVlKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdW1iZXJzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZSgxKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTdHJpbmdzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShcIlwiKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZTeW1ib2xzKHgpIHtcbiAgICByZXR1cm4gaXNBcnJheU9mTGlrZShTeW1ib2woKSkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTnVsbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKG51bGwpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlVuZGVmaW5lZHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHVuZGVmaW5lZCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mUHJpbWl0aXZlcyh4KSB7XG4gICAgcmV0dXJuIGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZPYmplY3RzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZih0eXBlKSB7XG4gICAgcmV0dXJuICh4cykgPT4gaXMoQXJyYXkpKHhzKSAmJiB4cy5ldmVyeShpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mTGlrZShyZWZlcmVuY2UpIHtcbiAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiB4LmV2ZXJ5KGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsImV4cG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlLCB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgeyBpc0FycmF5T2ZCb29sZWFucywgaXNBcnJheU9mTnVtYmVycywgaXNBcnJheU9mU3RyaW5ncywgaXNBcnJheU9mU3ltYm9scywgaXNBcnJheU9mTnVsbHMsIGlzQXJyYXlPZlVuZGVmaW5lZHMsIGlzQXJyYXlPZlByaW1pdGl2ZXMsIGlzQXJyYXlPZk9iamVjdHMsIGlzQXJyYXlPZiwgaXNBcnJheU9mTGlrZSwgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IHsgb25seUJvb2xlYW5zLCBvbmx5TnVtYmVycywgb25seVN0cmluZ3MsIG9ubHlTeW1ib2xzLCBvbmx5TnVsbHMsIG9ubHlVbmRlZmluZWRzLCBvbmx5UHJpbWl0aXZlcywgb25seU9iamVjdHMsIG9ubHksIG9ubHlMaWtlLCB9IGZyb20gXCIuL29ubHlcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImNvbnN0IFRZUEVfR1VBUkRTX1BSSU1JVElWRSA9IFtpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWRdO1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm51bWJlclwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTeW1ib2woeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwoeCkge1xuICAgIHJldHVybiB4ID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gVFlQRV9HVUFSRFNfUFJJTUlUSVZFLnNvbWUoZiA9PiBmKHgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc05vblByaW1pdGl2ZSh4KSB7XG4gICAgcmV0dXJuICFpc1ByaW1pdGl2ZSh4KTtcbn1cbmZ1bmN0aW9uIG5hbWVkRnVuY3Rpb24obmFtZSwgZnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW4sIFwibmFtZVwiLCB7IHZhbHVlOiBuYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XG59XG5mdW5jdGlvbiBuYW1lZFR5cGVHdWFyZChjcmVhdG9yLCB0eXBlLCB0eXBlR3VhcmQpIHtcbiAgICByZXR1cm4gbmFtZWRGdW5jdGlvbihgJHtjcmVhdG9yLm5hbWV9KCR7dHlwZS5uYW1lfSlgLCB0eXBlR3VhcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICBpZiAoaXNQcmltaXRpdmUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVkVHlwZUd1YXJkKGlzLCB0eXBlLCAoeCkgPT4geCBpbnN0YW5jZW9mIHR5cGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGlrZShyZWZlcmVuY2UpIHtcbiAgICBmb3IgKGNvbnN0IGYgb2YgVFlQRV9HVUFSRFNfUFJJTUlUSVZFKSB7XG4gICAgICAgIGlmIChmKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoeCkgPT4gZih4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXMoQXJyYXkpKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlQXNBcnJheSA9IHJlZmVyZW5jZTtcbiAgICAgICAgcmV0dXJuICh4KSA9PiBpcyhBcnJheSkoeCkgJiYgKHJlZmVyZW5jZUFzQXJyYXkubGVuZ3RoID4gMCA/IHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZUFzQXJyYXlbMF0pKSA6IHRydWUpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICh4KSA9PiAoIVt1bmRlZmluZWQsIG51bGxdLmluY2x1ZGVzKHgpXG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlZmVyZW5jZSkuZXZlcnkoayA9PiBpc0xpa2UocmVmZXJlbmNlW2tdKSh4W2tdKSkpO1xuICAgIH1cbiAgICBpZiAocmVmZXJlbmNlLmNvbnN0cnVjdG9yIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGlzKHJlZmVyZW5jZS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoaXNMaWtlLm5hbWUgKyBgIGNhbm5vdCB1c2UgdGhpcyBvYmplY3QgYXMgcmVmZXJlbmNlIGJlY2F1c2UgaXQgaGFzIG5vIGNvbnN0cnVjdG9yOiBgICsgSlNPTi5zdHJpbmdpZnkocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyBpc0Jvb2xlYW4sIGlzTnVtYmVyLCBpc1N0cmluZywgaXNTeW1ib2wsIGlzTnVsbCwgaXNVbmRlZmluZWQsIGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25seUJvb2xlYW5zKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc0Jvb2xlYW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdW1iZXJzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bWJlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVN0cmluZ3MoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzU3RyaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3ltYm9scyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTeW1ib2wpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlOdWxscyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOdWxsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5VW5kZWZpbmVkcyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNVbmRlZmluZWQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlQcmltaXRpdmVzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1ByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU9iamVjdHMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTm9uUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5KHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiB4cy5maWx0ZXIoaXModHlwZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpc0xpa2UocmVmZXJlbmNlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmx5LmpzLm1hcCIsImV4cG9ydCBjb25zdCBBTFdBWVMgPSAoKSA9PiB0cnVlO1xuZXhwb3J0IGNvbnN0IE5FVkVSID0gKCkgPT4gZmFsc2U7XG5leHBvcnQgY29uc3QgRE9NQ09OVEVOVExPQURFRCA9IChzdGF0ZSkgPT4gc3RhdGUgIT09IFwibG9hZGluZ1wiO1xuZXhwb3J0IGNvbnN0IExPQUQgPSAoc3RhdGUpID0+IHN0YXRlID09PSBcImNvbXBsZXRlXCI7XG4iLCJpbXBvcnQgeyB1bmxpbmVzIH0gZnJvbSBcImxpbmVzLXVubGluZXNcIjtcbmNvbnN0IElOREVOVEFUSU9OID0gXCIgIFwiO1xuZnVuY3Rpb24gZm9ybWF0RGVwZW5kZW5jeShkKSB7XG4gICAgcmV0dXJuIElOREVOVEFUSU9OICsgZC5rZXkgKyBcIjogXCIgKyBkLnNlbGVjdG9yO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKGZhaWx1cmUpIHtcbiAgICBzd2l0Y2ggKGZhaWx1cmUucmVzdWx0LnJlYXNvbikge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZXNlIGRlcGVuZGVuY2llcyB3ZXJlIG5vdCBmb3VuZDpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIHVubGluZXMoZmFpbHVyZS5yZXN1bHQuZGVwZW5kZW5jaWVzLm1hcChmb3JtYXREZXBlbmRlbmN5KSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHVubGluZXMoW1xuICAgICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIGZhaWxlZCB3aXRoIHRoaXMgZXJyb3I6YCxcbiAgICAgICAgICAgICAgICBgYCxcbiAgICAgICAgICAgICAgICBmYWlsdXJlLnJlc3VsdC5tZXNzYWdlLFxuICAgICAgICAgICAgXSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmVEZXNjcmliZXIoY29udGV4dCkge1xuICAgIHJldHVybiBmYWlsdXJlID0+IHVubGluZXMoW1xuICAgICAgICBgQ291bGQgbm90ICR7ZmFpbHVyZS5vcGVyYXRpb24uZGVzY3JpcHRpb259IG9uIHRoaXMgcGFnZTpgLFxuICAgICAgICBgYCxcbiAgICAgICAgSU5ERU5UQVRJT04gKyBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBgYCxcbiAgICAgICAgZXhwbGFuYXRpb24oZmFpbHVyZSkudHJpbSgpLFxuICAgICAgICBgYCxcbiAgICAgICAgYFRoaXMgcHJvYmxlbSBtaWdodCBiZSBjYXVzZWQgYnkgJHtjb250ZXh0LnNpdGVOYW1lfSBjaGFuZ2luZyBpdHMgY29udGVudC9zdHJ1Y3R1cmUsIGluIHdoaWNoIGNhc2UgJHtjb250ZXh0LmV4dGVuc2lvbk5hbWV9IG5lZWRzIHRvIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIE90aGVyd2lzZSwgaXQncyBwcm9iYWJseSBhIGJ1ZyBpbiAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0uYCxcbiAgICAgICAgYGAsXG4gICAgICAgIGBJZiB5b3UgZmlsZSBhIGJ1ZyByZXBvcnQsIHBsZWFzZSBpbmNsdWRlIHRoaXMgbWVzc2FnZS5gLFxuICAgIF0pO1xufVxuIiwiaW1wb3J0ICogYXMgZW52aXJvbm1lbnQgZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcbmltcG9ydCAqIGFzIGVycm9ycyBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgcHJlZmVyZW5jZXMgZnJvbSBcIi4vcHJlZmVyZW5jZXNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgKiBhcyB1c2Vyc2NyaXB0ZXIgZnJvbSBcIi4vdXNlcnNjcmlwdGVyXCI7XG5leHBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIG9wZXJhdGlvbnMsIHByZWZlcmVuY2VzLCBzdHlsZXNoZWV0cywgdXNlcnNjcmlwdGVyLCB9O1xuIiwibGV0IHByZWZpeCA9IFwiXCI7XG5sZXQgbG9nZ2VyID0gY29uc29sZTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcmVmaXgocCkge1xuICAgIHByZWZpeCA9IHA7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nZ2VyKGwpIHtcbiAgICBsb2dnZXIgPSBsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBsb2dnZXIubG9nKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbmZvKHN0cikge1xuICAgIGxvZ2dlci5pbmZvKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKHN0cikge1xuICAgIGxvZ2dlci53YXJuKHByZWZpeCwgc3RyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdHIpIHtcbiAgICBsb2dnZXIuZXJyb3IocHJlZml4LCBzdHIpO1xufVxuIiwiaW1wb3J0IHsgaXNOdWxsLCBpc051bWJlciwgaXNTdHJpbmcgfSBmcm9tIFwidHMtdHlwZS1ndWFyZHNcIjtcbmNvbnN0IFNVQ0NFU1MgPSB1bmRlZmluZWQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlcmF0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gc3BlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGxhbikge1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2Uob3BlcmF0aW9ucywgZmFpbHVyZXMsIHRyaWVzTGVmdCkge1xuICAgICAgICBjb25zdCBsYXN0VHJ5ID0gaXNOdW1iZXIodHJpZXNMZWZ0KSAmJiB0cmllc0xlZnQgPD0gMDtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1RvUnVuTm93ID0gW107XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IFtdO1xuICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFJ1bk5vdyA9IG8uZGVmZXJVbnRpbCA9PT0gdW5kZWZpbmVkIHx8IG8uZGVmZXJVbnRpbChyZWFkeVN0YXRlKTtcbiAgICAgICAgICAgIChzaG91bGRSdW5Ob3cgPyBvcGVyYXRpb25zVG9SdW5Ob3cgOiByZW1haW5pbmcpLnB1c2gobyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvIG9mIG9wZXJhdGlvbnNUb1J1bk5vdykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5VG9QZXJmb3JtKG8pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gU1VDQ0VTUykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0LnJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VHJ5ID8gZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pIDogcmVtYWluaW5nLnB1c2gobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbHVyZXMucHVzaCh7IHJlc3VsdCwgb3BlcmF0aW9uOiBvIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1haW5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZWN1cnNlKHJlbWFpbmluZywgZmFpbHVyZXMsIChpc051bWJlcih0cmllc0xlZnQpXG4gICAgICAgICAgICAgICAgPyB0cmllc0xlZnQgLSAxXG4gICAgICAgICAgICAgICAgOiBwbGFuLnRyeVVudGlsKHJlYWR5U3RhdGUpID8gcGxhbi5leHRyYVRyaWVzIDogdW5kZWZpbmVkKSksIHBsYW4uaW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZhaWx1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBsYW4uaGFuZGxlRmFpbHVyZXMoZmFpbHVyZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UocGxhbi5vcGVyYXRpb25zLmZpbHRlcihvID0+IG8uY29uZGl0aW9uKHdpbmRvdykpLCBbXSk7XG59XG5mdW5jdGlvbiB0cnlUb1BlcmZvcm0obykge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG8uZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQgPyB7fSA6IG8uZGVwZW5kZW5jaWVzO1xuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0cyA9IE9iamVjdC5lbnRyaWVzKGRlcGVuZGVuY2llcykubWFwKChba2V5LCBzZWxlY3Rvcl0pID0+ICh7XG4gICAgICAgIGtleSwgc2VsZWN0b3IsXG4gICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgIH0pKTtcbiAgICBjb25zdCBtaXNzaW5nRGVwZW5kZW5jaWVzID0gcXVlcnlSZXN1bHRzLmZpbHRlcih4ID0+IGlzTnVsbCh4LmVsZW1lbnQpKTtcbiAgICBpZiAobWlzc2luZ0RlcGVuZGVuY2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlYXNvbjogMCwgZGVwZW5kZW5jaWVzOiBtaXNzaW5nRGVwZW5kZW5jaWVzIH07XG4gICAgfVxuICAgIGNvbnN0IGUgPSBxdWVyeVJlc3VsdHMucmVkdWNlKChhY2MsIHgpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY2MsIHgua2V5LCB7IHZhbHVlOiB4LmVsZW1lbnQgfSksIHt9KTtcbiAgICByZXR1cm4gZnJvbUFjdGlvblJlc3VsdChvLmFjdGlvbihlKSk7XG59XG5mdW5jdGlvbiBmcm9tQWN0aW9uUmVzdWx0KHIpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcocikgPyB7IHJlYXNvbjogMSwgbWVzc2FnZTogciB9IDogU1VDQ0VTUztcbn1cbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpcHRhYmxlKGhhbmRsZXIpIHtcbiAgICBjb25zdCBjaGFuZ2VMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7IH0sXG4gICAgICAgIHVuc3Vic2NyaWJlOiAobGlzdGVuZXIpID0+IHsgY2hhbmdlTGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7IH0sXG4gICAgICAgIGhhbmRsZXI6IChzdW1tYXJ5LCBwcmVmZXJlbmNlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZiA9PiBmKHN1bW1hcnkucHJlZmVyZW5jZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoc3VtbWFyeSwgcHJlZmVyZW5jZXMpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nZ2luZ1Jlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gc3VtbWFyeS5yZXNwb25zZTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nICgke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnNhdmVkKX0pIHdhcyBpbnZhbGlkLiBSZXBsYWNpbmcgaXQgd2l0aCAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0uYCk7XG4gICAgICAgICAgICAgICAgcHJlZmVyZW5jZXMuc2V0KHN1bW1hcnkucHJlZmVyZW5jZSwgcmVzcG9uc2UudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcInNldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYENvdWxkIG5vdCBzZXQgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGl0IHdhcyBpbnZhbGlkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwiZ2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgVGhlIHNhdmVkIHZhbHVlIGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBoYWQgdGhlIHdyb25nIHR5cGUuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGNvdWxkIG5vdCBiZSBwYXJzZWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHN3aXRjaCAoc3VtbWFyeS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ291bGQgbm90IHJlYWQgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLiBVc2luZyB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucHJlZmVyZW5jZS5kZWZhdWx0KX0uYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3Qgc2F2ZSB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHN1bW1hcnkucmVzcG9uc2UudmFsdWUpfSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgYmVjYXVzZSBsb2NhbFN0b3JhZ2UgY291bGQgbm90IGJlIGFjY2Vzc2VkLmApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBhc3NlcnRVbnJlYWNoYWJsZShzdW1tYXJ5LmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYXNzZXJ0VW5yZWFjaGFibGUocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9vcFJlc3BvbnNlSGFuZGxlcihzdW1tYXJ5LCBfKSB7XG4gICAgcmV0dXJuIHN1bW1hcnkucmVzcG9uc2U7XG59XG5mdW5jdGlvbiBhc3NlcnRVbnJlYWNoYWJsZSh4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0VW5yZWFjaGFibGU6IFwiICsgeCk7XG59XG4iLCJjb25zdCBNQVRDSF9BTEwgPSBcImFsbFwiO1xuY29uc3QgTUFUQ0hfTk9ORSA9IFwibm90IGFsbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2hlZXQoc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydChzdHlsZXNoZWV0cykge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlc2hlZXRzKS5mb3JFYWNoKChbXywgc2hlZXRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBpZiAoc2hlZXQuaWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHN0eWxlLmlkID0gc2hlZXQuaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc2hlZXQuY3NzO1xuICAgICAgICBzdHlsZS5tZWRpYSA9IHNoZWV0LmNvbmRpdGlvbih3aW5kb3cpID8gTUFUQ0hfQUxMIDogTUFUQ0hfTk9ORTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5jb25zdCBzZXRNZWRpYVF1ZXJ5ID0gKG0pID0+IChzKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMuaWQpO1xuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBlbmFibGUgPSBzZXRNZWRpYVF1ZXJ5KE1BVENIX0FMTCk7XG5leHBvcnQgY29uc3QgZGlzYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfTk9ORSk7XG4iLCJpbXBvcnQgKiBhcyBsb2cgZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gXCIuL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHN0eWxlc2hlZXRzIGZyb20gXCIuL3N0eWxlc2hlZXRzXCI7XG5leHBvcnQgZnVuY3Rpb24gcnVuKHVzZXJzY3JpcHQpIHtcbiAgICBsb2cuc2V0UHJlZml4KGBbJHt1c2Vyc2NyaXB0Lm5hbWV9XWApO1xuICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUodXNlcnNjcmlwdC5pZCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgbG9nLndhcm5pbmcoYEl0IGxvb2tzIGFzIHRob3VnaCAke3VzZXJzY3JpcHQubmFtZX0gaGFzIGFscmVhZHkgcnVuIChiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgXCIke2F0dHJ9XCIgd2FzIGZvdW5kIG9uIDxoZWFkPikuIFN0b3BwaW5nLmApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBcIlwiKTtcbiAgICAgICAgdXNlcnNjcmlwdC5pbml0aWFsQWN0aW9uKCk7XG4gICAgICAgIHN0eWxlc2hlZXRzLmluc2VydCh1c2Vyc2NyaXB0LnN0eWxlc2hlZXRzKTtcbiAgICAgICAgb3BlcmF0aW9ucy5ydW4odXNlcnNjcmlwdC5vcGVyYXRpb25zUGxhbik7XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGlkKSB7XG4gICAgcmV0dXJuIFwiZGF0YS1cIiArIGlkICsgXCItaGFzLXJ1blwiO1xufVxuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5leHBvcnQgY29uc3QgT1BFUkFUSU9OU19JTlRFUlZBTCA9IDIwMDsgLy8gbXNcbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0VYVFJBX1RSSUVTID0gMztcbiIsImNvbnN0IGFyciA9IEFycmF5LmZyb207XG5cbmNvbnN0IGV4dHJhY3RMaW5rZWRUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB0bXBOb2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgYXJyKHRtcE5vZGUucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goXG4gICAgICAgIChlbCkgPT4gKGVsLmlubmVyVGV4dCA9IGBbJHtlbC5pbm5lclRleHR9XSgke2VsLmhyZWZ9KWApXG4gICAgKTtcbiAgICByZXR1cm4gdG1wTm9kZS5pbm5lclRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYWJsZUFzSnNvbih0YWJsZTogSFRNTFRhYmxlRWxlbWVudCk6IG9iamVjdCB7XG4gICAgLy8gSWRlYWxseSBmaXJzdCBjaGVjayBpZiB0YWJsZSBpcyBcInJlZ3VsYXJcIiBha2EgaGFzIGVxdWFsIG51bWJlciBvZiB0aCB0byB0ZC90clxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKHRhYmxlLnRIZWFkICE9PSBudWxsKSB7XG4gICAgICAgIGtleXMgPSBhcnIodGFibGUudEhlYWQucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgZXh0cmFjdExpbmtlZFRleHQoZWwpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5mbGF0TWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2VHZm1UYWJsZSh0YWJsZTogSFRNTFRhYmxlRWxlbWVudCkge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGtleXMgPSBhcnIodGFibGUucXVlcnlTZWxlY3RvckFsbChcInRoXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICApO1xuICAgIHJldHVybiBhcnIodGFibGUudEJvZGllcykubWFwKChlbCkgPT5cbiAgICAgICAgYXJyKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKSkubWFwKCh0YWJsZVJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YUNlbGxzID0gYXJyKHRhYmxlUm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZGF0YUNlbGxzLmxlbmd0aCAhPT0ga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb3VuZCBhIHJvdyB3aXRoIGEgbWlzbWF0Y2hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUNlbGxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWJsZVJvdywgZGF0YUtleSwgaWR4KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgW2RhdGFLZXldOiBkYXRhQ2VsbHNbaWR4XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGh0bWxUcmVlU2VsZWN0aW9uKCk6IFByb21pc2U8SFRNTEVsZW1lbnQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgLy8gVE9ETyBJIHNob3VsZCBjaGFuZ2UgdGhpcywgaGVscGVyIGxpYiBzaG91bGRuJ3QgbGltaXQgY29uc3VtZXIgdG8gZG9jdW1lbnQgZW5kXG4gICAgLy8gTm8gbmVlZCB0byB3YWl0IGZvciBhICdET01Db250ZW50TG9hZGVkJyBldmVudCBzaW5jZSB0aGUgbWFuaWZlc3RcbiAgICAvLyBzcGVjaWZpZXM6XG4gICAgLy9cbiAgICAvLyAgIFwicnVuX2F0XCI6IFwiZG9jdW1lbnRfZW5kXCJcbiAgICAvL1xuXG4gICAgLy8gVE9ETyBzZWxlY3QgdmlhIGtleWJvYXJkP1xuICAgIGxldCBjbGlja2FibGUgPSBbXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJ1dHRvblwiKSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcm9sZT1idXR0b25dXCIpLFxuICAgIF07XG4gICAgY29uc3QgaWZyYW1lT3ZlcmxheXM6IHtcbiAgICAgIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgICBvdmVybGF5OiBIVE1MRGl2RWxlbWVudDtcbiAgICB9W10gPSBbXTtcblxuICAgIGxldCBsYXN0RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIGxldCBzaG91bGRDbGVhckFsbCA9IGZhbHNlO1xuXG4gICAgbGV0IG92ZXJIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsYXN0RWxlbWVudCA9IHRhcmdldDtcblxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheVwiKSkge1xuICAgICAgICBpZiAodGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgICBsZXQgaWZyYW1lID1cbiAgICAgICAgICAgIGlmcmFtZU92ZXJsYXlzW3BhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCldLmlmcmFtZTtcbiAgICAgICAgICBpZnJhbWUuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiZmFpbGVkIHRvIGZpbmQgaWZyYW1lXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICBsZXQgb3V0SGFuZGxlciA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoc2hvdWxkQ2xlYXJBbGwpIHtcbiAgICAgICAgY2xlYXJDdXJyZW50U2VsZWN0aW9uKCk7XG4gICAgICAgIHNob3VsZENsZWFyQWxsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBsZXQgY2xpY2tIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBkaXNhYmxlKCk7XG5cbiAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheVwiKSkge1xuICAgICAgICBpZiAodGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgICAgICB0YXJnZXQgPSBpZnJhbWVPdmVybGF5c1twYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApXS5pZnJhbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwibWF5YmUgZmFpbGVkIHRvIGZpbmQgaWZyYW1lP1wiLCB0YXJnZXQsIGlmcmFtZU92ZXJsYXlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXNvbHZlKHRhcmdldCk7XG4gICAgfTtcblxuICAgIGxldCBkaXNhYmxlID0gKCkgPT4ge1xuICAgICAgY2xpY2thYmxlLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY1tpXS5vbmNsaWNrQmFja3VwKTtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgZGVsZXRlIGNbaV0ub25jbGlja0JhY2t1cDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmcmFtZU92ZXJsYXlzLmZvckVhY2goKG8pID0+IG8ub3ZlcmxheS5yZW1vdmUoKSk7XG5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3JcIik7XG5cbiAgICAgIC8vIGNsZWFuIGFueSBvcnBoYW5lZCBob3ZlciBhcHBsaWVkIGNsYXNzXG4gICAgICBsZXQgb3JwaGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odG1sLXRyZWUtc2VsZWN0aW9uXCIpO1xuICAgICAgaWYgKG9ycGhhbiAhPT0gbnVsbCkge1xuICAgICAgICBvcnBoYW4uY2xhc3NMaXN0LnJlbW92ZShcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb3ZlckhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG91dEhhbmRsZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyLCB0cnVlKTtcblxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0Tm9kZSA9IChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW92ZXJcIiwgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9O1xuICAgIGNvbnN0IHVuc2VsZWN0Tm9kZSA9IChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJtb3VzZW91dFwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXJDdXJyZW50U2VsZWN0aW9uID0gKCkgPT4ge1xuICAgICAgY2xpY2thYmxlLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdW5zZWxlY3ROb2RlKGNbaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQgPSAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNob3VsZENsZWFyQWxsID0gdHJ1ZTtcbiAgICAgIGNsZWFyQ3VycmVudFNlbGVjdGlvbigpO1xuICAgICAgc2VsZWN0Tm9kZShlbCk7XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9QYXJlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBsYXN0RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50KHBhcmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9DaGlsZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gbGFzdEVsZW1lbnQuY2hpbGRyZW4gJiYgbGFzdEVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgbW92ZVNlbGVjdGlvblRvRWxlbWVudChjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9OZXh0U2libGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNpYmxpbmcgPSBsYXN0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoc2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50KHNpYmxpbmcpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbW92ZVNlbGVjdGlvblRvUHJldlNpYmxpbmcgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaWJsaW5nID0gbGFzdEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgIGlmIChzaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoc2libGluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxldCBrZXlIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGggPSB7XG4gICAgICAgIEVzY2FwZTogZGlzYWJsZSxcbiAgICAgICAgQXJyb3dMZWZ0OiBtb3ZlU2VsZWN0aW9uVG9QYXJlbnQsXG4gICAgICAgIEFycm93UmlnaHQ6IG1vdmVTZWxlY3Rpb25Ub0NoaWxkLFxuICAgICAgICBBcnJvd1VwOiBtb3ZlU2VsZWN0aW9uVG9OZXh0U2libGluZyxcbiAgICAgICAgQXJyb3dEb3duOiBtb3ZlU2VsZWN0aW9uVG9QcmV2U2libGluZyxcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmRlYnVnKGUua2V5KTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBoW2Uua2V5XTtcbiAgICAgIGhhbmRsZXIgJiYgaGFuZGxlcigpO1xuICAgIH07XG5cbiAgICBsZXQgdXBkYXRlT3ZlcmxheVBvc2l0aW9ucyA9IChfZTogRXZlbnQpID0+IHtcbiAgICAgIGlmcmFtZU92ZXJsYXlzLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgbGV0IGlmcmFtZSA9IG8uaWZyYW1lO1xuICAgICAgICBsZXQgaWZyYW1lQ2xpZW50UmVjdCA9IGlmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBvLm92ZXJsYXk7XG4gICAgICAgIGxldCBvZmZzZXRYID0gaWZyYW1lQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICAgIGxldCBvZmZzZXRZID0gaWZyYW1lQ2xpZW50UmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IGAke29mZnNldFl9cHhgO1xuICAgICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBlbmFibGVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcblxuICAgIC8vIG92ZXJyaWRlIGNsaWNrIGhhbmRsZXJzIG9uIGFueSBjbGlja2FibGUgZWxlbWVudFxuICAgIGNsaWNrYWJsZS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjW2ldLm9uY2xpY2tCYWNrdXAgPSBjW2ldLm9uY2xpY2s7XG4gICAgICAgIGNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgaWZyYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpZnJhbWVcIik7XG5cbiAgICBpZnJhbWVzLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBpZnJhbWVDbGllbnRSZWN0ID0gaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGxldCBvZmZzZXRYID0gaWZyYW1lQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICBsZXQgb2Zmc2V0WSA9IGlmcmFtZUNsaWVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb24tb3ZlcmxheVwiKTtcbiAgICAgIG92ZXJsYXkuc3R5bGUudG9wID0gYCR7b2Zmc2V0WX1weGA7XG4gICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBgJHtvZmZzZXRYfXB4YDtcbiAgICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBgJHtpZnJhbWVDbGllbnRSZWN0LndpZHRofXB4YDtcbiAgICAgIG92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gYCR7aWZyYW1lQ2xpZW50UmVjdC5oZWlnaHR9cHhgO1xuXG4gICAgICBvdmVybGF5LmRhdGFzZXQuaW5kZXggPSBgJHtpZnJhbWVPdmVybGF5cy5sZW5ndGh9YDtcblxuICAgICAgaWZyYW1lT3ZlcmxheXMucHVzaCh7XG4gICAgICAgIGlmcmFtZTogaSxcbiAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJodG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvclwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG92ZXJIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb3V0SGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5SGFuZGxlciwgdHJ1ZSk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFkZFRvQ2xpcGJvYXJkID0gKGNvbnRlbnQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IFwiY2xpcGJvYXJkLXdyaXRlXCIgYXMgUGVybWlzc2lvbk5hbWU7XG4gIHJldHVybiBuYXZpZ2F0b3IucGVybWlzc2lvbnNcbiAgICAucXVlcnkoeyBuYW1lOiBwZXJtaXNzaW9uTmFtZSB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT0gXCJncmFudGVkXCIgfHwgcmVzdWx0LnN0YXRlID09IFwicHJvbXB0XCIpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbnRlbnQpLnRoZW4oKCkgPT4ge30pO1xuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIFwiUGVybWlzc2lvbiBmb3IgY2xpcGJvYXJkLXdyaXRlIHdhcyBub3Qgb2J0YWluZWQgXCIgKyByZXN1bHQuc3RhdGVcbiAgICAgICk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZWxlbTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgY29uc3Qgc2libGluZ3MgPSBbXTtcbiAgbGV0IHNpYmxpbmcgPSBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIGlmICghc2libGluZykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuICAgICAgc2libGluZ3MucHVzaChzaWJsaW5nIGFzIEhUTUxFbGVtZW50KTtcbiAgICB9XG4gICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIHNpYmxpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGFwcGVuZEJ0blRvRWxlbWVudHMgPSA8WiBleHRlbmRzIEhUTUxFbGVtZW50PihcbiAgZWxlbWVudHM6IE5vZGVMaXN0T2Y8Wj4sXG4gIGNsaWNrSGFuZGxlcjogKGU6IFosIGE6IEV2ZW50KSA9PiB2b2lkLFxuICBtb2RpZnlCdG46IChiOiBIVE1MRWxlbWVudCkgPT4gdm9pZFxuKTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGNvZGVCbG9jaykgPT4ge1xuICAgIGNvZGVCbG9jay5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3QtdGFyZ2V0XCIpO1xuICAgIGNvZGVCbG9jay5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJqYWNrcy1kZXYtaGVscGVycy1vdXRlci13cmFwXCIgPiR7Y29kZUJsb2NrLmlubmVySFRNTH08L3NwYW4+YDtcbiAgICBjb25zdCBjb3B5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29weUJ0bi5jbGFzc0xpc3QuYWRkKFwiamFja3MtZGV2LWhlbHBlcnMtaW50ZXJhY3Qtd2lkZ2V0XCIpO1xuICAgIGNvcHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdG1wQ29kZUJsb2NrID0gY29kZUJsb2NrLmNsb25lTm9kZSh0cnVlKSBhcyBaO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0bXBDb2RlQmxvY2suY2hpbGRyZW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50ID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGlsZENvbXBvbmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXRcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgdG1wQ29kZUJsb2NrLnJlbW92ZUNoaWxkKGNoaWxkQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2xpY2tIYW5kbGVyKHRtcENvZGVCbG9jayBhcyBaLCBldmVudCk7XG4gICAgfSk7XG4gICAgbW9kaWZ5QnRuKGNvcHlCdG4pO1xuICAgIGNvZGVCbG9jay5hcHBlbmRDaGlsZChjb3B5QnRuKTtcbiAgICByZXR1cm4gY29weUJ0bjtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zdGFsbEVzTW9kdWxlKG1vZHVsZVVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibW9kdWxlXCIpO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwic3JjXCIsIG1vZHVsZVVybCk7XG4gIGNvbnN0IGhlYWQgPVxuICAgIGRvY3VtZW50LmhlYWQgfHxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0gfHxcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5sYXN0Q2hpbGQpO1xufVxuIiwiaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJAdHlwZWQvY29tcG9zZVwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQsIGVycm9ycywgbG9nLCB1c2Vyc2NyaXB0ZXIgfSBmcm9tIFwidXNlcnNjcmlwdGVyXCI7XG5cbmltcG9ydCAqIGFzIENPTkZJRyBmcm9tIFwifnNyYy9jb25maWdcIjtcbmltcG9ydCBPUEVSQVRJT05TIGZyb20gXCJ+c3JjL29wZXJhdGlvbnNcIjtcbmltcG9ydCAqIGFzIFNJVEUgZnJvbSBcIn5zcmMvc2l0ZVwiO1xuaW1wb3J0IFNUWUxFU0hFRVRTIGZyb20gXCJ+c3JjL3N0eWxlc2hlZXRzXCI7XG5pbXBvcnQgVSBmcm9tIFwifnNyYy91c2Vyc2NyaXB0XCI7XG5cbmNvbnN0IGRlc2NyaWJlRmFpbHVyZSA9IGVycm9ycy5mYWlsdXJlRGVzY3JpYmVyKHtcbiAgICBzaXRlTmFtZTogU0lURS5OQU1FLFxuICAgIGV4dGVuc2lvbk5hbWU6IFUubmFtZSxcbiAgICBsb2NhdGlvbjogZG9jdW1lbnQubG9jYXRpb24sXG59KTtcblxudXNlcnNjcmlwdGVyLnJ1bih7XG4gICAgaWQ6IFUuaWQsXG4gICAgbmFtZTogVS5uYW1lLFxuICAgIGluaXRpYWxBY3Rpb246ICgpID0+IGxvZy5sb2coYCR7VS5uYW1lfSAke1UudmVyc2lvbn1gKSxcbiAgICBzdHlsZXNoZWV0czogU1RZTEVTSEVFVFMsXG4gICAgb3BlcmF0aW9uc1BsYW46IHtcbiAgICAgICAgb3BlcmF0aW9uczogT1BFUkFUSU9OUyxcbiAgICAgICAgaW50ZXJ2YWw6IENPTkZJRy5PUEVSQVRJT05TX0lOVEVSVkFMLFxuICAgICAgICB0cnlVbnRpbDogZW52aXJvbm1lbnQuRE9NQ09OVEVOVExPQURFRCxcbiAgICAgICAgZXh0cmFUcmllczogQ09ORklHLk9QRVJBVElPTlNfRVhUUkFfVFJJRVMsXG4gICAgICAgIGhhbmRsZUZhaWx1cmVzOiBmYWlsdXJlcyA9PiBmYWlsdXJlcy5mb3JFYWNoKGNvbXBvc2UobG9nLmVycm9yLCBkZXNjcmliZUZhaWx1cmUpKSxcbiAgICB9LFxufSk7XG4iLCJpbXBvcnQgcGFyc2VHaXRVcmwgZnJvbSBcImdpdC11cmwtcGFyc2VcIjtcbmltcG9ydCB7IEFMV0FZUyB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBkZWVwRW50cmllcywgZGVsaW1pdEVudHJ5IH0gZnJvbSBcImRlZXAtZW50cmllc1wiO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBvcGVyYXRpb24gfSBmcm9tIFwidXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgeyBhZGRUb0NsaXBib2FyZCB9IGZyb20gXCIuL2hlbHBlcnMvdXRpbHNcIjtcbmltcG9ydCB7IGV4dHJhY3RUYWJsZUFzSnNvbiB9IGZyb20gXCIuL2hlbHBlcnMvZXh0cmFjdFRhYmxlSW5mb1wiO1xuaW1wb3J0IHsgaHRtbFRyZWVTZWxlY3Rpb24gfSBmcm9tIFwiLi9oZWxwZXJzL2h0bWxUcmVlU2VsZWN0aW9uXCI7XG5cbmNvbnN0IE9QRVJBVElPTlM6IFJlYWRvbmx5QXJyYXk8T3BlcmF0aW9uPGFueT4+ID0gW1xuICBvcGVyYXRpb24oe1xuICAgIGRlc2NyaXB0aW9uOiBcIkhhY2t5IGF1dG9tYXRlIHBhZ2UgaW50ZXJhY3Rpb25cIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICBjb25zdCBhdXRvRXZhbFN0ciA9IHVybFBhcmFtcy5nZXQoXCJoYWNreURhbmdlclNjcmlwdFwiKTtcbiAgICAgIGlmIChhdXRvRXZhbFN0ciA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgY29uc3QgYXV0b0V2YWxDbWQgPSBhdG9iKGF1dG9FdmFsU3RyKTtcbiAgICAgIGV2YWwoYXV0b0V2YWxDbWQpO1xuICAgIH0sXG4gIH0pLFxuICBvcGVyYXRpb24oe1xuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgcGFyc2UgZ2l0aHViIHVybFwiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgd2luZG93LnBhcnNlR2l0VXJsID0gcGFyc2VHaXRVcmw7XG4gICAgfSxcbiAgfSksXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIHN1cmZpbmdrZXlzXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuaHRtbFRyZWVTZWxlY3Rpb24gPSBodG1sVHJlZVNlbGVjdGlvbjtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIGhlbHBlciBmdW5jcyBmb3IgZGV2IGNvbnNvbGVcIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmRLZXlEZWVwID0gKG9iajogb2JqZWN0LCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBmbGF0T2JqID0gZGVlcEVudHJpZXMob2JqLCBkZWxpbWl0RW50cnkpO1xuICAgICAgICByZXR1cm4gZmxhdE9iai5maWx0ZXIoKFtrLCBfdmFsdWVdOiBbc3RyaW5nLCB1bmtub3duXSkgPT5cbiAgICAgICAgICBrLmluY2x1ZGVzKHN0cilcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuZmluZEtleURlZXAgPSBmaW5kS2V5RGVlcDtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IHRhYmxlIGFzIGpzb24gdmlhIHJpZ2h0IGNsaWNrXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBsZXQgbWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiBjbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1heWJlVGFibGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghbWVudUFjdGl2ZSAmJiBtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkge1xuICAgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGVKc29uID0gZXh0cmFjdFRhYmxlQXNKc29uKG1heWJlVGFibGUpO1xuICAgICAgICAgICAgYWRkVG9DbGlwYm9hcmQoSlNPTi5zdHJpbmdpZnkodGFibGVKc29uLCBudWxsLCA0KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUFjdGl2ZSAmJiAhKG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSkge1xuICAgICAgICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChcIkNvcHkgdGhpcyB0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBPUEVSQVRJT05TO1xuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5pbXBvcnQgVSBmcm9tIFwiLi91c2Vyc2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQ09ERSA9IFwiY29kZVwiO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFN0eWxlc2hlZXRzLCBzdHlsZXNoZWV0IH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHNcIjtcblxuY29uc3QgU1RZTEVTSEVFVFMgPSB7XG4gIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGNzczogYFxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlci1vdXRlci13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldDpob3ZlciA+IC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQ6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgLFxuICB9KSxcbiAgaHRtbFRyZWVTZWxlY3Rpb25PdmVybGF5OiBzdHlsZXNoZWV0KHtcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBjc3M6IGBcbjpyb290IHtcbiAgLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsOiBcIlwiXG59XG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYSxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBpbnB1dCxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBzZWxlY3QsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYnV0dG9uLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGRpdltyb2xlPWJ1dHRvbl0ge1xuICBjdXJzb3I6IHZhcigtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmwpLCBjcm9zc2hhaXIgIWltcG9ydGFudDtcbn1cblxuLmh0bWwtdHJlZS1zZWxlY3Rpb24ge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IHJnYmEoMjU1LDAsMCwuNSk7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGJhY2tncm91bmQ6XG4gICAgbm8tcmVwZWF0IGNlbnRlci83MCUgdmFyKC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybCksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcbiAgICApO1xufVxuYCxcbiAgfSksXG59IGFzIGNvbnN0O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG5cbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxuY29uc3QgXzogU3R5bGVzaGVldHMgPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcblxuZXhwb3J0IGRlZmF1bHQgU1RZTEVTSEVFVFM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaWQ6IFwiamFja3MtZGV2LWhlbHBlcnNcIixcbiAgICBuYW1lOiBcIkphY2sncyBEZXYgSGVscGVyc1wiLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICBhdXRob3I6IFwiSmFjayBNY0Nvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb2RnZXBvZGdlIG9mIGRldiB1dGlsc1wiLFxuICAgIGhvc3RuYW1lOiBcIipcIixcbiAgICBuYW1lc3BhY2U6IFwiamFja21zY3JpcHRzXCIsXG4gICAgc2l0ZW5hbWU6IFwiZ29vZ2xlLmNvbVwiLFxuICAgIHJ1bkF0OiBcImRvY3VtZW50LWVuZFwiLFxufSBhcyBjb25zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=