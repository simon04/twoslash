(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),s=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||s(e)||o(e)||i()}},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var s=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=s},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(s.default.useContext(o.AmpStateContext))};var n,s=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,s=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||s&&i}},7947:function(e,t,r){"use strict";var n=r(9713);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=h,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=n?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(7294)),a=(o=r(617))&&o.__esModule?o:{default:o},c=r(3367),l=r(4287),u=r(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(s){var o=!0,i=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){i=!0;var a=s.key.slice(s.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(s.type){case"title":case"base":t.has(s.type)?o=!1:t.add(s.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var u=m[c];if(s.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var d=s.props[u],h=n[u]||new Set;"name"===u&&i||!h.has(d)?(h.add(d),n[u]=h):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,i.default.cloneElement(e,a)}return i.default.cloneElement(e,{key:o})}))}function g(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(a.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}g.rewind=function(){};var v=g;t.default=v},617:function(e,t,r){"use strict";var n=r(319),s=r(4575),o=r(3913),i=(r(1506),r(2205)),a=r(8585),c=r(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var s=c(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),d=function(e){i(r,e);var t=l(r);function r(e){var o;return s(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},5722:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return c}});var n=r(5893),s=r(9008),o=r(7294),i=r(7328),a=!0;function c(e){return(0,o.useEffect)(i.i,[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"main",children:[(0,n.jsxs)("article",{className:"container border-red",children:[(0,n.jsxs)("div",{className:"intro",children:[(0,n.jsxs)("p",{children:["The documentation concerning",(0,n.jsx)("br",{}),"the npm modules of"]}),(0,n.jsx)("h1",{className:"title",children:"Shiki-Twoslash"}),(0,n.jsxs)("p",{children:["In which markdown code samples are powered by",(0,n.jsx)("br",{}),"the syntax engine of Visual Studio Code",(0,n.jsx)("br",{}),"mixed with the TypeScript compiler\u2019s information."]})]}),(0,n.jsx)("div",{style:{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"},children:(0,n.jsx)("img",{src:"./svgs/squiggle.svg",alt:"Decoration",width:70,height:25.5})}),(0,n.jsxs)("div",{className:"intro",children:[(0,n.jsx)("p",{className:"by",children:"By orta therox"}),(0,n.jsxs)("p",{children:["Purveyor of renowned open source code",(0,n.jsx)("br",{}),"and TypeScript compiler team member"]})]}),(0,n.jsx)("div",{style:{textAlign:"center",marginTop:"3rem"},children:(0,n.jsx)("img",{src:"./svgs/logo.svg",alt:"Shiki Logo",width:167,height:238})})]}),(0,n.jsx)(h,{num:0}),(0,n.jsxs)("article",{className:"container border-yellow",id:"shiki",children:[(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:"./svgs/shiki.svg",alt:"The word 'shiki'",width:309,height:95})}),(0,n.jsxs)("div",{className:"split-50-50",children:[(0,n.jsxs)("div",{className:"left-margin-1",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"eu",children:"V"}),"isual Studio Code\u2019s syntax highlighter packaged for running in a web browser and statically via Node.js."]}),(0,n.jsxs)("p",{children:["Supports all possible languages available on the VS Code extension marketplace. That\u2019s over 200 langauges. All you need is a"," ",(0,n.jsx)("code",{children:".tmlangauge"})," file for anything not shipped with Shiki."]}),(0,n.jsx)("p",{children:"Shiki colours your code with any VS Code theme. That\u2019s 4000+ last time we checked."})]}),(0,n.jsxs)("div",{className:"left-margin-1",children:[(0,n.jsx)("p",{children:"Fig 1."}),(0,n.jsx)("p",{className:"center-small",children:(0,n.jsx)("img",{src:"./svgs/fig-1-code.svg",alt:"The word 'shiki'",width:"246",height:"284"})})]})]})]}),(0,n.jsxs)("article",{className:"container border-blue",id:"twoslash",children:[(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:"./svgs/twoslash.svg",alt:"The word 'twoslash'",width:501,height:92})}),(0,n.jsxs)("div",{className:"split-50-50",children:[(0,n.jsxs)("div",{className:"left-margin-1",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{className:"eu",children:"T"}),"hink of twoslash as a pre-processor for your code-samples."]}),(0,n.jsx)("p",{children:"Twoslash is a JavaScript and TypeScript markup language. You can write a single code sample which describes an entire JavaScript project"}),(0,n.jsx)("p",{children:"Twoslash uses the same compiler APIs as your text editors to provide type-driven hover information, accurate errors and"}),(0,n.jsx)("p",{children:"Each code sample is compiled in isolation, so you can be certain all your examples still compile and work right a few major versions down the line."})]}),(0,n.jsxs)("div",{className:"left-margin-1",children:[(0,n.jsx)("p",{children:"Fig 2."}),(0,n.jsx)("p",{className:"center-small",children:(0,n.jsx)("img",{src:"./svgs/fig-2-code.svg",alt:"The word 'shiki'",width:"331",height:"270"})})]})]})]}),(0,n.jsx)(h,{num:1}),(0,n.jsxs)("article",{className:"container border-blue",id:"features",children:[(0,n.jsx)(l,{msg:"When you mix Shiki with Twoslash you can have extremely accurate syntax highlighting for JavaScript and TypeScript. The syntax highlighting has been maintained by the TypeScript team for years and gets updated with new TypeScript releases."}),(0,n.jsx)(u,{code:e.html.basic.replace("twoslash","").replace("twoslash","").replace("lsp","")}),(0,n.jsx)(l,{msg:"By default, code samples rendered by shiki-twoslash have all of their IDE hover information embedded inside the HTML. With a hint of JavaScript, you can support mouse-hovering in the browser. Try hovering below:"}),(0,n.jsx)(u,{code:e.html.basic}),(0,n.jsx)(l,{msg:"The name Twoslash refers to specially formatted comments which can be used to set up your environment, like compiler flags or separate input files. For example, here is a code sample showing export/importing a function:"}),(0,n.jsx)(d,{source:e.html.multiFileSrc,output:e.html.multiFileHTML}),(0,n.jsx)(l,{msg:"You can write comment queries to have the twoslash powered code-samples highlight types without user interaction."}),(0,n.jsx)(d,{source:e.html.multiFileHighSrc,output:e.html.multiFileHighHTML}),(0,n.jsx)(l,{msg:"And if a code sample becomes un-focused, you can snip it down to just the bit that matters. The compiler still verifies everything ahead of time."}),(0,n.jsx)(d,{source:e.html.multiFileSnipSrc,output:e.html.multiFileSnipHTML}),(0,n.jsx)(l,{msg:"To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for an express app in JS:"}),(0,n.jsx)(d,{source:e.html.expressSrc,output:e.html.expressHTML}),(0,n.jsx)(l,{msg:"Are you wondering where the types come from? Express is a JavaScript library. During the build process Shiki-Twoslash can use types from your app\u2019s node_modules folder. I just had to run: yarn add @types/express<br/><br/>You probably don't want to only show golden-path code too, showing <em>how</em> code goes wrong is also a critical way to understand code. Shiki Twoslash has native support for TypeScript compiler errors."}),(0,n.jsx)(d,{source:e.html.errorSrc,output:e.html.errorHTML}),(0,n.jsx)(l,{msg:"You see how we declared which errors were expected in the source? That means if this code sample errors with something else, Shiki Twoslash will fail to render.<br /><br />Failing rocks because your CI will tell you that your code samples are out of date."})]})]})]})}var l=function(e){var t='<span class="eu">'.concat(e.msg[0],"</span>").concat(e.msg.substring(1));return(0,n.jsx)("p",{className:"mid-6",dangerouslySetInnerHTML:{__html:t}})},u=function(e){return(0,n.jsx)("div",{className:"mid-8",dangerouslySetInnerHTML:{__html:e.code}})},d=function(e){return(0,n.jsxs)("div",{className:"mid-10",children:[(0,n.jsxs)("div",{style:{paddingRight:"5px"},children:[(0,n.jsx)("span",{className:"source",children:"Source"}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.source}})]}),(0,n.jsxs)("div",{style:{marginLeft:"5px"},children:[(0,n.jsx)("span",{children:"Output"}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.output}})]})]})},h=function(e){return(0,n.jsx)("div",{className:"split",children:(0,n.jsx)("img",{src:"./svgs/split-".concat(e.num,".svg")})})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5722)}])},9008:function(e,t,r){e.exports=r(7947)},7328:function(e,t){"use strict";t.i=void 0;var r=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},n=function(e){return"pre"===e.nodeName.toLowerCase()?e.getBoundingClientRect():n(e.parentElement)},s=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return r();var s=t.getAttribute("lsp"),o=function(e){var t=document.body.getBoundingClientRect(),r=e.getBoundingClientRect();return{top:r.top-t.top,left:r.left-t.left}}(t),i=function(){var e=document.getElementById("twoslash-mouse-hover-info");return e||((e=document.createElement("div")).style.position="absolute",e.id="twoslash-mouse-hover-info",document.body.appendChild(e)),e}(),a=document.createElement("textarea");a.innerHTML=s,i.textContent=a.value;i.style.display="block",i.style.top=o.top+20+"px",i.style.left=o.left+"px";var c=n(t),l=o.left-c.x;i.style.maxWidth=c.width-l+"px"};t.i=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",s),e.addEventListener("mouseout",r)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",s),e.removeEventListener("mouseout",r)}))}}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);