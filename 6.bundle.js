(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.mergeDeep=function e(a,t){const r=e=>e&&"object"==typeof e;if(!r(a)||!r(t))return t;Object.keys(t).forEach(n=>{const l=a[n],c=t[n];Array.isArray(l)&&Array.isArray(c)?a[n]=l.concat(c):r(l)&&r(c)?a[n]=e(Object.assign({},l),c):a[n]=c});return a}},144:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useGet=void 0;var r,n=(r=t(145))&&r.__esModule?r:{default:r},l=t(108);const c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},s=(e="",a={method:"GET"})=>{const{data:t,error:r,loading:s,complete:m,makeRequest:o}=(0,n.default)(e),i=(0,l.mergeDeep)(c,a);return{data:t,error:r,loading:s,complete:m,getUrl:async(a=e)=>{await o({method:"GET",...i},a)}}};a.useGet=s;var m=s;a.default=m},145:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useRequest=void 0;var r=t(0),n=t(146),l=t(108);const c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},s=(e="",a={method:"GET"})=>{const[t,s]=(0,r.useReducer)(n.reducer,{data:[],error:null,errorDetails:null,loading:!1,complete:!1}),m=(0,l.mergeDeep)(c,a);return{...t,makeRequest:async(a=m,t=e)=>{s({type:"get"});const r=await fetch(t,a),n=r.ok,l=r.headers.get("Content-Type");if("application/json"===a.headers["Content-Type"]&&"application/json"===l){const e=await r.json();return n&&e&&e.data?s({type:"success",payload:{data:e.data}}):s(!n&&e?{type:"error",payload:e}:{type:"success",payload:{data:e}})}const c=await r.text();return s(n?{type:"success",payload:{data:c}}:{type:"error",payload:{data:null,error:c}})}}};a.useRequest=s;var m=s;a.default=m},146:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.reducer=a.getError=a.getData=void 0;const r=e=>{const a=e&&"string"==typeof e.data?JSON.parse(e.data):e;return a&&a.data?a.data:(Array.isArray(a),a)};a.getData=r;const n=e=>e&&e.error&&e.error.Error?e.error.Error:e&&e.error&&e.error.error?e.error.error:e&&e.error?e.error:e&&e.errorMessage?e.data:e;a.getError=n;const l=(e,a)=>{switch(a.type){case"get":case"loading":return{...e,loading:!0,complete:!1};case"success":return{...e,data:r(a.payload),error:null,loading:!1,complete:!0};case"error":return{...e,data:r(a.payload.data),error:!0,errorDetails:n(a.payload),loading:!1,complete:!0};default:return e}};a.reducer=l;var c=l;a.default=c},62:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useScript=void 0;var r=t(0);const n=e=>{(0,r.useEffect)(()=>{const a=document.createElement("script");return a.src=e,document.getElementsByTagName("head")[0].appendChild(a),()=>{document.getElementsByTagName("head")[0].removeChild(a)}},[e])};a.useScript=n;var l=n;a.default=l},88:function(e,a,t){"use strict";t.r(a),t.d(a,"InboxTemplate",(function(){return p}));var r=t(0),n=t.n(r),l=t(2),c=t.n(l),s=t(92),m=t(62),o=t(144),i=t(4);function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,n=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var f=function(e){var a=e.active,t=E(e,["active"]);return n.a.createElement(i.h,{onClick:t.onClick,className:a?"active":""},n.a.createElement(i.i,null,n.a.createElement("div",{className:"msg-header"},n.a.createElement("span",{className:"msg-from"},n.a.createElement("small",null,"From: ",t.from)),n.a.createElement("span",{className:"msg-timestamp"},new Date(t.timestamp).toDateString()),n.a.createElement("span",{className:"msg-attachment"},n.a.createElement("i",{className:"fa fa-paperclip"}))),n.a.createElement("div",{className:"msg-subject"},n.a.createElement("span",{className:"msg-subject"},n.a.createElement("strong",null,t.subject))),n.a.createElement("div",{className:"msg-snippet"},n.a.createElement("p",null,t.snippet))))},p=function(){Object(s.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"),Object(s.useStyleSheet)("inbox.css"),Object(m.useScript)("font-awesome.js");var e=d(Object(r.useState)({from:"",timestamp:null,subject:"",snippet:"",fullMail:"",email:"",picked:!0}),2),a=e[0],t=e[1],l=Object(o.useGet)("https://kev-pi.herokuapp.com/api/mock/entities",{cors:"no-cors",headers:{total:200,page:1,schema:JSON.stringify({from:"{{name.findName}}",timestamp:"{{date.recent}}",subject:"{{lorem.sentence}}",snippet:"{{lorem.lines}}",fullMail:"{{lorem.paragraphs}}",email:"{{internet.email}}"})}}),E=l.data,p=l.loading,h=l.getUrl,g=l.complete,b=d(Object(r.useState)(!1),2),v=b[0],y=b[1];null!==E&&0!==E.length||p||h();var N=n.a.createElement("div",{className:"loader"}," ");return g&&E&&E.length>0&&(N=E.map((function(e,r){return n.a.createElement(f,u({active:e==a,key:"key-".concat(r)},e,{onClick:function(){console.log("onclick"),t(e)}}))}))),n.a.createElement(n.a.Fragment,null,n.a.createElement(i.hb,{className:"has-shadow"},n.a.createElement(i.t,{className:"container"},n.a.createElement(i.ib,{src:"brightleafjs-logo.png",alt:"Brightleat Elements: React and Bulma powered UI framework",onClick:function(e){y(!v)}}),n.a.createElement(i.nb,{className:c()({"is-active":v})},n.a.createElement(i.lb,{className:"navbar-end"},n.a.createElement(i.kb,{title:"Account"},n.a.createElement(i.mb,null,n.a.createElement("a",null,"Dashboard")),n.a.createElement(i.mb,null,n.a.createElement("a",null,"Profile")),n.a.createElement(i.mb,null,n.a.createElement("a",null,"Settings")),n.a.createElement(i.jb,null),n.a.createElement(i.mb,null,n.a.createElement("div",null,"Logout"))))))),n.a.createElement(i.r,null,n.a.createElement(i.q,{as:"aside",is:"2",isFullheight:!0,className:"aside hero is-fullheight"},n.a.createElement("div",null,n.a.createElement("div",{className:"compose has-text-centered"},n.a.createElement(i.f,{isDanger:!0,isAnchor:!0,className:"is-block is-bold",href:"#"},n.a.createElement("span",{className:"compose"},"Compose"))),n.a.createElement("div",{className:"main"},n.a.createElement("a",{href:"#",className:"item active"},n.a.createElement(i.K,{fas:!0,icon:"inbox"}),n.a.createElement("span",{className:"name"},"Inbox")),n.a.createElement("a",{href:"#",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"star"}),n.a.createElement("span",{className:"name"},"Starred")),n.a.createElement("a",{href:"#",className:"item"},n.a.createElement(i.K,{far:!0,icon:"envelope"}),n.a.createElement("span",{className:"name"},"Sent Mail")),n.a.createElement("a",{href:"#",className:"item"},n.a.createElement(i.K,{far:!0,icon:"folder"}),n.a.createElement("span",{className:"name"},"Folders")),n.a.createElement("a",{href:"#HERO",className:"item"},n.a.createElement(i.K,{fab:!0,icon:"superpowers"}),n.a.createElement("span",{className:"name"},"Hero")),n.a.createElement("a",{href:"#LANDING",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"plane-arrival"}),n.a.createElement("span",{className:"name"},"Landing")),n.a.createElement("a",{href:"#COVER",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"book-open"}),n.a.createElement("span",{className:"name"},"Cover")),n.a.createElement("a",{href:"#IMAGE_TIMELINE",className:"item"},n.a.createElement(i.K,{far:!0,icon:"images"}),n.a.createElement("span",{className:"name"},"Insta")),n.a.createElement("a",{href:"#ADMIN",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"cogs"}),n.a.createElement("span",{className:"name"},"Admin")),n.a.createElement("a",{href:"#CHEATSHEET",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"code"}),n.a.createElement("span",{className:"name"},"CheatSheet")),n.a.createElement("a",{href:"#BLOG",className:"item"},n.a.createElement(i.K,{fas:!0,icon:"blog"}),n.a.createElement("span",{className:"name"},"Blog"))))),n.a.createElement(i.q,{className:"column is-4 messages hero is-fullheight",id:"message-feed"},n.a.createElement(i.v,{className:"action-buttons"},n.a.createElement(i.v,{isGrouped:!0,className:"control is-grouped"},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"chevron-down"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"sync"}))),n.a.createElement(i.v,{isGrouped:!0},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"inbox"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"exclamation-circle"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"trash-alt"}))),n.a.createElement(i.v,{isGrouped:!0},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"folder"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"tag"}))),n.a.createElement(i.v,{isGrouped:!0,className:"pg"},n.a.createElement(i.Sb,{as:"div"},"1-10 of 100"),n.a.createElement(i.f,{isLink:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"chevron-left"})),n.a.createElement(i.f,{isLink:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"chevron-right"})))),n.a.createElement("div",{className:"inbox-messages",id:"inbox-messages"},N)),n.a.createElement(i.q,{is:"6",isHidden:a.picked,className:"message hero is-fullheight",id:"message-pane"},n.a.createElement("div",{className:"action-buttons"},n.a.createElement(i.v,{isGrouped:!0},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"inbox"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"exclamation-circle"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"trash-alt"}))),n.a.createElement(i.v,{isGrouped:!0},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"exclamation-circle"})),n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"trash-alt"}))),n.a.createElement(i.v,{isGrouped:!0},n.a.createElement(i.f,{isSmall:!0,isAnchor:!0},n.a.createElement(i.b,{fa:!0,icon:"folder"})),n.a.createElement(i.f,{isSmall:!0},n.a.createElement(i.b,{fa:!0,icon:"tag"})))),n.a.createElement(i.c,{className:"message-preview"},n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{src:"https://placehold.it/128x128"})),n.a.createElement("div",{className:"address"},n.a.createElement("div",{className:"name"},a.from),n.a.createElement("div",{className:"email"},a.email)),n.a.createElement("hr",null),n.a.createElement(i.u,{className:"content"},a.fullMail))))),n.a.createElement(i.C,null,n.a.createElement(i.t,null,n.a.createElement(i.u,{hasTextCentered:!0},n.a.createElement("p",null,n.a.createElement("strong",null,"Original Bulma Templates")," by"," ",n.a.createElement("a",{href:"https://github.com/dansup"},"Daniel Supernault"),".",n.a.createElement("strong",null,"Brightleaf/Elements")," by"," ",n.a.createElement("a",{href:"https://github.com/kevnz"},"Kevin Isom"),"."),n.a.createElement("p",null,n.a.createElement("a",{className:"icon",href:"https://github.com/brightleaf/elements"},n.a.createElement(i.b,{fab:!0,icon:"github"})))))))};a.default=p},92:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useStyleSheet=void 0;var r=t(0);const n=e=>{(0,r.useEffect)(()=>{const a=document.createElement("link");return a.type="text/css",a.rel="stylesheet",a.href=e,document.getElementsByTagName("head")[0].appendChild(a),()=>{document.getElementsByTagName("head")[0].removeChild(a)}},[e])};a.useStyleSheet=n;var l=n;a.default=l}}]);