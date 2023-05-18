"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6222],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"The Points System",sidebar_position:7},s=void 0,c={unversionedId:"effects/points",id:"effects/points",title:"The Points System",description:"Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For",source:"@site/docs/effects/points.md",sourceDirName:"effects",slug:"/effects/points",permalink:"/effects/points",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/points.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"The Points System",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"All Triggers",permalink:"/effects/all-triggers"},next:{title:"Custom Placeholders",permalink:"/effects/custom-placeholders"}},u={},p=[{value:"Placeholders",id:"placeholders",level:2},{value:"Global Points",id:"global-points",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For\nexample, lets say you want the player to have to used an item a certain amount of times in order to use another one -\nyou would be able to keep track of this with a point."),(0,i.kt)("p",null,"You can have as many different points as you want, the plugins will keep track of them automatically. Points are shared\nbetween plugins, too - so if you make a point in EcoItems, then you can use it in EcoPets, EcoJobs, etc."),(0,i.kt)("p",null,"A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is\ncompletely up to you."),(0,i.kt)("h2",{id:"placeholders"},"Placeholders"),(0,i.kt)("p",null,"You can get the value of a point with the following placeholder:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"%libreforge_points_<point>%")),(0,i.kt)("h2",{id:"global-points"},"Global Points"),(0,i.kt)("p",null,"There are also global points, which belong to the server rather than to the player."),(0,i.kt)("p",null,"You can get the value of these with ",(0,i.kt)("inlineCode",{parentName:"p"},"%libreforge_global_points_<point>%")))}m.isMDXComponent=!0}}]);