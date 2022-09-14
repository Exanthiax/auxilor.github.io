"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5724],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),f=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=f(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=f(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var f=2;f<a;f++)c[f]=t[f];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6988:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),c=["components"],o={},l="run_chain_inline",f={unversionedId:"effects/all-effects/run_chain_inline",id:"effects/all-effects/run_chain_inline",title:"run_chain_inline",description:"Triggered Effect",source:"@site/docs/effects/all-effects/run_chain_inline.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/run_chain_inline",permalink:"/effects/all-effects/run_chain_inline",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/run_chain_inline.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"run_chain",permalink:"/effects/all-effects/run_chain"},next:{title:"run_command",permalink:"/effects/all-effects/run_command"}},u={},s=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run_chain_inline"},(0,a.kt)("inlineCode",{parentName:"h1"},"run_chain_inline")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Execute an effect chain inline, rather than specifiying the ID"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: run_chain_inline\n  args:\n    run-type: normal # Optional, sets how the chain is ran, see the 'configuring an effect' page\n    chain: # The chain to run\n      effects:\n        - id: teleport\n        - id: potion_effect\n          args:\n            effect: blindness\n            level: 3\n            duration: 30\n            apply_to_player: true\n        - id: send_message\n          args:\n            message: \"&fYou have been teleported!\"\n            action_bar: true\n        - id: play_sound\n          args:\n            sound: entity_dragon_fireball_explode\n            pitch: 1.5\n            volume: 4\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);