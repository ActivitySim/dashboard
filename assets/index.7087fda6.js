var e=Object.defineProperty,t=(t,s,r)=>(((t,s,r)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r})(t,"symbol"!=typeof s?s+"":s,r),r);import{V as s,a as r,b as o,W as a,C as n,m as i,c as l,d as c,B as u}from"./vendor.3417ea18.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d=localStorage.getItem("locale")?""+localStorage.getItem("locale"):(navigator.language||navigator.userLanguage).startsWith("de")?"de":"en",p={light:{version:8,layers:[],sources:{}},dark:{version:8,layers:[],sources:{}}},m="pk.eyJ1IjoidnNwLXR1LWJlcmxpbiIsImEiOiJjamNpemh1bmEzNmF0MndudHI5aGFmeXpoIn0.u9f04rjFo7ZbWiSceTTXyA";var h,g,f,b;(g=h||(h={}))[g.INFO=0]="INFO",g[g.WARNING=1]="WARNING",g[g.ERROR=2]="ERROR",(b=f||(f={}))[b.NUMBER=0]="NUMBER",b[b.STRING=1]="STRING",b[b.BOOLEAN=2]="BOOLEAN",b[b.DATE=3]="DATE",b[b.LOOKUP=4]="LOOKUP";const v="'Titillium Web', 'Roboto', 'Open Sans', Avenir, Arial, Helvetica, sans-serif";var y,L,S,w,_,E;(L=y||(y={})).LightMode="light",L.DarkMode="dark",(w=S||(S={})).Susceptible="susceptible",w.InfectedButNotContagious="infectedButNotContagious",w.Contagious="contagious",(E=_||(_={}))[E.line=0]="line",E[E.box=1]="box";const k={},C=window.location,O=C.hostname,M=`${C.protocol}//${O}`,R=[{name:O+" live folders",slug:"live",description:'Files served using "simwrapper here"',baseURL:M+":8050/_f_",hidden:!0},{name:"Localhost",slug:"local",description:'Files on this computer, shared with "simwrapper serve"',baseURL:"http://localhost:8000",thumbnail:"/simwrapper/images/thumb-localfiles.jpg"},{name:"Sample Runs",slug:"sample-runs",description:"Pre-built dashboards for exploration",baseURL:"https://svn.vsp.tu-berlin.de/repos/public-svn/shared/sample-data/activitysim-examples"}];for(let Z=8e3;Z<8049;Z++)R.push({name:"Localhost "+Z,slug:`${Z}`,description:"Localhost "+Z,description_de:"Localhost "+Z,baseURL:"http://localhost:"+Z,hidden:!0});for(let Z=8050;Z<8099;Z++)R.push({name:O+Z,slug:`${Z}`,description:O+Z,description_de:O+Z,baseURL:M+`:${Z}/_f_`,hidden:!0});s.use(r);var $=new r.Store({state:{app:"SimWrapper",debug:!1,authAttempts:0,breadcrumbs:[],credentials:{fake:"fake"},isFullScreen:!1,isDarkMode:!1,mapStyles:{light:"mapbox://styles/mapbox/light-v10",dark:"mapbox://styles/vsp-tu-berlin/ckek59op0011219pbwfar1rex"},needLoginForUrl:"",statusErrors:[],statusMessage:"Loading",svnProjects:R,visualizationTypes:new Map,colorScheme:y.LightMode,locale:"en",runFolders:{},runFolderCount:0,resizeEvents:0,viewState:{initial:!0,pitch:0,bearing:0,maxZoom:22,longitude:-96,latitude:38,zoom:7}},mutations:{updateRunFolders(e,t){e.runFolderCount=t.number,e.runFolders=t.folders},requestLogin(e,t){e.needLoginForUrl=t},registerPlugin(e,t){e.visualizationTypes.set(t.kebabName,t)},setBreadCrumbs(e,t){e.breadcrumbs=t},setCredentials(e,t){const s=btoa(`${t.username}:${t.pw}`);e.credentials[t.url]=s,e.authAttempts++},setFullScreen(e,t){e.isFullScreen=t},setMapStyles(e,t){e.mapStyles=t},setMapCamera(e,t){t.jump?e.viewState.initial&&(e.viewState=t):e.viewState=t},error(e,t){e.statusErrors.length&&e.statusErrors[e.statusErrors.length-1]===t||e.statusErrors.push(t)},setStatus(e,t){t.type===h.INFO?e.statusMessage=t.msg:e.statusErrors.length&&e.statusErrors[e.statusErrors.length-1]===t.msg||e.statusErrors.push(t.msg)},clearError(e,t){e.statusErrors.length>=t&&e.statusErrors.splice(t,1)},clearAllErrors(e){e.statusErrors=[]},resize(e){e.resizeEvents+=1},rotateColors(e){e.colorScheme=e.colorScheme===y.DarkMode?y.LightMode:y.DarkMode,e.isDarkMode=e.colorScheme===y.DarkMode,console.log("NEW COLORS:",e.colorScheme),localStorage.setItem("colorscheme",e.colorScheme),document.body.style.backgroundColor=e.colorScheme===y.LightMode?"#edebe4":"#2d3133"},setLocale(e,t){e.locale=t.toLocaleLowerCase(),localStorage.setItem("locale",e.locale)}},actions:{},modules:{},getters:{mapStyle:e=>e.isDarkMode?e.mapStyles.dark:e.mapStyles.light}});const F={},N=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/dashboard/${e}`)in F)return;F[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};s.use(o);const P="/dashboard/",x=new o({mode:"history",base:"/",routes:[{path:P+"gist/:id",component:()=>N((()=>import("./GistView.a692b69c.js")),["assets/GistView.a692b69c.js","assets/GistView.504c7d74.css","assets/vendor.3417ea18.js","assets/DashBoard.1d3fd77e.js","assets/DashBoard.8f2e8040.css"]),props:e=>({id:e.params.id})},{path:P+"*",component:()=>N((()=>import("./ScreenSplitter.e1d7b519.js")),["assets/ScreenSplitter.e1d7b519.js","assets/ScreenSplitter.b52f3d0d.css","assets/vendor.3417ea18.js","assets/DashBoard.1d3fd77e.js","assets/DashBoard.8f2e8040.css"])},{path:"*",redirect:P}],scrollBehavior:(e,t,s)=>s||{x:0,y:0}});var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,U=(e,t,s,r)=>{for(var o,a=r>1?void 0:r?j(t,s):t,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&I(t,s,a),a};let D=class extends s{constructor(){super(...arguments),t(this,"globalState",$.state),t(this,"username",""),t(this,"password",""),t(this,"expandOnHover",!0),t(this,"fullheight",!0),t(this,"fullwidth",!1),t(this,"mobile","reduce"),t(this,"reduce",!1),t(this,"overlay",!0),t(this,"right",!1),t(this,"theme","is-light"),t(this,"projects",this.globalState.svnProjects),t(this,"subfolders",[{name:"hello"}]),t(this,"open",!1)}showLoginPanel(){this.open=""!==this.globalState.needLoginForUrl}panelMayBeClosing(){this.open||$.commit("requestLogin","")}get whichLogin(){try{return this.globalState.svnProjects.filter((e=>e.url===this.globalState.needLoginForUrl))[0].name}catch(e){}return"this site"}clickedLogin(){$.commit("setCredentials",{url:this.globalState.needLoginForUrl,username:this.username,pw:this.password}),this.globalState.needLoginForUrl=""}};U([a("globalState.needLoginForUrl")],D.prototype,"showLoginPanel",1),U([a("open")],D.prototype,"panelMayBeClosing",1),D=U([n({components:{},props:{}})],D);function T(e,t,s,r,o,a,n,i){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):o&&(l=i?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}const A={};var B=T(D,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sidebar-page"},[s("section",{staticClass:"sidebar-layout"},[s("b-sidebar",{attrs:{type:"is-light",fullheight:e.fullheight,fullwidth:e.fullwidth,overlay:e.overlay,right:e.right,open:e.open},on:{"update:open":function(t){e.open=t}}},[s("div",{staticClass:"all-stuff"},[s("div",{staticClass:"block"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"vsp-logo",attrs:{src:"/dashboard/assets/vsp-logo-left.88042ade.png",alt:"TU Berlin VSP Department"}})])]),s("b-menu-list",{attrs:{label:"Login Required"}}),s("p",{staticClass:"my-label"},[e._v(e._s(e.whichLogin)+": access to this site requires a login.")]),s("b-menu-list",{attrs:{label:"Username"}}),s("b-input",{attrs:{placeholder:"VSP username",maxlength:"30"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),s("b-menu-list",{attrs:{label:"Password"}}),s("b-input",{attrs:{type:"password","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("b-button",{staticClass:"my-space is-primary",attrs:{disabled:!e.username||!e.password},on:{click:e.clickedLogin}},[e._v("Login")])],1)])],1)])}),[],!1,W,"900a1920",null,null);function W(e){for(let t in A)this[t]=A[t]}var z=function(){return B.exports}(),V=Object.defineProperty,q=Object.getOwnPropertyDescriptor;i.accessToken=m;let G=class extends s{constructor(){super(...arguments),t(this,"state",$.state)}mounted(){const e=localStorage.getItem("colorscheme")?localStorage.getItem("colorscheme"):(window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)")).matches?y.DarkMode:y.LightMode;e===y.DarkMode&&this.$store.commit("rotateColors"),document.body.style.backgroundColor=e===y.LightMode?"#edebe4":"#2d3133",this.toggleFullScreen(!0),this.setOnlineOrOfflineMode()}setOnlineOrOfflineMode(){fetch("https://raw.githubusercontent.com/simwrapper/simwrapper/master/package.json").then((e=>{console.log("online!!")})).catch((e=>{console.log("offline!"),this.$store.commit("setMapStyles",p)}))}get topNavLinks(){return[{name:"scout",url:""}].concat(this.state.svnProjects)}removeAllErrors(){this.$store.commit("clearAllErrors")}toggleLocale(){const e="en"===this.state.locale?"de":"en";this.$store.commit("setLocale",e),this.$root.$i18n.locale=e}toggleTheme(){this.$store.commit("rotateColors")}get isDarkMode(){return this.state.colorScheme==y.DarkMode}toggleFullScreen(e){e?(document.body.classList.add("full-screen-page"),document.documentElement.style.overflowY="auto"):(document.body.classList.remove("full-screen-page"),document.documentElement.style.overflowY=null)}};G=((e,t,s,r)=>{for(var o,a=r>1?void 0:r?q(t,s):t,n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&V(t,s,a),a})([n({i18n:{messages:{en:{light:"light",dark:"dark",share:"share"},de:{light:"hell",dark:"dark",share:"teilen"}}},components:{LoginPanel:z}})],G);const H={};var X=T(G,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{"full-page-app":!0,"dark-mode":e.isDarkMode},attrs:{id:"main-app"}},[s("div",{staticClass:"center-area"},[s("login-panel",{staticClass:"login-panel"}),s("router-view",{staticClass:"main-content"}),e._m(0)],1),e.state.statusErrors.length?s("div",{staticClass:"message-zone"},[e._l(e.state.statusErrors,(function(t,r){return s("div",{staticClass:"message-error"},[e._m(1,!0),s("p",{domProps:{innerHTML:e._s(t)}})])})),s("button",{staticClass:"button is-small",on:{click:function(t){return e.removeAllErrors()}}},[e._v("CLEAR")])],2):e._e()])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticStyle:{"text-justify":"center",margin:"auto auto","font-size":"2rem"}},[s("i",[e._v("• S i m W r a p p e r •")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("i",{staticClass:"fa fa-icon fa-exclamation-triangle",staticStyle:{color:"orange"}})])}],!1,J,null,null,null);function J(e){for(let t in H)this[t]=H[t]}var K=function(){return X.exports}();$.commit("setLocale",d),s.use(l),s.use(c),s.use(u,{defaultIconPack:"mdi",defaultInputHasCounter:!1}),s.config.productionTip=!1;const Y=new l({locale:d,fallbackLocale:"en"});new s({i18n:Y,router:x,store:$,render:e=>e(K)}).$mount("#app");export{y as C,f as D,_ as L,m as M,k as R,h as S,v as U,$ as g,T as n};
//# sourceMappingURL=index.7087fda6.js.map
