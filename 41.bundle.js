(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{149:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),l=n(91),o=n(89),s=n(90);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=c(Object(a.useState)(!1),2),t=e[0],n=e[1],u=Object(a.useRef)();return i.a.createElement(r.Ab,null,i.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},i.a.createElement(r.d,null,i.a.createElement(r.e,null,i.a.createElement("a",{href:"#/"},"Home")),i.a.createElement(r.e,null,i.a.createElement("a",{href:"#/elements"},"Elements")),i.a.createElement(r.e,null,i.a.createElement("a",{href:"#/notifications"},"Notification")))),i.a.createElement(r.F,{isPrimary:!0,isBold:!0},i.a.createElement(r.G,null,i.a.createElement(r.Rb,null,"Notification"),i.a.createElement(r.Cb,{as:"p",is:"4"},"Bold ",i.a.createElement("strong",null,"notification")," blocks, to alert your users of something"))),i.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},i.a.createElement(s.b,null)),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{ref:u,isPrimary:!0,isShown:t,onDismissed:function(e){console.log("onDismiss hit"),n(!t)}},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit"),!t&&i.a.createElement("button",{className:"button",onClick:function(e){n(!t),u.current.show()}},"Show"),t&&i.a.createElement("button",{className:"button",onClick:function(e){n(!t),u.current.hide()}},"Hide")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  const [showNotification, setShowNotification] = useState(false)\n  const notifRef = useRef()\n\n  return (\n    <Container isOneThird>\n      <Notification\n        ref={notifRef}\n        isPrimary\n        isShown={showNotification}\n        onDismissed={e => {\n          console.log('onDismiss hit')\n          setShowNotification(!showNotification)\n        }}\n      > ... </Notification>\n      {!showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.show()\n          }}\n        >\n          Show\n        </button>\n      )}\n      {showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.hide()\n          }}\n        >\n          Hide\n        </button>\n      )}\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isPrimary:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isPrimary isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isInfo:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isInfo isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isWarning:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isWarning isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isSuccess:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isSuccess isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isDanger:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isDanger isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isLink:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLink isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isLight:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLight isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),i.a.createElement(l.a,null,i.a.createElement(r.r,null,i.a.createElement(r.q,{isOneThird:!0},i.a.createElement(r.pb,{isLight:!0,isShown:!0,isDismissible:!1},i.a.createElement(r.Rb,{as:"p"},"isDismissible={false}"),"ipsum dolor. ",i.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",i.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),i.a.createElement(r.q,{isTwoThirds:!0},i.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLight isShown isDismissible={false}>\n        <Title as=\"p\">{'isDismissible={false}'}</Title>\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}\n        efficitur. Sit amet, consectetur adipiscing elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))))}},89:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),i=n.n(a),r=n(94),l=n(92),o=n(93);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.registerLanguage("jsx",l.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,l,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;c(e,["children"]);return i.a.createElement(r.a,{language:"jsx",style:o.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,l),s&&u(n,s),t}()},90:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var a=n(0),i=n.n(a),r=n(27),l=n(3);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){return i.a.createElement(r.b,null,function(t){var n=t.location,a=e.to===n.pathname;return i.a.createElement(l.Db,{className:a?"is-active":""},i.a.createElement(r.a,o({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},c=function(){return i.a.createElement(l.Nb,null,i.a.createElement(l.Eb,null,i.a.createElement(s,{to:"/containers"},"Container"),i.a.createElement(s,{to:"/level"},"Level"),i.a.createElement(s,{to:"/media"},"Media Object"),i.a.createElement(s,{to:"/hero"},"Hero"),i.a.createElement(s,{to:"/section"},"Section"),i.a.createElement(s,{to:"/footer"},"Footer"),i.a.createElement(s,{to:"/tiles"},"Tiles")))},u=function(){return i.a.createElement(l.Nb,null,i.a.createElement(l.Eb,null,i.a.createElement(s,{to:"/box"},"Box"),i.a.createElement(s,{to:"/buttons"},"Button"),i.a.createElement(s,{to:"/collapse"},"Collapse"),i.a.createElement(s,{to:"/content"},"Content"),i.a.createElement(s,{to:"/delete"},"Delete"),i.a.createElement(s,{to:"/icons"},"Icon"),i.a.createElement(s,{to:"/images"},"Image"),i.a.createElement(s,{to:"/media"},"MediaObject"),i.a.createElement(s,{to:"/notifications"},"Notifications"),i.a.createElement(s,{to:"/progress"},"Progress Bars"),i.a.createElement(s,{to:"/tables"},"Tables"),i.a.createElement(s,{to:"/tags"},"Tag"),i.a.createElement(s,{to:"/titles"},"Title")))},m=function(){return i.a.createElement(l.Nb,null,i.a.createElement(l.Eb,null,i.a.createElement(s,{to:"/autocomplete"},"AutoComplete"),i.a.createElement(s,{to:"/breadcrumb"},"Breadcrumb"),i.a.createElement(s,{to:"/card"},"Card"),i.a.createElement(s,{to:"/dropdown"},"DropDown"),i.a.createElement(s,{to:"/menu"},"Menu"),i.a.createElement(s,{to:"/messages"},"Messages"),i.a.createElement(s,{to:"/modals"},"Modal"),i.a.createElement(s,{to:"/navbars"},"NavBar"),i.a.createElement(s,{to:"/notice"},"Notice"),i.a.createElement(s,{to:"/pagination"},"Pagination"),i.a.createElement(s,{to:"/panels"},"Panel"),i.a.createElement(s,{to:"/tabs"},"Tabs")))}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),i=n.n(a),r=function(e){var t=e.children;e.isPrimary;return i.a.createElement("div",{className:"snippet"},t)}}}]);