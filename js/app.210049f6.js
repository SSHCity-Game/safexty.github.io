(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},a={app:0},o=[];function i(e){return c.p+"js/"+({about:"about",infos:"infos"}[e]||e)+"."+{about:"7f08db3b",infos:"79f60178"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={infos:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",infos:"infos"}[e]||e)+"."+{about:"31d6cfe0",infos:"00910dc6"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3f98":function(e,t,n){},"47e9":function(e,t,n){e.exports=n.p+"img/screen2.ea9c807e.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("289d"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),c={},l=Object(i["a"])(c,a,o,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("Navigation"),n("Hero"),n("Project"),n("Footer")],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("b-carousel",{attrs:{"pause-hover":!1}},e._l(e.carousels,(function(e,t){return n("b-carousel-item",{key:t},[n("section",{class:"hero is-large is-dark is-bold"},[n("div",{staticClass:"screen-hero hero-body has-text-centered",style:{backgroundImage:"url("+e.img+")"}})])])})),1)],1)},v=[],g={name:"Hero",data:function(){return{carousels:[{img:n("c471")},{img:n("47e9")}]}}},b=g,C=(n("5e34"),Object(i["a"])(b,h,v,!1,null,"3a3ce055",null)),_=C.exports,x=n("f4dd"),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer has-background-white"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("strong",[e._v("SSHCity")]),e._v(" par "),n("a",{attrs:{href:"https://github.com/SAFExTY"}},[e._v("SAFExTY")]),e._v(". Le code source est disponible sur "),n("a",{attrs:{href:"https://github.com/SAFExTY/Website"}},[e._v("Github")]),e._v(". ")])])])}],k={name:"Footer"},w=k,S=Object(i["a"])(w,y,j,!1,null,"80566b6a",null),E=S.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section has-background-light"},[n("div",{staticClass:"container center-content"},[n("h1",{staticClass:"is-size-1 is-centered has-text-centered"},[e._v("L'équipe SAFExTY")]),n("br"),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile is-three-fifths is-centered"},[n("div",{staticClass:"column is-narrow has-text-centered"},[n("figure",{staticClass:"image is-128x128"},[n("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})]),n("a",[e._v("Jean Barbaroux")])]),n("div",{staticClass:"column"},[e._v(" Chef de projet, Jean est un élève dévoué qui prend son rôle de chef de projet très à cœur. De ce fait, et de par son expérience, il est prêt à chéffer de façon exemplaire en étant un élève moteur pour son groupe tout en étant un soutien psychologique. Il est également le plus âgé de son groupe, et sûrement l’un des plus âgés de la promo ! ")])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile is-three-fifths is-centered"},[n("div",{staticClass:"column"},[e._v(" Valentin est sapeur-pompier volontaire depuis 2018 mais aussi un grand amateur du monde numérique. Il est passionné par l’informatique et le sport. Ce projet va lui permettre de mettre en pratique ses acquis et de découvrir de nouvelles technologies. Dévoué, il souhaite lier deux de ses passions. Grâce à son expérience, Valentin agira sur tous les fronts et là où on a besoin de lui. Il est déterminé à mener se projet à bien, même s’il doit sacrifier quelques heures de sommeil ! ")]),n("div",{staticClass:"column is-narrow has-text-centered"},[n("figure",{staticClass:"image is-128x128"},[n("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})]),n("a",[e._v("Valentin Chassignol")])])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile is-three-fifths is-centered"},[n("div",{staticClass:"column is-narrow has-text-centered"},[n("figure",{staticClass:"image is-128x128"},[n("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})]),n("a",[e._v("Annabelle Chevreau")])]),n("div",{staticClass:"column"},[e._v(" Depuis sa découverte de l’informatique et plus précisément de la programmation en classe de première SSI, Annabelle est déterminée à accroître ses connaissances. En classe de Terminale S, elle a choisi l’option ISN qui lui a permis d’apprendre le C et de réaliser des petits projets dont un jeu en 2D, avec un langage appris de façon autodidacte. Déterminée, elle participera du mieux possible à la bonne réussite du projet. ")])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns is-mobile is-centered"},[n("div",{staticClass:"column"},[e._v(" Florian, en plus de l’informatique, aime jouer aux échecs et participer à des événements sportifs. Faisant partie de plusieurs associations, il est motivé par la création d’un logiciel. Ce projet va lui permettre d’acquérir de nouvelles connaissances en informatique et sur le travail de groupe. Enjoué à l’idée d’une collaboration avec les sapeurs-pompiers, il espère pouvoir les aider dans leurs tâches. Le groupe pourra compter sans détour sur son investissement ! Créatif, il sera source d’inspiration afin de mener le projet à son terme ! ")]),n("div",{staticClass:"column is-narrow has-text-centered"},[n("figure",{staticClass:"image is-128x128"},[n("img",{staticClass:"is-rounded",attrs:{src:"https://bulma.io/images/placeholders/128x128.png"}})]),n("a",[e._v("Floriant Drevet")])])])])])])}],q={name:"Project"},A=q,$=(n("e4fe"),Object(i["a"])(A,O,N,!1,null,"18baa6d2",null)),L=$.exports,F={name:"Home",components:{Project:L,Footer:E,Navigation:x["a"],Hero:_}},P=F,T=Object(i["a"])(P,f,m,!1,null,null,null),U=T.exports;r["a"].use(p["a"]);var D=[{path:"/",name:"Home",component:U},{path:"/project",name:"Project",component:function(){return n.e("infos").then(n.bind(null,"6dd7"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new p["a"]({mode:"history",base:"/",routes:D}),B=I,H=n("a7fe"),M=n.n(H),G=n("bc3a"),J=n.n(G),V=Object({NODE_ENV:"production",BASE_URL:"/"}).API_URL||"https://localhost:5001/",Y=J.a.create({baseURL:V,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.token)}});r["a"].use(M.a,Y);var R,z={},K=n("2f62"),W=n("ade3"),Q=n("d4ec"),X=n("bee2"),Z=n("04e1"),ee=n.n(Z),te=function(){function e(t){var n=t.id,r=t.firstName,s=t.lastName,a=t.username,o=t.email,i=t.token;Object(Q["a"])(this,e),this.id=n,this.firstName=r,this.lastName=s,this.username=a,this.email=o,this.token=i}return Object(X["a"])(e,null,[{key:"from",value:function(t){try{var n=ee()(t);return new e(n)}catch(r){return null}}}]),e}(),ne="LOGIN",re="LOGOUT",se={user:te.from(localStorage.token)},ae=(R={},Object(W["a"])(R,ne,(function(e){e.user=te.from(localStorage.token)})),Object(W["a"])(R,re,(function(e){e.user=null})),R),oe={currentUser:function(e){return e.user}},ie={login:function(e){var t=e.commit;t(ne)},logout:function(e){var t=e.commit;t(re)}},ce={state:se,mutations:ae,getters:oe,actions:ie};r["a"].use(K["a"]);var le=new K["a"].Store({modules:{auth:ce}});r["a"].config.productionTip=!1,r["a"].use(s["a"],{defaultIconPack:"fas",defaultContainerElement:"#content"}),new r["a"]({router:B,axios:z,store:le,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),s=n.n(r);s.a},"5e34":function(e,t,n){"use strict";var r=n("a207"),s=n.n(r);s.a},"9c0c":function(e,t,n){},a207:function(e,t,n){},c471:function(e,t,n){e.exports=n.p+"img/screen.556eb2bf.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.9c776c81.png"},e4fe:function(e,t,n){"use strict";var r=n("3f98"),s=n.n(r);s.a},f4dd:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("b-navbar",{attrs:{"fixed-top":!0,spaced:!0,type:"is-black"}},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{to:{path:"/"},tag:"router-link"}},[r("img",{attrs:{src:n("cf05"),alt:"Ca c'est du jeu"}})])],1),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{to:{path:"/project"},tag:"router-link"}},[e._v(" Le projet ")])],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[e.currentUser?e._e():r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-primary"},[r("strong",[e._v("Sign up")])]),r("b-button",{staticClass:"is-light",on:{click:e.login}},[e._v("Se connecter")])],1),e.currentUser?r("div",{staticClass:"buttons"},[r("b-button",{staticClass:"is-primary",on:{click:e.logout}},[e._v("Se déconnecter")])],1):e._e()])],1)],2)],1)},s=[],a=n("5530"),o=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"container"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[e._m(0),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Email ou Nom d'utilisateur"}},[n("b-input",{attrs:{placeholder:"Ex: contact@safexty.com",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("b-field",{attrs:{label:"Mot de passe"}},[n("b-input",{attrs:{type:"password",placeholder:"Mot de passe","password-reveal":"",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("b-field",[n("b-button",{attrs:{type:"is-primary"},on:{click:e.login}},[e._v("Se connecter")])],1),e.error?n("div",{staticClass:"alert is-danger"},[e._v(e._s(e.error))]):e._e()],1)])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("Connexion")])])}],l={name:"Login",data:function(){return{error:!1,email:"",password:""}},methods:{login:function(){var e=this;this.$http.post("/users/authenticate",{username:this.email,password:this.password}).then((function(t){return e.loginSuccessful(t)})).catch((function(){return e.loginFailed()}))},loginSuccessful:function(e){e.data.token?(localStorage.token=e.data.token,this.error=!1,this.$router.go(0)):this.loginFailed()},loginFailed:function(){this.error="Nom d'utilisateur ou mot de passe incorrect.",delete localStorage.token}}},u=l,d=n("2877"),p=Object(d["a"])(u,i,c,!1,null,"c45ae122",null),f=p.exports,m={name:"Navigation",computed:Object(a["a"])({},Object(o["b"])({currentUser:"currentUser"})),created:function(){this.checkCurrentLogin()},updated:function(){this.checkCurrentLogin()},methods:{checkCurrentLogin:function(){this.currentUser||"/"!==this.$route.path||this.$router.push("/?redirect=".concat(this.$route.path))},login:function(){this.$buefy.modal.open({parent:this,component:f,hasModalCard:!0,trapFocus:!0})},logout:function(){delete localStorage.token,this.$store.dispatch("logout"),this.$router.go(0)}}},h=m,v=Object(d["a"])(h,r,s,!1,null,"3ed1342a",null);t["a"]=v.exports}});
//# sourceMappingURL=app.210049f6.js.map