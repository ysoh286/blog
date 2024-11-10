import{S as li,i as oi,s as ii,e as o,t as r,a as n,c as i,b as s,d as a,f as l,g as d,k as x,h as c,j as e,n as eo}from"./index-794e8e40.js";function si(ti){let g,nt,De,k,$,dt,ft,ee,ct,Ge,C,ut,He,D,ht,Oe,F,pt,te,mt,vt,We,h,le,_t,Et,oe,bt,It,ie,yt,Lt,G,wt,w,H,gt,m,se,kt,Ft,re,At,Tt,ae,Ut,xt,ne,jt,qt,de,Mt,St,fe,Rt,Bt,O,Pt,j,ce,Ct,Dt,ue,Gt,Ht,W,Ot,v,he,Wt,Kt,pe,Nt,Vt,me,Zt,zt,ve,Jt,Qt,_e,Xt,Yt,Ee,$t,el,be,tl,Ke,K,ll,Ne,_,Ie,ol,il,ye,sl,rl,Le,al,nl,we,dl,Ve,N,fl,Ze,A,ge,cl,ul,ke,hl,ze,V,pl,Je,Z,ml,Qe,y,Fe,vl,_l,Ae,El,bl,Te,Il,Xe,z,yl,Ye,u,Ue,Ll,wl,xe,gl,kl,je,Fl,Al,qe,Tl,Ul,Me,xl,jl,Se,ql,Ml,Re,Sl,Rl,Be,Bl,$e,J,Pl,et,Q,Cl,tt,E,q,Dl,M,Gl,Hl,Ol,S,Wl,R,Kl,Nl,Vl,Pe,B,Zl,zl,Ce,P,Jl;return{c(){g=o("p"),nt=r("This week’s progress:"),De=n(),k=o("ul"),$=o("li"),dt=r("Completed Erik Reinert’s Introduction To Backend Architectures course"),ft=n(),ee=o("li"),ct=r("Finished off Maxi Ferreira’s Fundamentals of Frontend Architecture course"),Ge=n(),C=o("p"),ut=r(`It took a while to get back to the frontend architecture course.
Key learnings involved the idea of modules, entities, while breaking down screens into features and components seemed pretty common (for anyone who’s used React, Vue, or just built with any of the popular front-end frameworks / libraries). The design document structure mentioned was similar to that of Google’s one.`),He=n(),D=o("h3"),ht=r("Feature sliced design"),Oe=n(),F=o("p"),pt=r("Feature sliced design is an "),te=o("em"),mt=r("‘architecture methodolgy for frontend projects’"),vt=r("."),We=n(),h=o("ul"),le=o("li"),_t=r("Set of rules and conventions for organising code"),Et=n(),oe=o("li"),bt=r("Main goal: make project more understandable, structured as business requirements change over time as front-end applications become more complex"),It=n(),ie=o("li"),yt=r("A set of tools provided to help check project architecture, folder generation"),Lt=n(),G=o("li"),wt=r("Things are divided into the following:"),w=o("ul"),H=o("li"),gt=r("Layers"),m=o("ul"),se=o("li"),kt=r("app (everything that makes the application run - routing, entrypoints, global styles, providers)"),Ft=n(),re=o("li"),At=r("pages (full pages in nested routing)"),Tt=n(),ae=o("li"),Ut=r("widgets (large pieces of functionality / UI)"),xt=n(),ne=o("li"),jt=r("features (reused implementations of product features)"),qt=n(),de=o("li"),Mt=r("entities (business entities)"),St=n(),fe=o("li"),Rt=r("shared (reusable functionality)"),Bt=n(),O=o("li"),Pt=r("Slices"),j=o("ul"),ce=o("li"),Ct=r("partition code by business domain"),Dt=n(),ue=o("li"),Gt=r("cannot use slices in same layer (things should be as decoupled and independent as possible)"),Ht=n(),W=o("li"),Ot=r("Segments"),v=o("ul"),he=o("li"),Wt=r("ui (UI components, styles, formatters)"),Kt=n(),pe=o("li"),Nt=r("api (backend interactions, mappers, data types)"),Vt=n(),me=o("li"),Zt=r("model (schemas, interfaces, stores, business logic)"),zt=n(),ve=o("li"),Jt=r("lib (library code that is required)"),Qt=n(),_e=o("li"),Xt=r("config (configuration files and feature flags)"),Yt=n(),Ee=o("li"),$t=r("The whole point of this is to divide things into modules that are independent and that there shouldn’t be one module importing from another."),el=n(),be=o("li"),tl=r("This is an interesting way to reshape architecture. May or may not work for everyone, but aims to give an option of how front-end applications can be maintained."),Ke=n(),K=o("h3"),ll=r("Pros"),Ne=n(),_=o("ul"),Ie=o("li"),ol=r("Aims to solve everyday problems"),il=n(),ye=o("li"),sl=r("Intuitive for all developers"),rl=n(),Le=o("li"),al=r("Focuses on business features and user needs"),nl=n(),we=o("li"),dl=r("Structure is standardised, and stable and is meant to be easy to refactor"),Ve=n(),N=o("h3"),fl=r("Cons"),Ze=n(),A=o("ul"),ge=o("li"),cl=r("Adoption and requires buy-in from other developers, stakeholders, business"),ul=n(),ke=o("li"),hl=r("Not required for small projects or small applications"),ze=n(),V=o("p"),pl=r("If we do wish to use this, consider doing a slow migration towards it."),Je=n(),Z=o("p"),ml=r("When not to use it?"),Qe=n(),y=o("ul"),Fe=o("li"),vl=r("If project is small, or shortlived, or doesn’t need an architecture so in depth"),_l=n(),Ae=o("li"),El=r("Business does not perceive connection between code base to velocity of delivery of features"),bl=n(),Te=o("li"),Il=r("Business wants to move fast and close things as soon as possible"),Xe=n(),z=o("h3"),yl=r("Format for design docs"),Ye=n(),u=o("ol"),Ue=o("li"),Ll=r("Overview"),wl=n(),xe=o("li"),gl=r("Context / Scope"),kl=n(),je=o("li"),Fl=r("Goals and non-goals"),Al=n(),qe=o("li"),Tl=r("Design"),Ul=n(),Me=o("li"),xl=r("Alternatives considered, tradeoffs"),jl=n(),Se=o("li"),ql=r("Timeline"),Ml=n(),Re=o("li"),Sl=r("Risks, cross cutting concerns, other questions"),Rl=n(),Be=o("li"),Bl=r("Appendix (optional)"),$e=n(),J=o("p"),Pl=r("Use design docs when you need to communicate to many people or stakeholders, or if there’s something that needs to be shared. Maintaining these can be overhead and take significant time to write. These can become a living document that require iteration as implementation begins."),et=n(),Q=o("h3"),Cl=r("References"),tt=n(),E=o("ul"),q=o("li"),Dl=r("Erik Reinert’s "),M=o("a"),Gl=r("Introduction to Backend Architectures"),Hl=r(" on FrontEnd Masters"),Ol=n(),S=o("li"),Wl=r("Maxi Ferreira’s "),R=o("a"),Kl=r("Fundamentals of Frontend Architecture"),Nl=r(" course"),Vl=n(),Pe=o("li"),B=o("a"),Zl=r("Feature sliced design"),zl=n(),Ce=o("li"),P=o("a"),Jl=r("Design Docs at Google - Industrial Empathy"),this.h()},l(t){g=i(t,"P",{});var f=s(g);nt=a(f,"This week’s progress:"),f.forEach(l),De=d(t),k=i(t,"UL",{});var lt=s(k);$=i(lt,"LI",{});var to=s($);dt=a(to,"Completed Erik Reinert’s Introduction To Backend Architectures course"),to.forEach(l),ft=d(lt),ee=i(lt,"LI",{});var lo=s(ee);ct=a(lo,"Finished off Maxi Ferreira’s Fundamentals of Frontend Architecture course"),lo.forEach(l),lt.forEach(l),Ge=d(t),C=i(t,"P",{});var oo=s(C);ut=a(oo,`It took a while to get back to the frontend architecture course.
Key learnings involved the idea of modules, entities, while breaking down screens into features and components seemed pretty common (for anyone who’s used React, Vue, or just built with any of the popular front-end frameworks / libraries). The design document structure mentioned was similar to that of Google’s one.`),oo.forEach(l),He=d(t),D=i(t,"H3",{});var io=s(D);ht=a(io,"Feature sliced design"),io.forEach(l),Oe=d(t),F=i(t,"P",{});var ot=s(F);pt=a(ot,"Feature sliced design is an "),te=i(ot,"EM",{});var so=s(te);mt=a(so,"‘architecture methodolgy for frontend projects’"),so.forEach(l),vt=a(ot,"."),ot.forEach(l),We=d(t),h=i(t,"UL",{});var b=s(h);le=i(b,"LI",{});var ro=s(le);_t=a(ro,"Set of rules and conventions for organising code"),ro.forEach(l),Et=d(b),oe=i(b,"LI",{});var ao=s(oe);bt=a(ao,"Main goal: make project more understandable, structured as business requirements change over time as front-end applications become more complex"),ao.forEach(l),It=d(b),ie=i(b,"LI",{});var no=s(ie);yt=a(no,"A set of tools provided to help check project architecture, folder generation"),no.forEach(l),Lt=d(b),G=i(b,"LI",{});var Ql=s(G);wt=a(Ql,"Things are divided into the following:"),w=i(Ql,"UL",{});var X=s(w);H=i(X,"LI",{});var Xl=s(H);gt=a(Xl,"Layers"),m=i(Xl,"UL",{});var I=s(m);se=i(I,"LI",{});var fo=s(se);kt=a(fo,"app (everything that makes the application run - routing, entrypoints, global styles, providers)"),fo.forEach(l),Ft=d(I),re=i(I,"LI",{});var co=s(re);At=a(co,"pages (full pages in nested routing)"),co.forEach(l),Tt=d(I),ae=i(I,"LI",{});var uo=s(ae);Ut=a(uo,"widgets (large pieces of functionality / UI)"),uo.forEach(l),xt=d(I),ne=i(I,"LI",{});var ho=s(ne);jt=a(ho,"features (reused implementations of product features)"),ho.forEach(l),qt=d(I),de=i(I,"LI",{});var po=s(de);Mt=a(po,"entities (business entities)"),po.forEach(l),St=d(I),fe=i(I,"LI",{});var mo=s(fe);Rt=a(mo,"shared (reusable functionality)"),mo.forEach(l),I.forEach(l),Xl.forEach(l),Bt=d(X),O=i(X,"LI",{});var Yl=s(O);Pt=a(Yl,"Slices"),j=i(Yl,"UL",{});var it=s(j);ce=i(it,"LI",{});var vo=s(ce);Ct=a(vo,"partition code by business domain"),vo.forEach(l),Dt=d(it),ue=i(it,"LI",{});var _o=s(ue);Gt=a(_o,"cannot use slices in same layer (things should be as decoupled and independent as possible)"),_o.forEach(l),it.forEach(l),Yl.forEach(l),Ht=d(X),W=i(X,"LI",{});var $l=s(W);Ot=a($l,"Segments"),v=i($l,"UL",{});var L=s(v);he=i(L,"LI",{});var Eo=s(he);Wt=a(Eo,"ui (UI components, styles, formatters)"),Eo.forEach(l),Kt=d(L),pe=i(L,"LI",{});var bo=s(pe);Nt=a(bo,"api (backend interactions, mappers, data types)"),bo.forEach(l),Vt=d(L),me=i(L,"LI",{});var Io=s(me);Zt=a(Io,"model (schemas, interfaces, stores, business logic)"),Io.forEach(l),zt=d(L),ve=i(L,"LI",{});var yo=s(ve);Jt=a(yo,"lib (library code that is required)"),yo.forEach(l),Qt=d(L),_e=i(L,"LI",{});var Lo=s(_e);Xt=a(Lo,"config (configuration files and feature flags)"),Lo.forEach(l),L.forEach(l),$l.forEach(l),X.forEach(l),Ql.forEach(l),Yt=d(b),Ee=i(b,"LI",{});var wo=s(Ee);$t=a(wo,"The whole point of this is to divide things into modules that are independent and that there shouldn’t be one module importing from another."),wo.forEach(l),el=d(b),be=i(b,"LI",{});var go=s(be);tl=a(go,"This is an interesting way to reshape architecture. May or may not work for everyone, but aims to give an option of how front-end applications can be maintained."),go.forEach(l),b.forEach(l),Ke=d(t),K=i(t,"H3",{});var ko=s(K);ll=a(ko,"Pros"),ko.forEach(l),Ne=d(t),_=i(t,"UL",{});var T=s(_);Ie=i(T,"LI",{});var Fo=s(Ie);ol=a(Fo,"Aims to solve everyday problems"),Fo.forEach(l),il=d(T),ye=i(T,"LI",{});var Ao=s(ye);sl=a(Ao,"Intuitive for all developers"),Ao.forEach(l),rl=d(T),Le=i(T,"LI",{});var To=s(Le);al=a(To,"Focuses on business features and user needs"),To.forEach(l),nl=d(T),we=i(T,"LI",{});var Uo=s(we);dl=a(Uo,"Structure is standardised, and stable and is meant to be easy to refactor"),Uo.forEach(l),T.forEach(l),Ve=d(t),N=i(t,"H3",{});var xo=s(N);fl=a(xo,"Cons"),xo.forEach(l),Ze=d(t),A=i(t,"UL",{});var st=s(A);ge=i(st,"LI",{});var jo=s(ge);cl=a(jo,"Adoption and requires buy-in from other developers, stakeholders, business"),jo.forEach(l),ul=d(st),ke=i(st,"LI",{});var qo=s(ke);hl=a(qo,"Not required for small projects or small applications"),qo.forEach(l),st.forEach(l),ze=d(t),V=i(t,"P",{});var Mo=s(V);pl=a(Mo,"If we do wish to use this, consider doing a slow migration towards it."),Mo.forEach(l),Je=d(t),Z=i(t,"P",{});var So=s(Z);ml=a(So,"When not to use it?"),So.forEach(l),Qe=d(t),y=i(t,"UL",{});var Y=s(y);Fe=i(Y,"LI",{});var Ro=s(Fe);vl=a(Ro,"If project is small, or shortlived, or doesn’t need an architecture so in depth"),Ro.forEach(l),_l=d(Y),Ae=i(Y,"LI",{});var Bo=s(Ae);El=a(Bo,"Business does not perceive connection between code base to velocity of delivery of features"),Bo.forEach(l),bl=d(Y),Te=i(Y,"LI",{});var Po=s(Te);Il=a(Po,"Business wants to move fast and close things as soon as possible"),Po.forEach(l),Y.forEach(l),Xe=d(t),z=i(t,"H3",{});var Co=s(z);yl=a(Co,"Format for design docs"),Co.forEach(l),Ye=d(t),u=i(t,"OL",{});var p=s(u);Ue=i(p,"LI",{});var Do=s(Ue);Ll=a(Do,"Overview"),Do.forEach(l),wl=d(p),xe=i(p,"LI",{});var Go=s(xe);gl=a(Go,"Context / Scope"),Go.forEach(l),kl=d(p),je=i(p,"LI",{});var Ho=s(je);Fl=a(Ho,"Goals and non-goals"),Ho.forEach(l),Al=d(p),qe=i(p,"LI",{});var Oo=s(qe);Tl=a(Oo,"Design"),Oo.forEach(l),Ul=d(p),Me=i(p,"LI",{});var Wo=s(Me);xl=a(Wo,"Alternatives considered, tradeoffs"),Wo.forEach(l),jl=d(p),Se=i(p,"LI",{});var Ko=s(Se);ql=a(Ko,"Timeline"),Ko.forEach(l),Ml=d(p),Re=i(p,"LI",{});var No=s(Re);Sl=a(No,"Risks, cross cutting concerns, other questions"),No.forEach(l),Rl=d(p),Be=i(p,"LI",{});var Vo=s(Be);Bl=a(Vo,"Appendix (optional)"),Vo.forEach(l),p.forEach(l),$e=d(t),J=i(t,"P",{});var Zo=s(J);Pl=a(Zo,"Use design docs when you need to communicate to many people or stakeholders, or if there’s something that needs to be shared. Maintaining these can be overhead and take significant time to write. These can become a living document that require iteration as implementation begins."),Zo.forEach(l),et=d(t),Q=i(t,"H3",{});var zo=s(Q);Cl=a(zo,"References"),zo.forEach(l),tt=d(t),E=i(t,"UL",{});var U=s(E);q=i(U,"LI",{});var rt=s(q);Dl=a(rt,"Erik Reinert’s "),M=i(rt,"A",{href:!0,rel:!0});var Jo=s(M);Gl=a(Jo,"Introduction to Backend Architectures"),Jo.forEach(l),Hl=a(rt," on FrontEnd Masters"),rt.forEach(l),Ol=d(U),S=i(U,"LI",{});var at=s(S);Wl=a(at,"Maxi Ferreira’s "),R=i(at,"A",{href:!0,rel:!0});var Qo=s(R);Kl=a(Qo,"Fundamentals of Frontend Architecture"),Qo.forEach(l),Nl=a(at," course"),at.forEach(l),Vl=d(U),Pe=i(U,"LI",{});var Xo=s(Pe);B=i(Xo,"A",{href:!0,rel:!0});var Yo=s(B);Zl=a(Yo,"Feature sliced design"),Yo.forEach(l),Xo.forEach(l),zl=d(U),Ce=i(U,"LI",{});var $o=s(Ce);P=i($o,"A",{href:!0,rel:!0});var ei=s(P);Jl=a(ei,"Design Docs at Google - Industrial Empathy"),ei.forEach(l),$o.forEach(l),U.forEach(l),this.h()},h(){x(M,"href","https://frontendmasters.com/courses/backend-architectures/"),x(M,"rel","nofollow"),x(R,"href","https://frontendatscale.com/courses/frontend-architecture/"),x(R,"rel","nofollow"),x(B,"href","https://feature-sliced.design/"),x(B,"rel","nofollow"),x(P,"href","https://www.industrialempathy.com/posts/design-docs-at-google/"),x(P,"rel","nofollow")},m(t,f){c(t,g,f),e(g,nt),c(t,De,f),c(t,k,f),e(k,$),e($,dt),e(k,ft),e(k,ee),e(ee,ct),c(t,Ge,f),c(t,C,f),e(C,ut),c(t,He,f),c(t,D,f),e(D,ht),c(t,Oe,f),c(t,F,f),e(F,pt),e(F,te),e(te,mt),e(F,vt),c(t,We,f),c(t,h,f),e(h,le),e(le,_t),e(h,Et),e(h,oe),e(oe,bt),e(h,It),e(h,ie),e(ie,yt),e(h,Lt),e(h,G),e(G,wt),e(G,w),e(w,H),e(H,gt),e(H,m),e(m,se),e(se,kt),e(m,Ft),e(m,re),e(re,At),e(m,Tt),e(m,ae),e(ae,Ut),e(m,xt),e(m,ne),e(ne,jt),e(m,qt),e(m,de),e(de,Mt),e(m,St),e(m,fe),e(fe,Rt),e(w,Bt),e(w,O),e(O,Pt),e(O,j),e(j,ce),e(ce,Ct),e(j,Dt),e(j,ue),e(ue,Gt),e(w,Ht),e(w,W),e(W,Ot),e(W,v),e(v,he),e(he,Wt),e(v,Kt),e(v,pe),e(pe,Nt),e(v,Vt),e(v,me),e(me,Zt),e(v,zt),e(v,ve),e(ve,Jt),e(v,Qt),e(v,_e),e(_e,Xt),e(h,Yt),e(h,Ee),e(Ee,$t),e(h,el),e(h,be),e(be,tl),c(t,Ke,f),c(t,K,f),e(K,ll),c(t,Ne,f),c(t,_,f),e(_,Ie),e(Ie,ol),e(_,il),e(_,ye),e(ye,sl),e(_,rl),e(_,Le),e(Le,al),e(_,nl),e(_,we),e(we,dl),c(t,Ve,f),c(t,N,f),e(N,fl),c(t,Ze,f),c(t,A,f),e(A,ge),e(ge,cl),e(A,ul),e(A,ke),e(ke,hl),c(t,ze,f),c(t,V,f),e(V,pl),c(t,Je,f),c(t,Z,f),e(Z,ml),c(t,Qe,f),c(t,y,f),e(y,Fe),e(Fe,vl),e(y,_l),e(y,Ae),e(Ae,El),e(y,bl),e(y,Te),e(Te,Il),c(t,Xe,f),c(t,z,f),e(z,yl),c(t,Ye,f),c(t,u,f),e(u,Ue),e(Ue,Ll),e(u,wl),e(u,xe),e(xe,gl),e(u,kl),e(u,je),e(je,Fl),e(u,Al),e(u,qe),e(qe,Tl),e(u,Ul),e(u,Me),e(Me,xl),e(u,jl),e(u,Se),e(Se,ql),e(u,Ml),e(u,Re),e(Re,Sl),e(u,Rl),e(u,Be),e(Be,Bl),c(t,$e,f),c(t,J,f),e(J,Pl),c(t,et,f),c(t,Q,f),e(Q,Cl),c(t,tt,f),c(t,E,f),e(E,q),e(q,Dl),e(q,M),e(M,Gl),e(q,Hl),e(E,Ol),e(E,S),e(S,Wl),e(S,R),e(R,Kl),e(S,Nl),e(E,Vl),e(E,Pe),e(Pe,B),e(B,Zl),e(E,zl),e(E,Ce),e(Ce,P),e(P,Jl)},p:eo,i:eo,o:eo,d(t){t&&l(g),t&&l(De),t&&l(k),t&&l(Ge),t&&l(C),t&&l(He),t&&l(D),t&&l(Oe),t&&l(F),t&&l(We),t&&l(h),t&&l(Ke),t&&l(K),t&&l(Ne),t&&l(_),t&&l(Ve),t&&l(N),t&&l(Ze),t&&l(A),t&&l(ze),t&&l(V),t&&l(Je),t&&l(Z),t&&l(Qe),t&&l(y),t&&l(Xe),t&&l(z),t&&l(Ye),t&&l(u),t&&l($e),t&&l(J),t&&l(et),t&&l(Q),t&&l(tt),t&&l(E)}}}const ai={title:"Weekly learning review - feature sliced design",date:"2024-10-13T22:25:00.000Z"};class ni extends li{constructor(g){super(),oi(this,g,null,si,ii,{})}}export{ni as default,ai as metadata};