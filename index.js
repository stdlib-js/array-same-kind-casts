// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).sameKindCasts=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l,f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[c]=e:delete t[c],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function y(t){return"number"==typeof t}function d(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+d(i):d(i)+t,r&&(t="-"+t)),t}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!y(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===v.call(t.specifier)?v.call(e):h.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var x=Math.abs,j=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!y(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":x(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=O.call(e,V,"$1e"),e=O.call(e,P,"e"),e=O.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=O.call(e,S,"e+0$1"),e=O.call(e,E,"e-0$1"),t.alternate&&(e=O.call(e,T,"$1."),e=O.call(e,k,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===_.call(t.specifier)?_.call(e):j.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}var N=String.fromCharCode,C=isNaN,$=Array.isArray;function B(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function L(t){var n,e,r,i,o,u,a,c,l,f,p,s,g;if(!$(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(r=t[c],"string"==typeof r)u+=r;else{if(n=void 0!==r.precision,!(r=B(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,C(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=A(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(f=r.arg,p=r.width,s=r.padRight,g=void 0,(g=p-f.length)<0?f:f=s?f+F(g):F(g)+f)),u+=r.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function W(t){var n,e,r,i;for(e=[],i=0,r=R.exec(t);r;)(n=t.slice(i,R.lastIndex-r[0].length)).length&&e.push(n),e.push(G(r)),i=R.lastIndex,r=R.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function X(t){var n,e;if("string"!=typeof t)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=[W(t)],e=1;e<arguments.length;e++)n.push(arguments[e]);return L.apply(null,n)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,H=M.__defineSetter__,z=M.__lookupGetter__,D=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(z.call(t,n)||D.call(t,n)?(r=t.__proto__,t.__proto__=M,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(t,n,e.get),u&&H&&H.call(t,n,e.set),t};var K=Z;function q(t,n,e){K(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function J(t){return"string"==typeof t}var Q=String.prototype.valueOf;var tt=r();function nt(t){return"object"==typeof t&&(t instanceof String||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function et(t){return J(t)||nt(t)}function rt(t){return"number"==typeof t}q(et,"isPrimitive",J),q(et,"isObject",nt);var it=Number,ot=it.prototype.toString;var ut=r();function at(t){return"object"==typeof t&&(t instanceof it||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function ct(t){return rt(t)||at(t)}function lt(t){return t!=t}function ft(t){return rt(t)&&lt(t)}function pt(t){return at(t)&&lt(t.valueOf())}function st(t){return ft(t)||pt(t)}q(ct,"isPrimitive",rt),q(ct,"isObject",at),q(st,"isPrimitive",ft),q(st,"isObject",pt);var gt=Number.POSITIVE_INFINITY,bt=it.NEGATIVE_INFINITY,yt=Math.floor;function dt(t){return yt(t)===t}function mt(t){return t<gt&&t>bt&&dt(t)}function ht(t){return rt(t)&&mt(t)}function vt(t){return at(t)&&mt(t.valueOf())}function wt(t){return ht(t)||vt(t)}q(wt,"isPrimitive",ht),q(wt,"isObject",vt);var xt=Object.prototype.propertyIsEnumerable;var jt=!xt.call("beep","0");function _t(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&jt&&et(t)?!ft(n=+n)&&ht(n)&&n>=0&&n<t.length:e)}var Ot=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var St=s?p:function(t){return null!==t&&"object"==typeof t&&!Ot(t)&&"number"==typeof t.length&&dt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!_t(t,"callee")},Et=Array.prototype.slice;function Tt(t){return null!==t&&"object"==typeof t}q(Tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Ot(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Tt));var kt=_t((function(){}),"prototype"),It=!_t({toString:null},"toString"),Pt=9007199254740991;function Vt(t,n,e){var r,i,o;if(!(o=t,"object"==typeof o&&null!==o&&"number"==typeof o.length&&dt(o.length)&&o.length>=0&&o.length<=Pt||J(t)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ht(e))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(st(n)){for(;i<r;i++)if(st(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var At=/./;function Ft(t){return"boolean"==typeof t}var Nt=Boolean,Ct=Boolean.prototype.toString;var $t=r();function Bt(t){return"object"==typeof t&&(t instanceof Nt||($t?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Lt(t){return Ft(t)||Bt(t)}q(Lt,"isPrimitive",Ft),q(Lt,"isObject",Bt);var Rt="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Wt="object"==typeof global?global:null,Xt="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Ft(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Xt)return Xt;if(Rt)return Rt;if(Gt)return Gt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")}(),Mt=Zt.document&&Zt.document.childNodes,Yt=Int8Array;function Ut(){return/^\s*function\s*([^(]*)/i}var Ht=/^\s*function\s*([^(]*)/i;function zt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ht.exec(r.toString()))return n[1]}return Tt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}q(Ut,"REGEXP",Ht);var Dt="function"==typeof At||"object"==typeof Yt||"function"==typeof Mt?function(t){return zt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?zt(t).toLowerCase():n};function Kt(t){return t.constructor&&t.constructor.prototype===t}var qt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Jt="undefined"==typeof window?void 0:window;var Qt=function(){var t;if("undefined"===Dt(Jt))return!1;for(t in Jt)try{-1===Vt(qt,t)&&u(Jt,t)&&null!==Jt[t]&&"object"===Dt(Jt[t])&&Kt(Jt[t])}catch(t){return!0}return!1}(),tn="undefined"!=typeof window;var nn,en=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];nn=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return St(n)?t(Et.call(n)):t(n)}:t:function(t){var n,e,r,i,o,a,c;if(i=[],St(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Tt(t))return i;e=kt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(It)for(n=function(t){if(!1===tn&&!Qt)return Kt(t);try{return Kt(t)}catch(t){return!1}}(t),c=0;c<en.length;c++)a=en[c],n&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var rn=nn;function on(t){return"function"===Dt(t)}var un,an=Object,cn=Object.getPrototypeOf;un=on(Object.getPrototypeOf)?cn:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var ln=un;var fn=Object.prototype;function pn(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Ot(t)}(t)&&(n=function(t){return null==t?null:(t=an(t),ln(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&on(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&on(n.isPrototypeOf)&&(n===fn||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var sn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function gn(){return sn.slice()}var bn={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function yn(){var t;return 0===arguments.length?bn.all.slice():(t=bn[arguments[0]])?t.slice():[]}function dn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function mn(t,n,e){K(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}q(yn,"enum",dn),function(t,n){var e,r,i;for(e=rn(n),i=0;i<e.length;i++)mn(t,r=e[i],n[r])}(yn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var hn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function vn(){return{bool:hn.bool,int8:hn.int8,uint8:hn.uint8,uint8c:hn.uint8c,int16:hn.int16,uint16:hn.uint16,int32:hn.int32,uint32:hn.uint32,int64:hn.int64,uint64:hn.uint64,float32:hn.float32,float64:hn.float64,complex64:hn.complex64,complex128:hn.complex128,binary:hn.binary,generic:hn.generic,notype:hn.notype,userdefined_type:hn.userdefined_type}}q(gn,"enum",vn),function(t,n){var e,r,i;for(e=rn(n),i=0;i<e.length;i++)mn(t,r=e[i],n[r])}(gn,vn());var wn=function(t,n){var e,r,i,o,a,c,l,f=!0;if(!Tt(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!pn(n))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",n));if(u(n,"duplicates")&&!Ft(f=n.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(e=rn(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=e[l]])?(c=a[o],Ot(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=e[l]]]=i;return a}(vn(),{duplicates:!1});var xn=vn();function jn(t){var n=typeof t;return"string"===n?function(t){var n=xn[t];return"number"==typeof n?n:null}(t)?t:null:"number"===n?function(t){var n=wn[t];return"string"==typeof n?n:null}(t):null}var _n,On={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,bool:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,bool:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,bool:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,bool:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,bool:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,bool:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,bool:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,bool:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,bool:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,bool:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,bool:0,generic:0},bool:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,bool:1,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,bool:0,generic:1}};return function(t){return 0===arguments.length?function(){var t,n,e,r,i,o,u,a,c;for(e={},n=(t=rn(On)).length,c=0;c<n;c++){for(i=t[c],u=On[i],r={},a=0;a<n;a++)r[o=t[a]]=u[o];e[i]=r}return e}():(void 0===_n&&(_n=function(){var t,n,e,r,i,o,u,a,c;for(e={},n=(t=rn(On)).length,c=0;c<n;c++){for(i=t[c],u=On[i],r=[],a=0;a<n;a++)1===u[o=t[a]]&&r.push(o);e[i]=r}return e}()),t=jn(t),u(_n,t)?_n[t].slice():null)}}));
//# sourceMappingURL=index.js.map
