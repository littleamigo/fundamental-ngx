"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[407],{80407:(o,c,t)=>{t.r(c),t.d(c,{SplitterDocsModule:()=>G});var m=t(8674),d=t(70794),u=t(78689),h=t(36854),r=t(28674),f=t(25252),l=t(86487),Z=t(96349),A=t(82793),w=t(5069),C=t(66179),S=t(86237),P=t(48363),e=t(5e3),q=t(93943),U=t(44969),_=t(28595),g=t(29721),T=t(5221),v=t(4811);let b=(()=>{class n{onResize(p){console.log(p)}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fd-slider-default-example"]],decls:15,vars:0,consts:[[2,"height","300px"],["defaultPaneId","one"],[3,"resize"],["id","one","size","300px"],["size","300px"],["orientation","horizontal",3,"resize"],["size","150px"],["size","75px"]],template:function(p,a){1&p&&(e.TgZ(0,"div",0)(1,"fd-splitter",1)(2,"fd-splitter-pane-container",2),e.NdJ("resize",function(x){return a.onResize(x)}),e.TgZ(3,"fd-splitter-split-pane",3),e._uU(4," Split pane One "),e.qZA(),e.TgZ(5,"fd-splitter-split-pane",4),e._uU(6," Split pane Two "),e.qZA(),e.TgZ(7,"fd-splitter-split-pane")(8,"fd-splitter-pane-container",5),e.NdJ("resize",function(x){return a.onResize(x)}),e.TgZ(9,"fd-splitter-split-pane",6),e._uU(10," Split pane One, nested "),e.qZA(),e.TgZ(11,"fd-splitter-split-pane",7),e._uU(12," Split pane Two, nested "),e.qZA(),e.TgZ(13,"fd-splitter-split-pane"),e._uU(14," Split pane Three, nested "),e.qZA()()()()()())},directives:[g.H,T.G,v.T],encapsulation:2}),n})();var z=t(29871),y=t(33089);let E=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fd-slider-required-parent-width-example"]],decls:18,vars:3,consts:[[2,"height","300px"],["defaultPaneId","one"],["id","one","size","300px"],["size","300px",3,"requiredParentWidth"],[3,"requiredParentWidth","demandPane"]],template:function(p,a){1&p&&(e.TgZ(0,"div",0)(1,"fd-splitter",1)(2,"fd-splitter-pane-container")(3,"fd-splitter-split-pane",2),e._uU(4," Split pane One "),e._UZ(5,"br"),e.TgZ(6,"span"),e._uU(7," Won't go off-canvas "),e.qZA()(),e.TgZ(8,"fd-splitter-split-pane",3),e._uU(9," Split pane Two "),e._UZ(10,"br"),e.TgZ(11,"span"),e._uU(12," Will go off-canvas on browser window's width < 1000px, will be present on the pagination bar "),e.qZA()(),e.TgZ(13,"fd-splitter-split-pane",4),e._uU(14," Split pane Three "),e._UZ(15,"br"),e.TgZ(16,"span"),e._uU(17," Will go off-canvas on browser window's width < 1100px, won't be present on the pagination bar "),e.qZA()()()()()),2&p&&(e.xp6(8),e.Q6J("requiredParentWidth",1e3),e.xp6(5),e.Q6J("requiredParentWidth",1100)("demandPane",!1))},directives:[g.H,T.G,v.T],encapsulation:2}),n})();var O=t(73095),I=t(98887),W=t(62361),D=t(52122);const R=["paneTwo"];let F=(()=>{class n{hidePaneTwo(){this.splitter.hidePaneFromCanvas(this.paneTwo.id),this.paneTwo.hideFromCanvas()}showPaneTwo(){this.paneTwo.showOnCanvas(),this.splitter.showPaneOnCanvas(this.paneTwo.id)}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fd-slider-api-example"]],viewQuery:function(p,a){if(1&p&&(e.Gf(u.H4,5),e.Gf(R,5)),2&p){let s;e.iGM(s=e.CRH())&&(a.splitter=s.first),e.iGM(s=e.CRH())&&(a.paneTwo=s.first)}},decls:16,vars:1,consts:[["fd-bar","",2,"margin-bottom","10px"],["fd-bar-left",""],["fd-bar-right",""],["label","Hide second pane",3,"click"],["label","Show second pane",3,"click"],[2,"height","300px"],["defaultPaneId","one"],["id","one","size","300px"],["size","300px"],["paneTwo",""]],template:function(p,a){if(1&p&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2)(4,"fd-button-bar",3),e.NdJ("click",function(){return a.hidePaneTwo()}),e.qZA(),e.TgZ(5,"fd-button-bar",4),e.NdJ("click",function(){return a.showPaneTwo()}),e.qZA()()(),e.TgZ(6,"div",5)(7,"fd-splitter",6)(8,"fd-splitter-pane-container")(9,"fd-splitter-split-pane",7),e._uU(10," Split pane One "),e.qZA(),e.TgZ(11,"fd-splitter-split-pane",8,9),e._uU(13," Split pane Two "),e.qZA(),e.TgZ(14,"fd-splitter-split-pane"),e._uU(15," Split pane Three "),e.qZA()()()()),2&p){const s=e.MAs(12);e.xp6(2),e.hij("Is the second pane on the canvas: ",null==s?null:s.isOnCanvas," (pane API)")}},directives:[O.R,I.b,W.M,D.N,g.H,T.G,v.T],encapsulation:2}),n})(),M=(()=>{class n{constructor(){this.default=[{language:"html",code:Z,fileName:"splitter-default-example",name:"splitter-default-example.component.html"},{language:"typescript",code:A,fileName:"splitter-default-example",component:"SplitterDefaultExampleComponent",name:"splitter-default-example.component.ts"}],this.requiredParentWidth=[{language:"html",code:w,fileName:"splitter-required-parent-width-example",name:"splitter-required-parent-width-example.component.html"},{language:"typescript",code:C,fileName:"splitter-required-parent-width-example",component:"SplitterRequiredParentWidthExampleComponent",name:"splitter-required-parent-width-example.component.ts"}],this.splitterApi=[{language:"html",code:S,fileName:"splitter-api-example",name:"splitter-api-example.component.html"},{language:"typescript",code:P,fileName:"splitter-api-example",name:"splitter-api-example.component.ts",component:"SplitterApiExampleComponent"}]}}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-splitter"]],decls:123,vars:3,consts:[["id","basic","componentName","splitter"],[3,"exampleFiles"],["id","required-parent-width","componentName","splitter"],["id","api","componentName","splitter"]],template:function(p,a){1&p&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1,"Basic"),e.qZA(),e.TgZ(2,"description"),e._uU(3," This example shows simple splitter usage. Basic input properties. "),e.TgZ(4,"p")(5,"code"),e._uU(6,"fd-splitter"),e.qZA(),e._uU(7,":"),e.qZA(),e.TgZ(8,"ul")(9,"li"),e._uU(10," Use "),e.TgZ(11,"code"),e._uU(12,"[defaultPaneId]"),e.qZA(),e._uU(13," input property of the "),e.TgZ(14,"code"),e._uU(15,"fd-splitter"),e.qZA(),e._uU(16," to define main pane. Please make sure the default pane is in the root container (not in nested container). "),e.qZA()(),e.TgZ(17,"p")(18,"code"),e._uU(19,"fd-splitter-pane-container"),e.qZA(),e._uU(20,":"),e.qZA(),e.TgZ(21,"ul")(22,"li"),e._uU(23," use "),e.TgZ(24,"code"),e._uU(25,"orientation"),e.qZA(),e._uU(26," to set pane orientation. May be "),e.TgZ(27,"code"),e._uU(28,"vertical"),e.qZA(),e._uU(29," (default) or "),e.TgZ(30,"code"),e._uU(31,"horizontal"),e.qZA(),e._uU(32,". "),e.qZA(),e.TgZ(33,"li"),e._uU(34,"listen for "),e.TgZ(35,"code"),e._uU(36,"(resize)"),e.qZA(),e._uU(37," event to get resize information (panes and their updated widths)."),e.qZA()(),e.TgZ(38,"p")(39,"code"),e._uU(40,"fd-splitter-split-pane"),e.qZA(),e._uU(41,":"),e.qZA(),e.TgZ(42,"ul")(43,"li"),e._uU(44,"Use "),e.TgZ(45,"code"),e._uU(46,"[size]"),e.qZA(),e._uU(47," input property of the "),e.TgZ(48,"code"),e._uU(49,"fd-splitter-split-pane"),e.qZA(),e._uU(50," to define pane width."),e.qZA(),e.TgZ(51,"li"),e._uU(52,"Use "),e.TgZ(53,"code"),e._uU(54,"[id]"),e.qZA(),e._uU(55," input property of the "),e.TgZ(56,"code"),e._uU(57,"fd-splitter-split-pane"),e.qZA(),e._uU(58," to define pane id."),e.qZA()()(),e.TgZ(59,"component-example"),e._UZ(60,"fd-slider-default-example"),e.qZA(),e._UZ(61,"code-example",1)(62,"separator"),e.TgZ(63,"fd-docs-section-title",2),e._uU(64,"Required parent width"),e.qZA(),e.TgZ(65,"description")(66,"ul")(67,"li"),e._uU(68," Use "),e.TgZ(69,"code"),e._uU(70,"[requiredParentWidth]"),e.qZA(),e._uU(71," (number, pixels) input property of the "),e.TgZ(72,"code"),e._uU(73,"fd-splitter-split-pane"),e.qZA(),e._uU(74," to set minimal required window's width when pane will be shown. "),e.qZA(),e.TgZ(75,"li"),e._uU(76," Use "),e.TgZ(77,"code"),e._uU(78,"[demandPane]"),e.qZA(),e._uU(79," (boolean) to specify if the pane will be available using the pagination bar when it's off-canvas. "),e.qZA()()(),e.TgZ(80,"component-example"),e._UZ(81,"fd-slider-required-parent-width-example"),e.qZA(),e._UZ(82,"code-example",1)(83,"separator"),e.TgZ(84,"fd-docs-section-title",3),e._uU(85,"API of the Splitter & subcomponents"),e.qZA(),e.TgZ(86,"description")(87,"code"),e._uU(88,"fd-splitter"),e.qZA(),e._uU(89," has next API methods: "),e.TgZ(90,"ul")(91,"li")(92,"code"),e._uU(93,"splitter.showPaneOnCanvas(paneId: string)"),e.qZA(),e._uU(94," to show certain pane on the canvas."),e.qZA(),e.TgZ(95,"li")(96,"code"),e._uU(97,"splitter.hidePaneFromCanvas(paneId: string)"),e.qZA(),e._uU(98," to hide certain pane from the canvas."),e.qZA(),e.TgZ(99,"li")(100,"code"),e._uU(101,"splitter.isPaneOnCanvas(paneId: string)"),e.qZA(),e._uU(102," to check whether certain pane is on canvas."),e.qZA()(),e.TgZ(103,"code"),e._uU(104,"fd-splitter-split-pane"),e.qZA(),e._uU(105," has next API methods & getters: "),e.TgZ(106,"ul")(107,"li")(108,"code"),e._uU(109,"splitPane.showOnCanvas()"),e.qZA(),e._uU(110," to show pane on the canvas."),e.qZA(),e.TgZ(111,"li")(112,"code"),e._uU(113,"splitPane.hideFromCanvas()"),e.qZA(),e._uU(114," to hide pane from the canvas."),e.qZA(),e.TgZ(115,"li")(116,"code"),e._uU(117,"splitPane.isOnCanvas"),e.qZA(),e._uU(118," to check whether pane is on canvas."),e.qZA()()(),e.TgZ(119,"component-example"),e._UZ(120,"fd-slider-api-example"),e.qZA(),e._UZ(121,"code-example",1)(122,"separator")),2&p&&(e.xp6(61),e.Q6J("exampleFiles",a.default),e.xp6(21),e.Q6J("exampleFiles",a.requiredParentWidth),e.xp6(39),e.Q6J("exampleFiles",a.splitterApi))},directives:[q.k,U.w,_.O,b,z.E,y.N,E,F],encapsulation:2}),n})();var N=t(24882),H=t(98791),J=t(63710);const B=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["fd-slider-header"]],decls:10,vars:0,consts:[["module","SplitterModule","subPackage","splitter"]],template:function(p,a){1&p&&(e.TgZ(0,"header"),e._uU(1,"Splitter/Responsive Splitter"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," The responsive splitter layout structures complex applications into defined areas. These areas may be resizable and are either distributed on one screen or across different areas, which may also be off-canvas. This depends on the device class and the requirements and settings of the application. "),e.qZA(),e.TgZ(5,"p"),e._uU(6," The defined areas are resizable manually, programmatically, and/or by external function holders such as buttons or menu entries. These areas and their parent containers are parts of the responsive splitter control and have properties that can be changed to meet an application\u2019s need. "),e.qZA()(),e._UZ(7,"import",0)(8,"fd-header-tabs")(9,"router-outlet"))},directives:[N.G,U.w,H.k,J.c,m.lC],encapsulation:2}),n})(),children:[{path:"",component:M},{path:"api",component:h.h,data:{content:l.X.slider}}]}];let G=(()=>{class n{}return n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.Bz.forChild(B),f.J,r.g,u.tP,d.Fh],m.Bz]}),n})()},98791:(o,c,t)=>{t.d(c,{k:()=>h});var m=t(59148),d=t(5e3),u=t(8566);let h=(()=>{class r{constructor(l){this.currentLib=l}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const l=["@fundamental-ngx",this.currentLib];this.subPackage&&l.push(this.subPackage),this.library=l.join("/")}}return r.\u0275fac=function(l){return new(l||r)(d.Y36(m.b))},r.\u0275cmp=d.Xpm({type:r,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(l,Z){1&l&&d._UZ(0,"fd-code-snippet",0),2&l&&d.Q6J("file",Z.file)},directives:[u.N],encapsulation:2,changeDetection:0}),r})()},86237:o=>{o.exports='<div fd-bar style="margin-bottom: 10px">\n    <div fd-bar-left>Is the second pane on the canvas: {{ paneTwo?.isOnCanvas }} (pane API)</div>\n\n    <div fd-bar-right>\n        <fd-button-bar label="Hide second pane" (click)="hidePaneTwo()"></fd-button-bar>\n        <fd-button-bar label="Show second pane" (click)="showPaneTwo()"></fd-button-bar>\n    </div>\n</div>\n\n<div style="height: 300px">\n    <fd-splitter defaultPaneId="one">\n        <fd-splitter-pane-container>\n            <fd-splitter-split-pane id="one" size="300px"> Split pane One </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane size="300px" #paneTwo> Split pane Two </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane> Split pane Three </fd-splitter-split-pane>\n        </fd-splitter-pane-container>\n    </fd-splitter>\n</div>\n'},48363:o=>{o.exports="import { Component, ViewChild } from '@angular/core';\n\nimport { SplitterComponent, SplitterSplitPaneComponent } from '@fundamental-ngx/core/splitter';\n\n@Component({\n    selector: 'fd-slider-api-example',\n    templateUrl: './splitter-api-example.component.html'\n})\nexport class SplitterApiExampleComponent {\n    @ViewChild(SplitterComponent)\n    splitter: SplitterComponent;\n\n    @ViewChild('paneTwo')\n    paneTwo: SplitterSplitPaneComponent;\n\n    hidePaneTwo(): void {\n        this.splitter.hidePaneFromCanvas(this.paneTwo.id);\n\n        // Also can be used\n\n        this.paneTwo.hideFromCanvas();\n    }\n\n    showPaneTwo(): void {\n        this.paneTwo.showOnCanvas();\n\n        // Also can be used\n\n        this.splitter.showPaneOnCanvas(this.paneTwo.id);\n    }\n}\n"},96349:o=>{o.exports='<div style="height: 300px">\n    <fd-splitter defaultPaneId="one">\n        <fd-splitter-pane-container (resize)="onResize($event)">\n            <fd-splitter-split-pane id="one" size="300px"> Split pane One </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane size="300px"> Split pane Two </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane>\n                <fd-splitter-pane-container orientation="horizontal" (resize)="onResize($event)">\n                    <fd-splitter-split-pane size="150px"> Split pane One, nested </fd-splitter-split-pane>\n\n                    <fd-splitter-split-pane size="75px"> Split pane Two, nested </fd-splitter-split-pane>\n\n                    <fd-splitter-split-pane> Split pane Three, nested </fd-splitter-split-pane>\n                </fd-splitter-pane-container>\n            </fd-splitter-split-pane>\n        </fd-splitter-pane-container>\n    </fd-splitter>\n</div>\n'},82793:o=>{o.exports="import { Component } from '@angular/core';\n\nimport { SplitterPaneResizeEvent } from '@fundamental-ngx/core/splitter';\n\n@Component({\n    selector: 'fd-slider-default-example',\n    templateUrl: './splitter-default-example.component.html'\n})\nexport class SplitterDefaultExampleComponent {\n    onResize(event: SplitterPaneResizeEvent[]): void {\n        console.log(event);\n    }\n}\n"},5069:o=>{o.exports='<div style="height: 300px">\n    <fd-splitter defaultPaneId="one">\n        <fd-splitter-pane-container>\n            <fd-splitter-split-pane id="one" size="300px">\n                Split pane One\n\n                <br />\n\n                <span> Won\'t go off-canvas </span>\n            </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane size="300px" [requiredParentWidth]="1000">\n                Split pane Two\n\n                <br />\n\n                <span>\n                    Will go off-canvas on browser window\'s width < 1000px, will be present on the pagination bar\n                </span>\n            </fd-splitter-split-pane>\n\n            <fd-splitter-split-pane [requiredParentWidth]="1100" [demandPane]="false">\n                Split pane Three\n\n                <br />\n\n                <span>\n                    Will go off-canvas on browser window\'s width < 1100px, won\'t be present on the pagination bar\n                </span>\n            </fd-splitter-split-pane>\n        </fd-splitter-pane-container>\n    </fd-splitter>\n</div>\n'},66179:o=>{o.exports="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-slider-required-parent-width-example',\n    templateUrl: './splitter-required-parent-width-example.component.html'\n})\nexport class SplitterRequiredParentWidthExampleComponent {}\n"}}]);