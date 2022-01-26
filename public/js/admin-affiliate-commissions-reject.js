(self.webpackChunk=self.webpackChunk||[]).push([[384],{22456:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});const s={props:["id","small"]}},97171:(t,e,i)=>{"use strict";i.d(e,{s:()=>s,x:()=>n});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({attrs:{icon:""}},s),[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),i("v-list",[i("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.show",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),i("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.approve",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-check")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Approve")))])],1)],1),t._v(" "),i("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.reject",params:{id:t.id}},exact:""}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:t.small}},[t._v("mdi-cancel")])],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)},n=[]},56235:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>$});var s=i(87757),n=i.n(s),r=i(50175),o=i.n(r);function a(t,e,i,s,n,r,o){try{var a=t[r](o),c=a.value}catch(t){return void i(t)}a.done?e(c):Promise.resolve(c).then(s,n)}const c={middleware:["auth","verified","2fa_passed","admin"],components:{AffiliateCommissionMenu:i(62495).Z},props:["id"],metaInfo:function(){return{title:this.$t("Affiliate commission {0}",[this.id])}},data:function(){return{form:new(o())}},methods:{reject:function(){var t,e=this;return(t=n().mark((function t(){var i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/admin/affiliate/commissions/".concat(e.id,"/reject"));case 2:i=t.sent,s=i.data,e.$store.dispatch("message/"+(s.success?"success":"error"),{text:s.message}),e.$router.push({name:"admin.affiliate.commissions.index"});case 6:case"end":return t.stop()}}),t)})),function(){var e=this,i=arguments;return new Promise((function(s,n){var r=t.apply(e,i);function o(t){a(r,s,n,o,c,"next",t)}function c(t){a(r,s,n,o,c,"throw",t)}o(void 0)}))})()}}};var l=i(51900),m=i(43453),v=i.n(m),u=i(4330),f=i(43776),d=i(5255),_=i(17024),p=i(66530),h=i(83240),b=i(6571),w=i(57894),Z=i(22515),x=i(40961),y=i(73845),V=(0,l.Z)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-card",[i("v-toolbar",[i("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),i("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Affiliate commission {0}",[t.id]))+"\n          ")]),t._v(" "),i("v-spacer"),t._v(" "),i("affiliate-commission-menu",{attrs:{id:t.id}})],1),t._v(" "),i("v-card-text",[i("p",[t._v("\n            "+t._s(t.$t("Are you sure you want to reject this commission?"))+"\n          ")]),t._v(" "),i("v-form",{on:{submit:function(e){return e.preventDefault(),t.reject(e)}}},[i("v-btn",{attrs:{type:"submit",color:"error",disabled:t.form.busy,loading:t.form.busy}},[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const $=V.exports;v()(V,{VBtn:u.Z,VCard:f.Z,VCardText:d.ZB,VCol:_.Z,VContainer:p.Z,VForm:h.Z,VIcon:b.Z,VRow:w.Z,VSpacer:Z.Z,VToolbar:x.Z,VToolbarTitle:y.qW})}}]);
//# sourceMappingURL=admin-affiliate-commissions-reject.js.map