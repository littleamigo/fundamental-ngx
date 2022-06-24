"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6468],{66468:(s,u,o)=>{o.r(u),o.d(u,{BusyIndicatorDocsModule:()=>$});var c=o(8674),r=o(36854),y=o(86487),e=o(5e3),d=o(24882),p=o(44969),l=o(98791),f=o(63710);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-busy-indicator-header"]],decls:18,vars:0,consts:[["module","BusyIndicatorModule","subPackage","busy-indicator"]],template:function(n,i){1&n&&(e.TgZ(0,"header"),e._uU(1,"Busy Indicator"),e.qZA(),e.TgZ(2,"description"),e._uU(3," The busy indicator informs the user about an ongoing operation. Try to avoid showing multiple busy indicators at once. Use the busy indicator if: "),e.TgZ(4,"ul")(5,"li"),e._uU(6,"The ongoing operation covers only part of a screen that has multiple controls"),e.qZA(),e.TgZ(7,"li"),e._uU(8,"You need to display additional information or the user needs to be able to cancel the operation"),e.qZA()(),e._uU(9," Do not use the busy indicator if: "),e.TgZ(10,"ul")(11,"li"),e._uU(12,"The operation takes less than one second"),e.qZA(),e.TgZ(13,"li"),e._uU(14," You need to block the screen because the user is not supposed to start another activity. In this case, use the busy dialog "),e.qZA()()(),e._UZ(15,"import",0)(16,"fd-header-tabs")(17,"router-outlet"))},directives:[d.G,p.w,l.k,f.c,c.lC],encapsulation:2}),t})();var v=o(35083),I=o(34188),B=o(10043),T=o(35045),U=o(68163),E=o(41921),C=o(50248),A=o(47058),z=o(93943),P=o(28595),m=o(77023);let F=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-basic-example"]],decls:2,vars:1,consts:[[2,"text-align","center"],["ariaLabel","loading","title","Please Wait",3,"loading"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"fd-busy-indicator",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("loading",!0))},directives:[m.B],encapsulation:2}),t})();var S=o(29871),w=o(33089),N=o(69808);function W(t,a){if(1&t&&(e.TgZ(0,"div",1),e._UZ(1,"fd-busy-indicator",2),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("loading",!0)("size",n)("title",n+" size loading")}}let D=(()=>{class t{constructor(){this.sizes=["s","m","l"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-size-example"]],decls:1,vars:1,consts:[["style","text-align: center",4,"ngFor","ngForOf"],[2,"text-align","center"],[3,"loading","size","title"]],template:function(n,i){1&n&&e.YNc(0,W,2,3,"div",0),2&n&&e.Q6J("ngForOf",i.sizes)},directives:[N.sg,m.B],encapsulation:2}),t})();var g=o(91092);let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-label-example"]],decls:2,vars:1,consts:[["fd-busy-indicator-extended",""],["label","Please wait","title","Please wait",3,"loading"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"fd-busy-indicator",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("loading",!0))},directives:[g.R,m.B],encapsulation:2}),t})();var _=o(68405),x=o(87757);function M(t,a){1&t&&(e.TgZ(0,"div",3),e._UZ(1,"fd-busy-indicator",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("loading",!0))}let L=(()=>{class t{constructor(n){this.messageToastService=n}openFromTemplate(n){this.messageToastService.open(n,{mousePersist:!0,duration:-1})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.H2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-extended-example"]],decls:4,vars:0,consts:[["fd-button","","label","Open from Template",3,"click"],["fd-button","","label","Hide All","fdType","emphasized",3,"click"],["template",""],["fd-busy-indicator-extended",""],["label","Please Wait...","title","Please wait",3,"loading"]],template:function(n,i){if(1&n){const Z=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(Z);const V=e.MAs(3);return i.openFromTemplate(V)}),e.qZA(),e.TgZ(1,"button",1),e.NdJ("click",function(){return i.messageToastService.hideAll()}),e.qZA(),e.YNc(2,M,2,1,"ng-template",null,2,e.W1O)}},directives:[x.r,g.R,m.B],encapsulation:2}),t})();var b=o(52382),Q=o(20586),O=o(68226),H=o(52944);let X=(()=>{class t{constructor(){this.loading=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-busy-indicator-wrapper-example"]],decls:23,vars:4,consts:[["id","fd-busy-indicator-label-1"],["aria-labelledby","fd-busy-indicator-label-1","title","Block Wrapper",3,"loading","block"],["fd-form-item",""],["fd-form-label","","for","name"],["fd-form-control","","id","name","type","text"],["fd-form-label","","for","surname"],["fd-form-control","","id","surname","type","text"],["fd-form-label","","for","password"],["fd-form-control","","id","password","type","password"],["id","fd-busy-indicator-label-2"],["size","s","aria-labelledby","fd-busy-indicator-label-2","title","Inline Wrapper",3,"loading"],["fd-button","","label","Save"],["fd-button","",3,"label","click"]],template:function(n,i){1&n&&(e.TgZ(0,"h5",0),e._uU(1,"Use Busy Indicator as a block wrapper"),e.qZA(),e.TgZ(2,"fd-busy-indicator",1)(3,"form")(4,"div",2)(5,"label",3),e._uU(6,"Name:"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.TgZ(8,"div",2)(9,"label",5),e._uU(10,"Surname:"),e.qZA(),e._UZ(11,"input",6),e.qZA(),e.TgZ(12,"div",2)(13,"label",7),e._uU(14,"Password:"),e.qZA(),e._UZ(15,"input",8),e.qZA()()(),e.TgZ(16,"h5",9),e._uU(17,"Use Busy Indicator as a inline wrapper"),e.qZA(),e.TgZ(18,"fd-busy-indicator",10),e._UZ(19,"button",11),e.qZA(),e._UZ(20,"br")(21,"br"),e.TgZ(22,"button",12),e.NdJ("click",function(){return i.loading=!i.loading}),e.qZA()),2&n&&(e.xp6(2),e.Q6J("loading",i.loading)("block",!0),e.xp6(16),e.Q6J("loading",i.loading),e.xp6(4),e.Q6J("label",i.loading?"Disable":"Enable loading"))},directives:[m.B,b._Y,b.JL,b.F,Q.J,O.h,H.A,x.r],encapsulation:2}),t})(),q=(()=>{class t{constructor(){this.busyIndicatorBasicExample=[{language:"html",code:v,fileName:"busy-indicator-basic-example"}],this.busyIndicatorSizeExample=[{language:"html",code:I,fileName:"busy-indicator-size-example"},{language:"typescript",code:B,fileName:"busy-indicator-size-example",component:"BusyIndicatorSizeExampleComponent"}],this.busyIndicatorLabelExample=[{language:"html",code:T,fileName:"busy-indicator-label-example"}],this.busyIndicatorExtendedExample=[{language:"html",code:U,fileName:"busy-indicator-extended-example"},{language:"typescript",code:E,fileName:"busy-indicator-extended-example",component:"BusyIndicatorExtendedExampleComponent"}],this.busyIndicatorWrapperExample=[{language:"html",code:A,fileName:"busy-indicator-wrapper-example"},{language:"typescript",code:C,fileName:"busy-indicator-wrapper-example",component:"BusyIndicatorWrapperExampleComponent"}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-busy-indicator-docs"]],decls:60,vars:5,consts:[["id","default","componentName","busy-indicator"],[3,"exampleFiles"],["id","size","componentName","busy-indicator"],["id","label","componentName","busy-indicator"],["id","extended","componentName","busy-indicator"],["id","wrapper","componentName","busy-indicator"]],template:function(n,i){1&n&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Default Busy Indicator "),e.qZA(),e.TgZ(2,"description"),e._uU(3," Busy Indicator displays loading animation depending on its state. To set Busy Indicator state use "),e.TgZ(4,"code"),e._uU(5,"[loading]"),e.qZA(),e._uU(6," property.\n"),e.qZA(),e.TgZ(7,"component-example"),e._UZ(8,"fd-busy-indicator-basic-example"),e.qZA(),e._UZ(9,"code-example",1)(10,"separator"),e.TgZ(11,"fd-docs-section-title",2),e._uU(12," Busy Indicator sizes "),e.qZA(),e.TgZ(13,"description"),e._uU(14," Busy Indicator can be displayed in three different sizes. To change the size use "),e.TgZ(15,"code"),e._uU(16,"[size]"),e.qZA(),e._uU(17," property.\n"),e.qZA(),e.TgZ(18,"component-example"),e._UZ(19,"fd-busy-indicator-size-example"),e.qZA(),e._UZ(20,"code-example",1)(21,"separator"),e.TgZ(22,"fd-docs-section-title",3),e._uU(23," Busy Indicator with label "),e.qZA(),e.TgZ(24,"description"),e._uU(25," Busy Indicator can be displayed with label when loading the content. To add the label use "),e.TgZ(26,"code"),e._uU(27,"[label]"),e.qZA(),e._uU(28," string property.\n"),e.qZA(),e.TgZ(29,"component-example"),e._UZ(30,"fd-busy-indicator-label-example"),e.qZA(),e._UZ(31,"code-example",1)(32,"separator"),e.TgZ(33,"fd-docs-section-title",4),e._uU(34," Busy Indicator with message toast\n"),e.qZA(),e.TgZ(35,"description"),e._uU(36," Busy Indicator can be displayed with message toast when loading the content. To add the extended busy indicator wrap the "),e.TgZ(37,"code"),e._uU(38,"fd-busy-indicator"),e.qZA(),e._uU(39," component with in "),e.TgZ(40,"code"),e._uU(41,"fd-busy-indicator-extended"),e.qZA(),e._uU(42," directive.\n"),e.qZA(),e.TgZ(43,"component-example"),e._UZ(44,"fd-busy-indicator-extended-example"),e.qZA(),e._UZ(45,"code-example",1)(46,"separator"),e.TgZ(47,"fd-docs-section-title",5),e._uU(48," Busy Indicator as wrapper "),e.qZA(),e.TgZ(49,"description"),e._uU(50," Busy Indicator might be used as a wrapper to display elements or sections of the page behind an overflow. Depending of the wrapped element type, use "),e.TgZ(51,"code"),e._uU(52,"[block]"),e.qZA(),e._uU(53," property to manipulate the "),e.TgZ(54,"code"),e._uU(55,"display"),e.qZA(),e._uU(56," property of the Busy Indicator.\n"),e.qZA(),e.TgZ(57,"component-example"),e._UZ(58,"fd-busy-indicator-wrapper-example"),e.qZA(),e._UZ(59,"code-example",1)),2&n&&(e.xp6(9),e.Q6J("exampleFiles",i.busyIndicatorBasicExample),e.xp6(11),e.Q6J("exampleFiles",i.busyIndicatorSizeExample),e.xp6(11),e.Q6J("exampleFiles",i.busyIndicatorLabelExample),e.xp6(14),e.Q6J("exampleFiles",i.busyIndicatorExtendedExample),e.xp6(14),e.Q6J("exampleFiles",i.busyIndicatorWrapperExample))},directives:[z.k,p.w,P.O,F,S.E,w.N,D,J,L,X],styles:["app-busy-indicator-docs .fd-button{margin-right:8px}\n"],encapsulation:2}),t})();var Y=o(28674),R=o(78793),j=o(90523);const K=[{path:"",component:h,children:[{path:"",component:q},{path:"api",component:r.h,data:{content:y.X.busyIndicator}}]}];let $=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(K),Y.g,R.UH,j.ej],c.Bz]}),t})()},98791:(s,u,o)=>{o.d(u,{k:()=>e});var c=o(59148),r=o(5e3),y=o(8566);let e=(()=>{class d{constructor(l){this.currentLib=l}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const l=["@fundamental-ngx",this.currentLib];this.subPackage&&l.push(this.subPackage),this.library=l.join("/")}}return d.\u0275fac=function(l){return new(l||d)(r.Y36(c.b))},d.\u0275cmp=r.Xpm({type:d,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(l,f){1&l&&r._UZ(0,"fd-code-snippet",0),2&l&&r.Q6J("file",f.file)},directives:[y.N],encapsulation:2,changeDetection:0}),d})()},35083:s=>{s.exports='<div style="text-align: center">\n    <fd-busy-indicator [loading]="true" ariaLabel="loading" title="Please Wait"></fd-busy-indicator>\n</div>\n'},68163:s=>{s.exports='<button fd-button label="Open from Template" (click)="openFromTemplate(template)"></button>\n<button fd-button label="Hide All" fdType="emphasized" (click)="messageToastService.hideAll()"></button>\n\n<ng-template #template>\n    <div fd-busy-indicator-extended>\n        <fd-busy-indicator [loading]="true" label="Please Wait..." title="Please wait"></fd-busy-indicator>\n    </div>\n</ng-template>\n'},41921:s=>{s.exports="import { Component } from '@angular/core';\nimport { MessageToastService } from '@fundamental-ngx/core/message-toast';\n\n@Component({\n    selector: 'fd-busy-indicator-extended-example',\n    templateUrl: './busy-indicator-extended-example.component.html'\n})\nexport class BusyIndicatorExtendedExampleComponent {\n    /** @hidden */\n    constructor(public messageToastService: MessageToastService) {}\n\n    openFromTemplate(template): void {\n        this.messageToastService.open(template, {\n            mousePersist: true,\n            duration: -1\n        });\n    }\n}\n"},35045:s=>{s.exports='<div fd-busy-indicator-extended>\n    <fd-busy-indicator [loading]="true" label="Please wait" title="Please wait"></fd-busy-indicator>\n</div>\n'},34188:s=>{s.exports='<div style="text-align: center" *ngFor="let size of sizes">\n    <fd-busy-indicator [loading]="true" [size]="size" [title]="size + \' \' + \'size loading\'"></fd-busy-indicator>\n</div>\n'},10043:s=>{s.exports="import { Component } from '@angular/core';\nimport { BusyIndicatorSize } from '@fundamental-ngx/core/busy-indicator';\n\n@Component({\n    selector: 'fd-busy-indicator-size-example',\n    templateUrl: './busy-indicator-size-example.component.html'\n})\nexport class BusyIndicatorSizeExampleComponent {\n    sizes: BusyIndicatorSize[] = ['s', 'm', 'l'];\n}\n"},47058:s=>{s.exports='<h5 id="fd-busy-indicator-label-1">Use Busy Indicator as a block wrapper</h5>\n<fd-busy-indicator [loading]="loading" [block]="true" aria-labelledby="fd-busy-indicator-label-1" title="Block Wrapper">\n    <form>\n        <div fd-form-item>\n            <label fd-form-label for="name">Name:</label>\n            <input fd-form-control id="name" type="text" />\n        </div>\n\n        <div fd-form-item>\n            <label fd-form-label for="surname">Surname:</label>\n            <input fd-form-control id="surname" type="text" />\n        </div>\n\n        <div fd-form-item>\n            <label fd-form-label for="password">Password:</label>\n            <input fd-form-control id="password" type="password" />\n        </div>\n    </form>\n</fd-busy-indicator>\n\n<h5 id="fd-busy-indicator-label-2">Use Busy Indicator as a inline wrapper</h5>\n<fd-busy-indicator [loading]="loading" size="s" aria-labelledby="fd-busy-indicator-label-2" title="Inline Wrapper">\n    <button fd-button label="Save"></button>\n</fd-busy-indicator>\n\n<br />\n<br />\n\n<button fd-button [label]="loading ? \'Disable\' : \'Enable\' + \' loading\'" (click)="loading = !loading"></button>\n'},50248:s=>{s.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-busy-indicator-wrapper-example',\n    templateUrl: './busy-indicator-wrapper-example.component.html'\n})\nexport class BusyIndicatorWrapperExampleComponent {\n    loading = true;\n}\n"}}]);