(self.webpackChunk=self.webpackChunk||[]).push([[448],{4448:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>kt});var r=o(5166),l={class:"py-16 px-8 min-h-screen bg-gray-100 flex items-center justify-center"},n=(0,r.createVNode)("title",null,"خدمة توصيل | اكمل ملفك الشخصي",-1),a={class:"w-full"},c={class:"max-w-screen-xl mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm"},s=(0,r.createVNode)("h1",{class:"my-3 text-3xl"},"يرجى اكمال ملفك الشخصي",-1);var i={key:0,class:"text-gray-700 mb-3"},u={key:1,class:"text-gray-700 mb-3"},d={class:"shadow bg-white w-full"},m={class:"grid gap-3 py-4 px-8"},p={class:"inline-flex items-center"},f=(0,r.createVNode)("span",{class:"mr-2"},"سعودي",-1),v={class:"py-4 px-8 flex justify-end bg-gray-50"},V=(0,r.createTextVNode)(" التالي ");var y=o(9038),g=o(6556),b=o(9550),k=o(5736),N=o(1400),h=o(2354);function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function x(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const B={props:["user"],components:{Label:g.Z,Input:b.Z,InputError:k.Z,Button:N.Z,Textarea:h.Z},setup:function(e,t){var o=t.emit,r=(0,y.cI)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){x(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e.user));return{form:r,fill:function(){r.post(route("first.step"),{preserveScroll:!0,onSuccess:function(){o("next")}})}}},render:function(e,t,o,l,n,a){var c=(0,r.resolveComponent)("Label"),s=(0,r.resolveComponent)("Input"),y=(0,r.resolveComponent)("InputError"),g=(0,r.resolveComponent)("Textarea"),b=(0,r.resolveComponent)("Button");return(0,r.openBlock)(),(0,r.createBlock)("div",null,["company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",i," بيانات مندوب/معقب الشركة ")):((0,r.openBlock)(),(0,r.createBlock)("p",u,"البيانات الشخصية")),(0,r.createVNode)("div",d,[(0,r.createVNode)("form",{onSubmit:t[7]||(t[7]=(0,r.withModifiers)((function(){return l.fill&&l.fill.apply(l,arguments)}),["prevent"]))},[(0,r.createVNode)("div",m,[(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"first_name",value:"الاسم الاول"}),(0,r.createVNode)(s,{id:"first_name",type:"text",class:"block w-full mt-1",modelValue:l.form.first_name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.first_name=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:l.form.errors.first_name,class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"middle_name",value:"اسم الاب"}),(0,r.createVNode)(s,{id:"middle_name",type:"text",class:"block w-full mt-1",modelValue:l.form.middle_name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.middle_name=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:l.form.errors.middle_name,class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"last_name",value:"اسم العائلة"}),(0,r.createVNode)(s,{id:"last_name",type:"text",class:"block w-full mt-1",modelValue:l.form.last_name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.last_name=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:l.form.errors.last_name,class:"mt-1"},null,8,["message"])]),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)(r.Fragment,{key:0},[(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"age",value:"العمر"}),(0,r.createVNode)(s,{id:"age",type:"number",min:"18",class:"block w-full mt-1",modelValue:l.form.age,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.age=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:l.form.errors.age,class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"bio",value:"أكتب وصفا مختصرا عن نفسك (اختياري)"}),(0,r.createVNode)(g,{id:"bio",type:"text",class:"block w-full mt-1",modelValue:l.form.bio,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.form.bio=e})},null,8,["modelValue"]),(0,r.createVNode)(y,{message:l.form.errors.bio,class:"mt-1"},null,8,["message"])])],64)):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",null,[(0,r.createVNode)("label",p,[(0,r.withDirectives)((0,r.createVNode)("input",{type:"checkbox",class:"form-checkbox border rounded","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.form.saudi=e})},null,512),[[r.vModelCheckbox,l.form.saudi]]),f])])]),(0,r.createVNode)("div",v,[(0,r.createVNode)(b,{class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[V]})),_:1},8,["class","disabled"])])],32)])])}},_=B;var C={key:0,class:"text-gray-700 mb-3"},j={key:1,class:"text-gray-700 mb-3"},O={key:2,class:"text-gray-700 mb-3"},S={class:"shadow bg-white w-full"},P={class:"grid gap-3 py-4 px-8"},D={key:0,class:"grid gap-3 grid-cols-1 md:grid-cols-2"},U={class:"col-span-1"},Z={key:0,class:"col-span-1"},M={key:1,class:"col-span-1"},T={class:"col-span-1 md:col-start-2"},I={class:"inline-flex items-center"},E=(0,r.createVNode)("span",{class:"mr-2"}," رقم السجل المدني أو الافامة ",-1),$={class:"col-span-1"},L=(0,r.createVNode)("option",{value:"transport"},"نقليات",-1),F=(0,r.createVNode)("option",{value:"livestock"},"تجارة مواشي",-1),W=(0,r.createVNode)("option",{value:"contracting"}," مقاولات عامة ",-1),R=(0,r.createVNode)("option",{value:"farms"}," تشغيل وإدارة مزارع ",-1),q=(0,r.createVNode)("option",{value:"related"}," ذو صلة بالخيارات السابقة ",-1),A=(0,r.createVNode)("option",{value:"other"},"أخرى",-1),z={class:"col-span-1"},G={key:1},H={key:1,value:""},J={key:2,class:"grid gap-3 grid-cols-3"},K={class:"col-span-3 md:col-span-1 self-center"},Q={class:"inline-flex items-center"},X=(0,r.createVNode)("span",{class:"mr-2"}," هل تمتلك الشركة موقعا إلكترونيا ؟ ",-1),Y={key:0,class:"col-span-3 md:col-span-2"},ee={class:"col-span-3"},te={class:"py-4 px-8 flex justify-between bg-gray-50"},oe=(0,r.createTextVNode)(" السابق "),re=(0,r.createTextVNode)(" التالي ");var le=o(1921),ne=o(3768);function ae(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function ce(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const se={props:["user","countries","regions"],components:{Label:g.Z,Input:b.Z,Select:le.Z,Textarea:h.Z,InputError:k.Z,Button:N.Z,SecondaryButton:ne.Z},setup:function(e,t){var o=t.emit,r=(0,y.cI)(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(o),!0).forEach((function(t){ce(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ae(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},e.user));return{form:r,fill:function(){r.post(route("second.step"),{preserveScroll:!0,onSuccess:function(){o("next")}})}}},render:function(e,t,o,l,n,a){var c=(0,r.resolveComponent)("Label"),s=(0,r.resolveComponent)("Input"),i=(0,r.resolveComponent)("InputError"),u=(0,r.resolveComponent)("Select"),d=(0,r.resolveComponent)("Textarea"),m=(0,r.resolveComponent)("SecondaryButton"),p=(0,r.resolveComponent)("Button");return(0,r.openBlock)(),(0,r.createBlock)("div",null,["client"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",C," بيانات العنوان ")):(0,r.createCommentVNode)("",!0),"company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",j," البيانات الرسمية لــ(الشركة / المؤسسة) ")):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",O," البيانات الرسمية وبيانات العنوان ")):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",S,[(0,r.createVNode)("form",{onSubmit:t[14]||(t[14]=(0,r.withModifiers)((function(){return l.fill&&l.fill.apply(l,arguments)}),["prevent"]))},[(0,r.createVNode)("div",P,["company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("div",D,[(0,r.createVNode)("div",U,[(0,r.createVNode)(c,{for:"company_name",value:"اسم الشركة"}),(0,r.createVNode)(s,{id:"company_name",type:"text",class:"block w-full mt-1",modelValue:l.form.company_name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.company_name=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.company_name,class:"mt-1"},null,8,["message"])]),l.form.iqama?((0,r.openBlock)(),(0,r.createBlock)("div",Z,[(0,r.createVNode)(c,{for:"national_id",value:"رفم السجل المدني أو الإقامة"}),(0,r.createVNode)(s,{id:"national_id",type:"text",class:"block w-full mt-1",modelValue:l.form.national_id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.national_id=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.national_id,class:"mt-1"},null,8,["message"])])):((0,r.openBlock)(),(0,r.createBlock)("div",M,[(0,r.createVNode)(c,{for:"commercial_registration",value:"السجل التجاري"}),(0,r.createVNode)(s,{id:"commercial_registration",type:"text",class:"block w-full mt-1",modelValue:l.form.commercial_registration,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.commercial_registration=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.commercial_registration,class:"mt-1"},null,8,["message"])])),(0,r.createVNode)("div",T,[(0,r.createVNode)("label",I,[(0,r.withDirectives)((0,r.createVNode)("input",{type:"checkbox",class:"form-checkbox border rounded","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.iqama=e})},null,512),[[r.vModelCheckbox,l.form.iqama]]),E])]),(0,r.createVNode)("div",$,[(0,r.createVNode)(c,{for:"activity",value:"النشاط"}),(0,r.createVNode)(u,{id:"activity",class:"block w-full mt-1",modelValue:l.form.activity,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.form.activity=e})},{default:(0,r.withCtx)((function(){return[L,F,W,R,q,A]})),_:1},8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.activity,class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",z,[(0,r.createVNode)(c,{for:"origin",value:"بلد المنشأ"}),(0,r.createVNode)(u,{id:"origin",class:"block w-full mt-1",modelValue:l.form.origin,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.form.origin=e})},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.countries,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("option",{key:t,value:t},(0,r.toDisplayString)(e),9,["value"])})),128))]})),_:1},8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.origin,class:"mt-1"},null,8,["message"])])])):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("div",G,[(0,r.createVNode)(c,{for:"national_id",value:"أدخل رفم السجل المدني أو رقم الإقامة"}),(0,r.createVNode)(s,{id:"national_id",type:"text",class:"block w-full mt-1",modelValue:l.form.national_id,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.form.national_id=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.national_id,class:"mt-1"},null,8,["message"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"region_id",value:"المنطقة"}),(0,r.createVNode)(u,{id:"region_id",class:"block w-full mt-1",modelValue:l.form.region_id,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.form.region_id=e})},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.regions,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("option",{key:e.id,value:e.id},(0,r.toDisplayString)(e.name),9,["value"])})),128))]})),_:1},8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.region_id,class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",null,[(0,r.createVNode)(c,{for:"city_id",value:"المدينة"}),(0,r.createVNode)(u,{id:"city_id",class:"block w-full mt-1",modelValue:l.form.city_id,"onUpdate:modelValue":t[9]||(t[9]=function(e){return l.form.city_id=e})},{default:(0,r.withCtx)((function(){return[l.form.region_id?((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,{key:0},(0,r.renderList)(o.regions.find((function(e){return e.id==l.form.region_id})).cities,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("option",{key:e.id,value:e.id},(0,r.toDisplayString)(e.name),9,["value"])})),128)):((0,r.openBlock)(),(0,r.createBlock)("option",H,"اختر المنطقة اولا"))]})),_:1},8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.city_id,class:"mt-1"},null,8,["message"])]),"company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("div",J,[(0,r.createVNode)("div",K,[(0,r.createVNode)("label",Q,[(0,r.withDirectives)((0,r.createVNode)("input",{type:"checkbox",class:"form-checkbox border rounded","onUpdate:modelValue":t[10]||(t[10]=function(e){return l.form.has_website=e})},null,512),[[r.vModelCheckbox,l.form.has_website]]),X])]),l.form.has_website?((0,r.openBlock)(),(0,r.createBlock)("div",Y,[(0,r.createVNode)(c,{for:"website",value:"موقع الشركة على الانترنت"}),(0,r.createVNode)(s,{id:"website",type:"text",class:"block w-full mt-1",modelValue:l.form.website,"onUpdate:modelValue":t[11]||(t[11]=function(e){return l.form.website=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.website,class:"mt-1"},null,8,["message"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",ee,[(0,r.createVNode)(c,{for:"bio",value:"أكتب وصفا مختصرا عن شركتك/مؤسستك (اختياري)"}),(0,r.createVNode)(d,{id:"bio",type:"text",class:"block w-full mt-1",modelValue:l.form.bio,"onUpdate:modelValue":t[12]||(t[12]=function(e){return l.form.bio=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors.bio,class:"mt-1"},null,8,["message"])])])):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",te,[(0,r.createVNode)(m,{onClick:t[13]||(t[13]=(0,r.withModifiers)((function(t){return e.$emit("previous")}),["prevent"])),class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[oe]})),_:1},8,["class","disabled"]),(0,r.createVNode)(p,{class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[re]})),_:1},8,["class","disabled"])])],32)])])}},ie=se;var ue={key:0,class:"text-gray-700 mb-3"},de={key:1,class:"text-gray-700 mb-3"},me={class:"shadow bg-white w-full"},pe={class:"py-4 px-8 flex justify-center border-b"},fe=(0,r.createTextVNode)(" دليل الاسعار "),ve=(0,r.createVNode)("h1",null,"دليل الاسعار",-1),Ve={class:""},ye=(0,r.createTextVNode)(" اغلاق "),ge={key:0,class:"grid gap-3 py-4 px-8"},be={class:"col-span-1"},ke={class:"inline-flex items-center"},Ne={class:"mr-2"},he={key:0,class:"col-span-2"},we={key:1,class:"grid gap-3 grid-cols-1 md:grid-cols-2 py-4 px-8"},xe={class:"inline-flex items-center"},Be={class:"mr-2"},_e={class:"grid gap-3 grid-cols-1 md:grid-cols-2 py-4 px-8 border-t pt-4"},Ce={class:"col-span-1"},je={class:"col-span-1"},Oe={key:0,class:"text-green-600"},Se=(0,r.createTextVNode)(" القيمة أعلاه تعبر عن قيمة الرسم الشهري لمدة تبلغ "),Pe={class:"text-green-800"},De=(0,r.createTextVNode)(" شهر/أشهر "),Ue={class:"py-4 px-8 flex justify-between bg-gray-50"},Ze=(0,r.createTextVNode)(" السابق "),Me=(0,r.createTextVNode)(" التالي ");function Te(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Ie(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(o),!0).forEach((function(t){Ee(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Te(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function Ee(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const $e={props:["user"],components:{DialogModal:o(2233).Z,Label:g.Z,Input:b.Z,InputError:k.Z,Button:N.Z,SecondaryButton:ne.Z},setup:function(e,t){var o=t.emit,l=["porter","cattle","fodder","driver","teacher","general"],n=(0,r.ref)(null),a=(0,r.ref)(!1),c=(0,y.cI)(Ie(Ie({},e.user),{},{monthly_fee:0,total:0,release:1}));return(0,r.onMounted)((function(){n.value&&(n.value.checked=5===c.jobs.length)})),(0,r.watchEffect)((function(){if("company"==e.user.role){var t=0,o=1,r=1;l.forEach((function(e){c.jobs.includes(e)&&(t+=parseInt(c.workers[e]))})),t<5?(o=2,r=1):t<10?(o=.75,r=3):t<15?(o=.5,r=6):(o=.25,r=9),c.release=r,c.workers.total=t,c.monthly_fee=50*t*o,c.total=c.monthly_fee*r}"worker"==e.user.role&&(n.value&&(n.value.checked=5===c.jobs.length),c.monthly_fee=50*c.jobs.length,5===c.jobs.length&&(c.monthly_fee-=25),c.total=c.monthly_fee);var a=new Intl.NumberFormat("en-US",{style:"currency",currency:"SAR"});c.monthly_fee=a.format(c.monthly_fee),c.total=a.format(c.total)})),{jobs:l,title:function(e){return{porter:"تحميل وتنزيل",cattle:"نقل الانعام",fodder:"نقل وتوصيل الاعلاف",driver:"نقل (بضائع أثاث منزلي أغذية إلخ)",teacher:"معلم/يــن فك وتركيب",general:"الكل"}[e]},form:c,fill:function(){c.post(route("third.step"),{preserveScroll:!0,onSuccess:function(){o("next")}})},general:n,modal:a}},render:function(e,t,o,l,n,a){var c=(0,r.resolveComponent)("SecondaryButton"),s=(0,r.resolveComponent)("DialogModal"),i=(0,r.resolveComponent)("Label"),u=(0,r.resolveComponent)("Input"),d=(0,r.resolveComponent)("InputError"),m=(0,r.resolveComponent)("Button");return(0,r.openBlock)(),(0,r.createBlock)("div",null,["company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",ue," المجالات التي ترغب الشركة / المؤسسة بالعمل بها ")):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("p",de," المجالات التي ترغب بالعمل بها ")):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",me,[(0,r.createVNode)("div",pe,[(0,r.createVNode)(c,{onClick:t[1]||(t[1]=(0,r.withModifiers)((function(e){return l.modal=!0}),["prevent"])),class:"px-10"},{default:(0,r.withCtx)((function(){return[fe]})),_:1}),(0,r.createVNode)(s,{maxWidth:"fit",show:l.modal,onClose:t[3]||(t[3]=function(e){return l.modal=!1})},{title:(0,r.withCtx)((function(){return[ve]})),content:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",Ve,["company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("object",{key:0,class:"w-full h-96",data:e.$page.props.settings.company_pdf,type:"application/pdf"},null,8,["data"])):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("object",{key:1,class:"w-full h-96",data:e.$page.props.settings.worker_pdf,type:"application/pdf"},null,8,["data"])):(0,r.createCommentVNode)("",!0)])]})),footer:(0,r.withCtx)((function(){return[(0,r.createVNode)(c,{onClick:t[2]||(t[2]=function(e){return l.modal=!1})},{default:(0,r.withCtx)((function(){return[ye]})),_:1})]})),_:1},8,["show"])]),(0,r.createVNode)("form",{onSubmit:t[10]||(t[10]=(0,r.withModifiers)((function(){return l.fill&&l.fill.apply(l,arguments)}),["prevent"]))},["company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("div",ge,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(l.jobs,(function(e,o){return(0,r.openBlock)(),(0,r.createBlock)("div",{key:e,class:[{"border-t pt-4":0!==o},"grid gap-3 grid-cols-1 md:grid-cols-3"]},[(0,r.createVNode)("div",be,[(0,r.createVNode)("label",ke,[(0,r.withDirectives)((0,r.createVNode)("input",{name:"jobs[]",type:"checkbox",class:"form-chectitlekbox border rounded",value:e,onChange:function(t){t.target.checked?l.form.workers[e]=1:delete l.form.workers[e]},"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.form.jobs=e})},null,40,["value","onChange"]),[[r.vModelCheckbox,l.form.jobs]]),(0,r.createVNode)("span",Ne,(0,r.toDisplayString)(l.title(e)),1)])]),l.form.jobs.includes(e)?((0,r.openBlock)(),(0,r.createBlock)("div",he,[(0,r.createVNode)(i,{for:e},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" عدد العاملين في مجال ("+(0,r.toDisplayString)(l.title(e))+") ",1)]})),_:2},1032,["for"]),(0,r.createVNode)(u,{id:e,type:"number",class:"block w-full mt-1",min:"1",modelValue:l.form.workers[e],"onUpdate:modelValue":function(t){return l.form.workers[e]=t},modelModifiers:{number:!0}},null,8,["id","modelValue","onUpdate:modelValue"]),(0,r.createVNode)(d,{message:l.form.errors["workers.".concat(e)],class:"mt-1"},null,8,["message"])])):(0,r.createCommentVNode)("",!0)],2)})),128))])):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)("div",we,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(l.jobs,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("div",{key:e,class:"col-span-1"},[(0,r.createVNode)("label",xe,["general"==e?((0,r.openBlock)(),(0,r.createBlock)("input",{key:0,type:"checkbox",ref:"general",onChange:t[5]||(t[5]=function(e){e.target.checked?l.form.jobs=["porter","cattle","fodder","driver","teacher"]:l.form.jobs=[]}),class:"form-checkbox border rounded"},null,544)):(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("input",{key:1,name:"jobs[]",type:"checkbox",value:e,class:"form-checkbox border rounded","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.form.jobs=e})},null,8,["value"])),[[r.vModelCheckbox,l.form.jobs]]),(0,r.createVNode)("span",Be,(0,r.toDisplayString)(l.title(e)),1)])])})),128))])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",_e,[(0,r.createVNode)("div",Ce,[(0,r.createVNode)(i,{for:"monthly_fee",value:"قيمة الرسم الشهري"}),(0,r.createVNode)(u,{id:"monthly_fee",type:"text",class:"block w-full mt-1",modelValue:l.form.monthly_fee,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.form.monthly_fee=e}),disabled:""},null,8,["modelValue"])]),(0,r.createVNode)("div",je,[(0,r.createVNode)(i,{for:"total",value:"الإجمالي"}),(0,r.createVNode)(u,{id:"total",type:"text",class:"block w-full mt-1 mb-2",modelValue:l.form.total,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.form.total=e}),disabled:""},null,8,["modelValue"]),l.form.workers?((0,r.openBlock)(),(0,r.createBlock)("span",Oe,[Se,(0,r.createVNode)("b",Pe,(0,r.toDisplayString)(l.form.release),1),De])):(0,r.createCommentVNode)("",!0)])]),(0,r.createVNode)("div",Ue,[(0,r.createVNode)(c,{onClick:t[9]||(t[9]=(0,r.withModifiers)((function(t){return e.$emit("previous")}),["prevent"])),class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[Ze]})),_:1},8,["class","disabled"]),"company"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,message:l.form.errors["workers.total"],class:"mt-1"},null,8,["message"])):(0,r.createCommentVNode)("",!0),"worker"==o.user.role?((0,r.openBlock)(),(0,r.createBlock)(d,{key:1,message:l.form.errors.jobs,class:"mt-1"},null,8,["message"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(m,{class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[Me]})),_:1},8,["class","disabled"])])],32)])])}},Le=$e;var Fe=(0,r.createVNode)("p",{class:"text-gray-700 mb-3"},"بيانات المركبة والسائق",-1),We={class:"shadow bg-white w-full"},Re={class:"grid gap-3 py-4 px-8"},qe={class:"grid grid-cols-2 gap-3"},Ae={class:"col-span-2 md:col-span-1"},ze=(0,r.createVNode)("option",{value:"dina"},"دينا",-1),Ge=(0,r.createVNode)("option",{value:"dabbab"},"دباب",-1),He=(0,r.createVNode)("option",{value:"wanet"},"وانيت",-1),Je=(0,r.createVNode)("option",{value:"car"},"سيارة",-1),Ke={class:"col-span-2 md:col-span-1"},Qe={class:"col-span-2 md:col-span-1"},Xe={class:"col-span-2 md:col-span-1"},Ye=(0,r.createVNode)("span",{class:"py-1"}," اختيار صورة ",-1),et={class:"mt-2"},tt={class:"col-span-2"},ot={class:"inline-flex items-center"},rt=(0,r.createVNode)("span",{class:"mr-2"},"المستخدم غير المالك",-1),lt={key:0,class:"col-span-2"},nt=(0,r.createVNode)("h3",{class:"my-3 text-2xl"},"بيانات المستخدم",-1),at={class:"grid gap-3 grid-cols-1 md:grid-cols-3"},ct={class:"col-span-1"},st={class:"col-span-1"},it={class:"col-span-1"},ut=(0,r.createVNode)("span",{class:"py-1"}," اختيار صورة ",-1),dt={class:"mt-2"},mt={class:"py-4 px-8 flex justify-between bg-gray-50"},pt=(0,r.createTextVNode)(" السابق "),ft=(0,r.createTextVNode)(" التالي ");function vt(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function Vt(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?vt(Object(o),!0).forEach((function(t){yt(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):vt(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function yt(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const gt={props:["user"],components:{Label:g.Z,Select:le.Z,Input:b.Z,InputError:k.Z,Button:N.Z,SecondaryButton:ne.Z},setup:function(e){var t=(0,y.cI)({vehicle:Vt({},e.user.vehicle),driver:Vt({},e.user.driver),not_owner:!1,license:null,id:null}),o=(0,r.ref)(null),l=(0,r.ref)(null);return{form:t,fill:function(){t.license&&(t.vehicle.license_image=o.value.files[0]),t.id&&(t.driver.id_image=l.value.files[0]),t.post(route("fourth.step"),{preserveScroll:!0})},license:o,id:l,licensePreview:function(){var e=new FileReader;e.onload=function(e){return t.license=e.target.result},e.readAsDataURL(o.value.files[0])},idPreview:function(){var e=new FileReader;e.onload=function(e){return t.id=e.target.result},e.readAsDataURL(l.value.files[0])}}},render:function(e,t,o,l,n,a){var c=(0,r.resolveComponent)("Label"),s=(0,r.resolveComponent)("Select"),i=(0,r.resolveComponent)("InputError"),u=(0,r.resolveComponent)("Input"),d=(0,r.resolveComponent)("SecondaryButton"),m=(0,r.resolveComponent)("Button");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[Fe,(0,r.createVNode)("div",We,[(0,r.createVNode)("form",{onSubmit:t[12]||(t[12]=(0,r.withModifiers)((function(){return l.fill&&l.fill.apply(l,arguments)}),["prevent"]))},[(0,r.createVNode)("div",Re,[(0,r.createVNode)("div",qe,[(0,r.createVNode)("div",Ae,[(0,r.createVNode)(c,{for:"vehicle_type",value:"النوع"}),(0,r.createVNode)(s,{id:"vehicle_type",class:"block w-full mt-1",modelValue:l.form.vehicle.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.form.vehicle.type=e})},{default:(0,r.withCtx)((function(){return[ze,Ge,He,Je]})),_:1},8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors["vehicle.type"],class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",Ke,[(0,r.createVNode)(c,{for:"vehicle_model",value:"الموديل"}),(0,r.createVNode)(u,{id:"vehicle_model",type:"number",min:"1999",max:"2040",class:"block w-full mt-1",modelValue:l.form.vehicle.model,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.form.vehicle.model=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors["vehicle.model"],class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",Qe,[(0,r.createVNode)(c,{for:"vehicle_license",value:"رقم الرخصة"}),(0,r.createVNode)(u,{id:"vehicle_license",type:"text",class:"block w-full mt-1",modelValue:l.form.vehicle.license,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.form.vehicle.license=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors["vehicle.license"],class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",Xe,[(0,r.createVNode)(c,{for:"vehicle_license_image",value:"صورة الرخصة"}),(0,r.createVNode)("input",{id:"vehicle_license_image",accept:"images/*",type:"file",class:"hidden",ref:"license",onChange:t[4]||(t[4]=function(){return l.licensePreview&&l.licensePreview.apply(l,arguments)})},null,544),(0,r.createVNode)(d,{class:"mt-1",type:"button",onClick:t[5]||(t[5]=(0,r.withModifiers)((function(e){return l.license.click()}),["prevent"]))},{default:(0,r.withCtx)((function(){return[Ye]})),_:1}),(0,r.createVNode)(i,{message:l.form.errors["vehicle.license_image"],class:"mt-2"},null,8,["message"]),(0,r.createVNode)("div",et,[(0,r.withDirectives)((0,r.createVNode)("img",{class:"rounded w-64",src:l.form.license},null,8,["src"]),[[r.vShow,l.form.license]])])]),(0,r.createVNode)("div",tt,[(0,r.createVNode)("label",ot,[(0,r.withDirectives)((0,r.createVNode)("input",{type:"checkbox",class:"form-checkbox border rounded","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.form.not_owner=e})},null,512),[[r.vModelCheckbox,l.form.not_owner]]),rt])]),l.form.not_owner?((0,r.openBlock)(),(0,r.createBlock)("div",lt,[nt,(0,r.createVNode)("div",at,[(0,r.createVNode)("div",ct,[(0,r.createVNode)(c,{for:"driver_name",value:"اسم المستخدم"}),(0,r.createVNode)(u,{id:"driver_name",type:"text",class:"block w-full mt-1",modelValue:l.form.driver.name,"onUpdate:modelValue":t[7]||(t[7]=function(e){return l.form.driver.name=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors["driver.name"],class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",st,[(0,r.createVNode)(c,{for:"driver_id",value:"هوية المستخدم"}),(0,r.createVNode)(u,{id:"driver_id",type:"text",class:"block w-full mt-1",modelValue:l.form.driver.id,"onUpdate:modelValue":t[8]||(t[8]=function(e){return l.form.driver.id=e})},null,8,["modelValue"]),(0,r.createVNode)(i,{message:l.form.errors["driver.id"],class:"mt-1"},null,8,["message"])]),(0,r.createVNode)("div",it,[(0,r.createVNode)(c,{for:"driver_id_image",value:"صورة هوية المستخدم"}),(0,r.createVNode)("input",{id:"driver_id_image",accept:"images/*",type:"file",class:"hidden",ref:"id",onChange:t[9]||(t[9]=function(){return l.idPreview&&l.idPreview.apply(l,arguments)})},null,544),(0,r.createVNode)(d,{class:"mt-1",type:"button",onClick:t[10]||(t[10]=(0,r.withModifiers)((function(e){return l.id.click()}),["prevent"]))},{default:(0,r.withCtx)((function(){return[ut]})),_:1}),(0,r.createVNode)(i,{message:l.form.errors["driver.id_image"],class:"mt-2"},null,8,["message"]),(0,r.createVNode)("div",dt,[(0,r.withDirectives)((0,r.createVNode)("img",{class:"rounded w-64",src:l.form.id},null,8,["src"]),[[r.vShow,l.form.id]])])])])])):(0,r.createCommentVNode)("",!0)])]),(0,r.createVNode)("div",mt,[(0,r.createVNode)(d,{onClick:t[11]||(t[11]=(0,r.withModifiers)((function(t){return e.$emit("previous")}),["prevent"])),class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[pt]})),_:1},8,["class","disabled"]),(0,r.createVNode)(m,{class:{"opacity-25":l.form.processing},disabled:l.form.processing},{default:(0,r.withCtx)((function(){return[ft]})),_:1},8,["class","disabled"])])],32)])])}},bt={props:["countries","regions"],components:{First:_,Second:ie,Third:Le,Fourth:gt},setup:function(e,t){return{step:(0,r.ref)(t.attrs.auth.user.step)}},render:function(e,t,o,i,u,d){var m=(0,r.resolveComponent)("First"),p=(0,r.resolveComponent)("Second"),f=(0,r.resolveComponent)("Third"),v=(0,r.resolveComponent)("Fourth");return(0,r.openBlock)(),(0,r.createBlock)("div",l,[((0,r.openBlock)(),(0,r.createBlock)(r.Teleport,{to:"head"},[n])),(0,r.createVNode)("div",a,[(0,r.createVNode)("div",c,[s,(0,r.createVNode)(r.Transition,{mode:"out-in","enter-active-class":"transition duration-500 ease-in transform","leave-active-class":"transition duration-500 ease-out transform","enter-from-class":"opacity-0 translate-x-10","enter-to-class":"opacity-1 translate-x-0","leave-from-class":"opacity-1 translate-x-0","leave-to-class":"opacity-0 translate-x-10"},{default:(0,r.withCtx)((function(){return[1==i.step?((0,r.openBlock)(),(0,r.createBlock)(m,{key:0,user:e.$page.props.auth.user,onNext:t[1]||(t[1]=function(e){return i.step++})},null,8,["user"])):2==i.step?((0,r.openBlock)(),(0,r.createBlock)(p,{key:1,user:e.$page.props.auth.user,regions:o.regions,countries:o.countries,onPrevious:t[2]||(t[2]=function(e){return i.step--}),onNext:t[3]||(t[3]=function(e){return i.step++})},null,8,["user","regions","countries"])):3==i.step?((0,r.openBlock)(),(0,r.createBlock)(f,{key:2,user:e.$page.props.auth.user,onPrevious:t[4]||(t[4]=function(e){return i.step--}),onNext:t[5]||(t[5]=function(e){return i.step++})},null,8,["user"])):4==i.step?((0,r.openBlock)(),(0,r.createBlock)(v,{key:3,user:e.$page.props.auth.user,onPrevious:t[6]||(t[6]=function(e){return i.step--})},null,8,["user"])):(0,r.createCommentVNode)("",!0)]})),_:1})])])])}},kt=bt},1400:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(5166);const l={props:{type:{type:String,default:"submit"}},render:function(e,t,o,l,n,a){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md text-xs text-white hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},n=l},2233:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var r=o(5166),l={class:"px-6 py-4"},n={class:"text-lg"},a={class:"mt-4"},c={class:"px-6 py-4 bg-gray-100 text-right"};const s={components:{Modal:o(1317).Z},props:{show:{default:!1},maxWidth:{default:"xxl"},closeable:{default:!0}},setup:function(e,t){var o=t.emit;return{close:function(){o("close")}}},render:function(e,t,o,s,i,u){var d=(0,r.resolveComponent)("modal");return(0,r.openBlock)(),(0,r.createBlock)(d,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:s.close},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",l,[(0,r.createVNode)("div",n,[(0,r.renderSlot)(e.$slots,"title")]),(0,r.createVNode)("div",a,[(0,r.renderSlot)(e.$slots,"content")])]),(0,r.createVNode)("div",c,[(0,r.renderSlot)(e.$slots,"footer")])]})),_:3},8,["show","max-width","closeable","onClose"])}},i=s},9550:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(5166);const l={props:["modelValue","grouped"],setup:function(e,t){var o=t.emit,l=(0,r.computed)({get:function(){return e.modelValue},set:function(e){return o("update:modelValue",e)}}),n=(0,r.ref)(null);return{value:l,input:n,focus:function(){n.focus()}}},render:function(e,t,o,l,n,a){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("input",{class:[{border:!o.grouped},"form-input rounded-md shadow-sm"],"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.value=e}),ref:"input"},null,2)),[[r.vModelText,l.value]])}},n=l},5736:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166),l={class:"text-sm text-red-600"};const n={props:["message"],render:function(e,t,o,n,a,c){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("p",l,(0,r.toDisplayString)(o.message),1)],512)),[[r.vShow,o.message]])}},a=n},6556:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166),l={class:"block font-medium text-sm text-gray-700"},n={key:0},a={key:1};const c={props:["value"],render:function(e,t,o,c,s,i){return(0,r.openBlock)(),(0,r.createBlock)("label",l,[o.value?((0,r.openBlock)(),(0,r.createBlock)("span",n,(0,r.toDisplayString)(o.value),1)):((0,r.openBlock)(),(0,r.createBlock)("span",a,[(0,r.renderSlot)(e.$slots,"default")]))])}},s=c},1317:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166),l={class:"fixed inset-x-0 top-0 z-20 h-full max-h-screen px-4 py-4 sm:px-0 sm:flex sm:items-top sm:justify-center"},n=(0,r.createVNode)("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),a={class:"overflow-hidden bg-white rounded-lg shadow-xl"};const c={props:{show:{default:!1},maxWidth:{default:"xxl"},closeable:{default:!0}},setup:function(e,t){var o=t.emit,l=function(){e.closeable&&o("close")};(0,r.watchEffect)((function(){e.show?document.body.style.overflow="hidden":document.body.style.overflow=null})),(0,r.onMounted)((function(){document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.show&&l()}))}));var n=(0,r.computed)((function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl",xxl:"sm:max-w-2xl",fit:"px-2"}[e.maxWidth]}));return{close:l,maxWidthClass:n}},render:function(e,t,o,c,s,i){return(0,r.openBlock)(),(0,r.createBlock)(r.Transition,{"leave-active-class":"duration-200"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",l,[(0,r.createVNode)(r.Transition,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",{class:"fixed inset-0 transition-all transform",onClick:t[1]||(t[1]=function(){return c.close&&c.close.apply(c,arguments)})},[n],512),[[r.vShow,o.show]])]})),_:1}),(0,r.createVNode)(r.Transition,{"enter-active-class":"duration-300 ease-out","enter-from-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95","enter-to-class":"translate-y-0 opacity-100 sm:scale-100","leave-active-class":"duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100 sm:scale-100","leave-to-class":"translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"},{default:(0,r.withCtx)((function(){return[(0,r.withDirectives)((0,r.createVNode)("div",{class:["h-full overflow-y-auto transition-all transform sm:w-full scrolling-area",c.maxWidthClass]},[(0,r.createVNode)("div",a,[(0,r.renderSlot)(e.$slots,"default")])],2),[[r.vShow,o.show]])]})),_:3})],512),[[r.vShow,o.show]])]})),_:1})}},s=c},3768:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(5166);const l={props:{type:{type:String,default:"button"}},render:function(e,t,o,l,n,a){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-xs text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},n=l},1921:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(5166);const l={props:["modelValue"],setup:function(e,t){var o=t.emit,l=(0,r.computed)({get:function(){return e.modelValue},set:function(e){return o("update:modelValue",e)}}),n=(0,r.ref)(null);return{value:l,input:n,focus:function(){n.focus()}}},render:function(e,t,o,l,n,a){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("select",{class:"form-select border rounded-md shadow-sm","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.value=e}),ref:"select"},[(0,r.renderSlot)(e.$slots,"default")],512)),[[r.vModelSelect,l.value]])}},n=l},2354:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var r=o(5166);const l={props:["modelValue"],setup:function(e,t){var o=t.emit,l=(0,r.computed)({get:function(){return e.modelValue},set:function(e){return o("update:modelValue",e)}}),n=(0,r.ref)(null);return{value:l,input:n,focus:function(){n.focus()}}},render:function(e,t,o,l,n,a){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("textarea",{class:"form-textarea border rounded-md shadow-sm",rows:"3","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.value=e}),ref:"textarea"},null,512)),[[r.vModelText,l.value]])}},n=l}}]);