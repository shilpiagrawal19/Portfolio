(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(10),l=s.n(n),a=s(3),r=s(7),j=s(53),d=s(11),o=s.p+"static/media/mee2.8444b8d1.jpeg",b=s(0);function h(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){var t;Object(d.a)(e.current,(t={showCursor:!1,backDelay:1e3,backSpeed:80},Object(r.a)(t,"showCursor",!0),Object(r.a)(t,"strings",[" Developer"]),t))}),[]),Object(b.jsxs)("div",{className:"intro",id:"intro",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("div",{className:"imgContainer",children:Object(b.jsx)("img",{className:"meimg",src:o,alt:"My img"})})}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h2",{children:" Hi There ,I'm"}),Object(b.jsx)("h1",{children:"Shilpee Agrawal"}),Object(b.jsxs)("h3",{children:["Software",Object(b.jsx)("span",{ref:e})]})]}),Object(b.jsx)("a",{href:"#portfolio",children:Object(b.jsx)(j.a,{className:"iconDown "})})]})]})}var O=s(54),x=s(55);function m(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(b.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("a",{href:"#intro",className:"logo",children:"Developer "}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(O.a,{className:"icon"}),Object(b.jsx)("span",{children:"+91 810 939 3133"})]}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(x.a,{className:"icon"}),Object(b.jsx)("span",{children:" agrawalshilpi191@gmail.com"})]})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(b.jsx)("span",{className:"line1"}),Object(b.jsx)("span",{className:"line2"}),Object(b.jsx)("span",{className:"line3"})]})})]})})}s(27);function p(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(b.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}var u=s.p+"static/media/live.8fa0ff8d.png",g=s.p+"static/media/task1.3675e0ce.png",f=s.p+"static/media/task2.a61d3ed2.png",v=s.p+"static/media/mydesign.126b636c.png",N=s.p+"static/media/mydesign1.fade38e6.png",k=s.p+"static/media/mydesign2.a3e146da.png",w=s.p+"static/media/mydesign3.b457cc2b.png",S=[{id:"1",title:"Juno App",img:u,href:"https://junowebapp.z29.web.core.windows.net/login"},{id:"2",title:"Demo Website",img:g},{id:"3",title:"SAM App",img:f},{id:"4",title:"Company website",img:v},{id:"5",title:"Company website",img:N},{id:"6",title:"E-commerse website",img:k},{id:"7",title:"Signup Form",img:w}],C=[{id:"1",title:"Juno App",img:u,href:"https://junowebapp.z29.web.core.windows.net/login"}],y=[{id:"2",title:"Demo Website",img:g},{id:"3",title:"SAM App",img:f}],A=[{id:"4",title:"Company website",img:v},{id:"5",title:"Company website",img:N},{id:"6",title:"E-commerse website",img:k},{id:"7",title:"Signup Form",img:w}];function I(){var e=Object(i.useState)("featured"),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),l=Object(a.a)(n,2),r=l[0],j=l[1];return Object(i.useEffect)((function(){switch(s){case"featured":j(S);break;case"live":j(C);break;case"task":j(y);break;case"design":j(A);break;default:j(S)}}),[s]),Object(b.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(b.jsx)("h1",{children:"Portfolio"}),Object(b.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"live",title:"Live Project"},{id:"task",title:"Internship Tasks"},{id:"design",title:"My Designs"}].map((function(e){return Object(b.jsx)(p,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(b.jsx)("div",{className:"container",children:r.map((function(e){return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("img",{className:"imgproject",src:e.img,alt:"loading"}),Object(b.jsx)("a",{href:e.href,className:"titlelink",children:e.title}),Object(b.jsx)("div",{})]})}))})]})}function E(){function e(e){var t=e.title,s=e.span;return Object(b.jsx)("div",{className:"Title",children:Object(b.jsxs)("h3",{children:[t,Object(b.jsxs)("span",{children:[" ",s]})]})})}function t(e){var t=e.skill,s=e.progress,i=e.width;return Object(b.jsx)("div",{className:"SkillsSection",children:Object(b.jsxs)("div",{className:"skills-container",children:[Object(b.jsx)("h5",{className:"skill-title",children:t}),Object(b.jsxs)("div",{className:"skill-bar",children:[Object(b.jsx)("p",{className:"skill-text",children:s}),Object(b.jsx)("div",{className:"skill-progress",children:Object(b.jsx)("div",{className:"progress",children:Object(b.jsx)("div",{className:"inner-pregress",style:{width:i}})})})]})]})})}return Object(b.jsxs)("div",{className:"skill",id:"skill",children:[Object(b.jsx)("div",{className:"techskills",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(e,{title:"SKILLS"}),Object(b.jsx)("div",{className:"leftskills",children:Object(b.jsxs)("div",{className:"skillsContainer",children:[Object(b.jsx)(t,{skill:"Html",progress:"80%",width:"80%"}),Object(b.jsx)(t,{skill:"Bootstrap",progress:"70%",width:"70%"}),Object(b.jsx)(t,{skill:"Css and Scss",progress:"80%",width:"80%"}),Object(b.jsx)(t,{skill:"Javascript",progress:"60%",width:"60%"})]})}),Object(b.jsx)("div",{className:"rightskills",children:Object(b.jsxs)("div",{className:"skillsContainer",children:[Object(b.jsx)(t,{skill:"React Js",progress:"60%",width:"60%"}),Object(b.jsx)(t,{skill:"Php",progress:"40%",width:"40%"}),Object(b.jsx)(t,{skill:"Git",progress:"75%",width:"75%"}),Object(b.jsx)(t,{skill:"Material UI",progress:"40%",width:"40%"})]})})]})}),Object(b.jsxs)("div",{className:"personalskills",children:[Object(b.jsx)("h2",{children:"PERSONAL SKILLS"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Communication Skills"}),Object(b.jsx)("li",{children:"Creative Thinking"}),Object(b.jsx)("li",{children:"Punctual"}),Object(b.jsx)("li",{children:"Leadership Skills"}),Object(b.jsx)("li",{children:"Team Work"}),Object(b.jsx)("li",{children:"Time Management"})]})]})]})}var P=s(13),M=s.n(P),L=s.p+"static/media/hand.09f1579a.png";function D(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),s=t[0],c=t[1];return Object(b.jsxs)("div",{className:"contact",id:"contact",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("img",{src:L,alt:""})}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsx)("h2",{children:"Contact."}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),M.a.sendForm("service_jcuda82","template_sl3e6mg",e.target,"user_t48JjNsFxzI7L2xqgGi6H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(b.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(b.jsx)("input",{type:"text",placeholder:"Email",name:"email"}),Object(b.jsx)("input",{type:"text",placeholder:"Contact No",name:"subject"}),Object(b.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(b.jsx)("button",{type:"submit",children:"Send"}),s&&Object(b.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(30),s(31),s(32),s(33),s(34),s(35),s(36);function H(e){var t=e.Open,s=e.setOpen;return Object(b.jsx)("div",{className:"menu "+(t&&"active"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){return s(!1)},children:Object(b.jsx)("a",{href:"#intro",children:"Home"})}),Object(b.jsx)("li",{onClick:function(){return s(!1)},children:Object(b.jsx)("a",{href:"#about",children:"About"})}),Object(b.jsx)("li",{onClick:function(){return s(!1)},children:Object(b.jsx)("a",{href:"#skill",children:"Skills"})}),Object(b.jsx)("li",{onClick:function(){return s(!1)},children:Object(b.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(b.jsx)("li",{onClick:function(){return s(!1)},children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(37);function J(){return Object(b.jsxs)("div",{className:"education",children:[Object(b.jsx)("h3",{children:"Interships"}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:"Sysmetis IT Solution "}),Object(b.jsx)("p",{children:" Sept 2020 - Apr 2021 "})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:"SNV Infotech "}),Object(b.jsx)("p",{children:" June 2019 - July 2020 "})]})]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Education"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:"Bachelor Of Engieering (2016-2020)"}),Object(b.jsxs)("p",{children:[" Swami Vivekanand College Of Engineering ",Object(b.jsx)("br",{}),"CGPA : 7.8 "]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:"HSSCE (2015-2016)"}),Object(b.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(b.jsx)("br",{}),"Percentage : 71 "]})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("h4",{children:"HSCE(2013-2014)"}),Object(b.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(b.jsx)("br",{}),"Percentage : 76 "]})]})]})]})]})}var T=s(14),B=s.p+"static/media/shilpee Agrawal.79535dd0.jpg";var G=function(){function e(e){var t=e.title,s=e.span;return Object(b.jsx)("div",{className:"Title",children:Object(b.jsxs)("h3",{children:[t,Object(b.jsxs)("span",{children:[" ",s]})]})})}function t(){return Object(b.jsxs)("div",{className:"ImageSection",children:[Object(b.jsxs)("div",{className:"about-info",children:[Object(b.jsx)("p",{className:"about-text",children:"A passionate Software debveloper who is always eager to learn new things. I love creating website with great user experiance.I like to optimised code and make it highly configurable.I would love to work with an organization which provides me the opportunity to improve my skills along with growth of the organization."}),Object(b.jsxs)("div",{className:"about-details",children:[Object(b.jsxs)("div",{className:"left-section",children:[Object(b.jsx)("p",{children:"Birthday"}),Object(b.jsx)("p",{children:"Highest Qualification"}),Object(b.jsx)("p",{children:"Languages"}),Object(b.jsx)("p",{children:"Phone"}),Object(b.jsx)("p",{children:"Email"}),Object(b.jsx)("p",{children:"Address"})]}),Object(b.jsxs)("div",{className:"right-section",children:[Object(b.jsx)("p",{children:": 19/01/1999"}),Object(b.jsx)("p",{children:": Bachelor of Engineering"}),Object(b.jsx)("p",{children:": Hindi, English"}),Object(b.jsx)("p",{children:": 8109393133"}),Object(b.jsx)("p",{children:": agrawalshilpi191@gmail.com"}),Object(b.jsx)("p",{children:": 79,Bada Sarafa near Rajwada ,Indore"})]})]}),Object(b.jsx)("button",{className:"btn",onClick:function(){var e=new T.a("landscape","px","a4","false");e.addImage(B,"PDF",65,0,500,450),e.addPage(),e.save("shilpee Agrawal.pdf")},children:"Download Cv"})]}),Object(b.jsx)("div",{className:"skill"})]})}return Object(b.jsx)("div",{className:"about",id:"about",children:Object(b.jsxs)("div",{className:"AboutPage",children:[Object(b.jsx)(e,{title:"About Me"}),Object(b.jsxs)("div",{className:"aboutsection",children:[Object(b.jsx)(t,{className:"details"}),Object(b.jsx)(J,{})]})]})})};var F=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),s=t[0],c=t[1];return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(m,{menuOpen:s,setMenuOpen:c}),Object(b.jsx)(H,{Open:s,setOpen:c}),Object(b.jsxs)("div",{className:"sections",children:[Object(b.jsx)(h,{}),Object(b.jsx)(G,{}),Object(b.jsx)(E,{}),Object(b.jsx)(I,{}),Object(b.jsx)(D,{})]})]})};l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[38,1,3]]]);
//# sourceMappingURL=main.598545dc.chunk.js.map