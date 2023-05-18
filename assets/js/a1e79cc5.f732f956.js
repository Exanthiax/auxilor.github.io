"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6640],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=f(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var f={};for(var a in t)hasOwnProperty.call(t,a)&&(f[a]=t[a]);f.originalType=e,f.mdxType="string"==typeof e?e:o,c[1]=f;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},66411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return f},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],f={},a="potion_effect",l={unversionedId:"effects/all-filters/potion_effect",id:"effects/all-filters/potion_effect",title:"potion_effect",description:"The list of potion effects that the effect should activate on",source:"@site/docs/effects/all-filters/potion_effect.md",sourceDirName:"effects/all-filters",slug:"/effects/all-filters/potion_effect",permalink:"/effects/all-filters/potion_effect",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-filters/potion_effect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"player_placed",permalink:"/effects/all-filters/player_placed"},next:{title:"projectiles",permalink:"/effects/all-filters/projectiles"}},p={},u=[],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"potion_effect"},(0,i.kt)("inlineCode",{parentName:"h1"},"potion_effect")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html"},"potion effects")," that the effect should activate on"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"filters:\n  potion_effect:\n    - confusion\n    - wither\n")))}m.isMDXComponent=!0}}]);