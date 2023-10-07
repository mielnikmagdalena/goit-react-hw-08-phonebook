"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[245],{9135:function(t,e,n){n.d(e,{nbd:function(){return s}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function a(t){return t&&t.map((function(t,e){return r.createElement(t.tag,i({key:e},t.attr),a(t.child))}))}function l(t){return function(e){return r.createElement(f,i({attr:i({},t.attr)},e),a(t.child))}}function f(t){var e=function(e){var n,o=t.attr,u=t.size,a=t.title,l=c(t,["attr","size","title"]),f=u||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:n,style:i(i({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),t.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(t){return e(t)})):e(o)}function s(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z"}}]})(t)}},6916:function(t,e,n){n.d(e,{P1:function(){return a}});var r="NOT_FOUND";var o=function(t,e){return t===e};function u(t,e){var n="object"===typeof e?e:{equalityCheck:e},u=n.equalityCheck,i=void 0===u?o:u,c=n.maxSize,a=void 0===c?1:c,l=n.resultEqualityCheck,f=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}}(i),s=1===a?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:r},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(t,e){var n=[];function o(t){var o=n.findIndex((function(n){return e(t,n.key)}));if(o>-1){var u=n[o];return o>0&&(n.splice(o,1),n.unshift(u)),u.value}return r}return{get:o,put:function(e,u){o(e)===r&&(n.unshift({key:e,value:u}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(a,f);function p(){var e=s.get(arguments);if(e===r){if(e=t.apply(null,arguments),l){var n=s.getEntries(),o=n.find((function(t){return l(t.value,e)}));o&&(e=o.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function c(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var u,c=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,s=f.memoizeOptions,p=void 0===s?n:s,v=Array.isArray(p)?p:[p],y=i(r),h=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(v)),d=t((function(){for(var t=[],e=y.length,n=0;n<e;n++)t.push(y[n].apply(null,arguments));return u=h.apply(null,t)}));return Object.assign(d,{resultFunc:l,memoizedResultFunc:h,dependencies:y,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),d};return o}var a=c(u)},5984:function(t,e,n){n.d(e,{x0:function(){return r}});var r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}}}]);
//# sourceMappingURL=245.db2a0c78.chunk.js.map