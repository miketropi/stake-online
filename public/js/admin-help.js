(self.webpackChunk=self.webpackChunk||[]).push([[3651],{3338:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>k});var r=n(87757),a=n.n(r),i=n(9669),s=n.n(i),c=n(53290);function o(t,e,n,r,a,i,s){try{var c=t[i](s),o=c.value}catch(t){return void n(t)}c.done?e(o):Promise.resolve(o).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){o(i,r,a,s,c,"next",t)}function c(t){o(i,r,a,s,c,"throw",t)}s(void 0)}))}}const l={metaInfo:function(){return{title:this.$t("Help")}},props:{file:{type:String,required:!1,default:""}},data:function(){return{files:[],content:null}},watch:{file:function(t){this.fetchData(t)}},created:function(){var t=this;return u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$route.params.file?t.fetchData(t.$route.params.file):t.$router.replace({name:"admin.help.index",params:{file:"app"}});case 1:case"end":return e.stop()}}),e)})))()},methods:{fetchData:function(t){var e=this;return u(a().mark((function n(){var r,i,o,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/api/admin/help/".concat(t));case 2:r=n.sent,i=r.data,o=i.files,u=i.content,e.files=o,e.content=u,e.$nextTick((function(){e.$route.hash&&(0,c.Z)(e.$route.hash)}));case 9:case"end":return n.stop()}}),n)})))()}}};var f=n(51900),d=n(43453),p=n.n(d),v=n(43776),h=n(5255),m=n(66530),x=n(2440),w=n(18379),C=n(8212),_=(0,f.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",[t._v("\n      "+t._s(t.$t("Help"))+"\n    ")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex"},[n("v-list",{staticClass:"mr-5",attrs:{dense:"",rounded:"",width:"15%","min-width":"200"}},t._l(t.files,(function(e){return n("v-list-item",{key:e,attrs:{to:{name:"admin.help.index",params:{file:e}}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-uppercase"},[t._v("\n                "+t._s(e)+"\n              ")])],1)],1)})),1),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}})],1)])],1)],1)}),[],!1,null,null,null);const k=_.exports;p()(_,{VCard:v.Z,VCardText:h.ZB,VCardTitle:h.EB,VContainer:m.Z,VList:x.Z,VListItem:w.Z,VListItemContent:C.km,VListItemTitle:C.V9})}}]);
//# sourceMappingURL=admin-help.js.map