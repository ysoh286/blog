import{S as ie,i as se,s as re,e as s,t as l,a as u,c as r,b as n,d as h,f as t,g as f,h as a,j as i,n as M}from"./index-794e8e40.js";function ne(ae){let c,q,E,w,C,A,y,S,W,p,U,j,m,Z,P,b,z,T,g,B,L,v,D,R,d,_,F,G,x,H,J,I,K;return{c(){c=s("p"),q=l("While getting rid of technical debt isn’t exactly the most fun, it’s a pretty important skill to have for any developer to have when diving into a codebase."),E=u(),w=s("p"),C=l("Recently, I ran into an issue of trying to get rid of a utility function from a 3rd party library that was used in our codebase."),A=u(),y=s("p"),S=l("I had a solution - but it was a sloppy one. Although it did the job, it felt flaky and incorrect. I had written it in haste after being so close to removing the library. It was only 100+ changes in the PR - surely it could be a low risk compromise?"),W=u(),p=s("p"),U=l(`As expected, it didn’t get past code review.
Even though I was eager and desperate to get rid of this library from our codebase, other peers had the same problem with the replacement written - it should’ve been a utility, or an extension of one of the utilities we currently have in-house, and be able to handle all use cases. As days went by, the longer I stewed on it, it seemed more like a terrible idea despite knowing it would only affect 2 places.`),j=u(),m=s("p"),Z=l(`Except the problem was - when we actually sat down to write the algorithm, it just sounded like a bad idea in general. Why should we try recreate 2 types (both arrays and objects, when exactly would you create an array for a nested situation and when for an object, what if the said array didn’t exist in the first place? What would it do?). There were too many cases to cover, and it was too complex.
And you know what that means - generally if something’s incredibly complex for something so simple, it’s probably a bad idea or very likely a bad implementation would come through.`),P=u(),b=s("p"),z=l(`Instead, I took a different approach. What about the 2 cases that it was being used in - what if there was a code smell of some sort there?
Turns out we were doing unnecessary transformations in both cases with nested data structures that ended up being processed into flat structures. Instead of creating a nested one only to flatten it, why not just go straight to the flat one? We went with that, got rid of using the utility in those 2 places which then allowed us to finally remove the 3rd party library altogether from our codebase.`),T=u(),g=s("p"),B=l("Although it took an extra sprint (2 weeks) to figure this out, the solution was less risky. As engineers, we often forget that as much as we love to write and refactor code, we need to make sure it works and minimise the number of bugs we introduce into production. Cutting corners always has its consequences."),L=u(),v=s("p"),D=l("Lessons learned:"),R=u(),d=s("ul"),_=s("li"),F=l("When we struggle to write an algorithm that does too much or is unpredictable, it’s probably going to cause more headaches than solve your problem"),G=u(),x=s("li"),H=l("Assess the situation if you really do need it"),J=u(),I=s("li"),K=l("Trust your gut and take your time (if you feel pressure to finish something, ask yourself whether the risk is worth it - can you bear to maintain that risk?)")},l(e){c=r(e,"P",{});var o=n(c);q=h(o,"While getting rid of technical debt isn’t exactly the most fun, it’s a pretty important skill to have for any developer to have when diving into a codebase."),o.forEach(t),E=f(e),w=r(e,"P",{});var N=n(w);C=h(N,"Recently, I ran into an issue of trying to get rid of a utility function from a 3rd party library that was used in our codebase."),N.forEach(t),A=f(e),y=r(e,"P",{});var O=n(y);S=h(O,"I had a solution - but it was a sloppy one. Although it did the job, it felt flaky and incorrect. I had written it in haste after being so close to removing the library. It was only 100+ changes in the PR - surely it could be a low risk compromise?"),O.forEach(t),W=f(e),p=r(e,"P",{});var Q=n(p);U=h(Q,`As expected, it didn’t get past code review.
Even though I was eager and desperate to get rid of this library from our codebase, other peers had the same problem with the replacement written - it should’ve been a utility, or an extension of one of the utilities we currently have in-house, and be able to handle all use cases. As days went by, the longer I stewed on it, it seemed more like a terrible idea despite knowing it would only affect 2 places.`),Q.forEach(t),j=f(e),m=r(e,"P",{});var V=n(m);Z=h(V,`Except the problem was - when we actually sat down to write the algorithm, it just sounded like a bad idea in general. Why should we try recreate 2 types (both arrays and objects, when exactly would you create an array for a nested situation and when for an object, what if the said array didn’t exist in the first place? What would it do?). There were too many cases to cover, and it was too complex.
And you know what that means - generally if something’s incredibly complex for something so simple, it’s probably a bad idea or very likely a bad implementation would come through.`),V.forEach(t),P=f(e),b=r(e,"P",{});var X=n(b);z=h(X,`Instead, I took a different approach. What about the 2 cases that it was being used in - what if there was a code smell of some sort there?
Turns out we were doing unnecessary transformations in both cases with nested data structures that ended up being processed into flat structures. Instead of creating a nested one only to flatten it, why not just go straight to the flat one? We went with that, got rid of using the utility in those 2 places which then allowed us to finally remove the 3rd party library altogether from our codebase.`),X.forEach(t),T=f(e),g=r(e,"P",{});var Y=n(g);B=h(Y,"Although it took an extra sprint (2 weeks) to figure this out, the solution was less risky. As engineers, we often forget that as much as we love to write and refactor code, we need to make sure it works and minimise the number of bugs we introduce into production. Cutting corners always has its consequences."),Y.forEach(t),L=f(e),v=r(e,"P",{});var $=n(v);D=h($,"Lessons learned:"),$.forEach(t),R=f(e),d=r(e,"UL",{});var k=n(d);_=r(k,"LI",{});var ee=n(_);F=h(ee,"When we struggle to write an algorithm that does too much or is unpredictable, it’s probably going to cause more headaches than solve your problem"),ee.forEach(t),G=f(k),x=r(k,"LI",{});var te=n(x);H=h(te,"Assess the situation if you really do need it"),te.forEach(t),J=f(k),I=r(k,"LI",{});var oe=n(I);K=h(oe,"Trust your gut and take your time (if you feel pressure to finish something, ask yourself whether the risk is worth it - can you bear to maintain that risk?)"),oe.forEach(t),k.forEach(t)},m(e,o){a(e,c,o),i(c,q),a(e,E,o),a(e,w,o),i(w,C),a(e,A,o),a(e,y,o),i(y,S),a(e,W,o),a(e,p,o),i(p,U),a(e,j,o),a(e,m,o),i(m,Z),a(e,P,o),a(e,b,o),i(b,z),a(e,T,o),a(e,g,o),i(g,B),a(e,L,o),a(e,v,o),i(v,D),a(e,R,o),a(e,d,o),i(d,_),i(_,F),i(d,G),i(d,x),i(x,H),i(d,J),i(d,I),i(I,K)},p:M,i:M,o:M,d(e){e&&t(c),e&&t(E),e&&t(w),e&&t(A),e&&t(y),e&&t(W),e&&t(p),e&&t(j),e&&t(m),e&&t(P),e&&t(b),e&&t(T),e&&t(g),e&&t(L),e&&t(v),e&&t(R),e&&t(d)}}}const he={title:"When you struggle to write an algorithm...",date:"2023-01-18T14:00:08.000Z"};class de extends ie{constructor(c){super(),se(this,c,null,ne,re,{})}}export{de as default,he as metadata};
