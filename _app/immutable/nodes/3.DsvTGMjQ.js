import{a as O,t as Y}from"../chunks/disclose-version.hD3RjQbW.js";import"../chunks/legacy.C6sgJd9a.js";import{ah as J,m as Q,o as E,z as k,q as W,O as Z,af as G,ak as $,al as S,ab as R,w as b,am as I,an as K,v as P,C as j,L,ao as ee,ap as ae,ae as re,aq as te,B as se,A as ne,ac as ie,a8 as le,a3 as fe,G as q,ar as oe,as as ue,at as ve,x as pe,N as ce,au as _e,p as de,a as he,c as N,r as w,s as ge,t as me,h as D}from"../chunks/runtime.Bs2-O94s.js";import{s as z}from"../chunks/render.CbMYC6RU.js";import{i as Ee}from"../chunks/lifecycle.CMaBi8BZ.js";import{p as ye}from"../chunks/props.u9dedcIT.js";function xe(r,e){return e}function Ae(r,e,a,s){for(var o=[],i=e.length,l=0;l<i;l++)ae(e[l].e,o,!0);var _=i>0&&o.length===0&&a!==null;if(_){var v=a.parentNode;re(v),v.append(a),s.clear(),y(r,e[0].prev,e[i-1].next)}te(o,()=>{for(var c=0;c<i;c++){var t=e[c];_||(s.delete(t.k),y(r,t.prev,t.next)),se(t.e,!_)}})}function be(r,e,a,s,o,i=null){var l=r,_={flags:e,items:new Map,first:null};{var v=r;l=E?k(ne(v)):v.appendChild(J())}E&&W();var c=null,t=!1;Q(()=>{var p=a(),f=Z(p)?p:p==null?[]:G(p),n=f.length;if(t&&n===0)return;t=n===0;let h=!1;if(E){var A=l.data===$;A!==(n===0)&&(l=S(),k(l),R(!1),h=!0)}if(E){for(var m=null,u,d=0;d<n;d++){if(b.nodeType===8&&b.data===ie){l=b,h=!0,R(!1);break}var T=f[d],x=s(T,d);u=U(b,_,m,null,T,x,d,o,e),_.items.set(x,u),m=u}n>0&&k(S())}if(!E){var g=le;we(f,_,l,o,e,(g.f&I)!==0,s)}i!==null&&(n===0?c?K(c):c=P(()=>i(l)):c!==null&&j(c,()=>{c=null})),h&&R(!0),a()}),E&&(l=b)}function we(r,e,a,s,o,i,l){var _=r.length,v=e.items,c=e.first,t=c,p,f=null,n=[],h=[],A,m,u,d;for(d=0;d<_;d+=1){if(A=r[d],m=l(A,d),u=v.get(m),u===void 0){var T=t?t.e.nodes_start:a;f=U(T,e,f,f===null?e.first:f.next,A,m,d,s,o),v.set(m,f),n=[],h=[],t=f.next;continue}if(Te(u,A,d),u.e.f&I&&K(u.e),u!==t){if(p!==void 0&&p.has(u)){if(n.length<h.length){var x=h[0],g;f=x.prev;var H=n[0],C=n[n.length-1];for(g=0;g<n.length;g+=1)B(n[g],x,a);for(g=0;g<h.length;g+=1)p.delete(h[g]);y(e,H.prev,C.next),y(e,f,H),y(e,C,x),t=x,f=C,d-=1,n=[],h=[]}else p.delete(u),B(u,t,a),y(e,u.prev,u.next),y(e,u,f===null?e.first:f.next),y(e,f,u),f=u;continue}for(n=[],h=[];t!==null&&t.k!==m;)(i||!(t.e.f&I))&&(p??(p=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;u=t}n.push(u),f=u,t=u.next}if(t!==null||p!==void 0){for(var M=p===void 0?[]:G(p);t!==null;)(i||!(t.e.f&I))&&M.push(t),t=t.next;var X=M.length;if(X>0){var F=_===0?a:null;Ae(e,M,F,v)}}L.first=e.first&&e.first.e,L.last=f&&f.e}function Te(r,e,a,s){ee(r.v,e),r.i=a}function U(r,e,a,s,o,i,l,_,v){var c=(v&ue)!==0,t=(v&ve)===0,p=c?t?fe(o):q(o):o,f=v&oe?q(l):l,n={i:f,v:p,k:i,a:null,e:null,prev:a,next:s};try{return n.e=P(()=>_(r,p,f),E),n.e.prev=a&&a.e,n.e.next=s&&s.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),s!==null&&(s.prev=n,s.e.prev=n.e),n}finally{}}function B(r,e,a){for(var s=r.next?r.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=r.e.nodes_start;i!==s;){var l=pe(i);o.before(i),i=l}}function y(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ne(r,e,a,s){var o=r.__attributes??(r.__attributes={});E&&(o[e]=r.getAttribute(e),r.nodeName==="LINK")||o[e]!==(o[e]=a)&&(a==null?r.removeAttribute(e):typeof a!="string"&&Ie(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var V=new Map;function Ie(r){var e=V.get(r.nodeName);if(e)return e;V.set(r.nodeName,e=[]);for(var a,s=r,o=Element.prototype;o!==s;){a=_e(s);for(var i in a)a[i].set&&e.push(i);s=ce(s)}return e}const Ce=async({fetch:r})=>({posts:await(await r("/api/posts")).json()}),qe=Object.freeze(Object.defineProperty({__proto__:null,load:Ce},Symbol.toStringTag,{value:"Module"}));var Me=Y('<li><p class="svelte-1sarb6"><a> </a> <span class="svelte-1sarb6"> </span></p></li>'),ke=Y('<ul class="data-posts svelte-1sarb6"></ul>');function ze(r,e){de(e,!1);let a=ye(e,"data",8);Ee();var s=ke();be(s,5,()=>a().posts,xe,(o,i)=>{var l=Me(),_=N(l),v=N(_),c=N(v,!0);w(v);var t=ge(v,2),p=N(t,!0);w(t),w(_),w(l),me(()=>{Ne(v,"href",D(i).path),z(c,D(i).meta.title),z(p,D(i).formattedDate)}),O(o,l)}),w(s),O(r,s),he()}export{ze as component,qe as universal};