"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6860],{36854:(l,T,n)=>{n.d(T,{h:()=>h});var i=n(74042),o=(n(77135),n(5e3)),f=n(8674),m=n(69808),d=n(87757),r=n(63043),x=n(50578),Z=n(27078),_=n(42437),E=n(24919);const v=["menu"];function O(g,e){if(1&g&&o._UZ(0,"button",8),2&g){const s=o.oxw(),b=o.MAs(6);o.Q6J("label","Select a file ("+s.files.length+")")("fdMenu",!0)("fdMenuTrigger",b)}}function P(g,e){if(1&g){const s=o.EpF();o.TgZ(0,"li",9),o.NdJ("click",function(){const C=o.CHM(s).$implicit;return o.oxw().getFile(C)}),o.TgZ(1,"div",10)(2,"span",11),o._uU(3),o.qZA()()()}if(2&g){const s=e.$implicit,b=o.oxw();o.ekj("is-selected",s===b.activeFile),o.xp6(3),o.Oqu(s)}}let h=(()=>{class g{constructor(s,b){this.route=s,this.apiService=b}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(s){this.apiService.getComponentHtml(s).subscribe(b=>{this.result=b,this.activeFile=s,this.menu.close()},b=>{console.warn("Did not find file "+s+".\nError: "+b)})}}return g.\u0275fac=function(s){return new(s||g)(o.Y36(f.gz),o.Y36(i.S))},g.\u0275cmp=o.Xpm({type:g,selectors:[["fd-api"]],viewQuery:function(s,b){if(1&s&&o.Gf(v,5),2&s){let I;o.iGM(I=o.CRH())&&(b.menu=I.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(s,b){1&s&&(o.TgZ(0,"div",0)(1,"h2",1),o._uU(2),o.qZA(),o._UZ(3,"span",2),o.YNc(4,O,1,3,"button",3),o.TgZ(5,"fd-menu",4,5),o.YNc(7,P,4,3,"li",6),o.qZA()(),o._UZ(8,"div",7)),2&s&&(o.xp6(2),o.Oqu(b.activeFile),o.xp6(2),o.Q6J("ngIf",b.files.length>1),o.xp6(1),o.Q6J("fillControlMode",null),o.xp6(2),o.Q6J("ngForOf",b.files),o.xp6(1),o.Q6J("innerHTML",b.result,o.oJD))},directives:[m.O5,d.r,r.k,x.M,m.sg,Z.qv,_.K,E.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),g})()},63710:(l,T,n)=>{n.d(T,{c:()=>Z});var i=n(5e3),u=n(17791),o=n(66997),f=n(8674),m=n(1726),d=n(55124),r=n(33089);const x=function(){return{exact:!0}};let Z=(()=>{class _{}return _.\u0275fac=function(v){return new(v||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(v,O){if(1&v&&(i.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),i._uU(5,"Examples"),i.qZA()()(),i.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),i._uU(10,"API"),i.qZA()()()(),i._UZ(11,"separator",7)),2&v){const P=i.MAs(3),h=i.MAs(8);i.xp6(2),i.Q6J("active",P.isActive)("routerLinkActiveOptions",i.DdM(3,x)),i.xp6(5),i.Q6J("active",h.isActive)}},directives:[u.d,o.w,f.yS,m.w,f.Od,d.P6,r.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),_})()},24882:(l,T,n)=>{n.d(T,{G:()=>o});var i=n(5e3);const u=["*"];let o=(()=>{class f{}return f.\u0275fac=function(d){return new(d||f)},f.\u0275cmp=i.Xpm({type:f,selectors:[["header"]],ngContentSelectors:u,decls:2,vars:0,consts:[[1,"header"]],template:function(d,r){1&d&&(i.F$t(),i.TgZ(0,"h1",0),i.Hsn(1),i.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"]}),f})()},98791:(l,T,n)=>{n.d(T,{k:()=>f});var i=n(59148),u=n(5e3),o=n(8566);let f=(()=>{class m{constructor(r){this.currentLib=r}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const r=["@fundamental-ngx",this.currentLib];this.subPackage&&r.push(this.subPackage),this.library=r.join("/")}}return m.\u0275fac=function(r){return new(r||m)(u.Y36(i.b))},m.\u0275cmp=u.Xpm({type:m,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(r,x){1&r&&u._UZ(0,"fd-code-snippet",0),2&r&&u.Q6J("file",x.file)},directives:[o.N],encapsulation:2,changeDetection:0}),m})()},74042:(l,T,n)=>{n.d(T,{S:()=>f});var i=n(59148),u=n(5e3),o=n(40520);let f=(()=>{class m{constructor(r,x){this.httpClient=r,this.currentLib=x,this.BASE_URL="assets/typedoc/"}getComponentHtml(r){r=r.toLocaleLowerCase()+".html";const x=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",r);return this.httpClient.get(x,{responseType:"text"})}buildUrl(...r){return r.join("/").replace(/\/+/g,"/")}}return m.\u0275fac=function(r){return new(r||m)(u.LFG(o.eN),u.LFG(i.b))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac}),m})()},28674:(l,T,n)=>{n.d(T,{g:()=>b});var i=n(69808),u=n(8674),o=n(52382),f=n(62970),m=n(53732),d=n(74042),r=n(32818),x=n(30825),Z=n(90523),_=n(80848),E=n(83271),v=n(77135),O=n(89282),P=n(95037),h=n(46394),g=n(75394);const e=[h.P4,v.$9,_.Q,P.o,x.hJ,O.H,Z.nY,E.LO,g.s];var s=n(5e3);let b=(()=>{class I{}return I.\u0275fac=function(B){return new(B||I)},I.\u0275mod=s.oAB({type:I}),I.\u0275inj=s.cJS({providers:[m.t,d.S],imports:[[o.u5,i.ez,u.Bz,r.f,e,f.JP.forChild()],o.u5,o.UX,r.f,i.ez,h.P4,v.$9,_.Q,P.o,x.hJ,O.H,Z.nY,E.LO,g.s]}),I})()},6860:(l,T,n)=>{n.r(T),n.d(T,{PlatformIconTabBarDocsModule:()=>V});var i=n(8674),u=n(36854),o=n(39405),f=n(50769),m=n(29325),d=n(50055),r=n(3939),x=n(34034),Z=n(81610),_=n(3597),E=n(47783),v=n(97675),O=n(94186),P=n(67849),h=n(37227),g=n(46220),e=n(5e3),s=n(93943),b=n(44969),I=n(28595);const C=[{label:"Item 0",counter:55,color:"critical",active:!0,subItems:null},{label:"Item 1",counter:96,color:null,badge:!0},{label:"Item 2",counter:51,color:null},{label:"Item 3",counter:18,color:null},{label:"Item 4",counter:0,color:null},{label:"Item 5",counter:34,color:"critical"},{label:"Item 6",counter:58,color:"positive"},{label:"Item 7",counter:15,color:null},{label:"Item 8",counter:76,color:null},{label:"Item 9",counter:59,color:null}],B=[...C,{label:"Item 10",counter:70,color:"critical",subItems:[{label:"Item 0",counter:null,color:"critical"},{label:"Item 1",counter:null,color:null},{label:"Item 2",counter:null,color:null}]},{label:"Item 11",counter:41,color:null},{label:"Item 12",counter:30,color:"positive"},{label:"Item 13",counter:95,color:null},{label:"Item 14",counter:32,color:null},{label:"Item 15",counter:49,color:"critical"},{label:"Item 16",counter:41,color:null},{label:"Item 17",counter:66,color:null}];var y=n(46698),U=n(4301);let D=(()=>{class t{constructor(){this.textTypeLayoutMode="row",this.enableTabReordering=!1,this.withOverflowExample=!1,this.nested=!1}ngOnInit(){this.items=(0,y.Z)(this.withOverflowExample?B:C),this.nested&&(this.items[3].subItems=[{label:"Item 0",counter:null,color:"critical",subItems:[{label:"Item 0.1",counter:null,color:null},{label:"Item 0.2",counter:null,color:null}]},{label:"Item 1",counter:null,color:null},{label:"Item 2",counter:null,color:null}])}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-text-type-example"]],inputs:{textTypeLayoutMode:"textTypeLayoutMode",enableTabReordering:"enableTabReordering",withOverflowExample:"withOverflowExample",nested:"nested"},decls:1,vars:3,consts:[[3,"tabsConfig","layoutMode","enableTabReordering"]],template:function(a,c){1&a&&e._UZ(0,"fdp-icon-tab-bar",0),2&a&&e.Q6J("tabsConfig",c.items)("layoutMode",c.textTypeLayoutMode)("enableTabReordering",c.enableTabReordering)},directives:[U.R],encapsulation:2}),t})();var F=n(29871),w=n(33089);const A=[{icon:"accelerated",label:"Item 0",counter:55,color:"critical",active:!0},{icon:"action",label:"Item 1",counter:96,color:null,badge:!0},{icon:"account",label:"Item 2",counter:51,color:null},{icon:"alert",label:"Item 3",counter:18,color:null},{icon:"addresses",label:"Item 4",counter:0,color:null},{icon:"appointment",label:"Item 5",counter:34,color:"critical"},{icon:"arobase",label:"Item 6",counter:58,color:"positive"},{icon:"basket",label:"Item 7",counter:15,color:null},{icon:"background",label:"Item 8",counter:76,color:null},{icon:"begin",label:"Item 9",counter:59,color:null}],M=[...A,{icon:"bell",label:"Item 10",counter:70,color:"critical"},{icon:"bookmark",label:"Item 11",counter:41,color:null},{icon:"calendar",label:"Item 12",counter:30,color:"positive"},{icon:"card",label:"Item 13",counter:95,color:null},{icon:"cancel",label:"Item 14",counter:32,color:null},{icon:"camera",label:"Item 15",counter:49,color:"critical"},{icon:"cart",label:"Item 16",counter:41,color:null},{icon:"chalkboard",label:"Item 17",counter:66,color:null}];let L=(()=>{class t{constructor(){this.withOverflowExample=!1}ngOnInit(){this.items=(0,y.Z)(this.withOverflowExample?M:A)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-icon-only-type-example"]],inputs:{withOverflowExample:"withOverflowExample"},decls:1,vars:1,consts:[["iconTabType","icon-only",3,"tabsConfig"]],template:function(a,c){1&a&&e._UZ(0,"fdp-icon-tab-bar",0),2&a&&e.Q6J("tabsConfig",c.items)},directives:[U.R],encapsulation:2}),t})(),R=(()=>{class t{constructor(){this.withOverflowExample=!1}ngOnInit(){this.items=(0,y.Z)(this.withOverflowExample?M:A)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-icon-type-example"]],inputs:{withOverflowExample:"withOverflowExample"},decls:1,vars:1,consts:[["iconTabType","icon",3,"tabsConfig"]],template:function(a,c){1&a&&e._UZ(0,"fdp-icon-tab-bar",0),2&a&&e.Q6J("tabsConfig",c.items)},directives:[U.R],encapsulation:2}),t})(),J=(()=>{class t{constructor(){this.withOverflowExample=!1}ngOnInit(){this.items=(0,y.Z)(this.withOverflowExample?M:A)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-filter-type-example"]],inputs:{withOverflowExample:"withOverflowExample"},decls:1,vars:1,consts:[["iconTabType","filter",3,"tabsConfig"]],template:function(a,c){1&a&&e._UZ(0,"fdp-icon-tab-bar",0),2&a&&e.Q6J("tabsConfig",c.items)},directives:[U.R],encapsulation:2}),t})(),Q=(()=>{class t{constructor(){this.withOverflowExample=!1}ngOnInit(){this.items=(0,y.Z)(this.withOverflowExample?M:A)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-process-type-example"]],inputs:{withOverflowExample:"withOverflowExample"},decls:1,vars:1,consts:[["iconTabType","process",3,"tabsConfig"]],template:function(a,c){1&a&&e._UZ(0,"fdp-icon-tab-bar",0),2&a&&e.Q6J("tabsConfig",c.items)},directives:[U.R],encapsulation:2}),t})();var S=n(85684);let W=(()=>{class t{constructor(){this.itemsForSmExample=(0,y.Z)(C),this.itemsForLgExample=(0,y.Z)(C),this.itemsForXlExample=(0,y.Z)(C),this.itemsForResponsiveExample=(0,y.Z)(C)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-platform-icon-tab-bar-configurable-paddings-example"]],decls:12,vars:4,consts:[[1,"fd-paddings-example-title"],["iconTabSize","sm",3,"tabsConfig"],["iconTabSize","lg",3,"tabsConfig"],["iconTabSize","xl",3,"tabsConfig"],["iconTabSize","responsive-paddings",3,"tabsConfig"]],template:function(a,c){1&a&&(e.TgZ(0,"div",0),e._uU(1,"sm:"),e.qZA(),e._UZ(2,"fdp-icon-tab-bar",1),e.TgZ(3,"div",0),e._uU(4,"lg:"),e.qZA(),e._UZ(5,"fdp-icon-tab-bar",2),e.TgZ(6,"div",0),e._uU(7,"xl:"),e.qZA(),e._UZ(8,"fdp-icon-tab-bar",3),e.TgZ(9,"div",0),e._uU(10,"responsive-paddings:"),e.qZA(),e._UZ(11,"fdp-icon-tab-bar",4)),2&a&&(e.xp6(2),e.Q6J("tabsConfig",c.itemsForSmExample),e.xp6(3),e.Q6J("tabsConfig",c.itemsForLgExample),e.xp6(3),e.Q6J("tabsConfig",c.itemsForXlExample),e.xp6(3),e.Q6J("tabsConfig",c.itemsForResponsiveExample))},directives:[U.R],styles:["div[_ngcontent-%COMP%]{padding:5px;background:var(--sapObjectHeader_Background)}"]}),t})(),K=(()=>{class t{constructor(){this.iconTabBarTextTypeFiles=[{language:"html",code:o,name:"icon-tab-bar-text-type-example"},{language:"typescript",code:f,name:"icon-tab-bar-text-type-example",component:"IconTabBarTextTypeExampleComponent"},{language:"typescript",code:g,name:"long-icon-type-config"}],this.iconTabBarIconOnlyTypeFiles=[{language:"html",code:m,name:"icon-tab-bar-icon-only-type-example"},{language:"typescript",code:d,name:"icon-tab-bar-icon-only-type-example",component:"IconTabBarIconOnlyTypeExampleComponent"},{language:"typescript",code:h,name:"long-icon-type-config"}],this.iconTabBarIconTypeFiles=[{language:"html",code:r,name:"icon-tab-bar-icon-type-example"},{language:"typescript",code:x,name:"icon-tab-bar-icon-type-example",component:"IconTabBarIconTypeExampleComponent"},{language:"typescript",code:h,name:"long-icon-type-config"}],this.iconTabBarFilterTypeFiles=[{language:"html",code:Z,name:"icon-tab-bar-filter-type-example"},{language:"typescript",code:_,name:"icon-tab-bar-filter-type-example",component:"IconTabBarFilterTypeExampleComponent"},{language:"typescript",code:h,name:"long-icon-type-config"}],this.iconTabBarProcessTypeFiles=[{language:"html",code:E,name:"icon-tab-bar-process-type-example"},{language:"typescript",code:v,name:"icon-tab-bar-process-type-example",component:"IconTabBarProcessTypeExampleComponent"},{language:"typescript",code:h,name:"long-icon-type-config"}],this.iconTabBarConfigurablePaddingsFiles=[{language:"html",code:O,name:"platform-icon-tab-bar-configurable-paddings-example"},{language:"typescript",code:P,name:"platform-icon-tab-bar-configurable-paddings-example",component:"PlatformIconTabBarConfigurablePaddingsExampleComponent"},{language:"typescript",code:h,name:"icon-type-config"}]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-docs"]],decls:127,vars:15,consts:[["id","text-type","componentName","icon-tab-bar"],[1,"code-snippet"],["id","textExample"],[3,"exampleFiles"],["id","text-type-column-mode","componentName","icon-tab-bar"],["id","columnsExample","textTypeLayoutMode","column"],["id","icon-type","componentName","icon-tab-bar"],["id","icon-type-labels","componentName","icon-tab-bar"],["id","iconExample"],["id","filter-type","componentName","icon-tab-bar"],["id","process-type","componentName","icon-tab-bar"],["id","nested","componentName","icon-tab-bar"],["type","information",3,"dismissible"],["id","nestedTabsExample",3,"nested"],["id","reordering","componentName","icon-tab-bar"],["id","reorderingExample",3,"enableTabReordering"],["id","overflow","componentName","icon-tab-bar"],[1,"icon-tab-bar-docs-overflow"],["id","overflowingExample",3,"withOverflowExample"],["id","paddings","componentName","icon-tab-bar"]],template:function(a,c){1&a&&(e.TgZ(0,"fd-docs-section-title",0),e._uU(1," Text type tabs "),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. "),e._UZ(5,"br"),e._uU(6," To use the text type of the tabs you must pass input "),e.TgZ(7,"code",1),e._uU(8,"[type]=\"'text'\""),e.qZA()()(),e.TgZ(9,"component-example"),e._UZ(10,"fd-icon-tab-bar-text-type-example",2),e.qZA(),e._UZ(11,"code-example",3)(12,"separator"),e.TgZ(13,"fd-docs-section-title",4),e._uU(14," Text type tabs (column mode)\n"),e.qZA(),e.TgZ(15,"description")(16,"p"),e._uU(17,"To use this mode you need to pass input"),e.TgZ(18,"code",1),e._uU(19,"[layoutMode]=\"'column'\""),e.qZA()()(),e.TgZ(20,"component-example"),e._UZ(21,"fd-icon-tab-bar-text-type-example",5),e.qZA(),e._UZ(22,"code-example",3)(23,"separator"),e.TgZ(24,"fd-docs-section-title",6),e._uU(25," Icon type tabs "),e.qZA(),e.TgZ(26,"description"),e._uU(27," Icon tabs are also common tab types. These round tabs can be populated with any icon from the SAP icon font. Labels are optional. If you decide to use labels, use them for all tabs. You can use counters as needed. "),e._UZ(28,"br"),e._uU(29," To use the icon type of the tabs without labels you must pass input "),e.TgZ(30,"code",1),e._uU(31,"[type]=\"'icon-only'\""),e.qZA()(),e.TgZ(32,"component-example"),e._UZ(33,"fd-icon-tab-bar-icon-only-type-example"),e.qZA(),e._UZ(34,"code-example",3)(35,"separator"),e.TgZ(36,"fd-docs-section-title",7),e._uU(37," Icon type tabs with labels\n"),e.qZA(),e.TgZ(38,"description"),e._uU(39," To use the icon type of the tabs you must pass input "),e.TgZ(40,"code",1),e._uU(41,"[type]=\"'icon'\""),e.qZA()(),e.TgZ(42,"component-example"),e._UZ(43,"fd-icon-tab-bar-icon-type-example",8),e.qZA(),e._UZ(44,"code-example",3)(45,"separator"),e.TgZ(46,"fd-docs-section-title",9),e._uU(47," Filter type tabs "),e.qZA(),e.TgZ(48,"description"),e._uU(49," If you build the tab bar as a filter, it can comprise two parts: "),e.TgZ(50,"ul")(51,"li"),e._uU(52," An \u201call\u201d tab on the left (optional) This tab shows the total number of items, and describes the type of item (for example, 189 Products). To use it pass "),e.TgZ(53,"code",1),e._uU(54,'[showTabAll]="true"'),e.qZA()(),e.TgZ(55,"li"),e._uU(56," Tabs for specific filters Use the tab text to indicate the filter attribute. We strongly recommend showing a counter on every tab. "),e.qZA()(),e._uU(57," To use the filter type of the tabs you must pass input "),e.TgZ(58,"code",1),e._uU(59,"[type]=\"'filter'\""),e.qZA()(),e.TgZ(60,"component-example"),e._UZ(61,"fd-icon-tab-bar-filter-type-example"),e.qZA(),e._UZ(62,"code-example",3)(63,"separator"),e.TgZ(64,"fd-docs-section-title",10),e._uU(65," Process type tabs "),e.qZA(),e.TgZ(66,"description"),e._uU(67," You can also use the tab bar to depict a process. In this case, each tab stands for one step. To use the process type of the tabs you must pass input "),e.TgZ(68,"code",1),e._uU(69,"[type]=\"'process'\""),e.qZA()(),e.TgZ(70,"component-example"),e._UZ(71,"fd-icon-tab-bar-process-type-example"),e.qZA(),e._UZ(72,"code-example",3)(73,"separator"),e.TgZ(74,"fd-docs-section-title",11),e._uU(75," Nested tabs "),e.qZA(),e.TgZ(76,"description")(77,"p"),e._uU(78," Nesting allows deeper hierarchies with indentations to indicate the level of each tab. "),e._UZ(79,"br"),e._uU(80," Nested tabs will be displayed automatically if the "),e.TgZ(81,"code",1),e._uU(82,"tabConfig"),e.qZA(),e._uU(83," has the field "),e.TgZ(84,"code",1),e._uU(85,"subItems"),e.qZA(),e._UZ(86,"br"),e.qZA(),e.TgZ(87,"fd-message-strip",12),e._uU(88," This feature is available only for tabs with "),e.TgZ(89,"code",1),e._uU(90,"[type]=\"'text'\""),e.qZA()()(),e.TgZ(91,"component-example"),e._UZ(92,"fd-icon-tab-bar-text-type-example",13),e.qZA(),e._UZ(93,"code-example",3)(94,"separator"),e.TgZ(95,"fd-docs-section-title",14),e._uU(96," Reordering "),e.qZA(),e.TgZ(97,"description")(98,"p"),e._uU(99," You can allow users to rearrange the tab order in a desktop environment (property: enableTabReordering). If this feature is enabled, users can drag and drop tabs to reorder them, either directly on the tab bar or inside the overflow menu. It is also possible to drag and drop tabs from the tab bar to the overflow menu and vice versa. "),e.qZA(),e.TgZ(100,"fd-message-strip",12),e._uU(101," This feature is available only for tabs with "),e.TgZ(102,"code",1),e._uU(103,"[type]=\"'text'\""),e.qZA()()(),e.TgZ(104,"component-example"),e._UZ(105,"fd-icon-tab-bar-text-type-example",15),e.qZA(),e._UZ(106,"code-example",3)(107,"separator"),e.TgZ(108,"fd-docs-section-title",16),e._uU(109," Overflowing "),e.qZA(),e.TgZ(110,"description")(111,"p"),e._uU(112," When the screen space does not allow to show all tabs on the main tab bar, an overflow appears on the far right, containing all remaining tabs that do not fit on the screen. "),e.qZA()(),e.TgZ(113,"component-example",17),e._UZ(114,"fd-icon-tab-bar-icon-type-example",18),e.qZA(),e._UZ(115,"code-example",3)(116,"separator"),e.TgZ(117,"fd-docs-section-title",19),e._uU(118," Configurable paddings "),e.qZA(),e.TgZ(119,"description")(120,"p"),e._uU(121," You can set horizontal paddings by adding a specifying the size of the paddings. Available values: "),e.TgZ(122,"code"),e._uU(123,"'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'responsive-paddings'"),e.qZA()()(),e.TgZ(124,"component-example"),e._UZ(125,"fd-platform-icon-tab-bar-configurable-paddings-example"),e.qZA(),e._UZ(126,"code-example",3)),2&a&&(e.xp6(11),e.Q6J("exampleFiles",c.iconTabBarTextTypeFiles),e.xp6(11),e.Q6J("exampleFiles",c.iconTabBarTextTypeFiles),e.xp6(12),e.Q6J("exampleFiles",c.iconTabBarIconOnlyTypeFiles),e.xp6(10),e.Q6J("exampleFiles",c.iconTabBarIconTypeFiles),e.xp6(18),e.Q6J("exampleFiles",c.iconTabBarFilterTypeFiles),e.xp6(10),e.Q6J("exampleFiles",c.iconTabBarProcessTypeFiles),e.xp6(15),e.Q6J("dismissible",!1),e.xp6(5),e.Q6J("nested",!0),e.xp6(1),e.Q6J("exampleFiles",c.iconTabBarTextTypeFiles),e.xp6(7),e.Q6J("dismissible",!1),e.xp6(5),e.Q6J("enableTabReordering",!0),e.xp6(1),e.Q6J("exampleFiles",c.iconTabBarTextTypeFiles),e.xp6(8),e.Q6J("withOverflowExample",!0),e.xp6(1),e.Q6J("exampleFiles",c.iconTabBarIconTypeFiles),e.xp6(11),e.Q6J("exampleFiles",c.iconTabBarConfigurablePaddingsFiles))},directives:[s.k,b.w,I.O,D,F.E,w.N,L,R,J,Q,S.h,W],encapsulation:2}),t})();var H=n(24882),N=n(98791),z=n(63710);let X=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fd-icon-tab-bar-header"]],decls:8,vars:0,consts:[["module","PlatformIconTabBarModule"]],template:function(a,c){1&a&&(e.TgZ(0,"header"),e._uU(1,"Icon Tab Bar"),e.qZA(),e.TgZ(2,"description")(3,"p"),e._uU(4," The icon tab bar comprises a series of tabs that each link to a different content area or view. You can use it for navigation within an object, or as a filter. There are two key use cases: You want to let users navigate between different object facets in the object details area. You want to let users filter lists, and give them the option of calling up the entire list, or only items with a specific attribute. In both cases, the user switches between tab pages by clicking the respective tab. "),e.qZA()(),e._UZ(5,"import",0)(6,"fd-header-tabs")(7,"router-outlet"))},directives:[H.G,b.w,N.k,z.c,i.lC],encapsulation:2}),t})();var Y=n(28674),j=n(45665),$=n(32010);const G=[{path:"",component:X,children:[{path:"",component:K},{path:"api",component:u.h,data:{content:j.X.iconTabBar}}]}];let V=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.Bz.forChild(G),Y.g,$.CP]]}),t})()},37227:l=>{l.exports="import { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\nexport const iconTypeConfig: TabConfig[] = [\n    {\n        icon: 'accelerated',\n        label: 'Item 0',\n        counter: 55,\n        color: 'critical',\n        active: true\n    },\n    {\n        icon: 'action',\n        label: 'Item 1',\n        counter: 96,\n        color: null,\n        badge: true\n    },\n    {\n        icon: 'account',\n        label: 'Item 2',\n        counter: 51,\n        color: null\n    },\n    {\n        icon: 'alert',\n        label: 'Item 3',\n        counter: 18,\n        color: null\n    },\n    {\n        icon: 'addresses',\n        label: 'Item 4',\n        counter: 0,\n        color: null\n    },\n    {\n        icon: 'appointment',\n        label: 'Item 5',\n        counter: 34,\n        color: 'critical'\n    },\n    {\n        icon: 'arobase',\n        label: 'Item 6',\n        counter: 58,\n        color: 'positive'\n    },\n    {\n        icon: 'basket',\n        label: 'Item 7',\n        counter: 15,\n        color: null\n    },\n    {\n        icon: 'background',\n        label: 'Item 8',\n        counter: 76,\n        color: null\n    },\n    {\n        icon: 'begin',\n        label: 'Item 9',\n        counter: 59,\n        color: null\n    }\n];\n\nexport const longIconTypeConfig: TabConfig[] = [\n    ...iconTypeConfig,\n    {\n        icon: 'bell',\n        label: 'Item 10',\n        counter: 70,\n        color: 'critical'\n    },\n    {\n        icon: 'bookmark',\n        label: 'Item 11',\n        counter: 41,\n        color: null\n    },\n    {\n        icon: 'calendar',\n        label: 'Item 12',\n        counter: 30,\n        color: 'positive'\n    },\n    {\n        icon: 'card',\n        label: 'Item 13',\n        counter: 95,\n        color: null\n    },\n    {\n        icon: 'cancel',\n        label: 'Item 14',\n        counter: 32,\n        color: null\n    },\n    {\n        icon: 'camera',\n        label: 'Item 15',\n        counter: 49,\n        color: 'critical'\n    },\n    {\n        icon: 'cart',\n        label: 'Item 16',\n        counter: 41,\n        color: null\n    },\n    {\n        icon: 'chalkboard',\n        label: 'Item 17',\n        counter: 66,\n        color: null\n    }\n];\n"},46220:l=>{l.exports="import { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\nexport const textTypeConfig: TabConfig[] = [\n    {\n        label: 'Item 0',\n        counter: 55,\n        color: 'critical',\n        active: true,\n        subItems: null\n    },\n    {\n        label: 'Item 1',\n        counter: 96,\n        color: null,\n        badge: true\n    },\n    {\n        label: 'Item 2',\n        counter: 51,\n        color: null\n    },\n    {\n        label: 'Item 3',\n        counter: 18,\n        color: null\n    },\n    {\n        label: 'Item 4',\n        counter: 0,\n        color: null\n    },\n    {\n        label: 'Item 5',\n        counter: 34,\n        color: 'critical'\n    },\n    {\n        label: 'Item 6',\n        counter: 58,\n        color: 'positive'\n    },\n    {\n        label: 'Item 7',\n        counter: 15,\n        color: null\n    },\n    {\n        label: 'Item 8',\n        counter: 76,\n        color: null\n    },\n    {\n        label: 'Item 9',\n        counter: 59,\n        color: null\n    }\n];\n\nexport const longTextTypeConfig: TabConfig[] = [\n    ...textTypeConfig,\n    {\n        label: 'Item 10',\n        counter: 70,\n        color: 'critical',\n        subItems: [\n            {\n                label: 'Item 0',\n                counter: null,\n                color: 'critical'\n            },\n            {\n                label: 'Item 1',\n                counter: null,\n                color: null\n            },\n            {\n                label: 'Item 2',\n                counter: null,\n                color: null\n            }\n        ]\n    },\n    {\n        label: 'Item 11',\n        counter: 41,\n        color: null\n    },\n    {\n        label: 'Item 12',\n        counter: 30,\n        color: 'positive'\n    },\n    {\n        label: 'Item 13',\n        counter: 95,\n        color: null\n    },\n    {\n        label: 'Item 14',\n        counter: 32,\n        color: null\n    },\n    {\n        label: 'Item 15',\n        counter: 49,\n        color: 'critical'\n    },\n    {\n        label: 'Item 16',\n        counter: 41,\n        color: null\n    },\n    {\n        label: 'Item 17',\n        counter: 66,\n        color: null\n    }\n];\n"},94186:l=>{l.exports='<div class="fd-paddings-example-title">sm:</div>\n<fdp-icon-tab-bar [tabsConfig]="itemsForSmExample" iconTabSize="sm"></fdp-icon-tab-bar>\n<div class="fd-paddings-example-title">lg:</div>\n<fdp-icon-tab-bar [tabsConfig]="itemsForLgExample" iconTabSize="lg"></fdp-icon-tab-bar>\n<div class="fd-paddings-example-title">xl:</div>\n<fdp-icon-tab-bar [tabsConfig]="itemsForXlExample" iconTabSize="xl"></fdp-icon-tab-bar>\n<div class="fd-paddings-example-title">responsive-paddings:</div>\n<fdp-icon-tab-bar [tabsConfig]="itemsForResponsiveExample" iconTabSize="responsive-paddings"></fdp-icon-tab-bar>\n'},67849:l=>{l.exports="import { Component } from '@angular/core';\nimport { cloneDeep } from 'lodash-es';\nimport { textTypeConfig } from '../config-for-examples/text-type.config';\n\n@Component({\n    selector: 'fd-platform-icon-tab-bar-configurable-paddings-example',\n    templateUrl: './platform-icon-tab-bar-configurable-paddings-example.component.html',\n    styles: [\n        `\n            div {\n                padding: 5px;\n                background: var(--sapObjectHeader_Background);\n            }\n        `\n    ]\n})\nexport class PlatformIconTabBarConfigurablePaddingsExampleComponent {\n    itemsForSmExample = cloneDeep(textTypeConfig);\n    itemsForLgExample = cloneDeep(textTypeConfig);\n    itemsForXlExample = cloneDeep(textTypeConfig);\n    itemsForResponsiveExample = cloneDeep(textTypeConfig);\n}\n"},81610:l=>{l.exports='<fdp-icon-tab-bar [tabsConfig]="items" iconTabType="filter"></fdp-icon-tab-bar>\n'},3597:l=>{l.exports="import { Component, Input, OnInit } from '@angular/core';\nimport { iconTypeConfig, longIconTypeConfig } from '../config-for-examples/icon-type-config';\nimport { cloneDeep } from 'lodash-es';\nimport { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\n@Component({\n    selector: 'fd-icon-tab-bar-filter-type-example',\n    templateUrl: './platform-icon-tab-bar-filter-type-example.component.html'\n})\nexport class PlatformIconTabBarFilterTypeExampleComponent implements OnInit {\n    @Input()\n    withOverflowExample = false;\n\n    items: TabConfig[];\n\n    ngOnInit(): void {\n        this.items = this.withOverflowExample ? cloneDeep(longIconTypeConfig) : cloneDeep(iconTypeConfig);\n    }\n}\n"},29325:l=>{l.exports='<fdp-icon-tab-bar [tabsConfig]="items" iconTabType="icon-only"></fdp-icon-tab-bar>\n'},50055:l=>{l.exports="import { Component, Input, OnInit } from '@angular/core';\nimport { iconTypeConfig, longIconTypeConfig } from '../config-for-examples/icon-type-config';\nimport { cloneDeep } from 'lodash-es';\nimport { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\n@Component({\n    selector: 'fd-icon-tab-bar-icon-only-type-example',\n    templateUrl: './platform-icon-tab-bar-icon-only-type-example.component.html'\n})\nexport class PlatformIconTabBarIconOnlyTypeExampleComponent implements OnInit {\n    @Input()\n    withOverflowExample = false;\n\n    items: TabConfig[];\n\n    ngOnInit(): void {\n        this.items = this.withOverflowExample ? cloneDeep(longIconTypeConfig) : cloneDeep(iconTypeConfig);\n    }\n}\n"},3939:l=>{l.exports='<fdp-icon-tab-bar [tabsConfig]="items" iconTabType="icon"></fdp-icon-tab-bar>\n'},34034:l=>{l.exports="import { Component, Input, OnInit } from '@angular/core';\nimport { iconTypeConfig, longIconTypeConfig } from '../config-for-examples/icon-type-config';\nimport { cloneDeep } from 'lodash-es';\nimport { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\n@Component({\n    selector: 'fd-icon-tab-bar-icon-type-example',\n    templateUrl: './platform-icon-tab-bar-icon-type-example.component.html'\n})\nexport class PlatformIconTabBarIconTypeExampleComponent implements OnInit {\n    @Input()\n    withOverflowExample = false;\n\n    items: TabConfig[];\n\n    ngOnInit(): void {\n        this.items = this.withOverflowExample ? cloneDeep(longIconTypeConfig) : cloneDeep(iconTypeConfig);\n    }\n}\n"},47783:l=>{l.exports='<fdp-icon-tab-bar [tabsConfig]="items" iconTabType="process"></fdp-icon-tab-bar>\n'},97675:l=>{l.exports="import { Component, Input, OnInit } from '@angular/core';\nimport { iconTypeConfig, longIconTypeConfig } from '../config-for-examples/icon-type-config';\nimport { cloneDeep } from 'lodash-es';\nimport { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\n@Component({\n    selector: 'fd-icon-tab-bar-process-type-example',\n    templateUrl: './platform-icon-tab-bar-process-type-example.component.html'\n})\nexport class PlatformIconTabBarProcessTypeExampleComponent implements OnInit {\n    @Input()\n    withOverflowExample = false;\n\n    items: TabConfig[];\n\n    ngOnInit(): void {\n        this.items = this.withOverflowExample ? cloneDeep(longIconTypeConfig) : cloneDeep(iconTypeConfig);\n    }\n}\n"},39405:l=>{l.exports='<fdp-icon-tab-bar\n    [tabsConfig]="items"\n    [layoutMode]="textTypeLayoutMode"\n    [enableTabReordering]="enableTabReordering"\n></fdp-icon-tab-bar>\n'},50769:l=>{l.exports="import { Component, Input, OnInit } from '@angular/core';\nimport { longTextTypeConfig, textTypeConfig } from '../config-for-examples/text-type.config';\nimport { cloneDeep } from 'lodash-es';\nimport { TabConfig } from '@fundamental-ngx/platform/icon-tab-bar';\n\n@Component({\n    selector: 'fd-icon-tab-bar-text-type-example',\n    templateUrl: './platform-icon-tab-bar-text-type-example.component.html'\n})\nexport class PlatformIconTabBarTextTypeExampleComponent implements OnInit {\n    @Input()\n    textTypeLayoutMode: 'row' | 'column' = 'row';\n\n    @Input()\n    enableTabReordering = false;\n\n    @Input()\n    withOverflowExample = false;\n\n    @Input()\n    nested = false;\n\n    items: TabConfig[];\n\n    ngOnInit(): void {\n        this.items = this.withOverflowExample ? cloneDeep(longTextTypeConfig) : cloneDeep(textTypeConfig);\n        if (this.nested) {\n            this.items[3].subItems = [\n                {\n                    label: 'Item 0',\n                    counter: null,\n                    color: 'critical',\n                    subItems: [\n                        {\n                            label: 'Item 0.1',\n                            counter: null,\n                            color: null\n                        },\n                        {\n                            label: 'Item 0.2',\n                            counter: null,\n                            color: null\n                        }\n                    ]\n                },\n                {\n                    label: 'Item 1',\n                    counter: null,\n                    color: null\n                },\n                {\n                    label: 'Item 2',\n                    counter: null,\n                    color: null\n                }\n            ];\n        }\n    }\n}\n"}}]);