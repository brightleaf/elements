(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),l=a(59),c=a(84),r=a(4),i=a(78),s=a(76);n.default=function(){return Object(c.useTitle)("Panel example from @brightleaf/elements"),Object(l.useStyleSheet)("code.css"),o.a.createElement(i.a,null,o.a.createElement(r.p,null,o.a.createElement(r.o,{isOneThird:!0},o.a.createElement(r.lb,{heading:"repositories"},o.a.createElement(r.mb,null,o.a.createElement(r.s,{hasIconsLeft:!0},o.a.createElement("input",{className:"input is-small",type:"text",placeholder:"search"}),o.a.createElement(r.G,{isSmall:!0,isLeft:!0,fas:!0,icon:"search"}))),o.a.createElement(r.nb,null,o.a.createElement("a",{className:"is-active"},"all"),o.a.createElement("a",null,"public"),o.a.createElement("a",null,"private"),o.a.createElement("a",null,"sources"),o.a.createElement("a",null,"forks")),o.a.createElement(r.mb,{as:"a",isActive:!0},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"bulma"),o.a.createElement(r.mb,{as:"a"},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"marksheet"),o.a.createElement(r.mb,{as:"a"},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"minireset.css"),o.a.createElement(r.mb,{as:"a"},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"jgthms.github.io"),o.a.createElement(r.mb,{as:"a"},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"daniellowtw/infboard"),o.a.createElement(r.mb,{as:"a"},o.a.createElement(r.G,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"mojs"),o.a.createElement(r.mb,{as:"label"},o.a.createElement("input",{type:"checkbox"}),"remember me"),o.a.createElement(r.mb,null,o.a.createElement(r.f,{isLink:!0,isOutlined:!0,isFullWidth:!0},"reset all filters")))),o.a.createElement(r.o,{isTwoThirds:!0},o.a.createElement(s.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport { Control, Icon, Panel, PanelBlock, PanelTabs } from \'@brightleaf/elements\'\nexport default () => {\n  return (\n    <Panel heading="repositories">\n      <PanelBlock>\n        <Control hasIconsLeft>\n          <input\n            className="input is-small"\n            type="text"\n            placeholder="search"\n          />\n          <Icon isSmall isLeft fas icon="search"></Icon>\n        </Control>\n      </PanelBlock>\n      <PanelTabs>\n        <a className="is-active">all</a>\n        <a>public</a>\n        <a>private</a>\n        <a>sources</a>\n        <a>forks</a>\n      </PanelTabs>\n      <PanelBlock as="a" isActive>\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        bulma\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        marksheet\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        minireset.css\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n        jgthms.github.io\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>\n        daniellowtw/infboard\n      </PanelBlock>\n      <PanelBlock as="a">\n        <Icon iconClassName="panel-icon" fas icon="code-branch"></Icon>\n        mojs\n      </PanelBlock>\n      <PanelBlock as="label">\n        <input type="checkbox"></input>\n        remember me\n      </PanelBlock>\n      <PanelBlock>\n        <Button isLink isOutlined isFullWidth>\n          reset all filters\n        </Button>\n      </PanelBlock>\n    </Panel>\n  )\n}\n'))))}},76:function(e,n,a){"use strict";a.d(n,"a",function(){return b});var t=a(0),o=a.n(t),l=a(82),c=a(80),r=a(81);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function u(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}l.a.registerLanguage("jsx",c.a);var b=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,f(n).apply(this,arguments))}var a,c,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,t["Component"]),a=n,(c=[{key:"render",value:function(){var e=this.props,n=e.children;s(e,["children"]);return o.a.createElement(l.a,{language:"jsx",style:r.a,showLineNumbers:!1,wrapLines:!0},n)}}])&&u(a.prototype,c),i&&u(a,i),n}()},78:function(e,n,a){"use strict";a.d(n,"a",function(){return l});var t=a(0),o=a.n(t),l=function(e){var n=e.children;e.isPrimary;return o.a.createElement("div",{className:"snippet"},n)}},84:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useTitle=n.default=void 0;var t=a(0);const o=e=>{(0,t.useEffect)(()=>{document.title=e},[e])};n.useTitle=o;var l=o;n.default=l}}]);