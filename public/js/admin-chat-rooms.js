(self.webpackChunk=self.webpackChunk||[]).push([[111],{83016:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:["id","small"]}},67834:(t,e,a)=>{"use strict";a.d(e,{Z:()=>f});var n=a(87757),r=a.n(n),s=a(9669),i=a.n(s),o=a(20629),l=a(68843),u=a(74155),c=a(95530);function d(t,e,a,n,r,s,i){try{var o=t[s](i),l=o.value}catch(t){return void a(t)}o.done?e(l):Promise.resolve(l).then(n,r)}function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const f={name:"DataTable",components:{SearchMenu:a(23134).Z,FilterMenu:c.Z},props:{title:{type:String,required:!0},api:{type:String,required:!0},filters:{type:Array,required:!1,default:function(){return[]}},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},search:{type:Boolean,required:!1,default:!1},searchPlaceholder:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:p(p({},(0,o.Se)({cacheGet:"cache/get"})),{},{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(t,e){return t["item."+e.value]=e,t}),{})}}),created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null,filters:{}}},methods:p(p({},(0,o.nv)({cachePut:"cache/put"})),{},{get:function(){return l.U2.apply(void 0,arguments)},format:function(t,e){return"function"==typeof u[t]?u[t](e):e},updateDataTableOptions:function(t){var e=t.page,a=t.itemsPerPage,n=t.sortBy,r=t.sortDesc;this.options=p(p({},this.options),{},{page:e,itemsPerPage:a,sortBy:n[0],sortDesc:r[0]}),this.cacheOptions(),this.fetchData()},cacheOptions:function(){var t=p(p({},this.options),{},{filters:{},search:null});this.cachePut({key:this.cacheKey,value:t})},filterData:function(t){this.options.filters=t,this.fetchData()},searchData:function(t){this.options.search=t,this.fetchData()},fetchData:function(){var t,e=this;return(t=r().mark((function t(){var a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,i().get(e.api,{params:p({page:e.options.page,items_per_page:e.options.itemsPerPage,sort_by:e.options.sortBy,sort_direction:e.sortDirection,search:e.options.search},e.options.filters)});case 3:a=t.sent,n=a.data,e.items=n.items,e.itemsTotal=n.count,e.loading=!1;case 8:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,r){var s=t.apply(e,a);function i(t){d(s,n,r,i,o,"next",t)}function o(t){d(s,n,r,i,o,"throw",t)}i(void 0)}))})()}})}},13860:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Approved"),value:"approved"},{text:this.$t("Rejected"),value:"rejected"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},41140:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Sign up"),value:"sign_up"},{text:this.$t("Game loss"),value:"game_loss"},{text:this.$t("Game win"),value:"game_win"},{text:this.$t("Deposit"),value:"deposit"}]}},methods:{change:function(){this.$emit("change",{type:this.value})}}}},23817:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:"month",options:[{text:this.$t("Week"),value:"week"},{text:this.$t("Month"),value:"month"},{text:this.$t("Year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},92270:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Created"),value:"created"},{text:this.$t("Pending"),value:"pending"},{text:this.$t("Completed"),value:"completed"},{text:this.$t("Cancelled"),value:"cancelled"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},53182:(t,e,a)=>{"use strict";a.d(e,{Z:()=>f});var n=a(307),r=a(80141),s=a(88203),i=a(58766),o=a(551),l=a(27157),u=a(58571),c=a(31359),d=a(5025);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const f={components:{PeriodFilter:n.Z,ComparisonPeriodFilter:r.Z,UserRoleFilter:s.Z,UserStatusFilter:i.Z,GameFilter:o.Z,GameResultFilter:l.Z,DepositWithdrawalStatusFilter:u.Z,AffiliateCommissionTypeFilter:c.Z,AffiliateCommissionStatusFilter:d.Z},props:{filters:{type:Array,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,values:{},key:1}},methods:{change:function(t){this.values=p(p({},this.values),t)},reset:function(){this.key++,this.values={},this.apply()},apply:function(){this.menu=!1,this.$emit("apply",this.values)}}}},61862:(t,e,a)=>{"use strict";function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,{Z:()=>s});const s={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null}},computed:{games:function(){return this.$store.getters["package-manager/getByType"](["game","prediction"])},options:function(){var t=this;return[{text:this.$t("All"),value:null}].concat(n(Object.keys(this.games).map((function(e){return{text:t.games[e].name,value:e}}))))}},methods:{change:function(){this.$emit("change",{game:this.value})}}}},33205:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Profitable"),value:"profitable"},{text:this.$t("Unprofitable"),value:"unprofitable"}]}},methods:{change:function(){this.$emit("change",{result:this.value})}}}},29839:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All time"),value:null},{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},48044:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:["user","bot","admin"],options:[{text:this.$t("User"),value:"user"},{text:this.$t("Bot"),value:"bot"},{text:this.$t("Admin"),value:"admin"}]}},methods:{change:function(){this.$emit("change",{roles:this.value})}}}},58593:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All"),value:null},{text:this.$t("Active"),value:"active"},{text:this.$t("Blocked"),value:"blocked"}]}},methods:{change:function(){this.$emit("change",{status:this.value})}}}},95392:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n={props:{placeholder:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{menu:!1,value:null}},methods:{reset:function(){this.value=null,this.search()},search:function(){this.menu=!1,this.$emit("search",this.value)}}}},79767:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"admin.chat.rooms.edit",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-pencil")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Edit")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.chat.rooms.delete",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-delete")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Delete")))])],1)],1)],1)],1)},r=[]},8230:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",[t._t("toolbar-prepend"),t._v(" "),a("v-toolbar-title",[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:"",loading:t.loading,disabled:t.loading},on:{click:t.fetchData}},[a("v-icon",[t._v("mdi-cached")])],1),t._v(" "),t.filters.length?a("filter-menu",{attrs:{filters:t.filters,disabled:t.loading},on:{apply:function(e){return t.filterData(e)}}}):t._e(),t._v(" "),t.search?a("search-menu",{attrs:{placeholder:t.searchPlaceholder,disabled:t.loading},on:{search:function(e){return t.searchData(e)}}}):t._e(),t._v(" "),t._t("toolbar-append")],2),t._v(" "),a("v-card-text",[t._t("table-prepend"),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.options.page,"sort-by":t.options.sortBy,"sort-desc":t.options.sortDesc,"items-per-page":t.options.itemsPerPage,"footer-props":t.footerProps,"server-items-length":t.itemsTotal,loading:t.loading,"must-sort":!0,"hide-default-footer":t.hideFooter,"no-data-text":t.$t("No data found"),"no-results-text":t.$t("No data found")},on:{"update:options":t.updateDataTableOptions},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(Array(t.options.itemsPerPage).fill(0),(function(t,e){return a("div",{key:e,staticClass:"align-center my-7"},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)}))},proxy:!0},t._l(t.slotHeaderMap,(function(e,a){return{key:a,fn:function(n){var r=n.item;return[t.$scopedSlots[a]?t._t(a,null,{item:r}):[t._v("\n          "+t._s(e.format?t.format(e.format,t.get(r,e.value)):t.get(r,e.value))+"\n        ")]]}}}))],null,!0)}),t._v(" "),t._t("table-append")],2)],1)},r=[]},33132:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},29375:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Type"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},89355:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},24504:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},80930:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:"",disabled:t.disabled}},n),[a("v-icon",{attrs:{color:Object.keys(t.values).length?"primary":void 0}},[t._v("\n        mdi-filter-outline\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("\n      "+t._s(t.$t("Filter"))+"\n    ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"pt-5"},t._l(t.filters,(function(e){return a(e+"-filter",{key:e+"-"+t.key,tag:"component",on:{change:function(e){return t.change(e)}}})})),1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.reset}},[t._v("\n        "+t._s(t.$t("Reset"))+"\n      ")]),t._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.apply}},[t._v("\n        "+t._s(t.$t("Apply"))+"\n      ")])],1)],1)],1)},r=[]},39433:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Game"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},89439:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Result"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},60045:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},67763:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Role"),disabled:t.disabled,outlined:"",multiple:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},60878:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{attrs:{items:t.options,label:t.$t("Status"),disabled:t.disabled,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},r=[]},25179:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"close-on-content-click":!1,left:"","offset-x":"","nudge-width":300},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:"",disabled:t.disabled}},n),[a("v-icon",{attrs:{color:t.value?"primary":void 0}},[t._v("\n        mdi-magnify\n      ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("\n      "+t._s(t.$t("Search"))+"\n    ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"pt-5"},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("v-text-field",{attrs:{label:t.$t("Search"),placeholder:t.placeholder||t.$t("Search..."),outlined:"",autofocus:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.reset}},[t._v("\n        "+t._s(t.$t("Reset"))+"\n      ")]),t._v(" "),a("v-btn",{attrs:{color:"primary",text:"",disabled:t.disabled},on:{click:t.search}},[t._v("\n        "+t._s(t.$t("Search"))+"\n      ")])],1)],1)],1)},r=[]},5097:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>d});var n=a(79752);const r={middleware:["auth","verified","2fa_passed","admin"],components:{ChatRoomMenu:a(90591).Z,DataTable:n.Z},metaInfo:function(){return{title:this.$t("Chat rooms")}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("Name"),value:"name"},{text:this.$t("Status"),value:"status_title",sortable:!1},{text:this.$t("Messages count"),value:"messages_count",align:"right"},{text:this.$t("Created"),value:"created_ago",align:"right",sortable:!1},{text:this.$t("Updated"),value:"updated_ago",align:"right",sortable:!1},{value:"actions",sortable:!1,align:"right"}]}}};var s=a(51900),i=a(43453),o=a.n(i),l=a(4330),u=a(66530),c=(0,s.Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("data-table",{attrs:{api:"/api/admin/chat/rooms",title:t.$t("Chat rooms"),headers:t.headers},scopedSlots:t._u([{key:"table-prepend",fn:function(){return[a("v-btn",{staticClass:"mb-5",attrs:{color:"primary",to:{name:"admin.chat.rooms.create"}}},[t._v("\n        "+t._s(t.$t("Create chat room"))+"\n      ")])]},proxy:!0},{key:"item.status_title",fn:function(e){var n=e.item;return[a("span",{class:n.enabled?"green--text":"error--text"},[t._v("\n        "+t._s(n.status_title)+"\n      ")])]}},{key:"item.actions",fn:function(t){var e=t.item;return[a("chat-room-menu",{attrs:{id:e.id,small:""}})]}}])})],1)}),[],!1,null,null,null);const d=c.exports;o()(c,{VBtn:l.Z,VContainer:u.Z})}}]);
//# sourceMappingURL=admin-chat-rooms.js.map