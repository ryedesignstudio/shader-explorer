var Ww=Object.defineProperty;var Zw=(a,r,l)=>r in a?Ww(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l;var fA=(a,r,l)=>Zw(a,typeof r!="symbol"?r+"":r,l);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();function jw(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var hc={exports:{}},sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function qw(){if(Dh)return sn;Dh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(n,s,c){var f=null;if(c!==void 0&&(f=""+c),s.key!==void 0&&(f=""+s.key),"key"in s){c={};for(var g in s)g!=="key"&&(c[g]=s[g])}else c=s;return s=c.ref,{$$typeof:a,type:n,key:f,ref:s!==void 0?s:null,props:c}}return sn.Fragment=r,sn.jsx=l,sn.jsxs=l,sn}var Mh;function Pw(){return Mh||(Mh=1,hc.exports=qw()),hc.exports}var j=Pw(),mc={exports:{}},hA={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function $w(){if(Oh)return hA;Oh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),w=Symbol.iterator;function S(Q){return Q===null||typeof Q!="object"?null:(Q=w&&Q[w]||Q["@@iterator"],typeof Q=="function"?Q:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function x(Q,L,k){this.props=Q,this.context=L,this.refs=b,this.updater=k||F}x.prototype.isReactComponent={},x.prototype.setState=function(Q,L){if(typeof Q!="object"&&typeof Q!="function"&&Q!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,Q,L,"setState")},x.prototype.forceUpdate=function(Q){this.updater.enqueueForceUpdate(this,Q,"forceUpdate")};function M(){}M.prototype=x.prototype;function z(Q,L,k){this.props=Q,this.context=L,this.refs=b,this.updater=k||F}var V=z.prototype=new M;V.constructor=z,y(V,x.prototype),V.isPureReactComponent=!0;var D=Array.isArray;function K(){}var Y={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function J(Q,L,k){var $=k.ref;return{$$typeof:a,type:Q,key:L,ref:$!==void 0?$:null,props:k}}function aA(Q,L){return J(Q.type,L,Q.props)}function oA(Q){return typeof Q=="object"&&Q!==null&&Q.$$typeof===a}function BA(Q){var L={"=":"=0",":":"=2"};return"$"+Q.replace(/[=:]/g,function(k){return L[k]})}var nA=/\/+/g;function cA(Q,L){return typeof Q=="object"&&Q!==null&&Q.key!=null?BA(""+Q.key):L.toString(36)}function vA(Q){switch(Q.status){case"fulfilled":return Q.value;case"rejected":throw Q.reason;default:switch(typeof Q.status=="string"?Q.then(K,K):(Q.status="pending",Q.then(function(L){Q.status==="pending"&&(Q.status="fulfilled",Q.value=L)},function(L){Q.status==="pending"&&(Q.status="rejected",Q.reason=L)})),Q.status){case"fulfilled":return Q.value;case"rejected":throw Q.reason}}throw Q}function I(Q,L,k,$,lA){var dA=typeof Q;(dA==="undefined"||dA==="boolean")&&(Q=null);var QA=!1;if(Q===null)QA=!0;else switch(dA){case"bigint":case"string":case"number":QA=!0;break;case"object":switch(Q.$$typeof){case a:case r:QA=!0;break;case p:return QA=Q._init,I(QA(Q._payload),L,k,$,lA)}}if(QA)return lA=lA(Q),QA=$===""?"."+cA(Q,0):$,D(lA)?(k="",QA!=null&&(k=QA.replace(nA,"$&/")+"/"),I(lA,L,k,"",function(go){return go})):lA!=null&&(oA(lA)&&(lA=aA(lA,k+(lA.key==null||Q&&Q.key===lA.key?"":(""+lA.key).replace(nA,"$&/")+"/")+QA)),L.push(lA)),1;QA=0;var ze=$===""?".":$+":";if(D(Q))for(var qA=0;qA<Q.length;qA++)$=Q[qA],dA=ze+cA($,qA),QA+=I($,L,k,dA,lA);else if(qA=S(Q),typeof qA=="function")for(Q=qA.call(Q),qA=0;!($=Q.next()).done;)$=$.value,dA=ze+cA($,qA++),QA+=I($,L,k,dA,lA);else if(dA==="object"){if(typeof Q.then=="function")return I(vA(Q),L,k,$,lA);throw L=String(Q),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(Q).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return QA}function X(Q,L,k){if(Q==null)return Q;var $=[],lA=0;return I(Q,$,"","",function(dA){return L.call(k,dA,lA++)}),$}function tA(Q){if(Q._status===-1){var L=Q._result;L=L(),L.then(function(k){(Q._status===0||Q._status===-1)&&(Q._status=1,Q._result=k)},function(k){(Q._status===0||Q._status===-1)&&(Q._status=2,Q._result=k)}),Q._status===-1&&(Q._status=0,Q._result=L)}if(Q._status===1)return Q._result.default;throw Q._result}var gA=typeof reportError=="function"?reportError:function(Q){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof Q=="object"&&Q!==null&&typeof Q.message=="string"?String(Q.message):String(Q),error:Q});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",Q);return}console.error(Q)},q={map:X,forEach:function(Q,L,k){X(Q,function(){L.apply(this,arguments)},k)},count:function(Q){var L=0;return X(Q,function(){L++}),L},toArray:function(Q){return X(Q,function(L){return L})||[]},only:function(Q){if(!oA(Q))throw Error("React.Children.only expected to receive a single React element child.");return Q}};return hA.Activity=v,hA.Children=q,hA.Component=x,hA.Fragment=l,hA.Profiler=s,hA.PureComponent=z,hA.StrictMode=n,hA.Suspense=d,hA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,hA.__COMPILER_RUNTIME={__proto__:null,c:function(Q){return Y.H.useMemoCache(Q)}},hA.cache=function(Q){return function(){return Q.apply(null,arguments)}},hA.cacheSignal=function(){return null},hA.cloneElement=function(Q,L,k){if(Q==null)throw Error("The argument must be a React element, but you passed "+Q+".");var $=y({},Q.props),lA=Q.key;if(L!=null)for(dA in L.key!==void 0&&(lA=""+L.key),L)!Z.call(L,dA)||dA==="key"||dA==="__self"||dA==="__source"||dA==="ref"&&L.ref===void 0||($[dA]=L[dA]);var dA=arguments.length-2;if(dA===1)$.children=k;else if(1<dA){for(var QA=Array(dA),ze=0;ze<dA;ze++)QA[ze]=arguments[ze+2];$.children=QA}return J(Q.type,lA,$)},hA.createContext=function(Q){return Q={$$typeof:f,_currentValue:Q,_currentValue2:Q,_threadCount:0,Provider:null,Consumer:null},Q.Provider=Q,Q.Consumer={$$typeof:c,_context:Q},Q},hA.createElement=function(Q,L,k){var $,lA={},dA=null;if(L!=null)for($ in L.key!==void 0&&(dA=""+L.key),L)Z.call(L,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(lA[$]=L[$]);var QA=arguments.length-2;if(QA===1)lA.children=k;else if(1<QA){for(var ze=Array(QA),qA=0;qA<QA;qA++)ze[qA]=arguments[qA+2];lA.children=ze}if(Q&&Q.defaultProps)for($ in QA=Q.defaultProps,QA)lA[$]===void 0&&(lA[$]=QA[$]);return J(Q,dA,lA)},hA.createRef=function(){return{current:null}},hA.forwardRef=function(Q){return{$$typeof:g,render:Q}},hA.isValidElement=oA,hA.lazy=function(Q){return{$$typeof:p,_payload:{_status:-1,_result:Q},_init:tA}},hA.memo=function(Q,L){return{$$typeof:h,type:Q,compare:L===void 0?null:L}},hA.startTransition=function(Q){var L=Y.T,k={};Y.T=k;try{var $=Q(),lA=Y.S;lA!==null&&lA(k,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(K,gA)}catch(dA){gA(dA)}finally{L!==null&&k.types!==null&&(L.types=k.types),Y.T=L}},hA.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},hA.use=function(Q){return Y.H.use(Q)},hA.useActionState=function(Q,L,k){return Y.H.useActionState(Q,L,k)},hA.useCallback=function(Q,L){return Y.H.useCallback(Q,L)},hA.useContext=function(Q){return Y.H.useContext(Q)},hA.useDebugValue=function(){},hA.useDeferredValue=function(Q,L){return Y.H.useDeferredValue(Q,L)},hA.useEffect=function(Q,L){return Y.H.useEffect(Q,L)},hA.useEffectEvent=function(Q){return Y.H.useEffectEvent(Q)},hA.useId=function(){return Y.H.useId()},hA.useImperativeHandle=function(Q,L,k){return Y.H.useImperativeHandle(Q,L,k)},hA.useInsertionEffect=function(Q,L){return Y.H.useInsertionEffect(Q,L)},hA.useLayoutEffect=function(Q,L){return Y.H.useLayoutEffect(Q,L)},hA.useMemo=function(Q,L){return Y.H.useMemo(Q,L)},hA.useOptimistic=function(Q,L){return Y.H.useOptimistic(Q,L)},hA.useReducer=function(Q,L,k){return Y.H.useReducer(Q,L,k)},hA.useRef=function(Q){return Y.H.useRef(Q)},hA.useState=function(Q){return Y.H.useState(Q)},hA.useSyncExternalStore=function(Q,L,k){return Y.H.useSyncExternalStore(Q,L,k)},hA.useTransition=function(){return Y.H.useTransition()},hA.version="19.2.4",hA}var Lh;function Qf(){return Lh||(Lh=1,mc.exports=$w()),mc.exports}var W=Qf();const ye=jw(W);var pc={exports:{}},un={},vc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function AC(){return Kh||(Kh=1,(function(a){function r(I,X){var tA=I.length;I.push(X);A:for(;0<tA;){var gA=tA-1>>>1,q=I[gA];if(0<s(q,X))I[gA]=X,I[tA]=q,tA=gA;else break A}}function l(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var X=I[0],tA=I.pop();if(tA!==X){I[0]=tA;A:for(var gA=0,q=I.length,Q=q>>>1;gA<Q;){var L=2*(gA+1)-1,k=I[L],$=L+1,lA=I[$];if(0>s(k,tA))$<q&&0>s(lA,k)?(I[gA]=lA,I[$]=tA,gA=$):(I[gA]=k,I[L]=tA,gA=L);else if($<q&&0>s(lA,tA))I[gA]=lA,I[$]=tA,gA=$;else break A}}return X}function s(I,X){var tA=I.sortIndex-X.sortIndex;return tA!==0?tA:I.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();a.unstable_now=function(){return f.now()-g}}var d=[],h=[],p=1,v=null,w=3,S=!1,F=!1,y=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function V(I){for(var X=l(h);X!==null;){if(X.callback===null)n(h);else if(X.startTime<=I)n(h),X.sortIndex=X.expirationTime,r(d,X);else break;X=l(h)}}function D(I){if(y=!1,V(I),!F)if(l(d)!==null)F=!0,K||(K=!0,BA());else{var X=l(h);X!==null&&vA(D,X.startTime-I)}}var K=!1,Y=-1,Z=5,J=-1;function aA(){return b?!0:!(a.unstable_now()-J<Z)}function oA(){if(b=!1,K){var I=a.unstable_now();J=I;var X=!0;try{A:{F=!1,y&&(y=!1,M(Y),Y=-1),S=!0;var tA=w;try{e:{for(V(I),v=l(d);v!==null&&!(v.expirationTime>I&&aA());){var gA=v.callback;if(typeof gA=="function"){v.callback=null,w=v.priorityLevel;var q=gA(v.expirationTime<=I);if(I=a.unstable_now(),typeof q=="function"){v.callback=q,V(I),X=!0;break e}v===l(d)&&n(d),V(I)}else n(d);v=l(d)}if(v!==null)X=!0;else{var Q=l(h);Q!==null&&vA(D,Q.startTime-I),X=!1}}break A}finally{v=null,w=tA,S=!1}X=void 0}}finally{X?BA():K=!1}}}var BA;if(typeof z=="function")BA=function(){z(oA)};else if(typeof MessageChannel<"u"){var nA=new MessageChannel,cA=nA.port2;nA.port1.onmessage=oA,BA=function(){cA.postMessage(null)}}else BA=function(){x(oA,0)};function vA(I,X){Y=x(function(){I(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(I){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var tA=w;w=X;try{return I()}finally{w=tA}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var tA=w;w=I;try{return X()}finally{w=tA}},a.unstable_scheduleCallback=function(I,X,tA){var gA=a.unstable_now();switch(typeof tA=="object"&&tA!==null?(tA=tA.delay,tA=typeof tA=="number"&&0<tA?gA+tA:gA):tA=gA,I){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=tA+q,I={id:p++,callback:X,priorityLevel:I,startTime:tA,expirationTime:q,sortIndex:-1},tA>gA?(I.sortIndex=tA,r(h,I),l(d)===null&&I===l(h)&&(y?(M(Y),Y=-1):y=!0,vA(D,tA-gA))):(I.sortIndex=q,r(d,I),F||S||(F=!0,K||(K=!0,BA()))),I},a.unstable_shouldYield=aA,a.unstable_wrapCallback=function(I){var X=w;return function(){var tA=w;w=X;try{return I.apply(this,arguments)}finally{w=tA}}}})(wc)),wc}var Rh;function eC(){return Rh||(Rh=1,vc.exports=AC()),vc.exports}var Cc={exports:{}},Le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function tC(){if(Vh)return Le;Vh=1;var a=Qf();function r(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)h+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var n={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(d,h,p){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:d,containerInfo:h,implementation:p}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Le.createPortal=function(d,h){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return c(d,h,null,p)},Le.flushSync=function(d){var h=f.T,p=n.p;try{if(f.T=null,n.p=2,d)return d()}finally{f.T=h,n.p=p,n.d.f()}},Le.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,n.d.C(d,h))},Le.prefetchDNS=function(d){typeof d=="string"&&n.d.D(d)},Le.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var p=h.as,v=g(p,h.crossOrigin),w=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;p==="style"?n.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):p==="script"&&n.d.X(d,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Le.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var p=g(h.as,h.crossOrigin);n.d.M(d,{crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&n.d.M(d)},Le.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var p=h.as,v=g(p,h.crossOrigin);n.d.L(d,p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Le.preloadModule=function(d,h){if(typeof d=="string")if(h){var p=g(h.as,h.crossOrigin);n.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:p,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else n.d.m(d)},Le.requestFormReset=function(d){n.d.r(d)},Le.unstable_batchedUpdates=function(d,h){return d(h)},Le.useFormState=function(d,h,p){return f.H.useFormState(d,h,p)},Le.useFormStatus=function(){return f.H.useHostTransitionStatus()},Le.version="19.2.4",Le}var Gh;function aC(){if(Gh)return Cc.exports;Gh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Cc.exports=tC(),Cc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function rC(){if(Nh)return un;Nh=1;var a=eC(),r=Qf(),l=aC();function n(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function c(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function f(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function g(A){if(A.tag===31){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function d(A){if(c(A)!==A)throw Error(n(188))}function h(A){var e=A.alternate;if(!e){if(e=c(A),e===null)throw Error(n(188));return e!==A?null:A}for(var t=A,o=e;;){var i=t.return;if(i===null)break;var u=i.alternate;if(u===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===t)return d(i),A;if(u===o)return d(i),e;u=u.sibling}throw Error(n(188))}if(t.return!==o.return)t=i,o=u;else{for(var B=!1,m=i.child;m;){if(m===t){B=!0,t=i,o=u;break}if(m===o){B=!0,o=i,t=u;break}m=m.sibling}if(!B){for(m=u.child;m;){if(m===t){B=!0,t=u,o=i;break}if(m===o){B=!0,o=u,t=i;break}m=m.sibling}if(!B)throw Error(n(189))}}if(t.alternate!==o)throw Error(n(190))}if(t.tag!==3)throw Error(n(188));return t.stateNode.current===t?A:e}function p(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=p(A),e!==null)return e;A=A.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),aA=Symbol.for("react.memo_cache_sentinel"),oA=Symbol.iterator;function BA(A){return A===null||typeof A!="object"?null:(A=oA&&A[oA]||A["@@iterator"],typeof A=="function"?A:null)}var nA=Symbol.for("react.client.reference");function cA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===nA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case y:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case D:return"Suspense";case K:return"SuspenseList";case J:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case F:return"Portal";case z:return A.displayName||"Context";case M:return(A._context.displayName||"Context")+".Consumer";case V:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case Y:return e=A.displayName||null,e!==null?e:cA(A.type)||"Memo";case Z:e=A._payload,A=A._init;try{return cA(A(e))}catch{}}return null}var vA=Array.isArray,I=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tA={pending:!1,data:null,method:null,action:null},gA=[],q=-1;function Q(A){return{current:A}}function L(A){0>q||(A.current=gA[q],gA[q]=null,q--)}function k(A,e){q++,gA[q]=A.current,A.current=e}var $=Q(null),lA=Q(null),dA=Q(null),QA=Q(null);function ze(A,e){switch(k(dA,e),k(lA,A),k($,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?ah(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=ah(e),A=rh(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}L($),k($,A)}function qA(){L($),L(lA),L(dA)}function go(A){A.memoizedState!==null&&k(QA,A);var e=$.current,t=rh(e,A.type);e!==t&&(k(lA,A),k($,t))}function Ln(A){lA.current===A&&(L($),L(lA)),QA.current===A&&(L(QA),rn._currentValue=tA)}var Pi,Tf;function ka(A){if(Pi===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Pi=e&&e[1]||"",Tf=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pi+A+Tf}var $i=!1;function As(A,e){if(!A||$i)return"";$i=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(O){var T=O}Reflect.construct(A,[],N)}else{try{N.call()}catch(O){T=O}A.call(N.prototype)}}else{try{throw Error()}catch(O){T=O}(N=A())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(O){if(O&&T&&typeof O.stack=="string")return[O.stack,T.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),B=u[0],m=u[1];if(B&&m){var C=B.split(`
`),H=m.split(`
`);for(i=o=0;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;for(;i<H.length&&!H[i].includes("DetermineComponentFrameRoot");)i++;if(o===C.length||i===H.length)for(o=C.length-1,i=H.length-1;1<=o&&0<=i&&C[o]!==H[i];)i--;for(;1<=o&&0<=i;o--,i--)if(C[o]!==H[i]){if(o!==1||i!==1)do if(o--,i--,0>i||C[o]!==H[i]){var R=`
`+C[o].replace(" at new "," at ");return A.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",A.displayName)),R}while(1<=o&&0<=i);break}}}finally{$i=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?ka(t):""}function Fp(A,e){switch(A.tag){case 26:case 27:case 5:return ka(A.type);case 16:return ka("Lazy");case 13:return A.child!==e&&e!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return As(A.type,!1);case 11:return As(A.type.render,!1);case 1:return As(A.type,!0);case 31:return ka("Activity");default:return""}}function Df(A){try{var e="",t=null;do e+=Fp(A,t),t=A,A=A.return;while(A);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var es=Object.prototype.hasOwnProperty,ts=a.unstable_scheduleCallback,as=a.unstable_cancelCallback,Ep=a.unstable_shouldYield,xp=a.unstable_requestPaint,tt=a.unstable_now,bp=a.unstable_getCurrentPriorityLevel,Mf=a.unstable_ImmediatePriority,Of=a.unstable_UserBlockingPriority,Kn=a.unstable_NormalPriority,_p=a.unstable_LowPriority,Lf=a.unstable_IdlePriority,Hp=a.log,Sp=a.unstable_setDisableYieldValue,ho=null,at=null;function sa(A){if(typeof Hp=="function"&&Sp(A),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(ho,A)}catch{}}var rt=Math.clz32?Math.clz32:Dp,Ip=Math.log,Tp=Math.LN2;function Dp(A){return A>>>=0,A===0?32:31-(Ip(A)/Tp|0)|0}var Rn=256,Vn=262144,Gn=4194304;function Xa(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return A&261888;case 262144:case 524288:case 1048576:case 2097152:return A&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function Nn(A,e,t){var o=A.pendingLanes;if(o===0)return 0;var i=0,u=A.suspendedLanes,B=A.pingedLanes;A=A.warmLanes;var m=o&134217727;return m!==0?(o=m&~u,o!==0?i=Xa(o):(B&=m,B!==0?i=Xa(B):t||(t=m&~A,t!==0&&(i=Xa(t))))):(m=o&~u,m!==0?i=Xa(m):B!==0?i=Xa(B):t||(t=o&~A,t!==0&&(i=Xa(t)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,t=e&-e,u>=t||u===32&&(t&4194048)!==0)?e:i}function mo(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function Mp(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kf(){var A=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),A}function rs(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function po(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function Op(A,e,t,o,i,u){var B=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var m=A.entanglements,C=A.expirationTimes,H=A.hiddenUpdates;for(t=B&~t;0<t;){var R=31-rt(t),N=1<<R;m[R]=0,C[R]=-1;var T=H[R];if(T!==null)for(H[R]=null,R=0;R<T.length;R++){var O=T[R];O!==null&&(O.lane&=-536870913)}t&=~N}o!==0&&Rf(A,o,0),u!==0&&i===0&&A.tag!==0&&(A.suspendedLanes|=u&~(B&~e))}function Rf(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var o=31-rt(e);A.entangledLanes|=e,A.entanglements[o]=A.entanglements[o]|1073741824|t&261930}function Vf(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var o=31-rt(t),i=1<<o;i&e|A[o]&e&&(A[o]|=e),t&=~i}}function Gf(A,e){var t=e&-e;return t=(t&42)!==0?1:os(t),(t&(A.suspendedLanes|e))!==0?0:t}function os(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function ns(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function Nf(){var A=X.p;return A!==0?A:(A=window.event,A===void 0?32:xh(A.type))}function zf(A,e){var t=X.p;try{return X.p=A,e()}finally{X.p=t}}var ua=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ua,Je="__reactProps$"+ua,mr="__reactContainer$"+ua,ls="__reactEvents$"+ua,Lp="__reactListeners$"+ua,Kp="__reactHandles$"+ua,Yf="__reactResources$"+ua,vo="__reactMarker$"+ua;function is(A){delete A[Ee],delete A[Je],delete A[ls],delete A[Lp],delete A[Kp]}function pr(A){var e=A[Ee];if(e)return e;for(var t=A.parentNode;t;){if(e=t[mr]||t[Ee]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=ch(A);A!==null;){if(t=A[Ee])return t;A=ch(A)}return e}A=t,t=A.parentNode}return null}function vr(A){if(A=A[Ee]||A[mr]){var e=A.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return A}return null}function wo(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(n(33))}function wr(A){var e=A[Yf];return e||(e=A[Yf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function pe(A){A[vo]=!0}var kf=new Set,Xf={};function Ja(A,e){Cr(A,e),Cr(A+"Capture",e)}function Cr(A,e){for(Xf[A]=e,A=0;A<e.length;A++)kf.add(e[A])}var Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jf={},Wf={};function Vp(A){return es.call(Wf,A)?!0:es.call(Jf,A)?!1:Rp.test(A)?Wf[A]=!0:(Jf[A]=!0,!1)}function zn(A,e,t){if(Vp(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Yn(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function Vt(A,e,t,o){if(o===null)A.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+o)}}function Bt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function Zf(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gp(A,e,t){var o=Object.getOwnPropertyDescriptor(A.constructor.prototype,e);if(!A.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var i=o.get,u=o.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return i.call(this)},set:function(B){t=""+B,u.call(this,B)}}),Object.defineProperty(A,e,{enumerable:o.enumerable}),{getValue:function(){return t},setValue:function(B){t=""+B},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function ss(A){if(!A._valueTracker){var e=Zf(A)?"checked":"value";A._valueTracker=Gp(A,e,""+A[e])}}function jf(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),o="";return A&&(o=Zf(A)?A.checked?"true":"false":A.value),A=o,A!==t?(e.setValue(A),!0):!1}function kn(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var Np=/[\n"\\]/g;function gt(A){return A.replace(Np,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function us(A,e,t,o,i,u,B,m){A.name="",B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"?A.type=B:A.removeAttribute("type"),e!=null?B==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Bt(e)):A.value!==""+Bt(e)&&(A.value=""+Bt(e)):B!=="submit"&&B!=="reset"||A.removeAttribute("value"),e!=null?cs(A,B,Bt(e)):t!=null?cs(A,B,Bt(t)):o!=null&&A.removeAttribute("value"),i==null&&u!=null&&(A.defaultChecked=!!u),i!=null&&(A.checked=i&&typeof i!="function"&&typeof i!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?A.name=""+Bt(m):A.removeAttribute("name")}function qf(A,e,t,o,i,u,B,m){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(A.type=u),e!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){ss(A);return}t=t!=null?""+Bt(t):"",e=e!=null?""+Bt(e):t,m||e===A.value||(A.value=e),A.defaultValue=e}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,A.checked=m?A.checked:!!o,A.defaultChecked=!!o,B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"&&(A.name=B),ss(A)}function cs(A,e,t){e==="number"&&kn(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Qr(A,e,t,o){if(A=A.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<A.length;t++)i=e.hasOwnProperty("$"+A[t].value),A[t].selected!==i&&(A[t].selected=i),i&&o&&(A[t].defaultSelected=!0)}else{for(t=""+Bt(t),e=null,i=0;i<A.length;i++){if(A[i].value===t){A[i].selected=!0,o&&(A[i].defaultSelected=!0);return}e!==null||A[i].disabled||(e=A[i])}e!==null&&(e.selected=!0)}}function Pf(A,e,t){if(e!=null&&(e=""+Bt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Bt(t):""}function $f(A,e,t,o){if(e==null){if(o!=null){if(t!=null)throw Error(n(92));if(vA(o)){if(1<o.length)throw Error(n(93));o=o[0]}t=o}t==null&&(t=""),e=t}t=Bt(e),A.defaultValue=t,o=A.textContent,o===t&&o!==""&&o!==null&&(A.value=o),ss(A)}function Ur(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function AB(A,e,t){var o=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?o?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":o?A.setProperty(e,t):typeof t!="number"||t===0||zp.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function eB(A,e,t){if(e!=null&&typeof e!="object")throw Error(n(62));if(A=A.style,t!=null){for(var o in t)!t.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?A.setProperty(o,""):o==="float"?A.cssFloat="":A[o]="");for(var i in e)o=e[i],e.hasOwnProperty(i)&&t[i]!==o&&AB(A,i,o)}else for(var u in e)e.hasOwnProperty(u)&&AB(A,u,e[u])}function fs(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(A){return kp.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}function Gt(){}var Bs=null;function gs(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var yr=null,Fr=null;function tB(A){var e=vr(A);if(e&&(A=e.stateNode)){var t=A[Je]||null;A:switch(A=e.stateNode,e.type){case"input":if(us(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+gt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var o=t[e];if(o!==A&&o.form===A.form){var i=o[Je]||null;if(!i)throw Error(n(90));us(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)o=t[e],o.form===A.form&&jf(o)}break A;case"textarea":Pf(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Qr(A,!!t.multiple,e,!1)}}}var ds=!1;function aB(A,e,t){if(ds)return A(e,t);ds=!0;try{var o=A(e);return o}finally{if(ds=!1,(yr!==null||Fr!==null)&&(Tl(),yr&&(e=yr,A=Fr,Fr=yr=null,tB(e),A)))for(e=0;e<A.length;e++)tB(A[e])}}function Co(A,e){var t=A.stateNode;if(t===null)return null;var o=t[Je]||null;if(o===null)return null;t=o[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(A=A.type,o=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!o;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(n(231,e,typeof t));return t}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=!1;if(Nt)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{hs=!1}var ca=null,ms=null,Jn=null;function rB(){if(Jn)return Jn;var A,e=ms,t=e.length,o,i="value"in ca?ca.value:ca.textContent,u=i.length;for(A=0;A<t&&e[A]===i[A];A++);var B=t-A;for(o=1;o<=B&&e[t-o]===i[u-o];o++);return Jn=i.slice(A,1<o?1-o:void 0)}function Wn(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Zn(){return!0}function oB(){return!1}function We(A){function e(t,o,i,u,B){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=u,this.target=B,this.currentTarget=null;for(var m in A)A.hasOwnProperty(m)&&(t=A[m],this[m]=t?t(u):u[m]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zn:oB,this.isPropagationStopped=oB,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),e}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=We(Wa),Uo=v({},Wa,{view:0,detail:0}),Xp=We(Uo),ps,vs,yo,qn=v({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cs,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==yo&&(yo&&A.type==="mousemove"?(ps=A.screenX-yo.screenX,vs=A.screenY-yo.screenY):vs=ps=0,yo=A),ps)},movementY:function(A){return"movementY"in A?A.movementY:vs}}),nB=We(qn),Jp=v({},qn,{dataTransfer:0}),Wp=We(Jp),Zp=v({},Uo,{relatedTarget:0}),ws=We(Zp),jp=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=We(jp),Pp=v({},Wa,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),$p=We(Pp),Av=v({},Wa,{data:0}),lB=We(Av),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=av[A])?!!e[A]:!1}function Cs(){return rv}var ov=v({},Uo,{key:function(A){if(A.key){var e=ev[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=Wn(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?tv[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cs,charCode:function(A){return A.type==="keypress"?Wn(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Wn(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),nv=We(ov),lv=v({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iB=We(lv),iv=v({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cs}),sv=We(iv),uv=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=We(uv),fv=v({},qn,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=We(fv),gv=v({},Wa,{newState:0,oldState:0}),dv=We(gv),hv=[9,13,27,32],Qs=Nt&&"CompositionEvent"in window,Fo=null;Nt&&"documentMode"in document&&(Fo=document.documentMode);var mv=Nt&&"TextEvent"in window&&!Fo,sB=Nt&&(!Qs||Fo&&8<Fo&&11>=Fo),uB=" ",cB=!1;function fB(A,e){switch(A){case"keyup":return hv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BB(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Er=!1;function pv(A,e){switch(A){case"compositionend":return BB(e);case"keypress":return e.which!==32?null:(cB=!0,uB);case"textInput":return A=e.data,A===uB&&cB?null:A;default:return null}}function vv(A,e){if(Er)return A==="compositionend"||!Qs&&fB(A,e)?(A=rB(),Jn=ms=ca=null,Er=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sB&&e.locale!=="ko"?null:e.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gB(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!wv[A.type]:e==="textarea"}function dB(A,e,t,o){yr?Fr?Fr.push(o):Fr=[o]:yr=o,e=Vl(e,"onChange"),0<e.length&&(t=new jn("onChange","change",null,t,o),A.push({event:t,listeners:e}))}var Eo=null,xo=null;function Cv(A){qd(A,0)}function Pn(A){var e=wo(A);if(jf(e))return A}function hB(A,e){if(A==="change")return e}var mB=!1;if(Nt){var Us;if(Nt){var ys="oninput"in document;if(!ys){var pB=document.createElement("div");pB.setAttribute("oninput","return;"),ys=typeof pB.oninput=="function"}Us=ys}else Us=!1;mB=Us&&(!document.documentMode||9<document.documentMode)}function vB(){Eo&&(Eo.detachEvent("onpropertychange",wB),xo=Eo=null)}function wB(A){if(A.propertyName==="value"&&Pn(xo)){var e=[];dB(e,xo,A,gs(A)),aB(Cv,e)}}function Qv(A,e,t){A==="focusin"?(vB(),Eo=e,xo=t,Eo.attachEvent("onpropertychange",wB)):A==="focusout"&&vB()}function Uv(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Pn(xo)}function yv(A,e){if(A==="click")return Pn(e)}function Fv(A,e){if(A==="input"||A==="change")return Pn(e)}function Ev(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var ot=typeof Object.is=="function"?Object.is:Ev;function bo(A,e){if(ot(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),o=Object.keys(e);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!es.call(e,i)||!ot(A[i],e[i]))return!1}return!0}function CB(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function QB(A,e){var t=CB(A);A=0;for(var o;t;){if(t.nodeType===3){if(o=A+t.textContent.length,A<=e&&o>=e)return{node:t,offset:e-A};A=o}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=CB(t)}}function UB(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?UB(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function yB(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=kn(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=kn(A.document)}return e}function Fs(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var xv=Nt&&"documentMode"in document&&11>=document.documentMode,xr=null,Es=null,_o=null,xs=!1;function FB(A,e,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xs||xr==null||xr!==kn(o)||(o=xr,"selectionStart"in o&&Fs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&bo(_o,o)||(_o=o,o=Vl(Es,"onSelect"),0<o.length&&(e=new jn("onSelect","select",null,e,t),A.push({event:e,listeners:o}),e.target=xr)))}function Za(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var br={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},bs={},EB={};Nt&&(EB=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function ja(A){if(bs[A])return bs[A];if(!br[A])return A;var e=br[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in EB)return bs[A]=e[t];return A}var xB=ja("animationend"),bB=ja("animationiteration"),_B=ja("animationstart"),bv=ja("transitionrun"),_v=ja("transitionstart"),Hv=ja("transitioncancel"),HB=ja("transitionend"),SB=new Map,_s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_s.push("scrollEnd");function xt(A,e){SB.set(A,e),Ja(e,[A])}var $n=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},dt=[],_r=0,Hs=0;function Al(){for(var A=_r,e=Hs=_r=0;e<A;){var t=dt[e];dt[e++]=null;var o=dt[e];dt[e++]=null;var i=dt[e];dt[e++]=null;var u=dt[e];if(dt[e++]=null,o!==null&&i!==null){var B=o.pending;B===null?i.next=i:(i.next=B.next,B.next=i),o.pending=i}u!==0&&IB(t,i,u)}}function el(A,e,t,o){dt[_r++]=A,dt[_r++]=e,dt[_r++]=t,dt[_r++]=o,Hs|=o,A.lanes|=o,A=A.alternate,A!==null&&(A.lanes|=o)}function Ss(A,e,t,o){return el(A,e,t,o),tl(A)}function qa(A,e){return el(A,null,null,e),tl(A)}function IB(A,e,t){A.lanes|=t;var o=A.alternate;o!==null&&(o.lanes|=t);for(var i=!1,u=A.return;u!==null;)u.childLanes|=t,o=u.alternate,o!==null&&(o.childLanes|=t),u.tag===22&&(A=u.stateNode,A===null||A._visibility&1||(i=!0)),A=u,u=u.return;return A.tag===3?(u=A.stateNode,i&&e!==null&&(i=31-rt(t),A=u.hiddenUpdates,o=A[i],o===null?A[i]=[e]:o.push(e),e.lane=t|536870912),u):null}function tl(A){if(50<qo)throw qo=0,Vu=null,Error(n(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var Hr={};function Sv(A,e,t,o){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(A,e,t,o){return new Sv(A,e,t,o)}function Is(A){return A=A.prototype,!(!A||!A.isReactComponent)}function zt(A,e){var t=A.alternate;return t===null?(t=nt(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function TB(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function al(A,e,t,o,i,u){var B=0;if(o=A,typeof A=="function")Is(A)&&(B=1);else if(typeof A=="string")B=Ow(A,t,$.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case J:return A=nt(31,t,e,i),A.elementType=J,A.lanes=u,A;case y:return Pa(t.children,i,u,e);case b:B=8,i|=24;break;case x:return A=nt(12,t,e,i|2),A.elementType=x,A.lanes=u,A;case D:return A=nt(13,t,e,i),A.elementType=D,A.lanes=u,A;case K:return A=nt(19,t,e,i),A.elementType=K,A.lanes=u,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case z:B=10;break A;case M:B=9;break A;case V:B=11;break A;case Y:B=14;break A;case Z:B=16,o=null;break A}B=29,t=Error(n(130,A===null?"null":typeof A,"")),o=null}return e=nt(B,t,e,i),e.elementType=A,e.type=o,e.lanes=u,e}function Pa(A,e,t,o){return A=nt(7,A,o,e),A.lanes=t,A}function Ts(A,e,t){return A=nt(6,A,null,e),A.lanes=t,A}function DB(A){var e=nt(18,null,null,0);return e.stateNode=A,e}function Ds(A,e,t){return e=nt(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var MB=new WeakMap;function ht(A,e){if(typeof A=="object"&&A!==null){var t=MB.get(A);return t!==void 0?t:(e={value:A,source:e,stack:Df(e)},MB.set(A,e),e)}return{value:A,source:e,stack:Df(e)}}var Sr=[],Ir=0,rl=null,Ho=0,mt=[],pt=0,fa=null,Tt=1,Dt="";function Yt(A,e){Sr[Ir++]=Ho,Sr[Ir++]=rl,rl=A,Ho=e}function OB(A,e,t){mt[pt++]=Tt,mt[pt++]=Dt,mt[pt++]=fa,fa=A;var o=Tt;A=Dt;var i=32-rt(o)-1;o&=~(1<<i),t+=1;var u=32-rt(e)+i;if(30<u){var B=i-i%5;u=(o&(1<<B)-1).toString(32),o>>=B,i-=B,Tt=1<<32-rt(e)+i|t<<i|o,Dt=u+A}else Tt=1<<u|t<<i|o,Dt=A}function Ms(A){A.return!==null&&(Yt(A,1),OB(A,1,0))}function Os(A){for(;A===rl;)rl=Sr[--Ir],Sr[Ir]=null,Ho=Sr[--Ir],Sr[Ir]=null;for(;A===fa;)fa=mt[--pt],mt[pt]=null,Dt=mt[--pt],mt[pt]=null,Tt=mt[--pt],mt[pt]=null}function LB(A,e){mt[pt++]=Tt,mt[pt++]=Dt,mt[pt++]=fa,Tt=e.id,Dt=e.overflow,fa=A}var xe=null,GA=null,EA=!1,Ba=null,vt=!1,Ls=Error(n(519));function ga(A){var e=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(ht(e,A)),Ls}function KB(A){var e=A.stateNode,t=A.type,o=A.memoizedProps;switch(e[Ee]=A,e[Je]=o,t){case"dialog":CA("cancel",e),CA("close",e);break;case"iframe":case"object":case"embed":CA("load",e);break;case"video":case"audio":for(t=0;t<$o.length;t++)CA($o[t],e);break;case"source":CA("error",e);break;case"img":case"image":case"link":CA("error",e),CA("load",e);break;case"details":CA("toggle",e);break;case"input":CA("invalid",e),qf(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":CA("invalid",e);break;case"textarea":CA("invalid",e),$f(e,o.value,o.defaultValue,o.children)}t=o.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||o.suppressHydrationWarning===!0||eh(e.textContent,t)?(o.popover!=null&&(CA("beforetoggle",e),CA("toggle",e)),o.onScroll!=null&&CA("scroll",e),o.onScrollEnd!=null&&CA("scrollend",e),o.onClick!=null&&(e.onclick=Gt),e=!0):e=!1,e||ga(A,!0)}function RB(A){for(xe=A.return;xe;)switch(xe.tag){case 5:case 31:case 13:vt=!1;return;case 27:case 3:vt=!0;return;default:xe=xe.return}}function Tr(A){if(A!==xe)return!1;if(!EA)return RB(A),EA=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||ec(A.type,A.memoizedProps)),t=!t),t&&GA&&ga(A),RB(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(n(317));GA=uh(A)}else if(e===31){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(n(317));GA=uh(A)}else e===27?(e=GA,ba(A.type)?(A=nc,nc=null,GA=A):GA=e):GA=xe?Ct(A.stateNode.nextSibling):null;return!0}function $a(){GA=xe=null,EA=!1}function Ks(){var A=Ba;return A!==null&&(Pe===null?Pe=A:Pe.push.apply(Pe,A),Ba=null),A}function So(A){Ba===null?Ba=[A]:Ba.push(A)}var Rs=Q(null),Ar=null,kt=null;function da(A,e,t){k(Rs,e._currentValue),e._currentValue=t}function Xt(A){A._currentValue=Rs.current,L(Rs)}function Vs(A,e,t){for(;A!==null;){var o=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),A===t)break;A=A.return}}function Gs(A,e,t,o){var i=A.child;for(i!==null&&(i.return=A);i!==null;){var u=i.dependencies;if(u!==null){var B=i.child;u=u.firstContext;A:for(;u!==null;){var m=u;u=i;for(var C=0;C<e.length;C++)if(m.context===e[C]){u.lanes|=t,m=u.alternate,m!==null&&(m.lanes|=t),Vs(u.return,t,A),o||(B=null);break A}u=m.next}}else if(i.tag===18){if(B=i.return,B===null)throw Error(n(341));B.lanes|=t,u=B.alternate,u!==null&&(u.lanes|=t),Vs(B,t,A),B=null}else B=i.child;if(B!==null)B.return=i;else for(B=i;B!==null;){if(B===A){B=null;break}if(i=B.sibling,i!==null){i.return=B.return,B=i;break}B=B.return}i=B}}function Dr(A,e,t,o){A=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var B=i.alternate;if(B===null)throw Error(n(387));if(B=B.memoizedProps,B!==null){var m=i.type;ot(i.pendingProps.value,B.value)||(A!==null?A.push(m):A=[m])}}else if(i===QA.current){if(B=i.alternate,B===null)throw Error(n(387));B.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(A!==null?A.push(rn):A=[rn])}i=i.return}A!==null&&Gs(e,A,t,o),e.flags|=262144}function ol(A){for(A=A.firstContext;A!==null;){if(!ot(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function er(A){Ar=A,kt=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function be(A){return VB(Ar,A)}function nl(A,e){return Ar===null&&er(A),VB(A,e)}function VB(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},kt===null){if(A===null)throw Error(n(308));kt=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else kt=kt.next=e;return t}var Iv=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,o){A.push(o)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},Tv=a.unstable_scheduleCallback,Dv=a.unstable_NormalPriority,re={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ns(){return{controller:new Iv,data:new Map,refCount:0}}function Io(A){A.refCount--,A.refCount===0&&Tv(Dv,function(){A.controller.abort()})}var To=null,zs=0,Mr=0,Or=null;function Mv(A,e){if(To===null){var t=To=[];zs=0,Mr=Xu(),Or={status:"pending",value:void 0,then:function(o){t.push(o)}}}return zs++,e.then(GB,GB),e}function GB(){if(--zs===0&&To!==null){Or!==null&&(Or.status="fulfilled");var A=To;To=null,Mr=0,Or=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function Ov(A,e){var t=[],o={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return A.then(function(){o.status="fulfilled",o.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(o.status="rejected",o.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),o}var NB=I.S;I.S=function(A,e){Fd=tt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Mv(A,e),NB!==null&&NB(A,e)};var tr=Q(null);function Ys(){var A=tr.current;return A!==null?A:RA.pooledCache}function ll(A,e){e===null?k(tr,tr.current):k(tr,e.pool)}function zB(){var A=Ys();return A===null?null:{parent:re._currentValue,pool:A}}var Lr=Error(n(460)),ks=Error(n(474)),il=Error(n(542)),sl={then:function(){}};function YB(A){return A=A.status,A==="fulfilled"||A==="rejected"}function kB(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(Gt,Gt),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,JB(A),A;default:if(typeof e.status=="string")e.then(Gt,Gt);else{if(A=RA,A!==null&&100<A.shellSuspendCounter)throw Error(n(482));A=e,A.status="pending",A.then(function(o){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=o}},function(o){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,JB(A),A}throw rr=e,Lr}}function ar(A){try{var e=A._init;return e(A._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(rr=t,Lr):t}}var rr=null;function XB(){if(rr===null)throw Error(n(459));var A=rr;return rr=null,A}function JB(A){if(A===Lr||A===il)throw Error(n(483))}var Kr=null,Do=0;function ul(A){var e=Do;return Do+=1,Kr===null&&(Kr=[]),kB(Kr,A,e)}function Mo(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function cl(A,e){throw e.$$typeof===w?Error(n(525)):(A=Object.prototype.toString.call(e),Error(n(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function WB(A){function e(E,U){if(A){var _=E.deletions;_===null?(E.deletions=[U],E.flags|=16):_.push(U)}}function t(E,U){if(!A)return null;for(;U!==null;)e(E,U),U=U.sibling;return null}function o(E){for(var U=new Map;E!==null;)E.key!==null?U.set(E.key,E):U.set(E.index,E),E=E.sibling;return U}function i(E,U){return E=zt(E,U),E.index=0,E.sibling=null,E}function u(E,U,_){return E.index=_,A?(_=E.alternate,_!==null?(_=_.index,_<U?(E.flags|=67108866,U):_):(E.flags|=67108866,U)):(E.flags|=1048576,U)}function B(E){return A&&E.alternate===null&&(E.flags|=67108866),E}function m(E,U,_,G){return U===null||U.tag!==6?(U=Ts(_,E.mode,G),U.return=E,U):(U=i(U,_),U.return=E,U)}function C(E,U,_,G){var iA=_.type;return iA===y?R(E,U,_.props.children,G,_.key):U!==null&&(U.elementType===iA||typeof iA=="object"&&iA!==null&&iA.$$typeof===Z&&ar(iA)===U.type)?(U=i(U,_.props),Mo(U,_),U.return=E,U):(U=al(_.type,_.key,_.props,null,E.mode,G),Mo(U,_),U.return=E,U)}function H(E,U,_,G){return U===null||U.tag!==4||U.stateNode.containerInfo!==_.containerInfo||U.stateNode.implementation!==_.implementation?(U=Ds(_,E.mode,G),U.return=E,U):(U=i(U,_.children||[]),U.return=E,U)}function R(E,U,_,G,iA){return U===null||U.tag!==7?(U=Pa(_,E.mode,G,iA),U.return=E,U):(U=i(U,_),U.return=E,U)}function N(E,U,_){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Ts(""+U,E.mode,_),U.return=E,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case S:return _=al(U.type,U.key,U.props,null,E.mode,_),Mo(_,U),_.return=E,_;case F:return U=Ds(U,E.mode,_),U.return=E,U;case Z:return U=ar(U),N(E,U,_)}if(vA(U)||BA(U))return U=Pa(U,E.mode,_,null),U.return=E,U;if(typeof U.then=="function")return N(E,ul(U),_);if(U.$$typeof===z)return N(E,nl(E,U),_);cl(E,U)}return null}function T(E,U,_,G){var iA=U!==null?U.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return iA!==null?null:m(E,U,""+_,G);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case S:return _.key===iA?C(E,U,_,G):null;case F:return _.key===iA?H(E,U,_,G):null;case Z:return _=ar(_),T(E,U,_,G)}if(vA(_)||BA(_))return iA!==null?null:R(E,U,_,G,null);if(typeof _.then=="function")return T(E,U,ul(_),G);if(_.$$typeof===z)return T(E,U,nl(E,_),G);cl(E,_)}return null}function O(E,U,_,G,iA){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return E=E.get(_)||null,m(U,E,""+G,iA);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return E=E.get(G.key===null?_:G.key)||null,C(U,E,G,iA);case F:return E=E.get(G.key===null?_:G.key)||null,H(U,E,G,iA);case Z:return G=ar(G),O(E,U,_,G,iA)}if(vA(G)||BA(G))return E=E.get(_)||null,R(U,E,G,iA,null);if(typeof G.then=="function")return O(E,U,_,ul(G),iA);if(G.$$typeof===z)return O(E,U,_,nl(U,G),iA);cl(U,G)}return null}function eA(E,U,_,G){for(var iA=null,xA=null,rA=U,pA=U=0,yA=null;rA!==null&&pA<_.length;pA++){rA.index>pA?(yA=rA,rA=null):yA=rA.sibling;var bA=T(E,rA,_[pA],G);if(bA===null){rA===null&&(rA=yA);break}A&&rA&&bA.alternate===null&&e(E,rA),U=u(bA,U,pA),xA===null?iA=bA:xA.sibling=bA,xA=bA,rA=yA}if(pA===_.length)return t(E,rA),EA&&Yt(E,pA),iA;if(rA===null){for(;pA<_.length;pA++)rA=N(E,_[pA],G),rA!==null&&(U=u(rA,U,pA),xA===null?iA=rA:xA.sibling=rA,xA=rA);return EA&&Yt(E,pA),iA}for(rA=o(rA);pA<_.length;pA++)yA=O(rA,E,pA,_[pA],G),yA!==null&&(A&&yA.alternate!==null&&rA.delete(yA.key===null?pA:yA.key),U=u(yA,U,pA),xA===null?iA=yA:xA.sibling=yA,xA=yA);return A&&rA.forEach(function(Ta){return e(E,Ta)}),EA&&Yt(E,pA),iA}function sA(E,U,_,G){if(_==null)throw Error(n(151));for(var iA=null,xA=null,rA=U,pA=U=0,yA=null,bA=_.next();rA!==null&&!bA.done;pA++,bA=_.next()){rA.index>pA?(yA=rA,rA=null):yA=rA.sibling;var Ta=T(E,rA,bA.value,G);if(Ta===null){rA===null&&(rA=yA);break}A&&rA&&Ta.alternate===null&&e(E,rA),U=u(Ta,U,pA),xA===null?iA=Ta:xA.sibling=Ta,xA=Ta,rA=yA}if(bA.done)return t(E,rA),EA&&Yt(E,pA),iA;if(rA===null){for(;!bA.done;pA++,bA=_.next())bA=N(E,bA.value,G),bA!==null&&(U=u(bA,U,pA),xA===null?iA=bA:xA.sibling=bA,xA=bA);return EA&&Yt(E,pA),iA}for(rA=o(rA);!bA.done;pA++,bA=_.next())bA=O(rA,E,pA,bA.value,G),bA!==null&&(A&&bA.alternate!==null&&rA.delete(bA.key===null?pA:bA.key),U=u(bA,U,pA),xA===null?iA=bA:xA.sibling=bA,xA=bA);return A&&rA.forEach(function(Jw){return e(E,Jw)}),EA&&Yt(E,pA),iA}function LA(E,U,_,G){if(typeof _=="object"&&_!==null&&_.type===y&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case S:A:{for(var iA=_.key;U!==null;){if(U.key===iA){if(iA=_.type,iA===y){if(U.tag===7){t(E,U.sibling),G=i(U,_.props.children),G.return=E,E=G;break A}}else if(U.elementType===iA||typeof iA=="object"&&iA!==null&&iA.$$typeof===Z&&ar(iA)===U.type){t(E,U.sibling),G=i(U,_.props),Mo(G,_),G.return=E,E=G;break A}t(E,U);break}else e(E,U);U=U.sibling}_.type===y?(G=Pa(_.props.children,E.mode,G,_.key),G.return=E,E=G):(G=al(_.type,_.key,_.props,null,E.mode,G),Mo(G,_),G.return=E,E=G)}return B(E);case F:A:{for(iA=_.key;U!==null;){if(U.key===iA)if(U.tag===4&&U.stateNode.containerInfo===_.containerInfo&&U.stateNode.implementation===_.implementation){t(E,U.sibling),G=i(U,_.children||[]),G.return=E,E=G;break A}else{t(E,U);break}else e(E,U);U=U.sibling}G=Ds(_,E.mode,G),G.return=E,E=G}return B(E);case Z:return _=ar(_),LA(E,U,_,G)}if(vA(_))return eA(E,U,_,G);if(BA(_)){if(iA=BA(_),typeof iA!="function")throw Error(n(150));return _=iA.call(_),sA(E,U,_,G)}if(typeof _.then=="function")return LA(E,U,ul(_),G);if(_.$$typeof===z)return LA(E,U,nl(E,_),G);cl(E,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,U!==null&&U.tag===6?(t(E,U.sibling),G=i(U,_),G.return=E,E=G):(t(E,U),G=Ts(_,E.mode,G),G.return=E,E=G),B(E)):t(E,U)}return function(E,U,_,G){try{Do=0;var iA=LA(E,U,_,G);return Kr=null,iA}catch(rA){if(rA===Lr||rA===il)throw rA;var xA=nt(29,rA,null,E.mode);return xA.lanes=G,xA.return=E,xA}finally{}}}var or=WB(!0),ZB=WB(!1),ha=!1;function Xs(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Js(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function ma(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function pa(A,e,t){var o=A.updateQueue;if(o===null)return null;if(o=o.shared,(HA&2)!==0){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,e=tl(A),IB(A,null,t),e}return el(A,o,e,t),tl(A)}function Oo(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var o=e.lanes;o&=A.pendingLanes,t|=o,e.lanes=t,Vf(A,t)}}function Ws(A,e){var t=A.updateQueue,o=A.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var B={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?i=u=B:u=u.next=B,t=t.next}while(t!==null);u===null?i=u=e:u=u.next=e}else i=u=e;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Zs=!1;function Lo(){if(Zs){var A=Or;if(A!==null)throw A}}function Ko(A,e,t,o){Zs=!1;var i=A.updateQueue;ha=!1;var u=i.firstBaseUpdate,B=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var C=m,H=C.next;C.next=null,B===null?u=H:B.next=H,B=C;var R=A.alternate;R!==null&&(R=R.updateQueue,m=R.lastBaseUpdate,m!==B&&(m===null?R.firstBaseUpdate=H:m.next=H,R.lastBaseUpdate=C))}if(u!==null){var N=i.baseState;B=0,R=H=C=null,m=u;do{var T=m.lane&-536870913,O=T!==m.lane;if(O?(UA&T)===T:(o&T)===T){T!==0&&T===Mr&&(Zs=!0),R!==null&&(R=R.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});A:{var eA=A,sA=m;T=e;var LA=t;switch(sA.tag){case 1:if(eA=sA.payload,typeof eA=="function"){N=eA.call(LA,N,T);break A}N=eA;break A;case 3:eA.flags=eA.flags&-65537|128;case 0:if(eA=sA.payload,T=typeof eA=="function"?eA.call(LA,N,T):eA,T==null)break A;N=v({},N,T);break A;case 2:ha=!0}}T=m.callback,T!==null&&(A.flags|=64,O&&(A.flags|=8192),O=i.callbacks,O===null?i.callbacks=[T]:O.push(T))}else O={lane:T,tag:m.tag,payload:m.payload,callback:m.callback,next:null},R===null?(H=R=O,C=N):R=R.next=O,B|=T;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;O=m,m=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);R===null&&(C=N),i.baseState=C,i.firstBaseUpdate=H,i.lastBaseUpdate=R,u===null&&(i.shared.lanes=0),Ua|=B,A.lanes=B,A.memoizedState=N}}function jB(A,e){if(typeof A!="function")throw Error(n(191,A));A.call(e)}function qB(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)jB(t[A],e)}var Rr=Q(null),fl=Q(0);function PB(A,e){A=ea,k(fl,A),k(Rr,e),ea=A|e.baseLanes}function js(){k(fl,ea),k(Rr,Rr.current)}function qs(){ea=fl.current,L(Rr),L(fl)}var lt=Q(null),wt=null;function va(A){var e=A.alternate;k(PA,PA.current&1),k(lt,A),wt===null&&(e===null||Rr.current!==null||e.memoizedState!==null)&&(wt=A)}function Ps(A){k(PA,PA.current),k(lt,A),wt===null&&(wt=A)}function $B(A){A.tag===22?(k(PA,PA.current),k(lt,A),wt===null&&(wt=A)):wa()}function wa(){k(PA,PA.current),k(lt,lt.current)}function it(A){L(lt),wt===A&&(wt=null),L(PA)}var PA=Q(0);function Bl(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||rc(t)||oc(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jt=0,mA=null,MA=null,oe=null,gl=!1,Vr=!1,nr=!1,dl=0,Ro=0,Gr=null,Lv=0;function JA(){throw Error(n(321))}function $s(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!ot(A[t],e[t]))return!1;return!0}function Au(A,e,t,o,i,u){return Jt=u,mA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,I.H=A===null||A.memoizedState===null?Og:du,nr=!1,u=t(o,i),nr=!1,Vr&&(u=eg(e,t,o,i)),Ag(A),u}function Ag(A){I.H=No;var e=MA!==null&&MA.next!==null;if(Jt=0,oe=MA=mA=null,gl=!1,Ro=0,Gr=null,e)throw Error(n(300));A===null||ne||(A=A.dependencies,A!==null&&ol(A)&&(ne=!0))}function eg(A,e,t,o){mA=A;var i=0;do{if(Vr&&(Gr=null),Ro=0,Vr=!1,25<=i)throw Error(n(301));if(i+=1,oe=MA=null,A.updateQueue!=null){var u=A.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}I.H=Lg,u=e(t,o)}while(Vr);return u}function Kv(){var A=I.H,e=A.useState()[0];return e=typeof e.then=="function"?Vo(e):e,A=A.useState()[0],(MA!==null?MA.memoizedState:null)!==A&&(mA.flags|=1024),e}function eu(){var A=dl!==0;return dl=0,A}function tu(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function au(A){if(gl){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}gl=!1}Jt=0,oe=MA=mA=null,Vr=!1,Ro=dl=0,Gr=null}function Ye(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?mA.memoizedState=oe=A:oe=oe.next=A,oe}function $A(){if(MA===null){var A=mA.alternate;A=A!==null?A.memoizedState:null}else A=MA.next;var e=oe===null?mA.memoizedState:oe.next;if(e!==null)oe=e,MA=A;else{if(A===null)throw mA.alternate===null?Error(n(467)):Error(n(310));MA=A,A={memoizedState:MA.memoizedState,baseState:MA.baseState,baseQueue:MA.baseQueue,queue:MA.queue,next:null},oe===null?mA.memoizedState=oe=A:oe=oe.next=A}return oe}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vo(A){var e=Ro;return Ro+=1,Gr===null&&(Gr=[]),A=kB(Gr,A,e),e=mA,(oe===null?e.memoizedState:oe.next)===null&&(e=e.alternate,I.H=e===null||e.memoizedState===null?Og:du),A}function ml(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return Vo(A);if(A.$$typeof===z)return be(A)}throw Error(n(438,String(A)))}function ru(A){var e=null,t=mA.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var o=mA.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=hl(),mA.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),o=0;o<A;o++)t[o]=aA;return e.index++,t}function Wt(A,e){return typeof e=="function"?e(A):e}function pl(A){var e=$A();return ou(e,MA,A)}function ou(A,e,t){var o=A.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var i=A.baseQueue,u=o.pending;if(u!==null){if(i!==null){var B=i.next;i.next=u.next,u.next=B}e.baseQueue=i=u,o.pending=null}if(u=A.baseState,i===null)A.memoizedState=u;else{e=i.next;var m=B=null,C=null,H=e,R=!1;do{var N=H.lane&-536870913;if(N!==H.lane?(UA&N)===N:(Jt&N)===N){var T=H.revertLane;if(T===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),N===Mr&&(R=!0);else if((Jt&T)===T){H=H.next,T===Mr&&(R=!0);continue}else N={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(m=C=N,B=u):C=C.next=N,mA.lanes|=T,Ua|=T;N=H.action,nr&&t(u,N),u=H.hasEagerState?H.eagerState:t(u,N)}else T={lane:N,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},C===null?(m=C=T,B=u):C=C.next=T,mA.lanes|=N,Ua|=N;H=H.next}while(H!==null&&H!==e);if(C===null?B=u:C.next=m,!ot(u,A.memoizedState)&&(ne=!0,R&&(t=Or,t!==null)))throw t;A.memoizedState=u,A.baseState=B,A.baseQueue=C,o.lastRenderedState=u}return i===null&&(o.lanes=0),[A.memoizedState,o.dispatch]}function nu(A){var e=$A(),t=e.queue;if(t===null)throw Error(n(311));t.lastRenderedReducer=A;var o=t.dispatch,i=t.pending,u=e.memoizedState;if(i!==null){t.pending=null;var B=i=i.next;do u=A(u,B.action),B=B.next;while(B!==i);ot(u,e.memoizedState)||(ne=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),t.lastRenderedState=u}return[u,o]}function tg(A,e,t){var o=mA,i=$A(),u=EA;if(u){if(t===void 0)throw Error(n(407));t=t()}else t=e();var B=!ot((MA||i).memoizedState,t);if(B&&(i.memoizedState=t,ne=!0),i=i.queue,su(og.bind(null,o,i,A),[A]),i.getSnapshot!==e||B||oe!==null&&oe.memoizedState.tag&1){if(o.flags|=2048,Nr(9,{destroy:void 0},rg.bind(null,o,i,t,e),null),RA===null)throw Error(n(349));u||(Jt&127)!==0||ag(o,e,t)}return t}function ag(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=mA.updateQueue,e===null?(e=hl(),mA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function rg(A,e,t,o){e.value=t,e.getSnapshot=o,ng(e)&&lg(A)}function og(A,e,t){return t(function(){ng(e)&&lg(A)})}function ng(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!ot(A,t)}catch{return!0}}function lg(A){var e=qa(A,2);e!==null&&$e(e,A,2)}function lu(A){var e=Ye();if(typeof A=="function"){var t=A;if(A=t(),nr){sa(!0);try{t()}finally{sa(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:A},e}function ig(A,e,t,o){return A.baseState=t,ou(A,MA,typeof o=="function"?o:Wt)}function Rv(A,e,t,o,i){if(Cl(A))throw Error(n(485));if(A=e.action,A!==null){var u={payload:i,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(B){u.listeners.push(B)}};I.T!==null?t(!0):u.isTransition=!1,o(u),t=e.pending,t===null?(u.next=e.pending=u,sg(e,u)):(u.next=t.next,e.pending=t.next=u)}}function sg(A,e){var t=e.action,o=e.payload,i=A.state;if(e.isTransition){var u=I.T,B={};I.T=B;try{var m=t(i,o),C=I.S;C!==null&&C(B,m),ug(A,e,m)}catch(H){iu(A,e,H)}finally{u!==null&&B.types!==null&&(u.types=B.types),I.T=u}}else try{u=t(i,o),ug(A,e,u)}catch(H){iu(A,e,H)}}function ug(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(o){cg(A,e,o)},function(o){return iu(A,e,o)}):cg(A,e,t)}function cg(A,e,t){e.status="fulfilled",e.value=t,fg(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,sg(A,t)))}function iu(A,e,t){var o=A.pending;if(A.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=t,fg(e),e=e.next;while(e!==o)}A.action=null}function fg(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Bg(A,e){return e}function gg(A,e){if(EA){var t=RA.formState;if(t!==null){A:{var o=mA;if(EA){if(GA){e:{for(var i=GA,u=vt;i.nodeType!==8;){if(!u){i=null;break e}if(i=Ct(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){GA=Ct(i.nextSibling),o=i.data==="F!";break A}}ga(o)}o=!1}o&&(e=t[0])}}return t=Ye(),t.memoizedState=t.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bg,lastRenderedState:e},t.queue=o,t=Tg.bind(null,mA,o),o.dispatch=t,o=lu(!1),u=gu.bind(null,mA,!1,o.queue),o=Ye(),i={state:e,dispatch:null,action:A,pending:null},o.queue=i,t=Rv.bind(null,mA,i,u,t),i.dispatch=t,o.memoizedState=A,[e,t,!1]}function dg(A){var e=$A();return hg(e,MA,A)}function hg(A,e,t){if(e=ou(A,e,Bg)[0],A=pl(Wt)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=Vo(e)}catch(B){throw B===Lr?il:B}else o=e;e=$A();var i=e.queue,u=i.dispatch;return t!==e.memoizedState&&(mA.flags|=2048,Nr(9,{destroy:void 0},Vv.bind(null,i,t),null)),[o,u,A]}function Vv(A,e){A.action=e}function mg(A){var e=$A(),t=MA;if(t!==null)return hg(e,t,A);$A(),e=e.memoizedState,t=$A();var o=t.queue.dispatch;return t.memoizedState=A,[e,o,!1]}function Nr(A,e,t,o){return A={tag:A,create:t,deps:o,inst:e,next:null},e=mA.updateQueue,e===null&&(e=hl(),mA.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(o=t.next,t.next=A,A.next=o,e.lastEffect=A),A}function pg(){return $A().memoizedState}function vl(A,e,t,o){var i=Ye();mA.flags|=A,i.memoizedState=Nr(1|e,{destroy:void 0},t,o===void 0?null:o)}function wl(A,e,t,o){var i=$A();o=o===void 0?null:o;var u=i.memoizedState.inst;MA!==null&&o!==null&&$s(o,MA.memoizedState.deps)?i.memoizedState=Nr(e,u,t,o):(mA.flags|=A,i.memoizedState=Nr(1|e,u,t,o))}function vg(A,e){vl(8390656,8,A,e)}function su(A,e){wl(2048,8,A,e)}function Gv(A){mA.flags|=4;var e=mA.updateQueue;if(e===null)e=hl(),mA.updateQueue=e,e.events=[A];else{var t=e.events;t===null?e.events=[A]:t.push(A)}}function wg(A){var e=$A().memoizedState;return Gv({ref:e,nextImpl:A}),function(){if((HA&2)!==0)throw Error(n(440));return e.impl.apply(void 0,arguments)}}function Cg(A,e){return wl(4,2,A,e)}function Qg(A,e){return wl(4,4,A,e)}function Ug(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function yg(A,e,t){t=t!=null?t.concat([A]):null,wl(4,4,Ug.bind(null,e,A),t)}function uu(){}function Fg(A,e){var t=$A();e=e===void 0?null:e;var o=t.memoizedState;return e!==null&&$s(e,o[1])?o[0]:(t.memoizedState=[A,e],A)}function Eg(A,e){var t=$A();e=e===void 0?null:e;var o=t.memoizedState;if(e!==null&&$s(e,o[1]))return o[0];if(o=A(),nr){sa(!0);try{A()}finally{sa(!1)}}return t.memoizedState=[o,e],o}function cu(A,e,t){return t===void 0||(Jt&1073741824)!==0&&(UA&261930)===0?A.memoizedState=e:(A.memoizedState=t,A=xd(),mA.lanes|=A,Ua|=A,t)}function xg(A,e,t,o){return ot(t,e)?t:Rr.current!==null?(A=cu(A,t,o),ot(A,e)||(ne=!0),A):(Jt&42)===0||(Jt&1073741824)!==0&&(UA&261930)===0?(ne=!0,A.memoizedState=t):(A=xd(),mA.lanes|=A,Ua|=A,e)}function bg(A,e,t,o,i){var u=X.p;X.p=u!==0&&8>u?u:8;var B=I.T,m={};I.T=m,gu(A,!1,e,t);try{var C=i(),H=I.S;if(H!==null&&H(m,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var R=Ov(C,o);Go(A,e,R,ct(A))}else Go(A,e,o,ct(A))}catch(N){Go(A,e,{then:function(){},status:"rejected",reason:N},ct())}finally{X.p=u,B!==null&&m.types!==null&&(B.types=m.types),I.T=B}}function Nv(){}function fu(A,e,t,o){if(A.tag!==5)throw Error(n(476));var i=_g(A).queue;bg(A,i,e,tA,t===null?Nv:function(){return Hg(A),t(o)})}function _g(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:tA,baseState:tA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:tA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Hg(A){var e=_g(A);e.next===null&&(e=A.alternate.memoizedState),Go(A,e.next.queue,{},ct())}function Bu(){return be(rn)}function Sg(){return $A().memoizedState}function Ig(){return $A().memoizedState}function zv(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=ct();A=ma(t);var o=pa(e,A,t);o!==null&&($e(o,e,t),Oo(o,e,t)),e={cache:Ns()},A.payload=e;return}e=e.return}}function Yv(A,e,t){var o=ct();t={lane:o,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Cl(A)?Dg(e,t):(t=Ss(A,e,t,o),t!==null&&($e(t,A,o),Mg(t,e,o)))}function Tg(A,e,t){var o=ct();Go(A,e,t,o)}function Go(A,e,t,o){var i={lane:o,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Cl(A))Dg(e,i);else{var u=A.alternate;if(A.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var B=e.lastRenderedState,m=u(B,t);if(i.hasEagerState=!0,i.eagerState=m,ot(m,B))return el(A,e,i,0),RA===null&&Al(),!1}catch{}finally{}if(t=Ss(A,e,i,o),t!==null)return $e(t,A,o),Mg(t,e,o),!0}return!1}function gu(A,e,t,o){if(o={lane:2,revertLane:Xu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Cl(A)){if(e)throw Error(n(479))}else e=Ss(A,t,o,2),e!==null&&$e(e,A,2)}function Cl(A){var e=A.alternate;return A===mA||e!==null&&e===mA}function Dg(A,e){Vr=gl=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function Mg(A,e,t){if((t&4194048)!==0){var o=e.lanes;o&=A.pendingLanes,t|=o,e.lanes=t,Vf(A,t)}}var No={readContext:be,use:ml,useCallback:JA,useContext:JA,useEffect:JA,useImperativeHandle:JA,useLayoutEffect:JA,useInsertionEffect:JA,useMemo:JA,useReducer:JA,useRef:JA,useState:JA,useDebugValue:JA,useDeferredValue:JA,useTransition:JA,useSyncExternalStore:JA,useId:JA,useHostTransitionStatus:JA,useFormState:JA,useActionState:JA,useOptimistic:JA,useMemoCache:JA,useCacheRefresh:JA};No.useEffectEvent=JA;var Og={readContext:be,use:ml,useCallback:function(A,e){return Ye().memoizedState=[A,e===void 0?null:e],A},useContext:be,useEffect:vg,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,vl(4194308,4,Ug.bind(null,e,A),t)},useLayoutEffect:function(A,e){return vl(4194308,4,A,e)},useInsertionEffect:function(A,e){vl(4,2,A,e)},useMemo:function(A,e){var t=Ye();e=e===void 0?null:e;var o=A();if(nr){sa(!0);try{A()}finally{sa(!1)}}return t.memoizedState=[o,e],o},useReducer:function(A,e,t){var o=Ye();if(t!==void 0){var i=t(e);if(nr){sa(!0);try{t(e)}finally{sa(!1)}}}else i=e;return o.memoizedState=o.baseState=i,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:i},o.queue=A,A=A.dispatch=Yv.bind(null,mA,A),[o.memoizedState,A]},useRef:function(A){var e=Ye();return A={current:A},e.memoizedState=A},useState:function(A){A=lu(A);var e=A.queue,t=Tg.bind(null,mA,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:uu,useDeferredValue:function(A,e){var t=Ye();return cu(t,A,e)},useTransition:function(){var A=lu(!1);return A=bg.bind(null,mA,A.queue,!0,!1),Ye().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var o=mA,i=Ye();if(EA){if(t===void 0)throw Error(n(407));t=t()}else{if(t=e(),RA===null)throw Error(n(349));(UA&127)!==0||ag(o,e,t)}i.memoizedState=t;var u={value:t,getSnapshot:e};return i.queue=u,vg(og.bind(null,o,u,A),[A]),o.flags|=2048,Nr(9,{destroy:void 0},rg.bind(null,o,u,t,e),null),t},useId:function(){var A=Ye(),e=RA.identifierPrefix;if(EA){var t=Dt,o=Tt;t=(o&~(1<<32-rt(o)-1)).toString(32)+t,e="_"+e+"R_"+t,t=dl++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=Lv++,e="_"+e+"r_"+t.toString(32)+"_";return A.memoizedState=e},useHostTransitionStatus:Bu,useFormState:gg,useActionState:gg,useOptimistic:function(A){var e=Ye();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=gu.bind(null,mA,!0,t),t.dispatch=e,[A,e]},useMemoCache:ru,useCacheRefresh:function(){return Ye().memoizedState=zv.bind(null,mA)},useEffectEvent:function(A){var e=Ye(),t={impl:A};return e.memoizedState=t,function(){if((HA&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}},du={readContext:be,use:ml,useCallback:Fg,useContext:be,useEffect:su,useImperativeHandle:yg,useInsertionEffect:Cg,useLayoutEffect:Qg,useMemo:Eg,useReducer:pl,useRef:pg,useState:function(){return pl(Wt)},useDebugValue:uu,useDeferredValue:function(A,e){var t=$A();return xg(t,MA.memoizedState,A,e)},useTransition:function(){var A=pl(Wt)[0],e=$A().memoizedState;return[typeof A=="boolean"?A:Vo(A),e]},useSyncExternalStore:tg,useId:Sg,useHostTransitionStatus:Bu,useFormState:dg,useActionState:dg,useOptimistic:function(A,e){var t=$A();return ig(t,MA,A,e)},useMemoCache:ru,useCacheRefresh:Ig};du.useEffectEvent=wg;var Lg={readContext:be,use:ml,useCallback:Fg,useContext:be,useEffect:su,useImperativeHandle:yg,useInsertionEffect:Cg,useLayoutEffect:Qg,useMemo:Eg,useReducer:nu,useRef:pg,useState:function(){return nu(Wt)},useDebugValue:uu,useDeferredValue:function(A,e){var t=$A();return MA===null?cu(t,A,e):xg(t,MA.memoizedState,A,e)},useTransition:function(){var A=nu(Wt)[0],e=$A().memoizedState;return[typeof A=="boolean"?A:Vo(A),e]},useSyncExternalStore:tg,useId:Sg,useHostTransitionStatus:Bu,useFormState:mg,useActionState:mg,useOptimistic:function(A,e){var t=$A();return MA!==null?ig(t,MA,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:ru,useCacheRefresh:Ig};Lg.useEffectEvent=wg;function hu(A,e,t,o){e=A.memoizedState,t=t(o,e),t=t==null?e:v({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var mu={enqueueSetState:function(A,e,t){A=A._reactInternals;var o=ct(),i=ma(o);i.payload=e,t!=null&&(i.callback=t),e=pa(A,i,o),e!==null&&($e(e,A,o),Oo(e,A,o))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var o=ct(),i=ma(o);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=pa(A,i,o),e!==null&&($e(e,A,o),Oo(e,A,o))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=ct(),o=ma(t);o.tag=2,e!=null&&(o.callback=e),e=pa(A,o,t),e!==null&&($e(e,A,t),Oo(e,A,t))}};function Kg(A,e,t,o,i,u,B){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(o,u,B):e.prototype&&e.prototype.isPureReactComponent?!bo(t,o)||!bo(i,u):!0}function Rg(A,e,t,o){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,o),e.state!==A&&mu.enqueueReplaceState(e,e.state,null)}function lr(A,e){var t=e;if("ref"in e){t={};for(var o in e)o!=="ref"&&(t[o]=e[o])}if(A=A.defaultProps){t===e&&(t=v({},t));for(var i in A)t[i]===void 0&&(t[i]=A[i])}return t}function Vg(A){$n(A)}function Gg(A){console.error(A)}function Ng(A){$n(A)}function Ql(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function zg(A,e,t){try{var o=A.onCaughtError;o(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function pu(A,e,t){return t=ma(t),t.tag=3,t.payload={element:null},t.callback=function(){Ql(A,e)},t}function Yg(A){return A=ma(A),A.tag=3,A}function kg(A,e,t,o){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var u=o.value;A.payload=function(){return i(u)},A.callback=function(){zg(e,t,o)}}var B=t.stateNode;B!==null&&typeof B.componentDidCatch=="function"&&(A.callback=function(){zg(e,t,o),typeof i!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var m=o.stack;this.componentDidCatch(o.value,{componentStack:m!==null?m:""})})}function kv(A,e,t,o,i){if(t.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=t.alternate,e!==null&&Dr(e,t,i,!0),t=lt.current,t!==null){switch(t.tag){case 31:case 13:return wt===null?Dl():t.alternate===null&&WA===0&&(WA=3),t.flags&=-257,t.flags|=65536,t.lanes=i,o===sl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([o]):e.add(o),zu(A,o,i)),!1;case 22:return t.flags|=65536,o===sl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([o]):t.add(o)),zu(A,o,i)),!1}throw Error(n(435,t.tag))}return zu(A,o,i),Dl(),!1}if(EA)return e=lt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,o!==Ls&&(A=Error(n(422),{cause:o}),So(ht(A,t)))):(o!==Ls&&(e=Error(n(423),{cause:o}),So(ht(e,t))),A=A.current.alternate,A.flags|=65536,i&=-i,A.lanes|=i,o=ht(o,t),i=pu(A.stateNode,o,i),Ws(A,i),WA!==4&&(WA=2)),!1;var u=Error(n(520),{cause:o});if(u=ht(u,t),jo===null?jo=[u]:jo.push(u),WA!==4&&(WA=2),e===null)return!0;o=ht(o,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=i&-i,t.lanes|=A,A=pu(t.stateNode,o,A),Ws(t,A),!1;case 1:if(e=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ya===null||!ya.has(u))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Yg(i),kg(i,A,t,o),Ws(t,i),!1}t=t.return}while(t!==null);return!1}var vu=Error(n(461)),ne=!1;function _e(A,e,t,o){e.child=A===null?ZB(e,null,t,o):or(e,A.child,t,o)}function Xg(A,e,t,o,i){t=t.render;var u=e.ref;if("ref"in o){var B={};for(var m in o)m!=="ref"&&(B[m]=o[m])}else B=o;return er(e),o=Au(A,e,t,B,u,i),m=eu(),A!==null&&!ne?(tu(A,e,i),Zt(A,e,i)):(EA&&m&&Ms(e),e.flags|=1,_e(A,e,o,i),e.child)}function Jg(A,e,t,o,i){if(A===null){var u=t.type;return typeof u=="function"&&!Is(u)&&u.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=u,Wg(A,e,u,o,i)):(A=al(t.type,null,o,e,e.mode,i),A.ref=e.ref,A.return=e,e.child=A)}if(u=A.child,!xu(A,i)){var B=u.memoizedProps;if(t=t.compare,t=t!==null?t:bo,t(B,o)&&A.ref===e.ref)return Zt(A,e,i)}return e.flags|=1,A=zt(u,o),A.ref=e.ref,A.return=e,e.child=A}function Wg(A,e,t,o,i){if(A!==null){var u=A.memoizedProps;if(bo(u,o)&&A.ref===e.ref)if(ne=!1,e.pendingProps=o=u,xu(A,i))(A.flags&131072)!==0&&(ne=!0);else return e.lanes=A.lanes,Zt(A,e,i)}return wu(A,e,t,o,i)}function Zg(A,e,t,o){var i=o.children,u=A!==null?A.memoizedState:null;if(A===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|t:t,A!==null){for(o=e.child=A.child,i=0;o!==null;)i=i|o.lanes|o.childLanes,o=o.sibling;o=i&~u}else o=0,e.child=null;return jg(A,e,u,t,o)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&ll(e,u!==null?u.cachePool:null),u!==null?PB(e,u):js(),$B(e);else return o=e.lanes=536870912,jg(A,e,u!==null?u.baseLanes|t:t,t,o)}else u!==null?(ll(e,u.cachePool),PB(e,u),wa(),e.memoizedState=null):(A!==null&&ll(e,null),js(),wa());return _e(A,e,i,t),e.child}function zo(A,e){return A!==null&&A.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function jg(A,e,t,o,i){var u=Ys();return u=u===null?null:{parent:re._currentValue,pool:u},e.memoizedState={baseLanes:t,cachePool:u},A!==null&&ll(e,null),js(),$B(e),A!==null&&Dr(A,e,o,!0),e.childLanes=i,null}function Ul(A,e){return e=Fl({mode:e.mode,children:e.children},A.mode),e.ref=A.ref,A.child=e,e.return=A,e}function qg(A,e,t){return or(e,A.child,null,t),A=Ul(e,e.pendingProps),A.flags|=2,it(e),e.memoizedState=null,A}function Xv(A,e,t){var o=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,A===null){if(EA){if(o.mode==="hidden")return A=Ul(e,o),e.lanes=536870912,zo(null,A);if(Ps(e),(A=GA)?(A=sh(A,vt),A=A!==null&&A.data==="&"?A:null,A!==null&&(e.memoizedState={dehydrated:A,treeContext:fa!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},t=DB(A),t.return=e,e.child=t,xe=e,GA=null)):A=null,A===null)throw ga(e);return e.lanes=536870912,null}return Ul(e,o)}var u=A.memoizedState;if(u!==null){var B=u.dehydrated;if(Ps(e),i)if(e.flags&256)e.flags&=-257,e=qg(A,e,t);else if(e.memoizedState!==null)e.child=A.child,e.flags|=128,e=null;else throw Error(n(558));else if(ne||Dr(A,e,t,!1),i=(t&A.childLanes)!==0,ne||i){if(o=RA,o!==null&&(B=Gf(o,t),B!==0&&B!==u.retryLane))throw u.retryLane=B,qa(A,B),$e(o,A,B),vu;Dl(),e=qg(A,e,t)}else A=u.treeContext,GA=Ct(B.nextSibling),xe=e,EA=!0,Ba=null,vt=!1,A!==null&&LB(e,A),e=Ul(e,o),e.flags|=4096;return e}return A=zt(A.child,{mode:o.mode,children:o.children}),A.ref=e.ref,e.child=A,A.return=e,A}function yl(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(n(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function wu(A,e,t,o,i){return er(e),t=Au(A,e,t,o,void 0,i),o=eu(),A!==null&&!ne?(tu(A,e,i),Zt(A,e,i)):(EA&&o&&Ms(e),e.flags|=1,_e(A,e,t,i),e.child)}function Pg(A,e,t,o,i,u){return er(e),e.updateQueue=null,t=eg(e,o,t,i),Ag(A),o=eu(),A!==null&&!ne?(tu(A,e,u),Zt(A,e,u)):(EA&&o&&Ms(e),e.flags|=1,_e(A,e,t,u),e.child)}function $g(A,e,t,o,i){if(er(e),e.stateNode===null){var u=Hr,B=t.contextType;typeof B=="object"&&B!==null&&(u=be(B)),u=new t(o,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=mu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=o,u.state=e.memoizedState,u.refs={},Xs(e),B=t.contextType,u.context=typeof B=="object"&&B!==null?be(B):Hr,u.state=e.memoizedState,B=t.getDerivedStateFromProps,typeof B=="function"&&(hu(e,t,B,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(B=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),B!==u.state&&mu.enqueueReplaceState(u,u.state,null),Ko(e,o,u,i),Lo(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(A===null){u=e.stateNode;var m=e.memoizedProps,C=lr(t,m);u.props=C;var H=u.context,R=t.contextType;B=Hr,typeof R=="object"&&R!==null&&(B=be(R));var N=t.getDerivedStateFromProps;R=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function",m=e.pendingProps!==m,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m||H!==B)&&Rg(e,u,o,B),ha=!1;var T=e.memoizedState;u.state=T,Ko(e,o,u,i),Lo(),H=e.memoizedState,m||T!==H||ha?(typeof N=="function"&&(hu(e,t,N,o),H=e.memoizedState),(C=ha||Kg(e,t,C,o,T,H,B))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=H),u.props=o,u.state=H,u.context=B,o=C):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{u=e.stateNode,Js(A,e),B=e.memoizedProps,R=lr(t,B),u.props=R,N=e.pendingProps,T=u.context,H=t.contextType,C=Hr,typeof H=="object"&&H!==null&&(C=be(H)),m=t.getDerivedStateFromProps,(H=typeof m=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(B!==N||T!==C)&&Rg(e,u,o,C),ha=!1,T=e.memoizedState,u.state=T,Ko(e,o,u,i),Lo();var O=e.memoizedState;B!==N||T!==O||ha||A!==null&&A.dependencies!==null&&ol(A.dependencies)?(typeof m=="function"&&(hu(e,t,m,o),O=e.memoizedState),(R=ha||Kg(e,t,R,o,T,O,C)||A!==null&&A.dependencies!==null&&ol(A.dependencies))?(H||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,O,C),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,O,C)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||B===A.memoizedProps&&T===A.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||B===A.memoizedProps&&T===A.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=O),u.props=o,u.state=O,u.context=C,o=R):(typeof u.componentDidUpdate!="function"||B===A.memoizedProps&&T===A.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||B===A.memoizedProps&&T===A.memoizedState||(e.flags|=1024),o=!1)}return u=o,yl(A,e),o=(e.flags&128)!==0,u||o?(u=e.stateNode,t=o&&typeof t.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,A!==null&&o?(e.child=or(e,A.child,null,i),e.child=or(e,null,t,i)):_e(A,e,t,i),e.memoizedState=u.state,A=e.child):A=Zt(A,e,i),A}function Ad(A,e,t,o){return $a(),e.flags|=256,_e(A,e,t,o),e.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(A){return{baseLanes:A,cachePool:zB()}}function Uu(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=ut),A}function ed(A,e,t){var o=e.pendingProps,i=!1,u=(e.flags&128)!==0,B;if((B=u)||(B=A!==null&&A.memoizedState===null?!1:(PA.current&2)!==0),B&&(i=!0,e.flags&=-129),B=(e.flags&32)!==0,e.flags&=-33,A===null){if(EA){if(i?va(e):wa(),(A=GA)?(A=sh(A,vt),A=A!==null&&A.data!=="&"?A:null,A!==null&&(e.memoizedState={dehydrated:A,treeContext:fa!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},t=DB(A),t.return=e,e.child=t,xe=e,GA=null)):A=null,A===null)throw ga(e);return oc(A)?e.lanes=32:e.lanes=536870912,null}var m=o.children;return o=o.fallback,i?(wa(),i=e.mode,m=Fl({mode:"hidden",children:m},i),o=Pa(o,i,t,null),m.return=e,o.return=e,m.sibling=o,e.child=m,o=e.child,o.memoizedState=Qu(t),o.childLanes=Uu(A,B,t),e.memoizedState=Cu,zo(null,o)):(va(e),yu(e,m))}var C=A.memoizedState;if(C!==null&&(m=C.dehydrated,m!==null)){if(u)e.flags&256?(va(e),e.flags&=-257,e=Fu(A,e,t)):e.memoizedState!==null?(wa(),e.child=A.child,e.flags|=128,e=null):(wa(),m=o.fallback,i=e.mode,o=Fl({mode:"visible",children:o.children},i),m=Pa(m,i,t,null),m.flags|=2,o.return=e,m.return=e,o.sibling=m,e.child=o,or(e,A.child,null,t),o=e.child,o.memoizedState=Qu(t),o.childLanes=Uu(A,B,t),e.memoizedState=Cu,e=zo(null,o));else if(va(e),oc(m)){if(B=m.nextSibling&&m.nextSibling.dataset,B)var H=B.dgst;B=H,o=Error(n(419)),o.stack="",o.digest=B,So({value:o,source:null,stack:null}),e=Fu(A,e,t)}else if(ne||Dr(A,e,t,!1),B=(t&A.childLanes)!==0,ne||B){if(B=RA,B!==null&&(o=Gf(B,t),o!==0&&o!==C.retryLane))throw C.retryLane=o,qa(A,o),$e(B,A,o),vu;rc(m)||Dl(),e=Fu(A,e,t)}else rc(m)?(e.flags|=192,e.child=A.child,e=null):(A=C.treeContext,GA=Ct(m.nextSibling),xe=e,EA=!0,Ba=null,vt=!1,A!==null&&LB(e,A),e=yu(e,o.children),e.flags|=4096);return e}return i?(wa(),m=o.fallback,i=e.mode,C=A.child,H=C.sibling,o=zt(C,{mode:"hidden",children:o.children}),o.subtreeFlags=C.subtreeFlags&65011712,H!==null?m=zt(H,m):(m=Pa(m,i,t,null),m.flags|=2),m.return=e,o.return=e,o.sibling=m,e.child=o,zo(null,o),o=e.child,m=A.child.memoizedState,m===null?m=Qu(t):(i=m.cachePool,i!==null?(C=re._currentValue,i=i.parent!==C?{parent:C,pool:C}:i):i=zB(),m={baseLanes:m.baseLanes|t,cachePool:i}),o.memoizedState=m,o.childLanes=Uu(A,B,t),e.memoizedState=Cu,zo(A.child,o)):(va(e),t=A.child,A=t.sibling,t=zt(t,{mode:"visible",children:o.children}),t.return=e,t.sibling=null,A!==null&&(B=e.deletions,B===null?(e.deletions=[A],e.flags|=16):B.push(A)),e.child=t,e.memoizedState=null,t)}function yu(A,e){return e=Fl({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function Fl(A,e){return A=nt(22,A,null,e),A.lanes=0,A}function Fu(A,e,t){return or(e,A.child,null,t),A=yu(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function td(A,e,t){A.lanes|=e;var o=A.alternate;o!==null&&(o.lanes|=e),Vs(A.return,e,t)}function Eu(A,e,t,o,i,u){var B=A.memoizedState;B===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i,treeForkCount:u}:(B.isBackwards=e,B.rendering=null,B.renderingStartTime=0,B.last=o,B.tail=t,B.tailMode=i,B.treeForkCount=u)}function ad(A,e,t){var o=e.pendingProps,i=o.revealOrder,u=o.tail;o=o.children;var B=PA.current,m=(B&2)!==0;if(m?(B=B&1|2,e.flags|=128):B&=1,k(PA,B),_e(A,e,o,t),o=EA?Ho:0,!m&&A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&td(A,t,e);else if(A.tag===19)td(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}switch(i){case"forwards":for(t=e.child,i=null;t!==null;)A=t.alternate,A!==null&&Bl(A)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Eu(e,!1,i,t,u,o);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(A=i.alternate,A!==null&&Bl(A)===null){e.child=i;break}A=i.sibling,i.sibling=t,t=i,i=A}Eu(e,!0,t,null,u,o);break;case"together":Eu(e,!1,null,null,void 0,o);break;default:e.memoizedState=null}return e.child}function Zt(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Ua|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Dr(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(n(153));if(e.child!==null){for(A=e.child,t=zt(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=zt(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function xu(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&ol(A)))}function Jv(A,e,t){switch(e.tag){case 3:ze(e,e.stateNode.containerInfo),da(e,re,A.memoizedState.cache),$a();break;case 27:case 5:go(e);break;case 4:ze(e,e.stateNode.containerInfo);break;case 10:da(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ps(e),null;break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(va(e),e.flags|=128,null):(t&e.child.childLanes)!==0?ed(A,e,t):(va(e),A=Zt(A,e,t),A!==null?A.sibling:null);va(e);break;case 19:var i=(A.flags&128)!==0;if(o=(t&e.childLanes)!==0,o||(Dr(A,e,t,!1),o=(t&e.childLanes)!==0),i){if(o)return ad(A,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(PA,PA.current),o)break;return null;case 22:return e.lanes=0,Zg(A,e,t,e.pendingProps);case 24:da(e,re,A.memoizedState.cache)}return Zt(A,e,t)}function rd(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)ne=!0;else{if(!xu(A,t)&&(e.flags&128)===0)return ne=!1,Jv(A,e,t);ne=(A.flags&131072)!==0}else ne=!1,EA&&(e.flags&1048576)!==0&&OB(e,Ho,e.index);switch(e.lanes=0,e.tag){case 16:A:{var o=e.pendingProps;if(A=ar(e.elementType),e.type=A,typeof A=="function")Is(A)?(o=lr(A,o),e.tag=1,e=$g(null,e,A,o,t)):(e.tag=0,e=wu(null,e,A,o,t));else{if(A!=null){var i=A.$$typeof;if(i===V){e.tag=11,e=Xg(null,e,A,o,t);break A}else if(i===Y){e.tag=14,e=Jg(null,e,A,o,t);break A}}throw e=cA(A)||A,Error(n(306,e,""))}}return e;case 0:return wu(A,e,e.type,e.pendingProps,t);case 1:return o=e.type,i=lr(o,e.pendingProps),$g(A,e,o,i,t);case 3:A:{if(ze(e,e.stateNode.containerInfo),A===null)throw Error(n(387));o=e.pendingProps;var u=e.memoizedState;i=u.element,Js(A,e),Ko(e,o,null,t);var B=e.memoizedState;if(o=B.cache,da(e,re,o),o!==u.cache&&Gs(e,[re],t,!0),Lo(),o=B.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:B.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ad(A,e,o,t);break A}else if(o!==i){i=ht(Error(n(424)),e),So(i),e=Ad(A,e,o,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(GA=Ct(A.firstChild),xe=e,EA=!0,Ba=null,vt=!0,t=ZB(e,null,o,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if($a(),o===i){e=Zt(A,e,t);break A}_e(A,e,o,t)}e=e.child}return e;case 26:return yl(A,e),A===null?(t=dh(e.type,null,e.pendingProps,null))?e.memoizedState=t:EA||(t=e.type,A=e.pendingProps,o=Gl(dA.current).createElement(t),o[Ee]=e,o[Je]=A,He(o,t,A),pe(o),e.stateNode=o):e.memoizedState=dh(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return go(e),A===null&&EA&&(o=e.stateNode=fh(e.type,e.pendingProps,dA.current),xe=e,vt=!0,i=GA,ba(e.type)?(nc=i,GA=Ct(o.firstChild)):GA=i),_e(A,e,e.pendingProps.children,t),yl(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&EA&&((i=o=GA)&&(o=Uw(o,e.type,e.pendingProps,vt),o!==null?(e.stateNode=o,xe=e,GA=Ct(o.firstChild),vt=!1,i=!0):i=!1),i||ga(e)),go(e),i=e.type,u=e.pendingProps,B=A!==null?A.memoizedProps:null,o=u.children,ec(i,u)?o=null:B!==null&&ec(i,B)&&(e.flags|=32),e.memoizedState!==null&&(i=Au(A,e,Kv,null,null,t),rn._currentValue=i),yl(A,e),_e(A,e,o,t),e.child;case 6:return A===null&&EA&&((A=t=GA)&&(t=yw(t,e.pendingProps,vt),t!==null?(e.stateNode=t,xe=e,GA=null,A=!0):A=!1),A||ga(e)),null;case 13:return ed(A,e,t);case 4:return ze(e,e.stateNode.containerInfo),o=e.pendingProps,A===null?e.child=or(e,null,o,t):_e(A,e,o,t),e.child;case 11:return Xg(A,e,e.type,e.pendingProps,t);case 7:return _e(A,e,e.pendingProps,t),e.child;case 8:return _e(A,e,e.pendingProps.children,t),e.child;case 12:return _e(A,e,e.pendingProps.children,t),e.child;case 10:return o=e.pendingProps,da(e,e.type,o.value),_e(A,e,o.children,t),e.child;case 9:return i=e.type._context,o=e.pendingProps.children,er(e),i=be(i),o=o(i),e.flags|=1,_e(A,e,o,t),e.child;case 14:return Jg(A,e,e.type,e.pendingProps,t);case 15:return Wg(A,e,e.type,e.pendingProps,t);case 19:return ad(A,e,t);case 31:return Xv(A,e,t);case 22:return Zg(A,e,t,e.pendingProps);case 24:return er(e),o=be(re),A===null?(i=Ys(),i===null&&(i=RA,u=Ns(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=t),i=u),e.memoizedState={parent:o,cache:i},Xs(e),da(e,re,i)):((A.lanes&t)!==0&&(Js(A,e),Ko(e,null,null,t),Lo()),i=A.memoizedState,u=e.memoizedState,i.parent!==o?(i={parent:o,cache:o},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),da(e,re,o)):(o=u.cache,da(e,re,o),o!==i.cache&&Gs(e,[re],t,!0))),_e(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(n(156,e.tag))}function jt(A){A.flags|=4}function bu(A,e,t,o,i){if((e=(A.mode&32)!==0)&&(e=!1),e){if(A.flags|=16777216,(i&335544128)===i)if(A.stateNode.complete)A.flags|=8192;else if(Sd())A.flags|=8192;else throw rr=sl,ks}else A.flags&=-16777217}function od(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!wh(e))if(Sd())A.flags|=8192;else throw rr=sl,ks}function El(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?Kf():536870912,A.lanes|=e,Xr|=e)}function Yo(A,e){if(!EA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:o.sibling=null}}function NA(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,o=0;if(e)for(var i=A.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&65011712,o|=i.flags&65011712,i.return=A,i=i.sibling;else for(i=A.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=A,i=i.sibling;return A.subtreeFlags|=o,A.childLanes=t,e}function Wv(A,e,t){var o=e.pendingProps;switch(Os(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return NA(e),null;case 1:return NA(e),null;case 3:return t=e.stateNode,o=null,A!==null&&(o=A.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),Xt(re),qA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Tr(e)?jt(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ks())),NA(e),null;case 26:var i=e.type,u=e.memoizedState;return A===null?(jt(e),u!==null?(NA(e),od(e,u)):(NA(e),bu(e,i,null,o,t))):u?u!==A.memoizedState?(jt(e),NA(e),od(e,u)):(NA(e),e.flags&=-16777217):(A=A.memoizedProps,A!==o&&jt(e),NA(e),bu(e,i,A,o,t)),null;case 27:if(Ln(e),t=dA.current,i=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==o&&jt(e);else{if(!o){if(e.stateNode===null)throw Error(n(166));return NA(e),null}A=$.current,Tr(e)?KB(e):(A=fh(i,o,t),e.stateNode=A,jt(e))}return NA(e),null;case 5:if(Ln(e),i=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==o&&jt(e);else{if(!o){if(e.stateNode===null)throw Error(n(166));return NA(e),null}if(u=$.current,Tr(e))KB(e);else{var B=Gl(dA.current);switch(u){case 1:u=B.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:u=B.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":u=B.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":u=B.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":u=B.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof o.is=="string"?B.createElement("select",{is:o.is}):B.createElement("select"),o.multiple?u.multiple=!0:o.size&&(u.size=o.size);break;default:u=typeof o.is=="string"?B.createElement(i,{is:o.is}):B.createElement(i)}}u[Ee]=e,u[Je]=o;A:for(B=e.child;B!==null;){if(B.tag===5||B.tag===6)u.appendChild(B.stateNode);else if(B.tag!==4&&B.tag!==27&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break A;for(;B.sibling===null;){if(B.return===null||B.return===e)break A;B=B.return}B.sibling.return=B.return,B=B.sibling}e.stateNode=u;A:switch(He(u,i,o),i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break A;case"img":o=!0;break A;default:o=!1}o&&jt(e)}}return NA(e),bu(e,e.type,A===null?null:A.memoizedProps,e.pendingProps,t),null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==o&&jt(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(n(166));if(A=dA.current,Tr(e)){if(A=e.stateNode,t=e.memoizedProps,o=null,i=xe,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}A[Ee]=e,A=!!(A.nodeValue===t||o!==null&&o.suppressHydrationWarning===!0||eh(A.nodeValue,t)),A||ga(e,!0)}else A=Gl(A).createTextNode(o),A[Ee]=e,e.stateNode=A}return NA(e),null;case 31:if(t=e.memoizedState,A===null||A.memoizedState!==null){if(o=Tr(e),t!==null){if(A===null){if(!o)throw Error(n(318));if(A=e.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(n(557));A[Ee]=e}else $a(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;NA(e),A=!1}else t=Ks(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=t),A=!0;if(!A)return e.flags&256?(it(e),e):(it(e),null);if((e.flags&128)!==0)throw Error(n(558))}return NA(e),null;case 13:if(o=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(i=Tr(e),o!==null&&o.dehydrated!==null){if(A===null){if(!i)throw Error(n(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));i[Ee]=e}else $a(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;NA(e),i=!1}else i=Ks(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(it(e),e):(it(e),null)}return it(e),(e.flags&128)!==0?(e.lanes=t,e):(t=o!==null,A=A!==null&&A.memoizedState!==null,t&&(o=e.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool),u=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==i&&(o.flags|=2048)),t!==A&&t&&(e.child.flags|=8192),El(e,e.updateQueue),NA(e),null);case 4:return qA(),A===null&&ju(e.stateNode.containerInfo),NA(e),null;case 10:return Xt(e.type),NA(e),null;case 19:if(L(PA),o=e.memoizedState,o===null)return NA(e),null;if(i=(e.flags&128)!==0,u=o.rendering,u===null)if(i)Yo(o,!1);else{if(WA!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(u=Bl(A),u!==null){for(e.flags|=128,Yo(o,!1),A=u.updateQueue,e.updateQueue=A,El(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)TB(t,A),t=t.sibling;return k(PA,PA.current&1|2),EA&&Yt(e,o.treeForkCount),e.child}A=A.sibling}o.tail!==null&&tt()>Sl&&(e.flags|=128,i=!0,Yo(o,!1),e.lanes=4194304)}else{if(!i)if(A=Bl(u),A!==null){if(e.flags|=128,i=!0,A=A.updateQueue,e.updateQueue=A,El(e,A),Yo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!u.alternate&&!EA)return NA(e),null}else 2*tt()-o.renderingStartTime>Sl&&t!==536870912&&(e.flags|=128,i=!0,Yo(o,!1),e.lanes=4194304);o.isBackwards?(u.sibling=e.child,e.child=u):(A=o.last,A!==null?A.sibling=u:e.child=u,o.last=u)}return o.tail!==null?(A=o.tail,o.rendering=A,o.tail=A.sibling,o.renderingStartTime=tt(),A.sibling=null,t=PA.current,k(PA,i?t&1|2:t&1),EA&&Yt(e,o.treeForkCount),A):(NA(e),null);case 22:case 23:return it(e),qs(),o=e.memoizedState!==null,A!==null?A.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(t&536870912)!==0&&(e.flags&128)===0&&(NA(e),e.subtreeFlags&6&&(e.flags|=8192)):NA(e),t=e.updateQueue,t!==null&&El(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==t&&(e.flags|=2048),A!==null&&L(tr),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Xt(re),NA(e),null;case 25:return null;case 30:return null}throw Error(n(156,e.tag))}function Zv(A,e){switch(Os(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return Xt(re),qA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return Ln(e),null;case 31:if(e.memoizedState!==null){if(it(e),e.alternate===null)throw Error(n(340));$a()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 13:if(it(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(n(340));$a()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return L(PA),null;case 4:return qA(),null;case 10:return Xt(e.type),null;case 22:case 23:return it(e),qs(),A!==null&&L(tr),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return Xt(re),null;case 25:return null;default:return null}}function nd(A,e){switch(Os(e),e.tag){case 3:Xt(re),qA();break;case 26:case 27:case 5:Ln(e);break;case 4:qA();break;case 31:e.memoizedState!==null&&it(e);break;case 13:it(e);break;case 19:L(PA);break;case 10:Xt(e.type);break;case 22:case 23:it(e),qs(),A!==null&&L(tr);break;case 24:Xt(re)}}function ko(A,e){try{var t=e.updateQueue,o=t!==null?t.lastEffect:null;if(o!==null){var i=o.next;t=i;do{if((t.tag&A)===A){o=void 0;var u=t.create,B=t.inst;o=u(),B.destroy=o}t=t.next}while(t!==i)}}catch(m){DA(e,e.return,m)}}function Ca(A,e,t){try{var o=e.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var u=i.next;o=u;do{if((o.tag&A)===A){var B=o.inst,m=B.destroy;if(m!==void 0){B.destroy=void 0,i=e;var C=t,H=m;try{H()}catch(R){DA(i,C,R)}}}o=o.next}while(o!==u)}}catch(R){DA(e,e.return,R)}}function ld(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{qB(e,t)}catch(o){DA(A,A.return,o)}}}function id(A,e,t){t.props=lr(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(o){DA(A,e,o)}}function Xo(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var o=A.stateNode;break;case 30:o=A.stateNode;break;default:o=A.stateNode}typeof t=="function"?A.refCleanup=t(o):t.current=o}}catch(i){DA(A,e,i)}}function Mt(A,e){var t=A.ref,o=A.refCleanup;if(t!==null)if(typeof o=="function")try{o()}catch(i){DA(A,e,i)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){DA(A,e,i)}else t.current=null}function sd(A){var e=A.type,t=A.memoizedProps,o=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&o.focus();break A;case"img":t.src?o.src=t.src:t.srcSet&&(o.srcset=t.srcSet)}}catch(i){DA(A,A.return,i)}}function _u(A,e,t){try{var o=A.stateNode;mw(o,A.type,t,e),o[Je]=e}catch(i){DA(A,A.return,i)}}function ud(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&ba(A.type)||A.tag===4}function Hu(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||ud(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&ba(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function Su(A,e,t){var o=A.tag;if(o===5||o===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Gt));else if(o!==4&&(o===27&&ba(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(Su(A,e,t),A=A.sibling;A!==null;)Su(A,e,t),A=A.sibling}function xl(A,e,t){var o=A.tag;if(o===5||o===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(o!==4&&(o===27&&ba(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(xl(A,e,t),A=A.sibling;A!==null;)xl(A,e,t),A=A.sibling}function cd(A){var e=A.stateNode,t=A.memoizedProps;try{for(var o=A.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);He(e,o,t),e[Ee]=A,e[Je]=t}catch(u){DA(A,A.return,u)}}var qt=!1,le=!1,Iu=!1,fd=typeof WeakSet=="function"?WeakSet:Set,ve=null;function jv(A,e){if(A=A.containerInfo,$u=Wl,A=yB(A),Fs(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break A}var B=0,m=-1,C=-1,H=0,R=0,N=A,T=null;e:for(;;){for(var O;N!==t||i!==0&&N.nodeType!==3||(m=B+i),N!==u||o!==0&&N.nodeType!==3||(C=B+o),N.nodeType===3&&(B+=N.nodeValue.length),(O=N.firstChild)!==null;)T=N,N=O;for(;;){if(N===A)break e;if(T===t&&++H===i&&(m=B),T===u&&++R===o&&(C=B),(O=N.nextSibling)!==null)break;N=T,T=N.parentNode}N=O}t=m===-1||C===-1?null:{start:m,end:C}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ac={focusedElem:A,selectionRange:t},Wl=!1,ve=e;ve!==null;)if(e=ve,A=e.child,(e.subtreeFlags&1028)!==0&&A!==null)A.return=e,ve=A;else for(;ve!==null;){switch(e=ve,u=e.alternate,A=e.flags,e.tag){case 0:if((A&4)!==0&&(A=e.updateQueue,A=A!==null?A.events:null,A!==null))for(t=0;t<A.length;t++)i=A[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((A&1024)!==0&&u!==null){A=void 0,t=e,i=u.memoizedProps,u=u.memoizedState,o=t.stateNode;try{var eA=lr(t.type,i);A=o.getSnapshotBeforeUpdate(eA,u),o.__reactInternalSnapshotBeforeUpdate=A}catch(sA){DA(t,t.return,sA)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)ac(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":ac(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(n(163))}if(A=e.sibling,A!==null){A.return=e.return,ve=A;break}ve=e.return}}function Bd(A,e,t){var o=t.flags;switch(t.tag){case 0:case 11:case 15:$t(A,t),o&4&&ko(5,t);break;case 1:if($t(A,t),o&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(B){DA(t,t.return,B)}else{var i=lr(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(i,e,A.__reactInternalSnapshotBeforeUpdate)}catch(B){DA(t,t.return,B)}}o&64&&ld(t),o&512&&Xo(t,t.return);break;case 3:if($t(A,t),o&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{qB(A,e)}catch(B){DA(t,t.return,B)}}break;case 27:e===null&&o&4&&cd(t);case 26:case 5:$t(A,t),e===null&&o&4&&sd(t),o&512&&Xo(t,t.return);break;case 12:$t(A,t);break;case 31:$t(A,t),o&4&&hd(A,t);break;case 13:$t(A,t),o&4&&md(A,t),o&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=ow.bind(null,t),Fw(A,t))));break;case 22:if(o=t.memoizedState!==null||qt,!o){e=e!==null&&e.memoizedState!==null||le,i=qt;var u=le;qt=o,(le=e)&&!u?Aa(A,t,(t.subtreeFlags&8772)!==0):$t(A,t),qt=i,le=u}break;case 30:break;default:$t(A,t)}}function gd(A){var e=A.alternate;e!==null&&(A.alternate=null,gd(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&is(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var zA=null,Ze=!1;function Pt(A,e,t){for(t=t.child;t!==null;)dd(A,e,t),t=t.sibling}function dd(A,e,t){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(ho,t)}catch{}switch(t.tag){case 26:le||Mt(t,e),Pt(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:le||Mt(t,e);var o=zA,i=Ze;ba(t.type)&&(zA=t.stateNode,Ze=!1),Pt(A,e,t),en(t.stateNode),zA=o,Ze=i;break;case 5:le||Mt(t,e);case 6:if(o=zA,i=Ze,zA=null,Pt(A,e,t),zA=o,Ze=i,zA!==null)if(Ze)try{(zA.nodeType===9?zA.body:zA.nodeName==="HTML"?zA.ownerDocument.body:zA).removeChild(t.stateNode)}catch(u){DA(t,e,u)}else try{zA.removeChild(t.stateNode)}catch(u){DA(t,e,u)}break;case 18:zA!==null&&(Ze?(A=zA,lh(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),Ao(A)):lh(zA,t.stateNode));break;case 4:o=zA,i=Ze,zA=t.stateNode.containerInfo,Ze=!0,Pt(A,e,t),zA=o,Ze=i;break;case 0:case 11:case 14:case 15:Ca(2,t,e),le||Ca(4,t,e),Pt(A,e,t);break;case 1:le||(Mt(t,e),o=t.stateNode,typeof o.componentWillUnmount=="function"&&id(t,e,o)),Pt(A,e,t);break;case 21:Pt(A,e,t);break;case 22:le=(o=le)||t.memoizedState!==null,Pt(A,e,t),le=o;break;default:Pt(A,e,t)}}function hd(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null))){A=A.dehydrated;try{Ao(A)}catch(t){DA(e,e.return,t)}}}function md(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{Ao(A)}catch(t){DA(e,e.return,t)}}function qv(A){switch(A.tag){case 31:case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new fd),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new fd),e;default:throw Error(n(435,A.tag))}}function bl(A,e){var t=qv(A);e.forEach(function(o){if(!t.has(o)){t.add(o);var i=nw.bind(null,A,o);o.then(i,i)}})}function je(A,e){var t=e.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o],u=A,B=e,m=B;A:for(;m!==null;){switch(m.tag){case 27:if(ba(m.type)){zA=m.stateNode,Ze=!1;break A}break;case 5:zA=m.stateNode,Ze=!1;break A;case 3:case 4:zA=m.stateNode.containerInfo,Ze=!0;break A}m=m.return}if(zA===null)throw Error(n(160));dd(u,B,i),zA=null,Ze=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)pd(e,A),e=e.sibling}var bt=null;function pd(A,e){var t=A.alternate,o=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:je(e,A),qe(A),o&4&&(Ca(3,A,A.return),ko(3,A),Ca(5,A,A.return));break;case 1:je(e,A),qe(A),o&512&&(le||t===null||Mt(t,t.return)),o&64&&qt&&(A=A.updateQueue,A!==null&&(o=A.callbacks,o!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?o:t.concat(o))));break;case 26:var i=bt;if(je(e,A),qe(A),o&512&&(le||t===null||Mt(t,t.return)),o&4){var u=t!==null?t.memoizedState:null;if(o=A.memoizedState,t===null)if(o===null)if(A.stateNode===null){A:{o=A.type,t=A.memoizedProps,i=i.ownerDocument||i;e:switch(o){case"title":u=i.getElementsByTagName("title")[0],(!u||u[vo]||u[Ee]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(o),i.head.insertBefore(u,i.querySelector("head > title"))),He(u,o,t),u[Ee]=A,pe(u),o=u;break A;case"link":var B=ph("link","href",i).get(o+(t.href||""));if(B){for(var m=0;m<B.length;m++)if(u=B[m],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){B.splice(m,1);break e}}u=i.createElement(o),He(u,o,t),i.head.appendChild(u);break;case"meta":if(B=ph("meta","content",i).get(o+(t.content||""))){for(m=0;m<B.length;m++)if(u=B[m],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){B.splice(m,1);break e}}u=i.createElement(o),He(u,o,t),i.head.appendChild(u);break;default:throw Error(n(468,o))}u[Ee]=A,pe(u),o=u}A.stateNode=o}else vh(i,A.type,A.stateNode);else A.stateNode=mh(i,o,A.memoizedProps);else u!==o?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,o===null?vh(i,A.type,A.stateNode):mh(i,o,A.memoizedProps)):o===null&&A.stateNode!==null&&_u(A,A.memoizedProps,t.memoizedProps)}break;case 27:je(e,A),qe(A),o&512&&(le||t===null||Mt(t,t.return)),t!==null&&o&4&&_u(A,A.memoizedProps,t.memoizedProps);break;case 5:if(je(e,A),qe(A),o&512&&(le||t===null||Mt(t,t.return)),A.flags&32){i=A.stateNode;try{Ur(i,"")}catch(eA){DA(A,A.return,eA)}}o&4&&A.stateNode!=null&&(i=A.memoizedProps,_u(A,i,t!==null?t.memoizedProps:i)),o&1024&&(Iu=!0);break;case 6:if(je(e,A),qe(A),o&4){if(A.stateNode===null)throw Error(n(162));o=A.memoizedProps,t=A.stateNode;try{t.nodeValue=o}catch(eA){DA(A,A.return,eA)}}break;case 3:if(Yl=null,i=bt,bt=Nl(e.containerInfo),je(e,A),bt=i,qe(A),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(eA){DA(A,A.return,eA)}Iu&&(Iu=!1,vd(A));break;case 4:o=bt,bt=Nl(A.stateNode.containerInfo),je(e,A),qe(A),bt=o;break;case 12:je(e,A),qe(A);break;case 31:je(e,A),qe(A),o&4&&(o=A.updateQueue,o!==null&&(A.updateQueue=null,bl(A,o)));break;case 13:je(e,A),qe(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Hl=tt()),o&4&&(o=A.updateQueue,o!==null&&(A.updateQueue=null,bl(A,o)));break;case 22:i=A.memoizedState!==null;var C=t!==null&&t.memoizedState!==null,H=qt,R=le;if(qt=H||i,le=R||C,je(e,A),le=R,qt=H,qe(A),o&8192)A:for(e=A.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(t===null||C||qt||le||ir(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){C=t=e;try{if(u=C.stateNode,i)B=u.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none";else{m=C.stateNode;var N=C.memoizedProps.style,T=N!=null&&N.hasOwnProperty("display")?N.display:null;m.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(eA){DA(C,C.return,eA)}}}else if(e.tag===6){if(t===null){C=e;try{C.stateNode.nodeValue=i?"":C.memoizedProps}catch(eA){DA(C,C.return,eA)}}}else if(e.tag===18){if(t===null){C=e;try{var O=C.stateNode;i?ih(O,!0):ih(C.stateNode,!1)}catch(eA){DA(C,C.return,eA)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=A.updateQueue,o!==null&&(t=o.retryQueue,t!==null&&(o.retryQueue=null,bl(A,t))));break;case 19:je(e,A),qe(A),o&4&&(o=A.updateQueue,o!==null&&(A.updateQueue=null,bl(A,o)));break;case 30:break;case 21:break;default:je(e,A),qe(A)}}function qe(A){var e=A.flags;if(e&2){try{for(var t,o=A.return;o!==null;){if(ud(o)){t=o;break}o=o.return}if(t==null)throw Error(n(160));switch(t.tag){case 27:var i=t.stateNode,u=Hu(A);xl(A,u,i);break;case 5:var B=t.stateNode;t.flags&32&&(Ur(B,""),t.flags&=-33);var m=Hu(A);xl(A,m,B);break;case 3:case 4:var C=t.stateNode.containerInfo,H=Hu(A);Su(A,H,C);break;default:throw Error(n(161))}}catch(R){DA(A,A.return,R)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function vd(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;vd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function $t(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bd(A,e.alternate,e),e=e.sibling}function ir(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Ca(4,e,e.return),ir(e);break;case 1:Mt(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&id(e,e.return,t),ir(e);break;case 27:en(e.stateNode);case 26:case 5:Mt(e,e.return),ir(e);break;case 22:e.memoizedState===null&&ir(e);break;case 30:ir(e);break;default:ir(e)}A=A.sibling}}function Aa(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,i=A,u=e,B=u.flags;switch(u.tag){case 0:case 11:case 15:Aa(i,u,t),ko(4,u);break;case 1:if(Aa(i,u,t),o=u,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(H){DA(o,o.return,H)}if(o=u,i=o.updateQueue,i!==null){var m=o.stateNode;try{var C=i.shared.hiddenCallbacks;if(C!==null)for(i.shared.hiddenCallbacks=null,i=0;i<C.length;i++)jB(C[i],m)}catch(H){DA(o,o.return,H)}}t&&B&64&&ld(u),Xo(u,u.return);break;case 27:cd(u);case 26:case 5:Aa(i,u,t),t&&o===null&&B&4&&sd(u),Xo(u,u.return);break;case 12:Aa(i,u,t);break;case 31:Aa(i,u,t),t&&B&4&&hd(i,u);break;case 13:Aa(i,u,t),t&&B&4&&md(i,u);break;case 22:u.memoizedState===null&&Aa(i,u,t),Xo(u,u.return);break;case 30:break;default:Aa(i,u,t)}e=e.sibling}}function Tu(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&Io(t))}function Du(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Io(A))}function _t(A,e,t,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wd(A,e,t,o),e=e.sibling}function wd(A,e,t,o){var i=e.flags;switch(e.tag){case 0:case 11:case 15:_t(A,e,t,o),i&2048&&ko(9,e);break;case 1:_t(A,e,t,o);break;case 3:_t(A,e,t,o),i&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&Io(A)));break;case 12:if(i&2048){_t(A,e,t,o),A=e.stateNode;try{var u=e.memoizedProps,B=u.id,m=u.onPostCommit;typeof m=="function"&&m(B,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(C){DA(e,e.return,C)}}else _t(A,e,t,o);break;case 31:_t(A,e,t,o);break;case 13:_t(A,e,t,o);break;case 23:break;case 22:u=e.stateNode,B=e.alternate,e.memoizedState!==null?u._visibility&2?_t(A,e,t,o):Jo(A,e):u._visibility&2?_t(A,e,t,o):(u._visibility|=2,zr(A,e,t,o,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Tu(B,e);break;case 24:_t(A,e,t,o),i&2048&&Du(e.alternate,e);break;default:_t(A,e,t,o)}}function zr(A,e,t,o,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=A,B=e,m=t,C=o,H=B.flags;switch(B.tag){case 0:case 11:case 15:zr(u,B,m,C,i),ko(8,B);break;case 23:break;case 22:var R=B.stateNode;B.memoizedState!==null?R._visibility&2?zr(u,B,m,C,i):Jo(u,B):(R._visibility|=2,zr(u,B,m,C,i)),i&&H&2048&&Tu(B.alternate,B);break;case 24:zr(u,B,m,C,i),i&&H&2048&&Du(B.alternate,B);break;default:zr(u,B,m,C,i)}e=e.sibling}}function Jo(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,o=e,i=o.flags;switch(o.tag){case 22:Jo(t,o),i&2048&&Tu(o.alternate,o);break;case 24:Jo(t,o),i&2048&&Du(o.alternate,o);break;default:Jo(t,o)}e=e.sibling}}var Wo=8192;function Yr(A,e,t){if(A.subtreeFlags&Wo)for(A=A.child;A!==null;)Cd(A,e,t),A=A.sibling}function Cd(A,e,t){switch(A.tag){case 26:Yr(A,e,t),A.flags&Wo&&A.memoizedState!==null&&Lw(t,bt,A.memoizedState,A.memoizedProps);break;case 5:Yr(A,e,t);break;case 3:case 4:var o=bt;bt=Nl(A.stateNode.containerInfo),Yr(A,e,t),bt=o;break;case 22:A.memoizedState===null&&(o=A.alternate,o!==null&&o.memoizedState!==null?(o=Wo,Wo=16777216,Yr(A,e,t),Wo=o):Yr(A,e,t));break;default:Yr(A,e,t)}}function Qd(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function Zo(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var o=e[t];ve=o,yd(o,A)}Qd(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Ud(A),A=A.sibling}function Ud(A){switch(A.tag){case 0:case 11:case 15:Zo(A),A.flags&2048&&Ca(9,A,A.return);break;case 3:Zo(A);break;case 12:Zo(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,_l(A)):Zo(A);break;default:Zo(A)}}function _l(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var o=e[t];ve=o,yd(o,A)}Qd(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Ca(8,e,e.return),_l(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,_l(e));break;default:_l(e)}A=A.sibling}}function yd(A,e){for(;ve!==null;){var t=ve;switch(t.tag){case 0:case 11:case 15:Ca(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var o=t.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(t.memoizedState.cache)}if(o=t.child,o!==null)o.return=t,ve=o;else A:for(t=A;ve!==null;){o=ve;var i=o.sibling,u=o.return;if(gd(o),o===t){ve=null;break A}if(i!==null){i.return=u,ve=i;break A}ve=u}}}var Pv={getCacheForType:function(A){var e=be(re),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t},cacheSignal:function(){return be(re).controller.signal}},$v=typeof WeakMap=="function"?WeakMap:Map,HA=0,RA=null,wA=null,UA=0,TA=0,st=null,Qa=!1,kr=!1,Mu=!1,ea=0,WA=0,Ua=0,sr=0,Ou=0,ut=0,Xr=0,jo=null,Pe=null,Lu=!1,Hl=0,Fd=0,Sl=1/0,Il=null,ya=null,fe=0,Fa=null,Jr=null,ta=0,Ku=0,Ru=null,Ed=null,qo=0,Vu=null;function ct(){return(HA&2)!==0&&UA!==0?UA&-UA:I.T!==null?Xu():Nf()}function xd(){if(ut===0)if((UA&536870912)===0||EA){var A=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),ut=A}else ut=536870912;return A=lt.current,A!==null&&(A.flags|=32),ut}function $e(A,e,t){(A===RA&&(TA===2||TA===9)||A.cancelPendingCommit!==null)&&(Wr(A,0),Ea(A,UA,ut,!1)),po(A,t),((HA&2)===0||A!==RA)&&(A===RA&&((HA&2)===0&&(sr|=t),WA===4&&Ea(A,UA,ut,!1)),Ot(A))}function bd(A,e,t){if((HA&6)!==0)throw Error(n(327));var o=!t&&(e&127)===0&&(e&A.expiredLanes)===0||mo(A,e),i=o?tw(A,e):Nu(A,e,!0),u=o;do{if(i===0){kr&&!o&&Ea(A,e,0,!1);break}else{if(t=A.current.alternate,u&&!Aw(t)){i=Nu(A,e,!1),u=!1;continue}if(i===2){if(u=e,A.errorRecoveryDisabledLanes&u)var B=0;else B=A.pendingLanes&-536870913,B=B!==0?B:B&536870912?536870912:0;if(B!==0){e=B;A:{var m=A;i=jo;var C=m.current.memoizedState.isDehydrated;if(C&&(Wr(m,B).flags|=256),B=Nu(m,B,!1),B!==2){if(Mu&&!C){m.errorRecoveryDisabledLanes|=u,sr|=u,i=4;break A}u=Pe,Pe=i,u!==null&&(Pe===null?Pe=u:Pe.push.apply(Pe,u))}i=B}if(u=!1,i!==2)continue}}if(i===1){Wr(A,0),Ea(A,e,0,!0);break}A:{switch(o=A,u=i,u){case 0:case 1:throw Error(n(345));case 4:if((e&4194048)!==e)break;case 6:Ea(o,e,ut,!Qa);break A;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(n(329))}if((e&62914560)===e&&(i=Hl+300-tt(),10<i)){if(Ea(o,e,ut,!Qa),Nn(o,0,!0)!==0)break A;ta=e,o.timeoutHandle=oh(_d.bind(null,o,t,Pe,Il,Lu,e,ut,sr,Xr,Qa,u,"Throttled",-0,0),i);break A}_d(o,t,Pe,Il,Lu,e,ut,sr,Xr,Qa,u,null,-0,0)}}break}while(!0);Ot(A)}function _d(A,e,t,o,i,u,B,m,C,H,R,N,T,O){if(A.timeoutHandle=-1,N=e.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Cd(e,u,N);var eA=(u&62914560)===u?Hl-tt():(u&4194048)===u?Fd-tt():0;if(eA=Kw(N,eA),eA!==null){ta=u,A.cancelPendingCommit=eA(Ld.bind(null,A,e,u,t,o,i,B,m,C,R,N,null,T,O)),Ea(A,u,B,!H);return}}Ld(A,e,u,t,o,i,B,m,C)}function Aw(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var o=0;o<t.length;o++){var i=t[o],u=i.getSnapshot;i=i.value;try{if(!ot(u(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ea(A,e,t,o){e&=~Ou,e&=~sr,A.suspendedLanes|=e,A.pingedLanes&=~e,o&&(A.warmLanes|=e),o=A.expirationTimes;for(var i=e;0<i;){var u=31-rt(i),B=1<<u;o[u]=-1,i&=~B}t!==0&&Rf(A,t,e)}function Tl(){return(HA&6)===0?(Po(0),!1):!0}function Gu(){if(wA!==null){if(TA===0)var A=wA.return;else A=wA,kt=Ar=null,au(A),Kr=null,Do=0,A=wA;for(;A!==null;)nd(A.alternate,A),A=A.return;wA=null}}function Wr(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,ww(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),ta=0,Gu(),RA=A,wA=t=zt(A.current,null),UA=e,TA=0,st=null,Qa=!1,kr=mo(A,e),Mu=!1,Xr=ut=Ou=sr=Ua=WA=0,Pe=jo=null,Lu=!1,(e&8)!==0&&(e|=e&32);var o=A.entangledLanes;if(o!==0)for(A=A.entanglements,o&=e;0<o;){var i=31-rt(o),u=1<<i;e|=A[i],o&=~u}return ea=e,Al(),t}function Hd(A,e){mA=null,I.H=No,e===Lr||e===il?(e=XB(),TA=3):e===ks?(e=XB(),TA=4):TA=e===vu?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,st=e,wA===null&&(WA=1,Ql(A,ht(e,A.current)))}function Sd(){var A=lt.current;return A===null?!0:(UA&4194048)===UA?wt===null:(UA&62914560)===UA||(UA&536870912)!==0?A===wt:!1}function Id(){var A=I.H;return I.H=No,A===null?No:A}function Td(){var A=I.A;return I.A=Pv,A}function Dl(){WA=4,Qa||(UA&4194048)!==UA&&lt.current!==null||(kr=!0),(Ua&134217727)===0&&(sr&134217727)===0||RA===null||Ea(RA,UA,ut,!1)}function Nu(A,e,t){var o=HA;HA|=2;var i=Id(),u=Td();(RA!==A||UA!==e)&&(Il=null,Wr(A,e)),e=!1;var B=WA;A:do try{if(TA!==0&&wA!==null){var m=wA,C=st;switch(TA){case 8:Gu(),B=6;break A;case 3:case 2:case 9:case 6:lt.current===null&&(e=!0);var H=TA;if(TA=0,st=null,Zr(A,m,C,H),t&&kr){B=0;break A}break;default:H=TA,TA=0,st=null,Zr(A,m,C,H)}}ew(),B=WA;break}catch(R){Hd(A,R)}while(!0);return e&&A.shellSuspendCounter++,kt=Ar=null,HA=o,I.H=i,I.A=u,wA===null&&(RA=null,UA=0,Al()),B}function ew(){for(;wA!==null;)Dd(wA)}function tw(A,e){var t=HA;HA|=2;var o=Id(),i=Td();RA!==A||UA!==e?(Il=null,Sl=tt()+500,Wr(A,e)):kr=mo(A,e);A:do try{if(TA!==0&&wA!==null){e=wA;var u=st;e:switch(TA){case 1:TA=0,st=null,Zr(A,e,u,1);break;case 2:case 9:if(YB(u)){TA=0,st=null,Md(e);break}e=function(){TA!==2&&TA!==9||RA!==A||(TA=7),Ot(A)},u.then(e,e);break A;case 3:TA=7;break A;case 4:TA=5;break A;case 7:YB(u)?(TA=0,st=null,Md(e)):(TA=0,st=null,Zr(A,e,u,7));break;case 5:var B=null;switch(wA.tag){case 26:B=wA.memoizedState;case 5:case 27:var m=wA;if(B?wh(B):m.stateNode.complete){TA=0,st=null;var C=m.sibling;if(C!==null)wA=C;else{var H=m.return;H!==null?(wA=H,Ml(H)):wA=null}break e}}TA=0,st=null,Zr(A,e,u,5);break;case 6:TA=0,st=null,Zr(A,e,u,6);break;case 8:Gu(),WA=6;break A;default:throw Error(n(462))}}aw();break}catch(R){Hd(A,R)}while(!0);return kt=Ar=null,I.H=o,I.A=i,HA=t,wA!==null?0:(RA=null,UA=0,Al(),WA)}function aw(){for(;wA!==null&&!Ep();)Dd(wA)}function Dd(A){var e=rd(A.alternate,A,ea);A.memoizedProps=A.pendingProps,e===null?Ml(A):wA=e}function Md(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=Pg(t,e,e.pendingProps,e.type,void 0,UA);break;case 11:e=Pg(t,e,e.pendingProps,e.type.render,e.ref,UA);break;case 5:au(e);default:nd(t,e),e=wA=TB(e,ea),e=rd(t,e,ea)}A.memoizedProps=A.pendingProps,e===null?Ml(A):wA=e}function Zr(A,e,t,o){kt=Ar=null,au(e),Kr=null,Do=0;var i=e.return;try{if(kv(A,i,e,t,UA)){WA=1,Ql(A,ht(t,A.current)),wA=null;return}}catch(u){if(i!==null)throw wA=i,u;WA=1,Ql(A,ht(t,A.current)),wA=null;return}e.flags&32768?(EA||o===1?A=!0:kr||(UA&536870912)!==0?A=!1:(Qa=A=!0,(o===2||o===9||o===3||o===6)&&(o=lt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Od(e,A)):Ml(e)}function Ml(A){var e=A;do{if((e.flags&32768)!==0){Od(e,Qa);return}A=e.return;var t=Wv(e.alternate,e,ea);if(t!==null){wA=t;return}if(e=e.sibling,e!==null){wA=e;return}wA=e=A}while(e!==null);WA===0&&(WA=5)}function Od(A,e){do{var t=Zv(A.alternate,A);if(t!==null){t.flags&=32767,wA=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){wA=A;return}wA=A=t}while(A!==null);WA=6,wA=null}function Ld(A,e,t,o,i,u,B,m,C){A.cancelPendingCommit=null;do Ol();while(fe!==0);if((HA&6)!==0)throw Error(n(327));if(e!==null){if(e===A.current)throw Error(n(177));if(u=e.lanes|e.childLanes,u|=Hs,Op(A,t,u,B,m,C),A===RA&&(wA=RA=null,UA=0),Jr=e,Fa=A,ta=t,Ku=u,Ru=i,Ed=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,lw(Kn,function(){return Nd(),null})):(A.callbackNode=null,A.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,i=X.p,X.p=2,B=HA,HA|=4;try{jv(A,e,t)}finally{HA=B,X.p=i,I.T=o}}fe=1,Kd(),Rd(),Vd()}}function Kd(){if(fe===1){fe=0;var A=Fa,e=Jr,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=I.T,I.T=null;var o=X.p;X.p=2;var i=HA;HA|=4;try{pd(e,A);var u=Ac,B=yB(A.containerInfo),m=u.focusedElem,C=u.selectionRange;if(B!==m&&m&&m.ownerDocument&&UB(m.ownerDocument.documentElement,m)){if(C!==null&&Fs(m)){var H=C.start,R=C.end;if(R===void 0&&(R=H),"selectionStart"in m)m.selectionStart=H,m.selectionEnd=Math.min(R,m.value.length);else{var N=m.ownerDocument||document,T=N&&N.defaultView||window;if(T.getSelection){var O=T.getSelection(),eA=m.textContent.length,sA=Math.min(C.start,eA),LA=C.end===void 0?sA:Math.min(C.end,eA);!O.extend&&sA>LA&&(B=LA,LA=sA,sA=B);var E=QB(m,sA),U=QB(m,LA);if(E&&U&&(O.rangeCount!==1||O.anchorNode!==E.node||O.anchorOffset!==E.offset||O.focusNode!==U.node||O.focusOffset!==U.offset)){var _=N.createRange();_.setStart(E.node,E.offset),O.removeAllRanges(),sA>LA?(O.addRange(_),O.extend(U.node,U.offset)):(_.setEnd(U.node,U.offset),O.addRange(_))}}}}for(N=[],O=m;O=O.parentNode;)O.nodeType===1&&N.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<N.length;m++){var G=N[m];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Wl=!!$u,Ac=$u=null}finally{HA=i,X.p=o,I.T=t}}A.current=e,fe=2}}function Rd(){if(fe===2){fe=0;var A=Fa,e=Jr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=I.T,I.T=null;var o=X.p;X.p=2;var i=HA;HA|=4;try{Bd(A,e.alternate,e)}finally{HA=i,X.p=o,I.T=t}}fe=3}}function Vd(){if(fe===4||fe===3){fe=0,xp();var A=Fa,e=Jr,t=ta,o=Ed;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fe=5:(fe=0,Jr=Fa=null,Gd(A,A.pendingLanes));var i=A.pendingLanes;if(i===0&&(ya=null),ns(t),e=e.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=I.T,i=X.p,X.p=2,I.T=null;try{for(var u=A.onRecoverableError,B=0;B<o.length;B++){var m=o[B];u(m.value,{componentStack:m.stack})}}finally{I.T=e,X.p=i}}(ta&3)!==0&&Ol(),Ot(A),i=A.pendingLanes,(t&261930)!==0&&(i&42)!==0?A===Vu?qo++:(qo=0,Vu=A):qo=0,Po(0)}}function Gd(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,Io(e)))}function Ol(){return Kd(),Rd(),Vd(),Nd()}function Nd(){if(fe!==5)return!1;var A=Fa,e=Ku;Ku=0;var t=ns(ta),o=I.T,i=X.p;try{X.p=32>t?32:t,I.T=null,t=Ru,Ru=null;var u=Fa,B=ta;if(fe=0,Jr=Fa=null,ta=0,(HA&6)!==0)throw Error(n(331));var m=HA;if(HA|=4,Ud(u.current),wd(u,u.current,B,t),HA=m,Po(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(ho,u)}catch{}return!0}finally{X.p=i,I.T=o,Gd(A,e)}}function zd(A,e,t){e=ht(t,e),e=pu(A.stateNode,e,2),A=pa(A,e,2),A!==null&&(po(A,2),Ot(A))}function DA(A,e,t){if(A.tag===3)zd(A,A,t);else for(;e!==null;){if(e.tag===3){zd(e,A,t);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ya===null||!ya.has(o))){A=ht(t,A),t=Yg(2),o=pa(e,t,2),o!==null&&(kg(t,o,e,A),po(o,2),Ot(o));break}}e=e.return}}function zu(A,e,t){var o=A.pingCache;if(o===null){o=A.pingCache=new $v;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(t)||(Mu=!0,i.add(t),A=rw.bind(null,A,e,t),e.then(A,A))}function rw(A,e,t){var o=A.pingCache;o!==null&&o.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,RA===A&&(UA&t)===t&&(WA===4||WA===3&&(UA&62914560)===UA&&300>tt()-Hl?(HA&2)===0&&Wr(A,0):Ou|=t,Xr===UA&&(Xr=0)),Ot(A)}function Yd(A,e){e===0&&(e=Kf()),A=qa(A,e),A!==null&&(po(A,e),Ot(A))}function ow(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),Yd(A,t)}function nw(A,e){var t=0;switch(A.tag){case 31:case 13:var o=A.stateNode,i=A.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=A.stateNode;break;case 22:o=A.stateNode._retryCache;break;default:throw Error(n(314))}o!==null&&o.delete(e),Yd(A,t)}function lw(A,e){return ts(A,e)}var Ll=null,jr=null,Yu=!1,Kl=!1,ku=!1,xa=0;function Ot(A){A!==jr&&A.next===null&&(jr===null?Ll=jr=A:jr=jr.next=A),Kl=!0,Yu||(Yu=!0,sw())}function Po(A,e){if(!ku&&Kl){ku=!0;do for(var t=!1,o=Ll;o!==null;){if(A!==0){var i=o.pendingLanes;if(i===0)var u=0;else{var B=o.suspendedLanes,m=o.pingedLanes;u=(1<<31-rt(42|A)+1)-1,u&=i&~(B&~m),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,Wd(o,u))}else u=UA,u=Nn(o,o===RA?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||mo(o,u)||(t=!0,Wd(o,u));o=o.next}while(t);ku=!1}}function iw(){kd()}function kd(){Kl=Yu=!1;var A=0;xa!==0&&vw()&&(A=xa);for(var e=tt(),t=null,o=Ll;o!==null;){var i=o.next,u=Xd(o,e);u===0?(o.next=null,t===null?Ll=i:t.next=i,i===null&&(jr=t)):(t=o,(A!==0||(u&3)!==0)&&(Kl=!0)),o=i}fe!==0&&fe!==5||Po(A),xa!==0&&(xa=0)}function Xd(A,e){for(var t=A.suspendedLanes,o=A.pingedLanes,i=A.expirationTimes,u=A.pendingLanes&-62914561;0<u;){var B=31-rt(u),m=1<<B,C=i[B];C===-1?((m&t)===0||(m&o)!==0)&&(i[B]=Mp(m,e)):C<=e&&(A.expiredLanes|=m),u&=~m}if(e=RA,t=UA,t=Nn(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),o=A.callbackNode,t===0||A===e&&(TA===2||TA===9)||A.cancelPendingCommit!==null)return o!==null&&o!==null&&as(o),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||mo(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(o!==null&&as(o),ns(t)){case 2:case 8:t=Of;break;case 32:t=Kn;break;case 268435456:t=Lf;break;default:t=Kn}return o=Jd.bind(null,A),t=ts(t,o),A.callbackPriority=e,A.callbackNode=t,e}return o!==null&&o!==null&&as(o),A.callbackPriority=2,A.callbackNode=null,2}function Jd(A,e){if(fe!==0&&fe!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Ol()&&A.callbackNode!==t)return null;var o=UA;return o=Nn(A,A===RA?o:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),o===0?null:(bd(A,o,e),Xd(A,tt()),A.callbackNode!=null&&A.callbackNode===t?Jd.bind(null,A):null)}function Wd(A,e){if(Ol())return null;bd(A,e,!0)}function sw(){Cw(function(){(HA&6)!==0?ts(Mf,iw):kd()})}function Xu(){if(xa===0){var A=Mr;A===0&&(A=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),xa=A}return xa}function Zd(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:Xn(""+A)}function jd(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function uw(A,e,t,o,i){if(e==="submit"&&t&&t.stateNode===i){var u=Zd((i[Je]||null).action),B=o.submitter;B&&(e=(e=B[Je]||null)?Zd(e.formAction):B.getAttribute("formAction"),e!==null&&(u=e,B=null));var m=new jn("action","action",null,o,i);A.push({event:m,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xa!==0){var C=B?jd(i,B):new FormData(i);fu(t,{pending:!0,data:C,method:i.method,action:u},null,C)}}else typeof u=="function"&&(m.preventDefault(),C=B?jd(i,B):new FormData(i),fu(t,{pending:!0,data:C,method:i.method,action:u},u,C))},currentTarget:i}]})}}for(var Ju=0;Ju<_s.length;Ju++){var Wu=_s[Ju],cw=Wu.toLowerCase(),fw=Wu[0].toUpperCase()+Wu.slice(1);xt(cw,"on"+fw)}xt(xB,"onAnimationEnd"),xt(bB,"onAnimationIteration"),xt(_B,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(bv,"onTransitionRun"),xt(_v,"onTransitionStart"),xt(Hv,"onTransitionCancel"),xt(HB,"onTransitionEnd"),Cr("onMouseEnter",["mouseout","mouseover"]),Cr("onMouseLeave",["mouseout","mouseover"]),Cr("onPointerEnter",["pointerout","pointerover"]),Cr("onPointerLeave",["pointerout","pointerover"]),Ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function qd(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var o=A[t],i=o.event;o=o.listeners;A:{var u=void 0;if(e)for(var B=o.length-1;0<=B;B--){var m=o[B],C=m.instance,H=m.currentTarget;if(m=m.listener,C!==u&&i.isPropagationStopped())break A;u=m,i.currentTarget=H;try{u(i)}catch(R){$n(R)}i.currentTarget=null,u=C}else for(B=0;B<o.length;B++){if(m=o[B],C=m.instance,H=m.currentTarget,m=m.listener,C!==u&&i.isPropagationStopped())break A;u=m,i.currentTarget=H;try{u(i)}catch(R){$n(R)}i.currentTarget=null,u=C}}}}function CA(A,e){var t=e[ls];t===void 0&&(t=e[ls]=new Set);var o=A+"__bubble";t.has(o)||(Pd(e,A,2,!1),t.add(o))}function Zu(A,e,t){var o=0;e&&(o|=4),Pd(t,A,o,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ju(A){if(!A[Rl]){A[Rl]=!0,kf.forEach(function(t){t!=="selectionchange"&&(Bw.has(t)||Zu(t,!1,A),Zu(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Zu("selectionchange",!1,e))}}function Pd(A,e,t,o){switch(xh(e)){case 2:var i=Gw;break;case 8:i=Nw;break;default:i=cc}t=i.bind(null,e,t,A),i=void 0,!hs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?A.addEventListener(e,t,{capture:!0,passive:i}):A.addEventListener(e,t,!0):i!==void 0?A.addEventListener(e,t,{passive:i}):A.addEventListener(e,t,!1)}function qu(A,e,t,o,i){var u=o;if((e&1)===0&&(e&2)===0&&o!==null)A:for(;;){if(o===null)return;var B=o.tag;if(B===3||B===4){var m=o.stateNode.containerInfo;if(m===i)break;if(B===4)for(B=o.return;B!==null;){var C=B.tag;if((C===3||C===4)&&B.stateNode.containerInfo===i)return;B=B.return}for(;m!==null;){if(B=pr(m),B===null)return;if(C=B.tag,C===5||C===6||C===26||C===27){o=u=B;continue A}m=m.parentNode}}o=o.return}aB(function(){var H=u,R=gs(t),N=[];A:{var T=SB.get(A);if(T!==void 0){var O=jn,eA=A;switch(A){case"keypress":if(Wn(t)===0)break A;case"keydown":case"keyup":O=nv;break;case"focusin":eA="focus",O=ws;break;case"focusout":eA="blur",O=ws;break;case"beforeblur":case"afterblur":O=ws;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=nB;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=sv;break;case xB:case bB:case _B:O=qp;break;case HB:O=cv;break;case"scroll":case"scrollend":O=Xp;break;case"wheel":O=Bv;break;case"copy":case"cut":case"paste":O=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=iB;break;case"toggle":case"beforetoggle":O=dv}var sA=(e&4)!==0,LA=!sA&&(A==="scroll"||A==="scrollend"),E=sA?T!==null?T+"Capture":null:T;sA=[];for(var U=H,_;U!==null;){var G=U;if(_=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||_===null||E===null||(G=Co(U,E),G!=null&&sA.push(An(U,G,_))),LA)break;U=U.return}0<sA.length&&(T=new O(T,eA,null,t,R),N.push({event:T,listeners:sA}))}}if((e&7)===0){A:{if(T=A==="mouseover"||A==="pointerover",O=A==="mouseout"||A==="pointerout",T&&t!==Bs&&(eA=t.relatedTarget||t.fromElement)&&(pr(eA)||eA[mr]))break A;if((O||T)&&(T=R.window===R?R:(T=R.ownerDocument)?T.defaultView||T.parentWindow:window,O?(eA=t.relatedTarget||t.toElement,O=H,eA=eA?pr(eA):null,eA!==null&&(LA=c(eA),sA=eA.tag,eA!==LA||sA!==5&&sA!==27&&sA!==6)&&(eA=null)):(O=null,eA=H),O!==eA)){if(sA=nB,G="onMouseLeave",E="onMouseEnter",U="mouse",(A==="pointerout"||A==="pointerover")&&(sA=iB,G="onPointerLeave",E="onPointerEnter",U="pointer"),LA=O==null?T:wo(O),_=eA==null?T:wo(eA),T=new sA(G,U+"leave",O,t,R),T.target=LA,T.relatedTarget=_,G=null,pr(R)===H&&(sA=new sA(E,U+"enter",eA,t,R),sA.target=_,sA.relatedTarget=LA,G=sA),LA=G,O&&eA)e:{for(sA=gw,E=O,U=eA,_=0,G=E;G;G=sA(G))_++;G=0;for(var iA=U;iA;iA=sA(iA))G++;for(;0<_-G;)E=sA(E),_--;for(;0<G-_;)U=sA(U),G--;for(;_--;){if(E===U||U!==null&&E===U.alternate){sA=E;break e}E=sA(E),U=sA(U)}sA=null}else sA=null;O!==null&&$d(N,T,O,sA,!1),eA!==null&&LA!==null&&$d(N,LA,eA,sA,!0)}}A:{if(T=H?wo(H):window,O=T.nodeName&&T.nodeName.toLowerCase(),O==="select"||O==="input"&&T.type==="file")var xA=hB;else if(gB(T))if(mB)xA=Fv;else{xA=Uv;var rA=Qv}else O=T.nodeName,!O||O.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?H&&fs(H.elementType)&&(xA=hB):xA=yv;if(xA&&(xA=xA(A,H))){dB(N,xA,t,R);break A}rA&&rA(A,T,H),A==="focusout"&&H&&T.type==="number"&&H.memoizedProps.value!=null&&cs(T,"number",T.value)}switch(rA=H?wo(H):window,A){case"focusin":(gB(rA)||rA.contentEditable==="true")&&(xr=rA,Es=H,_o=null);break;case"focusout":_o=Es=xr=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,FB(N,t,R);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":FB(N,t,R)}var pA;if(Qs)A:{switch(A){case"compositionstart":var yA="onCompositionStart";break A;case"compositionend":yA="onCompositionEnd";break A;case"compositionupdate":yA="onCompositionUpdate";break A}yA=void 0}else Er?fB(A,t)&&(yA="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(yA="onCompositionStart");yA&&(sB&&t.locale!=="ko"&&(Er||yA!=="onCompositionStart"?yA==="onCompositionEnd"&&Er&&(pA=rB()):(ca=R,ms="value"in ca?ca.value:ca.textContent,Er=!0)),rA=Vl(H,yA),0<rA.length&&(yA=new lB(yA,A,null,t,R),N.push({event:yA,listeners:rA}),pA?yA.data=pA:(pA=BB(t),pA!==null&&(yA.data=pA)))),(pA=mv?pv(A,t):vv(A,t))&&(yA=Vl(H,"onBeforeInput"),0<yA.length&&(rA=new lB("onBeforeInput","beforeinput",null,t,R),N.push({event:rA,listeners:yA}),rA.data=pA)),uw(N,A,H,t,R)}qd(N,e)})}function An(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Vl(A,e){for(var t=e+"Capture",o=[];A!==null;){var i=A,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=Co(A,t),i!=null&&o.unshift(An(A,i,u)),i=Co(A,e),i!=null&&o.push(An(A,i,u))),A.tag===3)return o;A=A.return}return[]}function gw(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function $d(A,e,t,o,i){for(var u=e._reactName,B=[];t!==null&&t!==o;){var m=t,C=m.alternate,H=m.stateNode;if(m=m.tag,C!==null&&C===o)break;m!==5&&m!==26&&m!==27||H===null||(C=H,i?(H=Co(t,u),H!=null&&B.unshift(An(t,H,C))):i||(H=Co(t,u),H!=null&&B.push(An(t,H,C)))),t=t.return}B.length!==0&&A.push({event:e,listeners:B})}var dw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function Ah(A){return(typeof A=="string"?A:""+A).replace(dw,`
`).replace(hw,"")}function eh(A,e){return e=Ah(e),Ah(A)===e}function OA(A,e,t,o,i,u){switch(t){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||Ur(A,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&Ur(A,""+o);break;case"className":Yn(A,"class",o);break;case"tabIndex":Yn(A,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(A,t,o);break;case"style":eB(A,o,u);break;case"data":if(e!=="object"){Yn(A,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){A.removeAttribute(t);break}o=Xn(""+o),A.setAttribute(t,o);break;case"action":case"formAction":if(typeof o=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(e!=="input"&&OA(A,e,"name",i.name,i,null),OA(A,e,"formEncType",i.formEncType,i,null),OA(A,e,"formMethod",i.formMethod,i,null),OA(A,e,"formTarget",i.formTarget,i,null)):(OA(A,e,"encType",i.encType,i,null),OA(A,e,"method",i.method,i,null),OA(A,e,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){A.removeAttribute(t);break}o=Xn(""+o),A.setAttribute(t,o);break;case"onClick":o!=null&&(A.onclick=Gt);break;case"onScroll":o!=null&&CA("scroll",A);break;case"onScrollEnd":o!=null&&CA("scrollend",A);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(n(61));if(t=o.__html,t!=null){if(i.children!=null)throw Error(n(60));A.innerHTML=t}}break;case"multiple":A.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":A.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){A.removeAttribute("xlink:href");break}t=Xn(""+o),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?A.setAttribute(t,""+o):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":o===!0?A.setAttribute(t,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?A.setAttribute(t,o):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?A.setAttribute(t,o):A.removeAttribute(t);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?A.removeAttribute(t):A.setAttribute(t,o);break;case"popover":CA("beforetoggle",A),CA("toggle",A),zn(A,"popover",o);break;case"xlinkActuate":Vt(A,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Vt(A,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Vt(A,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Vt(A,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Vt(A,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Vt(A,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Vt(A,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Vt(A,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Vt(A,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zn(A,"is",o);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Yp.get(t)||t,zn(A,t,o))}}function Pu(A,e,t,o,i,u){switch(t){case"style":eB(A,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(n(61));if(t=o.__html,t!=null){if(i.children!=null)throw Error(n(60));A.innerHTML=t}}break;case"children":typeof o=="string"?Ur(A,o):(typeof o=="number"||typeof o=="bigint")&&Ur(A,""+o);break;case"onScroll":o!=null&&CA("scroll",A);break;case"onScrollEnd":o!=null&&CA("scrollend",A);break;case"onClick":o!=null&&(A.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xf.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),e=t.slice(2,i?t.length-7:void 0),u=A[Je]||null,u=u!=null?u[t]:null,typeof u=="function"&&A.removeEventListener(e,u,i),typeof o=="function")){typeof u!="function"&&u!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,o,i);break A}t in A?A[t]=o:o===!0?A.setAttribute(t,""):zn(A,t,o)}}}function He(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":CA("error",A),CA("load",A);var o=!1,i=!1,u;for(u in t)if(t.hasOwnProperty(u)){var B=t[u];if(B!=null)switch(u){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,e));default:OA(A,e,u,B,t,null)}}i&&OA(A,e,"srcSet",t.srcSet,t,null),o&&OA(A,e,"src",t.src,t,null);return;case"input":CA("invalid",A);var m=u=B=i=null,C=null,H=null;for(o in t)if(t.hasOwnProperty(o)){var R=t[o];if(R!=null)switch(o){case"name":i=R;break;case"type":B=R;break;case"checked":C=R;break;case"defaultChecked":H=R;break;case"value":u=R;break;case"defaultValue":m=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(n(137,e));break;default:OA(A,e,o,R,t,null)}}qf(A,u,m,C,H,B,i,!1);return;case"select":CA("invalid",A),o=B=u=null;for(i in t)if(t.hasOwnProperty(i)&&(m=t[i],m!=null))switch(i){case"value":u=m;break;case"defaultValue":B=m;break;case"multiple":o=m;default:OA(A,e,i,m,t,null)}e=u,t=B,A.multiple=!!o,e!=null?Qr(A,!!o,e,!1):t!=null&&Qr(A,!!o,t,!0);return;case"textarea":CA("invalid",A),u=i=o=null;for(B in t)if(t.hasOwnProperty(B)&&(m=t[B],m!=null))switch(B){case"value":o=m;break;case"defaultValue":i=m;break;case"children":u=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(n(91));break;default:OA(A,e,B,m,t,null)}$f(A,o,i,u);return;case"option":for(C in t)if(t.hasOwnProperty(C)&&(o=t[C],o!=null))switch(C){case"selected":A.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:OA(A,e,C,o,t,null)}return;case"dialog":CA("beforetoggle",A),CA("toggle",A),CA("cancel",A),CA("close",A);break;case"iframe":case"object":CA("load",A);break;case"video":case"audio":for(o=0;o<$o.length;o++)CA($o[o],A);break;case"image":CA("error",A),CA("load",A);break;case"details":CA("toggle",A);break;case"embed":case"source":case"link":CA("error",A),CA("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in t)if(t.hasOwnProperty(H)&&(o=t[H],o!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,e));default:OA(A,e,H,o,t,null)}return;default:if(fs(e)){for(R in t)t.hasOwnProperty(R)&&(o=t[R],o!==void 0&&Pu(A,e,R,o,t,void 0));return}}for(m in t)t.hasOwnProperty(m)&&(o=t[m],o!=null&&OA(A,e,m,o,t,null))}function mw(A,e,t,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,B=null,m=null,C=null,H=null,R=null;for(O in t){var N=t[O];if(t.hasOwnProperty(O)&&N!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":C=N;default:o.hasOwnProperty(O)||OA(A,e,O,null,o,N)}}for(var T in o){var O=o[T];if(N=t[T],o.hasOwnProperty(T)&&(O!=null||N!=null))switch(T){case"type":u=O;break;case"name":i=O;break;case"checked":H=O;break;case"defaultChecked":R=O;break;case"value":B=O;break;case"defaultValue":m=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(n(137,e));break;default:O!==N&&OA(A,e,T,O,o,N)}}us(A,B,m,C,H,R,u,i);return;case"select":O=B=m=T=null;for(u in t)if(C=t[u],t.hasOwnProperty(u)&&C!=null)switch(u){case"value":break;case"multiple":O=C;default:o.hasOwnProperty(u)||OA(A,e,u,null,o,C)}for(i in o)if(u=o[i],C=t[i],o.hasOwnProperty(i)&&(u!=null||C!=null))switch(i){case"value":T=u;break;case"defaultValue":m=u;break;case"multiple":B=u;default:u!==C&&OA(A,e,i,u,o,C)}e=m,t=B,o=O,T!=null?Qr(A,!!t,T,!1):!!o!=!!t&&(e!=null?Qr(A,!!t,e,!0):Qr(A,!!t,t?[]:"",!1));return;case"textarea":O=T=null;for(m in t)if(i=t[m],t.hasOwnProperty(m)&&i!=null&&!o.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:OA(A,e,m,null,o,i)}for(B in o)if(i=o[B],u=t[B],o.hasOwnProperty(B)&&(i!=null||u!=null))switch(B){case"value":T=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(n(91));break;default:i!==u&&OA(A,e,B,i,o,u)}Pf(A,T,O);return;case"option":for(var eA in t)if(T=t[eA],t.hasOwnProperty(eA)&&T!=null&&!o.hasOwnProperty(eA))switch(eA){case"selected":A.selected=!1;break;default:OA(A,e,eA,null,o,T)}for(C in o)if(T=o[C],O=t[C],o.hasOwnProperty(C)&&T!==O&&(T!=null||O!=null))switch(C){case"selected":A.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:OA(A,e,C,T,o,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var sA in t)T=t[sA],t.hasOwnProperty(sA)&&T!=null&&!o.hasOwnProperty(sA)&&OA(A,e,sA,null,o,T);for(H in o)if(T=o[H],O=t[H],o.hasOwnProperty(H)&&T!==O&&(T!=null||O!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(n(137,e));break;default:OA(A,e,H,T,o,O)}return;default:if(fs(e)){for(var LA in t)T=t[LA],t.hasOwnProperty(LA)&&T!==void 0&&!o.hasOwnProperty(LA)&&Pu(A,e,LA,void 0,o,T);for(R in o)T=o[R],O=t[R],!o.hasOwnProperty(R)||T===O||T===void 0&&O===void 0||Pu(A,e,R,T,o,O);return}}for(var E in t)T=t[E],t.hasOwnProperty(E)&&T!=null&&!o.hasOwnProperty(E)&&OA(A,e,E,null,o,T);for(N in o)T=o[N],O=t[N],!o.hasOwnProperty(N)||T===O||T==null&&O==null||OA(A,e,N,T,o,O)}function th(A){switch(A){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pw(){if(typeof performance.getEntriesByType=="function"){for(var A=0,e=0,t=performance.getEntriesByType("resource"),o=0;o<t.length;o++){var i=t[o],u=i.transferSize,B=i.initiatorType,m=i.duration;if(u&&m&&th(B)){for(B=0,m=i.responseEnd,o+=1;o<t.length;o++){var C=t[o],H=C.startTime;if(H>m)break;var R=C.transferSize,N=C.initiatorType;R&&th(N)&&(C=C.responseEnd,B+=R*(C<m?1:(m-H)/(C-H)))}if(--o,e+=8*(u+B)/(i.duration/1e3),A++,10<A)break}}if(0<A)return e/A/1e6}return navigator.connection&&(A=navigator.connection.downlink,typeof A=="number")?A:5}var $u=null,Ac=null;function Gl(A){return A.nodeType===9?A:A.ownerDocument}function ah(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rh(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function ec(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tc=null;function vw(){var A=window.event;return A&&A.type==="popstate"?A===tc?!1:(tc=A,!0):(tc=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,ww=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,Cw=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(A){return nh.resolve(null).then(A).catch(Qw)}:oh;function Qw(A){setTimeout(function(){throw A})}function ba(A){return A==="head"}function lh(A,e){var t=e,o=0;do{var i=t.nextSibling;if(A.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(o===0){A.removeChild(i),Ao(e);return}o--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")o++;else if(t==="html")en(A.ownerDocument.documentElement);else if(t==="head"){t=A.ownerDocument.head,en(t);for(var u=t.firstChild;u;){var B=u.nextSibling,m=u.nodeName;u[vo]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=B}}else t==="body"&&en(A.ownerDocument.body);t=i}while(t);Ao(e)}function ih(A,e){var t=A;A=0;do{var o=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(A===0)break;A--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||A++;t=o}while(t)}function ac(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":ac(t),is(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function Uw(A,e,t,o){for(;A.nodeType===1;){var i=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(o){if(!A[vo])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(u=A.getAttribute("rel"),u==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(u!==i.rel||A.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||A.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||A.getAttribute("title")!==(i.title==null?null:i.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(u=A.getAttribute("src"),(u!==(i.src==null?null:i.src)||A.getAttribute("type")!==(i.type==null?null:i.type)||A.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&A.getAttribute("name")===u)return A}else return A;if(A=Ct(A.nextSibling),A===null)break}return null}function yw(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Ct(A.nextSibling),A===null))return null;return A}function sh(A,e){for(;A.nodeType!==8;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!e||(A=Ct(A.nextSibling),A===null))return null;return A}function rc(A){return A.data==="$?"||A.data==="$~"}function oc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState!=="loading"}function Fw(A,e){var t=A.ownerDocument;if(A.data==="$~")A._reactRetry=e;else if(A.data!=="$?"||t.readyState!=="loading")e();else{var o=function(){e(),t.removeEventListener("DOMContentLoaded",o)};t.addEventListener("DOMContentLoaded",o),A._reactRetry=o}}function Ct(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return A}var nc=null;function uh(A){A=A.nextSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="/$"||t==="/&"){if(e===0)return Ct(A.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}A=A.nextSibling}return null}function ch(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return A;e--}else t!=="/$"&&t!=="/&"||e++}A=A.previousSibling}return null}function fh(A,e,t){switch(e=Gl(t),A){case"html":if(A=e.documentElement,!A)throw Error(n(452));return A;case"head":if(A=e.head,!A)throw Error(n(453));return A;case"body":if(A=e.body,!A)throw Error(n(454));return A;default:throw Error(n(451))}}function en(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);is(A)}var Qt=new Map,Bh=new Set;function Nl(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var aa=X.d;X.d={f:Ew,r:xw,D:bw,C:_w,L:Hw,m:Sw,X:Tw,S:Iw,M:Dw};function Ew(){var A=aa.f(),e=Tl();return A||e}function xw(A){var e=vr(A);e!==null&&e.tag===5&&e.type==="form"?Hg(e):aa.r(A)}var qr=typeof document>"u"?null:document;function gh(A,e,t){var o=qr;if(o&&typeof e=="string"&&e){var i=gt(e);i='link[rel="'+A+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Bh.has(i)||(Bh.add(i),A={rel:A,crossOrigin:t,href:e},o.querySelector(i)===null&&(e=o.createElement("link"),He(e,"link",A),pe(e),o.head.appendChild(e)))}}function bw(A){aa.D(A),gh("dns-prefetch",A,null)}function _w(A,e){aa.C(A,e),gh("preconnect",A,e)}function Hw(A,e,t){aa.L(A,e,t);var o=qr;if(o&&A&&e){var i='link[rel="preload"][as="'+gt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+gt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+gt(t.imageSizes)+'"]')):i+='[href="'+gt(A)+'"]';var u=i;switch(e){case"style":u=Pr(A);break;case"script":u=$r(A)}Qt.has(u)||(A=v({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),Qt.set(u,A),o.querySelector(i)!==null||e==="style"&&o.querySelector(tn(u))||e==="script"&&o.querySelector(an(u))||(e=o.createElement("link"),He(e,"link",A),pe(e),o.head.appendChild(e)))}}function Sw(A,e){aa.m(A,e);var t=qr;if(t&&A){var o=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+gt(o)+'"][href="'+gt(A)+'"]',u=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=$r(A)}if(!Qt.has(u)&&(A=v({rel:"modulepreload",href:A},e),Qt.set(u,A),t.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(an(u)))return}o=t.createElement("link"),He(o,"link",A),pe(o),t.head.appendChild(o)}}}function Iw(A,e,t){aa.S(A,e,t);var o=qr;if(o&&A){var i=wr(o).hoistableStyles,u=Pr(A);e=e||"default";var B=i.get(u);if(!B){var m={loading:0,preload:null};if(B=o.querySelector(tn(u)))m.loading=5;else{A=v({rel:"stylesheet",href:A,"data-precedence":e},t),(t=Qt.get(u))&&lc(A,t);var C=B=o.createElement("link");pe(C),He(C,"link",A),C._p=new Promise(function(H,R){C.onload=H,C.onerror=R}),C.addEventListener("load",function(){m.loading|=1}),C.addEventListener("error",function(){m.loading|=2}),m.loading|=4,zl(B,e,o)}B={type:"stylesheet",instance:B,count:1,state:m},i.set(u,B)}}}function Tw(A,e){aa.X(A,e);var t=qr;if(t&&A){var o=wr(t).hoistableScripts,i=$r(A),u=o.get(i);u||(u=t.querySelector(an(i)),u||(A=v({src:A,async:!0},e),(e=Qt.get(i))&&ic(A,e),u=t.createElement("script"),pe(u),He(u,"link",A),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(i,u))}}function Dw(A,e){aa.M(A,e);var t=qr;if(t&&A){var o=wr(t).hoistableScripts,i=$r(A),u=o.get(i);u||(u=t.querySelector(an(i)),u||(A=v({src:A,async:!0,type:"module"},e),(e=Qt.get(i))&&ic(A,e),u=t.createElement("script"),pe(u),He(u,"link",A),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(i,u))}}function dh(A,e,t,o){var i=(i=dA.current)?Nl(i):null;if(!i)throw Error(n(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Pr(t.href),t=wr(i).hoistableStyles,o=t.get(e),o||(o={type:"style",instance:null,count:0,state:null},t.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=Pr(t.href);var u=wr(i).hoistableStyles,B=u.get(A);if(B||(i=i.ownerDocument||i,B={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(A,B),(u=i.querySelector(tn(A)))&&!u._p&&(B.instance=u,B.state.loading=5),Qt.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Qt.set(A,t),u||Mw(i,A,t,B.state))),e&&o===null)throw Error(n(528,""));return B}if(e&&o!==null)throw Error(n(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=$r(t),t=wr(i).hoistableScripts,o=t.get(e),o||(o={type:"script",instance:null,count:0,state:null},t.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,A))}}function Pr(A){return'href="'+gt(A)+'"'}function tn(A){return'link[rel="stylesheet"]['+A+"]"}function hh(A){return v({},A,{"data-precedence":A.precedence,precedence:null})}function Mw(A,e,t,o){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=A.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),He(e,"link",t),pe(e),A.head.appendChild(e))}function $r(A){return'[src="'+gt(A)+'"]'}function an(A){return"script[async]"+A}function mh(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var o=A.querySelector('style[data-href~="'+gt(t.href)+'"]');if(o)return e.instance=o,pe(o),o;var i=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return o=(A.ownerDocument||A).createElement("style"),pe(o),He(o,"style",i),zl(o,t.precedence,A),e.instance=o;case"stylesheet":i=Pr(t.href);var u=A.querySelector(tn(i));if(u)return e.state.loading|=4,e.instance=u,pe(u),u;o=hh(t),(i=Qt.get(i))&&lc(o,i),u=(A.ownerDocument||A).createElement("link"),pe(u);var B=u;return B._p=new Promise(function(m,C){B.onload=m,B.onerror=C}),He(u,"link",o),e.state.loading|=4,zl(u,t.precedence,A),e.instance=u;case"script":return u=$r(t.src),(i=A.querySelector(an(u)))?(e.instance=i,pe(i),i):(o=t,(i=Qt.get(u))&&(o=v({},t),ic(o,i)),A=A.ownerDocument||A,i=A.createElement("script"),pe(i),He(i,"link",o),A.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(n(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,zl(o,t.precedence,A));return e.instance}function zl(A,e,t){for(var o=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,u=i,B=0;B<o.length;B++){var m=o[B];if(m.dataset.precedence===e)u=m;else if(u!==i)break}u?u.parentNode.insertBefore(A,u.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function lc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function ic(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var Yl=null;function ph(A,e,t){if(Yl===null){var o=new Map,i=Yl=new Map;i.set(t,o)}else i=Yl,o=i.get(t),o||(o=new Map,i.set(t,o));if(o.has(A))return o;for(o.set(A,null),t=t.getElementsByTagName(A),i=0;i<t.length;i++){var u=t[i];if(!(u[vo]||u[Ee]||A==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var B=u.getAttribute(e)||"";B=A+B;var m=o.get(B);m?m.push(u):o.set(B,[u])}}return o}function vh(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function Ow(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function wh(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}function Lw(A,e,t,o){if(t.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Pr(o.href),u=e.querySelector(tn(i));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(A.count++,A=kl.bind(A),e.then(A,A)),t.state.loading|=4,t.instance=u,pe(u);return}u=e.ownerDocument||e,o=hh(o),(i=Qt.get(i))&&lc(o,i),u=u.createElement("link"),pe(u);var B=u;B._p=new Promise(function(m,C){B.onload=m,B.onerror=C}),He(u,"link",o),t.instance=u}A.stylesheets===null&&(A.stylesheets=new Map),A.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(A.count++,t=kl.bind(A),e.addEventListener("load",t),e.addEventListener("error",t))}}var sc=0;function Kw(A,e){return A.stylesheets&&A.count===0&&Jl(A,A.stylesheets),0<A.count||0<A.imgCount?function(t){var o=setTimeout(function(){if(A.stylesheets&&Jl(A,A.stylesheets),A.unsuspend){var u=A.unsuspend;A.unsuspend=null,u()}},6e4+e);0<A.imgBytes&&sc===0&&(sc=62500*pw());var i=setTimeout(function(){if(A.waitingForImages=!1,A.count===0&&(A.stylesheets&&Jl(A,A.stylesheets),A.unsuspend)){var u=A.unsuspend;A.unsuspend=null,u()}},(A.imgBytes>sc?50:800)+e);return A.unsuspend=t,function(){A.unsuspend=null,clearTimeout(o),clearTimeout(i)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var Xl=null;function Jl(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,Xl=new Map,e.forEach(Rw,A),Xl=null,kl.call(A))}function Rw(A,e){if(!(e.state.loading&4)){var t=Xl.get(A);if(t)var o=t.get(null);else{t=new Map,Xl.set(A,t);for(var i=A.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var B=i[u];(B.nodeName==="LINK"||B.getAttribute("media")!=="not all")&&(t.set(B.dataset.precedence,B),o=B)}o&&t.set(null,o)}i=e.instance,B=i.getAttribute("data-precedence"),u=t.get(B)||o,u===o&&t.set(null,i),t.set(B,i),this.count++,o=kl.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),u?u.parentNode.insertBefore(i,u.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(i,A.firstChild)),e.state.loading|=4}}var rn={$$typeof:z,Provider:null,Consumer:null,_currentValue:tA,_currentValue2:tA,_threadCount:0};function Vw(A,e,t,o,i,u,B,m,C){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.hiddenUpdates=rs(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=B,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Ch(A,e,t,o,i,u,B,m,C,H,R,N){return A=new Vw(A,e,t,B,C,H,R,N,m),e=1,u===!0&&(e|=24),u=nt(3,null,null,e),A.current=u,u.stateNode=A,e=Ns(),e.refCount++,A.pooledCache=e,e.refCount++,u.memoizedState={element:o,isDehydrated:t,cache:e},Xs(u),A}function Qh(A){return A?(A=Hr,A):Hr}function Uh(A,e,t,o,i,u){i=Qh(i),o.context===null?o.context=i:o.pendingContext=i,o=ma(e),o.payload={element:t},u=u===void 0?null:u,u!==null&&(o.callback=u),t=pa(A,o,e),t!==null&&($e(t,A,e),Oo(t,A,e))}function yh(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function uc(A,e){yh(A,e),(A=A.alternate)&&yh(A,e)}function Fh(A){if(A.tag===13||A.tag===31){var e=qa(A,67108864);e!==null&&$e(e,A,67108864),uc(A,67108864)}}function Eh(A){if(A.tag===13||A.tag===31){var e=ct();e=os(e);var t=qa(A,e);t!==null&&$e(t,A,e),uc(A,e)}}var Wl=!0;function Gw(A,e,t,o){var i=I.T;I.T=null;var u=X.p;try{X.p=2,cc(A,e,t,o)}finally{X.p=u,I.T=i}}function Nw(A,e,t,o){var i=I.T;I.T=null;var u=X.p;try{X.p=8,cc(A,e,t,o)}finally{X.p=u,I.T=i}}function cc(A,e,t,o){if(Wl){var i=fc(o);if(i===null)qu(A,e,o,Zl,t),bh(A,o);else if(Yw(i,A,e,t,o))o.stopPropagation();else if(bh(A,o),e&4&&-1<zw.indexOf(A)){for(;i!==null;){var u=vr(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var B=Xa(u.pendingLanes);if(B!==0){var m=u;for(m.pendingLanes|=2,m.entangledLanes|=2;B;){var C=1<<31-rt(B);m.entanglements[1]|=C,B&=~C}Ot(u),(HA&6)===0&&(Sl=tt()+500,Po(0))}}break;case 31:case 13:m=qa(u,2),m!==null&&$e(m,u,2),Tl(),uc(u,2)}if(u=fc(o),u===null&&qu(A,e,o,Zl,t),u===i)break;i=u}i!==null&&o.stopPropagation()}else qu(A,e,o,null,t)}}function fc(A){return A=gs(A),Bc(A)}var Zl=null;function Bc(A){if(Zl=null,A=pr(A),A!==null){var e=c(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=f(e),A!==null)return A;A=null}else if(t===31){if(A=g(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return Zl=A,null}function xh(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bp()){case Mf:return 2;case Of:return 8;case Kn:case _p:return 32;case Lf:return 268435456;default:return 32}default:return 32}}var gc=!1,_a=null,Ha=null,Sa=null,on=new Map,nn=new Map,Ia=[],zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bh(A,e){switch(A){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":on.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nn.delete(e.pointerId)}}function ln(A,e,t,o,i,u){return A===null||A.nativeEvent!==u?(A={blockedOn:e,domEventName:t,eventSystemFlags:o,nativeEvent:u,targetContainers:[i]},e!==null&&(e=vr(e),e!==null&&Fh(e)),A):(A.eventSystemFlags|=o,e=A.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),A)}function Yw(A,e,t,o,i){switch(e){case"focusin":return _a=ln(_a,A,e,t,o,i),!0;case"dragenter":return Ha=ln(Ha,A,e,t,o,i),!0;case"mouseover":return Sa=ln(Sa,A,e,t,o,i),!0;case"pointerover":var u=i.pointerId;return on.set(u,ln(on.get(u)||null,A,e,t,o,i)),!0;case"gotpointercapture":return u=i.pointerId,nn.set(u,ln(nn.get(u)||null,A,e,t,o,i)),!0}return!1}function _h(A){var e=pr(A.target);if(e!==null){var t=c(e);if(t!==null){if(e=t.tag,e===13){if(e=f(t),e!==null){A.blockedOn=e,zf(A.priority,function(){Eh(t)});return}}else if(e===31){if(e=g(t),e!==null){A.blockedOn=e,zf(A.priority,function(){Eh(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function jl(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=fc(A.nativeEvent);if(t===null){t=A.nativeEvent;var o=new t.constructor(t.type,t);Bs=o,t.target.dispatchEvent(o),Bs=null}else return e=vr(t),e!==null&&Fh(e),A.blockedOn=t,!1;e.shift()}return!0}function Hh(A,e,t){jl(A)&&t.delete(e)}function kw(){gc=!1,_a!==null&&jl(_a)&&(_a=null),Ha!==null&&jl(Ha)&&(Ha=null),Sa!==null&&jl(Sa)&&(Sa=null),on.forEach(Hh),nn.forEach(Hh)}function ql(A,e){A.blockedOn===e&&(A.blockedOn=null,gc||(gc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kw)))}var Pl=null;function Sh(A){Pl!==A&&(Pl=A,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Pl===A&&(Pl=null);for(var e=0;e<A.length;e+=3){var t=A[e],o=A[e+1],i=A[e+2];if(typeof o!="function"){if(Bc(o||t)===null)continue;break}var u=vr(t);u!==null&&(A.splice(e,3),e-=3,fu(u,{pending:!0,data:i,method:t.method,action:o},o,i))}}))}function Ao(A){function e(C){return ql(C,A)}_a!==null&&ql(_a,A),Ha!==null&&ql(Ha,A),Sa!==null&&ql(Sa,A),on.forEach(e),nn.forEach(e);for(var t=0;t<Ia.length;t++){var o=Ia[t];o.blockedOn===A&&(o.blockedOn=null)}for(;0<Ia.length&&(t=Ia[0],t.blockedOn===null);)_h(t),t.blockedOn===null&&Ia.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(o=0;o<t.length;o+=3){var i=t[o],u=t[o+1],B=i[Je]||null;if(typeof u=="function")B||Sh(t);else if(B){var m=null;if(u&&u.hasAttribute("formAction")){if(i=u,B=u[Je]||null)m=B.formAction;else if(Bc(i)!==null)continue}else m=B.action;typeof m=="function"?t[o+1]=m:(t.splice(o,3),o-=3),Sh(t)}}}function Ih(){function A(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(B){return i=B})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),o||setTimeout(t,20)}function t(){if(!o&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,i=null;return navigation.addEventListener("navigate",A),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){o=!0,navigation.removeEventListener("navigate",A),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function dc(A){this._internalRoot=A}$l.prototype.render=dc.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(n(409));var t=e.current,o=ct();Uh(t,o,A,e,null,null)},$l.prototype.unmount=dc.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Uh(A.current,2,null,A,null,null),Tl(),e[mr]=null}};function $l(A){this._internalRoot=A}$l.prototype.unstable_scheduleHydration=function(A){if(A){var e=Nf();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Ia.length&&e!==0&&e<Ia[t].priority;t++);Ia.splice(t,0,A),t===0&&_h(A)}};var Th=r.version;if(Th!=="19.2.4")throw Error(n(527,Th,"19.2.4"));X.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(n(188)):(A=Object.keys(A).join(","),Error(n(268,A)));return A=h(e),A=A!==null?p(A):null,A=A===null?null:A.stateNode,A};var Xw={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ai.isDisabled&&Ai.supportsFiber)try{ho=Ai.inject(Xw),at=Ai}catch{}}return un.createRoot=function(A,e){if(!s(A))throw Error(n(299));var t=!1,o="",i=Vg,u=Gg,B=Ng;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(B=e.onRecoverableError)),e=Ch(A,1,!1,null,null,t,o,null,i,u,B,Ih),A[mr]=e.current,ju(A),new dc(e)},un.hydrateRoot=function(A,e,t){if(!s(A))throw Error(n(299));var o=!1,i="",u=Vg,B=Gg,m=Ng,C=null;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(B=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.formState!==void 0&&(C=t.formState)),e=Ch(A,1,!0,e,t??null,o,i,C,u,B,m,Ih),e.context=Qh(null),t=e.current,o=ct(),o=os(o),i=ma(o),i.callback=null,pa(t,i,o),t=o,e.current.lanes=t,po(e,t),Ot(e),A[mr]=e.current,ju(A),new $l(e)},un.version="19.2.4",un}var zh;function oC(){if(zh)return pc.exports;zh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),pc.exports=rC(),pc.exports}var nC=oC(),Yh={},lC="@vercel/analytics",iC="1.6.1",sC=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function fm(){return typeof window<"u"}function Bm(){try{const a="production"}catch{}return"production"}function uC(a="auto"){if(a==="auto"){window.vam=Bm();return}window.vam=a}function cC(){return(fm()?window.vam:Bm())||"production"}function Wc(){return cC()==="development"}function fC(a){return a.scriptSrc?a.scriptSrc:Wc()?"https://va.vercel-scripts.com/v1/script.debug.js":a.basePath?`${a.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function BC(a={debug:!0}){var r;if(!fm())return;uC(a.mode),sC(),a.beforeSend&&((r=window.va)==null||r.call(window,"beforeSend",a.beforeSend));const l=fC(a);if(document.head.querySelector(`script[src*="${l}"]`))return;const n=document.createElement("script");n.src=l,n.defer=!0,n.dataset.sdkn=lC+(a.framework?`/${a.framework}`:""),n.dataset.sdkv=iC,a.disableAutoTrack&&(n.dataset.disableAutoTrack="1"),a.endpoint?n.dataset.endpoint=a.endpoint:a.basePath&&(n.dataset.endpoint=`${a.basePath}/insights`),a.dsn&&(n.dataset.dsn=a.dsn),n.onerror=()=>{const s=Wc()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${l}. ${s}`)},Wc()&&a.debug===!1&&(n.dataset.debug="false"),document.head.appendChild(n)}function gC({route:a,path:r}){var l;(l=window.va)==null||l.call(window,"pageview",{route:a,path:r})}function dC(){if(!(typeof process>"u"||typeof Yh>"u"))return Yh.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function hC(a){return W.useEffect(()=>{var r;a.beforeSend&&((r=window.va)==null||r.call(window,"beforeSend",a.beforeSend))},[a.beforeSend]),W.useEffect(()=>{BC({framework:a.framework||"react",basePath:a.basePath??dC(),...a.route!==void 0&&{disableAutoTrack:!0},...a})},[]),W.useEffect(()=>{a.route&&a.path&&gC({route:a.route,path:a.path})},[a.route,a.path]),null}/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zc=function(a,r){return Zc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(l[s]=n[s])},Zc(a,r)};function St(a,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Zc(a,r);function l(){this.constructor=a}a.prototype=r===null?Object.create(r):(l.prototype=r.prototype,new l)}var jc=function(){return jc=Object.assign||function(r){for(var l,n=1,s=arguments.length;n<s;n++){l=arguments[n];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},jc.apply(this,arguments)};function Xe(a,r,l,n){function s(c){return c instanceof l?c:new l(function(f){f(c)})}return new(l||(l=Promise))(function(c,f){function g(p){try{h(n.next(p))}catch(v){f(v)}}function d(p){try{h(n.throw(p))}catch(v){f(v)}}function h(p){p.done?c(p.value):s(p.value).then(g,d)}h((n=n.apply(a,[])).next())})}function Ge(a,r){var l={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,s,c,f;return f={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function g(h){return function(p){return d([h,p])}}function d(h){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,s&&(c=h[0]&2?s.return:h[0]?s.throw||((c=s.return)&&c.call(s),0):s.next)&&!(c=c.call(s,h[1])).done)return c;switch(s=0,c&&(h=[h[0]&2,c.value]),h[0]){case 0:case 1:c=h;break;case 4:return l.label++,{value:h[1],done:!1};case 5:l.label++,s=h[1],h=[0];continue;case 7:h=l.ops.pop(),l.trys.pop();continue;default:if(c=l.trys,!(c=c.length>0&&c[c.length-1])&&(h[0]===6||h[0]===2)){l=0;continue}if(h[0]===3&&(!c||h[1]>c[0]&&h[1]<c[3])){l.label=h[1];break}if(h[0]===6&&l.label<c[1]){l.label=c[1],c=h;break}if(c&&l.label<c[2]){l.label=c[2],l.ops.push(h);break}c[2]&&l.ops.pop(),l.trys.pop();continue}h=r.call(a,l)}catch(p){h=[6,p],s=0}finally{n=c=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}function ei(a,r,l){if(arguments.length===2)for(var n=0,s=r.length,c;n<s;n++)(c||!(n in r))&&(c||(c=Array.prototype.slice.call(r,0,n)),c[n]=r[n]);return a.concat(c||r)}var la=(function(){function a(r,l,n,s){this.left=r,this.top=l,this.width=n,this.height=s}return a.prototype.add=function(r,l,n,s){return new a(this.left+r,this.top+l,this.width+n,this.height+s)},a.fromClientRect=function(r,l){return new a(l.left+r.windowBounds.left,l.top+r.windowBounds.top,l.width,l.height)},a.fromDOMRectList=function(r,l){var n=Array.from(l).find(function(s){return s.width!==0});return n?new a(n.left+r.windowBounds.left,n.top+r.windowBounds.top,n.width,n.height):a.EMPTY},a.EMPTY=new a(0,0,0,0),a})(),Gi=function(a,r){return la.fromClientRect(a,r.getBoundingClientRect())},mC=function(a){var r=a.body,l=a.documentElement;if(!r||!l)throw new Error("Unable to get document size");var n=Math.max(Math.max(r.scrollWidth,l.scrollWidth),Math.max(r.offsetWidth,l.offsetWidth),Math.max(r.clientWidth,l.clientWidth)),s=Math.max(Math.max(r.scrollHeight,l.scrollHeight),Math.max(r.offsetHeight,l.offsetHeight),Math.max(r.clientHeight,l.clientHeight));return new la(0,0,n,s)},Ni=function(a){for(var r=[],l=0,n=a.length;l<n;){var s=a.charCodeAt(l++);if(s>=55296&&s<=56319&&l<n){var c=a.charCodeAt(l++);(c&64512)===56320?r.push(((s&1023)<<10)+(c&1023)+65536):(r.push(s),l--)}else r.push(s)}return r},ae=function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,a);var l=a.length;if(!l)return"";for(var n=[],s=-1,c="";++s<l;){var f=a[s];f<=65535?n.push(f):(f-=65536,n.push((f>>10)+55296,f%1024+56320)),(s+1===l||n.length>16384)&&(c+=String.fromCharCode.apply(String,n),n.length=0)}return c},kh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ti=0;ti<kh.length;ti++)pC[kh.charCodeAt(ti)]=ti;var Xh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",dn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ai=0;ai<Xh.length;ai++)dn[Xh.charCodeAt(ai)]=ai;var vC=function(a){var r=a.length*.75,l=a.length,n,s=0,c,f,g,d;a[a.length-1]==="="&&(r--,a[a.length-2]==="="&&r--);var h=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),p=Array.isArray(h)?h:new Uint8Array(h);for(n=0;n<l;n+=4)c=dn[a.charCodeAt(n)],f=dn[a.charCodeAt(n+1)],g=dn[a.charCodeAt(n+2)],d=dn[a.charCodeAt(n+3)],p[s++]=c<<2|f>>4,p[s++]=(f&15)<<4|g>>2,p[s++]=(g&3)<<6|d&63;return h},wC=function(a){for(var r=a.length,l=[],n=0;n<r;n+=2)l.push(a[n+1]<<8|a[n]);return l},CC=function(a){for(var r=a.length,l=[],n=0;n<r;n+=4)l.push(a[n+3]<<24|a[n+2]<<16|a[n+1]<<8|a[n]);return l},gr=5,Uf=11,Qc=2,QC=Uf-gr,gm=65536>>gr,UC=1<<gr,Uc=UC-1,yC=1024>>gr,FC=gm+yC,EC=FC,xC=32,bC=EC+xC,_C=65536>>Uf,HC=1<<QC,SC=HC-1,Jh=function(a,r,l){return a.slice?a.slice(r,l):new Uint16Array(Array.prototype.slice.call(a,r,l))},IC=function(a,r,l){return a.slice?a.slice(r,l):new Uint32Array(Array.prototype.slice.call(a,r,l))},TC=function(a,r){var l=vC(a),n=Array.isArray(l)?CC(l):new Uint32Array(l),s=Array.isArray(l)?wC(l):new Uint16Array(l),c=24,f=Jh(s,c/2,n[4]/2),g=n[5]===2?Jh(s,(c+n[4])/2):IC(n,Math.ceil((c+n[4])/4));return new DC(n[0],n[1],n[2],n[3],f,g)},DC=(function(){function a(r,l,n,s,c,f){this.initialValue=r,this.errorValue=l,this.highStart=n,this.highValueIndex=s,this.index=c,this.data=f}return a.prototype.get=function(r){var l;if(r>=0){if(r<55296||r>56319&&r<=65535)return l=this.index[r>>gr],l=(l<<Qc)+(r&Uc),this.data[l];if(r<=65535)return l=this.index[gm+(r-55296>>gr)],l=(l<<Qc)+(r&Uc),this.data[l];if(r<this.highStart)return l=bC-_C+(r>>Uf),l=this.index[l],l+=r>>gr&SC,l=this.index[l],l=(l<<Qc)+(r&Uc),this.data[l];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},a})(),Wh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",MC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ri=0;ri<Wh.length;ri++)MC[Wh.charCodeAt(ri)]=ri;var OC="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Zh=50,LC=1,dm=2,hm=3,KC=4,RC=5,jh=7,mm=8,qh=9,La=10,qc=11,Ph=12,Pc=13,VC=14,hn=15,$c=16,oi=17,cn=18,GC=19,$h=20,Af=21,fn=22,yc=23,eo=24,ft=25,mn=26,pn=27,to=28,NC=29,fr=30,zC=31,ni=32,li=33,ef=34,tf=35,af=36,bn=37,rf=38,Ei=39,xi=40,Fc=41,pm=42,YC=43,kC=[9001,65288],vm="!",FA="×",ii="÷",of=TC(OC),ra=[fr,af],nf=[LC,dm,hm,RC],wm=[La,mm],A0=[pn,mn],XC=nf.concat(wm),e0=[rf,Ei,xi,ef,tf],JC=[hn,Pc],WC=function(a,r){r===void 0&&(r="strict");var l=[],n=[],s=[];return a.forEach(function(c,f){var g=of.get(c);if(g>Zh?(s.push(!0),g-=Zh):s.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(c)!==-1)return n.push(f),l.push($c);if(g===KC||g===qc){if(f===0)return n.push(f),l.push(fr);var d=l[f-1];return XC.indexOf(d)===-1?(n.push(n[f-1]),l.push(d)):(n.push(f),l.push(fr))}if(n.push(f),g===zC)return l.push(r==="strict"?Af:bn);if(g===pm||g===NC)return l.push(fr);if(g===YC)return c>=131072&&c<=196605||c>=196608&&c<=262141?l.push(bn):l.push(fr);l.push(g)}),[n,l,s]},Ec=function(a,r,l,n){var s=n[l];if(Array.isArray(a)?a.indexOf(s)!==-1:a===s)for(var c=l;c<=n.length;){c++;var f=n[c];if(f===r)return!0;if(f!==La)break}if(s===La)for(var c=l;c>0;){c--;var g=n[c];if(Array.isArray(a)?a.indexOf(g)!==-1:a===g)for(var d=l;d<=n.length;){d++;var f=n[d];if(f===r)return!0;if(f!==La)break}if(g!==La)break}return!1},t0=function(a,r){for(var l=a;l>=0;){var n=r[l];if(n===La)l--;else return n}return 0},ZC=function(a,r,l,n,s){if(l[n]===0)return FA;var c=n-1;if(Array.isArray(s)&&s[c]===!0)return FA;var f=c-1,g=c+1,d=r[c],h=f>=0?r[f]:0,p=r[g];if(d===dm&&p===hm)return FA;if(nf.indexOf(d)!==-1)return vm;if(nf.indexOf(p)!==-1||wm.indexOf(p)!==-1)return FA;if(t0(c,r)===mm)return ii;if(of.get(a[c])===qc||(d===ni||d===li)&&of.get(a[g])===qc||d===jh||p===jh||d===qh||[La,Pc,hn].indexOf(d)===-1&&p===qh||[oi,cn,GC,eo,to].indexOf(p)!==-1||t0(c,r)===fn||Ec(yc,fn,c,r)||Ec([oi,cn],Af,c,r)||Ec(Ph,Ph,c,r))return FA;if(d===La)return ii;if(d===yc||p===yc)return FA;if(p===$c||d===$c)return ii;if([Pc,hn,Af].indexOf(p)!==-1||d===VC||h===af&&JC.indexOf(d)!==-1||d===to&&p===af||p===$h||ra.indexOf(p)!==-1&&d===ft||ra.indexOf(d)!==-1&&p===ft||d===pn&&[bn,ni,li].indexOf(p)!==-1||[bn,ni,li].indexOf(d)!==-1&&p===mn||ra.indexOf(d)!==-1&&A0.indexOf(p)!==-1||A0.indexOf(d)!==-1&&ra.indexOf(p)!==-1||[pn,mn].indexOf(d)!==-1&&(p===ft||[fn,hn].indexOf(p)!==-1&&r[g+1]===ft)||[fn,hn].indexOf(d)!==-1&&p===ft||d===ft&&[ft,to,eo].indexOf(p)!==-1)return FA;if([ft,to,eo,oi,cn].indexOf(p)!==-1)for(var v=c;v>=0;){var w=r[v];if(w===ft)return FA;if([to,eo].indexOf(w)!==-1)v--;else break}if([pn,mn].indexOf(p)!==-1)for(var v=[oi,cn].indexOf(d)!==-1?f:c;v>=0;){var w=r[v];if(w===ft)return FA;if([to,eo].indexOf(w)!==-1)v--;else break}if(rf===d&&[rf,Ei,ef,tf].indexOf(p)!==-1||[Ei,ef].indexOf(d)!==-1&&[Ei,xi].indexOf(p)!==-1||[xi,tf].indexOf(d)!==-1&&p===xi||e0.indexOf(d)!==-1&&[$h,mn].indexOf(p)!==-1||e0.indexOf(p)!==-1&&d===pn||ra.indexOf(d)!==-1&&ra.indexOf(p)!==-1||d===eo&&ra.indexOf(p)!==-1||ra.concat(ft).indexOf(d)!==-1&&p===fn&&kC.indexOf(a[g])===-1||ra.concat(ft).indexOf(p)!==-1&&d===cn)return FA;if(d===Fc&&p===Fc){for(var S=l[c],F=1;S>0&&(S--,r[S]===Fc);)F++;if(F%2!==0)return FA}return d===ni&&p===li?FA:ii},jC=function(a,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var l=WC(a,r.lineBreak),n=l[0],s=l[1],c=l[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(s=s.map(function(g){return[ft,fr,pm].indexOf(g)!==-1?bn:g}));var f=r.wordBreak==="keep-all"?c.map(function(g,d){return g&&a[d]>=19968&&a[d]<=40959}):void 0;return[n,s,f]},qC=(function(){function a(r,l,n,s){this.codePoints=r,this.required=l===vm,this.start=n,this.end=s}return a.prototype.slice=function(){return ae.apply(void 0,this.codePoints.slice(this.start,this.end))},a})(),PC=function(a,r){var l=Ni(a),n=jC(l,r),s=n[0],c=n[1],f=n[2],g=l.length,d=0,h=0;return{next:function(){if(h>=g)return{done:!0,value:null};for(var p=FA;h<g&&(p=ZC(l,c,s,++h,f))===FA;);if(p!==FA||h===g){var v=new qC(l,p,d,h);return d=h,{value:v,done:!1}}return{done:!0,value:null}}}},$C=1,AQ=2,Tn=4,a0=8,Hi=10,r0=47,Qn=92,eQ=9,tQ=32,si=34,Bn=61,aQ=35,rQ=36,oQ=37,ui=39,ci=40,gn=41,nQ=95,At=45,lQ=33,iQ=60,sQ=62,uQ=64,cQ=91,fQ=93,BQ=61,gQ=123,fi=63,dQ=125,o0=124,hQ=126,mQ=128,n0=65533,xc=42,Br=43,pQ=44,vQ=58,wQ=59,_n=46,CQ=0,QQ=8,UQ=11,yQ=14,FQ=31,EQ=127,Lt=-1,Cm=48,Qm=97,Um=101,xQ=102,bQ=117,_Q=122,ym=65,Fm=69,Em=70,HQ=85,SQ=90,Ne=function(a){return a>=Cm&&a<=57},IQ=function(a){return a>=55296&&a<=57343},ao=function(a){return Ne(a)||a>=ym&&a<=Em||a>=Qm&&a<=xQ},TQ=function(a){return a>=Qm&&a<=_Q},DQ=function(a){return a>=ym&&a<=SQ},MQ=function(a){return TQ(a)||DQ(a)},OQ=function(a){return a>=mQ},Bi=function(a){return a===Hi||a===eQ||a===tQ},Si=function(a){return MQ(a)||OQ(a)||a===nQ},l0=function(a){return Si(a)||Ne(a)||a===At},LQ=function(a){return a>=CQ&&a<=QQ||a===UQ||a>=yQ&&a<=FQ||a===EQ},Oa=function(a,r){return a!==Qn?!1:r!==Hi},gi=function(a,r,l){return a===At?Si(r)||Oa(r,l):Si(a)?!0:!!(a===Qn&&Oa(a,r))},bc=function(a,r,l){return a===Br||a===At?Ne(r)?!0:r===_n&&Ne(l):Ne(a===_n?r:a)},KQ=function(a){var r=0,l=1;(a[r]===Br||a[r]===At)&&(a[r]===At&&(l=-1),r++);for(var n=[];Ne(a[r]);)n.push(a[r++]);var s=n.length?parseInt(ae.apply(void 0,n),10):0;a[r]===_n&&r++;for(var c=[];Ne(a[r]);)c.push(a[r++]);var f=c.length,g=f?parseInt(ae.apply(void 0,c),10):0;(a[r]===Fm||a[r]===Um)&&r++;var d=1;(a[r]===Br||a[r]===At)&&(a[r]===At&&(d=-1),r++);for(var h=[];Ne(a[r]);)h.push(a[r++]);var p=h.length?parseInt(ae.apply(void 0,h),10):0;return l*(s+g*Math.pow(10,-f))*Math.pow(10,d*p)},RQ={type:2},VQ={type:3},GQ={type:4},NQ={type:13},zQ={type:8},YQ={type:21},kQ={type:9},XQ={type:10},JQ={type:11},WQ={type:12},ZQ={type:14},di={type:23},jQ={type:1},qQ={type:25},PQ={type:24},$Q={type:26},AU={type:27},eU={type:28},tU={type:29},aU={type:31},lf={type:32},xm=(function(){function a(){this._value=[]}return a.prototype.write=function(r){this._value=this._value.concat(Ni(r))},a.prototype.read=function(){for(var r=[],l=this.consumeToken();l!==lf;)r.push(l),l=this.consumeToken();return r},a.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case si:return this.consumeStringToken(si);case aQ:var l=this.peekCodePoint(0),n=this.peekCodePoint(1),s=this.peekCodePoint(2);if(l0(l)||Oa(n,s)){var c=gi(l,n,s)?AQ:$C,f=this.consumeName();return{type:5,value:f,flags:c}}break;case rQ:if(this.peekCodePoint(0)===Bn)return this.consumeCodePoint(),NQ;break;case ui:return this.consumeStringToken(ui);case ci:return RQ;case gn:return VQ;case xc:if(this.peekCodePoint(0)===Bn)return this.consumeCodePoint(),ZQ;break;case Br:if(bc(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case pQ:return GQ;case At:var g=r,d=this.peekCodePoint(0),h=this.peekCodePoint(1);if(bc(g,d,h))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(gi(g,d,h))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(d===At&&h===sQ)return this.consumeCodePoint(),this.consumeCodePoint(),PQ;break;case _n:if(bc(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case r0:if(this.peekCodePoint(0)===xc)for(this.consumeCodePoint();;){var p=this.consumeCodePoint();if(p===xc&&(p=this.consumeCodePoint(),p===r0))return this.consumeToken();if(p===Lt)return this.consumeToken()}break;case vQ:return $Q;case wQ:return AU;case iQ:if(this.peekCodePoint(0)===lQ&&this.peekCodePoint(1)===At&&this.peekCodePoint(2)===At)return this.consumeCodePoint(),this.consumeCodePoint(),qQ;break;case uQ:var v=this.peekCodePoint(0),w=this.peekCodePoint(1),S=this.peekCodePoint(2);if(gi(v,w,S)){var f=this.consumeName();return{type:7,value:f}}break;case cQ:return eU;case Qn:if(Oa(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case fQ:return tU;case BQ:if(this.peekCodePoint(0)===Bn)return this.consumeCodePoint(),zQ;break;case gQ:return JQ;case dQ:return WQ;case bQ:case HQ:var F=this.peekCodePoint(0),y=this.peekCodePoint(1);return F===Br&&(ao(y)||y===fi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case o0:if(this.peekCodePoint(0)===Bn)return this.consumeCodePoint(),kQ;if(this.peekCodePoint(0)===o0)return this.consumeCodePoint(),YQ;break;case hQ:if(this.peekCodePoint(0)===Bn)return this.consumeCodePoint(),XQ;break;case Lt:return lf}return Bi(r)?(this.consumeWhiteSpace(),aU):Ne(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):Si(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:ae(r)}},a.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},a.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},a.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},a.prototype.consumeUnicodeRangeToken=function(){for(var r=[],l=this.consumeCodePoint();ao(l)&&r.length<6;)r.push(l),l=this.consumeCodePoint();for(var n=!1;l===fi&&r.length<6;)r.push(l),l=this.consumeCodePoint(),n=!0;if(n){var s=parseInt(ae.apply(void 0,r.map(function(d){return d===fi?Cm:d})),16),c=parseInt(ae.apply(void 0,r.map(function(d){return d===fi?Em:d})),16);return{type:30,start:s,end:c}}var f=parseInt(ae.apply(void 0,r),16);if(this.peekCodePoint(0)===At&&ao(this.peekCodePoint(1))){this.consumeCodePoint(),l=this.consumeCodePoint();for(var g=[];ao(l)&&g.length<6;)g.push(l),l=this.consumeCodePoint();var c=parseInt(ae.apply(void 0,g),16);return{type:30,start:f,end:c}}else return{type:30,start:f,end:f}},a.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===ci?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===ci?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},a.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===Lt)return{type:22,value:""};var l=this.peekCodePoint(0);if(l===ui||l===si){var n=this.consumeStringToken(this.consumeCodePoint());return n.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===Lt||this.peekCodePoint(0)===gn)?(this.consumeCodePoint(),{type:22,value:n.value}):(this.consumeBadUrlRemnants(),di)}for(;;){var s=this.consumeCodePoint();if(s===Lt||s===gn)return{type:22,value:ae.apply(void 0,r)};if(Bi(s))return this.consumeWhiteSpace(),this.peekCodePoint(0)===Lt||this.peekCodePoint(0)===gn?(this.consumeCodePoint(),{type:22,value:ae.apply(void 0,r)}):(this.consumeBadUrlRemnants(),di);if(s===si||s===ui||s===ci||LQ(s))return this.consumeBadUrlRemnants(),di;if(s===Qn)if(Oa(s,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),di;else r.push(s)}},a.prototype.consumeWhiteSpace=function(){for(;Bi(this.peekCodePoint(0));)this.consumeCodePoint()},a.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===gn||r===Lt)return;Oa(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},a.prototype.consumeStringSlice=function(r){for(var l=5e4,n="";r>0;){var s=Math.min(l,r);n+=ae.apply(void 0,this._value.splice(0,s)),r-=s}return this._value.shift(),n},a.prototype.consumeStringToken=function(r){var l="",n=0;do{var s=this._value[n];if(s===Lt||s===void 0||s===r)return l+=this.consumeStringSlice(n),{type:0,value:l};if(s===Hi)return this._value.splice(0,n),jQ;if(s===Qn){var c=this._value[n+1];c!==Lt&&c!==void 0&&(c===Hi?(l+=this.consumeStringSlice(n),n=-1,this._value.shift()):Oa(s,c)&&(l+=this.consumeStringSlice(n),l+=ae(this.consumeEscapedCodePoint()),n=-1))}n++}while(!0)},a.prototype.consumeNumber=function(){var r=[],l=Tn,n=this.peekCodePoint(0);for((n===Br||n===At)&&r.push(this.consumeCodePoint());Ne(this.peekCodePoint(0));)r.push(this.consumeCodePoint());n=this.peekCodePoint(0);var s=this.peekCodePoint(1);if(n===_n&&Ne(s))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),l=a0;Ne(this.peekCodePoint(0));)r.push(this.consumeCodePoint());n=this.peekCodePoint(0),s=this.peekCodePoint(1);var c=this.peekCodePoint(2);if((n===Fm||n===Um)&&((s===Br||s===At)&&Ne(c)||Ne(s)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),l=a0;Ne(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[KQ(r),l]},a.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),l=r[0],n=r[1],s=this.peekCodePoint(0),c=this.peekCodePoint(1),f=this.peekCodePoint(2);if(gi(s,c,f)){var g=this.consumeName();return{type:15,number:l,flags:n,unit:g}}return s===oQ?(this.consumeCodePoint(),{type:16,number:l,flags:n}):{type:17,number:l,flags:n}},a.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(ao(r)){for(var l=ae(r);ao(this.peekCodePoint(0))&&l.length<6;)l+=ae(this.consumeCodePoint());Bi(this.peekCodePoint(0))&&this.consumeCodePoint();var n=parseInt(l,16);return n===0||IQ(n)||n>1114111?n0:n}return r===Lt?n0:r},a.prototype.consumeName=function(){for(var r="";;){var l=this.consumeCodePoint();if(l0(l))r+=ae(l);else if(Oa(l,this.peekCodePoint(0)))r+=ae(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(l),r}},a})(),bm=(function(){function a(r){this._tokens=r}return a.create=function(r){var l=new xm;return l.write(r),new a(l.read())},a.parseValue=function(r){return a.create(r).parseComponentValue()},a.parseValues=function(r){return a.create(r).parseComponentValues()},a.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var l=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return l;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},a.prototype.parseComponentValues=function(){for(var r=[];;){var l=this.consumeComponentValue();if(l.type===32)return r;r.push(l),r.push()}},a.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},a.prototype.consumeSimpleBlock=function(r){for(var l={type:r,values:[]},n=this.consumeToken();;){if(n.type===32||oU(n,r))return l;this.reconsumeToken(n),l.values.push(this.consumeComponentValue()),n=this.consumeToken()}},a.prototype.consumeFunction=function(r){for(var l={name:r.value,values:[],type:18};;){var n=this.consumeToken();if(n.type===32||n.type===3)return l;this.reconsumeToken(n),l.values.push(this.consumeComponentValue())}},a.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?lf:r},a.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},a})(),Dn=function(a){return a.type===15},fo=function(a){return a.type===17},KA=function(a){return a.type===20},rU=function(a){return a.type===0},sf=function(a,r){return KA(a)&&a.value===r},_m=function(a){return a.type!==31},co=function(a){return a.type!==31&&a.type!==4},Kt=function(a){var r=[],l=[];return a.forEach(function(n){if(n.type===4){if(l.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(l),l=[];return}n.type!==31&&l.push(n)}),l.length&&r.push(l),r},oU=function(a,r){return r===11&&a.type===12||r===28&&a.type===29?!0:r===2&&a.type===3},Na=function(a){return a.type===17||a.type===15},ue=function(a){return a.type===16||Na(a)},Hm=function(a){return a.length>1?[a[0],a[1]]:[a[0]]},Me={type:17,number:0,flags:Tn},yf={type:16,number:50,flags:Tn},Ka={type:16,number:100,flags:Tn},vn=function(a,r,l){var n=a[0],s=a[1];return[VA(n,r),VA(typeof s<"u"?s:n,l)]},VA=function(a,r){if(a.type===16)return a.number/100*r;if(Dn(a))switch(a.unit){case"rem":case"em":return 16*a.number;case"px":default:return a.number}return a.number},Sm="deg",Im="grad",Tm="rad",Dm="turn",zi={name:"angle",parse:function(a,r){if(r.type===15)switch(r.unit){case Sm:return Math.PI*r.number/180;case Im:return Math.PI/200*r.number;case Tm:return r.number;case Dm:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},Mm=function(a){return a.type===15&&(a.unit===Sm||a.unit===Im||a.unit===Tm||a.unit===Dm)},Om=function(a){var r=a.filter(KA).map(function(l){return l.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Me,Me];case"to top":case"bottom":return Ft(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Me,Ka];case"to right":case"left":return Ft(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Ka,Ka];case"to bottom":case"top":return Ft(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Ka,Me];case"to left":case"right":return Ft(270)}return 0},Ft=function(a){return Math.PI*a/180},Va={name:"color",parse:function(a,r){if(r.type===18){var l=nU[r.name];if(typeof l>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return l(a,r.values)}if(r.type===5){if(r.value.length===3){var n=r.value.substring(0,1),s=r.value.substring(1,2),c=r.value.substring(2,3);return Ra(parseInt(n+n,16),parseInt(s+s,16),parseInt(c+c,16),1)}if(r.value.length===4){var n=r.value.substring(0,1),s=r.value.substring(1,2),c=r.value.substring(2,3),f=r.value.substring(3,4);return Ra(parseInt(n+n,16),parseInt(s+s,16),parseInt(c+c,16),parseInt(f+f,16)/255)}if(r.value.length===6){var n=r.value.substring(0,2),s=r.value.substring(2,4),c=r.value.substring(4,6);return Ra(parseInt(n,16),parseInt(s,16),parseInt(c,16),1)}if(r.value.length===8){var n=r.value.substring(0,2),s=r.value.substring(2,4),c=r.value.substring(4,6),f=r.value.substring(6,8);return Ra(parseInt(n,16),parseInt(s,16),parseInt(c,16),parseInt(f,16)/255)}}if(r.type===20){var g=na[r.value.toUpperCase()];if(typeof g<"u")return g}return na.TRANSPARENT}},Ga=function(a){return(255&a)===0},Ue=function(a){var r=255&a,l=255&a>>8,n=255&a>>16,s=255&a>>24;return r<255?"rgba("+s+","+n+","+l+","+r/255+")":"rgb("+s+","+n+","+l+")"},Ra=function(a,r,l,n){return(a<<24|r<<16|l<<8|Math.round(n*255)<<0)>>>0},i0=function(a,r){if(a.type===17)return a.number;if(a.type===16){var l=r===3?1:255;return r===3?a.number/100*l:Math.round(a.number/100*l)}return 0},s0=function(a,r){var l=r.filter(co);if(l.length===3){var n=l.map(i0),s=n[0],c=n[1],f=n[2];return Ra(s,c,f,1)}if(l.length===4){var g=l.map(i0),s=g[0],c=g[1],f=g[2],d=g[3];return Ra(s,c,f,d)}return 0};function _c(a,r,l){return l<0&&(l+=1),l>=1&&(l-=1),l<1/6?(r-a)*l*6+a:l<1/2?r:l<2/3?(r-a)*6*(2/3-l)+a:a}var u0=function(a,r){var l=r.filter(co),n=l[0],s=l[1],c=l[2],f=l[3],g=(n.type===17?Ft(n.number):zi.parse(a,n))/(Math.PI*2),d=ue(s)?s.number/100:0,h=ue(c)?c.number/100:0,p=typeof f<"u"&&ue(f)?VA(f,1):1;if(d===0)return Ra(h*255,h*255,h*255,1);var v=h<=.5?h*(d+1):h+d-h*d,w=h*2-v,S=_c(w,v,g+1/3),F=_c(w,v,g),y=_c(w,v,g-1/3);return Ra(S*255,F*255,y*255,p)},nU={hsl:u0,hsla:u0,rgb:s0,rgba:s0},Un=function(a,r){return Va.parse(a,bm.create(r).parseComponentValue())},na={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},lU={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(a,r){return r.map(function(l){if(KA(l))switch(l.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},iU={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Yi=function(a,r){var l=Va.parse(a,r[0]),n=r[1];return n&&ue(n)?{color:l,stop:n}:{color:l,stop:null}},c0=function(a,r){var l=a[0],n=a[a.length-1];l.stop===null&&(l.stop=Me),n.stop===null&&(n.stop=Ka);for(var s=[],c=0,f=0;f<a.length;f++){var g=a[f].stop;if(g!==null){var d=VA(g,r);d>c?s.push(d):s.push(c),c=d}else s.push(null)}for(var h=null,f=0;f<s.length;f++){var p=s[f];if(p===null)h===null&&(h=f);else if(h!==null){for(var v=f-h,w=s[h-1],S=(p-w)/(v+1),F=1;F<=v;F++)s[h+F-1]=S*F;h=null}}return a.map(function(y,b){var x=y.color;return{color:x,stop:Math.max(Math.min(1,s[b]/r),0)}})},sU=function(a,r,l){var n=r/2,s=l/2,c=VA(a[0],r)-n,f=s-VA(a[1],l);return(Math.atan2(f,c)+Math.PI*2)%(Math.PI*2)},uU=function(a,r,l){var n=typeof a=="number"?a:sU(a,r,l),s=Math.abs(r*Math.sin(n))+Math.abs(l*Math.cos(n)),c=r/2,f=l/2,g=s/2,d=Math.sin(n-Math.PI/2)*g,h=Math.cos(n-Math.PI/2)*g;return[s,c-h,c+h,f-d,f+d]},Ht=function(a,r){return Math.sqrt(a*a+r*r)},f0=function(a,r,l,n,s){var c=[[0,0],[0,r],[a,0],[a,r]];return c.reduce(function(f,g){var d=g[0],h=g[1],p=Ht(l-d,n-h);return(s?p<f.optimumDistance:p>f.optimumDistance)?{optimumCorner:g,optimumDistance:p}:f},{optimumDistance:s?1/0:-1/0,optimumCorner:null}).optimumCorner},cU=function(a,r,l,n,s){var c=0,f=0;switch(a.size){case 0:a.shape===0?c=f=Math.min(Math.abs(r),Math.abs(r-n),Math.abs(l),Math.abs(l-s)):a.shape===1&&(c=Math.min(Math.abs(r),Math.abs(r-n)),f=Math.min(Math.abs(l),Math.abs(l-s)));break;case 2:if(a.shape===0)c=f=Math.min(Ht(r,l),Ht(r,l-s),Ht(r-n,l),Ht(r-n,l-s));else if(a.shape===1){var g=Math.min(Math.abs(l),Math.abs(l-s))/Math.min(Math.abs(r),Math.abs(r-n)),d=f0(n,s,r,l,!0),h=d[0],p=d[1];c=Ht(h-r,(p-l)/g),f=g*c}break;case 1:a.shape===0?c=f=Math.max(Math.abs(r),Math.abs(r-n),Math.abs(l),Math.abs(l-s)):a.shape===1&&(c=Math.max(Math.abs(r),Math.abs(r-n)),f=Math.max(Math.abs(l),Math.abs(l-s)));break;case 3:if(a.shape===0)c=f=Math.max(Ht(r,l),Ht(r,l-s),Ht(r-n,l),Ht(r-n,l-s));else if(a.shape===1){var g=Math.max(Math.abs(l),Math.abs(l-s))/Math.max(Math.abs(r),Math.abs(r-n)),v=f0(n,s,r,l,!1),h=v[0],p=v[1];c=Ht(h-r,(p-l)/g),f=g*c}break}return Array.isArray(a.size)&&(c=VA(a.size[0],n),f=a.size.length===2?VA(a.size[1],s):c),[c,f]},fU=function(a,r){var l=Ft(180),n=[];return Kt(r).forEach(function(s,c){if(c===0){var f=s[0];if(f.type===20&&f.value==="to"){l=Om(s);return}else if(Mm(f)){l=zi.parse(a,f);return}}var g=Yi(a,s);n.push(g)}),{angle:l,stops:n,type:1}},hi=function(a,r){var l=Ft(180),n=[];return Kt(r).forEach(function(s,c){if(c===0){var f=s[0];if(f.type===20&&["top","left","right","bottom"].indexOf(f.value)!==-1){l=Om(s);return}else if(Mm(f)){l=(zi.parse(a,f)+Ft(270))%Ft(360);return}}var g=Yi(a,s);n.push(g)}),{angle:l,stops:n,type:1}},BU=function(a,r){var l=Ft(180),n=[],s=1,c=0,f=3,g=[];return Kt(r).forEach(function(d,h){var p=d[0];if(h===0){if(KA(p)&&p.value==="linear"){s=1;return}else if(KA(p)&&p.value==="radial"){s=2;return}}if(p.type===18){if(p.name==="from"){var v=Va.parse(a,p.values[0]);n.push({stop:Me,color:v})}else if(p.name==="to"){var v=Va.parse(a,p.values[0]);n.push({stop:Ka,color:v})}else if(p.name==="color-stop"){var w=p.values.filter(co);if(w.length===2){var v=Va.parse(a,w[1]),S=w[0];fo(S)&&n.push({stop:{type:16,number:S.number*100,flags:S.flags},color:v})}}}}),s===1?{angle:(l+Ft(180))%Ft(360),stops:n,type:s}:{size:f,shape:c,stops:n,position:g,type:s}},Lm="closest-side",Km="farthest-side",Rm="closest-corner",Vm="farthest-corner",Gm="circle",Nm="ellipse",zm="cover",Ym="contain",gU=function(a,r){var l=0,n=3,s=[],c=[];return Kt(r).forEach(function(f,g){var d=!0;if(g===0){var h=!1;d=f.reduce(function(v,w){if(h)if(KA(w))switch(w.value){case"center":return c.push(yf),v;case"top":case"left":return c.push(Me),v;case"right":case"bottom":return c.push(Ka),v}else(ue(w)||Na(w))&&c.push(w);else if(KA(w))switch(w.value){case Gm:return l=0,!1;case Nm:return l=1,!1;case"at":return h=!0,!1;case Lm:return n=0,!1;case zm:case Km:return n=1,!1;case Ym:case Rm:return n=2,!1;case Vm:return n=3,!1}else if(Na(w)||ue(w))return Array.isArray(n)||(n=[]),n.push(w),!1;return v},d)}if(d){var p=Yi(a,f);s.push(p)}}),{size:n,shape:l,stops:s,position:c,type:2}},mi=function(a,r){var l=0,n=3,s=[],c=[];return Kt(r).forEach(function(f,g){var d=!0;if(g===0?d=f.reduce(function(p,v){if(KA(v))switch(v.value){case"center":return c.push(yf),!1;case"top":case"left":return c.push(Me),!1;case"right":case"bottom":return c.push(Ka),!1}else if(ue(v)||Na(v))return c.push(v),!1;return p},d):g===1&&(d=f.reduce(function(p,v){if(KA(v))switch(v.value){case Gm:return l=0,!1;case Nm:return l=1,!1;case Ym:case Lm:return n=0,!1;case Km:return n=1,!1;case Rm:return n=2,!1;case zm:case Vm:return n=3,!1}else if(Na(v)||ue(v))return Array.isArray(n)||(n=[]),n.push(v),!1;return p},d)),d){var h=Yi(a,f);s.push(h)}}),{size:n,shape:l,stops:s,position:c,type:2}},dU=function(a){return a.type===1},hU=function(a){return a.type===2},Ff={name:"image",parse:function(a,r){if(r.type===22){var l={url:r.value,type:0};return a.cache.addImage(r.value),l}if(r.type===18){var n=km[r.name];if(typeof n>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return n(a,r.values)}throw new Error("Unsupported image type "+r.type)}};function mU(a){return!(a.type===20&&a.value==="none")&&(a.type!==18||!!km[a.name])}var km={"linear-gradient":fU,"-moz-linear-gradient":hi,"-ms-linear-gradient":hi,"-o-linear-gradient":hi,"-webkit-linear-gradient":hi,"radial-gradient":gU,"-moz-radial-gradient":mi,"-ms-radial-gradient":mi,"-o-radial-gradient":mi,"-webkit-radial-gradient":mi,"-webkit-gradient":BU},pU={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(a,r){if(r.length===0)return[];var l=r[0];return l.type===20&&l.value==="none"?[]:r.filter(function(n){return co(n)&&mU(n)}).map(function(n){return Ff.parse(a,n)})}},vU={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(a,r){return r.map(function(l){if(KA(l))switch(l.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},wU={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(a,r){return Kt(r).map(function(l){return l.filter(ue)}).map(Hm)}},CU={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(a,r){return Kt(r).map(function(l){return l.filter(KA).map(function(n){return n.value}).join(" ")}).map(QU)}},QU=function(a){switch(a){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},uo;(function(a){a.AUTO="auto",a.CONTAIN="contain",a.COVER="cover"})(uo||(uo={}));var UU={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(a,r){return Kt(r).map(function(l){return l.filter(yU)})}},yU=function(a){return KA(a)||ue(a)},ki=function(a){return{name:"border-"+a+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},FU=ki("top"),EU=ki("right"),xU=ki("bottom"),bU=ki("left"),Xi=function(a){return{name:"border-radius-"+a,initialValue:"0 0",prefix:!1,type:1,parse:function(r,l){return Hm(l.filter(ue))}}},_U=Xi("top-left"),HU=Xi("top-right"),SU=Xi("bottom-right"),IU=Xi("bottom-left"),Ji=function(a){return{name:"border-"+a+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,l){switch(l){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},TU=Ji("top"),DU=Ji("right"),MU=Ji("bottom"),OU=Ji("left"),Wi=function(a){return{name:"border-"+a+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,l){return Dn(l)?l.number:0}}},LU=Wi("top"),KU=Wi("right"),RU=Wi("bottom"),VU=Wi("left"),GU={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},NU={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(a,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},zU={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(a,r){return r.filter(KA).reduce(function(l,n){return l|YU(n.value)},0)}},YU=function(a){switch(a){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},kU={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(a,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},XU={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(a,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},Ii;(function(a){a.NORMAL="normal",a.STRICT="strict"})(Ii||(Ii={}));var JU={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(a,r){switch(r){case"strict":return Ii.STRICT;case"normal":default:return Ii.NORMAL}}},WU={name:"line-height",initialValue:"normal",prefix:!1,type:4},B0=function(a,r){return KA(a)&&a.value==="normal"?1.2*r:a.type===17?r*a.number:ue(a)?VA(a,r):r},ZU={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(a,r){return r.type===20&&r.value==="none"?null:Ff.parse(a,r)}},jU={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(a,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},uf={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(a,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Zi=function(a){return{name:"margin-"+a,initialValue:"0",prefix:!1,type:4}},qU=Zi("top"),PU=Zi("right"),$U=Zi("bottom"),Ay=Zi("left"),ey={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(a,r){return r.filter(KA).map(function(l){switch(l.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},ty={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(a,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},ji=function(a){return{name:"padding-"+a,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},ay=ji("top"),ry=ji("right"),oy=ji("bottom"),ny=ji("left"),ly={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(a,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},iy={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(a,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},sy={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(a,r){return r.length===1&&sf(r[0],"none")?[]:Kt(r).map(function(l){for(var n={color:na.TRANSPARENT,offsetX:Me,offsetY:Me,blur:Me},s=0,c=0;c<l.length;c++){var f=l[c];Na(f)?(s===0?n.offsetX=f:s===1?n.offsetY=f:n.blur=f,s++):n.color=Va.parse(a,f)}return n})}},uy={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(a,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},cy={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(a,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var l=gy[r.name];if(typeof l>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return l(r.values)}return null}},fy=function(a){var r=a.filter(function(l){return l.type===17}).map(function(l){return l.number});return r.length===6?r:null},By=function(a){var r=a.filter(function(d){return d.type===17}).map(function(d){return d.number}),l=r[0],n=r[1];r[2],r[3];var s=r[4],c=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var f=r[12],g=r[13];return r[14],r[15],r.length===16?[l,n,s,c,f,g]:null},gy={matrix:fy,matrix3d:By},g0={type:16,number:50,flags:Tn},dy=[g0,g0],hy={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(a,r){var l=r.filter(ue);return l.length!==2?dy:[l[0],l[1]]}},my={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(a,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},yn;(function(a){a.NORMAL="normal",a.BREAK_ALL="break-all",a.KEEP_ALL="keep-all"})(yn||(yn={}));var py={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(a,r){switch(r){case"break-all":return yn.BREAK_ALL;case"keep-all":return yn.KEEP_ALL;case"normal":default:return yn.NORMAL}}},vy={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(a,r){if(r.type===20)return{auto:!0,order:0};if(fo(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},Xm={name:"time",parse:function(a,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},wy={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(a,r){return fo(r)?r.number:1}},Cy={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Qy={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(a,r){return r.filter(KA).map(function(l){switch(l.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(l){return l!==0})}},Uy={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(a,r){var l=[],n=[];return r.forEach(function(s){switch(s.type){case 20:case 0:l.push(s.value);break;case 17:l.push(s.number.toString());break;case 4:n.push(l.join(" ")),l.length=0;break}}),l.length&&n.push(l.join(" ")),n.map(function(s){return s.indexOf(" ")===-1?s:"'"+s+"'"})}},yy={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Fy={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(a,r){if(fo(r))return r.number;if(KA(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Ey={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(a,r){return r.filter(KA).map(function(l){return l.value})}},xy={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(a,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},me=function(a,r){return(a&r)!==0},by={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(a,r){if(r.length===0)return[];var l=r[0];return l.type===20&&l.value==="none"?[]:r}},_y={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(a,r){if(r.length===0)return null;var l=r[0];if(l.type===20&&l.value==="none")return null;for(var n=[],s=r.filter(_m),c=0;c<s.length;c++){var f=s[c],g=s[c+1];if(f.type===20){var d=g&&fo(g)?g.number:1;n.push({counter:f.value,increment:d})}}return n}},Hy={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(a,r){if(r.length===0)return[];for(var l=[],n=r.filter(_m),s=0;s<n.length;s++){var c=n[s],f=n[s+1];if(KA(c)&&c.value!=="none"){var g=f&&fo(f)?f.number:0;l.push({counter:c.value,reset:g})}}return l}},Sy={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(a,r){return r.filter(Dn).map(function(l){return Xm.parse(a,l)})}},Iy={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(a,r){if(r.length===0)return null;var l=r[0];if(l.type===20&&l.value==="none")return null;var n=[],s=r.filter(rU);if(s.length%2!==0)return null;for(var c=0;c<s.length;c+=2){var f=s[c].value,g=s[c+1].value;n.push({open:f,close:g})}return n}},d0=function(a,r,l){if(!a)return"";var n=a[Math.min(r,a.length-1)];return n?l?n.open:n.close:""},Ty={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(a,r){return r.length===1&&sf(r[0],"none")?[]:Kt(r).map(function(l){for(var n={color:255,offsetX:Me,offsetY:Me,blur:Me,spread:Me,inset:!1},s=0,c=0;c<l.length;c++){var f=l[c];sf(f,"inset")?n.inset=!0:Na(f)?(s===0?n.offsetX=f:s===1?n.offsetY=f:s===2?n.blur=f:n.spread=f,s++):n.color=Va.parse(a,f)}return n})}},Dy={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(a,r){var l=[0,1,2],n=[];return r.filter(KA).forEach(function(s){switch(s.value){case"stroke":n.push(1);break;case"fill":n.push(0);break;case"markers":n.push(2);break}}),l.forEach(function(s){n.indexOf(s)===-1&&n.push(s)}),n}},My={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Oy={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(a,r){return Dn(r)?r.number:0}},Ly=(function(){function a(r,l){var n,s;this.animationDuration=AA(r,Sy,l.animationDuration),this.backgroundClip=AA(r,lU,l.backgroundClip),this.backgroundColor=AA(r,iU,l.backgroundColor),this.backgroundImage=AA(r,pU,l.backgroundImage),this.backgroundOrigin=AA(r,vU,l.backgroundOrigin),this.backgroundPosition=AA(r,wU,l.backgroundPosition),this.backgroundRepeat=AA(r,CU,l.backgroundRepeat),this.backgroundSize=AA(r,UU,l.backgroundSize),this.borderTopColor=AA(r,FU,l.borderTopColor),this.borderRightColor=AA(r,EU,l.borderRightColor),this.borderBottomColor=AA(r,xU,l.borderBottomColor),this.borderLeftColor=AA(r,bU,l.borderLeftColor),this.borderTopLeftRadius=AA(r,_U,l.borderTopLeftRadius),this.borderTopRightRadius=AA(r,HU,l.borderTopRightRadius),this.borderBottomRightRadius=AA(r,SU,l.borderBottomRightRadius),this.borderBottomLeftRadius=AA(r,IU,l.borderBottomLeftRadius),this.borderTopStyle=AA(r,TU,l.borderTopStyle),this.borderRightStyle=AA(r,DU,l.borderRightStyle),this.borderBottomStyle=AA(r,MU,l.borderBottomStyle),this.borderLeftStyle=AA(r,OU,l.borderLeftStyle),this.borderTopWidth=AA(r,LU,l.borderTopWidth),this.borderRightWidth=AA(r,KU,l.borderRightWidth),this.borderBottomWidth=AA(r,RU,l.borderBottomWidth),this.borderLeftWidth=AA(r,VU,l.borderLeftWidth),this.boxShadow=AA(r,Ty,l.boxShadow),this.color=AA(r,GU,l.color),this.direction=AA(r,NU,l.direction),this.display=AA(r,zU,l.display),this.float=AA(r,kU,l.cssFloat),this.fontFamily=AA(r,Uy,l.fontFamily),this.fontSize=AA(r,yy,l.fontSize),this.fontStyle=AA(r,xy,l.fontStyle),this.fontVariant=AA(r,Ey,l.fontVariant),this.fontWeight=AA(r,Fy,l.fontWeight),this.letterSpacing=AA(r,XU,l.letterSpacing),this.lineBreak=AA(r,JU,l.lineBreak),this.lineHeight=AA(r,WU,l.lineHeight),this.listStyleImage=AA(r,ZU,l.listStyleImage),this.listStylePosition=AA(r,jU,l.listStylePosition),this.listStyleType=AA(r,uf,l.listStyleType),this.marginTop=AA(r,qU,l.marginTop),this.marginRight=AA(r,PU,l.marginRight),this.marginBottom=AA(r,$U,l.marginBottom),this.marginLeft=AA(r,Ay,l.marginLeft),this.opacity=AA(r,wy,l.opacity);var c=AA(r,ey,l.overflow);this.overflowX=c[0],this.overflowY=c[c.length>1?1:0],this.overflowWrap=AA(r,ty,l.overflowWrap),this.paddingTop=AA(r,ay,l.paddingTop),this.paddingRight=AA(r,ry,l.paddingRight),this.paddingBottom=AA(r,oy,l.paddingBottom),this.paddingLeft=AA(r,ny,l.paddingLeft),this.paintOrder=AA(r,Dy,l.paintOrder),this.position=AA(r,iy,l.position),this.textAlign=AA(r,ly,l.textAlign),this.textDecorationColor=AA(r,Cy,(n=l.textDecorationColor)!==null&&n!==void 0?n:l.color),this.textDecorationLine=AA(r,Qy,(s=l.textDecorationLine)!==null&&s!==void 0?s:l.textDecoration),this.textShadow=AA(r,sy,l.textShadow),this.textTransform=AA(r,uy,l.textTransform),this.transform=AA(r,cy,l.transform),this.transformOrigin=AA(r,hy,l.transformOrigin),this.visibility=AA(r,my,l.visibility),this.webkitTextStrokeColor=AA(r,My,l.webkitTextStrokeColor),this.webkitTextStrokeWidth=AA(r,Oy,l.webkitTextStrokeWidth),this.wordBreak=AA(r,py,l.wordBreak),this.zIndex=AA(r,vy,l.zIndex)}return a.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},a.prototype.isTransparent=function(){return Ga(this.backgroundColor)},a.prototype.isTransformed=function(){return this.transform!==null},a.prototype.isPositioned=function(){return this.position!==0},a.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},a.prototype.isFloating=function(){return this.float!==0},a.prototype.isInlineLevel=function(){return me(this.display,4)||me(this.display,33554432)||me(this.display,268435456)||me(this.display,536870912)||me(this.display,67108864)||me(this.display,134217728)},a})(),Ky=(function(){function a(r,l){this.content=AA(r,by,l.content),this.quotes=AA(r,Iy,l.quotes)}return a})(),h0=(function(){function a(r,l){this.counterIncrement=AA(r,_y,l.counterIncrement),this.counterReset=AA(r,Hy,l.counterReset)}return a})(),AA=function(a,r,l){var n=new xm,s=l!==null&&typeof l<"u"?l.toString():r.initialValue;n.write(s);var c=new bm(n.read());switch(r.type){case 2:var f=c.parseComponentValue();return r.parse(a,KA(f)?f.value:r.initialValue);case 0:return r.parse(a,c.parseComponentValue());case 1:return r.parse(a,c.parseComponentValues());case 4:return c.parseComponentValue();case 3:switch(r.format){case"angle":return zi.parse(a,c.parseComponentValue());case"color":return Va.parse(a,c.parseComponentValue());case"image":return Ff.parse(a,c.parseComponentValue());case"length":var g=c.parseComponentValue();return Na(g)?g:Me;case"length-percentage":var d=c.parseComponentValue();return ue(d)?d:Me;case"time":return Xm.parse(a,c.parseComponentValue())}break}},Ry="data-html2canvas-debug",Vy=function(a){var r=a.getAttribute(Ry);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},cf=function(a,r){var l=Vy(a);return l===1||r===l},Rt=(function(){function a(r,l){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,cf(l,3))debugger;this.styles=new Ly(r,window.getComputedStyle(l,null)),gf(l)&&(this.styles.animationDuration.some(function(n){return n>0})&&(l.style.animationDuration="0s"),this.styles.transform!==null&&(l.style.transform="none")),this.bounds=Gi(this.context,l),cf(l,4)&&(this.flags|=16)}return a})(),Gy="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",m0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wn=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var pi=0;pi<m0.length;pi++)wn[m0.charCodeAt(pi)]=pi;var Ny=function(a){var r=a.length*.75,l=a.length,n,s=0,c,f,g,d;a[a.length-1]==="="&&(r--,a[a.length-2]==="="&&r--);var h=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),p=Array.isArray(h)?h:new Uint8Array(h);for(n=0;n<l;n+=4)c=wn[a.charCodeAt(n)],f=wn[a.charCodeAt(n+1)],g=wn[a.charCodeAt(n+2)],d=wn[a.charCodeAt(n+3)],p[s++]=c<<2|f>>4,p[s++]=(f&15)<<4|g>>2,p[s++]=(g&3)<<6|d&63;return h},zy=function(a){for(var r=a.length,l=[],n=0;n<r;n+=2)l.push(a[n+1]<<8|a[n]);return l},Yy=function(a){for(var r=a.length,l=[],n=0;n<r;n+=4)l.push(a[n+3]<<24|a[n+2]<<16|a[n+1]<<8|a[n]);return l},dr=5,Ef=11,Hc=2,ky=Ef-dr,Jm=65536>>dr,Xy=1<<dr,Sc=Xy-1,Jy=1024>>dr,Wy=Jm+Jy,Zy=Wy,jy=32,qy=Zy+jy,Py=65536>>Ef,$y=1<<ky,A1=$y-1,p0=function(a,r,l){return a.slice?a.slice(r,l):new Uint16Array(Array.prototype.slice.call(a,r,l))},e1=function(a,r,l){return a.slice?a.slice(r,l):new Uint32Array(Array.prototype.slice.call(a,r,l))},t1=function(a,r){var l=Ny(a),n=Array.isArray(l)?Yy(l):new Uint32Array(l),s=Array.isArray(l)?zy(l):new Uint16Array(l),c=24,f=p0(s,c/2,n[4]/2),g=n[5]===2?p0(s,(c+n[4])/2):e1(n,Math.ceil((c+n[4])/4));return new a1(n[0],n[1],n[2],n[3],f,g)},a1=(function(){function a(r,l,n,s,c,f){this.initialValue=r,this.errorValue=l,this.highStart=n,this.highValueIndex=s,this.index=c,this.data=f}return a.prototype.get=function(r){var l;if(r>=0){if(r<55296||r>56319&&r<=65535)return l=this.index[r>>dr],l=(l<<Hc)+(r&Sc),this.data[l];if(r<=65535)return l=this.index[Jm+(r-55296>>dr)],l=(l<<Hc)+(r&Sc),this.data[l];if(r<this.highStart)return l=qy-Py+(r>>Ef),l=this.index[l],l+=r>>dr&A1,l=this.index[l],l=(l<<Hc)+(r&Sc),this.data[l];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},a})(),v0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r1=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var vi=0;vi<v0.length;vi++)r1[v0.charCodeAt(vi)]=vi;var o1=1,Ic=2,Tc=3,w0=4,C0=5,n1=7,Q0=8,Dc=9,Mc=10,U0=11,y0=12,F0=13,E0=14,Oc=15,l1=function(a){for(var r=[],l=0,n=a.length;l<n;){var s=a.charCodeAt(l++);if(s>=55296&&s<=56319&&l<n){var c=a.charCodeAt(l++);(c&64512)===56320?r.push(((s&1023)<<10)+(c&1023)+65536):(r.push(s),l--)}else r.push(s)}return r},i1=function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,a);var l=a.length;if(!l)return"";for(var n=[],s=-1,c="";++s<l;){var f=a[s];f<=65535?n.push(f):(f-=65536,n.push((f>>10)+55296,f%1024+56320)),(s+1===l||n.length>16384)&&(c+=String.fromCharCode.apply(String,n),n.length=0)}return c},s1=t1(Gy),Ut="×",Lc="÷",u1=function(a){return s1.get(a)},c1=function(a,r,l){var n=l-2,s=r[n],c=r[l-1],f=r[l];if(c===Ic&&f===Tc)return Ut;if(c===Ic||c===Tc||c===w0||f===Ic||f===Tc||f===w0)return Lc;if(c===Q0&&[Q0,Dc,U0,y0].indexOf(f)!==-1||(c===U0||c===Dc)&&(f===Dc||f===Mc)||(c===y0||c===Mc)&&f===Mc||f===F0||f===C0||f===n1||c===o1)return Ut;if(c===F0&&f===E0){for(;s===C0;)s=r[--n];if(s===E0)return Ut}if(c===Oc&&f===Oc){for(var g=0;s===Oc;)g++,s=r[--n];if(g%2===0)return Ut}return Lc},f1=function(a){var r=l1(a),l=r.length,n=0,s=0,c=r.map(u1);return{next:function(){if(n>=l)return{done:!0,value:null};for(var f=Ut;n<l&&(f=c1(r,c,++n))===Ut;);if(f!==Ut||n===l){var g=i1.apply(null,r.slice(s,n));return s=n,{value:g,done:!1}}return{done:!0,value:null}}}},B1=function(a){for(var r=f1(a),l=[],n;!(n=r.next()).done;)n.value&&l.push(n.value.slice());return l},g1=function(a){var r=123;if(a.createRange){var l=a.createRange();if(l.getBoundingClientRect){var n=a.createElement("boundtest");n.style.height=r+"px",n.style.display="block",a.body.appendChild(n),l.selectNode(n);var s=l.getBoundingClientRect(),c=Math.round(s.height);if(a.body.removeChild(n),c===r)return!0}}return!1},d1=function(a){var r=a.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",a.body.appendChild(r);var l=a.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var n=r.firstChild,s=Ni(n.data).map(function(d){return ae(d)}),c=0,f={},g=s.every(function(d,h){l.setStart(n,c),l.setEnd(n,c+d.length);var p=l.getBoundingClientRect();c+=d.length;var v=p.x>f.x||p.y>f.y;return f=p,h===0?!0:v});return a.body.removeChild(r),g},h1=function(){return typeof new Image().crossOrigin<"u"},m1=function(){return typeof new XMLHttpRequest().responseType=="string"},p1=function(a){var r=new Image,l=a.createElement("canvas"),n=l.getContext("2d");if(!n)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(r,0,0),l.toDataURL()}catch{return!1}return!0},x0=function(a){return a[0]===0&&a[1]===255&&a[2]===0&&a[3]===255},v1=function(a){var r=a.createElement("canvas"),l=100;r.width=l,r.height=l;var n=r.getContext("2d");if(!n)return Promise.reject(!1);n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,l,l);var s=new Image,c=r.toDataURL();s.src=c;var f=ff(l,l,0,0,s);return n.fillStyle="red",n.fillRect(0,0,l,l),b0(f).then(function(g){n.drawImage(g,0,0);var d=n.getImageData(0,0,l,l).data;n.fillStyle="red",n.fillRect(0,0,l,l);var h=a.createElement("div");return h.style.backgroundImage="url("+c+")",h.style.height=l+"px",x0(d)?b0(ff(l,l,0,0,h)):Promise.reject(!1)}).then(function(g){return n.drawImage(g,0,0),x0(n.getImageData(0,0,l,l).data)}).catch(function(){return!1})},ff=function(a,r,l,n,s){var c="http://www.w3.org/2000/svg",f=document.createElementNS(c,"svg"),g=document.createElementNS(c,"foreignObject");return f.setAttributeNS(null,"width",a.toString()),f.setAttributeNS(null,"height",r.toString()),g.setAttributeNS(null,"width","100%"),g.setAttributeNS(null,"height","100%"),g.setAttributeNS(null,"x",l.toString()),g.setAttributeNS(null,"y",n.toString()),g.setAttributeNS(null,"externalResourcesRequired","true"),f.appendChild(g),g.appendChild(s),f},b0=function(a){return new Promise(function(r,l){var n=new Image;n.onload=function(){return r(n)},n.onerror=l,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(a))})},De={get SUPPORT_RANGE_BOUNDS(){var a=g1(document);return Object.defineProperty(De,"SUPPORT_RANGE_BOUNDS",{value:a}),a},get SUPPORT_WORD_BREAKING(){var a=De.SUPPORT_RANGE_BOUNDS&&d1(document);return Object.defineProperty(De,"SUPPORT_WORD_BREAKING",{value:a}),a},get SUPPORT_SVG_DRAWING(){var a=p1(document);return Object.defineProperty(De,"SUPPORT_SVG_DRAWING",{value:a}),a},get SUPPORT_FOREIGNOBJECT_DRAWING(){var a=typeof Array.from=="function"&&typeof window.fetch=="function"?v1(document):Promise.resolve(!1);return Object.defineProperty(De,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:a}),a},get SUPPORT_CORS_IMAGES(){var a=h1();return Object.defineProperty(De,"SUPPORT_CORS_IMAGES",{value:a}),a},get SUPPORT_RESPONSE_TYPE(){var a=m1();return Object.defineProperty(De,"SUPPORT_RESPONSE_TYPE",{value:a}),a},get SUPPORT_CORS_XHR(){var a="withCredentials"in new XMLHttpRequest;return Object.defineProperty(De,"SUPPORT_CORS_XHR",{value:a}),a},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var a=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(De,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:a}),a}},Fn=(function(){function a(r,l){this.text=r,this.bounds=l}return a})(),w1=function(a,r,l,n){var s=U1(r,l),c=[],f=0;return s.forEach(function(g){if(l.textDecorationLine.length||g.trim().length>0)if(De.SUPPORT_RANGE_BOUNDS){var d=_0(n,f,g.length).getClientRects();if(d.length>1){var h=xf(g),p=0;h.forEach(function(w){c.push(new Fn(w,la.fromDOMRectList(a,_0(n,p+f,w.length).getClientRects()))),p+=w.length})}else c.push(new Fn(g,la.fromDOMRectList(a,d)))}else{var v=n.splitText(g.length);c.push(new Fn(g,C1(a,n))),n=v}else De.SUPPORT_RANGE_BOUNDS||(n=n.splitText(g.length));f+=g.length}),c},C1=function(a,r){var l=r.ownerDocument;if(l){var n=l.createElement("html2canvaswrapper");n.appendChild(r.cloneNode(!0));var s=r.parentNode;if(s){s.replaceChild(n,r);var c=Gi(a,n);return n.firstChild&&s.replaceChild(n.firstChild,n),c}}return la.EMPTY},_0=function(a,r,l){var n=a.ownerDocument;if(!n)throw new Error("Node has no owner document");var s=n.createRange();return s.setStart(a,r),s.setEnd(a,r+l),s},xf=function(a){if(De.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(a)).map(function(l){return l.segment})}return B1(a)},Q1=function(a,r){if(De.SUPPORT_NATIVE_TEXT_SEGMENTATION){var l=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(l.segment(a)).map(function(n){return n.segment})}return F1(a,r)},U1=function(a,r){return r.letterSpacing!==0?xf(a):Q1(a,r)},y1=[32,160,4961,65792,65793,4153,4241],F1=function(a,r){for(var l=PC(a,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),n=[],s,c=function(){if(s.value){var f=s.value.slice(),g=Ni(f),d="";g.forEach(function(h){y1.indexOf(h)===-1?d+=ae(h):(d.length&&n.push(d),n.push(ae(h)),d="")}),d.length&&n.push(d)}};!(s=l.next()).done;)c();return n},E1=(function(){function a(r,l,n){this.text=x1(l.data,n.textTransform),this.textBounds=w1(r,this.text,n,l)}return a})(),x1=function(a,r){switch(r){case 1:return a.toLowerCase();case 3:return a.replace(b1,_1);case 2:return a.toUpperCase();default:return a}},b1=/(^|\s|:|-|\(|\))([a-z])/g,_1=function(a,r,l){return a.length>0?r+l.toUpperCase():a},Wm=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.src=n.currentSrc||n.src,s.intrinsicWidth=n.naturalWidth,s.intrinsicHeight=n.naturalHeight,s.context.cache.addImage(s.src),s}return r})(Rt),Zm=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.canvas=n,s.intrinsicWidth=n.width,s.intrinsicHeight=n.height,s}return r})(Rt),jm=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this,c=new XMLSerializer,f=Gi(l,n);return n.setAttribute("width",f.width+"px"),n.setAttribute("height",f.height+"px"),s.svg="data:image/svg+xml,"+encodeURIComponent(c.serializeToString(n)),s.intrinsicWidth=n.width.baseVal.value,s.intrinsicHeight=n.height.baseVal.value,s.context.cache.addImage(s.svg),s}return r})(Rt),qm=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.value=n.value,s}return r})(Rt),Bf=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.start=n.start,s.reversed=typeof n.reversed=="boolean"&&n.reversed===!0,s}return r})(Rt),H1=[{type:15,flags:0,unit:"px",number:3}],S1=[{type:16,flags:0,number:50}],I1=function(a){return a.width>a.height?new la(a.left+(a.width-a.height)/2,a.top,a.height,a.height):a.width<a.height?new la(a.left,a.top+(a.height-a.width)/2,a.width,a.width):a},T1=function(a){var r=a.type===D1?new Array(a.value.length+1).join("•"):a.value;return r.length===0?a.placeholder||"":r},Ti="checkbox",Di="radio",D1="password",H0=707406591,bf=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;switch(s.type=n.type.toLowerCase(),s.checked=n.checked,s.value=T1(n),(s.type===Ti||s.type===Di)&&(s.styles.backgroundColor=3739148031,s.styles.borderTopColor=s.styles.borderRightColor=s.styles.borderBottomColor=s.styles.borderLeftColor=2779096575,s.styles.borderTopWidth=s.styles.borderRightWidth=s.styles.borderBottomWidth=s.styles.borderLeftWidth=1,s.styles.borderTopStyle=s.styles.borderRightStyle=s.styles.borderBottomStyle=s.styles.borderLeftStyle=1,s.styles.backgroundClip=[0],s.styles.backgroundOrigin=[0],s.bounds=I1(s.bounds)),s.type){case Ti:s.styles.borderTopRightRadius=s.styles.borderTopLeftRadius=s.styles.borderBottomRightRadius=s.styles.borderBottomLeftRadius=H1;break;case Di:s.styles.borderTopRightRadius=s.styles.borderTopLeftRadius=s.styles.borderBottomRightRadius=s.styles.borderBottomLeftRadius=S1;break}return s}return r})(Rt),Pm=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this,c=n.options[n.selectedIndex||0];return s.value=c&&c.text||"",s}return r})(Rt),$m=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.value=n.value,s}return r})(Rt),Ap=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;s.src=n.src,s.width=parseInt(n.width,10)||0,s.height=parseInt(n.height,10)||0,s.backgroundColor=s.styles.backgroundColor;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.documentElement){s.tree=tp(l,n.contentWindow.document.documentElement);var c=n.contentWindow.document.documentElement?Un(l,getComputedStyle(n.contentWindow.document.documentElement).backgroundColor):na.TRANSPARENT,f=n.contentWindow.document.body?Un(l,getComputedStyle(n.contentWindow.document.body).backgroundColor):na.TRANSPARENT;s.backgroundColor=Ga(c)?Ga(f)?s.styles.backgroundColor:f:c}}catch{}return s}return r})(Rt),M1=["OL","UL","MENU"],bi=function(a,r,l,n){for(var s=r.firstChild,c=void 0;s;s=c)if(c=s.nextSibling,ap(s)&&s.data.trim().length>0)l.textNodes.push(new E1(a,s,l.styles));else if(so(s))if(lp(s)&&s.assignedNodes)s.assignedNodes().forEach(function(g){return bi(a,g,l,n)});else{var f=ep(a,s);f.styles.isVisible()&&(O1(s,f,n)?f.flags|=4:L1(f.styles)&&(f.flags|=2),M1.indexOf(s.tagName)!==-1&&(f.flags|=8),l.elements.push(f),s.slot,s.shadowRoot?bi(a,s.shadowRoot,f,n):!Mi(s)&&!rp(s)&&!Oi(s)&&bi(a,s,f,n))}},ep=function(a,r){return df(r)?new Wm(a,r):op(r)?new Zm(a,r):rp(r)?new jm(a,r):K1(r)?new qm(a,r):R1(r)?new Bf(a,r):V1(r)?new bf(a,r):Oi(r)?new Pm(a,r):Mi(r)?new $m(a,r):np(r)?new Ap(a,r):new Rt(a,r)},tp=function(a,r){var l=ep(a,r);return l.flags|=4,bi(a,r,l,l),l},O1=function(a,r,l){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||_f(a)&&l.styles.isTransparent()},L1=function(a){return a.isPositioned()||a.isFloating()},ap=function(a){return a.nodeType===Node.TEXT_NODE},so=function(a){return a.nodeType===Node.ELEMENT_NODE},gf=function(a){return so(a)&&typeof a.style<"u"&&!_i(a)},_i=function(a){return typeof a.className=="object"},K1=function(a){return a.tagName==="LI"},R1=function(a){return a.tagName==="OL"},V1=function(a){return a.tagName==="INPUT"},G1=function(a){return a.tagName==="HTML"},rp=function(a){return a.tagName==="svg"},_f=function(a){return a.tagName==="BODY"},op=function(a){return a.tagName==="CANVAS"},S0=function(a){return a.tagName==="VIDEO"},df=function(a){return a.tagName==="IMG"},np=function(a){return a.tagName==="IFRAME"},I0=function(a){return a.tagName==="STYLE"},N1=function(a){return a.tagName==="SCRIPT"},Mi=function(a){return a.tagName==="TEXTAREA"},Oi=function(a){return a.tagName==="SELECT"},lp=function(a){return a.tagName==="SLOT"},T0=function(a){return a.tagName.indexOf("-")>0},z1=(function(){function a(){this.counters={}}return a.prototype.getCounterValue=function(r){var l=this.counters[r];return l&&l.length?l[l.length-1]:1},a.prototype.getCounterValues=function(r){var l=this.counters[r];return l||[]},a.prototype.pop=function(r){var l=this;r.forEach(function(n){return l.counters[n].pop()})},a.prototype.parse=function(r){var l=this,n=r.counterIncrement,s=r.counterReset,c=!0;n!==null&&n.forEach(function(g){var d=l.counters[g.counter];d&&g.increment!==0&&(c=!1,d.length||d.push(1),d[Math.max(0,d.length-1)]+=g.increment)});var f=[];return c&&s.forEach(function(g){var d=l.counters[g.counter];f.push(g.counter),d||(d=l.counters[g.counter]=[]),d.push(g.reset)}),f},a})(),D0={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},M0={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},Y1={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},k1={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},ro=function(a,r,l,n,s,c){return a<r||a>l?Hn(a,s,c.length>0):n.integers.reduce(function(f,g,d){for(;a>=g;)a-=g,f+=n.values[d];return f},"")+c},ip=function(a,r,l,n){var s="";do l||a--,s=n(a)+s,a/=r;while(a*r>=r);return s},Ae=function(a,r,l,n,s){var c=l-r+1;return(a<0?"-":"")+(ip(Math.abs(a),c,n,function(f){return ae(Math.floor(f%c)+r)})+s)},ur=function(a,r,l){l===void 0&&(l=". ");var n=r.length;return ip(Math.abs(a),n,!1,function(s){return r[Math.floor(s%n)]})+l},lo=1,Da=2,Ma=4,Cn=8,oa=function(a,r,l,n,s,c){if(a<-9999||a>9999)return Hn(a,4,s.length>0);var f=Math.abs(a),g=s;if(f===0)return r[0]+g;for(var d=0;f>0&&d<=4;d++){var h=f%10;h===0&&me(c,lo)&&g!==""?g=r[h]+g:h>1||h===1&&d===0||h===1&&d===1&&me(c,Da)||h===1&&d===1&&me(c,Ma)&&a>100||h===1&&d>1&&me(c,Cn)?g=r[h]+(d>0?l[d-1]:"")+g:h===1&&d>0&&(g=l[d-1]+g),f=Math.floor(f/10)}return(a<0?n:"")+g},O0="十百千萬",L0="拾佰仟萬",K0="マイナス",Kc="마이너스",Hn=function(a,r,l){var n=l?". ":"",s=l?"、":"",c=l?", ":"",f=l?" ":"";switch(r){case 0:return"•"+f;case 1:return"◦"+f;case 2:return"◾"+f;case 5:var g=Ae(a,48,57,!0,n);return g.length<4?"0"+g:g;case 4:return ur(a,"〇一二三四五六七八九",s);case 6:return ro(a,1,3999,D0,3,n).toLowerCase();case 7:return ro(a,1,3999,D0,3,n);case 8:return Ae(a,945,969,!1,n);case 9:return Ae(a,97,122,!1,n);case 10:return Ae(a,65,90,!1,n);case 11:return Ae(a,1632,1641,!0,n);case 12:case 49:return ro(a,1,9999,M0,3,n);case 35:return ro(a,1,9999,M0,3,n).toLowerCase();case 13:return Ae(a,2534,2543,!0,n);case 14:case 30:return Ae(a,6112,6121,!0,n);case 15:return ur(a,"子丑寅卯辰巳午未申酉戌亥",s);case 16:return ur(a,"甲乙丙丁戊己庚辛壬癸",s);case 17:case 48:return oa(a,"零一二三四五六七八九",O0,"負",s,Da|Ma|Cn);case 47:return oa(a,"零壹貳參肆伍陸柒捌玖",L0,"負",s,lo|Da|Ma|Cn);case 42:return oa(a,"零一二三四五六七八九",O0,"负",s,Da|Ma|Cn);case 41:return oa(a,"零壹贰叁肆伍陆柒捌玖",L0,"负",s,lo|Da|Ma|Cn);case 26:return oa(a,"〇一二三四五六七八九","十百千万",K0,s,0);case 25:return oa(a,"零壱弐参四伍六七八九","拾百千万",K0,s,lo|Da|Ma);case 31:return oa(a,"영일이삼사오육칠팔구","십백천만",Kc,c,lo|Da|Ma);case 33:return oa(a,"零一二三四五六七八九","十百千萬",Kc,c,0);case 32:return oa(a,"零壹貳參四五六七八九","拾百千",Kc,c,lo|Da|Ma);case 18:return Ae(a,2406,2415,!0,n);case 20:return ro(a,1,19999,k1,3,n);case 21:return Ae(a,2790,2799,!0,n);case 22:return Ae(a,2662,2671,!0,n);case 22:return ro(a,1,10999,Y1,3,n);case 23:return ur(a,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return ur(a,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Ae(a,3302,3311,!0,n);case 28:return ur(a,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",s);case 29:return ur(a,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",s);case 34:return Ae(a,3792,3801,!0,n);case 37:return Ae(a,6160,6169,!0,n);case 38:return Ae(a,4160,4169,!0,n);case 39:return Ae(a,2918,2927,!0,n);case 40:return Ae(a,1776,1785,!0,n);case 43:return Ae(a,3046,3055,!0,n);case 44:return Ae(a,3174,3183,!0,n);case 45:return Ae(a,3664,3673,!0,n);case 46:return Ae(a,3872,3881,!0,n);case 3:default:return Ae(a,48,57,!0,n)}},sp="data-html2canvas-ignore",R0=(function(){function a(r,l,n){if(this.context=r,this.options=n,this.scrolledElements=[],this.referenceElement=l,this.counters=new z1,this.quoteDepth=0,!l.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(l.ownerDocument.documentElement,!1)}return a.prototype.toIFrame=function(r,l){var n=this,s=X1(r,l);if(!s.contentWindow)return Promise.reject("Unable to find iframe window");var c=r.defaultView.pageXOffset,f=r.defaultView.pageYOffset,g=s.contentWindow,d=g.document,h=Z1(s).then(function(){return Xe(n,void 0,void 0,function(){var p,v;return Ge(this,function(w){switch(w.label){case 0:return this.scrolledElements.forEach($1),g&&(g.scrollTo(l.left,l.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(g.scrollY!==l.top||g.scrollX!==l.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(g.scrollX-l.left,g.scrollY-l.top,0,0))),p=this.options.onclone,v=this.clonedReferenceElement,typeof v>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:d.fonts&&d.fonts.ready?[4,d.fonts.ready]:[3,2];case 1:w.sent(),w.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,W1(d)]:[3,4];case 3:w.sent(),w.label=4;case 4:return typeof p=="function"?[2,Promise.resolve().then(function(){return p(d,v)}).then(function(){return s})]:[2,s]}})})});return d.open(),d.write(q1(document.doctype)+"<html></html>"),P1(this.referenceElement.ownerDocument,c,f),d.replaceChild(d.adoptNode(this.documentElement),d.documentElement),d.close(),h},a.prototype.createElementClone=function(r){if(cf(r,2))debugger;if(op(r))return this.createCanvasClone(r);if(S0(r))return this.createVideoClone(r);if(I0(r))return this.createStyleClone(r);var l=r.cloneNode(!1);return df(l)&&(df(r)&&r.currentSrc&&r.currentSrc!==r.src&&(l.src=r.currentSrc,l.srcset=""),l.loading==="lazy"&&(l.loading="eager")),T0(l)?this.createCustomElementClone(l):l},a.prototype.createCustomElementClone=function(r){var l=document.createElement("html2canvascustomelement");return Rc(r.style,l),l},a.prototype.createStyleClone=function(r){try{var l=r.sheet;if(l&&l.cssRules){var n=[].slice.call(l.cssRules,0).reduce(function(c,f){return f&&typeof f.cssText=="string"?c+f.cssText:c},""),s=r.cloneNode(!1);return s.textContent=n,s}}catch(c){if(this.context.logger.error("Unable to access cssRules property",c),c.name!=="SecurityError")throw c}return r.cloneNode(!1)},a.prototype.createCanvasClone=function(r){var l;if(this.options.inlineImages&&r.ownerDocument){var n=r.ownerDocument.createElement("img");try{return n.src=r.toDataURL(),n}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var s=r.cloneNode(!1);try{s.width=r.width,s.height=r.height;var c=r.getContext("2d"),f=s.getContext("2d");if(f)if(!this.options.allowTaint&&c)f.putImageData(c.getImageData(0,0,r.width,r.height),0,0);else{var g=(l=r.getContext("webgl2"))!==null&&l!==void 0?l:r.getContext("webgl");if(g){var d=g.getContextAttributes();(d==null?void 0:d.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}f.drawImage(r,0,0)}return s}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return s},a.prototype.createVideoClone=function(r){var l=r.ownerDocument.createElement("canvas");l.width=r.offsetWidth,l.height=r.offsetHeight;var n=l.getContext("2d");try{return n&&(n.drawImage(r,0,0,l.width,l.height),this.options.allowTaint||n.getImageData(0,0,l.width,l.height)),l}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var s=r.ownerDocument.createElement("canvas");return s.width=r.offsetWidth,s.height=r.offsetHeight,s},a.prototype.appendChildNode=function(r,l,n){(!so(l)||!N1(l)&&!l.hasAttribute(sp)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(l)))&&(!this.options.copyStyles||!so(l)||!I0(l))&&r.appendChild(this.cloneNode(l,n))},a.prototype.cloneChildNodes=function(r,l,n){for(var s=this,c=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;c;c=c.nextSibling)if(so(c)&&lp(c)&&typeof c.assignedNodes=="function"){var f=c.assignedNodes();f.length&&f.forEach(function(g){return s.appendChildNode(l,g,n)})}else this.appendChildNode(l,c,n)},a.prototype.cloneNode=function(r,l){if(ap(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var n=r.ownerDocument.defaultView;if(n&&so(r)&&(gf(r)||_i(r))){var s=this.createElementClone(r);s.style.transitionProperty="none";var c=n.getComputedStyle(r),f=n.getComputedStyle(r,":before"),g=n.getComputedStyle(r,":after");this.referenceElement===r&&gf(s)&&(this.clonedReferenceElement=s),_f(s)&&tF(s);var d=this.counters.parse(new h0(this.context,c)),h=this.resolvePseudoContent(r,s,f,En.BEFORE);T0(r)&&(l=!0),S0(r)||this.cloneChildNodes(r,s,l),h&&s.insertBefore(h,s.firstChild);var p=this.resolvePseudoContent(r,s,g,En.AFTER);return p&&s.appendChild(p),this.counters.pop(d),(c&&(this.options.copyStyles||_i(r))&&!np(r)||l)&&Rc(c,s),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([s,r.scrollLeft,r.scrollTop]),(Mi(r)||Oi(r))&&(Mi(s)||Oi(s))&&(s.value=r.value),s}return r.cloneNode(!1)},a.prototype.resolvePseudoContent=function(r,l,n,s){var c=this;if(n){var f=n.content,g=l.ownerDocument;if(!(!g||!f||f==="none"||f==="-moz-alt-content"||n.display==="none")){this.counters.parse(new h0(this.context,n));var d=new Ky(this.context,n),h=g.createElement("html2canvaspseudoelement");Rc(n,h),d.content.forEach(function(v){if(v.type===0)h.appendChild(g.createTextNode(v.value));else if(v.type===22){var w=g.createElement("img");w.src=v.value,w.style.opacity="1",h.appendChild(w)}else if(v.type===18){if(v.name==="attr"){var S=v.values.filter(KA);S.length&&h.appendChild(g.createTextNode(r.getAttribute(S[0].value)||""))}else if(v.name==="counter"){var F=v.values.filter(co),y=F[0],b=F[1];if(y&&KA(y)){var x=c.counters.getCounterValue(y.value),M=b&&KA(b)?uf.parse(c.context,b.value):3;h.appendChild(g.createTextNode(Hn(x,M,!1)))}}else if(v.name==="counters"){var z=v.values.filter(co),y=z[0],V=z[1],b=z[2];if(y&&KA(y)){var D=c.counters.getCounterValues(y.value),K=b&&KA(b)?uf.parse(c.context,b.value):3,Y=V&&V.type===0?V.value:"",Z=D.map(function(oA){return Hn(oA,K,!1)}).join(Y);h.appendChild(g.createTextNode(Z))}}}else if(v.type===20)switch(v.value){case"open-quote":h.appendChild(g.createTextNode(d0(d.quotes,c.quoteDepth++,!0)));break;case"close-quote":h.appendChild(g.createTextNode(d0(d.quotes,--c.quoteDepth,!1)));break;default:h.appendChild(g.createTextNode(v.value))}}),h.className=hf+" "+mf;var p=s===En.BEFORE?" "+hf:" "+mf;return _i(l)?l.className.baseValue+=p:l.className+=p,h}}},a.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},a})(),En;(function(a){a[a.BEFORE=0]="BEFORE",a[a.AFTER=1]="AFTER"})(En||(En={}));var X1=function(a,r){var l=a.createElement("iframe");return l.className="html2canvas-container",l.style.visibility="hidden",l.style.position="fixed",l.style.left="-10000px",l.style.top="0px",l.style.border="0",l.width=r.width.toString(),l.height=r.height.toString(),l.scrolling="no",l.setAttribute(sp,"true"),a.body.appendChild(l),l},J1=function(a){return new Promise(function(r){if(a.complete){r();return}if(!a.src){r();return}a.onload=r,a.onerror=r})},W1=function(a){return Promise.all([].slice.call(a.images,0).map(J1))},Z1=function(a){return new Promise(function(r,l){var n=a.contentWindow;if(!n)return l("No window assigned for iframe");var s=n.document;n.onload=a.onload=function(){n.onload=a.onload=null;var c=setInterval(function(){s.body.childNodes.length>0&&s.readyState==="complete"&&(clearInterval(c),r(a))},50)}})},j1=["all","d","content"],Rc=function(a,r){for(var l=a.length-1;l>=0;l--){var n=a.item(l);j1.indexOf(n)===-1&&r.style.setProperty(n,a.getPropertyValue(n))}return r},q1=function(a){var r="";return a&&(r+="<!DOCTYPE ",a.name&&(r+=a.name),a.internalSubset&&(r+=a.internalSubset),a.publicId&&(r+='"'+a.publicId+'"'),a.systemId&&(r+='"'+a.systemId+'"'),r+=">"),r},P1=function(a,r,l){a&&a.defaultView&&(r!==a.defaultView.pageXOffset||l!==a.defaultView.pageYOffset)&&a.defaultView.scrollTo(r,l)},$1=function(a){var r=a[0],l=a[1],n=a[2];r.scrollLeft=l,r.scrollTop=n},AF=":before",eF=":after",hf="___html2canvas___pseudoelement_before",mf="___html2canvas___pseudoelement_after",V0=`{
    content: "" !important;
    display: none !important;
}`,tF=function(a){aF(a,"."+hf+AF+V0+`
         .`+mf+eF+V0)},aF=function(a,r){var l=a.ownerDocument;if(l){var n=l.createElement("style");n.textContent=r,a.appendChild(n)}},up=(function(){function a(){}return a.getOrigin=function(r){var l=a._link;return l?(l.href=r,l.href=l.href,l.protocol+l.hostname+l.port):"about:blank"},a.isSameOrigin=function(r){return a.getOrigin(r)===a._origin},a.setContext=function(r){a._link=r.document.createElement("a"),a._origin=a.getOrigin(r.location.href)},a._origin="about:blank",a})(),rF=(function(){function a(r,l){this.context=r,this._options=l,this._cache={}}return a.prototype.addImage=function(r){var l=Promise.resolve();return this.has(r)||(Gc(r)||iF(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),l},a.prototype.match=function(r){return this._cache[r]},a.prototype.loadImage=function(r){return Xe(this,void 0,void 0,function(){var l,n,s,c,f=this;return Ge(this,function(g){switch(g.label){case 0:return l=up.isSameOrigin(r),n=!Vc(r)&&this._options.useCORS===!0&&De.SUPPORT_CORS_IMAGES&&!l,s=!Vc(r)&&!l&&!Gc(r)&&typeof this._options.proxy=="string"&&De.SUPPORT_CORS_XHR&&!n,!l&&this._options.allowTaint===!1&&!Vc(r)&&!Gc(r)&&!s&&!n?[2]:(c=r,s?[4,this.proxy(c)]:[3,2]);case 1:c=g.sent(),g.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(d,h){var p=new Image;p.onload=function(){return d(p)},p.onerror=h,(sF(c)||n)&&(p.crossOrigin="anonymous"),p.src=c,p.complete===!0&&setTimeout(function(){return d(p)},500),f._options.imageTimeout>0&&setTimeout(function(){return h("Timed out ("+f._options.imageTimeout+"ms) loading image")},f._options.imageTimeout)})];case 3:return[2,g.sent()]}})})},a.prototype.has=function(r){return typeof this._cache[r]<"u"},a.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},a.prototype.proxy=function(r){var l=this,n=this._options.proxy;if(!n)throw new Error("No proxy defined");var s=r.substring(0,256);return new Promise(function(c,f){var g=De.SUPPORT_RESPONSE_TYPE?"blob":"text",d=new XMLHttpRequest;d.onload=function(){if(d.status===200)if(g==="text")c(d.response);else{var v=new FileReader;v.addEventListener("load",function(){return c(v.result)},!1),v.addEventListener("error",function(w){return f(w)},!1),v.readAsDataURL(d.response)}else f("Failed to proxy resource "+s+" with status code "+d.status)},d.onerror=f;var h=n.indexOf("?")>-1?"&":"?";if(d.open("GET",""+n+h+"url="+encodeURIComponent(r)+"&responseType="+g),g!=="text"&&d instanceof XMLHttpRequest&&(d.responseType=g),l._options.imageTimeout){var p=l._options.imageTimeout;d.timeout=p,d.ontimeout=function(){return f("Timed out ("+p+"ms) proxying "+s)}}d.send()})},a})(),oF=/^data:image\/svg\+xml/i,nF=/^data:image\/.*;base64,/i,lF=/^data:image\/.*/i,iF=function(a){return De.SUPPORT_SVG_DRAWING||!uF(a)},Vc=function(a){return lF.test(a)},sF=function(a){return nF.test(a)},Gc=function(a){return a.substr(0,4)==="blob"},uF=function(a){return a.substr(-3).toLowerCase()==="svg"||oF.test(a)},P=(function(){function a(r,l){this.type=0,this.x=r,this.y=l}return a.prototype.add=function(r,l){return new a(this.x+r,this.y+l)},a})(),oo=function(a,r,l){return new P(a.x+(r.x-a.x)*l,a.y+(r.y-a.y)*l)},wi=(function(){function a(r,l,n,s){this.type=1,this.start=r,this.startControl=l,this.endControl=n,this.end=s}return a.prototype.subdivide=function(r,l){var n=oo(this.start,this.startControl,r),s=oo(this.startControl,this.endControl,r),c=oo(this.endControl,this.end,r),f=oo(n,s,r),g=oo(s,c,r),d=oo(f,g,r);return l?new a(this.start,n,f,d):new a(d,g,c,this.end)},a.prototype.add=function(r,l){return new a(this.start.add(r,l),this.startControl.add(r,l),this.endControl.add(r,l),this.end.add(r,l))},a.prototype.reverse=function(){return new a(this.end,this.endControl,this.startControl,this.start)},a})(),yt=function(a){return a.type===1},cF=(function(){function a(r){var l=r.styles,n=r.bounds,s=vn(l.borderTopLeftRadius,n.width,n.height),c=s[0],f=s[1],g=vn(l.borderTopRightRadius,n.width,n.height),d=g[0],h=g[1],p=vn(l.borderBottomRightRadius,n.width,n.height),v=p[0],w=p[1],S=vn(l.borderBottomLeftRadius,n.width,n.height),F=S[0],y=S[1],b=[];b.push((c+d)/n.width),b.push((F+v)/n.width),b.push((f+y)/n.height),b.push((h+w)/n.height);var x=Math.max.apply(Math,b);x>1&&(c/=x,f/=x,d/=x,h/=x,v/=x,w/=x,F/=x,y/=x);var M=n.width-d,z=n.height-w,V=n.width-v,D=n.height-y,K=l.borderTopWidth,Y=l.borderRightWidth,Z=l.borderBottomWidth,J=l.borderLeftWidth,aA=VA(l.paddingTop,r.bounds.width),oA=VA(l.paddingRight,r.bounds.width),BA=VA(l.paddingBottom,r.bounds.width),nA=VA(l.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=c>0||f>0?YA(n.left+J/3,n.top+K/3,c-J/3,f-K/3,IA.TOP_LEFT):new P(n.left+J/3,n.top+K/3),this.topRightBorderDoubleOuterBox=c>0||f>0?YA(n.left+M,n.top+K/3,d-Y/3,h-K/3,IA.TOP_RIGHT):new P(n.left+n.width-Y/3,n.top+K/3),this.bottomRightBorderDoubleOuterBox=v>0||w>0?YA(n.left+V,n.top+z,v-Y/3,w-Z/3,IA.BOTTOM_RIGHT):new P(n.left+n.width-Y/3,n.top+n.height-Z/3),this.bottomLeftBorderDoubleOuterBox=F>0||y>0?YA(n.left+J/3,n.top+D,F-J/3,y-Z/3,IA.BOTTOM_LEFT):new P(n.left+J/3,n.top+n.height-Z/3),this.topLeftBorderDoubleInnerBox=c>0||f>0?YA(n.left+J*2/3,n.top+K*2/3,c-J*2/3,f-K*2/3,IA.TOP_LEFT):new P(n.left+J*2/3,n.top+K*2/3),this.topRightBorderDoubleInnerBox=c>0||f>0?YA(n.left+M,n.top+K*2/3,d-Y*2/3,h-K*2/3,IA.TOP_RIGHT):new P(n.left+n.width-Y*2/3,n.top+K*2/3),this.bottomRightBorderDoubleInnerBox=v>0||w>0?YA(n.left+V,n.top+z,v-Y*2/3,w-Z*2/3,IA.BOTTOM_RIGHT):new P(n.left+n.width-Y*2/3,n.top+n.height-Z*2/3),this.bottomLeftBorderDoubleInnerBox=F>0||y>0?YA(n.left+J*2/3,n.top+D,F-J*2/3,y-Z*2/3,IA.BOTTOM_LEFT):new P(n.left+J*2/3,n.top+n.height-Z*2/3),this.topLeftBorderStroke=c>0||f>0?YA(n.left+J/2,n.top+K/2,c-J/2,f-K/2,IA.TOP_LEFT):new P(n.left+J/2,n.top+K/2),this.topRightBorderStroke=c>0||f>0?YA(n.left+M,n.top+K/2,d-Y/2,h-K/2,IA.TOP_RIGHT):new P(n.left+n.width-Y/2,n.top+K/2),this.bottomRightBorderStroke=v>0||w>0?YA(n.left+V,n.top+z,v-Y/2,w-Z/2,IA.BOTTOM_RIGHT):new P(n.left+n.width-Y/2,n.top+n.height-Z/2),this.bottomLeftBorderStroke=F>0||y>0?YA(n.left+J/2,n.top+D,F-J/2,y-Z/2,IA.BOTTOM_LEFT):new P(n.left+J/2,n.top+n.height-Z/2),this.topLeftBorderBox=c>0||f>0?YA(n.left,n.top,c,f,IA.TOP_LEFT):new P(n.left,n.top),this.topRightBorderBox=d>0||h>0?YA(n.left+M,n.top,d,h,IA.TOP_RIGHT):new P(n.left+n.width,n.top),this.bottomRightBorderBox=v>0||w>0?YA(n.left+V,n.top+z,v,w,IA.BOTTOM_RIGHT):new P(n.left+n.width,n.top+n.height),this.bottomLeftBorderBox=F>0||y>0?YA(n.left,n.top+D,F,y,IA.BOTTOM_LEFT):new P(n.left,n.top+n.height),this.topLeftPaddingBox=c>0||f>0?YA(n.left+J,n.top+K,Math.max(0,c-J),Math.max(0,f-K),IA.TOP_LEFT):new P(n.left+J,n.top+K),this.topRightPaddingBox=d>0||h>0?YA(n.left+Math.min(M,n.width-Y),n.top+K,M>n.width+Y?0:Math.max(0,d-Y),Math.max(0,h-K),IA.TOP_RIGHT):new P(n.left+n.width-Y,n.top+K),this.bottomRightPaddingBox=v>0||w>0?YA(n.left+Math.min(V,n.width-J),n.top+Math.min(z,n.height-Z),Math.max(0,v-Y),Math.max(0,w-Z),IA.BOTTOM_RIGHT):new P(n.left+n.width-Y,n.top+n.height-Z),this.bottomLeftPaddingBox=F>0||y>0?YA(n.left+J,n.top+Math.min(D,n.height-Z),Math.max(0,F-J),Math.max(0,y-Z),IA.BOTTOM_LEFT):new P(n.left+J,n.top+n.height-Z),this.topLeftContentBox=c>0||f>0?YA(n.left+J+nA,n.top+K+aA,Math.max(0,c-(J+nA)),Math.max(0,f-(K+aA)),IA.TOP_LEFT):new P(n.left+J+nA,n.top+K+aA),this.topRightContentBox=d>0||h>0?YA(n.left+Math.min(M,n.width+J+nA),n.top+K+aA,M>n.width+J+nA?0:d-J+nA,h-(K+aA),IA.TOP_RIGHT):new P(n.left+n.width-(Y+oA),n.top+K+aA),this.bottomRightContentBox=v>0||w>0?YA(n.left+Math.min(V,n.width-(J+nA)),n.top+Math.min(z,n.height+K+aA),Math.max(0,v-(Y+oA)),w-(Z+BA),IA.BOTTOM_RIGHT):new P(n.left+n.width-(Y+oA),n.top+n.height-(Z+BA)),this.bottomLeftContentBox=F>0||y>0?YA(n.left+J+nA,n.top+D,Math.max(0,F-(J+nA)),y-(Z+BA),IA.BOTTOM_LEFT):new P(n.left+J+nA,n.top+n.height-(Z+BA))}return a})(),IA;(function(a){a[a.TOP_LEFT=0]="TOP_LEFT",a[a.TOP_RIGHT=1]="TOP_RIGHT",a[a.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",a[a.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(IA||(IA={}));var YA=function(a,r,l,n,s){var c=4*((Math.sqrt(2)-1)/3),f=l*c,g=n*c,d=a+l,h=r+n;switch(s){case IA.TOP_LEFT:return new wi(new P(a,h),new P(a,h-g),new P(d-f,r),new P(d,r));case IA.TOP_RIGHT:return new wi(new P(a,r),new P(a+f,r),new P(d,h-g),new P(d,h));case IA.BOTTOM_RIGHT:return new wi(new P(d,r),new P(d,r+g),new P(a+f,h),new P(a,h));case IA.BOTTOM_LEFT:default:return new wi(new P(d,h),new P(d-f,h),new P(a,r+g),new P(a,r))}},Li=function(a){return[a.topLeftBorderBox,a.topRightBorderBox,a.bottomRightBorderBox,a.bottomLeftBorderBox]},fF=function(a){return[a.topLeftContentBox,a.topRightContentBox,a.bottomRightContentBox,a.bottomLeftContentBox]},Ki=function(a){return[a.topLeftPaddingBox,a.topRightPaddingBox,a.bottomRightPaddingBox,a.bottomLeftPaddingBox]},BF=(function(){function a(r,l,n){this.offsetX=r,this.offsetY=l,this.matrix=n,this.type=0,this.target=6}return a})(),Ci=(function(){function a(r,l){this.path=r,this.target=l,this.type=1}return a})(),gF=(function(){function a(r){this.opacity=r,this.type=2,this.target=6}return a})(),dF=function(a){return a.type===0},cp=function(a){return a.type===1},hF=function(a){return a.type===2},G0=function(a,r){return a.length===r.length?a.some(function(l,n){return l===r[n]}):!1},mF=function(a,r,l,n,s){return a.map(function(c,f){switch(f){case 0:return c.add(r,l);case 1:return c.add(r+n,l);case 2:return c.add(r+n,l+s);case 3:return c.add(r,l+s)}return c})},fp=(function(){function a(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return a})(),Bp=(function(){function a(r,l){if(this.container=r,this.parent=l,this.effects=[],this.curves=new cF(this.container),this.container.styles.opacity<1&&this.effects.push(new gF(this.container.styles.opacity)),this.container.styles.transform!==null){var n=this.container.bounds.left+this.container.styles.transformOrigin[0].number,s=this.container.bounds.top+this.container.styles.transformOrigin[1].number,c=this.container.styles.transform;this.effects.push(new BF(n,s,c))}if(this.container.styles.overflowX!==0){var f=Li(this.curves),g=Ki(this.curves);G0(f,g)?this.effects.push(new Ci(f,6)):(this.effects.push(new Ci(f,2)),this.effects.push(new Ci(g,4)))}}return a.prototype.getEffects=function(r){for(var l=[2,3].indexOf(this.container.styles.position)===-1,n=this.parent,s=this.effects.slice(0);n;){var c=n.effects.filter(function(d){return!cp(d)});if(l||n.container.styles.position!==0||!n.parent){if(s.unshift.apply(s,c),l=[2,3].indexOf(n.container.styles.position)===-1,n.container.styles.overflowX!==0){var f=Li(n.curves),g=Ki(n.curves);G0(f,g)||s.unshift(new Ci(g,6))}}else s.unshift.apply(s,c);n=n.parent}return s.filter(function(d){return me(d.target,r)})},a})(),pf=function(a,r,l,n){a.container.elements.forEach(function(s){var c=me(s.flags,4),f=me(s.flags,2),g=new Bp(s,a);me(s.styles.display,2048)&&n.push(g);var d=me(s.flags,8)?[]:n;if(c||f){var h=c||s.styles.isPositioned()?l:r,p=new fp(g);if(s.styles.isPositioned()||s.styles.opacity<1||s.styles.isTransformed()){var v=s.styles.zIndex.order;if(v<0){var w=0;h.negativeZIndex.some(function(F,y){return v>F.element.container.styles.zIndex.order?(w=y,!1):w>0}),h.negativeZIndex.splice(w,0,p)}else if(v>0){var S=0;h.positiveZIndex.some(function(F,y){return v>=F.element.container.styles.zIndex.order?(S=y+1,!1):S>0}),h.positiveZIndex.splice(S,0,p)}else h.zeroOrAutoZIndexOrTransformedOrOpacity.push(p)}else s.styles.isFloating()?h.nonPositionedFloats.push(p):h.nonPositionedInlineLevel.push(p);pf(g,p,c?p:l,d)}else s.styles.isInlineLevel()?r.inlineLevel.push(g):r.nonInlineLevel.push(g),pf(g,r,l,d);me(s.flags,8)&&gp(s,d)})},gp=function(a,r){for(var l=a instanceof Bf?a.start:1,n=a instanceof Bf?a.reversed:!1,s=0;s<r.length;s++){var c=r[s];c.container instanceof qm&&typeof c.container.value=="number"&&c.container.value!==0&&(l=c.container.value),c.listValue=Hn(l,c.container.styles.listStyleType,!0),l+=n?-1:1}},pF=function(a){var r=new Bp(a,null),l=new fp(r),n=[];return pf(r,l,l,n),gp(r.container,n),l},N0=function(a,r){switch(r){case 0:return Et(a.topLeftBorderBox,a.topLeftPaddingBox,a.topRightBorderBox,a.topRightPaddingBox);case 1:return Et(a.topRightBorderBox,a.topRightPaddingBox,a.bottomRightBorderBox,a.bottomRightPaddingBox);case 2:return Et(a.bottomRightBorderBox,a.bottomRightPaddingBox,a.bottomLeftBorderBox,a.bottomLeftPaddingBox);case 3:default:return Et(a.bottomLeftBorderBox,a.bottomLeftPaddingBox,a.topLeftBorderBox,a.topLeftPaddingBox)}},vF=function(a,r){switch(r){case 0:return Et(a.topLeftBorderBox,a.topLeftBorderDoubleOuterBox,a.topRightBorderBox,a.topRightBorderDoubleOuterBox);case 1:return Et(a.topRightBorderBox,a.topRightBorderDoubleOuterBox,a.bottomRightBorderBox,a.bottomRightBorderDoubleOuterBox);case 2:return Et(a.bottomRightBorderBox,a.bottomRightBorderDoubleOuterBox,a.bottomLeftBorderBox,a.bottomLeftBorderDoubleOuterBox);case 3:default:return Et(a.bottomLeftBorderBox,a.bottomLeftBorderDoubleOuterBox,a.topLeftBorderBox,a.topLeftBorderDoubleOuterBox)}},wF=function(a,r){switch(r){case 0:return Et(a.topLeftBorderDoubleInnerBox,a.topLeftPaddingBox,a.topRightBorderDoubleInnerBox,a.topRightPaddingBox);case 1:return Et(a.topRightBorderDoubleInnerBox,a.topRightPaddingBox,a.bottomRightBorderDoubleInnerBox,a.bottomRightPaddingBox);case 2:return Et(a.bottomRightBorderDoubleInnerBox,a.bottomRightPaddingBox,a.bottomLeftBorderDoubleInnerBox,a.bottomLeftPaddingBox);case 3:default:return Et(a.bottomLeftBorderDoubleInnerBox,a.bottomLeftPaddingBox,a.topLeftBorderDoubleInnerBox,a.topLeftPaddingBox)}},CF=function(a,r){switch(r){case 0:return Qi(a.topLeftBorderStroke,a.topRightBorderStroke);case 1:return Qi(a.topRightBorderStroke,a.bottomRightBorderStroke);case 2:return Qi(a.bottomRightBorderStroke,a.bottomLeftBorderStroke);case 3:default:return Qi(a.bottomLeftBorderStroke,a.topLeftBorderStroke)}},Qi=function(a,r){var l=[];return yt(a)?l.push(a.subdivide(.5,!1)):l.push(a),yt(r)?l.push(r.subdivide(.5,!0)):l.push(r),l},Et=function(a,r,l,n){var s=[];return yt(a)?s.push(a.subdivide(.5,!1)):s.push(a),yt(l)?s.push(l.subdivide(.5,!0)):s.push(l),yt(n)?s.push(n.subdivide(.5,!0).reverse()):s.push(n),yt(r)?s.push(r.subdivide(.5,!1).reverse()):s.push(r),s},dp=function(a){var r=a.bounds,l=a.styles;return r.add(l.borderLeftWidth,l.borderTopWidth,-(l.borderRightWidth+l.borderLeftWidth),-(l.borderTopWidth+l.borderBottomWidth))},Ri=function(a){var r=a.styles,l=a.bounds,n=VA(r.paddingLeft,l.width),s=VA(r.paddingRight,l.width),c=VA(r.paddingTop,l.width),f=VA(r.paddingBottom,l.width);return l.add(n+r.borderLeftWidth,c+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+n+s),-(r.borderTopWidth+r.borderBottomWidth+c+f))},QF=function(a,r){return a===0?r.bounds:a===2?Ri(r):dp(r)},UF=function(a,r){return a===0?r.bounds:a===2?Ri(r):dp(r)},Nc=function(a,r,l){var n=QF(io(a.styles.backgroundOrigin,r),a),s=UF(io(a.styles.backgroundClip,r),a),c=yF(io(a.styles.backgroundSize,r),l,n),f=c[0],g=c[1],d=vn(io(a.styles.backgroundPosition,r),n.width-f,n.height-g),h=FF(io(a.styles.backgroundRepeat,r),d,c,n,s),p=Math.round(n.left+d[0]),v=Math.round(n.top+d[1]);return[h,p,v,f,g]},no=function(a){return KA(a)&&a.value===uo.AUTO},Ui=function(a){return typeof a=="number"},yF=function(a,r,l){var n=r[0],s=r[1],c=r[2],f=a[0],g=a[1];if(!f)return[0,0];if(ue(f)&&g&&ue(g))return[VA(f,l.width),VA(g,l.height)];var d=Ui(c);if(KA(f)&&(f.value===uo.CONTAIN||f.value===uo.COVER)){if(Ui(c)){var h=l.width/l.height;return h<c!=(f.value===uo.COVER)?[l.width,l.width/c]:[l.height*c,l.height]}return[l.width,l.height]}var p=Ui(n),v=Ui(s),w=p||v;if(no(f)&&(!g||no(g))){if(p&&v)return[n,s];if(!d&&!w)return[l.width,l.height];if(w&&d){var S=p?n:s*c,F=v?s:n/c;return[S,F]}var y=p?n:l.width,b=v?s:l.height;return[y,b]}if(d){var x=0,M=0;return ue(f)?x=VA(f,l.width):ue(g)&&(M=VA(g,l.height)),no(f)?x=M*c:(!g||no(g))&&(M=x/c),[x,M]}var z=null,V=null;if(ue(f)?z=VA(f,l.width):g&&ue(g)&&(V=VA(g,l.height)),z!==null&&(!g||no(g))&&(V=p&&v?z/n*s:l.height),V!==null&&no(f)&&(z=p&&v?V/s*n:l.width),z!==null&&V!==null)return[z,V];throw new Error("Unable to calculate background-size for element")},io=function(a,r){var l=a[r];return typeof l>"u"?a[0]:l},FF=function(a,r,l,n,s){var c=r[0],f=r[1],g=l[0],d=l[1];switch(a){case 2:return[new P(Math.round(n.left),Math.round(n.top+f)),new P(Math.round(n.left+n.width),Math.round(n.top+f)),new P(Math.round(n.left+n.width),Math.round(d+n.top+f)),new P(Math.round(n.left),Math.round(d+n.top+f))];case 3:return[new P(Math.round(n.left+c),Math.round(n.top)),new P(Math.round(n.left+c+g),Math.round(n.top)),new P(Math.round(n.left+c+g),Math.round(n.height+n.top)),new P(Math.round(n.left+c),Math.round(n.height+n.top))];case 1:return[new P(Math.round(n.left+c),Math.round(n.top+f)),new P(Math.round(n.left+c+g),Math.round(n.top+f)),new P(Math.round(n.left+c+g),Math.round(n.top+f+d)),new P(Math.round(n.left+c),Math.round(n.top+f+d))];default:return[new P(Math.round(s.left),Math.round(s.top)),new P(Math.round(s.left+s.width),Math.round(s.top)),new P(Math.round(s.left+s.width),Math.round(s.height+s.top)),new P(Math.round(s.left),Math.round(s.height+s.top))]}},EF="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",z0="Hidden Text",xF=(function(){function a(r){this._data={},this._document=r}return a.prototype.parseMetrics=function(r,l){var n=this._document.createElement("div"),s=this._document.createElement("img"),c=this._document.createElement("span"),f=this._document.body;n.style.visibility="hidden",n.style.fontFamily=r,n.style.fontSize=l,n.style.margin="0",n.style.padding="0",n.style.whiteSpace="nowrap",f.appendChild(n),s.src=EF,s.width=1,s.height=1,s.style.margin="0",s.style.padding="0",s.style.verticalAlign="baseline",c.style.fontFamily=r,c.style.fontSize=l,c.style.margin="0",c.style.padding="0",c.appendChild(this._document.createTextNode(z0)),n.appendChild(c),n.appendChild(s);var g=s.offsetTop-c.offsetTop+2;n.removeChild(c),n.appendChild(this._document.createTextNode(z0)),n.style.lineHeight="normal",s.style.verticalAlign="super";var d=s.offsetTop-n.offsetTop+2;return f.removeChild(n),{baseline:g,middle:d}},a.prototype.getMetrics=function(r,l){var n=r+" "+l;return typeof this._data[n]>"u"&&(this._data[n]=this.parseMetrics(r,l)),this._data[n]},a})(),hp=(function(){function a(r,l){this.context=r,this.options=l}return a})(),bF=1e4,_F=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s._activeEffects=[],s.canvas=n.canvas?n.canvas:document.createElement("canvas"),s.ctx=s.canvas.getContext("2d"),n.canvas||(s.canvas.width=Math.floor(n.width*n.scale),s.canvas.height=Math.floor(n.height*n.scale),s.canvas.style.width=n.width+"px",s.canvas.style.height=n.height+"px"),s.fontMetrics=new xF(document),s.ctx.scale(s.options.scale,s.options.scale),s.ctx.translate(-n.x,-n.y),s.ctx.textBaseline="bottom",s._activeEffects=[],s.context.logger.debug("Canvas renderer initialized ("+n.width+"x"+n.height+") with scale "+n.scale),s}return r.prototype.applyEffects=function(l){for(var n=this;this._activeEffects.length;)this.popEffect();l.forEach(function(s){return n.applyEffect(s)})},r.prototype.applyEffect=function(l){this.ctx.save(),hF(l)&&(this.ctx.globalAlpha=l.opacity),dF(l)&&(this.ctx.translate(l.offsetX,l.offsetY),this.ctx.transform(l.matrix[0],l.matrix[1],l.matrix[2],l.matrix[3],l.matrix[4],l.matrix[5]),this.ctx.translate(-l.offsetX,-l.offsetY)),cp(l)&&(this.path(l.path),this.ctx.clip()),this._activeEffects.push(l)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(l){return Xe(this,void 0,void 0,function(){var n;return Ge(this,function(s){switch(s.label){case 0:return n=l.element.container.styles,n.isVisible()?[4,this.renderStackContent(l)]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(l){return Xe(this,void 0,void 0,function(){return Ge(this,function(n){switch(n.label){case 0:if(me(l.container.flags,16))debugger;return l.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(l)]:[3,3];case 1:return n.sent(),[4,this.renderNodeContent(l)];case 2:n.sent(),n.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(l,n,s){var c=this;if(n===0)this.ctx.fillText(l.text,l.bounds.left,l.bounds.top+s);else{var f=xf(l.text);f.reduce(function(g,d){return c.ctx.fillText(d,g,l.bounds.top+s),g+c.ctx.measureText(d).width},l.bounds.left)}},r.prototype.createFontStyle=function(l){var n=l.fontVariant.filter(function(f){return f==="normal"||f==="small-caps"}).join(""),s=DF(l.fontFamily).join(", "),c=Dn(l.fontSize)?""+l.fontSize.number+l.fontSize.unit:l.fontSize.number+"px";return[[l.fontStyle,n,l.fontWeight,c,s].join(" "),s,c]},r.prototype.renderTextNode=function(l,n){return Xe(this,void 0,void 0,function(){var s,c,f,g,d,h,p,v,w=this;return Ge(this,function(S){return s=this.createFontStyle(n),c=s[0],f=s[1],g=s[2],this.ctx.font=c,this.ctx.direction=n.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",d=this.fontMetrics.getMetrics(f,g),h=d.baseline,p=d.middle,v=n.paintOrder,l.textBounds.forEach(function(F){v.forEach(function(y){switch(y){case 0:w.ctx.fillStyle=Ue(n.color),w.renderTextWithLetterSpacing(F,n.letterSpacing,h);var b=n.textShadow;b.length&&F.text.trim().length&&(b.slice(0).reverse().forEach(function(x){w.ctx.shadowColor=Ue(x.color),w.ctx.shadowOffsetX=x.offsetX.number*w.options.scale,w.ctx.shadowOffsetY=x.offsetY.number*w.options.scale,w.ctx.shadowBlur=x.blur.number,w.renderTextWithLetterSpacing(F,n.letterSpacing,h)}),w.ctx.shadowColor="",w.ctx.shadowOffsetX=0,w.ctx.shadowOffsetY=0,w.ctx.shadowBlur=0),n.textDecorationLine.length&&(w.ctx.fillStyle=Ue(n.textDecorationColor||n.color),n.textDecorationLine.forEach(function(x){switch(x){case 1:w.ctx.fillRect(F.bounds.left,Math.round(F.bounds.top+h),F.bounds.width,1);break;case 2:w.ctx.fillRect(F.bounds.left,Math.round(F.bounds.top),F.bounds.width,1);break;case 3:w.ctx.fillRect(F.bounds.left,Math.ceil(F.bounds.top+p),F.bounds.width,1);break}}));break;case 1:n.webkitTextStrokeWidth&&F.text.trim().length&&(w.ctx.strokeStyle=Ue(n.webkitTextStrokeColor),w.ctx.lineWidth=n.webkitTextStrokeWidth,w.ctx.lineJoin=window.chrome?"miter":"round",w.ctx.strokeText(F.text,F.bounds.left,F.bounds.top+h)),w.ctx.strokeStyle="",w.ctx.lineWidth=0,w.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(l,n,s){if(s&&l.intrinsicWidth>0&&l.intrinsicHeight>0){var c=Ri(l),f=Ki(n);this.path(f),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(s,0,0,l.intrinsicWidth,l.intrinsicHeight,c.left,c.top,c.width,c.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(l){return Xe(this,void 0,void 0,function(){var n,s,c,f,g,d,M,M,h,p,v,w,V,S,F,D,y,b,x,M,z,V,D;return Ge(this,function(K){switch(K.label){case 0:this.applyEffects(l.getEffects(4)),n=l.container,s=l.curves,c=n.styles,f=0,g=n.textNodes,K.label=1;case 1:return f<g.length?(d=g[f],[4,this.renderTextNode(d,c)]):[3,4];case 2:K.sent(),K.label=3;case 3:return f++,[3,1];case 4:if(!(n instanceof Wm))return[3,8];K.label=5;case 5:return K.trys.push([5,7,,8]),[4,this.context.cache.match(n.src)];case 6:return M=K.sent(),this.renderReplacedElement(n,s,M),[3,8];case 7:return K.sent(),this.context.logger.error("Error loading image "+n.src),[3,8];case 8:if(n instanceof Zm&&this.renderReplacedElement(n,s,n.canvas),!(n instanceof jm))return[3,12];K.label=9;case 9:return K.trys.push([9,11,,12]),[4,this.context.cache.match(n.svg)];case 10:return M=K.sent(),this.renderReplacedElement(n,s,M),[3,12];case 11:return K.sent(),this.context.logger.error("Error loading svg "+n.svg.substring(0,255)),[3,12];case 12:return n instanceof Ap&&n.tree?(h=new r(this.context,{scale:this.options.scale,backgroundColor:n.backgroundColor,x:0,y:0,width:n.width,height:n.height}),[4,h.render(n.tree)]):[3,14];case 13:p=K.sent(),n.width&&n.height&&this.ctx.drawImage(p,0,0,n.width,n.height,n.bounds.left,n.bounds.top,n.bounds.width,n.bounds.height),K.label=14;case 14:if(n instanceof bf&&(v=Math.min(n.bounds.width,n.bounds.height),n.type===Ti?n.checked&&(this.ctx.save(),this.path([new P(n.bounds.left+v*.39363,n.bounds.top+v*.79),new P(n.bounds.left+v*.16,n.bounds.top+v*.5549),new P(n.bounds.left+v*.27347,n.bounds.top+v*.44071),new P(n.bounds.left+v*.39694,n.bounds.top+v*.5649),new P(n.bounds.left+v*.72983,n.bounds.top+v*.23),new P(n.bounds.left+v*.84,n.bounds.top+v*.34085),new P(n.bounds.left+v*.39363,n.bounds.top+v*.79)]),this.ctx.fillStyle=Ue(H0),this.ctx.fill(),this.ctx.restore()):n.type===Di&&n.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.bounds.left+v/2,n.bounds.top+v/2,v/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ue(H0),this.ctx.fill(),this.ctx.restore())),HF(n)&&n.value.length){switch(w=this.createFontStyle(c),V=w[0],S=w[1],F=this.fontMetrics.getMetrics(V,S).baseline,this.ctx.font=V,this.ctx.fillStyle=Ue(c.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=IF(n.styles.textAlign),D=Ri(n),y=0,n.styles.textAlign){case 1:y+=D.width/2;break;case 2:y+=D.width;break}b=D.add(y,0,0,-D.height/2+1),this.ctx.save(),this.path([new P(D.left,D.top),new P(D.left+D.width,D.top),new P(D.left+D.width,D.top+D.height),new P(D.left,D.top+D.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Fn(n.value,b),c.letterSpacing,F),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!me(n.styles.display,2048))return[3,20];if(n.styles.listStyleImage===null)return[3,19];if(x=n.styles.listStyleImage,x.type!==0)return[3,18];M=void 0,z=x.url,K.label=15;case 15:return K.trys.push([15,17,,18]),[4,this.context.cache.match(z)];case 16:return M=K.sent(),this.ctx.drawImage(M,n.bounds.left-(M.width+10),n.bounds.top),[3,18];case 17:return K.sent(),this.context.logger.error("Error loading list-style-image "+z),[3,18];case 18:return[3,20];case 19:l.listValue&&n.styles.listStyleType!==-1&&(V=this.createFontStyle(c)[0],this.ctx.font=V,this.ctx.fillStyle=Ue(c.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",D=new la(n.bounds.left,n.bounds.top+VA(n.styles.paddingTop,n.bounds.width),n.bounds.width,B0(c.lineHeight,c.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Fn(l.listValue,D),c.letterSpacing,B0(c.lineHeight,c.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),K.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(l){return Xe(this,void 0,void 0,function(){var n,s,x,c,f,x,g,d,x,h,p,x,v,w,x,S,F,x,y,b,x;return Ge(this,function(M){switch(M.label){case 0:if(me(l.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(l.element)];case 1:M.sent(),n=0,s=l.negativeZIndex,M.label=2;case 2:return n<s.length?(x=s[n],[4,this.renderStack(x)]):[3,5];case 3:M.sent(),M.label=4;case 4:return n++,[3,2];case 5:return[4,this.renderNodeContent(l.element)];case 6:M.sent(),c=0,f=l.nonInlineLevel,M.label=7;case 7:return c<f.length?(x=f[c],[4,this.renderNode(x)]):[3,10];case 8:M.sent(),M.label=9;case 9:return c++,[3,7];case 10:g=0,d=l.nonPositionedFloats,M.label=11;case 11:return g<d.length?(x=d[g],[4,this.renderStack(x)]):[3,14];case 12:M.sent(),M.label=13;case 13:return g++,[3,11];case 14:h=0,p=l.nonPositionedInlineLevel,M.label=15;case 15:return h<p.length?(x=p[h],[4,this.renderStack(x)]):[3,18];case 16:M.sent(),M.label=17;case 17:return h++,[3,15];case 18:v=0,w=l.inlineLevel,M.label=19;case 19:return v<w.length?(x=w[v],[4,this.renderNode(x)]):[3,22];case 20:M.sent(),M.label=21;case 21:return v++,[3,19];case 22:S=0,F=l.zeroOrAutoZIndexOrTransformedOrOpacity,M.label=23;case 23:return S<F.length?(x=F[S],[4,this.renderStack(x)]):[3,26];case 24:M.sent(),M.label=25;case 25:return S++,[3,23];case 26:y=0,b=l.positiveZIndex,M.label=27;case 27:return y<b.length?(x=b[y],[4,this.renderStack(x)]):[3,30];case 28:M.sent(),M.label=29;case 29:return y++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(l){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(l.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(l){this.ctx.beginPath(),this.formatPath(l),this.ctx.closePath()},r.prototype.formatPath=function(l){var n=this;l.forEach(function(s,c){var f=yt(s)?s.start:s;c===0?n.ctx.moveTo(f.x,f.y):n.ctx.lineTo(f.x,f.y),yt(s)&&n.ctx.bezierCurveTo(s.startControl.x,s.startControl.y,s.endControl.x,s.endControl.y,s.end.x,s.end.y)})},r.prototype.renderRepeat=function(l,n,s,c){this.path(l),this.ctx.fillStyle=n,this.ctx.translate(s,c),this.ctx.fill(),this.ctx.translate(-s,-c)},r.prototype.resizeImage=function(l,n,s){var c;if(l.width===n&&l.height===s)return l;var f=(c=this.canvas.ownerDocument)!==null&&c!==void 0?c:document,g=f.createElement("canvas");g.width=Math.max(1,n),g.height=Math.max(1,s);var d=g.getContext("2d");return d.drawImage(l,0,0,l.width,l.height,0,0,n,s),g},r.prototype.renderBackgroundImage=function(l){return Xe(this,void 0,void 0,function(){var n,s,c,f,g,d;return Ge(this,function(h){switch(h.label){case 0:n=l.styles.backgroundImage.length-1,s=function(p){var v,w,S,aA,I,X,nA,cA,Z,F,aA,I,X,nA,cA,y,b,x,M,z,V,D,K,Y,Z,J,aA,oA,BA,nA,cA,vA,I,X,tA,gA,q,Q,L,k,$,lA;return Ge(this,function(dA){switch(dA.label){case 0:if(p.type!==0)return[3,5];v=void 0,w=p.url,dA.label=1;case 1:return dA.trys.push([1,3,,4]),[4,c.context.cache.match(w)];case 2:return v=dA.sent(),[3,4];case 3:return dA.sent(),c.context.logger.error("Error loading background-image "+w),[3,4];case 4:return v&&(S=Nc(l,n,[v.width,v.height,v.width/v.height]),aA=S[0],I=S[1],X=S[2],nA=S[3],cA=S[4],Z=c.ctx.createPattern(c.resizeImage(v,nA,cA),"repeat"),c.renderRepeat(aA,Z,I,X)),[3,6];case 5:dU(p)?(F=Nc(l,n,[null,null,null]),aA=F[0],I=F[1],X=F[2],nA=F[3],cA=F[4],y=uU(p.angle,nA,cA),b=y[0],x=y[1],M=y[2],z=y[3],V=y[4],D=document.createElement("canvas"),D.width=nA,D.height=cA,K=D.getContext("2d"),Y=K.createLinearGradient(x,z,M,V),c0(p.stops,b).forEach(function(QA){return Y.addColorStop(QA.stop,Ue(QA.color))}),K.fillStyle=Y,K.fillRect(0,0,nA,cA),nA>0&&cA>0&&(Z=c.ctx.createPattern(D,"repeat"),c.renderRepeat(aA,Z,I,X))):hU(p)&&(J=Nc(l,n,[null,null,null]),aA=J[0],oA=J[1],BA=J[2],nA=J[3],cA=J[4],vA=p.position.length===0?[yf]:p.position,I=VA(vA[0],nA),X=VA(vA[vA.length-1],cA),tA=cU(p,I,X,nA,cA),gA=tA[0],q=tA[1],gA>0&&q>0&&(Q=c.ctx.createRadialGradient(oA+I,BA+X,0,oA+I,BA+X,gA),c0(p.stops,gA*2).forEach(function(QA){return Q.addColorStop(QA.stop,Ue(QA.color))}),c.path(aA),c.ctx.fillStyle=Q,gA!==q?(L=l.bounds.left+.5*l.bounds.width,k=l.bounds.top+.5*l.bounds.height,$=q/gA,lA=1/$,c.ctx.save(),c.ctx.translate(L,k),c.ctx.transform(1,0,0,$,0,0),c.ctx.translate(-L,-k),c.ctx.fillRect(oA,lA*(BA-k)+k,nA,cA*lA),c.ctx.restore()):c.ctx.fill())),dA.label=6;case 6:return n--,[2]}})},c=this,f=0,g=l.styles.backgroundImage.slice(0).reverse(),h.label=1;case 1:return f<g.length?(d=g[f],[5,s(d)]):[3,4];case 2:h.sent(),h.label=3;case 3:return f++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(l,n,s){return Xe(this,void 0,void 0,function(){return Ge(this,function(c){return this.path(N0(s,n)),this.ctx.fillStyle=Ue(l),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(l,n,s,c){return Xe(this,void 0,void 0,function(){var f,g;return Ge(this,function(d){switch(d.label){case 0:return n<3?[4,this.renderSolidBorder(l,s,c)]:[3,2];case 1:return d.sent(),[2];case 2:return f=vF(c,s),this.path(f),this.ctx.fillStyle=Ue(l),this.ctx.fill(),g=wF(c,s),this.path(g),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(l){return Xe(this,void 0,void 0,function(){var n,s,c,f,g,d,h,p,v=this;return Ge(this,function(w){switch(w.label){case 0:return this.applyEffects(l.getEffects(2)),n=l.container.styles,s=!Ga(n.backgroundColor)||n.backgroundImage.length,c=[{style:n.borderTopStyle,color:n.borderTopColor,width:n.borderTopWidth},{style:n.borderRightStyle,color:n.borderRightColor,width:n.borderRightWidth},{style:n.borderBottomStyle,color:n.borderBottomColor,width:n.borderBottomWidth},{style:n.borderLeftStyle,color:n.borderLeftColor,width:n.borderLeftWidth}],f=SF(io(n.backgroundClip,0),l.curves),s||n.boxShadow.length?(this.ctx.save(),this.path(f),this.ctx.clip(),Ga(n.backgroundColor)||(this.ctx.fillStyle=Ue(n.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(l.container)]):[3,2];case 1:w.sent(),this.ctx.restore(),n.boxShadow.slice(0).reverse().forEach(function(S){v.ctx.save();var F=Li(l.curves),y=S.inset?0:bF,b=mF(F,-y+(S.inset?1:-1)*S.spread.number,(S.inset?1:-1)*S.spread.number,S.spread.number*(S.inset?-2:2),S.spread.number*(S.inset?-2:2));S.inset?(v.path(F),v.ctx.clip(),v.mask(b)):(v.mask(F),v.ctx.clip(),v.path(b)),v.ctx.shadowOffsetX=S.offsetX.number+y,v.ctx.shadowOffsetY=S.offsetY.number,v.ctx.shadowColor=Ue(S.color),v.ctx.shadowBlur=S.blur.number,v.ctx.fillStyle=S.inset?Ue(S.color):"rgba(0,0,0,1)",v.ctx.fill(),v.ctx.restore()}),w.label=2;case 2:g=0,d=0,h=c,w.label=3;case 3:return d<h.length?(p=h[d],p.style!==0&&!Ga(p.color)&&p.width>0?p.style!==2?[3,5]:[4,this.renderDashedDottedBorder(p.color,p.width,g,l.curves,2)]:[3,11]):[3,13];case 4:return w.sent(),[3,11];case 5:return p.style!==3?[3,7]:[4,this.renderDashedDottedBorder(p.color,p.width,g,l.curves,3)];case 6:return w.sent(),[3,11];case 7:return p.style!==4?[3,9]:[4,this.renderDoubleBorder(p.color,p.width,g,l.curves)];case 8:return w.sent(),[3,11];case 9:return[4,this.renderSolidBorder(p.color,g,l.curves)];case 10:w.sent(),w.label=11;case 11:g++,w.label=12;case 12:return d++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(l,n,s,c,f){return Xe(this,void 0,void 0,function(){var g,d,h,p,v,w,S,F,y,b,x,M,z,V,D,K,D,K;return Ge(this,function(Y){return this.ctx.save(),g=CF(c,s),d=N0(c,s),f===2&&(this.path(d),this.ctx.clip()),yt(d[0])?(h=d[0].start.x,p=d[0].start.y):(h=d[0].x,p=d[0].y),yt(d[1])?(v=d[1].end.x,w=d[1].end.y):(v=d[1].x,w=d[1].y),s===0||s===2?S=Math.abs(h-v):S=Math.abs(p-w),this.ctx.beginPath(),f===3?this.formatPath(g):this.formatPath(d.slice(0,2)),F=n<3?n*3:n*2,y=n<3?n*2:n,f===3&&(F=n,y=n),b=!0,S<=F*2?b=!1:S<=F*2+y?(x=S/(2*F+y),F*=x,y*=x):(M=Math.floor((S+y)/(F+y)),z=(S-M*F)/(M-1),V=(S-(M+1)*F)/M,y=V<=0||Math.abs(y-z)<Math.abs(y-V)?z:V),b&&(f===3?this.ctx.setLineDash([0,F+y]):this.ctx.setLineDash([F,y])),f===3?(this.ctx.lineCap="round",this.ctx.lineWidth=n):this.ctx.lineWidth=n*2+1.1,this.ctx.strokeStyle=Ue(l),this.ctx.stroke(),this.ctx.setLineDash([]),f===2&&(yt(d[0])&&(D=d[3],K=d[0],this.ctx.beginPath(),this.formatPath([new P(D.end.x,D.end.y),new P(K.start.x,K.start.y)]),this.ctx.stroke()),yt(d[1])&&(D=d[1],K=d[2],this.ctx.beginPath(),this.formatPath([new P(D.end.x,D.end.y),new P(K.start.x,K.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(l){return Xe(this,void 0,void 0,function(){var n;return Ge(this,function(s){switch(s.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ue(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),n=pF(l),[4,this.renderStack(n)];case 1:return s.sent(),this.applyEffects([]),[2,this.canvas]}})})},r})(hp),HF=function(a){return a instanceof $m||a instanceof Pm?!0:a instanceof bf&&a.type!==Di&&a.type!==Ti},SF=function(a,r){switch(a){case 0:return Li(r);case 2:return fF(r);case 1:default:return Ki(r)}},IF=function(a){switch(a){case 1:return"center";case 2:return"right";case 0:default:return"left"}},TF=["-apple-system","system-ui"],DF=function(a){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?a.filter(function(r){return TF.indexOf(r)===-1}):a},MF=(function(a){St(r,a);function r(l,n){var s=a.call(this,l,n)||this;return s.canvas=n.canvas?n.canvas:document.createElement("canvas"),s.ctx=s.canvas.getContext("2d"),s.options=n,s.canvas.width=Math.floor(n.width*n.scale),s.canvas.height=Math.floor(n.height*n.scale),s.canvas.style.width=n.width+"px",s.canvas.style.height=n.height+"px",s.ctx.scale(s.options.scale,s.options.scale),s.ctx.translate(-n.x,-n.y),s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+n.width+"x"+n.height+" at "+n.x+","+n.y+") with scale "+n.scale),s}return r.prototype.render=function(l){return Xe(this,void 0,void 0,function(){var n,s;return Ge(this,function(c){switch(c.label){case 0:return n=ff(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,l),[4,OF(n)];case 1:return s=c.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ue(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(s,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r})(hp),OF=function(a){return new Promise(function(r,l){var n=new Image;n.onload=function(){r(n)},n.onerror=l,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(a))})},LF=(function(){function a(r){var l=r.id,n=r.enabled;this.id=l,this.enabled=n,this.start=Date.now()}return a.prototype.debug=function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,ei([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},a.prototype.getTime=function(){return Date.now()-this.start},a.prototype.info=function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,ei([this.id,this.getTime()+"ms"],r))},a.prototype.warn=function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,ei([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},a.prototype.error=function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,ei([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},a.instances={},a})(),KF=(function(){function a(r,l){var n;this.windowBounds=l,this.instanceName="#"+a.instanceCount++,this.logger=new LF({id:this.instanceName,enabled:r.logging}),this.cache=(n=r.cache)!==null&&n!==void 0?n:new rF(this,r)}return a.instanceCount=1,a})(),RF=function(a,r){return r===void 0&&(r={}),VF(a,r)};typeof window<"u"&&up.setContext(window);var VF=function(a,r){return Xe(void 0,void 0,void 0,function(){var l,n,s,c,f,g,d,h,p,v,w,S,F,y,b,x,M,z,V,D,Y,K,Y,Z,J,aA,oA,BA,nA,cA,vA,I,X,tA,gA,q,Q,L,k,$;return Ge(this,function(lA){switch(lA.label){case 0:if(!a||typeof a!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(l=a.ownerDocument,!l)throw new Error("Element is not attached to a Document");if(n=l.defaultView,!n)throw new Error("Document is not attached to a Window");return s={allowTaint:(Z=r.allowTaint)!==null&&Z!==void 0?Z:!1,imageTimeout:(J=r.imageTimeout)!==null&&J!==void 0?J:15e3,proxy:r.proxy,useCORS:(aA=r.useCORS)!==null&&aA!==void 0?aA:!1},c=jc({logging:(oA=r.logging)!==null&&oA!==void 0?oA:!0,cache:r.cache},s),f={windowWidth:(BA=r.windowWidth)!==null&&BA!==void 0?BA:n.innerWidth,windowHeight:(nA=r.windowHeight)!==null&&nA!==void 0?nA:n.innerHeight,scrollX:(cA=r.scrollX)!==null&&cA!==void 0?cA:n.pageXOffset,scrollY:(vA=r.scrollY)!==null&&vA!==void 0?vA:n.pageYOffset},g=new la(f.scrollX,f.scrollY,f.windowWidth,f.windowHeight),d=new KF(c,g),h=(I=r.foreignObjectRendering)!==null&&I!==void 0?I:!1,p={allowTaint:(X=r.allowTaint)!==null&&X!==void 0?X:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:h,copyStyles:h},d.logger.debug("Starting document clone with size "+g.width+"x"+g.height+" scrolled to "+-g.left+","+-g.top),v=new R0(d,a,p),w=v.clonedReferenceElement,w?[4,v.toIFrame(l,g)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return S=lA.sent(),F=_f(w)||G1(w)?mC(w.ownerDocument):Gi(d,w),y=F.width,b=F.height,x=F.left,M=F.top,z=GF(d,w,r.backgroundColor),V={canvas:r.canvas,backgroundColor:z,scale:(gA=(tA=r.scale)!==null&&tA!==void 0?tA:n.devicePixelRatio)!==null&&gA!==void 0?gA:1,x:((q=r.x)!==null&&q!==void 0?q:0)+x,y:((Q=r.y)!==null&&Q!==void 0?Q:0)+M,width:(L=r.width)!==null&&L!==void 0?L:Math.ceil(y),height:(k=r.height)!==null&&k!==void 0?k:Math.ceil(b)},h?(d.logger.debug("Document cloned, using foreign object rendering"),Y=new MF(d,V),[4,Y.render(w)]):[3,3];case 2:return D=lA.sent(),[3,5];case 3:return d.logger.debug("Document cloned, element located at "+x+","+M+" with size "+y+"x"+b+" using computed rendering"),d.logger.debug("Starting DOM parsing"),K=tp(d,w),z===K.styles.backgroundColor&&(K.styles.backgroundColor=na.TRANSPARENT),d.logger.debug("Starting renderer for element at "+V.x+","+V.y+" with size "+V.width+"x"+V.height),Y=new _F(d,V),[4,Y.render(K)];case 4:D=lA.sent(),lA.label=5;case 5:return(!(($=r.removeContainer)!==null&&$!==void 0)||$)&&(R0.destroy(S)||d.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),d.logger.debug("Finished rendering"),[2,D]}})})},GF=function(a,r,l){var n=r.ownerDocument,s=n.documentElement?Un(a,getComputedStyle(n.documentElement).backgroundColor):na.TRANSPARENT,c=n.body?Un(a,getComputedStyle(n.body).backgroundColor):na.TRANSPARENT,f=typeof l=="string"?Un(a,l):l===null?na.TRANSPARENT:4294967295;return r===n.documentElement?Ga(s)?Ga(c)?f:c:s:f};const NF=`#version 300 es
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
}`,Y0=1920*1080*4;let zF=class{constructor(r,l,n,s,c=0,f=0,g=2,d=Y0,h=[]){fA(this,"parentElement");fA(this,"canvasElement");fA(this,"gl");fA(this,"program",null);fA(this,"uniformLocations",{});fA(this,"fragmentShader");fA(this,"rafId",null);fA(this,"lastRenderTime",0);fA(this,"currentFrame",0);fA(this,"speed",0);fA(this,"currentSpeed",0);fA(this,"providedUniforms");fA(this,"mipmaps",[]);fA(this,"hasBeenDisposed",!1);fA(this,"resolutionChanged",!0);fA(this,"textures",new Map);fA(this,"minPixelRatio");fA(this,"maxPixelCount");fA(this,"isSafari",XF());fA(this,"uniformCache",{});fA(this,"textureUnitMap",new Map);fA(this,"initProgram",()=>{const r=YF(this.gl,NF,this.fragmentShader);r&&(this.program=r)});fA(this,"setupPositionAttribute",()=>{const r=this.gl.getAttribLocation(this.program,"a_position"),l=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,l);const n=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(n),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(r),this.gl.vertexAttribPointer(r,2,this.gl.FLOAT,!1,0,0)});fA(this,"setupUniforms",()=>{const r={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([l,n])=>{if(r[l]=this.gl.getUniformLocation(this.program,l),n instanceof HTMLImageElement){const s=`${l}AspectRatio`;r[s]=this.gl.getUniformLocation(this.program,s)}}),this.uniformLocations=r});fA(this,"renderScale",1);fA(this,"parentWidth",0);fA(this,"parentHeight",0);fA(this,"parentDevicePixelWidth",0);fA(this,"parentDevicePixelHeight",0);fA(this,"devicePixelsSupported",!1);fA(this,"resizeObserver",null);fA(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([r])=>{var l;if(r!=null&&r.borderBoxSize[0]){const n=(l=r.devicePixelContentBoxSize)==null?void 0:l[0];n!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=n.inlineSize,this.parentDevicePixelHeight=n.blockSize),this.parentWidth=r.borderBoxSize[0].inlineSize,this.parentHeight=r.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});fA(this,"handleVisualViewportChange",()=>{var r;(r=this.resizeObserver)==null||r.disconnect(),this.setupResizeObserver()});fA(this,"handleResize",()=>{let r=0,l=0;const n=Math.max(1,window.devicePixelRatio),s=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const p=Math.max(1,this.minPixelRatio/n);r=this.parentDevicePixelWidth*p*s,l=this.parentDevicePixelHeight*p*s}else{let p=Math.max(n,this.minPixelRatio)*s;if(this.isSafari){const v=JF();p*=Math.max(1,v)}r=Math.round(this.parentWidth)*p,l=Math.round(this.parentHeight)*p}const c=Math.sqrt(this.maxPixelCount)/Math.sqrt(r*l),f=Math.min(1,c),g=Math.round(r*f),d=Math.round(l*f),h=g/Math.round(this.parentWidth);(this.canvasElement.width!==g||this.canvasElement.height!==d||this.renderScale!==h)&&(this.renderScale=h,this.canvasElement.width=g,this.canvasElement.height=d,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});fA(this,"render",r=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const l=r-this.lastRenderTime;this.lastRenderTime=r,this.currentSpeed!==0&&(this.currentFrame+=l*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});fA(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});fA(this,"setTextureUniform",(r,l)=>{if(!l.complete||l.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${r} must be fully loaded`);const n=this.textures.get(r);n&&this.gl.deleteTexture(n),this.textureUnitMap.has(r)||this.textureUnitMap.set(r,this.textureUnitMap.size);const s=this.textureUnitMap.get(r);this.gl.activeTexture(this.gl.TEXTURE0+s);const c=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,c),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,l),this.mipmaps.includes(r)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const f=this.gl.getError();if(f!==this.gl.NO_ERROR||c===null){console.error("Paper Shaders: WebGL error when uploading texture:",f);return}this.textures.set(r,c);const g=this.uniformLocations[r];if(g){this.gl.uniform1i(g,s);const d=`${r}AspectRatio`,h=this.uniformLocations[d];if(h){const p=l.naturalWidth/l.naturalHeight;this.gl.uniform1f(h,p)}}});fA(this,"areUniformValuesEqual",(r,l)=>r===l?!0:Array.isArray(r)&&Array.isArray(l)&&r.length===l.length?r.every((n,s)=>this.areUniformValuesEqual(n,l[s])):!1);fA(this,"setUniformValues",r=>{this.gl.useProgram(this.program),Object.entries(r).forEach(([l,n])=>{let s=n;if(n instanceof HTMLImageElement&&(s=`${n.src.slice(0,200)}|${n.naturalWidth}x${n.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[l],s))return;this.uniformCache[l]=s;const c=this.uniformLocations[l];if(!c){console.warn(`Uniform location for ${l} not found`);return}if(n instanceof HTMLImageElement)this.setTextureUniform(l,n);else if(Array.isArray(n)){let f=null,g=null;if(n[0]!==void 0&&Array.isArray(n[0])){const d=n[0].length;if(n.every(h=>h.length===d))f=n.flat(),g=d;else{console.warn(`All child arrays must be the same length for ${l}`);return}}else f=n,g=f.length;switch(g){case 2:this.gl.uniform2fv(c,f);break;case 3:this.gl.uniform3fv(c,f);break;case 4:this.gl.uniform4fv(c,f);break;case 9:this.gl.uniformMatrix3fv(c,!1,f);break;case 16:this.gl.uniformMatrix4fv(c,!1,f);break;default:console.warn(`Unsupported uniform array length: ${g}`)}}else typeof n=="number"?this.gl.uniform1f(c,n):typeof n=="boolean"?this.gl.uniform1i(c,n?1:0):console.warn(`Unsupported uniform type for ${l}: ${typeof n}`)})});fA(this,"getCurrentFrame",()=>this.currentFrame);fA(this,"setFrame",r=>{this.currentFrame=r,this.lastRenderTime=performance.now(),this.render(performance.now())});fA(this,"setSpeed",(r=1)=>{this.speed=r,this.setCurrentSpeed(document.hidden?0:r)});fA(this,"setCurrentSpeed",r=>{this.currentSpeed=r,this.rafId===null&&r!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&r===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});fA(this,"setMaxPixelCount",(r=Y0)=>{this.maxPixelCount=r,this.handleResize()});fA(this,"setMinPixelRatio",(r=2)=>{this.minPixelRatio=r,this.handleResize()});fA(this,"setUniforms",r=>{this.setUniformValues(r),this.providedUniforms={...this.providedUniforms,...r},this.render(performance.now())});fA(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});fA(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(r=>{this.gl.deleteTexture(r)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(r instanceof HTMLElement)this.parentElement=r;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const w=document.createElement("style");w.innerHTML=kF,w.setAttribute("data-paper-shader",""),document.head.prepend(w)}const p=document.createElement("canvas");this.canvasElement=p,this.parentElement.prepend(p),this.fragmentShader=l,this.providedUniforms=n,this.mipmaps=h,this.currentFrame=f,this.minPixelRatio=g,this.maxPixelCount=d;const v=p.getContext("webgl2",s);if(!v)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=v,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(c),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function k0(a,r,l){const n=a.createShader(r);return n?(a.shaderSource(n,l),a.compileShader(n),a.getShaderParameter(n,a.COMPILE_STATUS)?n:(console.error("An error occurred compiling the shaders: "+a.getShaderInfoLog(n)),a.deleteShader(n),null)):null}function YF(a,r,l){const n=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT),s=n?n.precision:null;s&&s<23&&(r=r.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),l=l.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const c=k0(a,a.VERTEX_SHADER,r),f=k0(a,a.FRAGMENT_SHADER,l);if(!c||!f)return null;const g=a.createProgram();return g?(a.attachShader(g,c),a.attachShader(g,f),a.linkProgram(g),a.getProgramParameter(g,a.LINK_STATUS)?(a.detachShader(g,c),a.detachShader(g,f),a.deleteShader(c),a.deleteShader(f),g):(console.error("Unable to initialize the shader program: "+a.getProgramInfoLog(g)),a.deleteProgram(g),a.deleteShader(c),a.deleteShader(f),null)):null}const kF=`@layer paper-shaders {
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
}`;function XF(){const a=navigator.userAgent.toLowerCase();return a.includes("safari")&&!a.includes("chrome")&&!a.includes("android")}function JF(){const a=(visualViewport==null?void 0:visualViewport.scale)??1,r=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,l=window.innerWidth-document.documentElement.clientWidth,n=a*r+l,s=outerWidth/n,c=Math.round(100*s);return c%5===0?c/100:c===33?1/3:c===67?2/3:c===133?4/3:s}const et={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},za={fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},jA={none:0,contain:1,cover:2},ce=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,It=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,Hf=`
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`,Mn=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,On=`
  float randomR(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).r;
  }
`,mp=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,ia=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,hr=`
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
`,X0={maxColorCount:10},WF=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${X0.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${ce}
${It}
${Mn}

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

  for (int i = 0; i < ${X0.maxColorCount}; i++) {
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
`,zc={maxColorCount:10,maxNoiseIterations:8},ZF=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${zc.maxColorCount}];
uniform float u_colorsCount;

uniform float u_thickness;
uniform float u_radius;
uniform float u_innerShape;
uniform float u_noiseScale;
uniform float u_noiseIterations;

in vec2 v_objectUV;

out vec4 fragColor;

${ce}
${On}
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
  for (int i = 0; i < ${zc.maxNoiseIterations}; i++) {
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
  for (int i = ${zc.maxColorCount} - 2; i >= 0; i--) {
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,jF=`#version 300 es
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

${It}

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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,J0={maxColorCount:10},qF=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${J0.maxColorCount}];
uniform float u_colorsCount;
uniform float u_stepsPerColor;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_spreading;

in vec2 v_patternUV;

out vec4 fragColor;

${ce}
${It}
${On}
${mp}


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
  for (int i = 1; i < ${J0.maxColorCount}; i++) {
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
`,PF=`#version 300 es
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

${ce}
${hr}

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
`,$F={circle:0,diamond:1,square:2,triangle:3},Yc={maxColorCount:8,maxBallsCount:20},AE=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${Yc.maxColorCount}];
uniform float u_colorsCount;
uniform float u_size;
uniform float u_sizeRange;
uniform float u_count;

in vec2 v_objectUV;

out vec4 fragColor;

${ce}
${On}
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

  for (int i = 0; i < ${Yc.maxBallsCount}; i++) {
    if (i >= int(ceil(u_count))) break;

    float idxFract = float(i) / float(${Yc.maxBallsCount});
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,W0={maxColorCount:5},eE=`#version 300 es
precision mediump float;

uniform float u_time;

uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${W0.maxColorCount}];
uniform float u_colorsCount;

uniform float u_stepsPerColor;
uniform vec4 u_colorGlow;
uniform vec4 u_colorGap;
uniform float u_distortion;
uniform float u_gap;
uniform float u_glow;

in vec2 v_patternUV;

out vec4 fragColor;

${ce}
${mp}

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
  for (int i = 1; i < ${W0.maxColorCount}; i++) {
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
`,tE=`#version 300 es
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

${ce}

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
`,Z0={maxColorCount:10},aE=`#version 300 es
precision mediump float;

uniform float u_time;
uniform float u_scale;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colors[${Z0.maxColorCount}];
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

${ce}
${It}
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
  for (int i = 1; i < ${Z0.maxColorCount}; i++) {
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,rE={checks:0,stripes:1,edge:2},j0={maxColorCount:5},oE=`#version 300 es
precision mediump float;

uniform float u_time;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colorBloom;
uniform vec4 u_colors[${j0.maxColorCount}];
uniform float u_colorsCount;

uniform float u_density;
uniform float u_spotty;
uniform float u_midSize;
uniform float u_midIntensity;
uniform float u_intensity;
uniform float u_bloom;

in vec2 v_objectUV;

out vec4 fragColor;

${ce}
${It}
${On}
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

${Hf}

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

  for (int i = 0; i < ${j0.maxColorCount}; i++) {
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,nE=`#version 300 es
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

${ce}
${hr}

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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,q0={maxColorCount:10},lE=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${q0.maxColorCount}];
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

${ce}
${hr}
${It}

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
  for (int i = 1; i < ${q0.maxColorCount+1}; i++) {
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,iE=`#version 300 es
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

${hr}
${ce}
${Hf}
${Mn}

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
`,sE={simplex:1,warp:2,dots:3,wave:4,ripple:5,swirl:6,sphere:7},pp={random:1,"2x2":2,"4x4":3,"8x8":4},P0={maxColorCount:7},uE=`#version 300 es
precision lowp float;

uniform mediump float u_time;
uniform mediump vec2 u_resolution;
uniform mediump float u_pixelRatio;

uniform sampler2D u_noiseTexture;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${P0.maxColorCount}];
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

${ce}
${hr}
${It}
${On}

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

${Hf}

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
  for (int i = 1; i < ${P0.maxColorCount}; i++) {
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
`,cE={wave:1,dots:2,truchet:3,corners:4,ripple:5,blob:6,sphere:7},kc={maxColorCount:7},fE=`#version 300 es
precision lowp float;

uniform float u_time;
uniform mediump float u_scale;

uniform vec4 u_colors[${kc.maxColorCount}];
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

${ce}

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

  vec4 premultipliedColors[${kc.maxColorCount}];
  for (int i = 0; i < ${kc.maxColorCount}; i++) {
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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,BE=`#version 300 es
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

${ce}
${It}
${hr}

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
`,gE=`#version 300 es
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

${ce}
${It}
${Mn}

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
`,dE={lines:1,linesIrregular:2,wave:3,zigzag:4,pattern:5},hE={prism:1,lens:2,contour:3,cascade:4,flat:5},mE=`#version 300 es
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


${Mn}
${ce}

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
`,$0={maxColorCount:10},pE=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;
uniform mediump float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${$0.maxColorCount}];
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
  for (int i = 1; i < ${$0.maxColorCount+1}; i++) {
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
`;function Am(a){const r=document.createElement("canvas"),l=1e3;return new Promise((n,s)=>{const c=new Image;c.crossOrigin="anonymous",c.addEventListener("load",()=>{(typeof a=="string"?a.endsWith(".svg"):a.type==="image/svg+xml")&&(c.width=l,c.height=l);const f=c.naturalWidth/c.naturalHeight,g=Math.floor(l*.15),d=Math.ceil(g*2.5);let h=l,p=l;f>1?p=Math.floor(l/f):h=Math.floor(l*f),r.width=h+2*d,r.height=p+2*d;const v=r.getContext("2d",{willReadFrequently:!0});if(!v)throw new Error("Failed to get canvas 2d context");v.fillStyle="white",v.fillRect(0,0,r.width,r.height),v.drawImage(c,d,d,h,p);const{width:w,height:S}=r,y=v.getImageData(0,0,w,S).data,b=w*S,x=new Uint8ClampedArray(b);for(let aA=0;aA<b;aA++){const oA=aA*4,BA=y[oA]??0,nA=y[oA+1]??0,cA=y[oA+2]??0;x[aA]=.299*BA+.587*nA+.114*cA|0}const M=g,z=Math.max(1,Math.round(.12*g)),V=5,D=Xc(x,w,S,M,3),K=Xc(x,w,S,z,3),Y=Xc(x,w,S,V,1),Z=v.createImageData(w,S),J=Z.data;for(let aA=0;aA<b;aA++){const oA=aA*4;J[oA]=Y[aA]??0,J[oA+1]=D[aA]??0,J[oA+2]=K[aA]??0,J[oA+3]=255}v.putImageData(Z,0,0),r.toBlob(aA=>{if(!aA){s(new Error("Failed to create PNG blob"));return}n({blob:aA})},"image/png")}),c.addEventListener("error",()=>{s(new Error("Failed to load image"))}),c.src=typeof a=="string"?a:URL.createObjectURL(a)})}function em(a,r,l,n){if(n<=0)return a.slice();const s=new Uint8ClampedArray(r*l),c=new Uint32Array(r*l);for(let f=0;f<l;f++){let g=0;for(let d=0;d<r;d++){const h=f*r+d,p=a[h]??0;g+=p,c[h]=g+(f>0?c[h-r]??0:0)}}for(let f=0;f<l;f++){const g=Math.max(0,f-n),d=Math.min(l-1,f+n);for(let h=0;h<r;h++){const p=Math.max(0,h-n),v=Math.min(r-1,h+n),w=d*r+v,S=d*r+(p-1),F=(g-1)*r+v,y=(g-1)*r+(p-1),b=c[w]??0,x=p>0?c[S]??0:0,M=g>0?c[F]??0:0,z=p>0&&g>0?c[y]??0:0,V=b-x-M+z,D=(v-p+1)*(d-g+1);s[f*r+h]=Math.round(V/D)}}return s}function Xc(a,r,l,n,s){if(n<=0||s<=1)return em(a,r,l,n);let c=a,f=a;for(let g=0;g<s;g++)f=em(c,r,l,n),c=f;return f}const vE=`#version 300 es
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

${ce}
${It}
${hr}

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

  ${ia}

  fragColor = vec4(color, opacity);
}
`,vp={workingSize:512,iterations:40};function tm(a){const r=document.createElement("canvas"),l=r.getContext("2d"),n=typeof a=="string"&&a.startsWith("blob:");return new Promise((s,c)=>{if(!a||!l){c(new Error("Invalid file or canvas context"));return}const f=n&&fetch(a).then(d=>d.headers.get("Content-Type")),g=new Image;g.crossOrigin="anonymous",performance.now(),g.onload=async()=>{let d;const h=await f;h?d=h==="image/svg+xml":typeof a=="string"?d=a.endsWith(".svg")||a.startsWith("data:image/svg+xml"):d=a.type==="image/svg+xml";let p=g.width||g.naturalWidth,v=g.height||g.naturalHeight;if(d){const Q=p/v;p>v?(p=4096,v=4096/Q):(v=4096,p=4096*Q),g.width=p,g.height=v}const w=Math.min(p,v),F=vp.workingSize/w,y=Math.round(p*F),b=Math.round(v*F);r.width=p,r.height=v;const x=document.createElement("canvas");x.width=y,x.height=b;const M=x.getContext("2d");M.drawImage(g,0,0,y,b),performance.now();const V=M.getImageData(0,0,y,b).data,D=new Uint8Array(y*b),K=new Uint8Array(y*b);for(let q=0,Q=0;q<V.length;q+=4,Q++){const k=V[q+3]===0?0:1;D[Q]=k}const Y=[],Z=[];for(let q=0;q<b;q++)for(let Q=0;Q<y;Q++){const L=q*y+Q;if(!D[L])continue;let k=!1;Q===0||Q===y-1||q===0||q===b-1?k=!0:k=!D[L-1]||!D[L+1]||!D[L-y]||!D[L+y]||!D[L-y-1]||!D[L-y+1]||!D[L+y-1]||!D[L+y+1],k?(K[L]=1,Y.push(L)):Z.push(L)}const J=wE(D,K,new Uint32Array(Z),new Uint32Array(Y),y,b);performance.now();const aA=CE(J,D,K,y,b);let oA=0,BA;for(let q=0;q<Z.length;q++){const Q=Z[q];aA[Q]>oA&&(oA=aA[Q])}const nA=document.createElement("canvas");nA.width=y,nA.height=b;const cA=nA.getContext("2d"),vA=cA.createImageData(y,b);for(let q=0;q<b;q++)for(let Q=0;Q<y;Q++){const L=q*y+Q,k=L*4;if(!D[L])vA.data[k]=255,vA.data[k+1]=255,vA.data[k+2]=255,vA.data[k+3]=0;else{const lA=255*(1-aA[L]/oA);vA.data[k]=lA,vA.data[k+1]=lA,vA.data[k+2]=lA,vA.data[k+3]=255}}cA.putImageData(vA,0,0),l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(nA,0,0,y,b,0,0,p,v);const I=l.getImageData(0,0,p,v),X=document.createElement("canvas");X.width=p,X.height=v;const tA=X.getContext("2d");tA.drawImage(g,0,0,p,v);const gA=tA.getImageData(0,0,p,v);for(let q=0;q<I.data.length;q+=4){const Q=gA.data[q+3],L=I.data[q+3];Q===0?(I.data[q]=255,I.data[q+1]=0):(I.data[q]=L===0?0:I.data[q],I.data[q+1]=Q),I.data[q+2]=255,I.data[q+3]=255}l.putImageData(I,0,0),BA=I,r.toBlob(q=>{if(!q){c(new Error("Failed to create PNG blob"));return}s({imageData:BA,pngBlob:q})},"image/png")},g.onerror=()=>c(new Error("Failed to load image")),g.src=typeof a=="string"?a:URL.createObjectURL(a)})}function wE(a,r,l,n,s,c){const f=l.length,g=new Int32Array(f*4);for(let d=0;d<f;d++){const h=l[d],p=h%s,v=Math.floor(h/s);g[d*4+0]=p<s-1&&a[h+1]?h+1:-1,g[d*4+1]=p>0&&a[h-1]?h-1:-1,g[d*4+2]=v>0&&a[h-s]?h-s:-1,g[d*4+3]=v<c-1&&a[h+s]?h+s:-1}return{interiorPixels:l,boundaryPixels:n,pixelCount:f,neighborIndices:g}}function CE(a,r,l,n,s){const c=vp.iterations,f=.01,g=new Float32Array(n*s),{interiorPixels:d,neighborIndices:h,pixelCount:p}=a;performance.now();const v=1.9,w=[],S=[];for(let F=0;F<p;F++){const y=d[F],b=y%n,x=Math.floor(y/n);(b+x)%2===0?w.push(F):S.push(F)}for(let F=0;F<c;F++){for(const y of w){const b=d[y],x=h[y*4+0],M=h[y*4+1],z=h[y*4+2],V=h[y*4+3];let D=0;x>=0&&(D+=g[x]),M>=0&&(D+=g[M]),z>=0&&(D+=g[z]),V>=0&&(D+=g[V]);const K=(f+D)/4;g[b]=v*K+(1-v)*g[b]}for(const y of S){const b=d[y],x=h[y*4+0],M=h[y*4+1],z=h[y*4+2],V=h[y*4+3];let D=0;x>=0&&(D+=g[x]),M>=0&&(D+=g[M]),z>=0&&(D+=g[z]),V>=0&&(D+=g[V]);const K=(f+D)/4;g[b]=v*K+(1-v)*g[b]}}return g}const QE={none:0,circle:1,daisy:2,diamond:3,metaballs:4},UE=`#version 300 es
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

${ce}
${It}
${Mn}

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
`,yE={classic:0,gooey:1,holes:2,soft:3},FE={square:0,hex:1},EE=`#version 300 es
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

${ce}

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
`,xE={dots:0,ink:1,sharp:2};function uA(a){if(Array.isArray(a))return a.length===4?a:a.length===3?[...a,1]:Jc;if(typeof a!="string")return Jc;let r,l,n,s=1;if(a.startsWith("#"))[r,l,n,s]=bE(a);else if(a.startsWith("rgb"))[r,l,n,s]=_E(a);else if(a.startsWith("hsl"))[r,l,n,s]=SE(HE(a));else return console.error("Unsupported color format",a),Jc;return[yi(r,0,1),yi(l,0,1),yi(n,0,1),yi(s,0,1)]}function bE(a){a=a.replace(/^#/,""),a.length===3&&(a=a.split("").map(c=>c+c).join("")),a.length===6&&(a=a+"ff");const r=parseInt(a.slice(0,2),16)/255,l=parseInt(a.slice(2,4),16)/255,n=parseInt(a.slice(4,6),16)/255,s=parseInt(a.slice(6,8),16)/255;return[r,l,n,s]}function _E(a){const r=a.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return r?[parseInt(r[1]??"0")/255,parseInt(r[2]??"0")/255,parseInt(r[3]??"0")/255,r[4]===void 0?1:parseFloat(r[4])]:[0,0,0,1]}function HE(a){const r=a.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return r?[parseInt(r[1]??"0"),parseInt(r[2]??"0"),parseInt(r[3]??"0"),r[4]===void 0?1:parseFloat(r[4])]:[0,0,0,1]}function SE(a){const[r,l,n,s]=a,c=r/360,f=l/100,g=n/100;let d,h,p;if(l===0)d=h=p=g;else{const v=(F,y,b)=>(b<0&&(b+=1),b>1&&(b-=1),b<.16666666666666666?F+(y-F)*6*b:b<.5?y:b<.6666666666666666?F+(y-F)*(.6666666666666666-b)*6:F),w=g<.5?g*(1+f):g+f-g*f,S=2*g-w;d=v(S,w,c+1/3),h=v(S,w,c),p=v(S,w,c-1/3)}return[d,h,p,s]}const yi=(a,r,l)=>Math.min(Math.max(a,r),l),Jc=[0,0,0,1];function Ya(){if(typeof window>"u")return;const a=new Image;return a.src=IE,a}const IE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUCAQMBAf7/AgMD/wID//7+/wT+A/4FAmYIAqIKnw7+//4EAisEAUgGBIYIewkFVhEJjAoFAuEFA8GWAv6T/gz+AzER/25z/wu1/w1nAggL/049BQUC/y39BrckAQQp/wr+AZYNOvx9AQkN/pELUvMFaAZTBAgIRgsO/7cJNQT+YgkLwRELIf5O/wlP/v79/q4IGAYLK4+kAQ1tAv4IdMpc/4xNMBF2/lQN2vTFAws9BLf9/3kJJgsMRF3+HwkLxfv9BVL8BHEN/9gMsg7cA/13/vv9OAqWA0sOofP9TAsIe/4FQqoF4Q/aAgsQwnKQAwa5BP0JW21NqgmY/f3Z/wkI7whGjAr7oAkLrGGf/JH8jg4zAj4R0Qr+xQ8VZv1Y/8O6//wfA/5bAT79/lQ1AGn8egkKdom0BgYOsfjtBAVDBoz9/zG0A238P/tsbQ/+A9rIig/HCEtvIgrM/1lwBWgIlmr62Q5qA5FndnEIXa+PthUMrqiRfw6SAodE/0cQm6UOirP5swuMCrEOjvo/dBVSA/79KvCgSBL9M1E/TwjUag/e//2WdPZ2TQ9ZMvfPxRD7aPpmOFqXSPu3pww5B/wR00wTgVf3y6dXW137ffv3c7GNj/icJG+4xvYQ61++CZOVll8p//uXzgyTKg6m/1L47w3cAY8EI1T7xvgKbkr7UsGBJPNsB7xL2wuvd5z3svmDmgipcGT8jez8oP0R6bNYuVpUxRn9LZVkqIijYxK7K/dZBtjH/71ZT/1myfz52fVm2WBfk0vxUFj+Vfv9/9plbfz3yl6VUl+flbNijrpfpfz5TZSGRKAI15X14pSt4vwQKMHOTQlKifz1sKW6A9u2A7R65waprffGcfeY/8iyUsFh3rn4lGERMUHJolveAs+PBdb5iZFuX8S8SH7Ekfe8Lwy0t5cLwsD3s2TzbHXa/478nLtNQ6NtstW15QvaKgr25FJm4vyXwFlPInIPId79dUr77fmr18BGdLHIS/mGx6dKw64L7v6k32XMJrWl8ELA3C70AAAgAElEQVR42gTBCTyUeQMA4P97zIx3ZjDvHGaMYQxjhhm33BGTY8h95sodkaNkXVGhKGdUri+SIxQ6nG36VUhS0rnZ6tsVfR2ibKlta7/d5wH7kMaTxlOVozEoHgU29/ayNC9YlrZdyVT+Lf/dAsDDc/xfzX+MLBa2LK23goK0aXhCxZ8qIAdXYj+c8zviDOtRkhEtRxNajHWLuCtdcfQqV2mgRlpDD6wJpKpBrGON27qa4nNeQOU8ViU0pZ2eCMN5mWO7bfR17Q9ItpsqgZJNJcJSq6cSWiV4q1zIDMmkqzAdpqT8gI5G3qm3YEyliPPG9kiwF7P99ghNn7zLs9EXFvFdLmlOdKBAp2ZyGTcI4JuBPYrWyGCYwgFwOhTmHeYC0zEDSp1iX3W71cqoW332M++OAYJUrEySVX0c5lzmDgLcAQ1yFVVOgQ5l+j1k6TEBidTUek7OF4T2kDYo2eVGwOrglKyGBXYyBrxFv9ptR16B+BJ0IFCsryJve0ZEuzNjLeEcw/0aK/kyku6JW0BiicnCBFptKAQRRNRrtmUV/YOn6GNMHXddsFf1YZCHMnFWgcyp2gnLOWTTBcVQVvM/FTgJAHl0NWHHzL0eqzuRXTDCEO03DoThV3kezhrtpNqKW0Bb3MSSAJMmmVnLEpexS8JrmYOr4KXz1cUmByty3N/sbEzBSP8tfGSCJ3caYDhymsPdGbwO4HAl/+PYDCZNf+H6kofkNk4N4Zn6NM4y1lJD7Tt2gyklnrR48dgbfHXgd9uzHvpamm3wKhcaLcawXWxL5T97dL7MeW3aZ7NDWksVZyZv8VQyjm94CDU7UjtbedqOCvB2DdE+wFC6a5JcEIgkKRJ8cfTGmW/2jMS5LEWWKiGY0BFaDNQ++2+sOifPMQ7CcHeFx+PPpcbzRoy4IKmVwHg/1842BwoGc2qlRVoNjCF59oXsrcBgVEP4u1GIX7jshIMqqPdbGTRJzMXcyyyiNG5fr5qFrUVntrktt4QdJugkr1kzNJCK1roWpTraix9JVMpZcsxGYsJlGiSyEgOFZzHy6YVlilnicmxUVkdX/PetzMBk92PNJNkIaLhmA30XPCrMuncWxOZK9kpLnqpYOOsLFFmaf2Mk8OH+BbwPH7HBX2KGI0Ns80gleH+Y6k0YZcF0sWgpoJA30BBbG59XaKyBHoxFtc2p9sFvyXqo2v2aRKN+1HLPshCibfZESAESYsLXmz3tT4wNMp0Wali+VPN93JIJaQ0AcXGrNMnSS0YASPcaNh32NhO0sWHKPhrNVpCBzyk4EWR/PnmKE+3s2cDO+YF6OddPNx7G4AIrZBPldw6tcss4bqzb6hBy6ccf3YaBSNRBFELueRFp7DXWNMFVAT9J1LNTntEyEI2gJS64oyKMKvSRrbpPQGE0rEEmHyqCl2oQravq51FwJXG0m/pPdRA6Xp3sSLdwGwNytaLg3g3VEE2eFESy/GijQPwmYPjwJT+bH/ax0dNT0NZAFQxyIqKzET00vUDuJ+T25QGCclaGZiJBxsjtz3YMZ0PPsq751h0ldwbZstMgHfnauk/7n1eZxEmYIPf5wPt0KJvg2V9bcYWGgua/Lvn/xG5q98tPLcGzHaac2+Cbs3niyPtGgfYgBT2OHgxvhGxzApoPxPoCOtUNCXX+ojW0ug7DOuyrOOG5GkWhaAzx6ZyGE8qbCPS1oxzPjcWSrG/ICNaNMKsra8bIlQVvmRQ/FY4WiHhnrVz/VfdOiOu6u66gG3NKogJ/0rGdbC+iPN1pbZ4HQAZODS+mC2z9dNBqSzd6mTQWKq+EI3fXgJQdqfqz6jY6Fbs4sWT/QkaLUOBnMhWRmSdrpTy769BcCql1UOmaqtFbDA9d7qEox8Lpa+TPXX+xm40jrB7EBK1lwu6IMud9xh7NBZCbq6PNN/QdTu0BVa2neF+s8b1dGns5tMGxQIP/+fiY60jZNp9n5D9MLm4NLWO2gXVG4xwDXHeHXMFEAITOVUGJRoBUwOV3miiTEPPzLrwDm74zFsW9zkfCASQvPi2RaF9qJ2HHWMJNxCHzDym6tNfXiEe28ZnjmHVGwlSvfgBo4afqcoTh4NNq7QQ1KrPJW+1uHEK1VvTghGa0DAePo8D6D1NCYgEPY239D/RQSUMxWJsAIi5KEp/3/9LH1wSTwl8/mfekwWyIhAwMPErzWxVSL7sFnFT1NqJ+Zb8hX4cqwyucXdUVkaqNeVL7abNtJV++aASn/d+Fw9qlVwplz4SqpVw5CBK7nq483nxbZ8p/8TtFwr8oD5uhq+lxfovd0x4+MHo1Wv14SJzqBo9Un1KCZ8NWfbA7jLeoMjnCcS8bjtKuxii0+0RPZlLS6NdhNKHeN2NSdCswa+K+aGFUTD9MLW9R7mhPT5i88TZvV5rWtuek07W/vBev9eJznPGkM8FrCZ53AB8+Ig7vKms99yRb5fpyoQssijTwz0i22O+HvjsjyGXpqseb4t4j6YW86PfJF2cnjmy8EKVF8sIomGUdVGBquOIDIlHsrgPkJEzw7KovqHB/kS+NPgs9nG9FkG1MJiA0GNwTyj5dRS0uiWTfSLf7jpL0ioLExajL/OJPkUbA6CIdKjpU6XrSY/6mE5Z1IDBoHX7tGx9fFkJZQPrPIW49pj9oUEykkiolzaein8mBh/C/0eAzYoFXHWJxYZWrv/ayPmcWsjfWyDy8ndnmPTldcJ05MaxOoIHWPcND2SOan44Wc1Oxyk59KHbiXwbrxB3qvAEA+Pd3zc3MkDFmxjG3K4ZxjHHfFXKNI691kyRLjmRCUmTQWnQo6XS8JNFBsTkqiRQpijalraTe1VPbpa1394/4PM+naUIl5jb9OQw4tXHsFyAoD/x8vmlYJu23hfowcTnJOXSMUdKum4IqKUd4HJguRiprd/Etw9K/NJ+UKE+T2v39ms2JRGhtNDxShw6kmZEdsr6fwVSzZUCgj/xK8CaD46MMqjtVmEE0DTPS7yo7so402lkAAr5A9TA8YbapYO+4tLHK+uBAqCsdrmkNB/tSNQxgrZRiBjhVSt904TQbBmEDW36UhZEwZN9TbWh1vtrLVYdkQKayJHgjO5aVftyaOhbtIVFjq0gImWcFJbXqPp+aGTaOzHzPptvWbli/tEz5BHs2WdU4y01sOWIdG+CPWbxSDnQ/KbYgddG1ggtPPUFvXeLdNH2EoslAveJl8GUVaLs6WWsoo3G2Q8KnvSkrNV13rJm4fF2jG2NKE3FMgjWPyCyVVZXDxk0WKQyzIcdGvhovfXwvS237WZN3PvX9Dh50V1CMuemc5AkPWBJzzlg8giqz/M3mICBajNsO3PSuByw3zV51gCTybHlfu/R+zXwVekhzN1C0gZCgqc3x8EUR5Mt8LndPRv3AbLnf2ZMLJ2TZBapthY8hSsIET5/vpH1T7/l1IKZl4pTp2eMVFT8J+1JyElnizM32GmBQTaTDJOwuvPCV3QDonD/6xjwgR6SA92MF+v+Xlo/BDyOZJpkM7QFh73uKxzX9hlDol/x5HVESyPM/HNyF6MwCg866UWXm9Jd2xsjrXyEKgjl11K41nEwzFzjyP0V9T87dStAustB/MkOwBaQoOCNG0+6dfSw2YIL2d+aAFbtewoPIATWJC+6il2nDFDx8Vlxg2a22oZG4My48gnrQEcDxOuE71wz51mkfvC3B8gjF04baNRpg6SGoHIAc+zB2Qqqn9yEzCXfpmpdN2kxdkiMQ/W/X7iT/RzkpBGvlGrx2Bs4pl3s8Akl3mRTsubk3x+CQH47r1ZNgECzf7IP0nV8lRUj1XqsW9+wNI0+oAx/lOGVsHcmalqdAqT/Rb+rp3wthEPxjXI6irxhTZc9U20OHSbYAJCX6MKHYW/P8XRlyam7KHfk5VTu8Tmebd889NmQ7hiuPb6bQu8inM/FOXkO7iEWd9hgyBVEErR+8P+Om2lFcXGp8DGe734LHfS2Pk7/pzSwPvdrkd7/NgVo0V8s5ir4NYME0CzGbOVoiygQKh+vexBN5PkUBa1bYInKhFqBi7f3FP9xdy5wmH5ByEL6YmlsN4H+lvQJBG8TSvwBmhcGUafV9uPlIYlkx7S81YuG+rzfC3Eb07PGLSnvKO1ujlkiGMoliWkYJ6XYpHzhP4z5odeImZqKxZT1hFN+arPz5Dw2e00ODXsBCGrf4jB+45ZT7UrN7VBRUYgrUJx0WkxNyMCSxRCIYwgyqxP8Zv9VC+6aiUgB0eIt08YI0fh2ZFRqSilUuRRvmt5jejdoSCjfaRFSca6RXh9kVAjX/OeC8Fbgdo+Ffx9K0zF8p4sLEk27kG2vWNThL82M/h1BScI2Kr8fOKkYdh+WXxAYVPhsD11sx5SDIEyx5CGwE1cQ3osdYdlEP3/AZPwvH8oc1WdqXU/OM6fdPELtY9JRSNHEepmC3ZWgsLZss2H2qwq00xxA81SAexVdwbL1ektQlJeVMZAGObIMXLK5lkb95dhjMzkc/Lq17iiAPa1uAovfIZZLe/kaNzRCUCr39gjN5YW18DwBEKdQkVriaJc5BKEHi5s3DEMukQIe9bStXDHyciJ0Xv84FSgb6OW6WuhFqtyjdjWTw/jt87MnpqzC9LTP5d6vqhMo3Y4u6dwfNAzL++6ah0G8ahltlcWiZPeGtcG104UJ67f4QMwOqq/jMIFw8leQ9VsbOhuOtjYqx9cXIaiBcng3fueAQPIz7hl+NJ2ltWAECQIyl81LAaRwlbECUyuuxtH/i/nb25kFilIsdm9q0qzIVxbO2/dyBPwsOdwI/A1NIhXctIgDDfKCMOLIhEHXE0TYiDRDEMkzWtQ9aBbO3WRIhTdI8MGpPh+xE3SEvZM3TsaSkSwo8aIp7vcBPSpNIUWc9dx2ihGIUfcCMA6h6H0sgzlYo2LzwzsSBG/vPLUKBRAIDClNo2hylJMPNHUF6/FyCi7vsPpUBU5f1Zryco/9dyqeIEYzdzRL4fhRqyDTW1lv0jlQjuBtfaUaKBPI7Hr/G7RcawKWd8xytCCHq0tGrABFlLf+tFnXvcFRUS9SdsaU+DOI67yy47KiS86yVHnkbvbnhw7R5+QMX6efQ0ueOVdVkKZ5o+0GzRYPc72WXnZ220/EEPvQ2mJs9umccvaJ9JQDlWujkWdH+bCuOl6OBriPwtt/6D57aofIHy0JVbraWRZDo7xiUeThF4JL+APjur4ftrBDOoDbMmJGGRvnl0iv71YPgcPgMSa8PT1ZvFkRgx3zPM6BFff0dTJbRNIHNd92hlQTTuYNVd2W6Pu7Myx+NgVOiFPeih7aHHc/Dn2tVtPIQZTLWhr1BSVJzNpZo72uzoDQW1D6KG7aCPz+193FdMxFtZ/hYE8idJqfsq7jHo6USnTep5tp8D4LWtSPqIJS9+U4cc8Ym8lJ94wuv8uj5DlIsflhtItJUoeNhAnkdEmUMIsLbGt6thjaw5suLGIwXg96aII8ttrigpcKpcdmqmOegLraj5h8AAQj+90zF3YhqscELTAFaWZuUAQMThYiUb/FNHAlDUttdbQAyP0iCmwvBlXj3bwwGkEZxh7Y8fY1TB+UUdVfjDXKAaoLYaWGWCmVzzxQxUQK7wSFq7btNyjcmKx2vXgKNSocDI3W0q3gacABoST1YfO0NC0OZ3VJ2PUAwXIcsOj7fJ6GGGw3hkT0GAMOIASUuHGB1NI2BNAAuhQtFj2vT4FWOBwA8AZQCJQw8v+fPYq97G8tFNng/7Ieg+y8KHAcI5wACkQOUMBG9bgUsiYNGzPHqgpWonRw8Fzw7aDForw4oGUkSvQQ4H18ev2sHhEVc+aMCAykFFh8LmGKQVJKhIlOdALmkAKIDBkf5txoCxwKdUAz0ToWOJaUGAeneA3pOjwFyZwApO7V3akpwjkl8oyOFoQqEjYfUC0cBHVCoAzuMMH42EggBKSJqxhsQWwBEu1doBqQKAktnbzMzwTSck8w4yPZwGjYeKiAjDxSHIz0HE3EjHAUOAk5RLXQHqIsOrysqUAHM8BmGZRVNw6Mi1QOeAQRaLLABABIkQAM0yABTbYCxYAC+HWBJ00xdN0r3YZU7ubbjAi0CrjFHxLMzaNEjFLz+4ScStCg4r358a5kbAtifbaHcTY18qVrMIdEEISdanHgWFdkBnM8/SEkTKfoHaS1aNTmZvNwAflsqqgZLAjBXyAMFyrIpbAVGV6oAKrCcPqAr45KYS/sfi9mObGiSlB0D+wALckOOCGOriDK83ywNfxUfTw5tHzwDGiJaJ4SU9holF5fx3X6qZhsRAQeNjT8E/kvHIKvUY1sAUZAea4Onlj9sE68EoEUB458HLCDmAB8MIw6JSiQAN73SPLEOfGU31KMYEYrTousmiyRtBTQ7ClaT3ANP6uFYKL84ahsIP6ssogAAK2ks+AYESgB6V3UYAypGWgKVqngClwwJ4MMim9fqCAHJWh0U5DQ7OVAdSk8dtdOMDCrNkgSBo/c0qyIuBDEFbkh0SUHxE+47GQEo0sga4YD6zesDkgAXwjKzLArVShiyFFWSYXkS3iSlNQsBUb4kAQKUESNv4bFLCMoBtfxJAAAACsmEpW4PjIM0DDK2ZbpZmBCz6FoZBgXsbtnLKab9EAxgAVmSeUimBgihp8IvMSfWAwTyz2AE0IhEJxVzmmrwNT0PncoCGQXQtXwua50xk3uPDI1DfqKHdklTBVYAioGcInu/CGIX1GcrkE1cTAHQHxBAprY2Ib/AxT4WBxZveQAd5CwBQsaMPgkdmgYbVQpqCW6JAP29BmFQDW+aDAMuXCMvfT9WrGXn00cmaaaXZvgDOV/4nwXQKgfTiEmisC6eemBCMrpfiElpnHRef3auBiVEA0qLWeFLEAUBBa5BCblqmQV/CgAZ1UEFS2EgCvpyuAMpGyc9BVooZsCBADmIoACXkboDAEwGNNmnABevAQcGNhceIVFDux3uWIIEPQAsjr5l1g8ClQpMAwJsOVsOFi0Uvq4cDl8PEVl0AAdaC6mFaVQiDNeeA9ECv47hpTZ7Qk1VRRwbdRax8vFXryTiYolAIwprBlZ0pa+KKl5wBU1lQRMCjFIw0l0YdXYDC6i9MgDUC6kp3+A48fLH86hBDQILLQBhZJ5hWwInm3QIHgYZEWvbV70xWqoFLAPERDLK4HM5/cWVKbX8bAMEE7o/Am2aue5ZF6OcLqqvVu8EC6f8aJbYBZOWXW5xKyBANEqjA6AskyIoAf5MBQGnKBpoPTABR+0/oFUHAU1VAKsOqV5NYgBBHwZZh1rUncwDCp7sSWwDQTYKBQdpCzmIrMgNN5QDEbEvW2QFgmmkKFOns0WDQamWLPHDNVGTniIfRQ5HqfKsg8Uue/ER8pZHd+ebUSOm7KgF63WiTIhrWg6oJYgEMYc0LhWELTvncXdcgScC3S+BnrjLYYsZK1PXQ4GJZugCuQAClGncjGcMCJwGMHx8c7mRwoVCQAMJPQO/MQBbcs68Zz2lDQgs/R85PVvPAzRJwGkC7MYIF/UDBRoHd1GhwYuAEoXDO6sFqIIUr3wOHGmZFK1zH11Bh8iGFWc8HgEoQwXvQRxHJDEUBTF/AplEfWUmWSMJpiEUvAcghlFGEQtETwA/BxQAeDBBt1IYKa4cADo6WpUuAAMg0w4DBroB1hgTiAJ/RN9REX0qcIM3Fb7b2AEEm+mOawIEXgFg1ne8ByE6fvMKVpI3IjdsAQETBiWUmjZGDQhjQTF8FgldAgNRNiACM16kCBXhkWoUp+4SP+hEEghL9k9wZjlmc6scT6cUqAASj5U5aTAbAwOEl3ICCG25JR4ffsEKYfUNKIkoY2UMcAkXDqEhrGQ2b2RrqaXjAx81CAUWeXVrAI4mGDm6bXtoAwYVMi4GSk5PUVtclscH8gIhvXQ9UiUA1unQH3gHBwkwq/5SRAaUD0GYbE0QL2MAiQbzlasuGxcYAwE0vhmvfgAe3CW/9BQfAiZ8Tnxx5COM3BRtf6U+K/tpYA+lJQO+LQPteW4WmCHRYyCQALcpWAIX8w0S5CQPI1seMBmCcEAegczCb/8FJpCzbAWD3H5NorMaMENXbcyM+SqnzMa1KAA9KRESUQB+C5mbhqFe5lVYhRtCGAK/a7AxcRIgu2O0PwDuLixjUViaEgz3FA0zqDci2tBRCSARPgRBM/NkGRlZeCFnHlEiyaQrgIgQyl66REcXNJslVzwimlyANCOKfrhClEyKOdFL7hiibMlFBQQg1jaLPAADCPz3BFXbRsbE1+oiTTkKCl8XnvRMQbUbRUgqR+ICSw/lJnACx3kIAhaIfB8W/BnkAGo4MoPAYEEA7RTnB5Sg3RinVnQRBQYS8wR+CaYzXT07BdYMDs8Gu44ABtULIyJHDl9wejIEAGo6jg0VoCpEOI0/YewzCgIzcEmGYDY8+rhtRfEyZQblSwUeDSI/X7sFhPM8FQbc4nCqKe0BtEIkeVqJcscyajxYOUfpyk2ANDYfAOmZD6zJTRSBDpgL/N5wnUqyClKcYB05MI1UBooALCvUhuAcyf9sJiv8GyJRzX/IQQCyC3ZBSzwcO9sXB4AIlRE2vh0HBpcF5grsAQPnqAA7obcALildiZ92TM224bdMmAwPQINWrPd+RCgHJxgDfwMv0YKRlEBHJnpxkJytDXXpANUtIEdWWmUSBAcJCSPkZZ0GEy8MDKof72cdh+oTQjqaLH0McSmDa3cQnJ6lQ0N/+aitLGabIwgrEzCvmmp/o49p5V0GNlRLPRbu2UehI31oa8rgCQhEB6mYuZpU0KMCA2URBW47L4EFCEEgFz8IC8xlQBN3t0iRJY+oxFKsIMEPAMBxbQZ5ChYjF24zfKVBA5UGcHmAAsQ3Zgwn9mMueQ53L9/rahkcB2PJEpl5AIasYhP/UBsSETYp00xgawArAIQDBEgPegICAY7xP353eEuT/Ty9fCWnKMRFNQQACMlLA661MINMsM2jlS7bJr8GyFo0bmasanYGCDqsgIONKQqkAGeBYAkHowDYzhhEM59lCAFQLOH9SCzwQAl9AQZI8AdUPFsoFXJbAAEoFp1vvyL6CQ8nDsdymYQNX0B+FM0EBi+IBmIX5R0i5ed+S0/eRBB2EQBmGBUDWLTLNyEHJKJOPiJaTmkSDpwQNgYCGQqA1LUHqtAwOYMi/of0CMIHTBipAIYEO2MKkkC1BQPDFD4Ax8nmll9bNkZ7bmwv1wIH6qkQQndEHQYPeXxUrLUnE28cVsctUWoZGjYVKWe9VAI7RFHZnmsoBWVmYD4xTWNtGZ9wFawr+wAASdAIf6sAjAbfucWuRAx4jNliQHDSAII30QYUYqZ4xSGTct2+WT1bCnw+AJcbNXKKSE8ZFR+fPATWLFkeHQcVH4CxT9sDtA1cAFADBk8ZBBaRRpJovyFHBAEoMwPaXYvvOh8bfQxDvxShtHKe4KQeeg/AXhcIJKBkjxwgXgB+PCAtPifdTwusJGdXJibqGQzCPyySkBZJpz9En7iGYiCX83wDeQbt1TdkV6IAAGxhL0wERTmBBzESBRUdFRMctnmVblQLazgBAsJXtHhcHCclXRoeywgpDynhVqyFWAZBYTWCEviIXzaHwMxdN05xDT5FAwDkBC0TbBYFo2ssKCNOTQkodAEG0uYMXix5sMvSBZxfQ3Egc5k+AjwvJQOEN9rFpuYXv4oFPCULWRr5AKprOYWuCATtAAlKBrcGkIICAd6cnwxqtl0lfz/5+hUR6q/mHdbFA68Qz8syO8Gibp8LetHFNF8tRAV0bEYORkJhTRQFxAMdPwUJMicmXlQKBmMsZwKoAMA1DGAAEQEnMhcBtQZgNggLxcHiAoCFFYEMAd91E7K+4vHKXBbOfJrOAG1E1YEkqxGsNwUr0w0pR2MitIQ5BlqXAA1atwMCSgBYnTuUtAxxNg0ApC4fgrhL7D5sQQM+pLcGg2RmHwIZNZPGC/cI+3Dbb8WlBSCJ/uO2txmjCBULLyHgqeRjEBLnACxYAkBvBQE2owNsMXy0kzWqADm6Oh7HbSK2kQ53AIoKAFWwN02IAuhiBIQgP30OBTUCcpQr5T2fJjB+bUd/2g5Go9sMv5CrnFlpfAWsi+mamCLtIz5VFsBrbb4AM42rGna4cyoQ2eMO3z8NN8BeNKCKBQp3jFrOL+zqP9WWCQukQGBjmPsTAChybv4zgnVctaQ+ynQlaFQJtTPSxEAsRLwRAK0pStgs2M0EBQtIBmKomNWHKHU1uDIsAg2kEHvlUc5/AgICJ34VcpskFZHSgGFydLhFCo6nCXFfWXgIGgY6R9CKIkFdswK6euK1SRkYAxdXV1Z+9UWpQQOzIqloZy0FIoAZfxX7FAEasEKHC04pAAbnGP4CkFFkEZniWC3xBD13ADNArAFjkW8nICQKAOvmzBI8y+QwMBUgcrY0WJdtSxl0hFiiptgP3hDTlmpdVwDTCwZ0BDrZS0eTQt5GALQLQQJcPsQNOkguZZwCIMTEeadTAyR+ijoz4Qo4VzZZAAAlkSVs6VUcZJepUq0Svzx14BNIbWLpMC7XFJGvfVpoWr+cAI4twmWi2I9wqgwAaiwDPtB9E7z2SlYSA4hvaKQ1nAZ/MnZ2kRZ5P60FIq16lCYDVwVsKAx1BqPRgzsOZvKTPIoBn9kCKTDuDtMFqtp2nRYWNRw6ZBc0MvZ2DYu0CLhiWBeCK9jSZwBQ2CySAafnVwKo3rdJXGWGUQv5gHlWsQQUAFUmWXi4AQNX/oqvEnkEUKG6tlZ9QkzDT1jLpmR9fWCg4wByAi0AWeNCBgYJ12ItvmMCNwrVZkYzcU5GBs8aT0XcqZ04IN6FTgQuL9dZDbIa1W0ER64dUb07oB0eE80fZ8/do84xBFGBcwGbppkJq530TW9GuGMsjLJLNAWrBU0KAKYedUoDH3QB0iGTAE7OOxuOVL8BIAMPUxKLA7HUBjHBHEQvFD87HYE40ZqAAXEF3+EI/FQAACAASURBVAA5VAcYSqwlTR4TFY8AFHwtHQXQhYMABwj490xjbrxCQRY1FA0MBmQdfy8KK5JQK5jIhiNb0AgjOAP7zB0TqcsihQUwRXSdVE4CD0RhWQx6EEYLhhYAeoE3P05iEwbgIiTEHEUiq1SOJcmGFl7Xv0dlavCgAliw5QDiemOUAuaucf5lhTXGhc5AoiqoZFu0WZDr+oQYAoJy3YAB2FsNETiWuCXLoc1tIQasfWYAMgQUTgYARFslHwpiRDUs1hBRoB0bQ7+s0NKTRd1E/RCeHiCeUK9JN5EAdJfznAEq8htHb5ADuUQCf8tY/UgQKaRCDSYrhAiA7UateS9WPksK2cYTfUrVpCTmA0SUrFBkXh0Am/veTf7P7Lb4DU8aKbKXz0zdwW3XchzRimAwkx59hHaKO2GnMbYaFW0YBYkNxWp1SEXiNNCm5g3DNIMgtw+ShZNpOpYq/Q8AswmkIiOEHX99N+JMMAC+JKYI7yrXvJWhZgcNbtz2wQA+bk7APAHTMxnOjSWcrcbzX+OZWahITJEaSlVq6X0QGs2kD7jsDlU8ixd3KQOKAgHdAVMANmNMOIuMjEusSjd7Aw4HHBUmlmJgCkxWYk4Veq5jVQ9CFDiuddoVjHF4dDYARDwtTkEhkSROFdWSdDsWaCj4BExuaA8OTiCxBNJIORyAAoMOTk1iT5wDLiZJBrs7VV4uAKKQCxESEKAfymPGhzOP0pVhBGA8ol5iCxpyOoZZFCJJRRXFTm8sA7PfEnuAEgFx0kBskwNQZhyzMLaesB4SdgBuQAKmhMetRhYAICQAP7EL9S9J8rk7xDAYgIxMIlDWBG0DAW8BYAdGkayHGwwrAi4b/r5sA0rCezgdXjtnijaFR5eSBAz/aVQ+mggCDxmYem6hDQtN369pqjuUEgAYD0BSUCT2CaA0BkkSSiDM6jOEQDOFjTDiIQAVX1TPI7bMwK6hF1sFT16bBoFTnVAAFcgndTYODzc/52xpHRZyNxDDkQBPhGMNhklGAbYDJLs3NFGGnC8lCpbuAl06ZWbRM0QQJgfnBAVVCyqR6L9SLIHQDAVNGpYiAIc1AJk8AIAA0TfDOzNArLrhf7hEtVMnMAEBCT81VCmAL7wJ+AKFpQS0Xx0tbQDcQgEJZzcdBW4AOQB2yAAFEeGWwhWAatIHABBbsCfCPlQAikYBjxdYEHgjNAUNL8OWdGkAXgMfOQDJ05gDZyTItT4pIibKF7+xXSp4Shfkxy9Vylsra8P4h50uKHAGw0KZJbkH2GZs1xvMPI3ddzg1sNxcsWHdA6IsCN0GeRJtVDCuDUWwaQAlQj0Ad2Ca6wMJA8+cfEoKOwP0EoXGHg6EdQUZaed7cUveOVMeswMfGy++GDwFsSsb6S9ehSIqVZF71JbZh6LBFLIRDiAACUrQGh3yN1sIIYIkUOeTKl1MTeQYCiMBFATQgh+ynTsCSAOav9AxNUF/AClE0gY7BIsUJiVNABBFJRT2FwgAslkF4mtM9lMDI6AGHrsDBEMhcPQBAnwmdg8o7YkIzxJYkJ77A35vQ2M8AOfeGivv6N1CumQj+RUGPQOXLeEAqgIp1Ig6o3nGdRl8PTUJyQFDEAJ/KNdr3gkIBywcNHDoiAfNW0CHClyw+AbbsU+ruOwbBAncmpU0WePmFgtJd4UAHD+zLgBSQQAugirUKWA8ERwyAjfDPLchDh3EdJRQgbHANWS4bDX2QWzJ2mJZh18YFTBxVgJsBe9gFSoE7VZXKLlzBo5G6q7l1hLxmQMMA6MLWH9PJUb3QgGZC4SBAx0BINreFj822QBjNwMgk00EK/kAtPUvcwxhc8cPRQBSsLgAbRwSGiMBLa5gDN0OekNWCnc1aV9sqeReuiznCC+PLMjJAh4xhq9iAwgOI3IvvyBg2TibaC5IlpM0Lkp8BdcGL9/LB3D9u3oJVwBZDSkkPQIITsjVS5NtqzukBoSUItLaLUeGQlRph9bxmRwAOCK8upGsTd/aP9AhFkwjBnErDQYAAT28k+5LG8IaPTLcvCciEHIbDW8PS3F7ZABuCV2xjgQ+9MHk5jktIvwbTCddCpWOGVBD4QIOfa+MURkdX70FKoRNAA08ttApUKfTq7tHm6YZAJYNRtEWHxgn4AKWIzQrKipAgSK8tk9aOQpky24DUkQGZnVQoRUBP0NDRI/UwgIAMfAoEBSLZDEgLRO1Br6SV38EF7rXIx/JAQ8E3EALBQcSgN0AFFDXMM+Lcw4EFpWDb2knRW/mRYYdfAUdfQLwWhkUCJQyms1ksgTMpHhbAHil+gEBS7anHDTwiRpCrmULHlgkaWl2VL1GDsrg1apysgeLQcKytiGpZUOcDMqz7zAAQwIiuAc+MjjuBK+JmoanK95NcXD4JyZd2Nh5dmU8IRLLDQdeCTYLvtBn6g+P6dw9JTYeVpoGi4ogu1N/K1HYkQC/YBpZAtrEZABeIfY1qIPPzFLFqQ4DDANRwxLNOQFjDca2WfiWsYh/pDePNz8H8AwduiJsSFkTWQRoen8WGw4Ahh81nyQBP5AGhR0E26ZwQ6DHcrwHTrJhA8yogTgLH9PiAFsgFGUJZgB2SLsyWzN9ASa5CB0yXwEJCam2WKEPNT54YlMBn+0OZwAdDwgEA9SnqxNDFoEDQT0NGaOFEHRADFm8F23JWUQQGhMCArWvLhNCfHChBBcNC6QNK40boQEAO+lRHA2CUxLhZyStpJ7pkDc/Cj5S9VMYHgC1PkR/KyVZmwEdKqJACDEcjSYbdxq+AKHVJUhxUMLPdHUdbAACCP33H9UAA8AELkYySGs1NZFvoAsnLu86CBTGMDtrpS3xOIHVHOVVSwUjxA3XFS3diDMPLbOzB9k7Wc9QwVJ5rhsB6E8S1AAGLXom2BIGMhblrl1bFXIYjQSmRiUtBVEKRbNsx4GKS0NiJC+HPpi9LQ76mjyf6OVwqBcGUmYEXgMTd2A6HWqzv7eGEQxBjkcBU/NVLCeshKpDLHJlq2tKGXeSSwFCJS0yAwEd0QEQYULiWW5o1uMgCv2UbVQVInoFKCv7FzYEEgB+31t4HjUs6mheCcGtRwxkMsMlBBHf1b0ADh8dZLtXOJM2kDUSjgxbWZmpAjISVgRbC4sCJugEjdR31gAp7hMAnkgTM5YXSQOZPGsHOAKwefkwknwPEBMqfn0NhJUI15ICbM0TWmmseAWuYeBQiaoWCRAA1AKbxAo92wPXEUQw7wDfnSIrnG4CGV3YXaBnPavwW4OXApQBfZxDwQ1iC6MENCEJAOKZqDFUARg48iFDTDLhNwWjqH4WHAE7PALJFQV7EwMBmYl4Mx4WDqsCAVgA3AQC/Ncp2LMA2aotBnxeNApPDKe9EVSiGS9JMEtKwJUIlwMUDac5oIEPRnapEikLMwAhzQUgJ3QiA/CiOgqWe23hYA0ZAglKDSQZOAEOC72KBJoavjfOPF3IWRciaEYtEzhLKwC2bklkNZgpRwI6WBtPAw+npsDsD6wU0TJ18JCbBy4aNIHPCstFAhRbFzkDOiYSlyULWoWJuUmHMaMPQhe5B3kbXkVL5bZfW0cOMzb+WAAAkGLfDwBkZAAVpGI4umrpsOchSIGKAzcBIjSXoBNokAlDLAFxFpsCbPTQTw5xswgtiyR9QVUGBDzWTAaVDqEAbCsATiO9za1IUezkU2NfcW/LHFaJ0Z8ACSpJVAV9AnL57hOjBs+jBFaPVyvne8dqLUfbF8GOEKVCDVsBLgxdJgBoClkAqUMmZS9cZrUUCgko/DTSHhYGPC75Dm1CIhnzGV44TgJ57DncEMTOEBWMAIEzFCASqi8BMQDtz2WwAChwVFEFYF5qEVJU837Uyx7fUGxE1YBGgu1N0nEsGiYBARCJGiv7nw4CCctmfyoGrnruhwzdwJUyHQMCWypq8T6caAAE20uVHZAlymbvOgSEAwDthEIcfAVjEQBvBRkXkhxrAm2ikI8RNt45FNuOoFokRRdegaaQOtexKJK1HiUAJWEDJgZz22IINjqFaReWG/QEzfsCRBPGyDdYRgcCrzIksE9ZRSXiAdKtH2VYAuzuqgMa3rADi5QGUH9vDzLeOQIEWwAJV4ubXVPDh5EkEzIVBjBkdMcxmAdVxQcDjxzkZr7HeTUzAQ3p9AaLaZGNHWb007EKkvOzc+9NfzgpIllL5myLFbQLygM4XgYF1J2Tvk0uFwIOEtlkSmFFA/yLJ80NAoMAXcbeHgxwl1jcouxbixCh2lPHTFx3qtaG2fp20wrwOgAL5yMrCgRJvQQtg38vXwf6doIW284PZBpHpsBJPzedw5AHCAEMS7YabRQzbkW6L7ndADPqNCkhAZiLdAMYfiZIPOYjGAwGD9Y6vGuiItqzLShPPJ6nT1V7ZoqepyOwL/dvFVxifBwAiHaMARYTQUxgAgACKxRvBh4kjk4AAwUq3gAAEeZC8yAMw5i22C0+GDtgBDwBXg98AwkROUA8S8YCBF903leViZjUa90cdTEOBrwDXHw1Bg8SIAD9EsSgIQwFDEcasGfBcl/3AGhtMD6YjLVaO7gLSl0BA32wU8o5AecqKYOtbh4BdQNIjo0geknWgXWS7wGzHxZ0A3NqHQEBcwCtNqlyt+c0AOkASngGAApBSYNSsGARwxoqz0NA/ggLh2AmkXEAlkauySUDu3QbBNpQUzkdYm+uYokbAjUmTZkCjHh5Zg4uAQ1OY2Z3mUl9vCwNoKYnFjSlbmiP4RmPUKK7eZ0DPgnn0ZqDmJDuA98yAQ+aL1PCSm9NBjcyE3BMmwCmEOyvBOilD8z03gZJS04dEK5yxwBKUnLULgA795xy0+1MXWEPe0MSTWdOSllnH4JfHofxViJmgMVAnbIMYSY+wAUMGScQ1g8AYqARnwEBAwBI5pMFeFOj84MHBNMeuweIjvkDExPKh9omslGCSVgAiN7YEB44Qpp2LiBjPdarEADOBIQdaOdMeA1XMJ8TpvwQ2tGMe61kiAcdEAoCrtBNJ2/Rhs5WfILCBiM/lIG64B5EVH5MfuQS8x03Za2ACu7cEw7NMQ8fIgA9EhYzJYmjV4svwhdqDI+guRTTWvBAXB1UdpDG1QI4DIY3NMjq48cHAg/PbAeQEFlY8rE5ClIACwBx5RxSJp0jQxFhGENVSjUQBQw2iMOKTHxkGjWS9SnbArELcrY0rwyMZT8ShykQV+FwUJMuUgaIWSeyRBZdbRACRCCiiSAml2AEGGImDUh7HGwsHG5KaxaGKsADQ18qC6KJsaYtDUsAATMPnDFfNa8EAH09YH2HsN5GykhFWAxNkwAGCSh0Vh/nMSOlhmUY7RVMBADQmDc6QPpXOVQoBbAMOyECuunUyxPgsQ0ETnBwRXQBAD4Z9IYX3tRMpbUBBbEOtydiCAIYue+9ssJjHgR/2AeVIIGbAmlLYUymQyRwZQTXBlCWmgNl48hVM7QSIL0CdJNSu2lFnk8fiZUZPRFODQCEH0ExjxJKSHJHTWlhSvJmIZZqczI+ADBfRQ6D4Q78UtkAAwsBw2I4MWsZlxhDLwD/BwD4WAUGCne4shiGGyeronSUAQXP5UkAOZ+BfwIRRANQS2eyNSEDcP67cPQAAA5dPwTl5Eg5FHSFGiQZF6BZBxttv2GoyEQFB0xSNBUW/EssG1aRABX0L0oXTk9w9P/nm+ZVMmhBQhcIGxhYOHHoHwNzJldxFQB0KHapYgBDkY+WKIQBBS3cJQYOvmYAR0qKAE8GApuhVQDTKawrE0mPBQG0gt28GoU0YHBDwfqHHhjbkDpoSWVWA6kEs0e1jAIvmkyegpM6G1IBXUzELwUOM2kAISwmADRsQ0MwYxeYL/A6RQABzliwKBgSK4MIxgogDTzGA86dDMa+XUMCLkazOuVDGApvbCfg4CQac2iJU8SvkQMoMrD+PQICV+oinEEdBm0iJT4MyAhTZgFYEnkWnG9xn0y74ilvXe25Jbli4UIJQAJDDjXiA4QDDSiVdiMi/rXIbh7VAPAPxA4UU/bFj9kDQwQKkZtHAlmRGwAt1n4c5uKmg4kORgd5WBq/V17bNiFuAu4AXIauVmwyb1tJ3gLMkljMvYJpCGEM79RBkhofAX06o1gaLwLwTDaMDQEFuzw6UlE9ASVc4VhyijlwMBC8q5TXBwY+MsgHe0VJoAJjlgAUvh8zAAcyNgUYl0e7u2JdGR5GbEOPBQRZBIQBZnrZAvJGzYKVQg8nTwskXgRp1hvgBRwEizz0V35fMqtosBADNwJ5EsGJBAriES8rADV+1ohgBwcBL3YBFAiISgIAAaiaHtpdDgh2Oj1Dg8G1gzdxdGkYQwW7CQCTNDW1GGtT5qJptqfhAAM2bhqP/YwZCWvDU8wVZmt9qQ2yMo6+KHLZ/dslAgWy5BanAIcBnb5hcjI7WBZ6AqTuASP9LHZRiHh0WQ1dJzgqMXGNqSWF7duSohXEqt3EAck4ZwUVVX45ChZEIBYeFnpOC5wPIwA/Gt0cIcKsoqTJPZ1UTRMBWA9OMqWcK8/YAIvfnzBhEwXifwgthgYgEecXBAsQZSVfVQ0ER3w4TgE8iE6ZEIwoFTYzUwGwt2El03Wp4Q2IALsOJnVYBGZdKCUBwQAqAFqlQEZJRbtrwqcgXlIIUx2NcEShuvIBbgq0XVCNBAKhUT4JQB/OBgqIf3FzY6V7OyKAOAoBASg2GU9GAA4AfSMKojG0m5gyqAe3MXWTUgDAAgxFtBcbx3gCmAYBRCEIaWdBmXYDgQdPhQMSeVkjt+IFTuC6Ij8N8+cIOhMxFvN0DJU7rf6eCTpJ9QNR1LoQQQMgEY26fApxVC5HOGr9sKU9GORpdSRjAW4rUEs3GgRFo9IJvYmKIxn3EuAwADMMjc+dCqyePSGpQbkhEXoVHwb9SJ5eMR3zbXZ4JW2BqZVw2l7pIXRrAhSAEAVRS84yK4rNO2l2wNVcCFW7FQwbADpohDhH+ALV5AgD4rQpGReMQ9tkmLIzbxPPHStlIdXCbS1hCEj4yktcH8cO9QspuSFFc2sfFMjhw8WBfwH4AL00SwUDOthSQB54xEsG0i0ACE7WuddaHtLJZxcCSUEYrDRF7xRceFE3AC2x0k8HnShj+8mn1AICDQvHh7yrNLLpdSMBOF7XG0MIKTpg3XePZSgxj4EUDQW6ERczAmkHACMqRzp7jwLBHE1J+9rgGE0jMKR9eAC3iUeONakBJAvMALJ5jyVnHDpo4HcqIQQqJDKFNBhoGQpAAb6m34tpMCwA0p2et1pv9wIkr2yOkSgpxQLKc1IqDDsWJgQWiFnICOdG5B2pQ1FQEqBk2k0FSQ8oLkFGe38tCE61lDAABt0AMaACES7m5uDMWkOQJp0/Hg41dp5mhRNyv+xrYjkRExpXAACXB7ToUYIOVBcRGpltVbe8OYgfXFsByY4hGhkpkyoB7hcF6K0uvEqfZ3griUwBA1c/lD66CQFPcuK8UwRxQHrjeyZEa4w1vRQqYTgxzxgQEhpdGRUUHRNnf4vqR4ObYGCWlrtDMwhWI0ZhExohPDYcfbYDowruYrcukRU+j0IGABZOTatOWA6DbwRHWnODFRc4PImVa24k7ATGb0kbQpcSsL4YFbkgARWhBHl6vFpBPRSyVmOdTmIXefPQCLgLUWUpNV+MAwdW3p10p0eu5BxC504BVIXy9c4JWFeJA2BjBxPZAnIBVQAZhQU1ADH4DjnMGeNHLOhzGY0L6yQtbYoXAJyb6u1PF7UZ5yAt4JwGYldYBd0VembYLQBnVTpvhSA/ckID5KwqDCHKBp0YAiR0oOcfXFD5GQY+oUJH5JqHAR8UBB9QqIcTPwQDE/cukJsaOVIbAuUBaxEVKvd3i2+Q8BAfV8nGOwKY/DtMAgkLMOnoHpCTARcGXgIUhPyYDnVrAExDQSJ1gGIMGgtYAytm5mAuUxtoB58TXTtv6wUAa0NdRSmbkMUEc15QPzEmWRQCSiw5cA1VoRQfWtxc+T0F03kr1T9b7QirrbwAXiw9TpIQLwMRz1BPIlLVz2C9KLQez0US9jMGnUkwCDWWKKWkjQlmXDZjQFxL7nsoey5VQwonAARTHV+7T2o2FlIjAghKc4pLVFWlP5YBH+iWBrccMUpWvxfLgF2Uc3GlpxBgKSA1C26DD6lECOuPBZ1vBhzxaoJkOfOGBXEfH4SpqLmcqQgHLqpA2FJvoLGFBTTtEVwPgIAWD5czgF1YKwbKK0omhid9pnsG3sdBFgMCnWEwrAt/AAxsDcl3PWYuBXYZt/VAEHZFRyu9ERMlZA7aGdcCBgAJCPb3D2AtAxKrHCcRQEh3PMxxSgZzhpKkABTYngRSabRPLwAEwOdIZ7q4CXUDSQBW4y0NAs3GAJEzApI+A3ch8L5wJxDHl31utHwtomsfuOkYFHczQFQ9YpEkspI90XQaQREGQDYArfYUTT1n+WnEVRlkMK0YFEehewNFXB9Qf7NnPPRJozTB8ggFWhokACEeqsVTFD4NFOtfQSlGkYutE1BndA5zBjM1zCAsKWfDYBYCKsZanqqU8mgF3ANrEAI/HOsHDjgi8oycUYmlahbDEym+E2RZoJ7CuZQvFIZ+Jo+CNsk+dvgAXSsCovgCRS0tyH+aFYaA2V8ApQLIFAW2ZfgiAlIEuwIO4Ap2I1xnL9wAdig3UgIGf6YE6DbBBHsBdxUYPHjSAHNWkIRV4yToTJo9fHKeIa32X0luKS0KMxP3Ko1eRBJCWkIMxCT0QmGFVau4JCE8fyjMBrtGXRFQD0ey3ylvRggAFQMds0jrARM9SsnGPBPwES6Nxm00yQBywllTABaqCdwPMUoO5Qd85Skqddq+OgvwnB0cAXVO92EWHA4IdbRkNjHKtgz1P9igRVKWJTcjwZrR8wLfBG0HCOFOoHq8bxdTQkAxKg8nE1DGHtA3kQgro0sY9PUYwjnZqgN5FQeHiEMAFRkElNIELGVYpCzs7psuagceOx6VnFMNPy/MDQe9BwEqPVUNBAhc0tpXAFewAxZ+AKsGSriss+52JIsIOj6JVHuNtiQnblFpaV8ED8LHvw4EmBgHL1UP5gNrBQ0SQdz+AxUBqnMDNuBtmgbCMweoGxIq9AbOQIyvOd0DVEUOXzQAcJCuFF52j5Jz5aHRQ5YwMny8QQJcFYgAF1sGkRMQBTDDzDdfK4SKytaorCm44gSOswA1lc1IVWqFuh+6x3LnBSUAE2QIWigFHb3YC1BVDwWdb4eIFzrNRimjqSKpwzltIIWEdI49Mh06XQYKBw41oWjUAHwgEoKXEKItKQEDAAsANWhxAN8K2QR2g1UjAts3mDkh2jA/LHK7BM5OEQ6oBqLLHj0aA3U3MX2Kb1wEBNIHNul/ogAnOGEERQWVVxvZA01dshtiBA9sUJqjJEs0APzrxA5TLhld+ImbOIIBSAJ5CsWQ9nwDE4EAmwYAFsoF28p6D1uFMYMFfgYtE6qkNwAATiwqvE9QADoAAQBqF4wG3QAumBeeN0klpFMCJGmFA9QrBAiYUiAsAFvNnm/HCXOBHKIZXyFlQikDC34xeT4IqQES+kh8NAMYAUEAvgB0HiVoCiMIbI4DGSYNQndiOymW01MRHDwWzs/FkmNBosBbZlMJj0LSAQJUiguvPQAHSxcATgAEbkceKlAmA966PQGGvYaul2NcZG64cOS55stIjxIVAZyuYlwBAVoJLrV6cSQeOwLpDQQb3gMFBUOMOKCAHgTAJd/0fsZGRCZz9eoBhQZ9Lx+BmQgjUNWgNZEbkzIzJz7Kn22XMHV5p49UihqXk6EAeqS6kDqzQcAcjElhAwsAIw4bkjXuBXHmkwJFAT8NLgCQSA9fAmoWAII8yBinKIFM5qNFDVITCBY3q1P2BKNnIPIJoA1wSGtOVkMVL0wuW3qGmRItFEJdIwMNRwI4VlZyFA5ntqYu3bk8FuzvX73m+0e8MiSObrkfXIS3PqwgW30csgKb+sNWNAqkAUAHHBcAHisPF8KyNVwdjib4CQEEqB8BBk3RmxoOcAYqEdnBQnikHk+GCzazSTmuSQXIjV1IPVWWBJEz61wSEA0AQA89r+DVIWexHfEtWzwaxWhXkAxh4jFolqsEVsMROEk9ijfAAR5jTmj6exsBtYRyIiMoZ/4tVhPlPMTKWBfLMQIxUwEAmQxJGCMFSwPjJwj2GUxYFhcWg5u0ntEASB9dCwNnhlcp7wADVo2t9ZEqG8wJWw3bW4IBpoWxDiGWcPxTjgYaN78JGGW0oA4BFsFpqTAKAAQ80REueg8DlcPFnx1jXTAK5NnxwgEb60cNmUb1gDo4IDUGyQgCAW8uBE8AClg+kQEACiJyVT5uW8RBG87AFApFlOwHAicmhoIYJ5YKAQzVZCfCeuuSnEUSeZckEiordDgJUX3LlPazKnfNjiIeqMxVZAZZADTEEkZ8EXGL+gFGwrjaTHyCEb//H6AY7NQKJgsWLAEZPFuLZnZGRnQtp1EuJRVuJTGdca2pHwCthB51+ZgAuXp+lRMyJ2SAgrYB6m0Q+/4YDM6aKGi/fSuVCQVuWtMBKztbqWEoa85PVdo7zihmsFxiXjnaYQAUn5bbKOh6s08RBhjdaU82QD8htgUalV8OGmIHAFTgUJyiMgTgxg8fON4ZAaBIgnxJeaqd1gRvBBMITAdGJWRKWx0lAVHR0j4AdvYAdQNaQJUDRHlHml5cSLMjaYxAqHmbAaTZAZcZ5s6JLJGip7sCXaw2LCRnK1YMO4sFRAgVWgfXMfc+zt038JeI6lkCDQU5yCGeZRBOA9aMG3e0AZ7cmQmKjgeCWvmJnn7yAwY8uoEEL1wLBADizps1VFIzm5UYtBHFT5Qy46UAsQTBZCwPgljNPekNGEwdic0FR1JmP5AAhShTl4MCWwq2By1NKlUqzQQGAidkywDoSgYGtQ8JRdefJLqPjw5YsD85GiBWlRsDZ2GzVDkCvRSyUzIq16YUXEBLd2kGn+rLIwAAAK1JREFUf54DD3C0WwmGPi9OSjpCA0A7fFwUZTm0ktDZLl5VXmbFDDQACl7+QSry5QCM2bfNC+WAFj1LAzLsiwEBaQCW/1EGcMN/tG8OViQtylulBUxRADYm5SEBRAcAARkeMC5iRNgZhOoxnz4oHApa6gD3ASdbmF188wxpDZVKUL4RUhTSSRvrQAZLDcgauImabgJzkXIaALePAXot1j6Bdwe3AXoQAnXMFVuCApGWbjuRvTu7AAAAAElFTkSuQmCC";function TE(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const a=new Image;return a.src=DE,a}const DE="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function ME(a){const r=W.useRef(void 0),l=W.useCallback(n=>{const s=a.map(c=>{if(c!=null){if(typeof c=="function"){const f=c,g=f(n);return typeof g=="function"?g:()=>{f(null)}}return c.current=n,()=>{c.current=null}}});return()=>{s.forEach(c=>c==null?void 0:c())}},a);return W.useMemo(()=>a.every(n=>n==null)?null:n=>{r.current&&(r.current(),r.current=void 0),n!=null&&(r.current=l(n))},a)}function am(a){if(a.naturalWidth<1024&&a.naturalHeight<1024){if(a.naturalWidth<1||a.naturalHeight<1)return;const r=a.naturalWidth/a.naturalHeight;a.width=Math.round(r>1?1024*r:1024),a.height=Math.round(r>1?1024:1024/r)}}async function rm(a){const r={},l=[],n=c=>{try{return c.startsWith("/")||new URL(c),!0}catch{return!1}},s=c=>{try{return c.startsWith("/")?!1:new URL(c,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(a).forEach(([c,f])=>{if(typeof f=="string"){if(!f){r[c]=TE();return}if(!n(f)){console.warn(`Uniform "${c}" has invalid URL "${f}". Skipping image loading.`);return}const g=new Promise((d,h)=>{const p=new Image;s(f)&&(p.crossOrigin="anonymous"),p.onload=()=>{am(p),r[c]=p,d()},p.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${f}`),h()},p.src=f});l.push(g)}else f instanceof HTMLImageElement&&am(f),r[c]=f}),await Promise.all(l),r}const XA=W.forwardRef(function({fragmentShader:r,uniforms:l,webGlContextAttributes:n,speed:s=0,frame:c=0,width:f,height:g,minPixelRatio:d,maxPixelCount:h,mipmaps:p,style:v,...w},S){const[F,y]=W.useState(!1),b=W.useRef(null),x=W.useRef(null),M=W.useRef(n);W.useEffect(()=>((async()=>{const D=await rm(l);b.current&&!x.current&&(x.current=new zF(b.current,r,D,M.current,s,c,d,h,p),y(!0))})(),()=>{var D;(D=x.current)==null||D.dispose(),x.current=null}),[r]),W.useEffect(()=>{let V=!1;return(async()=>{var Y;const K=await rm(l);V||(Y=x.current)==null||Y.setUniforms(K)})(),()=>{V=!0}},[l,F]),W.useEffect(()=>{var V;(V=x.current)==null||V.setSpeed(s)},[s,F]),W.useEffect(()=>{var V;(V=x.current)==null||V.setMaxPixelCount(h)},[h,F]),W.useEffect(()=>{var V;(V=x.current)==null||V.setMinPixelRatio(d)},[d,F]),W.useEffect(()=>{var V;(V=x.current)==null||V.setFrame(c)},[c,F]);const z=ME([b,S]);return j.jsx("div",{ref:z,style:f!==void 0||g!==void 0?{width:typeof f=="string"&&isNaN(+f)===!1?+f:f,height:typeof g=="string"&&isNaN(+g)===!1?+g:g,...v}:v,...w})});XA.displayName="ShaderMount";function Fe(a,r){var l,n,s;for(const c in a){if(c==="colors"){const f=Array.isArray(a.colors),g=Array.isArray(r.colors);if(!f||!g){if(Object.is(a.colors,r.colors)===!1)return!1;continue}if(((l=a.colors)==null?void 0:l.length)!==((n=r.colors)==null?void 0:n.length)||!((s=a.colors)!=null&&s.every((d,h)=>{var p;return d===((p=r.colors)==null?void 0:p[h])})))return!1;continue}if(Object.is(a[c],r[c])===!1)return!1}return!0}const Ke={params:{...et,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},OE=W.memo(function({speed:r=Ke.params.speed,frame:l=Ke.params.frame,colors:n=Ke.params.colors,distortion:s=Ke.params.distortion,swirl:c=Ke.params.swirl,grainMixer:f=Ke.params.grainMixer,grainOverlay:g=Ke.params.grainOverlay,fit:d=Ke.params.fit,rotation:h=Ke.params.rotation,scale:p=Ke.params.scale,originX:v=Ke.params.originX,originY:w=Ke.params.originY,offsetX:S=Ke.params.offsetX,offsetY:F=Ke.params.offsetY,worldWidth:y=Ke.params.worldWidth,worldHeight:b=Ke.params.worldHeight,...x}){const M={u_colors:n.map(uA),u_colorsCount:n.length,u_distortion:s,u_swirl:c,u_grainMixer:f,u_grainOverlay:g,u_fit:jA[d],u_rotation:h,u_scale:p,u_offsetX:S,u_offsetY:F,u_originX:v,u_originY:w,u_worldWidth:y,u_worldHeight:b};return j.jsx(XA,{...x,speed:r,frame:l,fragmentShader:WF,uniforms:M})},Fe),we={params:{...et,speed:.5,frame:0,colorBack:"#000000",colors:["#ffffff"],noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,scale:.8}},LE=W.memo(function({speed:r=we.params.speed,frame:l=we.params.frame,colorBack:n=we.params.colorBack,colors:s=we.params.colors,noiseScale:c=we.params.noiseScale,thickness:f=we.params.thickness,radius:g=we.params.radius,innerShape:d=we.params.innerShape,noiseIterations:h=we.params.noiseIterations,fit:p=we.params.fit,scale:v=we.params.scale,rotation:w=we.params.rotation,originX:S=we.params.originX,originY:F=we.params.originY,offsetX:y=we.params.offsetX,offsetY:b=we.params.offsetY,worldWidth:x=we.params.worldWidth,worldHeight:M=we.params.worldHeight,...z}){const V={u_colorBack:uA(n),u_colors:s.map(uA),u_colorsCount:s.length,u_noiseScale:c,u_thickness:f,u_radius:g,u_innerShape:d,u_noiseIterations:h,u_noiseTexture:Ya(),u_fit:jA[p],u_scale:v,u_rotation:w,u_offsetX:y,u_offsetY:b,u_originX:S,u_originY:F,u_worldWidth:x,u_worldHeight:M};return j.jsx(XA,{...z,speed:r,frame:l,fragmentShader:ZF,uniforms:V})},Fe),Re={params:{...za,speed:1,frame:0,colorFront:"#ffffff",colorMid:"#47a6ff",colorBack:"#000000",brightness:.05,contrast:.3}},KE=W.memo(function({speed:r=Re.params.speed,frame:l=Re.params.frame,colorFront:n=Re.params.colorFront,colorMid:s=Re.params.colorMid,colorBack:c=Re.params.colorBack,brightness:f=Re.params.brightness,contrast:g=Re.params.contrast,fit:d=Re.params.fit,scale:h=Re.params.scale,rotation:p=Re.params.rotation,originX:v=Re.params.originX,originY:w=Re.params.originY,offsetX:S=Re.params.offsetX,offsetY:F=Re.params.offsetY,worldWidth:y=Re.params.worldWidth,worldHeight:b=Re.params.worldHeight,...x}){const M={u_colorFront:uA(n),u_colorMid:uA(s),u_colorBack:uA(c),u_brightness:f,u_contrast:g,u_fit:jA[d],u_scale:h,u_rotation:p,u_offsetX:S,u_offsetY:F,u_originX:v,u_originY:w,u_worldWidth:y,u_worldHeight:b};return j.jsx(XA,{...x,speed:r,frame:l,fragmentShader:jF,uniforms:M})},Fe),Se={params:{...za,speed:1.5,frame:0,colorBack:"#000000",colors:["#ffc96b","#ff6200","#ff2f00","#421100","#1a0000"],size:1,sizeRange:0,spreading:1,stepsPerColor:4}},RE=W.memo(function({speed:r=Se.params.speed,frame:l=Se.params.frame,colorBack:n=Se.params.colorBack,colors:s=Se.params.colors,size:c=Se.params.size,sizeRange:f=Se.params.sizeRange,spreading:g=Se.params.spreading,stepsPerColor:d=Se.params.stepsPerColor,fit:h=Se.params.fit,scale:p=Se.params.scale,rotation:v=Se.params.rotation,originX:w=Se.params.originX,originY:S=Se.params.originY,offsetX:F=Se.params.offsetX,offsetY:y=Se.params.offsetY,worldWidth:b=Se.params.worldWidth,worldHeight:x=Se.params.worldHeight,...M}){const z={u_colorBack:uA(n),u_colors:s.map(uA),u_colorsCount:s.length,u_size:c,u_sizeRange:f,u_spreading:g,u_stepsPerColor:d,u_noiseTexture:Ya(),u_fit:jA[h],u_scale:p,u_rotation:v,u_offsetX:F,u_offsetY:y,u_originX:w,u_originY:S,u_worldWidth:b,u_worldHeight:x};return j.jsx(XA,{...M,speed:r,frame:l,fragmentShader:qF,uniforms:z})},Fe),Be={params:{...za,colorBack:"#000000",colorFill:"#ffffff",colorStroke:"#ffaa00",size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:"circle"}},VE=W.memo(function({colorBack:r=Be.params.colorBack,colorFill:l=Be.params.colorFill,colorStroke:n=Be.params.colorStroke,size:s=Be.params.size,gapX:c=Be.params.gapX,gapY:f=Be.params.gapY,strokeWidth:g=Be.params.strokeWidth,sizeRange:d=Be.params.sizeRange,opacityRange:h=Be.params.opacityRange,shape:p=Be.params.shape,fit:v=Be.params.fit,scale:w=Be.params.scale,rotation:S=Be.params.rotation,originX:F=Be.params.originX,originY:y=Be.params.originY,offsetX:b=Be.params.offsetX,offsetY:x=Be.params.offsetY,worldWidth:M=Be.params.worldWidth,worldHeight:z=Be.params.worldHeight,maxPixelCount:V=6016*3384,...D}){const K={u_colorBack:uA(r),u_colorFill:uA(l),u_colorStroke:uA(n),u_dotSize:s,u_gapX:c,u_gapY:f,u_strokeWidth:g,u_sizeRange:d,u_opacityRange:h,u_shape:$F[p],u_fit:jA[v],u_scale:w,u_rotation:S,u_offsetX:b,u_offsetY:x,u_originX:F,u_originY:y,u_worldWidth:M,u_worldHeight:z};return j.jsx(XA,{...D,maxPixelCount:V,fragmentShader:PF,uniforms:K})},Fe),ke={params:{...et,scale:1,speed:1,frame:0,colorBack:"#000000",colors:["#6e33cc","#ff5500","#ffc105","#ffc800","#f585ff"],count:10,size:.83}},GE=W.memo(function({speed:r=ke.params.speed,frame:l=ke.params.frame,colorBack:n=ke.params.colorBack,colors:s=ke.params.colors,size:c=ke.params.size,count:f=ke.params.count,fit:g=ke.params.fit,rotation:d=ke.params.rotation,scale:h=ke.params.scale,originX:p=ke.params.originX,originY:v=ke.params.originY,offsetX:w=ke.params.offsetX,offsetY:S=ke.params.offsetY,worldWidth:F=ke.params.worldWidth,worldHeight:y=ke.params.worldHeight,...b}){const x={u_colorBack:uA(n),u_colors:s.map(uA),u_colorsCount:s.length,u_size:c,u_count:f,u_noiseTexture:Ya(),u_fit:jA[g],u_rotation:d,u_scale:h,u_offsetX:w,u_offsetY:S,u_originX:p,u_originY:v,u_worldWidth:F,u_worldHeight:y};return j.jsx(XA,{...b,speed:r,frame:l,fragmentShader:AE,uniforms:x})},Fe),Ie={params:{...za,scale:.6,colorFront:"#ffbb00",colorBack:"#000000",shape:0,frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0}},NE=W.memo(function({colorFront:r=Ie.params.colorFront,colorBack:l=Ie.params.colorBack,shape:n=Ie.params.shape,frequency:s=Ie.params.frequency,amplitude:c=Ie.params.amplitude,spacing:f=Ie.params.spacing,proportion:g=Ie.params.proportion,softness:d=Ie.params.softness,fit:h=Ie.params.fit,scale:p=Ie.params.scale,rotation:v=Ie.params.rotation,offsetX:w=Ie.params.offsetX,offsetY:S=Ie.params.offsetY,originX:F=Ie.params.originX,originY:y=Ie.params.originY,worldWidth:b=Ie.params.worldWidth,worldHeight:x=Ie.params.worldHeight,maxPixelCount:M=6016*3384,...z}){const V={u_colorFront:uA(r),u_colorBack:uA(l),u_shape:n,u_frequency:s,u_amplitude:c,u_spacing:f,u_proportion:g,u_softness:d,u_fit:jA[h],u_scale:p,u_rotation:v,u_offsetX:w,u_offsetY:S,u_originX:F,u_originY:y,u_worldWidth:b,u_worldHeight:x};return j.jsx(XA,{...z,fragmentShader:tE,uniforms:V})},Fe),Ce={params:{...za,speed:.5,frame:0,colors:["#ff8247","#ffe53d"],stepsPerColor:3,colorGlow:"#ffffff",colorGap:"#2e0000",distortion:.4,gap:.04,glow:0,scale:.5}},zE=W.memo(function({speed:r=Ce.params.speed,frame:l=Ce.params.frame,colors:n=Ce.params.colors,stepsPerColor:s=Ce.params.stepsPerColor,colorGlow:c=Ce.params.colorGlow,colorGap:f=Ce.params.colorGap,distortion:g=Ce.params.distortion,gap:d=Ce.params.gap,glow:h=Ce.params.glow,fit:p=Ce.params.fit,scale:v=Ce.params.scale,rotation:w=Ce.params.rotation,originX:S=Ce.params.originX,originY:F=Ce.params.originY,offsetX:y=Ce.params.offsetX,offsetY:b=Ce.params.offsetY,worldWidth:x=Ce.params.worldWidth,worldHeight:M=Ce.params.worldHeight,...z}){const V={u_colors:n.map(uA),u_colorsCount:n.length,u_stepsPerColor:s,u_colorGlow:uA(c),u_colorGap:uA(f),u_distortion:g,u_gap:d,u_glow:h,u_noiseTexture:Ya(),u_fit:jA[p],u_scale:v,u_rotation:w,u_offsetX:y,u_offsetY:b,u_originX:S,u_originY:F,u_worldWidth:x,u_worldHeight:M};return j.jsx(XA,{...z,speed:r,frame:l,fragmentShader:eE,uniforms:V})},Fe),ge={params:{...za,rotation:0,speed:1,frame:0,colors:["#121212","#9470ff","#121212","#8838ff"],proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shapeScale:.1,shape:"checks"}},YE=W.memo(function({speed:r=ge.params.speed,frame:l=ge.params.frame,colors:n=ge.params.colors,proportion:s=ge.params.proportion,softness:c=ge.params.softness,distortion:f=ge.params.distortion,swirl:g=ge.params.swirl,swirlIterations:d=ge.params.swirlIterations,shapeScale:h=ge.params.shapeScale,shape:p=ge.params.shape,fit:v=ge.params.fit,scale:w=ge.params.scale,rotation:S=ge.params.rotation,originX:F=ge.params.originX,originY:y=ge.params.originY,offsetX:b=ge.params.offsetX,offsetY:x=ge.params.offsetY,worldWidth:M=ge.params.worldWidth,worldHeight:z=ge.params.worldHeight,...V}){const D={u_colors:n.map(uA),u_colorsCount:n.length,u_proportion:s,u_softness:c,u_distortion:f,u_swirl:g,u_swirlIterations:d,u_shapeScale:h,u_shape:rE[p],u_noiseTexture:Ya(),u_scale:w,u_rotation:S,u_fit:jA[v],u_offsetX:b,u_offsetY:x,u_originX:F,u_originY:y,u_worldWidth:M,u_worldHeight:z};return j.jsx(XA,{...V,speed:r,frame:l,fragmentShader:aE,uniforms:D})},Fe),ie={params:{...et,offsetX:0,offsetY:-.55,colorBack:"#000000",colorBloom:"#0000ff",colors:["#a600ff6e","#6200fff0","#ffffff","#33fff5"],density:.3,spotty:.3,midIntensity:.4,midSize:.2,intensity:.8,bloom:.4,speed:.75,frame:0}},kE=W.memo(function({speed:r=ie.params.speed,frame:l=ie.params.frame,colorBloom:n=ie.params.colorBloom,colorBack:s=ie.params.colorBack,colors:c=ie.params.colors,density:f=ie.params.density,spotty:g=ie.params.spotty,midIntensity:d=ie.params.midIntensity,midSize:h=ie.params.midSize,intensity:p=ie.params.intensity,bloom:v=ie.params.bloom,fit:w=ie.params.fit,scale:S=ie.params.scale,rotation:F=ie.params.rotation,originX:y=ie.params.originX,originY:b=ie.params.originY,offsetX:x=ie.params.offsetX,offsetY:M=ie.params.offsetY,worldWidth:z=ie.params.worldWidth,worldHeight:V=ie.params.worldHeight,...D}){const K={u_colorBloom:uA(n),u_colorBack:uA(s),u_colors:c.map(uA),u_colorsCount:c.length,u_density:f,u_spotty:g,u_midIntensity:d,u_midSize:h,u_intensity:p,u_bloom:v,u_noiseTexture:Ya(),u_fit:jA[w],u_scale:S,u_rotation:F,u_offsetX:x,u_offsetY:M,u_originX:y,u_originY:b,u_worldWidth:z,u_worldHeight:V};return j.jsx(XA,{...D,speed:r,frame:l,fragmentShader:oE,uniforms:K})},Fe),ee={params:{...za,scale:1,colorBack:"#001429",colorFront:"#79D1FF",density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1,frame:0}},XE=W.memo(function({speed:r=ee.params.speed,frame:l=ee.params.frame,colorBack:n=ee.params.colorBack,colorFront:s=ee.params.colorFront,density:c=ee.params.density,distortion:f=ee.params.distortion,strokeWidth:g=ee.params.strokeWidth,strokeTaper:d=ee.params.strokeTaper,strokeCap:h=ee.params.strokeCap,noiseFrequency:p=ee.params.noiseFrequency,noise:v=ee.params.noise,softness:w=ee.params.softness,fit:S=ee.params.fit,rotation:F=ee.params.rotation,scale:y=ee.params.scale,originX:b=ee.params.originX,originY:x=ee.params.originY,offsetX:M=ee.params.offsetX,offsetY:z=ee.params.offsetY,worldWidth:V=ee.params.worldWidth,worldHeight:D=ee.params.worldHeight,...K}){const Y={u_colorBack:uA(n),u_colorFront:uA(s),u_density:c,u_distortion:f,u_strokeWidth:g,u_strokeTaper:d,u_strokeCap:h,u_noiseFrequency:p,u_noise:v,u_softness:w,u_fit:jA[S],u_scale:y,u_rotation:F,u_offsetX:M,u_offsetY:z,u_originX:b,u_originY:x,u_worldWidth:V,u_worldHeight:D};return j.jsx(XA,{...K,speed:r,frame:l,fragmentShader:nE,uniforms:Y})},Fe),se={params:{...et,speed:.32,frame:0,colorBack:"#330000",colors:["#ffd1d1","#ff8a8a","#660000"],bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noiseFrequency:.4,noise:.2}},JE=W.memo(function({speed:r=se.params.speed,frame:l=se.params.frame,colorBack:n=se.params.colorBack,colors:s=se.params.colors,bandCount:c=se.params.bandCount,twist:f=se.params.twist,center:g=se.params.center,proportion:d=se.params.proportion,softness:h=se.params.softness,noiseFrequency:p=se.params.noiseFrequency,noise:v=se.params.noise,fit:w=se.params.fit,rotation:S=se.params.rotation,scale:F=se.params.scale,originX:y=se.params.originX,originY:b=se.params.originY,offsetX:x=se.params.offsetX,offsetY:M=se.params.offsetY,worldWidth:z=se.params.worldWidth,worldHeight:V=se.params.worldHeight,...D}){const K={u_colorBack:uA(n),u_colors:s.map(uA),u_colorsCount:s.length,u_bandCount:c,u_twist:f,u_center:g,u_proportion:d,u_softness:h,u_noiseFrequency:p,u_noise:v,u_fit:jA[w],u_scale:F,u_rotation:S,u_offsetX:x,u_offsetY:M,u_originX:y,u_originY:b,u_worldWidth:z,u_worldHeight:V};return j.jsx(XA,{...D,speed:r,frame:l,fragmentShader:lE,uniforms:K})},Fe),Ve={params:{...za,speed:1,frame:0,scale:.6,colorBack:"#000000",colorFront:"#00b2ff",shape:"sphere",type:"4x4",size:2}},WE=W.memo(function({speed:r=Ve.params.speed,frame:l=Ve.params.frame,colorBack:n=Ve.params.colorBack,colorFront:s=Ve.params.colorFront,shape:c=Ve.params.shape,type:f=Ve.params.type,pxSize:g,size:d=g===void 0?Ve.params.size:g,fit:h=Ve.params.fit,scale:p=Ve.params.scale,rotation:v=Ve.params.rotation,originX:w=Ve.params.originX,originY:S=Ve.params.originY,offsetX:F=Ve.params.offsetX,offsetY:y=Ve.params.offsetY,worldWidth:b=Ve.params.worldWidth,worldHeight:x=Ve.params.worldHeight,...M}){const z={u_colorBack:uA(n),u_colorFront:uA(s),u_shape:sE[c],u_type:pp[f],u_pxSize:d,u_fit:jA[h],u_scale:p,u_rotation:v,u_offsetX:F,u_offsetY:y,u_originX:w,u_originY:S,u_worldWidth:b,u_worldHeight:x};return j.jsx(XA,{...M,speed:r,frame:l,fragmentShader:iE,uniforms:z})}),Te={params:{...et,speed:1,frame:0,colorBack:"#000000",colors:["#7300ff","#eba8ff","#00bfff","#2a00ff"],softness:.5,intensity:.5,noise:.25,shape:"corners"}},ZE=W.memo(function({speed:r=Te.params.speed,frame:l=Te.params.frame,colorBack:n=Te.params.colorBack,colors:s=Te.params.colors,softness:c=Te.params.softness,intensity:f=Te.params.intensity,noise:g=Te.params.noise,shape:d=Te.params.shape,fit:h=Te.params.fit,scale:p=Te.params.scale,rotation:v=Te.params.rotation,originX:w=Te.params.originX,originY:S=Te.params.originY,offsetX:F=Te.params.offsetX,offsetY:y=Te.params.offsetY,worldWidth:b=Te.params.worldWidth,worldHeight:x=Te.params.worldHeight,...M}){const z={u_colorBack:uA(n),u_colors:s.map(uA),u_colorsCount:s.length,u_softness:c,u_intensity:f,u_noise:g,u_shape:cE[d],u_noiseTexture:Ya(),u_fit:jA[h],u_scale:p,u_rotation:v,u_offsetX:F,u_offsetY:y,u_originX:w,u_originY:S,u_worldWidth:b,u_worldHeight:x};return j.jsx(XA,{...M,speed:r,frame:l,fragmentShader:uE,uniforms:z})}),ZA={params:{...et,speed:.5,frame:0,colors:["#ff9d00","#fd4f30","#809bff","#6d2eff","#333aff","#f15cff","#ffd557"],colorBack:"#000000",angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,density:3,scale:.8}},jE=W.memo(function({speed:r=ZA.params.speed,frame:l=ZA.params.frame,colors:n=ZA.params.colors,colorBack:s=ZA.params.colorBack,angle1:c=ZA.params.angle1,angle2:f=ZA.params.angle2,length:g=ZA.params.length,edges:d=ZA.params.edges,blur:h=ZA.params.blur,fadeIn:p=ZA.params.fadeIn,fadeOut:v=ZA.params.fadeOut,density:w=ZA.params.density,gradient:S=ZA.params.gradient,fit:F=ZA.params.fit,scale:y=ZA.params.scale,rotation:b=ZA.params.rotation,originX:x=ZA.params.originX,originY:M=ZA.params.originY,offsetX:z=ZA.params.offsetX,offsetY:V=ZA.params.offsetY,worldWidth:D=ZA.params.worldWidth,worldHeight:K=ZA.params.worldHeight,...Y}){const Z={u_colors:n.map(uA),u_colorsCount:n.length,u_colorBack:uA(s),u_angle1:c,u_angle2:f,u_length:g,u_edges:d,u_blur:h,u_fadeIn:p,u_fadeOut:v,u_density:w,u_gradient:S,u_fit:jA[F],u_scale:y,u_rotation:b,u_offsetX:z,u_offsetY:V,u_originX:x,u_originY:M,u_worldWidth:D,u_worldHeight:K};return j.jsx(XA,{...Y,speed:r,frame:l,fragmentShader:fE,uniforms:Z})},Fe),SA={params:{...et,fit:"cover",speed:0,frame:0,colorBack:"#00000000",colorShadow:"#000000",colorHighlight:"#ffffff",shadows:.25,size:.5,angle:0,distortionShape:"prism",highlights:.1,shape:"lines",distortion:.5,shift:0,blur:0,edges:.25,stretch:0,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,grainMixer:0,grainOverlay:0}},qE=W.memo(function({speed:r=SA.params.speed,frame:l=SA.params.frame,colorBack:n=SA.params.colorBack,colorShadow:s=SA.params.colorShadow,colorHighlight:c=SA.params.colorHighlight,image:f="",shadows:g=SA.params.shadows,angle:d=SA.params.angle,distortion:h=SA.params.distortion,distortionShape:p=SA.params.distortionShape,highlights:v=SA.params.highlights,shape:w=SA.params.shape,shift:S=SA.params.shift,blur:F=SA.params.blur,edges:y=SA.params.edges,margin:b,marginLeft:x=b??SA.params.marginLeft,marginRight:M=b??SA.params.marginRight,marginTop:z=b??SA.params.marginTop,marginBottom:V=b??SA.params.marginBottom,grainMixer:D=SA.params.grainMixer,grainOverlay:K=SA.params.grainOverlay,stretch:Y=SA.params.stretch,count:Z,size:J=Z===void 0?SA.params.size:Math.pow(1/(Z*1.6),1/6)/.7-.5,fit:aA=SA.params.fit,scale:oA=SA.params.scale,rotation:BA=SA.params.rotation,originX:nA=SA.params.originX,originY:cA=SA.params.originY,offsetX:vA=SA.params.offsetX,offsetY:I=SA.params.offsetY,worldWidth:X=SA.params.worldWidth,worldHeight:tA=SA.params.worldHeight,...gA}){const q={u_image:f,u_colorBack:uA(n),u_colorShadow:uA(s),u_colorHighlight:uA(c),u_shadows:g,u_size:J,u_angle:d,u_distortion:h,u_shift:S,u_blur:F,u_edges:y,u_stretch:Y,u_distortionShape:hE[p],u_highlights:v,u_shape:dE[w],u_marginLeft:x,u_marginRight:M,u_marginTop:z,u_marginBottom:V,u_grainMixer:D,u_grainOverlay:K,u_fit:jA[aA],u_scale:oA,u_rotation:BA,u_offsetX:vA,u_offsetY:I,u_originX:nA,u_originY:cA,u_worldWidth:X,u_worldHeight:tA};return j.jsx(XA,{...gA,speed:r,frame:l,fragmentShader:gE,mipmaps:["u_image"],uniforms:q})}),de={params:{...et,scale:.8,speed:1,frame:0,colorBack:"#909090",colorHighlight:"#ffffff",highlights:.07,layering:.5,edges:.8,waves:.3,caustic:.1,size:1}},PE=W.memo(function({speed:r=de.params.speed,frame:l=de.params.frame,colorBack:n=de.params.colorBack,colorHighlight:s=de.params.colorHighlight,image:c="",highlights:f=de.params.highlights,layering:g=de.params.layering,waves:d=de.params.waves,edges:h=de.params.edges,caustic:p=de.params.caustic,effectScale:v,size:w=v===void 0?de.params.size:10/9/v-1/9,fit:S=de.params.fit,scale:F=de.params.scale,rotation:y=de.params.rotation,originX:b=de.params.originX,originY:x=de.params.originY,offsetX:M=de.params.offsetX,offsetY:z=de.params.offsetY,worldWidth:V=de.params.worldWidth,worldHeight:D=de.params.worldHeight,...K}){const Y={u_image:c,u_colorBack:uA(n),u_colorHighlight:uA(s),u_highlights:f,u_layering:g,u_waves:d,u_edges:h,u_caustic:p,u_size:w,u_fit:jA[S],u_rotation:y,u_scale:F,u_offsetX:M,u_offsetY:z,u_originX:b,u_originY:x,u_worldWidth:V,u_worldHeight:D};return j.jsx(XA,{...K,speed:r,frame:l,fragmentShader:BE,mipmaps:["u_image"],uniforms:Y})},Fe),he={params:{...et,fit:"cover",speed:0,frame:0,colorFront:"#94ffaf",colorBack:"#000c38",colorHighlight:"#eaff94",type:"8x8",size:2,colorSteps:2,originalColors:!1,inverted:!1}},$E=W.memo(function({speed:r=he.params.speed,frame:l=he.params.frame,colorFront:n=he.params.colorFront,colorBack:s=he.params.colorBack,colorHighlight:c=he.params.colorHighlight,image:f="",type:g=he.params.type,colorSteps:d=he.params.colorSteps,originalColors:h=he.params.originalColors,inverted:p=he.params.inverted,pxSize:v,size:w=v===void 0?he.params.size:v,fit:S=he.params.fit,scale:F=he.params.scale,rotation:y=he.params.rotation,originX:b=he.params.originX,originY:x=he.params.originY,offsetX:M=he.params.offsetX,offsetY:z=he.params.offsetY,worldWidth:V=he.params.worldWidth,worldHeight:D=he.params.worldHeight,...K}){const Y={u_image:f,u_colorFront:uA(n),u_colorBack:uA(s),u_colorHighlight:uA(c),u_type:pp[g],u_pxSize:w,u_colorSteps:d,u_originalColors:h,u_inverted:p,u_fit:jA[S],u_rotation:y,u_scale:F,u_offsetX:M,u_offsetY:z,u_originX:b,u_originY:x,u_worldWidth:V,u_worldHeight:D};return j.jsx(XA,{...K,speed:r,frame:l,fragmentShader:mE,uniforms:Y})},Fe),Vi="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",A2=a=>typeof a=="object"&&typeof a.then=="function",om=[];function e2(a,r){if(a===r)return!0;if(!a||!r)return!1;const l=a.length;if(r.length!==l)return!1;for(let n=0;n<l;n++)if(a[n]!==r[n])return!1;return!0}function t2(a,r=null){r===null&&(r=[a]);for(const n of om)if(e2(r,n.keys)){if(Object.prototype.hasOwnProperty.call(n,"error"))throw n.error;if(Object.prototype.hasOwnProperty.call(n,"response"))return n.response;throw n.promise}const l={keys:r,promise:(A2(a)?a:a(...r)).then(n=>{l.response=n}).catch(n=>l.error=n)};throw om.push(l),l.promise}const wp=(a,r)=>t2(a,r),Qe={params:{...et,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#11206a","#1f3ba2","#2f63e7","#6bd7ff","#ffe679","#ff991e","#ff4c00"]}},a2=W.memo(function({speed:r=Qe.params.speed,frame:l=Qe.params.frame,image:n="",contour:s=Qe.params.contour,angle:c=Qe.params.angle,noise:f=Qe.params.noise,innerGlow:g=Qe.params.innerGlow,outerGlow:d=Qe.params.outerGlow,colorBack:h=Qe.params.colorBack,colors:p=Qe.params.colors,suspendWhenProcessingImage:v=!1,fit:w=Qe.params.fit,offsetX:S=Qe.params.offsetX,offsetY:F=Qe.params.offsetY,originX:y=Qe.params.originX,originY:b=Qe.params.originY,rotation:x=Qe.params.rotation,scale:M=Qe.params.scale,worldHeight:z=Qe.params.worldHeight,worldWidth:V=Qe.params.worldWidth,...D}){const K=typeof n=="string"?n:n.src,[Y,Z]=W.useState(Vi);let J;v&&typeof window<"u"?J=wp(()=>Am(K).then(oA=>URL.createObjectURL(oA.blob)),[K,"heatmap"]):J=Y,W.useLayoutEffect(()=>{if(v)return;if(!K){Z(Vi);return}let oA,BA=!0;return Am(K).then(nA=>{BA&&(oA=URL.createObjectURL(nA.blob),Z(oA))}),()=>{BA=!1}},[K,v]);const aA=W.useMemo(()=>({u_image:J,u_contour:s,u_angle:c,u_noise:f,u_innerGlow:g,u_outerGlow:d,u_colorBack:uA(h),u_colors:p.map(uA),u_colorsCount:p.length,u_fit:jA[w],u_offsetX:S,u_offsetY:F,u_originX:y,u_originY:b,u_rotation:x,u_scale:M,u_worldHeight:z,u_worldWidth:V}),[r,l,s,c,f,g,d,p,h,J,w,S,F,y,b,x,M,z,V]);return j.jsx(XA,{...D,speed:r,frame:l,fragmentShader:pE,mipmaps:["u_image"],uniforms:aA})},Fe),te={params:{...et,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},r2=W.memo(function({colorBack:r=te.params.colorBack,colorTint:l=te.params.colorTint,speed:n=te.params.speed,frame:s=te.params.frame,image:c="",contour:f=te.params.contour,distortion:g=te.params.distortion,softness:d=te.params.softness,repetition:h=te.params.repetition,shiftRed:p=te.params.shiftRed,shiftBlue:v=te.params.shiftBlue,angle:w=te.params.angle,shape:S=te.params.shape,suspendWhenProcessingImage:F=!1,fit:y=te.params.fit,scale:b=te.params.scale,rotation:x=te.params.rotation,originX:M=te.params.originX,originY:z=te.params.originY,offsetX:V=te.params.offsetX,offsetY:D=te.params.offsetY,worldWidth:K=te.params.worldWidth,worldHeight:Y=te.params.worldHeight,...Z}){const J=typeof c=="string"?c:c.src,[aA,oA]=W.useState(Vi);let BA;F&&typeof window<"u"&&J?BA=wp(()=>tm(J).then(cA=>URL.createObjectURL(cA.pngBlob)),[J,"liquid-metal"]):BA=aA,W.useLayoutEffect(()=>{if(F)return;if(!J){oA(Vi);return}let cA,vA=!0;return tm(J).then(I=>{vA&&(cA=URL.createObjectURL(I.pngBlob),oA(cA))}),()=>{vA=!1}},[J,F]);const nA={u_colorBack:uA(r),u_colorTint:uA(l),u_image:BA,u_contour:f,u_distortion:g,u_softness:d,u_repetition:h,u_shiftRed:p,u_shiftBlue:v,u_angle:w,u_isImage:!!c,u_shape:QE[S],u_fit:jA[y],u_scale:b,u_rotation:x,u_offsetX:V,u_offsetY:D,u_originX:M,u_originY:z,u_worldWidth:K,u_worldHeight:Y};return j.jsx(XA,{...Z,speed:n,frame:s,fragmentShader:vE,mipmaps:["u_image"],uniforms:nA})}),kA={params:{...et,fit:"cover",speed:0,frame:0,colorBack:"#f2f1e8",colorFront:"#2b2b2b",size:.5,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:"hex",type:"gooey"}},o2=W.memo(function({speed:r=kA.params.speed,frame:l=kA.params.frame,colorFront:n=kA.params.colorFront,colorBack:s=kA.params.colorBack,image:c="",size:f=kA.params.size,radius:g=kA.params.radius,contrast:d=kA.params.contrast,originalColors:h=kA.params.originalColors,inverted:p=kA.params.inverted,grainMixer:v=kA.params.grainMixer,grainOverlay:w=kA.params.grainOverlay,grainSize:S=kA.params.grainSize,grid:F=kA.params.grid,type:y=kA.params.type,fit:b=kA.params.fit,scale:x=kA.params.scale,rotation:M=kA.params.rotation,originX:z=kA.params.originX,originY:V=kA.params.originY,offsetX:D=kA.params.offsetX,offsetY:K=kA.params.offsetY,worldWidth:Y=kA.params.worldWidth,worldHeight:Z=kA.params.worldHeight,...J}){const aA={u_image:c,u_colorFront:uA(n),u_colorBack:uA(s),u_size:f,u_radius:g,u_contrast:d,u_originalColors:h,u_inverted:p,u_grainMixer:v,u_grainOverlay:w,u_grainSize:S,u_grid:FE[F],u_type:yE[y],u_fit:jA[b],u_rotation:M,u_scale:x,u_offsetX:D,u_offsetY:K,u_originX:z,u_originY:V,u_worldWidth:Y,u_worldHeight:Z};return j.jsx(XA,{...J,speed:r,frame:l,fragmentShader:UE,uniforms:aA})},Fe),_A={params:{...et,scale:1,fit:"cover",speed:0,frame:0,colorBack:"#fbfaf5",colorC:"#00b4ff",colorM:"#fc519f",colorY:"#ffd800",colorK:"#231f20",size:.2,contrast:1,softness:1,grainSize:.5,grainMixer:0,grainOverlay:0,gridNoise:.2,floodC:.15,floodM:0,floodY:0,floodK:0,gainC:.3,gainM:0,gainY:.2,gainK:0,type:"ink"}},n2=W.memo(function({speed:r=_A.params.speed,frame:l=_A.params.frame,colorBack:n=_A.params.colorBack,colorC:s=_A.params.colorC,colorM:c=_A.params.colorM,colorY:f=_A.params.colorY,colorK:g=_A.params.colorK,image:d="",size:h=_A.params.size,contrast:p=_A.params.contrast,softness:v=_A.params.softness,grainSize:w=_A.params.grainSize,grainMixer:S=_A.params.grainMixer,grainOverlay:F=_A.params.grainOverlay,gridNoise:y=_A.params.gridNoise,floodC:b=_A.params.floodC,floodM:x=_A.params.floodM,floodY:M=_A.params.floodY,floodK:z=_A.params.floodK,gainC:V=_A.params.gainC,gainM:D=_A.params.gainM,gainY:K=_A.params.gainY,gainK:Y=_A.params.gainK,type:Z=_A.params.type,fit:J=_A.params.fit,scale:aA=_A.params.scale,rotation:oA=_A.params.rotation,originX:BA=_A.params.originX,originY:nA=_A.params.originY,offsetX:cA=_A.params.offsetX,offsetY:vA=_A.params.offsetY,worldWidth:I=_A.params.worldWidth,worldHeight:X=_A.params.worldHeight,...tA}){const gA={u_image:d,u_noiseTexture:Ya(),u_colorBack:uA(n),u_colorC:uA(s),u_colorM:uA(c),u_colorY:uA(f),u_colorK:uA(g),u_size:h,u_contrast:p,u_softness:v,u_grainSize:w,u_grainMixer:S,u_grainOverlay:F,u_gridNoise:y,u_floodC:b,u_floodM:x,u_floodY:M,u_floodK:z,u_gainC:V,u_gainM:D,u_gainY:K,u_gainK:Y,u_type:xE[Z],u_fit:jA[J],u_rotation:oA,u_scale:aA,u_offsetX:cA,u_offsetY:vA,u_originX:BA,u_originY:nA,u_worldWidth:I,u_worldHeight:X};return j.jsx(XA,{...tA,speed:r,frame:l,fragmentShader:EE,uniforms:gA})},Fe),cr="/images/reference.jpeg",Sf=[{id:"fluted-glass",name:"Fluted Glass",description:"Streaked ribbed glass distortion",category:"image-filters",colors:[{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"},{key:"colorShadow",label:"Shadow",defaultValue:"#000000"},{key:"colorHighlight",label:"Highlight",defaultValue:"#ffffff"}],component:qE,defaultProps:{image:cr,distortion:.5,size:.3,angle:0,blur:.3,edges:.3,shadows:.3,highlights:.15,shape:"lines",distortionShape:"prism",speed:.5},colorPropMap:{colorBack:"colorBack",colorShadow:"colorShadow",colorHighlight:"colorHighlight"}},{id:"water",name:"Water",description:"Underwater caustic distortion",category:"image-filters",colors:[{key:"colorBack",label:"Background",defaultValue:"#0a2540"},{key:"colorHighlight",label:"Caustic",defaultValue:"#7ad1ff"}],component:PE,defaultProps:{image:cr,highlights:.4,layering:.5,edges:.3,caustic:.5,waves:.3,size:3,speed:.5},colorPropMap:{colorBack:"colorBack",colorHighlight:"colorHighlight"}},{id:"halftone-dots",name:"Halftone Dots",description:"Classic halftone dot pattern filter",category:"image-filters",colors:[{key:"colorFront",label:"Dots",defaultValue:"#1a1a1a"},{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"}],component:o2,defaultProps:{image:cr,size:.15,radius:1,contrast:.5,grid:"hex",type:"classic",originalColors:!1,speed:0},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"halftone-cmyk",name:"Halftone CMYK",description:"CMYK printing dot pattern",category:"image-filters",colors:[{key:"colorBack",label:"Paper",defaultValue:"#f5f0eb"},{key:"colorC",label:"Cyan",defaultValue:"#00aeef"},{key:"colorM",label:"Magenta",defaultValue:"#ec008c"},{key:"colorY",label:"Yellow",defaultValue:"#fff200"},{key:"colorK",label:"Black",defaultValue:"#1a1a1a"}],component:n2,defaultProps:{image:cr,size:.15,contrast:.5,softness:.1,type:"dots",speed:0},colorPropMap:{colorBack:"colorBack",colorC:"colorC",colorM:"colorM",colorY:"colorY",colorK:"colorK"}},{id:"image-dithering",name:"Image Dithering",description:"Retro dithered image effect",category:"image-filters",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#8b1a1a"},{key:"colorBack",label:"Background",defaultValue:"#f5f0eb"},{key:"colorHighlight",label:"Highlight",defaultValue:"#cc6633"}],component:$E,defaultProps:{image:cr,type:"4x4",size:2,colorSteps:3,originalColors:!1,speed:0},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack",colorHighlight:"colorHighlight"}},{id:"heatmap",name:"Heatmap",description:"Glowing color gradient over image",category:"logo-animations",colors:[{key:"color1",label:"Heat 1",defaultValue:"#ff0000"},{key:"color2",label:"Heat 2",defaultValue:"#ff8800"},{key:"color3",label:"Heat 3",defaultValue:"#ffff00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:a2,defaultProps:{image:cr,contour:.5,angle:45,noise:.3,innerGlow:.5,outerGlow:.3,speed:.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",colorBack:"colorBack"}},{id:"liquid-metal",name:"Liquid Metal",description:"Futuristic liquid metal material",category:"logo-animations",colors:[{key:"colorBack",label:"Background",defaultValue:"#000000"},{key:"colorTint",label:"Tint",defaultValue:"#4488ff"}],component:r2,defaultProps:{image:cr,repetition:4,softness:.5,shiftRed:0,shiftBlue:0,contour:.5,distortion:.3,angle:45,shape:"circle",speed:1},colorPropMap:{colorBack:"colorBack",colorTint:"colorTint"}},{id:"mesh-gradient",name:"Mesh Gradient",description:"Flowing organic color blend",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#5100ff"},{key:"color2",label:"Color 2",defaultValue:"#00ff80"},{key:"color3",label:"Color 3",defaultValue:"#ffcc00"},{key:"color4",label:"Color 4",defaultValue:"#ea00ff"}],component:OE,defaultProps:{distortion:.8,swirl:.1,speed:.4},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]"}},{id:"neuro-noise",name:"Neuro Noise",description:"Glowing web-like fractal structure",category:"effects",colors:[{key:"colorFront",label:"Highlight",defaultValue:"#ffffff"},{key:"colorMid",label:"Main Color",defaultValue:"#47a6ff"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:KE,defaultProps:{brightness:.05,contrast:.3,speed:1},colorPropMap:{colorFront:"colorFront",colorMid:"colorMid",colorBack:"colorBack"}},{id:"grain-gradient",name:"Grain Gradient",description:"Noise-textured color gradient",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:ZE,defaultProps:{softness:.5,intensity:.5,noise:.25,shape:"corners",speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack"}},{id:"god-rays",name:"God Rays",description:"Dramatic rays of light",category:"effects",colors:[{key:"color1",label:"Ray 1",defaultValue:"#cc3333"},{key:"color2",label:"Ray 2",defaultValue:"#cc9933"},{key:"color3",label:"Ray 3",defaultValue:"#99cc33"},{key:"color4",label:"Ray 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"},{key:"colorBloom",label:"Bloom",defaultValue:"#0000ff"}],component:kE,defaultProps:{bloom:.4,intensity:.8,density:.3,spotty:.3,midSize:.2,midIntensity:.4,speed:.75,offsetY:-.55},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack",colorBloom:"colorBloom"}},{id:"smoke-ring",name:"Smoke Ring",description:"Radial smoky gradient",category:"effects",colors:[{key:"color1",label:"Smoke Color",defaultValue:"#cc3333"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:LE,defaultProps:{noiseScale:3,noiseIterations:8,radius:.25,thickness:.65,innerShape:.7,speed:.5,scale:.8},colorPropMap:{color1:"colors[0]",colorBack:"colorBack"}},{id:"warp",name:"Warp",description:"Animated warped color fields",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"}],component:YE,defaultProps:{proportion:.45,softness:1,distortion:.25,swirl:.8,swirlIterations:10,shape:"checks",shapeScale:.1,speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]"}},{id:"metaballs",name:"Metaballs",description:"Gooey merging organic blobs",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"color5",label:"Color 5",defaultValue:"#33cc99"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:GE,defaultProps:{count:10,size:.83,speed:1},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",color5:"colors[4]",colorBack:"colorBack"}},{id:"dithering",name:"Dithering",description:"Retro pixel dithering effect",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#00b3ff"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:WE,defaultProps:{shape:"sphere",type:"4x4",size:2,speed:1,scale:.6},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"dot-orbit",name:"Dot Orbit",description:"Orbiting multi-color dot grid",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"color4",label:"Color 4",defaultValue:"#33cc33"},{key:"color5",label:"Color 5",defaultValue:"#33cc99"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:RE,defaultProps:{stepsPerColor:4,size:1,sizeRange:0,spreading:1,speed:1.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",color5:"colors[4]",colorBack:"colorBack"}},{id:"dot-grid",name:"Dot Grid",description:"Static grid of shapes",category:"effects",colors:[{key:"colorFill",label:"Fill",defaultValue:"#ffffff"},{key:"colorStroke",label:"Stroke",defaultValue:"#ffaa00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:VE,defaultProps:{size:2,gapX:32,gapY:32,strokeWidth:0,sizeRange:0,opacityRange:0,shape:"circle"},colorPropMap:{colorFill:"colorFill",colorStroke:"colorStroke",colorBack:"colorBack"}},{id:"voronoi",name:"Voronoi",description:"Animated Voronoi cell pattern",category:"effects",colors:[{key:"color1",label:"Cell 1",defaultValue:"#cc3333"},{key:"color2",label:"Cell 2",defaultValue:"#cc9933"},{key:"colorGlow",label:"Glow",defaultValue:"#ffffff"},{key:"colorGap",label:"Gap",defaultValue:"#2e0000"}],component:zE,defaultProps:{stepsPerColor:3,distortion:.4,gap:.04,glow:0,speed:.5,scale:.5},colorPropMap:{color1:"colors[0]",color2:"colors[1]",colorGlow:"colorGlow",colorGap:"colorGap"}},{id:"waves",name:"Waves",description:"Configurable wave line pattern",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#ffbb00"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:NE,defaultProps:{frequency:.5,amplitude:.5,spacing:1.2,proportion:.1,softness:0,shape:0,scale:.6},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"color-panels",name:"Color Panels",description:"Rotating translucent 3D panels",category:"effects",colors:[{key:"color1",label:"Panel 1",defaultValue:"#cc3333"},{key:"color2",label:"Panel 2",defaultValue:"#cc9933"},{key:"color3",label:"Panel 3",defaultValue:"#99cc33"},{key:"color4",label:"Panel 4",defaultValue:"#33cc33"},{key:"colorBack",label:"Background",defaultValue:"#000000"}],component:jE,defaultProps:{density:3,angle1:0,angle2:0,length:1.1,edges:!1,blur:0,fadeIn:1,fadeOut:.3,gradient:0,speed:.5,scale:.8},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",color4:"colors[3]",colorBack:"colorBack"}},{id:"spiral",name:"Spiral",description:"Animated morphing spiral",category:"effects",colors:[{key:"colorFront",label:"Foreground",defaultValue:"#7ad1ff"},{key:"colorBack",label:"Background",defaultValue:"#001429"}],component:XE,defaultProps:{density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1},colorPropMap:{colorFront:"colorFront",colorBack:"colorBack"}},{id:"swirl",name:"Swirl",description:"Twisting color bands",category:"effects",colors:[{key:"color1",label:"Color 1",defaultValue:"#cc3333"},{key:"color2",label:"Color 2",defaultValue:"#cc9933"},{key:"color3",label:"Color 3",defaultValue:"#99cc33"},{key:"colorBack",label:"Background",defaultValue:"#330000"}],component:JE,defaultProps:{bandCount:4,twist:.1,center:.2,proportion:.5,softness:0,noise:.2,noiseFrequency:.4,speed:.32},colorPropMap:{color1:"colors[0]",color2:"colors[1]",color3:"colors[2]",colorBack:"colorBack"}}];function l2(){return Sf}function Cp(a){return Sf.find(r=>r.id===a)}function i2(){return["effects","image-filters","logo-animations"]}function s2(a){return Sf.filter(r=>r.category===a)}function nm(){const a=new URLSearchParams(window.location.search),r=a.get("preset");if(!r)return null;const l=Cp(r);if(!l)return null;const n={};for(const s of l.colors){const c=a.get(s.key);c&&/^[0-9a-fA-F]{6}$/.test(c)&&(n[s.key]=`#${c}`)}return{presetId:r,colors:n}}function u2(a,r){const l=new URLSearchParams;l.set("preset",a);for(const[s,c]of Object.entries(r))l.set(s,c.replace("#",""));const n=`${window.location.pathname}?${l.toString()}`;window.history.replaceState({},"",n)}function c2(a,r){const l={...a.defaultProps},n=[];for(const[s,c]of Object.entries(a.colorPropMap)){const f=r[s];if(!f)continue;const g=c.match(/^colors\[(\d+)\]$/);g?n.push({index:parseInt(g[1],10),value:f}):l[c]=f}return n.length>0&&(n.sort((s,c)=>s.index-c.index),l.colors=n.map(s=>s.value)),l}function f2({preset:a,colors:r,onError:l}){const n=a.component,s=W.useRef(null),c=W.useMemo(()=>{try{const f=c2(a,r);return s.current=null,f}catch(f){return s.current=f instanceof Error?f.message:"Failed to build shader props",a.defaultProps}},[a,r]);return W.useEffect(()=>{l(s.current)},[c,l]),j.jsx("div",{className:"shader-preview",children:j.jsx(n,{...c,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})})}function Bo(){return(Bo=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n])}return a}).apply(this,arguments)}function qi(a,r){if(a==null)return{};var l,n,s={},c=Object.keys(a);for(n=0;n<c.length;n++)r.indexOf(l=c[n])>=0||(s[l]=a[l]);return s}function Sn(a){var r=W.useRef(a),l=W.useRef(function(n){r.current&&r.current(n)});return r.current=a,l.current}var In=function(a,r,l){return r===void 0&&(r=0),l===void 0&&(l=1),a>l?l:a<r?r:a},xn=function(a){return"touches"in a},vf=function(a){return a&&a.ownerDocument.defaultView||self},lm=function(a,r,l){var n=a.getBoundingClientRect(),s=xn(r)?(function(c,f){for(var g=0;g<c.length;g++)if(c[g].identifier===f)return c[g];return c[0]})(r.touches,l):r;return{left:In((s.pageX-(n.left+vf(a).pageXOffset))/n.width),top:In((s.pageY-(n.top+vf(a).pageYOffset))/n.height)}},im=function(a){!xn(a)&&a.preventDefault()},Qp=ye.memo(function(a){var r=a.onMove,l=a.onKey,n=qi(a,["onMove","onKey"]),s=W.useRef(null),c=Sn(r),f=Sn(l),g=W.useRef(null),d=W.useRef(!1),h=W.useMemo(function(){var S=function(b){im(b),(xn(b)?b.touches.length>0:b.buttons>0)&&s.current?c(lm(s.current,b,g.current)):y(!1)},F=function(){return y(!1)};function y(b){var x=d.current,M=vf(s.current),z=b?M.addEventListener:M.removeEventListener;z(x?"touchmove":"mousemove",S),z(x?"touchend":"mouseup",F)}return[function(b){var x=b.nativeEvent,M=s.current;if(M&&(im(x),!(function(V,D){return D&&!xn(V)})(x,d.current)&&M)){if(xn(x)){d.current=!0;var z=x.changedTouches||[];z.length&&(g.current=z[0].identifier)}M.focus(),c(lm(M,x,g.current)),y(!0)}},function(b){var x=b.which||b.keyCode;x<37||x>40||(b.preventDefault(),f({left:x===39?.05:x===37?-.05:0,top:x===40?.05:x===38?-.05:0}))},y]},[f,c]),p=h[0],v=h[1],w=h[2];return W.useEffect(function(){return w},[w]),ye.createElement("div",Bo({},n,{onTouchStart:p,onMouseDown:p,className:"react-colorful__interactive",ref:s,onKeyDown:v,tabIndex:0,role:"slider"}))}),If=function(a){return a.filter(Boolean).join(" ")},Up=function(a){var r=a.color,l=a.left,n=a.top,s=n===void 0?.5:n,c=If(["react-colorful__pointer",a.className]);return ye.createElement("div",{className:c,style:{top:100*s+"%",left:100*l+"%"}},ye.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},Oe=function(a,r,l){return r===void 0&&(r=0),l===void 0&&(l=Math.pow(10,r)),Math.round(l*a)/l},B2=function(a){return p2(wf(a))},wf=function(a){return a[0]==="#"&&(a=a.substring(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?Oe(parseInt(a[3]+a[3],16)/255,2):1}:{r:parseInt(a.substring(0,2),16),g:parseInt(a.substring(2,4),16),b:parseInt(a.substring(4,6),16),a:a.length===8?Oe(parseInt(a.substring(6,8),16)/255,2):1}},g2=function(a){return m2(h2(a))},d2=function(a){var r=a.s,l=a.v,n=a.a,s=(200-r)*l/100;return{h:Oe(a.h),s:Oe(s>0&&s<200?r*l/100/(s<=100?s:200-s)*100:0),l:Oe(s/2),a:Oe(n,2)}},Cf=function(a){var r=d2(a);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},h2=function(a){var r=a.h,l=a.s,n=a.v,s=a.a;r=r/360*6,l/=100,n/=100;var c=Math.floor(r),f=n*(1-l),g=n*(1-(r-c)*l),d=n*(1-(1-r+c)*l),h=c%6;return{r:Oe(255*[n,g,f,f,d,n][h]),g:Oe(255*[d,n,n,g,f,f][h]),b:Oe(255*[f,f,d,n,n,g][h]),a:Oe(s,2)}},Fi=function(a){var r=a.toString(16);return r.length<2?"0"+r:r},m2=function(a){var r=a.r,l=a.g,n=a.b,s=a.a,c=s<1?Fi(Oe(255*s)):"";return"#"+Fi(r)+Fi(l)+Fi(n)+c},p2=function(a){var r=a.r,l=a.g,n=a.b,s=a.a,c=Math.max(r,l,n),f=c-Math.min(r,l,n),g=f?c===r?(l-n)/f:c===l?2+(n-r)/f:4+(r-l)/f:0;return{h:Oe(60*(g<0?g+6:g)),s:Oe(c?f/c*100:0),v:Oe(c/255*100),a:s}},v2=ye.memo(function(a){var r=a.hue,l=a.onChange,n=If(["react-colorful__hue",a.className]);return ye.createElement("div",{className:n},ye.createElement(Qp,{onMove:function(s){l({h:360*s.left})},onKey:function(s){l({h:In(r+360*s.left,0,360)})},"aria-label":"Hue","aria-valuenow":Oe(r),"aria-valuemax":"360","aria-valuemin":"0"},ye.createElement(Up,{className:"react-colorful__hue-pointer",left:r/360,color:Cf({h:r,s:100,v:100,a:1})})))}),w2=ye.memo(function(a){var r=a.hsva,l=a.onChange,n={backgroundColor:Cf({h:r.h,s:100,v:100,a:1})};return ye.createElement("div",{className:"react-colorful__saturation",style:n},ye.createElement(Qp,{onMove:function(s){l({s:100*s.left,v:100-100*s.top})},onKey:function(s){l({s:In(r.s+100*s.left,0,100),v:In(r.v-100*s.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+Oe(r.s)+"%, Brightness "+Oe(r.v)+"%"},ye.createElement(Up,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:Cf(r)})))}),yp=function(a,r){if(a===r)return!0;for(var l in a)if(a[l]!==r[l])return!1;return!0},C2=function(a,r){return a.toLowerCase()===r.toLowerCase()||yp(wf(a),wf(r))};function Q2(a,r,l){var n=Sn(l),s=W.useState(function(){return a.toHsva(r)}),c=s[0],f=s[1],g=W.useRef({color:r,hsva:c});W.useEffect(function(){if(!a.equal(r,g.current.color)){var h=a.toHsva(r);g.current={hsva:h,color:r},f(h)}},[r,a]),W.useEffect(function(){var h;yp(c,g.current.hsva)||a.equal(h=a.fromHsva(c),g.current.color)||(g.current={hsva:c,color:h},n(h))},[c,a,n]);var d=W.useCallback(function(h){f(function(p){return Object.assign({},p,h)})},[]);return[c,d]}var U2=typeof window<"u"?W.useLayoutEffect:W.useEffect,y2=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},sm=new Map,F2=function(a){U2(function(){var r=a.current?a.current.ownerDocument:document;if(r!==void 0&&!sm.has(r)){var l=r.createElement("style");l.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,sm.set(r,l);var n=y2();n&&l.setAttribute("nonce",n),r.head.appendChild(l)}},[])},E2=function(a){var r=a.className,l=a.colorModel,n=a.color,s=n===void 0?l.defaultColor:n,c=a.onChange,f=qi(a,["className","colorModel","color","onChange"]),g=W.useRef(null);F2(g);var d=Q2(l,s,c),h=d[0],p=d[1],v=If(["react-colorful",r]);return ye.createElement("div",Bo({},f,{ref:g,className:v}),ye.createElement(w2,{hsva:h,onChange:p}),ye.createElement(v2,{hue:h.h,onChange:p,className:"react-colorful__last-control"}))},x2={defaultColor:"000",toHsva:B2,fromHsva:function(a){return g2({h:a.h,s:a.s,v:a.v,a:1})},equal:C2},b2=function(a){return ye.createElement(E2,Bo({},a,{colorModel:x2}))},_2=/^#?([0-9A-F]{3,8})$/i,H2=function(a){var r=a.color,l=r===void 0?"":r,n=a.onChange,s=a.onBlur,c=a.escape,f=a.validate,g=a.format,d=a.process,h=qi(a,["color","onChange","onBlur","escape","validate","format","process"]),p=W.useState(function(){return c(l)}),v=p[0],w=p[1],S=Sn(n),F=Sn(s),y=W.useCallback(function(x){var M=c(x.target.value);w(M),f(M)&&S(d?d(M):M)},[c,d,f,S]),b=W.useCallback(function(x){f(x.target.value)||w(c(l)),F(x)},[l,c,f,F]);return W.useEffect(function(){w(c(l))},[l,c]),ye.createElement("input",Bo({},h,{value:g?g(v):v,spellCheck:"false",onChange:y,onBlur:b}))},um=function(a){return"#"+a},S2=function(a){var r=a.prefixed,l=a.alpha,n=qi(a,["prefixed","alpha"]),s=W.useCallback(function(f){return f.replace(/([^0-9A-F]+)/gi,"").substring(0,l?8:6)},[l]),c=W.useCallback(function(f){return(function(g,d){var h=_2.exec(g),p=h?h[1].length:0;return p===3||p===6||!!d&&p===4||!!d&&p===8})(f,l)},[l]);return ye.createElement(H2,Bo({},n,{escape:s,format:r?um:void 0,process:um,validate:c}))};function cm({colorDefinitions:a,values:r,onChange:l,onReset:n,onExport:s}){return j.jsxs("div",{className:"color-panel",children:[j.jsxs("div",{className:"color-panel-header",children:[j.jsx("h3",{children:"Colors"}),j.jsx("button",{className:"reset-btn",onClick:n,children:"Reset"})]}),j.jsxs("div",{className:"export-section",children:[j.jsx("span",{className:"export-label",children:"Download preview"}),j.jsxs("div",{className:"export-actions",children:[j.jsx("button",{type:"button",onClick:()=>s("png"),children:"PNG"}),j.jsx("button",{type:"button",onClick:()=>s("svg"),children:"SVG"}),j.jsx("button",{type:"button",onClick:()=>s("video"),children:"Video"})]})]}),j.jsx("div",{className:"color-list",children:a.map(c=>j.jsxs("div",{className:"color-item",children:[j.jsxs("div",{className:"color-info",children:[j.jsx("label",{children:c.label}),c.description&&j.jsx("span",{className:"color-description",children:c.description})]}),j.jsxs("div",{className:"color-picker-wrapper",children:[j.jsx(b2,{color:r[c.key]||c.defaultValue,onChange:f=>l(c.key,f)}),j.jsx("div",{className:"hex-input-wrapper",children:j.jsx(S2,{color:r[c.key]||c.defaultValue,onChange:f=>l(c.key,f),prefixed:!0})})]})]},c.key))})]})}function I2(a){const r={...a.defaultProps},l=[];for(const n of a.colors){const s=a.colorPropMap[n.key];if(!s)continue;const c=s.match(/^colors\[(\d+)\]$/);c?l.push({index:parseInt(c[1],10),value:n.defaultValue}):r[s]=n.defaultValue}return l.length>0&&(l.sort((n,s)=>n.index-s.index),r.colors=l.map(n=>n.value)),r}function T2({preset:a}){const r=a.component,l=W.useMemo(()=>I2(a),[a]);return j.jsx("div",{className:"preset-thumbnail",children:j.jsx(r,{...l,speed:0,style:{width:"100%",height:"100%",pointerEvents:"none"}})})}function D2({selectedId:a,categoryFilter:r,onSelect:l,onCategoryChange:n}){const s=i2(),c=W.useMemo(()=>s2(r),[r]);return j.jsxs("div",{className:"preset-gallery",children:[j.jsx("div",{className:"gallery-top-row",children:j.jsx("div",{className:"category-tabs",children:s.map(f=>j.jsx("button",{className:`category-tab ${r===f?"active":""}`,onClick:()=>n(f),children:f==="image-filters"?"Image Filters":f==="logo-animations"?"Logo Animations":f==="effects"?"Effects":f},f))})}),j.jsx("div",{className:"preset-scroll-row",children:c.map(f=>j.jsxs("button",{className:`preset-card ${a===f.id?"selected":""}`,onClick:()=>l(f.id),children:[j.jsx(T2,{preset:f}),j.jsx("span",{className:"preset-name",children:f.name})]},f.id))})]})}function M2(){const a=l2(),[r,l]=W.useState(()=>{const D=nm();return(D==null?void 0:D.presetId)||a[0].id}),[n,s]=W.useState(()=>{const D=nm();return(D==null?void 0:D.colors)||{}}),[c,f]=W.useState("effects"),[g,d]=W.useState(!1),[h,p]=W.useState(null),[v,w]=W.useState(!1),S=W.useRef(null),F=Cp(r)||a[0];W.useEffect(()=>{Object.keys(n).length>0&&u2(r,n)},[r,n]),W.useEffect(()=>{const D=()=>{const K=window.scrollY;w(K>80)};return window.addEventListener("scroll",D,{passive:!0}),()=>window.removeEventListener("scroll",D)},[]);const y=W.useCallback(D=>{l(D),s({}),window.scrollTo({top:0,behavior:"smooth"})},[]),b=W.useCallback((D,K)=>{s(Y=>({...Y,[D]:K}))},[]),x=W.useCallback(()=>{s({})},[]),M=W.useCallback(D=>{p(D)},[]),z=W.useCallback(async D=>{const K=document.querySelector(".app");if(!K){p("The preview is not ready to export yet.");return}const Y=(Z,J)=>{const aA=URL.createObjectURL(Z),oA=document.createElement("a");oA.href=aA,oA.download=J,oA.click(),window.setTimeout(()=>URL.revokeObjectURL(aA),1e3)};try{const Z=await RF(K,{backgroundColor:"#0a0a0a",useCORS:!0,allowTaint:!1,logging:!1,width:window.innerWidth,height:window.innerHeight,windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollX:0,scrollY:window.scrollY});if(D==="png"){Z.toBlob(cA=>{cA&&Y(cA,`${F.id}.png`)},"image/png");return}const J=Z.toDataURL("image/png");if(D==="svg"){const cA=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Z.width} ${Z.height}"><image href="${J}" width="100%" height="100%" /></svg>`;Y(new Blob([cA],{type:"image/svg+xml"}),`${F.id}.svg`);return}const aA=Z.captureStream(30),oA=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",BA=[],nA=new MediaRecorder(aA,{mimeType:oA});nA.ondataavailable=cA=>{cA.data.size>0&&BA.push(cA.data)},nA.onstop=()=>Y(new Blob(BA,{type:oA}),`${F.id}.webm`),nA.start(),window.setTimeout(()=>nA.stop(),5e3)}catch(Z){p(Z instanceof Error?Z.message:"Unable to capture the current preview.")}},[F.id]),V=F.colors.reduce((D,K)=>(D[K.key]=n[K.key]||K.defaultValue,D),{});return j.jsxs("div",{className:"app",ref:S,children:[j.jsx("div",{className:"shader-canvas-wrapper",children:j.jsx(f2,{preset:F,colors:V,onError:M})}),j.jsxs("header",{className:"top-bar",children:[j.jsxs("div",{className:"top-bar-left",children:[j.jsx("h1",{className:"app-title",children:"Shader Explorer"}),j.jsx("span",{className:"preset-name-label",children:F.name})]}),j.jsx("div",{className:"top-bar-right",children:j.jsx("button",{className:`top-btn ${g?"active":""}`,onClick:()=>d(D=>!D),children:"Color"})})]}),h&&j.jsx("div",{className:"error-banner",children:h}),j.jsx("aside",{className:`color-panel-overlay ${g?"open":""}`,children:j.jsx(cm,{colorDefinitions:F.colors,values:V,onChange:b,onReset:x,onExport:z})}),j.jsx("div",{className:`bottom-gallery ${v?"scrolled-away":""}`,children:j.jsx(D2,{presets:a,selectedId:r,categoryFilter:c,onSelect:y,onCategoryChange:f})}),j.jsxs("div",{className:`scroll-hint ${v?"hidden":""}`,children:[j.jsx("div",{className:"scroll-hint-arrow"}),j.jsx("span",{children:"Scroll for colors"})]}),j.jsx("div",{className:"mobile-spacer"}),j.jsx("div",{className:"mobile-color-screen",children:j.jsx(cm,{colorDefinitions:F.colors,values:V,onChange:b,onReset:x,onExport:z})})]})}nC.createRoot(document.getElementById("root")).render(j.jsxs(W.StrictMode,{children:[j.jsx(M2,{}),j.jsx(hC,{})]}));
