var R0=Object.defineProperty;var T0=(u,c,f)=>c in u?R0(u,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):u[c]=f;var lt=(u,c,f)=>T0(u,typeof c!="symbol"?c+"":c,f);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&r(v)}).observe(document,{childList:!0,subtree:!0});function f(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(d){if(d.ep)return;d.ep=!0;const m=f(d);fetch(d.href,m)}})();function O0(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Pr={exports:{}},oi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function V0(){if(_d)return oi;_d=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(r,d,m){var v=null;if(m!==void 0&&(v=""+m),d.key!==void 0&&(v=""+d.key),"key"in d){m={};for(var _ in d)_!=="key"&&(m[_]=d[_])}else m=d;return d=m.ref,{$$typeof:u,type:r,key:v,ref:d!==void 0?d:null,props:m}}return oi.Fragment=c,oi.jsx=f,oi.jsxs=f,oi}var xd;function D0(){return xd||(xd=1,Pr.exports=V0()),Pr.exports}var F=D0(),$r={exports:{}},it={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function N0(){if(bd)return it;bd=1;var u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),v=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),N=Symbol.iterator;function Q(h){return h===null||typeof h!="object"?null:(h=N&&h[N]||h["@@iterator"],typeof h=="function"?h:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,O={};function D(h,M,G){this.props=h,this.context=M,this.refs=O,this.updater=G||Y}D.prototype.isReactComponent={},D.prototype.setState=function(h,M){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,M,"setState")},D.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function q(){}q.prototype=D.prototype;function L(h,M,G){this.props=h,this.context=M,this.refs=O,this.updater=G||Y}var H=L.prototype=new q;H.constructor=L,T(H,D.prototype),H.isPureReactComponent=!0;var X=Array.isArray;function P(){}var W={H:null,A:null,T:null,S:null},ft=Object.prototype.hasOwnProperty;function pt(h,M,G){var J=G.ref;return{$$typeof:u,type:h,key:M,ref:J!==void 0?J:null,props:G}}function gt(h,M){return pt(h.type,M,h.props)}function ht(h){return typeof h=="object"&&h!==null&&h.$$typeof===u}function Ct(h){var M={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(G){return M[G]})}var Gt=/\/+/g;function Nt(h,M){return typeof h=="object"&&h!==null&&h.key!=null?Ct(""+h.key):M.toString(36)}function Ut(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(P,P):(h.status="pending",h.then(function(M){h.status==="pending"&&(h.status="fulfilled",h.value=M)},function(M){h.status==="pending"&&(h.status="rejected",h.reason=M)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function z(h,M,G,J,ot){var rt=typeof h;(rt==="undefined"||rt==="boolean")&&(h=null);var Bt=!1;if(h===null)Bt=!0;else switch(rt){case"bigint":case"string":case"number":Bt=!0;break;case"object":switch(h.$$typeof){case u:case c:Bt=!0;break;case C:return Bt=h._init,z(Bt(h._payload),M,G,J,ot)}}if(Bt)return ot=ot(h),Bt=J===""?"."+Nt(h,0):J,X(ot)?(G="",Bt!=null&&(G=Bt.replace(Gt,"$&/")+"/"),z(ot,M,G,"",function(so){return so})):ot!=null&&(ht(ot)&&(ot=gt(ot,G+(ot.key==null||h&&h.key===ot.key?"":(""+ot.key).replace(Gt,"$&/")+"/")+Bt)),M.push(ot)),1;Bt=0;var ze=J===""?".":J+":";if(X(h))for(var qt=0;qt<h.length;qt++)J=h[qt],rt=ze+Nt(J,qt),Bt+=z(J,M,G,rt,ot);else if(qt=Q(h),typeof qt=="function")for(h=qt.call(h),qt=0;!(J=h.next()).done;)J=J.value,rt=ze+Nt(J,qt++),Bt+=z(J,M,G,rt,ot);else if(rt==="object"){if(typeof h.then=="function")return z(Ut(h),M,G,J,ot);throw M=String(h),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Bt}function j(h,M,G){if(h==null)return h;var J=[],ot=0;return z(h,J,"","",function(rt){return M.call(G,rt,ot++)}),J}function $(h){if(h._status===-1){var M=h._result;M=M(),M.then(function(G){(h._status===0||h._status===-1)&&(h._status=1,h._result=G)},function(G){(h._status===0||h._status===-1)&&(h._status=2,h._result=G)}),h._status===-1&&(h._status=0,h._result=M)}if(h._status===1)return h._result.default;throw h._result}var yt=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},Z={map:j,forEach:function(h,M,G){j(h,function(){M.apply(this,arguments)},G)},count:function(h){var M=0;return j(h,function(){M++}),M},toArray:function(h){return j(h,function(M){return M})||[]},only:function(h){if(!ht(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return it.Activity=B,it.Children=Z,it.Component=D,it.Fragment=f,it.Profiler=d,it.PureComponent=L,it.StrictMode=r,it.Suspense=b,it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,it.__COMPILER_RUNTIME={__proto__:null,c:function(h){return W.H.useMemoCache(h)}},it.cache=function(h){return function(){return h.apply(null,arguments)}},it.cacheSignal=function(){return null},it.cloneElement=function(h,M,G){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var J=T({},h.props),ot=h.key;if(M!=null)for(rt in M.key!==void 0&&(ot=""+M.key),M)!ft.call(M,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&M.ref===void 0||(J[rt]=M[rt]);var rt=arguments.length-2;if(rt===1)J.children=G;else if(1<rt){for(var Bt=Array(rt),ze=0;ze<rt;ze++)Bt[ze]=arguments[ze+2];J.children=Bt}return pt(h.type,ot,J)},it.createContext=function(h){return h={$$typeof:v,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:m,_context:h},h},it.createElement=function(h,M,G){var J,ot={},rt=null;if(M!=null)for(J in M.key!==void 0&&(rt=""+M.key),M)ft.call(M,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ot[J]=M[J]);var Bt=arguments.length-2;if(Bt===1)ot.children=G;else if(1<Bt){for(var ze=Array(Bt),qt=0;qt<Bt;qt++)ze[qt]=arguments[qt+2];ot.children=ze}if(h&&h.defaultProps)for(J in Bt=h.defaultProps,Bt)ot[J]===void 0&&(ot[J]=Bt[J]);return pt(h,rt,ot)},it.createRef=function(){return{current:null}},it.forwardRef=function(h){return{$$typeof:_,render:h}},it.isValidElement=ht,it.lazy=function(h){return{$$typeof:C,_payload:{_status:-1,_result:h},_init:$}},it.memo=function(h,M){return{$$typeof:p,type:h,compare:M===void 0?null:M}},it.startTransition=function(h){var M=W.T,G={};W.T=G;try{var J=h(),ot=W.S;ot!==null&&ot(G,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(P,yt)}catch(rt){yt(rt)}finally{M!==null&&G.types!==null&&(M.types=G.types),W.T=M}},it.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},it.use=function(h){return W.H.use(h)},it.useActionState=function(h,M,G){return W.H.useActionState(h,M,G)},it.useCallback=function(h,M){return W.H.useCallback(h,M)},it.useContext=function(h){return W.H.useContext(h)},it.useDebugValue=function(){},it.useDeferredValue=function(h,M){return W.H.useDeferredValue(h,M)},it.useEffect=function(h,M){return W.H.useEffect(h,M)},it.useEffectEvent=function(h){return W.H.useEffectEvent(h)},it.useId=function(){return W.H.useId()},it.useImperativeHandle=function(h,M,G){return W.H.useImperativeHandle(h,M,G)},it.useInsertionEffect=function(h,M){return W.H.useInsertionEffect(h,M)},it.useLayoutEffect=function(h,M){return W.H.useLayoutEffect(h,M)},it.useMemo=function(h,M){return W.H.useMemo(h,M)},it.useOptimistic=function(h,M){return W.H.useOptimistic(h,M)},it.useReducer=function(h,M,G){return W.H.useReducer(h,M,G)},it.useRef=function(h){return W.H.useRef(h)},it.useState=function(h){return W.H.useState(h)},it.useSyncExternalStore=function(h,M,G){return W.H.useSyncExternalStore(h,M,G)},it.useTransition=function(){return W.H.useTransition()},it.version="19.2.4",it}var Ad;function dc(){return Ad||(Ad=1,$r.exports=N0()),$r.exports}var k=dc();const me=O0(k);var tc={exports:{}},ii={},ec={exports:{}},ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function Y0(){return Sd||(Sd=1,(function(u){function c(z,j){var $=z.length;z.push(j);t:for(;0<$;){var yt=$-1>>>1,Z=z[yt];if(0<d(Z,j))z[yt]=j,z[$]=Z,$=yt;else break t}}function f(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],$=z.pop();if($!==j){z[0]=$;t:for(var yt=0,Z=z.length,h=Z>>>1;yt<h;){var M=2*(yt+1)-1,G=z[M],J=M+1,ot=z[J];if(0>d(G,$))J<Z&&0>d(ot,G)?(z[yt]=ot,z[J]=$,yt=J):(z[yt]=G,z[M]=$,yt=M);else if(J<Z&&0>d(ot,$))z[yt]=ot,z[J]=$,yt=J;else break t}}return j}function d(z,j){var $=z.sortIndex-j.sortIndex;return $!==0?$:z.id-j.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;u.unstable_now=function(){return m.now()}}else{var v=Date,_=v.now();u.unstable_now=function(){return v.now()-_}}var b=[],p=[],C=1,B=null,N=3,Q=!1,Y=!1,T=!1,O=!1,D=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function H(z){for(var j=f(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=z)r(p),j.sortIndex=j.expirationTime,c(b,j);else break;j=f(p)}}function X(z){if(T=!1,H(z),!Y)if(f(b)!==null)Y=!0,P||(P=!0,Ct());else{var j=f(p);j!==null&&Ut(X,j.startTime-z)}}var P=!1,W=-1,ft=5,pt=-1;function gt(){return O?!0:!(u.unstable_now()-pt<ft)}function ht(){if(O=!1,P){var z=u.unstable_now();pt=z;var j=!0;try{t:{Y=!1,T&&(T=!1,q(W),W=-1),Q=!0;var $=N;try{e:{for(H(z),B=f(b);B!==null&&!(B.expirationTime>z&&gt());){var yt=B.callback;if(typeof yt=="function"){B.callback=null,N=B.priorityLevel;var Z=yt(B.expirationTime<=z);if(z=u.unstable_now(),typeof Z=="function"){B.callback=Z,H(z),j=!0;break e}B===f(b)&&r(b),H(z)}else r(b);B=f(b)}if(B!==null)j=!0;else{var h=f(p);h!==null&&Ut(X,h.startTime-z),j=!1}}break t}finally{B=null,N=$,Q=!1}j=void 0}}finally{j?Ct():P=!1}}}var Ct;if(typeof L=="function")Ct=function(){L(ht)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,Nt=Gt.port2;Gt.port1.onmessage=ht,Ct=function(){Nt.postMessage(null)}}else Ct=function(){D(ht,0)};function Ut(z,j){W=D(function(){z(u.unstable_now())},j)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(z){z.callback=null},u.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=0<z?Math.floor(1e3/z):5},u.unstable_getCurrentPriorityLevel=function(){return N},u.unstable_next=function(z){switch(N){case 1:case 2:case 3:var j=3;break;default:j=N}var $=N;N=j;try{return z()}finally{N=$}},u.unstable_requestPaint=function(){O=!0},u.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=N;N=z;try{return j()}finally{N=$}},u.unstable_scheduleCallback=function(z,j,$){var yt=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?yt+$:yt):$=yt,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,z={id:C++,callback:j,priorityLevel:z,startTime:$,expirationTime:Z,sortIndex:-1},$>yt?(z.sortIndex=$,c(p,z),f(b)===null&&z===f(p)&&(T?(q(W),W=-1):T=!0,Ut(X,$-yt))):(z.sortIndex=Z,c(b,z),Y||Q||(Y=!0,P||(P=!0,Ct()))),z},u.unstable_shouldYield=gt,u.unstable_wrapCallback=function(z){var j=N;return function(){var $=N;N=j;try{return z.apply(this,arguments)}finally{N=$}}}})(ac)),ac}var Cd;function H0(){return Cd||(Cd=1,ec.exports=Y0()),ec.exports}var lc={exports:{}},Se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function G0(){if(Bd)return Se;Bd=1;var u=dc();function c(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)p+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(b,p,C){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:B==null?null:""+B,children:b,containerInfo:p,implementation:C}}var v=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Se.createPortal=function(b,p){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(c(299));return m(b,p,null,C)},Se.flushSync=function(b){var p=v.T,C=r.p;try{if(v.T=null,r.p=2,b)return b()}finally{v.T=p,r.p=C,r.d.f()}},Se.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(b,p))},Se.prefetchDNS=function(b){typeof b=="string"&&r.d.D(b)},Se.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var C=p.as,B=_(C,p.crossOrigin),N=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;C==="style"?r.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:B,integrity:N,fetchPriority:Q}):C==="script"&&r.d.X(b,{crossOrigin:B,integrity:N,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Se.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var C=_(p.as,p.crossOrigin);r.d.M(b,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(b)},Se.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var C=p.as,B=_(C,p.crossOrigin);r.d.L(b,C,{crossOrigin:B,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Se.preloadModule=function(b,p){if(typeof b=="string")if(p){var C=_(p.as,p.crossOrigin);r.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(b)},Se.requestFormReset=function(b){r.d.r(b)},Se.unstable_batchedUpdates=function(b,p){return b(p)},Se.useFormState=function(b,p,C){return v.H.useFormState(b,p,C)},Se.useFormStatus=function(){return v.H.useHostTransitionStatus()},Se.version="19.2.4",Se}var Ed;function k0(){if(Ed)return lc.exports;Ed=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),lc.exports=G0(),lc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function Q0(){if(zd)return ii;zd=1;var u=H0(),c=dc(),f=k0();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function v(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b(t){if(m(t)!==t)throw Error(r(188))}function p(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(r(188));return e!==t?null:t}for(var a=t,l=e;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(l=o.return,l!==null){a=l;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return b(o),t;if(i===l)return b(o),e;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=o,l=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,l=i;break}if(s===l){n=!0,l=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,l=o;break}if(s===l){n=!0,l=i,a=o;break}s=s.sibling}if(!n)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:e}function C(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=C(t),e!==null)return e;t=t.sibling}return null}var B=Object.assign,N=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),L=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),gt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function Ct(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var Gt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Gt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case D:return"Profiler";case O:return"StrictMode";case X:return"Suspense";case P:return"SuspenseList";case pt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Y:return"Portal";case L:return t.displayName||"Context";case q:return(t._context.displayName||"Context")+".Consumer";case H:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return e=t.displayName||null,e!==null?e:Nt(t.type)||"Memo";case ft:e=t._payload,t=t._init;try{return Nt(t(e))}catch{}}return null}var Ut=Array.isArray,z=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},yt=[],Z=-1;function h(t){return{current:t}}function M(t){0>Z||(t.current=yt[Z],yt[Z]=null,Z--)}function G(t,e){Z++,yt[Z]=t.current,t.current=e}var J=h(null),ot=h(null),rt=h(null),Bt=h(null);function ze(t,e){switch(G(rt,e),G(ot,t),G(J,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Xm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Xm(e),t=jm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(J),G(J,t)}function qt(){M(J),M(ot),M(rt)}function so(t){t.memoizedState!==null&&G(Bt,t);var e=J.current,a=jm(e,t.type);e!==a&&(G(ot,t),G(J,a))}function fi(t){ot.current===t&&(M(J),M(ot)),Bt.current===t&&(M(Bt),ti._currentValue=$)}var Vn,vc;function ol(t){if(Vn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Vn=e&&e[1]||"",vc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vn+t+vc}var Dn=!1;function Nn(t,e){if(!t||Dn)return"";Dn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(U){var E=U}Reflect.construct(t,[],V)}else{try{V.call()}catch(U){E=U}t.call(V.prototype)}}else{try{throw Error()}catch(U){E=U}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(U){if(U&&E&&typeof U.stack=="string")return[U.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),n=i[0],s=i[1];if(n&&s){var g=n.split(`
`),S=s.split(`
`);for(o=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;if(l===g.length||o===S.length)for(l=g.length-1,o=S.length-1;1<=l&&0<=o&&g[l]!==S[o];)o--;for(;1<=l&&0<=o;l--,o--)if(g[l]!==S[o]){if(l!==1||o!==1)do if(l--,o--,0>o||g[l]!==S[o]){var w=`
`+g[l].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=l&&0<=o);break}}}finally{Dn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ol(a):""}function rp(t,e){switch(t.tag){case 26:case 27:case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return t.child!==e&&e!==null?ol("Suspense Fallback"):ol("Suspense");case 19:return ol("SuspenseList");case 0:case 15:return Nn(t.type,!1);case 11:return Nn(t.type.render,!1);case 1:return Nn(t.type,!0);case 31:return ol("Activity");default:return""}}function yc(t){try{var e="",a=null;do e+=rp(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Yn=Object.prototype.hasOwnProperty,Hn=u.unstable_scheduleCallback,Gn=u.unstable_cancelCallback,cp=u.unstable_shouldYield,sp=u.unstable_requestPaint,He=u.unstable_now,fp=u.unstable_getCurrentPriorityLevel,_c=u.unstable_ImmediatePriority,xc=u.unstable_UserBlockingPriority,mi=u.unstable_NormalPriority,mp=u.unstable_LowPriority,bc=u.unstable_IdlePriority,dp=u.log,pp=u.unstable_setDisableYieldValue,fo=null,Ge=null;function Ra(t){if(typeof dp=="function"&&pp(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(fo,t)}catch{}}var ke=Math.clz32?Math.clz32:vp,gp=Math.log,hp=Math.LN2;function vp(t){return t>>>=0,t===0?32:31-(gp(t)/hp|0)|0}var di=256,pi=262144,gi=4194304;function il(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hi(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var o=0,i=t.suspendedLanes,n=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?o=il(l):(n&=s,n!==0?o=il(n):a||(a=s&~t,a!==0&&(o=il(a))))):(s=l&~i,s!==0?o=il(s):n!==0?o=il(n):a||(a=l&~t,a!==0&&(o=il(a)))),o===0?0:e!==0&&e!==o&&(e&i)===0&&(i=o&-o,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:o}function mo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function yp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ac(){var t=gi;return gi<<=1,(gi&62914560)===0&&(gi=4194304),t}function kn(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function po(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _p(t,e,a,l,o,i){var n=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,g=t.expirationTimes,S=t.hiddenUpdates;for(a=n&~a;0<a;){var w=31-ke(a),V=1<<w;s[w]=0,g[w]=-1;var E=S[w];if(E!==null)for(S[w]=null,w=0;w<E.length;w++){var U=E[w];U!==null&&(U.lane&=-536870913)}a&=~V}l!==0&&Sc(t,l,0),i!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=i&~(n&~e))}function Sc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-ke(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function Cc(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-ke(a),o=1<<l;o&e|t[l]&e&&(t[l]|=e),a&=~o}}function Bc(t,e){var a=e&-e;return a=(a&42)!==0?1:Qn(a),(a&(t.suspendedLanes|e))!==0?0:a}function Qn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ec(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:md(t.type))}function zc(t,e){var a=j.p;try{return j.p=t,e()}finally{j.p=a}}var Ta=Math.random().toString(36).slice(2),pe="__reactFiber$"+Ta,we="__reactProps$"+Ta,Bl="__reactContainer$"+Ta,jn="__reactEvents$"+Ta,xp="__reactListeners$"+Ta,bp="__reactHandles$"+Ta,Uc="__reactResources$"+Ta,go="__reactMarker$"+Ta;function qn(t){delete t[pe],delete t[we],delete t[jn],delete t[xp],delete t[bp]}function El(t){var e=t[pe];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Bl]||a[pe]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Wm(t);t!==null;){if(a=t[pe])return a;t=Wm(t)}return e}t=a,a=t.parentNode}return null}function zl(t){if(t=t[pe]||t[Bl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ho(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ul(t){var e=t[Uc];return e||(e=t[Uc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ue(t){t[go]=!0}var Mc=new Set,wc={};function nl(t,e){Ml(t,e),Ml(t+"Capture",e)}function Ml(t,e){for(wc[t]=e,t=0;t<e.length;t++)Mc.add(e[t])}var Ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Tc={};function Sp(t){return Yn.call(Tc,t)?!0:Yn.call(Rc,t)?!1:Ap.test(t)?Tc[t]=!0:(Rc[t]=!0,!1)}function vi(t,e,a){if(Sp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function yi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ma(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cp(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return o.call(this)},set:function(n){a=""+n,i.call(this,n)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(n){a=""+n},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ln(t){if(!t._valueTracker){var e=Oc(t)?"checked":"value";t._valueTracker=Cp(t,e,""+t[e])}}function Vc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Oc(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bp=/[\n"\\]/g;function Je(t){return t.replace(Bp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Fn(t,e,a,l,o,i,n,s){t.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?t.type=n:t.removeAttribute("type"),e!=null?n==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ze(e)):t.value!==""+Ze(e)&&(t.value=""+Ze(e)):n!=="submit"&&n!=="reset"||t.removeAttribute("value"),e!=null?Kn(t,n,Ze(e)):a!=null?Kn(t,n,Ze(a)):l!=null&&t.removeAttribute("value"),o==null&&i!=null&&(t.defaultChecked=!!i),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Ze(s):t.removeAttribute("name")}function Dc(t,e,a,l,o,i,n,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Ln(t);return}a=a!=null?""+Ze(a):"",e=e!=null?""+Ze(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.name=n),Ln(t)}function Kn(t,e,a){e==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wl(t,e,a,l){if(t=t.options,e){e={};for(var o=0;o<a.length;o++)e["$"+a[o]]=!0;for(a=0;a<t.length;a++)o=e.hasOwnProperty("$"+t[a].value),t[a].selected!==o&&(t[a].selected=o),o&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),e=null,o=0;o<t.length;o++){if(t[o].value===a){t[o].selected=!0,l&&(t[o].defaultSelected=!0);return}e!==null||t[o].disabled||(e=t[o])}e!==null&&(e.selected=!0)}}function Nc(t,e,a){if(e!=null&&(e=""+Ze(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ze(a):""}function Yc(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ut(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ze(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),Ln(t)}function Rl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hc(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Ep.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Gc(t,e,a){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var o in e)l=e[o],e.hasOwnProperty(o)&&a[o]!==l&&Hc(t,o,l)}else for(var i in e)e.hasOwnProperty(i)&&Hc(t,i,e[i])}function Zn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(t){return Up.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var Jn=null;function Wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tl=null,Ol=null;function kc(t){var e=zl(t);if(e&&(t=e.stateNode)){var a=t[we]||null;t:switch(t=e.stateNode,e.type){case"input":if(Fn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var o=l[we]||null;if(!o)throw Error(r(90));Fn(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Vc(l)}break t;case"textarea":Nc(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&wl(t,!!a.multiple,e,!1)}}}var In=!1;function Qc(t,e,a){if(In)return t(e,a);In=!0;try{var l=t(e);return l}finally{if(In=!1,(Tl!==null||Ol!==null)&&(rn(),Tl&&(e=Tl,t=Ol,Ol=Tl=null,kc(e),t)))for(e=0;e<t.length;e++)kc(t[e])}}function vo(t,e){var a=t.stateNode;if(a===null)return null;var l=a[we]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,e,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(pa)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Pn=!1}var Oa=null,$n=null,bi=null;function Xc(){if(bi)return bi;var t,e=$n,a=e.length,l,o="value"in Oa?Oa.value:Oa.textContent,i=o.length;for(t=0;t<a&&e[t]===o[t];t++);var n=a-t;for(l=1;l<=n&&e[a-l]===o[i-l];l++);return bi=o.slice(t,1<l?1-l:void 0)}function Ai(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Si(){return!0}function jc(){return!1}function Re(t){function e(a,l,o,i,n){this._reactName=a,this._targetInst=o,this.type=l,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:jc,this.isPropagationStopped=jc,this}return B(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),e}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=Re(ul),_o=B({},ul,{view:0,detail:0}),Mp=Re(_o),tu,eu,xo,Bi=B({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(tu=t.screenX-xo.screenX,eu=t.screenY-xo.screenY):eu=tu=0,xo=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),qc=Re(Bi),wp=B({},Bi,{dataTransfer:0}),Rp=Re(wp),Tp=B({},_o,{relatedTarget:0}),au=Re(Tp),Op=B({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),Vp=Re(Op),Dp=B({},ul,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Np=Re(Dp),Yp=B({},ul,{data:0}),Lc=Re(Yp),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kp[t])?!!e[t]:!1}function lu(){return Qp}var Xp=B({},_o,{key:function(t){if(t.key){var e=Hp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ai(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?Ai(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ai(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jp=Re(Xp),qp=B({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=Re(qp),Lp=B({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),Fp=Re(Lp),Kp=B({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=Re(Kp),Jp=B({},Bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=Re(Jp),Ip=B({},ul,{newState:0,oldState:0}),Pp=Re(Ip),$p=[9,13,27,32],ou=pa&&"CompositionEvent"in window,bo=null;pa&&"documentMode"in document&&(bo=document.documentMode);var tg=pa&&"TextEvent"in window&&!bo,Kc=pa&&(!ou||bo&&8<bo&&11>=bo),Zc=" ",Jc=!1;function Wc(t,e){switch(t){case"keyup":return $p.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ic(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vl=!1;function eg(t,e){switch(t){case"compositionend":return Ic(e);case"keypress":return e.which!==32?null:(Jc=!0,Zc);case"textInput":return t=e.data,t===Zc&&Jc?null:t;default:return null}}function ag(t,e){if(Vl)return t==="compositionend"||!ou&&Wc(t,e)?(t=Xc(),bi=$n=Oa=null,Vl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kc&&e.locale!=="ko"?null:e.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lg[t.type]:e==="textarea"}function $c(t,e,a,l){Tl?Ol?Ol.push(l):Ol=[l]:Tl=l,e=gn(e,"onChange"),0<e.length&&(a=new Ci("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Ao=null,So=null;function og(t){Nm(t,0)}function Ei(t){var e=ho(t);if(Vc(e))return t}function ts(t,e){if(t==="change")return e}var es=!1;if(pa){var iu;if(pa){var nu="oninput"in document;if(!nu){var as=document.createElement("div");as.setAttribute("oninput","return;"),nu=typeof as.oninput=="function"}iu=nu}else iu=!1;es=iu&&(!document.documentMode||9<document.documentMode)}function ls(){Ao&&(Ao.detachEvent("onpropertychange",os),So=Ao=null)}function os(t){if(t.propertyName==="value"&&Ei(So)){var e=[];$c(e,So,t,Wn(t)),Qc(og,e)}}function ig(t,e,a){t==="focusin"?(ls(),Ao=e,So=a,Ao.attachEvent("onpropertychange",os)):t==="focusout"&&ls()}function ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ei(So)}function ug(t,e){if(t==="click")return Ei(e)}function rg(t,e){if(t==="input"||t==="change")return Ei(e)}function cg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:cg;function Co(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var o=a[l];if(!Yn.call(e,o)||!Qe(t[o],e[o]))return!1}return!0}function is(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ns(t,e){var a=is(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=is(a)}}function us(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?us(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_i(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=_i(t.document)}return e}function uu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var sg=pa&&"documentMode"in document&&11>=document.documentMode,Dl=null,ru=null,Bo=null,cu=!1;function cs(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Dl==null||Dl!==_i(l)||(l=Dl,"selectionStart"in l&&uu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bo&&Co(Bo,l)||(Bo=l,l=gn(ru,"onSelect"),0<l.length&&(e=new Ci("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Dl)))}function rl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Nl={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionrun:rl("Transition","TransitionRun"),transitionstart:rl("Transition","TransitionStart"),transitioncancel:rl("Transition","TransitionCancel"),transitionend:rl("Transition","TransitionEnd")},su={},ss={};pa&&(ss=document.createElement("div").style,"AnimationEvent"in window||(delete Nl.animationend.animation,delete Nl.animationiteration.animation,delete Nl.animationstart.animation),"TransitionEvent"in window||delete Nl.transitionend.transition);function cl(t){if(su[t])return su[t];if(!Nl[t])return t;var e=Nl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ss)return su[t]=e[a];return t}var fs=cl("animationend"),ms=cl("animationiteration"),ds=cl("animationstart"),fg=cl("transitionrun"),mg=cl("transitionstart"),dg=cl("transitioncancel"),ps=cl("transitionend"),gs=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function oa(t,e){gs.set(t,e),nl(e,[t])}var zi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},We=[],Yl=0,mu=0;function Ui(){for(var t=Yl,e=mu=Yl=0;e<t;){var a=We[e];We[e++]=null;var l=We[e];We[e++]=null;var o=We[e];We[e++]=null;var i=We[e];if(We[e++]=null,l!==null&&o!==null){var n=l.pending;n===null?o.next=o:(o.next=n.next,n.next=o),l.pending=o}i!==0&&hs(a,o,i)}}function Mi(t,e,a,l){We[Yl++]=t,We[Yl++]=e,We[Yl++]=a,We[Yl++]=l,mu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function du(t,e,a,l){return Mi(t,e,a,l),wi(t)}function sl(t,e){return Mi(t,null,null,e),wi(t)}function hs(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var o=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(o=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,o&&e!==null&&(o=31-ke(a),t=i.hiddenUpdates,l=t[o],l===null?t[o]=[e]:l.push(e),e.lane=a|536870912),i):null}function wi(t){if(50<Ko)throw Ko=0,Ar=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hl={};function pg(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,a,l){return new pg(t,e,a,l)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,e){var a=t.alternate;return a===null?(a=Xe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function vs(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ri(t,e,a,l,o,i){var n=0;if(l=t,typeof t=="function")pu(t)&&(n=1);else if(typeof t=="string")n=_0(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pt:return t=Xe(31,a,e,o),t.elementType=pt,t.lanes=i,t;case T:return fl(a.children,o,i,e);case O:n=8,o|=24;break;case D:return t=Xe(12,a,e,o|2),t.elementType=D,t.lanes=i,t;case X:return t=Xe(13,a,e,o),t.elementType=X,t.lanes=i,t;case P:return t=Xe(19,a,e,o),t.elementType=P,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:n=10;break t;case q:n=9;break t;case H:n=11;break t;case W:n=14;break t;case ft:n=16,l=null;break t}n=29,a=Error(r(130,t===null?"null":typeof t,"")),l=null}return e=Xe(n,a,e,o),e.elementType=t,e.type=l,e.lanes=i,e}function fl(t,e,a,l){return t=Xe(7,t,l,e),t.lanes=a,t}function gu(t,e,a){return t=Xe(6,t,null,e),t.lanes=a,t}function ys(t){var e=Xe(18,null,null,0);return e.stateNode=t,e}function hu(t,e,a){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _s=new WeakMap;function Ie(t,e){if(typeof t=="object"&&t!==null){var a=_s.get(t);return a!==void 0?a:(e={value:t,source:e,stack:yc(e)},_s.set(t,e),e)}return{value:t,source:e,stack:yc(e)}}var Gl=[],kl=0,Ti=null,Eo=0,Pe=[],$e=0,Va=null,ra=1,ca="";function ha(t,e){Gl[kl++]=Eo,Gl[kl++]=Ti,Ti=t,Eo=e}function xs(t,e,a){Pe[$e++]=ra,Pe[$e++]=ca,Pe[$e++]=Va,Va=t;var l=ra;t=ca;var o=32-ke(l)-1;l&=~(1<<o),a+=1;var i=32-ke(e)+o;if(30<i){var n=o-o%5;i=(l&(1<<n)-1).toString(32),l>>=n,o-=n,ra=1<<32-ke(e)+o|a<<o|l,ca=i+t}else ra=1<<i|a<<o|l,ca=t}function vu(t){t.return!==null&&(ha(t,1),xs(t,1,0))}function yu(t){for(;t===Ti;)Ti=Gl[--kl],Gl[kl]=null,Eo=Gl[--kl],Gl[kl]=null;for(;t===Va;)Va=Pe[--$e],Pe[$e]=null,ca=Pe[--$e],Pe[$e]=null,ra=Pe[--$e],Pe[$e]=null}function bs(t,e){Pe[$e++]=ra,Pe[$e++]=ca,Pe[$e++]=Va,ra=e.id,ca=e.overflow,Va=t}var ge=null,Ot=null,vt=!1,Da=null,ta=!1,_u=Error(r(519));function Na(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Ie(e,t)),_u}function As(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[pe]=t,e[we]=l,a){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(a=0;a<Jo.length;a++)st(Jo[a],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),Dc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),Yc(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||km(e.textContent,a)?(l.popover!=null&&(st("beforetoggle",e),st("toggle",e)),l.onScroll!=null&&st("scroll",e),l.onScrollEnd!=null&&st("scrollend",e),l.onClick!=null&&(e.onclick=da),e=!0):e=!1,e||Na(t,!0)}function Ss(t){for(ge=t.return;ge;)switch(ge.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:ge=ge.return}}function Ql(t){if(t!==ge)return!1;if(!vt)return Ss(t),vt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yr(t.type,t.memoizedProps)),a=!a),a&&Ot&&Na(t),Ss(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ot=Jm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ot=Jm(t)}else e===27?(e=Ot,Wa(t.type)?(t=Xr,Xr=null,Ot=t):Ot=e):Ot=ge?aa(t.stateNode.nextSibling):null;return!0}function ml(){Ot=ge=null,vt=!1}function xu(){var t=Da;return t!==null&&(De===null?De=t:De.push.apply(De,t),Da=null),t}function zo(t){Da===null?Da=[t]:Da.push(t)}var bu=h(null),dl=null,va=null;function Ya(t,e,a){G(bu,e._currentValue),e._currentValue=a}function ya(t){t._currentValue=bu.current,M(bu)}function Au(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Su(t,e,a,l){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){var n=o.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=o;for(var g=0;g<e.length;g++)if(s.context===e[g]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Au(i.return,a,t),l||(n=null);break t}i=s.next}}else if(o.tag===18){if(n=o.return,n===null)throw Error(r(341));n.lanes|=a,i=n.alternate,i!==null&&(i.lanes|=a),Au(n,a,t),n=null}else n=o.child;if(n!==null)n.return=o;else for(n=o;n!==null;){if(n===t){n=null;break}if(o=n.sibling,o!==null){o.return=n.return,n=o;break}n=n.return}o=n}}function Xl(t,e,a,l){t=null;for(var o=e,i=!1;o!==null;){if(!i){if((o.flags&524288)!==0)i=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var n=o.alternate;if(n===null)throw Error(r(387));if(n=n.memoizedProps,n!==null){var s=o.type;Qe(o.pendingProps.value,n.value)||(t!==null?t.push(s):t=[s])}}else if(o===Bt.current){if(n=o.alternate,n===null)throw Error(r(387));n.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(ti):t=[ti])}o=o.return}t!==null&&Su(e,t,a,l),e.flags|=262144}function Oi(t){for(t=t.firstContext;t!==null;){if(!Qe(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pl(t){dl=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function he(t){return Cs(dl,t)}function Vi(t,e){return dl===null&&pl(t),Cs(t,e)}function Cs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},va===null){if(t===null)throw Error(r(308));va=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else va=va.next=e;return a}var gg=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},hg=u.unstable_scheduleCallback,vg=u.unstable_NormalPriority,Jt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new gg,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&hg(vg,function(){t.controller.abort()})}var Mo=null,Bu=0,jl=0,ql=null;function yg(t,e){if(Mo===null){var a=Mo=[];Bu=0,jl=Ur(),ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bu++,e.then(Bs,Bs),e}function Bs(){if(--Bu===0&&Mo!==null){ql!==null&&(ql.status="fulfilled");var t=Mo;Mo=null,jl=0,ql=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _g(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var o=0;o<a.length;o++)(0,a[o])(e)},function(o){for(l.status="rejected",l.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),l}var Es=z.S;z.S=function(t,e){sm=He(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&yg(t,e),Es!==null&&Es(t,e)};var gl=h(null);function Eu(){var t=gl.current;return t!==null?t:Tt.pooledCache}function Di(t,e){e===null?G(gl,gl.current):G(gl,e.pool)}function zs(){var t=Eu();return t===null?null:{parent:Jt._currentValue,pool:t}}var Ll=Error(r(460)),zu=Error(r(474)),Ni=Error(r(542)),Yi={then:function(){}};function Us(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ms(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(da,da),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rs(t),t;default:if(typeof e.status=="string")e.then(da,da);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=l}},function(l){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rs(t),t}throw vl=e,Ll}}function hl(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vl=a,Ll):a}}var vl=null;function ws(){if(vl===null)throw Error(r(459));var t=vl;return vl=null,t}function Rs(t){if(t===Ll||t===Ni)throw Error(r(483))}var Fl=null,wo=0;function Hi(t){var e=wo;return wo+=1,Fl===null&&(Fl=[]),Ms(Fl,t,e)}function Ro(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Gi(t,e){throw e.$$typeof===N?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ts(t){function e(x,y){if(t){var A=x.deletions;A===null?(x.deletions=[y],x.flags|=16):A.push(y)}}function a(x,y){if(!t)return null;for(;y!==null;)e(x,y),y=y.sibling;return null}function l(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function o(x,y){return x=ga(x,y),x.index=0,x.sibling=null,x}function i(x,y,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<y?(x.flags|=67108866,y):A):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function n(x){return t&&x.alternate===null&&(x.flags|=67108866),x}function s(x,y,A,R){return y===null||y.tag!==6?(y=gu(A,x.mode,R),y.return=x,y):(y=o(y,A),y.return=x,y)}function g(x,y,A,R){var tt=A.type;return tt===T?w(x,y,A.props.children,R,A.key):y!==null&&(y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ft&&hl(tt)===y.type)?(y=o(y,A.props),Ro(y,A),y.return=x,y):(y=Ri(A.type,A.key,A.props,null,x.mode,R),Ro(y,A),y.return=x,y)}function S(x,y,A,R){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=hu(A,x.mode,R),y.return=x,y):(y=o(y,A.children||[]),y.return=x,y)}function w(x,y,A,R,tt){return y===null||y.tag!==7?(y=fl(A,x.mode,R,tt),y.return=x,y):(y=o(y,A),y.return=x,y)}function V(x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=gu(""+y,x.mode,A),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return A=Ri(y.type,y.key,y.props,null,x.mode,A),Ro(A,y),A.return=x,A;case Y:return y=hu(y,x.mode,A),y.return=x,y;case ft:return y=hl(y),V(x,y,A)}if(Ut(y)||Ct(y))return y=fl(y,x.mode,A,null),y.return=x,y;if(typeof y.then=="function")return V(x,Hi(y),A);if(y.$$typeof===L)return V(x,Vi(x,y),A);Gi(x,y)}return null}function E(x,y,A,R){var tt=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return tt!==null?null:s(x,y,""+A,R);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Q:return A.key===tt?g(x,y,A,R):null;case Y:return A.key===tt?S(x,y,A,R):null;case ft:return A=hl(A),E(x,y,A,R)}if(Ut(A)||Ct(A))return tt!==null?null:w(x,y,A,R,null);if(typeof A.then=="function")return E(x,y,Hi(A),R);if(A.$$typeof===L)return E(x,y,Vi(x,A),R);Gi(x,A)}return null}function U(x,y,A,R,tt){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return x=x.get(A)||null,s(y,x,""+R,tt);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return x=x.get(R.key===null?A:R.key)||null,g(y,x,R,tt);case Y:return x=x.get(R.key===null?A:R.key)||null,S(y,x,R,tt);case ft:return R=hl(R),U(x,y,A,R,tt)}if(Ut(R)||Ct(R))return x=x.get(A)||null,w(y,x,R,tt,null);if(typeof R.then=="function")return U(x,y,A,Hi(R),tt);if(R.$$typeof===L)return U(x,y,A,Vi(y,R),tt);Gi(y,R)}return null}function K(x,y,A,R){for(var tt=null,_t=null,I=y,ut=y=0,dt=null;I!==null&&ut<A.length;ut++){I.index>ut?(dt=I,I=null):dt=I.sibling;var xt=E(x,I,A[ut],R);if(xt===null){I===null&&(I=dt);break}t&&I&&xt.alternate===null&&e(x,I),y=i(xt,y,ut),_t===null?tt=xt:_t.sibling=xt,_t=xt,I=dt}if(ut===A.length)return a(x,I),vt&&ha(x,ut),tt;if(I===null){for(;ut<A.length;ut++)I=V(x,A[ut],R),I!==null&&(y=i(I,y,ut),_t===null?tt=I:_t.sibling=I,_t=I);return vt&&ha(x,ut),tt}for(I=l(I);ut<A.length;ut++)dt=U(I,x,ut,A[ut],R),dt!==null&&(t&&dt.alternate!==null&&I.delete(dt.key===null?ut:dt.key),y=i(dt,y,ut),_t===null?tt=dt:_t.sibling=dt,_t=dt);return t&&I.forEach(function(el){return e(x,el)}),vt&&ha(x,ut),tt}function et(x,y,A,R){if(A==null)throw Error(r(151));for(var tt=null,_t=null,I=y,ut=y=0,dt=null,xt=A.next();I!==null&&!xt.done;ut++,xt=A.next()){I.index>ut?(dt=I,I=null):dt=I.sibling;var el=E(x,I,xt.value,R);if(el===null){I===null&&(I=dt);break}t&&I&&el.alternate===null&&e(x,I),y=i(el,y,ut),_t===null?tt=el:_t.sibling=el,_t=el,I=dt}if(xt.done)return a(x,I),vt&&ha(x,ut),tt;if(I===null){for(;!xt.done;ut++,xt=A.next())xt=V(x,xt.value,R),xt!==null&&(y=i(xt,y,ut),_t===null?tt=xt:_t.sibling=xt,_t=xt);return vt&&ha(x,ut),tt}for(I=l(I);!xt.done;ut++,xt=A.next())xt=U(I,x,ut,xt.value,R),xt!==null&&(t&&xt.alternate!==null&&I.delete(xt.key===null?ut:xt.key),y=i(xt,y,ut),_t===null?tt=xt:_t.sibling=xt,_t=xt);return t&&I.forEach(function(w0){return e(x,w0)}),vt&&ha(x,ut),tt}function Rt(x,y,A,R){if(typeof A=="object"&&A!==null&&A.type===T&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Q:t:{for(var tt=A.key;y!==null;){if(y.key===tt){if(tt=A.type,tt===T){if(y.tag===7){a(x,y.sibling),R=o(y,A.props.children),R.return=x,x=R;break t}}else if(y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ft&&hl(tt)===y.type){a(x,y.sibling),R=o(y,A.props),Ro(R,A),R.return=x,x=R;break t}a(x,y);break}else e(x,y);y=y.sibling}A.type===T?(R=fl(A.props.children,x.mode,R,A.key),R.return=x,x=R):(R=Ri(A.type,A.key,A.props,null,x.mode,R),Ro(R,A),R.return=x,x=R)}return n(x);case Y:t:{for(tt=A.key;y!==null;){if(y.key===tt)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){a(x,y.sibling),R=o(y,A.children||[]),R.return=x,x=R;break t}else{a(x,y);break}else e(x,y);y=y.sibling}R=hu(A,x.mode,R),R.return=x,x=R}return n(x);case ft:return A=hl(A),Rt(x,y,A,R)}if(Ut(A))return K(x,y,A,R);if(Ct(A)){if(tt=Ct(A),typeof tt!="function")throw Error(r(150));return A=tt.call(A),et(x,y,A,R)}if(typeof A.then=="function")return Rt(x,y,Hi(A),R);if(A.$$typeof===L)return Rt(x,y,Vi(x,A),R);Gi(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,y!==null&&y.tag===6?(a(x,y.sibling),R=o(y,A),R.return=x,x=R):(a(x,y),R=gu(A,x.mode,R),R.return=x,x=R),n(x)):a(x,y)}return function(x,y,A,R){try{wo=0;var tt=Rt(x,y,A,R);return Fl=null,tt}catch(I){if(I===Ll||I===Ni)throw I;var _t=Xe(29,I,null,x.mode);return _t.lanes=R,_t.return=x,_t}finally{}}}var yl=Ts(!0),Os=Ts(!1),Ha=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(At&2)!==0){var o=l.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),l.pending=e,e=wi(t),hs(t,null,a),e}return Mi(t,l,e,a),wi(t)}function To(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Cc(t,a)}}function wu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=e:i=i.next=e}else o=i=e;a={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Ru=!1;function Oo(){if(Ru){var t=ql;if(t!==null)throw t}}function Vo(t,e,a,l){Ru=!1;var o=t.updateQueue;Ha=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var g=s,S=g.next;g.next=null,n===null?i=S:n.next=S,n=g;var w=t.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==n&&(s===null?w.firstBaseUpdate=S:s.next=S,w.lastBaseUpdate=g))}if(i!==null){var V=o.baseState;n=0,w=S=g=null,s=i;do{var E=s.lane&-536870913,U=E!==s.lane;if(U?(mt&E)===E:(l&E)===E){E!==0&&E===jl&&(Ru=!0),w!==null&&(w=w.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var K=t,et=s;E=e;var Rt=a;switch(et.tag){case 1:if(K=et.payload,typeof K=="function"){V=K.call(Rt,V,E);break t}V=K;break t;case 3:K.flags=K.flags&-65537|128;case 0:if(K=et.payload,E=typeof K=="function"?K.call(Rt,V,E):K,E==null)break t;V=B({},V,E);break t;case 2:Ha=!0}}E=s.callback,E!==null&&(t.flags|=64,U&&(t.flags|=8192),U=o.callbacks,U===null?o.callbacks=[E]:U.push(E))}else U={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(S=w=U,g=V):w=w.next=U,n|=E;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;U=s,s=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);w===null&&(g=V),o.baseState=g,o.firstBaseUpdate=S,o.lastBaseUpdate=w,i===null&&(o.shared.lanes=0),La|=n,t.lanes=n,t.memoizedState=V}}function Vs(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Ds(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Vs(a[t],e)}var Kl=h(null),ki=h(0);function Ns(t,e){t=za,G(ki,t),G(Kl,e),za=t|e.baseLanes}function Tu(){G(ki,za),G(Kl,Kl.current)}function Ou(){za=ki.current,M(Kl),M(ki)}var je=h(null),ea=null;function Qa(t){var e=t.alternate;G(Lt,Lt.current&1),G(je,t),ea===null&&(e===null||Kl.current!==null||e.memoizedState!==null)&&(ea=t)}function Vu(t){G(Lt,Lt.current),G(je,t),ea===null&&(ea=t)}function Ys(t){t.tag===22?(G(Lt,Lt.current),G(je,t),ea===null&&(ea=t)):Xa()}function Xa(){G(Lt,Lt.current),G(je,je.current)}function qe(t){M(je),ea===t&&(ea=null),M(Lt)}var Lt=h(0);function Qi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kr(a)||Qr(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _a=0,nt=null,Mt=null,Wt=null,Xi=!1,Zl=!1,_l=!1,ji=0,Do=0,Jl=null,xg=0;function kt(){throw Error(r(321))}function Du(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Qe(t[a],e[a]))return!1;return!0}function Nu(t,e,a,l,o,i){return _a=i,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?bf:Iu,_l=!1,i=a(l,o),_l=!1,Zl&&(i=Gs(e,a,l,o)),Hs(t),i}function Hs(t){z.H=Ho;var e=Mt!==null&&Mt.next!==null;if(_a=0,Wt=Mt=nt=null,Xi=!1,Do=0,Jl=null,e)throw Error(r(300));t===null||It||(t=t.dependencies,t!==null&&Oi(t)&&(It=!0))}function Gs(t,e,a,l){nt=t;var o=0;do{if(Zl&&(Jl=null),Do=0,Zl=!1,25<=o)throw Error(r(301));if(o+=1,Wt=Mt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Af,i=e(a,l)}while(Zl);return i}function bg(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?No(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(nt.flags|=1024),e}function Yu(){var t=ji!==0;return ji=0,t}function Hu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Gu(t){if(Xi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Xi=!1}_a=0,Wt=Mt=nt=null,Zl=!1,Do=ji=0,Jl=null}function Ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?nt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Ft(){if(Mt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Wt===null?nt.memoizedState:Wt.next;if(e!==null)Wt=e,Mt=t;else{if(t===null)throw nt.alternate===null?Error(r(467)):Error(r(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Wt===null?nt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var e=Do;return Do+=1,Jl===null&&(Jl=[]),t=Ms(Jl,t,e),e=nt,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?bf:Iu),t}function Li(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===L)return he(t)}throw Error(r(438,String(t)))}function ku(t){var e=null,a=nt.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=nt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=qi(),nt.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=gt;return e.index++,a}function xa(t,e){return typeof e=="function"?e(t):e}function Fi(t){var e=Ft();return Qu(e,Mt,t)}function Qu(t,e,a){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var o=t.baseQueue,i=l.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}e.baseQueue=o=i,l.pending=null}if(i=t.baseState,o===null)t.memoizedState=i;else{e=o.next;var s=n=null,g=null,S=e,w=!1;do{var V=S.lane&-536870913;if(V!==S.lane?(mt&V)===V:(_a&V)===V){var E=S.revertLane;if(E===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),V===jl&&(w=!0);else if((_a&E)===E){S=S.next,E===jl&&(w=!0);continue}else V={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(s=g=V,n=i):g=g.next=V,nt.lanes|=E,La|=E;V=S.action,_l&&a(i,V),i=S.hasEagerState?S.eagerState:a(i,V)}else E={lane:V,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},g===null?(s=g=E,n=i):g=g.next=E,nt.lanes|=V,La|=V;S=S.next}while(S!==null&&S!==e);if(g===null?n=i:g.next=s,!Qe(i,t.memoizedState)&&(It=!0,w&&(a=ql,a!==null)))throw a;t.memoizedState=i,t.baseState=n,t.baseQueue=g,l.lastRenderedState=i}return o===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Xu(t){var e=Ft(),a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var l=a.dispatch,o=a.pending,i=e.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=t(i,n.action),n=n.next;while(n!==o);Qe(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function ks(t,e,a){var l=nt,o=Ft(),i=vt;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=e();var n=!Qe((Mt||o).memoizedState,a);if(n&&(o.memoizedState=a,It=!0),o=o.queue,Lu(js.bind(null,l,o,t),[t]),o.getSnapshot!==e||n||Wt!==null&&Wt.memoizedState.tag&1){if(l.flags|=2048,Wl(9,{destroy:void 0},Xs.bind(null,l,o,a,e),null),Tt===null)throw Error(r(349));i||(_a&127)!==0||Qs(l,e,a)}return a}function Qs(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=nt.updateQueue,e===null?(e=qi(),nt.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Xs(t,e,a,l){e.value=a,e.getSnapshot=l,qs(e)&&Ls(t)}function js(t,e,a){return a(function(){qs(e)&&Ls(t)})}function qs(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Qe(t,a)}catch{return!0}}function Ls(t){var e=sl(t,2);e!==null&&Ne(e,t,2)}function ju(t){var e=Ue();if(typeof t=="function"){var a=t;if(t=a(),_l){Ra(!0);try{a()}finally{Ra(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e}function Fs(t,e,a,l){return t.baseState=a,Qu(t,Mt,typeof l=="function"?l:xa)}function Ag(t,e,a,l,o){if(Ji(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){i.listeners.push(n)}};z.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Ks(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Ks(t,e){var a=e.action,l=e.payload,o=t.state;if(e.isTransition){var i=z.T,n={};z.T=n;try{var s=a(o,l),g=z.S;g!==null&&g(n,s),Zs(t,e,s)}catch(S){qu(t,e,S)}finally{i!==null&&n.types!==null&&(i.types=n.types),z.T=i}}else try{i=a(o,l),Zs(t,e,i)}catch(S){qu(t,e,S)}}function Zs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Js(t,e,l)},function(l){return qu(t,e,l)}):Js(t,e,a)}function Js(t,e,a){e.status="fulfilled",e.value=a,Ws(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Ks(t,a)))}function qu(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Ws(e),e=e.next;while(e!==l)}t.action=null}function Ws(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Is(t,e){return e}function Ps(t,e){if(vt){var a=Tt.formState;if(a!==null){t:{var l=nt;if(vt){if(Ot){e:{for(var o=Ot,i=ta;o.nodeType!==8;){if(!i){o=null;break e}if(o=aa(o.nextSibling),o===null){o=null;break e}}i=o.data,o=i==="F!"||i==="F"?o:null}if(o){Ot=aa(o.nextSibling),l=o.data==="F!";break t}}Na(l)}l=!1}l&&(e=a[0])}}return a=Ue(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:e},a.queue=l,a=yf.bind(null,nt,l),l.dispatch=a,l=ju(!1),i=Wu.bind(null,nt,!1,l.queue),l=Ue(),o={state:e,dispatch:null,action:t,pending:null},l.queue=o,a=Ag.bind(null,nt,o,i,a),o.dispatch=a,l.memoizedState=t,[e,a,!1]}function $s(t){var e=Ft();return tf(e,Mt,t)}function tf(t,e,a){if(e=Qu(t,e,Is)[0],t=Fi(xa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=No(e)}catch(n){throw n===Ll?Ni:n}else l=e;e=Ft();var o=e.queue,i=o.dispatch;return a!==e.memoizedState&&(nt.flags|=2048,Wl(9,{destroy:void 0},Sg.bind(null,o,a),null)),[l,i,t]}function Sg(t,e){t.action=e}function ef(t){var e=Ft(),a=Mt;if(a!==null)return tf(e,a,t);Ft(),e=e.memoizedState,a=Ft();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Wl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=nt.updateQueue,e===null&&(e=qi(),nt.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function af(){return Ft().memoizedState}function Ki(t,e,a,l){var o=Ue();nt.flags|=t,o.memoizedState=Wl(1|e,{destroy:void 0},a,l===void 0?null:l)}function Zi(t,e,a,l){var o=Ft();l=l===void 0?null:l;var i=o.memoizedState.inst;Mt!==null&&l!==null&&Du(l,Mt.memoizedState.deps)?o.memoizedState=Wl(e,i,a,l):(nt.flags|=t,o.memoizedState=Wl(1|e,i,a,l))}function lf(t,e){Ki(8390656,8,t,e)}function Lu(t,e){Zi(2048,8,t,e)}function Cg(t){nt.flags|=4;var e=nt.updateQueue;if(e===null)e=qi(),nt.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function of(t){var e=Ft().memoizedState;return Cg({ref:e,nextImpl:t}),function(){if((At&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function nf(t,e){return Zi(4,2,t,e)}function uf(t,e){return Zi(4,4,t,e)}function rf(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cf(t,e,a){a=a!=null?a.concat([t]):null,Zi(4,4,rf.bind(null,e,t),a)}function Fu(){}function sf(t,e){var a=Ft();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Du(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function ff(t,e){var a=Ft();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Du(e,l[1]))return l[0];if(l=t(),_l){Ra(!0);try{t()}finally{Ra(!1)}}return a.memoizedState=[l,e],l}function Ku(t,e,a){return a===void 0||(_a&1073741824)!==0&&(mt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=mm(),nt.lanes|=t,La|=t,a)}function mf(t,e,a,l){return Qe(a,e)?a:Kl.current!==null?(t=Ku(t,a,l),Qe(t,e)||(It=!0),t):(_a&42)===0||(_a&1073741824)!==0&&(mt&261930)===0?(It=!0,t.memoizedState=a):(t=mm(),nt.lanes|=t,La|=t,e)}function df(t,e,a,l,o){var i=j.p;j.p=i!==0&&8>i?i:8;var n=z.T,s={};z.T=s,Wu(t,!1,e,a);try{var g=o(),S=z.S;if(S!==null&&S(s,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=_g(g,l);Yo(t,e,w,Ke(t))}else Yo(t,e,l,Ke(t))}catch(V){Yo(t,e,{then:function(){},status:"rejected",reason:V},Ke())}finally{j.p=i,n!==null&&s.types!==null&&(n.types=s.types),z.T=n}}function Bg(){}function Zu(t,e,a,l){if(t.tag!==5)throw Error(r(476));var o=pf(t).queue;df(t,o,e,$,a===null?Bg:function(){return gf(t),a(l)})}function pf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function gf(t){var e=pf(t);e.next===null&&(e=t.alternate.memoizedState),Yo(t,e.next.queue,{},Ke())}function Ju(){return he(ti)}function hf(){return Ft().memoizedState}function vf(){return Ft().memoizedState}function Eg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ke();t=Ga(a);var l=ka(e,t,a);l!==null&&(Ne(l,e,a),To(l,e,a)),e={cache:Cu()},t.payload=e;return}e=e.return}}function zg(t,e,a){var l=Ke();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ji(t)?_f(e,a):(a=du(t,e,a,l),a!==null&&(Ne(a,t,l),xf(a,e,l)))}function yf(t,e,a){var l=Ke();Yo(t,e,a,l)}function Yo(t,e,a,l){var o={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ji(t))_f(e,o);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var n=e.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,Qe(s,n))return Mi(t,e,o,0),Tt===null&&Ui(),!1}catch{}finally{}if(a=du(t,e,o,l),a!==null)return Ne(a,t,l),xf(a,e,l),!0}return!1}function Wu(t,e,a,l){if(l={lane:2,revertLane:Ur(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ji(t)){if(e)throw Error(r(479))}else e=du(t,a,l,2),e!==null&&Ne(e,t,2)}function Ji(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function _f(t,e){Zl=Xi=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function xf(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Cc(t,a)}}var Ho={readContext:he,use:Li,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};Ho.useEffectEvent=kt;var bf={readContext:he,use:Li,useCallback:function(t,e){return Ue().memoizedState=[t,e===void 0?null:e],t},useContext:he,useEffect:lf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ki(4194308,4,rf.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ki(4194308,4,t,e)},useInsertionEffect:function(t,e){Ki(4,2,t,e)},useMemo:function(t,e){var a=Ue();e=e===void 0?null:e;var l=t();if(_l){Ra(!0);try{t()}finally{Ra(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Ue();if(a!==void 0){var o=a(e);if(_l){Ra(!0);try{a(e)}finally{Ra(!1)}}}else o=e;return l.memoizedState=l.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},l.queue=t,t=t.dispatch=zg.bind(null,nt,t),[l.memoizedState,t]},useRef:function(t){var e=Ue();return t={current:t},e.memoizedState=t},useState:function(t){t=ju(t);var e=t.queue,a=yf.bind(null,nt,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(t,e){var a=Ue();return Ku(a,t,e)},useTransition:function(){var t=ju(!1);return t=df.bind(null,nt,t.queue,!0,!1),Ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=nt,o=Ue();if(vt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=e(),Tt===null)throw Error(r(349));(mt&127)!==0||Qs(l,e,a)}o.memoizedState=a;var i={value:a,getSnapshot:e};return o.queue=i,lf(js.bind(null,l,i,t),[t]),l.flags|=2048,Wl(9,{destroy:void 0},Xs.bind(null,l,i,a,e),null),a},useId:function(){var t=Ue(),e=Tt.identifierPrefix;if(vt){var a=ca,l=ra;a=(l&~(1<<32-ke(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ji++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=xg++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Ju,useFormState:Ps,useActionState:Ps,useOptimistic:function(t){var e=Ue();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Wu.bind(null,nt,!0,a),a.dispatch=e,[t,e]},useMemoCache:ku,useCacheRefresh:function(){return Ue().memoizedState=Eg.bind(null,nt)},useEffectEvent:function(t){var e=Ue(),a={impl:t};return e.memoizedState=a,function(){if((At&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Iu={readContext:he,use:Li,useCallback:sf,useContext:he,useEffect:Lu,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:ff,useReducer:Fi,useRef:af,useState:function(){return Fi(xa)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=Ft();return mf(a,Mt.memoizedState,t,e)},useTransition:function(){var t=Fi(xa)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Ju,useFormState:$s,useActionState:$s,useOptimistic:function(t,e){var a=Ft();return Fs(a,Mt,t,e)},useMemoCache:ku,useCacheRefresh:vf};Iu.useEffectEvent=of;var Af={readContext:he,use:Li,useCallback:sf,useContext:he,useEffect:Lu,useImperativeHandle:cf,useInsertionEffect:nf,useLayoutEffect:uf,useMemo:ff,useReducer:Xu,useRef:af,useState:function(){return Xu(xa)},useDebugValue:Fu,useDeferredValue:function(t,e){var a=Ft();return Mt===null?Ku(a,t,e):mf(a,Mt.memoizedState,t,e)},useTransition:function(){var t=Xu(xa)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:ks,useId:hf,useHostTransitionStatus:Ju,useFormState:ef,useActionState:ef,useOptimistic:function(t,e){var a=Ft();return Mt!==null?Fs(a,Mt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:vf};Af.useEffectEvent=of;function Pu(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:B({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $u={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Ke(),o=Ga(l);o.payload=e,a!=null&&(o.callback=a),e=ka(t,o,l),e!==null&&(Ne(e,t,l),To(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Ke(),o=Ga(l);o.tag=1,o.payload=e,a!=null&&(o.callback=a),e=ka(t,o,l),e!==null&&(Ne(e,t,l),To(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ke(),l=Ga(a);l.tag=2,e!=null&&(l.callback=e),e=ka(t,l,a),e!==null&&(Ne(e,t,a),To(e,t,a))}};function Sf(t,e,a,l,o,i,n){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,n):e.prototype&&e.prototype.isPureReactComponent?!Co(a,l)||!Co(o,i):!0}function Cf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function xl(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=B({},a));for(var o in t)a[o]===void 0&&(a[o]=t[o])}return a}function Bf(t){zi(t)}function Ef(t){console.error(t)}function zf(t){zi(t)}function Wi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Uf(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function tr(t,e,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Wi(t,e)},a}function Mf(t){return t=Ga(t),t.tag=3,t}function wf(t,e,a,l){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var i=l.value;t.payload=function(){return o(i)},t.callback=function(){Uf(e,a,l)}}var n=a.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(t.callback=function(){Uf(e,a,l),typeof o!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Ug(t,e,a,l,o){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&Xl(e,a,o,!0),a=je.current,a!==null){switch(a.tag){case 31:case 13:return ea===null?cn():a.alternate===null&&Qt===0&&(Qt=3),a.flags&=-257,a.flags|=65536,a.lanes=o,l===Yi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Br(t,l,o)),!1;case 22:return a.flags|=65536,l===Yi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Br(t,l,o)),!1}throw Error(r(435,a.tag))}return Br(t,l,o),cn(),!1}if(vt)return e=je.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,l!==_u&&(t=Error(r(422),{cause:l}),zo(Ie(t,a)))):(l!==_u&&(e=Error(r(423),{cause:l}),zo(Ie(e,a))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,l=Ie(l,a),o=tr(t.stateNode,l,o),wu(t,o),Qt!==4&&(Qt=2)),!1;var i=Error(r(520),{cause:l});if(i=Ie(i,a),Fo===null?Fo=[i]:Fo.push(i),Qt!==4&&(Qt=2),e===null)return!0;l=Ie(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=o&-o,a.lanes|=t,t=tr(a.stateNode,l,t),wu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Mf(o),wf(o,t,a,l),wu(a,o),!1}a=a.return}while(a!==null);return!1}var er=Error(r(461)),It=!1;function ve(t,e,a,l){e.child=t===null?Os(e,null,a,l):yl(e,t.child,a,l)}function Rf(t,e,a,l,o){a=a.render;var i=e.ref;if("ref"in l){var n={};for(var s in l)s!=="ref"&&(n[s]=l[s])}else n=l;return pl(e),l=Nu(t,e,a,n,i,o),s=Yu(),t!==null&&!It?(Hu(t,e,o),ba(t,e,o)):(vt&&s&&vu(e),e.flags|=1,ve(t,e,l,o),e.child)}function Tf(t,e,a,l,o){if(t===null){var i=a.type;return typeof i=="function"&&!pu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Of(t,e,i,l,o)):(t=Ri(a.type,null,l,e,e.mode,o),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!cr(t,o)){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(n,l)&&t.ref===e.ref)return ba(t,e,o)}return e.flags|=1,t=ga(i,l),t.ref=e.ref,t.return=e,e.child=t}function Of(t,e,a,l,o){if(t!==null){var i=t.memoizedProps;if(Co(i,l)&&t.ref===e.ref)if(It=!1,e.pendingProps=l=i,cr(t,o))(t.flags&131072)!==0&&(It=!0);else return e.lanes=t.lanes,ba(t,e,o)}return ar(t,e,a,l,o)}function Vf(t,e,a,l){var o=l.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(l=e.child=t.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~i}else l=0,e.child=null;return Df(t,e,i,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Di(e,i!==null?i.cachePool:null),i!==null?Ns(e,i):Tu(),Ys(e);else return l=e.lanes=536870912,Df(t,e,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Di(e,i.cachePool),Ns(e,i),Xa(),e.memoizedState=null):(t!==null&&Di(e,null),Tu(),Xa());return ve(t,e,o,a),e.child}function Go(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Df(t,e,a,l,o){var i=Eu();return i=i===null?null:{parent:Jt._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Di(e,null),Tu(),Ys(e),t!==null&&Xl(t,e,l,!0),e.childLanes=o,null}function Ii(t,e){return e=$i({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Nf(t,e,a){return yl(e,t.child,null,a),t=Ii(e,e.pendingProps),t.flags|=2,qe(e),e.memoizedState=null,t}function Mg(t,e,a){var l=e.pendingProps,o=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(vt){if(l.mode==="hidden")return t=Ii(e,l),e.lanes=536870912,Go(null,t);if(Vu(e),(t=Ot)?(t=Zm(t,ta),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ra,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=ys(t),a.return=e,e.child=a,ge=e,Ot=null)):t=null,t===null)throw Na(e);return e.lanes=536870912,null}return Ii(e,l)}var i=t.memoizedState;if(i!==null){var n=i.dehydrated;if(Vu(e),o)if(e.flags&256)e.flags&=-257,e=Nf(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(It||Xl(t,e,a,!1),o=(a&t.childLanes)!==0,It||o){if(l=Tt,l!==null&&(n=Bc(l,a),n!==0&&n!==i.retryLane))throw i.retryLane=n,sl(t,n),Ne(l,t,n),er;cn(),e=Nf(t,e,a)}else t=i.treeContext,Ot=aa(n.nextSibling),ge=e,vt=!0,Da=null,ta=!1,t!==null&&bs(e,t),e=Ii(e,l),e.flags|=4096;return e}return t=ga(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Pi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function ar(t,e,a,l,o){return pl(e),a=Nu(t,e,a,l,void 0,o),l=Yu(),t!==null&&!It?(Hu(t,e,o),ba(t,e,o)):(vt&&l&&vu(e),e.flags|=1,ve(t,e,a,o),e.child)}function Yf(t,e,a,l,o,i){return pl(e),e.updateQueue=null,a=Gs(e,l,a,o),Hs(t),l=Yu(),t!==null&&!It?(Hu(t,e,i),ba(t,e,i)):(vt&&l&&vu(e),e.flags|=1,ve(t,e,a,i),e.child)}function Hf(t,e,a,l,o){if(pl(e),e.stateNode===null){var i=Hl,n=a.contextType;typeof n=="object"&&n!==null&&(i=he(n)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$u,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},Uu(e),n=a.contextType,i.context=typeof n=="object"&&n!==null?he(n):Hl,i.state=e.memoizedState,n=a.getDerivedStateFromProps,typeof n=="function"&&(Pu(e,a,n,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&$u.enqueueReplaceState(i,i.state,null),Vo(e,l,i,o),Oo(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,g=xl(a,s);i.props=g;var S=i.context,w=a.contextType;n=Hl,typeof w=="object"&&w!==null&&(n=he(w));var V=a.getDerivedStateFromProps;w=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||S!==n)&&Cf(e,i,l,n),Ha=!1;var E=e.memoizedState;i.state=E,Vo(e,l,i,o),Oo(),S=e.memoizedState,s||E!==S||Ha?(typeof V=="function"&&(Pu(e,a,V,l),S=e.memoizedState),(g=Ha||Sf(e,a,g,l,E,S,n))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=S),i.props=l,i.state=S,i.context=n,l=g):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Mu(t,e),n=e.memoizedProps,w=xl(a,n),i.props=w,V=e.pendingProps,E=i.context,S=a.contextType,g=Hl,typeof S=="object"&&S!==null&&(g=he(S)),s=a.getDerivedStateFromProps,(S=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(n!==V||E!==g)&&Cf(e,i,l,g),Ha=!1,E=e.memoizedState,i.state=E,Vo(e,l,i,o),Oo();var U=e.memoizedState;n!==V||E!==U||Ha||t!==null&&t.dependencies!==null&&Oi(t.dependencies)?(typeof s=="function"&&(Pu(e,a,s,l),U=e.memoizedState),(w=Ha||Sf(e,a,w,l,E,U,g)||t!==null&&t.dependencies!==null&&Oi(t.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,U,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,U,g)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||n===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||n===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=U),i.props=l,i.state=U,i.context=g,l=w):(typeof i.componentDidUpdate!="function"||n===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||n===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Pi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=yl(e,t.child,null,o),e.child=yl(e,null,a,o)):ve(t,e,a,o),e.memoizedState=i.state,t=e.child):t=ba(t,e,o),t}function Gf(t,e,a,l){return ml(),e.flags|=256,ve(t,e,a,l),e.child}var lr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function or(t){return{baseLanes:t,cachePool:zs()}}function ir(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Fe),t}function kf(t,e,a){var l=e.pendingProps,o=!1,i=(e.flags&128)!==0,n;if((n=i)||(n=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),n&&(o=!0,e.flags&=-129),n=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(o?Qa(e):Xa(),(t=Ot)?(t=Zm(t,ta),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ra,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},a=ys(t),a.return=e,e.child=a,ge=e,Ot=null)):t=null,t===null)throw Na(e);return Qr(t)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,o?(Xa(),o=e.mode,s=$i({mode:"hidden",children:s},o),l=fl(l,o,a,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=or(a),l.childLanes=ir(t,n,a),e.memoizedState=lr,Go(null,l)):(Qa(e),nr(e,s))}var g=t.memoizedState;if(g!==null&&(s=g.dehydrated,s!==null)){if(i)e.flags&256?(Qa(e),e.flags&=-257,e=ur(t,e,a)):e.memoizedState!==null?(Xa(),e.child=t.child,e.flags|=128,e=null):(Xa(),s=l.fallback,o=e.mode,l=$i({mode:"visible",children:l.children},o),s=fl(s,o,a,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,yl(e,t.child,null,a),l=e.child,l.memoizedState=or(a),l.childLanes=ir(t,n,a),e.memoizedState=lr,e=Go(null,l));else if(Qa(e),Qr(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var S=n.dgst;n=S,l=Error(r(419)),l.stack="",l.digest=n,zo({value:l,source:null,stack:null}),e=ur(t,e,a)}else if(It||Xl(t,e,a,!1),n=(a&t.childLanes)!==0,It||n){if(n=Tt,n!==null&&(l=Bc(n,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,sl(t,l),Ne(n,t,l),er;kr(s)||cn(),e=ur(t,e,a)}else kr(s)?(e.flags|=192,e.child=t.child,e=null):(t=g.treeContext,Ot=aa(s.nextSibling),ge=e,vt=!0,Da=null,ta=!1,t!==null&&bs(e,t),e=nr(e,l.children),e.flags|=4096);return e}return o?(Xa(),s=l.fallback,o=e.mode,g=t.child,S=g.sibling,l=ga(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,S!==null?s=ga(S,s):(s=fl(s,o,a,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,Go(null,l),l=e.child,s=t.child.memoizedState,s===null?s=or(a):(o=s.cachePool,o!==null?(g=Jt._currentValue,o=o.parent!==g?{parent:g,pool:g}:o):o=zs(),s={baseLanes:s.baseLanes|a,cachePool:o}),l.memoizedState=s,l.childLanes=ir(t,n,a),e.memoizedState=lr,Go(t.child,l)):(Qa(e),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=a,e.memoizedState=null,a)}function nr(t,e){return e=$i({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function $i(t,e){return t=Xe(22,t,null,e),t.lanes=0,t}function ur(t,e,a){return yl(e,t.child,null,a),t=nr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Au(t.return,e,a)}function rr(t,e,a,l,o,i){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:o,treeForkCount:i}:(n.isBackwards=e,n.rendering=null,n.renderingStartTime=0,n.last=l,n.tail=a,n.tailMode=o,n.treeForkCount=i)}function Xf(t,e,a){var l=e.pendingProps,o=l.revealOrder,i=l.tail;l=l.children;var n=Lt.current,s=(n&2)!==0;if(s?(n=n&1|2,e.flags|=128):n&=1,G(Lt,n),ve(t,e,l,a),l=vt?Eo:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qf(t,a,e);else if(t.tag===19)Qf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(a=e.child,o=null;a!==null;)t=a.alternate,t!==null&&Qi(t)===null&&(o=a),a=a.sibling;a=o,a===null?(o=e.child,e.child=null):(o=a.sibling,a.sibling=null),rr(e,!1,o,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=e.child,e.child=null;o!==null;){if(t=o.alternate,t!==null&&Qi(t)===null){e.child=o;break}t=o.sibling,o.sibling=a,a=o,o=t}rr(e,!0,a,null,i,l);break;case"together":rr(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function ba(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),La|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Xl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,a=ga(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function cr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Oi(t)))}function wg(t,e,a){switch(e.tag){case 3:ze(e,e.stateNode.containerInfo),Ya(e,Jt,t.memoizedState.cache),ml();break;case 27:case 5:so(e);break;case 4:ze(e,e.stateNode.containerInfo);break;case 10:Ya(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Vu(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(e),e.flags|=128,null):(a&e.child.childLanes)!==0?kf(t,e,a):(Qa(e),t=ba(t,e,a),t!==null?t.sibling:null);Qa(e);break;case 19:var o=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(Xl(t,e,a,!1),l=(a&e.childLanes)!==0),o){if(l)return Xf(t,e,a);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(Lt,Lt.current),l)break;return null;case 22:return e.lanes=0,Vf(t,e,a,e.pendingProps);case 24:Ya(e,Jt,t.memoizedState.cache)}return ba(t,e,a)}function jf(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)It=!0;else{if(!cr(t,a)&&(e.flags&128)===0)return It=!1,wg(t,e,a);It=(t.flags&131072)!==0}else It=!1,vt&&(e.flags&1048576)!==0&&xs(e,Eo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=hl(e.elementType),e.type=t,typeof t=="function")pu(t)?(l=xl(t,l),e.tag=1,e=Hf(null,e,t,l,a)):(e.tag=0,e=ar(null,e,t,l,a));else{if(t!=null){var o=t.$$typeof;if(o===H){e.tag=11,e=Rf(null,e,t,l,a);break t}else if(o===W){e.tag=14,e=Tf(null,e,t,l,a);break t}}throw e=Nt(t)||t,Error(r(306,e,""))}}return e;case 0:return ar(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,o=xl(l,e.pendingProps),Hf(t,e,l,o,a);case 3:t:{if(ze(e,e.stateNode.containerInfo),t===null)throw Error(r(387));l=e.pendingProps;var i=e.memoizedState;o=i.element,Mu(t,e),Vo(e,l,null,a);var n=e.memoizedState;if(l=n.cache,Ya(e,Jt,l),l!==i.cache&&Su(e,[Jt],a,!0),Oo(),l=n.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:n.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Gf(t,e,l,a);break t}else if(l!==o){o=Ie(Error(r(424)),e),zo(o),e=Gf(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=aa(t.firstChild),ge=e,vt=!0,Da=null,ta=!0,a=Os(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ml(),l===o){e=ba(t,e,a);break t}ve(t,e,l,a)}e=e.child}return e;case 26:return Pi(t,e),t===null?(a=td(e.type,null,e.pendingProps,null))?e.memoizedState=a:vt||(a=e.type,t=e.pendingProps,l=hn(rt.current).createElement(a),l[pe]=e,l[we]=t,ye(l,a,t),ue(l),e.stateNode=l):e.memoizedState=td(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return so(e),t===null&&vt&&(l=e.stateNode=Im(e.type,e.pendingProps,rt.current),ge=e,ta=!0,o=Ot,Wa(e.type)?(Xr=o,Ot=aa(l.firstChild)):Ot=o),ve(t,e,e.pendingProps.children,a),Pi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((o=l=Ot)&&(l=n0(l,e.type,e.pendingProps,ta),l!==null?(e.stateNode=l,ge=e,Ot=aa(l.firstChild),ta=!1,o=!0):o=!1),o||Na(e)),so(e),o=e.type,i=e.pendingProps,n=t!==null?t.memoizedProps:null,l=i.children,Yr(o,i)?l=null:n!==null&&Yr(o,n)&&(e.flags|=32),e.memoizedState!==null&&(o=Nu(t,e,bg,null,null,a),ti._currentValue=o),Pi(t,e),ve(t,e,l,a),e.child;case 6:return t===null&&vt&&((t=a=Ot)&&(a=u0(a,e.pendingProps,ta),a!==null?(e.stateNode=a,ge=e,Ot=null,t=!0):t=!1),t||Na(e)),null;case 13:return kf(t,e,a);case 4:return ze(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=yl(e,null,l,a):ve(t,e,l,a),e.child;case 11:return Rf(t,e,e.type,e.pendingProps,a);case 7:return ve(t,e,e.pendingProps,a),e.child;case 8:return ve(t,e,e.pendingProps.children,a),e.child;case 12:return ve(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ya(e,e.type,l.value),ve(t,e,l.children,a),e.child;case 9:return o=e.type._context,l=e.pendingProps.children,pl(e),o=he(o),l=l(o),e.flags|=1,ve(t,e,l,a),e.child;case 14:return Tf(t,e,e.type,e.pendingProps,a);case 15:return Of(t,e,e.type,e.pendingProps,a);case 19:return Xf(t,e,a);case 31:return Mg(t,e,a);case 22:return Vf(t,e,a,e.pendingProps);case 24:return pl(e),l=he(Jt),t===null?(o=Eu(),o===null&&(o=Tt,i=Cu(),o.pooledCache=i,i.refCount++,i!==null&&(o.pooledCacheLanes|=a),o=i),e.memoizedState={parent:l,cache:o},Uu(e),Ya(e,Jt,o)):((t.lanes&a)!==0&&(Mu(t,e),Vo(e,null,null,a),Oo()),o=t.memoizedState,i=e.memoizedState,o.parent!==l?(o={parent:l,cache:l},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Ya(e,Jt,l)):(l=i.cache,Ya(e,Jt,l),l!==o.cache&&Su(e,[Jt],a,!0))),ve(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function Aa(t){t.flags|=4}function sr(t,e,a,l,o){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if(hm())t.flags|=8192;else throw vl=Yi,zu}else t.flags&=-16777217}function qf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!id(e))if(hm())t.flags|=8192;else throw vl=Yi,zu}function tn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ac():536870912,t.lanes|=e,to|=e)}function ko(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var o=t.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)a|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Rg(t,e,a){var l=e.pendingProps;switch(yu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return Vt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ya(Jt),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ql(e)?Aa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xu())),Vt(e),null;case 26:var o=e.type,i=e.memoizedState;return t===null?(Aa(e),i!==null?(Vt(e),qf(e,i)):(Vt(e),sr(e,o,null,l,a))):i?i!==t.memoizedState?(Aa(e),Vt(e),qf(e,i)):(Vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&Aa(e),Vt(e),sr(e,o,t,l,a)),null;case 27:if(fi(e),a=rt.current,o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return Vt(e),null}t=J.current,Ql(e)?As(e):(t=Im(o,l,a),e.stateNode=t,Aa(e))}return Vt(e),null;case 5:if(fi(e),o=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(!l){if(e.stateNode===null)throw Error(r(166));return Vt(e),null}if(i=J.current,Ql(e))As(e);else{var n=hn(rt.current);switch(i){case 1:i=n.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=n.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=n.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=n.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=n.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?n.createElement(o,{is:l.is}):n.createElement(o)}}i[pe]=e,i[we]=l;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)i.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=i;t:switch(ye(i,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Aa(e)}}return Vt(e),sr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Aa(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(r(166));if(t=rt.current,Ql(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,o=ge,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}t[pe]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||km(t.nodeValue,a)),t||Na(e,!0)}else t=hn(t).createTextNode(l),t[pe]=e,e.stateNode=t}return Vt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Ql(e),a!==null){if(t===null){if(!l)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[pe]=e}else ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),t=!1}else a=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(qe(e),e):(qe(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Vt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Ql(e),l!==null&&l.dehydrated!==null){if(t===null){if(!o)throw Error(r(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[pe]=e}else ml(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else o=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(qe(e),e):(qe(e),null)}return qe(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==o&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),tn(e,e.updateQueue),Vt(e),null);case 4:return qt(),t===null&&Tr(e.stateNode.containerInfo),Vt(e),null;case 10:return ya(e.type),Vt(e),null;case 19:if(M(Lt),l=e.memoizedState,l===null)return Vt(e),null;if(o=(e.flags&128)!==0,i=l.rendering,i===null)if(o)ko(l,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Qi(t),i!==null){for(e.flags|=128,ko(l,!1),t=i.updateQueue,e.updateQueue=t,tn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)vs(a,t),a=a.sibling;return G(Lt,Lt.current&1|2),vt&&ha(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&He()>nn&&(e.flags|=128,o=!0,ko(l,!1),e.lanes=4194304)}else{if(!o)if(t=Qi(i),t!==null){if(e.flags|=128,o=!0,t=t.updateQueue,e.updateQueue=t,tn(e,t),ko(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!vt)return Vt(e),null}else 2*He()-l.renderingStartTime>nn&&a!==536870912&&(e.flags|=128,o=!0,ko(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(t=l.last,t!==null?t.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=He(),t.sibling=null,a=Lt.current,G(Lt,o?a&1|2:a&1),vt&&ha(e,l.treeForkCount),t):(Vt(e),null);case 22:case 23:return qe(e),Ou(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),a=e.updateQueue,a!==null&&tn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&M(gl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ya(Jt),Vt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function Tg(t,e){switch(yu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ya(Jt),qt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fi(e),null;case 31:if(e.memoizedState!==null){if(qe(e),e.alternate===null)throw Error(r(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(qe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));ml()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return M(Lt),null;case 4:return qt(),null;case 10:return ya(e.type),null;case 22:case 23:return qe(e),Ou(),t!==null&&M(gl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ya(Jt),null;case 25:return null;default:return null}}function Lf(t,e){switch(yu(e),e.tag){case 3:ya(Jt),qt();break;case 26:case 27:case 5:fi(e);break;case 4:qt();break;case 31:e.memoizedState!==null&&qe(e);break;case 13:qe(e);break;case 19:M(Lt);break;case 10:ya(e.type);break;case 22:case 23:qe(e),Ou(),t!==null&&M(gl);break;case 24:ya(Jt)}}function Qo(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var o=l.next;a=o;do{if((a.tag&t)===t){l=void 0;var i=a.create,n=a.inst;l=i(),n.destroy=l}a=a.next}while(a!==o)}}catch(s){zt(e,e.return,s)}}function ja(t,e,a){try{var l=e.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var i=o.next;l=i;do{if((l.tag&t)===t){var n=l.inst,s=n.destroy;if(s!==void 0){n.destroy=void 0,o=e;var g=a,S=s;try{S()}catch(w){zt(o,g,w)}}}l=l.next}while(l!==i)}}catch(w){zt(e,e.return,w)}}function Ff(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Ds(e,a)}catch(l){zt(t,t.return,l)}}}function Kf(t,e,a){a.props=xl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){zt(t,e,l)}}function Xo(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(o){zt(t,e,o)}}function sa(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(o){zt(t,e,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){zt(t,e,o)}else a.current=null}function Zf(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(o){zt(t,t.return,o)}}function fr(t,e,a){try{var l=t.stateNode;t0(l,t.type,a,e),l[we]=e}catch(o){zt(t,t.return,o)}}function Jf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function mr(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dr(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=da));else if(l!==4&&(l===27&&Wa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(dr(t,e,a),t=t.sibling;t!==null;)dr(t,e,a),t=t.sibling}function en(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(en(t,e,a),t=t.sibling;t!==null;)en(t,e,a),t=t.sibling}function Wf(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);ye(e,l,a),e[pe]=t,e[we]=a}catch(i){zt(t,t.return,i)}}var Sa=!1,Pt=!1,pr=!1,If=typeof WeakSet=="function"?WeakSet:Set,re=null;function Og(t,e){if(t=t.containerInfo,Dr=Sn,t=rs(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var o=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var n=0,s=-1,g=-1,S=0,w=0,V=t,E=null;e:for(;;){for(var U;V!==a||o!==0&&V.nodeType!==3||(s=n+o),V!==i||l!==0&&V.nodeType!==3||(g=n+l),V.nodeType===3&&(n+=V.nodeValue.length),(U=V.firstChild)!==null;)E=V,V=U;for(;;){if(V===t)break e;if(E===a&&++S===o&&(s=n),E===i&&++w===l&&(g=n),(U=V.nextSibling)!==null)break;V=E,E=V.parentNode}V=U}a=s===-1||g===-1?null:{start:s,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nr={focusedElem:t,selectionRange:a},Sn=!1,re=e;re!==null;)if(e=re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,re=t;else for(;re!==null;){switch(e=re,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)o=t[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,o=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var K=xl(a.type,o);t=l.getSnapshotBeforeUpdate(K,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(et){zt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Gr(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,re=t;break}re=e.return}}function Pf(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),l&4&&Qo(5,a);break;case 1:if(Ba(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(n){zt(a,a.return,n)}else{var o=xl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(o,e,t.__reactInternalSnapshotBeforeUpdate)}catch(n){zt(a,a.return,n)}}l&64&&Ff(a),l&512&&Xo(a,a.return);break;case 3:if(Ba(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Ds(t,e)}catch(n){zt(a,a.return,n)}}break;case 27:e===null&&l&4&&Wf(a);case 26:case 5:Ba(t,a),e===null&&l&4&&Zf(a),l&512&&Xo(a,a.return);break;case 12:Ba(t,a);break;case 31:Ba(t,a),l&4&&em(t,a);break;case 13:Ba(t,a),l&4&&am(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xg.bind(null,a),r0(t,a))));break;case 22:if(l=a.memoizedState!==null||Sa,!l){e=e!==null&&e.memoizedState!==null||Pt,o=Sa;var i=Pt;Sa=l,(Pt=e)&&!i?Ea(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),Sa=o,Pt=i}break;case 30:break;default:Ba(t,a)}}function $f(t){var e=t.alternate;e!==null&&(t.alternate=null,$f(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&qn(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,Te=!1;function Ca(t,e,a){for(a=a.child;a!==null;)tm(t,e,a),a=a.sibling}function tm(t,e,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(fo,a)}catch{}switch(a.tag){case 26:Pt||sa(a,e),Ca(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Pt||sa(a,e);var l=Dt,o=Te;Wa(a.type)&&(Dt=a.stateNode,Te=!1),Ca(t,e,a),Io(a.stateNode),Dt=l,Te=o;break;case 5:Pt||sa(a,e);case 6:if(l=Dt,o=Te,Dt=null,Ca(t,e,a),Dt=l,Te=o,Dt!==null)if(Te)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(a.stateNode)}catch(i){zt(a,e,i)}else try{Dt.removeChild(a.stateNode)}catch(i){zt(a,e,i)}break;case 18:Dt!==null&&(Te?(t=Dt,Fm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ro(t)):Fm(Dt,a.stateNode));break;case 4:l=Dt,o=Te,Dt=a.stateNode.containerInfo,Te=!0,Ca(t,e,a),Dt=l,Te=o;break;case 0:case 11:case 14:case 15:ja(2,a,e),Pt||ja(4,a,e),Ca(t,e,a);break;case 1:Pt||(sa(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Kf(a,e,l)),Ca(t,e,a);break;case 21:Ca(t,e,a);break;case 22:Pt=(l=Pt)||a.memoizedState!==null,Ca(t,e,a),Pt=l;break;default:Ca(t,e,a)}}function em(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ro(t)}catch(a){zt(e,e.return,a)}}}function am(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ro(t)}catch(a){zt(e,e.return,a)}}function Vg(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new If),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new If),e;default:throw Error(r(435,t.tag))}}function an(t,e){var a=Vg(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var o=jg.bind(null,t,l);l.then(o,o)}})}function Oe(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var o=a[l],i=t,n=e,s=n;t:for(;s!==null;){switch(s.tag){case 27:if(Wa(s.type)){Dt=s.stateNode,Te=!1;break t}break;case 5:Dt=s.stateNode,Te=!1;break t;case 3:case 4:Dt=s.stateNode.containerInfo,Te=!0;break t}s=s.return}if(Dt===null)throw Error(r(160));tm(i,n,o),Dt=null,Te=!1,i=o.alternate,i!==null&&(i.return=null),o.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)lm(e,t),e=e.sibling}var ia=null;function lm(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oe(e,t),Ve(t),l&4&&(ja(3,t,t.return),Qo(3,t),ja(5,t,t.return));break;case 1:Oe(e,t),Ve(t),l&512&&(Pt||a===null||sa(a,a.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var o=ia;if(Oe(e,t),Ve(t),l&512&&(Pt||a===null||sa(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,o=o.ownerDocument||o;e:switch(l){case"title":i=o.getElementsByTagName("title")[0],(!i||i[go]||i[pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=o.createElement(l),o.head.insertBefore(i,o.querySelector("head > title"))),ye(i,l,a),i[pe]=t,ue(i),l=i;break t;case"link":var n=ld("link","href",o).get(l+(a.href||""));if(n){for(var s=0;s<n.length;s++)if(i=n[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){n.splice(s,1);break e}}i=o.createElement(l),ye(i,l,a),o.head.appendChild(i);break;case"meta":if(n=ld("meta","content",o).get(l+(a.content||""))){for(s=0;s<n.length;s++)if(i=n[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){n.splice(s,1);break e}}i=o.createElement(l),ye(i,l,a),o.head.appendChild(i);break;default:throw Error(r(468,l))}i[pe]=t,ue(i),l=i}t.stateNode=l}else od(o,t.type,t.stateNode);else t.stateNode=ad(o,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?od(o,t.type,t.stateNode):ad(o,l,t.memoizedProps)):l===null&&t.stateNode!==null&&fr(t,t.memoizedProps,a.memoizedProps)}break;case 27:Oe(e,t),Ve(t),l&512&&(Pt||a===null||sa(a,a.return)),a!==null&&l&4&&fr(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Oe(e,t),Ve(t),l&512&&(Pt||a===null||sa(a,a.return)),t.flags&32){o=t.stateNode;try{Rl(o,"")}catch(K){zt(t,t.return,K)}}l&4&&t.stateNode!=null&&(o=t.memoizedProps,fr(t,o,a!==null?a.memoizedProps:o)),l&1024&&(pr=!0);break;case 6:if(Oe(e,t),Ve(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(K){zt(t,t.return,K)}}break;case 3:if(_n=null,o=ia,ia=vn(e.containerInfo),Oe(e,t),ia=o,Ve(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(K){zt(t,t.return,K)}pr&&(pr=!1,om(t));break;case 4:l=ia,ia=vn(t.stateNode.containerInfo),Oe(e,t),Ve(t),ia=l;break;case 12:Oe(e,t),Ve(t);break;case 31:Oe(e,t),Ve(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,an(t,l)));break;case 13:Oe(e,t),Ve(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(on=He()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,an(t,l)));break;case 22:o=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,S=Sa,w=Pt;if(Sa=S||o,Pt=w||g,Oe(e,t),Pt=w,Sa=S,Ve(t),l&8192)t:for(e=t.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(a===null||g||Sa||Pt||bl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){g=a=e;try{if(i=g.stateNode,o)n=i.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{s=g.stateNode;var V=g.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null;s.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(K){zt(g,g.return,K)}}}else if(e.tag===6){if(a===null){g=e;try{g.stateNode.nodeValue=o?"":g.memoizedProps}catch(K){zt(g,g.return,K)}}}else if(e.tag===18){if(a===null){g=e;try{var U=g.stateNode;o?Km(U,!0):Km(g.stateNode,!1)}catch(K){zt(g,g.return,K)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,an(t,a))));break;case 19:Oe(e,t),Ve(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,an(t,l)));break;case 30:break;case 21:break;default:Oe(e,t),Ve(t)}}function Ve(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Jf(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var o=a.stateNode,i=mr(t);en(t,i,o);break;case 5:var n=a.stateNode;a.flags&32&&(Rl(n,""),a.flags&=-33);var s=mr(t);en(t,s,n);break;case 3:case 4:var g=a.stateNode.containerInfo,S=mr(t);dr(t,S,g);break;default:throw Error(r(161))}}catch(w){zt(t,t.return,w)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function om(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;om(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ba(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pf(t,e.alternate,e),e=e.sibling}function bl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ja(4,e,e.return),bl(e);break;case 1:sa(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Kf(e,e.return,a),bl(e);break;case 27:Io(e.stateNode);case 26:case 5:sa(e,e.return),bl(e);break;case 22:e.memoizedState===null&&bl(e);break;case 30:bl(e);break;default:bl(e)}t=t.sibling}}function Ea(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,o=t,i=e,n=i.flags;switch(i.tag){case 0:case 11:case 15:Ea(o,i,a),Qo(4,i);break;case 1:if(Ea(o,i,a),l=i,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(S){zt(l,l.return,S)}if(l=i,o=l.updateQueue,o!==null){var s=l.stateNode;try{var g=o.shared.hiddenCallbacks;if(g!==null)for(o.shared.hiddenCallbacks=null,o=0;o<g.length;o++)Vs(g[o],s)}catch(S){zt(l,l.return,S)}}a&&n&64&&Ff(i),Xo(i,i.return);break;case 27:Wf(i);case 26:case 5:Ea(o,i,a),a&&l===null&&n&4&&Zf(i),Xo(i,i.return);break;case 12:Ea(o,i,a);break;case 31:Ea(o,i,a),a&&n&4&&em(o,i);break;case 13:Ea(o,i,a),a&&n&4&&am(o,i);break;case 22:i.memoizedState===null&&Ea(o,i,a),Xo(i,i.return);break;case 30:break;default:Ea(o,i,a)}e=e.sibling}}function gr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function hr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t))}function na(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)im(t,e,a,l),e=e.sibling}function im(t,e,a,l){var o=e.flags;switch(e.tag){case 0:case 11:case 15:na(t,e,a,l),o&2048&&Qo(9,e);break;case 1:na(t,e,a,l);break;case 3:na(t,e,a,l),o&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Uo(t)));break;case 12:if(o&2048){na(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,n=i.id,s=i.onPostCommit;typeof s=="function"&&s(n,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){zt(e,e.return,g)}}else na(t,e,a,l);break;case 31:na(t,e,a,l);break;case 13:na(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,n=e.alternate,e.memoizedState!==null?i._visibility&2?na(t,e,a,l):jo(t,e):i._visibility&2?na(t,e,a,l):(i._visibility|=2,Il(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),o&2048&&gr(n,e);break;case 24:na(t,e,a,l),o&2048&&hr(e.alternate,e);break;default:na(t,e,a,l)}}function Il(t,e,a,l,o){for(o=o&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,n=e,s=a,g=l,S=n.flags;switch(n.tag){case 0:case 11:case 15:Il(i,n,s,g,o),Qo(8,n);break;case 23:break;case 22:var w=n.stateNode;n.memoizedState!==null?w._visibility&2?Il(i,n,s,g,o):jo(i,n):(w._visibility|=2,Il(i,n,s,g,o)),o&&S&2048&&gr(n.alternate,n);break;case 24:Il(i,n,s,g,o),o&&S&2048&&hr(n.alternate,n);break;default:Il(i,n,s,g,o)}e=e.sibling}}function jo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,o=l.flags;switch(l.tag){case 22:jo(a,l),o&2048&&gr(l.alternate,l);break;case 24:jo(a,l),o&2048&&hr(l.alternate,l);break;default:jo(a,l)}e=e.sibling}}var qo=8192;function Pl(t,e,a){if(t.subtreeFlags&qo)for(t=t.child;t!==null;)nm(t,e,a),t=t.sibling}function nm(t,e,a){switch(t.tag){case 26:Pl(t,e,a),t.flags&qo&&t.memoizedState!==null&&x0(a,ia,t.memoizedState,t.memoizedProps);break;case 5:Pl(t,e,a);break;case 3:case 4:var l=ia;ia=vn(t.stateNode.containerInfo),Pl(t,e,a),ia=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=qo,qo=16777216,Pl(t,e,a),qo=l):Pl(t,e,a));break;default:Pl(t,e,a)}}function um(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Lo(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];re=l,cm(l,t)}um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rm(t),t=t.sibling}function rm(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ln(t)):Lo(t);break;default:Lo(t)}}function ln(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];re=l,cm(l,t)}um(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ja(8,e,e.return),ln(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,ln(e));break;default:ln(e)}t=t.sibling}}function cm(t,e){for(;re!==null;){var a=re;switch(a.tag){case 0:case 11:case 15:ja(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,re=l;else t:for(a=t;re!==null;){l=re;var o=l.sibling,i=l.return;if($f(l),l===a){re=null;break t}if(o!==null){o.return=i,re=o;break t}re=i}}}var Dg={getCacheForType:function(t){var e=he(Jt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return he(Jt).controller.signal}},Ng=typeof WeakMap=="function"?WeakMap:Map,At=0,Tt=null,ct=null,mt=0,Et=0,Le=null,qa=!1,$l=!1,vr=!1,za=0,Qt=0,La=0,Al=0,yr=0,Fe=0,to=0,Fo=null,De=null,_r=!1,on=0,sm=0,nn=1/0,un=null,Fa=null,ae=0,Ka=null,eo=null,Ua=0,xr=0,br=null,fm=null,Ko=0,Ar=null;function Ke(){return(At&2)!==0&&mt!==0?mt&-mt:z.T!==null?Ur():Ec()}function mm(){if(Fe===0)if((mt&536870912)===0||vt){var t=pi;pi<<=1,(pi&3932160)===0&&(pi=262144),Fe=t}else Fe=536870912;return t=je.current,t!==null&&(t.flags|=32),Fe}function Ne(t,e,a){(t===Tt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(ao(t,0),Za(t,mt,Fe,!1)),po(t,a),((At&2)===0||t!==Tt)&&(t===Tt&&((At&2)===0&&(Al|=a),Qt===4&&Za(t,mt,Fe,!1)),fa(t))}function dm(t,e,a){if((At&6)!==0)throw Error(r(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||mo(t,e),o=l?Gg(t,e):Cr(t,e,!0),i=l;do{if(o===0){$l&&!l&&Za(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Yg(a)){o=Cr(t,e,!1),i=!1;continue}if(o===2){if(i=e,t.errorRecoveryDisabledLanes&i)var n=0;else n=t.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){e=n;t:{var s=t;o=Fo;var g=s.current.memoizedState.isDehydrated;if(g&&(ao(s,n).flags|=256),n=Cr(s,n,!1),n!==2){if(vr&&!g){s.errorRecoveryDisabledLanes|=i,Al|=i,o=4;break t}i=De,De=o,i!==null&&(De===null?De=i:De.push.apply(De,i))}o=n}if(i=!1,o!==2)continue}}if(o===1){ao(t,0),Za(t,e,0,!0);break}t:{switch(l=t,i=o,i){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:Za(l,e,Fe,!qa);break t;case 2:De=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(o=on+300-He(),10<o)){if(Za(l,e,Fe,!qa),hi(l,0,!0)!==0)break t;Ua=e,l.timeoutHandle=qm(pm.bind(null,l,a,De,un,_r,e,Fe,Al,to,qa,i,"Throttled",-0,0),o);break t}pm(l,a,De,un,_r,e,Fe,Al,to,qa,i,null,-0,0)}}break}while(!0);fa(t)}function pm(t,e,a,l,o,i,n,s,g,S,w,V,E,U){if(t.timeoutHandle=-1,V=e.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},nm(e,i,V);var K=(i&62914560)===i?on-He():(i&4194048)===i?sm-He():0;if(K=b0(V,K),K!==null){Ua=i,t.cancelPendingCommit=K(Am.bind(null,t,e,i,a,l,o,n,s,g,w,V,null,E,U)),Za(t,i,n,!S);return}}Am(t,e,i,a,l,o,n,s,g)}function Yg(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var o=a[l],i=o.getSnapshot;o=o.value;try{if(!Qe(i(),o))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Za(t,e,a,l){e&=~yr,e&=~Al,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var o=e;0<o;){var i=31-ke(o),n=1<<i;l[i]=-1,o&=~n}a!==0&&Sc(t,a,e)}function rn(){return(At&6)===0?(Zo(0),!1):!0}function Sr(){if(ct!==null){if(Et===0)var t=ct.return;else t=ct,va=dl=null,Gu(t),Fl=null,wo=0,t=ct;for(;t!==null;)Lf(t.alternate,t),t=t.return;ct=null}}function ao(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,l0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ua=0,Sr(),Tt=t,ct=a=ga(t.current,null),mt=e,Et=0,Le=null,qa=!1,$l=mo(t,e),vr=!1,to=Fe=yr=Al=La=Qt=0,De=Fo=null,_r=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var o=31-ke(l),i=1<<o;e|=t[o],l&=~i}return za=e,Ui(),a}function gm(t,e){nt=null,z.H=Ho,e===Ll||e===Ni?(e=ws(),Et=3):e===zu?(e=ws(),Et=4):Et=e===er?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Le=e,ct===null&&(Qt=1,Wi(t,Ie(e,t.current)))}function hm(){var t=je.current;return t===null?!0:(mt&4194048)===mt?ea===null:(mt&62914560)===mt||(mt&536870912)!==0?t===ea:!1}function vm(){var t=z.H;return z.H=Ho,t===null?Ho:t}function ym(){var t=z.A;return z.A=Dg,t}function cn(){Qt=4,qa||(mt&4194048)!==mt&&je.current!==null||($l=!0),(La&134217727)===0&&(Al&134217727)===0||Tt===null||Za(Tt,mt,Fe,!1)}function Cr(t,e,a){var l=At;At|=2;var o=vm(),i=ym();(Tt!==t||mt!==e)&&(un=null,ao(t,e)),e=!1;var n=Qt;t:do try{if(Et!==0&&ct!==null){var s=ct,g=Le;switch(Et){case 8:Sr(),n=6;break t;case 3:case 2:case 9:case 6:je.current===null&&(e=!0);var S=Et;if(Et=0,Le=null,lo(t,s,g,S),a&&$l){n=0;break t}break;default:S=Et,Et=0,Le=null,lo(t,s,g,S)}}Hg(),n=Qt;break}catch(w){gm(t,w)}while(!0);return e&&t.shellSuspendCounter++,va=dl=null,At=l,z.H=o,z.A=i,ct===null&&(Tt=null,mt=0,Ui()),n}function Hg(){for(;ct!==null;)_m(ct)}function Gg(t,e){var a=At;At|=2;var l=vm(),o=ym();Tt!==t||mt!==e?(un=null,nn=He()+500,ao(t,e)):$l=mo(t,e);t:do try{if(Et!==0&&ct!==null){e=ct;var i=Le;e:switch(Et){case 1:Et=0,Le=null,lo(t,e,i,1);break;case 2:case 9:if(Us(i)){Et=0,Le=null,xm(e);break}e=function(){Et!==2&&Et!==9||Tt!==t||(Et=7),fa(t)},i.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Us(i)?(Et=0,Le=null,xm(e)):(Et=0,Le=null,lo(t,e,i,7));break;case 5:var n=null;switch(ct.tag){case 26:n=ct.memoizedState;case 5:case 27:var s=ct;if(n?id(n):s.stateNode.complete){Et=0,Le=null;var g=s.sibling;if(g!==null)ct=g;else{var S=s.return;S!==null?(ct=S,sn(S)):ct=null}break e}}Et=0,Le=null,lo(t,e,i,5);break;case 6:Et=0,Le=null,lo(t,e,i,6);break;case 8:Sr(),Qt=6;break t;default:throw Error(r(462))}}kg();break}catch(w){gm(t,w)}while(!0);return va=dl=null,z.H=l,z.A=o,At=a,ct!==null?0:(Tt=null,mt=0,Ui(),Qt)}function kg(){for(;ct!==null&&!cp();)_m(ct)}function _m(t){var e=jf(t.alternate,t,za);t.memoizedProps=t.pendingProps,e===null?sn(t):ct=e}function xm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Yf(a,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=Yf(a,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:Gu(e);default:Lf(a,e),e=ct=vs(e,za),e=jf(a,e,za)}t.memoizedProps=t.pendingProps,e===null?sn(t):ct=e}function lo(t,e,a,l){va=dl=null,Gu(e),Fl=null,wo=0;var o=e.return;try{if(Ug(t,o,e,a,mt)){Qt=1,Wi(t,Ie(a,t.current)),ct=null;return}}catch(i){if(o!==null)throw ct=o,i;Qt=1,Wi(t,Ie(a,t.current)),ct=null;return}e.flags&32768?(vt||l===1?t=!0:$l||(mt&536870912)!==0?t=!1:(qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=je.current,l!==null&&l.tag===13&&(l.flags|=16384))),bm(e,t)):sn(e)}function sn(t){var e=t;do{if((e.flags&32768)!==0){bm(e,qa);return}t=e.return;var a=Rg(e.alternate,e,za);if(a!==null){ct=a;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Qt===0&&(Qt=5)}function bm(t,e){do{var a=Tg(t.alternate,t);if(a!==null){a.flags&=32767,ct=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=a}while(t!==null);Qt=6,ct=null}function Am(t,e,a,l,o,i,n,s,g){t.cancelPendingCommit=null;do fn();while(ae!==0);if((At&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(i=e.lanes|e.childLanes,i|=mu,_p(t,a,i,n,s,g),t===Tt&&(ct=Tt=null,mt=0),eo=e,Ka=t,Ua=a,xr=i,br=o,fm=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,qg(mi,function(){return zm(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,o=j.p,j.p=2,n=At,At|=4;try{Og(t,e,a)}finally{At=n,j.p=o,z.T=l}}ae=1,Sm(),Cm(),Bm()}}function Sm(){if(ae===1){ae=0;var t=Ka,e=eo,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=j.p;j.p=2;var o=At;At|=4;try{lm(e,t);var i=Nr,n=rs(t.containerInfo),s=i.focusedElem,g=i.selectionRange;if(n!==s&&s&&s.ownerDocument&&us(s.ownerDocument.documentElement,s)){if(g!==null&&uu(s)){var S=g.start,w=g.end;if(w===void 0&&(w=S),"selectionStart"in s)s.selectionStart=S,s.selectionEnd=Math.min(w,s.value.length);else{var V=s.ownerDocument||document,E=V&&V.defaultView||window;if(E.getSelection){var U=E.getSelection(),K=s.textContent.length,et=Math.min(g.start,K),Rt=g.end===void 0?et:Math.min(g.end,K);!U.extend&&et>Rt&&(n=Rt,Rt=et,et=n);var x=ns(s,et),y=ns(s,Rt);if(x&&y&&(U.rangeCount!==1||U.anchorNode!==x.node||U.anchorOffset!==x.offset||U.focusNode!==y.node||U.focusOffset!==y.offset)){var A=V.createRange();A.setStart(x.node,x.offset),U.removeAllRanges(),et>Rt?(U.addRange(A),U.extend(y.node,y.offset)):(A.setEnd(y.node,y.offset),U.addRange(A))}}}}for(V=[],U=s;U=U.parentNode;)U.nodeType===1&&V.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<V.length;s++){var R=V[s];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Sn=!!Dr,Nr=Dr=null}finally{At=o,j.p=l,z.T=a}}t.current=e,ae=2}}function Cm(){if(ae===2){ae=0;var t=Ka,e=eo,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=j.p;j.p=2;var o=At;At|=4;try{Pf(t,e.alternate,e)}finally{At=o,j.p=l,z.T=a}}ae=3}}function Bm(){if(ae===4||ae===3){ae=0,sp();var t=Ka,e=eo,a=Ua,l=fm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ae=5:(ae=0,eo=Ka=null,Em(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(Fa=null),Xn(a),e=e.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=z.T,o=j.p,j.p=2,z.T=null;try{for(var i=t.onRecoverableError,n=0;n<l.length;n++){var s=l[n];i(s.value,{componentStack:s.stack})}}finally{z.T=e,j.p=o}}(Ua&3)!==0&&fn(),fa(t),o=t.pendingLanes,(a&261930)!==0&&(o&42)!==0?t===Ar?Ko++:(Ko=0,Ar=t):Ko=0,Zo(0)}}function Em(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Uo(e)))}function fn(){return Sm(),Cm(),Bm(),zm()}function zm(){if(ae!==5)return!1;var t=Ka,e=xr;xr=0;var a=Xn(Ua),l=z.T,o=j.p;try{j.p=32>a?32:a,z.T=null,a=br,br=null;var i=Ka,n=Ua;if(ae=0,eo=Ka=null,Ua=0,(At&6)!==0)throw Error(r(331));var s=At;if(At|=4,rm(i.current),im(i,i.current,n,a),At=s,Zo(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(fo,i)}catch{}return!0}finally{j.p=o,z.T=l,Em(t,e)}}function Um(t,e,a){e=Ie(a,e),e=tr(t.stateNode,e,2),t=ka(t,e,2),t!==null&&(po(t,2),fa(t))}function zt(t,e,a){if(t.tag===3)Um(t,t,a);else for(;e!==null;){if(e.tag===3){Um(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fa===null||!Fa.has(l))){t=Ie(a,t),a=Mf(2),l=ka(e,a,2),l!==null&&(wf(a,l,e,t),po(l,2),fa(l));break}}e=e.return}}function Br(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ng;var o=new Set;l.set(e,o)}else o=l.get(e),o===void 0&&(o=new Set,l.set(e,o));o.has(a)||(vr=!0,o.add(a),t=Qg.bind(null,t,e,a),e.then(t,t))}function Qg(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Tt===t&&(mt&a)===a&&(Qt===4||Qt===3&&(mt&62914560)===mt&&300>He()-on?(At&2)===0&&ao(t,0):yr|=a,to===mt&&(to=0)),fa(t)}function Mm(t,e){e===0&&(e=Ac()),t=sl(t,e),t!==null&&(po(t,e),fa(t))}function Xg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Mm(t,a)}function jg(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,o=t.memoizedState;o!==null&&(a=o.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(e),Mm(t,a)}function qg(t,e){return Hn(t,e)}var mn=null,oo=null,Er=!1,dn=!1,zr=!1,Ja=0;function fa(t){t!==oo&&t.next===null&&(oo===null?mn=oo=t:oo=oo.next=t),dn=!0,Er||(Er=!0,Fg())}function Zo(t,e){if(!zr&&dn){zr=!0;do for(var a=!1,l=mn;l!==null;){if(t!==0){var o=l.pendingLanes;if(o===0)var i=0;else{var n=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-ke(42|t)+1)-1,i&=o&~(n&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Om(l,i))}else i=mt,i=hi(l,l===Tt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||mo(l,i)||(a=!0,Om(l,i));l=l.next}while(a);zr=!1}}function Lg(){wm()}function wm(){dn=Er=!1;var t=0;Ja!==0&&a0()&&(t=Ja);for(var e=He(),a=null,l=mn;l!==null;){var o=l.next,i=Rm(l,e);i===0?(l.next=null,a===null?mn=o:a.next=o,o===null&&(oo=a)):(a=l,(t!==0||(i&3)!==0)&&(dn=!0)),l=o}ae!==0&&ae!==5||Zo(t),Ja!==0&&(Ja=0)}function Rm(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,o=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var n=31-ke(i),s=1<<n,g=o[n];g===-1?((s&a)===0||(s&l)!==0)&&(o[n]=yp(s,e)):g<=e&&(t.expiredLanes|=s),i&=~s}if(e=Tt,a=mt,a=hi(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Gn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||mo(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Gn(l),Xn(a)){case 2:case 8:a=xc;break;case 32:a=mi;break;case 268435456:a=bc;break;default:a=mi}return l=Tm.bind(null,t),a=Hn(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Gn(l),t.callbackPriority=2,t.callbackNode=null,2}function Tm(t,e){if(ae!==0&&ae!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(fn()&&t.callbackNode!==a)return null;var l=mt;return l=hi(t,t===Tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(dm(t,l,e),Rm(t,He()),t.callbackNode!=null&&t.callbackNode===a?Tm.bind(null,t):null)}function Om(t,e){if(fn())return null;dm(t,e,!0)}function Fg(){o0(function(){(At&6)!==0?Hn(_c,Lg):wm()})}function Ur(){if(Ja===0){var t=jl;t===0&&(t=di,di<<=1,(di&261888)===0&&(di=256)),Ja=t}return Ja}function Vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xi(""+t)}function Dm(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Kg(t,e,a,l,o){if(e==="submit"&&a&&a.stateNode===o){var i=Vm((o[we]||null).action),n=l.submitter;n&&(e=(e=n[we]||null)?Vm(e.formAction):n.getAttribute("formAction"),e!==null&&(i=e,n=null));var s=new Ci("action","action",null,l,o);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var g=n?Dm(o,n):new FormData(o);Zu(a,{pending:!0,data:g,method:o.method,action:i},null,g)}}else typeof i=="function"&&(s.preventDefault(),g=n?Dm(o,n):new FormData(o),Zu(a,{pending:!0,data:g,method:o.method,action:i},i,g))},currentTarget:o}]})}}for(var Mr=0;Mr<fu.length;Mr++){var wr=fu[Mr],Zg=wr.toLowerCase(),Jg=wr[0].toUpperCase()+wr.slice(1);oa(Zg,"on"+Jg)}oa(fs,"onAnimationEnd"),oa(ms,"onAnimationIteration"),oa(ds,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(fg,"onTransitionRun"),oa(mg,"onTransitionStart"),oa(dg,"onTransitionCancel"),oa(ps,"onTransitionEnd"),Ml("onMouseEnter",["mouseout","mouseover"]),Ml("onMouseLeave",["mouseout","mouseover"]),Ml("onPointerEnter",["pointerout","pointerover"]),Ml("onPointerLeave",["pointerout","pointerover"]),nl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nl("onBeforeInput",["compositionend","keypress","textInput","paste"]),nl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function Nm(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],o=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var n=l.length-1;0<=n;n--){var s=l[n],g=s.instance,S=s.currentTarget;if(s=s.listener,g!==i&&o.isPropagationStopped())break t;i=s,o.currentTarget=S;try{i(o)}catch(w){zi(w)}o.currentTarget=null,i=g}else for(n=0;n<l.length;n++){if(s=l[n],g=s.instance,S=s.currentTarget,s=s.listener,g!==i&&o.isPropagationStopped())break t;i=s,o.currentTarget=S;try{i(o)}catch(w){zi(w)}o.currentTarget=null,i=g}}}}function st(t,e){var a=e[jn];a===void 0&&(a=e[jn]=new Set);var l=t+"__bubble";a.has(l)||(Ym(e,t,2,!1),a.add(l))}function Rr(t,e,a){var l=0;e&&(l|=4),Ym(a,t,l,e)}var pn="_reactListening"+Math.random().toString(36).slice(2);function Tr(t){if(!t[pn]){t[pn]=!0,Mc.forEach(function(a){a!=="selectionchange"&&(Wg.has(a)||Rr(a,!1,t),Rr(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pn]||(e[pn]=!0,Rr("selectionchange",!1,e))}}function Ym(t,e,a,l){switch(md(e)){case 2:var o=C0;break;case 8:o=B0;break;default:o=Kr}a=o.bind(null,e,a,t),o=void 0,!Pn||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),l?o!==void 0?t.addEventListener(e,a,{capture:!0,passive:o}):t.addEventListener(e,a,!0):o!==void 0?t.addEventListener(e,a,{passive:o}):t.addEventListener(e,a,!1)}function Or(t,e,a,l,o){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var n=l.tag;if(n===3||n===4){var s=l.stateNode.containerInfo;if(s===o)break;if(n===4)for(n=l.return;n!==null;){var g=n.tag;if((g===3||g===4)&&n.stateNode.containerInfo===o)return;n=n.return}for(;s!==null;){if(n=El(s),n===null)return;if(g=n.tag,g===5||g===6||g===26||g===27){l=i=n;continue t}s=s.parentNode}}l=l.return}Qc(function(){var S=i,w=Wn(a),V=[];t:{var E=gs.get(t);if(E!==void 0){var U=Ci,K=t;switch(t){case"keypress":if(Ai(a)===0)break t;case"keydown":case"keyup":U=jp;break;case"focusin":K="focus",U=au;break;case"focusout":K="blur",U=au;break;case"beforeblur":case"afterblur":U=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=Fp;break;case fs:case ms:case ds:U=Vp;break;case ps:U=Zp;break;case"scroll":case"scrollend":U=Mp;break;case"wheel":U=Wp;break;case"copy":case"cut":case"paste":U=Np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Fc;break;case"toggle":case"beforetoggle":U=Pp}var et=(e&4)!==0,Rt=!et&&(t==="scroll"||t==="scrollend"),x=et?E!==null?E+"Capture":null:E;et=[];for(var y=S,A;y!==null;){var R=y;if(A=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||A===null||x===null||(R=vo(y,x),R!=null&&et.push(Wo(y,R,A))),Rt)break;y=y.return}0<et.length&&(E=new U(E,K,null,a,w),V.push({event:E,listeners:et}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",U=t==="mouseout"||t==="pointerout",E&&a!==Jn&&(K=a.relatedTarget||a.fromElement)&&(El(K)||K[Bl]))break t;if((U||E)&&(E=w.window===w?w:(E=w.ownerDocument)?E.defaultView||E.parentWindow:window,U?(K=a.relatedTarget||a.toElement,U=S,K=K?El(K):null,K!==null&&(Rt=m(K),et=K.tag,K!==Rt||et!==5&&et!==27&&et!==6)&&(K=null)):(U=null,K=S),U!==K)){if(et=qc,R="onMouseLeave",x="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(et=Fc,R="onPointerLeave",x="onPointerEnter",y="pointer"),Rt=U==null?E:ho(U),A=K==null?E:ho(K),E=new et(R,y+"leave",U,a,w),E.target=Rt,E.relatedTarget=A,R=null,El(w)===S&&(et=new et(x,y+"enter",K,a,w),et.target=A,et.relatedTarget=Rt,R=et),Rt=R,U&&K)e:{for(et=Ig,x=U,y=K,A=0,R=x;R;R=et(R))A++;R=0;for(var tt=y;tt;tt=et(tt))R++;for(;0<A-R;)x=et(x),A--;for(;0<R-A;)y=et(y),R--;for(;A--;){if(x===y||y!==null&&x===y.alternate){et=x;break e}x=et(x),y=et(y)}et=null}else et=null;U!==null&&Hm(V,E,U,et,!1),K!==null&&Rt!==null&&Hm(V,Rt,K,et,!0)}}t:{if(E=S?ho(S):window,U=E.nodeName&&E.nodeName.toLowerCase(),U==="select"||U==="input"&&E.type==="file")var _t=ts;else if(Pc(E))if(es)_t=rg;else{_t=ng;var I=ig}else U=E.nodeName,!U||U.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&Zn(S.elementType)&&(_t=ts):_t=ug;if(_t&&(_t=_t(t,S))){$c(V,_t,a,w);break t}I&&I(t,E,S),t==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Kn(E,"number",E.value)}switch(I=S?ho(S):window,t){case"focusin":(Pc(I)||I.contentEditable==="true")&&(Dl=I,ru=S,Bo=null);break;case"focusout":Bo=ru=Dl=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,cs(V,a,w);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":cs(V,a,w)}var ut;if(ou)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Vl?Wc(t,a)&&(dt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(Kc&&a.locale!=="ko"&&(Vl||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Vl&&(ut=Xc()):(Oa=w,$n="value"in Oa?Oa.value:Oa.textContent,Vl=!0)),I=gn(S,dt),0<I.length&&(dt=new Lc(dt,t,null,a,w),V.push({event:dt,listeners:I}),ut?dt.data=ut:(ut=Ic(a),ut!==null&&(dt.data=ut)))),(ut=tg?eg(t,a):ag(t,a))&&(dt=gn(S,"onBeforeInput"),0<dt.length&&(I=new Lc("onBeforeInput","beforeinput",null,a,w),V.push({event:I,listeners:dt}),I.data=ut)),Kg(V,t,S,a,w)}Nm(V,e)})}function Wo(t,e,a){return{instance:t,listener:e,currentTarget:a}}function gn(t,e){for(var a=e+"Capture",l=[];t!==null;){var o=t,i=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||i===null||(o=vo(t,a),o!=null&&l.unshift(Wo(t,o,i)),o=vo(t,e),o!=null&&l.push(Wo(t,o,i))),t.tag===3)return l;t=t.return}return[]}function Ig(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hm(t,e,a,l,o){for(var i=e._reactName,n=[];a!==null&&a!==l;){var s=a,g=s.alternate,S=s.stateNode;if(s=s.tag,g!==null&&g===l)break;s!==5&&s!==26&&s!==27||S===null||(g=S,o?(S=vo(a,i),S!=null&&n.unshift(Wo(a,S,g))):o||(S=vo(a,i),S!=null&&n.push(Wo(a,S,g)))),a=a.return}n.length!==0&&t.push({event:e,listeners:n})}var Pg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(Pg,`
`).replace($g,"")}function km(t,e){return e=Gm(e),Gm(t)===e}function wt(t,e,a,l,o,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Rl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Rl(t,""+l);break;case"className":yi(t,"class",l);break;case"tabIndex":yi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(t,a,l);break;case"style":Gc(t,l,i);break;case"data":if(e!=="object"){yi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=xi(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&wt(t,e,"name",o.name,o,null),wt(t,e,"formEncType",o.formEncType,o,null),wt(t,e,"formMethod",o.formMethod,o,null),wt(t,e,"formTarget",o.formTarget,o,null)):(wt(t,e,"encType",o.encType,o,null),wt(t,e,"method",o.method,o,null),wt(t,e,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=xi(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=da);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=xi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":st("beforetoggle",t),st("toggle",t),vi(t,"popover",l);break;case"xlinkActuate":ma(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ma(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ma(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ma(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ma(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ma(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ma(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ma(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ma(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zp.get(a)||a,vi(t,a,l))}}function Vr(t,e,a,l,o,i){switch(a){case"style":Gc(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(o.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Rl(t,l):(typeof l=="number"||typeof l=="bigint")&&Rl(t,""+l);break;case"onScroll":l!=null&&st("scroll",t);break;case"onScrollEnd":l!=null&&st("scrollend",t);break;case"onClick":l!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wc.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),e=a.slice(2,o?a.length-7:void 0),i=t[we]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,o),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,o);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):vi(t,a,l)}}}function ye(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var l=!1,o=!1,i;for(i in a)if(a.hasOwnProperty(i)){var n=a[i];if(n!=null)switch(i){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:wt(t,e,i,n,a,null)}}o&&wt(t,e,"srcSet",a.srcSet,a,null),l&&wt(t,e,"src",a.src,a,null);return;case"input":st("invalid",t);var s=i=n=o=null,g=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var w=a[l];if(w!=null)switch(l){case"name":o=w;break;case"type":n=w;break;case"checked":g=w;break;case"defaultChecked":S=w;break;case"value":i=w;break;case"defaultValue":s=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:wt(t,e,l,w,a,null)}}Dc(t,i,s,g,S,n,o,!1);return;case"select":st("invalid",t),l=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":n=s;break;case"multiple":l=s;default:wt(t,e,o,s,a,null)}e=i,a=n,t.multiple=!!l,e!=null?wl(t,!!l,e,!1):a!=null&&wl(t,!!l,a,!0);return;case"textarea":st("invalid",t),i=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":o=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:wt(t,e,n,s,a,null)}Yc(t,l,o,i);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:wt(t,e,g,l,a,null)}return;case"dialog":st("beforetoggle",t),st("toggle",t),st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(l=0;l<Jo.length;l++)st(Jo[l],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:wt(t,e,S,l,a,null)}return;default:if(Zn(e)){for(w in a)a.hasOwnProperty(w)&&(l=a[w],l!==void 0&&Vr(t,e,w,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&wt(t,e,s,l,a,null))}function t0(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,n=null,s=null,g=null,S=null,w=null;for(U in a){var V=a[U];if(a.hasOwnProperty(U)&&V!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":g=V;default:l.hasOwnProperty(U)||wt(t,e,U,null,l,V)}}for(var E in l){var U=l[E];if(V=a[E],l.hasOwnProperty(E)&&(U!=null||V!=null))switch(E){case"type":i=U;break;case"name":o=U;break;case"checked":S=U;break;case"defaultChecked":w=U;break;case"value":n=U;break;case"defaultValue":s=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,e));break;default:U!==V&&wt(t,e,E,U,l,V)}}Fn(t,n,s,g,S,w,i,o);return;case"select":U=n=s=E=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":U=g;default:l.hasOwnProperty(i)||wt(t,e,i,null,l,g)}for(o in l)if(i=l[o],g=a[o],l.hasOwnProperty(o)&&(i!=null||g!=null))switch(o){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":n=i;default:i!==g&&wt(t,e,o,i,l,g)}e=s,a=n,l=U,E!=null?wl(t,!!a,E,!1):!!l!=!!a&&(e!=null?wl(t,!!a,e,!0):wl(t,!!a,a?[]:"",!1));return;case"textarea":U=E=null;for(s in a)if(o=a[s],a.hasOwnProperty(s)&&o!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:wt(t,e,s,null,l,o)}for(n in l)if(o=l[n],i=a[n],l.hasOwnProperty(n)&&(o!=null||i!=null))switch(n){case"value":E=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==i&&wt(t,e,n,o,l,i)}Nc(t,E,U);return;case"option":for(var K in a)if(E=a[K],a.hasOwnProperty(K)&&E!=null&&!l.hasOwnProperty(K))switch(K){case"selected":t.selected=!1;break;default:wt(t,e,K,null,l,E)}for(g in l)if(E=l[g],U=a[g],l.hasOwnProperty(g)&&E!==U&&(E!=null||U!=null))switch(g){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:wt(t,e,g,E,l,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)E=a[et],a.hasOwnProperty(et)&&E!=null&&!l.hasOwnProperty(et)&&wt(t,e,et,null,l,E);for(S in l)if(E=l[S],U=a[S],l.hasOwnProperty(S)&&E!==U&&(E!=null||U!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:wt(t,e,S,E,l,U)}return;default:if(Zn(e)){for(var Rt in a)E=a[Rt],a.hasOwnProperty(Rt)&&E!==void 0&&!l.hasOwnProperty(Rt)&&Vr(t,e,Rt,void 0,l,E);for(w in l)E=l[w],U=a[w],!l.hasOwnProperty(w)||E===U||E===void 0&&U===void 0||Vr(t,e,w,E,l,U);return}}for(var x in a)E=a[x],a.hasOwnProperty(x)&&E!=null&&!l.hasOwnProperty(x)&&wt(t,e,x,null,l,E);for(V in l)E=l[V],U=a[V],!l.hasOwnProperty(V)||E===U||E==null&&U==null||wt(t,e,V,E,l,U)}function Qm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function e0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var o=a[l],i=o.transferSize,n=o.initiatorType,s=o.duration;if(i&&s&&Qm(n)){for(n=0,s=o.responseEnd,l+=1;l<a.length;l++){var g=a[l],S=g.startTime;if(S>s)break;var w=g.transferSize,V=g.initiatorType;w&&Qm(V)&&(g=g.responseEnd,n+=w*(g<s?1:(s-S)/(g-S)))}if(--l,e+=8*(i+n)/(o.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dr=null,Nr=null;function hn(t){return t.nodeType===9?t:t.ownerDocument}function Xm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Yr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hr=null;function a0(){var t=window.event;return t&&t.type==="popstate"?t===Hr?!1:(Hr=t,!0):(Hr=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(i0)}:qm;function i0(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function Fm(t,e){var a=e,l=0;do{var o=a.nextSibling;if(t.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(o),ro(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Io(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Io(a);for(var i=a.firstChild;i;){var n=i.nextSibling,s=i.nodeName;i[go]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=n}}else a==="body"&&Io(t.ownerDocument.body);a=o}while(a);ro(e)}function Km(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Gr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gr(a),qn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function n0(t,e,a,l){for(;t.nodeType===1;){var o=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[go])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=aa(t.nextSibling),t===null)break}return null}function u0(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=aa(t.nextSibling),t===null))return null;return t}function Zm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=aa(t.nextSibling),t===null))return null;return t}function kr(t){return t.data==="$?"||t.data==="$~"}function Qr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function r0(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function aa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Xr=null;function Jm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return aa(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Wm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Im(t,e,a){switch(e=hn(a),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Io(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);qn(t)}var la=new Map,Pm=new Set;function vn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=j.d;j.d={f:c0,r:s0,D:f0,C:m0,L:d0,m:p0,X:h0,S:g0,M:v0};function c0(){var t=Ma.f(),e=rn();return t||e}function s0(t){var e=zl(t);e!==null&&e.tag===5&&e.type==="form"?gf(e):Ma.r(t)}var io=typeof document>"u"?null:document;function $m(t,e,a){var l=io;if(l&&typeof e=="string"&&e){var o=Je(e);o='link[rel="'+t+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Pm.has(o)||(Pm.add(o),t={rel:t,crossOrigin:a,href:e},l.querySelector(o)===null&&(e=l.createElement("link"),ye(e,"link",t),ue(e),l.head.appendChild(e)))}}function f0(t){Ma.D(t),$m("dns-prefetch",t,null)}function m0(t,e){Ma.C(t,e),$m("preconnect",t,e)}function d0(t,e,a){Ma.L(t,e,a);var l=io;if(l&&t&&e){var o='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Je(a.imageSizes)+'"]')):o+='[href="'+Je(t)+'"]';var i=o;switch(e){case"style":i=no(t);break;case"script":i=uo(t)}la.has(i)||(t=B({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),la.set(i,t),l.querySelector(o)!==null||e==="style"&&l.querySelector(Po(i))||e==="script"&&l.querySelector($o(i))||(e=l.createElement("link"),ye(e,"link",t),ue(e),l.head.appendChild(e)))}}function p0(t,e){Ma.m(t,e);var a=io;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Je(l)+'"][href="'+Je(t)+'"]',i=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=uo(t)}if(!la.has(i)&&(t=B({rel:"modulepreload",href:t},e),la.set(i,t),a.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(i)))return}l=a.createElement("link"),ye(l,"link",t),ue(l),a.head.appendChild(l)}}}function g0(t,e,a){Ma.S(t,e,a);var l=io;if(l&&t){var o=Ul(l).hoistableStyles,i=no(t);e=e||"default";var n=o.get(i);if(!n){var s={loading:0,preload:null};if(n=l.querySelector(Po(i)))s.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":e},a),(a=la.get(i))&&jr(t,a);var g=n=l.createElement("link");ue(g),ye(g,"link",t),g._p=new Promise(function(S,w){g.onload=S,g.onerror=w}),g.addEventListener("load",function(){s.loading|=1}),g.addEventListener("error",function(){s.loading|=2}),s.loading|=4,yn(n,e,l)}n={type:"stylesheet",instance:n,count:1,state:s},o.set(i,n)}}}function h0(t,e){Ma.X(t,e);var a=io;if(a&&t){var l=Ul(a).hoistableScripts,o=uo(t),i=l.get(o);i||(i=a.querySelector($o(o)),i||(t=B({src:t,async:!0},e),(e=la.get(o))&&qr(t,e),i=a.createElement("script"),ue(i),ye(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(o,i))}}function v0(t,e){Ma.M(t,e);var a=io;if(a&&t){var l=Ul(a).hoistableScripts,o=uo(t),i=l.get(o);i||(i=a.querySelector($o(o)),i||(t=B({src:t,async:!0,type:"module"},e),(e=la.get(o))&&qr(t,e),i=a.createElement("script"),ue(i),ye(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(o,i))}}function td(t,e,a,l){var o=(o=rt.current)?vn(o):null;if(!o)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=no(a.href),a=Ul(o).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=no(a.href);var i=Ul(o).hoistableStyles,n=i.get(t);if(n||(o=o.ownerDocument||o,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,n),(i=o.querySelector(Po(t)))&&!i._p&&(n.instance=i,n.state.loading=5),la.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(t,a),i||y0(o,t,a,n.state))),e&&l===null)throw Error(r(528,""));return n}if(e&&l!==null)throw Error(r(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=uo(a),a=Ul(o).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function no(t){return'href="'+Je(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function ed(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function y0(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),ye(e,"link",a),ue(e),t.head.appendChild(e))}function uo(t){return'[src="'+Je(t)+'"]'}function $o(t){return"script[async]"+t}function ad(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Je(a.href)+'"]');if(l)return e.instance=l,ue(l),l;var o=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ue(l),ye(l,"style",o),yn(l,a.precedence,t),e.instance=l;case"stylesheet":o=no(a.href);var i=t.querySelector(Po(o));if(i)return e.state.loading|=4,e.instance=i,ue(i),i;l=ed(a),(o=la.get(o))&&jr(l,o),i=(t.ownerDocument||t).createElement("link"),ue(i);var n=i;return n._p=new Promise(function(s,g){n.onload=s,n.onerror=g}),ye(i,"link",l),e.state.loading|=4,yn(i,a.precedence,t),e.instance=i;case"script":return i=uo(a.src),(o=t.querySelector($o(i)))?(e.instance=o,ue(o),o):(l=a,(o=la.get(i))&&(l=B({},a),qr(l,o)),t=t.ownerDocument||t,o=t.createElement("script"),ue(o),ye(o,"link",l),t.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,yn(l,a.precedence,t));return e.instance}function yn(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,i=o,n=0;n<l.length;n++){var s=l[n];if(s.dataset.precedence===e)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function jr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function qr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _n=null;function ld(t,e,a){if(_n===null){var l=new Map,o=_n=new Map;o.set(a,l)}else o=_n,l=o.get(a),l||(l=new Map,o.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),o=0;o<a.length;o++){var i=a[o];if(!(i[go]||i[pe]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var n=i.getAttribute(e)||"";n=t+n;var s=l.get(n);s?s.push(i):l.set(n,[i])}}return l}function od(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function _0(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function id(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function x0(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=no(l.href),i=e.querySelector(Po(o));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=xn.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=i,ue(i);return}i=e.ownerDocument||e,l=ed(l),(o=la.get(o))&&jr(l,o),i=i.createElement("link"),ue(i);var n=i;n._p=new Promise(function(s,g){n.onload=s,n.onerror=g}),ye(i,"link",l),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xn.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Lr=0;function b0(t,e){return t.stylesheets&&t.count===0&&An(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&An(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&Lr===0&&(Lr=62500*e0());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&An(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Lr?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function xn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)An(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bn=null;function An(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bn=new Map,e.forEach(A0,t),bn=null,xn.call(t))}function A0(t,e){if(!(e.state.loading&4)){var a=bn.get(t);if(a)var l=a.get(null);else{a=new Map,bn.set(t,a);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var n=o[i];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(a.set(n.dataset.precedence,n),l=n)}l&&a.set(null,l)}o=e.instance,n=o.getAttribute("data-precedence"),i=a.get(n)||l,i===l&&a.set(null,o),a.set(n,o),this.count++,l=xn.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),i?i.parentNode.insertBefore(o,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),e.state.loading|=4}}var ti={$$typeof:L,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function S0(t,e,a,l,o,i,n,s,g){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kn(0),this.hiddenUpdates=kn(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function nd(t,e,a,l,o,i,n,s,g,S,w,V){return t=new S0(t,e,a,n,g,S,w,V,s),e=1,i===!0&&(e|=24),i=Xe(3,null,null,e),t.current=i,i.stateNode=t,e=Cu(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},Uu(i),t}function ud(t){return t?(t=Hl,t):Hl}function rd(t,e,a,l,o,i){o=ud(o),l.context===null?l.context=o:l.pendingContext=o,l=Ga(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ka(t,l,e),a!==null&&(Ne(a,t,e),To(a,t,e))}function cd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Fr(t,e){cd(t,e),(t=t.alternate)&&cd(t,e)}function sd(t){if(t.tag===13||t.tag===31){var e=sl(t,67108864);e!==null&&Ne(e,t,67108864),Fr(t,67108864)}}function fd(t){if(t.tag===13||t.tag===31){var e=Ke();e=Qn(e);var a=sl(t,e);a!==null&&Ne(a,t,e),Fr(t,e)}}var Sn=!0;function C0(t,e,a,l){var o=z.T;z.T=null;var i=j.p;try{j.p=2,Kr(t,e,a,l)}finally{j.p=i,z.T=o}}function B0(t,e,a,l){var o=z.T;z.T=null;var i=j.p;try{j.p=8,Kr(t,e,a,l)}finally{j.p=i,z.T=o}}function Kr(t,e,a,l){if(Sn){var o=Zr(l);if(o===null)Or(t,e,l,Cn,a),dd(t,l);else if(z0(o,t,e,a,l))l.stopPropagation();else if(dd(t,l),e&4&&-1<E0.indexOf(t)){for(;o!==null;){var i=zl(o);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var n=il(i.pendingLanes);if(n!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;n;){var g=1<<31-ke(n);s.entanglements[1]|=g,n&=~g}fa(i),(At&6)===0&&(nn=He()+500,Zo(0))}}break;case 31:case 13:s=sl(i,2),s!==null&&Ne(s,i,2),rn(),Fr(i,2)}if(i=Zr(l),i===null&&Or(t,e,l,Cn,a),i===o)break;o=i}o!==null&&l.stopPropagation()}else Or(t,e,l,null,a)}}function Zr(t){return t=Wn(t),Jr(t)}var Cn=null;function Jr(t){if(Cn=null,t=El(t),t!==null){var e=m(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=v(e),t!==null)return t;t=null}else if(a===31){if(t=_(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Cn=t,null}function md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fp()){case _c:return 2;case xc:return 8;case mi:case mp:return 32;case bc:return 268435456;default:return 32}default:return 32}}var Wr=!1,Ia=null,Pa=null,$a=null,ei=new Map,ai=new Map,tl=[],E0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(e.pointerId)}}function li(t,e,a,l,o,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[o]},e!==null&&(e=zl(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),t)}function z0(t,e,a,l,o){switch(e){case"focusin":return Ia=li(Ia,t,e,a,l,o),!0;case"dragenter":return Pa=li(Pa,t,e,a,l,o),!0;case"mouseover":return $a=li($a,t,e,a,l,o),!0;case"pointerover":var i=o.pointerId;return ei.set(i,li(ei.get(i)||null,t,e,a,l,o)),!0;case"gotpointercapture":return i=o.pointerId,ai.set(i,li(ai.get(i)||null,t,e,a,l,o)),!0}return!1}function pd(t){var e=El(t.target);if(e!==null){var a=m(e);if(a!==null){if(e=a.tag,e===13){if(e=v(a),e!==null){t.blockedOn=e,zc(t.priority,function(){fd(a)});return}}else if(e===31){if(e=_(a),e!==null){t.blockedOn=e,zc(t.priority,function(){fd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Zr(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Jn=l,a.target.dispatchEvent(l),Jn=null}else return e=zl(a),e!==null&&sd(e),t.blockedOn=a,!1;e.shift()}return!0}function gd(t,e,a){Bn(t)&&a.delete(e)}function U0(){Wr=!1,Ia!==null&&Bn(Ia)&&(Ia=null),Pa!==null&&Bn(Pa)&&(Pa=null),$a!==null&&Bn($a)&&($a=null),ei.forEach(gd),ai.forEach(gd)}function En(t,e){t.blockedOn===e&&(t.blockedOn=null,Wr||(Wr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,U0)))}var zn=null;function hd(t){zn!==t&&(zn=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){zn===t&&(zn=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],o=t[e+2];if(typeof l!="function"){if(Jr(l||a)===null)continue;break}var i=zl(a);i!==null&&(t.splice(e,3),e-=3,Zu(i,{pending:!0,data:o,method:a.method,action:l},l,o))}}))}function ro(t){function e(g){return En(g,t)}Ia!==null&&En(Ia,t),Pa!==null&&En(Pa,t),$a!==null&&En($a,t),ei.forEach(e),ai.forEach(e);for(var a=0;a<tl.length;a++){var l=tl[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<tl.length&&(a=tl[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&tl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var o=a[l],i=a[l+1],n=o[we]||null;if(typeof i=="function")n||hd(a);else if(n){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,n=i[we]||null)s=n.formAction;else if(Jr(o)!==null)continue}else s=n.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),hd(a)}}}function vd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(n){return o=n})},focusReset:"manual",scroll:"manual"})}function e(){o!==null&&(o(),o=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),o!==null&&(o(),o=null)}}}function Ir(t){this._internalRoot=t}Un.prototype.render=Ir.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var a=e.current,l=Ke();rd(a,l,t,e,null,null)},Un.prototype.unmount=Ir.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rd(t.current,2,null,t,null,null),rn(),e[Bl]=null}};function Un(t){this._internalRoot=t}Un.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ec();t={blockedOn:null,target:t,priority:e};for(var a=0;a<tl.length&&e!==0&&e<tl[a].priority;a++);tl.splice(a,0,t),a===0&&pd(t)}};var yd=c.version;if(yd!=="19.2.4")throw Error(r(527,yd,"19.2.4"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(e),t=t!==null?C(t):null,t=t===null?null:t.stateNode,t};var M0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mn.isDisabled&&Mn.supportsFiber)try{fo=Mn.inject(M0),Ge=Mn}catch{}}return ii.createRoot=function(t,e){if(!d(t))throw Error(r(299));var a=!1,l="",o=Bf,i=Ef,n=zf;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=nd(t,1,!1,null,null,a,l,null,o,i,n,vd),t[Bl]=e.current,Tr(t),new Ir(e)},ii.hydrateRoot=function(t,e,a){if(!d(t))throw Error(r(299));var l=!1,o="",i=Bf,n=Ef,s=zf,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),e=nd(t,1,!0,e,a??null,l,o,g,i,n,s,vd),e.context=ud(null),a=e.current,l=Ke(),l=Qn(l),o=Ga(l),o.callback=null,ka(a,o,l),a=l,e.current.lanes=a,po(e,a),fa(e),t[Bl]=e.current,Tr(t),new Un(e)},ii.version="19.2.4",ii}var Ud;function X0(){if(Ud)return tc.exports;Ud=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),tc.exports=Q0(),tc.exports}var j0=X0(),Md={},q0="@vercel/analytics",L0="1.6.1",F0=()=>{window.va||(window.va=function(...c){(window.vaq=window.vaq||[]).push(c)})};function Pd(){return typeof window<"u"}function $d(){try{const u="production"}catch{}return"production"}function K0(u="auto"){if(u==="auto"){window.vam=$d();return}window.vam=u}function Z0(){return(Pd()?window.vam:$d())||"production"}function cc(){return Z0()==="development"}function J0(u){return u.scriptSrc?u.scriptSrc:cc()?"https://va.vercel-scripts.com/v1/script.debug.js":u.basePath?`${u.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function W0(u={debug:!0}){var c;if(!Pd())return;K0(u.mode),F0(),u.beforeSend&&((c=window.va)==null||c.call(window,"beforeSend",u.beforeSend));const f=J0(u);if(document.head.querySelector(`script[src*="${f}"]`))return;const r=document.createElement("script");r.src=f,r.defer=!0,r.dataset.sdkn=q0+(u.framework?`/${u.framework}`:""),r.dataset.sdkv=L0,u.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),u.endpoint?r.dataset.endpoint=u.endpoint:u.basePath&&(r.dataset.endpoint=`${u.basePath}/insights`),u.dsn&&(r.dataset.dsn=u.dsn),r.onerror=()=>{const d=cc()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${f}. ${d}`)},cc()&&u.debug===!1&&(r.dataset.debug="false"),document.head.appendChild(r)}function I0({route:u,path:c}){var f;(f=window.va)==null||f.call(window,"pageview",{route:u,path:c})}function P0(){if(!(typeof process>"u"||typeof Md>"u"))return Md.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function $0(u){return k.useEffect(()=>{var c;u.beforeSend&&((c=window.va)==null||c.call(window,"beforeSend",u.beforeSend))},[u.beforeSend]),k.useEffect(()=>{W0({framework:u.framework||"react",basePath:u.basePath??P0(),...u.route!==void 0&&{disableAutoTrack:!0},...u})},[]),k.useEffect(()=>{u.route&&u.path&&I0({route:u.route,path:u.path})},[u.route,u.path]),null}const th=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,wd=1920*1080*4;let eh=class{constructor(c,f,r,d,m=0,v=0,_=2,b=wd,p=[]){lt(this,"parentElement");lt(this,"canvasElement");lt(this,"gl");lt(this,"program",null);lt(this,"uniformLocations",{});lt(this,"fragmentShader");lt(this,"rafId",null);lt(this,"lastRenderTime",0);lt(this,"currentFrame",0);lt(this,"speed",0);lt(this,"currentSpeed",0);lt(this,"providedUniforms");lt(this,"mipmaps",[]);lt(this,"hasBeenDisposed",!1);lt(this,"resolutionChanged",!0);lt(this,"textures",new Map);lt(this,"minPixelRatio");lt(this,"maxPixelCount");lt(this,"isSafari",oh());lt(this,"uniformCache",{});lt(this,"textureUnitMap",new Map);lt(this,"initProgram",()=>{const c=ah(this.gl,th,this.fragmentShader);c&&(this.program=c)});lt(this,"setupPositionAttribute",()=>{const c=this.gl.getAttribLocation(this.program,"a_position"),f=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,f);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(c),this.gl.vertexAttribPointer(c,2,this.gl.FLOAT,!1,0,0)});lt(this,"setupUniforms",()=>{const c={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([f,r])=>{if(c[f]=this.gl.getUniformLocation(this.program,f),r instanceof HTMLImageElement){const d=`${f}AspectRatio`;c[d]=this.gl.getUniformLocation(this.program,d)}}),this.uniformLocations=c});lt(this,"renderScale",1);lt(this,"parentWidth",0);lt(this,"parentHeight",0);lt(this,"parentDevicePixelWidth",0);lt(this,"parentDevicePixelHeight",0);lt(this,"devicePixelsSupported",!1);lt(this,"resizeObserver",null);lt(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([c])=>{var f;if(c!=null&&c.borderBoxSize[0]){const r=(f=c.devicePixelContentBoxSize)==null?void 0:f[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=c.borderBoxSize[0].inlineSize,this.parentHeight=c.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});lt(this,"handleVisualViewportChange",()=>{var c;(c=this.resizeObserver)==null||c.disconnect(),this.setupResizeObserver()});lt(this,"handleResize",()=>{let c=0,f=0;const r=Math.max(1,window.devicePixelRatio),d=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const C=Math.max(1,this.minPixelRatio/r);c=this.parentDevicePixelWidth*C*d,f=this.parentDevicePixelHeight*C*d}else{let C=Math.max(r,this.minPixelRatio)*d;if(this.isSafari){const B=ih();C*=Math.max(1,B)}c=Math.round(this.parentWidth)*C,f=Math.round(this.parentHeight)*C}const m=Math.sqrt(this.maxPixelCount)/Math.sqrt(c*f),v=Math.min(1,m),_=Math.round(c*v),b=Math.round(f*v),p=_/Math.round(this.parentWidth);(this.canvasElement.width!==_||this.canvasElement.height!==b||this.renderScale!==p)&&(this.renderScale=p,this.canvasElement.width=_,this.canvasElement.height=b,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});lt(this,"render",c=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const f=c-this.lastRenderTime;this.lastRenderTime=c,this.currentSpeed!==0&&(this.currentFrame+=f*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});lt(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});lt(this,"setTextureUniform",(c,f)=>{if(!f.complete||f.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${c} must be fully loaded`);const r=this.textures.get(c);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(c)||this.textureUnitMap.set(c,this.textureUnitMap.size);const d=this.textureUnitMap.get(c);this.gl.activeTexture(this.gl.TEXTURE0+d);const m=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,m),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,f),this.mipmaps.includes(c)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const v=this.gl.getError();if(v!==this.gl.NO_ERROR||m===null){console.error("Paper Shaders: WebGL error when uploading texture:",v);return}this.textures.set(c,m);const _=this.uniformLocations[c];if(_){this.gl.uniform1i(_,d);const b=`${c}AspectRatio`,p=this.uniformLocations[b];if(p){const C=f.naturalWidth/f.naturalHeight;this.gl.uniform1f(p,C)}}});lt(this,"areUniformValuesEqual",(c,f)=>c===f?!0:Array.isArray(c)&&Array.isArray(f)&&c.length===f.length?c.every((r,d)=>this.areUniformValuesEqual(r,f[d])):!1);lt(this,"setUniformValues",c=>{this.gl.useProgram(this.program),Object.entries(c).forEach(([f,r])=>{let d=r;if(r instanceof HTMLImageElement&&(d=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[f],d))return;this.uniformCache[f]=d;const m=this.uniformLocations[f];if(!m){console.warn(`Uniform location for ${f} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(f,r);else if(Array.isArray(r)){let v=null,_=null;if(r[0]!==void 0&&Array.isArray(r[0])){const b=r[0].length;if(r.every(p=>p.length===b))v=r.flat(),_=b;else{console.warn(`All child arrays must be the same length for ${f}`);return}}else v=r,_=v.length;switch(_){case 2:this.gl.uniform2fv(m,v);break;case 3:this.gl.uniform3fv(m,v);break;case 4:this.gl.uniform4fv(m,v);break;case 9:this.gl.uniformMatrix3fv(m,!1,v);break;case 16:this.gl.uniformMatrix4fv(m,!1,v);break;default:console.warn(`Unsupported uniform array length: ${_}`)}}else typeof r=="number"?this.gl.uniform1f(m,r):typeof r=="boolean"?this.gl.uniform1i(m,r?1:0):console.warn(`Unsupported uniform type for ${f}: ${typeof r}`)})});lt(this,"getCurrentFrame",()=>this.currentFrame);lt(this,"setFrame",c=>{this.currentFrame=c,this.lastRenderTime=performance.now(),this.render(performance.now())});lt(this,"setSpeed",(c=1)=>{this.speed=c,this.setCurrentSpeed(document.hidden?0:c)});lt(this,"setCurrentSpeed",c=>{this.currentSpeed=c,this.rafId===null&&c!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&c===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});lt(this,"setMaxPixelCount",(c=wd)=>{this.maxPixelCount=c,this.handleResize()});lt(this,"setMinPixelRatio",(c=2)=>{this.minPixelRatio=c,this.handleResize()});lt(this,"setUniforms",c=>{this.setUniformValues(c),this.providedUniforms={...this.providedUniforms,...c},this.render(performance.now())});lt(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});lt(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(c=>{this.gl.deleteTexture(c)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(c instanceof HTMLElement)this.parentElement=c;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const N=document.createElement("style");N.innerHTML=lh,N.setAttribute("data-paper-shader",""),document.head.prepend(N)}const C=document.createElement("canvas");this.canvasElement=C,this.parentElement.prepend(C),this.fragmentShader=f,this.providedUniforms=r,this.mipmaps=p,this.currentFrame=v,this.minPixelRatio=_,this.maxPixelCount=b;const B=C.getContext("webgl2",d);if(!B)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=B,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(m),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function Rd(u,c,f){const r=u.createShader(c);return r?(u.shaderSource(r,f),u.compileShader(r),u.getShaderParameter(r,u.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+u.getShaderInfoLog(r)),u.deleteShader(r),null)):null}function ah(u,c,f){const r=u.getShaderPrecisionFormat(u.FRAGMENT_SHADER,u.MEDIUM_FLOAT),d=r?r.precision:null;d&&d<23&&(c=c.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),f=f.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const m=Rd(u,u.VERTEX_SHADER,c),v=Rd(u,u.FRAGMENT_SHADER,f);if(!m||!v)return null;const _=u.createProgram();return _?(u.attachShader(_,m),u.attachShader(_,v),u.linkProgram(_),u.getProgramParameter(_,u.LINK_STATUS)?(u.detachShader(_,m),u.detachShader(_,v),u.deleteShader(m),u.deleteShader(v),_):(console.error("Unable to initialize the shader program: "+u.getProgramInfoLog(_)),u.deleteProgram(_),u.deleteShader(m),u.deleteShader(v),null)):null}const lh=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function oh(){const u=navigator.userAgent.toLowerCase();return u.includes("safari")&&!u.includes("chrome")&&!u.includes("android")}function ih(){const u=(visualViewport==null?void 0:visualViewport.scale)??1,c=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,f=window.innerWidth-document.documentElement.clientWidth,r=u*c+f,d=outerWidth/r,m=Math.round(100*d);return m%5===0?m/100:m===33?1/3:m===67?2/3:m===133?4/3:d}const Ye={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},al={fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},jt={none:0,contain:1,cover:2},ee=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,ua=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,pc=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,ci=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,si=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,tp=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,wa=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Cl=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,Td={maxColorCount:10},nh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${Td.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${ee}
${ua}
${ci}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${Td.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,oc={maxColorCount:10,maxNoiseIterations:8},uh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${oc.maxColorCount}];
uniform float u_colorsCount;

uniform float u_thickness;
uniform float u_radius;
uniform float u_innerShape;
uniform float u_noiseScale;
uniform float u_noiseIterations;

in vec2 v_objectUV;

out vec4 fragColor;

${ee}
${si}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
vec2 fbm(vec2 n0, vec2 n1) {
  vec2 total = vec2(0.0);
  float amplitude = .4;
  for (int i = 0; i < ${oc.maxNoiseIterations}; i++) {
    if (i >= int(u_noiseIterations)) break;
    total.x += valueNoise(n0) * amplitude;
    total.y += valueNoise(n1) * amplitude;
    n0 *= 1.99;
    n1 *= 1.99;
    amplitude *= 0.65;
  }
  return total;
}

float getNoise(vec2 uv, vec2 pUv, float t) {
  vec2 pUvLeft = pUv + .03 * t;
  float period = max(abs(u_noiseScale * TWO_PI), 1e-6);
  vec2 pUvRight = vec2(fract(pUv.x / period) * period, pUv.y) + .03 * t;
  vec2 noise = fbm(pUvLeft, pUvRight);
  return mix(noise.y, noise.x, smoothstep(-.25, .25, uv.x));
}

float getRingShape(vec2 uv) {
  float radius = u_radius;
  float thickness = u_thickness;

  float distance = length(uv);
  float ringValue = 1. - smoothstep(radius, radius + thickness, distance);
  ringValue *= smoothstep(radius - pow(u_innerShape, 3.) * thickness, radius, distance);

  return ringValue;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = u_time;

  float cycleDuration = 3.;
  float period2 = 2.0 * cycleDuration;
  float localTime1 = fract((0.1 * t + cycleDuration) / period2) * period2;
  float localTime2 = fract((0.1 * t) / period2) * period2;
  float timeBlend = .5 + .5 * sin(.1 * t * PI / cycleDuration - .5 * PI);

  float atg = atan(shape_uv.y, shape_uv.x) + .001;
  float l = length(shape_uv);
  float radialOffset = .5 * l - inversesqrt(max(1e-4, l));
  vec2 polar_uv1 = vec2(atg, localTime1 - radialOffset) * u_noiseScale;
  vec2 polar_uv2 = vec2(atg, localTime2 - radialOffset) * u_noiseScale;
  
  float noise1 = getNoise(shape_uv, polar_uv1, t);
  float noise2 = getNoise(shape_uv, polar_uv2, t);

  float noise = mix(noise1, noise2, timeBlend);

  shape_uv *= (.8 + 1.2 * noise);

  float ringShape = getRingShape(shape_uv);

  float mixer = ringShape * ringShape * (u_colorsCount - 1.);
  int idxLast = int(u_colorsCount) - 1;
  vec4 gradient = u_colors[idxLast];
  gradient.rgb *= gradient.a;
  for (int i = ${oc.maxColorCount} - 2; i >= 0; i--) {
    float localT = clamp(mixer - float(idxLast - i - 1), 0., 1.);
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * ringShape;
  float opacity = gradient.a * ringShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,rh=`#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform vec4 u_colorFront;
uniform vec4 u_colorMid;
uniform vec4 u_colorBack;
uniform float u_brightness;
uniform float u_contrast;

in vec2 v_patternUV;

out vec4 fragColor;

${ua}

float neuroShape(vec2 uv, float t) {
  vec2 sine_acc = vec2(0.);
  vec2 res = vec2(0.);
  float scale = 8.;

  for (int j = 0; j < 15; j++) {
    uv = rotate(uv, 1.);
    sine_acc = rotate(sine_acc, 1.);
    vec2 layer = uv * scale + float(j) + sine_acc - t;
    sine_acc += sin(layer);
    res += (.5 + .5 * cos(layer)) / scale;
    scale *= (1.2);
  }
  return res.x + res.y;
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= .13;

  float t = .5 * u_time;

  float noise = neuroShape(shape_uv, t);

  noise = (1. + u_brightness) * noise * noise;
  noise = pow(noise, .7 + 6. * u_contrast);
  noise = min(1.4, noise);

  float blend = smoothstep(0.7, 1.4, noise);

  vec4 frontC = u_colorFront;
  frontC.rgb *= frontC.a;
  vec4 midC = u_colorMid;
  midC.rgb *= midC.a;
  vec4 blendFront = mix(midC, frontC, blend);

  float safeNoise = max(noise, 0.0);
  vec3 color = blendFront.rgb * safeNoise;
  float opacity = clamp(blendFront.a * safeNoise, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,Od={maxColorCount:10},ch=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Od.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_spreading;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}
${ua}
${si}
${tp}


vec3 voronoiShape(vec2 uv, float time) {
  vec2 i_uv = floor(uv);
  vec2 f_uv = fract(uv);

  float spreading = .25 * clamp(u_spreading, 0., 1.);

  float minDist = 1.;
  vec2 randomizer = vec2(0.);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 tileOffset = vec2(float(x), float(y));
      vec2 rand = randomGB(i_uv + tileOffset);
      vec2 cellCenter = vec2(.5 + 1e-4);
      cellCenter += spreading * cos(time + TWO_PI * rand);
      cellCenter -= .5;
      cellCenter = rotate(cellCenter, randomR(vec2(rand.x, rand.y)) + .1 * time);
      cellCenter += .5;
      float dist = length(tileOffset + cellCenter - f_uv);
      if (dist < minDist) {
        minDist = dist;
        randomizer = rand;
      }
    }
  }

  return vec3(minDist, randomizer);
}

void main() {

  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.5;

  const float firstFrameOffset = -10.;
  float t = u_time + firstFrameOffset;

  vec3 voronoi = voronoiShape(shape_uv, t) + 1e-4;

  float radius = .25 * clamp(u_size, 0., 1.) - .5 * clamp(u_sizeRange, 0., 1.) * voronoi[2];
  float dist = voronoi[0];
  float edgeWidth = fwidth(dist);
  float dots = 1. - smoothstep(radius - edgeWidth, radius + edgeWidth, dist);

  float shape = voronoi[1];

  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Od.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
    localT = round(localT * steps) / steps;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 color = gradient.rgb * dots;
  float opacity = gradient.a * dots;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,sh=`#version 300 es
precision mediump float;

uniform vec4 u_colorBack;
uniform vec4 u_colorFill;
uniform vec4 u_colorStroke;
uniform float u_dotSize;
uniform float u_gapX;
uniform float u_gapY;
uniform float u_strokeWidth;
uniform float u_sizeRange;
uniform float u_opacityRange;
uniform float u_shape;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}
${Cl}

float polygon(vec2 p, float N, float rot) {
  float a = atan(p.x, p.y) + rot;
  float r = TWO_PI / float(N);

  return cos(floor(.5 + a / r) * r - a) * length(p);
}

void main() {

  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  vec2 shape_uv = 100. * v_patternUV;

  vec2 gap = max(abs(vec2(u_gapX, u_gapY)), vec2(1e-6));
  vec2 grid = fract(shape_uv / gap) + 1e-4;
  vec2 grid_idx = floor(shape_uv / gap);
  float sizeRandomizer = .5 + .8 * snoise(2. * vec2(grid_idx.x * 100., grid_idx.y));
  float opacity_randomizer = .5 + .7 * snoise(2. * vec2(grid_idx.y, grid_idx.x));

  vec2 center = vec2(0.5) - 1e-3;
  vec2 p = (grid - center) * vec2(u_gapX, u_gapY);

  float baseSize = u_dotSize * (1. - sizeRandomizer * u_sizeRange);
  float strokeWidth = u_strokeWidth * (1. - sizeRandomizer * u_sizeRange);

  float dist;
  if (u_shape < 0.5) {
    // Circle
    dist = length(p);
  } else if (u_shape < 1.5) {
    // Diamond
    strokeWidth *= 1.5;
    dist = polygon(1.5 * p, 4., .25 * PI);
  } else if (u_shape < 2.5) {
    // Square
    dist = polygon(1.03 * p, 4., 1e-3);
  } else {
    // Triangle
    strokeWidth *= 1.5;
    p = p * 2. - 1.;
    p *= .9;
    p.y = 1. - p.y;
    p.y -= .75 * baseSize;
    dist = polygon(p, 3., 1e-3);
  }

  float edgeWidth = fwidth(dist);
  float shapeOuter = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist - strokeWidth);
  float shapeInner = 1. - smoothstep(baseSize - edgeWidth, baseSize + edgeWidth, dist);
  float stroke = shapeOuter - shapeInner;

  float dotOpacity = max(0., 1. - opacity_randomizer * u_opacityRange);
  stroke *= dotOpacity;
  shapeInner *= dotOpacity;

  stroke *= u_colorStroke.a;
  shapeInner *= u_colorFill.a;

  vec3 color = vec3(0.);
  color += stroke * u_colorStroke.rgb;
  color += shapeInner * u_colorFill.rgb;
  color += (1. - shapeInner - stroke) * u_colorBack.rgb * u_colorBack.a;

  float opacity = 0.;
  opacity += stroke;
  opacity += shapeInner;
  opacity += (1. - opacity) * u_colorBack.a;

  fragColor = vec4(color, opacity);
}
`,fh={circle:0,diamond:1,square:2,triangle:3},ic={maxColorCount:8,maxBallsCount:20},mh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${ic.maxColorCount}];
uniform float u_colorsCount;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_count;

in vec2 v_objectUV;

out vec4 fragColor;

${ee}
${si}
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  vec2 p0 = vec2(i, 0.0);
  vec2 p1 = vec2(i + 1.0, 0.0);
  return mix(randomR(p0), randomR(p1), u);
}

float getBallShape(vec2 uv, vec2 c, float p) {
  float s = .5 * length(uv - c);
  s = 1. - clamp(s, 0., 1.);
  s = pow(s, p);
  return s;
}

void main() {
  vec2 shape_uv = v_objectUV;

  shape_uv += .5;

  const float firstFrameOffset = 2503.4;
  float t = .2 * (u_time + firstFrameOffset);

  vec3 totalColor = vec3(0.);
  float totalShape = 0.;
  float totalOpacity = 0.;

  for (int i = 0; i < ${ic.maxBallsCount}; i++) {
    if (i >= int(ceil(u_count))) break;

    float idxFract = float(i) / float(${ic.maxBallsCount});
    float angle = TWO_PI * idxFract;

    float speed = 1. - .2 * idxFract;
    float noiseX = noise(angle * 10. + float(i) + t * speed);
    float noiseY = noise(angle * 20. + float(i) - t * speed);

    vec2 pos = vec2(.5) + 1e-4 + .9 * (vec2(noiseX, noiseY) - .5);

    int safeIndex = i % int(u_colorsCount + 0.5);
    vec4 ballColor = u_colors[safeIndex];
    ballColor.rgb *= ballColor.a;

    float sizeFrac = 1.;
    if (float(i) > floor(u_count - 1.)) {
      sizeFrac *= fract(u_count);
    }

    float shape = getBallShape(shape_uv, pos, 45. - 30. * u_size * sizeFrac);
    shape *= pow(u_size, .2);
    shape = smoothstep(0., 1., shape);

    totalColor += ballColor.rgb * shape;
    totalShape += shape;
    totalOpacity += ballColor.a * shape;
  }

  totalColor /= max(totalShape, 1e-4);
  totalOpacity /= max(totalShape, 1e-4);

  float edge_width = fwidth(totalShape);
  float finalShape = smoothstep(.4, .4 + edge_width, totalShape);

  vec3 color = totalColor * finalShape;
  float opacity = totalOpacity * finalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,Vd={maxColorCount:5},dh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Vd.maxColorCount}];
uniform float u_colorsCount;

uniform float u_stepsPerColor;
uniform vec4 u_colorGlow;
uniform vec4 u_colorGap;
uniform float u_distortion;
uniform float u_gap;
uniform float u_glow;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}
${tp}

vec4 voronoi(vec2 x, float t) {
  vec2 ip = floor(x);
  vec2 fp = fract(x);

  vec2 mg, mr;
  float md = 8.;
  float rand = 0.;

  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      float raw_hash = o.x;
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      float d = dot(r, r);

      if (d < md) {
        md = d;
        mr = r;
        mg = g;
        rand = raw_hash;
      }
    }
  }

  md = 8.;
  for (int j = -2; j <= 2; j++) {
    for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j));
      vec2 o = randomGB(ip + g);
      o = .5 + u_distortion * sin(t + TWO_PI * o);
      vec2 r = g + o - fp;
      if (dot(mr - r, mr - r) > .00001) {
        md = min(md, dot(.5 * (mr + r), normalize(r - mr)));
      }
    }
  }

  return vec4(md, mr, rand);
}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 1.25;

  float t = u_time;

  vec4 voronoiRes = voronoi(shape_uv, t);

  float shape = clamp(voronoiRes.w, 0., 1.);
  float mixer = shape * (u_colorsCount - 1.);
  mixer = (shape - .5 / u_colorsCount) * u_colorsCount;
  float steps = max(1., u_stepsPerColor);

  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Vd.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float localT = clamp(mixer - float(i - 1), 0.0, 1.0);
    localT = round(localT * steps) / steps;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  if ((mixer < 0.) || (mixer > (u_colorsCount - 1.))) {
    float localT = mixer + 1.;
    if (mixer > (u_colorsCount - 1.)) {
      localT = mixer - (u_colorsCount - 1.);
    }
    localT = round(localT * steps) / steps;
    vec4 cFst = u_colors[0];
    cFst.rgb *= cFst.a;
    vec4 cLast = u_colors[int(u_colorsCount - 1.)];
    cLast.rgb *= cLast.a;
    gradient = mix(cLast, cFst, localT);
  }

  vec3 cellColor = gradient.rgb;
  float cellOpacity = gradient.a;

  float glows = length(voronoiRes.yz * u_glow);
  glows = pow(glows, 1.5);

  vec3 color = mix(cellColor, u_colorGlow.rgb * u_colorGlow.a, u_colorGlow.a * glows);
  float opacity = cellOpacity + u_colorGlow.a * glows;

  float edge = voronoiRes.x;
  float smoothEdge = .02 / (2. * u_scale) * (1. + .5 * u_gap);
  edge = smoothstep(u_gap - smoothEdge, u_gap + smoothEdge, edge);

  color = mix(u_colorGap.rgb * u_colorGap.a, color, edge);
  opacity = mix(u_colorGap.a, opacity, edge);

  fragColor = vec4(color, opacity);
}
`,ph=`#version 300 es
precision mediump float;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_shape;
uniform float u_frequency;
uniform float u_amplitude;
uniform float u_spacing;
uniform float u_proportion;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}

void main() {
  vec2 shape_uv = v_patternUV;
  shape_uv *= 4.;

  float wave = .5 * cos(shape_uv.x * u_frequency * TWO_PI);
  float zigzag = 2. * abs(fract(shape_uv.x * u_frequency) - .5);
  float irregular = sin(shape_uv.x * .25 * u_frequency * TWO_PI) * cos(shape_uv.x * u_frequency * TWO_PI);
  float irregular2 = .75 * (sin(shape_uv.x * u_frequency * TWO_PI) + .5 * cos(shape_uv.x * .5 * u_frequency * TWO_PI));

  float offset = mix(zigzag, wave, smoothstep(0., 1., u_shape));
  offset = mix(offset, irregular, smoothstep(1., 2., u_shape));
  offset = mix(offset, irregular2, smoothstep(2., 3., u_shape));
  offset *= 2. * u_amplitude;

  float spacing = (.001 + u_spacing);
  float shape = .5 + .5 * sin((shape_uv.y + offset) * PI / spacing);

  float aa = .0001 + fwidth(shape);
  float dc = 1. - clamp(u_proportion, 0., 1.);
  float e0 = dc - u_softness - aa;
  float e1 = dc + u_softness + aa;
  float res = smoothstep(min(e0, e1), max(e0, e1), shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,Dd={maxColorCount:10},gh=`#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Dd.maxColorCount}];
uniform float u_colorsCount;
uniform float u_proportion;
uniform float u_softness;
uniform float u_shape;
uniform float u_shapeScale;
uniform float u_distortion;
uniform float u_swirl;
uniform float u_swirlIterations;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}
${ua}
float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}


void main() {
  vec2 uv = v_patternUV;
  uv *= .5;

  const float firstFrameOffset = 118.;
  float t = 0.0625 * (u_time + firstFrameOffset);

  float n1 = valueNoise(uv * 1. + t);
  float n2 = valueNoise(uv * 2. - t);
  float angle = n1 * TWO_PI;
  uv.x += 4. * u_distortion * n2 * cos(angle);
  uv.y += 4. * u_distortion * n2 * sin(angle);

  float swirl = u_swirl;
  for (int i = 1; i <= 20; i++) {
    if (i >= int(u_swirlIterations)) break;
    float iFloat = float(i);
    //    swirl *= (1. - smoothstep(.0, .25, length(fwidth(uv))));
    uv.x += swirl / iFloat * cos(t + iFloat * 1.5 * uv.y);
    uv.y += swirl / iFloat * cos(t + iFloat * 1. * uv.x);
  }

  float proportion = clamp(u_proportion, 0., 1.);

  float shape = 0.;
  if (u_shape < .5) {
    vec2 checksShape_uv = uv * (.5 + 3.5 * u_shapeScale);
    shape = .5 + .5 * sin(checksShape_uv.x) * cos(checksShape_uv.y);
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else if (u_shape < 1.5) {
    vec2 stripesShape_uv = uv * (2. * u_shapeScale);
    float f = fract(stripesShape_uv.y);
    shape = smoothstep(.0, .55, f) * (1.0 - smoothstep(.45, 1., f));
    shape += .48 * sign(proportion - .5) * pow(abs(proportion - .5), .5);
  } else {
    float shapeScaling = 5. * (1. - u_shapeScale);
    float e0 = 0.45 - shapeScaling;
    float e1 = 0.55 + shapeScaling;
    shape = smoothstep(min(e0, e1), max(e0, e1), 1.0 - uv.y + 0.3 * (proportion - 0.5));
  }

  float mixer = shape * (u_colorsCount - 1.);
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float aa = fwidth(shape);
  for (int i = 1; i < ${Dd.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0.0, 1.0);

    float localMixerStart = floor(m);
    float softness = .5 * u_softness + fwidth(m);
    float smoothed = smoothstep(max(0., .5 - softness - aa), min(1., .5 + softness + aa), m - localMixerStart);
    float stepped = localMixerStart + smoothed;

    m = mix(stepped, m, u_softness);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb;
  float opacity = gradient.a;

  ${wa}

  fragColor = vec4(color, opacity);
}
`,hh={checks:0,stripes:1,edge:2},Nd={maxColorCount:5},vh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colorBloom;
uniform vec4 u_colors[${Nd.maxColorCount}];
uniform float u_colorsCount;

uniform float u_density;
uniform float u_spotty;
uniform float u_midSize;
uniform float u_midIntensity;
uniform float u_intensity;
uniform float u_bloom;

in vec2 v_objectUV;

out vec4 fragColor;

${ee}
${ua}
${si}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

${pc}

float raysShape(vec2 uv, float r, float freq, float intensity, float radius) {
  float a = atan(uv.y, uv.x);
  vec2 left = vec2(a * freq, r);
  vec2 right = vec2(fract(a / TWO_PI) * TWO_PI * freq, r);
  float n_left = pow(valueNoise(left), intensity);
  float n_right = pow(valueNoise(right), intensity);
  float shape = mix(n_right, n_left, smoothstep(-.15, .15, uv.x));
  return shape;
}

void main() {
  vec2 shape_uv = v_objectUV;

  float t = .2 * u_time;

  float radius = length(shape_uv);
  float spots = 6.5 * abs(u_spotty);

  float intensity = 4. - 3. * clamp(u_intensity, 0., 1.);

  float delta = 1. - smoothstep(0., 1., radius);

  float midSize = 10. * abs(u_midSize);
  float ms_lo = 0.02 * midSize;
  float ms_hi = max(midSize, 1e-6);
  float middleShape = pow(u_midIntensity, 0.3) * (1. - smoothstep(ms_lo, ms_hi, 3.0 * radius));
  middleShape = pow(middleShape, 5.0);

  vec3 accumColor = vec3(0.0);
  float accumAlpha = 0.0;

  for (int i = 0; i < ${Nd.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 rotatedUV = rotate(shape_uv, float(i) + 1.0);

    float r1 = radius * (1.0 + 0.4 * float(i)) - 3.0 * t;
    float r2 = 0.5 * radius * (1.0 + spots) - 2.0 * t;
    float density = 6. * u_density + step(.5, u_density) * pow(4.5 * (u_density - .5), 4.);
    float f = mix(1.0, 3.0 + 0.5 * float(i), hash11(float(i) * 15.)) * density;

    float ray = raysShape(rotatedUV, r1, 5.0 * f, intensity, radius);
    ray *= raysShape(rotatedUV, r2, 4.0 * f, intensity, radius);
    ray += (1. + 4. * ray) * middleShape;
    ray = clamp(ray, 0.0, 1.0);

    float srcAlpha = u_colors[i].a * ray;
    vec3 srcColor = u_colors[i].rgb * srcAlpha;

    vec3 alphaBlendColor = accumColor + (1.0 - accumAlpha) * srcColor;
    float alphaBlendAlpha = accumAlpha + (1.0 - accumAlpha) * srcAlpha;

    vec3 addBlendColor = accumColor + srcColor;
    float addBlendAlpha = accumAlpha + srcAlpha;

    accumColor = mix(alphaBlendColor, addBlendColor, u_bloom);
    accumAlpha = mix(alphaBlendAlpha, addBlendAlpha, u_bloom);
  }

  float overlayAlpha = u_colorBloom.a;
  vec3 overlayColor = u_colorBloom.rgb * overlayAlpha;

  vec3 colorWithOverlay = accumColor + accumAlpha * overlayColor;
  accumColor = mix(accumColor, colorWithOverlay, u_bloom);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;

  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;
  color = clamp(color, 0., 1.);
  opacity = clamp(opacity, 0., 1.);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,yh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_density;
uniform float u_distortion;
uniform float u_strokeWidth;
uniform float u_strokeCap;
uniform float u_strokeTaper;
uniform float u_noise;
uniform float u_noiseFrequency;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${ee}
${Cl}

void main() {
  vec2 uv = 2. * v_patternUV;

  float t = u_time;
  float l = length(uv);
  float density = clamp(u_density, 0., 1.);
  l = pow(max(l, 1e-6), density);
  float angle = atan(uv.y, uv.x) - t;
  float angleNormalised = angle / TWO_PI;

  angleNormalised += .125 * u_noise * snoise(16. * pow(u_noiseFrequency, 3.) * uv);

  float offset = l + angleNormalised;
  offset -= u_distortion * (sin(4. * l - .5 * t) * cos(PI + l + .5 * t));
  float stripe = fract(offset);

  float shape = 2. * abs(stripe - .5);
  float width = 1. - clamp(u_strokeWidth, .005 * u_strokeTaper, 1.);


  float wCap = mix(width, (1. - stripe) * (1. - step(.5, stripe)), (1. - clamp(l, 0., 1.)));
  width = mix(width, wCap, u_strokeCap);
  width *= (1. - clamp(u_strokeTaper, 0., 1.) * l);

  float fw = fwidth(offset);
  float fwMult = 4. - 3. * (smoothstep(.05, .4, 2. * u_strokeWidth) * smoothstep(.05, .4, 2. * (1. - u_strokeWidth)));
  float pixelSize = mix(fwMult * fw, fwidth(shape), clamp(fw, 0., 1.));
  pixelSize = mix(pixelSize, .002, u_strokeCap * (1. - clamp(l, 0., 1.)));

  float res = smoothstep(width - pixelSize - u_softness, width + pixelSize + u_softness, shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,Yd={maxColorCount:10},_h=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Yd.maxColorCount}];
uniform float u_colorsCount;
uniform float u_bandCount;
uniform float u_twist;
uniform float u_center;
uniform float u_proportion;
uniform float u_softness;
uniform float u_noise;
uniform float u_noiseFrequency;

in vec2 v_objectUV;

out vec4 fragColor;

${ee}
${Cl}
${ua}

void main() {
  vec2 shape_uv = v_objectUV;

  float l = length(shape_uv);
  l = max(1e-4, l);

  float t = u_time;

  float angle = ceil(u_bandCount) * atan(shape_uv.y, shape_uv.x) + t;
  float angle_norm = angle / TWO_PI;

  float twist = 3. * clamp(u_twist, 0., 1.);
  float offset = pow(l, -twist) + angle_norm;

  float shape = fract(offset);
  shape = 1. - abs(2. * shape - 1.);
  shape += u_noise * snoise(15. * pow(u_noiseFrequency, 2.) * shape_uv);

  float mid = smoothstep(.2, .2 + .8 * u_center, pow(l, twist));
  shape = mix(0., shape, mid);

  float proportion = clamp(u_proportion, 0., 1.);
  float exponent = mix(.25, 1., proportion * 2.);
  exponent = mix(exponent, 10., max(0., proportion * 2. - 1.));
  shape = pow(shape, exponent);

  float mixer = shape * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;

  float outerShape = 0.;
  for (int i = 1; i < ${Yd.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;

    float m = clamp(mixer - float(i - 1), 0., 1.);
    float aa = fwidth(m);
    m = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, m);

    if (i == 1) {
      outerShape = m;
    }

    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  float midAA = .1 * fwidth(pow(l, -twist));
  float outerMid = smoothstep(.2, .2 + midAA, pow(l, twist));
  outerShape = mix(0., outerShape, outerMid);

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,xh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform float u_pxSize;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;

out vec4 fragColor;

${Cl}
${ee}
${pc}
${ci}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));

  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {
  float t = .5 * u_time;

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec2 shapeUV = normalizedUV;

  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 boxSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  
  if (u_shape > 3.5) {
    vec2 objectBoxSize = vec2(0.);
    // fit = none
    objectBoxSize.x = min(boxSize.x, boxSize.y);
    if (u_fit == 1.) { // fit = contain
      objectBoxSize.x = min(u_resolution.x, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      objectBoxSize.x = max(u_resolution.x, u_resolution.y);
    }
    objectBoxSize.y = objectBoxSize.x;
    vec2 objectWorldScale = u_resolution.xy / objectBoxSize;

    shapeUV *= objectWorldScale;
    shapeUV += boxOrigin * (objectWorldScale - 1.);
    shapeUV += vec2(-u_offsetX, u_offsetY);
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
  } else {
    vec2 patternBoxSize = vec2(0.);
    // fit = none
    patternBoxSize.x = patternBoxRatio * min(boxSize.x / patternBoxRatio, boxSize.y);
    float patternWorldNoFitBoxWidth = patternBoxSize.x;
    if (u_fit == 1.) { // fit = contain
      patternBoxSize.x = patternBoxRatio * min(u_resolution.x / patternBoxRatio, u_resolution.y);
    } else if (u_fit == 2.) { // fit = cover
      patternBoxSize.x = patternBoxRatio * max(u_resolution.x / patternBoxRatio, u_resolution.y);
    }
    patternBoxSize.y = patternBoxSize.x / patternBoxRatio;
    vec2 patternWorldScale = u_resolution.xy / patternBoxSize;

    shapeUV += vec2(-u_offsetX, u_offsetY) / patternWorldScale;
    shapeUV += boxOrigin;
    shapeUV -= boxOrigin / patternWorldScale;
    shapeUV *= u_resolution.xy;
    shapeUV /= u_pixelRatio;
    if (u_fit > 0.) {
      shapeUV *= (patternWorldNoFitBoxWidth / patternBoxSize.x);
    }
    shapeUV /= u_scale;
    shapeUV = graphicRotation * shapeUV;
    shapeUV += boxOrigin / patternWorldScale;
    shapeUV -= boxOrigin;
    shapeUV += .5;
  }

  float shape = 0.;
  if (u_shape < 1.5) {
    // Simplex noise
    shapeUV *= .001;

    shape = 0.5 + 0.5 * getSimplexNoise(shapeUV, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    // Warp
    shapeUV *= .003;

    for (float i = 1.0; i < 6.0; i++) {
      shapeUV.x += 0.6 / i * cos(i * 2.5 * shapeUV.y + t);
      shapeUV.y += 0.6 / i * cos(i * 1.5 * shapeUV.x + t);
    }

    shape = .15 / max(0.001, abs(sin(t - shapeUV.y - shapeUV.x)));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    // Dots
    shapeUV *= .05;

    float stripeIdx = floor(2. * shapeUV.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shapeUV.x) * cos(shapeUV.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    // Sine wave
    shapeUV *= 4.;

    float wave = cos(.5 * shapeUV.x - 2. * t) * sin(1.5 * shapeUV.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shapeUV.y + wave);

  } else if (u_shape < 5.5) {
    // Ripple

    float dist = length(shapeUV);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Swirl

    float l = length(shapeUV);
    float angle = 6. * atan(shapeUV.y, shapeUV.x) + 4. * t;
    float twist = 1.2;
    float offset = 1. / pow(max(l, 1e-6), twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else {
    // Sphere
    shapeUV *= 2.;

    float d = 1. - pow(length(shapeUV), 2.);
    vec3 pos = vec3(shapeUV, sqrt(max(0., d)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }


  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), shape);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`,bh={simplex:1,warp:2,dots:3,wave:4,ripple:5,swirl:6,sphere:7},ep={random:1,"2x2":2,"4x4":3,"8x8":4},Hd={maxColorCount:7},Ah=`#version 300 es
precision lowp float;

uniform mediump float u_time;
uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Hd.maxColorCount}];
uniform float u_colorsCount;
uniform float u_softness;
uniform float u_intensity;
uniform float u_noise;
uniform float u_shape;

uniform mediump float u_originX;
uniform mediump float u_originY;
uniform mediump float u_worldWidth;
uniform mediump float u_worldHeight;
uniform mediump float u_fit;

uniform mediump float u_scale;
uniform mediump float u_rotation;
uniform mediump float u_offsetX;
uniform mediump float u_offsetY;

in vec2 v_objectUV;
in vec2 v_patternUV;
in vec2 v_objectBoxSize;
in vec2 v_patternBoxSize;

out vec4 fragColor;

${ee}
${Cl}
${ua}
${si}

float valueNoiseR(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomR(i);
  float b = randomR(i + vec2(1.0, 0.0));
  float c = randomR(i + vec2(0.0, 1.0));
  float d = randomR(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}
vec4 fbmR(vec2 n0, vec2 n1, vec2 n2, vec2 n3) {
  float amplitude = 0.2;
  vec4 total = vec4(0.);
  for (int i = 0; i < 3; i++) {
    n0 = rotate(n0, 0.3);
    n1 = rotate(n1, 0.3);
    n2 = rotate(n2, 0.3);
    n3 = rotate(n3, 0.3);
    total.x += valueNoiseR(n0) * amplitude;
    total.y += valueNoiseR(n1) * amplitude;
    total.z += valueNoiseR(n2) * amplitude;
    total.z += valueNoiseR(n3) * amplitude;
    n0 *= 1.99;
    n1 *= 1.99;
    n2 *= 1.99;
    n3 *= 1.99;
    amplitude *= 0.6;
  }
  return total;
}

${pc}

vec2 truchet(vec2 uv, float idx){
  idx = fract(((idx - .5) * 2.));
  if (idx > 0.75) {
    uv = vec2(1.0) - uv;
  } else if (idx > 0.5) {
    uv = vec2(1.0 - uv.x, uv.y);
  } else if (idx > 0.25) {
    uv = 1.0 - vec2(1.0 - uv.x, uv.y);
  }
  return uv;
}

void main() {

  const float firstFrameOffset = 7.;
  float t = .1 * (u_time + firstFrameOffset);

  vec2 shape_uv = vec2(0.);
  vec2 grain_uv = vec2(0.);

  float r = u_rotation * PI / 180.;
  float cr = cos(r);
  float sr = sin(r);
  mat2 graphicRotation = mat2(cr, sr, -sr, cr);
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  if (u_shape > 3.5) {
    shape_uv = v_objectUV;
    grain_uv = shape_uv;

    // apply inverse transform to grain_uv so it respects the originXY
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    grain_uv -= graphicOffset;
    grain_uv *= v_objectBoxSize;
    grain_uv *= .7;
  } else {
    shape_uv = .5 * v_patternUV;
    grain_uv = 100. * v_patternUV;

    // apply inverse transform to grain_uv so it respects the originXY
    grain_uv = transpose(graphicRotation) * grain_uv;
    grain_uv *= u_scale;
    if (u_fit > 0.) {
      vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
      givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
      float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
      vec2 patternBoxGivenSize = vec2(
      (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
      (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
      );
      patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;
      float patternBoxNoFitBoxWidth = patternBoxRatio * min(patternBoxGivenSize.x / patternBoxRatio, patternBoxGivenSize.y);
      grain_uv /= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
    }
    vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;
    grain_uv -= graphicOffset / patternBoxScale;
    grain_uv *= 1.6;
  }


  float shape = 0.;

  if (u_shape < 1.5) {
    // Sine wave

    float wave = cos(.5 * shape_uv.x - 4. * t) * sin(1.5 * shape_uv.x + 2. * t) * (.75 + .25 * cos(6. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);

  } else if (u_shape < 2.5) {
    // Grid (dots)

    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 100.);
    rand = sign(rand - .5) * pow(4. * abs(rand), .3);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 4.);

  } else if (u_shape < 3.5) {
    // Truchet pattern

    float n2 = valueNoiseR(shape_uv * .4 - 3.75 * t);
    shape_uv.x += 10.;
    shape_uv *= .6;

    vec2 tile = truchet(fract(shape_uv), randomR(floor(shape_uv)));

    float distance1 = length(tile);
    float distance2 = length(tile - vec2(1.));

    n2 -= .5;
    n2 *= .1;
    shape = smoothstep(.2, .55, distance1 + n2) * (1. - smoothstep(.45, .8, distance1 - n2));
    shape += smoothstep(.2, .55, distance2 + n2) * (1. - smoothstep(.45, .8, distance2 - n2));

    shape = pow(shape, 1.5);

  } else if (u_shape < 4.5) {
    // Corners

    shape_uv *= .6;
    vec2 outer = vec2(.5);

    vec2 bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * sin(5.25 * t)));
    vec2 tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape = 1. - bl.x * bl.y * tr.x * tr.y;

    shape_uv = -shape_uv;
    bl = smoothstep(vec2(0.), outer, shape_uv + vec2(.1 + .1 * sin(3. * t), .2 - .1 * cos(5.25 * t)));
    tr = smoothstep(vec2(0.), outer, 1. - shape_uv);
    shape -= bl.x * bl.y * tr.x * tr.y;

    shape = 1. - smoothstep(0., 1., shape);

  } else if (u_shape < 5.5) {
    // Ripple

    shape_uv *= 2.;
    float dist = length(.4 * shape_uv);
    float waves = sin(pow(dist, 1.2) * 5. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    // Blob

    t *= 2.;

    vec2 f1_traj = .25 * vec2(1.3 * sin(t), .2 + 1.3 * cos(.6 * t + 4.));
    vec2 f2_traj = .2 * vec2(1.2 * sin(-t), 1.3 * sin(1.6 * t));
    vec2 f3_traj = .25 * vec2(1.7 * cos(-.6 * t), cos(-1.6 * t));
    vec2 f4_traj = .3 * vec2(1.4 * cos(.8 * t), 1.2 * sin(-.6 * t - 3.));

    shape = .5 * pow(1. - clamp(0., 1., length(shape_uv + f1_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f2_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f3_traj)), 5.);
    shape += .5 * pow(1. - clamp(0., 1., length(shape_uv + f4_traj)), 5.);

    shape = smoothstep(.0, .9, shape);
    float edge = smoothstep(.25, .3, shape);
    shape = mix(.0, shape, edge);

  } else {
    // Sphere

    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(max(d, 0.)));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }

  float baseNoise = snoise(grain_uv * .5);
  vec4 fbmVals = fbmR(
  .002 * grain_uv + 10.,
  .003 * grain_uv,
  .001 * grain_uv,
  rotate(.4 * grain_uv, 2.)
  );
  float grainDist = baseNoise * snoise(grain_uv * .2) - fbmVals.x - fbmVals.y;
  float rawNoise = .75 * baseNoise - fbmVals.w - fbmVals.z;
  float noise = clamp(rawNoise, 0., 1.);

  shape += u_intensity * 2. / u_colorsCount * (grainDist + .5);
  shape += u_noise * 10. / u_colorsCount * noise;

  float aa = fwidth(shape);

  shape = clamp(shape - .5 / u_colorsCount, 0., 1.);
  float totalShape = smoothstep(0., u_softness + 2. * aa, clamp(shape * u_colorsCount, 0., 1.));
  float mixer = shape * (u_colorsCount - 1.);

  int cntStop = int(u_colorsCount) - 1;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  for (int i = 1; i < ${Hd.maxColorCount}; i++) {
    if (i > cntStop) break;

    float localT = clamp(mixer - float(i - 1), 0., 1.);
    localT = smoothstep(.5 - .5 * u_softness - aa, .5 + .5 * u_softness + aa, localT);

    vec4 c = u_colors[i];
    c.rgb *= c.a;
    gradient = mix(gradient, c, localT);
  }

  vec3 color = gradient.rgb * totalShape;
  float opacity = gradient.a * totalShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  fragColor = vec4(color, opacity);
}
`,Sh={wave:1,dots:2,truchet:3,corners:4,ripple:5,blob:6,sphere:7},nc={maxColorCount:7},Ch=`#version 300 es
precision lowp float;

uniform float u_time;
uniform mediump float u_scale;

uniform vec4 u_colors[${nc.maxColorCount}];
uniform float u_colorsCount;
uniform vec4 u_colorBack;
uniform float u_density;
uniform float u_angle1;
uniform float u_angle2;
uniform float u_length;
uniform bool u_edges;
uniform float u_blur;
uniform float u_fadeIn;
uniform float u_fadeOut;
uniform float u_gradient;

in vec2 v_objectUV;

out vec4 fragColor;

${ee}

const float zLimit = .5;

vec2 getPanel(float angle, vec2 uv, float invLength, float aa) {
  float sinA = sin(angle);
  float cosA = cos(angle);

  float denom = sinA - uv.y * cosA;
  if (abs(denom) < .01) return vec2(0.);

  float z = uv.y / denom;

  if (z <= 0. || z > zLimit) return vec2(0.);

  float zRatio = z / zLimit;
  float panelMap = 1. - zRatio;
  float x = uv.x * (cosA * z + 1.) * invLength;

  float zOffset = zRatio - .5;
  float left = -.5 + zOffset * u_angle1;
  float right = .5 - zOffset * u_angle2;
  float blurX = aa + 2. * panelMap * u_blur;

  float leftEdge1 = left - blurX;
  float leftEdge2 = left + .25 * blurX;
  float rightEdge1 = right - .25 * blurX;
  float rightEdge2 = right + blurX;

  float panel = smoothstep(leftEdge1, leftEdge2, x) * (1.0 - smoothstep(rightEdge1, rightEdge2, x));
  panel *= mix(0., panel, smoothstep(0., .01 / max(u_scale, 1e-6), panelMap));

  float midScreen = abs(sinA);
  if (u_edges == true) {
    panelMap = mix(.99, panelMap, panel * clamp(panelMap / (.15 * (1. - pow(midScreen, .1))), 0.0, 1.0));
  } else if (midScreen < .07) {
    panel *= (midScreen * 15.);
  }

  return vec2(panel, panelMap);
}

vec4 blendColor(vec4 colorA, float panelMask, float panelMap) {
  float fade = 1. - smoothstep(.97 - .97 * u_fadeIn, 1., panelMap);

  fade *= smoothstep(-.2 * (1. - u_fadeOut), u_fadeOut, panelMap);

  vec3 blendedRGB = mix(vec3(0.), colorA.rgb, fade);
  float blendedAlpha = mix(0., colorA.a, fade);

  return vec4(blendedRGB, blendedAlpha) * panelMask;
}

void main() {
  vec2 uv = v_objectUV;
  uv *= 1.25;

  float t = .02 * u_time;
  t = fract(t);
  bool reverseTime = (t < 0.5);

  vec3 color = vec3(0.);
  float opacity = 0.;

  float aa = .005 / u_scale;
  int colorsCount = int(u_colorsCount);

  vec4 premultipliedColors[${nc.maxColorCount}];
  for (int i = 0; i < ${nc.maxColorCount}; i++) {
    if (i >= colorsCount) break;
    vec4 c = u_colors[i];
    c.rgb *= c.a;
    premultipliedColors[i] = c;
  }

  float invLength = 1.5 / max(u_length, .001);

  float totalColorWeight = 0.;
  int panelsNumber = 12;

  float densityNormalizer = 1.;
  if (colorsCount == 4) {
    panelsNumber = 16;
    densityNormalizer = 1.34;
  } else if (colorsCount == 5) {
    panelsNumber = 20;
    densityNormalizer = 1.67;
  } else if (colorsCount == 7) {
    panelsNumber = 14;
    densityNormalizer = 1.17;
  }

  float fPanelsNumber = float(panelsNumber);

  float totalPanelsShape = 0.;
  float panelGrad = 1. - clamp(u_gradient, 0., 1.);

  for (int set = 0; set < 2; set++) {
    bool isForward = (set == 0 && !reverseTime) || (set == 1 && reverseTime);
    if (!isForward) continue;

    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 1) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(t + offset);
      float angleNorm = densityFract / u_density;
      if (densityFract >= .5 || angleNorm >= .3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((.3 - angleNorm) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      if (angleNorm > .5) {
        angleNorm = 0.5;
      }
      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      if (panel[0] <= .001) continue;
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      float panelMap = panel[1];

      int colorIdx = idx % colorsCount;
      int nextColorIdx = (idx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }


    for (int i = 0; i <= 20; i++) {
      if (i >= panelsNumber) break;

      int idx = panelsNumber - 1 - i;

      float offset = float(idx) / fPanelsNumber;
      if (set == 0) {
        offset += .5;
      }

      float densityFract = densityNormalizer * fract(-t + offset);
      float angleNorm = -densityFract / u_density;
      if (densityFract >= .5 || angleNorm < -.3) continue;

      float smoothDensity = clamp((.5 - densityFract) / .1, 0., 1.) * clamp(densityFract / .01, 0., 1.);
      float smoothAngle = clamp((angleNorm + .3) / .05, 0., 1.);
      if (smoothDensity * smoothAngle < .001) continue;

      vec2 panel = getPanel(angleNorm * TWO_PI + PI, uv, invLength, aa);
      float panelMask = panel[0] * smoothDensity * smoothAngle;
      if (panelMask <= .001) continue;
      float panelMap = panel[1];

      int colorIdx = (colorsCount - (idx % colorsCount)) % colorsCount;
      if (colorIdx < 0) colorIdx += colorsCount;
      int nextColorIdx = (colorIdx + 1) % colorsCount;

      vec4 colorA = premultipliedColors[colorIdx];
      vec4 colorB = premultipliedColors[nextColorIdx];

      colorA = mix(colorA, colorB, max(0., smoothstep(.0, .45, panelMap) - panelGrad));
      vec4 blended = blendColor(colorA, panelMask, panelMap);
      color = blended.rgb + color * (1. - blended.a);
      opacity = blended.a + opacity * (1. - blended.a);
    }
  }

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,Bh=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_highlights;
uniform float u_layering;
uniform float u_edges;
uniform float u_caustic;
uniform float u_waves;

in vec2 v_imageUV;

out vec4 fragColor;

${ee}
${ua}
${Cl}

float getUvFrame(vec2 uv) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);

  float left   = smoothstep(0., aax, uv.x);
  float right = 1.0 - smoothstep(1. - aax, 1., uv.x);
  float bottom = smoothstep(0., aay, uv.y);
  float top = 1.0 - smoothstep(1. - aay, 1., uv.y);

  return left * right * bottom * top;
}

mat2 rotate2D(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

float getCausticNoise(vec2 uv, float t, float scale) {
  vec2 n = vec2(.1);
  vec2 N = vec2(.1);
  mat2 m = rotate2D(.5);
  for (int j = 0; j < 6; j++) {
    uv *= m;
    n *= m;
    vec2 q = uv * scale + float(j) + n + (.5 + .5 * float(j)) * (mod(float(j), 2.) - 1.) * t;
    n += sin(q);
    N += cos(q) / scale;
    scale *= 1.1;
  }
  return (N.x + N.y + 1.);
}

void main() {
  vec2 imageUV = v_imageUV;
  vec2 patternUV = v_imageUV - .5;
  patternUV = (patternUV * vec2(u_imageAspectRatio, 1.));
  patternUV /= (.01 + .09 * u_size);

  float t = u_time;

  float wavesNoise = snoise((.3 + .1 * sin(t)) * .1 * patternUV + vec2(0., .4 * t));

  float causticNoise = getCausticNoise(patternUV + u_waves * vec2(1., -1.) * wavesNoise, 2. * t, 1.5);

  causticNoise += u_layering * getCausticNoise(patternUV + 2. * u_waves * vec2(1., -1.) * wavesNoise, 1.5 * t, 2.);
  causticNoise = causticNoise * causticNoise;

  float edgesDistortion = smoothstep(0., .1, imageUV.x);
  edgesDistortion *= smoothstep(0., .1, imageUV.y);
  edgesDistortion *= (smoothstep(1., 1.1, imageUV.x) + (1.0 - smoothstep(.8, .95, imageUV.x)));
  edgesDistortion *= (1.0 - smoothstep(.9, 1., imageUV.y));
  edgesDistortion = mix(edgesDistortion, 1., u_edges);

  float causticNoiseDistortion = .02 * causticNoise * edgesDistortion;

  float wavesDistortion = .1 * u_waves * wavesNoise;

  imageUV += vec2(wavesDistortion, -wavesDistortion);
  imageUV += (u_caustic * causticNoiseDistortion);

  float frame = getUvFrame(imageUV);

  vec4 image = texture(u_image, imageUV);
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;

  vec3 color = mix(backColor.rgb, image.rgb, image.a * frame);
  float opacity = backColor.a + image.a * frame;

  causticNoise = max(-.2, causticNoise);

  float hightlight = .025 * u_highlights * causticNoise;
  hightlight *= u_colorHighlight.a;
  color = mix(color, u_colorHighlight.rgb, .05 * u_highlights * causticNoise);
  opacity += hightlight;

  color += hightlight * (.5 + .5 * wavesNoise);
  opacity += hightlight * (.5 + .5 * wavesNoise);

  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Eh=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_rotation;

uniform vec4 u_colorBack;
uniform vec4 u_colorShadow;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_shadows;
uniform float u_angle;
uniform float u_stretch;
uniform float u_shape;
uniform float u_distortion;
uniform float u_highlights;
uniform float u_distortionShape;
uniform float u_shift;
uniform float u_blur;
uniform float u_edges;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_imageUV;

out vec4 fragColor;

${ee}
${ua}
${ci}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, float softness) {
  float aax = 2. * fwidth(uv.x);
  float aay = 2. * fwidth(uv.y);
  float left   = smoothstep(0., aax + softness, uv.x);
  float right  = 1. - smoothstep(1. - softness - aax, 1., uv.x);
  float bottom = smoothstep(0., aay + softness, uv.y);
  float top    = 1. - smoothstep(1. - softness - aay, 1., uv.y);
  return left * right * bottom * top;
}

const int MAX_RADIUS = 50;
vec4 samplePremultiplied(sampler2D tex, vec2 uv) {
  vec4 c = texture(tex, uv);
  c.rgb *= c.a;
  return c;
}
vec4 getBlur(sampler2D tex, vec2 uv, vec2 texelSize, vec2 dir, float sigma) {
  if (sigma <= .5) return texture(tex, uv);
  int radius = int(min(float(MAX_RADIUS), ceil(3.0 * sigma)));

  float twoSigma2 = 2.0 * sigma * sigma;
  float gaussianNorm = 1.0 / sqrt(TWO_PI * sigma * sigma);

  vec4 sum = samplePremultiplied(tex, uv) * gaussianNorm;
  float weightSum = gaussianNorm;

  for (int i = 1; i <= MAX_RADIUS; i++) {
    if (i > radius) break;

    float x = float(i);
    float w = exp(-(x * x) / twoSigma2) * gaussianNorm;

    vec2 offset = dir * texelSize * x;
    vec4 s1 = samplePremultiplied(tex, uv + offset);
    vec4 s2 = samplePremultiplied(tex, uv - offset);

    sum += (s1 + s2) * w;
    weightSum += 2.0 * w;
  }

  vec4 result = sum / weightSum;
  if (result.a > 0.) {
    result.rgb /= result.a;
  }

  return result;
}

vec2 rotateAspect(vec2 p, float a, float aspect) {
  p.x *= aspect;
  p = rotate(p, a);
  p.x /= aspect;
  return p;
}

float smoothFract(float x) {
  float f = fract(x);
  float w = fwidth(x);

  float edge = abs(f - 0.5) - 0.5;
  float band = smoothstep(-w, w, edge);

  return mix(f, 1.0 - f, band);
}

void main() {

  float patternRotation = -u_angle * PI / 180.;
  float patternSize = mix(200., 5., u_size);

  vec2 uv = v_imageUV;

  vec2 uvMask = gl_FragCoord.xy / u_resolution.xy;
  vec2 sw = vec2(.005);
  vec4 margins = vec4(u_marginLeft, u_marginTop, u_marginRight, u_marginBottom);
  float mask =
  smoothstep(margins[0], margins[0] + sw.x, uvMask.x + sw.x) *
  smoothstep(margins[2], margins[2] + sw.x, 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1], margins[1] + sw.y, uvMask.y + sw.y) *
  smoothstep(margins[3], margins[3] + sw.y, 1.0 - uvMask.y + sw.y);
  float maskOuter =
  smoothstep(margins[0] - sw.x, margins[0], uvMask.x + sw.x) *
  smoothstep(margins[2] - sw.x, margins[2], 1.0 - uvMask.x + sw.x) *
  smoothstep(margins[1] - sw.y, margins[1], uvMask.y + sw.y) *
  smoothstep(margins[3] - sw.y, margins[3], 1.0 - uvMask.y + sw.y);
  float maskStroke = maskOuter - mask;
  float maskInner =
  smoothstep(margins[0] - 2. * sw.x, margins[0], uvMask.x) *
  smoothstep(margins[2] - 2. * sw.x, margins[2], 1.0 - uvMask.x) *
  smoothstep(margins[1] - 2. * sw.y, margins[1], uvMask.y) *
  smoothstep(margins[3] - 2. * sw.y, margins[3], 1.0 - uvMask.y);
  float maskStrokeInner = maskInner - mask;

  uv -= .5;
  uv *= patternSize;
  uv = rotateAspect(uv, patternRotation, u_imageAspectRatio);

  float curve = 0.;
  float patternY = uv.y / u_imageAspectRatio;
  if (u_shape > 4.5) {
    // pattern
    curve = .5 + .5 * sin(.5 * PI * uv.x) * cos(.5 * PI * patternY);
  } else if (u_shape > 3.5) {
    // zigzag
    curve = 10. * abs(fract(.1 * patternY) - .5);
  } else if (u_shape > 2.5) {
    // wave
    curve = 4. * sin(.23 * patternY);
  } else if (u_shape > 1.5) {
    // lines irregular
    curve = .5 + .5 * sin(.5 * uv.x) * sin(1.7 * uv.x);
  } else {
    // lines
  }

  vec2 UvToFract = uv + curve;
  vec2 fractOrigUV = fract(uv);
  vec2 floorOrigUV = floor(uv);

  float x = smoothFract(UvToFract.x);
  float xNonSmooth = fract(UvToFract.x) + .0001;

  float highlightsWidth = 2. * max(.001, fwidth(UvToFract.x));
  highlightsWidth += 2. * maskStrokeInner;
  float highlights = smoothstep(0., highlightsWidth, xNonSmooth);
  highlights *= smoothstep(1., 1. - highlightsWidth, xNonSmooth);
  highlights = 1. - highlights;
  highlights *= u_highlights;
  highlights = clamp(highlights, 0., 1.);
  highlights *= mask;

  float shadows = pow(x, 1.3);
  float distortion = 0.;
  float fadeX = 1.;
  float frameFade = 0.;

  float aa = fwidth(xNonSmooth);
  aa = max(aa, fwidth(uv.x));
  aa = max(aa, fwidth(UvToFract.x));
  aa = max(aa, .0001);

  if (u_distortionShape == 1.) {
    distortion = -pow(1.5 * x, 3.);
    distortion += (.5 - u_shift);

    frameFade = pow(1.5 * x, 3.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
  } else if (u_distortionShape == 2.) {
    distortion = 2. * pow(x, 2.);
    distortion -= (.5 + u_shift);

    frameFade = pow(abs(x - .5), 4.);
    aa = max(.2, aa);
    aa += mix(.2, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion = mix(.5, distortion, fadeX);
    frameFade = mix(1., frameFade, .5 * fadeX);
  } else if (u_distortionShape == 3.) {
    distortion = pow(2. * (xNonSmooth - .5), 6.);
    distortion -= .25;
    distortion -= u_shift;

    frameFade = 1. - 2. * pow(abs(x - .4), 2.);
    aa = .15;
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    frameFade = mix(1., frameFade, fadeX);

  } else if (u_distortionShape == 4.) {
    x = xNonSmooth;
    distortion = sin((x + .25) * TWO_PI);
    shadows = .5 + .5 * asin(distortion) / (.5 * PI);
    distortion *= .5;
    distortion -= u_shift;
    frameFade = .5 + .5 * sin(x * TWO_PI);
  } else if (u_distortionShape == 5.) {
    distortion -= pow(abs(x), .2) * x;
    distortion += .33;
    distortion -= 3. * u_shift;
    distortion *= .33;

    frameFade = .3 * (smoothstep(.0, 1., x));
    shadows = pow(x, 2.5);

    aa = max(.1, aa);
    aa += mix(.1, 0., u_size);
    fadeX = smoothstep(0., aa, xNonSmooth) * smoothstep(1., 1. - aa, xNonSmooth);
    distortion *= fadeX;
  }

  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= (.8 / vec2(length(dudx), length(dudy)));
  grainUV += .5;
  float grain = valueNoise(grainUV);
  grain = smoothstep(.4, .7, grain);
  grain *= u_grainMixer;
  distortion = mix(distortion, 0., grain);

  shadows = min(shadows, 1.);
  shadows += maskStrokeInner;
  shadows *= mask;
  shadows = min(shadows, 1.);
  shadows *= pow(u_shadows, 2.);
  shadows = clamp(shadows, 0., 1.);

  distortion *= 3. * u_distortion;
  frameFade *= u_distortion;

  fractOrigUV.x += distortion;
  floorOrigUV = rotateAspect(floorOrigUV, -patternRotation, u_imageAspectRatio);
  fractOrigUV = rotateAspect(fractOrigUV, -patternRotation, u_imageAspectRatio);

  uv = (floorOrigUV + fractOrigUV) / patternSize;
  uv += pow(maskStroke, 4.);

  uv += vec2(.5);

  uv = mix(v_imageUV, uv, smoothstep(0., .7, mask));
  float blur = mix(0., 50., u_blur);
  blur = mix(0., blur, smoothstep(.5, 1., mask));

  float edgeDistortion = mix(.0, .04, u_edges);
  edgeDistortion += .06 * frameFade * u_edges;
  edgeDistortion *= mask;
  float frame = getUvFrame(uv, edgeDistortion);

  float stretch = 1. - smoothstep(0., .5, xNonSmooth) * smoothstep(1., 1. - .5, xNonSmooth);
  stretch = pow(stretch, 2.);
  stretch *= mask;
  stretch *= getUvFrame(uv, .1 + .05 * mask * frameFade);
  uv.y = mix(uv.y, .5, u_stretch * stretch);

  vec4 image = getBlur(u_image, uv, 1. / u_resolution / u_pixelRatio, vec2(0., 1.), blur);
  image.rgb *= image.a;
  vec4 backColor = u_colorBack;
  backColor.rgb *= backColor.a;
  vec4 highlightColor = u_colorHighlight;
  highlightColor.rgb *= highlightColor.a;
  vec4 shadowColor = u_colorShadow;

  vec3 color = highlightColor.rgb * highlights;
  float opacity = highlightColor.a * highlights;

  shadows = mix(shadows * shadowColor.a, 0., highlights);
  color = mix(color, shadowColor.rgb * shadowColor.a, .5 * shadows);
  color += .5 * pow(shadows, .5) * shadowColor.rgb;
  opacity += shadows;
  color = clamp(color, vec3(0.), vec3(1.));
  opacity = clamp(opacity, 0., 1.);

  color += image.rgb * (1. - opacity) * frame;
  opacity += image.a * (1. - opacity) * frame;

  color += backColor.rgb * (1. - opacity);
  opacity += backColor.a * (1. - opacity);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  grainOverlayStrength *= mask;
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,zh={lines:1,linesIrregular:2,wave:3,zigzag:4,pattern:5},Uh={prism:1,lens:2,contour:3,cascade:4,flat:5},Mh=`#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;

uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform vec4 u_colorHighlight;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_type;
uniform float u_pxSize;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_colorSteps;

out vec4 fragColor;


${ci}
${ee}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

vec2 getImageUV(vec2 uv) {
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  float r = u_rotation * PI / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  vec2 imageUV = uv;
  imageUV *= imageBoxScale;
  imageUV += boxOrigin * (imageBoxScale - 1.);
  imageUV += graphicOffset;
  imageUV /= u_scale;
  imageUV.x *= u_imageAspectRatio;
  imageUV = graphicRotation * imageUV;
  imageUV.x /= u_imageAspectRatio;

  imageUV += .5;
  imageUV.y = 1. - imageUV.y;

  return imageUV;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
0, 8, 2, 10,
12, 4, 14, 6,
3, 11, 1, 9,
15, 7, 13, 5
);

const int bayer8x8[64] = int[64](
0, 32, 8, 40, 2, 34, 10, 42,
48, 16, 56, 24, 50, 18, 58, 26,
12, 44, 4, 36, 14, 46, 6, 38,
60, 28, 52, 20, 62, 30, 54, 22,
3, 35, 11, 43, 1, 33, 9, 41,
51, 19, 59, 27, 49, 17, 57, 25,
15, 47, 7, 39, 13, 45, 5, 37,
63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(fract(uv / float(size)) * float(size));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}


void main() {

  float pxSize = u_pxSize * u_pixelRatio;
  vec2 pxSizeUV = gl_FragCoord.xy - .5 * u_resolution;
  pxSizeUV /= pxSize;
  vec2 canvasPixelizedUV = (floor(pxSizeUV) + .5) * pxSize;
  vec2 normalizedUV = canvasPixelizedUV / u_resolution;

  vec2 imageUV = getImageUV(normalizedUV);
  vec2 ditheringNoiseUV = canvasPixelizedUV;
  vec4 image = texture(u_image, imageUV);
  float frame = getUvFrame(imageUV, pxSize / u_resolution);

  int type = int(floor(u_type));
  float dithering = 0.0;

  float lum = dot(vec3(.2126, .7152, .0722), image.rgb);
  lum = u_inverted ? (1. - lum) : lum;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoiseUV), lum);
    } break;
    case 2:
    dithering = getBayerValue(pxSizeUV, 2);
    break;
    case 3:
    dithering = getBayerValue(pxSizeUV, 4);
    break;
    default :
    dithering = getBayerValue(pxSizeUV, 8);
    break;
  }

  float colorSteps = max(floor(u_colorSteps), 1.);
  vec3 color = vec3(0.0);
  float opacity = 1.;

  dithering -= .5;
  float brightness = clamp(lum + dithering / colorSteps, 0.0, 1.0);
  brightness = mix(0.0, brightness, frame);
  brightness = mix(0.0, brightness, image.a);
  float quantLum = floor(brightness * colorSteps + 0.5) / colorSteps;
  quantLum = mix(0.0, quantLum, frame);

  if (u_originalColors == true) {
    vec3 normColor = image.rgb / max(lum, 0.001);
    color = normColor * quantLum;

    float quantAlpha = floor(image.a * colorSteps + 0.5) / colorSteps;
    opacity = mix(quantLum, 1., quantAlpha);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;
    vec3 hlColor = u_colorHighlight.rgb * u_colorHighlight.a;
    float hlOpacity = u_colorHighlight.a;

    fgColor = mix(fgColor, hlColor, step(1.02 - .02 * u_colorSteps, brightness));
    fgOpacity = mix(fgOpacity, hlOpacity, step(1.02 - .02 * u_colorSteps, brightness));

    color = fgColor * quantLum;
    opacity = fgOpacity * quantLum;
    color += bgColor * (1.0 - opacity);
    opacity += bgOpacity * (1.0 - opacity);
  }

  fragColor = vec4(color, opacity);
}
`,Gd={maxColorCount:10},wh=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;
uniform mediump float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Gd.maxColorCount}];
uniform float u_colorsCount;

uniform float u_angle;
uniform float u_noise;
uniform float u_innerGlow;
uniform float u_outerGlow;
uniform float u_contour;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1. - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1. - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float circle(vec2 uv, vec2 c, vec2 r) {
  return 1. - smoothstep(r[0], r[1], length(uv - c));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float shadowShape(vec2 uv, float t, float contour) {
  vec2 scaledUV = uv;

  // base shape tranjectory
  float posY = mix(-1., 2., t);

  // scaleX when it's moving down
  scaledUV.y -= .5;
  float mainCircleScale = sst(0., .8, posY) * lst(1.4, .9, posY);
  scaledUV *= vec2(1., 1. + 1.5 * mainCircleScale);
  scaledUV.y += .5;

  // base shape
  float innerR = .4;
  float outerR = 1. - .3 * (sst(.1, .2, t) * (1. - sst(.2, .5, t)));
  float s = circle(scaledUV, vec2(.5, posY - .2), vec2(innerR, outerR));
  float shapeSizing = sst(.2, .3, t) * sst(.6, .3, t);
  s = pow(s, 1.4);
  s *= 1.2;

  // flat gradient to take over the shadow shape
  float topFlattener = 0.;
  {
    float pos = posY - uv.y;
    float edge = 1.2;
    topFlattener = lst(-.4, 0., pos) * (1. - sst(.0, edge, pos));
    topFlattener = pow(topFlattener, 3.);
    float topFlattenerMixer = (1. - sst(.0, .3, pos));
    s = mix(topFlattener, s, topFlattenerMixer);
  }

  // apple right circle
  {
    float visibility = sst(.6, .7, t) * (1. - sst(.8, .9, t));
    float angle = -2. -t * TWO_PI;
    float rightCircle = circle(uv, vec2(.95 - .2 * cos(angle), .4 - .1 * sin(angle)), vec2(.15, .3));
    rightCircle *= visibility;
    s = mix(s, 0., rightCircle);
  }

  // apple top circle
  {
    float topCircle = circle(uv, vec2(.5, .19), vec2(.05, .25));
    topCircle += 2. * contour * circle(uv, vec2(.5, .19), vec2(.2, .5));
    float visibility = .55 * sst(.2, .3, t) * (1. - sst(.3, .45, t));
    topCircle *= visibility;
    s = mix(s, 0., topCircle);
  }

  float leafMask = circle(uv, vec2(.53, .13), vec2(.08, .19));
  leafMask = mix(leafMask, 0., 1. - sst(.4, .54, uv.x));
  leafMask = mix(0., leafMask, sst(.0, .2, uv.y));
  leafMask *= (sst(.5, 1.1, posY) * sst(1.5, 1.3, posY));
  s += leafMask;

  // apple bottom circle
  {
    float visibility = sst(.0, .4, t) * (1. - sst(.6, .8, t));
    s = mix(s, 0., visibility * circle(uv, vec2(.52, .92), vec2(.09, .25)));
  }

  // random balls that are invisible if apple logo is selected
  {
    float pos = sst(.0, .6, t) * (1. - sst(.6, 1., t));
    s = mix(s, .5, circle(uv, vec2(.0, 1.2 - .5 * pos), vec2(.1, .3)));
    s = mix(s, .0, circle(uv, vec2(1., .5 + .5 * pos), vec2(.1, .3)));

    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * sst(.7, .5, t)), vec2(.07, .22)));
    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * (1. - sst(.5, .7, t))), vec2(.07, .22)));
    s /= max(1e-4, sst(1., .85, uv.y));
  }

  s = clamp(0., 1., s);
  return s;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).g;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).g;

  return sum / norm;
}

void main() {
  vec2 uv = v_objectUV + .5;
  uv.y = 1. - uv.y;

  vec2 imgUV = v_imageUV;
  imgUV -= .5;
  imgUV *= 0.5714285714285714;
  imgUV += .5;
  float imgSoftFrame = getImgFrame(imgUV, .03);

  vec4 img = texture(u_image, imgUV);
  vec2 dudx = dFdx(imgUV);
  vec2 dudy = dFdy(imgUV);

  if (img.a == 0.) {
    fragColor = u_colorBack;
    return;
  }

  float t = .1 * u_time;
  t -= .3;

  float tCopy = t + 1. / 3.;
  float tCopy2 = t + 2. / 3.;

  t = mod(t, 1.);
  tCopy = mod(tCopy, 1.);
  tCopy2 = mod(tCopy2, 1.);

  vec2 animationUV = imgUV - vec2(.5);
  float angle = -u_angle * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  animationUV = vec2(
  animationUV.x * cosA - animationUV.y * sinA,
  animationUV.x * sinA + animationUV.y * cosA
  ) + vec2(.5);

  float shape = img[0];

  img[1] = blurEdge3x3(u_image, imgUV, dudx, dudy, 8., img[1]);

  float outerBlur = 1. - mix(1., img[1], shape);
  float innerBlur = mix(img[1], 0., shape);
  float contour = mix(img[2], 0., shape);

  outerBlur *= imgSoftFrame;

  float shadow = shadowShape(animationUV, t, innerBlur);
  float shadowCopy = shadowShape(animationUV, tCopy, innerBlur);
  float shadowCopy2 = shadowShape(animationUV, tCopy2, innerBlur);

  float inner = .8 + .8 * innerBlur;
  inner = mix(inner, 0., shadow);
  inner = mix(inner, 0., shadowCopy);
  inner = mix(inner, 0., shadowCopy2);

  inner *= mix(0., 2., u_innerGlow);

  inner += (u_contour * 2.) * contour;
  inner = min(1., inner);
  inner *= (1. - shape);

  float outer = 0.;
  {
    t *= 3.;
    t = mod(t - .1, 1.);

    outer = .9 * pow(outerBlur, .8);
    float y = mod(animationUV.y - t, 1.);
    float animatedMask = sst(.3, .65, y) * (1. - sst(.65, 1., y));
    animatedMask = .5 + animatedMask;
    outer *= animatedMask;
    outer *= mix(0., 5., pow(u_outerGlow, 2.));
    outer *= imgSoftFrame;
  }

  inner = pow(inner, 1.2);
  float heat = clamp(inner + outer, 0., 1.);

  heat += (.005 + .35 * u_noise) * (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  float mixer = heat * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float outerShape = 0.;
  for (int i = 1; i < ${Gd.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0., 1.);
    if (i == 1) {
      outerShape = m;
    }
    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  color += .02 * (fract(sin(dot(uv + 1., vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  fragColor = vec4(color, opacity);
}
`;function kd(u){const c=document.createElement("canvas"),f=1e3;return new Promise((r,d)=>{const m=new Image;m.crossOrigin="anonymous",m.addEventListener("load",()=>{(typeof u=="string"?u.endsWith(".svg"):u.type==="image/svg+xml")&&(m.width=f,m.height=f);const v=m.naturalWidth/m.naturalHeight,_=Math.floor(f*.15),b=Math.ceil(_*2.5);let p=f,C=f;v>1?C=Math.floor(f/v):p=Math.floor(f*v),c.width=p+2*b,c.height=C+2*b;const B=c.getContext("2d",{willReadFrequently:!0});if(!B)throw new Error("Failed to get canvas 2d context");B.fillStyle="white",B.fillRect(0,0,c.width,c.height),B.drawImage(m,b,b,p,C);const{width:N,height:Q}=c,T=B.getImageData(0,0,N,Q).data,O=N*Q,D=new Uint8ClampedArray(O);for(let gt=0;gt<O;gt++){const ht=gt*4,Ct=T[ht]??0,Gt=T[ht+1]??0,Nt=T[ht+2]??0;D[gt]=.299*Ct+.587*Gt+.114*Nt|0}const q=_,L=Math.max(1,Math.round(.12*_)),H=5,X=uc(D,N,Q,q,3),P=uc(D,N,Q,L,3),W=uc(D,N,Q,H,1),ft=B.createImageData(N,Q),pt=ft.data;for(let gt=0;gt<O;gt++){const ht=gt*4;pt[ht]=W[gt]??0,pt[ht+1]=X[gt]??0,pt[ht+2]=P[gt]??0,pt[ht+3]=255}B.putImageData(ft,0,0),c.toBlob(gt=>{if(!gt){d(new Error("Failed to create PNG blob"));return}r({blob:gt})},"image/png")}),m.addEventListener("error",()=>{d(new Error("Failed to load image"))}),m.src=typeof u=="string"?u:URL.createObjectURL(u)})}function Qd(u,c,f,r){if(r<=0)return u.slice();const d=new Uint8ClampedArray(c*f),m=new Uint32Array(c*f);for(let v=0;v<f;v++){let _=0;for(let b=0;b<c;b++){const p=v*c+b,C=u[p]??0;_+=C,m[p]=_+(v>0?m[p-c]??0:0)}}for(let v=0;v<f;v++){const _=Math.max(0,v-r),b=Math.min(f-1,v+r);for(let p=0;p<c;p++){const C=Math.max(0,p-r),B=Math.min(c-1,p+r),N=b*c+B,Q=b*c+(C-1),Y=(_-1)*c+B,T=(_-1)*c+(C-1),O=m[N]??0,D=C>0?m[Q]??0:0,q=_>0?m[Y]??0:0,L=C>0&&_>0?m[T]??0:0,H=O-D-q+L,X=(B-C+1)*(b-_+1);d[v*c+p]=Math.round(H/X)}}return d}function uc(u,c,f,r,d){if(r<=0||d<=1)return Qd(u,c,f,r);let m=u,v=u;for(let _=0;_<d;_++)v=Qd(m,c,f,r),m=v;return v}const Rh=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${ee}
${ua}
${Cl}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = 250. / v_responsiveBoxGivenSize;
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${wa}

  fragColor = vec4(color, opacity);
}
`,ap={workingSize:512,iterations:40};function Xd(u){const c=document.createElement("canvas"),f=c.getContext("2d"),r=typeof u=="string"&&u.startsWith("blob:");return new Promise((d,m)=>{if(!u||!f){m(new Error("Invalid file or canvas context"));return}const v=r&&fetch(u).then(b=>b.headers.get("Content-Type")),_=new Image;_.crossOrigin="anonymous",performance.now(),_.onload=async()=>{let b;const p=await v;p?b=p==="image/svg+xml":typeof u=="string"?b=u.endsWith(".svg")||u.startsWith("data:image/svg+xml"):b=u.type==="image/svg+xml";let C=_.width||_.naturalWidth,B=_.height||_.naturalHeight;if(b){const h=C/B;C>B?(C=4096,B=4096/h):(B=4096,C=4096*h),_.width=C,_.height=B}const N=Math.min(C,B),Y=ap.workingSize/N,T=Math.round(C*Y),O=Math.round(B*Y);c.width=C,c.height=B;const D=document.createElement("canvas");D.width=T,D.height=O;const q=D.getContext("2d");q.drawImage(_,0,0,T,O),performance.now();const H=q.getImageData(0,0,T,O).data,X=new Uint8Array(T*O),P=new Uint8Array(T*O);for(let Z=0,h=0;Z<H.length;Z+=4,h++){const G=H[Z+3]===0?0:1;X[h]=G}const W=[],ft=[];for(let Z=0;Z<O;Z++)for(let h=0;h<T;h++){const M=Z*T+h;if(!X[M])continue;let G=!1;h===0||h===T-1||Z===0||Z===O-1?G=!0:G=!X[M-1]||!X[M+1]||!X[M-T]||!X[M+T]||!X[M-T-1]||!X[M-T+1]||!X[M+T-1]||!X[M+T+1],G?(P[M]=1,W.push(M)):ft.push(M)}const pt=Th(X,P,new Uint32Array(ft),new Uint32Array(W),T,O);performance.now();const gt=Oh(pt,X,P,T,O);let ht=0,Ct;for(let Z=0;Z<ft.length;Z++){const h=ft[Z];gt[h]>ht&&(ht=gt[h])}const Gt=document.createElement("canvas");Gt.width=T,Gt.height=O;const Nt=Gt.getContext("2d"),Ut=Nt.createImageData(T,O);for(let Z=0;Z<O;Z++)for(let h=0;h<T;h++){const M=Z*T+h,G=M*4;if(!X[M])Ut.data[G]=255,Ut.data[G+1]=255,Ut.data[G+2]=255,Ut.data[G+3]=0;else{const ot=255*(1-gt[M]/ht);Ut.data[G]=ot,Ut.data[G+1]=ot,Ut.data[G+2]=ot,Ut.data[G+3]=255}}Nt.putImageData(Ut,0,0),f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(Gt,0,0,T,O,0,0,C,B);const z=f.getImageData(0,0,C,B),j=document.createElement("canvas");j.width=C,j.height=B;const $=j.getContext("2d");$.drawImage(_,0,0,C,B);const yt=$.getImageData(0,0,C,B);for(let Z=0;Z<z.data.length;Z+=4){const h=yt.data[Z+3],M=z.data[Z+3];h===0?(z.data[Z]=255,z.data[Z+1]=0):(z.data[Z]=M===0?0:z.data[Z],z.data[Z+1]=h),z.data[Z+2]=255,z.data[Z+3]=255}f.putImageData(z,0,0),Ct=z,c.toBlob(Z=>{if(!Z){m(new Error("Failed to create PNG blob"));return}d({imageData:Ct,pngBlob:Z})},"image/png")},_.onerror=()=>m(new Error("Failed to load image")),_.src=typeof u=="string"?u:URL.createObjectURL(u)})}function Th(u,c,f,r,d,m){const v=f.length,_=new Int32Array(v*4);for(let b=0;b<v;b++){const p=f[b],C=p%d,B=Math.floor(p/d);_[b*4+0]=C<d-1&&u[p+1]?p+1:-1,_[b*4+1]=C>0&&u[p-1]?p-1:-1,_[b*4+2]=B>0&&u[p-d]?p-d:-1,_[b*4+3]=B<m-1&&u[p+d]?p+d:-1}return{interiorPixels:f,boundaryPixels:r,pixelCount:v,neighborIndices:_}}function Oh(u,c,f,r,d){const m=ap.iterations,v=.01,_=new Float32Array(r*d),{interiorPixels:b,neighborIndices:p,pixelCount:C}=u;performance.now();const B=1.9,N=[],Q=[];for(let Y=0;Y<C;Y++){const T=b[Y],O=T%r,D=Math.floor(T/r);(O+D)%2===0?N.push(Y):Q.push(Y)}for(let Y=0;Y<m;Y++){for(const T of N){const O=b[T],D=p[T*4+0],q=p[T*4+1],L=p[T*4+2],H=p[T*4+3];let X=0;D>=0&&(X+=_[D]),q>=0&&(X+=_[q]),L>=0&&(X+=_[L]),H>=0&&(X+=_[H]);const P=(v+X)/4;_[O]=B*P+(1-B)*_[O]}for(const T of Q){const O=b[T],D=p[T*4+0],q=p[T*4+1],L=p[T*4+2],H=p[T*4+3];let X=0;D>=0&&(X+=_[D]),q>=0&&(X+=_[q]),L>=0&&(X+=_[L]),H>=0&&(X+=_[H]);const P=(v+X)/4;_[O]=B*P+(1-B)*_[O]}}return _}const Vh={none:0,circle:1,daisy:2,diamond:3,metaballs:4},Dh=`#version 300 es
precision mediump float;

uniform float u_rotation;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_radius;
uniform float u_contrast;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainSize;
uniform float u_grid;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_type;

in vec2 v_imageUV;

out vec4 fragColor;

${ee}
${ua}
${ci}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float getCircle(vec2 uv, float r, float baseR) {
  r = mix(.25 * baseR, 0., r);
  float d = length(uv - .5);
  float aa = fwidth(d);
  return 1. - smoothstep(r - aa, r + aa, d);
}

float getCell(vec2 uv) {
  float insideX = step(0.0, uv.x) * (1.0 - step(1.0, uv.x));
  float insideY = step(0.0, uv.y) * (1.0 - step(1.0, uv.y));
  return insideX * insideY;
}

float getCircleWithHole(vec2 uv, float r, float baseR) {
  float cell = getCell(uv);

  r = mix(.75 * baseR, 0., r);
  float rMod = mod(r, .5);

  float d = length(uv - .5);
  float aa = fwidth(d);
  float circle = 1. - smoothstep(rMod - aa, rMod + aa, d);
  if (r < .5) {
    return circle;
  } else {
    return cell - circle;
  }
}

float getGooeyBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = .3;
  if (u_grid == 1.) {
    sizeRadius = .42;
  }
  sizeRadius = mix(sizeRadius * baseR, 0., r);
  d = 1. - sst(0., sizeRadius, d);

  d = pow(d, 2. + baseR);
  return d;
}

float getSoftBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = clamp(baseR, 0., 1.);
  sizeRadius = mix(.5 * sizeRadius, 0., r);
  d = 1. - lst(0., sizeRadius, d);
  float powRadius = 1. - lst(0., 2., baseR);
  d = pow(d, 4. + 3. * powRadius);
  return d;
}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

float sigmoid(float x, float k) {
  return 1.0 / (1.0 + exp(-k * (x - 0.5)));
}

float getLumAtPx(vec2 uv, float contrast) {
  vec4 tex = texture(u_image, uv);
  vec3 color = vec3(
  sigmoid(tex.r, contrast),
  sigmoid(tex.g, contrast),
  sigmoid(tex.b, contrast)
  );
  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color);
  lum = mix(1., lum, tex.a);
  lum = u_inverted ? (1. - lum) : lum;
  return lum;
}

float getLumBall(vec2 p, vec2 pad, vec2 inCellOffset, float contrast, float baseR, float stepSize, out vec4 ballColor) {
  p += inCellOffset;
  vec2 uv_i = floor(p);
  vec2 uv_f = fract(p);
  vec2 samplingUV = (uv_i + .5 - inCellOffset) * pad + vec2(.5);
  float outOfFrame = getUvFrame(samplingUV, pad * stepSize);

  float lum = getLumAtPx(samplingUV, contrast);
  ballColor = texture(u_image, samplingUV);
  ballColor.rgb *= ballColor.a;
  ballColor *= outOfFrame;

  float ball = 0.;
  if (u_type == 0.) {
    // classic
    ball = getCircle(uv_f, lum, baseR);
  } else if (u_type == 1.) {
    // gooey
    ball = getGooeyBall(uv_f, lum, baseR);
  } else if (u_type == 2.) {
    // holes
    ball = getCircleWithHole(uv_f, lum, baseR);
  } else if (u_type == 3.) {
    // soft
    ball = getSoftBall(uv_f, lum, baseR);
  }

  return ball * outOfFrame;
}


void main() {

  float stepMultiplier = 1.;
  if (u_type == 0.) {
    // classic
    stepMultiplier = 2.;
  } else if (u_type == 1. || u_type == 3.) {
    // gooey & soft
    stepMultiplier = 6.;
  }

  float cellsPerSide = mix(300., 7., pow(u_size, .7));
  cellsPerSide /= stepMultiplier;
  float cellSizeY = 1. / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1. / u_imageAspectRatio, 1.);
  if (u_type == 1. && u_grid == 1.) {
    // gooey diagonal grid works differently
    pad *= .7;
  }

  vec2 uv = v_imageUV;
  uv -= vec2(.5);
  uv /= pad;

  float contrast = mix(0., 15., pow(u_contrast, 1.5));
  float baseRadius = u_radius;
  if (u_originalColors == true) {
    contrast = mix(.1, 4., pow(u_contrast, 2.));
    baseRadius = 2. * pow(.5 * u_radius, .3);
  }

  float totalShape = 0.;
  vec3 totalColor = vec3(0.);
  float totalOpacity = 0.;

  vec4 ballColor;
  float shape;
  float stepSize = 1. / stepMultiplier;
  for (float x = -0.5; x < 0.5; x += stepSize) {
    for (float y = -0.5; y < 0.5; y += stepSize) {
      vec2 offset = vec2(x, y);

      if (u_grid == 1.) {
        float rowIndex = floor((y + .5) / stepSize);
        float colIndex = floor((x + .5) / stepSize);
        if (stepSize == 1.) {
          rowIndex = floor(uv.y + y + 1.);
          if (u_type == 1.) {
            colIndex = floor(uv.x + x + 1.);
          }
        }
        if (u_type == 1.) {
          if (mod(rowIndex + colIndex, 2.) == 1.) {
            continue;
          }
        } else {
          if (mod(rowIndex, 2.) == 1.) {
            offset.x += .5 * stepSize;
          }
        }
      }

      shape = getLumBall(uv, pad, offset, contrast, baseRadius, stepSize, ballColor);
      totalColor   += ballColor.rgb * shape;
      totalShape   += shape;
      totalOpacity += shape;
    }
  }

  const float eps = 1e-4;

  totalColor /= max(totalShape, eps);
  totalOpacity /= max(totalShape, eps);

  float finalShape = 0.;
  if (u_type == 0.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 1.) {
    float aa = fwidth(totalShape);
    float th = .5;
    finalShape = smoothstep(th - aa, th + aa, totalShape);
  } else if (u_type == 2.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 3.) {
    finalShape = totalShape;
  }

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= grainSize;
  grainUV += .5;
  float grain = valueNoise(grainUV);
  grain = smoothstep(.55, .7 + .2 * u_grainMixer, grain);
  grain *= u_grainMixer;
  finalShape = mix(finalShape, 0., grain);

  vec3 color = vec3(0.);
  float opacity = 0.;

  if (u_originalColors == true) {
    color = totalColor * finalShape;
    opacity = totalOpacity * finalShape;

    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    color = color + bgColor * (1. - opacity);
    opacity = opacity + u_colorBack.a * (1. - opacity);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;

    color = fgColor * finalShape;
    opacity = fgOpacity * finalShape;
    color += bgColor * (1. - opacity);
    opacity += bgOpacity * (1. - opacity);
  }

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Nh={classic:0,gooey:1,holes:2,soft:3},Yh={square:0,hex:1},Hh=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colorC;
uniform vec4 u_colorM;
uniform vec4 u_colorY;
uniform vec4 u_colorK;
uniform float u_size;
uniform float u_minDot;
uniform float u_contrast;
uniform float u_grainSize;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_gridNoise;
uniform float u_softness;
uniform float u_floodC;
uniform float u_floodM;
uniform float u_floodY;
uniform float u_floodK;
uniform float u_gainC;
uniform float u_gainM;
uniform float u_gainY;
uniform float u_gainK;
uniform float u_type;
uniform sampler2D u_noiseTexture;

in vec2 v_imageUV;
out vec4 fragColor;

const float shiftC = -.5;
const float shiftM = -.25;
const float shiftY = .2;
const float shiftK = 0.;

// Precomputed sin/cos for rotation angles (15°, 75°, 0°, 45°)
const float cosC = 0.9659258;  const float sinC = 0.2588190;   // 15°
const float cosM = 0.2588190;  const float sinM = 0.9659258;   // 75°
const float cosY = 1.0;        const float sinY = 0.0;         // 0°
const float cosK = 0.7071068;  const float sinK = 0.7071068;   // 45°

${ee}

vec2 randomRG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).rg;
}
vec3 hash23(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.3183099, 0.3678794, 0.3141592)) + 0.1;
  p3 += dot(p3, p3.yzx + 19.19);
  return fract(vec3(p3.x * p3.y, p3.y * p3.z, p3.z * p3.x));
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

vec3 valueNoise3(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec3 a = hash23(i);
  vec3 b = hash23(i + vec2(1.0, 0.0));
  vec3 c = hash23(i + vec2(0.0, 1.0));
  vec3 d = hash23(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec3 x1 = mix(a, b, u.x);
  vec3 x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float getUvFrame(vec2 uv, vec2 pad) {
  float left   = smoothstep(-pad.x, 0., uv.x);
  float right  = smoothstep(1. + pad.x, 1., uv.x);
  float bottom = smoothstep(-pad.y, 0., uv.y);
  float top    = smoothstep(1. + pad.y, 1., uv.y);

  return left * right * bottom * top;
}

vec4 RGBAtoCMYK(vec4 rgba) {
  float k = 1. - max(max(rgba.r, rgba.g), rgba.b);
  float denom = 1. - k;
  vec3 cmy = vec3(0.);
  if (denom > 1e-5) {
    cmy = (1. - rgba.rgb - vec3(k)) / denom;
  }
  return vec4(cmy, k) * rgba.a;
}

vec3 applyContrast(vec3 rgb) {
  return clamp((rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
}

// Single-component CMYK extractors with contrast built-in, alpha-aware
float getCyan(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.r) / maxRGB : 0.) * rgba.a;
}
float getMagenta(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.g) / maxRGB : 0.) * rgba.a;
}
float getYellow(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  float maxRGB = max(max(c.r, c.g), c.b);
  return (maxRGB > 1e-5 ? (maxRGB - c.b) / maxRGB : 0.) * rgba.a;
}
float getBlack(vec4 rgba) {
  vec3 c = clamp((rgba.rgb - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  return (1. - max(max(c.r, c.g), c.b)) * rgba.a;
}

vec2 cellCenterPos(vec2 uv, vec2 cellOffset, float channelIdx) {
  vec2 cellCenter = floor(uv) + .5 + cellOffset;
  return cellCenter + (randomRG(cellCenter + channelIdx * 50.) - .5) * u_gridNoise;
}

vec2 gridToImageUV(vec2 cellCenter, float cosA, float sinA, float shift, vec2 pad) {
  vec2 uvGrid = mat2(cosA, -sinA, sinA, cosA) * (cellCenter - shift);
  return uvGrid * pad + 0.5;
}

void colorMask(vec2 pos, vec2 cellCenter, float rad, float transparency, float grain, float channelAddon, float channelgain, float generalComp, bool isJoined, inout float outMask) {
  float dist = length(pos - cellCenter);

  float radius = rad;
  radius *= (1. + generalComp);
  radius += (.15 + channelgain * radius);
  radius = max(0., radius);
  radius = mix(0., radius, transparency);
  radius += channelAddon;
  radius *= (1. - grain);

  float mask = 1. - sst(0., radius, dist);
  if (isJoined) {
    // ink or sharp (joined)
    mask = pow(mask, 1.2);
  } else {
    // dots (separate)
    mask = sst(.5 - .5 * u_softness, .51 + .49 * u_softness, mask);
  }

  mask *= mix(1., mix(.5, 1., 1.5 * radius), u_softness);
  outMask += mask;
}

vec3 applyInk(vec3 paper, vec3 inkColor, float cov) {
  vec3 inkEffect = mix(vec3(1.0), inkColor, clamp(cov, 0.0, 1.0));
  return paper * inkEffect;
}

void main() {
  vec2 uv = v_imageUV;

  float cellsPerSide = mix(400.0, 7.0, pow(u_size, 0.7));
  float cellSizeY = 1.0 / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1.0 / u_imageAspectRatio, 1.0);
  vec2 uvGrid = (uv - .5) / pad;
  float insideImageBox = getUvFrame(uv, pad);

  float generalComp = .1 * u_softness + .1 * u_gridNoise + .1 * (1. - step(0.5, u_type)) * (1.5 - u_softness);

  vec2 uvC = mat2(cosC, sinC, -sinC, cosC) * uvGrid + shiftC;
  vec2 uvM = mat2(cosM, sinM, -sinM, cosM) * uvGrid + shiftM;
  vec2 uvY = mat2(cosY, sinY, -sinY, cosY) * uvGrid + shiftY;
  vec2 uvK = mat2(cosK, sinK, -sinK, cosK) * uvGrid + shiftK;

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = (v_imageUV - .5) * grainSize + .5;
  vec3 noiseValues = valueNoise3(grainUV);
  float grain = sst(.55, 1., noiseValues.r);
  grain *= u_grainMixer;

  vec4 outMask = vec4(0.);
  bool isJoined = u_type > 0.5;

  if (u_type < 1.5) {
    // dots or ink: per-cell color sampling
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        vec2 cellCenterC = cellCenterPos(uvC, cellOffset, 0.);
        vec4 texC = texture(u_image, gridToImageUV(cellCenterC, cosC, sinC, shiftC, pad));
        colorMask(uvC, cellCenterC, getCyan(texC), insideImageBox * texC.a, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);

        vec2 cellCenterM = cellCenterPos(uvM, cellOffset, 1.);
        vec4 texM = texture(u_image, gridToImageUV(cellCenterM, cosM, sinM, shiftM, pad));
        colorMask(uvM, cellCenterM, getMagenta(texM), insideImageBox * texM.a, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);

        vec2 cellCenterY = cellCenterPos(uvY, cellOffset, 2.);
        vec4 texY = texture(u_image, gridToImageUV(cellCenterY, cosY, sinY, shiftY, pad));
        colorMask(uvY, cellCenterY, getYellow(texY), insideImageBox * texY.a, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);

        vec2 cellCenterK = cellCenterPos(uvK, cellOffset, 3.);
        vec4 texK = texture(u_image, gridToImageUV(cellCenterK, cosK, sinK, shiftK, pad));
        colorMask(uvK, cellCenterK, getBlack(texK), insideImageBox * texK.a, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  } else {
    // sharp: direct px color sampling
    vec4 tex = texture(u_image, uv);
    tex.rgb = applyContrast(tex.rgb);
    insideImageBox *= tex.a;
    vec4 cmykOriginal = RGBAtoCMYK(tex);
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        vec2 cellOffset = vec2(float(dx), float(dy));

        colorMask(uvC, cellCenterPos(uvC, cellOffset, 0.), cmykOriginal.x, insideImageBox, grain, u_floodC, u_gainC, generalComp, isJoined, outMask[0]);
        colorMask(uvM, cellCenterPos(uvM, cellOffset, 1.), cmykOriginal.y, insideImageBox, grain, u_floodM, u_gainM, generalComp, isJoined, outMask[1]);
        colorMask(uvY, cellCenterPos(uvY, cellOffset, 2.), cmykOriginal.z, insideImageBox, grain, u_floodY, u_gainY, generalComp, isJoined, outMask[2]);
        colorMask(uvK, cellCenterPos(uvK, cellOffset, 3.), cmykOriginal.w, insideImageBox, grain, u_floodK, u_gainK, generalComp, isJoined, outMask[3]);
      }
    }
  }

  float shape;

  float C = outMask[0];
  float M = outMask[1];
  float Y = outMask[2];
  float K = outMask[3];

  if (isJoined) {
    // ink or sharp: apply threshold for joined dots
    float th = .5;
    float sLeft = th * u_softness;
    float sRight = (1. - th) * u_softness + .01;
    C = smoothstep(th - sLeft - fwidth(C), th + sRight, C);
    M = smoothstep(th - sLeft - fwidth(M), th + sRight, M);
    Y = smoothstep(th - sLeft - fwidth(Y), th + sRight, Y);
    K = smoothstep(th - sLeft - fwidth(K), th + sRight, K);
  }

  C *= u_colorC.a;
  M *= u_colorM.a;
  Y *= u_colorY.a;
  K *= u_colorK.a;

  vec3 ink = vec3(1.);
  ink = applyInk(ink, u_colorK.rgb, K);
  ink = applyInk(ink, u_colorC.rgb, C);
  ink = applyInk(ink, u_colorM.rgb, M);
  ink = applyInk(ink, u_colorY.rgb, Y);

  shape = clamp(max(max(C, M), max(Y, K)), 0., 1.);

  vec3 color = u_colorBack.rgb * u_colorBack.a;

  float opacity = u_colorBack.a;
  color = mix(color, ink, shape);
  opacity += shape;
  opacity = clamp(opacity, 0., 1.);

  float grainOverlay = mix(noiseValues.g, noiseValues.b, .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,Gh={dots:0,ink:1,sharp:2};function at(u){if(Array.isArray(u))return u.length===4?u:u.length===3?[...u,1]:rc;if(typeof u!="string")return rc;let c,f,r,d=1;if(u.startsWith("#"))[c,f,r,d]=kh(u);else if(u.startsWith("rgb"))[c,f,r,d]=Qh(u);else if(u.startsWith("hsl"))[c,f,r,d]=jh(Xh(u));else return console.error("Unsupported color format",u),rc;return[wn(c,0,1),wn(f,0,1),wn(r,0,1),wn(d,0,1)]}function kh(u){u=u.replace(/^#/,""),u.length===3&&(u=u.split("").map(m=>m+m).join("")),u.length===6&&(u=u+"ff");const c=parseInt(u.slice(0,2),16)/255,f=parseInt(u.slice(2,4),16)/255,r=parseInt(u.slice(4,6),16)/255,d=parseInt(u.slice(6,8),16)/255;return[c,f,r,d]}function Qh(u){const c=u.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return c?[parseInt(c[1]??"0")/255,parseInt(c[2]??"0")/255,parseInt(c[3]??"0")/255,c[4]===void 0?1:parseFloat(c[4])]:[0,0,0,1]}function Xh(u){const c=u.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return c?[parseInt(c[1]??"0"),parseInt(c[2]??"0"),parseInt(c[3]??"0"),c[4]===void 0?1:parseFloat(c[4])]:[0,0,0,1]}function jh(u){const[c,f,r,d]=u,m=c/360,v=f/100,_=r/100;let b,p,C;if(f===0)b=p=C=_;else{const B=(Y,T,O)=>(O<0&&(O+=1),O>1&&(O-=1),O<.16666666666666666?Y+(T-Y)*6*O:O<.5?T:O<.6666666666666666?Y+(T-Y)*(.6666666666666666-O)*6:Y),N=_<.5?_*(1+v):_+v-_*v,Q=2*_-N;b=B(Q,N,m+1/3),p=B(Q,N,m),C=B(Q,N,m-1/3)}return[b,p,C,d]}const wn=(u,c,f)=>Math.min(Math.max(u,c),f),rc=[0,0,0,1];function ll(){if(typeof window>"u")return;const u=new Image;return u.src=qh,u}const qh="data:image/png;base64,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";function Lh(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const u=new Image;return u.src=Fh,u}const Fh="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function Kh(u){const c=k.useRef(void 0),f=k.useCallback(r=>{const d=u.map(m=>{if(m!=null){if(typeof m=="function"){const v=m,_=v(r);return typeof _=="function"?_:()=>{v(null)}}return m.current=r,()=>{m.current=null}}});return()=>{d.forEach(m=>m==null?void 0:m())}},u);return k.useMemo(()=>u.every(r=>r==null)?null:r=>{c.current&&(c.current(),c.current=void 0),r!=null&&(c.current=f(r))},u)}function jd(u){if(u.naturalWidth<1024&&u.naturalHeight<1024){if(u.naturalWidth<1||u.naturalHeight<1)return;const c=u.naturalWidth/u.naturalHeight;u.width=Math.round(c>1?1024*c:1024),u.height=Math.round(c>1?1024:1024/c)}}async function qd(u){const c={},f=[],r=m=>{try{return m.startsWith("/")||new URL(m),!0}catch{return!1}},d=m=>{try{return m.startsWith("/")?!1:new URL(m,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(u).forEach(([m,v])=>{if(typeof v=="string"){if(!v){c[m]=Lh();return}if(!r(v)){console.warn(`Uniform "${m}" has invalid URL "${v}". Skipping image loading.`);return}const _=new Promise((b,p)=>{const C=new Image;d(v)&&(C.crossOrigin="anonymous"),C.onload=()=>{jd(C),c[m]=C,b()},C.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${v}`),p()},C.src=v});f.push(_)}else v instanceof HTMLImageElement&&jd(v),c[m]=v}),await Promise.all(f),c}const Ht=k.forwardRef(function({fragmentShader:c,uniforms:f,webGlContextAttributes:r,speed:d=0,frame:m=0,width:v,height:_,minPixelRatio:b,maxPixelCount:p,mipmaps:C,style:B,...N},Q){const[Y,T]=k.useState(!1),O=k.useRef(null),D=k.useRef(null),q=k.useRef(r);k.useEffect(()=>((async()=>{const X=await qd(f);O.current&&!D.current&&(D.current=new eh(O.current,c,X,q.current,d,m,b,p,C),T(!0))})(),()=>{var X;(X=D.current)==null||X.dispose(),D.current=null}),[c]),k.useEffect(()=>{let H=!1;return(async()=>{var W;const P=await qd(f);H||(W=D.current)==null||W.setUniforms(P)})(),()=>{H=!0}},[f,Y]),k.useEffect(()=>{var H;(H=D.current)==null||H.setSpeed(d)},[d,Y]),k.useEffect(()=>{var H;(H=D.current)==null||H.setMaxPixelCount(p)},[p,Y]),k.useEffect(()=>{var H;(H=D.current)==null||H.setMinPixelRatio(b)},[b,Y]),k.useEffect(()=>{var H;(H=D.current)==null||H.setFrame(m)},[m,Y]);const L=Kh([O,Q]);return F.jsx("div",{ref:L,style:v!==void 0||_!==void 0?{width:typeof v=="string"&&isNaN(+v)===!1?+v:v,height:typeof _=="string"&&isNaN(+_)===!1?+_:_,...B}:B,...N})});Ht.displayName="ShaderMount";function de(u,c){var f,r,d;for(const m in u){if(m==="colors"){const v=Array.isArray(u.colors),_=Array.isArray(c.colors);if(!v||!_){if(Object.is(u.colors,c.colors)===!1)return!1;continue}if(((f=u.colors)==null?void 0:f.length)!==((r=c.colors)==null?void 0:r.length)||!((d=u.colors)!=null&&d.every((b,p)=>{var C;return b===((C=c.colors)==null?void 0:C[p])})))return!1;continue}if(Object.is(u[m],c[m])===!1)return!1}return!0}const Ce={params:{...Ye,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},Zh=k.memo(function({speed:c=Ce.params.speed,frame:f=Ce.params.frame,colors:r=Ce.params.colors,distortion:d=Ce.params.distortion,swirl:m=Ce.params.swirl,grainMixer:v=Ce.params.grainMixer,grainOverlay:_=Ce.params.grainOverlay,fit:b=Ce.params.fit,rotation:p=Ce.params.rotation,scale:C=Ce.params.scale,originX:B=Ce.params.originX,originY:N=Ce.params.originY,offsetX:Q=Ce.params.offsetX,offsetY:Y=Ce.params.offsetY,worldWidth:T=Ce.params.worldWidth,worldHeight:O=Ce.params.worldHeight,...D}){const q={u_colors:r.map(at),u_colorsCount:r.length,u_distortion:d,u_swirl:m,u_grainMixer:v,u_grainOverlay:_,u_fit:jt[b],u_rotation:p,u_scale:C,u_offsetX:Q,u_offsetY:Y,u_originX:B,u_originY:N,u_worldWidth:T,u_worldHeight:O};return F.jsx(Ht,{...D,speed:c,frame:f,fragmentShader:nh,uniforms:q})},de),ce={params:{...Ye,speed:.5,frame:0,colorBack:"#000000",colors:["#ffffff"],noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,scale:.8}},Jh=k.memo(function({speed:c=ce.params.speed,frame:f=ce.params.frame,colorBack:r=ce.params.colorBack,colors:d=ce.params.colors,noiseScale:m=ce.params.noiseScale,thickness:v=ce.params.thickness,radius:_=ce.params.radius,innerShape:b=ce.params.innerShape,noiseIterations:p=ce.params.noiseIterations,fit:C=ce.params.fit,scale:B=ce.params.scale,rotation:N=ce.params.rotation,originX:Q=ce.params.originX,originY:Y=ce.params.originY,offsetX:T=ce.params.offsetX,offsetY:O=ce.params.offsetY,worldWidth:D=ce.params.worldWidth,worldHeight:q=ce.params.worldHeight,...L}){const H={u_colorBack:at(r),u_colors:d.map(at),u_colorsCount:d.length,u_noiseScale:m,u_thickness:v,u_radius:_,u_innerShape:b,u_noiseIterations:p,u_noiseTexture:ll(),u_fit:jt[C],u_scale:B,u_rotation:N,u_offsetX:T,u_offsetY:O,u_originX:Q,u_originY:Y,u_worldWidth:D,u_worldHeight:q};return F.jsx(Ht,{...L,speed:c,frame:f,fragmentShader:uh,uniforms:H})},de),Be={params:{...al,speed:1,frame:0,colorFront:"#ffffff",colorMid:"#47a6ff",colorBack:"#000000",brightness:.05,contrast:.3}},Wh=k.memo(function({speed:c=Be.params.speed,frame:f=Be.params.frame,colorFront:r=Be.params.colorFront,colorMid:d=Be.params.colorMid,colorBack:m=Be.params.colorBack,brightness:v=Be.params.brightness,contrast:_=Be.params.contrast,fit:b=Be.params.fit,scale:p=Be.params.scale,rotation:C=Be.params.rotation,originX:B=Be.params.originX,originY:N=Be.params.originY,offsetX:Q=Be.params.offsetX,offsetY:Y=Be.params.offsetY,worldWidth:T=Be.params.worldWidth,worldHeight:O=Be.params.worldHeight,...D}){const q={u_colorFront:at(r),u_colorMid:at(d),u_colorBack:at(m),u_brightness:v,u_contrast:_,u_fit:jt[b],u_scale:p,u_rotation:C,u_offsetX:Q,u_offsetY:Y,u_originX:B,u_originY:N,u_worldWidth:T,u_worldHeight:O};return F.jsx(Ht,{...D,speed:c,frame:f,fragmentShader:rh,uniforms:q})},de),_e={params:{...al,speed:1.5,frame:0,colorBack:"#000000",colors:["#ffc96b","#ff6200","#ff2f00","#421100","#1a0000"],size:1,sizeRange:0,spreading:1,stepsPerColor:4}},Ih=k.memo(function({speed:c=_e.params.speed,frame:f=_e.params.frame,colorBack:r=_e.params.colorBack,colors:d=_e.params.colors,size:m=_e.params.size,sizeRange:v=_e.params.sizeRange,spreading:_=_e.params.spreading,stepsPerColor:b=_e.params.stepsPerColor,fit:p=_e.params.fit,scale:C=_e.params.scale,rotation:B=_e.params.rotation,originX:N=_e.params.originX,originY:Q=_e.params.originY,offsetX:Y=_e.params.offsetX,offsetY:T=_e.params.offsetY,worldWidth:O=_e.params.worldWidth,worldHeight:D=_e.params.worldHeight,...q}){const L={u_colorBack:at(r),u_colors:d.map(at),u_colorsCount:d.length,u_size:m,u_sizeRange:v,u_spreading:_,u_stepsPerColor:b,u_noiseTexture:ll(),u_fit:jt[p],u_scale:C,u_rotation:B,u_offsetX:Y,u_offsetY:T,u_originX:N,u_originY:Q,u_worldWidth:O,u_worldHeight:D};return F.jsx(Ht,{...q,speed:c,frame:f,fragmentShader:ch,uniforms:L})},de),le={params:{...al,colorBack:"#000000",colorFill:"#ffffff",colorStroke:"#ffaa00",size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:"circle"}},Ph=k.memo(function({colorBack:c=le.params.colorBack,colorFill:f=le.params.colorFill,colorStroke:r=le.params.colorStroke,size:d=le.params.size,gapX:m=le.params.gapX,gapY:v=le.params.gapY,strokeWidth:_=le.params.strokeWidth,sizeRange:b=le.params.sizeRange,opacityRange:p=le.params.opacityRange,shape:C=le.params.shape,fit:B=le.params.fit,scale:N=le.params.scale,rotation:Q=le.params.rotation,originX:Y=le.params.originX,originY:T=le.params.originY,offsetX:O=le.params.offsetX,offsetY:D=le.params.offsetY,worldWidth:q=le.params.worldWidth,worldHeight:L=le.params.worldHeight,maxPixelCount:H=6016*3384,...X}){const P={u_colorBack:at(c),u_colorFill:at(f),u_colorStroke:at(r),u_dotSize:d,u_gapX:m,u_gapY:v,u_strokeWidth:_,u_sizeRange:b,u_opacityRange:p,u_shape:fh[C],u_fit:jt[B],u_scale:N,u_rotation:Q,u_offsetX:O,u_offsetY:D,u_originX:Y,u_originY:T,u_worldWidth:q,u_worldHeight:L};return F.jsx(Ht,{...X,maxPixelCount:H,fragmentShader:sh,uniforms:P})},de),Me={params:{...Ye,scale:1,speed:1,frame:0,colorBack:"#000000",colors:["#6e33cc","#ff5500","#ffc105","#ffc800","#f585ff"],count:10,size:.83}},$h=k.memo(function({speed:c=Me.params.speed,frame:f=Me.params.frame,colorBack:r=Me.params.colorBack,colors:d=Me.params.colors,size:m=Me.params.size,count:v=Me.params.count,fit:_=Me.params.fit,rotation:b=Me.params.rotation,scale:p=Me.params.scale,originX:C=Me.params.originX,originY:B=Me.params.originY,offsetX:N=Me.params.offsetX,offsetY:Q=Me.params.offsetY,worldWidth:Y=Me.params.worldWidth,worldHeight:T=Me.params.worldHeight,...O}){const D={u_colorBack:at(r),u_colors:d.map(at),u_colorsCount:d.length,u_size:m,u_count:v,u_noiseTexture:ll(),u_fit:jt[_],u_rotation:b,u_scale:p,u_offsetX:N,u_offsetY:Q,u_originX:C,u_originY:B,u_worldWidth:Y,u_worldHeight:T};return F.jsx(Ht,{...O,speed:c,frame:f,fragmentShader:mh,uniforms:D})},de),xe={params:{...al,scale:.6,colorFront:"#ffbb00",colorBack:"#000000",shape:0,frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0}},tv=k.memo(function({colorFront:c=xe.params.colorFront,colorBack:f=xe.params.colorBack,shape:r=xe.params.shape,frequency:d=xe.params.frequency,amplitude:m=xe.params.amplitude,spacing:v=xe.params.spacing,proportion:_=xe.params.proportion,softness:b=xe.params.softness,fit:p=xe.params.fit,scale:C=xe.params.scale,rotation:B=xe.params.rotation,offsetX:N=xe.params.offsetX,offsetY:Q=xe.params.offsetY,originX:Y=xe.params.originX,originY:T=xe.params.originY,worldWidth:O=xe.params.worldWidth,worldHeight:D=xe.params.worldHeight,maxPixelCount:q=6016*3384,...L}){const H={u_colorFront:at(c),u_colorBack:at(f),u_shape:r,u_frequency:d,u_amplitude:m,u_spacing:v,u_proportion:_,u_softness:b,u_fit:jt[p],u_scale:C,u_rotation:B,u_offsetX:N,u_offsetY:Q,u_originX:Y,u_originY:T,u_worldWidth:O,u_worldHeight:D};return F.jsx(Ht,{...L,fragmentShader:ph,uniforms:H})},de),se={params:{...al,speed:.5,frame:0,colors:["#ff8247","#ffe53d"],stepsPerColor:3,colorGlow:"#ffffff",colorGap:"#2e0000",distortion:.4,gap:.04,glow:0,scale:.5}},ev=k.memo(function({speed:c=se.params.speed,frame:f=se.params.frame,colors:r=se.params.colors,stepsPerColor:d=se.params.stepsPerColor,colorGlow:m=se.params.colorGlow,colorGap:v=se.params.colorGap,distortion:_=se.params.distortion,gap:b=se.params.gap,glow:p=se.params.glow,fit:C=se.params.fit,scale:B=se.params.scale,rotation:N=se.params.rotation,originX:Q=se.params.originX,originY:Y=se.params.originY,offsetX:T=se.params.offsetX,offsetY:O=se.params.offsetY,worldWidth:D=se.params.worldWidth,worldHeight:q=se.params.worldHeight,...L}){const H={u_colors:r.map(at),u_colorsCount:r.length,u_stepsPerColor:d,u_colorGlow:at(m),u_colorGap:at(v),u_distortion:_,u_gap:b,u_glow:p,u_noiseTexture:ll(),u_fit:jt[C],u_scale:B,u_rotation:N,u_offsetX:T,u_offsetY:O,u_originX:Q,u_originY:Y,u_worldWidth:D,u_worldHeight:q};return F.jsx(Ht,{...L,speed:c,frame:f,fragmentShader:dh,uniforms:H})},de),oe={params:{...al,rotation:0,speed:1,frame:0,colors:["#121212","#9470ff","#121212","#8838ff"],proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:"checks"}},av=k.memo(function({speed:c=oe.params.speed,frame:f=oe.params.frame,colors:r=oe.params.colors,proportion:d=oe.params.proportion,softness:m=oe.params.softness,distortion:v=oe.params.distortion,swirl:_=oe.params.swirl,swirlIterations:b=oe.params.swirlIterations,shapeScale:p=oe.params.shapeScale,shape:C=oe.params.shape,fit:B=oe.params.fit,scale:N=oe.params.scale,rotation:Q=oe.params.rotation,originX:Y=oe.params.originX,originY:T=oe.params.originY,offsetX:O=oe.params.offsetX,offsetY:D=oe.params.offsetY,worldWidth:q=oe.params.worldWidth,worldHeight:L=oe.params.worldHeight,...H}){const X={u_colors:r.map(at),u_colorsCount:r.length,u_proportion:d,u_softness:m,u_distortion:v,u_swirl:_,u_swirlIterations:b,u_shapeScale:p,u_shape:hh[C],u_noiseTexture:ll(),u_scale:N,u_rotation:Q,u_fit:jt[B],u_offsetX:O,u_offsetY:D,u_originX:Y,u_originY:T,u_worldWidth:q,u_worldHeight:L};return F.jsx(Ht,{...H,speed:c,frame:f,fragmentShader:gh,uniforms:X})},de),$t={params:{...Ye,offsetX:0,offsetY:-.55,colorBack:"#000000",colorBloom:"#0000ff",colors:["#a600ff6e","#6200fff0","#ffffff","#33fff5"],density:.3,spotty:.3,midIntensity:.4,midSize:.2,intensity:.8,bloom:.4,speed:.75,frame:0}},lv=k.memo(function({speed:c=$t.params.speed,frame:f=$t.params.frame,colorBloom:r=$t.params.colorBloom,colorBack:d=$t.params.colorBack,colors:m=$t.params.colors,density:v=$t.params.density,spotty:_=$t.params.spotty,midIntensity:b=$t.params.midIntensity,midSize:p=$t.params.midSize,intensity:C=$t.params.intensity,bloom:B=$t.params.bloom,fit:N=$t.params.fit,scale:Q=$t.params.scale,rotation:Y=$t.params.rotation,originX:T=$t.params.originX,originY:O=$t.params.originY,offsetX:D=$t.params.offsetX,offsetY:q=$t.params.offsetY,worldWidth:L=$t.params.worldWidth,worldHeight:H=$t.params.worldHeight,...X}){const P={u_colorBloom:at(r),u_colorBack:at(d),u_colors:m.map(at),u_colorsCount:m.length,u_density:v,u_spotty:_,u_midIntensity:b,u_midSize:p,u_intensity:C,u_bloom:B,u_noiseTexture:ll(),u_fit:jt[N],u_scale:Q,u_rotation:Y,u_offsetX:D,u_offsetY:q,u_originX:T,u_originY:O,u_worldWidth:L,u_worldHeight:H};return F.jsx(Ht,{...X,speed:c,frame:f,fragmentShader:vh,uniforms:P})},de),Kt={params:{...al,scale:1,colorBack:"#001429",colorFront:"#79D1FF",density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1,frame:0}},ov=k.memo(function({speed:c=Kt.params.speed,frame:f=Kt.params.frame,colorBack:r=Kt.params.colorBack,colorFront:d=Kt.params.colorFront,density:m=Kt.params.density,distortion:v=Kt.params.distortion,strokeWidth:_=Kt.params.strokeWidth,strokeTaper:b=Kt.params.strokeTaper,strokeCap:p=Kt.params.strokeCap,noiseFrequency:C=Kt.params.noiseFrequency,noise:B=Kt.params.noise,softness:N=Kt.params.softness,fit:Q=Kt.params.fit,rotation:Y=Kt.params.rotation,scale:T=Kt.params.scale,originX:O=Kt.params.originX,originY:D=Kt.params.originY,offsetX:q=Kt.params.offsetX,offsetY:L=Kt.params.offsetY,worldWidth:H=Kt.params.worldWidth,worldHeight:X=Kt.params.worldHeight,...P}){const W={u_colorBack:at(r),u_colorFront:at(d),u_density:m,u_distortion:v,u_strokeWidth:_,u_strokeTaper:b,u_strokeCap:p,u_noiseFrequency:C,u_noise:B,u_softness:N,u_fit:jt[Q],u_scale:T,u_rotation:Y,u_offsetX:q,u_offsetY:L,u_originX:O,u_originY:D,u_worldWidth:H,u_worldHeight:X};return F.jsx(Ht,{...P,speed:c,frame:f,fragmentShader:yh,uniforms:W})},de),te={params:{...Ye,speed:.32,frame:0,colorBack:"#330000",colors:["#ffd1d1","#ff8a8a","#660000"],bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noiseFrequency:.4,noise:.2}},iv=k.memo(function({speed:c=te.params.speed,frame:f=te.params.frame,colorBack:r=te.params.colorBack,colors:d=te.params.colors,bandCount:m=te.params.bandCount,twist:v=te.params.twist,center:_=te.params.center,proportion:b=te.params.proportion,softness:p=te.params.softness,noiseFrequency:C=te.params.noiseFrequency,noise:B=te.params.noise,fit:N=te.params.fit,rotation:Q=te.params.rotation,scale:Y=te.params.scale,originX:T=te.params.originX,originY:O=te.params.originY,offsetX:D=te.params.offsetX,offsetY:q=te.params.offsetY,worldWidth:L=te.params.worldWidth,worldHeight:H=te.params.worldHeight,...X}){const P={u_colorBack:at(r),u_colors:d.map(at),u_colorsCount:d.length,u_bandCount:m,u_twist:v,u_center:_,u_proportion:b,u_softness:p,u_noiseFrequency:C,u_noise:B,u_fit:jt[N],u_scale:Y,u_rotation:Q,u_offsetX:D,u_offsetY:q,u_originX:T,u_originY:O,u_worldWidth:L,u_worldHeight:H};return F.jsx(Ht,{...X,speed:c,frame:f,fragmentShader:_h,uniforms:P})},de),Ee={params:{...al,speed:1,frame:0,scale:.6,colorBack:"#000000",colorFront:"#00b2ff",shape:"sphere",type:"4x4",size:2}},nv=k.memo(function({speed:c=Ee.params.speed,frame:f=Ee.params.frame,colorBack:r=Ee.params.colorBack,colorFront:d=Ee.params.colorFront,shape:m=Ee.params.shape,type:v=Ee.params.type,pxSize:_,size:b=_===void 0?Ee.params.size:_,fit:p=Ee.params.fit,scale:C=Ee.params.scale,rotation:B=Ee.params.rotation,originX:N=Ee.params.originX,originY:Q=Ee.params.originY,offsetX:Y=Ee.params.offsetX,offsetY:T=Ee.params.offsetY,worldWidth:O=Ee.params.worldWidth,worldHeight:D=Ee.params.worldHeight,...q}){const L={u_colorBack:at(r),u_colorFront:at(d),u_shape:bh[m],u_type:ep[v],u_pxSize:b,u_fit:jt[p],u_scale:C,u_rotation:B,u_offsetX:Y,u_offsetY:T,u_originX:N,u_originY:Q,u_worldWidth:O,u_worldHeight:D};return F.jsx(Ht,{...q,speed:c,frame:f,fragmentShader:xh,uniforms:L})}),be={params:{...Ye,speed:1,frame:0,colorBack:"#000000",colors:["#7300ff","#eba8ff","#00bfff","#2a00ff"],softness:.5,intensity:.5,noise:.25,shape:"corners"}},uv=k.memo(function({speed:c=be.params.speed,frame:f=be.params.frame,colorBack:r=be.params.colorBack,colors:d=be.params.colors,softness:m=be.params.softness,intensity:v=be.params.intensity,noise:_=be.params.noise,shape:b=be.params.shape,fit:p=be.params.fit,scale:C=be.params.scale,rotation:B=be.params.rotation,originX:N=be.params.originX,originY:Q=be.params.originY,offsetX:Y=be.params.offsetX,offsetY:T=be.params.offsetY,worldWidth:O=be.params.worldWidth,worldHeight:D=be.params.worldHeight,...q}){const L={u_colorBack:at(r),u_colors:d.map(at),u_colorsCount:d.length,u_softness:m,u_intensity:v,u_noise:_,u_shape:Sh[b],u_noiseTexture:ll(),u_fit:jt[p],u_scale:C,u_rotation:B,u_offsetX:Y,u_offsetY:T,u_originX:N,u_originY:Q,u_worldWidth:O,u_worldHeight:D};return F.jsx(Ht,{...q,speed:c,frame:f,fragmentShader:Ah,uniforms:L})}),Xt={params:{...Ye,speed:.5,frame:0,colors:["#ff9d00","#fd4f30","#809bff","#6d2eff","#333aff","#f15cff","#ffd557"],colorBack:"#000000",angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,density:3,scale:.8}},rv=k.memo(function({speed:c=Xt.params.speed,frame:f=Xt.params.frame,colors:r=Xt.params.colors,colorBack:d=Xt.params.colorBack,angle1:m=Xt.params.angle1,angle2:v=Xt.params.angle2,length:_=Xt.params.length,edges:b=Xt.params.edges,blur:p=Xt.params.blur,fadeIn:C=Xt.params.fadeIn,fadeOut:B=Xt.params.fadeOut,density:N=Xt.params.density,gradient:Q=Xt.params.gradient,fit:Y=Xt.params.fit,scale:T=Xt.params.scale,rotation:O=Xt.params.rotation,originX:D=Xt.params.originX,originY:q=Xt.params.originY,offsetX:L=Xt.params.offsetX,offsetY:H=Xt.params.offsetY,worldWidth:X=Xt.params.worldWidth,worldHeight:P=Xt.params.worldHeight,...W}){const ft={u_colors:r.map(at),u_colorsCount:r.length,u_colorBack:at(d),u_angle1:m,u_angle2:v,u_length:_,u_edges:b,u_blur:p,u_fadeIn:C,u_fadeOut:B,u_density:N,u_gradient:Q,u_fit:jt[Y],u_scale:T,u_rotation:O,u_offsetX:L,u_offsetY:H,u_originX:D,u_originY:q,u_worldWidth:X,u_worldHeight:P};return F.jsx(Ht,{...W,speed:c,frame:f,fragmentShader:Ch,uniforms:ft})},de),St={params:{...Ye,fit:"cover",speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:.25,size:.5,angle:0,distortionShape:"prism",highlights:.1,shape:"lines",distortion:.5,shift:0,blur:0,edges:.25,stretch:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:0}},cv=k.memo(function({speed:c=St.params.speed,frame:f=St.params.frame,colorBack:r=St.params.colorBack,colorShadow:d=St.params.colorShadow,colorHighlight:m=St.params.colorHighlight,image:v="",shadows:_=St.params.shadows,angle:b=St.params.angle,distortion:p=St.params.distortion,distortionShape:C=St.params.distortionShape,highlights:B=St.params.highlights,shape:N=St.params.shape,shift:Q=St.params.shift,blur:Y=St.params.blur,edges:T=St.params.edges,margin:O,marginLeft:D=O??St.params.marginLeft,marginRight:q=O??St.params.marginRight,marginTop:L=O??St.params.marginTop,marginBottom:H=O??St.params.marginBottom,grainMixer:X=St.params.grainMixer,grainOverlay:P=St.params.grainOverlay,stretch:W=St.params.stretch,count:ft,size:pt=ft===void 0?St.params.size:Math.pow(1/(ft*1.6),1/6)/.7-.5,fit:gt=St.params.fit,scale:ht=St.params.scale,rotation:Ct=St.params.rotation,originX:Gt=St.params.originX,originY:Nt=St.params.originY,offsetX:Ut=St.params.offsetX,offsetY:z=St.params.offsetY,worldWidth:j=St.params.worldWidth,worldHeight:$=St.params.worldHeight,...yt}){const Z={u_image:v,u_colorBack:at(r),u_colorShadow:at(d),u_colorHighlight:at(m),u_shadows:_,u_size:pt,u_angle:b,u_distortion:p,u_shift:Q,u_blur:Y,u_edges:T,u_stretch:W,u_distortionShape:Uh[C],u_highlights:B,u_shape:zh[N],u_marginLeft:D,u_marginRight:q,u_marginTop:L,u_marginBottom:H,u_grainMixer:X,u_grainOverlay:P,u_fit:jt[gt],u_scale:ht,u_rotation:Ct,u_offsetX:Ut,u_offsetY:z,u_originX:Gt,u_originY:Nt,u_worldWidth:j,u_worldHeight:$};return F.jsx(Ht,{...yt,speed:c,frame:f,fragmentShader:Eh,mipmaps:["u_image"],uniforms:Z})}),ie={params:{...Ye,scale:.8,speed:1,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:.07,layering:.5,edges:.8,waves:.3,caustic:.1,size:1}},sv=k.memo(function({speed:c=ie.params.speed,frame:f=ie.params.frame,colorBack:r=ie.params.colorBack,colorHighlight:d=ie.params.colorHighlight,image:m="",highlights:v=ie.params.highlights,layering:_=ie.params.layering,waves:b=ie.params.waves,edges:p=ie.params.edges,caustic:C=ie.params.caustic,effectScale:B,size:N=B===void 0?ie.params.size:10/9/B-1/9,fit:Q=ie.params.fit,scale:Y=ie.params.scale,rotation:T=ie.params.rotation,originX:O=ie.params.originX,originY:D=ie.params.originY,offsetX:q=ie.params.offsetX,offsetY:L=ie.params.offsetY,worldWidth:H=ie.params.worldWidth,worldHeight:X=ie.params.worldHeight,...P}){const W={u_image:m,u_colorBack:at(r),u_colorHighlight:at(d),u_highlights:v,u_layering:_,u_waves:b,u_edges:p,u_caustic:C,u_size:N,u_fit:jt[Q],u_rotation:T,u_scale:Y,u_offsetX:q,u_offsetY:L,u_originX:O,u_originY:D,u_worldWidth:H,u_worldHeight:X};return F.jsx(Ht,{...P,speed:c,frame:f,fragmentShader:Bh,mipmaps:["u_image"],uniforms:W})},de),ne={params:{...Ye,fit:"cover",speed:0,frame:0,colorFront:"#94ffaf",colorBack:"#000c38",colorHighlight:"#eaff94",type:"8x8",size:2,colorSteps:2,originalColors:!1,inverted:!1}},fv=k.memo(function({speed:c=ne.params.speed,frame:f=ne.params.frame,colorFront:r=ne.params.colorFront,colorBack:d=ne.params.colorBack,colorHighlight:m=ne.params.colorHighlight,image:v="",type:_=ne.params.type,colorSteps:b=ne.params.colorSteps,originalColors:p=ne.params.originalColors,inverted:C=ne.params.inverted,pxSize:B,size:N=B===void 0?ne.params.size:B,fit:Q=ne.params.fit,scale:Y=ne.params.scale,rotation:T=ne.params.rotation,originX:O=ne.params.originX,originY:D=ne.params.originY,offsetX:q=ne.params.offsetX,offsetY:L=ne.params.offsetY,worldWidth:H=ne.params.worldWidth,worldHeight:X=ne.params.worldHeight,...P}){const W={u_image:v,u_colorFront:at(r),u_colorBack:at(d),u_colorHighlight:at(m),u_type:ep[_],u_pxSize:N,u_colorSteps:b,u_originalColors:p,u_inverted:C,u_fit:jt[Q],u_rotation:T,u_scale:Y,u_offsetX:q,u_offsetY:L,u_originX:O,u_originY:D,u_worldWidth:H,u_worldHeight:X};return F.jsx(Ht,{...P,speed:c,frame:f,fragmentShader:Mh,uniforms:W})},de),Tn="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",mv=u=>typeof u=="object"&&typeof u.then=="function",Ld=[];function dv(u,c){if(u===c)return!0;if(!u||!c)return!1;const f=u.length;if(c.length!==f)return!1;for(let r=0;r<f;r++)if(u[r]!==c[r])return!1;return!0}function pv(u,c=null){c===null&&(c=[u]);for(const r of Ld)if(dv(c,r.keys)){if(Object.prototype.hasOwnProperty.call(r,"error"))throw r.error;if(Object.prototype.hasOwnProperty.call(r,"response"))return r.response;throw r.promise}const f={keys:c,promise:(mv(u)?u:u(...c)).then(r=>{f.response=r}).catch(r=>f.error=r)};throw Ld.push(f),f.promise}const lp=(u,c)=>pv(u,c),fe={params:{...Ye,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#11206a","#1f3ba2","#2f63e7","#6bd7ff","#ffe679","#ff991e","#ff4c00"]}},gv=k.memo(function({speed:c=fe.params.speed,frame:f=fe.params.frame,image:r="",contour:d=fe.params.contour,angle:m=fe.params.angle,noise:v=fe.params.noise,innerGlow:_=fe.params.innerGlow,outerGlow:b=fe.params.outerGlow,colorBack:p=fe.params.colorBack,colors:C=fe.params.colors,suspendWhenProcessingImage:B=!1,fit:N=fe.params.fit,offsetX:Q=fe.params.offsetX,offsetY:Y=fe.params.offsetY,originX:T=fe.params.originX,originY:O=fe.params.originY,rotation:D=fe.params.rotation,scale:q=fe.params.scale,worldHeight:L=fe.params.worldHeight,worldWidth:H=fe.params.worldWidth,...X}){const P=typeof r=="string"?r:r.src,[W,ft]=k.useState(Tn);let pt;B&&typeof window<"u"?pt=lp(()=>kd(P).then(ht=>URL.createObjectURL(ht.blob)),[P,"heatmap"]):pt=W,k.useLayoutEffect(()=>{if(B)return;if(!P){ft(Tn);return}let ht,Ct=!0;return kd(P).then(Gt=>{Ct&&(ht=URL.createObjectURL(Gt.blob),ft(ht))}),()=>{Ct=!1}},[P,B]);const gt=k.useMemo(()=>({u_image:pt,u_contour:d,u_angle:m,u_noise:v,u_innerGlow:_,u_outerGlow:b,u_colorBack:at(p),u_colors:C.map(at),u_colorsCount:C.length,u_fit:jt[N],u_offsetX:Q,u_offsetY:Y,u_originX:T,u_originY:O,u_rotation:D,u_scale:q,u_worldHeight:L,u_worldWidth:H}),[c,f,d,m,v,_,b,C,p,pt,N,Q,Y,T,O,D,q,L,H]);return F.jsx(Ht,{...X,speed:c,frame:f,fragmentShader:wh,mipmaps:["u_image"],uniforms:gt})},de),Zt={params:{...Ye,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},hv=k.memo(function({colorBack:c=Zt.params.colorBack,colorTint:f=Zt.params.colorTint,speed:r=Zt.params.speed,frame:d=Zt.params.frame,image:m="",contour:v=Zt.params.contour,distortion:_=Zt.params.distortion,softness:b=Zt.params.softness,repetition:p=Zt.params.repetition,shiftRed:C=Zt.params.shiftRed,shiftBlue:B=Zt.params.shiftBlue,angle:N=Zt.params.angle,shape:Q=Zt.params.shape,suspendWhenProcessingImage:Y=!1,fit:T=Zt.params.fit,scale:O=Zt.params.scale,rotation:D=Zt.params.rotation,originX:q=Zt.params.originX,originY:L=Zt.params.originY,offsetX:H=Zt.params.offsetX,offsetY:X=Zt.params.offsetY,worldWidth:P=Zt.params.worldWidth,worldHeight:W=Zt.params.worldHeight,...ft}){const pt=typeof m=="string"?m:m.src,[gt,ht]=k.useState(Tn);let Ct;Y&&typeof window<"u"&&pt?Ct=lp(()=>Xd(pt).then(Nt=>URL.createObjectURL(Nt.pngBlob)),[pt,"liquid-metal"]):Ct=gt,k.useLayoutEffect(()=>{if(Y)return;if(!pt){ht(Tn);return}let Nt,Ut=!0;return Xd(pt).then(z=>{Ut&&(Nt=URL.createObjectURL(z.pngBlob),ht(Nt))}),()=>{Ut=!1}},[pt,Y]);const Gt={u_colorBack:at(c),u_colorTint:at(f),u_image:Ct,u_contour:v,u_distortion:_,u_softness:b,u_repetition:p,u_shiftRed:C,u_shiftBlue:B,u_angle:N,u_isImage:!!m,u_shape:Vh[Q],u_fit:jt[T],u_scale:O,u_rotation:D,u_offsetX:H,u_offsetY:X,u_originX:q,u_originY:L,u_worldWidth:P,u_worldHeight:W};return F.jsx(Ht,{...ft,speed:r,frame:d,fragmentShader:Rh,mipmaps:["u_image"],uniforms:Gt})}),Yt={params:{...Ye,fit:"cover",speed:0,frame:0,colorBack:"#f2f1e8",colorFront:"#2b2b2b",size:.5,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:"hex",type:"gooey"}},vv=k.memo(function({speed:c=Yt.params.speed,frame:f=Yt.params.frame,colorFront:r=Yt.params.colorFront,colorBack:d=Yt.params.colorBack,image:m="",size:v=Yt.params.size,radius:_=Yt.params.radius,contrast:b=Yt.params.contrast,originalColors:p=Yt.params.originalColors,inverted:C=Yt.params.inverted,grainMixer:B=Yt.params.grainMixer,grainOverlay:N=Yt.params.grainOverlay,grainSize:Q=Yt.params.grainSize,grid:Y=Yt.params.grid,type:T=Yt.params.type,fit:O=Yt.params.fit,scale:D=Yt.params.scale,rotation:q=Yt.params.rotation,originX:L=Yt.params.originX,originY:H=Yt.params.originY,offsetX:X=Yt.params.offsetX,offsetY:P=Yt.params.offsetY,worldWidth:W=Yt.params.worldWidth,worldHeight:ft=Yt.params.worldHeight,...pt}){const gt={u_image:m,u_colorFront:at(r),u_colorBack:at(d),u_size:v,u_radius:_,u_contrast:b,u_originalColors:p,u_inverted:C,u_grainMixer:B,u_grainOverlay:N,u_grainSize:Q,u_grid:Yh[Y],u_type:Nh[T],u_fit:jt[O],u_rotation:q,u_scale:D,u_offsetX:X,u_offsetY:P,u_originX:L,u_originY:H,u_worldWidth:W,u_worldHeight:ft};return F.jsx(Ht,{...pt,speed:c,frame:f,fragmentShader:Dh,uniforms:gt})},de),bt={params:{...Ye,scale:1,fit:"cover",speed:0,frame:0,colorBack:"#fbfaf5",colorC:"#00b4ff",colorM:"#fc519f",colorY:"#ffd800",colorK:"#231f20",size:.2,contrast:1,softness:1,grainSize:.5,grainMixer:0,grainOverlay:0,gridNoise:.2,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:.3,gainM:0,gainY:.2,gainK:0,type:"ink"}},yv=k.memo(function({speed:c=bt.params.speed,frame:f=bt.params.frame,colorBack:r=bt.params.colorBack,colorC:d=bt.params.colorC,colorM:m=bt.params.colorM,colorY:v=bt.params.colorY,colorK:_=bt.params.colorK,image:b="",size:p=bt.params.size,contrast:C=bt.params.contrast,softness:B=bt.params.softness,grainSize:N=bt.params.grainSize,grainMixer:Q=bt.params.grainMixer,grainOverlay:Y=bt.params.grainOverlay,gridNoise:T=bt.params.gridNoise,floodC:O=bt.params.floodC,floodM:D=bt.params.floodM,floodY:q=bt.params.floodY,floodK:L=bt.params.floodK,gainC:H=bt.params.gainC,gainM:X=bt.params.gainM,gainY:P=bt.params.gainY,gainK:W=bt.params.gainK,type:ft=bt.params.type,fit:pt=bt.params.fit,scale:gt=bt.params.scale,rotation:ht=bt.params.rotation,originX:Ct=bt.params.originX,originY:Gt=bt.params.originY,offsetX:Nt=bt.params.offsetX,offsetY:Ut=bt.params.offsetY,worldWidth:z=bt.params.worldWidth,worldHeight:j=bt.params.worldHeight,...$}){const yt={u_image:b,u_noiseTexture:ll(),u_colorBack:at(r),u_colorC:at(d),u_colorM:at(m),u_colorY:at(v),u_colorK:at(_),u_size:p,u_contrast:C,u_softness:B,u_grainSize:N,u_grainMixer:Q,u_grainOverlay:Y,u_gridNoise:T,u_floodC:O,u_floodM:D,u_floodY:q,u_floodK:L,u_gainC:H,u_gainM:X,u_gainY:P,u_gainK:W,u_type:Gh[ft],u_fit:jt[pt],u_rotation:ht,u_scale:gt,u_offsetX:Nt,u_offsetY:Ut,u_originX:Ct,u_originY:Gt,u_worldWidth:z,u_worldHeight:j};return F.jsx(Ht,{...$,speed:c,frame:f,fragmentShader:Hh,uniforms:yt})},de),Sl="/images/reference.jpeg",gc=[{id:"fluted-glass",name:"Fluted Glass",description:"Streaked ribbed glass distortion",category:"image-filters",colors:[{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"},{key:"colorShadow",label:"Shadow",defaultValue:"#000000"},{key:"colorHighlight",label:"Highlight",defaultValue:"#ffffff"}],component:cv,defaultProps:{image:Sl,distortion:.5,size:.3,angle:0,blur:.3,edges:.3,shadows:.3,highlights:.15,shape:"lines",distortionShape:"prism",speed:.5},colorPropMap:{colorBack:"colorBack",colorShadow:"colorShadow",colorHighlight:"colorHighlight"}},{id:"water",name:"Water",description:"Underwater caustic distortion",category:"image-filters",colors:[{key:"colorBack",label:"Background",defaultValue:"#0a2540"},{key:"colorHighlight",label:"Caustic",defaultValue:"#7ad1ff"}],component:sv,defaultProps:{image:Sl,highlights:.4,layering:.5,edges:.3,caustic:.5,waves:.3,size:3,speed:.5},colorPropMap:{colorBack:"colorBack",colorHighlight:"colorHighlight"}},{id:"halftone-dots",name:"Halftone Dots",description:"Classic halftone dot pattern filter",category:"image-filters",colors:[{key:"colorFront",label:"Dots",defaultValue:"#1a1a1a"},{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"}],component:vv,defaultProps:{image:Sl,size:.15,radius:1,contrast:.5,grid:"hex",type:"classic",originalColors:!1,speed:0},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"halftone-cmyk",name:"Halftone CMYK",description:"CMYK printing dot pattern",category:"image-filters",colors:[{key:"colorBack",label:"Paper",defaultValue:"#f5f0eb"},{key:"colorC",label:"Cyan",defaultValue:"#00aeef"},{key:"colorM",label:"Magenta",defaultValue:"#ec008c"},{key:"colorY",label:"Yellow",defaultValue:"#fff200"},{key:"colorK",label:"Black",defaultValue:"#1a1a1a"}],component:yv,defaultProps:{image:Sl,size:.15,contrast:.5,softness:.1,type:"dots",speed:0},colorPropMap:{colorBack:"colorBack",colorC:"colorC",colorM:"colorM",colorY:"colorY",colorK:"colorK"}},{id:"image-dithering",name:"Image Dithering",description:"Retro dithered image effect",category:"image-filters",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#8b1a1a"},{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"},{key:"colorHighlight",label:"Highlight",defaultValue:"#cc6633"}],component:fv,defaultProps:{image:Sl,type:"4x4",size:2,colorSteps:3,originalColors:!1,speed:0},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack",colorHighlight:"colorHighlight"}},{id:"heatmap",name:"Heatmap",description:"Glowing color gradient over image",category:"logo-animations",colors:[{key:"color1",label:"Heat 1",defaultValue:"#ff0000"},{key:"color2",label:"Heat 2",defaultValue:"#ff8800"},{key:"color3",label:"Heat 3",defaultValue:"#ffff00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:gv,defaultProps:{image:Sl,contour:.5,angle:45,noise:.3,innerGlow:.5,outerGlow:.3,speed:.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",colorBack:"colorBack"}},{id:"liquid-metal",name:"Liquid Metal",description:"Futuristic liquid metal material",category:"logo-animations",colors:[{key:"colorBack",label:"Background",defaultValue:"#000000"},{key:"colorTint",label:"Tint",defaultValue:"#4488ff"}],component:hv,defaultProps:{image:Sl,repetition:4,softness:.5,shiftRed:0,shiftBlue:0,contour:.5,distortion:.3,angle:45,shape:"circle",speed:1},colorPropMap:{colorBack:"colorBack",colorTint:"colorTint"}},{id:"mesh-gradient",name:"Mesh Gradient",description:"Flowing organic color blend",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#5100ff"},{key:"color2",label:"Color 2",defaultValue:"#00ff80"},{key:"color3",label:"Color 3",defaultValue:"#ffcc00"},{key:"color4",label:"Color 4",defaultValue:"#ea00ff"}],component:Zh,defaultProps:{distortion:.8,swirl:.1,speed:.4},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]"}},{id:"neuro-noise",name:"Neuro Noise",description:"Glowing web-like fractal structure",category:"effects",colors:[{key:"colorFront",label:"Highlight",defaultValue:"#ffffff"},{key:"colorMid",label:"Main Color",defaultValue:"#47a6ff"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:Wh,defaultProps:{brightness:.05,contrast:.3,speed:1},colorPropMap:{colorFront:"colorFront",colorMid:"colorMid",colorBack:"colorBack"}},{id:"grain-gradient",name:"Grain Gradient",description:"Noise-textured color gradient",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:uv,defaultProps:{softness:.5,intensity:.5,noise:.25,shape:"corners",speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack"}},{id:"god-rays",name:"God Rays",description:"Dramatic rays of light",category:"effects",colors:[{key:"color1",label:"Ray 1",defaultValue:"#cc3333"},{key:"color2",label:"Ray 2",defaultValue:"#cc9933"},{key:"color3",label:"Ray 3",defaultValue:"#99cc33"},{key:"color4",label:"Ray 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"},{key:"colorBloom",label:"Bloom",defaultValue:"#0000ff"}],component:lv,defaultProps:{bloom:.4,intensity:.8,density:.3,spotty:.3,midSize:.2,midIntensity:.4,speed:.75,offsetY:-.55},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack",colorBloom:"colorBloom"}},{id:"smoke-ring",name:"Smoke Ring",description:"Radial smoky gradient",category:"effects",colors:[{key:"color1",label:"Smoke Color",defaultValue:"#cc3333"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:Jh,defaultProps:{noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,speed:.5,scale:.8},colorPropMap:{color1:"colors[0]",colorBack:"colorBack"}},{id:"warp",name:"Warp",description:"Animated warped color fields",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"}],component:av,defaultProps:{proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shape:"checks",shapeScale:.1,speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]"}},{id:"metaballs",name:"Metaballs",description:"Gooey merging organic blobs",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"color5",label:"Color 5",defaultValue:"#33cc99"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:$h,defaultProps:{count:10,size:.83,speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",color5:"colors[4]",colorBack:"colorBack"}},{id:"dithering",name:"Dithering",description:"Retro pixel dithering effect",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#00b3ff"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:nv,defaultProps:{shape:"sphere",type:"4x4",size:2,speed:1,scale:.6},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"dot-orbit",name:"Dot Orbit",description:"Orbiting multi-color dot grid",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"color5",label:"Color 5",defaultValue:"#33cc99"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:Ih,defaultProps:{stepsPerColor:4,size:1,sizeRange:0,spreading:1,speed:1.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",color5:"colors[4]",colorBack:"colorBack"}},{id:"dot-grid",name:"Dot Grid",description:"Static grid of shapes",category:"effects",colors:[{key:"colorFill",label:"Fill",defaultValue:"#ffffff"},{key:"colorStroke",label:"Stroke",defaultValue:"#ffaa00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:Ph,defaultProps:{size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:"circle"},colorPropMap:{colorFill:"colorFill",colorStroke:"colorStroke",colorBack:"colorBack"}},{id:"voronoi",name:"Voronoi",description:"Animated Voronoi cell pattern",category:"effects",colors:[{key:"color1",label:"Cell 1",defaultValue:"#cc3333"},{key:"color2",label:"Cell 2",defaultValue:"#cc9933"},{key:"colorGlow",label:"Glow",defaultValue:"#ffffff"},{key:"colorGap",label:"Gap",defaultValue:"#2e0000"}],component:ev,defaultProps:{stepsPerColor:3,distortion:.4,gap:.04,glow:0,speed:.5,scale:.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",colorGlow:"colorGlow",colorGap:"colorGap"}},{id:"waves",name:"Waves",description:"Configurable wave line pattern",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#ffbb00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:tv,defaultProps:{frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0,shape:0,scale:.6},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"color-panels",name:"Color Panels",description:"Rotating translucent 3D panels",category:"effects",colors:[{key:"color1",label:"Panel 1",defaultValue:"#cc3333"},{key:"color2",label:"Panel 2",defaultValue:"#cc9933"},{key:"color3",label:"Panel 3",defaultValue:"#99cc33"},{key:"color4",label:"Panel 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:rv,defaultProps:{density:3,angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,speed:.5,scale:.8},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack"}},{id:"spiral",name:"Spiral",description:"Animated morphing spiral",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#7ad1ff"},{key:"colorBack",label:"Background",defaultValue:"#001429"}],component:ov,defaultProps:{density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"swirl",name:"Swirl",description:"Twisting color bands",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"colorBack",label:"Background",defaultValue:"#330000"}],component:iv,defaultProps:{bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noise:.2,noiseFrequency:.4,speed:.32},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",colorBack:"colorBack"}}];function _v(){return gc}function op(u){return gc.find(c=>c.id===u)}function xv(){return["effects","image-filters","logo-animations"]}function bv(u){return gc.filter(c=>c.category===u)}function Fd(){const u=new URLSearchParams(window.location.search),c=u.get("preset");if(!c)return null;const f=op(c);if(!f)return null;const r={};for(const d of f.colors){const m=u.get(d.key);m&&/^[0-9a-fA-F]{6}$/.test(m)&&(r[d.key]=`#${m}`)}return{presetId:c,colors:r}}function Av(u,c){const f=new URLSearchParams;f.set("preset",u);for(const[d,m]of Object.entries(c))f.set(d,m.replace("#",""));const r=`${window.location.pathname}?${f.toString()}`;window.history.replaceState({},"",r)}function Sv(u,c){const f={...u.defaultProps},r=[];for(const[d,m]of Object.entries(u.colorPropMap)){const v=c[d];if(!v)continue;const _=m.match(/^colors\[(\d+)\]$/);_?r.push({index:parseInt(_[1],10),value:v}):f[m]=v}return r.length>0&&(r.sort((d,m)=>d.index-m.index),f.colors=r.map(d=>d.value)),f}function Cv({preset:u,colors:c,onError:f}){const r=u.component,d=k.useRef(null),m=k.useMemo(()=>{try{const v=Sv(u,c);return d.current=null,v}catch(v){return d.current=v instanceof Error?v.message:"Failed to build shader props",u.defaultProps}},[u,c]);return k.useEffect(()=>{f(d.current)},[m,f]),F.jsx("div",{className:"shader-preview",children:F.jsx(r,{...m,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function co(){return(co=Object.assign||function(u){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&(u[r]=f[r])}return u}).apply(this,arguments)}function On(u,c){if(u==null)return{};var f,r,d={},m=Object.keys(u);for(r=0;r<m.length;r++)c.indexOf(f=m[r])>=0||(d[f]=u[f]);return d}function ui(u){var c=k.useRef(u),f=k.useRef(function(r){c.current&&c.current(r)});return c.current=u,f.current}var ri=function(u,c,f){return c===void 0&&(c=0),f===void 0&&(f=1),u>f?f:u<c?c:u},ni=function(u){return"touches"in u},sc=function(u){return u&&u.ownerDocument.defaultView||self},Kd=function(u,c,f){var r=u.getBoundingClientRect(),d=ni(c)?(function(m,v){for(var _=0;_<m.length;_++)if(m[_].identifier===v)return m[_];return m[0]})(c.touches,f):c;return{left:ri((d.pageX-(r.left+sc(u).pageXOffset))/r.width),top:ri((d.pageY-(r.top+sc(u).pageYOffset))/r.height)}},Zd=function(u){!ni(u)&&u.preventDefault()},ip=me.memo(function(u){var c=u.onMove,f=u.onKey,r=On(u,["onMove","onKey"]),d=k.useRef(null),m=ui(c),v=ui(f),_=k.useRef(null),b=k.useRef(!1),p=k.useMemo(function(){var Q=function(O){Zd(O),(ni(O)?O.touches.length>0:O.buttons>0)&&d.current?m(Kd(d.current,O,_.current)):T(!1)},Y=function(){return T(!1)};function T(O){var D=b.current,q=sc(d.current),L=O?q.addEventListener:q.removeEventListener;L(D?"touchmove":"mousemove",Q),L(D?"touchend":"mouseup",Y)}return[function(O){var D=O.nativeEvent,q=d.current;if(q&&(Zd(D),!(function(H,X){return X&&!ni(H)})(D,b.current)&&q)){if(ni(D)){b.current=!0;var L=D.changedTouches||[];L.length&&(_.current=L[0].identifier)}q.focus(),m(Kd(q,D,_.current)),T(!0)}},function(O){var D=O.which||O.keyCode;D<37||D>40||(O.preventDefault(),v({left:D===39?.05:D===37?-.05:0,top:D===40?.05:D===38?-.05:0}))},T]},[v,m]),C=p[0],B=p[1],N=p[2];return k.useEffect(function(){return N},[N]),me.createElement("div",co({},r,{onTouchStart:C,onMouseDown:C,className:"react-colorful__interactive",ref:d,onKeyDown:B,tabIndex:0,role:"slider"}))}),hc=function(u){return u.filter(Boolean).join(" ")},np=function(u){var c=u.color,f=u.left,r=u.top,d=r===void 0?.5:r,m=hc(["react-colorful__pointer",u.className]);return me.createElement("div",{className:m,style:{top:100*d+"%",left:100*f+"%"}},me.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:c}}))},Ae=function(u,c,f){return c===void 0&&(c=0),f===void 0&&(f=Math.pow(10,c)),Math.round(f*u)/f},Bv=function(u){return wv(fc(u))},fc=function(u){return u[0]==="#"&&(u=u.substring(1)),u.length<6?{r:parseInt(u[0]+u[0],16),g:parseInt(u[1]+u[1],16),b:parseInt(u[2]+u[2],16),a:u.length===4?Ae(parseInt(u[3]+u[3],16)/255,2):1}:{r:parseInt(u.substring(0,2),16),g:parseInt(u.substring(2,4),16),b:parseInt(u.substring(4,6),16),a:u.length===8?Ae(parseInt(u.substring(6,8),16)/255,2):1}},Ev=function(u){return Mv(Uv(u))},zv=function(u){var c=u.s,f=u.v,r=u.a,d=(200-c)*f/100;return{h:Ae(u.h),s:Ae(d>0&&d<200?c*f/100/(d<=100?d:200-d)*100:0),l:Ae(d/2),a:Ae(r,2)}},mc=function(u){var c=zv(u);return"hsl("+c.h+", "+c.s+"%, "+c.l+"%)"},Uv=function(u){var c=u.h,f=u.s,r=u.v,d=u.a;c=c/360*6,f/=100,r/=100;var m=Math.floor(c),v=r*(1-f),_=r*(1-(c-m)*f),b=r*(1-(1-c+m)*f),p=m%6;return{r:Ae(255*[r,_,v,v,b,r][p]),g:Ae(255*[b,r,r,_,v,v][p]),b:Ae(255*[v,v,b,r,r,_][p]),a:Ae(d,2)}},Rn=function(u){var c=u.toString(16);return c.length<2?"0"+c:c},Mv=function(u){var c=u.r,f=u.g,r=u.b,d=u.a,m=d<1?Rn(Ae(255*d)):"";return"#"+Rn(c)+Rn(f)+Rn(r)+m},wv=function(u){var c=u.r,f=u.g,r=u.b,d=u.a,m=Math.max(c,f,r),v=m-Math.min(c,f,r),_=v?m===c?(f-r)/v:m===f?2+(r-c)/v:4+(c-f)/v:0;return{h:Ae(60*(_<0?_+6:_)),s:Ae(m?v/m*100:0),v:Ae(m/255*100),a:d}},Rv=me.memo(function(u){var c=u.hue,f=u.onChange,r=hc(["react-colorful__hue",u.className]);return me.createElement("div",{className:r},me.createElement(ip,{onMove:function(d){f({h:360*d.left})},onKey:function(d){f({h:ri(c+360*d.left,0,360)})},"aria-label":"Hue","aria-valuenow":Ae(c),"aria-valuemax":"360","aria-valuemin":"0"},me.createElement(np,{className:"react-colorful__hue-pointer",left:c/360,color:mc({h:c,s:100,v:100,a:1})})))}),Tv=me.memo(function(u){var c=u.hsva,f=u.onChange,r={backgroundColor:mc({h:c.h,s:100,v:100,a:1})};return me.createElement("div",{className:"react-colorful__saturation",style:r},me.createElement(ip,{onMove:function(d){f({s:100*d.left,v:100-100*d.top})},onKey:function(d){f({s:ri(c.s+100*d.left,0,100),v:ri(c.v-100*d.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Ae(c.s)+"%, Brightness "+Ae(c.v)+"%"},me.createElement(np,{className:"react-colorful__saturation-pointer",top:1-c.v/100,left:c.s/100,color:mc(c)})))}),up=function(u,c){if(u===c)return!0;for(var f in u)if(u[f]!==c[f])return!1;return!0},Ov=function(u,c){return u.toLowerCase()===c.toLowerCase()||up(fc(u),fc(c))};function Vv(u,c,f){var r=ui(f),d=k.useState(function(){return u.toHsva(c)}),m=d[0],v=d[1],_=k.useRef({color:c,hsva:m});k.useEffect(function(){if(!u.equal(c,_.current.color)){var p=u.toHsva(c);_.current={hsva:p,color:c},v(p)}},[c,u]),k.useEffect(function(){var p;up(m,_.current.hsva)||u.equal(p=u.fromHsva(m),_.current.color)||(_.current={hsva:m,color:p},r(p))},[m,u,r]);var b=k.useCallback(function(p){v(function(C){return Object.assign({},C,p)})},[]);return[m,b]}var Dv=typeof window<"u"?k.useLayoutEffect:k.useEffect,Nv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Jd=new Map,Yv=function(u){Dv(function(){var c=u.current?u.current.ownerDocument:document;if(c!==void 0&&!Jd.has(c)){var f=c.createElement("style");f.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Jd.set(c,f);var r=Nv();r&&f.setAttribute("nonce",r),c.head.appendChild(f)}},[])},Hv=function(u){var c=u.className,f=u.colorModel,r=u.color,d=r===void 0?f.defaultColor:r,m=u.onChange,v=On(u,["className","colorModel","color","onChange"]),_=k.useRef(null);Yv(_);var b=Vv(f,d,m),p=b[0],C=b[1],B=hc(["react-colorful",c]);return me.createElement("div",co({},v,{ref:_,className:B}),me.createElement(Tv,{hsva:p,onChange:C}),me.createElement(Rv,{hue:p.h,onChange:C,className:"react-colorful__last-control"}))},Gv={defaultColor:"000",toHsva:Bv,fromHsva:function(u){return Ev({h:u.h,s:u.s,v:u.v,a:1})},equal:Ov},kv=function(u){return me.createElement(Hv,co({},u,{colorModel:Gv}))},Qv=/^#?([0-9A-F]{3,8})$/i,Xv=function(u){var c=u.color,f=c===void 0?"":c,r=u.onChange,d=u.onBlur,m=u.escape,v=u.validate,_=u.format,b=u.process,p=On(u,["color","onChange","onBlur","escape","validate","format","process"]),C=k.useState(function(){return m(f)}),B=C[0],N=C[1],Q=ui(r),Y=ui(d),T=k.useCallback(function(D){var q=m(D.target.value);N(q),v(q)&&Q(b?b(q):q)},[m,b,v,Q]),O=k.useCallback(function(D){v(D.target.value)||N(m(f)),Y(D)},[f,m,v,Y]);return k.useEffect(function(){N(m(f))},[f,m]),me.createElement("input",co({},p,{value:_?_(B):B,spellCheck:"false",onChange:T,onBlur:O}))},Wd=function(u){return"#"+u},jv=function(u){var c=u.prefixed,f=u.alpha,r=On(u,["prefixed","alpha"]),d=k.useCallback(function(v){return v.replace(/([^0-9A-F]+)/gi,"").substring(0,f?8:6)},[f]),m=k.useCallback(function(v){return(function(_,b){var p=Qv.exec(_),C=p?p[1].length:0;return C===3||C===6||!!b&&C===4||!!b&&C===8})(v,f)},[f]);return me.createElement(Xv,co({},r,{escape:d,format:c?Wd:void 0,process:Wd,validate:m}))};function Id({colorDefinitions:u,values:c,onChange:f,onReset:r}){return F.jsxs("div",{className:"color-panel",children:[F.jsxs("div",{className:"color-panel-header",children:[F.jsx("h3",{children:"Colors"}),F.jsx("button",{className:"reset-btn",onClick:r,children:"Reset"})]}),F.jsx("div",{className:"color-list",children:u.map(d=>F.jsxs("div",{className:"color-item",children:[F.jsxs("div",{className:"color-info",children:[F.jsx("label",{children:d.label}),d.description&&F.jsx("span",{className:"color-description",children:d.description})]}),F.jsxs("div",{className:"color-picker-wrapper",children:[F.jsx(kv,{color:c[d.key]||d.defaultValue,onChange:m=>f(d.key,m)}),F.jsx("div",{className:"hex-input-wrapper",children:F.jsx(jv,{color:c[d.key]||d.defaultValue,onChange:m=>f(d.key,m),prefixed:!0})})]})]},d.key))})]})}function qv(u){const c={...u.defaultProps},f=[];for(const r of u.colors){const d=u.colorPropMap[r.key];if(!d)continue;const m=d.match(/^colors\[(\d+)\]$/);m?f.push({index:parseInt(m[1],10),value:r.defaultValue}):c[d]=r.defaultValue}return f.length>0&&(f.sort((r,d)=>r.index-d.index),c.colors=f.map(r=>r.value)),c}function Lv({preset:u}){const c=u.component,f=k.useMemo(()=>qv(u),[u]);return F.jsx("div",{className:"preset-thumbnail",children:F.jsx(c,{...f,speed:0,style:{width:"100%",height:"100%",pointerEvents:"none"}})})}function Fv({selectedId:u,categoryFilter:c,onSelect:f,onCategoryChange:r}){const d=xv(),m=k.useMemo(()=>bv(c),[c]);return F.jsxs("div",{className:"preset-gallery",children:[F.jsx("div",{className:"gallery-top-row",children:F.jsx("div",{className:"category-tabs",children:d.map(v=>F.jsx("button",{className:`category-tab ${c===v?"active":""}`,onClick:()=>r(v),children:v==="image-filters"?"Image Filters":v==="logo-animations"?"Logo Animations":v==="effects"?"Effects":v},v))})}),F.jsx("div",{className:"preset-scroll-row",children:m.map(v=>F.jsxs("button",{className:`preset-card ${u===v.id?"selected":""}`,onClick:()=>f(v.id),children:[F.jsx(Lv,{preset:v}),F.jsx("span",{className:"preset-name",children:v.name})]},v.id))})]})}function Kv(){const u=_v(),[c,f]=k.useState(()=>{const H=Fd();return(H==null?void 0:H.presetId)||u[0].id}),[r,d]=k.useState(()=>{const H=Fd();return(H==null?void 0:H.colors)||{}}),[m,v]=k.useState("effects"),[_,b]=k.useState(!1),[p,C]=k.useState(null),[B,N]=k.useState(!1),Q=k.useRef(null),Y=op(c)||u[0];k.useEffect(()=>{Object.keys(r).length>0&&Av(c,r)},[c,r]),k.useEffect(()=>{const H=()=>{const X=window.scrollY;N(X>80)};return window.addEventListener("scroll",H,{passive:!0}),()=>window.removeEventListener("scroll",H)},[]);const T=k.useCallback(H=>{f(H),d({}),window.scrollTo({top:0,behavior:"smooth"})},[]),O=k.useCallback((H,X)=>{d(P=>({...P,[H]:X}))},[]),D=k.useCallback(()=>{d({})},[]),q=k.useCallback(H=>{C(H)},[]),L=Y.colors.reduce((H,X)=>(H[X.key]=r[X.key]||X.defaultValue,H),{});return F.jsxs("div",{className:"app",ref:Q,children:[F.jsx("div",{className:"shader-canvas-wrapper",children:F.jsx(Cv,{preset:Y,colors:L,onError:q})}),F.jsxs("header",{className:"top-bar",children:[F.jsxs("div",{className:"top-bar-left",children:[F.jsx("h1",{className:"app-title",children:"Shader Explorer"}),F.jsx("span",{className:"preset-name-label",children:Y.name})]}),F.jsx("div",{className:"top-bar-right",children:F.jsx("button",{className:`top-btn ${_?"active":""}`,onClick:()=>b(H=>!H),children:"Color"})})]}),p&&F.jsx("div",{className:"error-banner",children:p}),F.jsx("aside",{className:`color-panel-overlay ${_?"open":""}`,children:F.jsx(Id,{colorDefinitions:Y.colors,values:L,onChange:O,onReset:D})}),F.jsx("div",{className:`bottom-gallery ${B?"scrolled-away":""}`,children:F.jsx(Fv,{presets:u,selectedId:c,categoryFilter:m,onSelect:T,onCategoryChange:v})}),F.jsxs("div",{className:`scroll-hint ${B?"hidden":""}`,children:[F.jsx("div",{className:"scroll-hint-arrow"}),F.jsx("span",{children:"Scroll for colors"})]}),F.jsx("div",{className:"mobile-spacer"}),F.jsx("div",{className:"mobile-color-screen",children:F.jsx(Id,{colorDefinitions:Y.colors,values:L,onChange:O,onReset:D})})]})}j0.createRoot(document.getElementById("root")).render(F.jsxs(k.StrictMode,{children:[F.jsx(Kv,{}),F.jsx($0,{})]}));
