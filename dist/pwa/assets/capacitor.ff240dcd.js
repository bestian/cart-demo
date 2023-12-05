import{_ as D}from"./index.dc59b4ae.js";var $e=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)a.hasOwnProperty(i)&&(r[i]=a[i])},e(n,t)};return function(n,t){e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),ve=globalThis&&globalThis.__awaiter||function(e,n,t,r){function a(i){return i instanceof t?i:new t(function(s){s(i)})}return new(t||(t=Promise))(function(i,s){function f(l){try{u(r.next(l))}catch(c){s(c)}}function o(l){try{u(r.throw(l))}catch(c){s(c)}}function u(l){l.done?i(l.value):a(l.value).then(f,o)}u((r=r.apply(e,n||[])).next())})},de=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,s;return s={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function f(u){return function(l){return o([u,l])}}function o(u){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,a&&(i=u[0]&2?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,a=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1],i=u;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(u);break}i[2]&&t.ops.pop(),t.trys.pop();continue}u=n.call(e,t)}catch(l){u=[6,l],a=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ge=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),a=0,n=0;n<t;n++)for(var i=arguments[n],s=0,f=i.length;s<f;s++,a++)r[a]=i[s];return r},A=0,j=!1,k,V,h=!1,w=typeof window!="undefined"?window:{},P=w.CSS,p=w.document||{head:{}},$={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)}},B=function(){return(p.head.attachShadow+"").indexOf("[native")>-1}(),ee=function(e){return Promise.resolve(e)},he=function(){try{return new CSSStyleSheet,!0}catch{}return!1}(),ne=new WeakMap,m=function(e){return ne.get(e)},ye=function(e){var n={$flags$:0,$hostElement$:e,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise(function(t){return n.$onInstanceResolve$=t}),n.$onReadyPromise$=new Promise(function(t){return n.$onReadyResolve$=t}),e["s-p"]=[],e["s-rc"]=[],ne.set(e,n)},K=function(e,n){return n in e},T=function(e){return console.error(e)},Q=new Map,pe=function(e,n,t){var r=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleIds$,i=Q.get(a);return i?i[r]:D(()=>import("./"+a+".entry.js"),[]).then(function(s){return Q.set(a,s),s[r]},T)},H=new Map,X=[],E=[],_=[],Se=function(e,n){return function(t){e.push(t),j||(j=!0,n&&$.$flags$&4?z(U):$.raf(U))}},me=function(e){for(var n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){T(t)}e.length=0},Z=function(e,n){for(var t=0,r=0;t<e.length&&(r=performance.now())<n;)try{e[t++](r)}catch(a){T(a)}t===e.length?e.length=0:t!==0&&e.splice(0,t)},U=function(){A++,me(X);var e=($.$flags$&6)===2?performance.now()+10*Math.ceil(A*(1/22)):1/0;Z(E,e),Z(_,e),E.length>0&&(_.push.apply(_,E),E.length=0),(j=X.length+E.length+_.length>0)?$.raf(U):A=0},z=function(e){return ee().then(e)},be=Se(E,!0),M={},Ee="http://www.w3.org/2000/svg",Te="http://www.w3.org/1999/xhtml",Le=function(e){return e!=null},F=function(e){return e=typeof e,e==="object"||e==="function"},we=function(){return P&&P.supports&&P.supports("color","var(--c)")?ee():D(()=>import("./css-shim-8775d9ad-556f0cc2.08197ff8.js"),[]).then(function(){return($.$cssShim$=w.__cssshim)?$.$cssShim$.i():0})},xe="{visibility:hidden}.hydrated{visibility:inherit}",S=function(e,n){return function(){}},_e=function(e,n){return function(){}},R=new WeakMap,Ie=function(e,n,t){var r=H.get(e);he&&t?(r=r||new CSSStyleSheet,r.replace(n)):r=n,H.set(e,r)},ke=function(e,n,t,r){var a=re(n.$tagName$),i=H.get(a);if(e=e.nodeType===11?e:p,i)if(typeof i=="string"){e=e.head||e;var s=R.get(e),f=void 0;if(s||R.set(e,s=new Set),!s.has(a)){{if($.$cssShim$){f=$.$cssShim$.createHostStyle(r,a,i,!!(n.$flags$&10));var o=f["s-sc"];o&&(a=o,s=null)}else f=p.createElement("style"),f.innerHTML=i;e.insertBefore(f,e.querySelector("link"))}s&&s.add(a)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=ge(e.adoptedStyleSheets,[i]));return a},He=function(e,n,t){var r=S("attachStyles",n.$tagName$),a=ke(B&&e.shadowRoot?e.shadowRoot:e.getRootNode(),n,t,e);n.$flags$&10&&(e["s-sc"]=a,e.classList.add(a+"-h")),r()},re=function(e,n){return"sc-"+e},Oe=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=null,i=!1,s=!1,f=[],o=function(c){for(var v=0;v<c.length;v++)a=c[v],Array.isArray(a)?o(a):a!=null&&typeof a!="boolean"&&((i=typeof e!="function"&&!F(a))&&(a=String(a)),i&&s?f[f.length-1].$text$+=a:f.push(i?q(null,a):a),s=i)};if(o(t),n){var u=n.className||n.class;u&&(n.class=typeof u!="object"?u:Object.keys(u).filter(function(c){return u[c]}).join(" "))}var l=q(e,null);return l.$attrs$=n,f.length>0&&(l.$children$=f),l},q=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};return t.$attrs$=null,t},Ae={},Pe=function(e){return e&&e.$tag$===Ae},C=function(e,n,t,r,a,i){if(t!==r){var s=K(e,n),f=n.toLowerCase();if(n==="class"){var o=e.classList,u=N(t),l=N(r);o.remove.apply(o,u.filter(function(d){return d&&!l.includes(d)})),o.add.apply(o,l.filter(function(d){return d&&!u.includes(d)}))}else if(n==="style"){for(var c in t)(!r||r[c]==null)&&(c.includes("-")?e.style.removeProperty(c):e.style[c]="");for(var c in r)(!t||r[c]!==t[c])&&(c.includes("-")?e.style.setProperty(c,r[c]):e.style[c]=r[c])}else if(n==="ref")r&&r(e);else if(!s&&n[0]==="o"&&n[1]==="n")n[2]==="-"?n=n.slice(3):K(w,f)?n=f.slice(2):n=f[2]+n.slice(3),t&&$.rel(e,n,t,!1),r&&$.ael(e,n,r,!1);else{var v=F(r);if((s||v&&r!==null)&&!a)try{if(e.tagName.includes("-"))e[n]=r;else{var g=r==null?"":r;n==="list"?s=!1:(t==null||e[n]!=g)&&(e[n]=g)}}catch{}r==null||r===!1?e.removeAttribute(n):(!s||i&4||a)&&!v&&(r=r===!0?"":r,e.setAttribute(n,r))}}},je=/\s/,N=function(e){return e?e.split(je):[]},te=function(e,n,t,r){var a=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$,i=e&&e.$attrs$||M,s=n.$attrs$||M;for(r in i)r in s||C(a,r,i[r],void 0,t,n.$flags$);for(r in s)C(a,r,i[r],s[r],t,n.$flags$)},W=function(e,n,t,r){var a=n.$children$[t],i=0,s,f;if(a.$text$!==null)s=a.$elm$=p.createTextNode(a.$text$);else{if(h||(h=a.$tag$==="svg"),s=a.$elm$=p.createElementNS(h?Ee:Te,a.$tag$),h&&a.$tag$==="foreignObject"&&(h=!1),te(null,a,h),Le(k)&&s["s-si"]!==k&&s.classList.add(s["s-si"]=k),a.$children$)for(i=0;i<a.$children$.length;++i)f=W(e,a,i),f&&s.appendChild(f);a.$tag$==="svg"?h=!1:s.tagName==="foreignObject"&&(h=!0)}return s},ae=function(e,n,t,r,a,i){var s=e,f;for(s.shadowRoot&&s.tagName===V&&(s=s.shadowRoot);a<=i;++a)r[a]&&(f=W(null,t,a),f&&(r[a].$elm$=f,s.insertBefore(f,n)))},ie=function(e,n,t,r,a){for(;n<=t;++n)(r=e[n])&&(a=r.$elm$,se(r),a.remove())},Be=function(e,n,t,r){for(var a=0,i=0,s=n.length-1,f=n[0],o=n[s],u=r.length-1,l=r[0],c=r[u],v;a<=s&&i<=u;)f==null?f=n[++a]:o==null?o=n[--s]:l==null?l=r[++i]:c==null?c=r[--u]:I(f,l)?(L(f,l),f=n[++a],l=r[++i]):I(o,c)?(L(o,c),o=n[--s],c=r[--u]):I(f,c)?(L(f,c),e.insertBefore(f.$elm$,o.$elm$.nextSibling),f=n[++a],c=r[--u]):I(o,l)?(L(o,l),e.insertBefore(o.$elm$,f.$elm$),o=n[--s],l=r[++i]):(v=W(n&&n[i],t,i),l=r[++i],v&&f.$elm$.parentNode.insertBefore(v,f.$elm$));a>s?ae(e,r[u+1]==null?null:r[u+1].$elm$,t,r,i,u):i>u&&ie(n,a,s)},I=function(e,n){return e.$tag$===n.$tag$},L=function(e,n){var t=n.$elm$=e.$elm$,r=e.$children$,a=n.$children$,i=n.$tag$,s=n.$text$;s===null?(h=i==="svg"?!0:i==="foreignObject"?!1:h,te(e,n,h),r!==null&&a!==null?Be(t,r,n,a):a!==null?(e.$text$!==null&&(t.textContent=""),ae(t,null,n,a,0,a.length-1)):r!==null&&ie(r,0,r.length-1),h&&i==="svg"&&(h=!1)):e.$text$!==s&&(t.data=s)},se=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.forEach(se)},Ue=function(e,n,t,r){V=e.tagName;var a=n.$vnode$||q(null,null),i=Pe(r)?r:Oe(null,null,r);i.$tag$=null,i.$flags$|=4,n.$vnode$=i,i.$elm$=a.$elm$=e.shadowRoot||e,k=e["s-sc"],L(a,i)},ue=function(e,n){n&&!e.$onRenderResolve$&&n["s-p"].push(new Promise(function(t){return e.$onRenderResolve$=t}))},O=function(e,n,t,r){if(n.$flags$|=16,n.$flags$&4){n.$flags$|=512;return}var a=S("scheduleUpdate",t.$tagName$),i=n.$ancestorComponent$,s=n.$lazyInstance$,f=function(){return qe(e,n,t,s,r)};ue(n,i);var o;return r&&(n.$flags$|=256,n.$queuedListeners$&&(n.$queuedListeners$.forEach(function(u){var l=u[0],c=u[1];return G(s,l,c)}),n.$queuedListeners$=null)),a(),We(o,function(){return be(f)})},qe=function(e,n,t,r,a){var i=S("update",t.$tagName$),s=e["s-rc"];a&&He(e,t,n.$modeName$);var f=S("render",t.$tagName$);Ue(e,n,t,De(r)),$.$cssShim$&&$.$cssShim$.updateHost(e),n.$flags$&=-17,n.$flags$|=2,s&&(s.forEach(function(l){return l()}),e["s-rc"]=void 0),f(),i();{var o=e["s-p"],u=function(){return ze(e,n,t)};o.length===0?u():(Promise.all(o).then(u),n.$flags$|=4,o.length=0)}},De=function(e,n){try{e=e.render()}catch(t){T(t)}return e},ze=function(e,n,t){var r=S("postUpdate",t.$tagName$),a=n.$lazyInstance$,i=n.$ancestorComponent$;n.$flags$&64?r():(n.$flags$|=64,oe(e),G(a,"componentDidLoad"),r(),n.$onReadyResolve$(e),i||fe()),n.$onInstanceResolve$(e),n.$onRenderResolve$&&(n.$onRenderResolve$(),n.$onRenderResolve$=void 0),n.$flags$&512&&z(function(){return O(e,n,t,!1)}),n.$flags$&=-517},Fe=function(e,n){{var t=m(e),r=t.$hostElement$.isConnected;return r&&(t.$flags$&18)===2&&O(e,t,n,!1),r}},fe=function(e){oe(p.documentElement),$.$flags$|=2},G=function(e,n,t){if(e&&e[n])try{return e[n](t)}catch(r){T(r)}},We=function(e,n){return e&&e.then?e.then(n):n()},oe=function(e){return e.classList.add("hydrated")},Ge=function(e,n,t){n.$queuedListeners$=n.$queuedListeners$||[];var r=t.map(function(a){var i=a[0],s=a[1],f=a[2],o=Je(e,i),u=Ye(n,f),l=Ke(i);return $.ael(o,s,u,l),function(){return $.rel(o,s,u,l)}});return function(){return r.forEach(function(a){return a()})}},Ye=function(e,n){return function(t){e.$flags$&256?e.$lazyInstance$[n](t):e.$queuedListeners$.push([n,t])}},Je=function(e,n){return n&32?p.body:e},Ke=function(e){return(e&2)!==0},Qe=function(e,n){return e!=null&&!F(e)?n&4?e==="false"?!1:e===""||!!e:n&2?parseFloat(e):n&1?String(e):e:e},Xe=function(e,n){return m(e).$instanceValues$.get(n)},Ze=function(e,n,t,r){var a=m(e),i=a.$hostElement$,s=a.$instanceValues$.get(n),f=a.$flags$,o=a.$lazyInstance$;t=Qe(t,r.$members$[n][0]),t!==s&&(!(f&8)||s===void 0)&&(a.$instanceValues$.set(n,t),o&&(f&18)===2&&O(i,a,r,!1))},le=function(e,n,t){if(n.$members$){var r=Object.entries(n.$members$),a=e.prototype;if(r.forEach(function(s){var f=s[0],o=s[1][0];o&31||t&2&&o&32?Object.defineProperty(a,f,{get:function(){return Xe(this,f)},set:function(u){Ze(this,f,u,n)},configurable:!0,enumerable:!0}):t&1&&o&64&&Object.defineProperty(a,f,{value:function(){for(var u=[],l=0;l<arguments.length;l++)u[l]=arguments[l];var c=m(this);return c.$onInstancePromise$.then(function(){var v;return(v=c.$lazyInstance$)[f].apply(v,u)})}})}),t&1){var i=new Map;a.attributeChangedCallback=function(s,f,o){var u=this;$.jmp(function(){var l=i.get(s);u[l]=o===null&&typeof u[l]=="boolean"?!1:o})},e.observedAttributes=r.filter(function(s){s[0];var f=s[1];return f[0]&15}).map(function(s){var f=s[0],o=s[1],u=o[1]||f;return i.set(u,f),u})}}return e},Me=function(e,n,t,r,a){return ve(void 0,void 0,void 0,function(){var i,s,f,o,u,l,c;return de(this,function(v){switch(v.label){case 0:return(n.$flags$&32)!==0?[3,5]:(n.$flags$|=32,a=pe(t),a.then?(i=_e(),[4,a]):[3,2]);case 1:a=v.sent(),i(),v.label=2;case 2:a.isProxied||(le(a,t,2),a.isProxied=!0),s=S("createInstance",t.$tagName$),n.$flags$|=8;try{new a(n)}catch(g){T(g)}return n.$flags$&=-9,s(),f=re(t.$tagName$),!H.has(f)&&a.style?(o=S("registerStyles",t.$tagName$),u=a.style,t.$flags$&8?[4,D(()=>import("./shadow-css-d7d058ec-d59cb009.1456af87.js"),[]).then(function(g){return g.scopeCss(u,f,!1)})]:[3,4]):[3,5];case 3:u=v.sent(),v.label=4;case 4:Ie(f,u,!!(t.$flags$&1)),o(),v.label=5;case 5:return l=n.$ancestorComponent$,c=function(){return O(e,n,t,!0)},l&&l["s-rc"]?l["s-rc"].push(c):c(),[2]}})})},Re=function(e,n){if(($.$flags$&1)===0){var t=S("connectedCallback",n.$tagName$),r=m(e);if(n.$listeners$&&(r.$rmListeners$=Ge(e,r,n.$listeners$)),!(r.$flags$&1)){r.$flags$|=1;for(var a=e;a=a.parentNode||a.host;)if(a["s-p"]){ue(r,r.$ancestorComponent$=a);break}n.$members$&&Object.entries(n.$members$).forEach(function(i){var s=i[0],f=i[1][0];if(f&31&&e.hasOwnProperty(s)){var o=e[s];delete e[s],e[s]=o}}),z(function(){return Me(e,r,n)})}t()}},Ce=function(e){if(($.$flags$&1)===0){var n=m(e),t=n.$lazyInstance$;n.$rmListeners$&&(n.$rmListeners$(),n.$rmListeners$=void 0),$.$cssShim$&&$.$cssShim$.removeHost(e),G(t,"componentDidUnload")}},Ne=function(e,n){n===void 0&&(n={});var t=S(),r=[],a=n.exclude||[],i=w.customElements,s=p.head,f=s.querySelector("meta[charset]"),o=p.createElement("style"),u=[],l,c=!0;Object.assign($,n),$.$resourcesUrl$=new URL(n.resourcesUrl||"./",p.baseURI).href,n.syncQueue&&($.$flags$|=4),e.forEach(function(v){return v[1].forEach(function(g){var d={$flags$:g[0],$tagName$:g[1],$members$:g[2],$listeners$:g[3]};d.$members$=g[2],d.$listeners$=g[3],!B&&d.$flags$&1&&(d.$flags$|=8);var x=d.$tagName$,ce=function(Y){$e(b,Y);function b(y){var J=Y.call(this,y)||this;return y=J,ye(y),d.$flags$&1&&(B?y.attachShadow({mode:"open"}):"shadowRoot"in y||(y.shadowRoot=y)),J}return b.prototype.connectedCallback=function(){var y=this;l&&(clearTimeout(l),l=null),c?u.push(this):$.jmp(function(){return Re(y,d)})},b.prototype.disconnectedCallback=function(){var y=this;$.jmp(function(){return Ce(y)})},b.prototype.forceUpdate=function(){Fe(this,d)},b.prototype.componentOnReady=function(){return m(this).$onReadyPromise$},b}(HTMLElement);d.$lazyBundleIds$=v[0],!a.includes(x)&&!i.get(x)&&(r.push(x),i.define(x,le(ce,d,1)))})}),o.innerHTML=r+xe,o.setAttribute("data-styles",""),s.insertBefore(o,f?f.nextSibling:s.firstChild),c=!1,u.length>0?u.forEach(function(v){return v.connectedCallback()}):$.jmp(function(){return l=setTimeout(fe,30)}),t()},Ve=function(e,n){return we().then(function(){Ne([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[32,"keyup","handleBackdropKeyUp"]]]]]],n)})};(function(){if(!(window.Reflect===void 0||window.customElements===void 0)){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();var nn=()=>{Ve()};export{nn as default};