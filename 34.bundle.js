(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{139:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(4),l=n(84),o=n(82),s=n(83);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,a=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(i=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(){var e=c(Object(i.useState)(!1),2),t=e[0],n=e[1],u=Object(i.useRef)();return a.a.createElement(r.wb,{className:"App content"},a.a.createElement(r.D,{isLight:!0,isBold:!0},a.a.createElement(r.E,null,a.a.createElement(r.Gb,null,"Notification"),a.a.createElement(r.yb,{as:"p",is:"4"},"Bold ",a.a.createElement("strong",null,"notification")," blocks, to alert your users of something"))),a.a.createElement(s.b,null),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{ref:u,isPrimary:!0,isShown:t,onDismissed:function(e){console.log("onDismiss hit"),n(!t)}},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit"),!t&&a.a.createElement("button",{className:"button",onClick:function(e){n(!t),u.current.show()}},"Show"),t&&a.a.createElement("button",{className:"button",onClick:function(e){n(!t),u.current.hide()}},"Hide")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  const [showNotification, setShowNotification] = useState(false)\n  const notifRef = useRef()\n\n  return (\n    <Container isOneThird>\n      <Notification\n        ref={notifRef}\n        isPrimary\n        isShown={showNotification}\n        onDismissed={e => {\n          console.log('onDismiss hit')\n          setShowNotification(!showNotification)\n        }}\n      > ... </Notification>\n      {!showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.show()\n          }}\n        >\n          Show\n        </button>\n      )}\n      {showNotification && (\n        <button\n          className=\"button\"\n          onClick={e => {\n            setShowNotification(!showNotification)\n            notifRef.current.hide()\n          }}\n        >\n          Hide\n        </button>\n      )}\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isPrimary:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isPrimary isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isInfo:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isInfo isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isWarning:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isWarning isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isSuccess:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isSuccess isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isDanger:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isDanger isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isLink:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLink isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isLight:!0,isShown:!0},"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLight isShown>\n        Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum{' '}\n        <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing\n        elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))),a.a.createElement(l.a,null,a.a.createElement(r.p,null,a.a.createElement(r.o,{isOneThird:!0},a.a.createElement(r.mb,{isLight:!0,isShown:!0,isDismissible:!1},a.a.createElement(r.Gb,{as:"p"},"isDismissible={false}"),"ipsum dolor. ",a.a.createElement("strong",null,"Pellentesque risus mi"),", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum"," ",a.a.createElement("a",null,"felis venenatis")," efficitur. Sit amet, consectetur adipiscing elit")),a.a.createElement(r.o,{isTwoThirds:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Container, Notification } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Container>\n      <Notification isLight isShown isDismissible={false}>\n        <Title as=\"p\">{'isDismissible={false}'}</Title>\n        ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis\n        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet\n        fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{' '}\n        efficitur. Sit amet, consectetur adipiscing elit\n      </Notification>\n    </Container>\n  )\n}\n          ")))))}},82:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n(0),a=n.n(i),r=n(87),l=n(85),o=n(86);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.a.registerLanguage("jsx",l.a);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,l,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,i["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.children;c(e,["children"]);return a.a.createElement(r.a,{language:"jsx",style:o.a,showLineNumbers:!1,wrapLines:!0},t)}}])&&u(n.prototype,l),s&&u(n,s),t}()},83:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return m});var i=n(0),a=n.n(i),r=n(23),l=n(4);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var s=function(e){return a.a.createElement(r.b,null,function(t){var n=t.location,i=e.to===n.pathname;return a.a.createElement(l.zb,{className:i?"is-active":""},a.a.createElement(r.a,o({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},c=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(s,{to:"/containers"},"Container"),a.a.createElement(s,{to:"/level"},"Level"),a.a.createElement(s,{to:"/media"},"Media Object"),a.a.createElement(s,{to:"/hero"},"Hero"),a.a.createElement(s,{to:"/section"},"Section"),a.a.createElement(s,{to:"/footer"},"Footer"),a.a.createElement(s,{to:"/tiles"},"Tiles")))},u=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(s,{to:"/box"},"Box"),a.a.createElement(s,{to:"/buttons"},"Button"),a.a.createElement(s,{to:"/content"},"Content"),a.a.createElement(s,{to:"/delete"},"Delete"),a.a.createElement(s,{to:"/icons"},"Icon"),a.a.createElement(s,{to:"/images"},"Image"),a.a.createElement(s,{to:"/notifications"},"Notifications"),a.a.createElement(s,{to:"/progress"},"Progress Bars"),a.a.createElement(s,{to:"/tables"},"Tables"),a.a.createElement(s,{to:"/tags"},"Tag"),a.a.createElement(s,{to:"/titles"},"Title")))},m=function(){return a.a.createElement(l.Cb,null,a.a.createElement(l.Ab,null,a.a.createElement(s,{to:"/autocomplete"},"AutoComplete"),a.a.createElement(s,{to:"/breadcrumb"},"Breadcrumb"),a.a.createElement(s,{to:"/card"},"Card"),a.a.createElement(s,{to:"/dropdown"},"DropDown"),a.a.createElement(s,{to:"/menu"},"Menu"),a.a.createElement(s,{to:"/messages"},"Messages"),a.a.createElement(s,{to:"/modals"},"Modal"),a.a.createElement(s,{to:"/navbars"},"NavBar"),a.a.createElement(s,{to:"/pagination"},"Pagination"),a.a.createElement(s,{to:"/panels"},"Panel"),a.a.createElement(s,{to:"/tabs"},"Tabs")))}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(0),a=n.n(i),r=function(e){var t=e.children;e.isPrimary;return a.a.createElement("div",{className:"snippet"},t)}}}]);