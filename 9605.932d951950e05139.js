"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9605],{36854:(s,v,t)=>{t.d(v,{h:()=>e});var o=t(74042),a=(t(77135),t(5e3)),f=t(8674),l=t(69808),c=t(87757),r=t(63043),x=t(50578),E=t(27078),h=t(42437),I=t(24919);const C=["menu"];function P(_,A){if(1&_&&a._UZ(0,"button",8),2&_){const m=a.oxw(),d=a.MAs(6);a.Q6J("label","Select a file ("+m.files.length+")")("fdMenu",!0)("fdMenuTrigger",d)}}function Z(_,A){if(1&_){const m=a.EpF();a.TgZ(0,"li",9),a.NdJ("click",function(){const T=a.CHM(m).$implicit;return a.oxw().getFile(T)}),a.TgZ(1,"div",10)(2,"span",11),a._uU(3),a.qZA()()()}if(2&_){const m=A.$implicit,d=a.oxw();a.ekj("is-selected",m===d.activeFile),a.xp6(3),a.Oqu(m)}}let e=(()=>{class _{constructor(m,d){this.route=m,this.apiService=d}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(m){this.apiService.getComponentHtml(m).subscribe(d=>{this.result=d,this.activeFile=m,this.menu.close()},d=>{console.warn("Did not find file "+m+".\nError: "+d)})}}return _.\u0275fac=function(m){return new(m||_)(a.Y36(f.gz),a.Y36(o.S))},_.\u0275cmp=a.Xpm({type:_,selectors:[["fd-api"]],viewQuery:function(m,d){if(1&m&&a.Gf(C,5),2&m){let b;a.iGM(b=a.CRH())&&(d.menu=b.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(m,d){1&m&&(a.TgZ(0,"div",0)(1,"h2",1),a._uU(2),a.qZA(),a._UZ(3,"span",2),a.YNc(4,P,1,3,"button",3),a.TgZ(5,"fd-menu",4,5),a.YNc(7,Z,4,3,"li",6),a.qZA()(),a._UZ(8,"div",7)),2&m&&(a.xp6(2),a.Oqu(d.activeFile),a.xp6(2),a.Q6J("ngIf",d.files.length>1),a.xp6(1),a.Q6J("fillControlMode",null),a.xp6(2),a.Q6J("ngForOf",d.files),a.xp6(1),a.Q6J("innerHTML",d.result,a.oJD))},directives:[l.O5,c.r,r.k,x.M,l.sg,E.qv,h.K,I.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),_})()},63710:(s,v,t)=>{t.d(v,{c:()=>E});var o=t(5e3),g=t(17791),a=t(66997),f=t(8674),l=t(1726),c=t(55124),r=t(33089);const x=function(){return{exact:!0}};let E=(()=>{class h{}return h.\u0275fac=function(C){return new(C||h)},h.\u0275cmp=o.Xpm({type:h,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(C,P){if(1&C&&(o.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),o._uU(5,"Examples"),o.qZA()()(),o.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),o._uU(10,"API"),o.qZA()()()(),o._UZ(11,"separator",7)),2&C){const Z=o.MAs(3),e=o.MAs(8);o.xp6(2),o.Q6J("active",Z.isActive)("routerLinkActiveOptions",o.DdM(3,x)),o.xp6(5),o.Q6J("active",e.isActive)}},directives:[g.d,a.w,f.yS,l.w,f.Od,c.P6,r.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),h})()},24882:(s,v,t)=>{t.d(v,{G:()=>a});var o=t(5e3);const g=["*"];let a=(()=>{class f{}return f.\u0275fac=function(c){return new(c||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["header"]],ngContentSelectors:g,decls:2,vars:0,consts:[[1,"header"]],template:function(c,r){1&c&&(o.F$t(),o.TgZ(0,"h1",0),o.Hsn(1),o.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"]}),f})()},98791:(s,v,t)=>{t.d(v,{k:()=>f});var o=t(59148),g=t(5e3),a=t(8566);let f=(()=>{class l{constructor(r){this.currentLib=r}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const r=["@fundamental-ngx",this.currentLib];this.subPackage&&r.push(this.subPackage),this.library=r.join("/")}}return l.\u0275fac=function(r){return new(r||l)(g.Y36(o.b))},l.\u0275cmp=g.Xpm({type:l,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(r,x){1&r&&g._UZ(0,"fd-code-snippet",0),2&r&&g.Q6J("file",x.file)},directives:[a.N],encapsulation:2,changeDetection:0}),l})()},74042:(s,v,t)=>{t.d(v,{S:()=>f});var o=t(59148),g=t(5e3),a=t(40520);let f=(()=>{class l{constructor(r,x){this.httpClient=r,this.currentLib=x,this.BASE_URL="assets/typedoc/"}getComponentHtml(r){r=r.toLocaleLowerCase()+".html";const x=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",r);return this.httpClient.get(x,{responseType:"text"})}buildUrl(...r){return r.join("/").replace(/\/+/g,"/")}}return l.\u0275fac=function(r){return new(r||l)(g.LFG(a.eN),g.LFG(o.b))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac}),l})()},28674:(s,v,t)=>{t.d(v,{g:()=>d});var o=t(69808),g=t(8674),a=t(52382),f=t(62970),l=t(53732),c=t(74042),r=t(32818),x=t(30825),E=t(90523),h=t(80848),I=t(83271),C=t(77135),P=t(89282),Z=t(95037),e=t(46394),_=t(75394);const A=[e.P4,C.$9,h.Q,Z.o,x.hJ,P.H,E.nY,I.LO,_.s];var m=t(5e3);let d=(()=>{class b{}return b.\u0275fac=function(y){return new(y||b)},b.\u0275mod=m.oAB({type:b}),b.\u0275inj=m.cJS({providers:[l.t,c.S],imports:[[a.u5,o.ez,g.Bz,r.f,A,f.JP.forChild()],a.u5,a.UX,r.f,o.ez,e.P4,C.$9,h.Q,Z.o,x.hJ,P.H,E.nY,I.LO,_.s]}),b})()},29605:(s,v,t)=>{t.r(v),t.d(v,{PlatformStepInputDocsModule:()=>k});var o=t(8674),g=t(45665),a=t(36854),f=t(28674),l=t(84769),c=t(64834),r=t(29621),x=t(49003),E=t(55779),h=t(39025),I=t(66850),C=t(2644),P=t(89540),Z=t(96425),e=t(5e3),_=t(93943),A=t(44969),m=t(28595),d=t(68226),b=t(34270);let T=(()=>{class n{constructor(){this.stepInputAlign=l.q$,this.value=100}onValueChange(p){this.value=p.payload}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fdp-platform-number-step-input-example"]],decls:51,vars:29,consts:[[1,"step-input-example-container"],[1,"step-input-example"],["fd-form-label","","for","number"],["name","number",3,"id"],["fd-form-label","","for","compact"],["name","compact","contentDensity","compact",3,"id","value","valueChange"],["fd-form-label","","for","minMaxLimits"],["name","minMaxLimits",3,"id","value","min","max"],["fd-form-label","","for","precision"],["name","precision",3,"id","value","precision","step"],["fd-form-label","","for","stepNumberDisabled"],["name","stepNumberDisabled",3,"id","value","disabled"],["fd-form-label","","for","stepNumberReadOnly"],["name","stepNumberReadOnly",3,"id","value","editable"],["fd-form-label","","for","stepNumberDescription"],["name","stepNumberDescription","description","PC",3,"id","value"],["fd-form-label","","for","alignmentLeft"],["name","alignment",3,"id","align","value"],["fd-form-label","","for","alignmentCenter"],["fd-form-label","","for","alignmentRight"]],template:function(p,u){1&p&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Default Number Step Input"),e.qZA(),e._UZ(4,"fdp-number-step-input",3),e.qZA(),e.TgZ(5,"div",1)(6,"label",4),e._uU(7,"Compact"),e.qZA(),e.TgZ(8,"fdp-number-step-input",5),e.NdJ("valueChange",function(U){return u.onValueChange(U)}),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"small"),e._uU(11),e.qZA()(),e.TgZ(12,"div",1)(13,"label",6),e._uU(14,"Min Max limits "),e.TgZ(15,"small"),e._uU(16,"(min: -20, max: 20)"),e.qZA()(),e._UZ(17,"fdp-number-step-input",7),e.qZA()(),e.TgZ(18,"div",0)(19,"div",1)(20,"label",8),e._uU(21,"Precision"),e.qZA(),e._UZ(22,"fdp-number-step-input",9),e.qZA(),e.TgZ(23,"div",1)(24,"label",10),e._uU(25,"Disabled"),e.qZA(),e._UZ(26,"fdp-number-step-input",11),e.qZA(),e.TgZ(27,"div",1)(28,"label",12),e._uU(29,"Read Only"),e.qZA(),e._UZ(30,"fdp-number-step-input",13),e.qZA(),e.TgZ(31,"div",1)(32,"label",14),e._uU(33,"With description"),e.qZA(),e._UZ(34,"fdp-number-step-input",15),e.qZA()(),e.TgZ(35,"label"),e._uU(36,"Horizontal alignment in the input field"),e.qZA(),e._UZ(37,"br"),e.TgZ(38,"div",0)(39,"div",1)(40,"label",16),e._uU(41,"Left"),e.qZA(),e._UZ(42,"fdp-number-step-input",17),e.qZA(),e.TgZ(43,"div",1)(44,"label",18),e._uU(45,"Center"),e.qZA(),e._UZ(46,"fdp-number-step-input",17),e.qZA(),e.TgZ(47,"div",1)(48,"label",19),e._uU(49,"Right"),e.qZA(),e._UZ(50,"fdp-number-step-input",17),e.qZA()()),2&p&&(e.xp6(4),e.Q6J("id","number"),e.xp6(4),e.Q6J("id","compact")("value",u.value),e.xp6(3),e.hij("value: ",u.value,""),e.xp6(6),e.Q6J("id","minMaxLimits")("value",0)("min",-20)("max",20),e.xp6(5),e.Q6J("id","precision")("value",0)("precision",2)("step",.25),e.xp6(4),e.Q6J("id","stepNumberDisabled")("value",50)("disabled",!0),e.xp6(4),e.Q6J("id","stepNumberReadOnly")("value",50)("editable",!1),e.xp6(4),e.Q6J("id","stepNumberDescription")("value",25),e.xp6(8),e.Q6J("id","alignmentLeft")("align",u.stepInputAlign.Left)("value",100),e.xp6(4),e.Q6J("id","alignmentCenter")("align",u.stepInputAlign.Center)("value",100),e.xp6(4),e.Q6J("id","alignmentRight")("align",u.stepInputAlign.Right)("value",100))},directives:[d.h,b.n],styles:[".step-input-example[_ngcontent-%COMP%]{padding-bottom:1.5rem}.step-input-example[_ngcontent-%COMP%]   fd-step-input[_ngcontent-%COMP%]{display:block}.step-input-example-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}"]}),n})();var y=t(29871),V=t(33089),S=t(69808);function Q(n,i){if(1&n&&(e.TgZ(0,"div",2)(1,"label",3),e._uU(2," Number Step Input State: "),e.TgZ(3,"code"),e._uU(4),e.qZA()(),e._UZ(5,"fdp-number-step-input",4),e.qZA()),2&n){const p=i.$implicit;e.xp6(1),e.Q6J("for","number-step-"+p),e.xp6(3),e.Oqu(p.name),e.xp6(1),e.Q6J("id","number-step-"+p.name)("name","number-step-"+p.name)("state",p.name)("stateMessage",p.message)}}let R=(()=>{class n{constructor(){this.states=[{name:"default",message:"Default state message"},{name:"success",message:"Success state message"},{name:"error",message:"Error state message"},{name:"warning",message:"Warning state message"},{name:"information",message:"Information state message"}]}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fdp-platform-number-step-input-state-example"]],decls:2,vars:1,consts:[[1,"step-input-example-container"],["class","step-input-example",4,"ngFor","ngForOf"],[1,"step-input-example"],["fd-form-label","",3,"for"],["contentDensity","compact",3,"id","name","state","stateMessage"]],template:function(p,u){1&p&&(e.TgZ(0,"div",0),e.YNc(1,Q,6,6,"div",1),e.qZA()),2&p&&(e.xp6(1),e.Q6J("ngForOf",u.states))},directives:[S.sg,d.h,b.n],styles:[".step-input-example[_ngcontent-%COMP%]{padding-bottom:1.5rem}.step-input-example[_ngcontent-%COMP%]   fd-step-input[_ngcontent-%COMP%]{display:block}.step-input-example-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}"]}),n})();var M=t(52382),N=t(59458),D=t(36325);function J(n,i){1&n&&(e.TgZ(0,"span",10),e._uU(1," Value is required "),e.qZA())}function q(n,i){if(1&n&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&n){const p=e.oxw(2);e.xp6(1),e.hij(" Value must be more than ",p.MIN_VALUE," ")}}function B(n,i){if(1&n&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&n){const p=e.oxw(2);e.xp6(1),e.hij(" Value must be less than ",p.MAX_VALUE," ")}}function W(n,i){if(1&n&&(e.YNc(0,J,2,0,"span",7),e.YNc(1,q,2,1,"span",8),e.YNc(2,B,2,1,"span",9)),2&n){const p=i.$implicit;e.Q6J("ngIf",p.required),e.xp6(1),e.Q6J("ngIf",p.min),e.xp6(1),e.Q6J("ngIf",p.max)}}let H=(()=>{class n{constructor(p){this.cdr=p,this.MIN_VALUE=10,this.MAX_VALUE=20,this.stepInputQtyValidators=[M.kI.required,M.kI.min(10),M.kI.max(20)]}ngAfterViewInit(){this.cdr.detectChanges()}}return n.\u0275fac=function(p){return new(p||n)(e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["fdp-platform-number-step-input-reactive-example"]],decls:16,vars:10,consts:[[1,"fd-page"],[1,"fd-page__content","fd-has-background-color-neutral-2"],["fg",""],["id","reactive-form-qty","label","Quantity","placeholder","Things quantity",3,"required","validators"],["formField",""],["ariaLabelledBy","step-input-valueRequiredError step-input-valueMinError step-input-valueMaxError","name","qty",3,"id","formControl"],["i18n",""],["id","step-input-valueRequiredError",4,"ngIf"],["id","step-input-valueMinError",4,"ngIf"],["id","step-input-valueMaxError",4,"ngIf"],["id","step-input-valueRequiredError"],["id","step-input-valueMinError"],["id","step-input-valueMaxError"]],template:function(p,u){if(1&p&&(e.TgZ(0,"main",0)(1,"div",1)(2,"h4"),e._uU(3),e.qZA(),e.TgZ(4,"fdp-form-group",null,2)(6,"fdp-form-field",3,4),e._UZ(8,"fdp-number-step-input",5),e.qZA(),e.YNc(9,W,3,3,"ng-template",null,6,e.W1O),e.qZA()(),e.TgZ(11,"pre"),e._uU(12),e.ALo(13,"json"),e.qZA(),e.TgZ(14,"pre"),e._uU(15),e.qZA()()),2&p){const O=e.MAs(5),U=e.MAs(7);e.xp6(3),e.AsE("Enter value between ",u.MIN_VALUE," and ",u.MAX_VALUE,""),e.xp6(3),e.Q6J("required",!0)("validators",u.stepInputQtyValidators),e.xp6(2),e.Q6J("id","reactive-form-qty")("formControl",U.formControl),e.xp6(4),e.hij("Form result: ",e.lcZ(13,8,O.formGroup.value),""),e.xp6(3),e.hij("Form Status: ",O.formGroup.status,"")}},directives:[N.H,D.h,b.n,M.JJ,M.oH,S.O5],pipes:[S.Ts],styles:[".step-input-example[_ngcontent-%COMP%]{padding-bottom:1.5rem}.step-input-example[_ngcontent-%COMP%]   fd-step-input[_ngcontent-%COMP%]{display:block}.step-input-example-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}"]}),n})();function K(n,i){1&n&&(e.TgZ(0,"span"),e._uU(1," Value is required "),e.qZA())}function w(n,i){1&n&&e.YNc(0,K,2,0,"span",5),2&n&&e.Q6J("ngIf",i.$implicit.required)}let X=(()=>{class n{constructor(){this.qty=10,this.stepInputQtyValidators=[M.kI.required]}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fdp-platform-number-step-input-template-example"]],decls:9,vars:5,consts:[[1,"fd-page"],[1,"fd-page__content","fd-has-background-color-neutral-2"],["id","quantity-template-driven","label","Quantity","placeholder","Things quantity","hint","This is tooltip to help","zone","zLeft","hintPlacement","left",3,"rank","validators"],["name","qty",3,"id","ngModel","ngModelChange"],["i18n",""],[4,"ngIf"]],template:function(p,u){1&p&&(e.TgZ(0,"main",0)(1,"div",1)(2,"fdp-form-group")(3,"fdp-form-field",2)(4,"fdp-number-step-input",3),e.NdJ("ngModelChange",function(U){return u.qty=U}),e.qZA()(),e.YNc(5,w,1,1,"ng-template",null,4,e.W1O),e.qZA()(),e.TgZ(7,"pre"),e._uU(8),e.qZA()()),2&p&&(e.xp6(3),e.Q6J("rank",10)("validators",u.stepInputQtyValidators),e.xp6(1),e.Q6J("id","quantity-template-driven")("ngModel",u.qty),e.xp6(4),e.hij("Qty: ",u.qty,""))},directives:[N.H,D.h,b.n,M.JJ,M.On,S.O5],styles:[".step-input-example[_ngcontent-%COMP%]{padding-bottom:1.5rem}.step-input-example[_ngcontent-%COMP%]   fd-step-input[_ngcontent-%COMP%]{display:block}.step-input-example-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}"]}),n})(),j=(()=>{class n{constructor(){this.numberStepInput=[{language:"html",code:r,fileName:"platform-number-step-input-example"},{language:"typescript",code:x,fileName:"platform-number-step-input-example",component:"PlatformNumberStepInputExampleComponent",scssFileCode:c}],this.numberStepInputForm=[{language:"html",code:E,fileName:"platform-number-step-input-reactive-example"},{language:"typescript",code:h,fileName:"platform-number-step-input-reactive-example",component:"PlatformNumberStepInputFormExampleComponent",scssFileCode:c}],this.numberStepInputTemplateForm=[{language:"html",code:I,fileName:"platform-number-step-input-template-example"},{language:"typescript",code:C,fileName:"platform-number-step-input-template-example",component:"PlatformNumberStepInputTemplateFormExampleComponent",scssFileCode:c}],this.numberStepInputStates=[{language:"html",code:P,fileName:"platform-number-step-input-state-example"},{language:"typescript",code:Z,fileName:"platform-number-step-input-state-example",component:"PlatformNumberStepInputStateExampleComponent",scssFileCode:c}]}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-step-input"]],decls:49,vars:4,consts:[["id","no-form","componentName","step-input"],[3,"exampleFiles"],["id","states","componentName","step-input"],["id","reactive-form","componentName","step-input"],["id","template-driven","componentName","step-input"]],template:function(p,u){1&p&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Number Step Input without form "),e.qZA(),e.TgZ(2,"description"),e._uU(3,"This example shows what options Number Step Input has and how it can be used out of form"),e.qZA(),e.TgZ(4,"component-example"),e._UZ(5,"fdp-platform-number-step-input-example"),e.qZA(),e._UZ(6,"code-example",1)(7,"separator"),e.TgZ(8,"fd-docs-section-title",2),e._uU(9," Number Step Input with state "),e.qZA(),e.TgZ(10,"description")(11,"p"),e._uU(12,"This example shows state option for Number Step Input"),e.qZA(),e.TgZ(13,"ul")(14,"li"),e._uU(15," Set "),e.TgZ(16,"code"),e._uU(17,"[state]"),e.qZA(),e._uU(18," property value to: "),e.TgZ(19,"code"),e._uU(20,"success"),e.qZA(),e._uU(21,", "),e.TgZ(22,"code"),e._uU(23,"error"),e.qZA(),e._uU(24,", "),e.TgZ(25,"code"),e._uU(26,"warning"),e.qZA(),e._uU(27,", "),e.TgZ(28,"code"),e._uU(29,"information"),e.qZA()()()(),e.TgZ(30,"component-example"),e._UZ(31,"fdp-platform-number-step-input-state-example"),e.qZA(),e._UZ(32,"code-example",1)(33,"separator"),e.TgZ(34,"fd-docs-section-title",3),e._uU(35," Number Step Input with reactive form\n"),e.qZA(),e.TgZ(36,"description"),e._uU(37,"This example shows how Step Input behaves with reactive form"),e.qZA(),e.TgZ(38,"component-example"),e._UZ(39,"fdp-platform-number-step-input-reactive-example"),e.qZA(),e._UZ(40,"code-example",1)(41,"separator"),e.TgZ(42,"fd-docs-section-title",4),e._uU(43," Number Step Input in template-driven form\n"),e.qZA(),e.TgZ(44,"description"),e._uU(45,"This example shows how Step Input behaves with a template-driven form with an initial value set."),e.qZA(),e.TgZ(46,"component-example"),e._UZ(47,"fdp-platform-number-step-input-template-example"),e.qZA(),e._UZ(48,"code-example",1)),2&p&&(e.xp6(6),e.Q6J("exampleFiles",u.numberStepInput),e.xp6(26),e.Q6J("exampleFiles",u.numberStepInputStates),e.xp6(8),e.Q6J("exampleFiles",u.numberStepInputForm),e.xp6(8),e.Q6J("exampleFiles",u.numberStepInputTemplateForm))},directives:[_.k,A.w,m.O,T,y.E,V.N,R,H,X],encapsulation:2}),n})();var Y=t(24882),z=t(98791),$=t(63710);const G=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-step-input-header"]],decls:22,vars:0,consts:[["module","PlatformStepInputModule","subPackage","form"]],template:function(p,u){1&p&&(e.TgZ(0,"header"),e._uU(1,"Step Input Component"),e.qZA(),e.TgZ(2,"description"),e._uU(3," The step input control allows the user to change the input values in predefined increments (steps). "),e._UZ(4,"br")(5,"br")(6,"import",0)(7,"br"),e.TgZ(8,"h3"),e._uU(9,"Platform specific enhancements:"),e.qZA(),e.TgZ(10,"ul")(11,"li"),e._uU(12,"The core implementation is in progress and probably needs to some re-work"),e.qZA(),e.TgZ(13,"li"),e._uU(14,"Component implements the FormFieldControl interface, thus can be used with in the FormField component."),e.qZA(),e.TgZ(15,"li"),e._uU(16," Focuses on single responsibility which will deal with specific types: "),e.TgZ(17,"ul")(18,"li"),e._uU(19,"NumberStepInput - which can deal with quantity"),e.qZA()()()()(),e._UZ(20,"fd-header-tabs")(21,"router-outlet"))},directives:[Y.G,A.w,z.k,$.c,o.lC],encapsulation:2}),n})(),children:[{path:"",component:j},{path:"api",component:a.h,data:{content:g.X.stepInput}}]}];let k=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.Bz.forChild(G),f.g,l.iu,l.Mk],o.Bz]}),n})()},29621:s=>{s.exports='<div class="step-input-example-container">\n    <div class="step-input-example">\n        <label fd-form-label for="number">Default Number Step Input</label>\n        <fdp-number-step-input [id]="\'number\'" name="number"></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="compact">Compact</label>\n        <fdp-number-step-input\n            [id]="\'compact\'"\n            name="compact"\n            contentDensity="compact"\n            [value]="value"\n            (valueChange)="onValueChange($event)"\n        ></fdp-number-step-input>\n        <br />\n        <small>value: {{ value }}</small>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="minMaxLimits">Min Max limits <small>(min: -20, max: 20)</small></label>\n        <fdp-number-step-input\n            [id]="\'minMaxLimits\'"\n            name="minMaxLimits"\n            [value]="0"\n            [min]="-20"\n            [max]="20"\n        ></fdp-number-step-input>\n    </div>\n</div>\n\n<div class="step-input-example-container">\n    <div class="step-input-example">\n        <label fd-form-label for="precision">Precision</label>\n        <fdp-number-step-input\n            [id]="\'precision\'"\n            name="precision"\n            [value]="0"\n            [precision]="2"\n            [step]="0.25"\n        ></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="stepNumberDisabled">Disabled</label>\n        <fdp-number-step-input\n            [id]="\'stepNumberDisabled\'"\n            name="stepNumberDisabled"\n            [value]="50"\n            [disabled]="true"\n        ></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="stepNumberReadOnly">Read Only</label>\n        <fdp-number-step-input\n            [id]="\'stepNumberReadOnly\'"\n            name="stepNumberReadOnly"\n            [value]="50"\n            [editable]="false"\n        ></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="stepNumberDescription">With description</label>\n        <fdp-number-step-input\n            [id]="\'stepNumberDescription\'"\n            name="stepNumberDescription"\n            description="PC"\n            [value]="25"\n        ></fdp-number-step-input>\n    </div>\n</div>\n\n<label>Horizontal alignment in the input field</label>\n<br />\n<div class="step-input-example-container">\n    <div class="step-input-example">\n        <label fd-form-label for="alignmentLeft">Left</label>\n        <fdp-number-step-input\n            [id]="\'alignmentLeft\'"\n            name="alignment"\n            [align]="stepInputAlign.Left"\n            [value]="100"\n        ></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="alignmentCenter">Center</label>\n        <fdp-number-step-input\n            [id]="\'alignmentCenter\'"\n            name="alignment"\n            [align]="stepInputAlign.Center"\n            [value]="100"\n        ></fdp-number-step-input>\n    </div>\n    <div class="step-input-example">\n        <label fd-form-label for="alignmentRight">Right</label>\n        <fdp-number-step-input\n            [id]="\'alignmentRight\'"\n            name="alignment"\n            [align]="stepInputAlign.Right"\n            [value]="100"\n        ></fdp-number-step-input>\n    </div>\n</div>\n'},49003:s=>{s.exports="import { Component } from '@angular/core';\n\nimport { StepInputChangeEvent, StepInputAlign } from '@fundamental-ngx/platform/form';\n\n@Component({\n    selector: 'fdp-platform-number-step-input-example',\n    templateUrl: './platform-number-step-input-example.component.html',\n    styleUrls: ['./platform-number-step-input-example.component.scss']\n})\nexport class PlatformNumberStepInputExampleComponent {\n    readonly stepInputAlign = StepInputAlign;\n\n    value = 100;\n\n    onValueChange(event: StepInputChangeEvent): void {\n        this.value = event.payload;\n    }\n}\n"},55779:s=>{s.exports='<main class="fd-page">\n    <div class="fd-page__content fd-has-background-color-neutral-2">\n        <h4>Enter value between {{ MIN_VALUE }} and {{ MAX_VALUE }}</h4>\n        <fdp-form-group #fg>\n            <fdp-form-field\n                #formField\n                id="reactive-form-qty"\n                label="Quantity"\n                placeholder="Things quantity"\n                [required]="true"\n                [validators]="stepInputQtyValidators"\n            >\n                <fdp-number-step-input\n                    [id]="\'reactive-form-qty\'"\n                    ariaLabelledBy="step-input-valueRequiredError step-input-valueMinError step-input-valueMaxError"\n                    name="qty"\n                    [formControl]="formField.formControl"\n                ></fdp-number-step-input>\n            </fdp-form-field>\n\n            <ng-template #i18n let-errors>\n                <span id="step-input-valueRequiredError" *ngIf="errors.required"> Value is required </span>\n                <span id="step-input-valueMinError" *ngIf="errors.min"> Value must be more than {{ MIN_VALUE }} </span>\n                <span id="step-input-valueMaxError" *ngIf="errors.max"> Value must be less than {{ MAX_VALUE }} </span>\n            </ng-template>\n        </fdp-form-group>\n    </div>\n    <pre>Form result: {{ fg.formGroup.value | json }}</pre>\n    <pre>Form Status: {{ fg.formGroup.status }}</pre>\n</main>\n'},39025:s=>{s.exports="import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';\nimport { ValidatorFn, Validators } from '@angular/forms';\n\nconst MAX_VALUE = 20;\nconst MIN_VALUE = 10;\n\n@Component({\n    selector: 'fdp-platform-number-step-input-reactive-example',\n    templateUrl: './platform-number-step-input-reactive-example.component.html',\n    styleUrls: ['./platform-number-step-input-reactive-example.component.scss']\n})\nexport class PlatformNumberStepInputFormExampleComponent implements AfterViewInit {\n    MIN_VALUE = MIN_VALUE;\n    MAX_VALUE = MAX_VALUE;\n    stepInputQtyValidators: ValidatorFn[] = [Validators.required, Validators.min(MIN_VALUE), Validators.max(MAX_VALUE)];\n\n    constructor(private cdr: ChangeDetectorRef) {}\n\n    ngAfterViewInit(): void {\n        this.cdr.detectChanges();\n    }\n}\n"},89540:s=>{s.exports='<div class="step-input-example-container">\n    <div class="step-input-example" *ngFor="let state of states">\n        <label fd-form-label [for]="\'number-step-\' + state">\n            Number Step Input State: <code>{{ state.name }}</code>\n        </label>\n        <fdp-number-step-input\n            [id]="\'number-step-\' + state.name"\n            [name]="\'number-step-\' + state.name"\n            [state]="state.name"\n            [stateMessage]="state.message"\n            contentDensity="compact"\n        ></fdp-number-step-input>\n    </div>\n</div>\n'},96425:s=>{s.exports="import { Component } from '@angular/core';\nimport { FormStates } from '@fundamental-ngx/core/shared';\n\n@Component({\n    selector: 'fdp-platform-number-step-input-state-example',\n    templateUrl: './platform-number-step-input-state-example.component.html',\n    styleUrls: ['./platform-number-step-input-state-example.component.scss']\n})\nexport class PlatformNumberStepInputStateExampleComponent {\n    states: StateOption[] = [\n        {\n            name: 'default',\n            message: 'Default state message'\n        },\n        {\n            name: 'success',\n            message: 'Success state message'\n        },\n        {\n            name: 'error',\n            message: 'Error state message'\n        },\n        {\n            name: 'warning',\n            message: 'Warning state message'\n        },\n        {\n            name: 'information',\n            message: 'Information state message'\n        }\n    ];\n}\n\ninterface StateOption {\n    name: FormStates;\n    message: string;\n}\n"},66850:s=>{s.exports='<main class="fd-page">\n    <div class="fd-page__content fd-has-background-color-neutral-2">\n        <fdp-form-group>\n            <fdp-form-field\n                id="quantity-template-driven"\n                label="Quantity"\n                placeholder="Things quantity"\n                hint="This is tooltip to help"\n                zone="zLeft"\n                [rank]="10"\n                hintPlacement="left"\n                [validators]="stepInputQtyValidators"\n            >\n                <fdp-number-step-input\n                    [id]="\'quantity-template-driven\'"\n                    name="qty"\n                    [(ngModel)]="qty"\n                ></fdp-number-step-input>\n            </fdp-form-field>\n\n            <ng-template #i18n let-errors>\n                <span *ngIf="errors.required"> Value is required </span>\n            </ng-template>\n        </fdp-form-group>\n    </div>\n    <pre>Qty: {{ qty }}</pre>\n</main>\n'},2644:s=>{s.exports="import { Component } from '@angular/core';\nimport { ValidatorFn, Validators } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-platform-number-step-input-template-example',\n    templateUrl: './platform-number-step-input-template-example.component.html',\n    styleUrls: ['./platform-number-step-input-template-example.component.scss']\n})\nexport class PlatformNumberStepInputTemplateFormExampleComponent {\n    qty = 10;\n    stepInputQtyValidators: ValidatorFn[] = [Validators.required];\n}\n"},64834:s=>{s.exports=".step-input-example {\n    padding-bottom: 1.5rem;\n\n    fd-step-input {\n        display: block;\n    }\n}\n\n.step-input-example-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n"}}]);