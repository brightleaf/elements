(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{146:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(3),m=t(87),c=t(88),o=t(86);a.default=function(){return n.a.createElement(l.xb,null,n.a.createElement(l.D,{isLight:!0,isBold:!0},n.a.createElement(l.E,null,n.a.createElement(l.Hb,null,"Breadcrumb"),n.a.createElement(l.zb,{as:"p",is:"4"},"A simple ",n.a.createElement("strong",null,"breadcrumb")," component to improve your navigation experience"))),n.a.createElement(m.a,null),n.a.createElement(l.A,null,n.a.createElement(l.r,null,n.a.createElement("p",null,"The ",n.a.createElement("strong",null,"Breadcrumb")," component only requires a"," ",n.a.createElement("code",null,"Breadcrumb")," container and a ",n.a.createElement("code",null,"BreadcrumbItem")," ","list."),n.a.createElement("p",null,"The dividers are automatically created in the content of the"," ",n.a.createElement("code",null,"::before")," pseudo-element of ",n.a.createElement("code",null,"BreadcrumbItem")," ","tags."),n.a.createElement("p",null,"You can inform the current page using the ",n.a.createElement("code",null,"isActive")," ","modifier in a ",n.a.createElement("code",null,"BreadcrumbItem")," tag. It will disable the navigation of inner links."))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,null,n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Home")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Components")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(l.A,null,n.a.createElement(l.Hb,{as:"h3",is:"4"},"Alignment"),n.a.createElement(l.r,null,n.a.createElement("p",null,"For alternative alignments, use the ",n.a.createElement("code",null,"isCentered")," and"," ",n.a.createElement("code",null,"isRight")," attributes on the ",n.a.createElement("code",null,"Breadcrumb")," ","component."))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{isRight:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb isRight>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{isCentered:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb isCentered>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(l.A,null,n.a.createElement(l.Hb,{as:"h3",is:"4"},"Alternative separators"),n.a.createElement(l.r,null,n.a.createElement("p",null,"You can choose between ",n.a.createElement("strong",null,"4 additional separators"),":"," ",n.a.createElement("code",null,"hasArrowSeparator")," ",n.a.createElement("code",null,"hasBulletSeparator")," ",n.a.createElement("code",null,"hasDotSeparator")," and ",n.a.createElement("code",null,"hasSucceedsSeparator"),"."))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{hasArrowSeparator:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb hasArrowSeparator>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{hasBulletSeparator:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb hasBulletSeparator>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{hasDotSeparator:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb hasDotSeparator>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{hasSucceedsSeparator:!0},n.a.createElement(l.e,null,n.a.createElement("a",null,"Home")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Components")),n.a.createElement(l.e,null,n.a.createElement("a",null,"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb hasSucceedsSeparator>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(l.A,null,n.a.createElement(l.Hb,{as:"h3",is:"4"},"Sizes"),n.a.createElement(l.r,null,n.a.createElement("p",null,"You can choose between ",n.a.createElement("strong",null,"3 additional sizes"),":"," ",n.a.createElement("code",null,"isSmall")," ",n.a.createElement("code",null,"isMedium")," and ",n.a.createElement("code",null,"isLarge"),"."))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{isSmall:!0},n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Home")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Components")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb isSmall>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{isMedium:!0},n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Home")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Components")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb isMedium>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))),n.a.createElement(c.a,null,n.a.createElement(l.p,null,n.a.createElement(l.o,{isOneThird:!0},n.a.createElement(l.d,{isLarge:!0},n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Home")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Components")),n.a.createElement(l.e,null,n.a.createElement("a",{href:"#/breadcrumb"},"Hero")))),n.a.createElement(l.o,{isTwoThirds:!0},n.a.createElement(o.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Breadcrumb, BreadcrumbItem } from '@brightleaf/elements'\n\nexport default () => {\n  return (\n    <Breadcrumb isLarge>\n      <BreadcrumbItem>\n        <a>Home</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Components</a>\n      </BreadcrumbItem>\n      <BreadcrumbItem>\n        <a>Hero</a>\n      </BreadcrumbItem>\n    </Breadcrumb>\n  )\n}\n")))))}},86:function(e,a,t){"use strict";t.d(a,"a",function(){return E});var r=t(0),n=t.n(r),l=t(91),m=t(89),c=t(90);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function i(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,a){return!a||"object"!==o(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.a.registerLanguage("jsx",m.a);var E=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),s(this,d(a).apply(this,arguments))}var t,m,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(a,r["Component"]),t=a,(m=[{key:"render",value:function(){var e=this.props,a=e.children;u(e,["children"]);return n.a.createElement(l.a,{language:"jsx",style:c.a,showLineNumbers:!1,wrapLines:!0},a)}}])&&i(t.prototype,m),o&&i(t,o),a}()},87:function(e,a,t){"use strict";t.d(a,"c",function(){return u}),t.d(a,"b",function(){return i}),t.d(a,"a",function(){return s});var r=t(0),n=t.n(r),l=t(23),m=t(3);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o=function(e){return n.a.createElement(l.b,null,function(a){var t=a.location,r=e.to===t.pathname;return n.a.createElement(m.Ab,{className:r?"is-active":""},n.a.createElement(l.a,c({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},u=function(){return n.a.createElement(m.Db,null,n.a.createElement(m.Bb,null,n.a.createElement(o,{to:"/containers"},"Container"),n.a.createElement(o,{to:"/level"},"Level"),n.a.createElement(o,{to:"/media"},"Media Object"),n.a.createElement(o,{to:"/hero"},"Hero"),n.a.createElement(o,{to:"/section"},"Section"),n.a.createElement(o,{to:"/footer"},"Footer"),n.a.createElement(o,{to:"/tiles"},"Tiles")))},i=function(){return n.a.createElement(m.Db,null,n.a.createElement(m.Bb,null,n.a.createElement(o,{to:"/box"},"Box"),n.a.createElement(o,{to:"/buttons"},"Button"),n.a.createElement(o,{to:"/content"},"Content"),n.a.createElement(o,{to:"/delete"},"Delete"),n.a.createElement(o,{to:"/icons"},"Icon"),n.a.createElement(o,{to:"/images"},"Image"),n.a.createElement(o,{to:"/notifications"},"Notifications"),n.a.createElement(o,{to:"/progress"},"Progress Bars"),n.a.createElement(o,{to:"/tables"},"Tables"),n.a.createElement(o,{to:"/tags"},"Tag"),n.a.createElement(o,{to:"/titles"},"Title")))},s=function(){return n.a.createElement(m.Db,null,n.a.createElement(m.Bb,null,n.a.createElement(o,{to:"/autocomplete"},"AutoComplete"),n.a.createElement(o,{to:"/breadcrumb"},"Breadcrumb"),n.a.createElement(o,{to:"/card"},"Card"),n.a.createElement(o,{to:"/dropdown"},"DropDown"),n.a.createElement(o,{to:"/menu"},"Menu"),n.a.createElement(o,{to:"/messages"},"Messages"),n.a.createElement(o,{to:"/modals"},"Modal"),n.a.createElement(o,{to:"/navbars"},"NavBar"),n.a.createElement(o,{to:"/pagination"},"Pagination"),n.a.createElement(o,{to:"/panels"},"Panel"),n.a.createElement(o,{to:"/tabs"},"Tabs")))}},88:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(0),n=t.n(r),l=function(e){var a=e.children;e.isPrimary;return n.a.createElement("div",{className:"snippet"},a)}}}]);