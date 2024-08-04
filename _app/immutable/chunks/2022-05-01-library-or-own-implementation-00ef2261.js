import{S as Le,i as Me,s as Ce,e as s,t as n,a as h,c as l,b as u,d as r,f as t,g as y,h as i,j as a,n as ce}from"./index-794e8e40.js";function Fe(Je){let d,V,S,f,X,B,p,$,z,b,ee,W,w,te,D,c,oe,J,v,ie,L,g,ae,M,k,ne,C,_,re,F,E,se,R,I,le,U,x,ue,Y,T,he,O,H,ye,Z,P,de,G,j,me,K,q,fe,N,m,pe,A,be,we;return{c(){d=s("p"),V=n("Recently, someone shared that libraries are great and that we should always use them."),S=h(),f=s("p"),X=n("It got me thinking about a recent Front End Happy Hour podcast that I listened to which was debating about the same thing:"),B=h(),p=s("p"),$=n("When would you use a library vs when would you write your own implementation?"),z=h(),b=s("p"),ee=n("Like with most questions, the answer is: it depends."),W=h(),w=s("h3"),te=n("How many people are working on it?"),D=h(),c=s("p"),oe=n("If it’s just you, you get to make that choice. If you’re working on a project that’s got multiple developers and you’re in a team, then chances are you’ll probably need to make that decision together."),J=h(),v=s("h3"),ie=n("Learning curve and onboarding"),L=h(),g=s("p"),ae=n(`Some libraries have a learning curve, others may be picked up in 5-10 minutes. This is a consideration if you are working on a tight deadline and how quickly you’d like to onboard new developers onto your tech stack. Depending on what the library is used for, you might be able to short cut this using native solutions (such as built in JavaScript functions) that developers already know about.
An example is redux which is a library for handling global state management. Explaining actions, reducers and dispatchers to junior developers takes some time to understand and learn before they can start contributing to the project. However, it may be worth investing in it because it is widely used and is in your current application.`),M=h(),k=s("h3"),ne=n("Avoid reinventing the wheel, unless you can prove it’s worth the investment"),C=h(),_=s("p"),re=n("The great thing about libraries is that they’re most likely written by the experts who have analysed and know the problem you’re trying to solve well. They may have made the mistakes and have avoided pitfalls from the knowledge they have accumulated over the years. It doesn’t hurt to leverage them. But don’t let that put you off making your own at times - if you want to look into more performant solutions, or can’t find something that exactly fits your needs or use case, you’re better off building your own. That’s if you have the time."),F=h(),E=s("h3"),se=n("Whether the library you opt to use for has good maintenance, documentation and support"),R=h(),I=s("p"),le=n(`The most frustrating thing about using a library is when there is no documentation or maintenance. That makes it about 1000 times harder for you to debug or be able to ask questions. If it is well maintained, you may get the support you need and if many users are using it, chances are the problem you run into may have already been solved.
Maintenance is also important on a security level - if a library gets deprecated or no longer gets maintained, that’s on you to decide when to get rid of it. Assess the risks frequently and don’t leave yourself exposed.`),U=h(),x=s("h3"),ue=n("Time"),Y=h(),T=s("p"),he=n("If you’ve got ample time to be writing your own implementation and you have reasons to go down this route, go for it. If you’re working on a product and you’ve got a set deadline that must be met, then you’re better off using libraries that you’re already familiar with."),O=h(),H=s("h3"),ye=n("Understand the problem that you’re trying to solve and the different libraries that act as different solutions to that problem."),Z=h(),P=s("p"),de=n("When you install a package or a library, ask yourself why do you need this and what problem is it going to help me solve? If you can understand the problem, you’ll be able to see whether you need this library or not."),G=h(),j=s("h3"),me=n("Performance and bundle sizes"),K=h(),q=s("p"),fe=n(`Be aware of the sizes of the libraries you are installing. If you’re installing a library that’s MBs big, that’s how much is adding to your bundle size when you build the application. This will mean a longer build time which may slow down the deployment / release cycle. Similarly, think about performance of these libraries - are they necessary for the application, or are they slowing you down? If you do find a bottleneck somewhere in the codebase, do consider where it is and whether it’s your code or a library’s util that’s slowing the app down.
Also, if it’s only being used in 1 place (or if you’re only using 1 util out of the many provided by the library) - do you necessarily need that library? You might be able to get rid of it and consider your own implementation.`),N=h(),m=s("p"),pe=n("Just something to think about before you run "),A=s("code"),be=n("npm i -D package-to-add"),we=n(".")},l(e){d=l(e,"P",{});var o=u(d);V=r(o,"Recently, someone shared that libraries are great and that we should always use them."),o.forEach(t),S=y(e),f=l(e,"P",{});var ve=u(f);X=r(ve,"It got me thinking about a recent Front End Happy Hour podcast that I listened to which was debating about the same thing:"),ve.forEach(t),B=y(e),p=l(e,"P",{});var ge=u(p);$=r(ge,"When would you use a library vs when would you write your own implementation?"),ge.forEach(t),z=y(e),b=l(e,"P",{});var ke=u(b);ee=r(ke,"Like with most questions, the answer is: it depends."),ke.forEach(t),W=y(e),w=l(e,"H3",{});var _e=u(w);te=r(_e,"How many people are working on it?"),_e.forEach(t),D=y(e),c=l(e,"P",{});var Ee=u(c);oe=r(Ee,"If it’s just you, you get to make that choice. If you’re working on a project that’s got multiple developers and you’re in a team, then chances are you’ll probably need to make that decision together."),Ee.forEach(t),J=y(e),v=l(e,"H3",{});var Ie=u(v);ie=r(Ie,"Learning curve and onboarding"),Ie.forEach(t),L=y(e),g=l(e,"P",{});var xe=u(g);ae=r(xe,`Some libraries have a learning curve, others may be picked up in 5-10 minutes. This is a consideration if you are working on a tight deadline and how quickly you’d like to onboard new developers onto your tech stack. Depending on what the library is used for, you might be able to short cut this using native solutions (such as built in JavaScript functions) that developers already know about.
An example is redux which is a library for handling global state management. Explaining actions, reducers and dispatchers to junior developers takes some time to understand and learn before they can start contributing to the project. However, it may be worth investing in it because it is widely used and is in your current application.`),xe.forEach(t),M=y(e),k=l(e,"H3",{});var Te=u(k);ne=r(Te,"Avoid reinventing the wheel, unless you can prove it’s worth the investment"),Te.forEach(t),C=y(e),_=l(e,"P",{});var He=u(_);re=r(He,"The great thing about libraries is that they’re most likely written by the experts who have analysed and know the problem you’re trying to solve well. They may have made the mistakes and have avoided pitfalls from the knowledge they have accumulated over the years. It doesn’t hurt to leverage them. But don’t let that put you off making your own at times - if you want to look into more performant solutions, or can’t find something that exactly fits your needs or use case, you’re better off building your own. That’s if you have the time."),He.forEach(t),F=y(e),E=l(e,"H3",{});var Pe=u(E);se=r(Pe,"Whether the library you opt to use for has good maintenance, documentation and support"),Pe.forEach(t),R=y(e),I=l(e,"P",{});var je=u(I);le=r(je,`The most frustrating thing about using a library is when there is no documentation or maintenance. That makes it about 1000 times harder for you to debug or be able to ask questions. If it is well maintained, you may get the support you need and if many users are using it, chances are the problem you run into may have already been solved.
Maintenance is also important on a security level - if a library gets deprecated or no longer gets maintained, that’s on you to decide when to get rid of it. Assess the risks frequently and don’t leave yourself exposed.`),je.forEach(t),U=y(e),x=l(e,"H3",{});var qe=u(x);ue=r(qe,"Time"),qe.forEach(t),Y=y(e),T=l(e,"P",{});var Ae=u(T);he=r(Ae,"If you’ve got ample time to be writing your own implementation and you have reasons to go down this route, go for it. If you’re working on a product and you’ve got a set deadline that must be met, then you’re better off using libraries that you’re already familiar with."),Ae.forEach(t),O=y(e),H=l(e,"H3",{});var Se=u(H);ye=r(Se,"Understand the problem that you’re trying to solve and the different libraries that act as different solutions to that problem."),Se.forEach(t),Z=y(e),P=l(e,"P",{});var Be=u(P);de=r(Be,"When you install a package or a library, ask yourself why do you need this and what problem is it going to help me solve? If you can understand the problem, you’ll be able to see whether you need this library or not."),Be.forEach(t),G=y(e),j=l(e,"H3",{});var ze=u(j);me=r(ze,"Performance and bundle sizes"),ze.forEach(t),K=y(e),q=l(e,"P",{});var We=u(q);fe=r(We,`Be aware of the sizes of the libraries you are installing. If you’re installing a library that’s MBs big, that’s how much is adding to your bundle size when you build the application. This will mean a longer build time which may slow down the deployment / release cycle. Similarly, think about performance of these libraries - are they necessary for the application, or are they slowing you down? If you do find a bottleneck somewhere in the codebase, do consider where it is and whether it’s your code or a library’s util that’s slowing the app down.
Also, if it’s only being used in 1 place (or if you’re only using 1 util out of the many provided by the library) - do you necessarily need that library? You might be able to get rid of it and consider your own implementation.`),We.forEach(t),N=y(e),m=l(e,"P",{});var Q=u(m);pe=r(Q,"Just something to think about before you run "),A=l(Q,"CODE",{});var De=u(A);be=r(De,"npm i -D package-to-add"),De.forEach(t),we=r(Q,"."),Q.forEach(t)},m(e,o){i(e,d,o),a(d,V),i(e,S,o),i(e,f,o),a(f,X),i(e,B,o),i(e,p,o),a(p,$),i(e,z,o),i(e,b,o),a(b,ee),i(e,W,o),i(e,w,o),a(w,te),i(e,D,o),i(e,c,o),a(c,oe),i(e,J,o),i(e,v,o),a(v,ie),i(e,L,o),i(e,g,o),a(g,ae),i(e,M,o),i(e,k,o),a(k,ne),i(e,C,o),i(e,_,o),a(_,re),i(e,F,o),i(e,E,o),a(E,se),i(e,R,o),i(e,I,o),a(I,le),i(e,U,o),i(e,x,o),a(x,ue),i(e,Y,o),i(e,T,o),a(T,he),i(e,O,o),i(e,H,o),a(H,ye),i(e,Z,o),i(e,P,o),a(P,de),i(e,G,o),i(e,j,o),a(j,me),i(e,K,o),i(e,q,o),a(q,fe),i(e,N,o),i(e,m,o),a(m,pe),a(m,A),a(A,be),a(m,we)},p:ce,i:ce,o:ce,d(e){e&&t(d),e&&t(S),e&&t(f),e&&t(B),e&&t(p),e&&t(z),e&&t(b),e&&t(W),e&&t(w),e&&t(D),e&&t(c),e&&t(J),e&&t(v),e&&t(L),e&&t(g),e&&t(M),e&&t(k),e&&t(C),e&&t(_),e&&t(F),e&&t(E),e&&t(R),e&&t(I),e&&t(U),e&&t(x),e&&t(Y),e&&t(T),e&&t(O),e&&t(H),e&&t(Z),e&&t(P),e&&t(G),e&&t(j),e&&t(K),e&&t(q),e&&t(N),e&&t(m)}}}const Ue={title:"Before you install that package - do you really need it?",date:"2022-05-01T17:00:00.000Z"};class Ye extends Le{constructor(d){super(),Me(this,d,null,Fe,Ce,{})}}export{Ye as default,Ue as metadata};