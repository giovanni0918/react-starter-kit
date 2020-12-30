(()=>{"use strict";var r={442:(r,n,e)=>{var t=e(135),i=e.n(t),o=e(294),a=e(935),A=e(575),s=e.n(A),l=e(913),c=e.n(l),p=e(506),d=e.n(p),u=e(205),m=e.n(u),h=e(585),f=e.n(h),C=e(754),g=e.n(C),w=e(727),B=e(977),v=e(697),b=e.n(v),I=e(154),y=e.n(I),x=function(r){var n=r.id,e=r.name,t=r.description,o=r.html_url;return i()("li",{className:"repo",id:n,title:e},void 0,i()("h3",{className:"repo__name"},void 0,e),i()("p",{className:"repo__description"},void 0,"Description: ",t||"Not Available for this Repo"),i()("p",{className:"repo__html_url"},void 0,"Url:",i()("a",{href:o,rel:"noopener",target:"_blank"},void 0,o)))};x.propTypes={id:b().number.isRequired,name:b().string.isRequired,description:b().string,html_url:b().string.isRequired};const _=x;var k=function(r){var n=r.repos;return i()("ul",{className:"RepoList"},void 0,n.sort((function(r,n){return n.id-r.id})).map((function(r,n){return o.createElement(_,y()({key:n},r))})))};k.propTypes={repos:b().array.isRequired};const E=k;var D=i()("p",{},void 0,"Loading"),S=i()("p",{},void 0,"Network request failed..."),T=function(r){m()(o,r);var n,e,t=(n=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=g()(n);if(e){var i=g()(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return f()(this,r)});function o(r){var n;return s()(this,o),(n=t.call(this,r)).state={repos:[],loading:!0,requestFailed:!1},n}return c()(o,[{key:"componentDidMount",value:function(){var r,n=this;fetch((r=this.props.username,"https://api.github.com/users/".concat(r,"/repos"))).then((function(r){if(!r.ok)throw n.setState({requestFailed:!0,loading:!1}),Error("Network request failed...");r.json().then((function(r){n.setState({repos:r,loading:!1})}))})).catch((function(r){n.setState({requestFailed:!0,loading:!1}),console.warn(r.message)}))}},{key:"render",value:function(){return this.state.loading?D:this.state.requestFailed?S:i()(E,{repos:this.state.repos})}}]),o}(o.Component);T.propTypes={username:b().string.isRequired};var R=i()("div",{id:"View1",className:"wrapper"},void 0,i()("h2",{className:"ViewTitle"},void 0,"View 1"),i()(T,{username:"giovanni0918"})),U=i()("div",{id:"View2",className:"wrapper"},void 0,i()("h2",{className:"ViewTitle"},void 0,"View 2"),i()(T,{username:"juan1003"})),N=i()("div",{id:"View3",className:"wrapper"},void 0,i()("h2",{className:"ViewTitle"},void 0,"View 3"),i()(T,{username:"marcmaceira"}));const V=[{emoji:"🏠",title:"View 1",href:"/react-starter-kit/"},{emoji:"✌️",title:"View 2",href:"/react-starter-kit/view2"},{emoji:"🍃",title:"View 3",href:"/react-starter-kit/view3"}];var q=function(r){var n=r.callback,e=r.open;return i()("aside",{className:e?"nav-drawer open":"nav-drawer"},void 0,i()("nav",{},void 0,i()("ul",{className:"Drawer__List"},void 0,V.map((function(r,e){return i()("li",{className:"Drawer__ListItem"},e,i()(w.rU,{to:r.href,onClick:n},void 0,i()("span",{className:"ListItem__emoji"},void 0,r.emoji),i()("span",{className:"ListItem__title"},void 0,r.title)))})))))};q.propTypes={callback:b().func.isRequired,emoji:b().string.isRequired,href:b().string.isRequired,open:b().bool.isRequired,title:b().string.isRequired};const L=q;var j=i()("span",{className:"icon-bar"}),z=i()("span",{className:"icon-bar"}),O=i()("span",{className:"icon-bar"}),Z=function(r){var n=r.onButtonClick,e=r.title;return i()("header",{className:"App__Toolbar "},void 0,i()("button",{className:"toggle-btn",onClick:n},void 0,j,z,O),i()("span",{className:"brand-name"},void 0,e))};Z.propTypes={onButtonClick:b().func.isRequired,title:b().string.isRequired};const F=Z;e(960);var W=i()(B.AW,{exact:!0,path:"/react-starter-kit/",component:function(){return R}}),Y=i()(B.AW,{path:"/react-starter-kit/view2",component:function(){return U}}),Q=i()(B.AW,{path:"/react-starter-kit/view3",component:function(){return N}}),P=function(r){m()(o,r);var n,e,t=(n=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,t=g()(n);if(e){var i=g()(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return f()(this,r)});function o(r){var n;return s()(this,o),(n=t.call(this,r)).state={isDrawerOpen:!1},n.handleClick=n.handleClick.bind(d()(n)),n.toggleDrawer=n.toggleDrawer.bind(d()(n)),n}return c()(o,[{key:"toggleDrawer",value:function(r){this.setState({isDrawerOpen:!this.state.isDrawerOpen})}},{key:"handleClick",value:function(r){this.state.isDrawerOpen&&this.toggleDrawer()}},{key:"render",value:function(){var r=this.props.children,n=this.state.isDrawerOpen;return i()("div",{},void 0,i()(F,{title:"React Starter Kit",onButtonClick:this.toggleDrawer}),i()(w.VK,{},void 0,i()("div",{className:"container"},void 0,i()(L,{open:n,callback:this.toggleDrawer}),i()("main",{className:n?"content toggled flex-center":"content flex-center",onClick:this.handleClick},void 0,r,W,Y,Q))))}}]),o}(o.Component);(0,a.render)(i()(P,{}),document.getElementById("app"))},132:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(15),i=e.n(t),o=e(645),a=e.n(o),A=e(505),s=e(765),l=a()(i());l.i(A.Z),l.i(s.Z),l.push([r.id,".nav-drawer {\r\n    position: absolute;\r\n    top: 56px;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 0;\r\n    height: auto;\r\n    min-height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 1;\r\n    background-color: white;\r\n    overflow-y: auto;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    will-change: width, opacity;\r\n    transition: width 0.2s ease-in, opacity 0.2s ease-in;\r\n    box-shadow: 0 1px 3px #757575;\r\n}\r\n\r\n.open {\r\n    width: 60%;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .open {\r\n        width: 20%;\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n    }\r\n}\r\n","",{version:3,sources:["webpack://./static/styles/Drawer.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,OAAO;IACP,cAAc;IACd,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,UAAU;IACV,uBAAuB;IACvB,gBAAgB;IAChB,UAAU;IACV,oBAAoB;IACpB,2BAA2B;IAC3B,oDAAoD;IACpD,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI;QACI,UAAU;QACV,UAAU;QACV,oBAAoB;IACxB;AACJ",sourcesContent:['.nav-drawer {\r\n    position: absolute;\r\n    top: 56px;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 0;\r\n    height: auto;\r\n    min-height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 1;\r\n    background-color: white;\r\n    overflow-y: auto;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    will-change: width, opacity;\r\n    transition: width 0.2s ease-in, opacity 0.2s ease-in;\r\n    box-shadow: 0 1px 3px #757575;\r\n}\r\n\r\n.open {\r\n    width: 60%;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .open {\r\n        width: 20%;\r\n        opacity: 1;\r\n        pointer-events: auto;\r\n    }\r\n}\r\n@import "Drawer__List.css";\r\n@import "Drawer__ListItem.css";\r\n'],sourceRoot:""}]);const c=l},505:(r,n,e)=>{e.d(n,{Z:()=>A});var t=e(15),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([r.id,".Drawer__List {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    word-wrap: normal;\r\n}\r\n\r\n.Drawer__List .collapsed>li {\r\n    display: none;\r\n}\r\n","",{version:3,sources:["webpack://./static/styles/Drawer__List.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB",sourcesContent:[".Drawer__List {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    word-wrap: normal;\r\n}\r\n\r\n.Drawer__List .collapsed>li {\r\n    display: none;\r\n}\r\n"],sourceRoot:""}]);const A=a},765:(r,n,e)=>{e.d(n,{Z:()=>A});var t=e(15),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([r.id,".Drawer__ListItem a:hover, .Drawer__ListItem p:hover {\r\n    background: #BBDEFB;\r\n}\r\n\r\n.Drawer__ListItem a {\r\n    display: block;\r\n    height: 3em;\r\n    line-height: 3em;\r\n    color: #2979ff;\r\n    font-size: 1em;\r\n    text-decoration: none;\r\n}\r\n\r\n.ListItem__emoji {\r\n    position: absolute;\r\n    left: 1em;\r\n    font-family: monospace;\r\n}\r\n\r\n.ListItem__title {\r\n    position: absolute;\r\n    left: 3em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n","",{version:3,sources:["webpack://./static/styles/Drawer__ListItem.css"],names:[],mappings:"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,yCAAyC;AAC7C",sourcesContent:[".Drawer__ListItem a:hover, .Drawer__ListItem p:hover {\r\n    background: #BBDEFB;\r\n}\r\n\r\n.Drawer__ListItem a {\r\n    display: block;\r\n    height: 3em;\r\n    line-height: 3em;\r\n    color: #2979ff;\r\n    font-size: 1em;\r\n    text-decoration: none;\r\n}\r\n\r\n.ListItem__emoji {\r\n    position: absolute;\r\n    left: 1em;\r\n    font-family: monospace;\r\n}\r\n\r\n.ListItem__title {\r\n    position: absolute;\r\n    left: 3em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n"],sourceRoot:""}]);const A=a},798:(r,n,e)=>{e.d(n,{Z:()=>p});var t=e(15),i=e.n(t),o=e(645),a=e.n(o),A=e(132),s=e(524),l=e(21),c=a()(i());c.i(A.Z),c.i(s.Z),c.i(l.Z),c.push([r.id,"\r\n","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const p=c},524:(r,n,e)=>{e.d(n,{Z:()=>A});var t=e(15),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([r.id,".container {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #F5F5F5;\r\n  z-index: 0;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.content {\r\n  position: fixed;\r\n  top: 56px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow-y: auto;\r\n  background-color: #eeeeee;\r\n  z-index: 0;\r\n  font-size: 1rem;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: dodgerblue;\r\n}\r\n\r\n.content li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n.content li p{\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n}\r\n\r\n.content p {\r\n  margin: 0.5rem;\r\n  color: black;\r\n}\r\n\r\n.flex-center {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 768px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.ViewTitle {\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n}\r\n","",{version:3,sources:["webpack://./static/styles/content.css"],names:[],mappings:"AAAA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;EACR,SAAS;EACT,OAAO;EACP,gBAAgB;EAChB,yBAAyB;EACzB,UAAU;EACV,eAAe;EACf,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB",sourcesContent:[".container {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #F5F5F5;\r\n  z-index: 0;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.content {\r\n  position: fixed;\r\n  top: 56px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  overflow-y: auto;\r\n  background-color: #eeeeee;\r\n  z-index: 0;\r\n  font-size: 1rem;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: dodgerblue;\r\n}\r\n\r\n.content li {\r\n  word-wrap: break-word;\r\n}\r\n\r\n.content li p{\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n}\r\n\r\n.content p {\r\n  margin: 0.5rem;\r\n  color: black;\r\n}\r\n\r\n.flex-center {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 768px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.ViewTitle {\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n}\r\n"],sourceRoot:""}]);const A=a},21:(r,n,e)=>{e.d(n,{Z:()=>A});var t=e(15),i=e.n(t),o=e(645),a=e.n(o)()(i());a.push([r.id,".App__Toolbar {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 56px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n    background: #2196F3;\r\n}\r\n\r\n.App__Toolbar .toggle-btn {\r\n    float: left;\r\n    margin: 16px;\r\n    padding: 0;\r\n    border: 0;\r\n    outline-color: yellow;\r\n    background-color: transparent;\r\n}\r\n\r\n.App__Toolbar .toggle-btn .icon-bar {\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    border-radius: 1px;\r\n    margin-top: 4px;\r\n    background: white;\r\n}\r\n\r\n.App__Toolbar .brand-name {\r\n    color: white;\r\n    font-size: 1.3em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 56px;\r\n}\r\n","",{version:3,sources:["webpack://./static/styles/toolbar.css"],names:[],mappings:"AAAA;IACI,eAAe;IACf,MAAM;IACN,QAAQ;IACR,OAAO;IACP,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;IACV,SAAS;IACT,wCAAwC;IACxC,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,SAAS;IACT,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,yCAAyC;IACzC,iBAAiB;AACrB",sourcesContent:[".App__Toolbar {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 56px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n    background: #2196F3;\r\n}\r\n\r\n.App__Toolbar .toggle-btn {\r\n    float: left;\r\n    margin: 16px;\r\n    padding: 0;\r\n    border: 0;\r\n    outline-color: yellow;\r\n    background-color: transparent;\r\n}\r\n\r\n.App__Toolbar .toggle-btn .icon-bar {\r\n    display: block;\r\n    width: 22px;\r\n    height: 2px;\r\n    border-radius: 1px;\r\n    margin-top: 4px;\r\n    background: white;\r\n}\r\n\r\n.App__Toolbar .brand-name {\r\n    color: white;\r\n    font-size: 1.3em;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 56px;\r\n}\r\n"],sourceRoot:""}]);const A=a},960:(r,n,e)=>{e.r(n),e.d(n,{default:()=>a});var t=e(379),i=e.n(t),o=e(798);i()(o.Z,{insert:"head",singleton:!1});const a=o.Z.locals||{}}},n={};function e(t){if(n[t])return n[t].exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.m=r,e.x=r=>{},e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},(()=>{var r={384:0},n=[[442,196]],t=r=>{},i=(i,o)=>{for(var a,A,[s,l,c,p]=o,d=0,u=[];d<s.length;d++)A=s[d],e.o(r,A)&&r[A]&&u.push(r[A][0]),r[A]=0;for(a in l)e.o(l,a)&&(e.m[a]=l[a]);for(c&&c(e),i&&i(o);u.length;)u.shift()();return p&&n.push.apply(n,p),t()},o=self.webpackChunkreact_starter_kit=self.webpackChunkreact_starter_kit||[];function a(){for(var t,i=0;i<n.length;i++){for(var o=n[i],a=!0,A=1;A<o.length;A++){var s=o[A];0!==r[s]&&(a=!1)}a&&(n.splice(i--,1),t=e(e.s=o[0]))}return 0===n.length&&(e.x(),e.x=r=>{}),t}o.forEach(i.bind(null,0)),o.push=i.bind(null,o.push.bind(o));var A=e.x;e.x=()=>(e.x=A||(r=>{}),(t=a)())})(),e.x()})();
//# sourceMappingURL=index.bundle.js.map