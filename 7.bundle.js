(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(59),l=n(60),c=n(4),i=n(84),u=n(82),s=n(83);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){Object(o.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(o.useStyleSheet)("code.css");var e=m(Object(r.useState)(""),2),t=e[0],n=e[1],f=[{name:"First",id:1},{name:"Second",id:2},{name:"Third",id:3}].filter(function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1});return a.a.createElement(c.wb,{className:"App"},a.a.createElement(c.D,{isLight:!0,isBold:!0},a.a.createElement(c.E,null,a.a.createElement(c.Gb,null,"AutoComplete"),a.a.createElement(c.yb,{as:"p",is:"4"},"A simple ",a.a.createElement("strong",null,"autocomplete")))),a.a.createElement(s.a,null),a.a.createElement(i.a,null,a.a.createElement(c.p,null,a.a.createElement(c.o,{isHalf:!0,className:"snippet-preview"},a.a.createElement(c.a,{list:f,onSelect:function(e){console.info("Selected Item",e)},onValueChange:function(e){console.log("Target value",e.target.value),n(e.target.value)}})),a.a.createElement(c.o,{isHalf:!0},a.a.createElement(u.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { AutoComplete } from '@brightleaf/elements'\nconst items = [\n  { name: 'First', id: 1 },\n  { name: 'Second', id: 2 },\n  { name: 'Third', id: 3 },\n]\n\nexport default () => {\n  const [filter, setFilter] = useState('')\n  const filteredItems = items.filter(\n    i => i.name.toLowerCase().indexOf(filter.toLowerCase()) > -1\n  )\n  return (\n    <AutoComplete\n      list={filteredItems}\n      onSelect={item => {\n        console.info('Selected Item', item)\n      }}\n      onValueChange={e => {\n        console.log('Target value', e.target.value)\n        setFilter(e.target.value)\n      }}\n    />\n  )\n}\n")))))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var r=n(0);const a=e=>{(0,r.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=a;var o=a;t.default=o},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var r=n(0);const a=e=>{(0,r.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=a;var o=a;t.default=o},82:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),a=n.n(r),o=n(87),l=n(85),c=n(86);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;u(e,["children"]);return a.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&s(n.prototype,l),i&&s(n,i),t}()},83:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"a",function(){return m});var r=n(0),a=n.n(r),o=n(23),l=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){return a.a.createElement(o.b,null,function(t){var n=t.location,r=e.to===n.pathname;return a.a.createElement(l.zb,{className:r?"is-active":""},a.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},u=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(i,{to:"/containers"},"Container"),a.a.createElement(i,{to:"/level"},"Level"),a.a.createElement(i,{to:"/media"},"Media Object"),a.a.createElement(i,{to:"/hero"},"Hero"),a.a.createElement(i,{to:"/section"},"Section"),a.a.createElement(i,{to:"/footer"},"Footer"),a.a.createElement(i,{to:"/tiles"},"Tiles")))},s=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(i,{to:"/box"},"Box"),a.a.createElement(i,{to:"/buttons"},"Button"),a.a.createElement(i,{to:"/content"},"Content"),a.a.createElement(i,{to:"/delete"},"Delete"),a.a.createElement(i,{to:"/icons"},"Icon"),a.a.createElement(i,{to:"/images"},"Image"),a.a.createElement(i,{to:"/notifications"},"Notifications"),a.a.createElement(i,{to:"/progress"},"Progress Bars"),a.a.createElement(i,{to:"/tables"},"Tables"),a.a.createElement(i,{to:"/tags"},"Tag"),a.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),a.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),a.a.createElement(i,{to:"/card"},"Card"),a.a.createElement(i,{to:"/dropdown"},"DropDown"),a.a.createElement(i,{to:"/menu"},"Menu"),a.a.createElement(i,{to:"/messages"},"Messages"),a.a.createElement(i,{to:"/modals"},"Modal"),a.a.createElement(i,{to:"/navbars"},"NavBar"),a.a.createElement(i,{to:"/pagination"},"Pagination"),a.a.createElement(i,{to:"/panels"},"Panel"),a.a.createElement(i,{to:"/tabs"},"Tabs")))}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),a=n.n(r),o=function(e){var t=e.children;e.isPrimary;return a.a.createElement("div",{className:"snippet"},t)}}}]);