// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sameKindCasts=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l,f=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===f(t)}l=function(){return s(arguments)}();var p=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(t){return"number"==typeof t}function y(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function b(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+y(i):y(i)+t,n&&(t="-"+t)),t}var m=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!h(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=b(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=b(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===v.call(t.specifier)?v.call(r):m.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function x(t){return"string"==typeof t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,k=/e-(\d)$/,T=/^(\d+)$/,I=/^(\d+)e/,A=/\.0$/,V=/\.0*e/,P=/(\..*[^0])0*e/;function F(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!h(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":j(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=_.call(r,P,"$1e"),r=_.call(r,V,"e"),r=_.call(r,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=_.call(r,O,"e+0$1"),r=_.call(r,k,"e-0$1"),t.alternate&&(r=_.call(r,T,"$1."),r=_.call(r,I,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===E.call(t.specifier)?E.call(r):S.call(r)}function N(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function C(t,e,r){var n=e-t.length;return n<0?t:t=r?t+N(n):N(n)+t}var $=String.fromCharCode,B=isNaN,L=Array.isArray;function R(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function G(t){var e,r,n,i,o,a,u,c,l;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(x(n=t[c]))a+=n;else{if(e=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=C(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Z(t){var e,r,n,i;for(r=[],i=0,n=W.exec(t);n;)(e=t.slice(i,W.lastIndex-n[0].length)).length&&r.push(e),r.push(X(n)),i=W.lastIndex,n=W.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function M(t){return"string"==typeof t}function Y(t){var e,r,n;if(!M(t))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=Z(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return G.apply(null,r)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,K=H.__defineSetter__,q=H.__lookupGetter__,J=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?d:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(q.call(t,e)||J.call(t,e)?(n=t.__proto__,t.__proto__=H,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(t,e,r.get),a&&K&&K.call(t,e,r.set),t};var Q=U;function tt(t,e,r){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function et(t){return"string"==typeof t}var rt=String.prototype.valueOf;var nt=n();function it(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return et(t)||it(t)}function at(t){return"number"==typeof t}tt(ot,"isPrimitive",et),tt(ot,"isObject",it);var ut=Number,ct=ut.prototype.toString;var lt=n();function ft(t){return"object"==typeof t&&(t instanceof ut||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function st(t){return at(t)||ft(t)}function pt(t){return t!=t}function gt(t){return at(t)&&pt(t)}function dt(t){return ft(t)&&pt(t.valueOf())}function ht(t){return gt(t)||dt(t)}tt(st,"isPrimitive",at),tt(st,"isObject",ft),tt(ht,"isPrimitive",gt),tt(ht,"isObject",dt);var yt=Number.POSITIVE_INFINITY,bt=ut.NEGATIVE_INFINITY,mt=Math.floor;function vt(t){return mt(t)===t}function wt(t){return t<yt&&t>bt&&vt(t)}function xt(t){return at(t)&&wt(t)}function jt(t){return ft(t)&&wt(t.valueOf())}function St(t){return xt(t)||jt(t)}tt(St,"isPrimitive",xt),tt(St,"isObject",jt);var Et=Object.prototype.propertyIsEnumerable;var _t=!Et.call("beep","0");function Ot(t,e){var r;return null!=t&&(!(r=Et.call(t,e))&&_t&&ot(t)?!gt(e=+e)&&xt(e)&&e>=0&&e<t.length:r)}var kt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var Tt=p?s:function(t){return null!==t&&"object"==typeof t&&!kt(t)&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!Ot(t,"callee")},It=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!kt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(At));var Vt=Ot((function(){}),"prototype"),Pt=!Ot({toString:null},"toString");function Ft(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,e,r){var n,i;if(!Ft(t)&&!et(t))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!xt(r))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ht(e)){for(;i<n;i++)if(ht(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var Ct=/./;function $t(t){return"boolean"==typeof t}var Bt=Boolean,Lt=Boolean.prototype.toString;var Rt=n();function Gt(t){return"object"==typeof t&&(t instanceof Bt||(Rt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Wt(t){return $t(t)||Gt(t)}function Xt(){return new Function("return this;")()}tt(Wt,"isPrimitive",$t),tt(Wt,"isObject",Gt);var Zt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Yt="object"==typeof global?global:null,Ut="object"==typeof globalThis?globalThis:null;var Ht=function(t){if(arguments.length){if(!$t(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Xt()}if(Ut)return Ut;if(Zt)return Zt;if(Mt)return Mt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),zt=Ht.document&&Ht.document.childNodes,Dt=Int8Array;function Kt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,r,n,i;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=qt.exec(n.toString()))return e[1]}return At(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}tt(Kt,"REGEXP",qt);var Qt="function"==typeof Ct||"object"==typeof Dt||"function"==typeof zt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Jt(t).toLowerCase():e};function te(t){return t.constructor&&t.constructor.prototype===t}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window;var ne=function(){var t;if("undefined"===Qt(re))return!1;for(t in re)try{-1===Nt(ee,t)&&a(re,t)&&null!==re[t]&&"object"===Qt(re[t])&&te(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var oe,ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];oe=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return Tt(e)?t(It.call(e)):t(e)}:t:function(t){var e,r,n,i,o,u,c;if(i=[],Tt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!At(t))return i;r=Vt&&n}for(o in t)r&&"prototype"===o||!a(t,o)||i.push(String(o));if(Pt)for(e=function(t){if(!1===ie&&!ne)return te(t);try{return te(t)}catch(t){return!1}}(t),c=0;c<ae.length;c++)u=ae[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i};var ue,ce=oe,le={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function fe(){var t,e,r,n,i,o,a,u,c;for(r={},e=(t=ce(le)).length,c=0;c<e;c++){for(i=t[c],a=le[i],n={},u=0;u<e;u++)n[o=t[u]]=a[o];r[i]=n}return r}function se(){var t,e,r,n,i,o,a,u,c;for(r={},e=(t=ce(le)).length,c=0;c<e;c++){for(i=t[c],a=le[i],n=[],u=0;u<e;u++)1===a[o=t[u]]&&n.push(o);r[i]=n}return r}return function(t){return 0===arguments.length?fe():(void 0===ue&&(ue=se()),a(ue,t)?ue[t].slice():null)}}));
//# sourceMappingURL=index.js.map
