"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5531],{55531:(a,c,l)=>{l.r(c),l.d(c,{SegmentedButtonDocsModule:()=>G});var g=l(8674),p=l(36854),h=l(86487),v=l(28674),d=l(18959),i=l(95440),s=l(34645),x=l(43800),T=l(66073),U=l(82887),F=l(54204),B=l(10446),e=l(5e3),S=l(93943),C=l(44969),y=l(28595),M=l(64089),b=l(54643),u=l(52382),f=l(87757);let E=(()=>{class t{constructor(){this.value="first"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-segmented-button-default-example"]],decls:13,vars:3,consts:[["text","example with label buttons"],[3,"ngModel","ngModelChange"],["fd-button","","label","Left","value","first"],["fd-button","","label","Middle","value","second"],["fd-button","","label","Right","value","third"],["text","example with icon buttons"],["fd-button","","glyph","cart","value","first"],["fd-button","","glyph","action","value","second"],["fd-button","","glyph","activities","value","third"]],template:function(o,n){1&o&&(e._UZ(0,"fd-text",0),e.TgZ(1,"fd-segmented-button",1),e.NdJ("ngModelChange",function(r){return n.value=r}),e._UZ(2,"button",2)(3,"button",3)(4,"button",4),e.qZA(),e._UZ(5,"fd-text",5),e.TgZ(6,"fd-segmented-button",1),e.NdJ("ngModelChange",function(r){return n.value=r}),e._UZ(7,"button",6)(8,"button",7)(9,"button",8),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"small"),e._uU(12),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngModel",n.value),e.xp6(5),e.Q6J("ngModel",n.value),e.xp6(6),e.hij("value: ",n.value,""))},directives:[M.T,b.pS,u.JJ,u.On,f.r],encapsulation:2}),t})();var _=l(29871),A=l(33089);let D=(()=>{class t{constructor(){this.value=["first"]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-segmented-button-toggle-example"]],decls:7,vars:3,consts:[[3,"toggle","ngModel","ngModelChange"],["fd-button","","label","Left","value","first"],["fd-button","","label","Middle","value","second"],["fd-button","","label","Right","value","third"]],template:function(o,n){1&o&&(e.TgZ(0,"fd-segmented-button",0),e.NdJ("ngModelChange",function(r){return n.value=r}),e._UZ(1,"button",1)(2,"button",2)(3,"button",3),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"small"),e._uU(6),e.qZA()),2&o&&(e.Q6J("toggle",!0)("ngModel",n.value),e.xp6(6),e.hij("value: ",n.value,""))},directives:[b.pS,u.JJ,u.On,f.r],encapsulation:2}),t})();var J=l(69808);function N(t,m){if(1&t&&e._UZ(0,"button",2),2&t){const o=m.$implicit;e.Q6J("label",o),e.uIk("value",o)}}let V=(()=>{class t{constructor(){this.values=["first","second","third"],this.currentValue=""}handleValueChange(o){this.currentValue=o,alert(`Current value changed to ${o}`)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-segmented-button-complex-example"]],decls:5,vars:3,consts:[[3,"ngModel","ngModelChange"],["fd-button","",3,"label",4,"ngFor","ngForOf"],["fd-button","",3,"label"]],template:function(o,n){1&o&&(e.TgZ(0,"fd-segmented-button",0),e.NdJ("ngModelChange",function(r){return n.handleValueChange(r)}),e.YNc(1,N,1,2,"button",1),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"small"),e._uU(4),e.qZA()),2&o&&(e.Q6J("ngModel",n.currentValue),e.xp6(1),e.Q6J("ngForOf",n.values),e.xp6(3),e.hij("value: ",n.currentValue,""))},directives:[b.pS,u.JJ,u.On,J.sg,f.r],encapsulation:2}),t})(),L=(()=>{class t{constructor(){this.customForm=new u.cw({basic:new u.NI("first"),disabled:new u.NI({value:"first",disabled:!0})})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-segmented-button-form-example"]],decls:33,vars:7,consts:[[3,"formGroup"],[2,"margin-bottom","1rem"],["formControlName","basic"],["fd-button","","label","Left","value","first"],["fd-button","","label","Middle","value","second"],["fd-button","","label","Right","value","third"],["formControlName","disabled"]],template:function(o,n){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"h4"),e._uU(3,"Forms"),e.qZA(),e.TgZ(4,"fd-segmented-button",2),e._UZ(5,"button",3)(6,"button",4)(7,"button",5),e.qZA(),e._UZ(8,"br"),e.TgZ(9,"small"),e._uU(10),e.qZA(),e._UZ(11,"br"),e.TgZ(12,"small"),e._uU(13),e.qZA(),e._UZ(14,"br"),e.TgZ(15,"small"),e._uU(16),e.qZA()(),e.TgZ(17,"div")(18,"h4"),e._uU(19,"Disabled Forms"),e.qZA(),e.TgZ(20,"fd-segmented-button",6),e._UZ(21,"button",3)(22,"button",4)(23,"button",5),e.qZA(),e._UZ(24,"br"),e.TgZ(25,"small"),e._uU(26),e.qZA(),e._UZ(27,"br"),e.TgZ(28,"small"),e._uU(29),e.qZA(),e._UZ(30,"br"),e.TgZ(31,"small"),e._uU(32),e.qZA()()()),2&o&&(e.Q6J("formGroup",n.customForm),e.xp6(10),e.hij("Value: ",null==n.customForm.controls||null==n.customForm.controls.basic?null:n.customForm.controls.basic.value," "),e.xp6(3),e.hij("Dirty: ",null==n.customForm.controls||null==n.customForm.controls.basic?null:n.customForm.controls.basic.dirty," "),e.xp6(3),e.hij("Touched: ",null==n.customForm.controls||null==n.customForm.controls.basic?null:n.customForm.controls.basic.touched," "),e.xp6(10),e.hij("Value: ",null==n.customForm.controls||null==n.customForm.controls.disabled?null:n.customForm.controls.disabled.value," "),e.xp6(3),e.hij("Dirty: ",null==n.customForm.controls||null==n.customForm.controls.disabled?null:n.customForm.controls.disabled.dirty," "),e.xp6(3),e.hij("Touched: ",null==n.customForm.controls||null==n.customForm.controls.disabled?null:n.customForm.controls.disabled.touched," "))},directives:[u._Y,u.JL,u.sg,b.pS,u.JJ,u.u,f.r],encapsulation:2}),t})(),O=(()=>{class t{constructor(){this.defaultToggleHtml=[{language:"html",code:s,fileName:"segmented-button-toggle-example"},{component:"SegmentedButtonToggleExampleComponent",language:"typescript",code:x,fileName:"segmented-button-toggle-example"}],this.defaultSizeHtml=[{language:"html",code:d,fileName:"segmented-button-default-example"},{component:"SegmentedButtonDefaultExampleComponent",language:"typescript",code:i,fileName:"segmented-button-default-example"}],this.formExample=[{language:"html",code:U,fileName:"segmented-button-form-example"},{component:"SegmentedButtonFormExampleComponent",language:"typescript",code:T,fileName:"segmented-button-form-example"}],this.complexExample=[{language:"html",code:B,fileName:"segmented-button-complex-example"},{component:"SegmentedButtonComplexExampleComponent",language:"typescript",code:F,fileName:"segmented-button-complex-example"}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-segmented-button"]],decls:39,vars:4,consts:[["id","basic","componentName","segmented-button"],[3,"exampleFiles"],["id","toggle","componentName","segmented-button"],["id","complex","componentName","segmented-button"],["id","form","componentName","segmented-button"]],template:function(o,n){1&o&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Default "),e.qZA(),e.TgZ(2,"description"),e._uU(3," With default SegmentedButton you can communicate by "),e.TgZ(4,"code"),e._uU(5,"[(ngModel)]"),e.qZA(),e._uU(6," with string value. Which means that only one button can be toggled at once\n"),e.qZA(),e.TgZ(7,"component-example"),e._UZ(8,"fd-segmented-button-default-example"),e.qZA(),e._UZ(9,"code-example",1)(10,"separator"),e.TgZ(11,"fd-docs-section-title",2),e._uU(12," Toggle "),e.qZA(),e.TgZ(13,"description"),e._uU(14," With Toggle SegmentedButton you can communicate by "),e.TgZ(15,"code"),e._uU(16,"[(ngModel)]"),e.qZA(),e._uU(17," with array of strings value. So more than one button can be toggled at once.\n"),e.qZA(),e.TgZ(18,"component-example"),e._UZ(19,"fd-segmented-button-toggle-example"),e.qZA(),e._UZ(20,"code-example",1)(21,"separator"),e.TgZ(22,"fd-docs-section-title",3),e._uU(23," Complex "),e.qZA(),e.TgZ(24,"description"),e._uU(25," Change of value can be detected by handling the "),e.TgZ(26,"code"),e._uU(27,"(ngModelChange)"),e.qZA(),e._uU(28," event. "),e.qZA(),e.TgZ(29,"component-example"),e._UZ(30,"fd-segmented-button-complex-example"),e.qZA(),e._UZ(31,"code-example",1)(32,"separator"),e.TgZ(33,"fd-docs-section-title",4),e._uU(34," Segmented Button in Reactive Form\n"),e.qZA(),e.TgZ(35,"component-example"),e._UZ(36,"fd-segmented-button-form-example"),e.qZA(),e._UZ(37,"code-example",1)(38,"separator")),2&o&&(e.xp6(9),e.Q6J("exampleFiles",n.defaultSizeHtml),e.xp6(11),e.Q6J("exampleFiles",n.defaultToggleHtml),e.xp6(11),e.Q6J("exampleFiles",n.complexExample),e.xp6(6),e.Q6J("exampleFiles",n.formExample))},directives:[S.k,C.w,y.O,E,_.E,A.N,D,V,L],encapsulation:2}),t})();var P=l(24882),Q=l(98791),j=l(63710);let I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-segmented-button-header"]],decls:10,vars:0,consts:[["module","SegmentedButtonModule","subPackage","segmented-button"]],template:function(o,n){1&o&&(e.TgZ(0,"header"),e._uU(1,"Segmented Button"),e.qZA(),e.TgZ(2,"description"),e._uU(3," Group a series of buttons together on a single line with the segmented button. "),e._UZ(4,"br")(5,"br"),e._uU(6," Buttons in a segmented button can be navigated to via the tab key and pressed with the space bar or enter key.\n"),e.qZA(),e._UZ(7,"import",0)(8,"fd-header-tabs")(9,"router-outlet"))},directives:[P.G,C.w,Q.k,j.c,g.lC],styles:[""]}),t})();var R=l(84527),H=l(48649);const X=[{path:"",component:I,children:[{path:"",component:O},{path:"api",component:p.h,data:{content:h.X.segmentedButton}}]}];let G=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(X),v.g,R.g7,H.Y],g.Bz]}),t})()},98791:(a,c,l)=>{l.d(c,{k:()=>v});var g=l(59148),p=l(5e3),h=l(8566);let v=(()=>{class d{constructor(s){this.currentLib=s}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const s=["@fundamental-ngx",this.currentLib];this.subPackage&&s.push(this.subPackage),this.library=s.join("/")}}return d.\u0275fac=function(s){return new(s||d)(p.Y36(g.b))},d.\u0275cmp=p.Xpm({type:d,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(s,x){1&s&&p._UZ(0,"fd-code-snippet",0),2&s&&p.Q6J("file",x.file)},directives:[h.N],encapsulation:2,changeDetection:0}),d})()},10446:a=>{a.exports='<fd-segmented-button [ngModel]="currentValue" (ngModelChange)="handleValueChange($event)">\n    <button *ngFor="let value of values" fd-button [label]="value" [attr.value]="value"></button>\n</fd-segmented-button>\n\n<br />\n<small>value: {{ currentValue }}</small>\n'},54204:a=>{a.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-segmented-button-complex-example',\n    templateUrl: './segmented-button-complex-example.component.html'\n})\nexport class SegmentedButtonComplexExampleComponent {\n    values: string[] = ['first', 'second', 'third'];\n    currentValue = '';\n\n    handleValueChange(value: string): void {\n        this.currentValue = value;\n        alert(`Current value changed to ${value}`);\n    }\n}\n"},18959:a=>{a.exports='<fd-text text="example with label buttons"></fd-text>\n<fd-segmented-button [(ngModel)]="value">\n    <button fd-button label="Left" value="first"></button>\n    <button fd-button label="Middle" value="second"></button>\n    <button fd-button label="Right" value="third"></button>\n</fd-segmented-button>\n\n<fd-text text="example with icon buttons"></fd-text>\n<fd-segmented-button [(ngModel)]="value">\n    <button fd-button glyph="cart" value="first"></button>\n    <button fd-button glyph="action" value="second"></button>\n    <button fd-button glyph="activities" value="third"></button>\n</fd-segmented-button>\n\n<br />\n<small>value: {{ value }}</small>\n'},95440:a=>{a.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-segmented-button-default-example',\n    templateUrl: './segmented-button-default-example.component.html'\n})\nexport class SegmentedButtonDefaultExampleComponent {\n    value = 'first';\n}\n"},82887:a=>{a.exports='<form [formGroup]="customForm">\n    <div style="margin-bottom: 1rem">\n        <h4>Forms</h4>\n        <fd-segmented-button formControlName="basic">\n            <button fd-button label="Left" value="first"></button>\n            <button fd-button label="Middle" value="second"></button>\n            <button fd-button label="Right" value="third"></button>\n        </fd-segmented-button>\n        <br />\n        <small>Value: {{ customForm.controls?.basic?.value }} </small><br />\n        <small>Dirty: {{ customForm.controls?.basic?.dirty }} </small><br />\n        <small>Touched: {{ customForm.controls?.basic?.touched }} </small>\n    </div>\n\n    <div>\n        <h4>Disabled Forms</h4>\n        <fd-segmented-button formControlName="disabled">\n            <button fd-button label="Left" value="first"></button>\n            <button fd-button label="Middle" value="second"></button>\n            <button fd-button label="Right" value="third"></button>\n        </fd-segmented-button>\n        <br />\n        <small>Value: {{ customForm.controls?.disabled?.value }} </small><br />\n        <small>Dirty: {{ customForm.controls?.disabled?.dirty }} </small><br />\n        <small>Touched: {{ customForm.controls?.disabled?.touched }} </small>\n    </div>\n</form>\n'},66073:a=>{a.exports="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fd-segmented-button-form-example',\n    templateUrl: './segmented-button-form-example.component.html'\n})\nexport class SegmentedButtonFormExampleComponent {\n    customForm = new FormGroup({\n        basic: new FormControl('first'),\n        disabled: new FormControl({\n            value: 'first',\n            disabled: true\n        })\n    });\n}\n"},34645:a=>{a.exports='<fd-segmented-button [toggle]="true" [(ngModel)]="value">\n    <button fd-button label="Left" value="first"></button>\n    <button fd-button label="Middle" value="second"></button>\n    <button fd-button label="Right" value="third"></button>\n</fd-segmented-button>\n\n<br />\n<small>value: {{ value }}</small>\n'},43800:a=>{a.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-segmented-button-toggle-example',\n    templateUrl: './segmented-button-toggle-example.component.html'\n})\nexport class SegmentedButtonToggleExampleComponent {\n    value: string[] = ['first'];\n}\n"}}]);