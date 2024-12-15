import{S as qs,i as gs,s as ks,e as l,t as r,a as u,c as a,b as i,d as s,f as o,g as d,k as f,h as n,j as t,n as wr}from"./index-794e8e40.js";function Ts(ys){let S,Rt,je,K,qt,Fe,Q,pe,gt,Ke,E,kt,me,Tt,Pt,we,Dt,It,Qe,b,zt,ve,Ht,xt,ye,Lt,Mt,Ze,Z,Yt,$e,C,Gt,Ee,Nt,Wt,be,Ut,Bt,Je,$,Xt,Ve,J,jt,et,V,Ft,tt,_,R,Ce,Kt,Qt,_e,Zt,$t,Jt,c,Oe,Vt,eo,Ae,to,oo,Se,ro,so,Re,lo,ao,qe,io,ho,ge,no,uo,fo,ee,ke,co,po,ot,q,mo,I,wo,vo,rt,te,yo,st,w,Eo,z,bo,Co,Te,_o,Oo,Pe,Ao,So,lt,oe,Ro,at,H,Es=`<code class="language-undefined">headers: &#123;
 &quot;Allow-Control-Access-Origin&quot;: &quot;*&quot;
&#125;
</code>`,it,re,qo,ht,v,go,De,ko,To,Ie,Po,Do,ze,Io,zo,nt,x,bs=`<code class="language-undefined">headers: &#123;
 &quot;Allow-Control-Access-Origin&quot;: origin, // origin being the domain the request came from
 &quot;Allow-Control-Access-Credentials&quot;: true,
&#125;
</code>`,ut,g,Ho,He,xo,Lo,dt,L,Cs=`<code class="language-undefined">// Suppose you have a fetch request...

const data = await fetch(url, &#123;
 headers: &#123;
    Content-Type: &quot;application/json&quot;,
    X-Requested-With: &quot;XMLHttpRequest&quot;,
    Authorization: &#96;Bearer $&#123;token&#125;&#96;,
    token,
 &#125;,
&#125;);

// serverless.yml should have

cors:
 headers:
 - Content-Type
 - Authorization
 - X-Requested-With
 - token
 - ## any other custom headers
</code>`,ft,O,Mo,xe,Yo,Go,Le,No,Wo,ct,A,Uo,M,Bo,Xo,Me,jo,Fo,pt,Y,_s=`<code class="language-undefined"> auth:
 name: auth ## or the name you referenced your custom authorizer function to be
 identitySource: method.request.header.Authorization
</code>`,mt,se,Ko,wt,k,Qo,G,Zo,$o,vt,le,Jo,yt,T,Vo,N,er,tr,Et,ae,or,bt,ie,rr,Ct,p,Ye,W,sr,lr,Ge,U,ar,ir,Ne,B,hr,nr,We,X,ur,dr,Ue,j,fr,cr,Be,F,pr;return{c(){S=l("p"),Rt=r("For any web developer, you should know about CORs - what, why and how to fix the errors that appear in the browser."),je=u(),K=l("p"),qt=r("CORS stands for Cross-origin resource sharing. As defined by MDN:"),Fe=u(),Q=l("blockquote"),pe=l("p"),gt=r("Cross-origin resource sharing is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, port) than its own from which a browser should permit loading of resources. The browser makes a “preflight” request to the server hosting the cross-origin resource to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. (MDN)"),Ke=u(),E=l("p"),kt=r("This is the mechanism required for when if you have a webpage that has a domain "),me=l("code"),Tt=r("https://app.com"),Pt=r(", and another domain "),we=l("code"),Dt=r("http://api.com"),It=r(` which contains content that it needs to access or fetch / query data from.
A lot of the time when we build web applications, we will use CORS as the domain for the front-end would be different to that of the backend.`),Qe=u(),b=l("p"),zt=r("You could save yourself all the trouble by using same-origin requests if you had all of them under the same domain (i.e. "),ve=l("code"),Ht=r("http://app.com"),xt=r(" and "),ye=l("code"),Lt=r("http://app.com/api"),Mt=r(")."),Ze=u(),Z=l("p"),Yt=r("Why is this important? Mostly due to security. It needs to make sure you have access to whatever it is you’re trying to get, load and validates each request and response."),$e=u(),C=l("p"),Gt=r("Whenever you use "),Ee=l("code"),Nt=r("fetch"),Wt=r(" or "),be=l("code"),Ut=r("XMLTHttpRequest"),Bt=r(", CORS would be enabled if you are querying from different origins/domains."),Je=u(),$=l("h2"),Xt=r("Common CORS issues"),Ve=u(),J=l("p"),jt=r("Most of the time the browser can be pretty clear on what’s missing on the response/request when it comes to CORS issues and errors. However, due to security reasons, you won’t be able to see specifically what’s wrong. You can only infer from what the browser is telling you."),et=u(),V=l("p"),Ft=r("Some common issues with solutions are listed below:"),tt=u(),_=l("ul"),R=l("li"),Ce=l("code"),Kt=r("CORS header 'Access-Control-Allow-Origin' missing"),Qt=r(" - generally just means the header of the response is missing the "),_e=l("code"),Zt=r("Access-Control-Allow-Origin"),$t=r(" parameter."),Jt=u(),c=l("li"),Oe=l("code"),Vt=r("Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’"),eo=r(" - means you probably included "),Ae=l("code"),to=r("withCredentials"),oo=r(" or "),Se=l("code"),ro=r("credentials"),so=r(" (set to be "),Re=l("code"),lo=r("include"),ao=r(") in the request and the "),qe=l("code"),io=r("Access-Control-Allow-Origin"),ho=r(" value is "),ge=l("code"),no=r("*"),uo=r(" which cannot work for credentials. You’ll need to set it to either an allowed origin or the origin from which you originally sent the request."),fo=u(),ee=l("li"),ke=l("code"),co=r("No 'Access-Control-Allow-Origin' header is present on the requested resource"),po=r(" - This one’s tricky! It could mean the header of the response is missing, or some other error that’s happening but the browser registers it as a CORS error."),ot=u(),q=l("p"),mo=r("And there’s a whole bunch of other issues listed "),I=l("a"),wo=r("here"),vo=r(" on MDN."),rt=u(),te=l("h2"),yo=r("Using CORS with the Serverless framework"),st=u(),w=l("p"),Eo=r("If you are working with the "),z=l("a"),bo=r("serverless framework"),Co=r(", it’s simple enough to enable "),Te=l("code"),_o=r("cors: true"),Oo=r(" in the "),Pe=l("code"),Ao=r("serverless.yml"),So=r(" file."),lt=u(),oe=l("p"),Ro=r("You’ll need to make sure in the headers of the response have:"),at=u(),H=l("pre"),it=u(),re=l("p"),qo=r("Generally, you can use this for public endpoints."),ht=u(),v=l("p"),go=r("However, if you’re requesting something with "),De=l("code"),ko=r("credentials: true"),To=r(" (assuming you have cookies), you’ll need to add "),Ie=l("code"),Po=r("allowCredentials: true"),Do=r(" to the "),ze=l("code"),Io=r("serverless.yml"),zo=r(" file and include these headers in the response:"),nt=u(),x=l("pre"),ut=u(),g=l("p"),Ho=r("If you have additional custom headers in the request, you’ll need to specify these in the "),He=l("code"),xo=r("serverless.yml"),Lo=r("."),dt=u(),L=l("pre"),ft=u(),O=l("p"),Mo=r("You could also use "),xe=l("code"),Yo=r("middy/http-cors"),Go=r(" or "),Le=l("code"),No=r("cors"),Wo=r(" packages to handle CORS."),ct=u(),A=l("p"),Uo=r("If you’re using a custom authorizer, there’s a "),M=l("a"),Bo=r("working example using Auth0"),Xo=r(" in the serverless GitHub examples page. You might need this in the "),Me=l("code"),jo=r("serverless.yml"),Fo=r(":"),pt=u(),Y=l("pre"),mt=u(),se=l("p"),Ko=r("You’ll also need to manage API Gateway responses and add this to handle any errors through the custom authorizer."),wt=u(),k=l("p"),Qo=r("If you are adding the custom authorizer, it will likely get cached, so make sure that the resource that gets returned doesn’t get cached if you are attaching it to several endpoints, otherwise, this will throw a CORS issue regardless (when the reality is that it’s NOT a CORS issue at all). You can read more about custom authorizers in serverless "),G=l("a"),Zo=r("here"),$o=r("."),vt=u(),le=l("p"),Jo=r("A way of debugging is to remove the authorizer to check that it’s not the authorizer causing the CORS error. If you find that one of your functions isn’t being called at all and your authorizer is being called, it’s likely either all the errors haven’t been handled properly with the correct headers, or the authorizer has a problem when passing the resource on to the function."),yt=u(),T=l("p"),Vo=r("There’s an awesome guide written "),N=l("a"),er=r("here"),tr=r(" - it’s super clear and practically a lifesaver if you are running into CORS issues with serverless."),Et=u(),ae=l("p"),or=r("It’s been a challenge running into CORS and fighting with it for a few days!"),bt=u(),ie=l("h2"),rr=r("References / resources"),Ct=u(),p=l("ul"),Ye=l("li"),W=l("a"),sr=r("HTTP CORS - MDN"),lr=u(),Ge=l("li"),U=l("a"),ar=r("HTTP CORS Errors - MDN"),ir=u(),Ne=l("li"),B=l("a"),hr=r("Serverless Framework"),nr=u(),We=l("li"),X=l("a"),ur=r("Serverless’ example on custom authorizer with Auth0 - GitHub / Serverless"),dr=u(),Ue=l("li"),j=l("a"),fr=r("The Complete Guide to Custom Authorizers with AWS Lambda and API Gateway - Alex DeBrie"),cr=u(),Be=l("li"),F=l("a"),pr=r("Your CORS and API Gateway survival guide - Alex DeBrie (Serverless)"),this.h()},l(e){S=a(e,"P",{});var h=i(S);Rt=s(h,"For any web developer, you should know about CORs - what, why and how to fix the errors that appear in the browser."),h.forEach(o),je=d(e),K=a(e,"P",{});var vr=i(K);qt=s(vr,"CORS stands for Cross-origin resource sharing. As defined by MDN:"),vr.forEach(o),Fe=d(e),Q=a(e,"BLOCKQUOTE",{});var yr=i(Q);pe=a(yr,"P",{});var Er=i(pe);gt=s(Er,"Cross-origin resource sharing is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, port) than its own from which a browser should permit loading of resources. The browser makes a “preflight” request to the server hosting the cross-origin resource to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. (MDN)"),Er.forEach(o),yr.forEach(o),Ke=d(e),E=a(e,"P",{});var he=i(E);kt=s(he,"This is the mechanism required for when if you have a webpage that has a domain "),me=a(he,"CODE",{});var br=i(me);Tt=s(br,"https://app.com"),br.forEach(o),Pt=s(he,", and another domain "),we=a(he,"CODE",{});var Cr=i(we);Dt=s(Cr,"http://api.com"),Cr.forEach(o),It=s(he,` which contains content that it needs to access or fetch / query data from.
A lot of the time when we build web applications, we will use CORS as the domain for the front-end would be different to that of the backend.`),he.forEach(o),Qe=d(e),b=a(e,"P",{});var ne=i(b);zt=s(ne,"You could save yourself all the trouble by using same-origin requests if you had all of them under the same domain (i.e. "),ve=a(ne,"CODE",{});var _r=i(ve);Ht=s(_r,"http://app.com"),_r.forEach(o),xt=s(ne," and "),ye=a(ne,"CODE",{});var Or=i(ye);Lt=s(Or,"http://app.com/api"),Or.forEach(o),Mt=s(ne,")."),ne.forEach(o),Ze=d(e),Z=a(e,"P",{});var Ar=i(Z);Yt=s(Ar,"Why is this important? Mostly due to security. It needs to make sure you have access to whatever it is you’re trying to get, load and validates each request and response."),Ar.forEach(o),$e=d(e),C=a(e,"P",{});var ue=i(C);Gt=s(ue,"Whenever you use "),Ee=a(ue,"CODE",{});var Sr=i(Ee);Nt=s(Sr,"fetch"),Sr.forEach(o),Wt=s(ue," or "),be=a(ue,"CODE",{});var Rr=i(be);Ut=s(Rr,"XMLTHttpRequest"),Rr.forEach(o),Bt=s(ue,", CORS would be enabled if you are querying from different origins/domains."),ue.forEach(o),Je=d(e),$=a(e,"H2",{});var qr=i($);Xt=s(qr,"Common CORS issues"),qr.forEach(o),Ve=d(e),J=a(e,"P",{});var gr=i(J);jt=s(gr,"Most of the time the browser can be pretty clear on what’s missing on the response/request when it comes to CORS issues and errors. However, due to security reasons, you won’t be able to see specifically what’s wrong. You can only infer from what the browser is telling you."),gr.forEach(o),et=d(e),V=a(e,"P",{});var kr=i(V);Ft=s(kr,"Some common issues with solutions are listed below:"),kr.forEach(o),tt=d(e),_=a(e,"UL",{});var de=i(_);R=a(de,"LI",{});var Xe=i(R);Ce=a(Xe,"CODE",{});var Tr=i(Ce);Kt=s(Tr,"CORS header 'Access-Control-Allow-Origin' missing"),Tr.forEach(o),Qt=s(Xe," - generally just means the header of the response is missing the "),_e=a(Xe,"CODE",{});var Pr=i(_e);Zt=s(Pr,"Access-Control-Allow-Origin"),Pr.forEach(o),$t=s(Xe," parameter."),Xe.forEach(o),Jt=d(de),c=a(de,"LI",{});var m=i(c);Oe=a(m,"CODE",{});var Dr=i(Oe);Vt=s(Dr,"Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’"),Dr.forEach(o),eo=s(m," - means you probably included "),Ae=a(m,"CODE",{});var Ir=i(Ae);to=s(Ir,"withCredentials"),Ir.forEach(o),oo=s(m," or "),Se=a(m,"CODE",{});var zr=i(Se);ro=s(zr,"credentials"),zr.forEach(o),so=s(m," (set to be "),Re=a(m,"CODE",{});var Hr=i(Re);lo=s(Hr,"include"),Hr.forEach(o),ao=s(m,") in the request and the "),qe=a(m,"CODE",{});var xr=i(qe);io=s(xr,"Access-Control-Allow-Origin"),xr.forEach(o),ho=s(m," value is "),ge=a(m,"CODE",{});var Lr=i(ge);no=s(Lr,"*"),Lr.forEach(o),uo=s(m," which cannot work for credentials. You’ll need to set it to either an allowed origin or the origin from which you originally sent the request."),m.forEach(o),fo=d(de),ee=a(de,"LI",{});var mr=i(ee);ke=a(mr,"CODE",{});var Mr=i(ke);co=s(Mr,"No 'Access-Control-Allow-Origin' header is present on the requested resource"),Mr.forEach(o),po=s(mr," - This one’s tricky! It could mean the header of the response is missing, or some other error that’s happening but the browser registers it as a CORS error."),mr.forEach(o),de.forEach(o),ot=d(e),q=a(e,"P",{});var _t=i(q);mo=s(_t,"And there’s a whole bunch of other issues listed "),I=a(_t,"A",{href:!0,rel:!0});var Yr=i(I);wo=s(Yr,"here"),Yr.forEach(o),vo=s(_t," on MDN."),_t.forEach(o),rt=d(e),te=a(e,"H2",{});var Gr=i(te);yo=s(Gr,"Using CORS with the Serverless framework"),Gr.forEach(o),st=d(e),w=a(e,"P",{});var P=i(w);Eo=s(P,"If you are working with the "),z=a(P,"A",{href:!0,rel:!0});var Nr=i(z);bo=s(Nr,"serverless framework"),Nr.forEach(o),Co=s(P,", it’s simple enough to enable "),Te=a(P,"CODE",{});var Wr=i(Te);_o=s(Wr,"cors: true"),Wr.forEach(o),Oo=s(P," in the "),Pe=a(P,"CODE",{});var Ur=i(Pe);Ao=s(Ur,"serverless.yml"),Ur.forEach(o),So=s(P," file."),P.forEach(o),lt=d(e),oe=a(e,"P",{});var Br=i(oe);Ro=s(Br,"You’ll need to make sure in the headers of the response have:"),Br.forEach(o),at=d(e),H=a(e,"PRE",{class:!0});var Os=i(H);Os.forEach(o),it=d(e),re=a(e,"P",{});var Xr=i(re);qo=s(Xr,"Generally, you can use this for public endpoints."),Xr.forEach(o),ht=d(e),v=a(e,"P",{});var D=i(v);go=s(D,"However, if you’re requesting something with "),De=a(D,"CODE",{});var jr=i(De);ko=s(jr,"credentials: true"),jr.forEach(o),To=s(D," (assuming you have cookies), you’ll need to add "),Ie=a(D,"CODE",{});var Fr=i(Ie);Po=s(Fr,"allowCredentials: true"),Fr.forEach(o),Do=s(D," to the "),ze=a(D,"CODE",{});var Kr=i(ze);Io=s(Kr,"serverless.yml"),Kr.forEach(o),zo=s(D," file and include these headers in the response:"),D.forEach(o),nt=d(e),x=a(e,"PRE",{class:!0});var As=i(x);As.forEach(o),ut=d(e),g=a(e,"P",{});var Ot=i(g);Ho=s(Ot,"If you have additional custom headers in the request, you’ll need to specify these in the "),He=a(Ot,"CODE",{});var Qr=i(He);xo=s(Qr,"serverless.yml"),Qr.forEach(o),Lo=s(Ot,"."),Ot.forEach(o),dt=d(e),L=a(e,"PRE",{class:!0});var Ss=i(L);Ss.forEach(o),ft=d(e),O=a(e,"P",{});var fe=i(O);Mo=s(fe,"You could also use "),xe=a(fe,"CODE",{});var Zr=i(xe);Yo=s(Zr,"middy/http-cors"),Zr.forEach(o),Go=s(fe," or "),Le=a(fe,"CODE",{});var $r=i(Le);No=s($r,"cors"),$r.forEach(o),Wo=s(fe," packages to handle CORS."),fe.forEach(o),ct=d(e),A=a(e,"P",{});var ce=i(A);Uo=s(ce,"If you’re using a custom authorizer, there’s a "),M=a(ce,"A",{href:!0,rel:!0});var Jr=i(M);Bo=s(Jr,"working example using Auth0"),Jr.forEach(o),Xo=s(ce," in the serverless GitHub examples page. You might need this in the "),Me=a(ce,"CODE",{});var Vr=i(Me);jo=s(Vr,"serverless.yml"),Vr.forEach(o),Fo=s(ce,":"),ce.forEach(o),pt=d(e),Y=a(e,"PRE",{class:!0});var Rs=i(Y);Rs.forEach(o),mt=d(e),se=a(e,"P",{});var es=i(se);Ko=s(es,"You’ll also need to manage API Gateway responses and add this to handle any errors through the custom authorizer."),es.forEach(o),wt=d(e),k=a(e,"P",{});var At=i(k);Qo=s(At,"If you are adding the custom authorizer, it will likely get cached, so make sure that the resource that gets returned doesn’t get cached if you are attaching it to several endpoints, otherwise, this will throw a CORS issue regardless (when the reality is that it’s NOT a CORS issue at all). You can read more about custom authorizers in serverless "),G=a(At,"A",{href:!0,rel:!0});var ts=i(G);Zo=s(ts,"here"),ts.forEach(o),$o=s(At,"."),At.forEach(o),vt=d(e),le=a(e,"P",{});var os=i(le);Jo=s(os,"A way of debugging is to remove the authorizer to check that it’s not the authorizer causing the CORS error. If you find that one of your functions isn’t being called at all and your authorizer is being called, it’s likely either all the errors haven’t been handled properly with the correct headers, or the authorizer has a problem when passing the resource on to the function."),os.forEach(o),yt=d(e),T=a(e,"P",{});var St=i(T);Vo=s(St,"There’s an awesome guide written "),N=a(St,"A",{href:!0,rel:!0});var rs=i(N);er=s(rs,"here"),rs.forEach(o),tr=s(St," - it’s super clear and practically a lifesaver if you are running into CORS issues with serverless."),St.forEach(o),Et=d(e),ae=a(e,"P",{});var ss=i(ae);or=s(ss,"It’s been a challenge running into CORS and fighting with it for a few days!"),ss.forEach(o),bt=d(e),ie=a(e,"H2",{});var ls=i(ie);rr=s(ls,"References / resources"),ls.forEach(o),Ct=d(e),p=a(e,"UL",{});var y=i(p);Ye=a(y,"LI",{});var as=i(Ye);W=a(as,"A",{href:!0,rel:!0});var is=i(W);sr=s(is,"HTTP CORS - MDN"),is.forEach(o),as.forEach(o),lr=d(y),Ge=a(y,"LI",{});var hs=i(Ge);U=a(hs,"A",{href:!0,rel:!0});var ns=i(U);ar=s(ns,"HTTP CORS Errors - MDN"),ns.forEach(o),hs.forEach(o),ir=d(y),Ne=a(y,"LI",{});var us=i(Ne);B=a(us,"A",{href:!0,rel:!0});var ds=i(B);hr=s(ds,"Serverless Framework"),ds.forEach(o),us.forEach(o),nr=d(y),We=a(y,"LI",{});var fs=i(We);X=a(fs,"A",{href:!0,rel:!0});var cs=i(X);ur=s(cs,"Serverless’ example on custom authorizer with Auth0 - GitHub / Serverless"),cs.forEach(o),fs.forEach(o),dr=d(y),Ue=a(y,"LI",{});var ps=i(Ue);j=a(ps,"A",{href:!0,rel:!0});var ms=i(j);fr=s(ms,"The Complete Guide to Custom Authorizers with AWS Lambda and API Gateway - Alex DeBrie"),ms.forEach(o),ps.forEach(o),cr=d(y),Be=a(y,"LI",{});var ws=i(Be);F=a(ws,"A",{href:!0,rel:!0});var vs=i(F);pr=s(vs,"Your CORS and API Gateway survival guide - Alex DeBrie (Serverless)"),vs.forEach(o),ws.forEach(o),y.forEach(o),this.h()},h(){f(I,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors"),f(I,"rel","nofollow"),f(z,"href","https://www.serverless.com/"),f(z,"rel","nofollow"),f(H,"class","language-undefined"),f(x,"class","language-undefined"),f(L,"class","language-undefined"),f(M,"href","https://github.com/serverless/examples/tree/master/aws-node-auth0-custom-authorizers-api"),f(M,"rel","nofollow"),f(Y,"class","language-undefined"),f(G,"href","https://www.alexdebrie.com/posts/lambda-custom-authorizers/"),f(G,"rel","nofollow"),f(N,"href","https://www.serverless.com/blog/cors-api-gateway-survival-guide"),f(N,"rel","nofollow"),f(W,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"),f(W,"rel","nofollow"),f(U,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors"),f(U,"rel","nofollow"),f(B,"href","https://www.serverless.com/"),f(B,"rel","nofollow"),f(X,"href","https://github.com/serverless/examples/tree/master/aws-node-auth0-custom-authorizers-api"),f(X,"rel","nofollow"),f(j,"href","https://www.alexdebrie.com/posts/lambda-custom-authorizers/"),f(j,"rel","nofollow"),f(F,"href","https://www.serverless.com/blog/cors-api-gateway-survival-guide"),f(F,"rel","nofollow")},m(e,h){n(e,S,h),t(S,Rt),n(e,je,h),n(e,K,h),t(K,qt),n(e,Fe,h),n(e,Q,h),t(Q,pe),t(pe,gt),n(e,Ke,h),n(e,E,h),t(E,kt),t(E,me),t(me,Tt),t(E,Pt),t(E,we),t(we,Dt),t(E,It),n(e,Qe,h),n(e,b,h),t(b,zt),t(b,ve),t(ve,Ht),t(b,xt),t(b,ye),t(ye,Lt),t(b,Mt),n(e,Ze,h),n(e,Z,h),t(Z,Yt),n(e,$e,h),n(e,C,h),t(C,Gt),t(C,Ee),t(Ee,Nt),t(C,Wt),t(C,be),t(be,Ut),t(C,Bt),n(e,Je,h),n(e,$,h),t($,Xt),n(e,Ve,h),n(e,J,h),t(J,jt),n(e,et,h),n(e,V,h),t(V,Ft),n(e,tt,h),n(e,_,h),t(_,R),t(R,Ce),t(Ce,Kt),t(R,Qt),t(R,_e),t(_e,Zt),t(R,$t),t(_,Jt),t(_,c),t(c,Oe),t(Oe,Vt),t(c,eo),t(c,Ae),t(Ae,to),t(c,oo),t(c,Se),t(Se,ro),t(c,so),t(c,Re),t(Re,lo),t(c,ao),t(c,qe),t(qe,io),t(c,ho),t(c,ge),t(ge,no),t(c,uo),t(_,fo),t(_,ee),t(ee,ke),t(ke,co),t(ee,po),n(e,ot,h),n(e,q,h),t(q,mo),t(q,I),t(I,wo),t(q,vo),n(e,rt,h),n(e,te,h),t(te,yo),n(e,st,h),n(e,w,h),t(w,Eo),t(w,z),t(z,bo),t(w,Co),t(w,Te),t(Te,_o),t(w,Oo),t(w,Pe),t(Pe,Ao),t(w,So),n(e,lt,h),n(e,oe,h),t(oe,Ro),n(e,at,h),n(e,H,h),H.innerHTML=Es,n(e,it,h),n(e,re,h),t(re,qo),n(e,ht,h),n(e,v,h),t(v,go),t(v,De),t(De,ko),t(v,To),t(v,Ie),t(Ie,Po),t(v,Do),t(v,ze),t(ze,Io),t(v,zo),n(e,nt,h),n(e,x,h),x.innerHTML=bs,n(e,ut,h),n(e,g,h),t(g,Ho),t(g,He),t(He,xo),t(g,Lo),n(e,dt,h),n(e,L,h),L.innerHTML=Cs,n(e,ft,h),n(e,O,h),t(O,Mo),t(O,xe),t(xe,Yo),t(O,Go),t(O,Le),t(Le,No),t(O,Wo),n(e,ct,h),n(e,A,h),t(A,Uo),t(A,M),t(M,Bo),t(A,Xo),t(A,Me),t(Me,jo),t(A,Fo),n(e,pt,h),n(e,Y,h),Y.innerHTML=_s,n(e,mt,h),n(e,se,h),t(se,Ko),n(e,wt,h),n(e,k,h),t(k,Qo),t(k,G),t(G,Zo),t(k,$o),n(e,vt,h),n(e,le,h),t(le,Jo),n(e,yt,h),n(e,T,h),t(T,Vo),t(T,N),t(N,er),t(T,tr),n(e,Et,h),n(e,ae,h),t(ae,or),n(e,bt,h),n(e,ie,h),t(ie,rr),n(e,Ct,h),n(e,p,h),t(p,Ye),t(Ye,W),t(W,sr),t(p,lr),t(p,Ge),t(Ge,U),t(U,ar),t(p,ir),t(p,Ne),t(Ne,B),t(B,hr),t(p,nr),t(p,We),t(We,X),t(X,ur),t(p,dr),t(p,Ue),t(Ue,j),t(j,fr),t(p,cr),t(p,Be),t(Be,F),t(F,pr)},p:wr,i:wr,o:wr,d(e){e&&o(S),e&&o(je),e&&o(K),e&&o(Fe),e&&o(Q),e&&o(Ke),e&&o(E),e&&o(Qe),e&&o(b),e&&o(Ze),e&&o(Z),e&&o($e),e&&o(C),e&&o(Je),e&&o($),e&&o(Ve),e&&o(J),e&&o(et),e&&o(V),e&&o(tt),e&&o(_),e&&o(ot),e&&o(q),e&&o(rt),e&&o(te),e&&o(st),e&&o(w),e&&o(lt),e&&o(oe),e&&o(at),e&&o(H),e&&o(it),e&&o(re),e&&o(ht),e&&o(v),e&&o(nt),e&&o(x),e&&o(ut),e&&o(g),e&&o(dt),e&&o(L),e&&o(ft),e&&o(O),e&&o(ct),e&&o(A),e&&o(pt),e&&o(Y),e&&o(mt),e&&o(se),e&&o(wt),e&&o(k),e&&o(vt),e&&o(le),e&&o(yt),e&&o(T),e&&o(Et),e&&o(ae),e&&o(bt),e&&o(ie),e&&o(Ct),e&&o(p)}}}const Ds={title:"A brief overview on CORS",date:"2021-07-04T17:00:00.000Z"};class Is extends qs{constructor(S){super(),gs(this,S,null,Ts,ks,{})}}export{Is as default,Ds as metadata};
