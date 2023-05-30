"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[121],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,l(l({ref:e},s),{},{components:n})):r.createElement(d,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47112:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},c="translate_location",u={unversionedId:"effects/all-mutators/translate_location",id:"effects/all-mutators/translate_location",title:"translate_location",description:"Translate the location by specified x, y, and z values",source:"@site/docs/effects/all-mutators/translate_location.md",sourceDirName:"effects/all-mutators",slug:"/effects/all-mutators/translate_location",permalink:"/effects/all-mutators/translate_location",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-mutators/translate_location.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"spin_velocity",permalink:"/effects/all-mutators/spin_velocity"},next:{title:"victim_as_player",permalink:"/effects/all-mutators/victim_as_player"}},s={},f=[],p={toc:f};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"translate_location"},(0,o.kt)("inlineCode",{parentName:"h1"},"translate_location")),(0,o.kt)("p",null,"Translate the location by specified x, y, and z values"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: translate_location\n  args:\n    add_x: -0.1 # The amount to add to x\n    add_y: 2.0 # The amount to add to y\n    add-z: 0 # The amount to add to z\n")))}m.isMDXComponent=!0}}]);