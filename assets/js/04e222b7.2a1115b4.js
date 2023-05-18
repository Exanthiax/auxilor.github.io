"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[7],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=f(r),m=o,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var f=2;f<l;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70133:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return f},toc:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),i=["components"],a={},c="jobs_money_multiplier",f={unversionedId:"effects/all-effects/jobs_money_multiplier",id:"effects/all-effects/jobs_money_multiplier",title:"jobs_money_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/jobs_money_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/jobs_money_multiplier",permalink:"/effects/all-effects/jobs_money_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/jobs_money_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"job_xp_multiplier",permalink:"/effects/all-effects/job_xp_multiplier"},next:{title:"jobs_xp_multiplier",permalink:"/effects/all-effects/jobs_xp_multiplier"}},u={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jobs_money_multiplier"},(0,l.kt)("inlineCode",{parentName:"h1"},"jobs_money_multiplier")),(0,l.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,l.kt)("p",null,"Multiplies money gain from jobs"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires Jobs Reborn")),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: jobs_money_multiplier\n  args:\n    multiplier: 1.5 # The money multiplier\n    jobs: # The list of jobs to multiply money for. If removed, it will multiply all jobs.\n      - miner\n      - fisherman\n")))}m.isMDXComponent=!0}}]);