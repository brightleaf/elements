(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{181:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),l=t(97),c=t(93),i=t(91),s=t(92);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var n=e.children;return r.a.createElement("div",{className:"block"},n)};n.default=function(){var e=u(Object(a.useState)(!1),2),n=e[0],t=e[1],f=u(Object(a.useState)(!0),2),p=f[0],d=f[1],E=u(Object(a.useState)(!0),2),b=E[0],h=E[1];return r.a.createElement(o.Ab,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(o.d,null,r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/elements"},"Elements")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/notifications"},"Notification")))),r.a.createElement(o.F,{isPrimary:!0,isBold:!0},r.a.createElement(o.G,null,r.a.createElement(o.Rb,null,"Collapse"),r.a.createElement(o.Cb,{as:"p",is:"4"},"Show/Hide ",r.a.createElement("strong",null,"Collapse")," blocks"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(s.b,null)),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},r.a.createElement(o.p,{isShown:n},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",r.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",r.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit"),!n&&r.a.createElement("button",{className:"button",onClick:function(e){t(!n)}},"Show"),n&&r.a.createElement("button",{className:"button",onClick:function(e){t(!n)}},"Hide")),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(l.a,null,r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  const [showNotification, setShowNotification] = useState(false)\n  const notifRef = useRef()\n\n  return (\n    <Container isOneThird>\n      <Notification\n        ref={notifRef}\n        isPrimary\n        isShown={showNotification}\n        onDismissed={e => {\n          console.log('onDismiss hit')\n          setShowNotification(!showNotification)\n        }}\n      > ... </Notification>\n      {!showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.show()\n          }}\n        >\n          Show\n        </button>\n      )}\n      {showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.hide()\n          }}\n        >\n          Hide\n        </button>\n      )}\n    </Container>\n  )\n}\n          "))))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},r.a.createElement(m,null,!p&&r.a.createElement(o.f,{onClick:function(e){d(!p)}},"Show"),p&&r.a.createElement(o.f,{onClick:function(e){d(!p)}},"Hide")),r.a.createElement(o.wb,{heading:"repositories"},r.a.createElement(o.xb,null,r.a.createElement(o.u,{hasIconsLeft:!0},r.a.createElement("input",{className:"input is-small",type:"text",placeholder:"search"}),r.a.createElement(o.J,{isSmall:!0,isLeft:!0,fas:!0,icon:"search"}))),r.a.createElement(o.p,{isPrimary:!0,isShown:p},r.a.createElement(o.yb,null,r.a.createElement("a",{className:"is-active"},"all"),r.a.createElement("a",null,"public"),r.a.createElement("a",null,"private"),r.a.createElement("a",null,"sources"),r.a.createElement("a",null,"forks")),r.a.createElement(o.xb,{as:"a",isActive:!0},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"bulma"),r.a.createElement(o.xb,{as:"a"},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"marksheet"),r.a.createElement(o.xb,{as:"a"},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"minireset.css"),r.a.createElement(o.xb,{as:"a"},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"book"}),"jgthms.github.io"),r.a.createElement(o.xb,{as:"a"},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"daniellowtw/infboard"),r.a.createElement(o.xb,{as:"a"},r.a.createElement(o.J,{iconClassName:"panel-icon",fas:!0,icon:"code-branch"}),"mojs"),r.a.createElement(o.xb,{as:"label"},r.a.createElement("input",{type:"checkbox"}),"remember me"),r.a.createElement(o.xb,null,r.a.createElement(o.f,{isLink:!0,isOutlined:!0,isFullWidth:!0},"reset all filters"))))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(l.a,null,r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},'\nimport React, { useState } from \'react\'\nimport { Container, Notification } from \'@brightleaf/elements\'\nexport default () => {\n  const [showPanel, setShowPanel] = useState(true)\n  return (\n    <Container>\n      {!showPanel && (\n        <Button\n          onClick={e => {\n            setShowPanel(!showPanel)\n          }}\n        >\n          Show\n        </Button>\n      )}\n      {showPanel && (\n        <Button\n          onClick={e => {\n            setShowPanel(!showPanel)\n          }}\n        >\n          Hide\n        </Button>\n      )}\n      <Panel heading="repositories">\n        <PanelBlock>\n          <Control hasIconsLeft>\n            <input\n              className="input is-small"\n              type="text"\n              placeholder="search"\n            />\n            <Icon isSmall isLeft fas icon="search"></Icon>\n          </Control>\n        </PanelBlock>\n\n        <Collapse isPrimary isShown={showPanel}>\n          <PanelTabs>\n            <a className="is-active">all</a>\n            <a>public</a>\n            <a>private</a>\n            <a>sources</a>\n            <a>forks</a>\n          </PanelTabs>\n          <PanelBlock as="a" isActive>\n            <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n            bulma\n          </PanelBlock>\n          <PanelBlock as="a">\n            <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n            marksheet\n          </PanelBlock>\n          <PanelBlock as="a">\n            <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n            minireset.css\n          </PanelBlock>\n          <PanelBlock as="a">\n            <Icon iconClassName="panel-icon" fas icon="book"></Icon>\n            jgthms.github.io\n          </PanelBlock>\n          <PanelBlock as="a">\n            <Icon\n              iconClassName="panel-icon"\n              fas\n              icon="code-branch"\n            ></Icon>\n            daniellowtw/infboard\n          </PanelBlock>\n          <PanelBlock as="a">\n            <Icon\n              iconClassName="panel-icon"\n              fas\n              icon="code-branch"\n            ></Icon>\n            mojs\n          </PanelBlock>\n          <PanelBlock as="label">\n            <input type="checkbox"></input>\n            remember me\n          </PanelBlock>\n          <PanelBlock>\n            <Button isLink isOutlined isFullWidth>\n              reset all filters\n            </Button>\n          </PanelBlock>\n        </Collapse>\n      </Panel>\n    </Container>\n  )\n}\n          '))))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},r.a.createElement(o.h,null,r.a.createElement(o.l,{title:"Component"},r.a.createElement(o.m,{onClick:function(e){e.preventDefault(),console.info("show card thing",b),h(!b)}},r.a.createElement(o.J,{icon:b?"angle-down":"angle-up",fas:!0}))),r.a.createElement(o.p,{isShown:b},r.a.createElement(o.i,null,r.a.createElement(o.t,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",r.a.createElement("a",{href:"#"},"@bulmaio"),". ",r.a.createElement("a",{href:"#"},"#css")," ",r.a.createElement("a",{href:"#"},"#responsive"),r.a.createElement("br",null),r.a.createElement("time",{dateTime:"2016-1-1"},"11:09 PM - 1 Jan 2016"))),r.a.createElement(o.j,null,r.a.createElement(o.k,null,r.a.createElement("a",{href:"#",onClick:function(e){console.info("clicked"),e.preventDefault()}},"Save")),r.a.createElement(o.k,null,r.a.createElement("a",{href:"#"},"Edit")),r.a.createElement(o.k,null,r.a.createElement("a",{href:"#"},"Delete")))))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(l.a,null,r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},'\nimport React, { useState } from \'react\'\nimport { Collapse, Container, Card, CardBody, CardHeader,\n  CardHeaderIcon, CardFooter, CardFooterItem, Icon ,\n} from \'@brightleaf/elements\'\nexport default () => {\n  const [showCard, setShowCard] = useState(true)\n  return (\n    <Container>\n      <Card>\n        <CardHeader title="Component">\n          <CardHeaderIcon\n            onClick={e => {\n              e.preventDefault()\n              console.info(\'show card thing\', showCard)\n              setShowCard(!showCard)\n            }}\n          >\n            <Icon icon={showCard ? \'angle-down\' : \'angle-up\'} fas />\n          </CardHeaderIcon>\n        </CardHeader>\n        <Collapse isShown={showCard}>\n          <CardBody>\n            <Content>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Phasellus nec iaculis mauris.\n              <a href="#">@bulmaio</a>. <a href="#">#css</a>{\' \'}\n              <a href="#">#responsive</a>\n              <br />\n              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>\n            </Content>\n          </CardBody>\n          <CardFooter>\n            <CardFooterItem>\n              <a\n                href="#"\n                onClick={e => {\n                  console.info(\'clicked\')\n                  e.preventDefault()\n                }}\n              >\n                Save\n              </a>\n            </CardFooterItem>\n            <CardFooterItem>\n              <a href="#">Edit</a>\n            </CardFooterItem>\n            <CardFooterItem>\n              <a href="#">Delete</a>\n            </CardFooterItem>\n          </CardFooter>\n        </Collapse>\n      </Card>\n    </Container>\n  )\n}\n          '))))))}},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),r=t.n(a),o=t(96),l=t(94),c=t(95);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}o.a.registerLanguage("jsx",l.a);var d=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,f(n).apply(this,arguments))}var t,a,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,e),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.children;return s(e,["children"]),r.a.createElement(o.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},n)}}])&&u(t.prototype,a),l&&u(t,l),n}(a.Component)},92:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return m}));var a=t(0),r=t.n(a),o=t(27),l=t(3);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(o.b,null,(function(n){var t=n.location,a=e.to===t.pathname;return r.a.createElement(l.Db,{className:a?"is-active":""},r.a.createElement(o.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return r.a.createElement(l.Nb,null,r.a.createElement(l.Eb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(l.Nb,null,r.a.createElement(l.Eb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(l.Nb,null,r.a.createElement(l.Eb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t.n(a),o=function(e){var n=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},n)}},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t.n(a),o=t(2),l=t.n(o);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],a=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e){var n=e.children,t=c(Object(a.useState)(!0),2),o=t[0],i=t[1];return r.a.createElement("div",{className:l()("collapse",{collapsed:o,expanded:!o}),onClick:function(e){i(!o)}},n)}}}]);