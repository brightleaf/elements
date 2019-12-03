(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(93),l=n(62),c=n(3),i=n(94),u=n(91),s=n(92);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){Object(o.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(o.useStyleSheet)("code.css");var e=m(Object(a.useState)(""),2),t=e[0],n=e[1],f=[{name:"First",id:1},{name:"Second",id:2},{name:"Third",id:3}].filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}));return r.a.createElement(c.Bb,{className:"App"},r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(c.d,null,r.a.createElement(c.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(c.e,null,r.a.createElement("a",{href:"#/components"},"Components")),r.a.createElement(c.e,null,r.a.createElement("a",{href:"#/autocomplete"},"AutoComplete")))),r.a.createElement(c.G,{isPrimary:!0,isBold:!0},r.a.createElement(c.H,null,r.a.createElement(c.Sb,null,"AutoComplete"),r.a.createElement(c.Db,{as:"p",is:"4"},"A simple ",r.a.createElement("strong",null,"AutoComplete")))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(s.a,null)),r.a.createElement(i.a,null,r.a.createElement(c.r,null,r.a.createElement(c.q,{isHalf:!0,className:"snippet-preview"},r.a.createElement(c.a,{list:f,onSelect:function(e){console.info("Selected Item",e)},onValueChange:function(e){console.log("Target value",e.target.value),n(e.target.value)}})),r.a.createElement(c.q,{isHalf:!0},r.a.createElement(u.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { AutoComplete } from '@brightleaf/elements'\nconst items = [\n  { name: 'First', id: 1 },\n  { name: 'Second', id: 2 },\n  { name: 'Third', id: 3 },\n]\n\nexport default () => {\n  const [filter, setFilter] = useState('')\n  const filteredItems = items.filter(\n    i => i.name.toLowerCase().indexOf(filter.toLowerCase()) > -1\n  )\n  return (\n    <AutoComplete\n      list={filteredItems}\n      onSelect={item => {\n        console.info('Selected Item', item)\n      }}\n      onValueChange={e => {\n        console.log('Target value', e.target.value)\n        setFilter(e.target.value)\n      }}\n    />\n  )\n}\n")))))}},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=r;var o=r;t.default=o},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),o=n(97),l=n(95),c=n(96);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return u(e,["children"]),r.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&s(n.prototype,a),l&&s(n,l),t}(a.Component)},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),o=n(29),l=n(3);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(o.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(l.Eb,{className:a?"is-active":""},r.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},u=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},s=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(l.Ob,null,r.a.createElement(l.Fb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/confirm"},"ConfirmButton"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var o=r;t.default=o},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);