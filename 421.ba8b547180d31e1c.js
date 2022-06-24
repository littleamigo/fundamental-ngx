"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[421],{36854:(c,h,t)=>{t.d(h,{h:()=>M});var l=t(74042),n=(t(77135),t(5e3)),f=t(8674),s=t(69808),_=t(87757),p=t(63043),v=t(50578),x=t(27078),P=t(42437),b=t(24919);const k=["menu"];function E(e,C){if(1&e&&n._UZ(0,"button",8),2&e){const d=n.oxw(),u=n.MAs(6);n.Q6J("label","Select a file ("+d.files.length+")")("fdMenu",!0)("fdMenuTrigger",u)}}function A(e,C){if(1&e){const d=n.EpF();n.TgZ(0,"li",9),n.NdJ("click",function(){const Z=n.CHM(d).$implicit;return n.oxw().getFile(Z)}),n.TgZ(1,"div",10)(2,"span",11),n._uU(3),n.qZA()()()}if(2&e){const d=C.$implicit,u=n.oxw();n.ekj("is-selected",d===u.activeFile),n.xp6(3),n.Oqu(d)}}let M=(()=>{class e{constructor(d,u){this.route=d,this.apiService=u}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(d){this.apiService.getComponentHtml(d).subscribe(u=>{this.result=u,this.activeFile=d,this.menu.close()},u=>{console.warn("Did not find file "+d+".\nError: "+u)})}}return e.\u0275fac=function(d){return new(d||e)(n.Y36(f.gz),n.Y36(l.S))},e.\u0275cmp=n.Xpm({type:e,selectors:[["fd-api"]],viewQuery:function(d,u){if(1&d&&n.Gf(k,5),2&d){let g;n.iGM(g=n.CRH())&&(u.menu=g.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(d,u){1&d&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2),n.qZA(),n._UZ(3,"span",2),n.YNc(4,E,1,3,"button",3),n.TgZ(5,"fd-menu",4,5),n.YNc(7,A,4,3,"li",6),n.qZA()(),n._UZ(8,"div",7)),2&d&&(n.xp6(2),n.Oqu(u.activeFile),n.xp6(2),n.Q6J("ngIf",u.files.length>1),n.xp6(1),n.Q6J("fillControlMode",null),n.xp6(2),n.Q6J("ngForOf",u.files),n.xp6(1),n.Q6J("innerHTML",u.result,n.oJD))},directives:[s.O5,_.r,p.k,v.M,s.sg,x.qv,P.K,b.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),e})()},63710:(c,h,t)=>{t.d(h,{c:()=>x});var l=t(5e3),o=t(17791),n=t(66997),f=t(8674),s=t(1726),_=t(55124),p=t(33089);const v=function(){return{exact:!0}};let x=(()=>{class P{}return P.\u0275fac=function(k){return new(k||P)},P.\u0275cmp=l.Xpm({type:P,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(k,E){if(1&k&&(l.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),l._uU(5,"Examples"),l.qZA()()(),l.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),l._uU(10,"API"),l.qZA()()()(),l._UZ(11,"separator",7)),2&k){const A=l.MAs(3),M=l.MAs(8);l.xp6(2),l.Q6J("active",A.isActive)("routerLinkActiveOptions",l.DdM(3,v)),l.xp6(5),l.Q6J("active",M.isActive)}},directives:[o.d,n.w,f.yS,s.w,f.Od,_.P6,p.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),P})()},24882:(c,h,t)=>{t.d(h,{G:()=>n});var l=t(5e3);const o=["*"];let n=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275cmp=l.Xpm({type:f,selectors:[["header"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"header"]],template:function(_,p){1&_&&(l.F$t(),l.TgZ(0,"h1",0),l.Hsn(1),l.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"]}),f})()},98791:(c,h,t)=>{t.d(h,{k:()=>f});var l=t(59148),o=t(5e3),n=t(8566);let f=(()=>{class s{constructor(p){this.currentLib=p}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const p=["@fundamental-ngx",this.currentLib];this.subPackage&&p.push(this.subPackage),this.library=p.join("/")}}return s.\u0275fac=function(p){return new(p||s)(o.Y36(l.b))},s.\u0275cmp=o.Xpm({type:s,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(p,v){1&p&&o._UZ(0,"fd-code-snippet",0),2&p&&o.Q6J("file",v.file)},directives:[n.N],encapsulation:2,changeDetection:0}),s})()},74042:(c,h,t)=>{t.d(h,{S:()=>f});var l=t(59148),o=t(5e3),n=t(40520);let f=(()=>{class s{constructor(p,v){this.httpClient=p,this.currentLib=v,this.BASE_URL="assets/typedoc/"}getComponentHtml(p){p=p.toLocaleLowerCase()+".html";const v=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",p);return this.httpClient.get(v,{responseType:"text"})}buildUrl(...p){return p.join("/").replace(/\/+/g,"/")}}return s.\u0275fac=function(p){return new(p||s)(o.LFG(n.eN),o.LFG(l.b))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})()},28674:(c,h,t)=>{t.d(h,{g:()=>u});var l=t(69808),o=t(8674),n=t(52382),f=t(62970),s=t(53732),_=t(74042),p=t(32818),v=t(30825),x=t(90523),P=t(80848),b=t(83271),k=t(77135),E=t(89282),A=t(95037),M=t(46394),e=t(75394);const C=[M.P4,k.$9,P.Q,A.o,v.hJ,E.H,x.nY,b.LO,e.s];var d=t(5e3);let u=(()=>{class g{}return g.\u0275fac=function(U){return new(U||g)},g.\u0275mod=d.oAB({type:g}),g.\u0275inj=d.cJS({providers:[s.t,_.S],imports:[[n.u5,l.ez,o.Bz,p.f,C,f.JP.forChild()],n.u5,n.UX,p.f,l.ez,M.P4,k.$9,P.Q,A.o,v.hJ,E.H,x.nY,b.LO,e.s]}),g})()},10421:(c,h,t)=>{t.r(h),t.d(h,{PlatformDatetimePickerDocsModule:()=>ne});var l=t(8674),o=t(95790),n=t(84769),f=t(36854),s=t(28674),_=t(45665),p=t(16889),v=t(35675),x=t(82154),P=t(13506),b=t(31259),k=t(50118),E=t(47262),A=t(50479),M=t(47890),e=t(5e3),C=t(93943),d=t(44969),u=t(28595),g=t(8084),Z=t(87757);let U=(()=>{class a{constructor(){this.date1=new o._U(2020,11,27,14,30),this.date2=o._U.getToday()}changeDay(){this.date1=new o._U(2018,10,10,21,35)}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-datetime-picker-basic-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:29,vars:5,consts:[["for","simple"],["name","simple","placeholder","MM/dd/YYYY, hh:mm"],["for","withAllowNull"],["name","withAllowNull","placeholder","Enter a date mandatorily",3,"allowNull"],["for","compactDatetime"],["name","compactDatetime","contentDensity","compact","placeholder","Compact datetime picker",3,"value"],["fd-button","","name","changeBtn",3,"click"],["for","disabledDatetime"],["name","disabledDatetime",3,"disabled","value"],["for","placementDatetime"],["name","placementDatetime","placement","bottom-end","placeholder","MM/dd/YYYY, hh:mm",3,"value"]],template:function(i,m){1&i&&(e.TgZ(0,"label",0),e._uU(1,"Simple datetime picker:"),e.qZA(),e._UZ(2,"br")(3,"fdp-datetime-picker",1)(4,"br"),e.TgZ(5,"label",2),e._uU(6,"With allowNull not enabled to disallow input from taking null value:"),e.qZA(),e._UZ(7,"br")(8,"fdp-datetime-picker",3)(9,"br"),e.TgZ(10,"label",4),e._uU(11,"Compact datetime picker. Click on the button to change the date:"),e.qZA(),e._UZ(12,"br")(13,"fdp-datetime-picker",5)(14,"br"),e.TgZ(15,"button",6),e.NdJ("click",function(){return m.changeDay()}),e._uU(16,"Change datetime value"),e.qZA(),e._UZ(17,"br")(18,"br"),e.TgZ(19,"label",7),e._uU(20,"Disabled datetime picker:"),e.qZA(),e._UZ(21,"br")(22,"fdp-datetime-picker",8)(23,"br"),e.TgZ(24,"label",9),e._uU(25,"Placement for datetime picker:"),e.qZA(),e._UZ(26,"br")(27,"fdp-datetime-picker",10)(28,"br")),2&i&&(e.xp6(8),e.Q6J("allowNull",!1),e.xp6(5),e.Q6J("value",m.date1),e.xp6(9),e.Q6J("disabled",!0)("value",m.date2),e.xp6(5),e.Q6J("value",m.date2))},directives:[g.Z,Z.r],encapsulation:2,changeDetection:0}),a})();var L=t(29871),I=t(33089),D=t(52382),y=t(59458),S=t(36325),O=t(69808);function N(a,r){1&a&&(e.TgZ(0,"span",15),e._uU(1,"Value is required"),e.qZA())}function Y(a,r){1&a&&(e.TgZ(0,"span",15),e._uU(1,"Date is invalid"),e.qZA())}function B(a,r){if(1&a&&(e.YNc(0,N,2,0,"span",14),e.YNc(1,Y,2,0,"span",14)),2&a){const i=r.$implicit;e.Q6J("ngIf",i.required),e.xp6(1),e.Q6J("ngIf",i.dateValidation)}}function R(a,r){if(1&a&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.hij("form value: ",i.stringValue,"")}}let J=(()=>{class a{constructor(){this.datetimePickerForm=new D.cw({}),this.formData=new w(new o._U(2008,2,11,21,15)),this.requiredDateValidator=[D.kI.required]}onSubmit(){this.datetimePickerForm.markAllAsTouched(),this.datetimePickerForm.valid?this.stringValue=JSON.stringify(this.datetimePickerForm.value):(this.stringValue="",alert("Form invalid"))}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-datetime-picker-reactive-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:18,vars:16,consts:[["mainTitle","Datetime Picker with XL3-L1-M1-S1 form layout","columnLayout","XL3-L1-M1-S1",3,"formGroup","object","onSubmit"],["ffg",""],["id","simple","placeholder","MM/dd/YYYY, hh:mm","label","Date:",3,"column","required","validators"],["ffl1",""],["name","simple",3,"formControl"],["id","withAllowNull","label","With allowNull not enabled to disallow input from taking null value:",3,"required","column"],["ffl2",""],["name","withAllowNull","placeholder","Enter a date mandatorily",3,"allowNull","formControl"],["id","storedDate","label","Passing datetime through form object:",3,"column","required"],["ffl3",""],["name","storedDate","placeholder","Pre-filled datetime",3,"formControl","allowNull"],["i18n",""],["fd-button","","name","submitBtn",3,"click"],[4,"ngIf"],["role","alert","aria-atomic","true",4,"ngIf"],["role","alert","aria-atomic","true"]],template:function(i,m){if(1&i&&(e.TgZ(0,"fdp-form-group",0,1),e.NdJ("onSubmit",function(){return m.onSubmit()}),e.TgZ(2,"fdp-form-field",2,3),e._UZ(4,"fdp-datetime-picker",4),e.qZA(),e.TgZ(5,"fdp-form-field",5,6),e._UZ(7,"fdp-datetime-picker",7),e.qZA(),e.TgZ(8,"fdp-form-field",8,9),e._UZ(10,"fdp-datetime-picker",10),e.qZA(),e.YNc(11,B,2,2,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(13,"button",12),e.NdJ("click",function(){return m.onSubmit()}),e._uU(14,"Submit"),e.qZA(),e.TgZ(15,"div"),e._uU(16),e.qZA(),e.YNc(17,R,2,1,"div",13)),2&i){const T=e.MAs(3),F=e.MAs(6),ie=e.MAs(9);e.Q6J("formGroup",m.datetimePickerForm)("object",m.formData),e.xp6(2),e.Q6J("column",1)("required",!0)("validators",m.requiredDateValidator),e.xp6(2),e.Q6J("formControl",T.formControl),e.xp6(1),e.Q6J("required",!0)("column",2),e.xp6(2),e.Q6J("allowNull",!1)("formControl",F.formControl),e.xp6(1),e.Q6J("column",3)("required",!0),e.xp6(2),e.Q6J("formControl",ie.formControl)("allowNull",!1),e.xp6(6),e.hij("form valid: ",null==m.datetimePickerForm?null:m.datetimePickerForm.valid,""),e.xp6(1),e.Q6J("ngIf",m.stringValue)}},directives:[y.H,D.JL,D.sg,S.h,g.Z,D.JJ,D.oH,O.O5,Z.r],encapsulation:2,changeDetection:0}),a})();class w{constructor(r){this.storedDate=r}}function V(a,r){1&a&&(e.TgZ(0,"span",6),e._uU(1,"Value is required"),e.qZA())}function Q(a,r){1&a&&(e.TgZ(0,"span",6),e._uU(1,"Date is invalid"),e.qZA())}function W(a,r){if(1&a&&(e.YNc(0,V,2,0,"span",5),e.YNc(1,Q,2,0,"span",5)),2&a){const i=r.$implicit;e.Q6J("ngIf",i.required),e.xp6(1),e.Q6J("ngIf",i.dateValidation)}}let H=(()=>{class a{constructor(){this.date=o._U.getNow()}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-datetime-picker-template-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:8,vars:4,consts:[["mainTitle","Datetime Picker with XL2-L2-M1-S1 form layout","columnLayout","XL2-L2-M1-S1"],["fdpForm",""],["id","simple","placeholder","Enter a date","label","Date:",3,"column","required"],["name","simple",3,"ngModel","ngModelChange"],["i18n",""],["role","alert","aria-atomic","true",4,"ngIf"],["role","alert","aria-atomic","true"]],template:function(i,m){if(1&i&&(e.TgZ(0,"fdp-form-group",0,1)(2,"fdp-form-field",2)(3,"fdp-datetime-picker",3),e.NdJ("ngModelChange",function(F){return m.date=F}),e.qZA()(),e.YNc(4,W,2,2,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.qZA()),2&i){const T=e.MAs(1);e.xp6(2),e.Q6J("column",1)("required",!0),e.xp6(1),e.Q6J("ngModel",m.date),e.xp6(4),e.hij("form valid: ",null==T||null==T.formGroup?null:T.formGroup.valid,"")}},directives:[y.H,S.h,g.Z,D.JJ,D.On,O.O5],encapsulation:2,changeDetection:0}),a})();function K(a,r){1&a&&(e.TgZ(0,"span"),e._uU(1," Value is required "),e.qZA())}function q(a,r){1&a&&e.YNc(0,K,2,0,"span",8),2&a&&e.Q6J("ngIf",r.$implicit.required)}let X=(()=>{class a{constructor(){this.datetimePickerForm=new D.cw({}),this.requiredDateValidator=[D.kI.required],this.date=o._U.getNow(),this.disableFunction=i=>o._U.getToday().getTimeStamp()>i.getTimeStamp()}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-datetime-picker-disable-function-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:9,vars:9,consts:[["mainTitle","Datetime Picker with XL2-L2-M1-S1 form layout","columnLayout","XL2-L2-M1-S1",3,"formGroup"],["ffg",""],["id","simple","label","Date:",3,"column","required","validators"],["ffl1",""],["name","simple","placeholder","MM/dd/YYYY, hh:mm",3,"formControl","disableFunction"],["id","disabledDatetime","label","Disabled Datetime Picker:",3,"column"],["name","disabledDatetime",3,"disabled","value"],["i18n",""],[4,"ngIf"]],template:function(i,m){if(1&i&&(e.TgZ(0,"fdp-form-group",0,1)(2,"fdp-form-field",2,3),e._UZ(4,"fdp-datetime-picker",4),e.qZA(),e.TgZ(5,"fdp-form-field",5),e._UZ(6,"fdp-datetime-picker",6),e.qZA(),e.YNc(7,q,1,1,"ng-template",null,7,e.W1O),e.qZA()),2&i){const T=e.MAs(3);e.Q6J("formGroup",m.datetimePickerForm),e.xp6(2),e.Q6J("column",1)("required",!0)("validators",m.requiredDateValidator),e.xp6(2),e.Q6J("formControl",T.formControl)("disableFunction",m.disableFunction),e.xp6(1),e.Q6J("column",2),e.xp6(1),e.Q6J("disabled",!0)("value",m.date)}},directives:[y.H,D.JL,D.sg,S.h,g.Z,D.JJ,D.oH,O.O5],encapsulation:2,changeDetection:0}),a})(),G=(()=>{class a{constructor(){this.date=new o._U(2020,11,27,14,30)}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["fdp-platform-datetime-picker-update-on-blur-example"]],features:[e._Bn([{provide:o.ed,useClass:o.CP},{provide:o.eZ,useValue:o.hx}])],decls:7,vars:6,consts:[["for","update-on-blur"],["name","update-on-blur","placeholder","MM/dd/YYYY, hh:mm aa",3,"ngModel","processInputOnBlur","ngModelChange"]],template:function(i,m){1&i&&(e.TgZ(0,"label",0),e._uU(1,"Datetime picker:"),e.qZA(),e.TgZ(2,"fdp-datetime-picker",1),e.NdJ("ngModelChange",function(F){return m.date=F}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"div"),e._uU(5),e.ALo(6,"date"),e.qZA()),2&i&&(e.xp6(2),e.Q6J("ngModel",m.date)("processInputOnBlur",!0),e.xp6(3),e.hij("Selected Date: ",e.xi3(6,3,m.date.toDate(),"MM/dd/YYYY, hh:mm aa"),""))},directives:[g.Z,D.JJ,D.On],pipes:[O.uU],encapsulation:2,changeDetection:0}),a})(),j=(()=>{class a{constructor(){this.datetimePickerBasic=[{language:"html",code:p,fileName:"platform-datetime-picker-basic-example"},{language:"typescript",code:v,fileName:"platform-datetime-picker-basic-example",component:"PlatformDatetimePickerBasicExampleComponent"}],this.datetimePickerReactive=[{language:"html",code:b,fileName:"platform-datetime-picker-reactive-example"},{language:"typescript",code:k,fileName:"platform-datetime-picker-reactive-example",component:"PlatformDatetimePickerReactiveExampleComponent"}],this.datetimePickerTemplate=[{language:"html",code:E,fileName:"platform-datetime-picker-template-example"},{language:"typescript",code:A,fileName:"platform-datetime-picker-template-example",component:"PlatformDatetimePickerTemplateExampleComponent"}],this.datetimePickerDisableFunction=[{language:"html",code:x,fileName:"platform-datetime-picker-disable-function-example"},{language:"typescript",code:P,fileName:"platform-datetime-picker-disable-function-example",component:"PlatformDatetimePickerDisableFunctionExampleComponent"}],this.dateTimePickerUpdateOnBlur=[{language:"typescript",code:M,fileName:"platform-datetime-picker-update-on-blur-example",component:"PlatformDatetimePickerUpdateOnBlurExampleComponent"}]}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-datetime-picker"]],decls:52,vars:5,consts:[["id","basic","componentName","datetime-picker"],[3,"exampleFiles"],["id","reactive","componentName","datetime-picker"],["id","template","componentName","datetime-picker"],["id","disable-function","componentName","datetime-picker"],["id","update-on-blur","componentName","datetime-picker"]],template:function(i,m){1&i&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1,"Basic Datetime Picker"),e.qZA(),e.TgZ(2,"description"),e._uU(3," Basic usage of Datetime Picker without Forms and with options like "),e.TgZ(4,"code"),e._uU(5,"meridian"),e.qZA(),e._uU(6,", "),e.TgZ(7,"code"),e._uU(8,"allowNull"),e.qZA(),e._uU(9,", "),e.TgZ(10,"code"),e._uU(11,"disabled"),e.qZA(),e._uU(12,", pre-populating and changing dates."),e.qZA(),e.TgZ(13,"component-example"),e._UZ(14,"fdp-platform-datetime-picker-basic-example"),e.qZA(),e._UZ(15,"code-example",1)(16,"separator"),e.TgZ(17,"fd-docs-section-title",2),e._uU(18,"Datetime Picker with Reactive Forms"),e.qZA(),e.TgZ(19,"description"),e._uU(20," Usage of Datetime Picker with Platform Forms using Reactive Forms. When used with Platform Forms, the Datetime Picker will take 100% of its parent container width depending on the chosen column layout.\n"),e.qZA(),e.TgZ(21,"component-example"),e._UZ(22,"fdp-platform-datetime-picker-reactive-example"),e.qZA(),e._UZ(23,"code-example",1)(24,"separator"),e.TgZ(25,"fd-docs-section-title",3),e._uU(26,"Datetime Picker with Template Forms"),e.qZA(),e.TgZ(27,"description"),e._uU(28,"Usage of Datetime Picker with Platform Forms using Template Forms."),e.qZA(),e.TgZ(29,"component-example"),e._UZ(30,"fdp-platform-datetime-picker-template-example"),e.qZA(),e._UZ(31,"code-example",1)(32,"separator"),e.TgZ(33,"fd-docs-section-title",4),e._uU(34,"Datetime Picker with "),e.TgZ(35,"code"),e._uU(36,"[disableFunction]"),e.qZA()(),e._UZ(37,"description"),e.TgZ(38,"component-example"),e._UZ(39,"fdp-platform-datetime-picker-disable-function-example"),e.qZA(),e._UZ(40,"code-example",1)(41,"separator"),e.TgZ(42,"fd-docs-section-title",5),e._uU(43," Date Time picker that updates it's value on blur.\n"),e.qZA(),e.TgZ(44,"description"),e._uU(45," Set "),e.TgZ(46,"code"),e._uU(47,'[processInputOnBlur]="true"'),e.qZA(),e._uU(48,' in order to move the processing of input value to whenever component loses focus. You may also hit "enter" to apply the value\n'),e.qZA(),e.TgZ(49,"component-example"),e._UZ(50,"fdp-platform-datetime-picker-update-on-blur-example"),e.qZA(),e._UZ(51,"code-example",1)),2&i&&(e.xp6(15),e.Q6J("exampleFiles",m.datetimePickerBasic),e.xp6(8),e.Q6J("exampleFiles",m.datetimePickerReactive),e.xp6(8),e.Q6J("exampleFiles",m.datetimePickerTemplate),e.xp6(9),e.Q6J("exampleFiles",m.datetimePickerDisableFunction),e.xp6(11),e.Q6J("exampleFiles",m.dateTimePickerUpdateOnBlur))},directives:[C.k,d.w,u.O,U,L.E,I.N,J,H,X,G],encapsulation:2}),a})();var $=t(24882),z=t(8304),ee=t(98791),te=t(63710);const ae=[{path:"",component:(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-datetime-picker-header"]],decls:16,vars:0,consts:[["routerLink","/core/datetime-picker"],["componentName","Platform Date Time Picker"],["module","PlatformDatetimePickerModule","subPackage","form"]],template:function(i,m){1&i&&(e.TgZ(0,"header"),e._uU(1,"Datetime Picker"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," This is an extension of the DatetimePicker component present in "),e.TgZ(5,"a",0),e._uU(6,"fundamental-ngx/core"),e.qZA(),e._uU(7,". "),e.qZA(),e.TgZ(8,"h3"),e._uU(9,"Platform specific enhancements:"),e.qZA(),e.TgZ(10,"p"),e._uU(11," Platform DatetimePicker component implements the FormFieldControl interface, and thus can be used within the FormField component. "),e.qZA(),e._UZ(12,"fd-datetime-important",1),e.qZA(),e._UZ(13,"import",2)(14,"fd-header-tabs")(15,"router-outlet"))},directives:[$.G,d.w,l.yS,z.M,ee.k,te.c,l.lC],encapsulation:2}),a})(),children:[{path:"",component:j},{path:"api",component:f.h,data:{content:_.X.datetimePicker}}]}];let ne=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[l.Bz.forChild(ae),s.g,o.Yp,n.o8,n.Mk],l.Bz]}),a})()},16889:c=>{c.exports='<label for="simple">Simple datetime picker:</label>\n<br />\n<fdp-datetime-picker name="simple" placeholder="MM/dd/YYYY, hh:mm"></fdp-datetime-picker>\n<br />\n<label for="withAllowNull">With allowNull not enabled to disallow input from taking null value:</label>\n<br />\n<fdp-datetime-picker name="withAllowNull" [allowNull]="false" placeholder="Enter a date mandatorily">\n</fdp-datetime-picker>\n<br />\n<label for="compactDatetime">Compact datetime picker. Click on the button to change the date:</label>\n<br />\n<fdp-datetime-picker\n    name="compactDatetime"\n    contentDensity="compact"\n    [value]="date1"\n    placeholder="Compact datetime picker"\n>\n</fdp-datetime-picker>\n<br />\n<button fd-button name="changeBtn" (click)="changeDay()">Change datetime value</button>\n<br />\n<br />\n<label for="disabledDatetime">Disabled datetime picker:</label>\n<br />\n<fdp-datetime-picker name="disabledDatetime" [disabled]="true" [value]="date2"> </fdp-datetime-picker>\n<br />\n<label for="placementDatetime">Placement for datetime picker:</label>\n<br />\n<fdp-datetime-picker name="placementDatetime" placement="bottom-end" [value]="date2" placeholder="MM/dd/YYYY, hh:mm">\n</fdp-datetime-picker>\n<br />\n'},35675:c=>{c.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-basic-example',\n    templateUrl: './platform-datetime-picker-basic-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerBasicExampleComponent {\n    date1: FdDate = new FdDate(2020, 11, 27, 14, 30);\n\n    date2: FdDate = FdDate.getToday();\n\n    changeDay(): void {\n        this.date1 = new FdDate(2018, 10, 10, 21, 35);\n    }\n}\n"},82154:c=>{c.exports='<fdp-form-group\n    #ffg\n    [formGroup]="datetimePickerForm"\n    mainTitle="Datetime Picker with XL2-L2-M1-S1 form layout"\n    columnLayout="XL2-L2-M1-S1"\n>\n    <fdp-form-field #ffl1 id="simple" [column]="1" [required]="true" [validators]="requiredDateValidator" label="Date:">\n        <fdp-datetime-picker\n            name="simple"\n            [formControl]="ffl1.formControl"\n            [disableFunction]="disableFunction"\n            placeholder="MM/dd/YYYY, hh:mm"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="disabledDatetime" [column]="2" label="Disabled Datetime Picker:">\n        <fdp-datetime-picker name="disabledDatetime" [disabled]="true" [value]="date"> </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required"> Value is required </span>\n    </ng-template>\n</fdp-form-group>\n'},13506:c=>{c.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-disable-function-example',\n    templateUrl: './platform-datetime-picker-disable-function-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerDisableFunctionExampleComponent {\n    datetimePickerForm = new FormGroup({});\n\n    requiredDateValidator: ValidatorFn[] = [Validators.required];\n\n    date = FdDate.getNow();\n\n    disableFunction = (fdDate: FdDate): boolean => FdDate.getToday().getTimeStamp() > fdDate.getTimeStamp();\n}\n"},31259:c=>{c.exports='<fdp-form-group\n    #ffg\n    [formGroup]="datetimePickerForm"\n    [object]="formData"\n    (onSubmit)="onSubmit()"\n    mainTitle="Datetime Picker with XL3-L1-M1-S1 form layout"\n    columnLayout="XL3-L1-M1-S1"\n>\n    <fdp-form-field\n        #ffl1\n        id="simple"\n        [column]="1"\n        [required]="true"\n        [validators]="requiredDateValidator"\n        placeholder="MM/dd/YYYY, hh:mm"\n        label="Date:"\n    >\n        <fdp-datetime-picker name="simple" [formControl]="ffl1.formControl"></fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl2\n        id="withAllowNull"\n        [required]="true"\n        [column]="2"\n        label="With allowNull not enabled to disallow input from taking null value:"\n    >\n        <fdp-datetime-picker\n            name="withAllowNull"\n            [allowNull]="false"\n            placeholder="Enter a date mandatorily"\n            [formControl]="ffl2.formControl"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <fdp-form-field #ffl3 id="storedDate" [column]="3" [required]="true" label="Passing datetime through form object:">\n        <fdp-datetime-picker\n            name="storedDate"\n            placeholder="Pre-filled datetime"\n            [formControl]="ffl3.formControl"\n            [allowNull]="false"\n        >\n        </fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required" role="alert" aria-atomic="true">Value is required</span>\n        <span *ngIf="errors.dateValidation" role="alert" aria-atomic="true">Date is invalid</span>\n    </ng-template>\n</fdp-form-group>\n\n<button fd-button name="submitBtn" (click)="onSubmit()">Submit</button>\n<div>form valid: {{ datetimePickerForm?.valid }}</div>\n\n<div *ngIf="stringValue">form value: {{ stringValue }}</div>\n'},50118:c=>{c.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-reactive-example',\n    templateUrl: './platform-datetime-picker-reactive-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerReactiveExampleComponent {\n    datetimePickerForm = new FormGroup({});\n\n    stringValue: string;\n\n    formData = new StoredDatetimeObject(new FdDate(2008, 2, 11, 21, 15));\n\n    requiredDateValidator: ValidatorFn[] = [Validators.required];\n\n    onSubmit(): void {\n        this.datetimePickerForm.markAllAsTouched();\n        if (this.datetimePickerForm.valid) {\n            this.stringValue = JSON.stringify(this.datetimePickerForm.value);\n        } else {\n            this.stringValue = '';\n            alert('Form invalid');\n        }\n    }\n}\n\nclass StoredDatetimeObject {\n    constructor(public storedDate: FdDate) {}\n}\n"},47262:c=>{c.exports='<fdp-form-group #fdpForm mainTitle="Datetime Picker with XL2-L2-M1-S1 form layout" columnLayout="XL2-L2-M1-S1">\n    <fdp-form-field id="simple" [column]="1" [required]="true" placeholder="Enter a date" label="Date:">\n        <fdp-datetime-picker name="simple" [(ngModel)]="date"></fdp-datetime-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required" role="alert" aria-atomic="true">Value is required</span>\n        <span *ngIf="errors.dateValidation" role="alert" aria-atomic="true">Date is invalid</span>\n    </ng-template>\n</fdp-form-group>\n\n<div>form valid: {{ fdpForm?.formGroup?.valid }}</div>\n'},50479:c=>{c.exports="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-datetime-picker-template-example',\n    templateUrl: './platform-datetime-picker-template-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerTemplateExampleComponent {\n    date: FdDate = FdDate.getNow();\n}\n"},47890:c=>{c.exports='import { ChangeDetectionStrategy, Component } from \'@angular/core\';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from \'@fundamental-ngx/core/datetime\';\n\n@Component({\n    selector: \'fdp-platform-datetime-picker-update-on-blur-example\',\n    template: `<label for="update-on-blur">Datetime picker:</label>\n        <fdp-datetime-picker\n            name="update-on-blur"\n            placeholder="MM/dd/YYYY, hh:mm aa"\n            [(ngModel)]="date"\n            [processInputOnBlur]="true"\n        ></fdp-datetime-picker>\n        <br />\n        <div>Selected Date: {{ date.toDate() | date: \'MM/dd/YYYY, hh:mm aa\' }}</div> `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatetimePickerUpdateOnBlurExampleComponent {\n    date = new FdDate(2020, 11, 27, 14, 30);\n}\n'}}]);