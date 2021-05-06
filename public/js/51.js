(self.webpackChunk=self.webpackChunk||[]).push([[51],{3256:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var o=r(5166),n={class:"grid gap-6"},s={class:""},a={class:"px-4 sm:px-0"},c={class:"text-xl font-medium text-gray-900"},l={class:"mt-1 text-sm text-gray-600"},i={class:""},d={class:"overflow-hidden shadow sm:rounded-md"},u={class:"px-4 py-5 bg-white sm:p-6"},f={class:"grid grid-cols-6 gap-6"},m={key:0,class:"flex items-center justify-end px-4 py-3 text-right bg-gray-50 sm:px-6 space-s-3"};const p={setup:function(e,t){var r=t.slots;return{hasActions:(0,o.computed)((function(){return!!r.actions}))}},render:function(e,t,r,p,h,x){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",a,[(0,o.createVNode)("h3",c,[(0,o.renderSlot)(e.$slots,"title")]),(0,o.createVNode)("p",l,[(0,o.renderSlot)(e.$slots,"description")])])]),(0,o.createVNode)("div",i,[(0,o.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(t){return e.$emit("submitted")}),["prevent"]))},[(0,o.createVNode)("div",d,[(0,o.createVNode)("div",u,[(0,o.createVNode)("div",f,[(0,o.renderSlot)(e.$slots,"form")])]),p.hasActions?((0,o.openBlock)(),(0,o.createBlock)("div",m,[(0,o.renderSlot)(e.$slots,"actions")])):(0,o.createCommentVNode)("",!0)])],32)])])}},h=p},8448:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var o=r(5166),n={class:"flex flex-col min-h-screen pt-12 bg-gray-100"},s={key:0},a={key:1},c={class:"fixed top-0 z-10 flex w-full shadow"},l={class:"flex items-center w-56 h-12 px-5 bg-gray-800 space-s-2"},i=(0,o.createTextVNode)(" لوحة التحكم "),d={class:"flex items-center justify-end flex-grow h-12 px-5 bg-gray-700 border-b border-gray-800 space-s-1"},u=(0,o.createTextVNode)(" ملفي "),f={class:"flex flex-grow"},m={class:"fixed right-0 z-10 w-full h-12 pb-0 bg-gray-700 md:pb-12 top-12 md:w-56 md:h-screen"},p={class:"flex h-full p-1 overflow-x-auto md:p-2 space-s-2 md:space-s-0 md:space-y-2 md:flex-col md:overflow-y-auto scrolling-area"},h=(0,o.createTextVNode)(" الاحصائيات "),x=(0,o.createTextVNode)(" المناطق "),g=(0,o.createTextVNode)(" المدن "),v=(0,o.createTextVNode)(" الاعضاء "),V=(0,o.createTextVNode)(" الاشتراكات "),y=(0,o.createTextVNode)(" رسائل اتصل بنا "),w=(0,o.createTextVNode)(" الاعدادات "),b={class:"flex-grow w-full pt-12 md:pt-0 md:pr-56"},k={class:"p-5"};var N=r(9680);const B={props:["title"],setup:function(){return{logout:function(){N.Inertia.post(route("admin.logout"))}}},render:function(e,t,r,N,B,C){var S=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("main",n,[((0,o.openBlock)(),(0,o.createBlock)(o.Teleport,{to:"head"},[r.title?((0,o.openBlock)(),(0,o.createBlock)("title",s,"لوحة التحكم | "+(0,o.toDisplayString)(r.title),1)):((0,o.openBlock)(),(0,o.createBlock)("title",a,"لوحة التحكم"))])),(0,o.createVNode)("header",c,[(0,o.createVNode)("div",l,[(0,o.createVNode)(S,{href:e.route("admin.dashboard"),class:"text-white"},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["href"])]),(0,o.createVNode)("div",d,[(0,o.createVNode)(S,{href:e.route("admin.profile"),class:["px-2 py-1 text-white rounded hover:bg-gray-800",{"bg-gray-800":"admin.profile"==e.route().current()}]},{default:(0,o.withCtx)((function(){return[u]})),_:1},8,["href","class"]),(0,o.createVNode)("button",{onClick:t[1]||(t[1]=function(){return N.logout&&N.logout.apply(N,arguments)}),class:"px-2 py-1 text-white rounded hover:bg-gray-800"}," خروج ")])]),(0,o.createVNode)("article",f,[(0,o.createVNode)("div",m,[(0,o.createVNode)("div",p,[(0,o.createVNode)(S,{href:e.route("admin.dashboard"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":"admin.dashboard"==e.route().current()}]},{default:(0,o.withCtx)((function(){return[h]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.regions"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.regions","admin.regions.create","admin.regions.show"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[x]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.cities"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.cities","admin.cities.create","admin.cities.show"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[g]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.users"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.users","admin.users.create","admin.users.show"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[v]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.subscriptions"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.subscriptions"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[V]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.contact-us"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.contact-us","admin.contact-us.create","admin.contact-us.show"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[y]})),_:1},8,["href","class"]),(0,o.createVNode)(S,{href:e.route("admin.settings"),class:["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800",{"bg-gray-800":["admin.settings"].includes(e.route().current())}]},{default:(0,o.withCtx)((function(){return[w]})),_:1},8,["href","class"])])]),(0,o.createVNode)("div",b,[(0,o.createVNode)("div",k,[(0,o.renderSlot)(e.$slots,"default")])])])])}},C=B},51:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var o=r(5166),n=(0,o.createTextVNode)(" المدن "),s=(0,o.createTextVNode)(" / اضافة مدينة "),a={class:"col-span-6 md:col-span-3"},c={class:"col-span-6 md:col-span-3"},l=(0,o.createTextVNode)(" تم اضافة المدينة "),i=(0,o.createTextVNode)(" اضافة المدينة ");var d=r(9038),u=r(8448),f=r(3256),m=r(6556),p=r(9550),h=r(5736),x=r(1921),g=r(1400),v=r(4065);const V={props:["regions"],components:{Layout:u.Z,Form:f.Z,Label:m.Z,Input:p.Z,InputError:h.Z,Select:x.Z,Button:g.Z,ActionMessage:v.Z},setup:function(){var e=(0,d.cI)({name:null,region_id:null});return{form:e,store:function(){e.post(route("admin.cities.store"),{preserveScroll:!0})}}},render:function(e,t,r,d,u,f){var m=(0,o.resolveComponent)("inertia-link"),p=(0,o.resolveComponent)("Label"),h=(0,o.resolveComponent)("Select"),x=(0,o.resolveComponent)("InputError"),g=(0,o.resolveComponent)("Input"),v=(0,o.resolveComponent)("ActionMessage"),V=(0,o.resolveComponent)("Button"),y=(0,o.resolveComponent)("Form"),w=(0,o.resolveComponent)("layout");return(0,o.openBlock)(),(0,o.createBlock)(w,{title:"اضافة مدينة"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(y,{onSubmitted:d.store},{title:(0,o.withCtx)((function(){return[(0,o.createVNode)(m,{href:e.route("admin.cities"),class:"text-blue-500 hover:text-blue-700"},{default:(0,o.withCtx)((function(){return[n]})),_:1},8,["href"]),s]})),form:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",a,[(0,o.createVNode)(p,{for:"region_id",value:"المنطقة"}),(0,o.createVNode)(h,{id:"region_id",class:"block w-full mt-1",modelValue:d.form.region_id,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.form.region_id=e})},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.regions,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("option",{key:e.id,value:e.id},(0,o.toDisplayString)(e.name),9,["value"])})),128))]})),_:1},8,["modelValue"]),(0,o.createVNode)(x,{message:d.form.errors.region_id,class:"mt-2"},null,8,["message"])]),(0,o.createVNode)("div",c,[(0,o.createVNode)(p,{for:"name",value:"الاسم"}),(0,o.createVNode)(g,{id:"name",type:"text",class:"block w-full mt-1",modelValue:d.form.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.form.name=e})},null,8,["modelValue"]),(0,o.createVNode)(x,{message:d.form.errors.name,class:"mt-2"},null,8,["message"])])]})),actions:(0,o.withCtx)((function(){return[(0,o.createVNode)(v,{on:d.form.recentlySuccessful},{default:(0,o.withCtx)((function(){return[l]})),_:1},8,["on"]),(0,o.createVNode)(V,{class:{"opacity-25":d.form.processing},disabled:d.form.processing},{default:(0,o.withCtx)((function(){return[i]})),_:1},8,["class","disabled"])]})),_:1},8,["onSubmitted"])]})),_:1})}},y=V},4065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(5166),n={class:"text-sm text-gray-600"};const s={props:["on"],render:function(e,t,r,s,a,c){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)(o.Transition,{"leave-active-class":"transition ease-in duration-1000","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.withDirectives)((0,o.createVNode)("div",n,[(0,o.renderSlot)(e.$slots,"default")],512),[[o.vShow,r.on]])]})),_:3})])}},a=s},1400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={props:{type:{type:String,default:"submit"}},render:function(e,t,r,n,s,a){return(0,o.openBlock)(),(0,o.createBlock)("button",{type:r.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-xs text-white hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,o.renderSlot)(e.$slots,"default")],8,["type"])}},s=n},9550:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={props:["modelValue","grouped"],setup:function(e,t){var r=t.emit,n=(0,o.computed)({get:function(){return e.modelValue},set:function(e){return r("update:modelValue",e)}}),s=(0,o.ref)(null);return{value:n,input:s,focus:function(){s.focus()}}},render:function(e,t,r,n,s,a){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)("input",{class:[{border:!r.grouped},"form-input rounded-md shadow-sm"],"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.value=e}),ref:"input"},null,2)),[[o.vModelText,n.value]])}},s=n},5736:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(5166),n={class:"text-sm text-red-600"};const s={props:["message"],render:function(e,t,r,s,a,c){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("p",n,(0,o.toDisplayString)(r.message),1)],512)),[[o.vShow,r.message]])}},a=s},6556:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(5166),n={class:"block font-medium text-sm text-gray-700"},s={key:0},a={key:1};const c={props:["value"],render:function(e,t,r,c,l,i){return(0,o.openBlock)(),(0,o.createBlock)("label",n,[r.value?((0,o.openBlock)(),(0,o.createBlock)("span",s,(0,o.toDisplayString)(r.value),1)):((0,o.openBlock)(),(0,o.createBlock)("span",a,[(0,o.renderSlot)(e.$slots,"default")]))])}},l=c},1921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var o=r(5166);const n={props:["modelValue"],setup:function(e,t){var r=t.emit,n=(0,o.computed)({get:function(){return e.modelValue},set:function(e){return r("update:modelValue",e)}}),s=(0,o.ref)(null);return{value:n,input:s,focus:function(){s.focus()}}},render:function(e,t,r,n,s,a){return(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)("select",{class:"form-select border rounded-md shadow-sm","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.value=e}),ref:"select"},[(0,o.renderSlot)(e.$slots,"default")],512)),[[o.vModelSelect,n.value]])}},s=n}}]);