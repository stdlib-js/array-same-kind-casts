// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var l=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function f(t){return"[object Arguments]"===l(t)}var a=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,g=Object.prototype,b=g.toString,m=g.__defineGetter__,v=g.__defineSetter__,d=g.__lookupGetter__,h=g.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?y:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===b.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===b.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(d.call(t,n)||h.call(t,n)?(r=t.__proto__,t.__proto__=g,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&m&&m.call(t,n,e.get),u&&v&&v.call(t,n,e.set),t};var j=s;function w(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function x(t){return"string"==typeof t}var _=String.prototype.valueOf;var O=r();function S(t){return"object"==typeof t&&(t instanceof String||(O?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function E(t){return x(t)||S(t)}function I(t){return"number"==typeof t}w(E,"isPrimitive",x),w(E,"isObject",S);var P=Number,T=P.prototype.toString;var A=r();function N(t){return"object"==typeof t&&(t instanceof P||(A?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function k(t){return I(t)||N(t)}function B(t){return t!=t}function V(t){return I(t)&&B(t)}function F(t){return N(t)&&B(t.valueOf())}function L(t){return V(t)||F(t)}w(k,"isPrimitive",I),w(k,"isObject",N),w(L,"isPrimitive",V),w(L,"isObject",F);var G=Number.POSITIVE_INFINITY,Y=P.NEGATIVE_INFINITY,C=Math.floor;function M(t){return C(t)===t}function X(t){return t<G&&t>Y&&M(t)}function H(t){return I(t)&&X(t)}function W(t){return N(t)&&X(t.valueOf())}function D(t){return H(t)||W(t)}w(D,"isPrimitive",H),w(D,"isObject",W);var R=Object.prototype.propertyIsEnumerable;var U=!R.call("beep","0");function q(t,n){var e;return null!=t&&(!(e=R.call(t,n))&&U&&E(t)?!V(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var J=a?f:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}w(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!z(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,n,e){var r,o;if(!tt(t)&&!x(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(L(n)){for(;o<r;o++)if(L(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var et=/./;function rt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var it=r();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return rt(t)||ut(t)}function lt(){return new Function("return this;")()}w(ct,"isPrimitive",rt),w(ct,"isObject",ut);var ft="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},st="object"==typeof pt?pt:null;var yt=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(ft)return ft;if(at)return at;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=yt.document&&yt.document.childNodes,bt=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var vt=/^\s*function\s*([^(]*)/i;function dt(t){var n,e,r,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=vt.exec(r.toString()))return n[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}w(mt,"REGEXP",vt);var ht="function"==typeof et||"object"==typeof bt||"function"==typeof gt?function(t){return dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?dt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var _t=function(){var t;if("undefined"===ht(xt))return!1;for(t in xt)try{-1===nt(wt,t)&&u(xt,t)&&null!==xt[t]&&"object"===ht(xt[t])&&jt(xt[t])}catch(t){return!0}return!1}(),Ot="undefined"!=typeof window;var St=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Et,It=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return J(n)?t(K.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,l;if(o=[],J(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!Q(t))return o;e=Z&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if($)for(n=function(t){if(!1===Ot&&!_t)return jt(t);try{return jt(t)}catch(t){return!1}}(t),l=0;l<St.length;l++)c=St[l],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o},Pt={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function Tt(){var t,n,e,r,o,i,u,c,l;for(e={},n=(t=It(Pt)).length,l=0;l<n;l++){for(o=t[l],u=Pt[o],r={},c=0;c<n;c++)r[i=t[c]]=u[i];e[o]=r}return e}function At(){var t,n,e,r,o,i,u,c,l;for(e={},n=(t=It(Pt)).length,l=0;l<n;l++){for(o=t[l],u=Pt[o],r=[],c=0;c<n;c++)1===u[i=t[c]]&&r.push(i);e[o]=r}return e}function Nt(t){return 0===arguments.length?Tt():(void 0===Et&&(Et=At()),u(Et,t)?Et[t].slice():null)}export{Nt as default};
//# sourceMappingURL=mod.js.map