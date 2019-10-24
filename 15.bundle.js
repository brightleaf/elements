(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),l=n(92),r=n(98),o=n(4),c=n(93),s=n(90),g=n(91);a.default=function(){return Object(r.useTitle)("Pagination example from @brightleaf/elements"),Object(l.useStyleSheet)("code.css"),i.a.createElement(o.Bb,null,i.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},i.a.createElement(o.d,null,i.a.createElement(o.e,null,i.a.createElement("a",{href:"#/"},"Home")),i.a.createElement(o.e,null,i.a.createElement("a",{href:"#/components"},"Components")),i.a.createElement(o.e,null,i.a.createElement("a",{href:"#/pagination"},"Pagination")))),i.a.createElement(o.G,{isPrimary:!0,isBold:!0},i.a.createElement(o.H,null,i.a.createElement(o.Sb,null,"Pagination"),i.a.createElement(o.Db,{as:"p",is:"4"},"A composable ",i.a.createElement("strong",null,"panel"),", for compact controls"))),i.a.createElement("div",{style:{paddingTop:"3em",paddingBottom:"3em"}},i.a.createElement(g.a,null)),i.a.createElement(o.u,null,i.a.createElement("p",null,"The Pagination component consists of several elements:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("code",null,"Pagination")," container"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationPrevious")," and ",i.a.createElement("code",null,"PaginationNext")," for incremental navigation"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationList")," which displays page items:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("code",null,"PaginationLink")," for the page numbers"),i.a.createElement("li",null,i.a.createElement("code",null,"PaginationEllipsis")," for range separators")))),i.a.createElement("p",null,"All elements are optional so you can compose your pagination as you wish.")),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,null,i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.u,null,i.a.createElement("p",null,"You can disable some links if they are not active, or change the amount of page numbers available."," ")),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,null,i.a.createElement(o.wb,{label:"Previous",disabled:!0}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1,isCurrent:!0}),i.a.createElement(o.tb,{page:2}),i.a.createElement(o.tb,{page:3})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination>\n    <PaginationPrevious\n      label=\"Previous\"\n      disabled\n    ></PaginationPrevious>\n    <PaginationNext label=\"Next page\"></PaginationNext>\n    <PaginationList>\n      <PaginationLink page={1} isCurrent />\n      <PaginationLink page={2} />\n      <PaginationLink page={3} />\n    </PaginationList>\n  </Pagination>\n  )\n}\n")))),i.a.createElement(o.u,null,i.a.createElement("p",null,"By default on ",i.a.createElement("strong",null,"tablet"),", the list is located on the left, and the previous/next buttons on the right. But you can change the ",i.a.createElement("strong",null,"order")," of these elements by using the"," ",i.a.createElement("code",null,"isCentered")," and ",i.a.createElement("code",null,"isRight")," attributes.")),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isCentered:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isCentered>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isRight:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isRight>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.Sb,{as:"h3",is:"4"},"Styles"),i.a.createElement(o.u,null,i.a.createElement("p",null,"Add the ",i.a.createElement("code",null,"isRounded")," attribute to have rounded pagination items.")),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isRounded:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isRounded>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(o.Sb,{as:"h3",is:"4"},"Sizes"),i.a.createElement(o.u,null,i.a.createElement("p",null,"The pagination comes in ",i.a.createElement("strong",null,"3 additional sizes"),".",i.a.createElement("br",null),"You only need to append the ",i.a.createElement("strong",null,"attribute")," ",i.a.createElement("code",null,"isSmall"),", ",i.a.createElement("code",null,"isMedium"),", or ",i.a.createElement("code",null,"isLarge")," ","to the ",i.a.createElement("code",null,"Pagination")," component.")),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isSmall:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isSmall>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isMedium:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isMedium>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))),i.a.createElement(c.a,null,i.a.createElement(o.r,null,i.a.createElement(o.q,{isHalf:!0},i.a.createElement(o.rb,{isLarge:!0},i.a.createElement(o.wb,{label:"Previous"}),i.a.createElement(o.vb,{label:"Next page"}),i.a.createElement(o.ub,null,i.a.createElement(o.tb,{page:1}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:45}),i.a.createElement(o.tb,{page:46,isCurrent:!0}),i.a.createElement(o.tb,{page:47}),i.a.createElement(o.sb,null),i.a.createElement(o.tb,{page:86})))),i.a.createElement(o.q,{isHalf:!0},i.a.createElement(s.a,{className:"javascript",languages:["javascript"]},"\nimport React from 'react'\nimport { Pagination, PaginationEllipsis, PaginationLink, PaginationList, PaginationNext, PaginationPrevious } from '@brightleaf/elements'\nexport default () => {\n  return (\n    <Pagination isLarge>\n      <PaginationPrevious label=\"Previous\"></PaginationPrevious>\n      <PaginationNext label=\"Next page\"></PaginationNext>\n      <PaginationList>\n        <PaginationLink page={1} />\n        <PaginationEllipsis />\n        <PaginationLink page={45} />\n        <PaginationLink page={46} isCurrent />\n        <PaginationLink page={47} />\n        <PaginationEllipsis />\n        <PaginationLink page={86} />\n      </PaginationList>\n    </Pagination>\n  )\n}\n")))))}},90:function(e,a,n){"use strict";n.d(a,"a",(function(){return E}));var t=n(0),i=n.n(t),l=n(96),r=n(94),o=n(95);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,a){return!a||"object"!==c(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,a){return(p=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}l.a.registerLanguage("jsx",r.a);var E=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),m(this,u(a).apply(this,arguments))}var n,t,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&p(e,a)}(a,e),n=a,(t=[{key:"render",value:function(){var e=this.props,a=e.children;return s(e,["children"]),i.a.createElement(l.a,{language:"jsx",style:o.a,showLineNumbers:!1,wrapLines:!0},a)}}])&&g(n.prototype,t),r&&g(n,r),a}(t.Component)},91:function(e,a,n){"use strict";n.d(a,"c",(function(){return s})),n.d(a,"b",(function(){return g})),n.d(a,"a",(function(){return m}));var t=n(0),i=n.n(t),l=n(29),r=n(4);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var c=function(e){return i.a.createElement(l.b,null,(function(a){var n=a.location,t=e.to===n.pathname;return i.a.createElement(r.Eb,{className:t?"is-active":""},i.a.createElement(l.a,o({},e,{getProps:function(e){return{className:e.isCurrent?"is-active":""}}})))}))},s=function(){return i.a.createElement(r.Ob,null,i.a.createElement(r.Fb,null,i.a.createElement(c,{to:"/containers"},"Container"),i.a.createElement(c,{to:"/level"},"Level"),i.a.createElement(c,{to:"/media"},"Media Object"),i.a.createElement(c,{to:"/hero"},"Hero"),i.a.createElement(c,{to:"/section"},"Section"),i.a.createElement(c,{to:"/footer"},"Footer"),i.a.createElement(c,{to:"/tiles"},"Tiles")))},g=function(){return i.a.createElement(r.Ob,null,i.a.createElement(r.Fb,null,i.a.createElement(c,{to:"/box"},"Box"),i.a.createElement(c,{to:"/buttons"},"Button"),i.a.createElement(c,{to:"/collapse"},"Collapse"),i.a.createElement(c,{to:"/content"},"Content"),i.a.createElement(c,{to:"/delete"},"Delete"),i.a.createElement(c,{to:"/icons"},"Icon"),i.a.createElement(c,{to:"/images"},"Image"),i.a.createElement(c,{to:"/media"},"MediaObject"),i.a.createElement(c,{to:"/notifications"},"Notifications"),i.a.createElement(c,{to:"/progress"},"Progress Bars"),i.a.createElement(c,{to:"/tables"},"Tables"),i.a.createElement(c,{to:"/tags"},"Tag"),i.a.createElement(c,{to:"/titles"},"Title")))},m=function(){return i.a.createElement(r.Ob,null,i.a.createElement(r.Fb,null,i.a.createElement(c,{to:"/autocomplete"},"AutoComplete"),i.a.createElement(c,{to:"/breadcrumb"},"Breadcrumb"),i.a.createElement(c,{to:"/card"},"Card"),i.a.createElement(c,{to:"/confirm"},"ConfirmButton"),i.a.createElement(c,{to:"/dropdown"},"DropDown"),i.a.createElement(c,{to:"/menu"},"Menu"),i.a.createElement(c,{to:"/messages"},"Messages"),i.a.createElement(c,{to:"/modals"},"Modal"),i.a.createElement(c,{to:"/navbars"},"NavBar"),i.a.createElement(c,{to:"/notice"},"Notice"),i.a.createElement(c,{to:"/pagination"},"Pagination"),i.a.createElement(c,{to:"/panels"},"Panel"),i.a.createElement(c,{to:"/tabs"},"Tabs")))}},92:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.useStyleSheet=void 0;var t=n(0);const i=e=>{(0,t.useEffect)(()=>{const a=document.createElement("link");return a.type="text/css",a.rel="stylesheet",a.href=e,document.getElementsByTagName("head")[0].appendChild(a),()=>{document.getElementsByTagName("head")[0].removeChild(a)}},[e])};a.useStyleSheet=i;var l=i;a.default=l},93:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n(0),i=n.n(t),l=function(e){var a=e.children;e.isPrimary;return i.a.createElement("div",{className:"snippet"},a)}},98:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useTitle=a.default=void 0;var t=n(0);const i=e=>{const[a,n]=(0,t.useState)(e);return(0,t.useEffect)(()=>{document.title=a},[a]),[a,n]};a.useTitle=i;var l=i;a.default=l}}]);