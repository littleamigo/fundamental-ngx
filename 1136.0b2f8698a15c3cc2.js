"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1136],{36854:(O,u,t)=>{t.d(u,{h:()=>E});var e=t(74042),n=(t(77135),t(5e3)),r=t(8674),a=t(69808),m=t(87757),o=t(63043),f=t(50578),M=t(27078),p=t(42437),h=t(24919);const g=["menu"];function C(d,l){if(1&d&&n._UZ(0,"button",8),2&d){const i=n.oxw(),s=n.MAs(6);n.Q6J("label","Select a file ("+i.files.length+")")("fdMenu",!0)("fdMenuTrigger",s)}}function P(d,l){if(1&d){const i=n.EpF();n.TgZ(0,"li",9),n.NdJ("click",function(){const T=n.CHM(i).$implicit;return n.oxw().getFile(T)}),n.TgZ(1,"div",10)(2,"span",11),n._uU(3),n.qZA()()()}if(2&d){const i=l.$implicit,s=n.oxw();n.ekj("is-selected",i===s.activeFile),n.xp6(3),n.Oqu(i)}}let E=(()=>{class d{constructor(i,s){this.route=i,this.apiService=s}ngOnInit(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"}getFile(i){this.apiService.getComponentHtml(i).subscribe(s=>{this.result=s,this.activeFile=i,this.menu.close()},s=>{console.warn("Did not find file "+i+".\nError: "+s)})}}return d.\u0275fac=function(i){return new(i||d)(n.Y36(r.gz),n.Y36(e.S))},d.\u0275cmp=n.Xpm({type:d,selectors:[["fd-api"]],viewQuery:function(i,s){if(1&i&&n.Gf(g,5),2&i){let v;n.iGM(v=n.CRH())&&(s.menu=v.first)}},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"label","fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"is-selected","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"label","fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(i,s){1&i&&(n.TgZ(0,"div",0)(1,"h2",1),n._uU(2),n.qZA(),n._UZ(3,"span",2),n.YNc(4,C,1,3,"button",3),n.TgZ(5,"fd-menu",4,5),n.YNc(7,P,4,3,"li",6),n.qZA()(),n._UZ(8,"div",7)),2&i&&(n.xp6(2),n.Oqu(s.activeFile),n.xp6(2),n.Q6J("ngIf",s.files.length>1),n.xp6(1),n.Q6J("fillControlMode",null),n.xp6(2),n.Q6J("ngForOf",s.files),n.xp6(1),n.Q6J("innerHTML",s.result,n.oJD))},directives:[a.O5,m.r,o.k,f.M,a.sg,M.qv,p.K,h.h],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),d})()},63710:(O,u,t)=>{t.d(u,{c:()=>M});var e=t(5e3),c=t(17791),n=t(66997),r=t(8674),a=t(1726),m=t(55124),o=t(33089);const f=function(){return{exact:!0}};let M=(()=>{class p{}return p.\u0275fac=function(g){return new(g||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["fd-header-tabs"]],decls:12,vars:4,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLink","./","routerLinkActive","",3,"active","routerLinkActiveOptions"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLink","./api","routerLinkActive","",3,"active"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(g,C){if(1&g&&(e.TgZ(0,"ul",0)(1,"li",1)(2,"a",2,3)(4,"span",4),e._uU(5,"Examples"),e.qZA()()(),e.TgZ(6,"li",1)(7,"a",5,6)(9,"span",4),e._uU(10,"API"),e.qZA()()()(),e._UZ(11,"separator",7)),2&g){const P=e.MAs(3),E=e.MAs(8);e.xp6(2),e.Q6J("active",P.isActive)("routerLinkActiveOptions",e.DdM(3,f)),e.xp6(5),e.Q6J("active",E.isActive)}},directives:[c.d,n.w,r.yS,a.w,r.Od,m.P6,o.N],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px;box-shadow:none}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),p})()},24882:(O,u,t)=>{t.d(u,{G:()=>n});var e=t(5e3);const c=["*"];let n=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["header"]],ngContentSelectors:c,decls:2,vars:0,consts:[[1,"header"]],template:function(m,o){1&m&&(e.F$t(),e.TgZ(0,"h1",0),e.Hsn(1),e.qZA())},styles:[".header[_ngcontent-%COMP%]{color:var(--sapPageHeader_TextColor);margin-top:2rem;font-size:2.2rem}"]}),r})()},98791:(O,u,t)=>{t.d(u,{k:()=>r});var e=t(59148),c=t(5e3),n=t(8566);let r=(()=>{class a{constructor(o){this.currentLib=o}get file(){return{code:`import { ${this.module} } from '${this.library}';`,language:"ts"}}ngOnInit(){const o=["@fundamental-ngx",this.currentLib];this.subPackage&&o.push(this.subPackage),this.library=o.join("/")}}return a.\u0275fac=function(o){return new(o||a)(c.Y36(e.b))},a.\u0275cmp=c.Xpm({type:a,selectors:[["import"]],inputs:{module:"module",subPackage:"subPackage"},decls:1,vars:1,consts:[[3,"file"]],template:function(o,f){1&o&&c._UZ(0,"fd-code-snippet",0),2&o&&c.Q6J("file",f.file)},directives:[n.N],encapsulation:2,changeDetection:0}),a})()},74042:(O,u,t)=>{t.d(u,{S:()=>r});var e=t(59148),c=t(5e3),n=t(40520);let r=(()=>{class a{constructor(o,f){this.httpClient=o,this.currentLib=f,this.BASE_URL="assets/typedoc/"}getComponentHtml(o){o=o.toLocaleLowerCase()+".html";const f=this.buildUrl(this.BASE_URL,this.currentLib||"core","classes",o);return this.httpClient.get(f,{responseType:"text"})}buildUrl(...o){return o.join("/").replace(/\/+/g,"/")}}return a.\u0275fac=function(o){return new(o||a)(c.LFG(n.eN),c.LFG(e.b))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac}),a})()},28674:(O,u,t)=>{t.d(u,{g:()=>s});var e=t(69808),c=t(8674),n=t(52382),r=t(62970),a=t(53732),m=t(74042),o=t(32818),f=t(30825),M=t(90523),p=t(80848),h=t(83271),g=t(77135),C=t(89282),P=t(95037),E=t(46394),d=t(75394);const l=[E.P4,g.$9,p.Q,P.o,f.hJ,C.H,M.nY,h.LO,d.s];var i=t(5e3);let s=(()=>{class v{}return v.\u0275fac=function(A){return new(A||v)},v.\u0275mod=i.oAB({type:v}),v.\u0275inj=i.cJS({providers:[a.t,m.S],imports:[[n.u5,e.ez,c.Bz,o.f,l,r.JP.forChild()],n.u5,n.UX,o.f,e.ez,E.P4,g.$9,p.Q,P.o,f.hJ,C.H,M.nY,h.LO,d.s]}),v})()},41136:(O,u,t)=>{t.r(u),t.d(u,{PlatformTableDocsModule:()=>x});var e=t(8674),c=t(47796),n=t(36445),r=t(15517),a=t(29584),m=t(10589),o=t(95790),f=t(59438),M=t(89441),p=t(35243),h=t(84769),g=t(64713),C=t(21780),P=t(45665),E=t(36854),d=t(28674),l=t(5e3),i=t(24882),s=t(44969),v=t(98791),T=t(63710);const U=[{path:"",component:(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275cmp=l.Xpm({type:_,selectors:[["app-table-header"]],decls:7,vars:0,consts:[["module","PlatformTableModule","subPackage","table"]],template:function(D,y){1&D&&(l.TgZ(0,"header"),l._uU(1,"Table"),l.qZA(),l.TgZ(2,"description"),l._uU(3," The Grid Table is a table component for displaying large data sets. "),l.qZA(),l._UZ(4,"import",0)(5,"fd-header-tabs")(6,"router-outlet"))},directives:[i.G,s.w,v.k,T.c,e.lC],encapsulation:2}),_})(),children:[{path:"",component:t(1040).e},{path:"api",component:E.h,data:{content:P.X.table}}]}];let x=(()=>{class _{}return _.\u0275fac=function(D){return new(D||_)},_.\u0275mod=l.oAB({type:_}),_.\u0275inj=l.cJS({providers:[f.qF],imports:[[e.Bz.forChild(U),d.g,c.HT,r.U$,M.ky,p.R,a.px,m.f,o.Yp,h.y0,g.K2,C.bz,h.Mk,n.An],e.Bz]}),_})()}}]);