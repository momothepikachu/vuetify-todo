(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"210b":function(e,n,t){},acca:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"projects"},[t("h1",{staticClass:"subheading grey--text"},[e._v("This is an projects page")]),t("v-container",{staticClass:"my-5"},[t("v-expansion-panels",{attrs:{accordion:""}},e._l(e.projects,function(n){return t("v-expansion-panel",{key:n.title},[t("v-expansion-panel-header",[e._v(e._s(n.title))]),t("v-expansion-panel-content",{staticClass:"grey--text"},[t("div",{staticClass:"font-weight-bold"},[e._v("due by "+e._s(n.due))]),t("div",[e._v(e._s(n.content))])])],1)}),1)],1)],1)},a=[],i=t("9138"),o={data:()=>({projects:[]}),computed:{myProjects(){return this.projects.filter(e=>"The Net Ninja"===e.person)}},created(){i["a"].collection("vuetify-todo").onSnapshot(e=>{const n=e.docChanges();n.forEach(e=>{"added"===e.type&&this.projects.push({...e.doc.data(),id:e.doc.id})})})}},l=o,c=t("2877"),r=t("6544"),p=t.n(r),d=t("a523"),h=t("4e82"),u=t("3206"),v=t("80d2"),x=t("58df"),b=Object(x["a"])(Object(h["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(u["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.content&&(this.content.isBooted=!0),this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(v["o"])(this))}}),g=t("0789"),m=t("9d65");const y=Object(x["a"])(m["a"],Object(u["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var j=y.extend().extend({name:"v-expansion-panel-content",computed:{isActive(){return this.expansionPanel.isActive}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(g["a"],[e("div",{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]},this.showLazyContent([e("div",{class:"v-expansion-panel-content__wrap"},Object(v["o"])(this))]))])}}),f=t("9d26"),C=t("5607");const P=Object(x["a"])(Object(u["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var w=P.extend().extend({name:"v-expansion-panel-header",directives:{ripple:C["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$vuetify.icons.expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(v["o"])(this,"actions")||[this.$createElement(f["a"],this.expandIcon)];return this.$createElement(g["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}},[Object(v["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),A=(t("210b"),t("604c")),O=t("d9bd"),_=A["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean},computed:{classes(){return{...A["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(O["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(O["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,n){const t=this.getValue(e,n),s=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}}),$=Object(c["a"])(l,s,a,!1,null,null,null);n["default"]=$.exports;p()($,{VContainer:d["a"],VExpansionPanel:b,VExpansionPanelContent:j,VExpansionPanelHeader:w,VExpansionPanels:_})}}]);
//# sourceMappingURL=projects.8370b0be.js.map