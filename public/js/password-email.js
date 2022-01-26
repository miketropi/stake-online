(self.webpackChunk=self.webpackChunk||[]).push([[6708],{28043:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var a=r(87757),s=r.n(a),o=r(15566),n=r(50175),c=r.n(n),i=r(18623);function l(e,t,r,a,s,o,n){try{var c=e[o](n),i=c.value}catch(e){return void r(e)}c.done?t(i):Promise.resolve(i).then(a,s)}const u={middleware:"guest",components:{VueRecaptcha:r(97991).Z},mixins:[i.Z],metaInfo:function(){return{title:this.$t("Password reset")}},data:function(){return{form:new(c())({email:null,recaptcha:null})}},computed:{appLogoUrl:function(){return(0,o.v)("app.logo")},recaptchaPublicKey:function(){return(0,o.v)("services.recaptcha.public_key")}},methods:{reset:function(){var e,t=this;return(e=s().mark((function e(){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.post("/api/auth/password/email").catch((function(){return t.recaptchaPublicKey&&(t.form.recaptcha=null,t.$refs.recaptcha.reset()),{}}));case 2:r=e.sent,(a=r.data)&&(t.$store.dispatch("message/success",{text:a.message}),t.form.reset(),t.$refs.recaptcha.reset(),t.$refs.form.reset());case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,s){var o=e.apply(t,r);function n(e){l(o,a,s,n,c,"next",e)}function c(e){l(o,a,s,n,c,"throw",e)}n(void 0)}))})()}}};var m=r(51900),f=r(43453),p=r.n(f),v=r(97844),d=r(4330),h=r(43776),b=r(5255),y=r(17024),V=r(66530),g=r(83240),Z=r(17100),w=r(57894),k=r(22515),_=r(54933),x=r(40961),$=r(73845),C=(0,m.Z)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary"}},[r("router-link",{attrs:{to:{name:"home"}}},[r("v-avatar",{attrs:{size:"40",tile:""}},[r("v-img",{attrs:{src:e.appLogoUrl}})],1)],1),e._v(" "),r("v-toolbar-title",{staticClass:"ml-2"},[e._v("\n            "+e._s(e.$t("Password reset"))+"\n          ")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.reset(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",name:"email",rules:[e.validationRequired,e.validationEmail],error:e.form.errors.has("email"),"error-messages":e.form.errors.get("email"),outlined:""},on:{keydown:e.clearFormErrors},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),e.recaptchaPublicKey?r("vue-recaptcha",{ref:"recaptcha",staticClass:"mb-3",attrs:{sitekey:e.recaptchaPublicKey,loadRecaptchaScript:!0,theme:this.$vuetify.theme.isDark?"dark":"light"},on:{verify:function(t){return e.form.recaptcha=t}}}):e._e(),e._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||e.form.busy||!!e.recaptchaPublicKey&&!e.form.recaptcha,loading:e.form.busy}},[e._v("\n              "+e._s(e.$t("Reset"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);const P=C.exports;p()(C,{VAvatar:v.Z,VBtn:d.Z,VCard:h.Z,VCardText:b.ZB,VCol:y.Z,VContainer:V.Z,VForm:g.Z,VImg:Z.Z,VRow:w.Z,VSpacer:k.Z,VTextField:_.Z,VToolbar:x.Z,VToolbarTitle:$.qW})}}]);
//# sourceMappingURL=password-email.js.map