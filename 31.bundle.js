(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useMediaQuery=void 0;var l=a(0);const n=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}},r=e=>{const[t,a]=(0,l.useReducer)(n,{matches:!1}),r=e=>{e.matches?a({type:"match"}):t.matches&&a({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(r),(0,l.useEffect)(()=>{r(c)},[e]),{...t}};t.useMediaQuery=r;var c=r;t.default=c},61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var l=a(0);const n=e=>{(0,l.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=n;var r=n;t.default=r},63:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useScript=void 0;var l=a(0);const n=e=>{(0,l.useEffect)(()=>{const t=document.createElement("script");return t.src=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useScript=n;var r=n;t.default=r},87:function(e,t,a){"use strict";a.r(t),a.d(t,"ImageTimelineTemplate",(function(){return s}));var l=a(0),n=a.n(l),r=a(61),c=a(63),m=(a(100),a(2),a(4)),s=function(){return Object(r.useStyleSheet)("https://fonts.googleapis.com/icon?family=Material+Icons"),Object(r.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"),Object(r.useStyleSheet)("images.css"),Object(c.useScript)("font-awesome.js"),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.hb,{isTransparent:!0,className:"is-inline-flex"},n.a.createElement(m.ib,{src:"brightleafjs-logo.png",href:"https://brightleaf.dev",target:"navbarBasicExample",width:"112",height:"28"}),n.a.createElement(m.nb,{className:"navbar-menu"},n.a.createElement(m.mb,{className:"navbar-item"},n.a.createElement("div",null,n.a.createElement(m.v,{hasIconsLeft:!0,className:"control has-icons-left"},n.a.createElement("input",{className:"input is-small has-text-centered",type:"text",placeholder:"search"}),n.a.createElement(m.Q,{icon:"search",isLeft:!0,isSmall:!0}))))),n.a.createElement(m.mb,{className:"navbar-item is-flex-touch"},n.a.createElement("div",null,n.a.createElement(m.mb,null,n.a.createElement("a",{href:"#"},n.a.createElement(m.Q,{icon:"explore"}))),n.a.createElement(m.mb,null,n.a.createElement("a",{href:"#"},n.a.createElement(m.Q,{icon:"favorite_border"}))),n.a.createElement(m.mb,null,n.a.createElement("a",{href:"#"},n.a.createElement(m.Q,{icon:"person_outline"})))))),n.a.createElement(m.r,{className:"body-columns"},n.a.createElement(m.q,{isHalf:!0,isOffsetOneQuarter:!0,className:"column is-half is-offset-one-quarter"},n.a.createElement(m.h,null,n.a.createElement(m.E,null,n.a.createElement(m.T,null,n.a.createElement(m.S,null,n.a.createElement(m.L,{is:"48",src:"https://source.unsplash.com/random/96x96",alt:"Placeholder image"})),n.a.createElement(m.R,null,n.a.createElement(m.Sb,{is:"4",as:"p"},"John Smith"),n.a.createElement(m.Db,{is:"6",as:"p"},"@johnsmith")))),n.a.createElement(m.n,{is4by3:!0,src:"https://source.unsplash.com/random/1280x960",alt:"Placeholder image"}),n.a.createElement(m.i,null,n.a.createElement(m.M,{isMobile:!0},n.a.createElement(m.O,null,n.a.createElement(m.N,{hasTextCentered:!0},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"favorite_border"})))),n.a.createElement(m.N,{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"chat_bubble_outline"})))))),n.a.createElement(m.u,null,n.a.createElement("p",null,n.a.createElement("strong",null,"32 Likes")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",null,"@bulmaio"),".",n.a.createElement("a",{href:"#"},"#css"),n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2018-1-1"},"11:09 PM - 1 Jan 2018"))),n.a.createElement(m.j,null,n.a.createElement(m.r,{isMobile:!0},n.a.createElement(m.q,{is:"11"},n.a.createElement(m.B,null,n.a.createElement(m.v,null,n.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Add a comment . . ."})))),n.a.createElement(m.q,{hasTextCentered:!0},n.a.createElement(m.f,null,n.a.createElement(m.Q,{icon:"more_horiz"})))))),n.a.createElement(m.h,null,n.a.createElement(m.E,null,n.a.createElement(m.T,null,n.a.createElement(m.S,null,n.a.createElement(m.L,{is:"48",src:"https://source.unsplash.com/random/96x96",alt:"Placeholder image"})),n.a.createElement(m.R,null,n.a.createElement(m.Sb,{is:"4",as:"p"},"John Smith"),n.a.createElement(m.Db,{is:"6",as:"p"},"@johnsmith")))),n.a.createElement(m.n,{is4by3:!0,src:"https://source.unsplash.com/random/1280x964",alt:"Placeholder image"}),n.a.createElement(m.i,null,n.a.createElement(m.M,{isMobile:!0},n.a.createElement(m.O,null,n.a.createElement(m.N,{hasTextCentered:!0},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"favorite_border"})))),n.a.createElement(m.N,{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"chat_bubble_outline"})))))),n.a.createElement(m.u,null,n.a.createElement("p",null,n.a.createElement("strong",null,"32 Likes")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",null,"@bulmaio"),".",n.a.createElement("a",{href:"#"},"#css"),n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2018-1-1"},"11:09 PM - 1 Jan 2018"))),n.a.createElement(m.j,null,n.a.createElement(m.r,{isMobile:!0},n.a.createElement(m.q,{is:"11"},n.a.createElement(m.B,null,n.a.createElement(m.v,null,n.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Add a comment . . ."})))),n.a.createElement(m.q,{hasTextCentered:!0},n.a.createElement(m.f,null,n.a.createElement(m.Q,{icon:"more_horiz"})))))),n.a.createElement(m.h,null,n.a.createElement(m.E,null,n.a.createElement(m.T,null,n.a.createElement(m.S,null,n.a.createElement(m.L,{is:"48",src:"https://source.unsplash.com/random/96x96",alt:"Placeholder image"})),n.a.createElement(m.R,null,n.a.createElement(m.Sb,{is:"4",as:"p"},"John Smith"),n.a.createElement(m.Db,{is:"6",as:"p"},"@johnsmith")))),n.a.createElement(m.n,{is4by3:!0,src:"https://source.unsplash.com/random/1280x963",alt:"Placeholder image"}),n.a.createElement(m.i,null,n.a.createElement(m.M,{isMobile:!0},n.a.createElement(m.O,null,n.a.createElement(m.N,{hasTextCentered:!0},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"favorite_border"})))),n.a.createElement(m.N,{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"chat_bubble_outline"})))))),n.a.createElement(m.u,null,n.a.createElement("p",null,n.a.createElement("strong",null,"32 Likes")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",null,"@bulmaio"),".",n.a.createElement("a",{href:"#"},"#css"),n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2018-1-1"},"11:09 PM - 1 Jan 2018"))),n.a.createElement(m.j,null,n.a.createElement(m.r,{isMobile:!0},n.a.createElement(m.q,{is:"11"},n.a.createElement(m.B,null,n.a.createElement(m.v,null,n.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Add a comment . . ."})))),n.a.createElement(m.q,{hasTextCentered:!0},n.a.createElement(m.f,null,n.a.createElement(m.Q,{icon:"more_horiz"})))))),n.a.createElement(m.h,null,n.a.createElement(m.E,null,n.a.createElement(m.T,null,n.a.createElement(m.S,null,n.a.createElement(m.L,{is:"48",src:"https://source.unsplash.com/random/96x96",alt:"Placeholder image"})),n.a.createElement(m.R,null,n.a.createElement(m.Sb,{is:"4",as:"p"},"John Smith"),n.a.createElement(m.Db,{is:"6",as:"p"},"@johnsmith")))),n.a.createElement(m.n,{is4by3:!0,src:"https://source.unsplash.com/random/1280x962",alt:"Placeholder image"}),n.a.createElement(m.i,null,n.a.createElement(m.M,{isMobile:!0},n.a.createElement(m.O,null,n.a.createElement(m.N,{hasTextCentered:!0},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"favorite_border"})))),n.a.createElement(m.N,{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"chat_bubble_outline"})))))),n.a.createElement(m.u,null,n.a.createElement("p",null,n.a.createElement("strong",null,"32 Likes")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",null,"@bulmaio"),".",n.a.createElement("a",{href:"#"},"#css"),n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2018-1-1"},"11:09 PM - 1 Jan 2018"))),n.a.createElement(m.B,null,n.a.createElement(m.r,{isMobile:!0},n.a.createElement(m.q,{is:"11"},n.a.createElement(m.B,null,n.a.createElement(m.v,null,n.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Add a comment . . ."})))),n.a.createElement(m.q,{hasTextCentered:!0},n.a.createElement(m.f,null,n.a.createElement(m.Q,{icon:"more_horiz"})))))),n.a.createElement(m.h,null,n.a.createElement(m.E,null,n.a.createElement(m.T,null,n.a.createElement(m.S,null,n.a.createElement(m.L,{is:"48",src:"https://source.unsplash.com/random/96x96",alt:"Placeholder image"})),n.a.createElement(m.R,null,n.a.createElement(m.Sb,{is:"4",as:"p"},"John Smith"),n.a.createElement(m.Db,{is:"6",as:"p"},"@johnsmith")))),n.a.createElement(m.n,{is4by3:!0,src:"https://source.unsplash.com/random/1280x961",alt:"Placeholder image"}),n.a.createElement(m.i,null,n.a.createElement(m.M,{isMobile:!0},n.a.createElement(m.O,null,n.a.createElement(m.N,{hasTextCentered:!0},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"favorite_border"})))),n.a.createElement(m.N,{className:"level-item has-text-centered"},n.a.createElement("div",null,n.a.createElement("a",{href:""},n.a.createElement(m.Q,{icon:"chat_bubble_outline"})))))),n.a.createElement(m.u,null,n.a.createElement("p",null,n.a.createElement("strong",null,"32 Likes")),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",n.a.createElement("a",null,"@bulmaio"),".",n.a.createElement("a",{href:"#"},"#css"),n.a.createElement("a",{href:"#"},"#responsive"),n.a.createElement("br",null),n.a.createElement("time",{dateTime:"2018-1-1"},"11:09 PM - 1 Jan 2018"))),n.a.createElement(m.j,null,n.a.createElement(m.r,{isMobile:!0},n.a.createElement(m.q,{is:"11"},n.a.createElement(m.B,null,n.a.createElement(m.v,null,n.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Add a comment . . ."})))),n.a.createElement(m.q,{hasTextCentered:!0},n.a.createElement(m.f,null,n.a.createElement(m.Q,{icon:"more_horiz"})))))),n.a.createElement(m.C,null,n.a.createElement(m.t,{isFluid:!0},n.a.createElement(m.u,{hasTextCentered:!0},n.a.createElement("p",null,n.a.createElement("strong",null,"Bulma")," by",n.a.createElement("a",{href:"http://jgthms.com"},"Jeremy Thomas"),". The source code is licensed",n.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed",n.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))))))};t.default=s}}]);