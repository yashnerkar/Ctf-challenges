(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{20:function(e,t,n){},40:function(e,t){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(33),r=n.n(c),i=n(9),l=n(12),o=n(3),d=n(10),b=n.n(d),h=n(16),j=n(17),m=n.n(j),u=(n(65),n(66),n(0));var x=function(e){var t=e.get,n=e.showAlert,a=Object(s.useState)(""),c=Object(i.a)(a,2),r=c[0],l=c[1],o=Object(s.useState)([]),d=Object(i.a)(o,2),j=d[0],x=d[1];Object(s.useEffect)((function(){var e=function(){var e=Object(h.a)(b.a.mark((function e(n){var s,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/site-target",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t}),credentials:"include"});case 2:return s=e.sent,e.next=5,s.json();case 5:a=e.sent,c=a.map((function(e){return e.target})),x(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e()}),[t]),j.map((function(e){var t=document.getElementById(e),n=document.createElement("i");return n.classList.add("bi"),n.classList.add("bi-check-circle-fill"),n.style.color="greenyellow",n.style.position="absolute",n.style.fontSize="30px",n.style.top="10px",n.style.right="20px",t.appendChild(n)}));var p=function(){var e=Object(h.a)(b.a.mark((function e(s){var a,c,i,o,d,h,j,u,x;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),a=r.trim(),c=m.a.enc.Hex.parse("000102030405060708090a0b0c0d0e0f"),i=m.a.enc.Hex.parse("101112131415161718191a1b1c1d1e1f"),o=m.a.mode.CFB,d=m.a.pad.AnsiX923,h=m.a.AES.encrypt(a,c,{iv:i,mode:o,padding:d}).toString(),j=["ZI2GWYKhZRXgXN5n5/D3/UeUze7Pr1MSc2xFRyBn8WA=","ZI2GWYKhZRXzYYB2/PXm5gx+HZbrKZbLxbRiXLPP1msqDEtCSXkCpirRVV1NsEgV","ZI2GWYKhZRXkZodi0f3hzBv25MFqHWkYPpWDG3y2rq7IWS/tnuC4jhxydvfc+oXB","ZI2GWYKhZRXTXqI8zcfb7rAB9+ZjhHC67ft+RGdkgv0=","ZI2GWYKhZRX1Vp594d3m9ikLLiOplmxMdyyPtI/cfws=","ZI2GWYKhZRXdQbxCy93cx3fOJX0JCVI5NzYSR0L1qb8=","ZI2GWYKhZRXca5o2/cv1/L7eO35e4LJTFwM3AdeyqfPqt6LFKl7KgS6MknbiPxrj","ZI2GWYKhZRXja59k6/rm+koReokB9jVaCv1QMFXsC1Y=","ZI2GWYKhZRXQTb1YytnR1vFtML1OjTQluYaij94xkf4="].filter((function(e){return console.log(e),e===h})),document.getElementById("submitBtn").disabled=!0,setTimeout((function(){document.getElementById("submitBtn").disabled=!1}),5e3),j.length){e.next=13;break}return e.abrupt("return",[n("#E52D50:white:Incorrect"),l("")]);case 13:return e.next=15,fetch("/submit",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:t,answer:a,target:h}),credentials:"include"});case 15:return u=e.sent,e.next=18,u.json();case 18:return x=e.sent,n(x),l(""),e.next=23,window.location.reload(!0);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"d-flex flex-column challenge-div",style:{height:"92vh"},children:[Object(u.jsx)("button",{className:"btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal",style:{position:"absolute",top:"13vh",right:"0px"},children:Object(u.jsx)("i",{className:"bi bi-question-circle-fill text-light",style:{fontSize:"40px"}})}),Object(u.jsxs)("form",{className:"row g-3 d-flex flex-column align-items-center mt-3 mb-5",onSubmit:p,children:[Object(u.jsx)("input",{type:"text",className:"form-control ip border-2 text-center",placeholder:"Enter the flag",name:"answer",value:r,onChange:function(e){l(e.target.value)},required:!0,autoComplete:"off"}),Object(u.jsx)("button",{type:"submit",className:"btn btn-light fw-bold submit-button",id:"submitBtn",children:"Submit"})]}),Object(u.jsxs)("div",{className:"container-m",children:[Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXca5o2/cv1/L7eO35e4LJTFwM3AdeyqfPqt6LFKl7KgS6MknbiPxrj",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"01"}),Object(u.jsx)("p",{children:"What Lies Within?"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenge.netlify.app/what-lies-within.html",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXTXqI8zcfb7rAB9+ZjhHC67ft+RGdkgv0=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"02"}),Object(u.jsx)("p",{children:"Luminous Hunt"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenge.netlify.app/luminous-hunt",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXzYYB2/PXm5gx+HZbrKZbLxbRiXLPP1msqDEtCSXkCpirRVV1NsEgV",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"03"}),Object(u.jsx)("p",{children:"A Tribute"}),Object(u.jsx)("a",{type:"button",className:"btn",href:"https://github.com/mak372/CTF",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXgXN5n5/D3/UeUze7Pr1MSc2xFRyBn8WA=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"04"}),Object(u.jsx)("p",{children:"Attack on Bank"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenge.netlify.app/attack-on-bank.html",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRX1Vp594d3m9ikLLiOplmxMdyyPtI/cfws=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"05"}),Object(u.jsx)("p",{children:"JS NERDS"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenge.herokuapp.com",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXkZodi0f3hzBv25MFqHWkYPpWDG3y2rq7IWS/tnuC4jhxydvfc+oXB",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"06"}),Object(u.jsx)("p",{children:"Computer Engineering"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://github.com/Snimblkar53/Ctf",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXdQbxCy93cx3fOJX0JCVI5NzYSR0L1qb8=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"07"}),Object(u.jsx)("p",{children:"Decode It"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenges.netlify.app/decode_it",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXja59k6/rm+koReokB9jVaCv1QMFXsC1Y=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"08"}),Object(u.jsx)("p",{children:"Crack the Sequence"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenges.netlify.app/crack_the_sequence",target:"_blank",rel:"noreferrer",children:"Play"})]})})}),Object(u.jsx)("button",{className:"card btn",id:"ZI2GWYKhZRXQTb1YytnR1vFtML1OjTQluYaij94xkf4=",children:Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h2",{children:"09"}),Object(u.jsx)("p",{children:"One Zero One"}),Object(u.jsx)("a",{type:"button",className:"btn ",href:"https://csidmce-ctfchallenge.netlify.app/one-zero-one",target:"_blank",rel:"noreferrer",children:"Play"})]})})})]})]})};n(20);var p=function(){return Object(u.jsxs)("div",{className:"home-div container-fluid",children:[Object(u.jsxs)("div",{className:"home_image d-flex justify-content-center",children:[Object(u.jsx)("img",{className:"home_image ",src:"banner.webp",style:{height:"300px",width:"500px"}}),Object(u.jsx)("img",{className:"img-fluid",src:"boy.webp",id:"boy"})]}),Object(u.jsxs)("div",{className:"container d-flex flex-column justify-content-center align-items-center",children:[Object(u.jsxs)(l.b,{type:"submit",to:"/login",className:"btn btn-sm text-dark px-4  d-flex justify-content-center align-items-center login_button",children:[Object(u.jsx)("i",{className:"bi bi-play-fill fs-3 pt-1 mx-1"}),"PLAY"]}),Object(u.jsxs)("button",{type:"submit",className:"btn btn-sm text-dark mt-3  px-4 d-flex justify-content-around align-items-center login_button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:[Object(u.jsx)("i",{className:"bi bi-exclamation-circle fs-3 pt-1 mx-1"}),"HELP"]})]})]})},f=n(21),g=n(28);var O=function(e){var t=e.setGet,n=e.showAlert,a=Object(o.f)(),c=Object(s.useState)({group:"",password:""}),r=Object(i.a)(c,2),l=r[0],d=r[1],j=function(e){var t=e.target,n=t.value,s=t.name;d((function(){return Object(g.a)(Object(g.a)({},l),{},Object(f.a)({},s,n))}))},m=function(e){return new Promise((function(t){return setTimeout(t,e)}))},x=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(200);case 2:return e.next=4,document.querySelectorAll(".login-form");case 4:return t=e.sent,e.next=7,t.forEach((function(e){e.classList.remove("login-css"),e.style.display="none",e.style.opacity="0",e.style.transition="opacity 1s ease-in-out",e.style.transitionDelay="1s",e.style.transitionDuration="1s"}));case 7:(n=document.querySelector("#login-img")).classList.add("d-flex"),n.style.display="block",n.style.opacity="1",n.style.transition="opacity 1s ease-in-out",window.setTimeout((function(){n.style.display="none"}),4e3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(b.a.mark((function e(s){var c,r,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),c=l.group.trim().toLowerCase(),r=l.password.trim(),e.next=5,fetch("/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({group:c,password:r}),credentials:"include"});case 5:return i=e.sent,e.next=8,i.json();case 8:if("#E52D50:white:The TeamName is Incorrect please try again"!==(o=e.sent)){e.next=11;break}return e.abrupt("return",[n(o),d({group:"",password:""})]);case 11:if("#E52D50:white:The Password is Incorrect please try again"!==o){e.next=13;break}return e.abrupt("return",[n(o),d({group:"",password:""})]);case 13:return t(o.data[0]._id),e.next=16,x();case 16:return e.next=18,m(3e3);case 18:return e.next=20,a.push("/".concat(o.data[0]._id,"/challenges"));case 20:d({group:"",password:""});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"d-flex justify-content-center  align-items-center",style:{height:"92vh",fontFamily:"cairo, sans-serif"},children:[Object(u.jsxs)("button",{className:"btn text-dark text-center m-4  p-0",style:{position:"fixed",top:"8vh",left:"1vw"},onClick:function(){a.push("/")},children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-arrow-left text-white",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})})," "]})," ",Object(u.jsx)("img",{id:"login-img",style:{width:"50%",height:"60%",display:"none"},className:" container  justify-content-center align-items-center",src:"ag.gif",alt:"..."})," ",Object(u.jsxs)("div",{className:"container login-css mx-5 login-form",style:{borderRadius:"40px",maxWidth:"600px"},children:[Object(u.jsxs)("div",{className:"col-md-12 col-sm-12 col-12 login-form",children:[Object(u.jsxs)("form",{onSubmit:p,className:"p-5 form-submit login-form",children:[Object(u.jsx)("h1",{className:"text-center text-light fw-bold mb-4",children:" Login "})," ",Object(u.jsx)("p",{className:"text-muted text-center mb-3 ",children:"Please Enter your Team Name and password!"})," ",Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"text",className:"form-control text-light",id:"name",value:l.group,name:"group",onChange:j,style:{border:"none",borderRadius:"0",background:"transparent",boxShadow:"inset 0 -1px 0 #2196f3",borderBottomColor:"primary"},required:!0,placeholder:"Team Name"}),Object(u.jsxs)("label",{htmlFor:"name",className:"text-light mb-2",children:["Team Name"," "]})," "]})," ",Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"password",className:"form-control text-light",id:"password",value:l.password,name:"password",placeholder:"Password",onChange:j,style:{border:"none",borderRadius:"0",background:"transparent",boxShadow:"inset 0 -1px 0 #2196f3",borderBottomColor:"primary"},required:!0}),Object(u.jsxs)("label",{htmlFor:"password",className:"text-light mb-2",children:["Password"," "]})," "]})," ",Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsxs)("button",{type:"submit",className:"btn btn-light text-center mt-5 px-4 fw-bold  btn-lg",style:{borderRadius:"15px",fontFamily:"courier prime",letterSpacing:"2px"},children:["Login"," "]})," "]})," "]})," "]})," "]})," "]})};var y=function(e){var t=e.message,n=e.color,s=e.display,a=e.text;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"alert position-absolute start-50 translate-middle d-".concat(s),role:"alert",style:{width:"fit-content",zIndex:"5000",top:"8vh",fontFamily:"cairo, sans-serif",backgroundColor:"".concat(n),color:"".concat(a)},children:t})})},v=n.p+"static/media/CSI-CATT-DMCE.90b65808.webp";var N=function(e){var t=e.get,n=e.showAlert,a=Object(s.useState)("none"),c=Object(i.a)(a,2),r=c[0],d=c[1],b=Object(o.g)().pathname;return Object(s.useEffect)((function(){if(b==="/".concat(t,"/challenges"))d("block");else d("none")}),[b,t]),Object(u.jsxs)("nav",{className:"navbar",style:{height:"8vh"},children:[Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsxs)("a",{href:"https://csidmce.tech",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("img",{id:"csi-logo",src:v,alt:"CSI Logo",style:{width:"14rem"}})," "]}),Object(u.jsx)(l.b,{className:"btn btn-light fw-bold text-center d-".concat(r),to:"/",onClick:function(){sessionStorage.removeItem("data"),n("greenyellow:black:Congratulations you have Completed the Challenges!!!")},children:"Log out"})," "]})," "]})};var w=function(){return Object(u.jsx)("div",{className:"modal p-0 m-0 fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog p-0 m-0",children:Object(u.jsxs)("div",{className:"modal-content glass ",children:[Object(u.jsxs)("div",{className:"modal-header mx-3",children:[Object(u.jsx)("h3",{className:"modal-title mt-2",id:"exampleModalLabel",children:"Instructions"}),Object(u.jsx)("button",{type:"button",className:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(u.jsx)("div",{className:"modal-body mt-3 ",children:Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"In this CTF you have to find 9 flags and submit them all as fast as possible"}),Object(u.jsx)("li",{children:"Winners will be adjudged on the basis of maximum number of correct answers and thier time."}),Object(u.jsxs)("li",{children:["The format of the flag should be :",Object(u.jsx)("br",{}),Object(u.jsx)("strong",{children:"csi-ctf{flag}"})]}),Object(u.jsx)("li",{children:"For each Question you have to find the flag and submit it in the challenges page"}),Object(u.jsx)("li",{children:"In case of multiple Teams having given same number of correct answers, the Teams who take the least time to complete the quiz will be adjudged the winner."}),Object(u.jsx)("li",{children:"You can skip a tough question and come back to it later."}),Object(u.jsx)("li",{children:"The quiz timer will start as soon as you click the Play button."})]})})]})})})};var k=function(){var e=Object(s.useState)((function(){return JSON.parse(sessionStorage.getItem("data"))})),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){sessionStorage.setItem("data",JSON.stringify(n))}),[n]);var c=Object(s.useState)({color:null,text:null,message:null,display:"none"}),r=Object(i.a)(c,2),d=r[0],b=r[1],h=function(e){var t=e.split(":");b({color:t[0],text:t[1],message:t[2],display:"block"}),setTimeout((function(){b({color:null,text:null,message:null,display:"none"})}),5e3)};return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(N,{get:n,showAlert:h})," ",Object(u.jsx)(w,{}),Object(u.jsx)(y,{color:d.color,message:d.message,text:d.text,display:d.display})," ",Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})})," ",Object(u.jsxs)(o.a,{exact:!0,path:"/login",children:[Object(u.jsx)(O,{setGet:a,showAlert:h})," "]})," ",Object(u.jsxs)(o.a,{exact:!0,path:"/".concat(n,"/challenges"),children:[Object(u.jsx)(x,{get:n,showAlert:h})," "]})," "]})," "]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.801ac209.chunk.js.map