(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(61),o=n(3),c=n(93),i=n(91),s=n(92);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=u(Object(o.Sb)(!1),2),t=e[0],n=e[1],a=u(Object(o.Sb)(!1),2),m=a[0],d=a[1];return Object(l.useStyleSheet)("code.css"),r.a.createElement(o.Ab,null,r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(o.d,null,r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/components"},"Components")),r.a.createElement(o.e,null,r.a.createElement("a",{href:"#/modals"},"Modal")))),r.a.createElement(o.F,{isPrimary:!0,isBold:!0},r.a.createElement(o.G,null,r.a.createElement(o.Rb,null,"Modal"),r.a.createElement(o.Cb,{as:"p",is:"4"},"A classic ",r.a.createElement("strong",null,"modal")," overlay, in which you can include any content you want"))),r.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},r.a.createElement(s.a,null)),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},r.a.createElement(o.bb,null,r.a.createElement(o.c,null,r.a.createElement("div",null,"test")))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Box, Container, Modal } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Modal>\n        <Box>\n          <div>test</div>\n        </Box>\n      </Modal>\n    </Container>\n  )\n}\n          ")))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},r.a.createElement(o.bb,{ModalType:o.cb,triggerFn:n,isActive:t},r.a.createElement(o.fb,{title:"ModalTitle"}),r.a.createElement(o.db,null,"Hey Hey"),r.a.createElement(o.eb,null,r.a.createElement(o.f,{isSuccess:!0,onClick:function(e){e.preventDefault(),n(!1)}},"Save changes"),r.a.createElement(o.f,{onClick:function(e){e.preventDefault(),n(!1)}},"Cancel")))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Box, Container, Modal, useToggle } from '@brightleaf/elements'\nexport default () => {\n  const [modalShown, setModalShown] = useToggle(false)\n  return (\n    <Container>\n      <Modal\n        ModalType={ModalCard}\n        triggerFn={setModalShown}\n        isActive={modalShown}\n      >\n        <ModalCardHead title=\"ModalTitle\"></ModalCardHead>\n        <ModalCardBody>Hey Hey</ModalCardBody>\n        <ModalCardFoot>\n          <Button\n            isSuccess\n            onClick={e => {\n              e.preventDefault()\n              setModalShown(false)\n            }}\n          >\n            Save changes\n          </Button>\n          <Button\n            onClick={e => {\n              e.preventDefault()\n              setModalShown(false)\n            }}\n          >\n            Cancel\n          </Button>\n        </ModalCardFoot>\n      </Modal>\n    </Container>\n  )\n}\n          ")))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},"Image Modal"," ",r.a.createElement(o.bb,null,r.a.createElement(o.K,{is4by3:!0,src:"https://bulma.io/images/placeholders/1280x960.png"}))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Image, Modal } from '@brightleaf/elements'\nexport default () => {\n\n  return (\n    <Container>\n      <Modal>\n        <Image\n          is4by3\n          src=\"https://bulma.io/images/placeholders/1280x960.png\"\n        />\n      </Modal>\n    </Container>\n  )\n}\n          ")))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},"A custom trigger that"," ",r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),d(!1)}},"will show")," ","the modal",r.a.createElement(o.bb,{includeTrigger:!1,triggerText:"Display",triggerFn:d,isActive:m},r.a.createElement(o.c,null,r.a.createElement("div",null,"Triggered")))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Box, Container, Modal, useToggle } from '@brightleaf/elements'\nexport default () => {\n  const [modalShown, setModalShown] = useToggle(false)\n\n  return (\n    <Container>\n      <a\n        href=\"#\"\n        onClick={e => {\n          e.preventDefault()\n          setModalShownNoTrigger(false)\n        }}\n      >\n        Show that\n      </a>\n      <Modal\n        includeTrigger={false}\n        triggerText=\"Display\"\n        triggerFn={setModalShownNoTrigger}\n        isActive={modalShownNoTrigger}\n      >\n        <Box>\n          <div>Triggered</div>\n        </Box>\n      </Modal>\n    </Container>\n  )\n}\n          ")))),r.a.createElement(c.a,null,r.a.createElement(o.r,null,r.a.createElement(o.q,{isOneThird:!0},"Custom Trigger Text",r.a.createElement(o.bb,{triggerText:"Display Modal"},r.a.createElement(o.c,null,r.a.createElement("div",null,"test")))),r.a.createElement(o.q,{isTwoThirds:!0},r.a.createElement(i.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Box, Container, Modal } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Modal triggerText=\"Display Modal\">\n        <Box>\n          <div>test</div>\n        </Box>\n      </Modal>\n    </Container>\n  )\n}\n          ")))))}},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useStyleSheet=void 0;var a=n(0);const r=e=>{(0,a.useEffect)(()=>{const t=document.createElement("link");return t.type="text/css",t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t),()=>{document.getElementsByTagName("head")[0].removeChild(t)}},[e])};t.useStyleSheet=r;var l=r;t.default=l},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),r=n.n(a),l=n(96),o=n(94),c=n(95);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.a.registerLanguage("jsx",o.a);var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return s(e,["children"]),r.a.createElement(l.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,a),o&&u(n,o),t}(a.Component)},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a),l=n(27),o=n(3);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){return r.a.createElement(l.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return r.a.createElement(o.Db,{className:a?"is-active":""},r.a.createElement(l.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(i,{to:"/containers"},"Container"),r.a.createElement(i,{to:"/level"},"Level"),r.a.createElement(i,{to:"/media"},"Media Object"),r.a.createElement(i,{to:"/hero"},"Hero"),r.a.createElement(i,{to:"/section"},"Section"),r.a.createElement(i,{to:"/footer"},"Footer"),r.a.createElement(i,{to:"/tiles"},"Tiles")))},u=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(i,{to:"/box"},"Box"),r.a.createElement(i,{to:"/buttons"},"Button"),r.a.createElement(i,{to:"/collapse"},"Collapse"),r.a.createElement(i,{to:"/content"},"Content"),r.a.createElement(i,{to:"/delete"},"Delete"),r.a.createElement(i,{to:"/icons"},"Icon"),r.a.createElement(i,{to:"/images"},"Image"),r.a.createElement(i,{to:"/media"},"MediaObject"),r.a.createElement(i,{to:"/notifications"},"Notifications"),r.a.createElement(i,{to:"/progress"},"Progress Bars"),r.a.createElement(i,{to:"/tables"},"Tables"),r.a.createElement(i,{to:"/tags"},"Tag"),r.a.createElement(i,{to:"/titles"},"Title")))},m=function(){return r.a.createElement(o.Nb,null,r.a.createElement(o.Eb,null,r.a.createElement(i,{to:"/autocomplete"},"AutoComplete"),r.a.createElement(i,{to:"/breadcrumb"},"Breadcrumb"),r.a.createElement(i,{to:"/card"},"Card"),r.a.createElement(i,{to:"/dropdown"},"DropDown"),r.a.createElement(i,{to:"/menu"},"Menu"),r.a.createElement(i,{to:"/messages"},"Messages"),r.a.createElement(i,{to:"/modals"},"Modal"),r.a.createElement(i,{to:"/navbars"},"NavBar"),r.a.createElement(i,{to:"/notice"},"Notice"),r.a.createElement(i,{to:"/pagination"},"Pagination"),r.a.createElement(i,{to:"/panels"},"Panel"),r.a.createElement(i,{to:"/tabs"},"Tabs")))}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),l=function(e){var t=e.children;e.isPrimary;return r.a.createElement("div",{className:"snippet"},t)}}}]);