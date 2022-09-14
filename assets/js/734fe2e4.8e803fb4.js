"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2773],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(o),d=n,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return o?r.createElement(b,a(a({ref:t},m),{},{components:o})):r.createElement(b,a({ref:t},m))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5141:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=o(7462),n=o(3366),s=(o(7294),o(3905)),a=["components"],i={title:"Commands and Permissions",sidebar_position:1},c=void 0,l={unversionedId:"boosters/commands-and-permissions",id:"boosters/commands-and-permissions",title:"Commands and Permissions",description:"/boosters give (Give a booster)",source:"@site/docs/boosters/commands-and-permissions.md",sourceDirName:"boosters",slug:"/boosters/commands-and-permissions",permalink:"/boosters/commands-and-permissions",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/boosters/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Boosters",permalink:"/boosters/"},next:{title:"How to make a custom booster",permalink:"/boosters/how-to-make-a-custom-booster"}},m={},u=[{value:"<code>/boosters give</code> (Give a booster)",id:"boosters-give-give-a-booster",level:2},{value:"<code>/boosters</code> (Open the boosters menu)",id:"boosters-open-the-boosters-menu",level:2},{value:"<code>/boosters cancel</code> (Cancel the active booster)",id:"boosters-cancel-cancel-the-active-booster",level:2},{value:"<code>/boosters activate</code> (Activate a booster)",id:"boosters-activate-activate-a-booster",level:2}],p={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"boosters-give-give-a-booster"},(0,s.kt)("inlineCode",{parentName:"h2"},"/boosters give")," (Give a booster)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"boosters.command.give")),(0,s.kt)("p",null,"Usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"/boosters give <player> <booster> [amount]")),(0,s.kt)("h2",{id:"boosters-open-the-boosters-menu"},(0,s.kt)("inlineCode",{parentName:"h2"},"/boosters")," (Open the boosters menu)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"boosters.command.boosters")),(0,s.kt)("h2",{id:"boosters-cancel-cancel-the-active-booster"},(0,s.kt)("inlineCode",{parentName:"h2"},"/boosters cancel")," (Cancel the active booster)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"boosters.command.cancel")),(0,s.kt)("h2",{id:"boosters-activate-activate-a-booster"},(0,s.kt)("inlineCode",{parentName:"h2"},"/boosters activate")," (Activate a booster)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"boosters.command.activate")))}d.isMDXComponent=!0}}]);