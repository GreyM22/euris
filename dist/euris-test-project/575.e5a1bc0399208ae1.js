"use strict";(self.webpackChunkeuris_test_project=self.webpackChunkeuris_test_project||[]).push([[575],{4575:(Z,u,e)=>{e.r(u),e.d(u,{ProductsGridPageModule:()=>F});var s=e(6895),C=e(3770),t=e(4650),p=e(1951),f=e(4935),a=e(7340),m=e(4859),g=e(7392),P=e(266);const v=function(n){return{"card-title":n}};function x(n,i){if(1&n&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&n){const o=i.$implicit,r=i.index,c=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(2,v,0===r)),t.xp6(1),t.hij(" ",c[o]," ")}}function h(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",1),t.YNc(1,x,2,4,"div",2),t.TgZ(2,"div",3)(3,"button",4),t.NdJ("click",function(){const d=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.viewProduct.emit(d.id))}),t.TgZ(4,"mat-icon"),t._uU(5,"visibility"),t.qZA()(),t.TgZ(6,"button",5),t.NdJ("click",function(){const d=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.deleteProduct.emit(d.id))}),t.TgZ(7,"mat-icon"),t._uU(8,"delete"),t.qZA()()()()}if(2&n){const o=t.oxw();t.Q6J("@slideOut",void 0),t.xp6(1),t.Q6J("ngForOf",o.displayedColumns)}}let M=(()=>{class n extends f.f{ngOnInit(){}}return n.\u0275fac=function(){let i;return function(r){return(i||(i=t.n5z(n)))(r||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["euris-grid-view"]],features:[t.qOj],decls:1,vars:1,consts:[["class","card",4,"ngFor","ngForOf"],[1,"card"],["class","info",3,"ngClass",4,"ngFor","ngForOf"],[1,"actions"],["mat-flat-button","","color","primary","type","button","matTooltip","Click to view!","matTooltipPosition","above",3,"click"],["matTooltipPosition","above","matTooltip","Click to delete!","color","warn","type","button","mat-flat-button","","color","warn",3,"click"],[1,"info",3,"ngClass"]],template:function(o,r){1&o&&t.YNc(0,h,9,2,"div",0),2&o&&t.Q6J("ngForOf",r.products)},dependencies:[s.mk,s.sg,m.lW,g.Hw,P.gM],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;gap:20px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{display:inline-block;background:#eeeeee;padding:1.5em;border-radius:10px;min-width:130px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:1.3em;font-weight:500;color:var(--primary-color)}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:15px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:50%;padding:0;width:20px;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     .mat-button-wrapper .mat-icon{font-size:10px;width:10px;height:10px}"],data:{animation:[(0,a.X$)("slideOut",[(0,a.eR)(":leave",[(0,a.jt)("250ms ease",(0,a.oB)({transform:"translateX(100%)",opacity:0}))])])]},changeDetection:0}),n})();const w=function(){return["title","category","price"]};function y(n,i){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"euris-grid-view",1),t.NdJ("viewProduct",function(c){t.CHM(o);const d=t.oxw();return t.KtG(d.viewProduct(c))})("deleteProduct",function(c){t.CHM(o);const d=t.oxw();return t.KtG(d.deleteProduct(c))}),t.qZA(),t.BQk()}if(2&n){const o=i.ngIf;t.xp6(1),t.Q6J("products",o)("displayedColumns",t.DdM(2,w))}}let G=(()=>{class n extends C.m{}return n.\u0275fac=function(){let i;return function(r){return(i||(i=t.n5z(n)))(r||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["euris-products-grid-page"]],features:[t.qOj],decls:3,vars:3,consts:[[4,"ngIf"],[3,"products","displayedColumns","viewProduct","deleteProduct"]],template:function(o,r){1&o&&(t.YNc(0,y,2,3,"ng-container",0),t.ALo(1,"async"),t._UZ(2,"router-outlet")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,r.products$))},dependencies:[s.O5,p.lC,M,s.Ov],changeDetection:0}),n})(),O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,m.ot,g.Ps,P.AV]}),n})();const V=[{path:"",component:G,children:[{path:"create-new",loadChildren:()=>Promise.all([e.e(592),e.e(485)]).then(e.bind(e,9485)).then(n=>n.CreateProductModule)},{path:":productId",loadChildren:()=>Promise.all([e.e(592),e.e(994)]).then(e.bind(e,3994)).then(n=>n.ProductViewModule),resolve:{productId:e(8018).w}}]}];let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,p.Bz.forChild(V),O]}),n})()}}]);