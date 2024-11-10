import{S as at,i as rt,s as ot,a as st,G as q,g as it,h as M,B as de,x as F,y as pe,z as B,f as G,H as lt,I as Le,e as ct,c as ft,b as ut,k as ve,m as C,t as dt,d as pt,o as ht,r as z,u as W,v as $e,w as Y,A as X,J as le}from"./chunks/index-794e8e40.js";import{S as tt,I as V,g as ze,f as We,a as Ee,b as ce,s as J,i as Ye,c as ue,P as Xe,d as mt,e as _t,h as gt}from"./chunks/singletons-d3d33929.js";import{_ as fe}from"./chunks/preload-helper-41c905a7.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const t=new URL(a);for(const s of vt){let i=t[s];Object.defineProperty(t,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return kt(t),t}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(a){return a.replace(/\/$/,"")+St}function It(a){let e=5381;if(typeof a=="string"){let t=a.length;for(;t;)e=e*33^a.charCodeAt(--t)}else if(ArrayBuffer.isView(a)){const t=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ue(a)),he(a,e));const ee=new Map;function Lt(a,e){const t=Ue(a,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&ee.set(t,{body:i,init:u,ttl:1e3*Number(n)}),Promise.resolve(new Response(i,u))}return he(a,e)}function Ot(a,e,t){if(ee.size>0){const s=Ue(a,t),i=ee.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(i.body,i.init);ee.delete(s)}}return he(e,t)}function Ue(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${It(e.body)}"]`),s}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ut(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const n=s.split(/\[(.+?)\](?!\])/);return"/"+n.map((_,m)=>{if(m%2){if(_.startsWith("x+"))return ke(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return ke(String.fromCharCode(..._.slice(2).split("-").map($=>parseInt($,16))));const g=At.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,E,I,j]=g;return e.push({name:I,matcher:j,optional:!!R,rest:!!E,chained:E?m===1&&n[0]==="":!1}),E?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return ke(_)}).join("")}).join("")}/?$`),params:e}}function $t(a){return!/^\([^)]+\)$/.test(a)}function Ut(a){return a.slice(1).split("/").filter($t)}function Nt(a,e,t){const s={},i=a.slice(1);let u="";for(let n=0;n<e.length;n+=1){const c=e[n];let _=i[n];if(c.chained&&c.rest&&u&&(_=_?u+"/"+_:u),u="",_===void 0)c.rest&&(s[c.name]="");else{if(c.matcher&&!t[c.matcher](_)){if(c.optional&&c.chained){let m=i.indexOf(void 0,n);if(m===-1){const g=e[n+1];if(g!=null&&g.rest&&g.chained)u=_;else return}for(;m>=n;)i[m]=i[m-1],m-=1;continue}return}s[c.name]=_}}if(!u)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt(a,e,t,s){const i=new Set(e);return Object.entries(t).map(([c,[_,m,g]])=>{const{pattern:R,params:E}=Pt(c),I={id:c,exec:j=>{const $=R.exec(j);if($)return Nt($,E,s)},errors:[1,...g||[]].map(j=>a[j]),layouts:[0,...m||[]].map(n),leaf:u(_)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(c){const _=c<0;return _&&(c=~c),[_,a[c]]}function n(c){return c===void 0?c:[i.has(c),a[c]]}}function jt(a){let e,t,s;var i=a[0][0];function u(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=z(i,u(a))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&$e(e.$$.fragment,n),t=q()},m(n,c){e&&Y(e,n,c),M(n,t,c),s=!0},p(n,c){const _={};if(c&4&&(_.data=n[2]),c&2&&(_.form=n[1]),i!==(i=n[0][0])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=z(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&X(e,n)}}}function Dt(a){let e,t,s;var i=a[0][0];function u(n){return{props:{data:n[2],$$slots:{default:[Ct]},$$scope:{ctx:n}}}}return i&&(e=z(i,u(a))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&$e(e.$$.fragment,n),t=q()},m(n,c){e&&Y(e,n,c),M(n,t,c),s=!0},p(n,c){const _={};if(c&4&&(_.data=n[2]),c&523&&(_.$$scope={dirty:c,ctx:n}),i!==(i=n[0][0])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=z(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&X(e,n)}}}function Ct(a){let e,t,s;var i=a[0][1];function u(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=z(i,u(a))),{c(){e&&W(e.$$.fragment),t=q()},l(n){e&&$e(e.$$.fragment,n),t=q()},m(n,c){e&&Y(e,n,c),M(n,t,c),s=!0},p(n,c){const _={};if(c&8&&(_.data=n[3]),c&2&&(_.form=n[1]),i!==(i=n[0][1])){if(e){de();const m=e;F(m.$$.fragment,1,0,()=>{X(m,1)}),pe()}i?(e=z(i,u(n)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else i&&e.$set(_)},i(n){s||(e&&B(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&G(t),e&&X(e,n)}}}function Ze(a){let e,t=a[5]&&Qe(a);return{c(){e=ct("div"),t&&t.c(),this.h()},l(s){e=ft(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ut(e);t&&t.l(i),i.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,i){M(s,e,i),t&&t.m(e,null)},p(s,i){s[5]?t?t.p(s,i):(t=Qe(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&G(e),t&&t.d()}}}function Qe(a){let e;return{c(){e=dt(a[6])},l(t){e=pt(t,a[6])},m(t,s){M(t,e,s)},p(t,s){s&64&&ht(e,t[6])},d(t){t&&G(e)}}}function Vt(a){let e,t,s,i,u;const n=[Dt,jt],c=[];function _(g,R){return g[0][1]?0:1}e=_(a),t=c[e]=n[e](a);let m=a[4]&&Ze(a);return{c(){t.c(),s=st(),m&&m.c(),i=q()},l(g){t.l(g),s=it(g),m&&m.l(g),i=q()},m(g,R){c[e].m(g,R),M(g,s,R),m&&m.m(g,R),M(g,i,R),u=!0},p(g,[R]){let E=e;e=_(g),e===E?c[e].p(g,R):(de(),F(c[E],1,1,()=>{c[E]=null}),pe(),t=c[e],t?t.p(g,R):(t=c[e]=n[e](g),t.c()),B(t,1),t.m(s.parentNode,s)),g[4]?m?m.p(g,R):(m=Ze(g),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(g){u||(B(t),u=!0)},o(g){F(t),u=!1},d(g){c[e].d(g),g&&G(s),m&&m.d(g),g&&G(i)}}}function qt(a,e,t){let{stores:s}=e,{page:i}=e,{components:u}=e,{form:n}=e,{data_0:c=null}=e,{data_1:_=null}=e;lt(s.page.notify);let m=!1,g=!1,R=null;return Le(()=>{const E=s.page.subscribe(()=>{m&&(t(5,g=!0),t(6,R=document.title||"untitled page"))});return t(4,m=!0),E}),a.$$set=E=>{"stores"in E&&t(7,s=E.stores),"page"in E&&t(8,i=E.page),"components"in E&&t(0,u=E.components),"form"in E&&t(1,n=E.form),"data_0"in E&&t(2,c=E.data_0),"data_1"in E&&t(3,_=E.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[u,n,c,_,m,g,R,s,i]}class Ft extends at{constructor(e){super(),rt(this,e,qt,Vt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Bt={},me=[()=>fe(()=>import("./chunks/0-503772df.js"),["./chunks/0-503772df.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-9b5f918a.js","./chunks/index-794e8e40.js","./assets/_layout-373efd3e.css"],import.meta.url),()=>fe(()=>import("./chunks/1-4bcbd87c.js"),["./chunks/1-4bcbd87c.js","./components/error.svelte-15845d5b.js","./chunks/index-794e8e40.js","./chunks/singletons-d3d33929.js"],import.meta.url),()=>fe(()=>import("./chunks/2-de90fb12.js"),["./chunks/2-de90fb12.js","./chunks/_page-a5e8a8ff.js","./components/pages/_page.svelte-4a34d068.js","./chunks/index-794e8e40.js","./assets/_page-50ce207f.css"],import.meta.url),()=>fe(()=>import("./chunks/3-1f2b489c.js"),["./chunks/3-1f2b489c.js","./chunks/_page-b81950e4.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_slug_/_page.svelte-b42c409e.js","./chunks/index-794e8e40.js","./assets/_page-7ec42711.css"],import.meta.url)],Gt=[],Ht={"/":[2],"/blog/[slug]":[3]},Jt={handleError:({error:a})=>{console.error(a)}};class Oe{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class xe{constructor(e,t){this.status=e,this.location=t}}async function Mt(a){var e;for(const t in a)if(typeof((e=a[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Wt=-3,Yt=-4,Xt=-5,Zt=-6;function Qt(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const t=a,s=Array(t.length);function i(u,n=!1){if(u===Kt)return;if(u===Wt)return NaN;if(u===Yt)return 1/0;if(u===Xt)return-1/0;if(u===Zt)return-0;if(n)throw new Error("Invalid input");if(u in s)return s[u];const c=t[u];if(!c||typeof c!="object")s[u]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const _=c[0],m=e==null?void 0:e[_];if(m)return s[u]=m(i(c[1]));switch(_){case"Date":s[u]=new Date(c[1]);break;case"Set":const g=new Set;s[u]=g;for(let I=1;I<c.length;I+=1)g.add(i(c[I]));break;case"Map":const R=new Map;s[u]=R;for(let I=1;I<c.length;I+=2)R.set(i(c[I]),i(c[I+1]));break;case"RegExp":s[u]=new RegExp(c[1],c[2]);break;case"Object":s[u]=Object(c[1]);break;case"BigInt":s[u]=BigInt(c[1]);break;case"null":const E=Object.create(null);s[u]=E;for(let I=1;I<c.length;I+=2)E[c[I]]=i(c[I+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(c.length);s[u]=_;for(let m=0;m<c.length;m+=1){const g=c[m];g!==zt&&(_[m]=i(g))}}else{const _={};s[u]=_;for(const m in c){const g=c[m];_[m]=i(g)}}return s[u]}return i(0)}function Ne(a){const e=new Set(a);function t(s,i){if(s){for(const u in s)if(u[0]!=="_"&&!e.has(u)){const n=a.join(", ");throw new Error(`Invalid export '${u}'${i?` in ${i}`:""} (valid exports are ${n}, or anything with a '_' prefix)`)}}}return t}Ne(["load","prerender","csr","ssr","trailingSlash"]);Ne(["load","prerender","csr","ssr","actions","trailingSlash"]);Ne(["GET","POST","PATCH","PUT","DELETE","prerender","trailingSlash"]);const Se=Tt(me,Gt,Ht,Bt),Ae=me[0],Pe=me[1];Ae();Pe();let te={};try{te=JSON.parse(sessionStorage[tt])}catch{}function Re(a){te[a]=ue()}function xt({target:a,base:e}){var Je;const t=document.documentElement,s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},c=!1,_=!1,m=!0,g=!1,R=!1,E=!1,I=!1,j,$=(Je=history.state)==null?void 0:Je[V];$||($=Date.now(),history.replaceState({...history.state,[V]:$},"",location.href));const _e=te[$];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let H,Te,ne;async function je(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=oe(r,!0);i=null,await Ce(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:f=!1,keepFocus:l=!1,state:d={},invalidateAll:p=!1},h,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:l,redirect_chain:h,details:{state:d,replaceState:f},nav_token:b,accepted:()=>{p&&(I=!0)},blocked:()=>{},type:"goto"})}async function De(r){const o=oe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Fe(o).then(f=>(f.type==="loaded"&&f.state.error&&(i=null),f))},i.promise}async function ae(...r){const f=Se.filter(l=>r.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(f)}async function Ce(r,o,f,l,d={},p){var b,y;Te=d;let h=r&&await Fe(r);if(h||(h=await He(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Te!==d)return!1;if(h.type==="redirect")if(f.length>10||f.includes(o.pathname))h=await re({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...f,o.pathname],d),!1;else((y=(b=h.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await J.updated.check()&&await ie(o);if(s.length=0,I=!1,g=!0,l&&l.details){const{details:w}=l,S=w.replaceState?0:1;w.state[V]=$+=S,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(i=null,_?(n=h.state,h.props.page&&(h.props.page.url=o),j.$set(h.props)):Ve(h),l){const{scroll:w,keepfocus:S}=l;if(S||Ie(),await le(),m){const L=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await le();m=!0,h.props.page&&(H=h.props.page),p&&p(),g=!1}function Ve(r){var l;n=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),H=r.props.page,j=new Ft({target:a,props:{...r.props,stores:J},hydrate:!0});const f={from:null,to:{params:n.params,route:{id:((l=n.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(d=>d(f)),_=!0}async function Z({url:r,params:o,branch:f,status:l,error:d,route:p,form:h}){const b=f.filter(Boolean);let y="never";for(const O of f)(O==null?void 0:O.slash)!==void 0&&(y=O.slash);r.pathname=wt(r.pathname,y),r.search=r.search;const w={type:"loaded",state:{url:r,params:o,branch:f,error:d,route:p},props:{components:b.map(O=>O.node.component)}};h!==void 0&&(w.props.form=h);let S={},L=!H;for(let O=0;O<b.length;O+=1){const v=b[O];S={...S,...v.data},(L||!n.branch.some(N=>N===v))&&(w.props[`data_${O}`]=S,L=L||Object.keys(v.data??{}).length>0)}return L||(L=Object.keys(H.data).length!==Object.keys(S).length),(!n.url||r.href!==n.url.href||n.error!==d||h!==void 0||L)&&(w.props.page={error:d,params:o,route:p,status:l,url:new URL(r),form:h??null,data:L?S:H.data}),w}async function we({loader:r,parent:o,url:f,params:l,route:d,server_data_node:p}){var w,S,L;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let D=function(...v){for(const N of v){const{href:T}=new URL(N,f);b.dependencies.add(T)}};const O={route:{get id(){return b.route=!0,d.id}},params:new Proxy(l,{get:(v,N)=>(b.params.add(N),v[N])}),data:(p==null?void 0:p.data)??null,url:Et(f,()=>{b.url=!0}),async fetch(v,N){let T;v instanceof Request?(T=v.url,N={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...N}):T=v;const k=new URL(T,f).href;return D(k),_?Ot(T,k,N):Lt(T,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};h=await y.universal.load.call(null,O)??null,h=h?await Mt(h):null}return{node:y,loader:r,server:p,universal:(S=y.universal)!=null&&S.load?{type:"data",data:h,uses:b}:null,data:h??(p==null?void 0:p.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(p==null?void 0:p.slash)}}function qe(r,o,f,l,d){if(I)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&f)return!0;for(const p of l.params)if(d[p]!==n.params[p])return!0;for(const p of l.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function ye(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Fe({id:r,invalidating:o,url:f,params:l,route:d}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:p,layouts:h,leaf:b}=d,y=[...h,b];p.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const S=n.url?r!==n.url.pathname+n.url.search:!1,L=n.route?r!==n.route.id:!1,D=y.reduce((k,P,U)=>{var Q;const A=n.branch[U],K=!!(P!=null&&P[0])&&((A==null?void 0:A.loader)!==P[1]||qe(k.some(Boolean),L,S,(Q=A.server)==null?void 0:Q.uses,l));return k.push(K),k},[]);if(D.some(Boolean)){try{w=await et(f,D)}catch(k){return re({status:500,error:await x(k,{url:f,params:l,route:{id:d.id}}),url:f,route:d})}if(w.type==="redirect")return w}const O=w==null?void 0:w.nodes;let v=!1;const N=y.map(async(k,P)=>{var Q;if(!k)return;const U=n.branch[P],A=O==null?void 0:O[P];if((!A||A.type==="skip")&&k[1]===(U==null?void 0:U.loader)&&!qe(v,L,S,(Q=U.universal)==null?void 0:Q.uses,l))return U;if(v=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:k[1],url:f,params:l,route:d,parent:async()=>{var Ke;const Me={};for(let be=0;be<P;be+=1)Object.assign(Me,(Ke=await N[be])==null?void 0:Ke.data);return Me},server_data_node:ye(A===void 0&&k[0]?{type:"skip"}:A??null,U==null?void 0:U.server)})});for(const k of N)k.catch(()=>{});const T=[];for(let k=0;k<y.length;k+=1)if(y[k])try{T.push(await N[k])}catch(P){if(P instanceof xe)return{type:"redirect",location:P.location};let U=500,A;O!=null&&O.includes(P)?(U=P.status??U,A=P.error):P instanceof Oe?(U=P.status,A=P.body):A=await x(P,{params:l,url:f,route:{id:d.id}});const K=await Be(k,T,p);return K?await Z({url:f,params:l,branch:T.slice(0,K.idx).concat(K.node),status:U,error:A,route:d}):await He(f,{id:d.id},A,U)}else T.push(void 0);return await Z({url:f,params:l,branch:T,status:200,error:null,route:d,form:o?void 0:null})}async function Be(r,o,f){for(;r--;)if(f[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await f[r](),loader:f[r],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:r,error:o,url:f,route:l}){const d={},p=await Ae();let h=null;if(p.server)try{const w=await et(f,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;h=w.nodes[0]??null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||c)&&await ie(f)}const b=await we({loader:Ae,url:f,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),y={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:f,params:d,branch:[b,y],status:r,error:o,route:null})}function oe(r,o){if(Ye(r,e))return;const f=yt(r.pathname.slice(e.length)||"/");for(const l of Se){const d=l.exec(f);if(d)return{id:r.pathname+r.search,invalidating:o,route:l,params:bt(d),url:r}}}function Ge({url:r,type:o,intent:f,delta:l}){var b,y;let d=!1;const p={from:{params:n.params,route:{id:((b=n.route)==null?void 0:b.id)??null},url:n.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((y=f==null?void 0:f.route)==null?void 0:y.id)??null},url:r},willUnload:!f,type:o};l!==void 0&&(p.delta=l);const h={...p,cancel:()=>{d=!0}};return R||u.before_navigate.forEach(w=>w(h)),d?null:p}async function se({url:r,scroll:o,keepfocus:f,redirect_chain:l,details:d,type:p,delta:h,nav_token:b,accepted:y,blocked:w}){const S=oe(r,!1),L=Ge({url:r,type:p,delta:h,intent:S});if(!L){w();return}Re($),y(),R=!0,_&&J.navigating.set(L),await Ce(S,r,l,{scroll:o,keepfocus:f,details:d},b,()=>{R=!1,u.after_navigate.forEach(D=>D(L)),J.navigating.set(null)})}async function He(r,o,f,l){return r.origin===location.origin&&r.pathname===location.pathname&&!c?await re({status:l,error:f,url:r,route:o}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;t.addEventListener("mousemove",p=>{const h=p.target;clearTimeout(r),r=setTimeout(()=>{l(h,2)},20)});function o(p){l(p.composedPath()[0],1)}t.addEventListener("mousedown",o),t.addEventListener("touchstart",o,{passive:!0});const f=new IntersectionObserver(p=>{for(const h of p)h.isIntersecting&&(ae(new URL(h.target.href).pathname),f.unobserve(h.target))},{threshold:0});function l(p,h){const b=We(p,t);if(!b)return;const{url:y,external:w}=Ee(b,e);if(w)return;const S=ce(b);S.reload||(h<=S.preload_data?De(y):h<=S.preload_code&&ae(y.pathname))}function d(){f.disconnect();for(const p of t.querySelectorAll("a")){const{url:h,external:b}=Ee(p,e);if(b)continue;const y=ce(p);y.reload||(y.preload_code===Xe.viewport&&f.observe(p),y.preload_code===Xe.eager&&ae(h.pathname))}}u.after_navigate.push(d),d()}return{after_navigate:r=>{Le(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{Le(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!_)&&(m=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(f=>f.href===o)}return je()},invalidateAll:()=>(I=!0,je()),preload_data:async r=>{const o=new URL(r,ze(document));await De(o)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:f,route:l}=n;if(!l)return;const d=await Be(n.branch.length,f,l.errors);if(d){const p=await Z({url:o,params:n.params,branch:f.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:l});n=p.state,j.$set(p.props),le().then(Ie)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...H,form:r.data,status:r.status}};j.$set(o),r.type==="success"&&le().then(Ie)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let f=!1;if(!R){const d={from:{params:n.params,route:{id:((l=n.route)==null?void 0:l.id)??null},url:n.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(p=>p(d))}f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re($);try{sessionStorage[tt]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),t.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const f=We(o.composedPath()[0],t);if(!f)return;const{url:l,external:d,has:p}=Ee(f,e),h=ce(f);if(!l||!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||p.download)return;if(d||h.reload){Ge({url:l,type:"link"})||o.preventDefault(),R=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){E=!0,Re($),n.url=l,J.page.set({...H,url:l}),J.page.notify();return}se({url:l,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),t.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const p=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(Ye(p,e))return;const{noscroll:h,reload:b}=ce(o.target);b||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:p,scroll:h?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var f;if((f=o.state)!=null&&f[V]){if(o.state[V]===$)return;const l=o.state[V]-$;se({url:new URL(location.href),scroll:te[o.state[V]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=o.state[V]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{E&&(E=!1,history.replaceState({...history.state,[V]:++$},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&J.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:f,params:l,route:d,data:p,form:h})=>{c=!0;const b=new URL(location.href);({params:l={},route:d={id:null}}=oe(b,!1)||{});let y;try{const w=f.map(async(S,L)=>{const D=p[L];return we({loader:me[S],url:b,params:l,route:d,parent:async()=>{const O={};for(let v=0;v<L;v+=1)Object.assign(O,(await w[v]).data);return O},server_data_node:ye(D)})});y=await Z({url:b,params:l,branch:await Promise.all(w),status:r,error:o,form:h,route:Se.find(({id:S})=>S===d.id)??null})}catch(w){if(w instanceof xe){await ie(new URL(w.location,location.href));return}y=await re({status:w instanceof Oe?w.status:500,error:await x(w,{url:b,params:l,route:d}),url:b,route:d})}Ve(y)}}}async function et(a,e){var u;const t=new URL(a);t.pathname=Rt(a.pathname),t.searchParams.append("x-sveltekit-invalidated",e.map(n=>n?"1":"").join("_"));const s=await he(t.href),i=await s.json();if(!s.ok)throw new Error(i);return(u=i.nodes)==null||u.forEach(n=>{(n==null?void 0:n.type)==="data"&&(n.data=Qt(n.data),n.uses={dependencies:new Set(n.uses.dependencies??[]),params:new Set(n.uses.params??[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),i}function x(a,e){return a instanceof Oe?a.body:Jt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function an({env:a,hydrate:e,paths:t,target:s,version:i}){mt(t),gt(i);const u=xt({target:s,base:t.base});_t({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{an as start};