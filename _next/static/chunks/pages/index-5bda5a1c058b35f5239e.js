(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,s){var i=s(7228);e.exports=function(e){if(Array.isArray(e))return i(e)}},9713:function(e){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,s){var i=s(3646),o=s(6860),a=s(379),r=s(8206);e.exports=function(e){return i(e)||o(e)||a(e)||r()}},3367:function(e,t,s){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var o=((i=s(7294))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,s){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(o.default.useContext(a.AmpStateContext))};var i,o=(i=s(7294))&&i.__esModule?i:{default:i},a=s(3367);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,i=e.hybrid,o=void 0!==i&&i,a=e.hasQuery,r=void 0!==a&&a;return s||o&&r}},7947:function(e,t,s){"use strict";var i=s(9713);function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}t.__esModule=!0,t.defaultHead=m,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var s={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(s,o,a):s[o]=e[o]}s.default=e,t&&t.set(e,s);return s}(s(7294)),n=(a=s(617))&&a.__esModule?a:{default:a},l=s(3367),c=s(4287),h=s(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var s=r.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(u,[]).reverse().concat(m(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,i={};return function(o){var a=!0,r=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){r=!0;var n=o.key.slice(o.key.indexOf("$")+1);e.has(n)?a=!1:e.add(n)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var h=p[l];if(o.props.hasOwnProperty(h))if("charSet"===h)s.has(h)?a=!1:s.add(h);else{var d=o.props[h],m=i[h]||new Set;"name"===h&&r||!m.has(d)?(m.add(d),i[h]=m):a=!1}}}return a}}()).reverse().map((function(e,s){var a=e.key||s;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var n=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e.props||{});return n["data-href"]=n.href,n.href=void 0,n["data-optimized-fonts"]=!0,r.default.cloneElement(e,n)}return r.default.cloneElement(e,{key:a})}))}function f(e){var t=e.children,s=(0,r.useContext)(l.AmpStateContext),i=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(n.default,{reduceComponentsToState:g,headManager:i,inAmpMode:(0,h.isInAmpMode)(s)},t)}f.rewind=function(){};var x=f;t.default=x},617:function(e,t,s){"use strict";var i=s(319),o=s(4575),a=s(3913),r=(s(1506),s(2205)),n=s(8585),l=s(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,i=l(e);if(t){var o=l(this).constructor;s=Reflect.construct(i,arguments,o)}else s=i.apply(this,arguments);return n(this,s)}}t.__esModule=!0,t.default=void 0;var h=s(7294),d=function(e){r(s,e);var t=c(s);function s(e){var a;return o(this,s),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(h.Component);t.default=d},5722:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return n},default:function(){return l}});var i=s(5893),o=s(9008),a=s(7294),r=s(7328),n=!0;function l(e){return(0,a.useEffect)(r.i,[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Shiki Twoslash: Static Code Samples for JS Projects"}),(0,i.jsx)("meta",{name:"description",content:"You take some Shiki, add a hint of the TypeScript compiler, and \ud83c\udf89! Incredible static code samples"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,i.jsx)("meta",{property:"og:title",content:"Shiki Twoslash: Static Code Samples for JS Projects"}),(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:url",content:"https://shikijs.github.io/twoslash/"}),(0,i.jsx)("meta",{property:"og:image",content:"https://shikijs.github.io/twoslash/img/ograph.png"}),(0,i.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@orta"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@orta"}),(0,i.jsx)("meta",{name:"theme-color",content:"#fcf3d9"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#fcf3d9"})]}),(0,i.jsxs)("main",{className:"main",children:[(0,i.jsxs)("article",{className:"container border-red",children:[(0,i.jsxs)("div",{className:"intro",children:[(0,i.jsxs)("p",{children:["The documentation concerning",(0,i.jsx)("br",{}),"the npm modules of"]}),(0,i.jsx)("h1",{className:"title",children:"Shiki-Twoslash"}),(0,i.jsxs)("p",{children:["In which markdown code samples are powered by",(0,i.jsx)("br",{}),"the syntax engine of Visual Studio Code",(0,i.jsx)("br",{}),"mixed with the TypeScript compiler\u2019s information"]})]}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"3rem",marginBottom:"3rem"},children:(0,i.jsx)("img",{src:"./svgs/squiggle.svg",alt:"Decoration",width:70,height:25.5})}),(0,i.jsxs)("div",{className:"intro",children:[(0,i.jsx)("p",{className:"by",children:"By orta therox"}),(0,i.jsxs)("p",{children:["Purveyor of renowned open source code",(0,i.jsx)("br",{}),"and TypeScript compiler team member"]})]}),(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"3rem"},children:(0,i.jsx)("img",{src:"./svgs/logo.svg",alt:"Shiki Logo",width:167,height:238})})]}),(0,i.jsx)(x,{num:0}),(0,i.jsxs)("article",{className:"container border-yellow",id:"shiki",children:[(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{className:"old",src:"./svgs/shiki.svg",alt:"The word 'shiki'",width:309,height:95})}),(0,i.jsxs)("div",{className:"split-50-50",children:[(0,i.jsxs)("div",{className:"left-margin-1",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"eu",children:"V"}),"isual Studio Code\u2019s syntax highlighter packaged for running in a web browser and statically via Node.js."]}),(0,i.jsxs)("p",{children:["Supports all possible languages available on the VS Code extension marketplace. That\u2019s over 200 languages. All you need is a",(0,i.jsx)("code",{children:" .tmlangauge"})," file for anything not shipped with"," ",(0,i.jsx)("a",{href:"https://github.com/shikijs/shiki",target:"_blank",children:"Shiki"}),"."]}),(0,i.jsxs)("p",{children:["Shiki colours your code with any VS Code theme. That\u2019s ",100*Math.round(e.stats.themeCount/100),"+ last time we checked."]})]}),(0,i.jsxs)("div",{className:"left-margin-1",children:[(0,i.jsx)("p",{children:"Fig 1."}),(0,i.jsx)("p",{className:"center-small",children:(0,i.jsx)("img",{src:"./svgs/fig-1-code.svg",alt:"A diagram showing syntax tokens",width:"246",height:"284"})})]})]})]}),(0,i.jsxs)("article",{className:"container border-blue",id:"twoslash",children:[(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)("img",{className:"old",src:"./svgs/twoslash.svg",alt:"The word 'twoslash'",width:501,height:92})}),(0,i.jsxs)("div",{className:"split-50-50",children:[(0,i.jsxs)("div",{className:"left-margin-1 ",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"eu",children:"T"}),"hink of twoslash as a pre-processor for your code-samples."]}),(0,i.jsx)("p",{children:"Twoslash is a JavaScript and TypeScript markup language. You can write a single code sample which describes an entire JavaScript project"}),(0,i.jsx)("p",{children:"Twoslash uses the same compiler APIs as your text editors to provide type-driven hover information, accurate errors and"}),(0,i.jsx)("p",{children:"Each code sample is compiled in isolation, so you can be certain all your examples still compile and work right a few major versions down the line."})]}),(0,i.jsxs)("div",{className:"left-margin-1",children:[(0,i.jsx)("p",{children:"Fig 2."}),(0,i.jsx)("p",{className:"center-small",children:(0,i.jsx)("img",{src:"./svgs/fig-2-code.svg",alt:"A diagram showing a twoslash code sample being converted to HTML",width:"331",height:"270"})})]})]})]}),(0,i.jsxs)("article",{className:"container border-red",id:"twoslash",children:[(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("img",{className:"old",src:"./svgs/shiki.svg",alt:"The word 'shiki'",width:309,height:95}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{className:"old",src:"./svgs/twoslash.svg",alt:"The word 'twoslash'",width:501,height:92})]}),(0,i.jsxs)("div",{className:"split-50-50",children:[(0,i.jsxs)("div",{className:"left-margin-1 ",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"eu",children:"M"}),"ixing these two ideas is Shiki Twoslash. The goal being that you can write ergonomic code samples which are backed by the TypeScript compiler."]}),(0,i.jsx)("p",{children:"All code sample use Shiki, then you can opt-in to have Twoslash markup inside specific code blocks."}),(0,i.jsx)("p",{children:"Shiki Twoslash is built to generate completely server-side syntax highlighted code samples with no reliance that the user can run JavaScript."})]}),(0,i.jsxs)("div",{className:"left-margin-1",children:[(0,i.jsx)("p",{children:"Fig 3."}),(0,i.jsx)("p",{className:"center-small",children:(0,i.jsx)("img",{src:"./svgs/fig-3-code.svg",alt:"A diagram of markdown -> HTML with Shiki Twoslash",width:"331",height:"421"})})]})]})]}),(0,i.jsx)(x,{num:1}),(0,i.jsxs)("article",{className:"container border-yellow",id:"markup",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("a",{href:"#markup",children:"#"}),"Chapter 1:",(0,i.jsx)("br",{className:"small-only"})," Twoslash Markup"]}),(0,i.jsx)(d,{msg:"By default all codeblocks in Shiki Twoslash act like traditional static code samples, making Shiki Twoslash backwards compatible with existing codebases."}),(0,i.jsx)(g,{code:e.html.basic.replace("twoslash","").replace("twoslash","").replace("lsp","")}),(0,i.jsx)(d,{msg:"However, on JavaScript-y code samples, you can opt-in each code sample to use Twoslash."}),(0,i.jsx)(g,{code:e.html.basic}),(0,i.jsx)(d,{msg:"The name Twoslash refers to specially formatted comments which can be used to set up your environment, like compiler flags or separate input files. For example, here is a code sample showing export/importing a function:"}),(0,i.jsx)(f,{source:e.html.multiFileSrc,output:e.html.multiFileHTML}),(0,i.jsx)(m,{children:"Compiler flag comments are removed from the output, but we keep the filename around to help people understand that you've made a multi-file code sample."}),(0,i.jsx)(d,{msg:"You can write comment queries to have the twoslash powered code-samples highlight types without user interaction."}),(0,i.jsx)(f,{source:e.html.multiFileHighSrc,output:e.html.multiFileHighHTML}),(0,i.jsx)(d,{msg:"And if a code sample becomes un-focused, you can snip it down to just the bit that matters. The compiler still verifies everything ahead of time."}),(0,i.jsx)(f,{source:e.html.multiFileSnipSrc,output:e.html.multiFileSnipHTML}),(0,i.jsx)(d,{msg:"To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for an express app in JS:"}),(0,i.jsx)(f,{source:e.html.expressSrc,output:e.html.expressHTML}),(0,i.jsx)(d,{msg:"Are you wondering where the types come from? Express is a JavaScript library, it does not ship types. During the build process Shiki-Twoslash can use types from your app\u2019s node_modules folder. I just had to run: <code>yarn add @types/express</code>.<br/><br/>You probably don't want to only show golden-path code too, showing <em>how</em> code goes wrong is also a critical way to understand code. Shiki Twoslash has native support for TypeScript compiler errors."}),(0,i.jsx)(f,{source:e.html.errorSrc,output:e.html.errorHTML}),(0,i.jsx)(d,{msg:"You see how we declared which errors were expected in the source? That means if this code sample errors with something else, Shiki Twoslash will fail to render.<br /><br />Failing rocks because your CI will tell you that your code samples are out of date."})]}),(0,i.jsxs)("article",{className:"container border-blue",id:"shiki",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("a",{href:"#shiki",children:"#"}),"Chapter 2:",(0,i.jsx)("br",{className:"small-only"})," Shiki Twoslash"]}),(0,i.jsx)(d,{msg:"Twoslash Shiki is a polite but hard fork of the Shiki code rendering engine. Let's look at a few of the Shiki Twoslash features.<br/><br/><strong>Multi-theme rendering</strong> gives you the chance to set up your own custom color themes ahead of time. Shiki Twoslash will render each codeblock multiple times. For example, rendering with these settings uses the site theme and every shipped Shiki theme."}),(0,i.jsx)(g,{code:c('{ "themes": '.concat(h(),"}"))}),(0,i.jsx)(m,{children:"Turns into:"}),(0,i.jsx)("div",{className:"show-lots-of-code mid-10",dangerouslySetInnerHTML:{__html:e.html.theme}}),(0,i.jsx)(m,{children:"Each code sample has the theme name as a class:"}),(0,i.jsx)(g,{code:c('&lt;pre class="shiki dark-plus" style="..."')}),(0,i.jsx)(m,{children:"Giving you the chance to use CSS to hide the ones which should not be seen."}),(0,i.jsx)(g,{code:e.html.cssSrc}),(0,i.jsx)(d,{msg:"Highlighting code in your sample can be done via codefence comments:"}),(0,i.jsx)(f,{source:(t=e.html.highlightSrc,s="{1, 3-4}",t.replace("// codefence: {1, 3-4}","```ts twoslash ".concat(s)).replace("<div class='line'></div></code",'<div class="line" style="color: #BB8700">```</div></code')),output:e.html.highlightHTML.replace("// codefence: {1, 3-4}","")}),(0,i.jsx)(m,{children:"Shiki Twoslash uses CSS classes to set up the highlighting, so style-wise, it's all up to you."}),(0,i.jsx)(d,{msg:"Code blocks which are atomic is great, but can get repetitive in your markdown file. To avoid constantly repeating yourself, Shiki Twoslash has a simple includes system where you can create a hidden codeblock which is imported in parts into your code samples."}),(0,i.jsx)(f,{source:e.html.includeHtml,output:e.html.includeHtmlRender})]}),(0,i.jsxs)("article",{className:"container border-red",id:"integrations",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("a",{href:"#integrations",children:"#"}),"Chapter 3:",(0,i.jsx)("br",{className:"small-only"})," Integrations"]}),(0,i.jsx)(d,{msg:"I built plugins for most of the big static site generators in the JavaScript ecosystem. These are production ready, but aside from Gatsby, haven't had a true stress test yet."}),(0,i.jsx)(m,{children:"The goal of these plugins is to get the markdown parsing set up, the CSS and JS support is left to you to make decisions on."}),(0,i.jsx)(u,{top:"Gatsby plugin",body:"Add the package, edit your <code>gatsby-config.js</code>, add CSS and JS.",npm:"gatsby-remark-shiki-twoslash",imgName:"gatsby"}),(0,i.jsx)(u,{right:!0,top:"Docusaurus preset",body:"Add the pacakge, edit your <code>docusaurus.config</code>, add CSS and JS.",npm:"docusaurus-preset-shiki-twoslash",imgName:"docusaurus"}),(0,i.jsx)(u,{top:"VuePress plugin",body:"Add the package, edit your <code>./vuepress/config.ts</code>, add CSS and JS.",npm:"vuepress-plugin-shiki-twoslash",imgName:"vue"}),(0,i.jsx)(u,{right:!0,top:"Hexo plugin",body:"Add the package, edit your <code>./config.yml</code> add CSS and JS",npm:"hexo-shiki-twoslash",imgName:"h"}),(0,i.jsx)(u,{top:"11ty plugin",body:"Add the package, edit your <code>.eleventy.js</code>, add CSS and JS.",npm:"eleventy-plugin-shiki-twoslash",imgName:"11ty"}),(0,i.jsx)(d,{msg:"These generator plugins are powered by two markdown engine plugins. Of those, <code>remark-shiki-twoslash</code> does most of the work."}),(0,i.jsx)("a",{className:"mid-6 lib",href:"https://www.npmjs.com/package/remark-shiki-twoslash",children:"remark-shiki-twoslash"}),(0,i.jsx)("a",{className:"mid-6 lib",href:"https://www.npmjs.com/package/markdown-it-shiki-twoslash",children:"markdown-it-shiki-twoslash"}),(0,i.jsxs)(m,{children:["You can use these libraries to set up in almost any JavaScript tool. There are examples in the"," ",(0,i.jsx)("a",{href:"https://github.com/shikijs/twoslash/tree/main/examples",children:"Shiki Twoslash monorepo"})," of working with Next.js, Elder.js and MDX.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"I'm open to adding more examples."]})]}),(0,i.jsxs)("article",{className:"container border-yellow",id:"tooling",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("a",{href:"#tooling",children:"#"}),"Chapter 4:",(0,i.jsx)("br",{className:"small-only"})," Tooling"]}),(0,i.jsx)(d,{msg:"No markdown document is an island. To build out a corpus of markdown documents which rely on Twoslash there are some additional tools which might come in handy."}),(0,i.jsx)(p,{top:"Twoslash CLI",body:"Render documents via the terminal and verify the code samples all pass. <a href='https://github.com/shikijs/twoslash/tree/main/site/examples'>This site</a> uses the CLI for all of the above code samples.",npm:"twoslash-cli",imgName:"cli"}),(0,i.jsx)(p,{top:"Twoslash VS Code",body:"Adds twoslash markdup auto-complete to code samples, and offers a one-click link to a Twoslash repl with a reference on the TypeScript website.",npm:"vscode-twoslash",url:"https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash",imgName:"vscode"})]}),(0,i.jsx)(x,{num:2}),(0,i.jsxs)("article",{className:"container border-blue",id:"vision",children:[(0,i.jsxs)("h2",{children:[(0,i.jsx)("a",{href:"#vision",children:"#"}),"Vision"]}),(0,i.jsx)(d,{msg:"I intend for Shiki Twoslash to be a <a href='https://github.com/shikijs/twoslash/blob/main/VISION.md'>very long term project</a>. Initially created to power the TypeScript website and handbook, Shiki Twoslash has the potential for being a solid foundation for almost any website which describes JavaScript-y code."}),(0,i.jsx)(m,{children:"Extracting Shiki Twoslash, documenting, improving and abstracting into generator plugins is work I do on my own time and if that is the sort of work you want to see more of, consider sponsoring me on GitHub Sponsors"}),(0,i.jsx)("a",{className:"mid-6 lib",href:"https://github.com/sponsors/orta/",children:"github.com/sponsors/orta/"}),(0,i.jsx)(m,{children:"Have a good one!"}),(0,i.jsx)(m,{children:(0,i.jsx)("img",{src:"./img/us.jpg",width:"480",height:"361"})}),(0,i.jsxs)(m,{children:["Big thanks to ",(0,i.jsx)("a",{href:"https://www.instagram.com/gemmamcshane/",children:"Danger"}),", ",(0,i.jsx)("a",{href:"https://www.instagram.com/outlook_hayesy/",children:"Hayes"}),","," ",(0,i.jsx)("a",{href:"https://matsu.io",children:"Pine"})," for Shiki, ",(0,i.jsx)("a",{href:"https://github.com/RyanCavanaugh",children:"Ryan Cavanaugh"})," for the idea, starting code and optimism, ",(0,i.jsx)("a",{href:"https://www.c82.net",children:"Nicholas Rougeux"})," whose design work helped me"," ",(0,i.jsx)("a",{href:"https://www.figma.com/file/OVzyeDLLDSvqCwgoaXsr0T/Twoslash?node-id=0%3A1",children:"really nail"})," the aesthetic I wanted,"," ",(0,i.jsx)("a",{href:"https://www.facebook.com/thehappychappo",children:"The Happy Chappo"})," for art and finally all the folks who helped out build the TypeScript website in Discord."]}),(0,i.jsx)(m,{children:(0,i.jsx)("a",{href:"https://github.com/shikijs/twoslash",children:"https://github.com/shikijs/twoslash"})})]})]})]});var t,s}function c(e){return'<pre class="shiki " style="background-color: #FCF3D9; color: #111111; "><div class="language-id">ts</div><div class=\'code-container\'><code style=\'white-space: pre-wrap\'>'.concat(e,"</code></div></pre>")}function h(){return["../shiki-twoslash","dark-plus","github-dark","github-light","light-plus","material-theme-darker","material-theme-default","material-theme-lighter","min-light","min-dark","monokai","slack-theme-ochin","solarized-light","nord","slack-theme-dark-mode","material-theme-ocean","solarized-dark","material-theme-palenight"].map((function(e){return'"'+e+'"'})).join(", ")}var d=function(e){var t='<span class="eu">'.concat(e.msg[0],"</span>").concat(e.msg.substring(1));return(0,i.jsx)("p",{className:"mid-6 has-funny-opening-letter",dangerouslySetInnerHTML:{__html:t}})},m=function(e){return(0,i.jsx)("p",{className:"mid-6",children:e.children})},u=function(e){return(0,i.jsxs)("div",{className:"mid-6 lib",children:[(0,i.jsxs)("div",{className:"lib-content "+(e.right?"right":""),children:[(0,i.jsx)("img",{src:"./prints/".concat(e.imgName,".png"),width:"150",height:"150"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:e.top}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.body}})]})]}),(0,i.jsx)("a",{href:"https://www.npmjs.com/package/".concat(e.npm),children:e.npm})]})},p=function(e){return(0,i.jsxs)("div",{className:"mid-6 lib",children:[(0,i.jsx)("h4",{children:e.top}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.body}}),(0,i.jsx)("img",{src:"./svgs/".concat(e.imgName,".svg"),width:"480",height:"201"}),(0,i.jsx)("a",{href:e.url||"https://www.npmjs.com/package/".concat(e.npm),children:e.npm})]})},g=function(e){return(0,i.jsx)("div",{className:"mid-8",dangerouslySetInnerHTML:{__html:e.code}})},f=function(e){return(0,i.jsxs)("div",{className:"mid-10 code-split",children:[(0,i.jsxs)("div",{style:{paddingRight:"5px"},children:[(0,i.jsx)("span",{className:"source",children:"Source"}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:e.source}})]}),(0,i.jsxs)("div",{style:{marginLeft:"5px"},children:[(0,i.jsx)("span",{className:"output",children:"Output"}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:e.output}})]})]})},x=function(e){return(0,i.jsx)("div",{className:"split",children:(0,i.jsx)("img",{src:"./svgs/split-".concat(e.num,".svg"),width:"630",height:"81"})})}},5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5722)}])},9008:function(e,t,s){e.exports=s(7947)},7328:function(e,t){"use strict";t.i=void 0;var s=function(){var e=document.getElementById("twoslash-mouse-hover-info");e&&(e.style.display="none")},i=function(e){return"pre"===e.nodeName.toLowerCase()?e.getBoundingClientRect():i(e.parentElement)},o=function(e){var t=e.target;if("DATA-LSP"!==t.nodeName)return s();var o=t.getAttribute("lsp"),a=function(e){var t=document.body.getBoundingClientRect(),s=e.getBoundingClientRect();return{top:s.top-t.top,left:s.left-t.left}}(t),r=function(){var e=document.getElementById("twoslash-mouse-hover-info");return e||((e=document.createElement("div")).style.position="absolute",e.id="twoslash-mouse-hover-info",document.body.appendChild(e)),e}(),n=document.createElement("textarea");n.innerHTML=o,r.textContent=n.value;r.style.display="block",r.style.top=a.top+20+"px",r.style.left=a.left+"px";var l=i(t),c=a.left-l.x;r.style.maxWidth=l.width-c+"px"};t.i=function(){var e=document.querySelectorAll(".shiki.lsp .code-container code");return e.forEach((function(e){e.addEventListener("mouseover",o),e.addEventListener("mouseout",s)})),function(){e.forEach((function(e){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",s)}))}}}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);