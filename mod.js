// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(t,e){return null!=t&&o.call(t,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l=n()?function(t){var e,r,n;if(null==t)return i.call(t);r=t[c],e=a(t,c);try{t[c]=void 0}catch(e){return i.call(t)}return n=i.call(t),e?t[c]=r:delete t[c],n}:function(t){return i.call(t)};function f(t){return"[object Arguments]"===l(t)}var s=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function d(t){return"number"==typeof t}function h(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function y(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+h(i):h(i)+t,n&&(t="-"+t)),t}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function m(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!d(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=y(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=y(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===v.call(t.specifier)?v.call(r):b.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function w(t){return"string"==typeof t}var x=Math.abs,j=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,O=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,T=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function P(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!d(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":x(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=E.call(r,V,"$1e"),r=E.call(r,A,"e"),r=E.call(r,T,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=E.call(r,_,"e+0$1"),r=E.call(r,O,"e-0$1"),t.alternate&&(r=E.call(r,k,"$1."),r=E.call(r,I,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===S.call(t.specifier)?S.call(r):j.call(r)}function F(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function N(t,e,r){var n=e-t.length;return n<0?t:t=r?t+F(n):F(n)+t}var $=String.fromCharCode,C=isNaN,B=Array.isArray;function L(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function R(t){var e,r,n,i,o,a,u,c,l;if(!B(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(w(n=t[c]))a+=n;else{if(e=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(i=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(o)?String(n.arg):$(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function X(t){var e,r,n,i;for(r=[],i=0,n=G.exec(t);n;)(e=t.slice(i,G.lastIndex-n[0].length)).length&&r.push(e),r.push(W(n)),i=G.lastIndex,n=G.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function Z(t){return"string"==typeof t}function M(t){var e,r,n;if(!Z(t))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=X(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return R.apply(null,r)}var Y,U=Object.prototype,H=U.toString,z=U.__defineGetter__,D=U.__defineSetter__,q=U.__lookupGetter__,J=U.__lookupSetter__;Y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(q.call(t,e)||J.call(t,e)?(n=t.__proto__,t.__proto__=U,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(t,e,r.get),a&&D&&D.call(t,e,r.set),t};var K=Y;function Q(t,e,r){K(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function tt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=n();function nt(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function it(t){return tt(t)||nt(t)}function ot(t){return"number"==typeof t}Q(it,"isPrimitive",tt),Q(it,"isObject",nt);var at=Number,ut=at.prototype.toString;var ct=n();function lt(t){return"object"==typeof t&&(t instanceof at||(ct?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ft(t){return ot(t)||lt(t)}function st(t){return t!=t}function pt(t){return ot(t)&&st(t)}function gt(t){return lt(t)&&st(t.valueOf())}function dt(t){return pt(t)||gt(t)}Q(ft,"isPrimitive",ot),Q(ft,"isObject",lt),Q(dt,"isPrimitive",pt),Q(dt,"isObject",gt);var ht=Number.POSITIVE_INFINITY,yt=at.NEGATIVE_INFINITY,bt=Math.floor;function vt(t){return bt(t)===t}function mt(t){return t<ht&&t>yt&&vt(t)}function wt(t){return ot(t)&&mt(t)}function xt(t){return lt(t)&&mt(t.valueOf())}function jt(t){return wt(t)||xt(t)}Q(jt,"isPrimitive",wt),Q(jt,"isObject",xt);var St=Object.prototype.propertyIsEnumerable;var Et=!St.call("beep","0");function _t(t,e){var r;return null!=t&&(!(r=St.call(t,e))&&Et&&it(t)?!pt(e=+e)&&wt(e)&&e>=0&&e<t.length:r)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var kt=s?f:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!_t(t,"callee")},It=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}Q(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Ot(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Tt));var At=_t((function(){}),"prototype"),Vt=!_t({toString:null},"toString");function Pt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,e,r){var n,i;if(!Pt(t)&&!tt(t))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!wt(r))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(dt(e)){for(;i<n;i++)if(dt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}var Nt=/./;function $t(t){return"boolean"==typeof t}var Ct=Boolean,Bt=Boolean.prototype.toString;var Lt=n();function Rt(t){return"object"==typeof t&&(t instanceof Ct||(Lt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Gt(t){return $t(t)||Rt(t)}function Wt(){return new Function("return this;")()}Q(Gt,"isPrimitive",$t),Q(Gt,"isObject",Rt);var Xt="object"==typeof self?self:null,Zt="object"==typeof window?window:null,Mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof Mt?Mt:null,Ut="object"==typeof globalThis?globalThis:null;var Ht=function(t){if(arguments.length){if(!$t(t))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ut)return Ut;if(Xt)return Xt;if(Zt)return Zt;if(Yt)return Yt;throw new Error("unexpected error. Unable to resolve global object.")}(),zt=Ht.document&&Ht.document.childNodes,Dt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var e,r,n,i;if(("Object"===(r=l(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Jt.exec(n.toString()))return e[1]}return Tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}Q(qt,"REGEXP",Jt);var Qt="function"==typeof Nt||"object"==typeof Dt||"function"==typeof zt?function(t){return Kt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Kt(t).toLowerCase():e};function te(t){return t.constructor&&t.constructor.prototype===t}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window;var ne=function(){var t;if("undefined"===Qt(re))return!1;for(t in re)try{-1===Ft(ee,t)&&a(re,t)&&null!==re[t]&&"object"===Qt(re[t])&&te(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window;var oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ae,ue=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return kt(e)?t(It.call(e)):t(e)}:t:function(t){var e,r,n,i,o,u,c;if(i=[],kt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Tt(t))return i;r=At&&n}for(o in t)r&&"prototype"===o||!a(t,o)||i.push(String(o));if(Vt)for(e=function(t){if(!1===ie&&!ne)return te(t);try{return te(t)}catch(t){return!1}}(t),c=0;c<oe.length;c++)u=oe[c],e&&"constructor"===u||!a(t,u)||i.push(String(u));return i},ce={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,generic:1}};function le(){var t,e,r,n,i,o,a,u,c;for(r={},e=(t=ue(ce)).length,c=0;c<e;c++){for(i=t[c],a=ce[i],n={},u=0;u<e;u++)n[o=t[u]]=a[o];r[i]=n}return r}function fe(){var t,e,r,n,i,o,a,u,c;for(r={},e=(t=ue(ce)).length,c=0;c<e;c++){for(i=t[c],a=ce[i],n=[],u=0;u<e;u++)1===a[o=t[u]]&&n.push(o);r[i]=n}return r}function se(t){return 0===arguments.length?le():(void 0===ae&&(ae=fe()),a(ae,t)?ae[t].slice():null)}export{se as default};
//# sourceMappingURL=mod.js.map
