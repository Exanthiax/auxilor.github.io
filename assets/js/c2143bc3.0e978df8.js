"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[963],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=f(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var f=2;f<a;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25010:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={},l="give_task_xp",f={unversionedId:"effects/all-effects/give_task_xp",id:"effects/all-effects/give_task_xp",title:"give_task_xp",description:"Triggered Effect",source:"@site/docs/effects/all-effects/give_task_xp.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/give_task_xp",permalink:"/effects/all-effects/give_task_xp",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/give_task_xp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_skill_xp_naturally",permalink:"/effects/all-effects/give_skill_xp_naturally"},next:{title:"give_xp",permalink:"/effects/all-effects/give_xp"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"give_task_xp"},(0,a.kt)("inlineCode",{parentName:"h1"},"give_task_xp")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Gives experience points for a task in a quest, excluding multipliers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires EcoQuests")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_task_xp\n  args:\n    quest: magic_miner # The quest ID\n    task: mine_gold # The task ID\n    xp: 100 # The amount of xp to give\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);