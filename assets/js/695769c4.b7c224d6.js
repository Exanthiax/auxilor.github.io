"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6714],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=f(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return n?r.createElement(y,o(o({ref:t},i),{},{components:n})):r.createElement(y,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var f=2;f<c;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return u}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],l={},s="elytra_boost_save_chance",f={unversionedId:"effects/all-effects/elytra_boost_save_chance",id:"effects/all-effects/elytra_boost_save_chance",title:"elytra_boost_save_chance",description:"Permanent Effect",source:"@site/docs/effects/all-effects/elytra_boost_save_chance.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/elytra_boost_save_chance",permalink:"/effects/all-effects/elytra_boost_save_chance",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/elytra_boost_save_chance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"drill",permalink:"/effects/all-effects/drill"},next:{title:"extinguish",permalink:"/effects/all-effects/extinguish"}},i={},u=[{value:"Permanent Effect",id:"permanent-effect",level:4}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"elytra_boost_save_chance"},(0,c.kt)("inlineCode",{parentName:"h1"},"elytra_boost_save_chance")),(0,c.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,c.kt)("p",null,"Prevents consuming fireworks when boosting with an elytra"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: elytra_boost_save_chance\n  args:\n    chance: 0.1 # The chance to not consume a firework (between 0 and 1)\n")))}m.isMDXComponent=!0}}]);