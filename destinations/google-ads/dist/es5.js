"use strict";var destination=function(){n=function(){e={config:{},init:function(n){var t=n.custom||{},e=window;return!!t.conversionId&&(t.currency=t.currency||"EUR",n.loadScript&&function(n,t){var t=1<arguments.length&&void 0!==t?t:"https://www.googletagmanager.com/gtag/js?id=",e=document.createElement("script");e.src=t+n,document.head.appendChild(e)}(t.conversionId),e.dataLayer=e.dataLayer||[],e.gtag||(e.gtag=function(){e.dataLayer.push(arguments)},e.gtag("js",new Date)),e.gtag("config",t.conversionId),!0)},push:function(n,t){var e,a=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).custom;a&&a.label&&(t=t.custom||{},e={send_to:"".concat(t.conversionId,"/").concat(a.label),currency:t.currency},a.value&&(e.value=n.data[a.value]),t.defaultValue&&!e.value&&(e.value=t.defaultValue),a.id&&(e.transaction_id=n.data[a.id]),window.gtag("event","conversion",e))}}};var e,n,t,a,o,c=function(){return t=n?n(n=0):t};return a=function(n,t){c(),t.exports=e},o||a((o={exports:{}}).exports,o),o.exports}();