(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=l;var r=l;t.default=r},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=l;var r=l;t.default=r},72:function(e,t,n){"use strict";n.r(t),n.d(t,"CoverTemplate",function(){return m});var a=n(0),l=n.n(a),r=n(59),c=n(60),s=n(4);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(a=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(l)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){Object(r.useStyleSheet)("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"),Object(r.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(c.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n\n  img {\n      padding: 5px;\n      border: 1px solid #ccc;\n  }\n  ");var e=i(Object(a.useState)(!1),2),t=e[0],n=e[1];return l.a.createElement(s.D,{isFullHeight:!0,isDefault:!0,isBold:!0},l.a.createElement(s.G,null,l.a.createElement(s.eb,null,l.a.createElement(s.q,null,l.a.createElement(s.fb,{src:"brightleaf.png",href:"#",width:"32",height:"32",onClick:function(e){e.preventDefault(),n(!t)}}),l.a.createElement(s.kb,{id:"navbarMenu",isActive:t},l.a.createElement(s.ib,null,l.a.createElement(s.Cb,{isRight:!0},l.a.createElement(s.Ab,null,l.a.createElement(s.zb,{isActive:!0},l.a.createElement("a",{href:"#HERO"},"Hero")),l.a.createElement(s.zb,null,l.a.createElement("a",{href:"#BLOG"},"Blog")),l.a.createElement(s.zb,null,l.a.createElement("a",{href:"#LANDING"},"Landing")),l.a.createElement(s.zb,null,l.a.createElement("a",{href:"#ADMIN"},"Admin")),l.a.createElement(s.zb,null,l.a.createElement("a",{href:"#CHEATSHEET"},"Cheatsheet")),l.a.createElement(s.zb,null,l.a.createElement("a",{href:"https://brightleaf.github.io/elements"},"Help"))))))))),l.a.createElement(s.E,null,l.a.createElement(s.q,{className:"has-text-centered"},l.a.createElement(s.p,{className:"is-vcentered"},l.a.createElement(s.o,{size:"5"},l.a.createElement(s.I,{is4by3:!0,src:"https://picsum.photos/800/600/?random",alt:"Description"})),l.a.createElement(s.o,{size:"6",className:"is-offset-1"},l.a.createElement(s.Gb,{is:"2"},"Superhero Scaffolding"),l.a.createElement(s.yb,{is:"4"},"Let this cover page describe a product or service."),l.a.createElement("br",null),l.a.createElement("p",{className:"has-text-centered"},l.a.createElement(s.f,{isAnchor:!0,isMedium:!0,isOutlined:!0,isInfo:!0},"Learn more")))))),l.a.createElement(s.F,null,l.a.createElement(s.q,null,l.a.createElement(s.Cb,{isCentered:!0},l.a.createElement(s.Ab,null,l.a.createElement(s.zb,null,l.a.createElement("a",null,"And this is the bottom")))))))};t.default=m}}]);