(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{72:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),i=n(56),a=n.n(i),s=(n(72),n(23)),o=n(20),l=n(9),j=n(65),d=n(93),b=n(95),h=n(92),u=n(64),x=n(57),p=n.n(x),O=n(2);var m=function(e){return Object(O.jsxs)("div",{class:"container",children:[Object(O.jsx)("h1",{children:" Step 1: Click your preferred CLIMATE please"}),Object(O.jsx)("p1",{children:Object(O.jsx)("buttonWarm",{onClick:e.nextStep,children:"WARM \ud83d\udd25"})}),Object(O.jsx)("p2",{children:Object(O.jsx)("buttonChilly",{onClick:e.nextStep,children:"CHILLY \ud83e\uddca"})}),Object(O.jsx)("p3",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"Next Step"})})]})};var f=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Step 2: What is your preferred TERRAIN?"}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"BEACH"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"INLAND"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.previousStep,children:"Previous Step"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"Next Step"})})]})};var v=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Step 3: Preferred transportation?"}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,type:"checkbox",children:"AIR"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"CAR"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"CRUISE"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"RV"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.previousStep,children:"Previous Step"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"Next Step"})})]})};var g=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Step 4: Preferred place to stay?"}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"HOTEL"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"HOSTEL"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"B\\&B"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.previousStep,children:"Previous Step"})}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{onClick:e.nextStep,children:"Next Step"})})]})},w=function(){return Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)(m,{}),Object(O.jsx)(f,{}),Object(O.jsx)(v,{}),Object(O.jsx)(g,{})]})})};var k,S,N=function(e){var t=e.children;return Object(O.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},y=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(N,{children:[Object(O.jsx)("h1",{children:"404 Page Not Found"}),Object(O.jsx)("h1",{children:Object(O.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},C=n(29),E=n(30),L=n.n(E),A=n(36),I=n(32),T=n(96),$=n(45),P=n(94),W=Object(P.a)(k||(k=Object($.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),R=Object(P.a)(S||(S=Object($.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),F=n(58),U=n(59),B=n(46),_=n.n(B),D=new(function(){function e(){Object(F.a)(this,e)}return Object(U.a)(e,[{key:"getProfile",value:function(){return _()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return _()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var H=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(I.a)(t,2),r=n[0],i=n[1],a=Object(T.a)(W),l=Object(I.a)(a,2),j=l[0],d=l[1].error,b=function(){var e=Object(A.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,D.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,n=t.name,c=t.value;i(Object(s.a)(Object(s.a)({},r),{},Object(C.a)({},n,c)))};return Object(O.jsxs)("div",{className:"container my-1",children:[Object(O.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(O.jsx)("h2",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:b,children:[Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(O.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(O.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),d?Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(O.jsx)("div",{className:"flex-row flex-end",children:Object(O.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var M=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(I.a)(t,2),r=n[0],i=n[1],a=Object(T.a)(R),l=Object(I.a)(a,1)[0],j=function(){var e=Object(A.a)(L.a.mark((function e(t){var n,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,D.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.name,c=t.value;i(Object(s.a)(Object(s.a)({},r),{},Object(C.a)({},n,c)))};return Object(O.jsxs)("div",{className:"container my-1",children:[Object(O.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(O.jsx)("h2",{children:"Signup"}),Object(O.jsxs)("form",{onSubmit:j,children:[Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(O.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(O.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(O.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})]}),Object(O.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(O.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(O.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(O.jsx)("div",{className:"flex-row flex-end",children:Object(O.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var G=function(){return Object(O.jsxs)("header",{className:"flex-row px-1",children:[Object(O.jsx)("h1",{children:Object(O.jsxs)(o.b,{to:"/",children:[Object(O.jsx)("span",{role:"img","aria-label":"shopping bag"}),"Smart Poor travelpackage"]})}),Object(O.jsx)("nav",{children:D.loggedIn()?Object(O.jsx)("ul",{className:"flex-row",children:Object(O.jsx)("li",{className:"mx-1",children:Object(O.jsx)("a",{href:"/",onClick:function(){return D.logout()},children:"Logout"})})}):Object(O.jsxs)("ul",{className:"flex-row",children:[Object(O.jsx)("li",{className:"mx-1",children:Object(O.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(O.jsx)("li",{className:"mx-1",children:Object(O.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})},J=Object(j.a)({uri:"/graphql"}),q=Object(u.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),z=new d.a({link:q.concat(J),cache:new b.a});var V=function(){return Object(O.jsx)(h.a,{client:z,children:Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(G,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(O.jsx)(l.a,{exact:!0,path:"/login",component:H}),Object(O.jsx)(l.a,{exact:!0,path:"/signup",component:M}),Object(O.jsx)(l.a,{component:y})]})]})})})},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[82,1,2]]]);
//# sourceMappingURL=main.cf6396c8.chunk.js.map