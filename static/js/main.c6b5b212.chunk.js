(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e,s,i){},45:function(e,s,i){},46:function(e,s,i){},47:function(e,s,i){},48:function(e,s,i){},49:function(e,s,i){},50:function(e,s,i){},51:function(e,s,i){},52:function(e,s,i){},53:function(e,s,i){"use strict";i.r(s);var t=i(1),c=i.n(t),n=i(11),a=i.n(n),l=i(5),j=i(17),r=i(70),d=i(21),b=i.p+"static/media/mee2.8444b8d1.jpeg",o=i(22),h=i.n(o),O=i(4),x=i.n(O),m=i(0);function p(){var e=Object(t.useRef)();return Object(t.useEffect)((function(){var s;Object(d.a)(e.current,(s={showCursor:!1,backDelay:1e3,backSpeed:80},Object(j.a)(s,"showCursor",!0),Object(j.a)(s,"strings",[" Developer"]),s))}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)(h.a,{top:!0,left:!0,children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{className:"meimg",src:b,alt:"My img"})})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(x.a,{top:!0,children:Object(m.jsx)("h2",{children:" Hi There ,I'm"})}),Object(m.jsxs)(x.a,{right:!0,children:["    ",Object(m.jsx)("h1",{children:"Shilpee Agrawal"})]}),Object(m.jsxs)(x.a,{bottom:!0,children:[" ",Object(m.jsxs)("h3",{children:["Software",Object(m.jsx)("span",{ref:e})]})]})]}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)(r.a,{className:"iconDown "})})]})]})}var u=i(71),g=i(72);function f(e){var s=e.menuOpen,i=e.setMenuOpen;return Object(m.jsx)("div",{className:"topbar "+(s&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:"Developer "}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(u.a,{className:"icon"}),Object(m.jsx)("span",{children:"+91 810 939 3133"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(g.a,{className:"icon"}),Object(m.jsx)("span",{children:" agrawalshilpi191@gmail.com"})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return i(!s)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}i(41);function v(e){var s=e.id,i=e.title,t=e.active,c=e.setSelected;return Object(m.jsx)("li",{className:t?"portfolioList active":"portfolioList",onClick:function(){return c(s)},children:i})}var N=i.p+"static/media/live.8fa0ff8d.png",w=i.p+"static/media/task1.3675e0ce.png",k=i.p+"static/media/task2.a61d3ed2.png",S=i.p+"static/media/mydesign.126b636c.png",C=i.p+"static/media/mydesign1.fade38e6.png",y=i.p+"static/media/mydesign2.a3e146da.png",A=i.p+"static/media/mydesign3.b457cc2b.png",I=[{id:"1",title:"Juno App",img:N,href:"https://junowebapp.z29.web.core.windows.net/login"},{id:"2",title:"Demo Website",img:w},{id:"3",title:"SAM App",img:k},{id:"4",title:"Company website",img:S},{id:"5",title:"Company website",img:C},{id:"6",title:"E-commerse website",img:y},{id:"7",title:"Signup Form",img:A}],E=[{id:"1",title:"Juno App",img:N,href:"https://junowebapp.z29.web.core.windows.net/login"}],P=[{id:"2",title:"Demo Website",img:w},{id:"3",title:"SAM App",img:k}],M=[{id:"4",title:"Company website",img:S},{id:"5",title:"Company website",img:C},{id:"6",title:"E-commerse website",img:y},{id:"7",title:"Signup Form",img:A}];function L(){var e=Object(t.useState)("featured"),s=Object(l.a)(e,2),i=s[0],c=s[1],n=Object(t.useState)([]),a=Object(l.a)(n,2),j=a[0],r=a[1];return Object(t.useEffect)((function(){switch(i){case"featured":r(I);break;case"live":r(E);break;case"task":r(P);break;case"design":r(M);break;default:r(I)}}),[i]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("h1",{children:"Portfolio"}),Object(m.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"live",title:"Live Project"},{id:"task",title:"Internship Tasks"},{id:"design",title:"My Designs"}].map((function(e){return Object(m.jsx)(v,{title:e.title,active:i===e.id,setSelected:c,id:e.id})}))}),Object(m.jsx)("div",{className:"container",children:j.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{className:"imgproject",src:e.img,alt:"loading"}),Object(m.jsx)("a",{href:e.href,className:"titlelink",children:e.title}),Object(m.jsx)("div",{})]})}))})]})}var D=i(12),H=i.n(D);function T(e){var s=e.title,i=e.span;return Object(m.jsx)(H.a,{top:!0,children:Object(m.jsx)("div",{className:"Title",children:Object(m.jsxs)("h3",{children:[s,Object(m.jsxs)("span",{children:[" ",i]})]})})})}function B(){function e(e){var s=e.skill,i=e.progress,t=e.width;return Object(m.jsx)("div",{className:"SkillsSection",children:Object(m.jsxs)("div",{className:"skills-container",children:[Object(m.jsx)("h5",{className:"skill-title",children:s}),Object(m.jsxs)("div",{className:"skill-bar",children:[Object(m.jsx)("p",{className:"skill-text",children:i}),Object(m.jsx)("div",{className:"skill-progress",children:Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("div",{className:"inner-pregress",style:{width:t}})})})]})]})})}return Object(m.jsxs)("div",{className:"skill",id:"skill",children:[Object(m.jsx)("div",{className:"techskills",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(T,{title:"SKILLS"}),Object(m.jsxs)(x.a,{top:!0,children:[Object(m.jsx)("div",{className:"leftskills",children:Object(m.jsxs)("div",{className:"skillsContainer",children:[Object(m.jsx)(e,{skill:"Html",progress:"80%",width:"80%"}),Object(m.jsx)(e,{skill:"Bootstrap",progress:"70%",width:"70%"}),Object(m.jsx)(e,{skill:"Css and Scss",progress:"80%",width:"80%"}),Object(m.jsx)(e,{skill:"Javascript",progress:"60%",width:"60%"})]})}),Object(m.jsx)("div",{className:"rightskills",children:Object(m.jsxs)("div",{className:"skillsContainer",children:[Object(m.jsx)(e,{skill:"React Js",progress:"60%",width:"60%"}),Object(m.jsx)(e,{skill:"Php",progress:"40%",width:"40%"}),Object(m.jsx)(e,{skill:"Git",progress:"75%",width:"75%"}),Object(m.jsx)(e,{skill:"Material UI",progress:"40%",width:"40%"})]})})]})]})}),Object(m.jsxs)("div",{className:"personalskills",children:[Object(m.jsx)(x.a,{top:!0,className:"fade",children:Object(m.jsx)("h2",{children:"PERSONAL SKILLS"})}),Object(m.jsx)(x.a,{right:!0,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Communication Skills"}),Object(m.jsx)("li",{children:"Creative Thinking"}),Object(m.jsx)("li",{children:"Punctual"}),Object(m.jsx)("li",{children:"Leadership Skills"}),Object(m.jsx)("li",{children:"Team Work"}),Object(m.jsx)("li",{children:"Time Management"})]})})]})]})}var J=i(24),G=i.n(J),F=(i.p,i(25)),z=i.n(F),R=i(26),W=i.n(R),_=i(27),K=i.n(_),V=i(18),q=i.n(V);function Q(){var e=Object(t.useState)(!1),s=Object(l.a)(e,2),i=s[0],c=s[1];return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)(q.a,{left:!0,children:[Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(g.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"agrawalshilpi191@gmail.com",children:"agrawalshilpi191@gmail.com"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(u.a,{className:"icon"}),Object(m.jsx)("span",{children:"+91 810 939 3133"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(z.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b",children:"https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(W.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://github.com/shilpiagrawal19",children:"https://github.com/shilpiagrawal19"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(K.a,{className:"icon"}),Object(m.jsx)("span",{children:"79,Bada Sarafa near Rajwada ,Indore"})]})]})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)(H.a,{top:!0,children:Object(m.jsx)("h2",{children:"CONTACT"})}),Object(m.jsx)(q.a,{right:!0,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),G.a.sendForm("service_jcuda82","template_sl3e6mg",e.target,"user_t48JjNsFxzI7L2xqgGi6H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(m.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(m.jsx)("input",{type:"text",placeholder:"Email",name:"email"}),Object(m.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(m.jsx)("button",{type:"submit",children:"Send"}),i&&Object(m.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})})]})]})}i(45),i(46),i(47),i(48),i(49),i(50),i(51);function U(e){var s=e.Open,i=e.setOpen;return Object(m.jsx)("div",{className:"menu "+(s&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return i(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return i(!1)},children:Object(m.jsx)("a",{href:"#about",children:"About"})}),Object(m.jsx)("li",{onClick:function(){return i(!1)},children:Object(m.jsx)("a",{href:"#skill",children:"Skills"})}),Object(m.jsx)("li",{onClick:function(){return i(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{onClick:function(){return i(!1)},children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})]})})}i(52);function X(){return Object(m.jsxs)("div",{className:"education",children:[Object(m.jsx)("h3",{children:"Interships"}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("h4",{children:"Sysmetis IT Solution "}),Object(m.jsx)("p",{children:" Sept 2020 - Apr 2021 "})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("h4",{children:"SNV Infotech "}),Object(m.jsx)("p",{children:" June 2019 - July 2020 "})]})]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Education"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("h4",{children:"Bachelor Of Engieering (2016-2020)"}),Object(m.jsxs)("p",{children:[" Swami Vivekanand College Of Engineering ",Object(m.jsx)("br",{}),"CGPA : 7.8 "]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("h4",{children:"HSSCE (2015-2016)"}),Object(m.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(m.jsx)("br",{}),"Percentage : 71 "]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("h4",{children:"HSCE(2013-2014)"}),Object(m.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(m.jsx)("br",{}),"Percentage : 76 "]})]})]})]})]})}var Y=i(28),Z=i.p+"static/media/shilpee Agrawal.79535dd0.jpg";var $=function(){function e(){return Object(m.jsxs)("div",{className:"ImageSection",children:[Object(m.jsxs)("div",{className:"about-info",children:[Object(m.jsx)("p",{className:"about-text",children:"A passionate Software debveloper who is always eager to learn new things. I love creating website with great user experiance.I like to optimised code and make it highly configurable.I would love to work with an organization which provides me the opportunity to improve my skills along with growth of the organization."}),Object(m.jsxs)("div",{className:"about-details",children:[Object(m.jsxs)("div",{className:"left-section",children:[Object(m.jsx)("p",{children:"Birthday"}),Object(m.jsx)("p",{children:"Highest Qualification"}),Object(m.jsx)("p",{children:"Languages"}),Object(m.jsx)("p",{children:"Phone"}),Object(m.jsx)("p",{children:"Email"}),Object(m.jsx)("p",{children:"Address"})]}),Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)("p",{children:": 19/01/1999"}),Object(m.jsx)("p",{children:": Bachelor of Engineering"}),Object(m.jsx)("p",{children:": Hindi, English"}),Object(m.jsx)("p",{children:": 8109393133"}),Object(m.jsx)("p",{children:": agrawalshilpi191@gmail.com"}),Object(m.jsx)("p",{children:": 79,Bada Sarafa near Rajwada ,Indore"})]})]}),Object(m.jsx)("button",{className:"btn",onClick:function(){var e=new Y.a("landscape","px","a4","false");e.addImage(Z,"PDF",65,0,500,450),e.addPage(),e.save("shilpee Agrawal.pdf")},children:"Download Cv"})]}),Object(m.jsx)("div",{className:"skill"})]})}return Object(m.jsx)("div",{className:"about",id:"about",children:Object(m.jsxs)("div",{className:"AboutPage",children:[Object(m.jsx)(T,{title:"About Me"}),Object(m.jsxs)("div",{className:"aboutsection",children:[Object(m.jsx)(e,{className:"details"}),Object(m.jsx)(X,{})]})]})})};var ee=function(){var e=Object(t.useState)(!1),s=Object(l.a)(e,2),i=s[0],c=s[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(f,{menuOpen:i,setMenuOpen:c}),Object(m.jsx)(U,{Open:i,setOpen:c}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(p,{}),Object(m.jsx)($,{}),Object(m.jsx)(B,{}),Object(m.jsx)(L,{}),Object(m.jsx)(Q,{})]})]})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}},[[53,1,3]]]);
//# sourceMappingURL=main.c6b5b212.chunk.js.map