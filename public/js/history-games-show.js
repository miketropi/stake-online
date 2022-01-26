(self.webpackChunk=self.webpackChunk||[]).push([[9350],{70306:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var r=t(87757),o=t.n(r),a=t(9669),n=t.n(a);function i(e,s,t,r,o,a,n){try{var i=e[a](n),c=i.value}catch(e){return void t(e)}i.done?s(c):Promise.resolve(c).then(r,o)}const c={props:{id:{type:[Number,String],required:!0}},data:function(){return{gamePackageId:null}},computed:{component:function(){var e=this;return this.gamePackageId?function(){return t(99593)("./".concat(e.gamePackageId,"/resources/js/pages/show"))}:null}},created:function(){var e,s=this;return(e=o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().get("/api/history/games/".concat(s.id,"/package"));case 2:t=e.sent,r=t.data,s.gamePackageId=r.id;case 5:case"end":return e.stop()}}),e)})),function(){var s=this,t=arguments;return new Promise((function(r,o){var a=e.apply(s,t);function n(e){i(a,r,o,n,c,"next",e)}function c(e){i(a,r,o,n,c,"throw",e)}n(void 0)}))})()}}},92344:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});const r={props:["id","small"]}},60401:(e,s,t)=>{"use strict";t.d(s,{s:()=>r,x:()=>o});var r=function(){var e=this,s=e.$createElement;return(e._self._c||s)(e.component,{tag:"component",attrs:{id:e.id}})},o=[]},96007:(e,s,t)=>{"use strict";t.d(s,{s:()=>r,x:()=>o});var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(s){var r=s.on;return[t("v-btn",e._g({attrs:{icon:""}},r),[t("v-icon",{attrs:{small:e.small}},[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),t("v-list",[t("v-list-item",{attrs:{to:{name:"history.games.show",params:{id:e.id}},exact:""}},[t("v-list-item-icon",[t("v-icon",{attrs:{small:e.small}},[e._v("mdi-eye")])],1),e._v(" "),t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(e.$t("View")))])],1)],1),e._v(" "),t("v-list-item",{attrs:{to:{name:"history.games.verify",params:{id:e.id}},exact:""}},[t("v-list-item-icon",[t("v-icon",{attrs:{small:e.small}},[e._v("mdi-check-decagram")])],1),e._v(" "),t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(e.$t("Verify")))])],1)],1)],1)],1)},o=[]},83446:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var r=t(95231);const o={components:{GameMenu:t(82990).Z,GameDetail:r.Z},middleware:["auth","verified","2fa_passed"],props:{id:{type:[Number,String],required:!0}},metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}}};var a=t(51900),n=t(43453),i=t.n(n),c=t(4330),u=t(43776),l=t(5255),v=t(17024),d=t(66530),m=t(6571),p=t(57894),h=t(22515),g=t(40961),f=t(73845),w=(0,a.Z)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",lg:"8"}},[t("v-card",[t("v-toolbar",[t("v-btn",{attrs:{icon:""},on:{click:function(s){return e.$router.go(-1)}}},[t("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),t("v-toolbar-title",[e._v("\n            "+e._s(e.$t("Game {0}",[e.id]))+"\n          ")]),e._v(" "),t("v-spacer"),e._v(" "),t("game-menu",{attrs:{id:e.id}})],1),e._v(" "),t("v-card-text",[t("game-detail",{attrs:{id:e.id}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);const _=w.exports;i()(w,{VBtn:c.Z,VCard:u.Z,VCardText:l.ZB,VCol:v.Z,VContainer:d.Z,VIcon:m.Z,VRow:p.Z,VSpacer:h.Z,VToolbar:g.Z,VToolbarTitle:f.qW})},99593:(e,s,t)=>{var r={"./american-roulette/resources/js/pages/show":[56387,6065,160,2922],"./baccarat/resources/js/pages/show":[16522,6065,160,576],"./blackjack/resources/js/pages/show":[88841,6065,160,7096],"./caribbean-poker/resources/js/pages/show":[21416,6065,160,9072],"./casino-holdem/resources/js/pages/show":[56185,6065,160,4330],"./crash/resources/js/pages/show":[96097,6065,160,7295],"./crypto-prediction/resources/js/pages/show":[6089,6065,160,3031],"./dice-3d/resources/js/pages/show":[12923,6065,160,3621],"./dice/resources/js/pages/show":[6251,6065,160,6856],"./european-roulette/resources/js/pages/show":[30618,6065,160,6e3],"./heads-or-tails/resources/js/pages/show":[62149,6065,160,4196],"./horse-racing/resources/js/pages/show":[19671,6065,160,9236],"./keno/resources/js/pages/show":[76870,6065,160,6982],"./lucky-wheel/resources/js/pages/show":[55029,6065,160,7829],"./multiplayer-blackjack/resources/js/pages/show":[13915,6065,160,7946],"./multiplayer-roulette/resources/js/pages/show":[28991,6065,160,6],"./plinko/resources/js/pages/show":[60288,6065,160,6883],"./sic-bo/resources/js/pages/show":[6483,6065,160,6389],"./slots-3d/resources/js/pages/show":[5689,6065,160,2781],"./slots/resources/js/pages/show":[7282,6065,160,2607],"./video-poker/resources/js/pages/show":[92111,6065,160,3234]};function o(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}));var s=r[e],o=s[0];return Promise.all(s.slice(1).map(t.e)).then((()=>t(o)))}o.keys=()=>Object.keys(r),o.id=99593,e.exports=o}}]);
//# sourceMappingURL=history-games-show.js.map