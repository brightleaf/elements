(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{59:function(e,n,t){"use strict";var l=t(0),a=t.n(l),r=t(61),i=t.n(r),c=t(62),o=t.n(c);o.a.registerLanguage("css",t(63)),o.a.registerLanguage("javascript",t(64)),o.a.registerLanguage("xml",t(65));var m=o.a;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function v(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function d(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"a",function(){return g});var g=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,E(n).apply(this,arguments))}var t,r,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,l["Component"]),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.children,t=p(e,["children"]);return a.a.createElement(i.a,u({},t,{highlightjs:m}),n)}}])&&v(t.prototype,r),c&&v(t,c),n}()},60:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var l=t(0),a=t.n(l),r=function(e){var n=e.children;e.isPrimary;return a.a.createElement("div",{className:"snippet"},n)}},76:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(4),i=t(1),c=t(60),o=t(59);n.default=function(){return Object(r.useTitle)("Level Component"),Object(r.useStyleSheet)("code.css"),a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement(i.p,null,a.a.createElement(i.o,{isHalf:!0},a.a.createElement(i.c,null,a.a.createElement(i.O,null,a.a.createElement(i.N,null,a.a.createElement(i.H,{is:"64",src:"https://bulma.io/images/placeholders/128x128.png"})),a.a.createElement(i.M,null,a.a.createElement(i.r,null,a.a.createElement("p",null,a.a.createElement("strong",null,"John Smith")," ",a.a.createElement("small",null,"@johnsmith")," ",a.a.createElement("small",null,"31m"),a.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")),a.a.createElement(i.I,{isMobile:!0},a.a.createElement(i.K,null,a.a.createElement(i.J,null,a.a.createElement("a",null,a.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"reply"}))),a.a.createElement(i.J,null,a.a.createElement("a",null,a.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"retweet"}))),a.a.createElement(i.J,null,a.a.createElement("a",null,a.a.createElement(i.G,{isSmall:!0,fas:!0,icon:"heart"})))))),a.a.createElement(i.P,null,a.a.createElement(i.t,null))))),a.a.createElement(i.o,{isHalf:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport { Box, Content, Icon, Image, Title,\n  Level, LevelItem, LevelLeft, LevelRight,\n  MediaContent, MediaLeft, MediaObject, MediaRight } from \'@brightleaf/elements\'\n\n\nexport default () => {\n\n  return (\n    <Box>\n      <Level>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <p className="heading">Tweets</p>\n              <Title as="p">3,456</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <p className="heading">Following</p>\n              <Title as="p">123</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <p className="heading">Followers</p>\n              <Title as="p">456K</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <p className="heading">Likes</p>\n              <Title as="p">789</Title>\n            </div>\n          </div>\n        </LevelItem>\n      </Level>\n    </Box>\n  )\n}\n')))),a.a.createElement(c.a,null,a.a.createElement(i.p,null,a.a.createElement(i.o,{isHalf:!0},a.a.createElement(i.c,null,a.a.createElement(i.I,null,a.a.createElement(i.J,{hasTextCentered:!0},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(i.B,null,"Tweets"),a.a.createElement(i.rb,{as:"p"},"3,456")))),a.a.createElement(i.J,{hasTextCentered:!0},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(i.B,null,"Following"),a.a.createElement(i.rb,{as:"p"},"123")))),a.a.createElement(i.J,{hasTextCentered:!0},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(i.B,null,"Followers"),a.a.createElement(i.rb,{as:"p"},"456K")))),a.a.createElement(i.J,{hasTextCentered:!0},a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(i.B,null,"Likes"),a.a.createElement(i.rb,{as:"p"},"789"))))))),a.a.createElement(i.o,{isHalf:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport { Box, Title, Level, LevelItem } from \'@brightleaf/elements\'\n\nexport default () => {\n  return (\n    <Box>\n      <Level>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <Heading>Tweets</Heading>\n              <Title as="p">3,456</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <Heading>Following</Heading>\n              <Title as="p">123</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <Heading>Followers</Heading>\n              <Title as="p">456K</Title>\n            </div>\n          </div>\n        </LevelItem>\n        <LevelItem hasTextCentered>\n          <div>\n            <div>\n              <Heading>Likes</Heading>\n              <Title as="p">789</Title>\n            </div>\n          </div>\n        </LevelItem>\n      </Level>\n    </Box>\n  )\n}\n')))),a.a.createElement(c.a,null,a.a.createElement(i.p,null,a.a.createElement(i.o,{isHalf:!0},a.a.createElement(i.c,null,a.a.createElement(i.I,null,a.a.createElement(i.K,null,a.a.createElement(i.J,null,a.a.createElement("div",null,a.a.createElement(i.kb,{as:"p",is:"5"},a.a.createElement("strong",null,"123")," posts"))),a.a.createElement(i.J,null,a.a.createElement("div",null,a.a.createElement(i.y,{hasAddons:!0},a.a.createElement(i.s,null,a.a.createElement("input",{className:"input",type:"text",placeholder:"Find a post"})),a.a.createElement(i.s,null,a.a.createElement(i.f,null,"Search")))))),a.a.createElement(i.L,null,a.a.createElement(i.J,null,a.a.createElement("p",null,a.a.createElement("strong",null,"All"))),a.a.createElement(i.J,null,a.a.createElement("p",null,a.a.createElement("a",null,"Published"))),a.a.createElement(i.J,null,a.a.createElement("p",null,a.a.createElement("a",null,"Drafts"))),a.a.createElement(i.J,null,a.a.createElement("p",null,a.a.createElement("a",null,"Deleted"))),a.a.createElement(i.J,null,a.a.createElement("p",null,a.a.createElement(i.f,{isSuccess:!0},"New"))))))),a.a.createElement(i.o,{isHalf:!0},a.a.createElement(o.a,{className:"javascript",languages:["javascript"]},'\nimport React from \'react\'\nimport { Box, Control, Field, Title, SubTitle,\n  Level, LevelItem, LevelLeft LevelRight } from \'@brightleaf/elements\'\n\nexport default () => {\n  return (\n    <Box>\n      <Level>\n        <LevelLeft>\n          <LevelItem>\n            <div>\n              <SubTitle as="p" is="5">\n                <strong>123</strong> posts\n              </SubTitle>\n            </div>\n          </LevelItem>\n          <LevelItem>\n            <div>\n              <Field hasAddons>\n                <Control>\n                  <input\n                    className="input"\n                    type="text"\n                    placeholder="Find a post"\n                  />\n                </Control>\n                <Control>\n                  <Button>Search</Button>\n                </Control>\n              </Field>\n            </div>\n          </LevelItem>\n        </LevelLeft>\n\n        <LevelRight>\n          <LevelItem>\n            <p>\n              <strong>All</strong>\n            </p>\n          </LevelItem>\n          <LevelItem>\n            <p>\n              <a>Published</a>\n            </p>\n          </LevelItem>\n          <LevelItem>\n            <p>\n              <a>Drafts</a>\n            </p>\n          </LevelItem>\n          <LevelItem>\n            <p>\n              <a>Deleted</a>\n            </p>\n          </LevelItem>\n          <LevelItem>\n            <p>\n              <Button isSuccess>New</Button>\n            </p>\n          </LevelItem>\n        </LevelRight>\n      </Level>\n    </Box>\n  )\n}\n')))))}}}]);