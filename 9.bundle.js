(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(59),o=n(60),c=n(80),u=n(4),s=n(82),i=n(81);t.default=function(){return Object(r.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(o.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n  "),Object(r.useStyleSheet)("code.css"),l.a.createElement(u.wb,null,l.a.createElement(u.D,{isLight:!0,isBold:!0},l.a.createElement(u.E,null,l.a.createElement(u.Gb,null,"Content"),l.a.createElement(u.yb,{as:"p",is:"4"},"A single class to handle ",l.a.createElement("strong",null,"WYSIWYG")," generated content, where only ",l.a.createElement("strong",null,"HTML")," tags are available"))),l.a.createElement(i.b,null),l.a.createElement(s.a,null,l.a.createElement(u.p,null,l.a.createElement(u.o,{isHalf:!0,className:"snippet-preview"},l.a.createElement(u.r,null,l.a.createElement("p",null,"When you can","'","t use the CSS classes you want, or when you just want to directly use HTML tags, use ",l.a.createElement("code",null,"content")," as container. It can handle almost any HTML tag:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"<p>")," paragraphs"),l.a.createElement("li",null,l.a.createElement("code",null,"<ul>")," ",l.a.createElement("code",null,"<ol>")," ",l.a.createElement("code",null,"<dl>")," lists"),l.a.createElement("li",null,l.a.createElement("code",null,"<h1>")," to ",l.a.createElement("code",null,"<h6>")," headings"),l.a.createElement("li",null,l.a.createElement("code",null,"<blockquote>")," quotes"),l.a.createElement("li",null,l.a.createElement("code",null,"<em>")," and ",l.a.createElement("code",null,"<strong>")),l.a.createElement("li",null,l.a.createElement("code",null,"<table>")," ",l.a.createElement("code",null,"<tr>")," ",l.a.createElement("code",null,"<th>")," ",l.a.createElement("code",null,"<td>")," tables")),l.a.createElement("p",null,"This ",l.a.createElement("code",null,"content")," object can be used in ",l.a.createElement("em",null,"any")," ","context where you just want to (or can only) write some"," ",l.a.createElement("strong",null,"text"),". For example, it","'","s used for the paragraph you","'","re currently reading."),l.a.createElement("p",null,"For more details see the"," ",l.a.createElement("a",{href:"https://bulma.io/documentation/elements/content/",target:"_blank",rel:"noopener noreferrer"},"Bulma docs")))),l.a.createElement(u.o,{isHalf:!0},l.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Content } from '@brightleaf/elements'\n\nexport default () => {\n\n  return (\n    <Content>\n      <p>\n        When you can{\"'\"}t use the CSS classes you want, or when you\n        just want to directly use HTML tags, use <code>content</code> as\n        container. It can handle almost any HTML tag:\n      </p>\n      <ul>\n        <li>\n          <code>&lt;p&gt;</code> paragraphs\n        </li>\n        <li>\n          <code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code>{' '}\n          <code>&lt;dl&gt;</code> lists\n        </li>\n        <li>\n          <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings\n        </li>\n        <li>\n          <code>&lt;blockquote&gt;</code> quotes\n        </li>\n        <li>\n          <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code>\n        </li>\n        <li>\n          <code>&lt;table&gt;</code> <code>&lt;tr&gt;</code>{' '}\n          <code>&lt;th&gt;</code> <code>&lt;td&gt;</code> tables\n        </li>\n      </ul>\n      <p>\n        This <code>content</code> object can be used in <em>any</em>{' '}\n        context where you just want to (or can only) write some{' '}\n        <strong>text</strong>. For example, it{\"'\"}s used for the\n        paragraph you{\"'\"}re currently reading.\n      </p>\n      <p>\n        For more details see the{' '}\n        <a\n          href=\"https://bulma.io/documentation/elements/content/\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          Bulma docs\n        </a>\n      </p>\n    </Content>\n  )\n}\n")))))}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=l;var r=l;t.default=r},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const l=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=l;var r=l;t.default=r},80:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),l=n.n(a),r=n(85),o=n(83),c=n(84);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.registerLanguage("jsx",o.a);var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.children;s(e,["children"]);return l.a.createElement(r.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&i(n.prototype,o),u&&i(n,u),t}()},81:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return m});var a=n(0),l=n.n(a),r=n(23),o=n(4);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=function(e){return l.a.createElement(r.b,null,function(t){var n=t.location,a=e.to===n.pathname;return l.a.createElement(o.zb,{className:a?"is-active":""},l.a.createElement(r.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},s=function(){return l.a.createElement(o.Cb,null,l.a.createElement(o.Ab,null,l.a.createElement(u,{to:"/containers"},"Container"),l.a.createElement(u,{to:"/level"},"Level"),l.a.createElement(u,{to:"/media"},"Media Object"),l.a.createElement(u,{to:"/hero"},"Hero"),l.a.createElement(u,{to:"/section"},"Section"),l.a.createElement(u,{to:"/footer"},"Footer"),l.a.createElement(u,{to:"/tiles"},"Tiles")))},i=function(){return l.a.createElement(o.Cb,null,l.a.createElement(o.Ab,null,l.a.createElement(u,{to:"/box"},"Box"),l.a.createElement(u,{to:"/buttons"},"Button"),l.a.createElement(u,{to:"/content"},"Content"),l.a.createElement(u,{to:"/delete"},"Delete"),l.a.createElement(u,{to:"/icons"},"Icon"),l.a.createElement(u,{to:"/images"},"Image"),l.a.createElement(u,{to:"/notifications"},"Notifications"),l.a.createElement(u,{to:"/progress"},"Progress Bars"),l.a.createElement(u,{to:"/tables"},"Tables"),l.a.createElement(u,{to:"/tags"},"Tag"),l.a.createElement(u,{to:"/titles"},"Title")))},m=function(){return l.a.createElement(o.Cb,null,l.a.createElement(o.Ab,null,l.a.createElement(u,{to:"/autocomplete"},"AutoComplete"),l.a.createElement(u,{to:"/breadcrumb"},"Breadcrumb"),l.a.createElement(u,{to:"/card"},"Card"),l.a.createElement(u,{to:"/dropdown"},"DropDown"),l.a.createElement(u,{to:"/menu"},"Menu"),l.a.createElement(u,{to:"/messages"},"Messages"),l.a.createElement(u,{to:"/modals"},"Modal"),l.a.createElement(u,{to:"/navbars"},"NavBar"),l.a.createElement(u,{to:"/pagination"},"Pagination"),l.a.createElement(u,{to:"/panels"},"Panel"),l.a.createElement(u,{to:"/tabs"},"Tabs")))}},82:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),l=n.n(a),r=function(e){var t=e.children;e.isPrimary;return l.a.createElement("div",{className:"snippet"},t)}}}]);