(function(t){function e(e){for(var s,n,c=e[0],i=e[1],l=e[2],d=0,u=[];d<c.length;d++)n=c[d],r[n]&&u.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);f&&f(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function c(t){return i.p+"js/"+({projects:"projects"}[t]||t)+"."+{"chunk-1957da80":"7ec94ce2",projects:"8370b0be"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={projects:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var s="css/"+({projects:"projects"}[t]||t)+"."+{"chunk-1957da80":"31d6cfe0",projects:"20bb63b9"}[t]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===r))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===s||d===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){n[t]=0}));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(t),l=function(e){d.onerror=d.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,a[1](o)}r[t]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vuetify-todo/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b56":function(t,e,a){"use strict";var s=a("f6b3"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",{staticClass:"mx-4 mb-4"},[a("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("v-snackbar",{attrs:{color:"success",timeout:6e3,top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    You have successfully added a new project.\n    "),s("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1),s("v-toolbar",{attrs:{flat:""}},[s("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),s("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[s("span",{staticClass:"font-weight-light"},[t._v("Todo")]),s("span",[t._v("Momo")])]),s("v-spacer"),s("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",n,!1),a),[t._v("\n          Menu\n        ")])]}}])},[s("v-list",t._l(t.items,function(e){return s("v-list-item",{key:e.title,attrs:{router:"",link:"",to:e.route}},[s("v-list-item-title",[t._v(t._s(e.title))])],1)}),1)],1),s("v-btn",{attrs:{text:"",color:"grey"}},[s("span",[t._v("Sign Out")]),s("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1)],1),s("v-navigation-drawer",{attrs:{temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v("\n          Application\n        ")]),s("v-list-item-subtitle",[t._v("\n          menu\n        ")])],1)],1),s("v-divider"),s("v-layout",{attrs:{column:"",align:"center"}},[s("v-flex",{staticClass:"text-center mt-5"},[s("v-avatar",{attrs:{size:"100"}},[s("img",{attrs:{src:a("ed51"),alt:"avatar"}})]),s("p",{staticClass:"grey--text subheading mt-1"},[t._v("\n          This is an avatar\n        ")])],1),s("v-flex",[s("Popup",{on:{projectAdded:function(e){t.snackbar=!0}}})],1)],1),s("v-list",{attrs:{flat:"",nav:""}},t._l(t.items,function(e){return s("v-list-item",{key:e.title,attrs:{link:"",router:"",to:e.route}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}),1)],1)],1)},c=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{color:"red lighten-2",dark:""},on:{click:t.resetForm}},s),[t._v("Open dialog")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Add a New Project")]),a("v-card-text",{staticClass:"pb-0"},[a("v-form",{ref:"form"},[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"folder",required:"",hint:"Please enter a title here",rules:t.titleRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"person",required:"",hint:"Please enter a name here",rules:t.titleRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Information","prepend-icon":"edit"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),a("v-col",{staticClass:"pb-0 ml-auto",attrs:{col:"12",sm:"4"}},[a("v-select",{staticClass:"my-2 pt-0",attrs:{items:t.statusDropdown,label:"Status",rules:t.dropdownRules},on:{change:t.changeStatus}})],1),a("v-col",{staticClass:"pb-0 py-0",attrs:{cols:"12"}},[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{value:t.computedDateFormattedMomentjs,label:"Pick a date","prepend-icon":"event",readonly:"",clearable:""}},s))]}}])},[a("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mr-6 mb-5 mt-0 success",attrs:{text:"",loading:t.loading},on:{click:t.submit}},[t._v("Add project")])],1)],1)],1)],1)},l=[],d=a("c1df"),u=a.n(d),f=a("9138"),p={data:()=>({dialog:!1,date:(new Date).toISOString().substr(0,10),title:"",content:"",name:"",status:"",statusDropdown:[{text:"ongoing"},{text:"done"},{text:"overdue"}],titleRules:[t=>t.length>=3||"Mininum length is 3 characters"],dropdownRules:[t=>t||"Select status"],loading:!1}),methods:{resetForm(){this.$refs.form&&this.$refs.form.reset()},changeStatus(t){this.status=t},submit(){if(this.$refs.form.validate()){this.loading=!0;const t={title:this.title,content:this.content,due:u()(this.date).format("Do MMM YYYY"),person:"momo",status:"ongoing"};f["a"].collection("vuetify-todo").add(t).then(()=>{this.loading=!1,this.dialog=!1,this.$emit("projectAdded")})}}},computed:{computedDateFormattedMomentjs(){return this.date?u()(this.date).format("Do MMM YYYY"):""}}},v=p,b=a("2877"),m=a("6544"),j=a.n(m),h=a("8336"),g=a("b0af"),y=a("99d9"),k=a("62ad"),_=a("a523"),x=a("2e4b"),w=a("169a"),C=a("4bd4"),V=a("e449"),S=a("0fd9"),z=a("b974"),T=a("2fa4"),O=a("8654"),D=a("a844"),P=Object(b["a"])(v,i,l,!1,null,null,null),A=P.exports;j()(P,{VBtn:h["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:k["a"],VContainer:_["a"],VDatePicker:x["a"],VDialog:w["a"],VForm:C["a"],VMenu:V["a"],VRow:S["a"],VSelect:z["a"],VSpacer:T["a"],VTextField:O["a"],VTextarea:D["a"]});var M={components:{Popup:A},data:()=>({drawer:!1,snackbar:!1,items:[{title:"Dashboard",icon:"dashboard",route:"/"},{title:"Projects",icon:"folder",route:"/projects"},{title:"Team",icon:"person",route:"/team"}]})},E=M,I=a("5bc1"),B=a("8212"),N=a("ce7e"),L=a("0e8f"),q=a("132d"),F=a("a722"),Y=a("8860"),$=a("da13"),R=a("5d23"),U=a("34c3"),K=a("f774"),G=a("2db4"),H=a("71d9"),J=a("2a7f"),W=Object(b["a"])(E,o,c,!1,null,null,null),Z=W.exports;j()(W,{VAppBarNavIcon:I["a"],VAvatar:B["a"],VBtn:h["a"],VDivider:N["a"],VFlex:L["a"],VIcon:q["a"],VLayout:F["a"],VList:Y["a"],VListItem:$["a"],VListItemContent:R["a"],VListItemIcon:U["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"],VMenu:V["a"],VNavigationDrawer:K["a"],VSnackbar:G["a"],VSpacer:T["a"],VToolbar:H["a"],VToolbarTitle:J["a"]});var Q={name:"App",components:{Navbar:Z},data:()=>({})},X=Q,tt=a("7496"),et=a("a75b"),at=Object(b["a"])(X,n,r,!1,null,null,null),st=at.exports;j()(at,{VApp:tt["a"],VContent:et["a"]});var nt=a("8c4f"),rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h1",{staticClass:"subheading grey--text"},[t._v("Dashboard")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3",attrs:{row:""}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},s),[a("v-icon",{attrs:{left:"",small:""}},[t._v("folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By project name")])],1)]}}])},[a("span",[t._v("Sort projects by project name")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("person")}}},s),[a("v-icon",{attrs:{left:"",small:""}},[t._v("person")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By person")])],1)]}}])},[a("span",[t._v("Sort projects by name")])])],1),t._l(t.projects,function(e){return a("v-card",{key:e.title,attrs:{flat:""}},[a("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Project title")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Person")]),a("div",[t._v(t._s(e.person))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Due by")]),a("div",[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"right"},[a("v-chip",{class:e.status+" white--text caption my-2 ",attrs:{small:""}},[t._v(t._s(e.status))])],1)])],1),a("v-divider")],1)})],2)],1)},ot=[],ct={data(){return{projects:[]}},methods:{sortBy(t){this.projects.sort((e,a)=>{return e[t]<a[t]?-1:1})}},created(){f["a"].collection("vuetify-todo").onSnapshot(t=>{const e=t.docChanges();e.forEach(t=>{"added"===t.type&&this.projects.push({...t.doc.data(),id:t.doc.id})})})}},it=ct,lt=(a("2b56"),a("cc20")),dt=a("3a2f"),ut=Object(b["a"])(it,rt,ot,!1,null,null,null),ft=ut.exports;j()(ut,{VBtn:h["a"],VCard:g["a"],VChip:lt["a"],VContainer:_["a"],VDivider:N["a"],VFlex:L["a"],VIcon:q["a"],VLayout:F["a"],VTooltip:dt["a"]}),s["a"].use(nt["a"]);var pt=new nt["a"]({mode:"history",base:"/vuetify-todo/",routes:[{path:"/",name:"dashboard",component:ft},{path:"/projects",name:"projects",component:()=>a.e("projects").then(a.bind(null,"acca"))},{path:"/team",name:"team",component:()=>a.e("chunk-1957da80").then(a.bind(null,"0767"))}]}),vt=a("f309");s["a"].use(vt["a"]);var bt=new vt["a"]({icons:{iconfont:"mdi"}});a("d1e7");s["a"].config.productionTip=!1,new s["a"]({router:pt,vuetify:bt,render:t=>t(st)}).$mount("#app")},9138:function(t,e,a){"use strict";var s=a("59ca"),n=a.n(s);a("e71f");const r={apiKey:"AIzaSyCTg3itpnNWBimzE9aU27qBqKfrOZoNHCU",authDomain:"equation-ae448.firebaseapp.com",databaseURL:"https://equation-ae448.firebaseio.com",projectId:"equation-ae448",storageBucket:"equation-ae448.appspot.com",messagingSenderId:"668395629814",appId:"1:668395629814:web:0ef3d276e76b9426"};n.a.initializeApp(r);const o=n.a.firestore();e["a"]=o},ed51:function(t,e,a){t.exports=a.p+"img/avatar-1.e418f0ba.png"},f6b3:function(t,e,a){}});
//# sourceMappingURL=app.ebcaecc9.js.map