import{a as S,t as V}from"../chunks/disclose-version.CF8kLgI2.js";import"../chunks/legacy.C4HDMYEH.js";import{ai as G,v as K,h as x,B as D,w as Q,P as W,ag as Y,aj as Z,ak as O,ac as M,y as T,al as k,am as q,x as F,F as $,N as z,an as j,ao as ee,af as ae,ap as re,D as te,C as se,ad as ne,a9 as le,a4 as ie,J as B,aq as fe,ar as ue,as as ve,z as oe,p as pe,a as ce,c as I,r as w,s as de,t as _e,k as R}from"../chunks/runtime.D_tNg0db.js";import{s as L}from"../chunks/render.CIVdOpoN.js";import{s as he}from"../chunks/attributes.BMdtqqDT.js";import{i as me}from"../chunks/lifecycle.B0J-6gfN.js";import{p as ge}from"../chunks/props.DXHtJmMP.js";import{b as be}from"../chunks/paths.D-JGwhs1.js";function Ee(s,e){return e}function xe(s,e,r,f){for(var p=[],u=e.length,n=0;n<u;n++)ee(e[n].e,p,!0);var d=u>0&&p.length===0&&r!==null;if(d){var v=r.parentNode;ae(v),v.append(r),f.clear(),b(s,e[0].prev,e[u-1].next)}re(p,()=>{for(var c=0;c<u;c++){var a=e[c];d||(f.delete(a.k),b(s,a.prev,a.next)),te(a.e,!d)}})}function ye(s,e,r,f,p,u=null){var n=s,d={flags:e,items:new Map,first:null};{var v=s;n=x?D(se(v)):v.appendChild(G())}x&&Q();var c=null,a=!1;K(()=>{var o=r(),l=W(o)?o:o==null?[]:Y(o),t=l.length;if(a&&t===0)return;a=t===0;let h=!1;if(x){var y=n.data===Z;y!==(t===0)&&(n=O(),D(n),M(!1),h=!0)}if(x){for(var g=null,i,_=0;_<t;_++){if(T.nodeType===8&&T.data===ne){n=T,h=!0,M(!1);break}var A=l[_],E=f(A,_);i=J(T,d,g,null,A,E,_,p,e),d.items.set(E,i),g=i}t>0&&D(O())}if(!x){var m=le;Te(l,d,n,p,e,(m.f&k)!==0,f)}u!==null&&(t===0?c?q(c):c=F(()=>u(n)):c!==null&&$(c,()=>{c=null})),h&&M(!0),r()}),x&&(n=T)}function Te(s,e,r,f,p,u,n){var d=s.length,v=e.items,c=e.first,a=c,o,l=null,t=[],h=[],y,g,i,_;for(_=0;_<d;_+=1){if(y=s[_],g=n(y,_),i=v.get(g),i===void 0){var A=a?a.e.nodes_start:r;l=J(A,e,l,l===null?e.first:l.next,y,g,_,f,p),v.set(g,l),t=[],h=[],a=l.next;continue}if(we(i,y,_),i.e.f&k&&q(i.e),i!==a){if(o!==void 0&&o.has(i)){if(t.length<h.length){var E=h[0],m;l=E.prev;var H=t[0],C=t[t.length-1];for(m=0;m<t.length;m+=1)P(t[m],E,r);for(m=0;m<h.length;m+=1)o.delete(h[m]);b(e,H.prev,C.next),b(e,l,H),b(e,C,E),a=E,l=C,_-=1,t=[],h=[]}else o.delete(i),P(i,a,r),b(e,i.prev,i.next),b(e,i,l===null?e.first:l.next),b(e,l,i),l=i;continue}for(t=[],h=[];a!==null&&a.k!==g;)(u||!(a.e.f&k))&&(o??(o=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;i=a}t.push(i),l=i,a=i.next}if(a!==null||o!==void 0){for(var N=o===void 0?[]:Y(o);a!==null;)(u||!(a.e.f&k))&&N.push(a),a=a.next;var U=N.length;if(U>0){var X=d===0?r:null;xe(e,N,X,v)}}z.first=e.first&&e.first.e,z.last=l&&l.e}function we(s,e,r,f){j(s.v,e),s.i=r}function J(s,e,r,f,p,u,n,d,v){var c=(v&ue)!==0,a=(v&ve)===0,o=c?a?ie(p):B(p):p,l=v&fe?B(n):n,t={i:l,v:o,k:u,a:null,e:null,prev:r,next:f};try{return t.e=F(()=>d(s,o,l),x),t.e.prev=r&&r.e,t.e.next=f&&f.e,r===null?e.first=t:(r.next=t,r.e.next=t.e),f!==null&&(f.prev=t,f.e.prev=t.e),t}finally{}}function P(s,e,r){for(var f=s.next?s.next.e.nodes_start:r,p=e?e.e.nodes_start:r,u=s.e.nodes_start;u!==f;){var n=oe(u);p.before(u),u=n}}function b(s,e,r){e===null?s.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const Ae=async({fetch:s})=>({posts:await(await s("/api/posts")).json()}),ze=Object.freeze(Object.defineProperty({__proto__:null,load:Ae},Symbol.toStringTag,{value:"Module"}));var Ie=V('<li><p class="svelte-1sarb6"><a> </a> <span class="svelte-1sarb6"> </span></p></li>'),ke=V('<ul class="data-posts svelte-1sarb6"></ul>');function Be(s,e){pe(e,!1);let r=ge(e,"data",8);me();var f=ke();ye(f,5,()=>r().posts,Ee,(p,u)=>{var n=Ie(),d=I(n),v=I(d),c=I(v,!0);w(v);var a=de(v,2),o=I(a,!0);w(a),w(d),w(n),_e(()=>{he(v,"href",be+R(u).path),L(c,R(u).meta.title),L(o,R(u).formattedDate)}),S(p,n)}),w(f),S(s,f),ce()}export{Be as component,ze as universal};