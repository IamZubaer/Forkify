var e,t,r,n,o,s,a,i,u,l,c,f,p,d,y,v,m,h,g,b,B,C,A,_,j,E,w,x,S,R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function O(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function k(e){return e&&e.__esModule?e.default:e}var T={},H={},$=R.parcelRequire3a11;null==$&&(($=function(e){if(e in T)return T[e].exports;if(e in H){var t=H[e];delete H[e];var r={id:e,exports:{}};return T[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){H[e]=t},R.parcelRequire3a11=$),$.register("7He6T",function(e,t){var r=$("f4HGZ"),n=$("5WnCa"),o=$("gJrpv"),s=$("hN833");function a(e){return e.call.bind(e)}var i="undefined"!=typeof BigInt,u="undefined"!=typeof Symbol,l=a(Object.prototype.toString),c=a(Number.prototype.valueOf),f=a(String.prototype.valueOf),p=a(Boolean.prototype.valueOf);if(i)var d=a(BigInt.prototype.valueOf);if(u)var y=a(Symbol.prototype.valueOf);function v(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(e){return!1}}function m(e){return"[object Map]"===l(e)}function h(e){return"[object Set]"===l(e)}function g(e){return"[object WeakMap]"===l(e)}function b(e){return"[object WeakSet]"===l(e)}function B(e){return"[object ArrayBuffer]"===l(e)}function C(e){return"undefined"!=typeof ArrayBuffer&&(B.working?B(e):e instanceof ArrayBuffer)}function A(e){return"[object DataView]"===l(e)}function _(e){return"undefined"!=typeof DataView&&(A.working?A(e):e instanceof DataView)}e.exports.isArgumentsObject=r,e.exports.isGeneratorFunction=n,e.exports.isTypedArray=s,e.exports.isPromise=// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},e.exports.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):s(e)||_(e)},e.exports.isUint8Array=function(e){return"Uint8Array"===o(e)},e.exports.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===o(e)},e.exports.isUint16Array=function(e){return"Uint16Array"===o(e)},e.exports.isUint32Array=function(e){return"Uint32Array"===o(e)},e.exports.isInt8Array=function(e){return"Int8Array"===o(e)},e.exports.isInt16Array=function(e){return"Int16Array"===o(e)},e.exports.isInt32Array=function(e){return"Int32Array"===o(e)},e.exports.isFloat32Array=function(e){return"Float32Array"===o(e)},e.exports.isFloat64Array=function(e){return"Float64Array"===o(e)},e.exports.isBigInt64Array=function(e){return"BigInt64Array"===o(e)},e.exports.isBigUint64Array=function(e){return"BigUint64Array"===o(e)},m.working="undefined"!=typeof Map&&m(new Map),e.exports.isMap=function(e){return"undefined"!=typeof Map&&(m.working?m(e):e instanceof Map)},h.working="undefined"!=typeof Set&&h(new Set),e.exports.isSet=function(e){return"undefined"!=typeof Set&&(h.working?h(e):e instanceof Set)},g.working="undefined"!=typeof WeakMap&&g(new WeakMap),e.exports.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(g.working?g(e):e instanceof WeakMap)},b.working="undefined"!=typeof WeakSet&&b(new WeakSet),e.exports.isWeakSet=function(e){return b(e)},B.working="undefined"!=typeof ArrayBuffer&&B(new ArrayBuffer),e.exports.isArrayBuffer=C,A.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&A(new DataView(new ArrayBuffer(1),0,1)),e.exports.isDataView=_;// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var j="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function E(e){return"[object SharedArrayBuffer]"===l(e)}function w(e){return void 0!==j&&(void 0===E.working&&(E.working=E(new j)),E.working?E(e):e instanceof j)}function x(e){return v(e,c)}function S(e){return v(e,f)}function R(e){return v(e,p)}function O(e){return i&&v(e,d)}function k(e){return u&&v(e,y)}e.exports.isSharedArrayBuffer=w,e.exports.isAsyncFunction=function(e){return"[object AsyncFunction]"===l(e)},e.exports.isMapIterator=function(e){return"[object Map Iterator]"===l(e)},e.exports.isSetIterator=function(e){return"[object Set Iterator]"===l(e)},e.exports.isGeneratorObject=function(e){return"[object Generator]"===l(e)},e.exports.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===l(e)},e.exports.isNumberObject=x,e.exports.isStringObject=S,e.exports.isBooleanObject=R,e.exports.isBigIntObject=O,e.exports.isSymbolObject=k,e.exports.isBoxedPrimitive=function(e){return x(e)||S(e)||R(e)||O(e)||k(e)},e.exports.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(C(e)||w(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach(function(t){Object.defineProperty(e.exports,t,{enumerable:!1,value:function(){throw Error(t+" is not supported in userland")}})})}),$.register("f4HGZ",function(e,t){var r=$("3KyxH")(),n=$("hXu6F")("Object.prototype.toString"),o=function(e){return(!r||!e||"object"!=typeof e||!(Symbol.toStringTag in e))&&"[object Arguments]"===n(e)},s=function(e){return!!o(e)||null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==n(e)&&"[object Function]"===n(e.callee)},a=function(){return o(arguments)}();o.isLegacyArguments=s,e.exports=a?o:s}),$.register("3KyxH",function(e,t){var r=$("7YWkK");e.exports=function(){return r()&&!!Symbol.toStringTag}}),$.register("7YWkK",function(e,t){/* eslint complexity: [2, 18], max-statements: [2, 33] */e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}),$.register("hXu6F",function(e,t){var r=$("1zENl"),n=$("cOB0F"),o=n(r("String.prototype.indexOf"));e.exports=function(e,t){var s=r(e,!!t);return"function"==typeof s&&o(e,".prototype.")>-1?n(s):s}}),$.register("1zENl",function(e,t){var r,n=SyntaxError,o=Function,s=TypeError,a=function(e){try{return o('"use strict"; return ('+e+").constructor;")()}catch(e){}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch(e){i=null;// this is IE 8, which has a broken gOPD
}var u=function(){throw new s},l=i?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,u)}catch(e){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return i(arguments,"callee").get}catch(e){return u}}}():u,c=$("24qIq")(),f=$("dSRh6")(),p=Object.getPrototypeOf||(f?function(e){return e.__proto__}// eslint-disable-line no-proto
:null),d={},y="undefined"!=typeof Uint8Array&&p?p(Uint8Array):r,v={"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":c&&p?p([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?r:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":o,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":c&&p?p(p([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&c&&p?p(new Map()[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&c&&p?p(new Set()[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":c&&p?p(""[Symbol.iterator]()):r,"%Symbol%":c?Symbol:r,"%SyntaxError%":n,"%ThrowTypeError%":l,"%TypedArray%":y,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet};if(p)try{null.error;// eslint-disable-line no-unused-expressions
}catch(e){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var m=p(p(e));v["%Error.prototype%"]=m}var h=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&p&&(r=p(o.prototype))}return v[t]=r,r},g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=$("gvair"),B=$("8aKn2"),C=b.call(Function.call,Array.prototype.concat),A=b.call(Function.apply,Array.prototype.splice),_=b.call(Function.call,String.prototype.replace),j=b.call(Function.call,String.prototype.slice),E=b.call(Function.call,RegExp.prototype.exec),w=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,x=/\\(\\)?/g,S=function(e){var t=j(e,0,1),r=j(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return _(e,w,function(e,t,r,n){o[o.length]=r?_(n,x,"$1"):t||e}),o},R=function(e,t){var r,o=e;if(B(g,o)&&(o="%"+(r=g[o])[0]+"%"),B(v,o)){var a=v[o];if(a===d&&(a=h(o)),void 0===a&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');if(null===E(/^%?[^%]*%?$/,e))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=S(e),o=r.length>0?r[0]:"",a=R("%"+o+"%",t),u=a.name,l=a.value,c=!1,f=a.alias;f&&(o=f[0],A(r,C([0,1],f)));for(var p=1,d=!0;p<r.length;p+=1){var y=r[p],m=j(y,0,1),h=j(y,-1);if(('"'===m||"'"===m||"`"===m||'"'===h||"'"===h||"`"===h)&&m!==h)throw new n("property names with quotes must have matching quotes");if("constructor"!==y&&d||(c=!0),o+="."+y,B(v,u="%"+o+"%"))l=v[u];else if(null!=l){if(!(y in l)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(i&&p+1>=r.length){var g=i(l,y);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
l=(d=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:l[y]}else d=B(l,y),l=l[y];d&&!c&&(v[u]=l)}}return l}}),$.register("24qIq",function(e,t){var r="undefined"!=typeof Symbol&&Symbol,n=$("7YWkK");e.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&n()}}),$.register("dSRh6",function(e,t){var r={foo:{}},n=Object;e.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),$.register("gvair",function(e,t){var r=$("kAGnA");e.exports=Function.prototype.bind||r}),$.register("kAGnA",function(e,t){var r=Array.prototype.slice,n=Object.prototype.toString;e.exports=function(e){var t,o=this;if("function"!=typeof o||"[object Function]"!==n.call(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var s=r.call(arguments,1),a=Math.max(0,o.length-s.length),i=[],u=0;u<a;u++)i.push("$"+u);if(t=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof t))return o.apply(e,s.concat(r.call(arguments)));var n=o.apply(this,s.concat(r.call(arguments)));return Object(n)===n?n:this}),o.prototype){var l=function(){};l.prototype=o.prototype,t.prototype=new l,l.prototype=null}return t}}),$.register("8aKn2",function(e,t){var r={}.hasOwnProperty,n=Function.prototype.call;e.exports=n.bind?n.bind(r):function(e,t){return n.call(r,e,t)}}),$.register("cOB0F",function(e,t){var r=$("gvair"),n=$("1zENl"),o=n("%Function.prototype.apply%"),s=n("%Function.prototype.call%"),a=n("%Reflect.apply%",!0)||r.call(s,o),i=n("%Object.getOwnPropertyDescriptor%",!0),u=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){// IE 8 has a broken defineProperty
u=null}e.exports=function(e){var t=a(r,s,arguments);return i&&u&&i(t,"length").configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))}),t};var c=function(){return a(r,o,arguments)};u?u(e.exports,"apply",{value:c}):e.exports.apply=c}),$.register("5WnCa",function(e,t){var r,n=Object.prototype.toString,o=Function.prototype.toString,s=/^\s*(?:function)?\*/,a=$("3KyxH")(),i=Object.getPrototypeOf,u=function(){if(!a)return!1;try{return Function("return function*() {}")()}catch(e){}};e.exports=function(e){if("function"!=typeof e)return!1;if(s.test(o.call(e)))return!0;if(!a)return"[object GeneratorFunction]"===n.call(e);if(!i)return!1;if(void 0===r){var t=u();r=!!t&&i(t)}return i(e)===r}}),$.register("gJrpv",function(e,t){var r=$("gFhA7"),n=$("8yXCr"),o=$("cOB0F"),s=$("hXu6F"),a=$("dYOee"),i=s("Object.prototype.toString"),u=$("3KyxH")(),l="undefined"==typeof globalThis?R:globalThis,c=n(),f=s("String.prototype.slice"),p=Object.getPrototypeOf,d=s("Array.prototype.indexOf",!0)||function(e,t){for(var r=0;r<e.length;r+=1)if(e[r]===t)return r;return -1},y={__proto__:null};u&&a&&p?r(c,function(e){var t=new l[e];if(Symbol.toStringTag in t){var r=p(t),n=a(r,Symbol.toStringTag);n||(n=a(p(r),Symbol.toStringTag)),y["$"+e]=o(n.get)}}):r(c,function(e){var t=new l[e];y["$"+e]=o(t.slice)});var v=function(e){var t=!1;return r(y,function(r,n){if(!t)try{"$"+r(e)===n&&(t=f(n,1))}catch(e){}}),t},m=function(e){var t=!1;return r(y,function(r,n){if(!t)try{r(e),t=f(n,1)}catch(e){}}),t};e.exports=function(e){if(!e||"object"!=typeof e)return!1;if(!u){var t=f(i(e),8,-1);return d(c,t)>-1?t:"Object"===t&&m(e)}return a?v(e):null}}),$.register("gFhA7",function(e,t){var r=$("63RD0"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,s=function(e,t,r){for(var n=0,s=e.length;n<s;n++)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))},a=function(e,t,r){for(var n=0,o=e.length;n<o;n++)null==r?t(e.charAt(n),n,e):t.call(r,e.charAt(n),n,e)},i=function(e,t,r){for(var n in e)o.call(e,n)&&(null==r?t(e[n],n,e):t.call(r,e[n],n,e))};e.exports=function(e,t,o){var u;if(!r(t))throw TypeError("iterator must be a function");arguments.length>=3&&(u=o),"[object Array]"===n.call(e)?s(e,t,u):"string"==typeof e?a(e,t,u):i(e,t,u)}}),$.register("63RD0",function(e,t){var r,n,o=Function.prototype.toString,s="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof s&&"function"==typeof Object.defineProperty)try{r=Object.defineProperty({},"length",{get:function(){throw n}}),n={},// eslint-disable-next-line no-throw-literal
s(function(){throw 42},null,r)}catch(e){e!==n&&(s=null)}else s=null;var a=/^\s*class\b/,i=function(e){try{var t=o.call(e);return a.test(t)}catch(e){return!1;// not a function
}},u=function(e){try{if(i(e))return!1;return o.call(e),!0}catch(e){return!1}},l=Object.prototype.toString,c="function"==typeof Symbol&&!!Symbol.toStringTag,f=!(0 in[,]),p=function(){return!1};if("object"==typeof document){// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
var d=document.all;l.call(d)===l.call(document.all)&&(p=function(e){/* globals document: false */// in IE 6-8, typeof document.all is "object" and it's truthy
if((f||!e)&&(void 0===e||"object"==typeof e))try{var t=l.call(e);return("[object HTMLAllCollection]"===t||"[object HTML document.all class]"===t||"[object HTMLCollection]"===t// opera 12.16
||"[object Object]"===t// IE 6-8
)&&null==e("");// eslint-disable-line eqeqeq
}catch(e){}return!1})}e.exports=s?function(e){if(p(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;try{s(e,null,r)}catch(e){if(e!==n)return!1}return!i(e)&&u(e)}:function(e){if(p(e))return!0;if(!e||"function"!=typeof e&&"object"!=typeof e)return!1;if(c)return u(e);if(i(e))return!1;var t=l.call(e);return!!("[object Function]"===t||"[object GeneratorFunction]"===t||/^\[object HTML/.test(t))&&u(e)}}),$.register("8yXCr",function(e,t){var r=["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],n="undefined"==typeof globalThis?R:globalThis;e.exports=function(){for(var e=[],t=0;t<r.length;t++)"function"==typeof n[r[t]]&&(e[e.length]=r[t]);return e}}),$.register("dYOee",function(e,t){var r=$("1zENl")("%Object.getOwnPropertyDescriptor%",!0);if(r)try{r([],"length")}catch(e){// IE 8 has a broken gOPD
r=null}e.exports=r}),$.register("hN833",function(e,t){var r=$("gJrpv");e.exports=function(e){return!!r(e)}}),$.register("kotBY",function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}}),$.register("dlqwk",function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}}),$.register("2r2f3",function(e,t){var r=$("59kwG"),n=$("jQ0bi"),o=$("amO59"),s=$("3az9s"),a=$("hJAod");let i=e=>e&&"object"==typeof e&&!Array.isArray(e),u=(e,t,r=!1)=>{if(Array.isArray(e)){let n=e.map(e=>u(e,t,r));return e=>{for(let t of n){let r=t(e);if(r)return r}return!1}}let n=i(e)&&e.tokens&&e.input;if(""===e||"string"!=typeof e&&!n)throw TypeError("Expected pattern to be a non-empty string");let o=t||{},a=s.isWindows(t),l=n?u.compileRe(e,t):u.makeRe(e,t,!1,!0),c=l.state;delete l.state;let f=()=>!1;if(o.ignore){let e={...t,ignore:null,onMatch:null,onResult:null};f=u(o.ignore,e,r)}let p=(r,n=!1)=>{let{isMatch:s,match:i,output:p}=u.test(r,l,t,{glob:e,posix:a}),d={glob:e,state:c,regex:l,posix:a,input:r,output:p,match:i,isMatch:s};return("function"==typeof o.onResult&&o.onResult(d),!1===s)?(d.isMatch=!1,!!n&&d):f(r)?("function"==typeof o.onIgnore&&o.onIgnore(d),d.isMatch=!1,!!n&&d):("function"==typeof o.onMatch&&o.onMatch(d),!n||d)};return r&&(p.state=c),p};/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */u.test=(e,t,r,{glob:n,posix:o}={})=>{if("string"!=typeof e)throw TypeError("Expected input to be a string");if(""===e)return{isMatch:!1,output:""};let a=r||{},i=a.format||(o?s.toPosixSlashes:null),l=e===n,c=l&&i?i(e):e;return!1===l&&(l=(c=i?i(e):e)===n),(!1===l||!0===a.capture)&&(l=!0===a.matchBase||!0===a.basename?u.matchBase(e,t,r,o):t.exec(c)),{isMatch:!!l,match:l,output:c}},/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */u.matchBase=(e,t,n,o=s.isWindows(n))=>{let a=t instanceof RegExp?t:u.makeRe(t,n);return a.test(r.basename(e))},/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */u.isMatch=(e,t,r)=>u(t,r)(e),/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */u.parse=(e,t)=>Array.isArray(e)?e.map(e=>u.parse(e,t)):o(e,{...t,fastpaths:!1}),/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */u.scan=(e,t)=>n(e,t),/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */u.compileRe=(e,t,r=!1,n=!1)=>{if(!0===r)return e.output;let o=t||{},s=o.contains?"":"^",a=o.contains?"":"$",i=`${s}(?:${e.output})${a}`;e&&!0===e.negated&&(i=`^(?!${i}).*$`);let l=u.toRegex(i,t);return!0===n&&(l.state=e),l},/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */u.makeRe=(e,t={},r=!1,n=!1)=>{if(!e||"string"!=typeof e)throw TypeError("Expected a non-empty string");let s={negated:!1,fastpaths:!0};return!1!==t.fastpaths&&("."===e[0]||"*"===e[0])&&(s.output=o.fastpaths(e,t)),s.output||(s=o(e,t)),u.compileRe(s,t,r,n)},/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */u.toRegex=(e,t)=>{try{let r=t||{};return new RegExp(e,r.flags||(r.nocase?"i":""))}catch(e){if(t&&!0===t.debug)throw e;return/$^/}},/**
 * Picomatch constants.
 * @return {Object}
 */u.constants=a,/**
 * Expose "picomatch"
 */e.exports=u}),$.register("59kwG",function(e,t){// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var r=$("hPtJY");function n(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}// Resolves . and .. elements in a path with directory names
function o(e,t){for(var r,n="",o=0,s=-1,a=0,i=0;i<=e.length;++i){if(i<e.length)r=e.charCodeAt(i);else if(47/*/*/===r)break;else r=47/*/*/;if(47/*/*/===r){if(s===i-1||1===a);else if(s!==i-1&&2===a){if(n.length<2||2!==o||46/*.*/!==n.charCodeAt(n.length-1)||46/*.*/!==n.charCodeAt(n.length-2)){if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){-1===u?(n="",o=0):o=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),s=i,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,s=i,a=0;continue}}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(s+1,i):n=e.slice(s+1,i),o=i-s-1;s=i,a=0}else 46/*.*/===r&&-1!==a?++a:a=-1}return n}var s={// path.resolve([from ...], to)
resolve:function(){for(var e,t,s="",a=!1,i=arguments.length-1;i>=-1&&!a;i--)i>=0?t=arguments[i]:(void 0===e&&(e=r.cwd()),t=e),n(t),0!==t.length&&(s=t+"/"+s,a=47/*/*/===t.charCodeAt(0));return(// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)
// Normalize the path
s=o(s,!a),a)?s.length>0?"/"+s:"/":s.length>0?s:"."},normalize:function(e){if(n(e),0===e.length)return".";var t=47/*/*/===e.charCodeAt(0),r=47/*/*/===e.charCodeAt(e.length-1);return(0!==// Normalize the path
(e=o(e,!t)).length||t||(e="."),e.length>0&&r&&(e+="/"),t)?"/"+e:e},isAbsolute:function(e){return n(e),e.length>0&&47/*/*/===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];n(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":s.normalize(e)},relative:function(e,t){if(n(e),n(t),e===t||(e=s.resolve(e))===(t=s.resolve(t)))return"";for(// Trim any leading backslashes
var r=1;r<e.length&&47/*/*/===e.charCodeAt(r);++r);for(var o=e.length,a=o-r,i=1;i<t.length&&47/*/*/===t.charCodeAt(i);++i);for(var u=t.length-i,l=a<u?a:u,c=-1,f=0;f<=l;++f){if(f===l){if(u>l){if(47/*/*/===t.charCodeAt(i+f))// For example: from='/foo/bar'; to='/foo/bar/baz'
return t.slice(i+f+1);if(0===f)// For example: from='/'; to='/foo'
return t.slice(i+f)}else a>l&&(47/*/*/===e.charCodeAt(r+f)?// For example: from='/foo/bar/baz'; to='/foo/bar'
c=f:0===f&&// For example: from='/foo'; to='/'
(c=0));break}var p=e.charCodeAt(r+f);if(p!==t.charCodeAt(i+f))break;47/*/*/===p&&(c=f)}var d="";// Generate the relative path based on the path difference between `to`
// and `from`
for(f=r+c+1;f<=o;++f)(f===o||47/*/*/===e.charCodeAt(f))&&(0===d.length?d+="..":d+="/..");return(// Lastly, append the rest of the destination (`to`) path that comes after
// the common path parts
d.length>0?d+t.slice(i+c):(i+=c,47/*/*/===t.charCodeAt(i)&&++i,t.slice(i)))},_makeLong:function(e){return e},dirname:function(e){if(n(e),0===e.length)return".";for(var t=e.charCodeAt(0),r=47/*/*/===t,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47/*/*/===(t=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');n(e);var r,o=0,s=-1,a=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,u=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47/*/*/===l){if(!a){o=r+1;break}}else -1===u&&(// We saw the first non-path separator, remember this index in case
// we need it if the extension ends up not matching
a=!1,u=r+1),i>=0&&(l===t.charCodeAt(i)?-1==--i&&// component
(s=r):(// Extension does not match, so our result is the entire path
// component
i=-1,s=u))}return o===s?s=u:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47/*/*/===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===s&&(// We saw the first non-path separator, mark this as the end of our
// path component
a=!1,s=r+1);return -1===s?"":e.slice(o,s)},extname:function(e){n(e);for(var t=-1,r=0,o=-1,s=!0,a=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47/*/*/===u){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!s){r=i+1;break}continue}-1===o&&(// We saw the first non-path separator, mark this as the end of our
// extension
s=!1,o=i+1),46/*.*/===u?-1===t?t=i:1!==a&&(a=1):-1!==t&&// have a good chance at having a non-empty extension
(a=-1)}return -1===t||-1===o||// We saw a non-dot character immediately before the dot
0===a||// The (right-most) trimmed path component is exactly '..'
1===a&&t===o-1&&t===r+1?"":e.slice(t,o)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){n(e);var t,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o=e.charCodeAt(0),s=47/*/*/===o;s?(r.root="/",t=1):t=0;// Get non-dir info
for(var a=-1,i=0,u=-1,l=!0,c=e.length-1,f=0;c>=t;--c){if(47/*/*/===(o=e.charCodeAt(c))){// If we reached a path separator that was not part of a set of path
// separators at the end of the string, stop now
if(!l){i=c+1;break}continue}-1===u&&(// We saw the first non-path separator, mark this as the end of our
// extension
l=!1,u=c+1),46/*.*/===o?-1===a?a=c:1!==f&&(f=1):-1!==a&&// have a good chance at having a non-empty extension
(f=-1)}return -1===a||-1===u||// We saw a non-dot character immediately before the dot
0===f||// The (right-most) trimmed path component is exactly '..'
1===f&&a===u-1&&a===i+1?-1!==u&&(0===i&&s?r.base=r.name=e.slice(1,u):r.base=r.name=e.slice(i,u)):(0===i&&s?(r.name=e.slice(1,a),r.base=e.slice(1,u)):(r.name=e.slice(i,a),r.base=e.slice(i,u)),r.ext=e.slice(a,u)),i>0?r.dir=e.slice(0,i-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,e.exports=s}),$.register("hPtJY",function(e,t){// shim for using process in browser
var r,n,o,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l=[],c=!1,f=-1;function p(){c&&o&&(c=!1,o.length?l=o.concat(l):f=-1,l.length&&d())}function d(){if(!c){var e=u(p);c=!0;for(var t=l.length;t;){for(o=l,l=[];++f<t;)o&&o[f].run();f=-1,t=l.length}o=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function y(e,t){this.fun=e,this.array=t}function v(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new y(e,t)),1!==l.length||c||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=v,s.addListener=v,s.once=v,s.off=v,s.removeListener=v,s.removeAllListeners=v,s.emit=v,s.prependListener=v,s.prependOnceListener=v,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),$.register("jQ0bi",function(e,t){var r=$("3az9s"),n=$("hJAod"),o=n.CHAR_ASTERISK,s=n.CHAR_AT,a=n.CHAR_BACKWARD_SLASH,i=n.CHAR_COMMA,u=n.CHAR_DOT,l=n.CHAR_EXCLAMATION_MARK,c=n.CHAR_FORWARD_SLASH,f=n.CHAR_LEFT_CURLY_BRACE,p=n.CHAR_LEFT_PARENTHESES,d=n.CHAR_LEFT_SQUARE_BRACKET,y=n.CHAR_PLUS,v=n.CHAR_QUESTION_MARK,m=n.CHAR_RIGHT_CURLY_BRACE,h=n.CHAR_RIGHT_PARENTHESES,g=n.CHAR_RIGHT_SQUARE_BRACKET;let b=e=>e===c||e===a,B=e=>{!0!==e.isPrefix&&(e.depth=e.isGlobstar?1/0:1)};e.exports=(e,t)=>{let n,C;let A=t||{},_=e.length-1,j=!0===A.parts||!0===A.scanToEnd,E=[],w=[],x=[],S=e,R=-1,O=0,k=0,T=!1,H=!1,$=!1,P=!1,F=!1,L=!1,I=!1,D=!1,N=!1,M=!1,U=0,G={value:"",depth:0,isGlob:!1},K=()=>R>=_,W=()=>S.charCodeAt(R+1),q=()=>(n=C,S.charCodeAt(++R));for(;R<_;){let e;if((C=q())===a){I=G.backslashes=!0,(C=q())===f&&(L=!0);continue}if(!0===L||C===f){for(U++;!0!==K()&&(C=q());){if(C===a){I=G.backslashes=!0,q();continue}if(C===f){U++;continue}if(!0!==L&&C===u&&(C=q())===u||!0!==L&&C===i){if(T=G.isBrace=!0,$=G.isGlob=!0,M=!0,!0===j)continue;break}if(C===m&&0==--U){L=!1,T=G.isBrace=!0,M=!0;break}}if(!0===j)continue;break}if(C===c){if(E.push(R),w.push(G),G={value:"",depth:0,isGlob:!1},!0===M)continue;if(n===u&&R===O+1){O+=2;continue}k=R+1;continue}if(!0!==A.noext){let e=C===y||C===s||C===o||C===v||C===l;if(!0===e&&W()===p){if($=G.isGlob=!0,P=G.isExtglob=!0,M=!0,C===l&&R===O&&(N=!0),!0===j){for(;!0!==K()&&(C=q());){if(C===a){I=G.backslashes=!0,C=q();continue}if(C===h){$=G.isGlob=!0,M=!0;break}}continue}break}}if(C===o){if(n===o&&(F=G.isGlobstar=!0),$=G.isGlob=!0,M=!0,!0===j)continue;break}if(C===v){if($=G.isGlob=!0,M=!0,!0===j)continue;break}if(C===d){for(;!0!==K()&&(e=q());){if(e===a){I=G.backslashes=!0,q();continue}if(e===g){H=G.isBracket=!0,$=G.isGlob=!0,M=!0;break}}if(!0===j)continue;break}if(!0!==A.nonegate&&C===l&&R===O){D=G.negated=!0,O++;continue}if(!0!==A.noparen&&C===p){if($=G.isGlob=!0,!0===j){for(;!0!==K()&&(C=q());){if(C===p){I=G.backslashes=!0,C=q();continue}if(C===h){M=!0;break}}continue}break}if(!0===$){if(M=!0,!0===j)continue;break}}!0===A.noext&&(P=!1,$=!1);let z=S,J="",Q="";O>0&&(J=S.slice(0,O),S=S.slice(O),k-=O),z&&!0===$&&k>0?(z=S.slice(0,k),Q=S.slice(k)):!0===$?(z="",Q=S):z=S,z&&""!==z&&"/"!==z&&z!==S&&b(z.charCodeAt(z.length-1))&&(z=z.slice(0,-1)),!0===A.unescape&&(Q&&(Q=r.removeBackslashes(Q)),z&&!0===I&&(z=r.removeBackslashes(z)));let V={prefix:J,input:e,start:O,base:z,glob:Q,isBrace:T,isBracket:H,isGlob:$,isExtglob:P,isGlobstar:F,negated:D,negatedExtglob:N};if(!0===A.tokens&&(V.maxDepth=0,b(C)||w.push(G),V.tokens=w),!0===A.parts||!0===A.tokens){let t;for(let r=0;r<E.length;r++){let n=t?t+1:O,o=E[r],s=e.slice(n,o);A.tokens&&(0===r&&0!==O?(w[r].isPrefix=!0,w[r].value=J):w[r].value=s,B(w[r]),V.maxDepth+=w[r].depth),(0!==r||""!==s)&&x.push(s),t=o}if(t&&t+1<e.length){let r=e.slice(t+1);x.push(r),A.tokens&&(w[w.length-1].value=r,B(w[w.length-1]),V.maxDepth+=w[w.length-1].depth)}V.slashes=E,V.parts=x}return V}}),$.register("3az9s",function(e,t){O(e.exports,"isObject",()=>r,e=>r=e),O(e.exports,"hasRegexChars",()=>n,e=>n=e),O(e.exports,"escapeRegex",()=>o,e=>o=e),O(e.exports,"toPosixSlashes",()=>s,e=>s=e),O(e.exports,"removeBackslashes",()=>a,e=>a=e),O(e.exports,"supportsLookbehinds",()=>i,e=>i=e),O(e.exports,"isWindows",()=>u,e=>u=e),O(e.exports,"escapeLast",()=>l,e=>l=e),O(e.exports,"removePrefix",()=>c,e=>c=e),O(e.exports,"wrapOutput",()=>f,e=>f=e);var r,n,o,s,a,i,u,l,c,f,p=$("hPtJY"),d=$("59kwG");let y="win32"===p.platform;var v=$("hJAod"),m=v.REGEX_BACKSLASH,h=v.REGEX_REMOVE_BACKSLASH,g=v.REGEX_SPECIAL_CHARS,b=v.REGEX_SPECIAL_CHARS_GLOBAL;r=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),n=e=>g.test(e),o=e=>e.replace(b,"\\$1"),s=e=>e.replace(m,"/"),a=e=>e.replace(h,e=>"\\"===e?"":e),i=()=>{let e=p.version.slice(1).split(".").map(Number);return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},u=e=>e&&"boolean"==typeof e.windows?e.windows:!0===y||"\\"===d.sep,l=(e,t,r)=>{let n=e.lastIndexOf(t,r);return -1===n?e:"\\"===e[n-1]?l(e,t,n-1):`${e.slice(0,n)}\\${e.slice(n)}`},c=(e,t={})=>{let r=e;return r.startsWith("./")&&(r=r.slice(2),t.prefix="./"),r},f=(e,t={},r={})=>{let n=r.contains?"":"^",o=r.contains?"":"$",s=`${n}(?:${e})${o}`;return!0===t.negated&&(s=`(?:^(?!${s}).*$)`),s}}),$.register("hJAod",function(e,t){var r=$("59kwG");let n="[^\\\\/]",o="[^/]",s="(?:\\/|$)",a="(?:^|\\/)",i=`\\.{1,2}${s}`,u=`(?!${a}${i})`,l=`(?!\\.{0,1}${s})`,c=`(?!${i})`,f=`${o}*?`,p={DOT_LITERAL:"\\.",PLUS_LITERAL:"\\+",QMARK_LITERAL:"\\?",SLASH_LITERAL:"\\/",ONE_CHAR:"(?=.)",QMARK:o,END_ANCHOR:s,DOTS_SLASH:i,NO_DOT:"(?!\\.)",NO_DOTS:u,NO_DOT_SLASH:l,NO_DOTS_SLASH:c,QMARK_NO_DOT:"[^.\\/]",STAR:f,START_ANCHOR:a},d={...p,SLASH_LITERAL:"[\\\\/]",QMARK:n,STAR:`${n}*?`,DOTS_SLASH:"\\.{1,2}(?:[\\\\/]|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:[\\\\/]|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:[\\\\/]|$))",QMARK_NO_DOT:"[^.\\\\/]",START_ANCHOR:"(?:^|[\\\\/])",END_ANCHOR:"(?:[\\\\/]|$)"};e.exports={MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"},// regular expressions
REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,// Replace globs with equivalent patterns to reduce parsing time.
REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},// Digits
CHAR_0:48,/* 0 */CHAR_9:57,/* 9 */// Alphabet chars.
CHAR_UPPERCASE_A:65,/* A */CHAR_LOWERCASE_A:97,/* a */CHAR_UPPERCASE_Z:90,/* Z */CHAR_LOWERCASE_Z:122,/* z */CHAR_LEFT_PARENTHESES:40,/* ( */CHAR_RIGHT_PARENTHESES:41,/* ) */CHAR_ASTERISK:42,/* * */// Non-alphabetic chars.
CHAR_AMPERSAND:38,/* & */CHAR_AT:64,/* @ */CHAR_BACKWARD_SLASH:92,/* \ */CHAR_CARRIAGE_RETURN:13,/* \r */CHAR_CIRCUMFLEX_ACCENT:94,/* ^ */CHAR_COLON:58,/* : */CHAR_COMMA:44,/* , */CHAR_DOT:46,/* . */CHAR_DOUBLE_QUOTE:34,/* " */CHAR_EQUAL:61,/* = */CHAR_EXCLAMATION_MARK:33,/* ! */CHAR_FORM_FEED:12,/* \f */CHAR_FORWARD_SLASH:47,/* / */CHAR_GRAVE_ACCENT:96,/* ` */CHAR_HASH:35,/* # */CHAR_HYPHEN_MINUS:45,/* - */CHAR_LEFT_ANGLE_BRACKET:60,/* < */CHAR_LEFT_CURLY_BRACE:123,/* { */CHAR_LEFT_SQUARE_BRACKET:91,/* [ */CHAR_LINE_FEED:10,/* \n */CHAR_NO_BREAK_SPACE:160,/* \u00A0 */CHAR_PERCENT:37,/* % */CHAR_PLUS:43,/* + */CHAR_QUESTION_MARK:63,/* ? */CHAR_RIGHT_ANGLE_BRACKET:62,/* > */CHAR_RIGHT_CURLY_BRACE:125,/* } */CHAR_RIGHT_SQUARE_BRACKET:93,/* ] */CHAR_SEMICOLON:59,/* ; */CHAR_SINGLE_QUOTE:39,/* ' */CHAR_SPACE:32,/*   */CHAR_TAB:9,/* \t */CHAR_UNDERSCORE:95,/* _ */CHAR_VERTICAL_LINE:124,/* | */CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,/* \uFEFF */SEP:r.sep,/**
   * Create EXTGLOB_CHARS
   */extglobChars:e=>({"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}),/**
   * Create GLOB_CHARS
   */globChars:e=>!0===e?d:p}}),$.register("amO59",function(e,t){var r=$("hJAod"),n=$("3az9s");/**
 * Constants
 */let{MAX_LENGTH:o,POSIX_REGEX_SOURCE:s,REGEX_NON_SPECIAL_CHARS:a,REGEX_SPECIAL_CHARS_BACKREF:i,REPLACEMENTS:u}=r,l=(e,t)=>{if("function"==typeof t.expandRange)return t.expandRange(...e,t);e.sort();let r=`[${e.join("-")}]`;try{/* eslint-disable-next-line no-new */new RegExp(r)}catch(t){return e.map(e=>n.escapeRegex(e)).join("..")}return r},c=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,f=(e,t)=>{let p;if("string"!=typeof e)throw TypeError("Expected a string");e=u[e]||e;let d={...t},y="number"==typeof d.maxLength?Math.min(o,d.maxLength):o,v=e.length;if(v>y)throw SyntaxError(`Input length: ${v}, exceeds maximum allowed length: ${y}`);let m={type:"bos",value:"",output:d.prepend||""},h=[m],g=d.capture?"":"?:",b=n.isWindows(t),B=r.globChars(b),C=r.extglobChars(B),{DOT_LITERAL:A,PLUS_LITERAL:_,SLASH_LITERAL:j,ONE_CHAR:E,DOTS_SLASH:w,NO_DOT:x,NO_DOT_SLASH:S,NO_DOTS_SLASH:R,QMARK:O,QMARK_NO_DOT:k,STAR:T,START_ANCHOR:H}=B,$=e=>`(${g}(?:(?!${H}${e.dot?w:A}).)*?)`,P=d.dot?"":x,F=d.dot?O:k,L=!0===d.bash?$(d):T;d.capture&&(L=`(${L})`),"boolean"==typeof d.noext&&(d.noextglob=d.noext);let I={input:e,index:-1,start:0,dot:!0===d.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:h};v=(e=n.removePrefix(e,I)).length;let D=[],N=[],M=[],U=m,G=()=>I.index===v-1,K=I.peek=(t=1)=>e[I.index+t],W=I.advance=()=>e[++I.index]||"",q=()=>e.slice(I.index+1),z=(e="",t=0)=>{I.consumed+=e,I.index+=t},J=e=>{I.output+=null!=e.output?e.output:e.value,z(e.value)},Q=()=>{let e=1;for(;"!"===K()&&("("!==K(2)||"?"===K(3));)W(),I.start++,e++;return e%2!=0&&(I.negated=!0,I.start++,!0)},V=e=>{I[e]++,M.push(e)},X=e=>{I[e]--,M.pop()},Y=e=>{if("globstar"===U.type){let t=I.braces>0&&("comma"===e.type||"brace"===e.type),r=!0===e.extglob||D.length&&("pipe"===e.type||"paren"===e.type);"slash"===e.type||"paren"===e.type||t||r||(I.output=I.output.slice(0,-U.output.length),U.type="star",U.value="*",U.output=L,I.output+=U.output)}if(D.length&&"paren"!==e.type&&(D[D.length-1].inner+=e.value),(e.value||e.output)&&J(e),U&&"text"===U.type&&"text"===e.type){U.value+=e.value,U.output=(U.output||"")+e.value;return}e.prev=U,h.push(e),U=e},Z=(e,t)=>{let r={...C[t],conditions:1,inner:""};r.prev=U,r.parens=I.parens,r.output=I.output;let n=(d.capture?"(":"")+r.open;V("parens"),Y({type:e,value:t,output:I.output?"":E}),Y({type:"paren",extglob:!0,value:W(),output:n}),D.push(r)},ee=e=>{let r,n=e.close+(d.capture?")":"");if("negate"===e.type){let o=L;if(e.inner&&e.inner.length>1&&e.inner.includes("/")&&(o=$(d)),(o!==L||G()||/^\)+$/.test(q()))&&(n=e.close=`)$))${o}`),e.inner.includes("*")&&(r=q())&&/^\.[^\\/.]+$/.test(r)){// Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
// In this case, we need to parse the string and use it in the output of the original pattern.
// Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
//
// Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
let s=f(r,{...t,fastpaths:!1}).output;n=e.close=`)${s})${o})`}"bos"===e.prev.type&&(I.negatedExtglob=!0)}Y({type:"paren",extglob:!0,value:p,output:n}),X("parens")};/**
   * Fast paths
   */if(!1!==d.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(e)){let r=!1,o=e.replace(i,(e,t,n,o,s,a)=>"\\"===o?(r=!0,e):"?"===o?t?t+o+(s?O.repeat(s.length):""):0===a?F+(s?O.repeat(s.length):""):O.repeat(n.length):"."===o?A.repeat(n.length):"*"===o?t?t+o+(s?L:""):L:t?e:`\\${e}`);return(!0===r&&(o=!0===d.unescape?o.replace(/\\/g,""):o.replace(/\\+/g,e=>e.length%2==0?"\\\\":e?"\\":"")),o===e&&!0===d.contains)?I.output=e:I.output=n.wrapOutput(o,I,t),I}/**
   * Tokenize input until we reach end-of-string
   */for(;!G();){if("\x00"===(p=W()))continue;/**
     * Escaped characters
     */if("\\"===p){let e=K();if("/"===e&&!0!==d.bash||"."===e||";"===e)continue;if(!e){Y({type:"text",value:p+="\\"});continue}// collapse slashes to reduce potential for exploits
let t=/^\\+/.exec(q()),r=0;if(t&&t[0].length>2&&(r=t[0].length,I.index+=r,r%2!=0&&(p+="\\")),!0===d.unescape?p=W():p+=W(),0===I.brackets){Y({type:"text",value:p});continue}}/**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */if(I.brackets>0&&("]"!==p||"["===U.value||"[^"===U.value)){if(!1!==d.posix&&":"===p){let e=U.value.slice(1);if(e.includes("[")&&(U.posix=!0,e.includes(":"))){let e=U.value.lastIndexOf("["),t=U.value.slice(0,e),r=U.value.slice(e+2),n=s[r];if(n){U.value=t+n,I.backtrack=!0,W(),m.output||1!==h.indexOf(U)||(m.output=E);continue}}}("["===p&&":"!==K()||"-"===p&&"]"===K())&&(p=`\\${p}`),"]"===p&&("["===U.value||"[^"===U.value)&&(p=`\\${p}`),!0===d.posix&&"!"===p&&"["===U.value&&(p="^"),U.value+=p,J({value:p});continue}/**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */if(1===I.quotes&&'"'!==p){p=n.escapeRegex(p),U.value+=p,J({value:p});continue}/**
     * Double quotes
     */if('"'===p){I.quotes=1===I.quotes?0:1,!0===d.keepQuotes&&Y({type:"text",value:p});continue}/**
     * Parentheses
     */if("("===p){V("parens"),Y({type:"paren",value:p});continue}if(")"===p){if(0===I.parens&&!0===d.strictBrackets)throw SyntaxError(c("opening","("));let e=D[D.length-1];if(e&&I.parens===e.parens+1){ee(D.pop());continue}Y({type:"paren",value:p,output:I.parens?")":"\\)"}),X("parens");continue}/**
     * Square brackets
     */if("["===p){if(!0!==d.nobracket&&q().includes("]"))V("brackets");else{if(!0!==d.nobracket&&!0===d.strictBrackets)throw SyntaxError(c("closing","]"));p=`\\${p}`}Y({type:"bracket",value:p});continue}if("]"===p){if(!0===d.nobracket||U&&"bracket"===U.type&&1===U.value.length){Y({type:"text",value:p,output:`\\${p}`});continue}if(0===I.brackets){if(!0===d.strictBrackets)throw SyntaxError(c("opening","["));Y({type:"text",value:p,output:`\\${p}`});continue}X("brackets");let e=U.value.slice(1);// when literal brackets are explicitly disabled
// assume we should match with a regex character class
if(!0===U.posix||"^"!==e[0]||e.includes("/")||(p=`/${p}`),U.value+=p,J({value:p}),!1===d.literalBrackets||n.hasRegexChars(e))continue;let t=n.escapeRegex(U.value);// when literal brackets are explicitly enabled
// assume we should escape the brackets to match literal characters
if(I.output=I.output.slice(0,-U.value.length),!0===d.literalBrackets){I.output+=t,U.value=t;continue}// when the user specifies nothing, try to match both
U.value=`(${g}${t}|${U.value})`,I.output+=U.value;continue}/**
     * Braces
     */if("{"===p&&!0!==d.nobrace){V("braces");let e={type:"brace",value:p,output:"(",outputIndex:I.output.length,tokensIndex:I.tokens.length};N.push(e),Y(e);continue}if("}"===p){let e=N[N.length-1];if(!0===d.nobrace||!e){Y({type:"text",value:p,output:p});continue}let t=")";if(!0===e.dots){let e=h.slice(),r=[];for(let t=e.length-1;t>=0&&(h.pop(),"brace"!==e[t].type);t--)"dots"!==e[t].type&&r.unshift(e[t].value);t=l(r,d),I.backtrack=!0}if(!0!==e.comma&&!0!==e.dots){let r=I.output.slice(0,e.outputIndex),n=I.tokens.slice(e.tokensIndex);for(let o of(e.value=e.output="\\{",p=t="\\}",I.output=r,n))I.output+=o.output||o.value}Y({type:"brace",value:p,output:t}),X("braces"),N.pop();continue}/**
     * Pipes
     */if("|"===p){D.length>0&&D[D.length-1].conditions++,Y({type:"text",value:p});continue}/**
     * Commas
     */if(","===p){let e=p,t=N[N.length-1];t&&"braces"===M[M.length-1]&&(t.comma=!0,e="|"),Y({type:"comma",value:p,output:e});continue}/**
     * Slashes
     */if("/"===p){// if the beginning of the glob is "./", advance the start
// to the current index, and don't add the "./" characters
// to the state. This greatly simplifies lookbehinds when
// checking for BOS characters like "!" and "." (not "./")
if("dot"===U.type&&I.index===I.start+1){I.start=I.index+1,I.consumed="",I.output="",h.pop(),U=m;continue}Y({type:"slash",value:p,output:j});continue}/**
     * Dots
     */if("."===p){if(I.braces>0&&"dot"===U.type){"."===U.value&&(U.output=A);let e=N[N.length-1];U.type="dots",U.output+=p,U.value+=p,e.dots=!0;continue}if(I.braces+I.parens===0&&"bos"!==U.type&&"slash"!==U.type){Y({type:"text",value:p,output:A});continue}Y({type:"dot",value:p,output:A});continue}/**
     * Question marks
     */if("?"===p){let e=U&&"("===U.value;if(!e&&!0!==d.noextglob&&"("===K()&&"?"!==K(2)){Z("qmark",p);continue}if(U&&"paren"===U.type){let e=K(),t=p;if("<"===e&&!n.supportsLookbehinds())throw Error("Node.js v10 or higher is required for regex lookbehinds");("("!==U.value||/[!=<:]/.test(e))&&("<"!==e||/<([!=]|\w+>)/.test(q()))||(t=`\\${p}`),Y({type:"text",value:p,output:t});continue}if(!0!==d.dot&&("slash"===U.type||"bos"===U.type)){Y({type:"qmark",value:p,output:k});continue}Y({type:"qmark",value:p,output:O});continue}/**
     * Exclamation
     */if("!"===p){if(!0!==d.noextglob&&"("===K()&&("?"!==K(2)||!/[!=<:]/.test(K(3)))){Z("negate",p);continue}if(!0!==d.nonegate&&0===I.index){Q();continue}}/**
     * Plus
     */if("+"===p){if(!0!==d.noextglob&&"("===K()&&"?"!==K(2)){Z("plus",p);continue}if(U&&"("===U.value||!1===d.regex){Y({type:"plus",value:p,output:_});continue}if(U&&("bracket"===U.type||"paren"===U.type||"brace"===U.type)||I.parens>0){Y({type:"plus",value:p});continue}Y({type:"plus",value:_});continue}/**
     * Plain text
     */if("@"===p){if(!0!==d.noextglob&&"("===K()&&"?"!==K(2)){Y({type:"at",extglob:!0,value:p,output:""});continue}Y({type:"text",value:p});continue}/**
     * Plain text
     */if("*"!==p){("$"===p||"^"===p)&&(p=`\\${p}`);let e=a.exec(q());e&&(p+=e[0],I.index+=e[0].length),Y({type:"text",value:p});continue}/**
     * Stars
     */if(U&&("globstar"===U.type||!0===U.star)){U.type="star",U.star=!0,U.value+=p,U.output=L,I.backtrack=!0,I.globstar=!0,z(p);continue}let t=q();if(!0!==d.noextglob&&/^\([^?]/.test(t)){Z("star",p);continue}if("star"===U.type){if(!0===d.noglobstar){z(p);continue}let r=U.prev,n=r.prev,o="slash"===r.type||"bos"===r.type,s=n&&("star"===n.type||"globstar"===n.type);if(!0===d.bash&&(!o||t[0]&&"/"!==t[0])){Y({type:"star",value:p,output:""});continue}let a=I.braces>0&&("comma"===r.type||"brace"===r.type),i=D.length&&("pipe"===r.type||"paren"===r.type);if(!o&&"paren"!==r.type&&!a&&!i){Y({type:"star",value:p,output:""});continue}// strip consecutive `/**/`
for(;"/**"===t.slice(0,3);){let r=e[I.index+4];if(r&&"/"!==r)break;t=t.slice(3),z("/**",3)}if("bos"===r.type&&G()){U.type="globstar",U.value+=p,U.output=$(d),I.output=U.output,I.globstar=!0,z(p);continue}if("slash"===r.type&&"bos"!==r.prev.type&&!s&&G()){I.output=I.output.slice(0,-(r.output+U.output).length),r.output=`(?:${r.output}`,U.type="globstar",U.output=$(d)+(d.strictSlashes?")":"|$)"),U.value+=p,I.globstar=!0,I.output+=r.output+U.output,z(p);continue}if("slash"===r.type&&"bos"!==r.prev.type&&"/"===t[0]){let e=void 0!==t[1]?"|$":"";I.output=I.output.slice(0,-(r.output+U.output).length),r.output=`(?:${r.output}`,U.type="globstar",U.output=`${$(d)}${j}|${j}${e})`,U.value+=p,I.output+=r.output+U.output,I.globstar=!0,z(p+W()),Y({type:"slash",value:"/",output:""});continue}if("bos"===r.type&&"/"===t[0]){U.type="globstar",U.value+=p,U.output=`(?:^|${j}|${$(d)}${j})`,I.output=U.output,I.globstar=!0,z(p+W()),Y({type:"slash",value:"/",output:""});continue}// remove single star from output
I.output=I.output.slice(0,-U.output.length),// reset previous token to globstar
U.type="globstar",U.output=$(d),U.value+=p,// reset output with globstar
I.output+=U.output,I.globstar=!0,z(p);continue}let r={type:"star",value:p,output:L};if(!0===d.bash){r.output=".*?",("bos"===U.type||"slash"===U.type)&&(r.output=P+r.output),Y(r);continue}if(U&&("bracket"===U.type||"paren"===U.type)&&!0===d.regex){r.output=p,Y(r);continue}(I.index===I.start||"slash"===U.type||"dot"===U.type)&&("dot"===U.type?(I.output+=S,U.output+=S):!0===d.dot?(I.output+=R,U.output+=R):(I.output+=P,U.output+=P),"*"!==K()&&(I.output+=E,U.output+=E)),Y(r)}for(;I.brackets>0;){if(!0===d.strictBrackets)throw SyntaxError(c("closing","]"));I.output=n.escapeLast(I.output,"["),X("brackets")}for(;I.parens>0;){if(!0===d.strictBrackets)throw SyntaxError(c("closing",")"));I.output=n.escapeLast(I.output,"("),X("parens")}for(;I.braces>0;){if(!0===d.strictBrackets)throw SyntaxError(c("closing","}"));I.output=n.escapeLast(I.output,"{"),X("braces")}// rebuild the output if we had to backtrack at any point
if(!0!==d.strictSlashes&&("star"===U.type||"bracket"===U.type)&&Y({type:"maybe_slash",value:"",output:`${j}?`}),!0===I.backtrack)for(let e of(I.output="",I.tokens))I.output+=null!=e.output?e.output:e.value,e.suffix&&(I.output+=e.suffix);return I};/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */f.fastpaths=(e,t)=>{let s={...t},a="number"==typeof s.maxLength?Math.min(o,s.maxLength):o,i=e.length;if(i>a)throw SyntaxError(`Input length: ${i}, exceeds maximum allowed length: ${a}`);e=u[e]||e;let l=n.isWindows(t),{DOT_LITERAL:c,SLASH_LITERAL:f,ONE_CHAR:p,DOTS_SLASH:d,NO_DOT:y,NO_DOTS:v,NO_DOTS_SLASH:m,STAR:h,START_ANCHOR:g}=r.globChars(l),b=s.dot?v:y,B=s.dot?m:y,C=s.capture?"":"?:",A=!0===s.bash?".*?":h;s.capture&&(A=`(${A})`);let _=e=>!0===e.noglobstar?A:`(${C}(?:(?!${g}${e.dot?d:c}).)*?)`,j=e=>{switch(e){case"*":return`${b}${p}${A}`;case".*":return`${c}${p}${A}`;case"*.*":return`${b}${A}${c}${p}${A}`;case"*/*":return`${b}${A}${f}${p}${B}${A}`;case"**":return b+_(s);case"**/*":return`(?:${b}${_(s)}${f})?${B}${p}${A}`;case"**/*.*":return`(?:${b}${_(s)}${f})?${B}${A}${c}${p}${A}`;case"**/.*":return`(?:${b}${_(s)}${f})?${c}${p}${A}`;default:{let t=/^(.*?)\.(\w+)$/.exec(e);if(!t)return;let r=j(t[1]);if(!r)return;return r+c+t[2]}}},E=n.removePrefix(e,{negated:!1,prefix:""}),w=j(E);return w&&!0!==s.strictSlashes&&(w+=`${f}?`),w},e.exports=f}),$.register("7VP0u",function(e,t){e.exports={A:"ie",B:"edge",C:"firefox",D:"chrome",E:"safari",F:"opera",G:"ios_saf",H:"op_mini",I:"android",J:"bb",K:"op_mob",L:"and_chr",M:"and_ff",N:"ie_mob",O:"and_uc",P:"samsung",Q:"and_qq",R:"baidu",S:"kaios"}}),$.register("7KwPM",function(e,t){e.exports={0:"113",1:"114",2:"115",3:"116",4:"5",5:"19",6:"23",7:"24",8:"25",9:"26",A:"10",B:"11",C:"12",D:"117",E:"7",F:"8",G:"9",H:"15",I:"4",J:"6",K:"13",L:"14",M:"16",N:"17",O:"18",P:"79",Q:"80",R:"81",S:"83",T:"84",U:"85",V:"86",W:"87",X:"88",Y:"89",Z:"90",a:"91",b:"92",c:"93",d:"94",e:"95",f:"96",g:"97",h:"98",i:"99",j:"100",k:"101",l:"102",m:"20",n:"21",o:"22",p:"73",q:"103",r:"104",s:"105",t:"106",u:"107",v:"108",w:"109",x:"110",y:"111",z:"112",AB:"27",BB:"28",CB:"29",DB:"30",EB:"31",FB:"32",GB:"33",HB:"34",IB:"35",JB:"36",KB:"37",LB:"38",MB:"39",NB:"40",OB:"41",PB:"42",QB:"43",RB:"44",SB:"45",TB:"46",UB:"47",VB:"48",WB:"49",XB:"50",YB:"51",ZB:"52",aB:"53",bB:"54",cB:"55",dB:"56",eB:"57",fB:"58",gB:"60",hB:"62",iB:"63",jB:"64",kB:"65",lB:"66",mB:"67",nB:"68",oB:"69",pB:"70",qB:"71",rB:"72",sB:"74",tB:"75",uB:"76",vB:"77",wB:"78",xB:"11.1",yB:"12.1",zB:"15.5","0B":"16.0","1B":"17.0","2B":"3","3B":"59","4B":"61","5B":"82","6B":"118","7B":"119","8B":"120","9B":"3.2",AC:"10.1",BC:"13.1",CC:"15.2-15.3",DC:"15.4",EC:"16.1",FC:"16.2",GC:"16.3",HC:"16.4",IC:"16.5",JC:"16.6",KC:"17.1",LC:"11.5",MC:"4.2-4.3",NC:"5.5",OC:"2",PC:"3.5",QC:"3.6",RC:"3.1",SC:"5.1",TC:"6.1",UC:"7.1",VC:"9.1",WC:"14.1",XC:"15.1",YC:"15.6",ZC:"TP",aC:"9.5-9.6",bC:"10.0-10.1",cC:"10.5",dC:"10.6",eC:"11.6",fC:"4.0-4.1",gC:"5.0-5.1",hC:"6.0-6.1",iC:"7.0-7.1",jC:"8.1-8.4",kC:"9.0-9.2",lC:"9.3",mC:"10.0-10.2",nC:"10.3",oC:"11.0-11.2",pC:"11.3-11.4",qC:"12.0-12.1",rC:"12.2-12.5",sC:"13.0-13.1",tC:"13.2",uC:"13.3",vC:"13.4-13.7",wC:"14.0-14.4",xC:"14.5-14.8",yC:"15.0-15.1",zC:"15.6-15.7","0C":"all","1C":"2.1","2C":"2.2","3C":"2.3","4C":"4.1","5C":"4.4","6C":"4.4.3-4.4.4","7C":"5.0-5.4","8C":"6.2-6.4","9C":"7.2-7.4",AD:"8.2",BD:"9.2",CD:"11.1-11.2",DD:"12.0",ED:"13.0",FD:"14.0",GD:"15.0",HD:"18.0",ID:"19.0",JD:"13.18",KD:"2.5",LD:"3.0-3.1"}});var P={},F={},L=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
F=L("object"==typeof globalThis&&globalThis)||L("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
L("object"==typeof self&&self)||L("object"==typeof R&&R)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||F||Function("return this")();var I={},D={};// Detect IE8's incomplete defineProperty implementation
I=!(D=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var N={},M={};M=!D(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var U=Function.prototype.call;N=M?U.bind(U):function(){return U.apply(U,arguments)};var G={}.propertyIsEnumerable,K=Object.getOwnPropertyDescriptor;s=K&&!G.call({1:2},1)?function(e){var t=K(this,e);return!!t&&t.enumerable}:G;var W={};W=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},z={},J={},Q=Function.prototype,V=Q.call,X=M&&Q.bind.bind(V,V),Y={},Z=(J=M?X:function(e){return function(){return V.apply(e,arguments)}})({}.toString),ee=J("".slice);Y=function(e){return ee(Z(e),8,-1)};var et=Object,er=J("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
z=D(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!et("z").propertyIsEnumerable(0)})?function(e){return"String"===Y(e)?er(e,""):et(e)}:et;var en={},eo={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
eo=function(e){return null==e};var es=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
en=function(e){if(eo(e))throw new es("Can't call method on "+e);return e},q=function(e){return z(en(e))};var ea={},ei={},eu={},el={},ec={},ef="object"==typeof document&&document.all,ep=(ec={all:ef,IS_HTMLDDA:void 0===ef&&void 0!==ef}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
el=ec.IS_HTMLDDA?function(e){return"function"==typeof e||e===ep}:function(e){return"function"==typeof e};var ed=ec.all;eu=ec.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:el(e)||e===ed}:function(e){return"object"==typeof e?null!==e:el(e)};var ey={},ev={};ev=function(e,t){var r;return arguments.length<2?(r=F[e],el(r)?r:void 0):F[e]&&F[e][t]};var em={};em=J({}.isPrototypeOf);var eh={},eg={},eb={},eB={};eB="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eC=F.process,eA=F.Deno,e_=eC&&eC.versions||eA&&eA.version,ej=e_&&e_.v8;ej&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(a=ej.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!i&&eB&&(!(a=eB.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eB.match(/Chrome\/(\d+)/))&&(i=+a[1]),eb=i;var eE=F.String;eh=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(eg=!!Object.getOwnPropertySymbols&&!D(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eE(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eb&&eb<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ew=Object;ey=eh?function(e){return"symbol"==typeof e}:function(e){var t=ev("Symbol");return el(t)&&em(t.prototype,ew(e))};var ex={},eS={},eR={},eO=String;eR=function(e){try{return eO(e)}catch(e){return"Object"}};var ek=TypeError;// `Assert: IsCallable(argument) is true`
eS=function(e){if(el(e))return e;throw new ek(eR(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ex=function(e,t){var r=e[t];return eo(r)?void 0:eS(r)};var eT={},eH=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eT=function(e,t){var r,n;if("string"===t&&el(r=e.toString)&&!eu(n=N(r,e))||el(r=e.valueOf)&&!eu(n=N(r,e))||"string"!==t&&el(r=e.toString)&&!eu(n=N(r,e)))return n;throw new eH("Can't convert object to primitive value")};var e$={},eP={};eP=!1;var eF={},eL={},eI=Object.defineProperty;eL=function(e,t){try{eI(F,e,{value:t,configurable:!0,writable:!0})}catch(r){F[e]=t}return t};var eD="__core-js_shared__";eF=F[eD]||eL(eD,{}),(e$=function(e,t){return eF[e]||(eF[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:eP?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eN={},eM={},eU=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eM=function(e){return eU(en(e))};var eG=J({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eN=Object.hasOwn||function(e,t){return eG(eM(e),t)};var eK={},eW=0,eq=Math.random(),ez=J(1..toString);eK=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ez(++eW+eq,36)};var eJ=F.Symbol,eQ=e$("wks"),eV=eh?eJ.for||eJ:eJ&&eJ.withoutSetter||eK,eX=TypeError,eY=(eN(eQ,e="toPrimitive")||(eQ[e]=eg&&eN(eJ,e)?eJ[e]:eV("Symbol."+e)),eQ[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ei=function(e,t){if(!eu(e)||ey(e))return e;var r,n=ex(e,eY);if(n){if(void 0===t&&(t="default"),r=N(n,e,t),!eu(r)||ey(r))return r;throw new eX("Can't convert object to primitive value")}return void 0===t&&(t="number"),eT(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
ea=function(e){var t=ei(e,"string");return ey(t)?t:t+""};var eZ={},e0={},e1=F.document,e2=eu(e1)&&eu(e1.createElement);e0=function(e){return e2?e1.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eZ=!I&&!D(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(e0("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var e8=Object.getOwnPropertyDescriptor;o=I?e8:function(e,t){if(e=q(e),t=ea(t),eZ)try{return e8(e,t)}catch(e){}if(eN(e,t))return W(!N(s,e,t),e[t])};var e4={},e3={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
e3=I&&D(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var e6={},e5=String,e7=TypeError;// `Assert: Type(argument) is Object`
e6=function(e){if(eu(e))return e;throw new e7(e5(e)+" is not an object")};var e9=TypeError,te=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,tr="enumerable",tn="configurable",to="writable";u=I?e3?function(e,t,r){if(e6(e),t=ea(t),e6(r),"function"==typeof e&&"prototype"===t&&"value"in r&&to in r&&!r[to]){var n=tt(e,t);n&&n[to]&&(e[t]=r.value,r={configurable:tn in r?r[tn]:n[tn],enumerable:tr in r?r[tr]:n[tr],writable:!1})}return te(e,t,r)}:te:function(e,t,r){if(e6(e),t=ea(t),e6(r),eZ)try{return te(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new e9("Accessors not supported");return"value"in r&&(e[t]=r.value),e},e4=I?function(e,t,r){return u(e,t,W(1,r))}:function(e,t,r){return e[t]=r,e};var ts={},ta={},ti=Function.prototype,tu=I&&Object.getOwnPropertyDescriptor,tl=eN(ti,"name")&&(!I||I&&tu(ti,"name").configurable),tc={},tf=J(Function.toString);el(eF.inspectSource)||(eF.inspectSource=function(e){return tf(e)}),tc=eF.inspectSource;var tp={},ty={},tv=F.WeakMap;ty=el(tv)&&/native code/.test(String(tv));var tm={},th=e$("keys");tm=function(e){return th[e]||(th[e]=eK(e))};var tg={};tg={};var tb="Object already initialized",tB=F.TypeError,tC=F.WeakMap;if(ty||eF.state){var tA=eF.state||(eF.state=new tC);/* eslint-disable no-self-assign -- prototype methods protection */tA.get=tA.get,tA.has=tA.has,tA.set=tA.set,/* eslint-enable no-self-assign -- prototype methods protection */l=function(e,t){if(tA.has(e))throw new tB(tb);return t.facade=e,tA.set(e,t),t},c=function(e){return tA.get(e)||{}},f=function(e){return tA.has(e)}}else{var t_=tm("state");tg[t_]=!0,l=function(e,t){if(eN(e,t_))throw new tB(tb);return t.facade=e,e4(e,t_,t),t},c=function(e){return eN(e,t_)?e[t_]:{}},f=function(e){return eN(e,t_)}}var tj=(tp={set:l,get:c,has:f,enforce:function(e){return f(e)?c(e):l(e,{})},getterFor:function(e){return function(t){var r;if(!eu(t)||(r=c(t)).type!==e)throw new tB("Incompatible receiver, "+e+" required");return r}}}).enforce,tE=tp.get,tw=String,tx=Object.defineProperty,tS=J("".slice),tR=J("".replace),tO=J([].join),tk=I&&!D(function(){return 8!==tx(function(){},"length",{value:8}).length}),tT=String(String).split("String"),tH=ta=function(e,t,r){"Symbol("===tS(tw(t),0,7)&&(t="["+tR(tw(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eN(e,"name")||tl&&e.name!==t)&&(I?tx(e,"name",{value:t,configurable:!0}):e.name=t),tk&&r&&eN(r,"arity")&&e.length!==r.arity&&tx(e,"length",{value:r.arity});try{r&&eN(r,"constructor")&&r.constructor?I&&tx(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tj(e);return eN(n,"source")||(n.source=tO(tT,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tH(function(){return el(this)&&tE(this).source||tc(this)},"toString"),ts=function(e,t,r,n){n||(n={});var o=n.enumerable,s=void 0!==n.name?n.name:t;if(el(r)&&ta(r,s,n),n.global)o?e[t]=r:eL(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:u(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t$={},tP={},tF={},tL={},tI={},tD={},tN=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tD=Math.trunc||function(e){var t=+e;return(t>0?tM:tN)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tI=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tD(t)};var tU=Math.max,tG=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tL=function(e,t){var r=tI(e);return r<0?tU(r+t,0):tG(r,t)};var tK={},tW={},tq=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tW=function(e){return e>0?tq(tI(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tK=function(e){return tW(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tz=function(e){return function(t,r,n){var o,s=q(t),a=tK(s),i=tL(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>i;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=s[i++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>i;i++)if((e||i in s)&&s[i]===r)return e||i||0;return!e&&-1}},tJ={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tz(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tz(!1)}.indexOf,tQ=J([].push);tF=function(e,t){var r,n=q(e),o=0,s=[];for(r in n)!eN(tg,r)&&eN(n,r)&&tQ(s,r);// Don't enum bug & hidden keys
for(;t.length>o;)eN(n,r=t[o++])&&(~tJ(s,r)||tQ(s,r));return s};var tV=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tF(e,tV)},d=Object.getOwnPropertySymbols;var tX=J([].concat);// all object keys, includes non-enumerable and symbols
tP=ev("Reflect","ownKeys")||function(e){var t=p(e6(e));return d?tX(t,d(e)):t},t$=function(e,t,r){for(var n=tP(t),s=0;s<n.length;s++){var a=n[s];eN(e,a)||r&&eN(r,a)||u(e,a,o(t,a))}};var tY={},tZ=/#|\.prototype\./,t0=function(e,t){var r=t2[t1(e)];return r===t4||r!==t8&&(el(t)?D(t):!!t)},t1=t0.normalize=function(e){return String(e).replace(tZ,".").toLowerCase()},t2=t0.data={},t8=t0.NATIVE="N",t4=t0.POLYFILL="P";tY=t0,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/P=function(e,t){var r,n,s,a,i,u=e.target,l=e.global,c=e.stat;if(r=l?F:c?F[u]||eL(u,{}):(F[u]||{}).prototype)for(n in t){// contained in target
if(a=t[n],s=e.dontCallGetSet?(i=o(r,n))&&i.value:r[n],!tY(l?n:u+(c?".":"#")+n,e.forced)&&void 0!==s){if(typeof a==typeof s)continue;t$(a,s)}(e.sham||s&&s.sham)&&e4(a,"sham",!0),ts(r,n,a,e)}};var t3={},t6={},t5=Function.prototype,t7=t5.apply,t9=t5.call;// eslint-disable-next-line es/no-reflect -- safe
t6="object"==typeof Reflect&&Reflect.apply||(M?t9.bind(t7):function(){return t9.apply(t7,arguments)});var re={},rt={},rr=(rt=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===Y(e))return J(e)})(rt.bind);// optional / simple context binding
re=function(e,t){return eS(e),void 0===t?e:M?rr(e,t):function(){return e.apply(t,arguments)}};var rn={};rn=ev("document","documentElement");var ro={};ro=J([].slice);var rs={},ra=TypeError;rs=function(e,t){if(e<t)throw new ra("Not enough arguments");return e};var ri={};// eslint-disable-next-line redos/no-vulnerable -- safe
ri=/(?:ipad|iphone|ipod).*applewebkit/i.test(eB);var ru={};ru="process"===Y(F.process);var rl=F.setImmediate,rc=F.clearImmediate,rf=F.process,rp=F.Dispatch,rd=F.Function,ry=F.MessageChannel,rv=F.String,rm=0,rh={},rg="onreadystatechange";D(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
y=F.location});var rb=function(e){if(eN(rh,e)){var t=rh[e];delete rh[e],t()}},rB=function(e){return function(){rb(e)}},rC=function(e){rb(e.data)},rA=function(e){// old engines have not location.origin
F.postMessage(rv(e),y.protocol+"//"+y.host)};rl&&rc||(rl=function(e){rs(arguments.length,1);var t=el(e)?e:rd(e),r=ro(arguments,1);return rh[++rm]=function(){t6(t,void 0,r)},v(rm),rm},rc=function(e){delete rh[e]},ru?v=function(e){rf.nextTick(rB(e))}:rp&&rp.now?v=function(e){rp.now(rB(e))}:ry&&!ri?(h=(m=new ry).port2,m.port1.onmessage=rC,v=re(h.postMessage,h)):F.addEventListener&&el(F.postMessage)&&!F.importScripts&&y&&"file:"!==y.protocol&&!D(rA)?(v=rA,F.addEventListener("message",rC,!1)):v=rg in e0("script")?function(e){rn.appendChild(e0("script"))[rg]=function(){rn.removeChild(this),rb(e)}}:function(e){setTimeout(rB(e),0)});var r_=(t3={set:rl,clear:rc}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
P({global:!0,bind:!0,enumerable:!0,forced:F.clearImmediate!==r_},{clearImmediate:r_});var rj=t3.set,rE={},rw={};/* global Bun -- Deno case */rw="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rx=F.Function,rS=/MSIE .\./.test(eB)||rw&&((t=F.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rE=function(e,t){var r=t?2:1;return rS?function(n,o/* , ...arguments */){var s=rs(arguments.length,1)>r,a=el(n)?n:rx(n),i=s?ro(arguments,r):[],u=s?function(){t6(a,this,i)}:a;return t?e(u,o):e(u)}:e};// https://github.com/oven-sh/bun/issues/1633
var rR=F.setImmediate?rE(rj,!1):rj;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
P({global:!0,bind:!0,enumerable:!0,forced:F.setImmediate!==rR},{setImmediate:rR});var rO={};O(rO,"Fraction",()=>g,e=>g=e),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,o=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var s=r.split("/");this.numerator=s[0],this.denominator=s[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},g=Fraction;var rk={};rk=new URL($("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rT{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}spinner(){let e=`
      <div class="spinner">
      <svg>
      <use href="${/*@__PURE__*/k(rk)}#icon-loader"></use>
      </svg></div>
      `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMsg){let t=`<div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/k(rk)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class rH extends rT{_errorMsg="Could not find the recipe you are looking for!";_parentEl=document.querySelector(".recipe");_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.img}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(rk)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(rk)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${/*@__PURE__*/k(rk)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${/*@__PURE__*/k(rk)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
        <use href="${/*@__PURE__*/k(rk)}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round bookmark--btn">
      <svg class="">
        <use href="${/*@__PURE__*/k(rk)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>
  <div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
  ${this._data.ingredients.map(this._recipeIngmarkupGenerator).join("")}
  </ul>
  </div>
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This ${this._data.title} was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.src}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(rk)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}_recipeIngmarkupGenerator(e){return`<li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${/*@__PURE__*/k(rk)}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${null===e.quantity?"":new/*@__PURE__*/(k(rO)).Fraction(e.quantity).toString()}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${e.unit}</span>
      ${e.description}
    </div>
  </li>`}renderUpdateServings(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.updateTo;n<1||e(n)})}renderHandler(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}renderBookmark(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".bookmark--btn");r&&e()})}}var r$=new rH;class rP{_parentEl=document.querySelector(".search");clearInput(){this._parentEl.querySelector(".search__field").value=""}getQuery(){return this._parentEl.querySelector(".search__field").value}searchHandler(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rF=new rP;class rL extends rT{_parentEl=document.querySelector(".results");_errorMsg="No recipes found.";_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){return`<li class="preview">
    <a class="preview__link preview__link--active" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.img}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${/*@__PURE__*/k(rk)}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`}}var rI=new rL,rD={},rN=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,r,n,s){var a,i,u=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new x(s||[]),i=p,function(r,o){if(i===d)throw Error("Generator is already running");if(i===y){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return R()}for(a.method=r,a.arg=o;;){var s=a.delegate;if(s){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var o=n.method,s=r.iterator[o];if(s===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var a=f(s,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=i.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):i:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(s,a);if(u){if(u===v)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(i===p)throw i=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);i=d;var l=f(e,n,a);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
i=a.done?y:"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(i=y,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=l.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p="suspendedStart",d="executing",y="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function h(){}function g(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};l(b,a,function(){return this});var B=Object.getPrototypeOf,C=B&&B(B(S([])));C&&C!==r&&n.call(C,a)&&// of the polyfill.
(b=C);var A=g.prototype=m.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function _(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,s){function a(){return new t(function(r,a){!function r(o,s,a,i){var u=f(e[o],e,s);if("throw"===u.type)i(u.arg);else{var l=u.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?t.resolve(c.__await).then(function(e){r("next",e,a,i)},function(e){r("throw",e,a,i)}):t.resolve(c).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=e,a(l)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,i)})}}(o,s,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function S(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return s.next=s}}// Return an iterator with no values.
return{next:R}}function R(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return h.prototype=g,o(A,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:h,configurable:!0}),h.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,u,"GeneratorFunction")),e.prototype=Object.create(A),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},_(j.prototype),l(j.prototype,i,function(){return this}),e.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,o,s){void 0===s&&(s=Promise);var a=new j(c(t,r,n,o),s);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
_(A),l(A,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(A,a,function(){return this}),l(A,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(w),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!o}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],i=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(l){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var s=o;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&// location outside the try/catch block.
(s=null);var a=s?s.completion:{};return(a.type=e,a.arg=t,s)?(this.method="next",this.next=s.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}(rD);try{regeneratorRuntime=rN}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rN:Function("r","regeneratorRuntime = r")(rN)}class rM extends rT{_parentEl=document.querySelector(".pagination");clickHandler(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=Math.ceil(this._data.result.length/this._data.resultPerPage),t=this._data.page;return(// Page 1 and there are next pages
e>1&&1===t?this._btnNext(t):e===t&&1===e?"":e>t?this._btnPrev(t)+this._btnNext(t):e===t&&e>1?this._btnPrev(t):void 0)}_btnPrev(e){return`
          <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/k(rk)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`}_btnNext(e){return`
    <button data-goto='${e+1}' class="btn--inline pagination__btn--next">
    <span>Page ${e+1}</span>
    <svg class="search__icon">
       <use href="${/*@__PURE__*/k(rk)}#icon-arrow-right"></use>
    </svg>
    </button>`}}var rU=new rM;class rG extends rT{_parentEl=document.querySelector(".bookmarks__list");_errorMsg="No bookmarks yet. Find a nice recipe and bookmark it.";_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){return`<li class="preview">
    <a class="preview__link preview__link--active" href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.img}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        <div class="preview__user-generated">
          <svg>
            <use href="${/*@__PURE__*/k(rk)}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`}}var rK=new rG;const rW="https://forkify-api.herokuapp.com/api/v2/recipes",rq=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (Error Code : ${t.status})`);return r}catch(e){throw e}},rz={recipe:{},search:{query:"",page:1,result:[],resultPerPage:12},bookmarks:[]},rJ=function(){localStorage.setItem("bookmarks",JSON.stringify(rz.bookmarks))},rQ=async function(e){try{let t=await rq(`${rW}/${e}`),{recipe:r}=t.data;rz.recipe={id:r.id,title:r.title,publisher:r.publisher,src:r.source_url,img:r.image_url,ingredients:r.ingredients,servings:r.servings,time:r.cooking_time},rz.bookmarks.some(t=>t.id===e)?rz.recipe.bookmarked=!0:rz.recipe.bookmarked=!1}catch(e){throw e}},rV=async function(e){try{rz.search.query=e;let t=await rq(`${rW}?search=${e}`);console.log(t),rz.search.result=t.data.recipes.map(e=>({id:e.id,img:e.image_url,publisher:e.publisher,title:e.title}))}catch(e){throw e}},rX=function(e){rz.recipe.ingredients.forEach(t=>{t.quantity&&(t.quantity=t.quantity*e/rz.recipe.servings)}),rz.recipe.servings=e},rY=function(e=rz.search.page){rz.search.page=e;let t=(e-1)*rz.search.resultPerPage,r=e*rz.search.resultPerPage;return rz.search.result.slice(t,r)},rZ=function(e){rz.bookmarks.push(e),e.id===rz.recipe.id&&(rz.recipe.bookmarked=!0),rJ()},r0=function(e){let t=rz.bookmarks.indexOf(t=>e===t.id);rz.bookmarks.splice(t,1),e===rz.recipe.id&&(rz.recipe.bookmarked=!1),rJ()};!function(){let e=localStorage.getItem("bookmarks");e&&(rz.bookmarks=JSON.parse(e))}();var r1={},r2=$("hPtJY"),r8=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r4=/%[sdj%]/g;r1.format=function(e){if(!ni(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(r5(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,o=n.length,s=String(e).replace(r4,function(e){if("%%"===e)return"%";if(r>=o)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),a=n[r];r<o;a=n[++r])ns(a)||!nc(a)?s+=" "+a:s+=" "+r5(a);return s},// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
r1.deprecate=function(e,t){if(void 0!==r2&&!0===r2.noDeprecation)return e;// Allow for deprecating things in the process of starting up.
if(void 0===r2)return function(){return r1.deprecate(e,t).apply(this,arguments)};var r=!1;return function(){if(!r){if(r2.throwDeprecation)throw Error(t);r2.traceDeprecation?console.trace(t):console.error(t),r=!0}return e.apply(this,arguments)}};var r3={},r6=/^$/;/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 *//* legacy: obj, showHidden, depth, colors*/function r5(e,t){// default options
var r={seen:[],stylize:r9};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),no(t)?r.showHidden=t:t&&r1._extend(r,t),nu(r.showHidden)&&(r.showHidden=!1),nu(r.depth)&&(r.depth=2),nu(r.colors)&&(r.colors=!1),nu(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=r7),ne(r,e,r.depth)}function r7(e,t){var r=r5.styles[t];return r?"\x1b["+r5.colors[r][0]+"m"+e+"\x1b["+r5.colors[r][1]+"m":e}function r9(e,t){return e}function ne(e,t,r){// Provide a hook for user-specified inspect functions.
// Check that value is an object with an inspect function on it
if(e.customInspect&&t&&nd(t.inspect)&&// Filter out the util module, it's inspect function is special
t.inspect!==r1.inspect&&// Also filter out any prototype objects using the circular check.
!(t.constructor&&t.constructor.prototype===t)){var n,o,s,a,i,u=t.inspect(r,e);return ni(u)||(u=ne(e,u,r)),u}// Primitive types cannot have properties
var l=function(e,t){if(nu(t))return e.stylize("undefined","undefined");if(ni(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return na(t)?e.stylize(""+t,"number"):no(t)?e.stylize(""+t,"boolean"):ns(t)?e.stylize("null","null"):void 0}(e,t);if(l)return l;// Look up the keys of the object.
var c=Object.keys(t),f=(a={},c.forEach(function(e,t){a[e]=!0}),a);// IE doesn't make error fields non-enumerable
// http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
if(e.showHidden&&(c=Object.getOwnPropertyNames(t)),np(t)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return nt(t);// Some type of object without properties can be shortcutted.
if(0===c.length){if(nd(t)){var p=t.name?": "+t.name:"";return e.stylize("[Function"+p+"]","special")}if(nl(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(nf(t))return e.stylize(Date.prototype.toString.call(t),"date");if(np(t))return nt(t)}var d="",y=!1,v=["{","}"];return(nn(t)&&(y=!0,v=["[","]"]),nd(t)&&(d=" [Function"+(t.name?": "+t.name:"")+"]"),nl(t)&&(d=" "+RegExp.prototype.toString.call(t)),nf(t)&&(d=" "+Date.prototype.toUTCString.call(t)),np(t)&&(d=" "+nt(t)),0!==c.length||y&&0!=t.length)?r<0?nl(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),i=y?function(e,t,r,n,o){for(var s=[],a=0,i=t.length;a<i;++a)nh(t,String(a))?s.push(nr(e,t,r,n,String(a),!0)):s.push("");return o.forEach(function(o){o.match(/^\d+$/)||s.push(nr(e,t,r,n,o,!0))}),s}(e,t,r,f,c):c.map(function(n){return nr(e,t,r,f,n,y)}),e.seen.pop(),n=d,o=v,s=0,i.reduce(function(e,t){return s++,t.indexOf("\n")>=0&&s++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?o[0]+(""===n?"":n+"\n ")+" "+i.join(",\n  ")+" "+o[1]:o[0]+n+" "+i.join(", ")+" "+o[1]):v[0]+d+v[1]}function nt(e){return"["+Error.prototype.toString.call(e)+"]"}function nr(e,t,r,n,o,s){var a,i,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?i=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(i=e.stylize("[Setter]","special")),nh(n,o)||(a="["+o+"]"),!i&&(0>e.seen.indexOf(u.value)?(i=ns(r)?ne(e,u.value,null):ne(e,u.value,r-1)).indexOf("\n")>-1&&(i=s?i.split("\n").map(function(e){return"  "+e}).join("\n").slice(2):"\n"+i.split("\n").map(function(e){return"   "+e}).join("\n")):i=e.stylize("[Circular]","special")),nu(a)){if(s&&o.match(/^\d+$/))return i;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.slice(1,-1),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+i}function nn(e){return Array.isArray(e)}function no(e){return"boolean"==typeof e}function ns(e){return null===e}function na(e){return"number"==typeof e}function ni(e){return"string"==typeof e}function nu(e){return void 0===e}function nl(e){return nc(e)&&"[object RegExp]"===ny(e)}function nc(e){return"object"==typeof e&&null!==e}function nf(e){return nc(e)&&"[object Date]"===ny(e)}function np(e){return nc(e)&&("[object Error]"===ny(e)||e instanceof Error)}function nd(e){return"function"==typeof e}function ny(e){return Object.prototype.toString.call(e)}function nv(e){return e<10?"0"+e.toString(10):e.toString(10)}r1.debuglog=function(e){if(!r3[e=e.toUpperCase()]){if(r6.test(e)){var t=r2.pid;r3[e]=function(){var r=r1.format.apply(r1,arguments);console.error("%s %d: %s",e,t,r)}}else r3[e]=function(){}}return r3[e]},r1.inspect=r5,// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
r5.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},// Don't use 'blue' not visible on cmd.exe
r5.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",// "name": intentionally not styling
regexp:"red"},// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
r1.types=$("7He6T"),r1.isArray=nn,r1.isBoolean=no,r1.isNull=ns,r1.isNullOrUndefined=function(e){return null==e},r1.isNumber=na,r1.isString=ni,r1.isSymbol=function(e){return"symbol"==typeof e},r1.isUndefined=nu,r1.isRegExp=nl,r1.types.isRegExp=nl,r1.isObject=nc,r1.isDate=nf,r1.types.isDate=nf,r1.isError=np,r1.types.isNativeError=np,r1.isFunction=nd,r1.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||// ES6 symbol
void 0===e},r1.isBuffer=$("kotBY");var nm=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function nh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}// log is just a thin wrapper to console.log that prepends a timestamp
r1.log=function(){var e,t;console.log("%s - %s",(t=[nv((e=new Date).getHours()),nv(e.getMinutes()),nv(e.getSeconds())].join(":"),[e.getDate(),nm[e.getMonth()],t].join(" ")),r1.format.apply(r1,arguments))},/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */r1.inherits=$("dlqwk"),r1._extend=function(e,t){// Don't do anything if add isn't an object
if(!t||!nc(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var ng="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function nb(e,t){// `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
// Because `null` is a special error value in callbacks which means "no error
// occurred", we error-wrap so the callback consumer can distinguish between
// "the promise rejected with null" or "the promise fulfilled with undefined".
if(!e){var r=Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}r1.promisify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');if(ng&&e[ng]){var t=e[ng];if("function"!=typeof t)throw TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,ng,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],s=0;s<arguments.length;s++)o.push(arguments[s]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(e){r(e)}return n}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),ng&&Object.defineProperty(t,ng,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r8(e))},r1.promisify.custom=ng,r1.callbackify=function(e){if("function"!=typeof e)throw TypeError('The "original" argument must be of type Function');// We DO NOT return the promise as it gives the user a false sense that
// the promise is actually somehow related to the callback's execution
// and that the callback throwing will reject the promise.
function t(){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);var n=t.pop();if("function"!=typeof n)throw TypeError("The last argument must be of type Function");var o=this,s=function(){return n.apply(o,arguments)};// In true node style we process the callback on `nextTick` with all the
// implications (stack, `uncaughtException`, `async_hooks`)
e.apply(this,t).then(function(e){r2.nextTick(s.bind(null,null,e))},function(e){r2.nextTick(nb.bind(null,e,s))})}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),Object.defineProperties(t,r8(e)),t};var nB={},nC={};b=e=>"number"==typeof e?Number.isInteger(e):"string"==typeof e&&""!==e.trim()&&Number.isInteger(Number(e)),B=(e,t,r=1,n)=>!!(!1!==n&&b(e)&&b(t))&&(Number(t)-Number(e))/Number(r)>=n,C=e=>"brace"===e.type&&e.commas>>0+e.ranges>>0==0&&(e.invalid=!0,!0),A=e=>"brace"===e.type&&(!0===e.invalid||!!e.dollar||(e.commas>>0+e.ranges>>0==0||!0!==e.open||!0!==e.close)&&(e.invalid=!0,!0)),_=e=>"open"===e.type||"close"===e.type||!0===e.open||!0===e.close,j=e=>e.reduce((e,t)=>("text"===t.type&&e.push(t.value),"range"===t.type&&(t.type="text"),e),[]),E=(...e)=>{let t=[],r=e=>{for(let n=0;n<e.length;n++){let o=e[n];Array.isArray(o)?r(o,t):void 0!==o&&t.push(o)}return t};return r(e),t},nC=(e,t={})=>{let r=(e,n={})=>{let o=t.escapeInvalid&&A(n),s=!0===e.invalid&&!0===t.escapeInvalid,a="";if(e.value)return(o||s)&&_(e)?"\\"+e.value:e.value;if(e.value)return e.value;if(e.nodes)for(let t of e.nodes)a+=r(t);return a};return r(e)};var nA={},n_={},nj={},nE={};nE=function(e){return"number"==typeof e?e-e==0:"string"==typeof e&&""!==e.trim()&&(Number.isFinite?Number.isFinite(+e):isFinite(+e))};const nw=(e,t,r)=>{var n,o;let s,a,i;if(!1===nE(e))throw TypeError("toRegexRange: expected the first argument to be a number");if(void 0===t||e===t)return String(e);if(!1===nE(t))throw TypeError("toRegexRange: expected the second argument to be a number.");let u={relaxZeros:!0,...r};"boolean"==typeof u.strictZeros&&(u.relaxZeros=!1===u.strictZeros);let l=e+":"+t+"="+String(u.relaxZeros)+String(u.shorthand)+String(u.capture)+String(u.wrap);if(nw.cache.hasOwnProperty(l))return nw.cache[l].result;let c=Math.min(e,t),f=Math.max(e,t);if(1===Math.abs(c-f)){let r=e+"|"+t;return u.capture?`(${r})`:!1===u.wrap?r:`(?:${r})`}let p=n$(e)||n$(t),d={min:e,max:t,a:c,b:f},y=[],v=[];return p&&(d.isPadded=p,d.maxLen=String(d.max).length),c<0&&(v=nx(f<0?Math.abs(f):1,Math.abs(c),d,u),c=d.a=0),f>=0&&(y=nx(c,f,d,u)),d.negatives=v,d.positives=y,d.result=(s=nS(n=v,o=y,"-",!1,u)||[],a=nS(o,n,"",!1,u)||[],i=nS(n,o,"-?",!0,u)||[],s.concat(i).concat(a).join("|")),!0===u.capture?d.result=`(${d.result})`:!1!==u.wrap&&y.length+v.length>1&&(d.result=`(?:${d.result})`),nw.cache[l]=d,d.result};function nx(e,t,r,n){let o,s=function(e,t){let r=1,n=1,o=nk(e,1),s=new Set([t]);for(;e<=o&&o<=t;)s.add(o),r+=1,o=nk(e,r);for(o=nT(t+1,n)-1;e<o&&o<=t;)s.add(o),n+=1,o=nT(t+1,n)-1;return(s=[...s]).sort(nR),s}(e,t),a=[],i=e;for(let e=0;e<s.length;e++){let t=s[e],u=/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */function(e,t,r){if(e===t)return{pattern:e,count:[],digits:0};let n=/**
 * Zip strings
 */function(e,t){let r=[];for(let n=0;n<e.length;n++)r.push([e[n],t[n]]);return r}(e,t),o=n.length,s="",a=0;for(let e=0;e<o;e++){let[t,r]=n[e];t===r?s+=t:"0"!==t||"9"!==r?s+=`[${t}${r-t==1?"":"-"}${r}]`:a++}return a&&(s+=!0===r.shorthand?"\\d":"[0-9]"),{pattern:s,count:[a],digits:o}}(String(i),String(t),n),l="";if(!r.isPadded&&o&&o.pattern===u.pattern){o.count.length>1&&o.count.pop(),o.count.push(u.count[0]),o.string=o.pattern+nH(o.count),i=t+1;continue}r.isPadded&&(l=function(e,t,r){if(!t.isPadded)return e;let n=Math.abs(t.maxLen-String(e).length),o=!1!==r.relaxZeros;switch(n){case 0:return"";case 1:return o?"0?":"0";case 2:return o?"0{0,2}":"00";default:return o?`0{0,${n}}`:`0{${n}}`}}(t,r,n)),u.string=l+u.pattern+nH(u.count),a.push(u),i=t+1,o=u}return a}function nS(e,t,r,n,o){let s=[];for(let o of e){let{string:e}=o;n||nO(t,"string",e)||s.push(r+e),n&&nO(t,"string",e)&&s.push(r+e)}return s}function nR(e,t){return e>t?1:t>e?-1:0}function nO(e,t,r){return e.some(e=>e[t]===r)}function nk(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function nT(e,t){return e-e%Math.pow(10,t)}function nH(e){let[t=0,r=""]=e;return r||t>1?`{${t+(r?","+r:"")}}`:""}function n$(e){return/^-?(0+)\d/.test(e)}/**
 * Cache
 */nw.cache={},nw.clearCache=()=>nw.cache={},/**
 * Expose `toRegexRange`
 */nj=nw;const nP=e=>null!==e&&"object"==typeof e&&!Array.isArray(e),nF=e=>t=>!0===e?Number(t):String(t),nL=e=>"number"==typeof e||"string"==typeof e&&""!==e,nI=e=>Number.isInteger(+e),nD=e=>{let t=`${e}`,r=-1;if("-"===t[0]&&(t=t.slice(1)),"0"===t)return!1;for(;"0"===t[++r];);return r>0},nN=(e,t,r)=>"string"==typeof e||"string"==typeof t||!0===r.stringify,nM=(e,t,r)=>{if(t>0){let r="-"===e[0]?"-":"";r&&(e=e.slice(1)),e=r+e.padStart(r?t-1:t,"0")}return!1===r?String(e):e},nU=(e,t)=>{let r="-"===e[0]?"-":"";for(r&&(e=e.slice(1),t--);e.length<t;)e="0"+e;return r?"-"+e:e},nG=(e,t)=>{let r;e.negatives.sort((e,t)=>e<t?-1:e>t?1:0),e.positives.sort((e,t)=>e<t?-1:e>t?1:0);let n=t.capture?"":"?:",o="",s="";return(e.positives.length&&(o=e.positives.join("|")),e.negatives.length&&(s=`-(${n}${e.negatives.join("|")})`),r=o&&s?`${o}|${s}`:o||s,t.wrap)?`(${n}${r})`:r},nK=(e,t,r,n)=>{if(r)return nj(e,t,{wrap:!1,...n});let o=String.fromCharCode(e);if(e===t)return o;let s=String.fromCharCode(t);return`[${o}-${s}]`},nW=(e,t,r)=>{if(Array.isArray(e)){let t=!0===r.wrap,n=r.capture?"":"?:";return t?`(${n}${e.join("|")})`:e.join("|")}return nj(e,t,r)},nq=(...e)=>RangeError("Invalid range arguments: "+r1.inspect(...e)),nz=(e,t,r)=>{if(!0===r.strictRanges)throw nq([e,t]);return[]},nJ=(e,t)=>{if(!0===t.strictRanges)throw TypeError(`Expected step "${e}" to be a number`);return[]},nQ=(e,t,r=1,n={})=>{let o=Number(e),s=Number(t);if(!Number.isInteger(o)||!Number.isInteger(s)){if(!0===n.strictRanges)throw nq([e,t]);return[]}0===o&&(o=0),0===s&&(s=0);let a=o>s,i=String(e),u=String(t),l=String(r);r=Math.max(Math.abs(r),1);let c=nD(i)||nD(u)||nD(l),f=c?Math.max(i.length,u.length,l.length):0,p=!1===c&&!1===nN(e,t,n),d=n.transform||nF(p);if(n.toRegex&&1===r)return nK(nU(e,f),nU(t,f),!0,n);let y={negatives:[],positives:[]},v=e=>y[e<0?"negatives":"positives"].push(Math.abs(e)),m=[],h=0;for(;a?o>=s:o<=s;)!0===n.toRegex&&r>1?v(o):m.push(nM(d(o,h),f,p)),o=a?o-r:o+r,h++;return!0===n.toRegex?r>1?nG(y,n):nW(m,null,{wrap:!1,...n}):m},nV=(e,t,r=1,n={})=>{if(!nI(e)&&e.length>1||!nI(t)&&t.length>1)return nz(e,t,n);let o=n.transform||(e=>String.fromCharCode(e)),s=`${e}`.charCodeAt(0),a=`${t}`.charCodeAt(0),i=s>a,u=Math.min(s,a),l=Math.max(s,a);if(n.toRegex&&1===r)return nK(u,l,!1,n);let c=[],f=0;for(;i?s>=a:s<=a;)c.push(o(s,f)),s=i?s-r:s+r,f++;return!0===n.toRegex?nW(c,null,{wrap:!1,options:n}):c},nX=(e,t,r,n={})=>{if(null==t&&nL(e))return[e];if(!nL(e)||!nL(t))return nz(e,t,n);if("function"==typeof r)return nX(e,t,1,{transform:r});if(nP(r))return nX(e,t,0,r);let o={...n};return(!0===o.capture&&(o.wrap=!0),nI(r=r||o.step||1))?nI(e)&&nI(t)?nQ(e,t,r,o):nV(e,t,Math.max(Math.abs(r),1),o):null==r||nP(r)?nX(e,t,1,r):nJ(r,o)};n_=nX,nA=(e,t={})=>{let r=(e,n={})=>{let o=A(n),s=!0===e.invalid&&!0===t.escapeInvalid,a=!0===o||!0===s,i=!0===t.escapeInvalid?"\\":"",u="";if(!0===e.isOpen||!0===e.isClose)return i+e.value;if("open"===e.type)return a?i+e.value:"(";if("close"===e.type)return a?i+e.value:")";if("comma"===e.type)return"comma"===e.prev.type?"":a?e.value:"|";if(e.value)return e.value;if(e.nodes&&e.ranges>0){let r=j(e.nodes),n=n_(...r,{...t,wrap:!1,toRegex:!0});if(0!==n.length)return r.length>1&&n.length>1?`(${n})`:n}if(e.nodes)for(let t of e.nodes)u+=r(t,e);return u};return r(e)};var nY={};const nZ=(e="",t="",r=!1)=>{let n=[];if(e=[].concat(e),!(t=[].concat(t)).length)return e;if(!e.length)return r?E(t).map(e=>`{${e}}`):t;for(let o of e)if(Array.isArray(o))for(let e of o)n.push(nZ(e,t,r));else for(let e of t)!0===r&&"string"==typeof e&&(e=`{${e}}`),n.push(Array.isArray(e)?nZ(o,e,r):o+e);return E(n)};nY=(e,t={})=>{let r=void 0===t.rangeLimit?1e3:t.rangeLimit,n=(e,o={})=>{e.queue=[];let s=o,a=o.queue;for(;"brace"!==s.type&&"root"!==s.type&&s.parent;)a=(s=s.parent).queue;if(e.invalid||e.dollar){a.push(nZ(a.pop(),nC(e,t)));return}if("brace"===e.type&&!0!==e.invalid&&2===e.nodes.length){a.push(nZ(a.pop(),["{}"]));return}if(e.nodes&&e.ranges>0){let n=j(e.nodes);if(B(...n,t.step,r))throw RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");let o=n_(...n,t);0===o.length&&(o=nC(e,t)),a.push(nZ(a.pop(),o)),e.nodes=[];return}let i=C(e),u=e.queue,l=e;for(;"brace"!==l.type&&"root"!==l.type&&l.parent;)u=(l=l.parent).queue;for(let t=0;t<e.nodes.length;t++){let r=e.nodes[t];if("comma"===r.type&&"brace"===e.type){1===t&&u.push(""),u.push("");continue}if("close"===r.type){a.push(nZ(a.pop(),u,i));continue}if(r.value&&"open"!==r.type){u.push(nZ(u.pop(),r.value));continue}r.nodes&&n(r,e)}return u};return E(n(e))};var n0={},n1={},n2=(n1={MAX_LENGTH:65536,// Digits
CHAR_0:"0",/* 0 */CHAR_9:"9",/* 9 */// Alphabet chars.
CHAR_UPPERCASE_A:"A",/* A */CHAR_LOWERCASE_A:"a",/* a */CHAR_UPPERCASE_Z:"Z",/* Z */CHAR_LOWERCASE_Z:"z",/* z */CHAR_LEFT_PARENTHESES:"(",/* ( */CHAR_RIGHT_PARENTHESES:")",/* ) */CHAR_ASTERISK:"*",/* * */// Non-alphabetic chars.
CHAR_AMPERSAND:"&",/* & */CHAR_AT:"@",/* @ */CHAR_BACKSLASH:"\\",/* \ */CHAR_BACKTICK:"`",/* ` */CHAR_CARRIAGE_RETURN:"\r",/* \r */CHAR_CIRCUMFLEX_ACCENT:"^",/* ^ */CHAR_COLON:":",/* : */CHAR_COMMA:",",/* , */CHAR_DOLLAR:"$",/* . */CHAR_DOT:".",/* . */CHAR_DOUBLE_QUOTE:'"',/* " */CHAR_EQUAL:"=",/* = */CHAR_EXCLAMATION_MARK:"!",/* ! */CHAR_FORM_FEED:"\f",/* \f */CHAR_FORWARD_SLASH:"/",/* / */CHAR_HASH:"#",/* # */CHAR_HYPHEN_MINUS:"-",/* - */CHAR_LEFT_ANGLE_BRACKET:"<",/* < */CHAR_LEFT_CURLY_BRACE:"{",/* { */CHAR_LEFT_SQUARE_BRACKET:"[",/* [ */CHAR_LINE_FEED:"\n",/* \n */CHAR_NO_BREAK_SPACE:"\xa0",/* \u00A0 */CHAR_PERCENT:"%",/* % */CHAR_PLUS:"+",/* + */CHAR_QUESTION_MARK:"?",/* ? */CHAR_RIGHT_ANGLE_BRACKET:">",/* > */CHAR_RIGHT_CURLY_BRACE:"}",/* } */CHAR_RIGHT_SQUARE_BRACKET:"]",/* ] */CHAR_SEMICOLON:";",/* ; */CHAR_SINGLE_QUOTE:"'",/* ' */CHAR_SPACE:" ",/*   */CHAR_TAB:"	",/* \t */CHAR_UNDERSCORE:"_",/* _ */CHAR_VERTICAL_LINE:"|",/* | */CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\uFEFF"/* \uFEFF */}).MAX_LENGTH,n8=n1.CHAR_BACKSLASH,n4=n1.CHAR_BACKTICK,n3=n1.CHAR_COMMA,n6=n1.CHAR_DOT,n5=n1.CHAR_LEFT_PARENTHESES,n7=n1.CHAR_RIGHT_PARENTHESES,n9=n1.CHAR_LEFT_CURLY_BRACE,oe=n1.CHAR_RIGHT_CURLY_BRACE,ot=n1.CHAR_LEFT_SQUARE_BRACKET,or=n1.CHAR_RIGHT_SQUARE_BRACKET,on=n1.CHAR_DOUBLE_QUOTE,oo=n1.CHAR_SINGLE_QUOTE,os=n1.CHAR_NO_BREAK_SPACE,oa=n1.CHAR_ZERO_WIDTH_NOBREAK_SPACE;n0=(e,t={})=>{let r;if("string"!=typeof e)throw TypeError("Expected a string");let n=t||{},o="number"==typeof n.maxLength?Math.min(n2,n.maxLength):n2;if(e.length>o)throw SyntaxError(`Input length (${e.length}), exceeds max characters (${o})`);let s={type:"root",input:e,nodes:[]},a=[s],i=s,u=s,l=0,c=e.length,f=0,p=0,d=()=>e[f++],y=e=>{if("text"===e.type&&"dot"===u.type&&(u.type="text"),u&&"text"===u.type&&"text"===e.type){u.value+=e.value;return}return i.nodes.push(e),e.parent=i,e.prev=u,u=e,e};for(y({type:"bos"});f<c;)/**
     * Invalid chars
     */if(i=a[a.length-1],(r=d())!==oa&&r!==os){/**
     * Escaped chars
     */if(r===n8){y({type:"text",value:(t.keepEscaping?r:"")+d()});continue}/**
     * Right square bracket (literal): ']'
     */if(r===or){y({type:"text",value:"\\"+r});continue}/**
     * Left square bracket: '['
     */if(r===ot){let e;for(l++;f<c&&(e=d());){if(r+=e,e===ot){l++;continue}if(e===n8){r+=d();continue}if(e===or&&0==--l)break}y({type:"text",value:r});continue}/**
     * Parentheses
     */if(r===n5){i=y({type:"paren",nodes:[]}),a.push(i),y({type:"text",value:r});continue}if(r===n7){if("paren"!==i.type){y({type:"text",value:r});continue}i=a.pop(),y({type:"text",value:r}),i=a[a.length-1];continue}/**
     * Quotes: '|"|`
     */if(r===on||r===oo||r===n4){let e,n=r;for(!0!==t.keepQuotes&&(r="");f<c&&(e=d());){if(e===n8){r+=e+d();continue}if(e===n){!0===t.keepQuotes&&(r+=e);break}r+=e}y({type:"text",value:r});continue}/**
     * Left curly brace: '{'
     */if(r===n9){p++,i=y({type:"brace",open:!0,close:!1,dollar:u.value&&"$"===u.value.slice(-1)||!0===i.dollar,depth:p,commas:0,ranges:0,nodes:[]}),a.push(i),y({type:"open",value:r});continue}/**
     * Right curly brace: '}'
     */if(r===oe){if("brace"!==i.type){y({type:"text",value:r});continue}(i=a.pop()).close=!0,y({type:"close",value:r}),p--,i=a[a.length-1];continue}/**
     * Comma: ','
     */if(r===n3&&p>0){if(i.ranges>0){i.ranges=0;let e=i.nodes.shift();i.nodes=[e,{type:"text",value:nC(i)}]}y({type:"comma",value:r}),i.commas++;continue}/**
     * Dot: '.'
     */if(r===n6&&p>0&&0===i.commas){let e=i.nodes;if(0===p||0===e.length){y({type:"text",value:r});continue}if("dot"===u.type){if(i.range=[],u.value+=r,u.type="range",3!==i.nodes.length&&5!==i.nodes.length){i.invalid=!0,i.ranges=0,u.type="text";continue}i.ranges++,i.args=[];continue}if("range"===u.type){e.pop();let t=e[e.length-1];t.value+=u.value+r,u=t,i.ranges--;continue}y({type:"dot",value:r});continue}/**
     * Text
     */y({type:"text",value:r})}// Mark imbalanced braces and brackets as invalid
do if("root"!==(i=a.pop()).type){i.nodes.forEach(e=>{e.nodes||("open"===e.type&&(e.isOpen=!0),"close"===e.type&&(e.isClose=!0),e.nodes||(e.type="text"),e.invalid=!0)});// get the location of the block on parent.nodes (block's siblings)
let e=a[a.length-1],t=e.nodes.indexOf(i);// replace the (invalid) block with it's nodes
e.nodes.splice(t,1,...i.nodes)}while(a.length>0)return y({type:"eos"}),s};/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */const oi=(e,t={})=>{let r=[];if(Array.isArray(e))for(let n of e){let e=oi.create(n,t);Array.isArray(e)?r.push(...e):r.push(e)}else r=[].concat(oi.create(e,t));return t&&!0===t.expand&&!0===t.nodupes&&(r=[...new Set(r)]),r};/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */oi.parse=(e,t={})=>n0(e,t),/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */oi.stringify=(e,t={})=>"string"==typeof e?nC(oi.parse(e,t),t):nC(e,t),/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */oi.compile=(e,t={})=>("string"==typeof e&&(e=oi.parse(e,t)),nA(e,t)),/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */oi.expand=(e,t={})=>{"string"==typeof e&&(e=oi.parse(e,t));let r=nY(e,t);return!0===t.noempty&&(r=r.filter(Boolean)),!0===t.nodupes&&(r=[...new Set(r)]),r},/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */oi.create=(e,t={})=>""===e||e.length<3?[e]:!0!==t.expand?oi.compile(e,t):oi.expand(e,t),/**
 * Expose "braces"
 */nB=oi;var ou={};ou=$("2r2f3");var ol=$("3az9s");const oc=e=>""===e||"./"===e,of=(e,t,r)=>{t=[].concat(t),e=[].concat(e);let n=new Set,o=new Set,s=new Set,a=0,i=e=>{s.add(e.output),r&&r.onResult&&r.onResult(e)};for(let s=0;s<t.length;s++){let u=ou(String(t[s]),{...r,onResult:i},!0),l=u.state.negated||u.state.negatedExtglob;for(let t of(l&&a++,e)){let e=u(t,!0);(l?!e.isMatch:e.isMatch)&&(l?n.add(e.output):(n.delete(e.output),o.add(e.output)))}}let u=(a===t.length?[...s]:[...o]).filter(e=>!n.has(e));if(r&&0===u.length){if(!0===r.failglob)throw Error(`No matches found for "${t.join(", ")}"`);if(!0===r.nonull||!0===r.nullglob)return r.unescape?t.map(e=>e.replace(/\\/g,"")):t}return u};/**
 * Backwards compatibility
 */of.match=of,/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */of.matcher=(e,t)=>ou(e,t),/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */of.isMatch=(e,t,r)=>ou(t,r)(e),/**
 * Backwards compatibility
 */of.any=of.isMatch,/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */of.not=(e,t,r={})=>{t=[].concat(t).map(String);let n=new Set,o=[],s=new Set(of(e,t,{...r,onResult:e=>{r.onResult&&r.onResult(e),o.push(e.output)}}));for(let e of o)s.has(e)||n.add(e);return[...n]},/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */of.contains=(e,t,r)=>{if("string"!=typeof e)throw TypeError(`Expected a string: "${r1.inspect(e)}"`);if(Array.isArray(t))return t.some(t=>of.contains(e,t,r));if("string"==typeof t){if(oc(e)||oc(t))return!1;if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return of.isMatch(e,t,{...r,contains:!0})},/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */of.matchKeys=(e,t,r)=>{if(!ol.isObject(e))throw TypeError("Expected the first argument to be an object");let n=of(Object.keys(e),t,r),o={};for(let t of n)o[t]=e[t];return o},/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */of.some=(e,t,r)=>{let n=[].concat(e);for(let e of[].concat(t)){let t=ou(String(e),r);if(n.some(e=>t(e)))return!0}return!1},/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */of.every=(e,t,r)=>{let n=[].concat(e);for(let e of[].concat(t)){let t=ou(String(e),r);if(!n.every(e=>t(e)))return!1}return!0},/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */of.all=(e,t,r)=>{if("string"!=typeof e)throw TypeError(`Expected a string: "${r1.inspect(e)}"`);return[].concat(t).every(t=>ou(t,r)(e))},/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */of.capture=(e,t,r)=>{let n=ol.isWindows(r),o=ou.makeRe(String(e),{...r,capture:!0}).exec(n?ol.toPosixSlashes(t):t);if(o)return o.slice(1).map(e=>void 0===e?"":e)},/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */of.makeRe=(...e)=>ou.makeRe(...e),/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */of.scan=(...e)=>ou.scan(...e),/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.parse(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */of.parse=(e,t)=>{let r=[];for(let n of[].concat(e||[]))for(let e of nB(String(n),t))r.push(ou.parse(e,t));return r},/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */of.braces=(e,t)=>{if("string"!=typeof e)throw TypeError("Expected a string");return t&&!0===t.nobrace||!/\{.*\}/.test(e)?[e]:nB(e,t)},/**
 * Expand braces
 */of.braceExpand=(e,t)=>{if("string"!=typeof e)throw TypeError("Expected a string");return of.braces(e,{...t,expand:!0})};var op={};op=JSON.parse('[{"name":"nodejs","version":"0.2.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.3.8.0"},{"name":"nodejs","version":"0.3.0","date":"2011-08-26","lts":false,"security":false,"v8":"2.5.1.0"},{"name":"nodejs","version":"0.4.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.2.0"},{"name":"nodejs","version":"0.5.0","date":"2011-08-26","lts":false,"security":false,"v8":"3.1.8.25"},{"name":"nodejs","version":"0.6.0","date":"2011-11-04","lts":false,"security":false,"v8":"3.6.6.6"},{"name":"nodejs","version":"0.7.0","date":"2012-01-17","lts":false,"security":false,"v8":"3.8.6.0"},{"name":"nodejs","version":"0.8.0","date":"2012-06-22","lts":false,"security":false,"v8":"3.11.10.10"},{"name":"nodejs","version":"0.9.0","date":"2012-07-20","lts":false,"security":false,"v8":"3.11.10.15"},{"name":"nodejs","version":"0.10.0","date":"2013-03-11","lts":false,"security":false,"v8":"3.14.5.8"},{"name":"nodejs","version":"0.11.0","date":"2013-03-28","lts":false,"security":false,"v8":"3.17.13.0"},{"name":"nodejs","version":"0.12.0","date":"2015-02-06","lts":false,"security":false,"v8":"3.28.73.0"},{"name":"nodejs","version":"4.0.0","date":"2015-09-08","lts":false,"security":false,"v8":"4.5.103.30"},{"name":"nodejs","version":"4.1.0","date":"2015-09-17","lts":false,"security":false,"v8":"4.5.103.33"},{"name":"nodejs","version":"4.2.0","date":"2015-10-12","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.3.0","date":"2016-02-09","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.4.0","date":"2016-03-08","lts":"Argon","security":false,"v8":"4.5.103.35"},{"name":"nodejs","version":"4.5.0","date":"2016-08-16","lts":"Argon","security":false,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.6.0","date":"2016-09-27","lts":"Argon","security":true,"v8":"4.5.103.37"},{"name":"nodejs","version":"4.7.0","date":"2016-12-06","lts":"Argon","security":false,"v8":"4.5.103.43"},{"name":"nodejs","version":"4.8.0","date":"2017-02-21","lts":"Argon","security":false,"v8":"4.5.103.45"},{"name":"nodejs","version":"4.9.0","date":"2018-03-28","lts":"Argon","security":true,"v8":"4.5.103.53"},{"name":"nodejs","version":"5.0.0","date":"2015-10-29","lts":false,"security":false,"v8":"4.6.85.28"},{"name":"nodejs","version":"5.1.0","date":"2015-11-17","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.2.0","date":"2015-12-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.3.0","date":"2015-12-15","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.4.0","date":"2016-01-06","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.5.0","date":"2016-01-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.6.0","date":"2016-02-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.7.0","date":"2016-02-23","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.8.0","date":"2016-03-09","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.9.0","date":"2016-03-16","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.10.0","date":"2016-04-01","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.11.0","date":"2016-04-21","lts":false,"security":false,"v8":"4.6.85.31"},{"name":"nodejs","version":"5.12.0","date":"2016-06-23","lts":false,"security":false,"v8":"4.6.85.32"},{"name":"nodejs","version":"6.0.0","date":"2016-04-26","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.1.0","date":"2016-05-05","lts":false,"security":false,"v8":"5.0.71.35"},{"name":"nodejs","version":"6.2.0","date":"2016-05-17","lts":false,"security":false,"v8":"5.0.71.47"},{"name":"nodejs","version":"6.3.0","date":"2016-07-06","lts":false,"security":false,"v8":"5.0.71.52"},{"name":"nodejs","version":"6.4.0","date":"2016-08-12","lts":false,"security":false,"v8":"5.0.71.60"},{"name":"nodejs","version":"6.5.0","date":"2016-08-26","lts":false,"security":false,"v8":"5.1.281.81"},{"name":"nodejs","version":"6.6.0","date":"2016-09-14","lts":false,"security":false,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.7.0","date":"2016-09-27","lts":false,"security":true,"v8":"5.1.281.83"},{"name":"nodejs","version":"6.8.0","date":"2016-10-12","lts":false,"security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.9.0","date":"2016-10-18","lts":"Boron","security":false,"v8":"5.1.281.84"},{"name":"nodejs","version":"6.10.0","date":"2017-02-21","lts":"Boron","security":false,"v8":"5.1.281.93"},{"name":"nodejs","version":"6.11.0","date":"2017-06-06","lts":"Boron","security":false,"v8":"5.1.281.102"},{"name":"nodejs","version":"6.12.0","date":"2017-11-06","lts":"Boron","security":false,"v8":"5.1.281.108"},{"name":"nodejs","version":"6.13.0","date":"2018-02-10","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.14.0","date":"2018-03-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.15.0","date":"2018-11-27","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.16.0","date":"2018-12-26","lts":"Boron","security":false,"v8":"5.1.281.111"},{"name":"nodejs","version":"6.17.0","date":"2019-02-28","lts":"Boron","security":true,"v8":"5.1.281.111"},{"name":"nodejs","version":"7.0.0","date":"2016-10-25","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.1.0","date":"2016-11-08","lts":false,"security":false,"v8":"5.4.500.36"},{"name":"nodejs","version":"7.2.0","date":"2016-11-22","lts":false,"security":false,"v8":"5.4.500.43"},{"name":"nodejs","version":"7.3.0","date":"2016-12-20","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.4.0","date":"2017-01-04","lts":false,"security":false,"v8":"5.4.500.45"},{"name":"nodejs","version":"7.5.0","date":"2017-01-31","lts":false,"security":false,"v8":"5.4.500.48"},{"name":"nodejs","version":"7.6.0","date":"2017-02-21","lts":false,"security":false,"v8":"5.5.372.40"},{"name":"nodejs","version":"7.7.0","date":"2017-02-28","lts":false,"security":false,"v8":"5.5.372.41"},{"name":"nodejs","version":"7.8.0","date":"2017-03-29","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.9.0","date":"2017-04-11","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"7.10.0","date":"2017-05-02","lts":false,"security":false,"v8":"5.5.372.43"},{"name":"nodejs","version":"8.0.0","date":"2017-05-30","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.1.0","date":"2017-06-08","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.2.0","date":"2017-07-19","lts":false,"security":false,"v8":"5.8.283.41"},{"name":"nodejs","version":"8.3.0","date":"2017-08-08","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.4.0","date":"2017-08-15","lts":false,"security":false,"v8":"6.0.286.52"},{"name":"nodejs","version":"8.5.0","date":"2017-09-12","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.6.0","date":"2017-09-26","lts":false,"security":false,"v8":"6.0.287.53"},{"name":"nodejs","version":"8.7.0","date":"2017-10-11","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.8.0","date":"2017-10-24","lts":false,"security":false,"v8":"6.1.534.42"},{"name":"nodejs","version":"8.9.0","date":"2017-10-31","lts":"Carbon","security":false,"v8":"6.1.534.46"},{"name":"nodejs","version":"8.10.0","date":"2018-03-06","lts":"Carbon","security":false,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.11.0","date":"2018-03-28","lts":"Carbon","security":true,"v8":"6.2.414.50"},{"name":"nodejs","version":"8.12.0","date":"2018-09-10","lts":"Carbon","security":false,"v8":"6.2.414.66"},{"name":"nodejs","version":"8.13.0","date":"2018-11-20","lts":"Carbon","security":false,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.14.0","date":"2018-11-27","lts":"Carbon","security":true,"v8":"6.2.414.72"},{"name":"nodejs","version":"8.15.0","date":"2018-12-26","lts":"Carbon","security":false,"v8":"6.2.414.75"},{"name":"nodejs","version":"8.16.0","date":"2019-04-16","lts":"Carbon","security":false,"v8":"6.2.414.77"},{"name":"nodejs","version":"8.17.0","date":"2019-12-17","lts":"Carbon","security":true,"v8":"6.2.414.78"},{"name":"nodejs","version":"9.0.0","date":"2017-10-31","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.1.0","date":"2017-11-07","lts":false,"security":false,"v8":"6.2.414.32"},{"name":"nodejs","version":"9.2.0","date":"2017-11-14","lts":false,"security":false,"v8":"6.2.414.44"},{"name":"nodejs","version":"9.3.0","date":"2017-12-12","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.4.0","date":"2018-01-10","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.5.0","date":"2018-01-31","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.6.0","date":"2018-02-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.7.0","date":"2018-03-01","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.8.0","date":"2018-03-07","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.9.0","date":"2018-03-21","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.10.0","date":"2018-03-28","lts":false,"security":true,"v8":"6.2.414.46"},{"name":"nodejs","version":"9.11.0","date":"2018-04-04","lts":false,"security":false,"v8":"6.2.414.46"},{"name":"nodejs","version":"10.0.0","date":"2018-04-24","lts":false,"security":false,"v8":"6.6.346.24"},{"name":"nodejs","version":"10.1.0","date":"2018-05-08","lts":false,"security":false,"v8":"6.6.346.27"},{"name":"nodejs","version":"10.2.0","date":"2018-05-23","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.3.0","date":"2018-05-29","lts":false,"security":false,"v8":"6.6.346.32"},{"name":"nodejs","version":"10.4.0","date":"2018-06-06","lts":false,"security":false,"v8":"6.7.288.43"},{"name":"nodejs","version":"10.5.0","date":"2018-06-20","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.6.0","date":"2018-07-04","lts":false,"security":false,"v8":"6.7.288.46"},{"name":"nodejs","version":"10.7.0","date":"2018-07-18","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.8.0","date":"2018-08-01","lts":false,"security":false,"v8":"6.7.288.49"},{"name":"nodejs","version":"10.9.0","date":"2018-08-15","lts":false,"security":false,"v8":"6.8.275.24"},{"name":"nodejs","version":"10.10.0","date":"2018-09-06","lts":false,"security":false,"v8":"6.8.275.30"},{"name":"nodejs","version":"10.11.0","date":"2018-09-19","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.12.0","date":"2018-10-10","lts":false,"security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.13.0","date":"2018-10-30","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.14.0","date":"2018-11-27","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.15.0","date":"2018-12-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.16.0","date":"2019-05-28","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.17.0","date":"2019-10-22","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.18.0","date":"2019-12-17","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.19.0","date":"2020-02-05","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.20.0","date":"2020-03-26","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.21.0","date":"2020-06-02","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.22.0","date":"2020-07-21","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.23.0","date":"2020-10-27","lts":"Dubnium","security":false,"v8":"6.8.275.32"},{"name":"nodejs","version":"10.24.0","date":"2021-02-23","lts":"Dubnium","security":true,"v8":"6.8.275.32"},{"name":"nodejs","version":"11.0.0","date":"2018-10-23","lts":false,"security":false,"v8":"7.0.276.28"},{"name":"nodejs","version":"11.1.0","date":"2018-10-30","lts":false,"security":false,"v8":"7.0.276.32"},{"name":"nodejs","version":"11.2.0","date":"2018-11-15","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.3.0","date":"2018-11-27","lts":false,"security":true,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.4.0","date":"2018-12-07","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.5.0","date":"2018-12-18","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.6.0","date":"2018-12-26","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.7.0","date":"2019-01-17","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.8.0","date":"2019-01-24","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.9.0","date":"2019-01-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.10.0","date":"2019-02-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.11.0","date":"2019-03-05","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.12.0","date":"2019-03-14","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.13.0","date":"2019-03-28","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.14.0","date":"2019-04-10","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"11.15.0","date":"2019-04-30","lts":false,"security":false,"v8":"7.0.276.38"},{"name":"nodejs","version":"12.0.0","date":"2019-04-23","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.1.0","date":"2019-04-29","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.2.0","date":"2019-05-07","lts":false,"security":false,"v8":"7.4.288.21"},{"name":"nodejs","version":"12.3.0","date":"2019-05-21","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.4.0","date":"2019-06-04","lts":false,"security":false,"v8":"7.4.288.27"},{"name":"nodejs","version":"12.5.0","date":"2019-06-26","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.6.0","date":"2019-07-03","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.7.0","date":"2019-07-23","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.8.0","date":"2019-08-06","lts":false,"security":false,"v8":"7.5.288.22"},{"name":"nodejs","version":"12.9.0","date":"2019-08-20","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.10.0","date":"2019-09-04","lts":false,"security":false,"v8":"7.6.303.29"},{"name":"nodejs","version":"12.11.0","date":"2019-09-25","lts":false,"security":false,"v8":"7.7.299.11"},{"name":"nodejs","version":"12.12.0","date":"2019-10-11","lts":false,"security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.13.0","date":"2019-10-21","lts":"Erbium","security":false,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.14.0","date":"2019-12-17","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.15.0","date":"2020-02-05","lts":"Erbium","security":true,"v8":"7.7.299.13"},{"name":"nodejs","version":"12.16.0","date":"2020-02-11","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.17.0","date":"2020-05-26","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.18.0","date":"2020-06-02","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.19.0","date":"2020-10-06","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.20.0","date":"2020-11-24","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.21.0","date":"2021-02-23","lts":"Erbium","security":true,"v8":"7.8.279.23"},{"name":"nodejs","version":"12.22.0","date":"2021-03-30","lts":"Erbium","security":false,"v8":"7.8.279.23"},{"name":"nodejs","version":"13.0.0","date":"2019-10-22","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.1.0","date":"2019-11-05","lts":false,"security":false,"v8":"7.8.279.17"},{"name":"nodejs","version":"13.2.0","date":"2019-11-21","lts":false,"security":false,"v8":"7.9.317.23"},{"name":"nodejs","version":"13.3.0","date":"2019-12-03","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.4.0","date":"2019-12-17","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.5.0","date":"2019-12-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.6.0","date":"2020-01-07","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.7.0","date":"2020-01-21","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.8.0","date":"2020-02-05","lts":false,"security":true,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.9.0","date":"2020-02-18","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.10.0","date":"2020-03-04","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.11.0","date":"2020-03-12","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.12.0","date":"2020-03-26","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.13.0","date":"2020-04-14","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"13.14.0","date":"2020-04-29","lts":false,"security":false,"v8":"7.9.317.25"},{"name":"nodejs","version":"14.0.0","date":"2020-04-21","lts":false,"security":false,"v8":"8.1.307.30"},{"name":"nodejs","version":"14.1.0","date":"2020-04-29","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.2.0","date":"2020-05-05","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.3.0","date":"2020-05-19","lts":false,"security":false,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.4.0","date":"2020-06-02","lts":false,"security":true,"v8":"8.1.307.31"},{"name":"nodejs","version":"14.5.0","date":"2020-06-30","lts":false,"security":false,"v8":"8.3.110.9"},{"name":"nodejs","version":"14.6.0","date":"2020-07-20","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.7.0","date":"2020-07-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.8.0","date":"2020-08-11","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.9.0","date":"2020-08-27","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.10.0","date":"2020-09-08","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.11.0","date":"2020-09-15","lts":false,"security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.12.0","date":"2020-09-22","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.13.0","date":"2020-09-29","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.14.0","date":"2020-10-15","lts":false,"security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.15.0","date":"2020-10-27","lts":"Fermium","security":false,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.16.0","date":"2021-02-23","lts":"Fermium","security":true,"v8":"8.4.371.19"},{"name":"nodejs","version":"14.17.0","date":"2021-05-11","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.18.0","date":"2021-09-28","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.19.0","date":"2022-02-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.20.0","date":"2022-07-07","lts":"Fermium","security":true,"v8":"8.4.371.23"},{"name":"nodejs","version":"14.21.0","date":"2022-11-01","lts":"Fermium","security":false,"v8":"8.4.371.23"},{"name":"nodejs","version":"15.0.0","date":"2020-10-20","lts":false,"security":false,"v8":"8.6.395.16"},{"name":"nodejs","version":"15.1.0","date":"2020-11-04","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.2.0","date":"2020-11-10","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.3.0","date":"2020-11-24","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.4.0","date":"2020-12-09","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.5.0","date":"2020-12-22","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.6.0","date":"2021-01-14","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.7.0","date":"2021-01-25","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.8.0","date":"2021-02-02","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.9.0","date":"2021-02-18","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.10.0","date":"2021-02-23","lts":false,"security":true,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.11.0","date":"2021-03-03","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.12.0","date":"2021-03-17","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.13.0","date":"2021-03-31","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"15.14.0","date":"2021-04-06","lts":false,"security":false,"v8":"8.6.395.17"},{"name":"nodejs","version":"16.0.0","date":"2021-04-20","lts":false,"security":false,"v8":"9.0.257.17"},{"name":"nodejs","version":"16.1.0","date":"2021-05-04","lts":false,"security":false,"v8":"9.0.257.24"},{"name":"nodejs","version":"16.2.0","date":"2021-05-19","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.3.0","date":"2021-06-03","lts":false,"security":false,"v8":"9.0.257.25"},{"name":"nodejs","version":"16.4.0","date":"2021-06-23","lts":false,"security":false,"v8":"9.1.269.36"},{"name":"nodejs","version":"16.5.0","date":"2021-07-14","lts":false,"security":false,"v8":"9.1.269.38"},{"name":"nodejs","version":"16.6.0","date":"2021-07-29","lts":false,"security":true,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.7.0","date":"2021-08-18","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.8.0","date":"2021-08-25","lts":false,"security":false,"v8":"9.2.230.21"},{"name":"nodejs","version":"16.9.0","date":"2021-09-07","lts":false,"security":false,"v8":"9.3.345.16"},{"name":"nodejs","version":"16.10.0","date":"2021-09-22","lts":false,"security":false,"v8":"9.3.345.19"},{"name":"nodejs","version":"16.11.0","date":"2021-10-08","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.12.0","date":"2021-10-20","lts":false,"security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.13.0","date":"2021-10-26","lts":"Gallium","security":false,"v8":"9.4.146.19"},{"name":"nodejs","version":"16.14.0","date":"2022-02-08","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.15.0","date":"2022-04-26","lts":"Gallium","security":false,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.16.0","date":"2022-07-07","lts":"Gallium","security":true,"v8":"9.4.146.24"},{"name":"nodejs","version":"16.17.0","date":"2022-08-16","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.18.0","date":"2022-10-12","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.19.0","date":"2022-12-13","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"16.20.0","date":"2023-03-28","lts":"Gallium","security":false,"v8":"9.4.146.26"},{"name":"nodejs","version":"17.0.0","date":"2021-10-19","lts":false,"security":false,"v8":"9.5.172.21"},{"name":"nodejs","version":"17.1.0","date":"2021-11-09","lts":false,"security":false,"v8":"9.5.172.25"},{"name":"nodejs","version":"17.2.0","date":"2021-11-30","lts":false,"security":false,"v8":"9.6.180.14"},{"name":"nodejs","version":"17.3.0","date":"2021-12-17","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.4.0","date":"2022-01-18","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.5.0","date":"2022-02-10","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.6.0","date":"2022-02-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.7.0","date":"2022-03-09","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.8.0","date":"2022-03-22","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"17.9.0","date":"2022-04-07","lts":false,"security":false,"v8":"9.6.180.15"},{"name":"nodejs","version":"18.0.0","date":"2022-04-18","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.1.0","date":"2022-05-03","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.2.0","date":"2022-05-17","lts":false,"security":false,"v8":"10.1.124.8"},{"name":"nodejs","version":"18.3.0","date":"2022-06-02","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.4.0","date":"2022-06-16","lts":false,"security":false,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.5.0","date":"2022-07-06","lts":false,"security":true,"v8":"10.2.154.4"},{"name":"nodejs","version":"18.6.0","date":"2022-07-13","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.7.0","date":"2022-07-26","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.8.0","date":"2022-08-24","lts":false,"security":false,"v8":"10.2.154.13"},{"name":"nodejs","version":"18.9.0","date":"2022-09-07","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.10.0","date":"2022-09-28","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.11.0","date":"2022-10-13","lts":false,"security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.12.0","date":"2022-10-25","lts":"Hydrogen","security":false,"v8":"10.2.154.15"},{"name":"nodejs","version":"18.13.0","date":"2023-01-05","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.14.0","date":"2023-02-01","lts":"Hydrogen","security":false,"v8":"10.2.154.23"},{"name":"nodejs","version":"18.15.0","date":"2023-03-05","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"18.16.0","date":"2023-04-12","lts":"Hydrogen","security":false,"v8":"10.2.154.26"},{"name":"nodejs","version":"19.0.0","date":"2022-10-17","lts":false,"security":false,"v8":"10.7.193.13"},{"name":"nodejs","version":"19.1.0","date":"2022-11-14","lts":false,"security":false,"v8":"10.7.193.20"},{"name":"nodejs","version":"19.2.0","date":"2022-11-29","lts":false,"security":false,"v8":"10.8.168.20"},{"name":"nodejs","version":"19.3.0","date":"2022-12-14","lts":false,"security":false,"v8":"10.8.168.21"},{"name":"nodejs","version":"19.4.0","date":"2023-01-05","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.5.0","date":"2023-01-24","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.6.0","date":"2023-02-01","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.7.0","date":"2023-02-21","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.8.0","date":"2023-03-14","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"19.9.0","date":"2023-04-10","lts":false,"security":false,"v8":"10.8.168.25"},{"name":"nodejs","version":"20.0.0","date":"2023-04-17","lts":false,"security":false,"v8":"11.3.244.4"},{"name":"nodejs","version":"20.1.0","date":"2023-05-03","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.2.0","date":"2023-05-16","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.3.0","date":"2023-06-08","lts":false,"security":false,"v8":"11.3.244.8"},{"name":"nodejs","version":"20.4.0","date":"2023-07-04","lts":false,"security":false,"v8":"11.3.244.8"}]'),x=$("7VP0u"),S=$("7KwPM");var od={};function oy(e){return Object.keys(e).reduce((t,r)=>(t[S[r]]=e[r],t),{})}w=Object.keys(od={A:{A:{J:0,E:0,F:.0259843,G:.0649608,A:0,B:.389765,NC:0},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","NC","J","E","F","G","A","B","","",""],E:"IE",F:{NC:962323200,J:998870400,E:1161129600,F:1237420800,G:1300060800,A:1346716800,B:1381968e3}},B:{A:{0:.02721,1:.176865,2:.14512,3:2.54867,C:.004535,K:.004535,L:.004535,H:.004535,M:0,N:.004535,O:.013605,P:0,Q:.00907,R:.00907,S:.00907,T:.00907,U:.004535,V:.00907,W:.004535,X:.004535,Y:.004535,Z:.00907,a:0,b:.013605,c:0,d:0,e:0,f:0,g:0,h:0,i:.013605,j:0,k:0,l:0,q:0,r:0,s:0,t:0,u:.00907,v:.00907,w:.07256,x:.013605,y:.12698,z:.12698,D:1.76865},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","C","K","L","H","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","q","r","s","t","u","v","w","x","y","z","0","1","2","3","D","","",""],E:"Edge",F:{0:1683158400,1:1685664e3,2:1689897600,3:1692576e3,C:1438128e3,K:1447286400,L:1470096e3,H:1491868800,M:1508198400,N:1525046400,O:1542067200,P:1579046400,Q:1581033600,R:1586736e3,S:1590019200,T:1594857600,U:1598486400,V:1602201600,W:1605830400,X:161136e4,Y:1614816e3,Z:1618358400,a:1622073600,b:1626912e3,c:1630627200,d:1632441600,e:1634774400,f:1637539200,g:1641427200,h:1643932800,i:1646265600,j:1649635200,k:1651190400,l:1653955200,q:1655942400,r:1659657600,s:1661990400,t:1664755200,u:1666915200,v:1670198400,w:1673481600,x:1675900800,y:1678665600,z:1680825600,D:1694649600},D:{C:"ms",K:"ms",L:"ms",H:"ms",M:"ms",N:"ms",O:"ms"}},C:{A:{0:.01814,1:.01814,2:.31745,3:.113375,4:0,5:0,6:0,7:0,8:0,9:0,OC:0,"2B":0,I:0,J:0,E:0,F:0,G:0,A:0,B:.00907,C:0,K:0,L:0,H:0,M:0,N:0,O:0,m:0,n:0,o:0,AB:0,BB:0,CB:0,DB:0,EB:0,FB:0,GB:0,HB:0,IB:0,JB:0,KB:0,LB:0,MB:0,NB:0,OB:0,PB:0,QB:.004535,RB:.004535,SB:.004535,TB:0,UB:0,VB:.01814,WB:0,XB:.00907,YB:0,ZB:.05442,aB:.00907,bB:.00907,cB:0,dB:.013605,eB:0,fB:0,"3B":.004535,gB:0,"4B":0,hB:0,iB:0,jB:0,kB:0,lB:0,mB:0,nB:0,oB:0,pB:0,qB:0,rB:.013605,p:0,sB:0,tB:0,uB:0,vB:0,wB:.03628,P:0,Q:0,R:0,"5B":0,S:.004535,T:0,U:0,V:0,W:0,X:.004535,Y:.004535,Z:0,a:.004535,b:0,c:0,d:.004535,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:.11791,q:.022675,r:0,s:.004535,t:.004535,u:.004535,v:.00907,w:.00907,x:.00907,y:.00907,z:.06349,D:1.56457,"6B":.13605,"7B":0,"8B":0,PC:0,QC:0},B:"moz",C:["OC","2B","PC","QC","I","4","J","E","F","G","A","B","C","K","L","H","M","N","O","5","m","n","o","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","3B","gB","4B","hB","iB","jB","kB","lB","mB","nB","oB","pB","qB","rB","p","sB","tB","uB","vB","wB","P","Q","R","5B","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","q","r","s","t","u","v","w","x","y","z","0","1","2","3","D","6B","7B","8B"],E:"Firefox",F:{0:1683590400,1:1686009600,2:1688428800,3:1690848e3,4:1308614400,5:1357603200,6:1372118400,7:1375747200,8:1379376e3,9:1386633600,OC:1161648e3,"2B":1213660800,PC:124632e4,QC:1264032e3,I:1300752e3,J:1313452800,E:1317081600,F:1317081600,G:1320710400,A:1324339200,B:1327968e3,C:1331596800,K:1335225600,L:1338854400,H:1342483200,M:1346112e3,N:1349740800,O:1353628800,m:1361232e3,n:1364860800,o:1368489600,AB:1391472e3,BB:1395100800,CB:1398729600,DB:1402358400,EB:1405987200,FB:1409616e3,GB:1413244800,HB:1417392e3,IB:1421107200,JB:1424736e3,KB:1428278400,LB:1431475200,MB:1435881600,NB:1439251200,OB:144288e4,PB:1446508800,QB:1450137600,RB:1453852800,SB:1457395200,TB:1461628800,UB:1465257600,VB:1470096e3,WB:1474329600,XB:1479168e3,YB:1485216e3,ZB:1488844800,aB:149256e4,bB:1497312e3,cB:1502150400,dB:1506556800,eB:1510617600,fB:1516665600,"3B":1520985600,gB:1525824e3,"4B":1529971200,hB:1536105600,iB:1540252800,jB:1544486400,kB:154872e4,lB:1552953600,mB:1558396800,nB:1562630400,oB:1567468800,pB:1571788800,qB:1575331200,rB:1578355200,p:1581379200,sB:1583798400,tB:1586304e3,uB:1588636800,vB:1591056e3,wB:1593475200,P:1595894400,Q:1598313600,R:1600732800,"5B":1603152e3,S:1605571200,T:1607990400,U:1611619200,V:1614038400,W:1616457600,X:1618790400,Y:1622505600,Z:1626134400,a:1628553600,b:1630972800,c:1633392e3,d:1635811200,e:1638835200,f:1641859200,g:1644364800,h:1646697600,i:1649116800,j:1651536e3,k:1653955200,l:1656374400,q:1658793600,r:1661212800,s:1663632e3,t:1666051200,u:1668470400,v:1670889600,w:1673913600,x:1676332800,y:1678752e3,z:1681171200,D:1693267200,"6B":null,"7B":null,"8B":null}},D:{A:{0:.15419,1:.829905,2:1.44213,3:15.3691,4:0,5:0,6:0,7:0,8:0,9:0,I:0,J:0,E:0,F:0,G:0,A:0,B:0,C:0,K:0,L:0,H:0,M:0,N:0,O:0,m:0,n:0,o:0,AB:0,BB:0,CB:0,DB:0,EB:0,FB:0,GB:0,HB:.004535,IB:0,JB:0,KB:0,LB:.013605,MB:0,NB:0,OB:0,PB:0,QB:0,RB:0,SB:0,TB:0,UB:.00907,VB:.01814,WB:.03628,XB:.00907,YB:.004535,ZB:0,aB:.00907,bB:0,cB:.00907,dB:.031745,eB:.00907,fB:.00907,"3B":0,gB:.02721,"4B":.004535,hB:.004535,iB:.004535,jB:0,kB:.013605,lB:.022675,mB:.004535,nB:.031745,oB:.06349,pB:.077095,qB:.022675,rB:.031745,p:.040815,sB:.040815,tB:.040815,uB:.104305,vB:.03628,wB:.04535,P:.204075,Q:.068025,R:.06349,S:.113375,T:.03628,U:.086165,V:.0907,W:.09977,X:.058955,Y:.04535,Z:.068025,a:.07256,b:.02721,c:.131515,d:.02721,e:.013605,f:.022675,g:.02721,h:.068025,i:.04535,j:.031745,k:.03628,l:.040815,q:.21768,r:.04535,s:.049885,t:.05442,u:.17233,v:.213145,w:1.78679,x:.185935,y:.32652,z:.24489,D:3.86382,"6B":.022675,"7B":.013605,"8B":0},B:"webkit",C:["","","","","","I","4","J","E","F","G","A","B","C","K","L","H","M","N","O","5","m","n","o","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","3B","gB","4B","hB","iB","jB","kB","lB","mB","nB","oB","pB","qB","rB","p","sB","tB","uB","vB","wB","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","q","r","s","t","u","v","w","x","y","z","0","1","2","3","D","6B","7B","8B"],E:"Chrome",F:{0:1682985600,1:1685404800,2:1689724800,3:1692057600,4:1274745600,5:1332892800,6:1348531200,7:1352246400,8:1357862400,9:1361404800,I:1264377600,J:1283385600,E:1287619200,F:1291248e3,G:1296777600,A:1299542400,B:1303862400,C:1307404800,K:1312243200,L:1316131200,H:1316131200,M:1319500800,N:1323734400,O:1328659200,m:133704e4,n:1340668800,o:1343692800,AB:1364428800,BB:1369094400,CB:1374105600,DB:1376956800,EB:1384214400,FB:1389657600,GB:1392940800,HB:1397001600,IB:1400544e3,JB:1405468800,KB:1409011200,LB:141264e4,MB:1416268800,NB:1421798400,OB:1425513600,PB:1429401600,QB:143208e4,RB:1437523200,SB:1441152e3,TB:1444780800,UB:1449014400,VB:1453248e3,WB:1456963200,XB:1460592e3,YB:1464134400,ZB:1469059200,aB:1472601600,bB:1476230400,cB:1480550400,dB:1485302400,eB:1489017600,fB:149256e4,"3B":1496707200,gB:1500940800,"4B":1504569600,hB:1508198400,iB:1512518400,jB:1516752e3,kB:1520294400,lB:1523923200,mB:1527552e3,nB:1532390400,oB:1536019200,pB:1539648e3,qB:1543968e3,rB:154872e4,p:1552348800,sB:1555977600,tB:1559606400,uB:1564444800,vB:1568073600,wB:1571702400,P:1575936e3,Q:1580860800,R:1586304e3,S:1589846400,T:1594684800,U:1598313600,V:1601942400,W:1605571200,X:1611014400,Y:1614556800,Z:1618272e3,a:1621987200,b:1626739200,c:1630368e3,d:1632268800,e:1634601600,f:1637020800,g:1641340800,h:1643673600,i:1646092800,j:1648512e3,k:1650931200,l:1653350400,q:1655769600,r:1659398400,s:1661817600,t:1664236800,u:1666656e3,v:166968e4,w:1673308800,x:1675728e3,y:1678147200,z:1680566400,D:1694476800,"6B":null,"7B":null,"8B":null}},E:{A:{4:0,I:0,J:0,E:0,F:0,G:0,A:0,B:0,C:0,K:.01814,L:.0907,H:.01814,RC:0,"9B":0,SC:.00907,TC:0,UC:0,VC:.1814,AC:0,xB:.004535,yB:.02721,BC:.131515,WC:.240355,XC:.040815,CC:.03628,DC:.068025,zB:.10884,YC:.5442,"0B":.068025,EC:.158725,FC:.15419,GC:.3628,HC:.185935,IC:.44443,JC:2.50332,"1B":.09977,KC:0,ZC:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","RC","9B","I","4","SC","J","TC","E","UC","F","G","VC","A","AC","B","xB","C","yB","K","BC","L","WC","H","XC","CC","DC","zB","YC","0B","EC","FC","GC","HC","IC","JC","1B","KC","ZC",""],E:"Safari",F:{4:1275868800,RC:1205798400,"9B":1226534400,I:1244419200,SC:131112e4,J:1343174400,TC:13824e5,E:13824e5,UC:1410998400,F:1413417600,G:1443657600,VC:1458518400,A:1474329600,AC:1490572800,B:1505779200,xB:1522281600,C:1537142400,yB:1553472e3,K:1568851200,BC:1585008e3,L:1600214400,WC:1619395200,H:1632096e3,XC:1635292800,CC:1639353600,DC:1647216e3,zB:1652745600,YC:1658275200,"0B":1662940800,EC:1666569600,FC:1670889600,GC:1674432e3,HC:1679875200,IC:1684368e3,JC:1690156800,"1B":1695686400,KC:null,ZC:null}},F:{A:{5:0,6:0,7:0,8:0,9:0,G:0,B:0,C:0,H:0,M:0,N:0,O:0,m:0,n:0,o:0,AB:0,BB:.004535,CB:0,DB:0,EB:0,FB:0,GB:0,HB:0,IB:0,JB:0,KB:0,LB:0,MB:0,NB:0,OB:0,PB:0,QB:0,RB:0,SB:0,TB:.013605,UB:0,VB:0,WB:0,XB:0,YB:0,ZB:0,aB:0,bB:.004535,cB:.004535,dB:0,eB:0,fB:0,gB:0,hB:0,iB:0,jB:0,kB:0,lB:0,mB:0,nB:0,oB:0,pB:0,qB:0,rB:0,p:0,sB:0,tB:0,uB:0,vB:.004535,wB:0,P:0,Q:0,R:0,"5B":0,S:0,T:0,U:.004535,V:0,W:0,X:0,Y:.004535,Z:0,a:0,b:0,c:0,d:0,e:.05442,f:0,g:.11791,h:0,i:.022675,j:.26303,k:.58048,l:.64397,aC:0,bC:0,cC:0,dC:0,xB:0,LC:0,eC:0,yB:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","G","aC","bC","cC","dC","B","xB","LC","eC","C","yB","H","M","N","O","5","m","n","o","6","7","8","9","AB","BB","CB","DB","EB","FB","GB","HB","IB","JB","KB","LB","MB","NB","OB","PB","QB","RB","SB","TB","UB","VB","WB","XB","YB","ZB","aB","bB","cB","dB","eB","fB","gB","hB","iB","jB","kB","lB","mB","nB","oB","pB","qB","rB","p","sB","tB","uB","vB","wB","P","Q","R","5B","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","","",""],E:"Opera",F:{5:1390867200,6:1405987200,7:1409616e3,8:1413331200,9:1417132800,G:1150761600,aC:1223424e3,bC:1251763200,cC:1267488e3,dC:1277942400,B:1292457600,xB:1302566400,LC:1309219200,eC:1323129600,C:1323129600,yB:1352073600,H:1372723200,M:1377561600,N:1381104e3,O:1386288e3,m:1393891200,n:1399334400,o:1401753600,AB:1422316800,BB:1425945600,CB:1430179200,DB:1433808e3,EB:1438646400,FB:1442448e3,GB:1445904e3,HB:1449100800,IB:1454371200,JB:1457308800,KB:146232e4,LB:1465344e3,MB:1470096e3,NB:1474329600,OB:1477267200,PB:1481587200,QB:1486425600,RB:1490054400,SB:1494374400,TB:1498003200,UB:1502236800,VB:1506470400,WB:1510099200,XB:1515024e3,YB:1517961600,ZB:1521676800,aB:1525910400,bB:1530144e3,cB:1534982400,dB:1537833600,eB:1543363200,fB:1548201600,gB:1554768e3,hB:1561593600,iB:1566259200,jB:1570406400,kB:1573689600,lB:1578441600,mB:1583971200,nB:1587513600,oB:1592956800,pB:1595894400,qB:1600128e3,rB:1603238400,p:161352e4,sB:1612224e3,tB:1616544e3,uB:1619568e3,vB:1623715200,wB:1627948800,P:1631577600,Q:1633392e3,R:1635984e3,"5B":1638403200,S:1642550400,T:1644969600,U:1647993600,V:1650412800,W:1652745600,X:1654646400,Y:1657152e3,Z:1660780800,a:1663113600,b:1668816e3,c:1668643200,d:1671062400,e:1675209600,f:1677024e3,g:1679529600,h:1681948800,i:1684195200,j:1687219200,k:1690329600,l:1692748800},D:{G:"o",B:"o",C:"o",aC:"o",bC:"o",cC:"o",dC:"o",xB:"o",LC:"o",eC:"o",yB:"o"}},G:{A:{F:0,"9B":0,fC:0,MC:.00285607,gC:.00285607,hC:.00285607,iC:.00999624,jC:.00285607,kC:.00999624,lC:.0342728,mC:.00142803,nC:.0514092,oC:.0214205,pC:.0157084,qC:.0142803,rC:.238482,sC:.00714017,tC:.0128523,uC:.155656,vC:.0499812,wC:.135663,xC:.225629,yC:.0899662,CC:.0985344,DC:.112815,zB:.157084,zC:1.03961,"0B":.411274,EC:.761142,FC:.386997,GC:.722585,HC:.164224,IC:.489816,JC:7.98414,"1B":.704021,KC:.00142803},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","9B","fC","MC","gC","hC","iC","F","jC","kC","lC","mC","nC","oC","pC","qC","rC","sC","tC","uC","vC","wC","xC","yC","CC","DC","zB","zC","0B","EC","FC","GC","HC","IC","JC","1B","KC","",""],E:"Safari on iOS",F:{"9B":1270252800,fC:1283904e3,MC:1299628800,gC:1331078400,hC:1359331200,iC:1394409600,F:1410912e3,jC:1413763200,kC:1442361600,lC:1458518400,mC:1473724800,nC:1490572800,oC:1505779200,pC:1522281600,qC:1537142400,rC:1553472e3,sC:1568851200,tC:1572220800,uC:1580169600,vC:1585008e3,wC:1600214400,xC:1619395200,yC:1632096e3,CC:1639353600,DC:1647216e3,zB:1652659200,zC:1658275200,"0B":1662940800,EC:1666569600,FC:1670889600,GC:1674432e3,HC:1679875200,IC:1684368e3,JC:1690156800,"1B":1694995200,KC:null}},H:{A:{"0C":1.02942},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","0C","","",""],E:"Opera Mini",F:{"0C":1426464e3}},I:{A:{"2B":0,I:.0156469,D:0,"1C":0,"2C":.0156469,"3C":0,"4C":.0156469,MC:.0547642,"5C":0,"6C":.242527},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","1C","2C","3C","2B","I","4C","MC","5C","6C","D","","",""],E:"Android Browser",F:{"1C":1256515200,"2C":1274313600,"3C":1291593600,"2B":1298332800,I:1318896e3,"4C":1341792e3,MC:1374624e3,"5C":1386547200,"6C":1401667200,D:1694476800}},J:{A:{E:0,A:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","E","A","","",""],E:"Blackberry Browser",F:{E:1325376e3,A:1359504e3}},K:{A:{A:0,B:0,C:0,p:0,xB:0,LC:0,yB:0},B:"o",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","xB","LC","C","yB","p","","",""],E:"Opera Mobile",F:{A:1287100800,B:1300752e3,xB:1314835200,LC:1318291200,C:1330300800,yB:1349740800,p:1673827200},D:{p:"webkit"}},L:{A:{D:36.3803},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","","",""],E:"Chrome for Android",F:{D:1694476800}},M:{A:{D:.278664},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","D","","",""],E:"Firefox for Android",F:{D:1693267200}},N:{A:{A:0,B:0},B:"ms",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","A","B","","",""],E:"IE Mobile",F:{A:1340150400,B:1353456e3}},O:{A:{zB:.890632},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","zB","","",""],E:"UC Browser for Android",F:{zB:1687132800},D:{zB:"webkit"}},P:{A:{I:.107075,m:.0642449,n:.139197,o:1.87381,"7C":0,"8C":0,"9C":.0321224,AD:0,BD:0,AC:0,CD:.0107075,DD:0,ED:.021415,FD:.0107075,GD:0,"0B":.021415,"1B":.0321224,HD:.021415,ID:.0535374},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","I","7C","8C","9C","AD","BD","AC","CD","DD","ED","FD","GD","0B","1B","HD","ID","m","n","o","","",""],E:"Samsung Internet",F:{I:1461024e3,"7C":1481846400,"8C":1509408e3,"9C":1528329600,AD:1546128e3,BD:1554163200,AC:1567900800,CD:1582588800,DD:1593475200,ED:1605657600,FD:1618531200,GD:1629072e3,"0B":1640736e3,"1B":1651708800,HD:1659657600,ID:1667260800,m:1677369600,n:1684454400,o:1689292800}},Q:{A:{BC:.16392},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","BC","","",""],E:"QQ Browser",F:{BC:1663718400}},R:{A:{JD:0},B:"webkit",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","JD","","",""],E:"Baidu Browser",F:{JD:1663027200}},S:{A:{KD:.05464,LD:0},B:"moz",C:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","KD","LD","","",""],E:"KaiOS Browser",F:{KD:1527811200,LD:1631664e3}}}).reduce((e,t)=>{let r=od[t];return e[x[t]]=Object.keys(r).reduce((e,t)=>("A"===t?e.usage_global=oy(r[t]):"C"===t?e.versions=r[t].reduce((e,t)=>(""===t?e.push(null):e.push(S[t]),e),[]):"D"===t?e.prefix_exceptions=oy(r[t]):"E"===t?e.browser=r[t]:"F"===t?e.release_date=Object.keys(r[t]).reduce((e,n)=>(e[S[n]]=r[t][n],e),{}):e.prefix=r[t],e),{}),e},{});var ov={};ov=JSON.parse('{"v0.8":{"start":"2012-06-25","end":"2014-07-31"},"v0.10":{"start":"2013-03-11","end":"2016-10-31"},"v0.12":{"start":"2015-02-06","end":"2016-12-31"},"v4":{"start":"2015-09-08","lts":"2015-10-12","maintenance":"2017-04-01","end":"2018-04-30","codename":"Argon"},"v5":{"start":"2015-10-29","maintenance":"2016-04-30","end":"2016-06-30"},"v6":{"start":"2016-04-26","lts":"2016-10-18","maintenance":"2018-04-30","end":"2019-04-30","codename":"Boron"},"v7":{"start":"2016-10-25","maintenance":"2017-04-30","end":"2017-06-30"},"v8":{"start":"2017-05-30","lts":"2017-10-31","maintenance":"2019-01-01","end":"2019-12-31","codename":"Carbon"},"v9":{"start":"2017-10-01","maintenance":"2018-04-01","end":"2018-06-30"},"v10":{"start":"2018-04-24","lts":"2018-10-30","maintenance":"2020-05-19","end":"2021-04-30","codename":"Dubnium"},"v11":{"start":"2018-10-23","maintenance":"2019-04-22","end":"2019-06-01"},"v12":{"start":"2019-04-23","lts":"2019-10-21","maintenance":"2020-11-30","end":"2022-04-30","codename":"Erbium"},"v13":{"start":"2019-10-22","maintenance":"2020-04-01","end":"2020-06-01"},"v14":{"start":"2020-04-21","lts":"2020-10-27","maintenance":"2021-10-19","end":"2023-04-30","codename":"Fermium"},"v15":{"start":"2020-10-20","maintenance":"2021-04-01","end":"2021-06-01"},"v16":{"start":"2021-04-20","lts":"2021-10-26","maintenance":"2022-10-18","end":"2023-09-11","codename":"Gallium"},"v17":{"start":"2021-10-19","maintenance":"2022-04-01","end":"2022-06-01"},"v18":{"start":"2022-04-19","lts":"2022-10-25","maintenance":"2023-10-18","end":"2025-04-30","codename":"Hydrogen"},"v19":{"start":"2022-10-18","maintenance":"2023-04-01","end":"2023-06-01"},"v20":{"start":"2023-04-18","lts":"2023-10-24","maintenance":"2024-10-22","end":"2026-04-30","codename":""}}');var om={},oh={};oh={"0.20":"39","0.21":"41","0.22":"41","0.23":"41","0.24":"41","0.25":"42","0.26":"42","0.27":"43","0.28":"43","0.29":"43","0.30":"44","0.31":"45","0.32":"45","0.33":"45","0.34":"45","0.35":"45","0.36":"47","0.37":"49","1.0":"49","1.1":"50","1.2":"51","1.3":"52","1.4":"53","1.5":"54","1.6":"56","1.7":"58","1.8":"59","2.0":"61","2.1":"61","3.0":"66","3.1":"66","4.0":"69","4.1":"69","4.2":"69","5.0":"73","6.0":"76","6.1":"76","7.0":"78","7.1":"78","7.2":"78","7.3":"78","8.0":"80","8.1":"80","8.2":"80","8.3":"80","8.4":"80","8.5":"80","9.0":"83","9.1":"83","9.2":"83","9.3":"83","9.4":"83","10.0":"85","10.1":"85","10.2":"85","10.3":"85","10.4":"85","11.0":"87","11.1":"87","11.2":"87","11.3":"87","11.4":"87","11.5":"87","12.0":"89","12.1":"89","12.2":"89","13.0":"91","13.1":"91","13.2":"91","13.3":"91","13.4":"91","13.5":"91","13.6":"91","14.0":"93","14.1":"93","14.2":"93","15.0":"94","15.1":"94","15.2":"94","15.3":"94","15.4":"94","15.5":"94","16.0":"96","16.1":"96","16.2":"96","17.0":"98","17.1":"98","17.2":"98","17.3":"98","17.4":"98","18.0":"100","18.1":"100","18.2":"100","18.3":"100","19.0":"102","19.1":"102","20.0":"104","20.1":"104","20.2":"104","20.3":"104","21.0":"106","21.1":"106","21.2":"106","21.3":"106","21.4":"106","22.0":"108","22.1":"108","22.2":"108","22.3":"108","23.0":"110","23.1":"110","23.2":"110","23.3":"110","24.0":"112","24.1":"112","24.2":"112","24.3":"112","24.4":"112","24.5":"112","24.6":"112","24.7":"112","24.8":"112","25.0":"114","25.1":"114","25.2":"114","25.3":"114","25.4":"114","25.5":"114","25.6":"114","25.7":"114","25.8":"114","26.0":"116","26.1":"116","26.2":"116","27.0":"118"};var og={};function ob(e){this.name="BrowserslistError",this.message=e,this.browserslist=!0,Error.captureStackTrace&&Error.captureStackTrace(this,ob)}ob.prototype=Error.prototype,og=ob;var oB={},oC=/^\s+and\s+(.*)/i,oA=/^(?:,\s*|\s+or\s+)(.*)/i;function o_(e,t){var r={query:t};for(var n in 0===t.indexOf("not ")&&(r.not=!0,t=t.slice(4)),e){var o=e[n],s=t.match(o.regexp);if(s){r.type=n;for(var a=0;a<o.matches.length;a++)r[o.matches[a]]=s[a+1];return r}}return r.type="unknown",r}oB=function(e,t){return Array.isArray(t)||(t=[t]),function e(t){return Array.isArray(t)?t.reduce(function(t,r){return t.concat(e(r))},[]):[t]}(t.map(function(t){var r=[];do t=function(e,t,r){var n;return function(e,t){for(var r=1,n=e.length;r<=n;r++)if(t(e.substr(-r,r),r,n))return e.slice(0,-r);return""}(t,function(t,o,s){return oC.test(t)?((n=o_(e,t.match(oC)[1])).compose="and",r.unshift(n),!0):oA.test(t)?((n=o_(e,t.match(oA)[1])).compose="or",r.unshift(n),!0):o===s&&((n=o_(e,t.trim())).compose="or",r.unshift(n),!0)})}(e,t,r);while(t)return r}))};var oj={};function oE(){}// Helpers
function ow(e,t){return 0===(e+".").indexOf(t+".")}function ox(e){return e.filter(function(e){return"string"==typeof e})}function oS(e){var t=e;return 3===e.split(".").length&&(t=e.split(".").slice(0,-1).join(".")),t}function oR(e){return function(t){return e+" "+t}}function oO(e){return parseInt(e.split(".")[0])}function ok(e,t){if(0===e.length)return[];var r=oT(e.map(oO)),n=r[r.length-t];if(!n)return e;for(var o=[],s=e.length-1;s>=0&&!(n>oO(e[s]));s--)o.unshift(e[s]);return o}function oT(e){for(var t=[],r=0;r<e.length;r++)-1===t.indexOf(e[r])&&t.push(e[r]);return t}function oH(e,t,r){for(var n in r)e[t+" "+n]=r[n]}function o$(e,t){return(t=parseFloat(t),">"===e)?function(e){return parseFloat(e)>t}:">="===e?function(e){return parseFloat(e)>=t}:"<"===e?function(e){return parseFloat(e)<t}:function(e){return parseFloat(e)<=t}}function oP(e){return parseInt(e)}function oF(e,t){return e<t?-1:e>t?1:0}function oL(e,t){return oF(parseInt(e[0]),parseInt(t[0]))||oF(parseInt(e[1]||"0"),parseInt(t[1]||"0"))||oF(parseInt(e[2]||"0"),parseInt(t[2]||"0"))}// this follows the npm-like semver behavior
function oI(e,t){return(// ignore any patch version because we only return minor versions
// range[2] = 'x'
(void 0===(t=t.split(".").map(oP))[1]&&(t[1]="x"),"<="===e)?function(e){return 0>=oD(e=e.split(".").map(oP),t)}:function(e){return oD(e=e.split(".").map(oP),t)>=0})}// this follows the npm-like semver behavior
function oD(e,t){return e[0]!==t[0]?e[0]<t[0]?-1:1:"x"===t[1]?0:e[1]!==t[1]?e[1]<t[1]?-1:1:0}function oN(e,t){return(-1!==e.versions.indexOf(t)?t:!!oZ.versionAliases[e.name][t]&&oZ.versionAliases[e.name][t])||1===e.versions.length&&e.versions[0]}function oM(e,t){return e/=1e3,Object.keys(w).reduce(function(r,n){var o=oG(n,t);if(!o)return r;var s=Object.keys(o.releaseDate).filter(function(t){var r=o.releaseDate[t];return null!==r&&r>=e});return r.concat(s.map(oR(o.name)))},[])}function oU(e){return{name:e.name,versions:e.versions,released:e.released,releaseDate:e.releaseDate}}function oG(e,t){if(e=e.toLowerCase(),e=oZ.aliases[e]||e,t.mobileToDesktop&&oZ.desktopNames[e]){var r,n=oZ.data[oZ.desktopNames[e]];if("android"===e)return(r=oU(oZ.data[e])).released=oK(r.released,n.released),r.versions=oK(r.versions,n.versions),r.released.forEach(function(e){void 0===r.releaseDate[e]&&(r.releaseDate[e]=n.releaseDate[e])}),r;var o=oU(n);return o.name=e,o}return oZ.data[e]}function oK(e,t){var r=t.indexOf("37");return e.filter(function(e){return/^(?:[2-4]\.|[34]$)/.test(e)}).concat(t.slice(r))}function oW(e,t){var r=oG(e,t);if(!r)throw new og("Unknown browser "+e);return r}// Adjusts last X versions queries for some mobile browsers,
// where caniuse data jumps from a legacy version to the latest
function oq(e,t,r,n){var o=1;switch(t){case"android":if(n.mobileToDesktop)return e;var s=oZ.data.chrome.released;o=s.length-s.indexOf("37");break;case"op_mob":o=oO(oZ.data.op_mob.released.slice(-1)[0])-14+1;break;default:return e}return r<=o?e.slice(-1):e.slice(o-1-r)}function oz(e,t){return"string"==typeof e&&(e.indexOf("y")>=0||t&&e.indexOf("a")>=0)}function oJ(e,t){return oB(o8,e).reduce(function(e,r,n){if(r.not&&0===n)throw new og("Write any browsers query (for instance, `defaults`) before `"+r.query+"`");var o=o8[r.type].select.call(oZ,t,r).map(function(e){var r=e.split(" ");return"0"===r[1]?r[0]+" "+oG(r[0],t).versions[0]:e});if("and"===r.compose)return r.not?e.filter(function(e){return -1===o.indexOf(e)}):e.filter(function(e){return -1!==o.indexOf(e)});if(r.not){var s={};return o.forEach(function(e){s[e]=!0}),e.filter(function(e){return!s[e]})}return e.concat(o)},[])}function oQ(e){return void 0===e&&(e={}),void 0===e.path&&(e.path=om.resolve?om.resolve("."):"."),e}function oV(e,t){return null==e&&(e=oZ.loadConfig(t)||oZ.defaults),e}function oX(e){if(!("string"==typeof e||Array.isArray(e)))throw new og("Browser queries must be an array or string. Got "+typeof e+".")}oj={loadQueries:function(){throw new og("Sharable configs are not supported in client-side build of Browserslist")},getStat:function(e){return e.stats},loadConfig:function(e){if(e.config)throw new og("Browserslist config are not supported in client-side build")},loadCountry:function(){throw new og("Country statistics are not supported in client-side build of Browserslist")},loadFeature:function(){throw new og("Supports queries are not available in client-side build of Browserslist")},currentNode:function(e,t){return e(["maintained node versions"],t)[0]},parseConfig:oE,readConfig:oE,findConfig:oE,clearCaches:oE,oldDataWarning:oE,env:{}};var oY={};function oZ(e,t){oX(e=oV(e,t=oQ(t)));var r={ignoreUnknownVersions:t.ignoreUnknownVersions,dangerousExtend:t.dangerousExtend,mobileToDesktop:t.mobileToDesktop,path:t.path,env:t.env};oj.oldDataWarning(oZ.data);var n=oj.getStat(t,oZ.data);if(n)for(var o in r.customUsage={},n)oH(r.customUsage,o,n[o]);var s=JSON.stringify([e,r]);if(oY[s])return oY[s];var a=oT(oJ(e,r)).sort(function(e,t){if(e=e.split(" "),t=t.split(" "),e[0]!==t[0])return oF(e[0],t[0]);// assumptions on caniuse data
// 1) version ranges never overlaps
// 2) if version is not a range, it never contains `-`
var r=e[1].split("-")[0];return oL(t[1].split("-")[0].split("."),r.split("."))});return oj.env.BROWSERSLIST_DISABLE_CACHE||(oY[s]=a),a}function o0(e,t){var r=oZ.nodeVersions.filter(function(e){return ow(e,t.version)});if(0===r.length){if(e.ignoreUnknownVersions)return[];throw new og("Unknown version "+t.version+" of Node.js")}return["node "+r[r.length-1]]}function o1(e,t){return oM(Date.UTC(parseInt(t.year),parseInt(t.month||"01")-1,parseInt(t.day||"01"),0,0,0),e)}function o2(e,t){var r,n,o=parseFloat(t.coverage),s=oZ.usage.global;if(t.place){if(t.place.match(/^my\s+stats$/i)){if(!e.customUsage)throw new og("Custom usage statistics was not provided");s=e.customUsage}else r=2===t.place.length?t.place.toUpperCase():t.place.toLowerCase(),oj.loadCountry(oZ.usage,r,oZ.data),s=oZ.usage[r]}for(var a=Object.keys(s).sort(function(e,t){return s[t]-s[e]}),i=0,u=[],l=0;l<a.length&&0!==s[n=a[l]]&&(i+=s[n],u.push(n),!(i>=o));l++);return u}oZ.parse=function(e,t){return oX(e=oV(e,t=oQ(t))),oB(o8,e)},// Will be filled by Can I Use data below
oZ.cache={},oZ.data={},oZ.usage={global:{},custom:null},// Default browsers query
oZ.defaults=["> 0.5%","last 2 versions","Firefox ESR","not dead"],// Browser names aliases
oZ.aliases={fx:"firefox",ff:"firefox",ios:"ios_saf",explorer:"ie",blackberry:"bb",explorermobile:"ie_mob",operamini:"op_mini",operamobile:"op_mob",chromeandroid:"and_chr",firefoxandroid:"and_ff",ucandroid:"and_uc",qqandroid:"and_qq"},// Can I Use only provides a few versions for some browsers (e.g. and_chr).
// Fallback to a similar browser for unknown versions
// Note op_mob is not included as its chromium versions are not in sync with Opera desktop
oZ.desktopNames={and_chr:"chrome",and_ff:"firefox",ie_mob:"ie",android:"chrome"// has extra processing logic
},// Aliases to work with joined versions like `ios_saf 7.0-7.1`
oZ.versionAliases={},oZ.clearCaches=oj.clearCaches,oZ.parseConfig=oj.parseConfig,oZ.readConfig=oj.readConfig,oZ.findConfig=oj.findConfig,oZ.loadConfig=oj.loadConfig,oZ.coverage=function(e,t){var r;if(void 0===t)r=oZ.usage.global;else if("my stats"===t){var n={};n.path=om.resolve?om.resolve("."):".";var o=oj.getStat(n);if(!o)throw new og("Custom usage statistics was not provided");for(var s in r={},o)oH(r,s,o[s])}else if("string"==typeof t)t=t.length>2?t.toLowerCase():t.toUpperCase(),oj.loadCountry(oZ.usage,t,oZ.data),r=oZ.usage[t];else for(var a in"dataByBrowser"in t&&(t=t.dataByBrowser),r={},t)for(var i in t[a])r[a+" "+i]=t[a][i];return e.reduce(function(e,t){var n=r[t];return void 0===n&&(n=r[t.replace(/ \S+$/," 0")]),e+(n||0)},0)};var o8={last_major_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+major\s+versions?$/i,select:function(e,t){return Object.keys(w).reduce(function(r,n){var o=oG(n,e);if(!o)return r;var s=ok(o.released,t.versions);return s=oq(s=s.map(oR(o.name)),o.name,t.versions,e),r.concat(s)},[])}},last_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+versions?$/i,select:function(e,t){return Object.keys(w).reduce(function(r,n){var o=oG(n,e);if(!o)return r;var s=o.released.slice(-t.versions);return s=oq(s=s.map(oR(o.name)),o.name,t.versions,e),r.concat(s)},[])}},last_electron_major_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+electron\s+major\s+versions?$/i,select:function(e,t){return ok(Object.keys(oh),t.versions).map(function(e){return"chrome "+oh[e]})}},last_node_major_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+node\s+major\s+versions?$/i,select:function(e,t){return ok(oZ.nodeVersions,t.versions).map(function(e){return"node "+e})}},last_browser_major_versions:{matches:["versions","browser"],regexp:/^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,select:function(e,t){var r=oW(t.browser,e);return oq(ok(r.released,t.versions).map(oR(r.name)),r.name,t.versions,e)}},last_electron_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+electron\s+versions?$/i,select:function(e,t){return Object.keys(oh).slice(-t.versions).map(function(e){return"chrome "+oh[e]})}},last_node_versions:{matches:["versions"],regexp:/^last\s+(\d+)\s+node\s+versions?$/i,select:function(e,t){return oZ.nodeVersions.slice(-t.versions).map(function(e){return"node "+e})}},last_browser_versions:{matches:["versions","browser"],regexp:/^last\s+(\d+)\s+(\w+)\s+versions?$/i,select:function(e,t){var r=oW(t.browser,e);return oq(r.released.slice(-t.versions).map(oR(r.name)),r.name,t.versions,e)}},unreleased_versions:{matches:[],regexp:/^unreleased\s+versions$/i,select:function(e){return Object.keys(w).reduce(function(t,r){var n=oG(r,e);if(!n)return t;var o=n.versions.filter(function(e){return -1===n.released.indexOf(e)});return o=o.map(oR(n.name)),t.concat(o)},[])}},unreleased_electron_versions:{matches:[],regexp:/^unreleased\s+electron\s+versions?$/i,select:function(){return[]}},unreleased_browser_versions:{matches:["browser"],regexp:/^unreleased\s+(\w+)\s+versions?$/i,select:function(e,t){var r=oW(t.browser,e);return r.versions.filter(function(e){return -1===r.released.indexOf(e)}).map(oR(r.name))}},last_years:{matches:["years"],regexp:/^last\s+(\d*.?\d+)\s+years?$/i,select:function(e,t){return oM(Date.now()-31558432982.399998*t.years,e)}},since_y:{matches:["year"],regexp:/^since (\d+)$/i,select:o1},since_y_m:{matches:["year","month"],regexp:/^since (\d+)-(\d+)$/i,select:o1},since_y_m_d:{matches:["year","month","day"],regexp:/^since (\d+)-(\d+)-(\d+)$/i,select:o1},popularity:{matches:["sign","popularity"],regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,select:function(e,t){var r=parseFloat(t.popularity),n=oZ.usage.global;return Object.keys(n).reduce(function(e,o){return">"===t.sign?n[o]>r&&e.push(o):"<"===t.sign?n[o]<r&&e.push(o):"<="===t.sign?n[o]<=r&&e.push(o):n[o]>=r&&e.push(o),e},[])}},popularity_in_my_stats:{matches:["sign","popularity"],regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,select:function(e,t){var r=parseFloat(t.popularity);if(!e.customUsage)throw new og("Custom usage statistics was not provided");var n=e.customUsage;return Object.keys(n).reduce(function(e,o){var s=n[o];return null==s||(">"===t.sign?s>r&&e.push(o):"<"===t.sign?s<r&&e.push(o):"<="===t.sign?s<=r&&e.push(o):s>=r&&e.push(o)),e},[])}},popularity_in_config_stats:{matches:["sign","popularity","config"],regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,select:function(e,t){var r=parseFloat(t.popularity),n=oj.loadStat(e,t.config,oZ.data);if(n)for(var o in e.customUsage={},n)oH(e.customUsage,o,n[o]);if(!e.customUsage)throw new og("Custom usage statistics was not provided");var s=e.customUsage;return Object.keys(s).reduce(function(e,n){var o=s[n];return null==o||(">"===t.sign?o>r&&e.push(n):"<"===t.sign?o<r&&e.push(n):"<="===t.sign?o<=r&&e.push(n):o>=r&&e.push(n)),e},[])}},popularity_in_place:{matches:["sign","popularity","place"],regexp:/^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,select:function(e,t){var r=parseFloat(t.popularity),n=t.place;n=2===n.length?n.toUpperCase():n.toLowerCase(),oj.loadCountry(oZ.usage,n,oZ.data);var o=oZ.usage[n];return Object.keys(o).reduce(function(e,n){var s=o[n];return null==s||(">"===t.sign?s>r&&e.push(n):"<"===t.sign?s<r&&e.push(n):"<="===t.sign?s<=r&&e.push(n):s>=r&&e.push(n)),e},[])}},cover:{matches:["coverage"],regexp:/^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,select:o2},cover_in:{matches:["coverage","place"],regexp:/^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,select:o2},supports:{matches:["supportType","feature"],regexp:/^(?:(fully|partially) )?supports\s+([\w-]+)$/,select:function(e,t){oj.loadFeature(oZ.cache,t.feature);var r="fully"!==t.supportType,n=oZ.cache[t.feature],o=[];for(var s in n){var a=oG(s,e),i=e.mobileToDesktop&&s in oZ.desktopNames&&oz(n[s][a.released.slice(-1)[0]],r);a.versions.forEach(function(e){var t=n[s][e];void 0===t&&i&&(t=n[oZ.desktopNames[s]][e]),oz(t,r)&&o.push(s+" "+e)})}return o}},electron_range:{matches:["from","to"],regexp:/^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,t){var r=oS(t.from),n=oS(t.to),o=parseFloat(t.from),s=parseFloat(t.to);if(!oh[r])throw new og("Unknown version "+o+" of electron");if(!oh[n])throw new og("Unknown version "+s+" of electron");return Object.keys(oh).filter(function(e){var t=parseFloat(e);return t>=o&&t<=s}).map(function(e){return"chrome "+oh[e]})}},node_range:{matches:["from","to"],regexp:/^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,t){return oZ.nodeVersions.filter(oI(">=",t.from)).filter(oI("<=",t.to)).map(function(e){return"node "+e})}},browser_range:{matches:["browser","from","to"],regexp:/^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,select:function(e,t){var r=oW(t.browser,e),n=parseFloat(oN(r,t.from)||t.from),o=parseFloat(oN(r,t.to)||t.to);return r.released.filter(function(e){var t=parseFloat(e);return t>=n&&t<=o}).map(oR(r.name))}},electron_ray:{matches:["sign","version"],regexp:/^electron\s*(>=?|<=?)\s*([\d.]+)$/i,select:function(e,t){var r=oS(t.version);return Object.keys(oh).filter(o$(t.sign,r)).map(function(e){return"chrome "+oh[e]})}},node_ray:{matches:["sign","version"],regexp:/^node\s*(>=?|<=?)\s*([\d.]+)$/i,select:function(e,t){var r,n;return oZ.nodeVersions.filter((r=t.sign,((n=(n=t.version).split(".").map(oP))[1]=n[1]||0,n[2]=n[2]||0,">"===r)?function(e){return oL(e=e.split(".").map(oP),n)>0}:">="===r?function(e){return oL(e=e.split(".").map(oP),n)>=0}:"<"===r?function(e){return e=e.split(".").map(oP),oL(n,e)>0}:function(e){return e=e.split(".").map(oP),oL(n,e)>=0})).map(function(e){return"node "+e})}},browser_ray:{matches:["browser","sign","version"],regexp:/^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,select:function(e,t){var r=t.version,n=oW(t.browser,e),o=oZ.versionAliases[n.name][r];return o&&(r=o),n.released.filter(o$(t.sign,r)).map(function(e){return n.name+" "+e})}},firefox_esr:{matches:[],regexp:/^(firefox|ff|fx)\s+esr$/i,select:function(){return["firefox 115"]}},opera_mini_all:{matches:[],regexp:/(operamini|op_mini)\s+all/i,select:function(){return["op_mini all"]}},electron_version:{matches:["version"],regexp:/^electron\s+([\d.]+)$/i,select:function(e,t){var r=oh[oS(t.version)];if(!r)throw new og("Unknown version "+t.version+" of electron");return["chrome "+r]}},node_major_version:{matches:["version"],regexp:/^node\s+(\d+)$/i,select:o0},node_minor_version:{matches:["version"],regexp:/^node\s+(\d+\.\d+)$/i,select:o0},node_patch_version:{matches:["version"],regexp:/^node\s+(\d+\.\d+\.\d+)$/i,select:o0},current_node:{matches:[],regexp:/^current\s+node$/i,select:function(e){return[oj.currentNode(oJ,e)]}},maintained_node:{matches:[],regexp:/^maintained\s+node\s+versions$/i,select:function(e){var t=Date.now();return oJ(Object.keys(ov).filter(function(e){var r;return t<Date.parse(ov[e].end)&&t>Date.parse(ov[e].start)&&(r=e.slice(1),oZ.nodeVersions.some(function(e){return ow(e,r)}))}).map(function(e){return"node "+e.slice(1)}),e)}},phantomjs_1_9:{matches:[],regexp:/^phantomjs\s+1.9$/i,select:function(){return["safari 5"]}},phantomjs_2_1:{matches:[],regexp:/^phantomjs\s+2.1$/i,select:function(){return["safari 6"]}},browser_version:{matches:["browser","version"],regexp:/^(\w+)\s+(tp|[\d.]+)$/i,select:function(e,t){var r=t.version;/^tp$/i.test(r)&&(r="TP");var n=oW(t.browser,e),o=oN(n,r);if(o)r=o;else if(o=oN(n,o=-1===r.indexOf(".")?r+".0":r.replace(/\.0$/,"")))r=o;else if(e.ignoreUnknownVersions)return[];else throw new og("Unknown version "+r+" of "+t.browser);return[n.name+" "+r]}},browserslist_config:{matches:[],regexp:/^browserslist config$/i,select:function(e){return oZ(void 0,e)}},extends:{matches:["config"],regexp:/^extends (.+)$/i,select:function(e,t){return oJ(oj.loadQueries(e,t.config),e)}},defaults:{matches:[],regexp:/^defaults$/i,select:function(e){return oJ(oZ.defaults,e)}},dead:{matches:[],regexp:/^dead$/i,select:function(e){return oJ(["Baidu >= 0","ie <= 11","ie_mob <= 11","bb <= 10","op_mob <= 12.1","samsung 4"],e)}},unknown:{matches:[],regexp:/^(\w+)$/i,select:function(e,t){var r;if(oG(t.query,e))throw new og("Specify versions in Browserslist query for browser "+t.query);throw r=t.query,new og("Unknown browser query `"+r+"`. Maybe you are using old Browserslist or made typo in query.")}}};!function(){for(var e in w){var t=w[e];oZ.data[e]={name:e,versions:ox(w[e].versions),released:ox(w[e].versions.slice(0,-3)),releaseDate:w[e].release_date},oH(oZ.usage.global,e,t.usage_global),oZ.versionAliases[e]={};for(var r=0;r<t.versions.length;r++){var n=t.versions[r];if(n&&-1!==n.indexOf("-"))for(var o=n.split("-"),s=0;s<o.length;s++)oZ.versionAliases[e][o[s]]=n}}oZ.nodeVersions=op.map(function(e){return e.version})}(),rD.async;const o4=async function(){try{let e=window.location.hash.slice(1);if(!e)return;r$.spinner(),await rQ(e),r$.render(rz.recipe)}catch(e){console.log(e),r$.renderError()}},o3=async function(){try{let e=rF.getQuery();if(!e)return rI.renderError("Use proper keywords to search!");rI.spinner(),await rV(e),rF.clearInput(),rI.render(rY(1)),rU.render(rz.search)}catch(e){r$.renderError()}};r$.renderHandler(o4),r$.renderUpdateServings(function(e){rX(e),r$.render(rz.recipe)}),r$.renderBookmark(function(){rz.recipe.bookmarked?r0(rz.recipe.id):rZ(rz.recipe),r$.render(rz.recipe),rK.render(rz.bookmarks)}),rF.searchHandler(o3),rU.clickHandler(function(e){rI.render(rY(e)),rU.render(rz.search)}),rK.render(rz.bookmarks),AddRecipe.UploadRecipe(uploadRecipe);//# sourceMappingURL=index.8f4a4c51.js.map

//# sourceMappingURL=index.8f4a4c51.js.map
