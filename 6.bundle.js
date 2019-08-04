(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.mergeDeep=function e(a,t){const n=e=>e&&"object"==typeof e;if(!n(a)||!n(t))return t;Object.keys(t).forEach(r=>{const l=a[r],c=t[r];Array.isArray(l)&&Array.isArray(c)?a[r]=l.concat(c):n(l)&&n(c)?a[r]=e(Object.assign({},l),c):a[r]=c});return a}},138:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useGet=void 0;var n,r=(n=t(139))&&n.__esModule?n:{default:n},l=t(102);const c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},s=(e="",a={method:"GET"})=>{const{data:t,error:n,loading:s,makeRequest:m}=(0,r.default)(e),i=(0,l.mergeDeep)(c,a);return{data:t,error:n,loading:s,getUrl:async(a=e)=>{await m({method:"GET",...i},a)}}};a.useGet=s;var m=s;a.default=m},139:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useRequest=void 0;var n=t(0),r=t(140),l=t(102);const c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},s=(e="",a={method:"GET"})=>{const[t,s]=(0,n.useReducer)(r.reducer,{data:[],error:null,loading:!1,complete:!1}),m=(0,l.mergeDeep)(c,a);return{...t,makeRequest:async(a=m,t=e)=>{s({type:"get"});const n=await fetch(t,a);if("application/json"===a.headers["Content-Type"]){const e=await n.json();return e&&e.data?s({type:"success",payload:{data:e.data}}):s({type:"success",payload:{data:e}})}const r=await n.text();return s({type:"success",payload:{data:r}})}}};a.useRequest=s;var m=s;a.default=m},140:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.reducer=void 0;const n=(e,a)=>{switch(a.type){case"get":case"loading":return{...e,loading:!0,complete:!1};case"success":return{...e,data:a.payload.data,error:null,loading:!1,complete:!0};case"error":return{...e,data:null,error:a.payload.error,loading:!1,complete:!0};default:return e}};a.reducer=n;var r=n;a.default=r},59:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useStyleSheet=void 0;var n=t(0);const r=e=>{(0,n.useEffect)(()=>{const a=document.createElement("link");return a.type="text/css",a.rel="stylesheet",a.href=e,document.getElementsByTagName("head")[0].appendChild(a),()=>{document.getElementsByTagName("head")[0].removeChild(a)}},[e])};a.useStyleSheet=r;var l=r;a.default=l},61:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useScript=void 0;var n=t(0);const r=e=>{(0,n.useEffect)(()=>{const a=document.createElement("script");return a.src=e,document.getElementsByTagName("head")[0].appendChild(a),()=>{document.getElementsByTagName("head")[0].removeChild(a)}},[e])};a.useScript=r;var l=r;a.default=l},84:function(e,a,t){"use strict";t.r(a),t.d(a,"InboxTemplate",function(){return p});var n=t(0),r=t.n(n),l=t(2),c=t.n(l),s=t(59),m=t(61),i=t(138),o=t(4);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function f(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var E=function(e){var a=e.active,t=d(e,["active"]);return r.a.createElement(o.h,{onClick:t.onClick,className:a?"active":""},r.a.createElement(o.i,null,r.a.createElement("div",{className:"msg-header"},r.a.createElement("span",{className:"msg-from"},r.a.createElement("small",null,"From: ",t.from)),r.a.createElement("span",{className:"msg-timestamp"},new Date(t.timestamp).toDateString()),r.a.createElement("span",{className:"msg-attachment"},r.a.createElement("i",{className:"fa fa-paperclip"}))),r.a.createElement("div",{className:"msg-subject"},r.a.createElement("span",{className:"msg-subject"},r.a.createElement("strong",null,t.subject))),r.a.createElement("div",{className:"msg-snippet"},r.a.createElement("p",null,t.snippet))))},p=function(){Object(s.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"),Object(s.useStyleSheet)("inbox.css"),Object(m.useScript)("font-awesome.js");var e=f(Object(n.useState)({from:"",timestamp:null,subject:"",snippet:"",fullMail:"",email:"",picked:!0}),2),a=e[0],t=e[1],l=Object(i.useGet)("https://kev-pi.herokuapp.com/api/mock/entities",{cors:"no-cors",headers:{total:200,page:1,schema:JSON.stringify({from:"{{name.findName}}",timestamp:"{{date.recent}}",subject:"{{lorem.sentence}}",snippet:"{{lorem.lines}}",fullMail:"{{lorem.paragraphs}}",email:"{{internet.email}}"})}}),d=l.data,p=(l.error,l.loading),h=l.getUrl,g=f(Object(n.useState)(!1),2),b=g[0],v=g[1];null!==d&&0!==d.length||p||h();var N=r.a.createElement("div",{className:"loader"}," ");return d&&d.data&&(N=d.data.map(function(e,n){return r.a.createElement(E,u({active:e==a,key:"key-".concat(n)},e,{onClick:function(){console.log("onclick"),t(e)}}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.eb,{className:"has-shadow"},r.a.createElement(o.q,{className:"container"},r.a.createElement(o.fb,{src:"brightleafjs-logo.png",alt:"Brightleat Elements: React and Bulma powered UI framework",onClick:function(e){v(!b)}}),r.a.createElement(o.kb,{className:c()({"is-active":b})},r.a.createElement(o.ib,{className:"navbar-end"},r.a.createElement(o.hb,{title:"Account"},r.a.createElement(o.jb,null,r.a.createElement("a",null,"Dashboard")),r.a.createElement(o.jb,null,r.a.createElement("a",null,"Profile")),r.a.createElement(o.jb,null,r.a.createElement("a",null,"Settings")),r.a.createElement(o.gb,null),r.a.createElement(o.jb,null,r.a.createElement("div",null,"Logout"))))))),r.a.createElement(o.p,null,r.a.createElement(o.o,{as:"aside",is:"2",isFullheight:!0,className:"aside hero is-fullheight"},r.a.createElement("div",null,r.a.createElement("div",{className:"compose has-text-centered"},r.a.createElement(o.f,{isDanger:!0,isAnchor:!0,className:"is-block is-bold",href:"#"},r.a.createElement("span",{className:"compose"},"Compose"))),r.a.createElement("div",{className:"main"},r.a.createElement("a",{href:"#",className:"item active"},r.a.createElement(o.H,{fas:!0,icon:"inbox"}),r.a.createElement("span",{className:"name"},"Inbox")),r.a.createElement("a",{href:"#",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"star"}),r.a.createElement("span",{className:"name"},"Starred")),r.a.createElement("a",{href:"#",className:"item"},r.a.createElement(o.H,{far:!0,icon:"envelope"}),r.a.createElement("span",{className:"name"},"Sent Mail")),r.a.createElement("a",{href:"#",className:"item"},r.a.createElement(o.H,{far:!0,icon:"folder"}),r.a.createElement("span",{className:"name"},"Folders")),r.a.createElement("a",{href:"#HERO",className:"item"},r.a.createElement(o.H,{fab:!0,icon:"superpowers"}),r.a.createElement("span",{className:"name"},"Hero")),r.a.createElement("a",{href:"#LANDING",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"plane-arrival"}),r.a.createElement("span",{className:"name"},"Landing")),r.a.createElement("a",{href:"#COVER",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"book-open"}),r.a.createElement("span",{className:"name"},"Cover")),r.a.createElement("a",{href:"#IMAGE_TIMELINE",className:"item"},r.a.createElement(o.H,{far:!0,icon:"images"}),r.a.createElement("span",{className:"name"},"Insta")),r.a.createElement("a",{href:"#ADMIN",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"cogs"}),r.a.createElement("span",{className:"name"},"Admin")),r.a.createElement("a",{href:"#CHEATSHEET",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"code"}),r.a.createElement("span",{className:"name"},"CheatSheet")),r.a.createElement("a",{href:"#BLOG",className:"item"},r.a.createElement(o.H,{fas:!0,icon:"blog"}),r.a.createElement("span",{className:"name"},"Blog"))))),r.a.createElement(o.o,{className:"column is-4 messages hero is-fullheight",id:"message-feed"},r.a.createElement(o.s,{className:"action-buttons"},r.a.createElement(o.s,{isGrouped:!0,className:"control is-grouped"},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"chevron-down"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"sync"}))),r.a.createElement(o.s,{isGrouped:!0},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"inbox"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"exclamation-circle"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"trash-alt"}))),r.a.createElement(o.s,{isGrouped:!0},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"folder"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"tag"}))),r.a.createElement(o.s,{isGrouped:!0,className:"pg"},r.a.createElement(o.Gb,{as:"div"},"1-10 of 100"),r.a.createElement(o.f,{isLink:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"chevron-left"})),r.a.createElement(o.f,{isLink:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"chevron-right"})))),r.a.createElement("div",{className:"inbox-messages",id:"inbox-messages"},N)),r.a.createElement(o.o,{is:"6",isHidden:a.picked,className:"message hero is-fullheight",id:"message-pane"},r.a.createElement("div",{className:"action-buttons"},r.a.createElement(o.s,{isGrouped:!0},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"inbox"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"exclamation-circle"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"trash-alt"}))),r.a.createElement(o.s,{isGrouped:!0},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"exclamation-circle"})),r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"trash-alt"}))),r.a.createElement(o.s,{isGrouped:!0},r.a.createElement(o.f,{isSmall:!0,isAnchor:!0},r.a.createElement(o.b,{fa:!0,icon:"folder"})),r.a.createElement(o.f,{isSmall:!0},r.a.createElement(o.b,{fa:!0,icon:"tag"})))),r.a.createElement(o.c,{className:"message-preview"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"https://placehold.it/128x128"})),r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"name"},a.from),r.a.createElement("div",{className:"email"},a.email)),r.a.createElement("hr",null),r.a.createElement(o.r,{className:"content"},a.fullMail))))),r.a.createElement(o.z,null,r.a.createElement(o.q,null,r.a.createElement(o.r,{hasTextCentered:!0},r.a.createElement("p",null,r.a.createElement("strong",null,"Original Bulma Templates")," by"," ",r.a.createElement("a",{href:"https://github.com/dansup"},"Daniel Supernault"),".",r.a.createElement("strong",null,"Brightleaf/Elements")," by"," ",r.a.createElement("a",{href:"https://github.com/kevnz"},"Kevin Isom"),"."),r.a.createElement("p",null,r.a.createElement("a",{className:"icon",href:"https://github.com/brightleaf/elements"},r.a.createElement(o.b,{fab:!0,icon:"github"})))))))};a.default=p}}]);