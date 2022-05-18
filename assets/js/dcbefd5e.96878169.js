"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4272],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9511:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={title:"API",sidebar_position:7},c=void 0,s={unversionedId:"ecoskills/api",id:"ecoskills/api",title:"API",description:"Source Code",source:"@site/docs/ecoskills/api.md",sourceDirName:"ecoskills",slug:"/ecoskills/api",permalink:"/ecoskills/api",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecoskills/api.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"API",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"How to make a custom stat",permalink:"/ecoskills/how-to-make-a-custom-stat"},next:{title:"PlaceholderAPI",permalink:"/ecoskills/placeholderapi"}},u={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using EcoSkills in your plugin",id:"using-ecoskills-in-your-plugin",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like all my plugins, EcoSkills is open-source and available on JitPack."),(0,i.kt)("p",null,"The source code can be found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills"},"GitHub")),(0,i.kt)("h3",{id:"using-ecoskills-in-your-plugin"},"Using EcoSkills in your plugin"),(0,i.kt)("p",null,"Add EcoSkills to your build.gradle like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:EcoSkills:VERSION'\n}\n")),(0,i.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills/releases"},"https://github.com/Auxilor/EcoSkills/releases")))}f.isMDXComponent=!0}}]);