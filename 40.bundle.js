(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n(53),l=n(93),c=n(91),s=n(92);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=u(Object(a.useState)(!1),2),t=e[0],n=e[1],m=u(Object(a.useState)(!1),2),f=m[0],p=m[1],d=u(Object(a.useState)(!1),2),E=d[0],b=d[1];return o.a.createElement(r.Ab,null,o.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},o.a.createElement(r.d,null,o.a.createElement(r.e,null,o.a.createElement("a",{href:"#/"},"Home")),o.a.createElement(r.e,null,o.a.createElement("a",{href:"#/elements"},"Elements")),o.a.createElement(r.e,null,o.a.createElement("a",{href:"#/notifications"},"Notice")))),o.a.createElement(r.F,{isPrimary:!0,isBold:!0},o.a.createElement(r.G,null,o.a.createElement(r.Rb,null,"Notice"),o.a.createElement(r.Cb,{as:"p",is:"4"},"Show/Hide simple ",o.a.createElement("strong",null,"notice")," messages"))),o.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},o.a.createElement(s.b,null)),o.a.createElement(l.a,null,o.a.createElement(r.r,null,o.a.createElement(r.q,{isOneThird:!0},o.a.createElement(r.s,null,"Show the notice and have it hide 3 seconds later."),o.a.createElement(i.a,{isPrimary:!0,isShown:!0,duration:3e3,onHide:function(){console.log("on hide")}},o.a.createElement("b",null,"Default")," lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",o.a.createElement("b",null,"Pellentesque risus mi"),", elit")),o.a.createElement(r.q,{isTwoThirds:!0},o.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notice } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notice isPrimary isShown duration={3000}>\n        <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing\n        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit\n      </Notice>\n    </Container>\n  )\n}\n          ")))),o.a.createElement(l.a,null,o.a.createElement(r.r,null,o.a.createElement(r.q,{isOneThird:!0},o.a.createElement(r.s,null,"Trigger the notice to show and have it dismiss after 3 seconds",o.a.createElement(r.f,{disabled:t,onClick:function(e){e.preventDefault(),console.info("showDefaultNotification",t),n(!t)}},"SHOW")),o.a.createElement(i.a,{isPrimary:!0,isShown:t,duration:3e3,onHide:function(){console.log("on hide 2"),n(!1)}},o.a.createElement("b",null,"Show Hide")," lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",o.a.createElement("b",null,"Pellentesque risus mi"),", elit")),o.a.createElement(r.q,{isTwoThirds:!0},o.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notice } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notice isPrimary isShown duration={3000}>\n        <b>Default</b> lorem ipsum dolor sit amet, consectetur adipiscing\n        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit\n      </Notice>\n    </Container>\n  )\n}\n          ")))),o.a.createElement(l.a,null,o.a.createElement(r.r,null,o.a.createElement(r.q,{isOneThird:!0},o.a.createElement(r.s,null,o.a.createElement(r.f,{disabled:f,onClick:function(e){e.preventDefault(),console.info("showDefaultNotification",f),p(!f)}},"SHOW")),o.a.createElement(i.a,{isInfo:!0,isShown:f,duration:3e4,onHide:function(){console.log("on hide 3"),p(!1)},actionText:"DO IT",onAction:function(e){console.log("action",e),e.close()}},o.a.createElement("b",null,"ACTION")," lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",o.a.createElement("b",null,"Pellentesque risus mi"),", elit")),o.a.createElement(r.q,{isTwoThirds:!0},o.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React, { useState } from 'react'\nimport { Container, Notice } from '@brightleaf/elements'\nexport default () => {\n  const [showNotice, setShowNotice] = useState(false)\n  return (\n    <Container>\n      <Container>\n        <Button\n          disabled={showNotice}\n          onClick={e => {\n            e.preventDefault()\n            console.info('showNotifice', showNotice)\n            setShowNotice(!showNotifice)\n          }}\n        >\n          SHOW\n        </Button>\n      </Container>\n      <Notice\n        isInfo\n        isShown={showNotice}\n        duration={30000}\n        onHide={() => {\n          console.log('on hide 3')\n          setShowNotice(false)\n        }}\n        actionText=\"DO IT\"\n        onAction={e => {\n          console.log('The action event payload', e)\n          e.close()\n        }}\n      >\n        <b>ACTION</b> lorem ipsum dolor sit amet, consectetur adipiscing\n        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit\n      </Notice>\n    </Container>\n  )\n}\n          ")))),o.a.createElement(l.a,null,o.a.createElement(r.r,null,o.a.createElement(r.q,{isOneThird:!0},o.a.createElement(r.s,null,o.a.createElement(r.f,{disabled:E,onClick:function(e){e.preventDefault(),b(!E)}},"SHOW")),o.a.createElement(i.a,{isPrimary:!0,isTop:!0,isShown:E,duration:3e3,onHide:function(){console.log("on hide top"),b(!1)}},o.a.createElement("b",null,"Show Top")," lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",o.a.createElement("b",null,"Pellentesque risus mi"),", elit")),o.a.createElement(r.q,{isTwoThirds:!0},o.a.createElement(c.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notice } from '@brightleaf/elements'\nexport default () => {\n  const [showTopNotification, setShowTopNotification] = useState(false)\n  return (\n    <Container>\n      <Notice\n        isPrimary\n        isTop\n        isShown={showTopNotification}\n        duration={3000}\n        onHide={() => {\n          console.log('on hide top')\n          setShowTopNotification(false)\n        }}\n      >\n        <b>Show Top</b> lorem ipsum dolor sit amet, consectetur adipiscing\n        elit lorem ipsum dolor. <b>Pellentesque risus mi</b>, elit\n      </Notice>\n    </Container>\n  )\n}\n          ")))))}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),o=n.n(a),r=n(96),i=n(94),l=n(95);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.registerLanguage("jsx",i.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,f(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.children;return s(e,["children"]),o.a.createElement(r.a,{language:"jsx",style:l.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,a),i&&u(n,i),t}(a.Component)},92:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(0),o=n.n(a),r=n(27),i=n(3);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){return o.a.createElement(r.b,null,(function(t){var n=t.location,a=e.to===n.pathname;return o.a.createElement(i.Db,{className:a?"is-active":""},o.a.createElement(r.a,l({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return o.a.createElement(i.Nb,null,o.a.createElement(i.Eb,null,o.a.createElement(c,{to:"/containers"},"Container"),o.a.createElement(c,{to:"/level"},"Level"),o.a.createElement(c,{to:"/media"},"Media Object"),o.a.createElement(c,{to:"/hero"},"Hero"),o.a.createElement(c,{to:"/section"},"Section"),o.a.createElement(c,{to:"/footer"},"Footer"),o.a.createElement(c,{to:"/tiles"},"Tiles")))},u=function(){return o.a.createElement(i.Nb,null,o.a.createElement(i.Eb,null,o.a.createElement(c,{to:"/box"},"Box"),o.a.createElement(c,{to:"/buttons"},"Button"),o.a.createElement(c,{to:"/collapse"},"Collapse"),o.a.createElement(c,{to:"/content"},"Content"),o.a.createElement(c,{to:"/delete"},"Delete"),o.a.createElement(c,{to:"/icons"},"Icon"),o.a.createElement(c,{to:"/images"},"Image"),o.a.createElement(c,{to:"/media"},"MediaObject"),o.a.createElement(c,{to:"/notifications"},"Notifications"),o.a.createElement(c,{to:"/progress"},"Progress Bars"),o.a.createElement(c,{to:"/tables"},"Tables"),o.a.createElement(c,{to:"/tags"},"Tag"),o.a.createElement(c,{to:"/titles"},"Title")))},m=function(){return o.a.createElement(i.Nb,null,o.a.createElement(i.Eb,null,o.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),o.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),o.a.createElement(c,{to:"/card"},"Card"),o.a.createElement(c,{to:"/dropdown"},"DropDown"),o.a.createElement(c,{to:"/menu"},"Menu"),o.a.createElement(c,{to:"/messages"},"Messages"),o.a.createElement(c,{to:"/modals"},"Modal"),o.a.createElement(c,{to:"/navbars"},"NavBar"),o.a.createElement(c,{to:"/notice"},"Notice"),o.a.createElement(c,{to:"/pagination"},"Pagination"),o.a.createElement(c,{to:"/panels"},"Panel"),o.a.createElement(c,{to:"/tabs"},"Tabs")))}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),o=n.n(a),r=function(e){var t=e.children;e.isPrimary;return o.a.createElement("div",{className:"snippet"},t)}}}]);