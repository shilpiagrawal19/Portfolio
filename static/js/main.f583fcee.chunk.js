(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,i){},,,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(10),a=i.n(n),r=i(3),l=i(6),j=i(45),o=i(11),d=i.p+"static/media/mee2.8444b8d1.jpeg",b=i(0);function m(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var t;Object(o.a)(e.current,(t={showCursor:!1,backDelay:1e3,backSpeed:80},Object(l.a)(t,"showCursor",!0),Object(l.a)(t,"strings",[" Developer"]),t))}),[]),Object(b.jsxs)("div",{className:"intro",id:"intro",children:[Object(b.jsx)("div",{className:"left",children:Object(b.jsx)("div",{className:"imgContainer",children:Object(b.jsx)("img",{className:"meimg",src:d,alt:"My img"})})}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h2",{children:" Hi There ,I'm"}),Object(b.jsx)("h1",{children:"Shilpee Agrawal"}),Object(b.jsxs)("h3",{children:["Software",Object(b.jsx)("span",{ref:e})]})]}),Object(b.jsx)("a",{href:"#portfolio",children:Object(b.jsx)(j.a,{className:"iconDown "})})]})]})}var O=i(46),u=i(47);function p(e){var t=e.menuOpen,i=e.setMenuOpen;return Object(b.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("a",{href:"#intro",className:"logo",children:"Developer"}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(O.a,{className:"icon"}),Object(b.jsx)("span",{children:"+91 810 939 3133"})]}),Object(b.jsxs)("div",{className:"itemContainer",children:[Object(b.jsx)(u.a,{className:"icon"}),Object(b.jsx)("span",{children:"agrawalshilpi191@gmail.com"})]})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsxs)("div",{className:"hamburger",onClick:function(){return i(!t)},children:[Object(b.jsx)("span",{className:"line1"}),Object(b.jsx)("span",{className:"line2"}),Object(b.jsx)("span",{className:"line3"})]})})]})})}i(24);function h(e){var t=e.id,i=e.title,c=e.active,s=e.setSelected;return Object(b.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return s(t)},children:i})}var f=i.p+"static/media/live.8fa0ff8d.png",x=i.p+"static/media/task1.3675e0ce.png",g=i.p+"static/media/task2.a61d3ed2.png",v=i.p+"static/media/mydesign.126b636c.png",N=i.p+"static/media/mydesign1.fade38e6.png",w=i.p+"static/media/mydesign2.a3e146da.png",k=i.p+"static/media/mydesign3.b457cc2b.png",C=[{id:"1",title:"Juno App",img:f,href:"https://junowebapp.z29.web.core.windows.net/login"},{id:"2",title:"Demo Website",img:x},{id:"3",title:"SAM App",img:g},{id:"4",title:"Company website",img:v},{id:"5",title:"Company website",img:N},{id:"6",title:"E-commerse website",img:w},{id:"7",title:"Signup Form",img:k}],S=[{id:"1",title:"Juno App",img:f,href:"https://junowebapp.z29.web.core.windows.net/login"}],y=[{id:"2",title:"Demo Website",img:x},{id:"3",title:"SAM App",img:g}],A=[{id:"4",title:"Company website",img:v},{id:"5",title:"Company website",img:N},{id:"6",title:"E-commerse website",img:w},{id:"7",title:"Signup Form",img:k}];function D(){var e=Object(c.useState)("featured"),t=Object(r.a)(e,2),i=t[0],s=t[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){switch(i){case"featured":j(C);break;case"live":j(S);break;case"task":j(y);break;case"design":j(A);break;default:j(C)}}),[i]),Object(b.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(b.jsx)("h1",{children:"Portfolio"}),Object(b.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"live",title:"Live Project"},{id:"task",title:"Internship Tasks"},{id:"design",title:"My Designs"}].map((function(e){return Object(b.jsx)(h,{title:e.title,active:i===e.id,setSelected:s,id:e.id})}))}),Object(b.jsx)("div",{className:"container",children:l.map((function(e){return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("a",{href:e.href,className:"titlelink",children:e.title}),Object(b.jsx)("img",{className:"imgproject",src:e.img,alt:"loading"}),Object(b.jsx)("div",{})]})}))})]})}function M(){return Object(b.jsx)("div",{className:"works",id:"works"})}function E(){return Object(b.jsx)("div",{className:"testimonial",id:"testimonial"})}i(9);function J(){return Object(b.jsx)("div",{className:"contact",id:"contact"})}i(25),i(26),i(27),i(28),i(29),i(30);function P(e){var t=e.Open,i=e.setOpen;return Object(b.jsx)("div",{className:"menu "+(t&&"active"),children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){return i(!1)},children:Object(b.jsx)("a",{href:"#intro",children:"Home"})}),Object(b.jsx)("li",{onClick:function(){return i(!1)},children:Object(b.jsx)("a",{href:"#testimonial",children:"About"})}),Object(b.jsx)("li",{onClick:function(){return i(!1)},children:Object(b.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(b.jsx)("li",{onClick:function(){return i(!1)},children:Object(b.jsx)("a",{href:"#works",children:"Projects"})}),Object(b.jsx)("li",{onClick:function(){return i(!1)},children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})})}i(31);var F=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(p,{menuOpen:i,setMenuOpen:s}),Object(b.jsx)(P,{Open:i,setOpen:s}),Object(b.jsxs)("div",{className:"sections",children:[Object(b.jsx)(m,{}),Object(b.jsx)(D,{}),Object(b.jsx)(M,{}),Object(b.jsx)(E,{}),Object(b.jsx)(J,{})]})]})};i(32);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.f583fcee.chunk.js.map