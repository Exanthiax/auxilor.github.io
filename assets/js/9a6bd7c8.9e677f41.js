"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[1915],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},f=Object.keys(e);for(n=0;n<f.length;n++)r=f[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(n=0;n<f.length;n++)r=f[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,f=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||f;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var f=r.length,c=new Array(f);c[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<f;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66893:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),f=(r(67294),r(3905)),c=["components"],a={},i="set_food",l={unversionedId:"effects/all-effects/set_food",id:"effects/all-effects/set_food",title:"set_food",description:"Triggered Effect",source:"@site/docs/effects/all-effects/set_food.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/set_food",permalink:"/effects/all-effects/set_food",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/set_food.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set_custom_model_data",permalink:"/effects/all-effects/set_custom_model_data"},next:{title:"set_freeze_ticks",permalink:"/effects/all-effects/set_freeze_ticks"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,f.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"set_food"},(0,f.kt)("inlineCode",{parentName:"h1"},"set_food")),(0,f.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,f.kt)("p",null,"Sets the player's food"),(0,f.kt)("h1",{id:"example-config"},"Example Config"),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: set_food\n  args:\n    amount: 1 # The food level to set\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);