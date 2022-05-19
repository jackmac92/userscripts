// ==UserScript==
// @name         Jack's Dev Helpers
// @version      0.1.0.2022.5.19.16.6
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
            if (!localStorage.getItem(`hackydanger-allowed-${autoEvalStr}`) &&
                confirm("Ok to run command?")) {
                localStorage.setItem(`hackydanger-allowed-${autoEvalStr}`, "surethisistottallysafe");
            }
            localStorage.getItem(`hackydanger-allowed-${autoEvalStr}`) &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0eXBlZC9jb21wb3NlL2xpYi5lczIwMTUvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR5cGVkL2NvbXBvc2UvbGliLmVzMjAxNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVjb2RlLXVyaS1jb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlZXAtZW50cmllcy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsdGVyLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVwL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2l0LXVybC1wYXJzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXNzaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmVzLXVubGluZXMvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS11cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhcnNlLXBhdGgvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZS11cmwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm90b2NvbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeS1zdHJpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NwbGl0LW9uLWZpcnN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9hcnJheS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzLXR5cGUtZ3VhcmRzL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90cy10eXBlLWd1YXJkcy9kaXN0L2lzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHMtdHlwZS1ndWFyZHMvZGlzdC9vbmx5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9lbnZpcm9ubWVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvZXJyb3JzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvbG9nLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9vcGVyYXRpb25zLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXNlcnNjcmlwdGVyL2xpYi9wcmVmZXJlbmNlcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91c2Vyc2NyaXB0ZXIvbGliL3VzZXJzY3JpcHRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9leHRyYWN0VGFibGVJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2h0bWxUcmVlU2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUMxQixpQzs7Ozs7Ozs7Ozs7O0FDRGE7QUFDYix1QkFBdUIsRUFBRTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztB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LEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7SUFDdEMsUUFBUSxFQUFFLEdBQUc7SUFDYixTQUFTLEVBQUUsY0FBYztJQUN6QixRQUFRLEVBQUUsWUFBWTtJQUN0QixLQUFLLEVBQUUsY0FBYztDQUNmLEVBQUMiLCJmaWxlIjoiamFja3MtZGV2LWhlbHBlcnMudXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gX2NvbXBvc2UxKGFyZ3VtZW50c1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIF9jb21wb3NlMihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIF9jb21wb3NlMyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gX2NvbXBvc2U0KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIGNhc2UgNTogcmV0dXJuIF9jb21wb3NlNShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XG4gICAgfVxuICAgIDtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlMShmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UxRm4oYSkge1xuICAgICAgICByZXR1cm4gZihhKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2UyKGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTJGbihhKSB7XG4gICAgICAgIHJldHVybiBnKGYoYSkpO1xuICAgIH07XG59XG5mdW5jdGlvbiBfY29tcG9zZTMoaCwgZywgZikge1xuICAgIHJldHVybiBmdW5jdGlvbiBjb21wb3NlM0ZuKGEpIHtcbiAgICAgICAgcmV0dXJuIGgoZyhmKGEpKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jb21wb3NlNChpLCBoLCBnLCBmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2UzRm4oYSkge1xuICAgICAgICByZXR1cm4gaShoKGcoZihhKSkpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NvbXBvc2U1KGosIGksIGgsIGcsIGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcG9zZTVGbihhKSB7XG4gICAgICAgIHJldHVybiBqKGkoaChnKGYoYSkpKSkpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NlLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9zZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG52YXIgdG9rZW4gPSAnJVthLWYwLTldezJ9JztcbnZhciBzaW5nbGVNYXRjaGVyID0gbmV3IFJlZ0V4cCh0b2tlbiwgJ2dpJyk7XG52YXIgbXVsdGlNYXRjaGVyID0gbmV3IFJlZ0V4cCgnKCcgKyB0b2tlbiArICcpKycsICdnaScpO1xuXG5mdW5jdGlvbiBkZWNvZGVDb21wb25lbnRzKGNvbXBvbmVudHMsIHNwbGl0KSB7XG5cdHRyeSB7XG5cdFx0Ly8gVHJ5IHRvIGRlY29kZSB0aGUgZW50aXJlIHN0cmluZyBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29tcG9uZW50cy5qb2luKCcnKSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIERvIG5vdGhpbmdcblx0fVxuXG5cdGlmIChjb21wb25lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0c3BsaXQgPSBzcGxpdCB8fCAxO1xuXG5cdC8vIFNwbGl0IHRoZSBhcnJheSBpbiAyIHBhcnRzXG5cdHZhciBsZWZ0ID0gY29tcG9uZW50cy5zbGljZSgwLCBzcGxpdCk7XG5cdHZhciByaWdodCA9IGNvbXBvbmVudHMuc2xpY2Uoc3BsaXQpO1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmNhbGwoW10sIGRlY29kZUNvbXBvbmVudHMobGVmdCksIGRlY29kZUNvbXBvbmVudHMocmlnaHQpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHZhciB0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbnB1dCA9IGRlY29kZUNvbXBvbmVudHModG9rZW5zLCBpKS5qb2luKCcnKTtcblxuXHRcdFx0dG9rZW5zID0gaW5wdXQubWF0Y2goc2luZ2xlTWF0Y2hlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChpbnB1dCkge1xuXHQvLyBLZWVwIHRyYWNrIG9mIGFsbCB0aGUgcmVwbGFjZW1lbnRzIGFuZCBwcmVmaWxsIHRoZSBtYXAgd2l0aCB0aGUgYEJPTWBcblx0dmFyIHJlcGxhY2VNYXAgPSB7XG5cdFx0JyVGRSVGRic6ICdcXHVGRkZEXFx1RkZGRCcsXG5cdFx0JyVGRiVGRSc6ICdcXHVGRkZEXFx1RkZGRCdcblx0fTtcblxuXHR2YXIgbWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdHdoaWxlIChtYXRjaCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBEZWNvZGUgYXMgYmlnIGNodW5rcyBhcyBwb3NzaWJsZVxuXHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbMF0pO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGRlY29kZShtYXRjaFswXSk7XG5cblx0XHRcdGlmIChyZXN1bHQgIT09IG1hdGNoWzBdKSB7XG5cdFx0XHRcdHJlcGxhY2VNYXBbbWF0Y2hbMF1dID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1hdGNoID0gbXVsdGlNYXRjaGVyLmV4ZWMoaW5wdXQpO1xuXHR9XG5cblx0Ly8gQWRkIGAlQzJgIGF0IHRoZSBlbmQgb2YgdGhlIG1hcCB0byBtYWtlIHN1cmUgaXQgZG9lcyBub3QgcmVwbGFjZSB0aGUgY29tYmluYXRvciBiZWZvcmUgZXZlcnl0aGluZyBlbHNlXG5cdHJlcGxhY2VNYXBbJyVDMiddID0gJ1xcdUZGRkQnO1xuXG5cdHZhciBlbnRyaWVzID0gT2JqZWN0LmtleXMocmVwbGFjZU1hcCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Ly8gUmVwbGFjZSBhbGwgZGVjb2RlZCBjb21wb25lbnRzXG5cdFx0dmFyIGtleSA9IGVudHJpZXNbaV07XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKG5ldyBSZWdFeHAoa2V5LCAnZycpLCByZXBsYWNlTWFwW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbmNvZGVkVVJJKSB7XG5cdGlmICh0eXBlb2YgZW5jb2RlZFVSSSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBgZW5jb2RlZFVSSWAgdG8gYmUgb2YgdHlwZSBgc3RyaW5nYCwgZ290IGAnICsgdHlwZW9mIGVuY29kZWRVUkkgKyAnYCcpO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRlbmNvZGVkVVJJID0gZW5jb2RlZFVSSS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcblxuXHRcdC8vIFRyeSB0aGUgYnVpbHQgaW4gZGVjb2RlciBmaXJzdFxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVSSSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIEZhbGxiYWNrIHRvIGEgbW9yZSBhZHZhbmNlZCBkZWNvZGVyXG5cdFx0cmV0dXJuIGN1c3RvbURlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fVxufTtcbiIsImNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuXG5jb25zdCBnZXRJbnRlcmZhY2UgPSB4ID0+IHtcblx0Y29uc3Qgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpO1xuXHRyZXR1cm4gc3RyLnN1YnN0cmluZyg4LCBzdHIubGVuZ3RoIC0gMSlcbn07XG5cbmNvbnN0IGlzT2JqZWN0TGlrZSA9IHggPT4ge1xuXHRjb25zdCB0YWcgPSBnZXRJbnRlcmZhY2UoeCk7XG5cdHN3aXRjaCAodGFnKSB7XG5cdFx0Y2FzZSAnU3RyaW5nJzpcblx0XHRjYXNlICdOdW1iZXInOlxuXHRcdGNhc2UgJ0Jvb2xlYW4nOlxuXHRcdGNhc2UgJ1JlZ0V4cCc6XG5cdFx0Y2FzZSAnRGF0ZSc6XG5cdFx0XHRyZXR1cm4gZmFsc2VcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZiAoeCA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRhZy5zdGFydHNXaXRoKCdIVE1MJykpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCdcblx0fVxufTtcblxuZnVuY3Rpb24qIGVudHJpZXNJdGVyYXRvcihpbnB1dCkge1xuXHRzd2l0Y2ggKGdldEludGVyZmFjZShpbnB1dCkpIHtcblx0XHRjYXNlICdBcnJheSc6XG5cdFx0Y2FzZSAnTWFwJzpcblx0XHRjYXNlICdVUkxTZWFyY2hQYXJhbXMnOlxuXHRcdFx0eWllbGQqIGlucHV0LmVudHJpZXMoKTtcblx0XHRcdGJyZWFrXG5cblx0XHRjYXNlICdTZXQnOlxuXHRcdGNhc2UgJ05vZGVMaXN0Jzpcblx0XHRjYXNlICdJbnQ4QXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQ4QXJyYXknOlxuXHRcdGNhc2UgJ1VpbnQ4Q2xhbXBlZEFycmF5Jzpcblx0XHRjYXNlICdJbnQxNkFycmF5Jzpcblx0XHRjYXNlICdVaW50MTZBcnJheSc6XG5cdFx0Y2FzZSAnSW50MzJBcnJheSc6XG5cdFx0Y2FzZSAnVWludDMyQXJyYXknOlxuXHRcdGNhc2UgJ0Zsb2F0MzJBcnJheSc6XG5cdFx0Y2FzZSAnRmxvYXQ2NEFycmF5Jzpcblx0XHRjYXNlICdCaWdJbnQ2NEFycmF5Jzpcblx0XHRjYXNlICdCaWdVaW50NjRBcnJheSc6XG5cdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRmb3IgKGxldCB2YWx1ZSBvZiBpbnB1dCkgeWllbGQgW2krKywgdmFsdWVdO1xuXHRcdFx0YnJlYWtcblxuXHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmIChpc09iamVjdExpa2UoaW5wdXQpKVxuXHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gaW5wdXQpXG5cdFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnB1dCwga2V5KSlcblx0XHRcdFx0XHRcdHlpZWxkIFtrZXksIGlucHV0W2tleV1dO1xuXHRcdFx0YnJlYWtcblx0fVxufVxuXG5mdW5jdGlvbiogZGVlcEVudHJpZXNJdGVyYXRvcl8oaW5wdXQsIG1hcEZuLCBwYXJlbnRDaXJjdWxhclNldCkge1xuXHRjb25zdCBtYXAgPSB0eXBlb2YgbWFwRm4gPT09ICdmdW5jdGlvbicgPyBtYXBGbiA6IGlkZW50aXR5O1xuXHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZW50cmllc0l0ZXJhdG9yKGlucHV0KSkge1xuXHRcdGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgZW50cnkgPSBtYXAoW2tleSwgdmFsdWVdKTtcblx0XHRcdGlmIChlbnRyeSAhPT0gdW5kZWZpbmVkKSB5aWVsZCBlbnRyeTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2lyY3VsYXJTZXQgPSBwYXJlbnRDaXJjdWxhclNldCB8fCBuZXcgV2Vha1NldCgpO1xuXHRcdFx0Y2lyY3VsYXJTZXQuYWRkKGlucHV0KTtcblxuXHRcdFx0aWYgKCFjaXJjdWxhclNldC5oYXModmFsdWUpKSB7XG5cdFx0XHRcdGZvciAobGV0IGVudHJpZXMgb2YgZGVlcEVudHJpZXNJdGVyYXRvcl8oXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0XHRcdGNpcmN1bGFyU2V0XG5cdFx0XHRcdCkpIHtcblx0XHRcdFx0XHRjb25zdCBlbnRyeSA9IG1hcChba2V5LCAuLi5lbnRyaWVzXSk7XG5cdFx0XHRcdFx0aWYgKGVudHJ5ICE9PSB1bmRlZmluZWQpIHlpZWxkIGVudHJ5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uKiBkZWVwRW50cmllc0l0ZXJhdG9yKGlucHV0LCBtYXBGbikge1xuXHR5aWVsZCogZGVlcEVudHJpZXNJdGVyYXRvcl8oaW5wdXQsIG1hcEZuKTtcbn1cblxuY29uc3QgZGVlcEVudHJpZXMgPSAoaW5wdXQsIG1hcEZuKSA9PlxuXHRBcnJheS5mcm9tKGRlZXBFbnRyaWVzSXRlcmF0b3IoaW5wdXQsIG1hcEZuKSk7XG5cbmNvbnN0IHJvdGF0ZUVudHJ5QnkgPSBuID0+IGVudHJ5ID0+IHtcblx0aWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHJldHVyblxuXHRjb25zdCBtb2QgPSAoLTEgKiAoTnVtYmVyKG4pIHx8IDApKSAlIGVudHJ5Lmxlbmd0aDtcblx0Y29uc3Qga2V5cyA9IGVudHJ5LnNsaWNlKDAsIG1vZCk7XG5cdGNvbnN0IHZhbHVlID0gZW50cnkuc2xpY2UobW9kKTtcblx0cmV0dXJuIFsuLi52YWx1ZSwgLi4ua2V5c11cbn07XG5cbmNvbnN0IHJvdGF0ZUVudHJ5ID0gcm90YXRlRW50cnlCeSgxKTtcblxuY29uc3QgZGVsaW1pdEVudHJ5QnkgPSBkZWxpbWl0ZXIgPT4gZW50cnkgPT4ge1xuXHRpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdGNvbnN0IFt2YWx1ZSwgLi4ua2V5c10gPSByb3RhdGVFbnRyeShlbnRyeSk7XG5cdHJldHVybiBba2V5cy5qb2luKGRlbGltaXRlciksIHZhbHVlXVxufTtcblxuY29uc3QgZGVsaW1pdEVudHJ5ID0gZGVsaW1pdEVudHJ5QnkoJy4nKTtcblxuZXhwb3J0IHsgZGVlcEVudHJpZXMsIGRlZXBFbnRyaWVzSXRlcmF0b3IsIGRlbGltaXRFbnRyeSwgZGVsaW1pdEVudHJ5QnksIHJvdGF0ZUVudHJ5LCByb3RhdGVFbnRyeUJ5IH07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSkge1xuXHR2YXIgcmV0ID0ge307XG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0dmFyIGlzQXJyID0gQXJyYXkuaXNBcnJheShwcmVkaWNhdGUpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBrZXkgPSBrZXlzW2ldO1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmIChpc0FyciA/IHByZWRpY2F0ZS5pbmRleE9mKGtleSkgIT09IC0xIDogcHJlZGljYXRlKGtleSwgdmFsLCBvYmopKSB7XG5cdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXNcblxudmFyIHBhcnNlVXJsID0gcmVxdWlyZShcInBhcnNlLXVybFwiKSxcbiAgICBpc1NzaCA9IHJlcXVpcmUoXCJpcy1zc2hcIik7XG5cbi8qKlxuICogZ2l0VXBcbiAqIFBhcnNlcyB0aGUgaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIGdpdFVwXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdXJsLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZpZWxkczpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHByb3RvY29sYCAoU3RyaW5nKTogVGhlIGdpdCB1cmwgcHJvdG9jb2wuXG4gKiAgLSBgdG9rZW5gIChTdHJpbmcpOiBUaGUgb2F1dGggdG9rZW4gKGNvdWxkIGFwcGVhciBpbiB0aGUgaHR0cHMgdXJscykuXG4gKi9cbmZ1bmN0aW9uIGdpdFVwKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IHBhcnNlVXJsKGlucHV0KTtcbiAgICBvdXRwdXQudG9rZW4gPSBcIlwiO1xuXG4gICAgdmFyIHNwbGl0cyA9IG91dHB1dC51c2VyLnNwbGl0KFwiOlwiKTtcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAoc3BsaXRzWzFdID09PSBcIngtb2F1dGgtYmFzaWNcIikge1xuICAgICAgICAgICAgb3V0cHV0LnRva2VuID0gc3BsaXRzWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHNwbGl0c1swXSA9PT0gXCJ4LXRva2VuLWF1dGhcIikge1xuICAgICAgICAgICAgb3V0cHV0LnRva2VuID0gc3BsaXRzWzFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzU3NoKG91dHB1dC5wcm90b2NvbHMpIHx8IGlzU3NoKGlucHV0KSkge1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcInNzaFwiO1xuICAgIH0gZWxzZSBpZiAob3V0cHV0LnByb3RvY29scy5sZW5ndGgpIHtcbiAgICAgICAgb3V0cHV0LnByb3RvY29sID0gb3V0cHV0LnByb3RvY29sc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQucHJvdG9jb2wgPSBcImZpbGVcIjtcbiAgICB9XG5cbiAgICBvdXRwdXQuaHJlZiA9IG91dHB1dC5ocmVmLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdpdFVwOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2l0VXAgPSByZXF1aXJlKFwiZ2l0LXVwXCIpO1xuXG4vKipcbiAqIGdpdFVybFBhcnNlXG4gKiBQYXJzZXMgYSBHaXQgdXJsLlxuICpcbiAqIEBuYW1lIGdpdFVybFBhcnNlXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIEdpdCB1cmwgdG8gcGFyc2UuXG4gKiBAcmV0dXJuIHtHaXRVcmx9IFRoZSBgR2l0VXJsYCBvYmplY3QgY29udGFpbmluZzpcbiAqXG4gKiAgLSBgcHJvdG9jb2xzYCAoQXJyYXkpOiBBbiBhcnJheSB3aXRoIHRoZSB1cmwgcHJvdG9jb2xzICh1c3VhbGx5IGl0IGhhcyBvbmUgZWxlbWVudCkuXG4gKiAgLSBgcG9ydGAgKG51bGx8TnVtYmVyKTogVGhlIGRvbWFpbiBwb3J0LlxuICogIC0gYHJlc291cmNlYCAoU3RyaW5nKTogVGhlIHVybCBkb21haW4gKGluY2x1ZGluZyBzdWJkb21haW5zKS5cbiAqICAtIGB1c2VyYCAoU3RyaW5nKTogVGhlIGF1dGhlbnRpY2F0aW9uIHVzZXIgKHVzdWFsbHkgZm9yIHNzaCB1cmxzKS5cbiAqICAtIGBwYXRobmFtZWAgKFN0cmluZyk6IFRoZSB1cmwgcGF0aG5hbWUuXG4gKiAgLSBgaGFzaGAgKFN0cmluZyk6IFRoZSB1cmwgaGFzaC5cbiAqICAtIGBzZWFyY2hgIChTdHJpbmcpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nIHZhbHVlLlxuICogIC0gYGhyZWZgIChTdHJpbmcpOiBUaGUgaW5wdXQgdXJsLlxuICogIC0gYHByb3RvY29sYCAoU3RyaW5nKTogVGhlIGdpdCB1cmwgcHJvdG9jb2wuXG4gKiAgLSBgdG9rZW5gIChTdHJpbmcpOiBUaGUgb2F1dGggdG9rZW4gKGNvdWxkIGFwcGVhciBpbiB0aGUgaHR0cHMgdXJscykuXG4gKiAgLSBgc291cmNlYCAoU3RyaW5nKTogVGhlIEdpdCBwcm92aWRlciAoZS5nLiBgXCJnaXRodWIuY29tXCJgKS5cbiAqICAtIGBvd25lcmAgKFN0cmluZyk6IFRoZSByZXBvc2l0b3J5IG93bmVyLlxuICogIC0gYG5hbWVgIChTdHJpbmcpOiBUaGUgcmVwb3NpdG9yeSBuYW1lLlxuICogIC0gYHJlZmAgKFN0cmluZyk6IFRoZSByZXBvc2l0b3J5IHJlZiAoZS5nLiwgXCJtYXN0ZXJcIiBvciBcImRldlwiKS5cbiAqICAtIGBmaWxlcGF0aGAgKFN0cmluZyk6IEEgZmlsZXBhdGggcmVsYXRpdmUgdG8gdGhlIHJlcG9zaXRvcnkgcm9vdC5cbiAqICAtIGBmaWxlcGF0aHR5cGVgIChTdHJpbmcpOiBUaGUgdHlwZSBvZiBmaWxlcGF0aCBpbiB0aGUgdXJsIChcImJsb2JcIiBvciBcInRyZWVcIikuXG4gKiAgLSBgZnVsbF9uYW1lYCAoU3RyaW5nKTogVGhlIG93bmVyIGFuZCBuYW1lIHZhbHVlcyBpbiB0aGUgYG93bmVyL25hbWVgIGZvcm1hdC5cbiAqICAtIGB0b1N0cmluZ2AgKEZ1bmN0aW9uKTogQSBmdW5jdGlvbiB0byBzdHJpbmdpZnkgdGhlIHBhcnNlZCB1cmwgaW50byBhbm90aGVyIHVybCB0eXBlLlxuICogIC0gYG9yZ2FuaXphdGlvbmAgKFN0cmluZyk6IFRoZSBvcmdhbml6YXRpb24gdGhlIG93bmVyIGJlbG9uZ3MgdG8uIFRoaXMgaXMgQ2xvdWRGb3JnZSBzcGVjaWZpYy5cbiAqICAtIGBnaXRfc3VmZml4YCAoQm9vbGVhbik6IFdoZXRoZXIgdG8gYWRkIHRoZSBgLmdpdGAgc3VmZml4IG9yIG5vdC5cbiAqXG4gKi9cbmZ1bmN0aW9uIGdpdFVybFBhcnNlKHVybCkge1xuXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHVybCBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgdXJsSW5mbyA9IGdpdFVwKHVybCksXG4gICAgICAgIHNvdXJjZVBhcnRzID0gdXJsSW5mby5yZXNvdXJjZS5zcGxpdChcIi5cIiksXG4gICAgICAgIHNwbGl0cyA9IG51bGw7XG5cbiAgICB1cmxJbmZvLnRvU3RyaW5nID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGdpdFVybFBhcnNlLnN0cmluZ2lmeSh0aGlzLCB0eXBlKTtcbiAgICB9O1xuXG4gICAgdXJsSW5mby5zb3VyY2UgPSBzb3VyY2VQYXJ0cy5sZW5ndGggPiAyID8gc291cmNlUGFydHMuc2xpY2UoMSAtIHNvdXJjZVBhcnRzLmxlbmd0aCkuam9pbihcIi5cIikgOiB1cmxJbmZvLnNvdXJjZSA9IHVybEluZm8ucmVzb3VyY2U7XG5cbiAgICAvLyBOb3RlOiBTb21lIGhvc3Rpbmcgc2VydmljZXMgKGUuZy4gVmlzdWFsIFN0dWRpbyBUZWFtIFNlcnZpY2VzKSBhbGxvdyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAvLyBpbiB0aGUgcmVwb3NpdG9yeSBhbmQgb3duZXIgbmFtZXMgc28gd2UgZGVjb2RlIHRoZSBVUkwgcGllY2VzIHRvIGdldCB0aGUgY29ycmVjdCByZXN1bHRcbiAgICB1cmxJbmZvLmdpdF9zdWZmaXggPSAvXFwuZ2l0JC8udGVzdCh1cmxJbmZvLnBhdGhuYW1lKTtcbiAgICB1cmxJbmZvLm5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQodXJsSW5mby5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnJlcGxhY2UoL1xcLmdpdCQvLCBcIlwiKSk7XG4gICAgdXJsSW5mby5vd25lciA9IGRlY29kZVVSSUNvbXBvbmVudCh1cmxJbmZvLnVzZXIpO1xuXG4gICAgc3dpdGNoICh1cmxJbmZvLnNvdXJjZSkge1xuICAgICAgICBjYXNlIFwiZ2l0LmNsb3VkZm9yZ2UuY29tXCI6XG4gICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gdXJsSW5mby51c2VyO1xuICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzb3VyY2VQYXJ0c1swXTtcbiAgICAgICAgICAgIHVybEluZm8uc291cmNlID0gXCJjbG91ZGZvcmdlLmNvbVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ2aXN1YWxzdHVkaW8uY29tXCI6XG4gICAgICAgICAgICAvLyBIYW5kbGUgVlNUUyBTU0ggVVJMc1xuICAgICAgICAgICAgaWYgKHVybEluZm8ucmVzb3VyY2UgPT09ICd2cy1zc2gudmlzdWFsc3R1ZGlvLmNvbScpIHtcbiAgICAgICAgICAgICAgICBzcGxpdHMgPSB1cmxJbmZvLm5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gc3BsaXRzWzJdICsgJy8nICsgc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gJ19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRzWzBdID09PSAnRGVmYXVsdENvbGxlY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3JnYW5pemF0aW9uICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSBzcGxpdHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3duZXIgPSBzcGxpdHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1szXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm9yZ2FuaXphdGlvbiArICcvJyArIHVybEluZm8ub3duZXIgKyAnL19naXQvJyArIHVybEluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gQXp1cmUgRGV2T3BzIChmb3JtZXJseSBWaXN1YWwgU3R1ZGlvIFRlYW0gU2VydmljZXMpXG4gICAgICAgIGNhc2UgXCJkZXYuYXp1cmUuY29tXCI6XG4gICAgICAgIGNhc2UgXCJhenVyZS5jb21cIjpcbiAgICAgICAgICAgIGlmICh1cmxJbmZvLnJlc291cmNlID09PSAnc3NoLmRldi5henVyZS5jb20nKSB7XG4gICAgICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRzID0gdXJsSW5mby5uYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5uYW1lID0gc3BsaXRzWzRdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9ICdfZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ubmFtZSA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0c1swXSA9PT0gJ0RlZmF1bHRDb2xsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm9yZ2FuaXphdGlvbiArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vd25lciArICcvX2dpdC8nICsgdXJsSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcGxpdHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gc3BsaXRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbM107XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZnVsbF9uYW1lID0gdXJsSW5mby5vcmdhbml6YXRpb24gKyAnLycgKyB1cmxJbmZvLm93bmVyICsgJy9fZ2l0LycgKyB1cmxJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cmxJbmZvLnF1ZXJ5ICYmIHVybEluZm8ucXVlcnlbJ3BhdGgnXSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRoID0gdXJsSW5mby5xdWVyeVsncGF0aCddLnJlcGxhY2UoL15cXC8rL2csICcnKTsgLy8gU3RyaXAgbGVhZGluZyBzbGFzaCAoLylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVybEluZm8ucXVlcnkgJiYgdXJsSW5mby5xdWVyeVsndmVyc2lvbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb249R0I8YnJhbmNoPlxuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLnJlZiA9IHVybEluZm8ucXVlcnlbJ3ZlcnNpb24nXS5yZXBsYWNlKC9eR0IvLCAnJyk7IC8vIHJlbW92ZSBHQlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwbGl0cyA9IHVybEluZm8ubmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICB2YXIgbmFtZUluZGV4ID0gc3BsaXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhc2hJbmRleCA9IHNwbGl0cy5pbmRleE9mKFwiLVwiLCAyKTtcbiAgICAgICAgICAgICAgICB2YXIgYmxvYkluZGV4ID0gc3BsaXRzLmluZGV4T2YoXCJibG9iXCIsIDIpO1xuICAgICAgICAgICAgICAgIHZhciB0cmVlSW5kZXggPSBzcGxpdHMuaW5kZXhPZihcInRyZWVcIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1pdEluZGV4ID0gc3BsaXRzLmluZGV4T2YoXCJjb21taXRcIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIHNyY0luZGV4ID0gc3BsaXRzLmluZGV4T2YoXCJzcmNcIiwgMik7XG4gICAgICAgICAgICAgICAgdmFyIHJhd0luZGV4ID0gc3BsaXRzLmluZGV4T2YoXCJyYXdcIiwgMik7XG4gICAgICAgICAgICAgICAgbmFtZUluZGV4ID0gZGFzaEluZGV4ID4gMCA/IGRhc2hJbmRleCAtIDEgOiBibG9iSW5kZXggPiAwID8gYmxvYkluZGV4IC0gMSA6IHRyZWVJbmRleCA+IDAgPyB0cmVlSW5kZXggLSAxIDogY29tbWl0SW5kZXggPiAwID8gY29tbWl0SW5kZXggLSAxIDogc3JjSW5kZXggPiAwID8gc3JjSW5kZXggLSAxIDogcmF3SW5kZXggPiAwID8gcmF3SW5kZXggLSAxIDogbmFtZUluZGV4O1xuXG4gICAgICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IHNwbGl0cy5zbGljZSgwLCBuYW1lSW5kZXgpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLm5hbWUgPSBzcGxpdHNbbmFtZUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWl0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsSW5mby5jb21taXQgPSBzcGxpdHNbbmFtZUluZGV4ICsgMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmxJbmZvLnJlZiA9IFwiXCI7XG4gICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRodHlwZSA9IFwiXCI7XG4gICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBvZmZzZXROYW1lSW5kZXggPSBzcGxpdHMubGVuZ3RoID4gbmFtZUluZGV4ICYmIHNwbGl0c1tuYW1lSW5kZXggKyAxXSA9PT0gXCItXCIgPyBuYW1lSW5kZXggKyAxIDogbmFtZUluZGV4O1xuICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiBvZmZzZXROYW1lSW5kZXggKyAyICYmIFtcInJhd1wiLCBcInNyY1wiLCBcImJsb2JcIiwgXCJ0cmVlXCJdLmluZGV4T2Yoc3BsaXRzW29mZnNldE5hbWVJbmRleCArIDFdKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdXJsSW5mby5maWxlcGF0aHR5cGUgPSBzcGxpdHNbb2Zmc2V0TmFtZUluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgdXJsSW5mby5yZWYgPSBzcGxpdHNbb2Zmc2V0TmFtZUluZGV4ICsgMl07XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGggPiBvZmZzZXROYW1lSW5kZXggKyAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGggPSBzcGxpdHMuc2xpY2Uob2Zmc2V0TmFtZUluZGV4ICsgMykuam9pbignLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybEluZm8ub3JnYW5pemF0aW9uID0gdXJsSW5mby5vd25lcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghdXJsSW5mby5mdWxsX25hbWUpIHtcbiAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgPSB1cmxJbmZvLm93bmVyO1xuICAgICAgICBpZiAodXJsSW5mby5uYW1lKSB7XG4gICAgICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSAmJiAodXJsSW5mby5mdWxsX25hbWUgKz0gXCIvXCIpO1xuICAgICAgICAgICAgdXJsSW5mby5mdWxsX25hbWUgKz0gdXJsSW5mby5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEJpdGJ1Y2tldCBTZXJ2ZXJcbiAgICBpZiAodXJsSW5mby5vd25lci5zdGFydHNXaXRoKFwic2NtL1wiKSkge1xuICAgICAgICB1cmxJbmZvLnNvdXJjZSA9IFwiYml0YnVja2V0LXNlcnZlclwiO1xuICAgICAgICB1cmxJbmZvLm93bmVyID0gdXJsSW5mby5vd25lci5yZXBsYWNlKFwic2NtL1wiLCBcIlwiKTtcbiAgICAgICAgdXJsSW5mby5vcmdhbml6YXRpb24gPSB1cmxJbmZvLm93bmVyO1xuICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXIgKyBcIi9cIiArIHVybEluZm8ubmFtZTtcbiAgICB9XG5cbiAgICB2YXIgYml0YnVja2V0ID0gLyhwcm9qZWN0c3x1c2VycylcXC8oLio/KVxcL3JlcG9zXFwvKC4qPykoKFxcLy4qJCl8JCkvO1xuICAgIHZhciBtYXRjaGVzID0gYml0YnVja2V0LmV4ZWModXJsSW5mby5wYXRobmFtZSk7XG4gICAgaWYgKG1hdGNoZXMgIT0gbnVsbCkge1xuICAgICAgICB1cmxJbmZvLnNvdXJjZSA9IFwiYml0YnVja2V0LXNlcnZlclwiO1xuICAgICAgICBpZiAobWF0Y2hlc1sxXSA9PT0gXCJ1c2Vyc1wiKSB7XG4gICAgICAgICAgICB1cmxJbmZvLm93bmVyID0gXCJ+XCIgKyBtYXRjaGVzWzJdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsSW5mby5vd25lciA9IG1hdGNoZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICB1cmxJbmZvLm9yZ2FuaXphdGlvbiA9IHVybEluZm8ub3duZXI7XG4gICAgICAgIHVybEluZm8ubmFtZSA9IG1hdGNoZXNbM107XG5cbiAgICAgICAgc3BsaXRzID0gbWF0Y2hlc1s0XS5zcGxpdChcIi9cIik7XG4gICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaWYgKFtcInJhd1wiLCBcImJyb3dzZVwiXS5pbmRleE9mKHNwbGl0c1sxXSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHVybEluZm8uZmlsZXBhdGh0eXBlID0gc3BsaXRzWzFdO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICB1cmxJbmZvLmZpbGVwYXRoID0gc3BsaXRzLnNsaWNlKDIpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0c1sxXSA9PT0gXCJjb21taXRzXCIgJiYgc3BsaXRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICB1cmxJbmZvLmNvbW1pdCA9IHNwbGl0c1syXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cmxJbmZvLmZ1bGxfbmFtZSA9IHVybEluZm8ub3duZXIgKyBcIi9cIiArIHVybEluZm8ubmFtZTtcblxuICAgICAgICBpZiAodXJsSW5mby5xdWVyeS5hdCkge1xuICAgICAgICAgICAgdXJsSW5mby5yZWYgPSB1cmxJbmZvLnF1ZXJ5LmF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsSW5mby5yZWYgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxJbmZvO1xufVxuXG4vKipcbiAqIHN0cmluZ2lmeVxuICogU3RyaW5naWZpZXMgYSBgR2l0VXJsYCBvYmplY3QuXG4gKlxuICogQG5hbWUgc3RyaW5naWZ5XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7R2l0VXJsfSBvYmogVGhlIHBhcnNlZCBHaXQgdXJsIG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBzdHJpbmdpZmllZCB1cmwgKGRlZmF1bHQgYG9iai5wcm90b2NvbGApLlxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgdXJsLlxuICovXG5naXRVcmxQYXJzZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgfHwgKG9iai5wcm90b2NvbHMgJiYgb2JqLnByb3RvY29scy5sZW5ndGggPyBvYmoucHJvdG9jb2xzLmpvaW4oJysnKSA6IG9iai5wcm90b2NvbCk7XG4gICAgdmFyIHBvcnQgPSBvYmoucG9ydCA/IFwiOlwiICsgb2JqLnBvcnQgOiAnJztcbiAgICB2YXIgdXNlciA9IG9iai51c2VyIHx8ICdnaXQnO1xuICAgIHZhciBtYXliZUdpdFN1ZmZpeCA9IG9iai5naXRfc3VmZml4ID8gXCIuZ2l0XCIgOiBcIlwiO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwic3NoXCI6XG4gICAgICAgICAgICBpZiAocG9ydCkgcmV0dXJuIFwic3NoOi8vXCIgKyB1c2VyICsgXCJAXCIgKyBvYmoucmVzb3VyY2UgKyBwb3J0ICsgXCIvXCIgKyBvYmouZnVsbF9uYW1lICsgbWF5YmVHaXRTdWZmaXg7ZWxzZSByZXR1cm4gdXNlciArIFwiQFwiICsgb2JqLnJlc291cmNlICsgXCI6XCIgKyBvYmouZnVsbF9uYW1lICsgbWF5YmVHaXRTdWZmaXg7XG4gICAgICAgIGNhc2UgXCJnaXQrc3NoXCI6XG4gICAgICAgIGNhc2UgXCJzc2grZ2l0XCI6XG4gICAgICAgIGNhc2UgXCJmdHBcIjpcbiAgICAgICAgY2FzZSBcImZ0cHNcIjpcbiAgICAgICAgICAgIHJldHVybiB0eXBlICsgXCI6Ly9cIiArIHVzZXIgKyBcIkBcIiArIG9iai5yZXNvdXJjZSArIHBvcnQgKyBcIi9cIiArIG9iai5mdWxsX25hbWUgKyBtYXliZUdpdFN1ZmZpeDtcbiAgICAgICAgY2FzZSBcImh0dHBcIjpcbiAgICAgICAgY2FzZSBcImh0dHBzXCI6XG4gICAgICAgICAgICB2YXIgYXV0aCA9IG9iai50b2tlbiA/IGJ1aWxkVG9rZW4ob2JqKSA6IG9iai51c2VyICYmIChvYmoucHJvdG9jb2xzLmluY2x1ZGVzKCdodHRwJykgfHwgb2JqLnByb3RvY29scy5pbmNsdWRlcygnaHR0cHMnKSkgPyBvYmoudXNlciArIFwiQFwiIDogXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0eXBlICsgXCI6Ly9cIiArIGF1dGggKyBvYmoucmVzb3VyY2UgKyBwb3J0ICsgXCIvXCIgKyBidWlsZFBhdGgob2JqKSArIG1heWJlR2l0U3VmZml4O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG9iai5ocmVmO1xuICAgIH1cbn07XG5cbi8qIVxuICogYnVpbGRUb2tlblxuICogQnVpbGRzIE9BdXRoIHRva2VuIHByZWZpeCAoaGVscGVyIGZ1bmN0aW9uKVxuICpcbiAqIEBuYW1lIGJ1aWxkVG9rZW5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtHaXRVcmx9IG9iaiBUaGUgcGFyc2VkIEdpdCB1cmwgb2JqZWN0LlxuICogQHJldHVybiB7U3RyaW5nfSB0b2tlbiBwcmVmaXhcbiAqL1xuZnVuY3Rpb24gYnVpbGRUb2tlbihvYmopIHtcbiAgICBzd2l0Y2ggKG9iai5zb3VyY2UpIHtcbiAgICAgICAgY2FzZSBcImJpdGJ1Y2tldC5vcmdcIjpcbiAgICAgICAgICAgIHJldHVybiBcIngtdG9rZW4tYXV0aDpcIiArIG9iai50b2tlbiArIFwiQFwiO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG9iai50b2tlbiArIFwiQFwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYnVpbGRQYXRoKG9iaikge1xuICAgIHN3aXRjaCAob2JqLnNvdXJjZSkge1xuICAgICAgICBjYXNlIFwiYml0YnVja2V0LXNlcnZlclwiOlxuICAgICAgICAgICAgcmV0dXJuIFwic2NtL1wiICsgb2JqLmZ1bGxfbmFtZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgb2JqLmZ1bGxfbmFtZTtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnaXRVcmxQYXJzZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzXG52YXIgcHJvdG9jb2xzID0gcmVxdWlyZShcInByb3RvY29sc1wiKTtcblxuLyoqXG4gKiBpc1NzaFxuICogQ2hlY2tzIGlmIGFuIGlucHV0IHZhbHVlIGlzIGEgc3NoIHVybCBvciBub3QuXG4gKlxuICogQG5hbWUgaXNTc2hcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGlucHV0IFRoZSBpbnB1dCB1cmwgb3IgYW4gYXJyYXkgb2YgcHJvdG9jb2xzLlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnB1dCBpcyBhIHNzaCB1cmwsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBpc1NzaChpbnB1dCkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5pbmRleE9mKFwic3NoXCIpICE9PSAtMSB8fCBpbnB1dC5pbmRleE9mKFwicnN5bmNcIikgIT09IC0xO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwcm90cyA9IHByb3RvY29scyhpbnB1dCk7XG4gICAgaW5wdXQgPSBpbnB1dC5zdWJzdHJpbmcoaW5wdXQuaW5kZXhPZihcIjovL1wiKSArIDMpO1xuICAgIGlmIChpc1NzaChwcm90cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gVE9ETyBUaGlzIHByb2JhYmx5IGNvdWxkIGJlIGltcHJvdmVkIDopXG4gICAgdmFyIHVybFBvcnRQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXFwuKFthLXpBLVpcXFxcZF0rKTooXFxcXGQrKVxcLycpO1xuICAgIHJldHVybiAhaW5wdXQubWF0Y2godXJsUG9ydFBhdHRlcm4pICYmIGlucHV0LmluZGV4T2YoXCJAXCIpIDwgaW5wdXQuaW5kZXhPZihcIjpcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTc2g7IiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVzKHMpIHtcbiAgICByZXR1cm4gcyA9PT0gXCJcIiA/IFtdIDogcy5yZXBsYWNlKC9cXG4kLywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5saW5lcyhscykge1xuICAgIHJldHVybiBscy5tYXAobGluZSA9PiBsaW5lICsgXCJcXG5cIikuam9pbihcIlwiKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbmNvbnN0IERBVEFfVVJMX0RFRkFVTFRfTUlNRV9UWVBFID0gJ3RleHQvcGxhaW4nO1xuY29uc3QgREFUQV9VUkxfREVGQVVMVF9DSEFSU0VUID0gJ3VzLWFzY2lpJztcblxuY29uc3QgdGVzdFBhcmFtZXRlciA9IChuYW1lLCBmaWx0ZXJzKSA9PiB7XG5cdHJldHVybiBmaWx0ZXJzLnNvbWUoZmlsdGVyID0+IGZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cCA/IGZpbHRlci50ZXN0KG5hbWUpIDogZmlsdGVyID09PSBuYW1lKTtcbn07XG5cbmNvbnN0IG5vcm1hbGl6ZURhdGFVUkwgPSAodXJsU3RyaW5nLCB7c3RyaXBIYXNofSkgPT4ge1xuXHRjb25zdCBtYXRjaCA9IC9eZGF0YTooPzx0eXBlPlteLF0qPyksKD88ZGF0YT5bXiNdKj8pKD86Iyg/PGhhc2g+LiopKT8kLy5leGVjKHVybFN0cmluZyk7XG5cblx0aWYgKCFtYXRjaCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBVUkw6ICR7dXJsU3RyaW5nfWApO1xuXHR9XG5cblx0bGV0IHt0eXBlLCBkYXRhLCBoYXNofSA9IG1hdGNoLmdyb3Vwcztcblx0Y29uc3QgbWVkaWFUeXBlID0gdHlwZS5zcGxpdCgnOycpO1xuXHRoYXNoID0gc3RyaXBIYXNoID8gJycgOiBoYXNoO1xuXG5cdGxldCBpc0Jhc2U2NCA9IGZhbHNlO1xuXHRpZiAobWVkaWFUeXBlW21lZGlhVHlwZS5sZW5ndGggLSAxXSA9PT0gJ2Jhc2U2NCcpIHtcblx0XHRtZWRpYVR5cGUucG9wKCk7XG5cdFx0aXNCYXNlNjQgPSB0cnVlO1xuXHR9XG5cblx0Ly8gTG93ZXJjYXNlIE1JTUUgdHlwZVxuXHRjb25zdCBtaW1lVHlwZSA9IChtZWRpYVR5cGUuc2hpZnQoKSB8fCAnJykudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgYXR0cmlidXRlcyA9IG1lZGlhVHlwZVxuXHRcdC5tYXAoYXR0cmlidXRlID0+IHtcblx0XHRcdGxldCBba2V5LCB2YWx1ZSA9ICcnXSA9IGF0dHJpYnV0ZS5zcGxpdCgnPScpLm1hcChzdHJpbmcgPT4gc3RyaW5nLnRyaW0oKSk7XG5cblx0XHRcdC8vIExvd2VyY2FzZSBgY2hhcnNldGBcblx0XHRcdGlmIChrZXkgPT09ICdjaGFyc2V0Jykge1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBEQVRBX1VSTF9ERUZBVUxUX0NIQVJTRVQpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGAke2tleX0ke3ZhbHVlID8gYD0ke3ZhbHVlfWAgOiAnJ31gO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRjb25zdCBub3JtYWxpemVkTWVkaWFUeXBlID0gW1xuXHRcdC4uLmF0dHJpYnV0ZXNcblx0XTtcblxuXHRpZiAoaXNCYXNlNjQpIHtcblx0XHRub3JtYWxpemVkTWVkaWFUeXBlLnB1c2goJ2Jhc2U2NCcpO1xuXHR9XG5cblx0aWYgKG5vcm1hbGl6ZWRNZWRpYVR5cGUubGVuZ3RoICE9PSAwIHx8IChtaW1lVHlwZSAmJiBtaW1lVHlwZSAhPT0gREFUQV9VUkxfREVGQVVMVF9NSU1FX1RZUEUpKSB7XG5cdFx0bm9ybWFsaXplZE1lZGlhVHlwZS51bnNoaWZ0KG1pbWVUeXBlKTtcblx0fVxuXG5cdHJldHVybiBgZGF0YToke25vcm1hbGl6ZWRNZWRpYVR5cGUuam9pbignOycpfSwke2lzQmFzZTY0ID8gZGF0YS50cmltKCkgOiBkYXRhfSR7aGFzaCA/IGAjJHtoYXNofWAgOiAnJ31gO1xufTtcblxuY29uc3Qgbm9ybWFsaXplVXJsID0gKHVybFN0cmluZywgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0ge1xuXHRcdGRlZmF1bHRQcm90b2NvbDogJ2h0dHA6Jyxcblx0XHRub3JtYWxpemVQcm90b2NvbDogdHJ1ZSxcblx0XHRmb3JjZUh0dHA6IGZhbHNlLFxuXHRcdGZvcmNlSHR0cHM6IGZhbHNlLFxuXHRcdHN0cmlwQXV0aGVudGljYXRpb246IHRydWUsXG5cdFx0c3RyaXBIYXNoOiBmYWxzZSxcblx0XHRzdHJpcFRleHRGcmFnbWVudDogdHJ1ZSxcblx0XHRzdHJpcFdXVzogdHJ1ZSxcblx0XHRyZW1vdmVRdWVyeVBhcmFtZXRlcnM6IFsvXnV0bV9cXHcrL2ldLFxuXHRcdHJlbW92ZVRyYWlsaW5nU2xhc2g6IHRydWUsXG5cdFx0cmVtb3ZlU2luZ2xlU2xhc2g6IHRydWUsXG5cdFx0cmVtb3ZlRGlyZWN0b3J5SW5kZXg6IGZhbHNlLFxuXHRcdHNvcnRRdWVyeVBhcmFtZXRlcnM6IHRydWUsXG5cdFx0Li4ub3B0aW9uc1xuXHR9O1xuXG5cdHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG5cblx0Ly8gRGF0YSBVUkxcblx0aWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcblx0XHRyZXR1cm4gbm9ybWFsaXplRGF0YVVSTCh1cmxTdHJpbmcsIG9wdGlvbnMpO1xuXHR9XG5cblx0aWYgKC9edmlldy1zb3VyY2U6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdgdmlldy1zb3VyY2U6YCBpcyBub3Qgc3VwcG9ydGVkIGFzIGl0IGlzIGEgbm9uLXN0YW5kYXJkIHByb3RvY29sJyk7XG5cdH1cblxuXHRjb25zdCBoYXNSZWxhdGl2ZVByb3RvY29sID0gdXJsU3RyaW5nLnN0YXJ0c1dpdGgoJy8vJyk7XG5cdGNvbnN0IGlzUmVsYXRpdmVVcmwgPSAhaGFzUmVsYXRpdmVQcm90b2NvbCAmJiAvXlxcLipcXC8vLnRlc3QodXJsU3RyaW5nKTtcblxuXHQvLyBQcmVwZW5kIHByb3RvY29sXG5cdGlmICghaXNSZWxhdGl2ZVVybCkge1xuXHRcdHVybFN0cmluZyA9IHVybFN0cmluZy5yZXBsYWNlKC9eKD8hKD86XFx3KzopP1xcL1xcLyl8XlxcL1xcLy8sIG9wdGlvbnMuZGVmYXVsdFByb3RvY29sKTtcblx0fVxuXG5cdGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsU3RyaW5nKTtcblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHAgJiYgb3B0aW9ucy5mb3JjZUh0dHBzKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgYGZvcmNlSHR0cGAgYW5kIGBmb3JjZUh0dHBzYCBvcHRpb25zIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyJyk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHAgJiYgdXJsT2JqLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xuXHRcdHVybE9iai5wcm90b2NvbCA9ICdodHRwOic7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5mb3JjZUh0dHBzICYmIHVybE9iai5wcm90b2NvbCA9PT0gJ2h0dHA6Jykge1xuXHRcdHVybE9iai5wcm90b2NvbCA9ICdodHRwczonO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGF1dGhcblx0aWYgKG9wdGlvbnMuc3RyaXBBdXRoZW50aWNhdGlvbikge1xuXHRcdHVybE9iai51c2VybmFtZSA9ICcnO1xuXHRcdHVybE9iai5wYXNzd29yZCA9ICcnO1xuXHR9XG5cblx0Ly8gUmVtb3ZlIGhhc2hcblx0aWYgKG9wdGlvbnMuc3RyaXBIYXNoKSB7XG5cdFx0dXJsT2JqLmhhc2ggPSAnJztcblx0fSBlbHNlIGlmIChvcHRpb25zLnN0cmlwVGV4dEZyYWdtZW50KSB7XG5cdFx0dXJsT2JqLmhhc2ggPSB1cmxPYmouaGFzaC5yZXBsYWNlKC8jPzp+OnRleHQuKj8kL2ksICcnKTtcblx0fVxuXG5cdC8vIFJlbW92ZSBkdXBsaWNhdGUgc2xhc2hlcyBpZiBub3QgcHJlY2VkZWQgYnkgYSBwcm90b2NvbFxuXHRpZiAodXJsT2JqLnBhdGhuYW1lKSB7XG5cdFx0dXJsT2JqLnBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lLnJlcGxhY2UoLyg/PCFcXGIoPzpbYS16XVthLXpcXGQrXFwtLl17MSw1MH06KSlcXC97Mix9L2csICcvJyk7XG5cdH1cblxuXHQvLyBEZWNvZGUgVVJJIG9jdGV0c1xuXHRpZiAodXJsT2JqLnBhdGhuYW1lKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHVybE9iai5wYXRobmFtZSA9IGRlY29kZVVSSSh1cmxPYmoucGF0aG5hbWUpO1xuXHRcdH0gY2F0Y2ggKF8pIHt9XG5cdH1cblxuXHQvLyBSZW1vdmUgZGlyZWN0b3J5IGluZGV4XG5cdGlmIChvcHRpb25zLnJlbW92ZURpcmVjdG9yeUluZGV4ID09PSB0cnVlKSB7XG5cdFx0b3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCA9IFsvXmluZGV4XFwuW2Etel0rJC9dO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCkgJiYgb3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleC5sZW5ndGggPiAwKSB7XG5cdFx0bGV0IHBhdGhDb21wb25lbnRzID0gdXJsT2JqLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG5cdFx0Y29uc3QgbGFzdENvbXBvbmVudCA9IHBhdGhDb21wb25lbnRzW3BhdGhDb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuXG5cdFx0aWYgKHRlc3RQYXJhbWV0ZXIobGFzdENvbXBvbmVudCwgb3B0aW9ucy5yZW1vdmVEaXJlY3RvcnlJbmRleCkpIHtcblx0XHRcdHBhdGhDb21wb25lbnRzID0gcGF0aENvbXBvbmVudHMuc2xpY2UoMCwgcGF0aENvbXBvbmVudHMubGVuZ3RoIC0gMSk7XG5cdFx0XHR1cmxPYmoucGF0aG5hbWUgPSBwYXRoQ29tcG9uZW50cy5zbGljZSgxKS5qb2luKCcvJykgKyAnLyc7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHVybE9iai5ob3N0bmFtZSkge1xuXHRcdC8vIFJlbW92ZSB0cmFpbGluZyBkb3Rcblx0XHR1cmxPYmouaG9zdG5hbWUgPSB1cmxPYmouaG9zdG5hbWUucmVwbGFjZSgvXFwuJC8sICcnKTtcblxuXHRcdC8vIFJlbW92ZSBgd3d3LmBcblx0XHRpZiAob3B0aW9ucy5zdHJpcFdXVyAmJiAvXnd3d1xcLig/IXd3d1xcLikoPzpbYS16XFwtXFxkXXsxLDYzfSlcXC4oPzpbYS16LlxcLVxcZF17Miw2M30pJC8udGVzdCh1cmxPYmouaG9zdG5hbWUpKSB7XG5cdFx0XHQvLyBFYWNoIGxhYmVsIHNob3VsZCBiZSBtYXggNjMgYXQgbGVuZ3RoIChtaW46IDEpLlxuXHRcdFx0Ly8gU291cmNlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib3N0bmFtZSNSZXN0cmljdGlvbnNfb25fdmFsaWRfaG9zdF9uYW1lc1xuXHRcdFx0Ly8gRWFjaCBUTEQgc2hvdWxkIGJlIHVwIHRvIDYzIGNoYXJhY3RlcnMgbG9uZyAobWluOiAyKS5cblx0XHRcdC8vIEl0IGlzIHRlY2huaWNhbGx5IHBvc3NpYmxlIHRvIGhhdmUgYSBzaW5nbGUgY2hhcmFjdGVyIFRMRCwgYnV0IG5vbmUgY3VycmVudGx5IGV4aXN0LlxuXHRcdFx0dXJsT2JqLmhvc3RuYW1lID0gdXJsT2JqLmhvc3RuYW1lLnJlcGxhY2UoL153d3dcXC4vLCAnJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHF1ZXJ5IHVud2FudGVkIHBhcmFtZXRlcnNcblx0aWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5yZW1vdmVRdWVyeVBhcmFtZXRlcnMpKSB7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgWy4uLnVybE9iai5zZWFyY2hQYXJhbXMua2V5cygpXSkge1xuXHRcdFx0aWYgKHRlc3RQYXJhbWV0ZXIoa2V5LCBvcHRpb25zLnJlbW92ZVF1ZXJ5UGFyYW1ldGVycykpIHtcblx0XHRcdFx0dXJsT2JqLnNlYXJjaFBhcmFtcy5kZWxldGUoa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yZW1vdmVRdWVyeVBhcmFtZXRlcnMgPT09IHRydWUpIHtcblx0XHR1cmxPYmouc2VhcmNoID0gJyc7XG5cdH1cblxuXHQvLyBTb3J0IHF1ZXJ5IHBhcmFtZXRlcnNcblx0aWYgKG9wdGlvbnMuc29ydFF1ZXJ5UGFyYW1ldGVycykge1xuXHRcdHVybE9iai5zZWFyY2hQYXJhbXMuc29ydCgpO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCkge1xuXHRcdHVybE9iai5wYXRobmFtZSA9IHVybE9iai5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpO1xuXHR9XG5cblx0Y29uc3Qgb2xkVXJsU3RyaW5nID0gdXJsU3RyaW5nO1xuXG5cdC8vIFRha2UgYWR2YW50YWdlIG9mIG1hbnkgb2YgdGhlIE5vZGUgYHVybGAgbm9ybWFsaXphdGlvbnNcblx0dXJsU3RyaW5nID0gdXJsT2JqLnRvU3RyaW5nKCk7XG5cblx0aWYgKCFvcHRpb25zLnJlbW92ZVNpbmdsZVNsYXNoICYmIHVybE9iai5wYXRobmFtZSA9PT0gJy8nICYmICFvbGRVcmxTdHJpbmcuZW5kc1dpdGgoJy8nKSAmJiB1cmxPYmouaGFzaCA9PT0gJycpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXFwvJC8sICcnKTtcblx0fVxuXG5cdC8vIFJlbW92ZSBlbmRpbmcgYC9gIHVubGVzcyByZW1vdmVTaW5nbGVTbGFzaCBpcyBmYWxzZVxuXHRpZiAoKG9wdGlvbnMucmVtb3ZlVHJhaWxpbmdTbGFzaCB8fCB1cmxPYmoucGF0aG5hbWUgPT09ICcvJykgJiYgdXJsT2JqLmhhc2ggPT09ICcnICYmIG9wdGlvbnMucmVtb3ZlU2luZ2xlU2xhc2gpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXFwvJC8sICcnKTtcblx0fVxuXG5cdC8vIFJlc3RvcmUgcmVsYXRpdmUgcHJvdG9jb2wsIGlmIGFwcGxpY2FibGVcblx0aWYgKGhhc1JlbGF0aXZlUHJvdG9jb2wgJiYgIW9wdGlvbnMubm9ybWFsaXplUHJvdG9jb2wpIHtcblx0XHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcucmVwbGFjZSgvXmh0dHA6XFwvXFwvLywgJy8vJyk7XG5cdH1cblxuXHQvLyBSZW1vdmUgaHR0cC9odHRwc1xuXHRpZiAob3B0aW9ucy5zdHJpcFByb3RvY29sKSB7XG5cdFx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnJlcGxhY2UoL14oPzpodHRwcz86KT9cXC9cXC8vLCAnJyk7XG5cdH1cblxuXHRyZXR1cm4gdXJsU3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVVcmw7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzXG52YXIgcHJvdG9jb2xzID0gcmVxdWlyZShcInByb3RvY29sc1wiKSxcbiAgICBpc1NzaCA9IHJlcXVpcmUoXCJpcy1zc2hcIiksXG4gICAgcXMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpO1xuXG4vKipcbiAqIHBhcnNlUGF0aFxuICogUGFyc2VzIHRoZSBpbnB1dCB1cmwuXG4gKlxuICogQG5hbWUgcGFyc2VQYXRoXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIGlucHV0IHVybC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gKlxuICogIC0gYHByb3RvY29sc2AgKEFycmF5KTogQW4gYXJyYXkgd2l0aCB0aGUgdXJsIHByb3RvY29scyAodXN1YWxseSBpdCBoYXMgb25lIGVsZW1lbnQpLlxuICogIC0gYHByb3RvY29sYCAoU3RyaW5nKTogVGhlIGZpcnN0IHByb3RvY29sLCBgXCJzc2hcImAgKGlmIHRoZSB1cmwgaXMgYSBzc2ggdXJsKSBvciBgXCJmaWxlXCJgLlxuICogIC0gYHBvcnRgIChudWxsfE51bWJlcik6IFRoZSBkb21haW4gcG9ydC5cbiAqICAtIGByZXNvdXJjZWAgKFN0cmluZyk6IFRoZSB1cmwgZG9tYWluIChpbmNsdWRpbmcgc3ViZG9tYWlucykuXG4gKiAgLSBgdXNlcmAgKFN0cmluZyk6IFRoZSBhdXRoZW50aWNhdGlvbiB1c2VyICh1c3VhbGx5IGZvciBzc2ggdXJscykuXG4gKiAgLSBgcGF0aG5hbWVgIChTdHJpbmcpOiBUaGUgdXJsIHBhdGhuYW1lLlxuICogIC0gYGhhc2hgIChTdHJpbmcpOiBUaGUgdXJsIGhhc2guXG4gKiAgLSBgc2VhcmNoYCAoU3RyaW5nKTogVGhlIHVybCBxdWVyeXN0cmluZyB2YWx1ZS5cbiAqICAtIGBocmVmYCAoU3RyaW5nKTogVGhlIGlucHV0IHVybC5cbiAqICAtIGBxdWVyeWAgKE9iamVjdCk6IFRoZSB1cmwgcXVlcnlzdHJpbmcsIHBhcnNlZCBhcyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUGF0aCh1cmwpIHtcbiAgICB1cmwgPSAodXJsIHx8IFwiXCIpLnRyaW0oKTtcbiAgICB2YXIgb3V0cHV0ID0ge1xuICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyh1cmwpLFxuICAgICAgICBwcm90b2NvbDogbnVsbCxcbiAgICAgICAgcG9ydDogbnVsbCxcbiAgICAgICAgcmVzb3VyY2U6IFwiXCIsXG4gICAgICAgIHVzZXI6IFwiXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgIGhyZWY6IHVybCxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICB9LFxuICAgICAgICBwcm90b2NvbEluZGV4ID0gdXJsLmluZGV4T2YoXCI6Ly9cIiksXG4gICAgICAgIHJlc291cmNlSW5kZXggPSAtMSxcbiAgICAgICAgc3BsaXRzID0gbnVsbCxcbiAgICAgICAgcGFydHMgPSBudWxsO1xuXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCIuL1wiKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSB1cmw7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXIgPSB1cmwuY2hhckF0KDEpO1xuICAgIGlmICghb3V0cHV0LnByb3RvY29sKSB7XG4gICAgICAgIG91dHB1dC5wcm90b2NvbCA9IG91dHB1dC5wcm90b2NvbHNbMF07XG4gICAgICAgIGlmICghb3V0cHV0LnByb3RvY29sKSB7XG4gICAgICAgICAgICBpZiAoaXNTc2godXJsKSkge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwic3NoXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2hhciA9PT0gXCIvXCIgfHwgZmlyc3RDaGFyID09PSBcIn5cIikge1xuICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnByb3RvY29sID0gXCJmaWxlXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dC5wcm90b2NvbCA9IFwiZmlsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3RvY29sSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcocHJvdG9jb2xJbmRleCArIDMpO1xuICAgIH1cblxuICAgIHBhcnRzID0gdXJsLnNwbGl0KC9cXC98XFxcXC8pO1xuICAgIGlmIChvdXRwdXQucHJvdG9jb2wgIT09IFwiZmlsZVwiKSB7XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnJlc291cmNlID0gXCJcIjtcbiAgICB9XG5cbiAgICAvLyB1c2VyQGRvbWFpblxuICAgIHNwbGl0cyA9IG91dHB1dC5yZXNvdXJjZS5zcGxpdChcIkBcIik7XG4gICAgaWYgKHNwbGl0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgb3V0cHV0LnVzZXIgPSBzcGxpdHNbMF07XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHNwbGl0c1sxXTtcbiAgICB9XG5cbiAgICAvLyBkb21haW4uY29tOnBvcnRcbiAgICBzcGxpdHMgPSBvdXRwdXQucmVzb3VyY2Uuc3BsaXQoXCI6XCIpO1xuICAgIGlmIChzcGxpdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIG91dHB1dC5yZXNvdXJjZSA9IHNwbGl0c1swXTtcbiAgICAgICAgaWYgKHNwbGl0c1sxXSkge1xuICAgICAgICAgICAgb3V0cHV0LnBvcnQgPSBOdW1iZXIoc3BsaXRzWzFdKTtcbiAgICAgICAgICAgIGlmIChpc05hTihvdXRwdXQucG9ydCkpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQucG9ydCA9IG51bGw7XG4gICAgICAgICAgICAgICAgcGFydHMudW5zaGlmdChzcGxpdHNbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0LnBvcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGVtcHR5IGVsZW1lbnRzXG4gICAgcGFydHMgPSBwYXJ0cy5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAvLyBTdHJpbmdpZnkgdGhlIHBhdGhuYW1lXG4gICAgaWYgKG91dHB1dC5wcm90b2NvbCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gb3V0cHV0LmhyZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnBhdGhuYW1lID0gb3V0cHV0LnBhdGhuYW1lIHx8IChvdXRwdXQucHJvdG9jb2wgIT09IFwiZmlsZVwiIHx8IG91dHB1dC5ocmVmWzBdID09PSBcIi9cIiA/IFwiL1wiIDogXCJcIikgKyBwYXJ0cy5qb2luKFwiL1wiKTtcbiAgICB9XG5cbiAgICAvLyAjc29tZS1oYXNoXG4gICAgc3BsaXRzID0gb3V0cHV0LnBhdGhuYW1lLnNwbGl0KFwiI1wiKTtcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSBzcGxpdHNbMF07XG4gICAgICAgIG91dHB1dC5oYXNoID0gc3BsaXRzWzFdO1xuICAgIH1cblxuICAgIC8vID9mb289YmFyXG4gICAgc3BsaXRzID0gb3V0cHV0LnBhdGhuYW1lLnNwbGl0KFwiP1wiKTtcbiAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBvdXRwdXQucGF0aG5hbWUgPSBzcGxpdHNbMF07XG4gICAgICAgIG91dHB1dC5zZWFyY2ggPSBzcGxpdHNbMV07XG4gICAgfVxuXG4gICAgb3V0cHV0LnF1ZXJ5ID0gcXMucGFyc2Uob3V0cHV0LnNlYXJjaCk7XG4gICAgb3V0cHV0LmhyZWYgPSBvdXRwdXQuaHJlZi5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gICAgb3V0cHV0LnBhdGhuYW1lID0gb3V0cHV0LnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlUGF0aDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgcGFyc2VQYXRoID0gcmVxdWlyZShcInBhcnNlLXBhdGhcIiksXG4gICAgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIm5vcm1hbGl6ZS11cmxcIik7XG5cbi8qKlxuICogcGFyc2VVcmxcbiAqIFBhcnNlcyB0aGUgaW5wdXQgdXJsLlxuICpcbiAqICoqTm90ZSoqOiBUaGlzICp0aHJvd3MqIGlmIGludmFsaWQgdXJscyBhcmUgcHJvdmlkZWQuXG4gKlxuICogQG5hbWUgcGFyc2VVcmxcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgaW5wdXQgdXJsLlxuICogQHBhcmFtIHtCb29sZWFufE9iamVjdH0gbm9ybWFsaXplIFdoZXRlciB0byBub3JtYWxpemUgdGhlIHVybCBvciBub3QuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIGBmYWxzZWAuIElmIGB0cnVlYCwgdGhlIHVybCB3aWxsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBiZSBub3JtYWxpemVkLiBJZiBhbiBvYmplY3QsIGl0IHdpbGwgYmUgdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zIG9iamVjdCBzZW50IHRvIFtgbm9ybWFsaXplLXVybGBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbm9ybWFsaXplLXVybCkuXG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgRm9yIFNTSCB1cmxzLCBub3JtYWxpemUgd29uJ3Qgd29yay5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZmllbGRzOlxuICpcbiAqICAtIGBwcm90b2NvbHNgIChBcnJheSk6IEFuIGFycmF5IHdpdGggdGhlIHVybCBwcm90b2NvbHMgKHVzdWFsbHkgaXQgaGFzIG9uZSBlbGVtZW50KS5cbiAqICAtIGBwcm90b2NvbGAgKFN0cmluZyk6IFRoZSBmaXJzdCBwcm90b2NvbCwgYFwic3NoXCJgIChpZiB0aGUgdXJsIGlzIGEgc3NoIHVybCkgb3IgYFwiZmlsZVwiYC5cbiAqICAtIGBwb3J0YCAobnVsbHxOdW1iZXIpOiBUaGUgZG9tYWluIHBvcnQuXG4gKiAgLSBgcmVzb3VyY2VgIChTdHJpbmcpOiBUaGUgdXJsIGRvbWFpbiAoaW5jbHVkaW5nIHN1YmRvbWFpbnMpLlxuICogIC0gYHVzZXJgIChTdHJpbmcpOiBUaGUgYXV0aGVudGljYXRpb24gdXNlciAodXN1YWxseSBmb3Igc3NoIHVybHMpLlxuICogIC0gYHBhdGhuYW1lYCAoU3RyaW5nKTogVGhlIHVybCBwYXRobmFtZS5cbiAqICAtIGBoYXNoYCAoU3RyaW5nKTogVGhlIHVybCBoYXNoLlxuICogIC0gYHNlYXJjaGAgKFN0cmluZyk6IFRoZSB1cmwgcXVlcnlzdHJpbmcgdmFsdWUuXG4gKiAgLSBgaHJlZmAgKFN0cmluZyk6IFRoZSBpbnB1dCB1cmwuXG4gKiAgLSBgcXVlcnlgIChPYmplY3QpOiBUaGUgdXJsIHF1ZXJ5c3RyaW5nLCBwYXJzZWQgYXMgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgICB2YXIgbm9ybWFsaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiIHx8ICF1cmwudHJpbSgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdXJsLlwiKTtcbiAgICB9XG4gICAgaWYgKG5vcm1hbGl6ZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBub3JtYWxpemUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihub3JtYWxpemUpKSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbm9ybWFsaXplID0ge1xuICAgICAgICAgICAgICAgIHN0cmlwSGFzaDogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdXJsID0gbm9ybWFsaXplVXJsKHVybCwgbm9ybWFsaXplKTtcbiAgICB9XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlUGF0aCh1cmwpO1xuICAgIHJldHVybiBwYXJzZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VVcmw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogcHJvdG9jb2xzXG4gKiBSZXR1cm5zIHRoZSBwcm90b2NvbHMgb2YgYW4gaW5wdXQgdXJsLlxuICpcbiAqIEBuYW1lIHByb3RvY29sc1xuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHVybC5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxOdW1iZXJ9IGZpcnN0IElmIGB0cnVlYCwgdGhlIGZpcnN0IHByb3RvY29sIHdpbGwgYmUgcmV0dXJuZWQuIElmIG51bWJlciwgaXQgd2lsbCByZXByZXNlbnQgdGhlIHplcm8tYmFzZWQgaW5kZXggb2YgdGhlIHByb3RvY29scyBhcnJheS5cbiAqIEByZXR1cm4ge0FycmF5fFN0cmluZ30gVGhlIGFycmF5IG9mIHByb3RvY29scyBvciB0aGUgc3BlY2lmaWVkIHByb3RvY29sLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHByb3RvY29scyhpbnB1dCwgZmlyc3QpIHtcblxuICAgIGlmIChmaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBmaXJzdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihcIjovL1wiKSxcbiAgICAgICAgc3BsaXRzID0gaW5wdXQuc3Vic3RyaW5nKDAsIGluZGV4KS5zcGxpdChcIitcIikuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gc3BsaXRzW2ZpcnN0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpY3RVcmlFbmNvZGUgPSByZXF1aXJlKCdzdHJpY3QtdXJpLWVuY29kZScpO1xuY29uc3QgZGVjb2RlQ29tcG9uZW50ID0gcmVxdWlyZSgnZGVjb2RlLXVyaS1jb21wb25lbnQnKTtcbmNvbnN0IHNwbGl0T25GaXJzdCA9IHJlcXVpcmUoJ3NwbGl0LW9uLWZpcnN0Jyk7XG5jb25zdCBmaWx0ZXJPYmplY3QgPSByZXF1aXJlKCdmaWx0ZXItb2JqJyk7XG5cbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gdmFsdWUgPT4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0c3dpdGNoIChvcHRpb25zLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBpbmRleCA9IHJlc3VsdC5sZW5ndGg7XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1snLCBpbmRleCwgJ10nXS5qb2luKCcnKV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdC4uLnJlc3VsdCxcblx0XHRcdFx0XHRbZW5jb2RlKGtleSwgb3B0aW9ucyksICdbJywgZW5jb2RlKGluZGV4LCBvcHRpb25zKSwgJ109JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJylcblx0XHRcdFx0XTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHZhbHVlID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwTnVsbCAmJiB2YWx1ZSA9PT0gbnVsbCkgfHxcblx0XHRcdFx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgdmFsdWUgPT09ICcnKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdJ10uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJ1tdPScsIGVuY29kZSh2YWx1ZSwgb3B0aW9ucyldLmpvaW4oJycpXTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdjb21tYSc6XG5cdFx0Y2FzZSAnc2VwYXJhdG9yJzpcblx0XHRcdHJldHVybiBrZXkgPT4gKHJlc3VsdCwgdmFsdWUpID0+IHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFtbZW5jb2RlKGtleSwgb3B0aW9ucyksICc9JywgZW5jb2RlKHZhbHVlLCBvcHRpb25zKV0uam9pbignJyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtbcmVzdWx0LCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpXTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGtleSA9PiAocmVzdWx0LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dmFsdWUgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBOdWxsICYmIHZhbHVlID09PSBudWxsKSB8fFxuXHRcdFx0XHRcdChvcHRpb25zLnNraXBFbXB0eVN0cmluZyAmJiB2YWx1ZSA9PT0gJycpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgZW5jb2RlKGtleSwgb3B0aW9ucyldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIFtlbmNvZGUoa2V5LCBvcHRpb25zKSwgJz0nLCBlbmNvZGUodmFsdWUsIG9wdGlvbnMpXS5qb2luKCcnKV07XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpIHtcblx0bGV0IHJlc3VsdDtcblxuXHRzd2l0Y2ggKG9wdGlvbnMuYXJyYXlGb3JtYXQpIHtcblx0XHRjYXNlICdpbmRleCc6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdHJlc3VsdCA9IC9cXFsoXFxkKilcXF0kLy5leGVjKGtleSk7XG5cblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcZCpcXF0kLywgJycpO1xuXG5cdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhY2N1bXVsYXRvcltrZXldW3Jlc3VsdFsxXV0gPSB2YWx1ZTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiAoa2V5LCB2YWx1ZSwgYWNjdW11bGF0b3IpID0+IHtcblx0XHRcdFx0cmVzdWx0ID0gLyhcXFtcXF0pJC8uZXhlYyhrZXkpO1xuXHRcdFx0XHRrZXkgPSBrZXkucmVwbGFjZSgvXFxbXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFt2YWx1ZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnY29tbWEnOlxuXHRcdGNhc2UgJ3NlcGFyYXRvcic6XG5cdFx0XHRyZXR1cm4gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzQXJyYXkgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXHRcdFx0XHRjb25zdCBpc0VuY29kZWRBcnJheSA9ICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc0FycmF5ICYmIGRlY29kZSh2YWx1ZSwgb3B0aW9ucykuaW5jbHVkZXMob3B0aW9ucy5hcnJheUZvcm1hdFNlcGFyYXRvcikpO1xuXHRcdFx0XHR2YWx1ZSA9IGlzRW5jb2RlZEFycmF5ID8gZGVjb2RlKHZhbHVlLCBvcHRpb25zKSA6IHZhbHVlO1xuXHRcdFx0XHRjb25zdCBuZXdWYWx1ZSA9IGlzQXJyYXkgfHwgaXNFbmNvZGVkQXJyYXkgPyB2YWx1ZS5zcGxpdChvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKS5tYXAoaXRlbSA9PiBkZWNvZGUoaXRlbSwgb3B0aW9ucykpIDogdmFsdWUgPT09IG51bGwgPyB2YWx1ZSA6IGRlY29kZSh2YWx1ZSwgb3B0aW9ucyk7XG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBuZXdWYWx1ZTtcblx0XHRcdH07XG5cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikgPT4ge1xuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IHZhbHVlLmxlbmd0aCAhPT0gMSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2FycmF5Rm9ybWF0U2VwYXJhdG9yIG11c3QgYmUgc2luZ2xlIGNoYXJhY3RlciBzdHJpbmcnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdGlvbnMpIHtcblx0aWYgKG9wdGlvbnMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlY29kZSh2YWx1ZSwgb3B0aW9ucykge1xuXHRpZiAob3B0aW9ucy5kZWNvZGUpIHtcblx0XHRyZXR1cm4gZGVjb2RlQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpXG5cdFx0XHQuc29ydCgoYSwgYikgPT4gTnVtYmVyKGEpIC0gTnVtYmVyKGIpKVxuXHRcdFx0Lm1hcChrZXkgPT4gaW5wdXRba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhc2goaW5wdXQpIHtcblx0Y29uc3QgaGFzaFN0YXJ0ID0gaW5wdXQuaW5kZXhPZignIycpO1xuXHRpZiAoaGFzaFN0YXJ0ICE9PSAtMSkge1xuXHRcdGlucHV0ID0gaW5wdXQuc2xpY2UoMCwgaGFzaFN0YXJ0KTtcblx0fVxuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCh1cmwpIHtcblx0bGV0IGhhc2ggPSAnJztcblx0Y29uc3QgaGFzaFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnKTtcblx0aWYgKGhhc2hTdGFydCAhPT0gLTEpIHtcblx0XHRoYXNoID0gdXJsLnNsaWNlKGhhc2hTdGFydCk7XG5cdH1cblxuXHRyZXR1cm4gaGFzaDtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdChpbnB1dCkge1xuXHRpbnB1dCA9IHJlbW92ZUhhc2goaW5wdXQpO1xuXHRjb25zdCBxdWVyeVN0YXJ0ID0gaW5wdXQuaW5kZXhPZignPycpO1xuXHRpZiAocXVlcnlTdGFydCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQuc2xpY2UocXVlcnlTdGFydCArIDEpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHZhbHVlLCBvcHRpb25zKSB7XG5cdGlmIChvcHRpb25zLnBhcnNlTnVtYmVycyAmJiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpICYmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSAhPT0gJycpKSB7XG5cdFx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMucGFyc2VCb29sZWFucyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnIHx8IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdmYWxzZScpKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRkZWNvZGU6IHRydWUsXG5cdFx0c29ydDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCcsXG5cdFx0cGFyc2VOdW1iZXJzOiBmYWxzZSxcblx0XHRwYXJzZUJvb2xlYW5zOiBmYWxzZVxuXHR9LCBvcHRpb25zKTtcblxuXHR2YWxpZGF0ZUFycmF5Rm9ybWF0U2VwYXJhdG9yKG9wdGlvbnMuYXJyYXlGb3JtYXRTZXBhcmF0b3IpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IHBhcnNlckZvckFycmF5Rm9ybWF0KG9wdGlvbnMpO1xuXG5cdC8vIENyZWF0ZSBhbiBvYmplY3Qgd2l0aCBubyBwcm90b3R5cGVcblx0Y29uc3QgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRpZiAodHlwZW9mIHF1ZXJ5ICE9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eWz8jJl0vLCAnJyk7XG5cblx0aWYgKCFxdWVyeSkge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHBhcmFtIG9mIHF1ZXJ5LnNwbGl0KCcmJykpIHtcblx0XHRpZiAocGFyYW0gPT09ICcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW2tleSwgdmFsdWVdID0gc3BsaXRPbkZpcnN0KG9wdGlvbnMuZGVjb2RlID8gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykgOiBwYXJhbSwgJz0nKTtcblxuXHRcdC8vIE1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBbJ2NvbW1hJywgJ3NlcGFyYXRvciddLmluY2x1ZGVzKG9wdGlvbnMuYXJyYXlGb3JtYXQpID8gdmFsdWUgOiBkZWNvZGUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdGZvcm1hdHRlcihkZWNvZGUoa2V5LCBvcHRpb25zKSwgdmFsdWUsIHJldCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhyZXQpKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSByZXRba2V5XTtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuXHRcdFx0Zm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xuXHRcdFx0XHR2YWx1ZVtrXSA9IHBhcnNlVmFsdWUodmFsdWVba10sIG9wdGlvbnMpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXRba2V5XSA9IHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNvcnQgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHJldHVybiAob3B0aW9ucy5zb3J0ID09PSB0cnVlID8gT2JqZWN0LmtleXMocmV0KS5zb3J0KCkgOiBPYmplY3Qua2V5cyhyZXQpLnNvcnQob3B0aW9ucy5zb3J0KSkucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuXHRcdGNvbnN0IHZhbHVlID0gcmV0W2tleV07XG5cdFx0aWYgKEJvb2xlYW4odmFsdWUpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHQvLyBTb3J0IG9iamVjdCBrZXlzLCBub3QgdmFsdWVzXG5cdFx0XHRyZXN1bHRba2V5XSA9IGtleXNTb3J0ZXIodmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRba2V5XSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBleHRyYWN0O1xuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IChvYmplY3QsIG9wdGlvbnMpID0+IHtcblx0aWYgKCFvYmplY3QpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnLFxuXHRcdGFycmF5Rm9ybWF0U2VwYXJhdG9yOiAnLCdcblx0fSwgb3B0aW9ucyk7XG5cblx0dmFsaWRhdGVBcnJheUZvcm1hdFNlcGFyYXRvcihvcHRpb25zLmFycmF5Rm9ybWF0U2VwYXJhdG9yKTtcblxuXHRjb25zdCBzaG91bGRGaWx0ZXIgPSBrZXkgPT4gKFxuXHRcdChvcHRpb25zLnNraXBOdWxsICYmIGlzTnVsbE9yVW5kZWZpbmVkKG9iamVjdFtrZXldKSkgfHxcblx0XHQob3B0aW9ucy5za2lwRW1wdHlTdHJpbmcgJiYgb2JqZWN0W2tleV0gPT09ICcnKVxuXHQpO1xuXG5cdGNvbnN0IGZvcm1hdHRlciA9IGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRpb25zKTtcblxuXHRjb25zdCBvYmplY3RDb3B5ID0ge307XG5cblx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdGlmICghc2hvdWxkRmlsdGVyKGtleSkpIHtcblx0XHRcdG9iamVjdENvcHlba2V5XSA9IG9iamVjdFtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3RDb3B5KTtcblxuXHRpZiAob3B0aW9ucy5zb3J0ICE9PSBmYWxzZSkge1xuXHRcdGtleXMuc29ydChvcHRpb25zLnNvcnQpO1xuXHR9XG5cblx0cmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG5cdFx0Y29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0LnJlZHVjZShmb3JtYXR0ZXIoa2V5KSwgW10pXG5cdFx0XHRcdC5qb2luKCcmJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdGlvbnMpICsgJz0nICsgZW5jb2RlKHZhbHVlLCBvcHRpb25zKTtcblx0fSkuZmlsdGVyKHggPT4geC5sZW5ndGggPiAwKS5qb2luKCcmJyk7XG59O1xuXG5leHBvcnRzLnBhcnNlVXJsID0gKHVybCwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZGVjb2RlOiB0cnVlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IFt1cmxfLCBoYXNoXSA9IHNwbGl0T25GaXJzdCh1cmwsICcjJyk7XG5cblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0e1xuXHRcdFx0dXJsOiB1cmxfLnNwbGl0KCc/JylbMF0gfHwgJycsXG5cdFx0XHRxdWVyeTogcGFyc2UoZXh0cmFjdCh1cmwpLCBvcHRpb25zKVxuXHRcdH0sXG5cdFx0b3B0aW9ucyAmJiBvcHRpb25zLnBhcnNlRnJhZ21lbnRJZGVudGlmaWVyICYmIGhhc2ggPyB7ZnJhZ21lbnRJZGVudGlmaWVyOiBkZWNvZGUoaGFzaCwgb3B0aW9ucyl9IDoge31cblx0KTtcbn07XG5cbmV4cG9ydHMuc3RyaW5naWZ5VXJsID0gKG9iamVjdCwgb3B0aW9ucykgPT4ge1xuXHRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZVxuXHR9LCBvcHRpb25zKTtcblxuXHRjb25zdCB1cmwgPSByZW1vdmVIYXNoKG9iamVjdC51cmwpLnNwbGl0KCc/JylbMF0gfHwgJyc7XG5cdGNvbnN0IHF1ZXJ5RnJvbVVybCA9IGV4cG9ydHMuZXh0cmFjdChvYmplY3QudXJsKTtcblx0Y29uc3QgcGFyc2VkUXVlcnlGcm9tVXJsID0gZXhwb3J0cy5wYXJzZShxdWVyeUZyb21VcmwsIHtzb3J0OiBmYWxzZX0pO1xuXG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmFzc2lnbihwYXJzZWRRdWVyeUZyb21VcmwsIG9iamVjdC5xdWVyeSk7XG5cdGxldCBxdWVyeVN0cmluZyA9IGV4cG9ydHMuc3RyaW5naWZ5KHF1ZXJ5LCBvcHRpb25zKTtcblx0aWYgKHF1ZXJ5U3RyaW5nKSB7XG5cdFx0cXVlcnlTdHJpbmcgPSBgPyR7cXVlcnlTdHJpbmd9YDtcblx0fVxuXG5cdGxldCBoYXNoID0gZ2V0SGFzaChvYmplY3QudXJsKTtcblx0aWYgKG9iamVjdC5mcmFnbWVudElkZW50aWZpZXIpIHtcblx0XHRoYXNoID0gYCMke2VuY29kZShvYmplY3QuZnJhZ21lbnRJZGVudGlmaWVyLCBvcHRpb25zKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke3VybH0ke3F1ZXJ5U3RyaW5nfSR7aGFzaH1gO1xufTtcblxuZXhwb3J0cy5waWNrID0gKGlucHV0LCBmaWx0ZXIsIG9wdGlvbnMpID0+IHtcblx0b3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuXHRcdHBhcnNlRnJhZ21lbnRJZGVudGlmaWVyOiB0cnVlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHt1cmwsIHF1ZXJ5LCBmcmFnbWVudElkZW50aWZpZXJ9ID0gZXhwb3J0cy5wYXJzZVVybChpbnB1dCwgb3B0aW9ucyk7XG5cdHJldHVybiBleHBvcnRzLnN0cmluZ2lmeVVybCh7XG5cdFx0dXJsLFxuXHRcdHF1ZXJ5OiBmaWx0ZXJPYmplY3QocXVlcnksIGZpbHRlciksXG5cdFx0ZnJhZ21lbnRJZGVudGlmaWVyXG5cdH0sIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0cy5leGNsdWRlID0gKGlucHV0LCBmaWx0ZXIsIG9wdGlvbnMpID0+IHtcblx0Y29uc3QgZXhjbHVzaW9uRmlsdGVyID0gQXJyYXkuaXNBcnJheShmaWx0ZXIpID8ga2V5ID0+ICFmaWx0ZXIuaW5jbHVkZXMoa2V5KSA6IChrZXksIHZhbHVlKSA9PiAhZmlsdGVyKGtleSwgdmFsdWUpO1xuXG5cdHJldHVybiBleHBvcnRzLnBpY2soaW5wdXQsIGV4Y2x1c2lvbkZpbHRlciwgb3B0aW9ucyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChzdHJpbmcsIHNlcGFyYXRvcikgPT4ge1xuXHRpZiAoISh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgYXJndW1lbnRzIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AnKTtcblx0fVxuXG5cdGlmIChzZXBhcmF0b3IgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtzdHJpbmddO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpO1xuXG5cdGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gW3N0cmluZ107XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHN0cmluZy5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCksXG5cdFx0c3RyaW5nLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aClcblx0XTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIHggPT4gYCUke3guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbiIsImltcG9ydCB7IGlzUHJpbWl0aXZlLCBpc05vblByaW1pdGl2ZSwgaXMsIGlzTGlrZSB9IGZyb20gXCIuL2lzXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mQm9vbGVhbnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKHRydWUpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk51bWJlcnMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKDEpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN0cmluZ3MoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFwiXCIpKHgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN5bWJvbHMoeCkge1xuICAgIHJldHVybiBpc0FycmF5T2ZMaWtlKFN5bWJvbCgpKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZOdWxscyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UobnVsbCkoeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mVW5kZWZpbmVkcyh4KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlPZkxpa2UodW5kZWZpbmVkKSh4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZQcmltaXRpdmVzKHgpIHtcbiAgICByZXR1cm4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNQcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZk9iamVjdHMoeCkge1xuICAgIHJldHVybiBpcyhBcnJheSkoeCkgJiYgeC5ldmVyeShpc05vblByaW1pdGl2ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheU9mKHR5cGUpIHtcbiAgICByZXR1cm4gKHhzKSA9PiBpcyhBcnJheSkoeHMpICYmIHhzLmV2ZXJ5KGlzKHR5cGUpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5T2ZMaWtlKHJlZmVyZW5jZSkge1xuICAgIHJldHVybiAoeCkgPT4gaXMoQXJyYXkpKHgpICYmIHguZXZlcnkoaXNMaWtlKHJlZmVyZW5jZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXkuanMubWFwIiwiZXhwb3J0IHsgaXNCb29sZWFuLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3ltYm9sLCBpc051bGwsIGlzVW5kZWZpbmVkLCBpc1ByaW1pdGl2ZSwgaXNOb25QcmltaXRpdmUsIGlzLCBpc0xpa2UsIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCB7IGlzQXJyYXlPZkJvb2xlYW5zLCBpc0FycmF5T2ZOdW1iZXJzLCBpc0FycmF5T2ZTdHJpbmdzLCBpc0FycmF5T2ZTeW1ib2xzLCBpc0FycmF5T2ZOdWxscywgaXNBcnJheU9mVW5kZWZpbmVkcywgaXNBcnJheU9mUHJpbWl0aXZlcywgaXNBcnJheU9mT2JqZWN0cywgaXNBcnJheU9mLCBpc0FycmF5T2ZMaWtlLCB9IGZyb20gXCIuL2FycmF5XCI7XG5leHBvcnQgeyBvbmx5Qm9vbGVhbnMsIG9ubHlOdW1iZXJzLCBvbmx5U3RyaW5ncywgb25seVN5bWJvbHMsIG9ubHlOdWxscywgb25seVVuZGVmaW5lZHMsIG9ubHlQcmltaXRpdmVzLCBvbmx5T2JqZWN0cywgb25seSwgb25seUxpa2UsIH0gZnJvbSBcIi4vb25seVwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgVFlQRV9HVUFSRFNfUFJJTUlUSVZFID0gW2lzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZF07XG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwibnVtYmVyXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bWJvbCh4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCh4KSB7XG4gICAgcmV0dXJuIHggPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQoeCkge1xuICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUoeCkge1xuICAgIHJldHVybiBUWVBFX0dVQVJEU19QUklNSVRJVkUuc29tZShmID0+IGYoeCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9uUHJpbWl0aXZlKHgpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHgpO1xufVxuZnVuY3Rpb24gbmFtZWRGdW5jdGlvbihuYW1lLCBmdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1biwgXCJuYW1lXCIsIHsgdmFsdWU6IG5hbWUsIHdyaXRhYmxlOiBmYWxzZSB9KTtcbn1cbmZ1bmN0aW9uIG5hbWVkVHlwZUd1YXJkKGNyZWF0b3IsIHR5cGUsIHR5cGVHdWFyZCkge1xuICAgIHJldHVybiBuYW1lZEZ1bmN0aW9uKGAke2NyZWF0b3IubmFtZX0oJHt0eXBlLm5hbWV9KWAsIHR5cGVHdWFyZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXModHlwZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gKF8pID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZWRUeXBlR3VhcmQoaXMsIHR5cGUsICh4KSA9PiB4IGluc3RhbmNlb2YgdHlwZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNMaWtlKHJlZmVyZW5jZSkge1xuICAgIGZvciAoY29uc3QgZiBvZiBUWVBFX0dVQVJEU19QUklNSVRJVkUpIHtcbiAgICAgICAgaWYgKGYocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuICh4KSA9PiBmKHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpcyhBcnJheSkocmVmZXJlbmNlKSkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VBc0FycmF5ID0gcmVmZXJlbmNlO1xuICAgICAgICByZXR1cm4gKHgpID0+IGlzKEFycmF5KSh4KSAmJiAocmVmZXJlbmNlQXNBcnJheS5sZW5ndGggPiAwID8geC5ldmVyeShpc0xpa2UocmVmZXJlbmNlQXNBcnJheVswXSkpIDogdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICByZXR1cm4gKHgpID0+ICghW3VuZGVmaW5lZCwgbnVsbF0uaW5jbHVkZXMoeClcbiAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVmZXJlbmNlKS5ldmVyeShrID0+IGlzTGlrZShyZWZlcmVuY2Vba10pKHhba10pKSk7XG4gICAgfVxuICAgIGlmIChyZWZlcmVuY2UuY29uc3RydWN0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gaXMocmVmZXJlbmNlLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihpc0xpa2UubmFtZSArIGAgY2Fubm90IHVzZSB0aGlzIG9iamVjdCBhcyByZWZlcmVuY2UgYmVjYXVzZSBpdCBoYXMgbm8gY29uc3RydWN0b3I6IGAgKyBKU09OLnN0cmluZ2lmeShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N5bWJvbCwgaXNOdWxsLCBpc1VuZGVmaW5lZCwgaXNQcmltaXRpdmUsIGlzTm9uUHJpbWl0aXZlLCBpcywgaXNMaWtlIH0gZnJvbSBcIi4vaXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBvbmx5Qm9vbGVhbnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzQm9vbGVhbik7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bWJlcnMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzTnVtYmVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5U3RyaW5ncyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNTdHJpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlTeW1ib2xzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1N5bWJvbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seU51bGxzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc051bGwpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHlVbmRlZmluZWRzKHhzKSB7XG4gICAgcmV0dXJuIHhzLmZpbHRlcihpc1VuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seVByaW1pdGl2ZXMoeHMpIHtcbiAgICByZXR1cm4geHMuZmlsdGVyKGlzUHJpbWl0aXZlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvbmx5T2JqZWN0cyh4cykge1xuICAgIHJldHVybiB4cy5maWx0ZXIoaXNOb25QcmltaXRpdmUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9ubHkodHlwZSkge1xuICAgIHJldHVybiAoeHMpID0+IHhzLmZpbHRlcihpcyh0eXBlKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gb25seUxpa2UocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuICh4cykgPT4geHMuZmlsdGVyKGlzTGlrZShyZWZlcmVuY2UpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9ubHkuanMubWFwIiwiZXhwb3J0IGNvbnN0IEFMV0FZUyA9ICgpID0+IHRydWU7XG5leHBvcnQgY29uc3QgTkVWRVIgPSAoKSA9PiBmYWxzZTtcbmV4cG9ydCBjb25zdCBET01DT05URU5UTE9BREVEID0gKHN0YXRlKSA9PiBzdGF0ZSAhPT0gXCJsb2FkaW5nXCI7XG5leHBvcnQgY29uc3QgTE9BRCA9IChzdGF0ZSkgPT4gc3RhdGUgPT09IFwiY29tcGxldGVcIjtcbiIsImltcG9ydCB7IHVubGluZXMgfSBmcm9tIFwibGluZXMtdW5saW5lc1wiO1xuY29uc3QgSU5ERU5UQVRJT04gPSBcIiAgXCI7XG5mdW5jdGlvbiBmb3JtYXREZXBlbmRlbmN5KGQpIHtcbiAgICByZXR1cm4gSU5ERU5UQVRJT04gKyBkLmtleSArIFwiOiBcIiArIGQuc2VsZWN0b3I7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwbGFuYXRpb24oZmFpbHVyZSkge1xuICAgIHN3aXRjaCAoZmFpbHVyZS5yZXN1bHQucmVhc29uKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiB1bmxpbmVzKFtcbiAgICAgICAgICAgICAgICBgVGhlc2UgZGVwZW5kZW5jaWVzIHdlcmUgbm90IGZvdW5kOmAsXG4gICAgICAgICAgICAgICAgYGAsXG4gICAgICAgICAgICAgICAgdW5saW5lcyhmYWlsdXJlLnJlc3VsdC5kZXBlbmRlbmNpZXMubWFwKGZvcm1hdERlcGVuZGVuY3kpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdW5saW5lcyhbXG4gICAgICAgICAgICAgICAgYFRoZSBvcGVyYXRpb24gZmFpbGVkIHdpdGggdGhpcyBlcnJvcjpgLFxuICAgICAgICAgICAgICAgIGBgLFxuICAgICAgICAgICAgICAgIGZhaWx1cmUucmVzdWx0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZURlc2NyaWJlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZhaWx1cmUgPT4gdW5saW5lcyhbXG4gICAgICAgIGBDb3VsZCBub3QgJHtmYWlsdXJlLm9wZXJhdGlvbi5kZXNjcmlwdGlvbn0gb24gdGhpcyBwYWdlOmAsXG4gICAgICAgIGBgLFxuICAgICAgICBJTkRFTlRBVElPTiArIGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGBgLFxuICAgICAgICBleHBsYW5hdGlvbihmYWlsdXJlKS50cmltKCksXG4gICAgICAgIGBgLFxuICAgICAgICBgVGhpcyBwcm9ibGVtIG1pZ2h0IGJlIGNhdXNlZCBieSAke2NvbnRleHQuc2l0ZU5hbWV9IGNoYW5naW5nIGl0cyBjb250ZW50L3N0cnVjdHVyZSwgaW4gd2hpY2ggY2FzZSAke2NvbnRleHQuZXh0ZW5zaW9uTmFtZX0gbmVlZHMgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBpdCdzIHByb2JhYmx5IGEgYnVnIGluICR7Y29udGV4dC5leHRlbnNpb25OYW1lfS5gLFxuICAgICAgICBgYCxcbiAgICAgICAgYElmIHlvdSBmaWxlIGEgYnVnIHJlcG9ydCwgcGxlYXNlIGluY2x1ZGUgdGhpcyBtZXNzYWdlLmAsXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tIFwiLi9vcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBwcmVmZXJlbmNlcyBmcm9tIFwiLi9wcmVmZXJlbmNlc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmltcG9ydCAqIGFzIHVzZXJzY3JpcHRlciBmcm9tIFwiLi91c2Vyc2NyaXB0ZXJcIjtcbmV4cG9ydCB7IGVudmlyb25tZW50LCBlcnJvcnMsIGxvZywgb3BlcmF0aW9ucywgcHJlZmVyZW5jZXMsIHN0eWxlc2hlZXRzLCB1c2Vyc2NyaXB0ZXIsIH07XG4iLCJsZXQgcHJlZml4ID0gXCJcIjtcbmxldCBsb2dnZXIgPSBjb25zb2xlO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWZpeChwKSB7XG4gICAgcHJlZml4ID0gcDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2dnZXIobCkge1xuICAgIGxvZ2dlciA9IGw7XG59XG5leHBvcnQgZnVuY3Rpb24gbG9nKHN0cikge1xuICAgIGxvZ2dlci5sb2cocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluZm8oc3RyKSB7XG4gICAgbG9nZ2VyLmluZm8ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcoc3RyKSB7XG4gICAgbG9nZ2VyLndhcm4ocHJlZml4LCBzdHIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0cikge1xuICAgIGxvZ2dlci5lcnJvcihwcmVmaXgsIHN0cik7XG59XG4iLCJpbXBvcnQgeyBpc051bGwsIGlzTnVtYmVyLCBpc1N0cmluZyB9IGZyb20gXCJ0cy10eXBlLWd1YXJkc1wiO1xuY29uc3QgU1VDQ0VTUyA9IHVuZGVmaW5lZDtcbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRpb24oc3BlYykge1xuICAgIHJldHVybiBzcGVjO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwbGFuKSB7XG4gICAgZnVuY3Rpb24gcmVjdXJzZShvcGVyYXRpb25zLCBmYWlsdXJlcywgdHJpZXNMZWZ0KSB7XG4gICAgICAgIGNvbnN0IGxhc3RUcnkgPSBpc051bWJlcih0cmllc0xlZnQpICYmIHRyaWVzTGVmdCA8PSAwO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zVG9SdW5Ob3cgPSBbXTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gW107XG4gICAgICAgIGNvbnN0IHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9ucykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkUnVuTm93ID0gby5kZWZlclVudGlsID09PSB1bmRlZmluZWQgfHwgby5kZWZlclVudGlsKHJlYWR5U3RhdGUpO1xuICAgICAgICAgICAgKHNob3VsZFJ1bk5vdyA/IG9wZXJhdGlvbnNUb1J1bk5vdyA6IHJlbWFpbmluZykucHVzaChvKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG8gb2Ygb3BlcmF0aW9uc1RvUnVuTm93KSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlUb1BlcmZvcm0obyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBTVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQucmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUcnkgPyBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSkgOiByZW1haW5pbmcucHVzaChvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsdXJlcy5wdXNoKHsgcmVzdWx0LCBvcGVyYXRpb246IG8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbWFpbmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlY3Vyc2UocmVtYWluaW5nLCBmYWlsdXJlcywgKGlzTnVtYmVyKHRyaWVzTGVmdClcbiAgICAgICAgICAgICAgICA/IHRyaWVzTGVmdCAtIDFcbiAgICAgICAgICAgICAgICA6IHBsYW4udHJ5VW50aWwocmVhZHlTdGF0ZSkgPyBwbGFuLmV4dHJhVHJpZXMgOiB1bmRlZmluZWQpKSwgcGxhbi5pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmFpbHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcGxhbi5oYW5kbGVGYWlsdXJlcyhmYWlsdXJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShwbGFuLm9wZXJhdGlvbnMuZmlsdGVyKG8gPT4gby5jb25kaXRpb24od2luZG93KSksIFtdKTtcbn1cbmZ1bmN0aW9uIHRyeVRvUGVyZm9ybShvKSB7XG4gICAgY29uc3QgZGVwZW5kZW5jaWVzID0gby5kZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCA/IHt9IDogby5kZXBlbmRlbmNpZXM7XG4gICAgY29uc3QgcXVlcnlSZXN1bHRzID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzKS5tYXAoKFtrZXksIHNlbGVjdG9yXSkgPT4gKHtcbiAgICAgICAga2V5LCBzZWxlY3RvcixcbiAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvciksXG4gICAgfSkpO1xuICAgIGNvbnN0IG1pc3NpbmdEZXBlbmRlbmNpZXMgPSBxdWVyeVJlc3VsdHMuZmlsdGVyKHggPT4gaXNOdWxsKHguZWxlbWVudCkpO1xuICAgIGlmIChtaXNzaW5nRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHsgcmVhc29uOiAwLCBkZXBlbmRlbmNpZXM6IG1pc3NpbmdEZXBlbmRlbmNpZXMgfTtcbiAgICB9XG4gICAgY29uc3QgZSA9IHF1ZXJ5UmVzdWx0cy5yZWR1Y2UoKGFjYywgeCkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGFjYywgeC5rZXksIHsgdmFsdWU6IHguZWxlbWVudCB9KSwge30pO1xuICAgIHJldHVybiBmcm9tQWN0aW9uUmVzdWx0KG8uYWN0aW9uKGUpKTtcbn1cbmZ1bmN0aW9uIGZyb21BY3Rpb25SZXN1bHQocikge1xuICAgIHJldHVybiBpc1N0cmluZyhyKSA/IHsgcmVhc29uOiAxLCBtZXNzYWdlOiByIH0gOiBTVUNDRVNTO1xufVxuIiwiaW1wb3J0ICogYXMgbG9nIGZyb20gXCIuL2xvZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmlwdGFibGUoaGFuZGxlcikge1xuICAgIGNvbnN0IGNoYW5nZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgdW5zdWJzY3JpYmU6IChsaXN0ZW5lcikgPT4geyBjaGFuZ2VMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTsgfSxcbiAgICAgICAgaGFuZGxlcjogKHN1bW1hcnksIHByZWZlcmVuY2VzKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmID0+IGYoc3VtbWFyeS5wcmVmZXJlbmNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcihzdW1tYXJ5LCBwcmVmZXJlbmNlcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsb2dnaW5nUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIHByZWZlcmVuY2VzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBzdW1tYXJ5LnJlc3BvbnNlO1xuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgKCR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2Uuc2F2ZWQpfSkgd2FzIGludmFsaWQuIFJlcGxhY2luZyBpdCB3aXRoICR7SlNPTi5zdHJpbmdpZnkocmVzcG9uc2UudmFsdWUpfS5gKTtcbiAgICAgICAgICAgICAgICBwcmVmZXJlbmNlcy5zZXQoc3VtbWFyeS5wcmVmZXJlbmNlLCByZXNwb25zZS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VtbWFyeS5hY3Rpb24gPT09IFwic2V0XCIpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybmluZyhgQ291bGQgbm90IHNldCB2YWx1ZSAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnZhbHVlKX0gZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGJlY2F1c2UgaXQgd2FzIGludmFsaWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChzdW1tYXJ5LmFjdGlvbiA9PT0gXCJnZXRcIikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuaW5nKGBUaGUgc2F2ZWQgdmFsdWUgZm9yIHByZWZlcmVuY2UgJyR7c3VtbWFyeS5wcmVmZXJlbmNlLmtleX0nIGhhZCB0aGUgd3JvbmcgdHlwZS4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKHN1bW1hcnkuYWN0aW9uID09PSBcImdldFwiKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm5pbmcoYFRoZSBzYXZlZCB2YWx1ZSBmb3IgcHJlZmVyZW5jZSAnJHtzdW1tYXJ5LnByZWZlcmVuY2Uua2V5fScgY291bGQgbm90IGJlIHBhcnNlZC4gUmVwbGFjaW5nIGl0IHdpdGggJHtKU09OLnN0cmluZ2lmeShyZXNwb25zZS52YWx1ZSl9LmApO1xuICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzLnNldChzdW1tYXJ5LnByZWZlcmVuY2UsIHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc3dpdGNoIChzdW1tYXJ5LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgcmVhZCBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuIFVzaW5nIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5wcmVmZXJlbmNlLmRlZmF1bHQpfS5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBzYXZlIHZhbHVlICR7SlNPTi5zdHJpbmdpZnkoc3VtbWFyeS5yZXNwb25zZS52YWx1ZSl9IGZvciBwcmVmZXJlbmNlICcke3N1bW1hcnkucHJlZmVyZW5jZS5rZXl9JyBiZWNhdXNlIGxvY2FsU3RvcmFnZSBjb3VsZCBub3QgYmUgYWNjZXNzZWQuYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydFVucmVhY2hhYmxlKHN1bW1hcnkuYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhc3NlcnRVbnJlYWNoYWJsZShyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub29wUmVzcG9uc2VIYW5kbGVyKHN1bW1hcnksIF8pIHtcbiAgICByZXR1cm4gc3VtbWFyeS5yZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGFzc2VydFVucmVhY2hhYmxlKHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRVbnJlYWNoYWJsZTogXCIgKyB4KTtcbn1cbiIsImNvbnN0IE1BVENIX0FMTCA9IFwiYWxsXCI7XG5jb25zdCBNQVRDSF9OT05FID0gXCJub3QgYWxsXCI7XG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzaGVldChzcGVjKSB7XG4gICAgcmV0dXJuIHNwZWM7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0KHN0eWxlc2hlZXRzKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzaGVldHMpLmZvckVhY2goKFtfLCBzaGVldF0pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIGlmIChzaGVldC5pZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgc3R5bGUuaWQgPSBzaGVldC5pZDtcbiAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzaGVldC5jc3M7XG4gICAgICAgIHN0eWxlLm1lZGlhID0gc2hlZXQuY29uZGl0aW9uKHdpbmRvdykgPyBNQVRDSF9BTEwgOiBNQVRDSF9OT05FO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn1cbmNvbnN0IHNldE1lZGlhUXVlcnkgPSAobSkgPT4gKHMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocy5pZCk7XG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtKTtcbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGVuYWJsZSA9IHNldE1lZGlhUXVlcnkoTUFUQ0hfQUxMKTtcbmV4cG9ydCBjb25zdCBkaXNhYmxlID0gc2V0TWVkaWFRdWVyeShNQVRDSF9OT05FKTtcbiIsImltcG9ydCAqIGFzIGxvZyBmcm9tIFwiLi9sb2dcIjtcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgc3R5bGVzaGVldHMgZnJvbSBcIi4vc3R5bGVzaGVldHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBydW4odXNlcnNjcmlwdCkge1xuICAgIGxvZy5zZXRQcmVmaXgoYFske3VzZXJzY3JpcHQubmFtZX1dYCk7XG4gICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSh1c2Vyc2NyaXB0LmlkKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBsb2cud2FybmluZyhgSXQgbG9va3MgYXMgdGhvdWdoICR7dXNlcnNjcmlwdC5uYW1lfSBoYXMgYWxyZWFkeSBydW4gKGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBcIiR7YXR0cn1cIiB3YXMgZm91bmQgb24gPGhlYWQ+KS4gU3RvcHBpbmcuYCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIFwiXCIpO1xuICAgICAgICB1c2Vyc2NyaXB0LmluaXRpYWxBY3Rpb24oKTtcbiAgICAgICAgc3R5bGVzaGVldHMuaW5zZXJ0KHVzZXJzY3JpcHQuc3R5bGVzaGVldHMpO1xuICAgICAgICBvcGVyYXRpb25zLnJ1bih1c2Vyc2NyaXB0Lm9wZXJhdGlvbnNQbGFuKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoaWQpIHtcbiAgICByZXR1cm4gXCJkYXRhLVwiICsgaWQgKyBcIi1oYXMtcnVuXCI7XG59XG4iLCIvLyBUaGlzIGZpbGUgY2Fubm90IGNvbnRhaW4gV2VicGFjay1yZXNvbHZlZCBpbXBvcnRzIChlLmcuIFwifnNyYy9mb29cIikuXG5cbmV4cG9ydCBjb25zdCBPUEVSQVRJT05TX0lOVEVSVkFMID0gMjAwOyAvLyBtc1xuZXhwb3J0IGNvbnN0IE9QRVJBVElPTlNfRVhUUkFfVFJJRVMgPSAzO1xuIiwiY29uc3QgYXJyID0gQXJyYXkuZnJvbTtcblxuY29uc3QgZXh0cmFjdExpbmtlZFRleHQgPSAobm9kZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHRtcE5vZGUgPSBub2RlLmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICBhcnIodG1wTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZm9yRWFjaChcbiAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJUZXh0ID0gYFske2VsLmlubmVyVGV4dH1dKCR7ZWwuaHJlZn0pYClcbiAgICApO1xuICAgIHJldHVybiB0bXBOb2RlLmlubmVyVGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRhYmxlQXNKc29uKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogb2JqZWN0IHtcbiAgICAvLyBJZGVhbGx5IGZpcnN0IGNoZWNrIGlmIHRhYmxlIGlzIFwicmVndWxhclwiIGFrYSBoYXMgZXF1YWwgbnVtYmVyIG9mIHRoIHRvIHRkL3RyXG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAodGFibGUudEhlYWQgIT09IG51bGwpIHtcbiAgICAgICAga2V5cyA9IGFycih0YWJsZS50SGVhZC5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgICAgICBleHRyYWN0TGlua2VkVGV4dChlbClcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gYXJyKHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0aFwiKSkubWFwKChlbCkgPT5cbiAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyKHRhYmxlLnRCb2RpZXMpLmZsYXRNYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUdmbVRhYmxlKHRhYmxlOiBIVE1MVGFibGVFbGVtZW50KSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gW107XG4gICAga2V5cyA9IGFycih0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikpLm1hcCgoZWwpID0+XG4gICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICk7XG4gICAgcmV0dXJuIGFycih0YWJsZS50Qm9kaWVzKS5tYXAoKGVsKSA9PlxuICAgICAgICBhcnIoZWwucXVlcnlTZWxlY3RvckFsbChcInRyXCIpKS5tYXAoKHRhYmxlUm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQ2VsbHMgPSBhcnIodGFibGVSb3cucXVlcnlTZWxlY3RvckFsbChcInRkXCIpKS5tYXAoKGVsKSA9PlxuICAgICAgICAgICAgICAgIGV4dHJhY3RMaW5rZWRUZXh0KGVsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkYXRhQ2VsbHMubGVuZ3RoICE9PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkZvdW5kIGEgcm93IHdpdGggYSBtaXNtYXRjaFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhQ2VsbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgKHRhYmxlUm93LCBkYXRhS2V5LCBpZHgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRhYmxlUm93LFxuICAgICAgICAgICAgICAgICAgICBbZGF0YUtleV06IGRhdGFDZWxsc1tpZHhdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaHRtbFRyZWVTZWxlY3Rpb24oKTogUHJvbWlzZTxIVE1MRWxlbWVudD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAvLyBUT0RPIHNlbGVjdCB2aWEga2V5Ym9hcmQ/XG4gICAgbGV0IGNsaWNrYWJsZSA9IFtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnV0dG9uXCIpLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltyb2xlPWJ1dHRvbl1cIiksXG4gICAgXTtcbiAgICBjb25zdCBpZnJhbWVPdmVybGF5czoge1xuICAgICAgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAgIG92ZXJsYXk6IEhUTUxEaXZFbGVtZW50O1xuICAgIH1bXSA9IFtdO1xuXG4gICAgbGV0IGxhc3RFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBsZXQgb3ZlckhhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxhc3RFbGVtZW50ID0gdGFyZ2V0O1xuXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpKSB7XG4gICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgIGxldCBpZnJhbWUgPVxuICAgICAgICAgICAgaWZyYW1lT3ZlcmxheXNbcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKV0uaWZyYW1lO1xuICAgICAgICAgIGlmcmFtZS5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJmYWlsZWQgdG8gZmluZCBpZnJhbWVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIGxldCBvdXRIYW5kbGVyID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3Rpb25DbGFzcyA9IFwiaHRtbC10cmVlLXNlbGVjdGlvblwiO1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0aW9uQ2xhc3MpKSB7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdGlvbkNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIGxldCBjbGlja0hhbmRsZXIgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgIGRpc2FibGUoKTtcblxuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpKSB7XG4gICAgICAgIGlmICh0YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgICAgICAgIHRhcmdldCA9IGlmcmFtZU92ZXJsYXlzW3BhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCldLmlmcmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJtYXliZSBmYWlsZWQgdG8gZmluZCBpZnJhbWU/XCIsIHRhcmdldCwgaWZyYW1lT3ZlcmxheXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUodGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgbGV0IGRpc2FibGUgPSAoKSA9PiB7XG4gICAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICBjW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjW2ldLm9uY2xpY2tCYWNrdXApO1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICBkZWxldGUgY1tpXS5vbmNsaWNrQmFja3VwO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWZyYW1lT3ZlcmxheXMuZm9yRWFjaCgobykgPT4gby5vdmVybGF5LnJlbW92ZSgpKTtcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJodG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvclwiKTtcblxuICAgICAgLy8gY2xlYW4gYW55IG9ycGhhbmVkIGhvdmVyIGFwcGxpZWQgY2xhc3NcbiAgICAgIGxldCBvcnBoYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh0bWwtdHJlZS1zZWxlY3Rpb25cIik7XG4gICAgICBpZiAob3JwaGFuICE9PSBudWxsKSB7XG4gICAgICAgIG9ycGhhbi5jbGFzc0xpc3QucmVtb3ZlKFwiaHRtbC10cmVlLXNlbGVjdGlvblwiKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBvdmVySGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb3V0SGFuZGxlcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIsIHRydWUpO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVPdmVybGF5UG9zaXRpb25zKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3ROb2RlID0gKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWwuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3ZlclwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH07XG4gICAgY29uc3QgdW5zZWxlY3ROb2RlID0gKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWwuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcIm1vdXNlb3V0XCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBjbGVhckN1cnJlbnRTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICBjbGlja2FibGUuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB1bnNlbGVjdE5vZGUoY1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbW92ZVNlbGVjdGlvblRvRWxlbWVudCA9IChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgY2xlYXJDdXJyZW50U2VsZWN0aW9uKCk7XG4gICAgICBzZWxlY3ROb2RlKGVsKTtcbiAgICB9O1xuICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub1BhcmVudCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGxhc3RFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQocGFyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub0NoaWxkID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBsYXN0RWxlbWVudC5jaGlsZHJlbiAmJiBsYXN0RWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICBtb3ZlU2VsZWN0aW9uVG9FbGVtZW50KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG1vdmVTZWxlY3Rpb25Ub05leHRTaWJsaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2libGluZyA9IGxhc3RFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChzaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgIG1vdmVTZWxlY3Rpb25Ub0VsZW1lbnQoc2libGluZyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBtb3ZlU2VsZWN0aW9uVG9QcmV2U2libGluZyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNpYmxpbmcgPSBsYXN0RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKHNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgbW92ZVNlbGVjdGlvblRvRWxlbWVudChzaWJsaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IGtleUhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaCA9IHtcbiAgICAgICAgRXNjYXBlOiBkaXNhYmxlLFxuICAgICAgICBBcnJvd0xlZnQ6IG1vdmVTZWxlY3Rpb25Ub1BhcmVudCxcbiAgICAgICAgQXJyb3dSaWdodDogbW92ZVNlbGVjdGlvblRvQ2hpbGQsXG4gICAgICAgIEFycm93VXA6IG1vdmVTZWxlY3Rpb25Ub05leHRTaWJsaW5nLFxuICAgICAgICBBcnJvd0Rvd246IG1vdmVTZWxlY3Rpb25Ub1ByZXZTaWJsaW5nLFxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUuZGVidWcoZS5rZXkpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgaGFuZGxlciA9IGhbZS5rZXldO1xuICAgICAgaGFuZGxlciAmJiBoYW5kbGVyKCk7XG4gICAgfTtcblxuICAgIGxldCB1cGRhdGVPdmVybGF5UG9zaXRpb25zID0gKF9lOiBFdmVudCkgPT4ge1xuICAgICAgaWZyYW1lT3ZlcmxheXMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgICBsZXQgaWZyYW1lID0gby5pZnJhbWU7XG4gICAgICAgIGxldCBpZnJhbWVDbGllbnRSZWN0ID0gaWZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgb3ZlcmxheSA9IG8ub3ZlcmxheTtcbiAgICAgICAgbGV0IG9mZnNldFggPSBpZnJhbWVDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgICAgbGV0IG9mZnNldFkgPSBpZnJhbWVDbGllbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgIG92ZXJsYXkuc3R5bGUudG9wID0gYCR7b2Zmc2V0WX1weGA7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIGVuYWJsZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHVwZGF0ZU92ZXJsYXlQb3NpdGlvbnMpO1xuXG4gICAgLy8gb3ZlcnJpZGUgY2xpY2sgaGFuZGxlcnMgb24gYW55IGNsaWNrYWJsZSBlbGVtZW50XG4gICAgY2xpY2thYmxlLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGNbaV0ub25jbGlja0JhY2t1cCA9IGNbaV0ub25jbGljaztcbiAgICAgICAgY1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBpZnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKTtcblxuICAgIGlmcmFtZXMuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGlmcmFtZUNsaWVudFJlY3QgPSBpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IG9mZnNldFggPSBpZnJhbWVDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbiAgICAgIGxldCBvZmZzZXRZID0gaWZyYW1lQ2xpZW50UmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaHRtbC10cmVlLXNlbGVjdGlvbi1vdmVybGF5XCIpO1xuICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBgJHtvZmZzZXRZfXB4YDtcbiAgICAgIG92ZXJsYXkuc3R5bGUubGVmdCA9IGAke29mZnNldFh9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IGAke2lmcmFtZUNsaWVudFJlY3Qud2lkdGh9cHhgO1xuICAgICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBgJHtpZnJhbWVDbGllbnRSZWN0LmhlaWdodH1weGA7XG5cbiAgICAgIG92ZXJsYXkuZGF0YXNldC5pbmRleCA9IGAke2lmcmFtZU92ZXJsYXlzLmxlbmd0aH1gO1xuXG4gICAgICBpZnJhbWVPdmVybGF5cy5wdXNoKHtcbiAgICAgICAgaWZyYW1lOiBpLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb3ZlckhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvdXRIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlIYW5kbGVyLCB0cnVlKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWRkVG9DbGlwYm9hcmQgPSAoY29udGVudDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBlcm1pc3Npb25OYW1lID0gXCJjbGlwYm9hcmQtd3JpdGVcIiBhcyBQZXJtaXNzaW9uTmFtZTtcbiAgcmV0dXJuIG5hdmlnYXRvci5wZXJtaXNzaW9uc1xuICAgIC5xdWVyeSh7IG5hbWU6IHBlcm1pc3Npb25OYW1lIH0pXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5zdGF0ZSA9PSBcImdyYW50ZWRcIiB8fCByZXN1bHQuc3RhdGUgPT0gXCJwcm9tcHRcIikge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29udGVudCkudGhlbigoKSA9PiB7fSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJQZXJtaXNzaW9uIGZvciBjbGlwYm9hcmQtd3JpdGUgd2FzIG5vdCBvYnRhaW5lZCBcIiArIHJlc3VsdC5zdGF0ZVxuICAgICAgKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlbGVtOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10gPT4ge1xuICBjb25zdCBzaWJsaW5ncyA9IFtdO1xuICBsZXQgc2libGluZyA9IGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgaWYgKCFzaWJsaW5nKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcbiAgd2hpbGUgKHNpYmxpbmcpIHtcbiAgICBpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtKSB7XG4gICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcgYXMgSFRNTEVsZW1lbnQpO1xuICAgIH1cbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cblxuICByZXR1cm4gc2libGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgYXBwZW5kQnRuVG9FbGVtZW50cyA9IDxaIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KFxuICBlbGVtZW50czogTm9kZUxpc3RPZjxaPixcbiAgY2xpY2tIYW5kbGVyOiAoZTogWiwgYTogRXZlbnQpID0+IHZvaWQsXG4gIG1vZGlmeUJ0bjogKGI6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG4pOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoY29kZUJsb2NrKSA9PiB7XG4gICAgY29kZUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC10YXJnZXRcIik7XG4gICAgY29kZUJsb2NrLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImphY2tzLWRldi1oZWxwZXJzLW91dGVyLXdyYXBcIiA+JHtjb2RlQmxvY2suaW5uZXJIVE1MfTwvc3Bhbj5gO1xuICAgIGNvbnN0IGNvcHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb3B5QnRuLmNsYXNzTGlzdC5hZGQoXCJqYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXRcIik7XG4gICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0bXBDb2RlQmxvY2sgPSBjb2RlQmxvY2suY2xvbmVOb2RlKHRydWUpIGFzIFo7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRtcENvZGVCbG9jay5jaGlsZHJlbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNoaWxkQ29tcG9uZW50LmNsYXNzTGlzdC5jb250YWlucyhcImphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICB0bXBDb2RlQmxvY2sucmVtb3ZlQ2hpbGQoY2hpbGRDb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjbGlja0hhbmRsZXIodG1wQ29kZUJsb2NrIGFzIFosIGV2ZW50KTtcbiAgICB9KTtcbiAgICBtb2RpZnlCdG4oY29weUJ0bik7XG4gICAgY29kZUJsb2NrLmFwcGVuZENoaWxkKGNvcHlCdG4pO1xuICAgIHJldHVybiBjb3B5QnRuO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnN0YWxsRXNNb2R1bGUobW9kdWxlVXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJtb2R1bGVcIik7XG4gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbW9kdWxlVXJsKTtcbiAgY29uc3QgaGVhZCA9XG4gICAgZG9jdW1lbnQuaGVhZCB8fFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSB8fFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBoZWFkLmxhc3RDaGlsZCk7XG59XG4iLCJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcIkB0eXBlZC9jb21wb3NlXCI7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCwgZXJyb3JzLCBsb2csIHVzZXJzY3JpcHRlciB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXJcIjtcblxuaW1wb3J0ICogYXMgQ09ORklHIGZyb20gXCJ+c3JjL2NvbmZpZ1wiO1xuaW1wb3J0IE9QRVJBVElPTlMgZnJvbSBcIn5zcmMvb3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgU0lURSBmcm9tIFwifnNyYy9zaXRlXCI7XG5pbXBvcnQgU1RZTEVTSEVFVFMgZnJvbSBcIn5zcmMvc3R5bGVzaGVldHNcIjtcbmltcG9ydCBVIGZyb20gXCJ+c3JjL3VzZXJzY3JpcHRcIjtcblxuY29uc3QgZGVzY3JpYmVGYWlsdXJlID0gZXJyb3JzLmZhaWx1cmVEZXNjcmliZXIoe1xuICAgIHNpdGVOYW1lOiBTSVRFLk5BTUUsXG4gICAgZXh0ZW5zaW9uTmFtZTogVS5uYW1lLFxuICAgIGxvY2F0aW9uOiBkb2N1bWVudC5sb2NhdGlvbixcbn0pO1xuXG51c2Vyc2NyaXB0ZXIucnVuKHtcbiAgICBpZDogVS5pZCxcbiAgICBuYW1lOiBVLm5hbWUsXG4gICAgaW5pdGlhbEFjdGlvbjogKCkgPT4gbG9nLmxvZyhgJHtVLm5hbWV9ICR7VS52ZXJzaW9ufWApLFxuICAgIHN0eWxlc2hlZXRzOiBTVFlMRVNIRUVUUyxcbiAgICBvcGVyYXRpb25zUGxhbjoge1xuICAgICAgICBvcGVyYXRpb25zOiBPUEVSQVRJT05TLFxuICAgICAgICBpbnRlcnZhbDogQ09ORklHLk9QRVJBVElPTlNfSU5URVJWQUwsXG4gICAgICAgIHRyeVVudGlsOiBlbnZpcm9ubWVudC5ET01DT05URU5UTE9BREVELFxuICAgICAgICBleHRyYVRyaWVzOiBDT05GSUcuT1BFUkFUSU9OU19FWFRSQV9UUklFUyxcbiAgICAgICAgaGFuZGxlRmFpbHVyZXM6IGZhaWx1cmVzID0+IGZhaWx1cmVzLmZvckVhY2goY29tcG9zZShsb2cuZXJyb3IsIGRlc2NyaWJlRmFpbHVyZSkpLFxuICAgIH0sXG59KTtcbiIsImltcG9ydCBwYXJzZUdpdFVybCBmcm9tIFwiZ2l0LXVybC1wYXJzZVwiO1xuaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IGRlZXBFbnRyaWVzLCBkZWxpbWl0RW50cnkgfSBmcm9tIFwiZGVlcC1lbnRyaWVzXCI7XG5pbXBvcnQgeyBPcGVyYXRpb24sIG9wZXJhdGlvbiB9IGZyb20gXCJ1c2Vyc2NyaXB0ZXIvbGliL29wZXJhdGlvbnNcIjtcbmltcG9ydCB7IGFkZFRvQ2xpcGJvYXJkIH0gZnJvbSBcIi4vaGVscGVycy91dGlsc1wiO1xuaW1wb3J0IHsgZXh0cmFjdFRhYmxlQXNKc29uIH0gZnJvbSBcIi4vaGVscGVycy9leHRyYWN0VGFibGVJbmZvXCI7XG5pbXBvcnQgeyBodG1sVHJlZVNlbGVjdGlvbiB9IGZyb20gXCIuL2hlbHBlcnMvaHRtbFRyZWVTZWxlY3Rpb25cIjtcblxuY29uc3QgT1BFUkFUSU9OUzogUmVhZG9ubHlBcnJheTxPcGVyYXRpb248YW55Pj4gPSBbXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiSGFja3kgYXV0b21hdGUgcGFnZSBpbnRlcmFjdGlvblwiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgIGNvbnN0IGF1dG9FdmFsU3RyID0gdXJsUGFyYW1zLmdldChcImhhY2t5RGFuZ2VyU2NyaXB0XCIpO1xuICAgICAgaWYgKGF1dG9FdmFsU3RyID09PSBudWxsKSByZXR1cm47XG4gICAgICBjb25zdCBhdXRvRXZhbENtZCA9IGF0b2IoYXV0b0V2YWxTdHIpO1xuICAgICAgaWYgKFxuICAgICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGhhY2t5ZGFuZ2VyLWFsbG93ZWQtJHthdXRvRXZhbFN0cn1gKSAmJlxuICAgICAgICBjb25maXJtKFwiT2sgdG8gcnVuIGNvbW1hbmQ/XCIpXG4gICAgICApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgYGhhY2t5ZGFuZ2VyLWFsbG93ZWQtJHthdXRvRXZhbFN0cn1gLFxuICAgICAgICAgIFwic3VyZXRoaXNpc3RvdHRhbGx5c2FmZVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgaGFja3lkYW5nZXItYWxsb3dlZC0ke2F1dG9FdmFsU3RyfWApICYmXG4gICAgICAgIGV2YWwoYXV0b0V2YWxDbWQpO1xuICAgIH0sXG4gIH0pLFxuICBvcGVyYXRpb24oe1xuICAgIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGUgcGFyc2UgZ2l0aHViIHVybFwiLFxuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgd2luZG93LnBhcnNlR2l0VXJsID0gcGFyc2VHaXRVcmw7XG4gICAgfSxcbiAgfSksXG4gIG9wZXJhdGlvbih7XG4gICAgZGVzY3JpcHRpb246IFwiUHJvdmlkZSBoZWxwZXIgZnVuY3MgZm9yIHN1cmZpbmdrZXlzXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuaHRtbFRyZWVTZWxlY3Rpb24gPSBodG1sVHJlZVNlbGVjdGlvbjtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJQcm92aWRlIGhlbHBlciBmdW5jcyBmb3IgZGV2IGNvbnNvbGVcIixcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmRLZXlEZWVwID0gKG9iajogb2JqZWN0LCBzdHI6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBmbGF0T2JqID0gZGVlcEVudHJpZXMob2JqLCBkZWxpbWl0RW50cnkpO1xuICAgICAgICByZXR1cm4gZmxhdE9iai5maWx0ZXIoKFtrLCBfdmFsdWVdOiBbc3RyaW5nLCB1bmtub3duXSkgPT5cbiAgICAgICAgICBrLmluY2x1ZGVzKHN0cilcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB3aW5kb3cuZmluZEtleURlZXAgPSBmaW5kS2V5RGVlcDtcbiAgICB9LFxuICB9KSxcbiAgb3BlcmF0aW9uKHtcbiAgICBkZXNjcmlwdGlvbjogXCJDb3B5IHRhYmxlIGFzIGpzb24gdmlhIHJpZ2h0IGNsaWNrXCIsXG4gICAgY29uZGl0aW9uOiBBTFdBWVMsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBsZXQgbWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiBjbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1heWJlVGFibGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghbWVudUFjdGl2ZSAmJiBtYXliZVRhYmxlIGluc3RhbmNlb2YgSFRNTFRhYmxlRWxlbWVudCkge1xuICAgICAgICAgIEdNX3JlZ2lzdGVyTWVudUNvbW1hbmQoXCJDb3B5IHRoaXMgdGFibGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGVKc29uID0gZXh0cmFjdFRhYmxlQXNKc29uKG1heWJlVGFibGUpO1xuICAgICAgICAgICAgYWRkVG9DbGlwYm9hcmQoSlNPTi5zdHJpbmdpZnkodGFibGVKc29uLCBudWxsLCA0KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVudUFjdGl2ZSAmJiAhKG1heWJlVGFibGUgaW5zdGFuY2VvZiBIVE1MVGFibGVFbGVtZW50KSkge1xuICAgICAgICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChcIkNvcHkgdGhpcyB0YWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBPUEVSQVRJT05TO1xuIiwiLy8gVGhpcyBmaWxlIGNhbm5vdCBjb250YWluIFdlYnBhY2stcmVzb2x2ZWQgaW1wb3J0cyAoZS5nLiBcIn5zcmMvZm9vXCIpLlxuXG5pbXBvcnQgVSBmcm9tIFwiLi91c2Vyc2NyaXB0XCI7XG5cbmV4cG9ydCBjb25zdCBOQU1FID0gVS5zaXRlbmFtZTtcbmV4cG9ydCBjb25zdCBIT1NUTkFNRSA9IFUuaG9zdG5hbWU7XG5leHBvcnQgY29uc3QgU0VMRUNUT1JfQ09ERSA9IFwiY29kZVwiO1xuIiwiaW1wb3J0IHsgQUxXQVlTIH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvZW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IFN0eWxlc2hlZXRzLCBzdHlsZXNoZWV0IH0gZnJvbSBcInVzZXJzY3JpcHRlci9saWIvc3R5bGVzaGVldHNcIjtcblxuY29uc3QgU1RZTEVTSEVFVFMgPSB7XG4gIGdlbmVyYWw6IHN0eWxlc2hlZXQoe1xuICAgIGNvbmRpdGlvbjogQUxXQVlTLFxuICAgIGNzczogYFxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXdpZGdldCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuamFja3MtZGV2LWhlbHBlci1vdXRlci13cmFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmphY2tzLWRldi1oZWxwZXJzLWludGVyYWN0LXRhcmdldDpob3ZlciA+IC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5qYWNrcy1kZXYtaGVscGVycy1pbnRlcmFjdC13aWRnZXQ6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgLFxuICB9KSxcbiAgaHRtbFRyZWVTZWxlY3Rpb25PdmVybGF5OiBzdHlsZXNoZWV0KHtcbiAgICBjb25kaXRpb246IEFMV0FZUyxcbiAgICBjc3M6IGBcbjpyb290IHtcbiAgLS1odG1sLXRyZWUtc2VsZWN0aW9uLWljb24tdXJsOiBcIlwiXG59XG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYSxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBpbnB1dCxcbi5odG1sLXRyZWUtc2VsZWN0aW9uLWN1cnNvciBzZWxlY3QsXG4uaHRtbC10cmVlLXNlbGVjdGlvbi1jdXJzb3IgYnV0dG9uLFxuLmh0bWwtdHJlZS1zZWxlY3Rpb24tY3Vyc29yIGRpdltyb2xlPWJ1dHRvbl0ge1xuICBjdXJzb3I6IHZhcigtLWh0bWwtdHJlZS1zZWxlY3Rpb24taWNvbi11cmwpLCBjcm9zc2hhaXIgIWltcG9ydGFudDtcbn1cblxuLmh0bWwtdHJlZS1zZWxlY3Rpb24ge1xuICBmaWx0ZXI6IG9wYWNpdHkoMC4yKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyNXB4IHJnYmEoMjU1LDAsMCwuNSk7XG59XG5cbi5odG1sLXRyZWUtc2VsZWN0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGJhY2tncm91bmQ6XG4gICAgbm8tcmVwZWF0IGNlbnRlci83MCUgdmFyKC0taHRtbC10cmVlLXNlbGVjdGlvbi1pY29uLXVybCksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSlcbiAgICApO1xufVxuYCxcbiAgfSksXG59IGFzIGNvbnN0O1xuLy8gPHNwYW4gY2xhc3M9XCJ3My1iYWRnZVwiPjk8L3NwYW4+XG5cbi8vIFRoaXMgdHJpY2sgdW5jb3ZlcnMgdHlwZSBlcnJvcnMgaW4gU1RZTEVTSEVFVFMgd2hpbGUgcmV0YWluaW5nIHRoZSBzdGF0aWMga25vd2xlZGdlIG9mIGl0cyBwcm9wZXJ0aWVzIChzbyB3ZSBjYW4gc3RpbGwgd3JpdGUgZS5nLiBTVFlMRVNIRUVUUy5mb28pOlxuY29uc3QgXzogU3R5bGVzaGVldHMgPSBTVFlMRVNIRUVUUztcbnZvaWQgXztcblxuZXhwb3J0IGRlZmF1bHQgU1RZTEVTSEVFVFM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaWQ6IFwiamFja3MtZGV2LWhlbHBlcnNcIixcbiAgICBuYW1lOiBcIkphY2sncyBEZXYgSGVscGVyc1wiLFxuICAgIHZlcnNpb246IFwiMC4xLjBcIixcbiAgICBhdXRob3I6IFwiSmFjayBNY0Nvd25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJIb2RnZXBvZGdlIG9mIGRldiB1dGlsc1wiLFxuICAgIGhvc3RuYW1lOiBcIipcIixcbiAgICBuYW1lc3BhY2U6IFwiamFja21zY3JpcHRzXCIsXG4gICAgc2l0ZW5hbWU6IFwiZ29vZ2xlLmNvbVwiLFxuICAgIHJ1bkF0OiBcImRvY3VtZW50LWVuZFwiLFxufSBhcyBjb25zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=