!function(){var t={135:function(t,e,r){t.exports=r(248)},248:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return q()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function g(){}function v(){}function y(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(O([])));_&&_!==r&&n.call(_,i)&&(b=_);var x=y.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:q}}function q(){return{value:e,done:!0}}return v.prototype=y,u(x,"constructor",y),u(y,"constructor",v),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},989:function(t,e,r){"use strict";t.exports=r.p+"images/background_dark.png"},583:function(t,e,r){"use strict";t.exports=r.p+"images/background_dark.webp"},666:function(t,e,r){"use strict";t.exports=r.p+"images/background_dark2x.png"},621:function(t,e,r){"use strict";t.exports=r.p+"images/background_light.png"},164:function(t,e,r){"use strict";t.exports=r.p+"images/background_light.webp"},545:function(t,e,r){"use strict";t.exports=r.p+"images/background_light2x.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),function(){"use strict";function t(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}var n=r(135),o=r.n(n),i=r(989),a=r(621),c=r(583),u=r(164),s=r(666),l=r(545),f=document.querySelector(".container__demonstration"),h=document.querySelector(".container__picture"),p=document.querySelector(".catalog__lamp-wrapper"),d='\n<source srcset="'.concat(l,' 2x"\nmedia="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)">\n<source srcset="').concat(u,'" type="image/webp">\n<img src="').concat(a,'" class="container__img" alt="background image light">\n'),m='\n<source srcset="'.concat(s,' 2x"\nmedia="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)">\n<source srcset="').concat(c,'" type="image/webp">\n<img src="').concat(i,'" class="container__img" alt="background image dark">\n'),g='\n<div class="preloader lds-dual-ring"></div>\n';function v(t){h.innerHTML=d;for(var e=0;e<t.length;e++)if(0===e){var r='\n            <button class="catalog__choose-lamp" value="'.concat(e,'" autofocus>\n                <img src="').concat(t[e].image,'" alt="').concat(t[e].name,'">\n            </button>\n            ');p.insertAdjacentHTML("beforeend",r)}else{var n='\n            <button class="catalog__choose-lamp" value="'.concat(e,'">\n                <img src="').concat(t[e].image,'" alt="').concat(t[e].name,'">\n            </button>\n            ');p.insertAdjacentHTML("beforeend",n)}}var y="https://private-anon-ba5bcbebfa-lampshop.apiary-mock.com/lamps";function b(){return w.apply(this,arguments)}function w(){return(w=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f.insertAdjacentHTML("afterbegin",g),p.insertAdjacentHTML("afterbegin",g),t.next=5,fetch(y);case 5:return e=t.sent,t.next=8,e.json();case 8:return t.abrupt("return",t.sent);case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0),alert("Something goes wrong.");case 15:return t.prev=15,document.querySelectorAll(".preloader").forEach((function(t){return t.remove()})),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,11,15,18]])})))).apply(this,arguments)}function _(t){document.querySelector(".catalog__lamp-list").addEventListener("click",(function(){var e=document.querySelector(".catalog__lamp-information"),r=document.querySelector(".catalog__lamp"),n=document.querySelector(".container__lamp"),o=document.activeElement.value,i='<img src="'.concat(t[o].image,'" alt="').concat(t[o].name,'">'),a=t[o].material.charAt(0).toUpperCase()+t[o].material.slice(1).toLowerCase(),c='\n        <div class="catalog__text">\n            <b>Material:</b> '.concat(a," <br><br>\n            <b>Dimensions (cm):</b> H ").concat(t[o].height," x W ").concat(t[o].width," x D ").concat(t[o].width," <br><br>\n            <b>Net Weight:</b> ").concat(t[o].weight," kg <br><br>\n            <b>Electrification:</b><br> ").concat(t[o].electrification.split(",").join(" |"),"\n        </div>\n        ");lampButtons.forEach((function(t){return t.classList.remove("active")})),document.activeElement.classList.add("active"),e.innerHTML=c,r.innerHTML=i,n.innerHTML=i}))}function x(t){var e=document.querySelectorAll(".catalog__choose-lamp"),r=document.querySelector(".catalog__choose-mode_light"),n=document.querySelector(".catalog__choose-mode_dark"),o=document.querySelector(".container__lamp");function i(){o.style.display="",h.innerHTML=d,e.forEach((function(t){return t.removeEventListener("click",i)}))}r.addEventListener("click",i),n.addEventListener("click",(function(){var r=document.querySelector(".active");!0===t[r.value].isDarkMode?(o.style.display="none",h.innerHTML=m,e.forEach((function(t){return t.addEventListener("click",i)}))):alert("Sorry, this lamp doesn't have dark mode.")}))}function L(){return(L=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:v(e=t.sent),_(e),x(e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){L.apply(this,arguments)}()}()}();