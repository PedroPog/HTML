/*! For license information please see in-page.js.LICENSE.txt */
(()=>{"use strict";var e={"../../node_modules/events/events.js":e=>{var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}_(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&_(e,"error",t,{once:!0})}(e,o)}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var o,i,s,a;if(u(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=d(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,a=c,console&&console.warn&&console.warn(a)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=c.bind(r);return o.listener=n,r.wrapFn=o,o}function f(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):p(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return d(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var d=i[e];if(void 0===d)return!1;if("function"==typeof d)r(d,this,t);else{var a=d.length,c=p(d,a);for(n=0;n<a;++n)r(c[n],this,t)}return!0},i.prototype.addListener=function(e,t){return a(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return a(this,e,t,!0)},i.prototype.once=function(e,t){return u(t),this.on(e,l(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,l(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return f(this,e,!0)},i.prototype.rawListeners=function(e){return f(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},i.prototype.listenerCount=v,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},"./src/ProviderError.ts":function(e,t,n){var r,o,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorType=void 0;var s,u=n("./src/types.ts");!function(e){e.PROVIDER="ProviderError",e.RPC="JsonRpcError"}(s=t.ErrorType||(t.ErrorType={}));var d=((o={})[u.ProviderErrorMessage.USER_REJECTED_REQUEST]=4001,o[u.ProviderErrorMessage.UNAUTHORIZED]=4100,o[u.ProviderErrorMessage.UNSUPPORTED_METHOD]=4200,o[u.ProviderErrorMessage.DISCONNECTED]=4900,o[u.ProviderErrorMessage.CHAIN_DISCONNECTED]=4901,o),a=function(e){function t(t,n){var r=e.call(this,t)||this;return r.name=s.PROVIDER,r.code=d[t],n&&(r.data=n),r}return i(t,e),t}(Error);t.default=a},"./src/RoninProvider.ts":function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=n("./src/types.ts"),d=n("./src/utils.ts"),a=s(n("./src/ProviderError.ts")),c=function(e){function t(t){var n=e.call(this)||this;return n._isConnected=!0,n._isUnlocked=!0,n._roninEvent=t,n.request=n.request.bind(n),n.sendAsync=n.sendAsync.bind(n),n.initInpageEventListener=n.initInpageEventListener.bind(n),n}return o(t,e),t.prototype.parseEventData=function(e){var t=e.data;if(!t)return null;if("string"==typeof t)try{return JSON.parse(t)}catch(e){return null}return t},t.prototype.initInpageEventListener=function(){var e=this;window.addEventListener("message",(function(t){var n=e.parseEventData(t);(0,d.isFromContentScript)(t)&&n.roninEvent===u.RONIN_EVENT.ACCOUNT_CHANGED&&e.handleAccountsChanged(n.detail?[n.detail.account]:[])})),window.addEventListener("message",(function(t){var n=e.parseEventData(t);(0,d.isFromContentScript)(t)&&n.roninEvent===u.RONIN_EVENT.CHAIN_ID_CHANGED&&e.handleChainChanged(n.detail.chainId)})),window.addEventListener("message",(function(t){var n=e.parseEventData(t);if((0,d.isFromContentScript)(t)&&n.roninEvent===u.RONIN_EVENT.UNLOCK_CHANGED){var r=n.detail,o=r.isUnlocked,i=r.selectedAccount;e.handleUnlockChanged(o,i?[i]:[])}}))},t.prototype.enable=function(){var e=new CustomEvent(u.REQUEST_TYPES.RONIN_WALLET_ENABLE_REQUEST);window.dispatchEvent(e)},t.prototype.sendAsync=function(e,t){var n=e.id,r=new CustomEvent(u.REQUEST_TYPES.ASK_PROVIDER_FROM_CONTENT_SCRIPT,{detail:{payload:e}});window.dispatchEvent(r);var o=function(e){(0,d.isFromContentScript)(e)&&e.data.detail.id===n&&(t(e.data.error,e.data.detail),window.removeEventListener("message",o))};window.addEventListener("message",o)},t.prototype.request=function(e){var t=this;return new Promise((function(n,r){var o=e.method;if(o&&o.length&&"string"==typeof o){var s=(0,d.generateRandomId)(),c=new CustomEvent(u.REQUEST_TYPES.ASK_PROVIDER_FROM_CONTENT_SCRIPT,{detail:{payload:i(i({},e),{id:s,jsonrpc:"2.0"})}});window.dispatchEvent(c);var l=function(e){if((0,d.isFromContentScript)(e)&&e.data.detail.id===s){if(e.data.error){var o=t.serializedError(e.data.error);r(o)}window.removeEventListener("message",l),n(e.data.detail.result)}};window.addEventListener("message",l)}else r(new a.default(u.ProviderErrorMessage.UNSUPPORTED_METHOD,e))}))},t.prototype.serializedError=function(e,t){return Object.values(u.ProviderErrorMessage).includes(e.message)?new a.default(e.message,t):e},t.prototype.handleConnect=function(e){this._isConnected||(this._isConnected=!0,this.emit(u.EIP1193Event.CONNECT,{chainId:e}))},t.prototype.handleDisconnect=function(){this._isConnected&&(this._isConnected=!1,this._isUnlocked=!1,this.emit(u.EIP1193Event.DISCONNECT))},t.prototype.handleAccountsChanged=function(e){this.emit(u.EIP1193Event.ACCOUNTS_CHANGED,e),this._roninEvent.dispatchEvent(new Event(u.RONIN_EVENT.ACCOUNT_CHANGED))},t.prototype.handleChainChanged=function(e){this.handleConnect(e),this.emit(u.EIP1193Event.CHAIN_CHANGED,e)},t.prototype.handleUnlockChanged=function(e,t){void 0===t&&(t=[]),e!==this._isUnlocked&&(this._isUnlocked=e,this.handleAccountsChanged(t))},t}(s(n("../../node_modules/events/events.js")).default);t.default=c},"./src/extension.ts":function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{d(r.next(e))}catch(e){i(e)}}function u(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}d((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n("./src/RoninProvider.ts")),u=new EventTarget,d=new s.default(u);d.initInpageEventListener();var a={provider:d,roninEvent:u};window.ronin=a,r(void 0,void 0,void 0,(function(){return o(this,(function(e){return window.postMessage({direction:"check-whitelist",message:document.domain},"*"),window.addEventListener("message",(function(e){e.source===window&&e.data&&e.data.direction})),[2]}))}))},"./src/types.ts":(e,t)=>{var n,r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),t.REQUEST_TYPES=t.ProviderErrorMessage=t.RONIN_EVENT=t.EIP1193Event=void 0,(i=t.EIP1193Event||(t.EIP1193Event={})).CONNECT="connect",i.DISCONNECT="disconnect",i.ACCOUNTS_CHANGED="accountsChanged",i.CHAIN_CHANGED="chainChanged",(o=t.RONIN_EVENT||(t.RONIN_EVENT={})).ACCOUNT_CHANGED="account_changed",o.CHAIN_ID_CHANGED="chain_id_changed",o.UNLOCK_CHANGED="unlock_changed",(r=t.ProviderErrorMessage||(t.ProviderErrorMessage={})).USER_REJECTED_REQUEST="User Rejected Request",r.UNAUTHORIZED="Unauthorized",r.UNSUPPORTED_METHOD="Unsupported Method",r.DISCONNECTED="Disconnected",r.CHAIN_DISCONNECTED="Chain Disconnected",(n=t.REQUEST_TYPES||(t.REQUEST_TYPES={})).ASK_PROVIDER_FROM_CONTENT_SCRIPT="ask_provider_from_content_script",n.RONIN_WALLET_ENABLE_REQUEST="ronin_wallet_enable_request",n.RONIN_APP_FUNCTION="ronin_app_function",n.RONIN_ASYNC_REQUEST="ronin_async_request",n.RONIN_ENABLE_REQUEST="ronin_enable_request",n.METAMASK_REQUEST="metamask_request",n.METAMASK_ASYNC_REQUEST="metamask_async_request"},"./src/utils.ts":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateRandomId=t.isFromContentScript=void 0;var r=n("./node_modules/uuid/dist/commonjs-browser/index.js");t.isFromContentScript=function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){return!1}return e.source===window&&t&&"from-ronin-content-script"===t.direction},t.generateRandomId=function(){return(0,r.v4)()}},"./node_modules/uuid/dist/commonjs-browser/index.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return d.default}});var r=f(n("./node_modules/uuid/dist/commonjs-browser/v1.js")),o=f(n("./node_modules/uuid/dist/commonjs-browser/v3.js")),i=f(n("./node_modules/uuid/dist/commonjs-browser/v4.js")),s=f(n("./node_modules/uuid/dist/commonjs-browser/v5.js")),u=f(n("./node_modules/uuid/dist/commonjs-browser/nil.js")),d=f(n("./node_modules/uuid/dist/commonjs-browser/version.js")),a=f(n("./node_modules/uuid/dist/commonjs-browser/validate.js")),c=f(n("./node_modules/uuid/dist/commonjs-browser/stringify.js")),l=f(n("./node_modules/uuid/dist/commonjs-browser/parse.js"));function f(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/uuid/dist/commonjs-browser/md5.js":(e,t)=>{function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,n,o,i,s){return r((u=r(r(t,e),r(o,s)))<<(d=i)|u>>>32-d,n);var u,d}function i(e,t,n,r,i,s,u){return o(t&n|~t&r,e,t,i,s,u)}function s(e,t,n,r,i,s,u){return o(t&r|n&~r,e,t,i,s,u)}function u(e,t,n,r,i,s,u){return o(t^n^r,e,t,i,s,u)}function d(e,t,n,r,i,s,u){return o(n^(t|~r),e,t,i,s,u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,r="0123456789abcdef";for(let o=0;o<n;o+=8){const n=e[o>>5]>>>o%32&255,i=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let o=1732584193,a=-271733879,c=-1732584194,l=271733878;for(let t=0;t<e.length;t+=16){const n=o,f=a,v=c,p=l;o=i(o,a,c,l,e[t],7,-680876936),l=i(l,o,a,c,e[t+1],12,-389564586),c=i(c,l,o,a,e[t+2],17,606105819),a=i(a,c,l,o,e[t+3],22,-1044525330),o=i(o,a,c,l,e[t+4],7,-176418897),l=i(l,o,a,c,e[t+5],12,1200080426),c=i(c,l,o,a,e[t+6],17,-1473231341),a=i(a,c,l,o,e[t+7],22,-45705983),o=i(o,a,c,l,e[t+8],7,1770035416),l=i(l,o,a,c,e[t+9],12,-1958414417),c=i(c,l,o,a,e[t+10],17,-42063),a=i(a,c,l,o,e[t+11],22,-1990404162),o=i(o,a,c,l,e[t+12],7,1804603682),l=i(l,o,a,c,e[t+13],12,-40341101),c=i(c,l,o,a,e[t+14],17,-1502002290),a=i(a,c,l,o,e[t+15],22,1236535329),o=s(o,a,c,l,e[t+1],5,-165796510),l=s(l,o,a,c,e[t+6],9,-1069501632),c=s(c,l,o,a,e[t+11],14,643717713),a=s(a,c,l,o,e[t],20,-373897302),o=s(o,a,c,l,e[t+5],5,-701558691),l=s(l,o,a,c,e[t+10],9,38016083),c=s(c,l,o,a,e[t+15],14,-660478335),a=s(a,c,l,o,e[t+4],20,-405537848),o=s(o,a,c,l,e[t+9],5,568446438),l=s(l,o,a,c,e[t+14],9,-1019803690),c=s(c,l,o,a,e[t+3],14,-187363961),a=s(a,c,l,o,e[t+8],20,1163531501),o=s(o,a,c,l,e[t+13],5,-1444681467),l=s(l,o,a,c,e[t+2],9,-51403784),c=s(c,l,o,a,e[t+7],14,1735328473),a=s(a,c,l,o,e[t+12],20,-1926607734),o=u(o,a,c,l,e[t+5],4,-378558),l=u(l,o,a,c,e[t+8],11,-2022574463),c=u(c,l,o,a,e[t+11],16,1839030562),a=u(a,c,l,o,e[t+14],23,-35309556),o=u(o,a,c,l,e[t+1],4,-1530992060),l=u(l,o,a,c,e[t+4],11,1272893353),c=u(c,l,o,a,e[t+7],16,-155497632),a=u(a,c,l,o,e[t+10],23,-1094730640),o=u(o,a,c,l,e[t+13],4,681279174),l=u(l,o,a,c,e[t],11,-358537222),c=u(c,l,o,a,e[t+3],16,-722521979),a=u(a,c,l,o,e[t+6],23,76029189),o=u(o,a,c,l,e[t+9],4,-640364487),l=u(l,o,a,c,e[t+12],11,-421815835),c=u(c,l,o,a,e[t+15],16,530742520),a=u(a,c,l,o,e[t+2],23,-995338651),o=d(o,a,c,l,e[t],6,-198630844),l=d(l,o,a,c,e[t+7],10,1126891415),c=d(c,l,o,a,e[t+14],15,-1416354905),a=d(a,c,l,o,e[t+5],21,-57434055),o=d(o,a,c,l,e[t+12],6,1700485571),l=d(l,o,a,c,e[t+3],10,-1894986606),c=d(c,l,o,a,e[t+10],15,-1051523),a=d(a,c,l,o,e[t+1],21,-2054922799),o=d(o,a,c,l,e[t+8],6,1873313359),l=d(l,o,a,c,e[t+15],10,-30611744),c=d(c,l,o,a,e[t+6],15,-1560198380),a=d(a,c,l,o,e[t+13],21,1309151649),o=d(o,a,c,l,e[t+4],6,-145523070),l=d(l,o,a,c,e[t+11],10,-1120210379),c=d(c,l,o,a,e[t+2],15,718787259),a=d(a,c,l,o,e[t+9],21,-343485551),o=r(o,n),a=r(a,f),c=r(c,v),l=r(l,p)}return[o,a,c,l]}(function(e){if(0===e.length)return[];const t=8*e.length,r=new Uint32Array(n(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}},"./node_modules/uuid/dist/commonjs-browser/native.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=n},"./node_modules/uuid/dist/commonjs-browser/nil.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},"./node_modules/uuid/dist/commonjs-browser/parse.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/uuid/dist/commonjs-browser/validate.js"))&&r.__esModule?r:{default:r};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n}},"./node_modules/uuid/dist/commonjs-browser/regex.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},"./node_modules/uuid/dist/commonjs-browser/rng.js":(e,t)=>{let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)};const r=new Uint8Array(16)},"./node_modules/uuid/dist/commonjs-browser/sha1.js":(e,t)=>{function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const i=e.length/4+2,s=Math.ceil(i/16),u=new Array(s);for(let t=0;t<s;++t){const n=new Uint32Array(16);for(let r=0;r<16;++r)n[r]=e[64*t+4*r]<<24|e[64*t+4*r+1]<<16|e[64*t+4*r+2]<<8|e[64*t+4*r+3];u[t]=n}u[s-1][14]=8*(e.length-1)/Math.pow(2,32),u[s-1][14]=Math.floor(u[s-1][14]),u[s-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<s;++e){const i=new Uint32Array(80);for(let t=0;t<16;++t)i[t]=u[e][t];for(let e=16;e<80;++e)i[e]=r(i[e-3]^i[e-8]^i[e-14]^i[e-16],1);let s=o[0],d=o[1],a=o[2],c=o[3],l=o[4];for(let e=0;e<80;++e){const o=Math.floor(e/20),u=r(s,5)+n(o,d,a,c)+l+t[o]+i[e]>>>0;l=c,c=a,a=r(d,30)>>>0,d=s,s=u}o[0]=o[0]+s>>>0,o[1]=o[1]+d>>>0,o[2]=o[2]+a>>>0,o[3]=o[3]+c>>>0,o[4]=o[4]+l>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]}},"./node_modules/uuid/dist/commonjs-browser/stringify.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=s;var r,o=(r=n("./node_modules/uuid/dist/commonjs-browser/validate.js"))&&r.__esModule?r:{default:r};const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function s(e,t=0){return(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const n=s(e,t);if(!(0,o.default)(n))throw TypeError("Stringified UUID is invalid");return n}},"./node_modules/uuid/dist/commonjs-browser/v1.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/uuid/dist/commonjs-browser/rng.js"))&&r.__esModule?r:{default:r},i=n("./node_modules/uuid/dist/commonjs-browser/stringify.js");let s,u,d=0,a=0;t.default=function(e,t,n){let r=t&&n||0;const c=t||new Array(16);let l=(e=e||{}).node||s,f=void 0!==e.clockseq?e.clockseq:u;if(null==l||null==f){const t=e.random||(e.rng||o.default)();null==l&&(l=s=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==f&&(f=u=16383&(t[6]<<8|t[7]))}let v=void 0!==e.msecs?e.msecs:Date.now(),p=void 0!==e.nsecs?e.nsecs:a+1;const _=v-d+(p-a)/1e4;if(_<0&&void 0===e.clockseq&&(f=f+1&16383),(_<0||v>d)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=v,a=p,u=f,v+=122192928e5;const m=(1e4*(268435455&v)+p)%4294967296;c[r++]=m>>>24&255,c[r++]=m>>>16&255,c[r++]=m>>>8&255,c[r++]=255&m;const h=v/4294967296*1e4&268435455;c[r++]=h>>>8&255,c[r++]=255&h,c[r++]=h>>>24&15|16,c[r++]=h>>>16&255,c[r++]=f>>>8|128,c[r++]=255&f;for(let e=0;e<6;++e)c[r+e]=l[e];return t||(0,i.unsafeStringify)(c)}},"./node_modules/uuid/dist/commonjs-browser/v3.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("./node_modules/uuid/dist/commonjs-browser/v35.js")),o=i(n("./node_modules/uuid/dist/commonjs-browser/md5.js"));function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("v3",48,o.default);t.default=s},"./node_modules/uuid/dist/commonjs-browser/v35.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,n){function r(e,r,s,u){var d;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof r&&(r=(0,i.default)(r)),16!==(null===(d=r)||void 0===d?void 0:d.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let a=new Uint8Array(16+e.length);if(a.set(r),a.set(e,r.length),a=n(a),a[6]=15&a[6]|t,a[8]=63&a[8]|128,s){u=u||0;for(let e=0;e<16;++e)s[u+e]=a[e];return s}return(0,o.unsafeStringify)(a)}try{r.name=e}catch(e){}return r.DNS=s,r.URL=u,r};var r,o=n("./node_modules/uuid/dist/commonjs-browser/stringify.js"),i=(r=n("./node_modules/uuid/dist/commonjs-browser/parse.js"))&&r.__esModule?r:{default:r};const s="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=s;const u="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=u},"./node_modules/uuid/dist/commonjs-browser/v4.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("./node_modules/uuid/dist/commonjs-browser/native.js")),o=s(n("./node_modules/uuid/dist/commonjs-browser/rng.js")),i=n("./node_modules/uuid/dist/commonjs-browser/stringify.js");function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){if(r.default.randomUUID&&!t&&!e)return r.default.randomUUID();const s=(e=e||{}).random||(e.rng||o.default)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return(0,i.unsafeStringify)(s)}},"./node_modules/uuid/dist/commonjs-browser/v5.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("./node_modules/uuid/dist/commonjs-browser/v35.js")),o=i(n("./node_modules/uuid/dist/commonjs-browser/sha1.js"));function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("v5",80,o.default);t.default=s},"./node_modules/uuid/dist/commonjs-browser/validate.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/uuid/dist/commonjs-browser/regex.js"))&&r.__esModule?r:{default:r};t.default=function(e){return"string"==typeof e&&o.default.test(e)}},"./node_modules/uuid/dist/commonjs-browser/version.js":(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("./node_modules/uuid/dist/commonjs-browser/validate.js"))&&r.__esModule?r:{default:r};t.default=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}("./src/extension.ts")})();