"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1090],{81090:(f,u,t)=>{t.r(u),t.d(u,{SearchDocsModule:()=>k});var i=t(8674),p=t(36854),d=t(28674),m=t(31768),e=t(5e3),_=t(24882),g=t(44969),b=t(98791),x=t(63710);let v=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-search-header"]],decls:10,vars:0,consts:[["module","SearchModule","subPackage","search"]],template:function(n,o){1&n&&(e.TgZ(0,"header"),e._uU(1,"Search"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," A search is a means of accessing information quickly. If an amount of data is too large for users to find something just by scanning through it, you should consider providing a search function. "),e.qZA(),e.TgZ(5,"p"),e._uU(6," Use a search field if you want to enable users to enter text to search for information. The search field is also the control of choice for filtering down a given amount of information. "),e.qZA()(),e._UZ(7,"import",0)(8,"fd-header-tabs")(9,"router-outlet"))},directives:[_.G,g.w,b.k,x.c,i.lC],encapsulation:2}),r})();var S=t(97568),y=t(93943),C=t(28595),s=t(52382),w=t(50727),h=t(69808);const z=["searchInput"];function Z(r,a){if(1&r){const n=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetValue()}),e._UZ(1,"span",7),e.qZA()}}let T=0,A=(()=>{class r{constructor(n){this._changeDetectorRef=n,this.placeholder="",this.disabled=!1,this.id="fn-search-"+T++,this.search=new e.vpe,this._subscriptions=new w.w0,this._value="",this.onChange=()=>{},this.onTouched=()=>{}}get value(){return this._getValue()}set value(n){this._setValue(n)}ngOnDestroy(){this._subscriptions.unsubscribe()}focus(){this.inputElement.nativeElement.focus()}get innerInputId(){return`${this.id}-input`}writeValue(n){this._value=n,this.onChange(n),this._changeDetectorRef.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}resetValue(){this._setValue(""),this.inputElement.nativeElement.focus(),this.emitSearch()}setDisabledState(n){this.disabled=n,this._changeDetectorRef.detectChanges()}emitSearch(){this.search.emit(this.value)}_setValue(n){n!==this._value&&(this.writeValue(n),this._changeDetectorRef.markForCheck())}_getValue(){return this._value}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(e.sBO))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fn-search"]],viewQuery:function(n,o){if(1&n&&e.Gf(z,5),2&n){let c;e.iGM(c=e.CRH())&&(o.inputElement=c.first)}},hostAttrs:[1,"fn-search"],hostVars:1,hostBindings:function(n,o){2&n&&e.uIk("id",o.id)},inputs:{placeholder:"placeholder",value:"value",disabled:"disabled",id:"id",name:"name",ariaLabel:"ariaLabel",ariaLabelledby:"ariaLabelledby"},outputs:{search:"search"},features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>r),multi:!0}])],decls:6,vars:4,consts:[[1,"sap-icon","sap-icon--search","fn-search__icon"],["type","search",1,"fn-search__input",3,"ngModel","ngModelChange"],["searchInput",""],["class","fn-search__clear","tabindex","0","aria-label","clear button",3,"click",4,"ngIf"],["tabindex","0","aria-label","navigation right arrow button",1,"fn-search__button",3,"click"],[1,"sap-icon","sap-icon--navigation-right-arrow"],["tabindex","0","aria-label","clear button",1,"fn-search__clear",3,"click"],[1,"sap-icon","sap-icon--decline"]],template:function(n,o){1&n&&(e._UZ(0,"span",0),e.TgZ(1,"input",1,2),e.NdJ("ngModelChange",function(l){return o.value=l}),e.qZA(),e.YNc(3,Z,2,0,"button",3),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.emitSearch()}),e._UZ(5,"span",5),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngModel",o.value),e.uIk("disabled",o.disabled||null)("placeholder",o.placeholder||" "),e.xp6(2),e.Q6J("ngIf",o.value))},directives:[s.Fj,s.JJ,s.On,h.O5],styles:['/*!\n * Fundamental Library Styles v0.21.0-rc.31\n * Copyright (c) 2021 SAP SE or an SAP affiliate company.\n * Licensed under Apache License 2.0 (https://github.com/SAP/fundamental-styles/blob/main/LICENSE)\n */.fn-search{font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;line-height:1.5rem;color:#223548;font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;flex-direction:row;align-items:center;width:100%;position:relative;height:2rem;border-radius:1rem}.fn-search:after,.fn-search:before{box-sizing:inherit;font-size:inherit}.fn-search.is-hover .fn-search__input,.fn-search:hover .fn-search__input{background:#fff;box-shadow:0 0 2px #8396a829,0 8px 16px #8396a829}.fn-search.is-hover .fn-search__input.is-focus,.fn-search.is-hover .fn-search__input:focus,.fn-search:hover .fn-search__input.is-focus,.fn-search:hover .fn-search__input:focus{z-index:5;outline:0;background:#fff;box-shadow:0 0 2px #1b90ff29,0 8px 16px #1b90ff29,0 0 0 .125rem #1b90ff}.fn-search__input{transition:all .25s ease-in-out;padding:.25rem 3.75rem .25rem 2.5rem;z-index:1;width:100%;border:none;color:#223548;height:2rem;background:#f5f6f7;caret-color:#223548;border-radius:1rem}.fn-search__input[dir=rtl],[dir=rtl] .fn-search__input{padding-right:2.5rem;padding-left:3.75rem}.fn-search__input::-moz-placeholder{color:#5b738b;font-size:.875rem;line-height:1.5rem}.fn-search__input:-ms-input-placeholder{color:#5b738b;font-size:.875rem;line-height:1.5rem}.fn-search__input::placeholder{color:#5b738b;font-size:.875rem;line-height:1.5rem}.fn-search__input::-webkit-search-cancel-button{display:none}.fn-search__input:not(:-moz-placeholder-shown)~.fn-search__button{display:none}.fn-search__input:not(:-ms-input-placeholder)~.fn-search__button{display:none}.fn-search__input:not(:placeholder-shown)~.fn-search__button{display:none}.fn-search__input:not(:-moz-placeholder-shown)~.fn-search__clear{right:.5rem;display:flex}.fn-search__input:not(:-ms-input-placeholder)~.fn-search__clear{right:.5rem;display:flex}.fn-search__input:not(:placeholder-shown)~.fn-search__clear{right:.5rem;display:flex}.fn-search__input:not(:-moz-placeholder-shown)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input:not(:-moz-placeholder-shown)~.fn-search__clear{right:auto;left:.5rem}.fn-search__input:not(:-ms-input-placeholder)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input:not(:-ms-input-placeholder)~.fn-search__clear{right:auto;left:.5rem}.fn-search__input:not(:placeholder-shown)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input:not(:placeholder-shown)~.fn-search__clear{right:auto;left:.5rem}.fn-search__input.is-pressed,.fn-search__input[aria-pressed=true],.fn-search__input.is-active,.fn-search__input:active{box-shadow:0 0 2px #8396a829,0 2px 4px #8396a829;background:#fff}.fn-search__input.is-focus,.fn-search__input:focus{z-index:5;outline:0;background:#fff;box-shadow:0 0 2px #1b90ff29,0 8px 16px #1b90ff29,0 0 0 .125rem #1b90ff}.fn-search__input.is-focus:not(:-moz-placeholder-shown)~.fn-search__button,.fn-search__input:focus:not(:-moz-placeholder-shown)~.fn-search__button{display:flex;background:#0070f2}.fn-search__input.is-focus:not(:-ms-input-placeholder)~.fn-search__button,.fn-search__input:focus:not(:-ms-input-placeholder)~.fn-search__button{display:flex;background:#0070f2}.fn-search__input.is-focus:not(:placeholder-shown)~.fn-search__button,.fn-search__input:focus:not(:placeholder-shown)~.fn-search__button{display:flex;background:#0070f2}.fn-search__input.is-focus:not(:-moz-placeholder-shown)~.fn-search__button [class*=sap-icon],.fn-search__input:focus:not(:-moz-placeholder-shown)~.fn-search__button [class*=sap-icon]{color:#fff}.fn-search__input.is-focus:not(:-ms-input-placeholder)~.fn-search__button [class*=sap-icon],.fn-search__input:focus:not(:-ms-input-placeholder)~.fn-search__button [class*=sap-icon]{color:#fff}.fn-search__input.is-focus:not(:placeholder-shown)~.fn-search__button [class*=sap-icon],.fn-search__input:focus:not(:placeholder-shown)~.fn-search__button [class*=sap-icon]{color:#fff}.fn-search__input.is-focus:not(:-moz-placeholder-shown)~.fn-search__clear,.fn-search__input:focus:not(:-moz-placeholder-shown)~.fn-search__clear{right:2.25rem}.fn-search__input.is-focus:not(:-ms-input-placeholder)~.fn-search__clear,.fn-search__input:focus:not(:-ms-input-placeholder)~.fn-search__clear{right:2.25rem}.fn-search__input.is-focus:not(:placeholder-shown)~.fn-search__clear,.fn-search__input:focus:not(:placeholder-shown)~.fn-search__clear{right:2.25rem}.fn-search__input.is-focus:not(:-moz-placeholder-shown)~.fn-search__clear[dir=rtl],.fn-search__input:focus:not(:-moz-placeholder-shown)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input.is-focus:not(:-moz-placeholder-shown)~.fn-search__clear,[dir=rtl] .fn-search__input:focus:not(:-moz-placeholder-shown)~.fn-search__clear{right:auto;left:2.25rem}.fn-search__input.is-focus:not(:-ms-input-placeholder)~.fn-search__clear[dir=rtl],.fn-search__input:focus:not(:-ms-input-placeholder)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input.is-focus:not(:-ms-input-placeholder)~.fn-search__clear,[dir=rtl] .fn-search__input:focus:not(:-ms-input-placeholder)~.fn-search__clear{right:auto;left:2.25rem}.fn-search__input.is-focus:not(:placeholder-shown)~.fn-search__clear[dir=rtl],.fn-search__input:focus:not(:placeholder-shown)~.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__input.is-focus:not(:placeholder-shown)~.fn-search__clear,[dir=rtl] .fn-search__input:focus:not(:placeholder-shown)~.fn-search__clear{right:auto;left:2.25rem}.fn-search__button{font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;line-height:1.5rem;color:#223548;font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;justify-content:center;align-items:center;right:.25rem;right:4px;z-index:10;cursor:pointer;border-radius:50%;position:absolute;background:0 0;width:1.5rem;height:1.5rem}.fn-search__button:after,.fn-search__button:before{box-sizing:inherit;font-size:inherit}.fn-search__button[dir=rtl],[dir=rtl] .fn-search__button{right:auto;left:.25rem}.fn-search__button [class*=sap-icon]{line-height:1;font-size:.625rem;color:#5b738b}.fn-search__button.is-focus,.fn-search__button:focus{z-index:5;outline:0}.fn-search__clear{font-family:"72","72full",Arial,Helvetica,sans-serif;font-size:.875rem;line-height:1.5rem;color:#223548;font-weight:400;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;justify-content:center;align-items:center;right:.25rem;z-index:10;display:none;cursor:pointer;position:absolute;border-radius:50%;background:0 0;width:1.5rem;height:1.5rem}.fn-search__clear:after,.fn-search__clear:before{box-sizing:inherit;font-size:inherit}.fn-search__clear[dir=rtl],[dir=rtl] .fn-search__clear{right:auto;left:.25rem}.fn-search__clear [class*=sap-icon]{line-height:1;font-size:.625rem;color:#5b738b}.fn-search__icon{left:.75rem;z-index:10;position:absolute;width:1.125rem;height:1.125rem}.fn-search__icon[dir=rtl],[dir=rtl] .fn-search__icon{left:auto;right:.75rem}.fn-search__icon[class*=sap-icon]{line-height:1;color:#5b738b;font-size:1.125rem}\n'],encapsulation:2,changeDetection:0}),r})();var E=t(80313);function J(r,a){if(1&r&&(e.TgZ(0,"p")(1,"i"),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&r){const n=e.oxw();e.xp6(2),e.hij("Form value: ",e.lcZ(3,1,n.formValue),"")}}let F=(()=>{class r{constructor(n){this._fb=n,this.searchOne="",this.searchTwo="Search value"}ngOnInit(){this.myForm=this._fb.group({search:""})}onSubmit(){this.formValue=this.myForm.value}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(s.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fd-search-example"]],decls:12,vars:3,consts:[["placeholder","Search...",3,"ngModel","ngModelChange"],[3,"formGroup","ngSubmit"],["formControlName","search","placeholder","Search..."],["fn-button","","type","submit","label","Submit"],[4,"ngIf"]],template:function(n,o){1&n&&(e.TgZ(0,"fn-search",0),e.NdJ("ngModelChange",function(l){return o.searchOne=l}),e.qZA(),e._UZ(1,"br")(2,"br")(3,"br"),e.TgZ(4,"h4"),e._uU(5,"Search in reactive form:"),e.qZA(),e.TgZ(6,"form",1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e._UZ(7,"fn-search",2)(8,"br")(9,"br")(10,"button",3),e.qZA(),e.YNc(11,J,4,3,"p",4)),2&n&&(e.Q6J("ngModel",o.searchOne),e.xp6(6),e.Q6J("formGroup",o.myForm),e.xp6(5),e.Q6J("ngIf",o.formValue))},directives:[A,s.JJ,s.On,s._Y,s.JL,s.sg,s.u,E.r,h.O5],pipes:[h.Ts],encapsulation:2}),r})();var M=t(29871);let U=(()=>{class r{constructor(){this.searchExample=[{language:"html",code:S,fileName:"search-example"}]}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-search"]],decls:5,vars:2,consts:[["id","simple","componentName","search"],[3,"hasBackground"],[3,"exampleFiles"]],template:function(n,o){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Search "),e.qZA(),e.TgZ(2,"component-example",1),e._UZ(3,"fd-search-example"),e.qZA(),e._UZ(4,"code-example",2)),2&n&&(e.xp6(2),e.Q6J("hasBackground",!1),e.xp6(2),e.Q6J("exampleFiles",o.searchExample))},directives:[y.k,C.O,F,M.E],styles:[".tab-container-example{height:100px;border:1px dashed grey;padding:.5rem}\n"],encapsulation:2}),r})();var D=t(77562),I=t(41055),V=t(28706);const O=[{path:"",component:v,children:[{path:"",component:U},{path:"api",component:p.h,data:{content:m.X.search}}]}];let k=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.Bz.forChild(O),d.g,D.ej,V.h,I.t],i.Bz]}),r})()},97568:f=>{f.exports='<fn-search [(ngModel)]="searchOne" placeholder="Search..."></fn-search>\n\n<br /><br /><br />\n\n<h4>Search in reactive form:</h4>\n<form [formGroup]="myForm" (ngSubmit)="onSubmit()">\n    <fn-search formControlName="search" placeholder="Search..."></fn-search>\n    <br /><br />\n    <button fn-button type="submit" label="Submit"></button>\n</form>\n\n<p *ngIf="formValue">\n    <i>Form value: {{ formValue | json }}</i>\n</p>\n'}}]);