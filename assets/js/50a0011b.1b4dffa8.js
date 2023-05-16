"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,k=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2689:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),l=n(3366),s=(n(7294),n(3905)),o=["components"],i={title:"Commands and Permissions",sidebar_position:1},a=void 0,c={unversionedId:"ecoskills/commands-and-permissions",id:"ecoskills/commands-and-permissions",title:"Commands and Permissions",description:"/skills, /stats (Open the main menu)",source:"@site/docs/ecoskills/commands-and-permissions.md",sourceDirName:"ecoskills",slug:"/ecoskills/commands-and-permissions",permalink:"/ecoskills/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoSkills",permalink:"/ecoskills/"},next:{title:"Stats",permalink:"/ecoskills/stats"}},p={},u=[{value:"<code>/skills, /stats</code> (Open the main menu)",id:"skills-stats-open-the-main-menu",level:2},{value:"<code>/skills top</code> (View the leaderboard)",id:"skills-top-view-the-leaderboard",level:2},{value:"<code>/ecoskills give</code> (Give a player xp or stat levels)",id:"ecoskills-give-give-a-player-xp-or-stat-levels",level:2},{value:"<code>/ecoskills reset (Reset a player)</code>",id:"ecoskills-reset-reset-a-player",level:2},{value:"<code>/ecoskills recount (Recount a players stat / effect levels)</code>",id:"ecoskills-recount-recount-a-players-stat--effect-levels",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"skills-stats-open-the-main-menu"},(0,s.kt)("inlineCode",{parentName:"h2"},"/skills, /stats")," (Open the main menu)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"ecoskills.command.skills")),(0,s.kt)("h2",{id:"skills-top-view-the-leaderboard"},(0,s.kt)("inlineCode",{parentName:"h2"},"/skills top")," (View the leaderboard)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"ecoskills.command.top")),(0,s.kt)("h2",{id:"ecoskills-give-give-a-player-xp-or-stat-levels"},(0,s.kt)("inlineCode",{parentName:"h2"},"/ecoskills give")," (Give a player xp or stat levels)"),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"ecoskills.command.give")),(0,s.kt)("p",null,"General Usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"/ecoskills give <player> <skill / stat> <xp / levels>")),(0,s.kt)("p",null,"For example, to give a player 30 strength, you would do ",(0,s.kt)("inlineCode",{parentName:"p"},"/ecoskills give <player> strength 30")),(0,s.kt)("h2",{id:"ecoskills-reset-reset-a-player"},(0,s.kt)("inlineCode",{parentName:"h2"},"/ecoskills reset (Reset a player)")),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"ecoskills.command.reset")),(0,s.kt)("p",null,"General Usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"/ecoskills reset <player>")),(0,s.kt)("h2",{id:"ecoskills-recount-recount-a-players-stat--effect-levels"},(0,s.kt)("inlineCode",{parentName:"h2"},"/ecoskills recount (Recount a players stat / effect levels)")),(0,s.kt)("p",null,"Permission: ",(0,s.kt)("inlineCode",{parentName:"p"},"ecoskills.command.recount")),(0,s.kt)("p",null,"General Usage: ",(0,s.kt)("inlineCode",{parentName:"p"},"/ecoskills recount <player>")))}d.isMDXComponent=!0}}]);