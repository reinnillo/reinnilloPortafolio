var Fe=Object.defineProperty;var Je=(s,e,t)=>e in s?Fe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var S=(s,e,t)=>Je(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,ie=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),le=new WeakMap;let Se=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}};const Ke=s=>new Se(typeof s=="string"?s:s+"",void 0,oe),se=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Se(t,s,oe)},Xe=(s,e)=>{if(ie)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),o=j.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,s.appendChild(i)}},ce=ie?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ke(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ge,defineProperty:Ye,getOwnPropertyDescriptor:Ze,getOwnPropertyNames:Qe,getOwnPropertySymbols:et,getPrototypeOf:tt}=Object,$=globalThis,de=$.trustedTypes,it=de?de.emptyScript:"",F=$.reactiveElementPolyfillSupport,I=(s,e)=>s,Y={toAttribute(s,e){switch(e){case Boolean:s=s?it:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ke=(s,e)=>!Ge(s,e),he={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ke};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Ye(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:n}=Ze(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);n.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=tt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,i=[...Qe(t),...et(t)];for(const o of i)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,o]of t)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const o=this._$Eu(t,i);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(ce(o))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const r=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Y).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=i.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Y;this._$Em=o,this[o]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ke)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,r]of o)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[I("elementProperties")]=new Map,k[I("finalized")]=new Map,F==null||F({ReactiveElement:k}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,U=z.trustedTypes,me=U?U.createPolicy("lit-html",{createHTML:s=>s}):void 0,Me="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Le="?"+y,ot=`<${Le}>`,E=document,T=()=>E.createComment(""),H=s=>s===null||typeof s!="object"&&typeof s!="function",ne=Array.isArray,st=s=>ne(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,pe=/>/g,w=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,ge=/"/g,Ce=/^(?:script|style|textarea|title)$/i,Pe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),A=Pe(1),b=Pe(2),L=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ve=new WeakMap,x=E.createTreeWalker(E,129);function Ie(s,e){if(!ne(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const nt=(s,e)=>{const t=s.length-1,i=[];let o,n=e===2?"<svg>":e===3?"<math>":"",r=P;for(let l=0;l<t;l++){const a=s[l];let c,h,d=-1,p=0;for(;p<a.length&&(r.lastIndex=p,h=r.exec(a),h!==null);)p=r.lastIndex,r===P?h[1]==="!--"?r=ue:h[1]!==void 0?r=pe:h[2]!==void 0?(Ce.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=w):h[3]!==void 0&&(r=w):r===w?h[0]===">"?(r=o??P,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?w:h[3]==='"'?ge:fe):r===ge||r===fe?r=w:r===ue||r===pe?r=P:(r=w,o=void 0);const m=r===w&&s[l+1].startsWith("/>")?" ":"";n+=r===P?a+ot:d>=0?(i.push(c),a.slice(0,d)+Me+a.slice(d)+y+m):a+y+(d===-2?l:m)}return[Ie(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[c,h]=nt(e,t);if(this.el=O.createElement(c,i),x.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=x.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(Me)){const p=h[r++],m=o.getAttribute(d).split(y),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:f[2],strings:m,ctor:f[1]==="."?at:f[1]==="?"?lt:f[1]==="@"?ct:V}),o.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:n}),o.removeAttribute(d));if(Ce.test(o.tagName)){const d=o.textContent.split(y),p=d.length-1;if(p>0){o.textContent=U?U.emptyScript:"";for(let m=0;m<p;m++)o.append(d[m],T()),x.nextNode(),a.push({type:2,index:++n});o.append(d[p],T())}}}else if(o.nodeType===8)if(o.data===Le)a.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:n}),d+=y.length-1}n++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function C(s,e,t=s,i){var r,l;if(e===L)return e;let o=i!==void 0?(r=t.o)==null?void 0:r[i]:t.l;const n=H(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),n===void 0?o=void 0:(o=new n(s),o._$AT(s,t,i)),i!==void 0?(t.o??(t.o=[]))[i]=o:t.l=o),o!==void 0&&(e=C(s,o._$AS(s,e.values),o,i)),e}class rt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??E).importNode(t,!0);x.currentNode=o;let n=x.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new N(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new dt(n,this,e)),this._$AV.push(c),a=i[++l]}r!==(a==null?void 0:a.index)&&(n=x.nextNode(),r++)}return x.currentNode=E,o}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this.v}constructor(e,t,i,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this.v=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),H(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(Ie(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(t);else{const r=new rt(o,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new O(e)),t}k(e){ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const n of e)o===t.length?t.push(i=new N(this.O(T()),this.O(T()),this,this.options)):i=t[o],i._$AI(n),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this.v=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,o){const n=this.strings;let r=!1;if(n===void 0)e=C(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const l=e;let a,c;for(e=n[0],a=0;a<n.length-1;a++)c=C(this,l[i+a],t,a),c===L&&(c=this._$AH[a]),r||(r=!H(c)||c!==this._$AH[a]),c===u?e=u:e!==u&&(e+=(c??"")+n[a+1]),this._$AH[a]=c}r&&!o&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class at extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class lt extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class ct extends V{constructor(e,t,i,o,n){super(e,t,i,o,n),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??u)===L)return;const i=this._$AH,o=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class dt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const K=z.litHtmlPolyfillSupport;K==null||K(O,N),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.2.0");const ht=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=o=new N(e.insertBefore(T(),n),n,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends k{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=ht(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.o)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.o)==null||e.setConnected(!1)}render(){return L}}var Ee;_._$litElement$=!0,_.finalized=!0,(Ee=globalThis.litElementHydrateSupport)==null||Ee.call(globalThis,{LitElement:_});const X=globalThis.litElementPolyfillSupport;X==null||X({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const mt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#aaa"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"/><circle cx="11.994" cy="11.979" r="3.003"/></svg>`,ut=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#aaa"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>`,pt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#aaa"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"/></svg>`,ft=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#aaa"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/></svg>`,gt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#aaa"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"/></svg>`,vt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5ea176cf"><text x="0" y="25" font-family="Arial" font-size="100%">Platzi</text></svg>`,bt=b`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#aaa"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"></path></svg>`,yt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"/></svg>`,$t=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"/></svg>`,wt=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"/></svg>`,At=b`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.017C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-9 8a2 2 0 1 1-2-2c.086 0 .167.015.25.025.082-.014.164-.025.25-.025A1.5 1.5 0 0 1 11 9.5c0 .086-.012.168-.025.25.01.083.025.165.025.25zm4 2a2 2 0 0 1-2-2c0-.086.015-.167.025-.25A1.592 1.592 0 0 1 13 9.5 1.5 1.5 0 0 1 14.5 8c.086 0 .168.011.25.025.083-.01.164-.025.25-.025a2 2 0 0 1 0 4z"/></svg>`;class Z extends _{constructor(){super(),this.element_menuBox=null,this.CV="../asset/cv/Alexander_Reina_CV.pdf"}showMenuProfile(e){e.preventDefault(),this.element_menuBox=this.shadowRoot.querySelector(".menu-box"),this.element_menuBox.classList.add("active")}hiddenMenuProfile(e){e.preventDefault(),this.element_profileMenu=this.shadowRoot.getElementById("ProfileMenu"),this.element_menuBox.classList.remove("active")}_callModal(){const e=document.querySelector("side-modal");e&&e.openProfileModal()}render(){return A`
            <div id="ProfileMenu" @mouseleave=${this.hiddenMenuProfile}>
                <div class="menu-box">
                    <button class="MoreInfoButton button">
                        <a href="${this.CV}" download="Alexander_Reina_CV.pdf" aria-label="download cv Alexander Reina">${wt}Descargar CV</a>
                    </button>
                    
                    <button class="MoreInfoButton button" @click="${this._callModal}">${yt}Más sobre mí</button>
                </div>

                <button 
                    class="button option-profile-button" 
                    @mouseover=${this.showMenuProfile} 
                >${$t} Perfil</button>
            </div>
        `}}S(Z,"properties",{CV:{type:String}}),S(Z,"styles",se`
        *,
        *::before,
        *::after,
        *:focus {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            vertical-align: baseline;
            text-decoration: none;
            color: inherit;
            cursor: auto;
            border: none;
            outline: none;
            line-height: 1.4rem;
        }
        #ProfileMenu {
            position: relative;
            width: 12rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .button {
            background: var(--dark);
            font-family: var(--text-font-family);
            padding: 0.5rem 1.5rem;
            color: var(--text-btn-color);
            border: none;
            text-decoration: none;
            font-size: 1rem;
            cursor: pointer;
        }
        .MoreInfoButton, .MoreInfoButton a {
            width: 100%;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
        }
        .MoreInfoButton:hover{
            background-color: var(--light);
            color: var(--dark);
        }
        .MoreInfoButton svg {
            margin-right: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            fill: var(--icon-color);
        }
        .option-profile-button {
            position: absolute;
            bottom: 1px;
            padding: 1rem 3rem;
            font-size: 1.3rem;
            color: var(--text-btn-color);
            display: flex;
            align-items: center;
            justify-content: space-around;
            box-shadow: var(--shadow-00);
        }
        .option-profile-button svg {
            margin-right: 1rem;
            width: 2rem;
            height: 2rem;
            fill: var(--icon-color);
        }
        .menu-box{
            position: absolute;
            top: -75px;
            left: 0px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: rebeccapurple;
            border-radius: var(--b-radius-medium);
            overflow: hidden;
            box-shadow: var(--shadow-00);
            transform-origin: bottom;
            transform: scale(0);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .active{
            transform: scale(1);
            opacity: 1;
        }
    `);customElements.define("action-menu",Z);const xt={img:"./asset/img/profile/alex.webp"},_t=[{name:"instagram",href:"https://instagram.com/reinnillo/",icon:mt},{name:"linkedin",href:"https://www.linkedin.com/in/alexander-d-reina-p-737626318/",icon:pt},{name:"GitHub",href:"https://github.com/reinnillo/",icon:ut},{name:"WhatsApp",href:"https://api.whatsapp.com/send?phone=50768439588&text=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.",icon:ft},{name:"Email",href:"mailto:30todev@gmail.com?subject=Solicitud%20de%20Servicio&body=Hola,%20me%20gustaría%20contratar%20tus%20servicios.%20Por%20favor,%20contáctame%20para%20discutir%20los%20detalles.%20Gracias.",icon:gt},{name:"Referencias de cursos en Tecnologia",href:"https://platzi.com/p/reinnillo/",icon:vt}],be=[{title:"Sobre mí",text:`Soy un desarrollador front-end junior apasionado por la
        tecnología y el aprendizaje continuo. He trabajado en varios
        proyectos personales que me han permitido mejorar mis
        habilidades en JavaScript, LitElement, HTML, CSS y otros. Me encanta
        crear interfaces limpias y funcionales que ofrezcan una
        experiencia de usuario óptima y accesible. A lo largo de mi
        trayectoria, he desarrollado soluciones innovadoras y
        personalizadas, como un proyecto reciente para una fotógrafa,
        que puedes ver aquí.`},{title:"Mis Objetivos",text:`Estoy enfocado en mejorar mis habilidades en tecnologías
        modernas como React-Native para el desarrollo de App movil y 
        continuar mejorando en LitElement y React. Mi objetivo es formar 
        parte de un equipo o colaborar en proyectos desafiantes que me 
        permitan crecer profesionalmente, aprender de otros 
        desarrolladores y contribuir con soluciones de calidad.`},{title:"Qué me motiva",text:`"Un humano insaciable de conocimiento e intolerante
        a la injusticia." quise pensar en algo que me describiera y pense 
        en esta franse. Eso es lo que me motiva más que nada, el conocimiento, 
        la curiosidad. Desde que descubrí la programación, la resolución de problemas 
        y el crear cosas, son mis principales motores. Disfruto del proceso de 
        convertir ideas en productos funcionales y crecer en el proceso. La tecnología 
        es mi pasión y busco constantemente oportunidades para mejorar y aprender más.`}],Et=[{skill:"JavaScript",level:60},{skill:"litElement",level:40},{skill:"Css",level:80},{skill:"HTML",level:75},{skill:"React",level:30},{skill:"Python",level:25},{skill:"SQL",level:25},{skill:"Botpress",level:90},{skill:"Wix Studio",level:50}];class Q extends _{constructor(){super(),this.profileModal=null,this.dataProfile=xt,this.ProfileContact=_t,this.TitleAboutMe=be.map(e=>e.title),this.TextAboutMe=be.map(e=>e.text),this.selectedItemIdex=0,this.skills=Et}openProfileModal(){this.profileModal=this.shadowRoot.getElementById("profile-modal"),this.profileModal&&this.profileModal.classList.add("enable")}_closeProfileModal(){this.profileModal=this.shadowRoot.getElementById("profile-modal"),this.profileModal&&this.profileModal.classList.remove("enable")}_upgradeIndex(e){this.selectedItemIdex=e}render(){return A`
      <section id="profile-modal" class="show-more">
        <aside>
          <div class="info">
            <h2 id="info-heading">Información Adicional</h2>

            <div id="info-container">
              <div class="info-profile">
                <ul class="icon-container">
                  ${this.ProfileContact.map((e,t)=>A`
                      <li class="icon">
                        <a
                          target="_BLANK"
                          href="${e.href}"
                          data-index="${t}"
                          @mouseover=${this._showSpan}
                        >
                          ${e.icon}
                        </a>
                      </li>
                    `)}
                </ul>

                <div class="image-skill-content">
                  <div class="image-skill">
                    <img
                      src="${this.dataProfile.img}"
                      alt="Fotografia de Alexander David Reina Pinillo"
                    />

                    <div class="skills-section">
                      <h2>Mis Habilidades</h2>
                      <div id="skills-container">
                        ${this.skills.map((e,t)=>A`
                            <div class="skill">
                              <span>${e.skill} - ${e.level}%</span>
                              <div class="progress-bar">
                                <div
                                  class="progress"
                                  style="width:${e.level}%"
                                ></div>
                              </div>
                            </div>
                          `)}
                      </div>
                    </div>
                  </div>
                  <slot name="callToActionButon"></slot>
                </div>
              </div>

              <div
                id="info-content"
                role="region"
                aria-labelledby="info-heading"
              >
                <ul class="filter-list">
                  ${this.TitleAboutMe.map((e,t)=>A`<li>
                        <button
                          class="filter button"
                          @click=${()=>{this._upgradeIndex(t)}}
                        >
                          ${e}
                        </button>
                      </li>`)}
                </ul>
                <div class="filter-content">
                  ${this.TextAboutMe.map((e,t)=>A`<p
                        class="aboutText ${t===this.selectedItemIdex?"active":"inactive"}"
                      >
                        ${e}
                      </p>`)}
                </div>
              </div>
            </div>
          </div>

          <button id="btn-close-modal" @click=${this._closeProfileModal}>
            ${bt}
          </button>
        </aside>
      </section>
    `}}S(Q,"styles",se`
    *,
    *::before,
    *::after,
    *:focus {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      vertical-align: baseline;
      text-decoration: none;
      color: inherit;
      cursor: auto;
      border: none;
      outline: none;
      line-height: 1.4rem;
    }

    .show-more {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0vw;
      height: 100vh;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .enable {
      width: 100vw;
      opacity: 1;
      backdrop-filter: blur(70px);
    }
    aside {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 85%;
      height: 85%;
      border-radius: var(--b-radius-large);
      box-shadow: var(--shadow-00);
      transform: scale(0);
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .enable aside {
      transform: scale(1);
    }

    .info {
      height: 100%;
      width: 100%;
      padding: 1.5rem;
    }
    .info #info-heading {
      height: 10%;
      width: 100%;
      font-size: 2rem;
      text-align: center;
    }
    .info #info-container {
      width: 100%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Seccion del perfil */
    .info-profile {
      width: 60%;
      height: 100%;
      padding-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .info-profile img {
      width: 15rem;
      height: 17rem;
      object-fit: cover;
      border-radius: var(--b-radius-medium);
      box-shadow: var(--shadow-01);
      border: 1px solid var(--light);
    }

    /* Contenedor de los iconos de contacto en el modal */
    .icon-container {
      width: 3.5rem;
    }
    /* contenedor de la imagen de perfil, las skill y el CTA */
    .image-skill-content {
      display: flex;
      flex-direction: column;
    }
    .image-skill-content .image-skill {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .icon-container .icon a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.3);
    }
    .icon-container .icon a:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    .icon-container .icon a svg {
      width: 2.5rem;
      height: 2.5rem;
      fill: var(--icon-color);
    }
    ul,
    a,
    svg,
    path,
    circle,
    text {
      cursor: pointer;
    }

    /* Seccion para las Habilidades */
    .skills-section {
      width: 13rem;
    }
    /*.skills-section h2 {}*/
    /*.skills-container {}*/

    .skill {
      position: relative;
      height: 1.4rem;
      overflow: hidden;
      margin-top: 0.5rem;
    }
    .skill span {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      font-size: 0.9rem;
      margin-left: 0.5rem;
      color: #b8aae3;
      font-weight: 500;
    }
    .skill .progress-bar {
      background-color: #ae90f363;
      border-radius: var(--b-radius-small);
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    }
    .skill .progress-bar .progress {
      position: absolute;
      background: #ae90f38f;
      height: 100%;
      transition: width 0.5s ease;
    }

    /* Informacion del contenido de More About me */
    #info-content {
      height: 100%;
      width: 40%;
      background: var(--darkGlass);
      border: 1px solid var(--light);
      border-radius: var(--b-radius-large);
      padding: 0.5rem;
      box-shadow: var(--shadow-01);
      font-family: "Arial", sans-serif;
      line-height: 1.6;
      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    /* Lista de Botones */
    .filter-list {
      width: 100%;
      height: 25%;
      padding: 1rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
    .filter-list li {
      width: calc(100% / 3 - 1rem);
      height: 5rem;
    }
    .filter-list .filter {
      padding: 1rem 1.5rem;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: var(--b-radius-large);
      color: var(--dark);
      background: var(--gradient-02);
      box-shadow: var(--shadow-01);
      font-size: 1rem;
      font-weight: 500;
    }
    .filter-list .filter:hover {
      transform: scale(0.98);
    }
    /* Texto sobre mi filtrado */
    .filter-content {
      position: relative;
      width: 100%;
      height: 75%;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .aboutText {
      position: absolute;
      font-size: 1.1rem;
      color: var(--light);
      margin-bottom: 1.5rem;
      transition: all 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .inactive {
      opacity: 0;
      transform: translateY(60%);
    }
    .active {
      opacity: 1;
      transform: translateY(0%);
    }

    #info-content h3 {
      font-size: 1.8rem;
      color: #4d347e;
      margin-bottom: 1rem;
    }

    @media (max-width: 992px) {
        .image-skill-content .image-skill {
            gap: 1rem;
            margin-bottom: 1rem;
        }
        .image-skill-content .image-skill .skills-section {
            width: 9rem;
        }
        .image-skill-content .image-skill .skills-section h2 {
            font-size: large;
        }
        .filter-list {
            padding: 0.5rem;
        }
        .filter-list .filter {
            padding: 0;
        }
        .filter-content {
            overflow-y: auto;
            padding: 0.5rem;
        }
        .filter-content .active {
            font-size: 1rem;
            height: 100%;
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        .enable {
            font-size: 1rem;
        }

        .info {
            overflow-y: scroll;
            height: max-content;
        }
        .info #info-heading {
            height: auto;
            margin-bottom: 2rem;
            line-height: 2.5rem;
        }
        .info #info-container {
            flex-direction: column;
            height: auto;
        }

        #info-container .info-profile {
            flex-direction: column;
            width: 100%;
            padding: 0;
        }
        #info-container .info-profile .icon-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
        }
        #info-container .info-profile .image-skill {
            flex-direction: column;
        }
        .image-skill-content .image-skill .skills-section {
            width: 100%;
        }
        #info-content {
            width: 100%;
            height: auto;
            margin-top: 2rem;
            padding: 0;
        }
        #info-content .filter-list {
            margin: 0;
        }
        #info-content .filter-list li {
            margin: 0 0.5rem;
        }
        #info-content .filter-list li .filter {
            font-size: 0.9rem;
            padding: 0.5rem;
        }

        #info-content .filter-content {
            min-height: 416px;
            height: auto;
            padding: 0.5rem;
        }

        #info-content .filter-content .active {
            padding: 0.5rem;
            margin: 0;
        }
    }

    /* Boton para cerrar el modal */
    #btn-close-modal {
      position: absolute;
      top: -12px;
      right: -12px;
      background: none;
    }
    #btn-close-modal svg {
      width: 2.5rem;
      height: 2.5rem;
      fill: #957ebc8f;
    }
    #btn-close-modal svg,
    path {
      cursor: pointer;
    }
  `),S(Q,"properties",{dataProfile:{type:Array},ProfileContact:{type:Array},TitleAboutMe:{type:Array},TextAboutMe:{type:Array},selectedItemIdex:{type:Number},skills:{type:Array}});customElements.define("side-modal",Q);class ze extends _{render(){return A`
            <button @click=${this._changeColor} class="call-to-action-button"> <slot></slot> ${At}</button>
        `}_changeColor(){const e=this.lastElementChild;console.log(e)}}S(ze,"styles",se`

        .call-to-action-button {
            background: var(--gradient-02);
            font-family: var(--text-font-family);
            color: var(--text-color);
            padding: 0.5rem 2rem;
            border-radius: var(--b-radius-small);
            margin: auto;
            border: none;
            text-decoration: none;
            cursor: pointer;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            box-shadow: var(--shadow-00);
            transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .call-to-action-button:hover {
            background: var(--gradient-01);
            transform: scale(0.95);
        }
        
        .call-to-action-button svg {
            margin-left: 1rem;
            width: 2rem;
            height: 2rem;
            fill: var(--light);
        }
    `);customElements.define("call-to-action-button",ze);document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("App"),e=document.querySelectorAll(".nav-link"),t=document.querySelectorAll(".section"),i=document.querySelector(".footer-navigation"),o=document.getElementById("openFooter");function n(c,h){setTimeout(()=>{h()},c)}const r=()=>{i.classList.add("enable"),o.style.bottom="-4.5rem",s.style.transform="scale(0.9)"},l=()=>{i.classList.remove("enable"),o.style.bottom="-1.8rem",s.style.transform="scale(1)"};o.addEventListener("mouseenter",()=>{n(500,r),n(8e3,l)}),o.addEventListener("click",()=>{n(500,r),n(8e3,l)}),n(500,r),n(8e3,l),e.forEach(c=>{c.addEventListener("click",h=>{h.preventDefault();const d=c.getAttribute("data-target"),p=document.getElementById(d);t.forEach(f=>{f.classList.remove("active")}),p.classList.add("active");const m=Array.from(t).indexOf(p);t.forEach((f,W)=>{m===W?(f.style.transform=`translateX(-${m*100}vw) scale(1)`,f.style.opacity="1"):(f.style.transform=`translateX(-${m*100}vw) scale(0.5)`,f.style.opacity="0.2")})})}),document.getElementById("home").classList.add("active")});const R=document.getElementById("dark-mode-button"),q=document.getElementById("light-mode-button");function ee(){document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"),q.style.zIndex=1,q.style.display="block",R.style.zIndex=0}function te(){document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"),R.style.zIndex=1,R.style.display="block",q.style.zIndex=0}R.addEventListener("click",ee);q.addEventListener("click",te);const St=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,kt=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches,G=localStorage.getItem("theme");G?G==="dark"?ee():G==="light"&&te():St?ee():kt&&te();const B=document.querySelector(".nav"),Mt=document.querySelector(".navDiv").firstElementChild,Lt=B.firstElementChild;Mt.addEventListener("click",()=>{B.style.transform="translateX(0%)",Array.from(B.children).forEach(s=>{Array.from(s.children).forEach(e=>{e.className==="nav-link"&&e.addEventListener("click",function(t){t.preventDefault(),B.style.transform="translateX(-100%)"})})})});Lt.addEventListener("click",()=>{B.style.transform="translateX(-100%)"});const M=document.querySelector("form");document.querySelector("#name-input");document.querySelector("#email-input");document.querySelector("#message-input");const Ct=document.getElementById("submit"),Pt=document.querySelectorAll("input, textarea");function It(){let s;const e=/Tablet|iPad/i.test(navigator.userAgent),t=/Mobi|Android/i.test(navigator.userAgent);return e?s="Tablet":t?s="Mobile":s="WebSite",s}function zt(){const s=new Date,e={timeZone:"America/Panama",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0};return s.toLocaleString("es-PA",e)}Pt.forEach(s=>{s.addEventListener("input",()=>{let e=document.getElementById(`${s.id}-error`);s.checkValidity()?(s.classList.remove("error"),e.textContent=""):(s.classList.add("error"),e.textContent=s.validationMessage)})});M.addEventListener("submit",s=>{s.preventDefault();let e=document.getElementById("errores");if(e.innerHTML="",!M.checkVisibility()){[...M.elements].forEach(m=>{if(!m.checkValidity()){let f=document.getElementById(`${m.id}-error`);f.textContent=m.validationMessage,m.classList.add("error")}});return}const t="app72qPFLrR2Asym4",i="tblAR3XGRyj3JdDEm",o="patOAfocbV4jBXfup.1c8b0a18eff5467231fce879664f5e5285a4207824a0d63428bf367f94a57483",n=`https://api.airtable.com/v0/${t}/${i}`;let r=document.getElementById("name-input").value,l=document.getElementById("email-input").value,a=It(),c=zt(),h=document.getElementById("message-input").value;const d={records:[{fields:{name:r,email:l,source:a,date:c,message:h}}]},p={method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"},body:JSON.stringify(d)};try{fetch(n,p).then(m=>{if(!m.ok)throw new Error("Error al enviar el formulario 😭.");return alert("Formulario enviado con exito 😍."),m.json()}),M.reset()}catch{e.textContent="Hubo un problema al enviar el formulario 😭."}});M.addEventListener("input",()=>{let s=[...M.elements].every(e=>e.validity.valid);Ct.disabled=!s});const Bt=document.querySelector(".circle"),Be=Bt.firstElementChild,Te=document.querySelector("#cv-download");document.querySelectorAll(".icon");Te.addEventListener("mouseenter",s=>{s.preventDefault(),Be.classList.add("scale")});Te.addEventListener("mouseout",s=>{s.preventDefault(),Be.classList.remove("scale")});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".orbital-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tech"),i=document.querySelector(`.card[data-tech="${t}"]`),o=document.querySelector(".orbital-container"),n=document.querySelector(".modal-card");n.querySelector("modal-content"),o.classList.add("hidden-orbital-container");let r=Math.random()<.5?"left":"right";(n.classList.contains("desable-modal-left")||n.classList.contains("desable-modal-right"))&&(n.classList.remove("desable-modal-left"),n.classList.remove("desable-modal-right"),n.classList.add("enable-modal"),i.style.zIndex="200",i.addEventListener("click",l=>l.stopPropagation())),n.classList.contains("enable-modal")&&n.addEventListener("click",function(){n.classList.remove("enable-modal"),n.classList.remove("desable-modal-left"),n.classList.remove("desable-modal-right"),n.classList.add(`desable-modal-${r}`),i.style.zIndex=0,o.classList.remove("hidden-orbital-container")})})})});const g=[{projectName:"Helen Miranda",description:"Desarrollé un portafolio elegante y minimalista para Helen Miranda, destacando su increíble trabajo como fotógrafa. La web presenta sus mejores proyectos con una navegación intuitiva y un diseño moderno que resalta la belleza de sus imágenes.",imageDesktop:"./asset/img/helen-miranda/helen-desktop.png",imageMobile:"./asset/img/helen-miranda/helen-mobile.png",href:"https://helenmiranda00.github.io/Portafolio/",title:"imagen del sitio web helen miranda, creado por reinnillo",alt:"imagen del sitio web helen miranda, creado por reinnillo",slideImages:["./asset/img/helen-miranda/slide-01.png","./asset/img/helen-miranda/slide-02.png","./asset/img/helen-miranda/slide-03.png","./asset/img/helen-miranda/slide-04.png","./asset/img/helen-miranda/slide-05.png"]}],Tt="appWCzcJZsQLQBxcW",Ht="tbl3ZktcIseSjkjyH",Ot="patBKS3jPPOwNgy6L.ee585596b28824c969a1b83e73ec50812c336c24aadb50399ebf7cfb30498a86",Nt=`https://api.airtable.com/v0/${Tt}/${Ht}?listRecords&view=reinnillo_web`;async function jt(s,e,t={}){const i={Authorization:`Bearer ${e}`,"Content-Type":"application/json"},o={...t,headers:i};try{const n=await fetch(s,o);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return await n.json()}catch(n){throw console.error("Hubo un error:",n),n}}const Ut=s=>s.map(e=>{var t,i,o,n,r,l,a,c,h,d,p,m;if(e.fields.status==="Done"){const f=(t=e==null?void 0:e.fields)==null?void 0:t.project_name,W=(i=e==null?void 0:e.fields)==null?void 0:i.description,Oe=(n=(o=e==null?void 0:e.fields)==null?void 0:o.image_desktop[0])==null?void 0:n.url,Ne=(l=(r=e==null?void 0:e.fields)==null?void 0:r.image_mobile[0])==null?void 0:l.url,je=(a=e==null?void 0:e.fields)==null?void 0:a.href,Ue=(c=e==null?void 0:e.fields)==null?void 0:c.img_title,Re=(h=e==null?void 0:e.fields)==null?void 0:h.img_alt,qe=((d=e==null?void 0:e.fields)==null?void 0:d.slide_image).map(We=>We.url),De=(p=e==null?void 0:e.fields)==null?void 0:p.slide_img_alt,Ve=(m=e==null?void 0:e.fields)==null?void 0:m.slide_img_title;return{projectName:f,description:W,imageDesktop:Oe,imageMobile:Ne,href:je,title:Ue,alt:Re,slideImages:qe,slideImagesTitle:De,slideImagesAlt:Ve}}return null}).filter(e=>e!==null);function re(s,e="",t="",i="",o="",n="lazy"){const r=new Image;return r.src=s,r.onload=function(){e&&(r.alt=e),t&&(r.title=t),o&&(r.className=o),i&&(r.id=i),n&&(r.loading=n)},r.onerror=function(){console.error("Error al cargar la imagen.")},r}const ye=document.getElementById("img-desktop"),$e=document.getElementById("img-mobile"),we=document.getElementById("slide"),ae=document.querySelectorAll(".arrow"),D=document.getElementById("counter-slider").children[1],Rt=document.querySelector(".prev"),qt=document.querySelector(".next");let v=0;const He=(s,e)=>{const t=document.createElement("a");return t.textContent="Visitar",t.classList.add(e),t.classList.add("button"),t.href=s,t.rel="noopener",t.target="blank",t},Ae=(s,e,t,i,o,n)=>{s.innerHTML="";const r=re(e,t,i),l=document.createElement("figcaption");l.classList.add("desc-proj");const a=document.createElement("div");a.classList.add("text");const c=document.createElement("p");c.textContent=o;const h=He(n,"button-1");a.appendChild(c),l.appendChild(a),l.appendChild(h),s.appendChild(r),s.appendChild(l)},xe=(s,e,t,i,o)=>{s.innerHTML="";const n=He(o,"button-2"),r=re(e,t,i);s.appendChild(r),s.appendChild(n)},_e=(s,e,t,i,o)=>{s.innerHTML="";const n=document.createElement("div");n.classList.add("title-slide");const r=document.createElement("h2");r.textContent=e,n.appendChild(r);const l=document.createElement("div");l.classList.add("image-slide"),Array.from(t).forEach(h=>{const d=re(h,i,o);l.appendChild(d)}),s.appendChild(n),s.appendChild(l);const a=l.querySelectorAll("img");let c=0;setInterval(()=>{Array.from(a).forEach((h,d)=>{d===c?(h.style.transform="translateY(0) scale(1)",h.style.opacity="1"):(h.style.transform="translateY(5px) scale(0.95)",h.style.opacity="0")}),c=c===a.length-1?0:c+1},4e3)};Array.from(ae).forEach(s=>{s.addEventListener("mouseover",()=>{D.style.textShadow="none",D.style.transform="scale(0.95)"})});Array.from(ae).forEach(s=>{s.addEventListener("mouseout",()=>{D.style.textShadow="var(--shadow-00)",D.style.transform="scale(1)"})});const Dt=jt(Nt,Ot);Dt.then(s=>{const e=Ut(s.records),t=o=>{Array.from(e).forEach((n,r)=>{o===r&&(Ae(ye,n.imageDesktop,n.alt,n.title,n.description,n.href),xe($e,n.imageMobile,n.alt,n.title,n.href),_e(we,n.projectName,n.slideImages,n.alt,n.title))})},i=document.querySelector(".counter");i.textContent=`${v+1}/${e.length}`,qt.addEventListener("click",()=>{v=(v+1)%e.length,t(v),i.textContent=`${v+1}/${e.length}`}),Rt.addEventListener("click",()=>{v=v===0?e.length-1:v-1,t(v),i.textContent=`${v+1}/${e.length}`}),t(v)}).catch(s=>{console.error(s),console.error("Cargando datos de emergencia..."),Ae(ye,g[0].imageDesktop,g[0].alt,g[0].title,g[0].description,g[0].href),xe($e,g[0].imageMobile,g[0].alt,g[0].title,g[0].href),_e(we,g[0].projectName,g[0].slideImages,g[0].alt,g[0].title),[...ae].forEach(e=>{e.addEventListener("click",()=>{alert("Estás viendo el proyecto por defecto, debido que hubo un problema al cargar los proyectos o tu navegador no soporte JavaScript.")})})});
