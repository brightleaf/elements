(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{154:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),l=a(59),r=a(84),o=a(4),c=a(80),s=a(78),g=a(79);n.default=function(){return Object(r.useTitle)("Pagination example from @brightleaf/elements"),Object(l.useStyleSheet)("code.css"),i.a.createElement(o.ub,null,i.a.createElement(o.C,{isLight:!0,isBold:!0},i.a.createElement(o.D,null,i.a.createElement(o.Eb,null,"Pagination"),i.a.createElement(o.wb,{as:"p",is:"4"},"A composable ",i.a.createElement("strong",null,"panel"),", for compact controls"))),i.a.createElement(g.a,null),i.a.createElement(o.r,null,i.a.createElement("p",null,"The Pagination component consists of several elements:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("code",null,"Pagination")," container"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationPrevious")," and ",i.a.createElement("code",null,"PaginationNext")," for incremental navigation"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationList")," which displays page items:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("code",null,"PaginationLink")," for the page numbers"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationEllipsis")," for range separators")))),i.a.createElement("p",null,"All elements are optional so you can compose your pagination as you wish.")),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,null,i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.r,null,i.a.createElement("p",null,"You can disable some links if they are not active, or change the amount of page numbers available."," ")),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,null,i.a.createElement(o.qb,{label:"Previous",disabled:!0}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1,isCurrent:!0}),i.a.createElement(o.nb,{page:2}),i.a.createElement(o.nb,{page:3})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination>\n    <PaginationPrevious\n      label=\"Previous\"\n      disabled\n    ></PaginationPrevious>\n    <PaginationNext label=\"Next page\"></PaginationNext>\n    <PaginationList>\n      <PaginationLink page={1} isCurrent />\n      <PaginationLink page={2} />\n      <PaginationLink page={3} />\n    </PaginationList>\n  </Pagination>\n  )\n}\n")))),i.a.createElement(o.r,null,i.a.createElement("p",null,"By default on ",i.a.createElement("strong",null,"tablet"),", the list is located on the left, and the previous/next buttons on the right. But you can change the ",i.a.createElement("strong",null,"order")," of these elements by using the"," ",i.a.createElement("code",null,"isCentered")," and ",i.a.createElement("code",null,"isRight")," attributes.")),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isCentered:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isCentered>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isRight:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isRight>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.Eb,{as:"h3",is:"4"},"Styles"),i.a.createElement(o.r,null,i.a.createElement("p",null,"Add the ",i.a.createElement("code",null,"isRounded")," attribute to have rounded pagination items.")),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isRounded:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isRounded>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.Eb,{as:"h3",is:"4"},"Sizes"),i.a.createElement(o.r,null,i.a.createElement("p",null,"The pagination comes in ",i.a.createElement("strong",null,"3 additional sizes"),".",i.a.createElement("br",null),"You only need to append the ",i.a.createElement("strong",null,"attribute")," ",i.a.createElement("code",null,"isSmall"),", ",i.a.createElement("code",null,"isMedium"),", or ",i.a.createElement("code",null,"isLarge")," ","to the ",i.a.createElement("code",null,"Pagination")," component.")),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isSmall:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isSmall>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isMedium:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isMedium>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.p,null,i.a.createElement(o.o,{isHalf:!0},i.a.createElement(o.lb,{isLarge:!0},i.a.createElement(o.qb,{label:"Previous"}),i.a.createElement(o.pb,{label:"Next page"}),i.a.createElement(o.ob,null,i.a.createElement(o.nb,{page:1}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:45}),i.a.createElement(o.nb,{page:46,isCurrent:!0}),i.a.createElement(o.nb,{page:47}),i.a.createElement(o.mb,null),i.a.createElement(o.nb,{page:86})))),i.a.createElement(o.o,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isLarge>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))))}},59:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.useStyleSheet=void 0;var t=a(0);const i=e=>{(0,t.useEffect)(()=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href=e,document.getElementsByTagName("head")[0].appendChild(n),()=>{document.getElementsByTagName("head")[0].removeChild(n)}},[e])};n.useStyleSheet=i;var l=i;n.default=l},78:function(e,n,a){"use strict";a.d(n,"a",function(){return E});var t=a(0),i=a.n(t),l=a(83),r=a(81),o=a(82);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function g(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}l.a.registerLanguage("jsx",r.a);var E=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,u(n).apply(this,arguments))}var a,r,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,t["Component"]),a=n,(r=[{key:"render",value:function(){var e=this.props,n=e.children;s(e,["children"]);return i.a.createElement(l.a,{language:"jsx",style:o.a,showLineNumbers:!1,wrapLines:!0},n)}}])&&g(a.prototype,r),c&&g(a,c),n}()},79:function(e,n,a){"use strict";a.d(n,"c",function(){return s}),a.d(n,"b",function(){return g}),a.d(n,"a",function(){return m});var t=a(0),i=a.n(t),l=a(23),r=a(4);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var c=function(e){return i.a.createElement(l.b,null,function(n){var a=n.location,t=e.to===a.pathname;return i.a.createElement(r.xb,{className:t?"is-active":""},i.a.createElement(l.a,o({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))})},s=function(){return i.a.createElement(r.Ab,null,i.a.createElement(r.yb,null,i.a.createElement(c,{to:"/containers"},"Container"),i.a.createElement(c,{to:"/level"},"Level"),i.a.createElement(c,{to:"/media"},"Media Object"),i.a.createElement(c,{to:"/hero"},"Hero"),i.a.createElement(c,{to:"/section"},"Section"),i.a.createElement(c,{to:"/footer"},"Footer"),i.a.createElement(c,{to:"/tiles"},"Tiles")))},g=function(){return i.a.createElement(r.Ab,null,i.a.createElement(r.yb,null,i.a.createElement(c,{to:"/box"},"Box"),i.a.createElement(c,{to:"/buttons"},"Button"),i.a.createElement(c,{to:"/content"},"Content"),i.a.createElement(c,{to:"/delete"},"Delete"),i.a.createElement(c,{to:"/icons"},"Icon"),i.a.createElement(c,{to:"/images"},"Image"),i.a.createElement(c,{to:"/notifications"},"Notifications"),i.a.createElement(c,{to:"/progress"},"Progress Bars"),i.a.createElement(c,{to:"/tables"},"Tables"),i.a.createElement(c,{to:"/tags"},"Tag"),i.a.createElement(c,{to:"/titles"},"Title")))},m=function(){return i.a.createElement(r.Ab,null,i.a.createElement(r.yb,null,i.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),i.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),i.a.createElement(c,{to:"/card"},"Card"),i.a.createElement(c,{to:"/dropdown"},"DropDown"),i.a.createElement(c,{to:"/menu"},"Menu"),i.a.createElement(c,{to:"/messages"},"Messages"),i.a.createElement(c,{to:"/modals"},"Modal"),i.a.createElement(c,{to:"/navbars"},"NavBar"),i.a.createElement(c,{to:"/pagination"},"Pagination"),i.a.createElement(c,{to:"/panels"},"Panel"),i.a.createElement(c,{to:"/tabs"},"Tabs")))}},80:function(e,n,a){"use strict";a.d(n,"a",function(){return l});var t=a(0),i=a.n(t),l=function(e){var n=e.children;e.isPrimary;return i.a.createElement("div",{className:"snippet"},n)}},84:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useTitle=n.default=void 0;var t=a(0);const i=e=>{const[n,a]=(0,t.useState)(e);return(0,t.useEffect)(()=>{document.title=n},[n]),[n,a]};n.useTitle=i;var l=i;n.default=l}}]);