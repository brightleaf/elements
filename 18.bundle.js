(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStyles=t.default=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("style");return t.type="text/css",t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyles=r;var o=r;t.default=o},66:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},80:function(e,t,n){"use strict";n.r(t),n.d(t,"CoverTemplate",(function(){return u}));var a=n(0),r=n.n(a),o=n(92),l=n(61),i=n(3),s=n(90);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){Object(o.useStyleSheet)("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"),Object(o.useStyleSheet)("https://fonts.googleapis.com/css?family=Open+Sans"),Object(l.useStyles)("\n  html,\n  body {\n      font-family: 'Open Sans';\n  }\n\n  img {\n      padding: 5px;\n      border: 1px solid #ccc;\n  }\n  ");var e=c(Object(i.Tb)(!1),2),t=e[0],n=e[1],u=c(Object(a.useState)(!1),2),m=u[0],f=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.G,{isFullHeight:!0,isDefault:!0,isBold:!0},r.a.createElement(i.J,null,r.a.createElement(i.hb,null,r.a.createElement(i.t,null,r.a.createElement(i.ib,{src:"brightleaf.png",href:"#",width:"32",height:"32",onClick:function(e){e.preventDefault(),f(!m)}}),r.a.createElement(i.nb,{id:"navbarMenu",isActive:m},r.a.createElement(i.lb,null,r.a.createElement(i.Ob,{isRight:!0},r.a.createElement(i.Fb,null,r.a.createElement(i.Eb,{isActive:!0},r.a.createElement("a",{href:"#HERO"},"Hero")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#BLOG"},"Blog")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#LANDING"},"Landing")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#ADMIN"},"Admin")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#CHEATSHEET"},"Cheatsheet")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#INBOX"},"Inbox")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"#FORUM"},"Forum")),r.a.createElement(i.Eb,null,r.a.createElement("a",{href:"https://brightleaf.github.io/elements"},"Help"))))))))),r.a.createElement(i.H,null,r.a.createElement(i.t,{className:"has-text-centered"},r.a.createElement(i.r,{className:"is-vcentered"},r.a.createElement(i.q,{size:"5"},r.a.createElement(i.L,{is4by3:!0,src:"https://picsum.photos/800/600/?random",alt:"Description"})),r.a.createElement(i.q,{size:"6",className:"is-offset-1"},r.a.createElement(i.Sb,{is:"2"},"Superhero Scaffolding"),r.a.createElement(i.Db,{is:"4"},"Let this cover page describe a product or service."),r.a.createElement("br",null),r.a.createElement("p",{className:"has-text-centered"},r.a.createElement(i.f,{isAnchor:!0,isMedium:!0,isOutlined:!0,isInfo:!0,onClick:function(e){e.preventDefault(),n(!1)}},"Learn More - View Source")))))),r.a.createElement(i.I,null,r.a.createElement(i.t,null,r.a.createElement(i.Ob,{isCentered:!0},r.a.createElement(i.Fb,null,r.a.createElement(i.Eb,null,r.a.createElement("a",null,"And this is the bottom"))))))),r.a.createElement(i.cb,{includeTrigger:!1,triggerText:"Display",triggerFn:n,isActive:t},r.a.createElement(s.a,{className:" xml",languages:["xml"]},'import React, { useState } from \'react\'\nimport { useStyleSheet } from \'@brightleaf/react-hooks/lib/use-stylesheet\'\nimport { useStyles } from \'@brightleaf/react-hooks/lib/use-styles\'\nimport {  Button, Column, Columns, Container, Hero, HeroHead, HeroBody, HeroFooter,\n  Image, NavBar, NavBarEnd, NavBarMenu, NavBarBrand, Title, SubTitle, Tabs, TabItem, TabList,\n} from \'@brightleaf/elements\'\n\nexport const CoverTemplate = () => {\n  useStyleSheet(\n    \'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\'\n  )\n  useStyleSheet(\'https://fonts.googleapis.com/css?family=Open+Sans\')\n  useStyles(`\n  html,\n  body {\n      font-family: \'Open Sans\';\n  }\n\n  img {\n      padding: 5px;\n      border: 1px solid #ccc;\n  }\n  `)\n  const [menuIsActive, setMenuIsActive] = useState(false)\n  return (\n    <Hero isFullHeight isDefault isBold>\n      <HeroHead>\n        <NavBar>\n          <Container>\n            <NavBarBrand\n              src="brightleaf.png"\n              href="#"\n              width="32"\n              height="32"\n              onClick={e => {\n                e.preventDefault()\n                setMenuIsActive(!menuIsActive)\n              }}\n            ></NavBarBrand>\n            <NavBarMenu id="navbarMenu" isActive={menuIsActive}>\n              <NavBarEnd>\n                <Tabs isRight>\n                  <TabList>\n                    <TabItem isActive>\n                      <a href="#HERO">Hero</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="#BLOG">Blog</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="#LANDING">Landing</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="#ADMIN">Admin</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="#CHEATSHEET">Cheatsheet</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="#INBOX">Inbox</a>\n                    </TabItem>\n                    <TabItem>\n                      <a href="https://brightleaf.github.io/elements">Help</a>\n                    </TabItem>\n                  </TabList>\n                </Tabs>\n              </NavBarEnd>\n            </NavBarMenu>\n          </Container>\n        </NavBar>\n      </HeroHead>\n      <HeroBody>\n        <Container className="has-text-centered">\n          <Columns className="is-vcentered">\n            <Column size="5">\n              <Image\n                is4by3\n                src="https://picsum.photos/800/600/?random"\n                alt="Description"\n              />\n            </Column>\n            <Column size="6" className="is-offset-1">\n              <Title is="2">Superhero Scaffolding</Title>\n              <SubTitle is="4">\n                Let this cover page describe a product or service.\n              </SubTitle>\n              <br />\n              <p className="has-text-centered">\n                <Button isAnchor isMedium isOutlined isInfo>\n                  Learn more\n                </Button>\n              </p>\n            </Column>\n          </Columns>\n        </Container>\n      </HeroBody>\n\n      <HeroFooter>\n        <Container>\n          <Tabs isCentered>\n            <TabList>\n              <TabItem>\n                <a>And this is the bottom</a>\n              </TabItem>\n            </TabList>\n          </Tabs>\n        </Container>\n      </HeroFooter>\n    </Hero>\n  )\n}\nexport default CoverTemplate\n          ')))};t.default=u},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),r=n.n(a),o=n(96),l=n(94),i=n(95);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.a.registerLanguage("jsx",l.a);var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return c(e,["children"]),r.a.createElement(o.a,{language:"jsx",style:i.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,a),l&&u(n,l),t}(a.Component)},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var o=r;t.default=o}}]);