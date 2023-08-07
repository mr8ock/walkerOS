"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var destination=function(){function l(e,a,t){var i=2<arguments.length&&void 0!==t?t:0,c={};return Object.entries(e).forEach(function(e){var t,r,n,e=_slicedToArray(e,2),o=e[0],e=e[1],e=("string"==typeof e?t=e:(t=e.key,r=e.default),e=a,n=i,t.split(".").reduce(function(e,t){if("*"==t&&(t=String(n)),e instanceof Object)return e[t]},e)||r);e&&(c[o]=e)}),!!Object.keys(c).length&&c}e=function(){r={type:"google-ga4",config:{custom:{measurementId:""}},init:function(e){var t=window,r=e.custom||{},n={};return!!r.measurementId&&(r.transport_url&&(n.transport_url=r.transport_url),!1===r.pageview&&(n.send_page_view=!1),e.loadScript&&function(e,t){var t=1<arguments.length&&void 0!==t?t:"https://www.googletagmanager.com/gtag/js?id=",r=document.createElement("script");r.src=t+e,document.head.appendChild(r)}(r.measurementId),t.dataLayer=t.dataLayer||[],t.gtag||(t.gtag=function(){t.dataLayer.push(arguments)},t.gtag("js",new Date)),t.gtag("config",r.measurementId,n),!0)},push:function(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=e.custom,o=r.custom||{};if(n&&n.measurementId){for(var a={},e=o.include||n.include||["data"],i=((e=e.includes("all")?["context","data","event","globals","source","user","version"]:e).forEach(function(r){var e=t[r];"event"==r&&(e={id:t.id,timing:t.timing,trigger:t.trigger,entity:t.entity,action:t.action,group:t.group,count:t.count}),Object.entries(e).forEach(function(e){var e=_slicedToArray(e,2),t=e[0],e=e[1];"context"==r&&(e=e[0]),a["".concat(r,"_").concat(t)]=e})}),Object.assign(a,l(_objectSpread(_objectSpread({},n.params),o.params),t)),[]),c=0,u=t.nested.length||1;c<u;c++){var s=l(_objectSpread(_objectSpread({},n.items&&n.items.params),o.items&&o.items.params),t,c);s&&i.push(s)}i.length&&(a.items=i);e=t.event;r.name||!1===n.snakeCase||(e=e.replace(" ","_").toLowerCase()),a.send_to=n.measurementId,n.debug&&(a.debug_mode=!0),window.gtag("event",e,a)}}}};var r,e,t,n,o,a=function(){return t=e?e(e=0):t};return n=function(e,t){a(),t.exports=r},o||n((o={exports:{}}).exports,o),o.exports}();