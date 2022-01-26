(self.webpackChunk=self.webpackChunk||[]).push([[4866],{83016:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={props:["id","small"]}},79767:(t,e,n)=>{"use strict";n.d(e,{s:()=>r,x:()=>o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{to:{name:"admin.chat.rooms.edit",params:{id:t.id}},exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:t.small}},[t._v("mdi-pencil")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("Edit")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{to:{name:"admin.chat.rooms.delete",params:{id:t.id}},exact:""}},[n("v-list-item-icon",[n("v-icon",{attrs:{small:t.small}},[t._v("mdi-delete")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)},o=[]},12981:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>V});var r=n(87757),o=n.n(r),s=n(50175),a=n.n(s);function i(t,e,n,r,o,s,a){try{var i=t[s](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}const c={middleware:["auth","verified","2fa_passed","admin"],components:{ChatRoomMenu:n(90591).Z},props:["id"],metaInfo:function(){return{title:this.$t("Chat room {0}",[this.id])}},data:function(){return{form:new(a())}},methods:{destroy:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.delete("/api/admin/chat/rooms/".concat(e.id));case 2:e.$store.dispatch("message/success",{text:e.$t("Chat room successfully deleted.")}),e.$router.push({name:"admin.chat.rooms.index"});case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function a(t){i(s,r,o,a,c,"next",t)}function c(t){i(s,r,o,a,c,"throw",t)}a(void 0)}))})()}}};var l=n(51900),v=n(43453),m=n.n(v),u=n(4330),d=n(43776),f=n(5255),_=n(17024),h=n(66530),p=n(83240),b=n(6571),y=n(57894),Z=n(22515),w=n(40961),$=n(73845),x=(0,l.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Chat room {0}",[t.id]))+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("chat-room-menu",{attrs:{id:t.id}})],1),t._v(" "),n("v-card-text",[n("p",[t._v("\n            "+t._s(t.$t("Are you sure you want to delete this chat room and all related messages?"))+"\n          ")]),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.destroy(e)}}},[n("v-btn",{attrs:{type:"submit",color:"error",disabled:t.form.busy,loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("Delete"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const V=x.exports;m()(x,{VBtn:u.Z,VCard:d.Z,VCardText:f.ZB,VCol:_.Z,VContainer:h.Z,VForm:p.Z,VIcon:b.Z,VRow:y.Z,VSpacer:Z.Z,VToolbar:w.Z,VToolbarTitle:$.qW})}}]);
//# sourceMappingURL=admin-chat-rooms-delete.js.map