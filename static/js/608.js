(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[608],{608:(t,e,n)=>{"use strict";n.d(e,{vO:()=>Y});var r=n(466);function i(t,e){return t.map((function(t,n){return t+e[n]}))}function o(t,e){return t.map((function(t,n){return t-e[n]}))}function a(t){return Math.hypot.apply(Math,t)}function s(t,e){void 0===e&&(e=t);var n=a(e),r=0===n?0:1/n,i=e.map((function(t){return r*t}));return{distance:a(t),direction:i}}function u(t,e,n){return 0===e||Math.abs(e)===1/0?function(t,e){return Math.pow(t,5*e)}(t,n):t*e*n/(e+n*t)}function c(t,e,n,r){return void 0===r&&(r=.15),0===r?function(t,e,n){return Math.max(e,Math.min(t,n))}(t,e,n):t<e?-u(e-t,n-e,r)+e:t>n?+u(t-n,n-e,r)+n:t}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function m(){}function g(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?m:1===e.length?e[0]:function(){for(var t,n,r=p(e);!(n=r()).done;){var i=n.value;t=i.apply(this,arguments)||t}return t}}function y(t,e){if(void 0===t){if(void 0===e)throw new Error("Must define fallback value if undefined is expected");t=e}return Array.isArray(t)?t:[t,t]}function b(t){if("function"==typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.apply(void 0,n)}return t}function w(t,e){void 0===t&&(t={});for(var n={},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],a=o[0],s=o[1];switch(typeof s){case"function":n[a]=s.call(n,t[a],a,t);break;case"object":n[a]=w(t[a],s);break;case"boolean":s&&(n[a]=t[a])}}return n}function _(t){return{buttons:"buttons"in t?t.buttons:0,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey}}var S=function(t){return t};function O(t,e){void 0===e&&(e=S);var n=t.currentTarget,r=n.scrollX,i=n.scrollY,o=n.scrollLeft,a=n.scrollTop;return e([r||o||0,i||a||0])}var x=f({},{threshold:function(t){return void 0===t&&(t=0),y(t)},rubberband:function(t){switch(void 0===t&&(t=0),t){case!0:return y(.15);case!1:return y(0);default:return y(t)}},enabled:function(t){return void 0===t&&(t=!0),t},triggerAllEvents:function(t){return void 0===t&&(t=!1),t},initial:function(t){return void 0===t&&(t=0),"function"==typeof t?t:y(t)},transform:!0},{axis:!0,lockDirection:function(t){return void 0===t&&(t=!1),t},bounds:function(t){if(void 0===t&&(t={}),"function"==typeof t)return function(e){return x.bounds(t(e))};var e=t,n=e.left,r=void 0===n?-1/0:n,i=e.right,o=void 0===i?1/0:i,a=e.top,s=void 0===a?-1/0:a,u=e.bottom;return[[r,o],[s,void 0===u?1/0:u]]}}),k="undefined"!=typeof window&&window.document&&window.document.createElement,T={enabled:function(t){return void 0===t&&(t=!0),t},domTarget:!0,window:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return void 0===t&&(t=k?window:void 0),t})),eventOptions:function(t){var e=void 0===t?{}:t,n=e.passive,r=void 0===n||n,i=e.capture;return{passive:r,capture:void 0!==i&&i}},transform:!0};function E(t){var e,n=t.domTarget,r=t.eventOptions,i=t.window,o=t.enabled,a=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,["domTarget","eventOptions","window","enabled"]),s=(void 0===(e={domTarget:n,eventOptions:r,window:i,enabled:o})&&(e={}),w(e,T));return s.scroll=function(t){return void 0===t&&(t={}),w(t,x)}(a),s}function K(t){return f({_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_threshold:[0,0],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:m,canceled:!1,memo:void 0,args:void 0},t)}function M(){return{shared:{hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},drag:K({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),pinch:K({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),wheel:K({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),move:K({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),scroll:K({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0})}}var j=new Map,A=function(t){return t};function I(t,e){return Math.abs(t)>=e&&(n=t,(Math.sign?Math.sign(n):Number(n>0)-Number(n<0)||+n)*e);var n}function G(t,e,n){var r=e[0],i=e[1],o=n[0],a=n[1],s=t[0],u=s[0],l=s[1],f=t[1],d=f[0],v=f[1];return[c(r,u,l,o),c(i,d,v,a)]}function L(t,e,n){var r=t.state,i=e.timeStamp,o=e.type,a=r.values;return{_lastEventType:o,event:e,timeStamp:i,elapsedTime:n?0:i-r.startTime,previous:a}}function z(t,e,n,r){var i=t.state,a=t.config,s=t.stateKey,u=t.args,c=t.transform,l=i.offset,d=n.timeStamp,v=a.initial,h=a.bounds,p=o(c(a.threshold),c([0,0])).map(Math.abs),m=f({},M()[s],{_active:!0,args:u,values:e,initial:null!=r?r:e,_threshold:p,offset:l,lastOffset:l,startTime:d});return f({},m,{_initial:b(v,m),_bounds:b(h,m)})}var R=function(t){var e=this;this.classes=t,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents="undefined"!=typeof window&&"ontouchstart"in window,this.supportsGestureEvents=function(){try{return"constructor"in GestureEvent}catch(t){return!1}}(),this.bind=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(var i,o={},a=p(e.classes);!(i=a()).done;){var s=i.value;new s(e,n).addBindings(o)}var u=function(t){$(o,t,(function(r){return e.nativeRefs[t](f({},e.state.shared,{event:r,args:n}))}))};for(var c in e.nativeRefs)u(c);return e.config.domTarget?C(e,o):P(e,o)},this.effect=function(){return e.config.domTarget&&e.bind(),e.clean},this.clean=function(){var t=H(e.config),n=e.config.eventOptions;t&&B(t,D(e.domListeners),n),Object.values(e.timeouts).forEach(clearTimeout),function(t){var e=t.config,n=e.window,r=e.eventOptions,i=t.windowListeners;if(n){for(var o in i)B(n,i[o],r);t.windowListeners={}}}(e)},this.classes=t,this.state=M(),this.timeouts={},this.domListeners=[],this.windowListeners={}};function C(t,e){var n=t.config,r=t.domListeners,i=H(n);if(!i)throw new Error("domTarget must be defined");var o=n.eventOptions;B(i,D(r),o);for(var a=0,s=Object.entries(e);a<s.length;a++){var u=s[a],c=u[0],l=u[1],f=c.slice(2).toLowerCase();r.push([f,g.apply(void 0,l)])}!function(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={});for(var r,i=p(e);!(r=i()).done;){var o=r.value,a=o[0],s=o[1];t.addEventListener(a,s,n)}}(i,r,o)}function P(t,e){for(var n={},r=t.config.eventOptions.capture?"Capture":"",i=0,o=Object.entries(e);i<o.length;i++){var a=o[i],s=a[0],u=a[1],c=Array.isArray(u)?u:[u];n[s+r]=g.apply(void 0,c)}return n}function D(t){return void 0===t&&(t=[]),t.splice(0,t.length)}function H(t){var e=t.domTarget;return e&&"current"in e?e.current:e}function $(t,e,n){t[e]||(t[e]=[]),t[e].push(n)}function B(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={});for(var r,i=p(e);!(r=i()).done;){var o=r.value,a=o[0],s=o[1];t.removeEventListener(a,s,n)}}function N(){}function V(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var n,r,i,o;if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!V(t[r],e[r]))return!1;return!0}if("function"==typeof Map&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!V(r.value[1],e.get(r.value[0])))return!1;return!0}if("function"==typeof Set&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if("undefined"!=typeof Element&&t instanceof Element)return!1;for(r=n;0!=r--;)if(!("_owner"===i[r]&&t.$$typeof||V(t[i[r]],e[i[r]])))return!1;return!0}return t!=t&&e!=e}function U(t,e){try{return V(t,e)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}var X=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).ingKey="scrolling",e.stateKey="scroll",e.debounced=!0,e.handleEvent=function(t){if(e.enabled){e.clearTimeout(),e.setTimeout(e.onEnd);var n=O(t,e.transform);if(e.updateSharedState(_(t)),e.state._active)e.updateGestureState(f({},L(v(e),t),e.getKinematics(n,t)));else{e.updateGestureState(f({},z(v(e),n,t,e.state.values),L(v(e),t,!0)));var r=e.getMovement(n),i=s(r.delta);e.updateGestureState(r),e.updateGestureState(i)}e.fireGestureHandler()}},e.onEnd=function(){e.clean(),e.state._active&&(e.updateGestureState(f({},e.getMovement(e.state.values),{_active:!1,velocities:[0,0],velocity:0})),e.fireGestureHandler())},e}return d(e,t),e.prototype.addBindings=function(t){$(t,"onScroll",this.handleEvent)},e}(function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var n=e.prototype;return n.getInternalMovement=function(t,e){return o(t,e.initial)},n.checkIntentionality=function(t,e){if(!1===t[0]&&!1===t[1])return{_intentional:t,axis:this.state.axis};var n=e.map(Math.abs),r=n[0],i=n[1],o=this.state.axis||(r>i?"x":r<i?"y":void 0);return this.config.axis||this.config.lockDirection?o?this.config.axis&&o!==this.config.axis?{_intentional:t,_blocked:!0,axis:o}:(t["x"===o?1:0]=!1,{_intentional:t,_blocked:!1,axis:o}):{_intentional:[!1,!1],_blocked:!1,axis:o}:{_intentional:t,_blocked:!1,axis:o}},n.getKinematics=function(t,e){var n=this.getMovement(t);if(!n._blocked){var r=e.timeStamp-this.state.timeStamp;Object.assign(n,function(t,e,n){var r=a(e),i=0===r?0:1/r,o=0===n?0:1/n,s=o*r,u=e.map((function(t){return o*t})),c=e.map((function(t){return i*t}));return{velocities:u,velocity:s,distance:a(t),direction:c}}(n.movement,n.delta,r))}return n},n.mapStateValues=function(t){return{xy:t.values,vxvy:t.velocities}},e}(function(){function t(t,e){var n=this;void 0===e&&(e=[]),this.controller=t,this.args=e,this.debounced=!0,this.setTimeout=function(t,e){var r;void 0===e&&(e=140),clearTimeout(n.controller.timeouts[n.stateKey]);for(var i=arguments.length,o=new Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];n.controller.timeouts[n.stateKey]=(r=window).setTimeout.apply(r,[t,e].concat(o))},this.clearTimeout=function(){clearTimeout(n.controller.timeouts[n.stateKey])},this.fireGestureHandler=function(t){if(void 0===t&&(t=!1),n.state._blocked)return n.debounced||(n.state._active=!1,n.clean()),null;if(!t&&!n.state.intentional&&!n.config.triggerAllEvents)return null;if(n.state.intentional){var e=n.state.active,r=n.state._active;n.state.active=r,n.state.first=r&&!e,n.state.last=e&&!r,n.controller.state.shared[n.ingKey]=r}var i=n.controller.pointerIds.size||n.controller.touchIds.size,o=n.controller.state.shared.buttons>0||i>0,a=f({},n.controller.state.shared,n.state,n.mapStateValues(n.state),{locked:!!document.pointerLockElement,touches:i,down:o}),s=n.handler(a);return n.state.memo=void 0!==s?s:n.state.memo,a},this.controller=t,this.args=e}var e,n,r=t.prototype;return r.updateSharedState=function(t){Object.assign(this.controller.state.shared,t)},r.updateGestureState=function(t){Object.assign(this.state,t)},r.checkIntentionality=function(t,e){return{_intentional:t,_blocked:!1}},r.getMovement=function(t){var e=this.config.rubberband,n=this.state,r=n._bounds,a=n._initial,s=n._active,u=n._intentional,c=n.lastOffset,l=n.movement,d=n._threshold,v=this.getInternalMovement(t,this.state),h=!1===u[0]?I(v[0],d[0]):u[0],p=!1===u[1]?I(v[1],d[1]):u[1],m=this.checkIntentionality([h,p],v);if(m._blocked)return f({},m,{_movement:v,delta:[0,0]});var g=m._intentional,y=v,b=[!1!==g[0]?v[0]-g[0]:0,!1!==g[1]?v[1]-g[1]:0],w=i(b,c),_=s?e:[0,0];return b=G(r,i(b,a),_),f({},m,{intentional:!1!==g[0]||!1!==g[1],_initial:a,_movement:y,movement:b,values:t,offset:G(r,w,_),delta:o(b,l)})},r.clean=function(){this.clearTimeout()},e=t,(n=[{key:"config",get:function(){return this.controller.config[this.stateKey]}},{key:"enabled",get:function(){return this.controller.config.enabled&&this.config.enabled}},{key:"state",get:function(){return this.controller.state[this.stateKey]}},{key:"handler",get:function(){return this.controller.handlers[this.stateKey]}},{key:"transform",get:function(){return this.config.transform||this.controller.config.transform||A}}])&&l(e.prototype,n),t}()));function Y(t,e){void 0===e&&(e={}),j.set("scroll",X);var n=(0,r.useRef)();return n.current||(n.current=function(t,e){var n,r,i=[],o=!1;return function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return o&&n===this&&e(s,i)||(r=t.apply(this,s),o=!0,n=this,i=s),r}}(E,U)),function(t,e,n){void 0===n&&(n={});var i=function(t){var e=new Set;return t.drag&&e.add(j.get("drag")),t.wheel&&e.add(j.get("wheel")),t.scroll&&e.add(j.get("scroll")),t.move&&e.add(j.get("move")),t.pinch&&e.add(j.get("pinch")),t.hover&&e.add(j.get("hover")),e}(t),o=r.useMemo((function(){return new R(i)}),[]);return o.config=e,o.handlers=t,o.nativeRefs=n,r.useEffect(o.effect,[]),o.config.domTarget?N:o.bind}({scroll:t},n.current(e))}}}]);