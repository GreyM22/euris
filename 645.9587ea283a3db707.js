"use strict";(self.webpackChunkeuris_test_project=self.webpackChunkeuris_test_project||[]).push([[645],{9645:(St,ee,c)=>{c.r(ee),c.d(ee,{ProductsPanelPageModule:()=>kt});var v=c(6895),De=c(3770),o=c(4650),te=c(1951),Re=c(4935),x=c(7340),ve=c(445),b=c(1281),_=c(5017),ke=c(3353),oe=c(8605),ne=c(7579),Me=c(2076),Se=c(1135),xe=c(9751),se=c(576),ie=c(9646),T=c(2722),Te=c(5698);const Oe=[[["caption"]],[["colgroup"],["col"]]],Fe=["caption","colgroup, col"];function G(e){return class extends e{constructor(...s){super(...s),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(s){const t=this._sticky;this._sticky=(0,b.Ig)(s),this._hasStickyChanged=t!==this._sticky}hasStickyChanged(){const s=this._hasStickyChanged;return this._hasStickyChanged=!1,s}resetStickyChanged(){this._hasStickyChanged=!1}}}const w=new o.OlP("CDK_TABLE");let C=(()=>{class e{constructor(t){this.template=t}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkCellDef",""]]}),e})(),D=(()=>{class e{constructor(t){this.template=t}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkHeaderCellDef",""]]}),e})(),O=(()=>{class e{constructor(t){this.template=t}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkFooterCellDef",""]]}),e})();class He{}const Be=G(He);let y=(()=>{class e extends Be{constructor(t){super(),this._table=t,this._stickyEnd=!1}get name(){return this._name}set name(t){this._setNameInput(t)}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const n=this._stickyEnd;this._stickyEnd=(0,b.Ig)(t),this._hasStickyChanged=n!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(w,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,i){if(1&t&&(o.Suo(i,C,5),o.Suo(i,D,5),o.Suo(i,O,5)),2&t){let r;o.iGM(r=o.CRH())&&(n.cell=r.first),o.iGM(r=o.CRH())&&(n.headerCell=r.first),o.iGM(r=o.CRH())&&(n.footerCell=r.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[o._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),o.qOj]}),e})();class Y{constructor(s,t){const n=t.nativeElement.classList;for(const i of s._columnCssClassName)n.add(i)}}let I=(()=>{class e extends Y{constructor(t,n){super(t,n)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(y),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[o.qOj]}),e})(),Z=(()=>{class e extends Y{constructor(t,n){if(super(t,n),1===t._table?._elementRef.nativeElement.nodeType){const i=t._table._elementRef.nativeElement.getAttribute("role");n.nativeElement.setAttribute("role","grid"===i||"treegrid"===i?"gridcell":"cell")}}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(y),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[o.qOj]}),e})();class ae{constructor(){this.tasks=[],this.endTasks=[]}}const j=new o.OlP("_COALESCED_STYLE_SCHEDULER");let le=(()=>{class e{constructor(t){this._ngZone=t,this._currentSchedule=null,this._destroyed=new ne.x}schedule(t){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(t)}scheduleEnd(t){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(t)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new ae,this._getScheduleObservable().pipe((0,T.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const t=this._currentSchedule;this._currentSchedule=new ae;for(const n of t.tasks)n();for(const n of t.endTasks)n()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,Me.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,Te.q)(1))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(o.R0b))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(t,n){this.template=t,this._differs=n}ngOnChanges(t){if(!this._columnsDiffer){const n=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(n).create(),this._columnsDiffer.diff(n)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof k?t.headerCell.template:this instanceof M?t.footerCell.template:t.cell.template}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc),o.Y36(o.ZZ4))},e.\u0275dir=o.lG2({type:e,features:[o.TTD]}),e})();class Ae extends U{}const Le=G(Ae);let k=(()=>{class e extends Le{constructor(t,n,i){super(t,n),this._table=i}ngOnChanges(t){super.ngOnChanges(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(w,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),e})();class Ge extends U{}const Ye=G(Ge);let M=(()=>{class e extends Ye{constructor(t,n,i){super(t,n),this._table=i}ngOnChanges(t){super.ngOnChanges(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(w,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),e})(),F=(()=>{class e extends U{constructor(t,n,i){super(t,n),this._table=i}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(w,8))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[o.qOj]}),e})(),g=(()=>{class e{constructor(t){this._viewContainer=t,e.mostRecentCellOutlet=this}ngOnDestroy(){e.mostRecentCellOutlet===this&&(e.mostRecentCellOutlet=null)}}return e.mostRecentCellOutlet=null,e.\u0275fac=function(t){return new(t||e)(o.Y36(o.s_b))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkCellOutlet",""]]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.GkF(0,0)},dependencies:[g],encapsulation:2}),e})(),$=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.GkF(0,0)},dependencies:[g],encapsulation:2}),e})(),E=(()=>{class e{constructor(t){this.templateRef=t}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc))},e.\u0275dir=o.lG2({type:e,selectors:[["ng-template","cdkNoDataRow",""]]}),e})();const ce=["top","bottom","left","right"];class Ie{constructor(s,t,n,i,r=!0,a=!0,l){this._isNativeHtmlTable=s,this._stickCellCss=t,this.direction=n,this._coalescedStyleScheduler=i,this._isBrowser=r,this._needsPositionStickyOnElement=a,this._positionListener=l,this._cachedCellWidths=[],this._borderCellCss={top:`${t}-border-elem-top`,bottom:`${t}-border-elem-bottom`,left:`${t}-border-elem-left`,right:`${t}-border-elem-right`}}clearStickyPositioning(s,t){const n=[];for(const i of s)if(i.nodeType===i.ELEMENT_NODE){n.push(i);for(let r=0;r<i.children.length;r++)n.push(i.children[r])}this._coalescedStyleScheduler.schedule(()=>{for(const i of n)this._removeStickyStyle(i,t)})}updateStickyColumns(s,t,n,i=!0){if(!s.length||!this._isBrowser||!t.some(f=>f)&&!n.some(f=>f))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const r=s[0],a=r.children.length,l=this._getCellWidths(r,i),d=this._getStickyStartColumnPositions(l,t),h=this._getStickyEndColumnPositions(l,n),u=t.lastIndexOf(!0),m=n.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const f="rtl"===this.direction,R=f?"right":"left",Mt=f?"left":"right";for(const S of s)for(let p=0;p<a;p++){const Ce=S.children[p];t[p]&&this._addStickyStyle(Ce,R,d[p],p===u),n[p]&&this._addStickyStyle(Ce,Mt,h[p],p===m)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===u?[]:l.slice(0,u+1).map((S,p)=>t[p]?S:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===m?[]:l.slice(m).map((S,p)=>n[p+m]?S:null).reverse()}))})}stickRows(s,t,n){if(!this._isBrowser)return;const i="bottom"===n?s.slice().reverse():s,r="bottom"===n?t.slice().reverse():t,a=[],l=[],d=[];for(let u=0,m=0;u<i.length;u++){if(!r[u])continue;a[u]=m;const f=i[u];d[u]=this._isNativeHtmlTable?Array.from(f.children):[f];const R=f.getBoundingClientRect().height;m+=R,l[u]=R}const h=r.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let u=0;u<i.length;u++){if(!r[u])continue;const m=a[u],f=u===h;for(const R of d[u])this._addStickyStyle(R,n,m,f)}"top"===n?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:d}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:d})})}updateStickyFooterContainer(s,t){if(!this._isNativeHtmlTable)return;const n=s.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{t.some(i=>!i)?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0,!1)})}_removeStickyStyle(s,t){for(const i of t)s.style[i]="",s.classList.remove(this._borderCellCss[i]);ce.some(i=>-1===t.indexOf(i)&&s.style[i])?s.style.zIndex=this._getCalculatedZIndex(s):(s.style.zIndex="",this._needsPositionStickyOnElement&&(s.style.position=""),s.classList.remove(this._stickCellCss))}_addStickyStyle(s,t,n,i){s.classList.add(this._stickCellCss),i&&s.classList.add(this._borderCellCss[t]),s.style[t]=`${n}px`,s.style.zIndex=this._getCalculatedZIndex(s),this._needsPositionStickyOnElement&&(s.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(s){const t={top:100,bottom:10,left:1,right:1};let n=0;for(const i of ce)s.style[i]&&(n+=t[i]);return n?`${n}`:""}_getCellWidths(s,t=!0){if(!t&&this._cachedCellWidths.length)return this._cachedCellWidths;const n=[],i=s.children;for(let r=0;r<i.length;r++)n.push(i[r].getBoundingClientRect().width);return this._cachedCellWidths=n,n}_getStickyStartColumnPositions(s,t){const n=[];let i=0;for(let r=0;r<s.length;r++)t[r]&&(n[r]=i,i+=s[r]);return n}_getStickyEndColumnPositions(s,t){const n=[];let i=0;for(let r=s.length;r>0;r--)t[r]&&(n[r]=i,i+=s[r]);return n}}const Q=new o.OlP("CDK_SPL");let P=(()=>{class e{constructor(t,n){this.viewContainer=t,this.elementRef=n}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.s_b),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["","rowOutlet",""]]}),e})(),N=(()=>{class e{constructor(t,n){this.viewContainer=t,this.elementRef=n}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.s_b),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["","headerRowOutlet",""]]}),e})(),H=(()=>{class e{constructor(t,n){this.viewContainer=t,this.elementRef=n}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.s_b),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["","footerRowOutlet",""]]}),e})(),B=(()=>{class e{constructor(t,n){this.viewContainer=t,this.elementRef=n}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.s_b),o.Y36(o.SBq))},e.\u0275dir=o.lG2({type:e,selectors:[["","noDataRowOutlet",""]]}),e})(),A=(()=>{class e{constructor(t,n,i,r,a,l,d,h,u,m,f){this._differs=t,this._changeDetectorRef=n,this._elementRef=i,this._dir=a,this._platform=d,this._viewRepeater=h,this._coalescedStyleScheduler=u,this._viewportRuler=m,this._stickyPositioningListener=f,this._onDestroy=new ne.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new o.vpe,this.viewChange=new Se.X({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=l,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=(0,b.Ig)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(t){this._fixedLayout=(0,b.Ig)(t),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n),this._viewportRuler.change().pipe((0,T.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const n=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||n,this._forceRecalculateCellWidths=n,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),(0,_.Z9)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return this._updateNoDataRow(),void this.contentChanged.next();const n=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,n,(i,r,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{1===i.operation&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(i=>{n.get(i.currentIndex).context.$implicit=i.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),i=this._elementRef.nativeElement.querySelector("thead");i&&(i.style.display=t.length?"":"none");const r=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,r,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),i=this._elementRef.nativeElement.querySelector("tfoot");i&&(i.style.display=t.length?"":"none");const r=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...n,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),t.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{const a=[];for(let l=0;l<n.length;l++)this._renderRows[l].rowDef===r&&a.push(n[l]);this._addStickyColumnStyles(a,r)}),i.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){const t=[],n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let i=0;i<this._data.length;i++){let r=this._data[i];const a=this._getRenderRowsForData(r,i,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let l=0;l<a.length;l++){let d=a[l];const h=this._cachedRenderRowsMap.get(d.data);h.has(d.rowDef)?h.get(d.rowDef).push(d):h.set(d.rowDef,[d]),t.push(d)}}return t}_getRenderRowsForData(t,n,i){return this._getRowDefs(t,n).map(a=>{const l=i&&i.has(a)?i.get(a):[];if(l.length){const d=l.shift();return d.dataIndex=n,d}return{data:t,rowDef:a,dataIndex:n}})}_cacheColumnDefs(){this._columnDefsByName.clear(),L(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(n=>{this._columnDefsByName.has(n.name),this._columnDefsByName.set(n.name,n)})}_cacheRowDefs(){this._headerRowDefs=L(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=L(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=L(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const t=this._rowDefs.filter(n=>!n.when);this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(a,l)=>a||!!l.getColumnsDiff(),n=this._rowDefs.reduce(t,!1);n&&this._forceRenderDataRows();const i=this._headerRowDefs.reduce(t,!1);i&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(t,!1);return r&&this._forceRenderFooterRows(),n||i||r}_switchDataSource(t){this._data=[],(0,_.Z9)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;(0,_.Z9)(this.dataSource)?t=this.dataSource.connect(this):function be(e){return!!e&&(e instanceof xe.y||(0,se.m)(e.lift)&&(0,se.m)(e.subscribe))}(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=(0,ie.of)(this.dataSource)),this._renderChangeSubscription=t.pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._data=n||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,n)=>this._renderRow(this._headerRowOutlet,t,n)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,n)=>this._renderRow(this._footerRowOutlet,t,n)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,n){const i=Array.from(n.columns||[]).map(l=>this._columnDefsByName.get(l)),r=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(t,r,a,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){const n=[];for(let i=0;i<t.viewContainer.length;i++){const r=t.viewContainer.get(i);n.push(r.rootNodes[0])}return n}_getRowDefs(t,n){if(1==this._rowDefs.length)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(n,t));else{let r=this._rowDefs.find(a=>a.when&&a.when(n,t))||this._defaultRowDef;r&&i.push(r)}return i}_getEmbeddedViewArgs(t,n){return{templateRef:t.rowDef.template,context:{$implicit:t.data},index:n}}_renderRow(t,n,i,r={}){const a=t.viewContainer.createEmbeddedView(n.template,r,i);return this._renderCellTemplateForItem(n,r),a}_renderCellTemplateForItem(t,n){for(let i of this._getCellTemplates(t))g.mostRecentCellOutlet&&g.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,n);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let n=0,i=t.length;n<i;n++){const a=t.get(n).context;a.count=i,a.first=0===n,a.last=n===i-1,a.even=n%2==0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[n].dataIndex,a.renderIndex=n):a.index=this._renderRows[n].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,n=>{const i=this._columnDefsByName.get(n);return t.extractCellTemplate(i)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),n=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const i of n){const r=this._document.createElement(i.tag);r.setAttribute("role","rowgroup");for(const a of i.outlets)r.appendChild(a.elementRef.nativeElement);t.appendChild(r)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const t=(n,i)=>n||i.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Ie(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,ie.of)()).pipe((0,T.R)(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(n=>!n._table||n._table===this)}_updateNoDataRow(){const t=this._customNoDataRow||this._noDataRow;if(t){const n=0===this._rowOutlet.viewContainer.length;if(n!==this._isShowingNoDataRow){const i=this._noDataRowOutlet.viewContainer;n?i.createEmbeddedView(t.templateRef):i.clear(),this._isShowingNoDataRow=n}}}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.ZZ4),o.Y36(o.sBO),o.Y36(o.SBq),o.$8M("role"),o.Y36(ve.Is,8),o.Y36(v.K0),o.Y36(ke.t4),o.Y36(_.k),o.Y36(j),o.Y36(oe.rL),o.Y36(Q,12))},e.\u0275cmp=o.Xpm({type:e,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,i){if(1&t&&(o.Suo(i,E,5),o.Suo(i,y,5),o.Suo(i,F,5),o.Suo(i,k,5),o.Suo(i,M,5)),2&t){let r;o.iGM(r=o.CRH())&&(n._noDataRow=r.first),o.iGM(r=o.CRH())&&(n._contentColumnDefs=r),o.iGM(r=o.CRH())&&(n._contentRowDefs=r),o.iGM(r=o.CRH())&&(n._contentHeaderRowDefs=r),o.iGM(r=o.CRH())&&(n._contentFooterRowDefs=r)}},viewQuery:function(t,n){if(1&t&&(o.Gf(P,7),o.Gf(N,7),o.Gf(H,7),o.Gf(B,7)),2&t){let i;o.iGM(i=o.CRH())&&(n._rowOutlet=i.first),o.iGM(i=o.CRH())&&(n._headerRowOutlet=i.first),o.iGM(i=o.CRH())&&(n._footerRowOutlet=i.first),o.iGM(i=o.CRH())&&(n._noDataRowOutlet=i.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){2&t&&o.ekj("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[o._Bn([{provide:w,useExisting:e},{provide:_.k,useClass:_.yy},{provide:j,useClass:le},{provide:Q,useValue:null}])],ngContentSelectors:Fe,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){1&t&&(o.F$t(Oe),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[N,P,B,H],styles:[".cdk-table-fixed-layout{table-layout:fixed}\n"],encapsulation:2}),e})();function L(e,s){return e.concat(Array.from(s))}let je=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[oe.Cl]]}),e})();var ue=c(3238);const Ue=[[["caption"]],[["colgroup"],["col"]]],Ve=["caption","colgroup, col"];let fe=(()=>{class e extends A{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275cmp=o.Xpm({type:e,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(t,n){2&t&&o.ekj("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[o._Bn([{provide:_.k,useClass:_.yy},{provide:A,useExisting:e},{provide:w,useExisting:e},{provide:j,useClass:le},{provide:Q,useValue:null}]),o.qOj],ngContentSelectors:Ve,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){1&t&&(o.F$t(Ue),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[N,P,B,H],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky !important;position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}\n'],encapsulation:2}),e})(),X=(()=>{class e extends C{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","matCellDef",""]],features:[o._Bn([{provide:C,useExisting:e}]),o.qOj]}),e})(),q=(()=>{class e extends D{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","matHeaderCellDef",""]],features:[o._Bn([{provide:D,useExisting:e}]),o.qOj]}),e})(),W=(()=>{class e extends y{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[o._Bn([{provide:y,useExisting:e},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:e}]),o.qOj]}),e})(),J=(()=>{class e extends I{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[o.qOj]}),e})(),K=(()=>{class e extends Z{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[o.qOj]}),e})(),he=(()=>{class e extends k{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[o._Bn([{provide:k,useExisting:e}]),o.qOj]}),e})(),me=(()=>{class e extends F{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275dir=o.lG2({type:e,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[o._Bn([{provide:F,useExisting:e}]),o.qOj]}),e})(),pe=(()=>{class e extends V{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275cmp=o.Xpm({type:e,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[o._Bn([{provide:V,useExisting:e}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.GkF(0,0)},dependencies:[g],encapsulation:2}),e})(),_e=(()=>{class e extends ${}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275cmp=o.Xpm({type:e,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[o._Bn([{provide:$,useExisting:e}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.GkF(0,0)},dependencies:[g],encapsulation:2}),e})(),tt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[je,ue.BQ],ue.BQ]}),e})();var ye=c(4859),ge=c(7392),we=c(266);let nt=(()=>{class e{transform(t,...n){return[...t,...n]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Yjl({name:"addToArray",type:e,pure:!0}),e})();function st(e,s){1&e&&(o.TgZ(0,"th",10),o._uU(1," Title "),o.qZA())}function it(e,s){if(1&e&&(o.TgZ(0,"td",11),o._uU(1),o.qZA()),2&e){const t=s.$implicit;o.xp6(1),o.hij(" ",t.title,"")}}function rt(e,s){1&e&&(o.TgZ(0,"th",10),o._uU(1," Category "),o.qZA())}function at(e,s){if(1&e&&(o.TgZ(0,"td",11),o._uU(1),o.qZA()),2&e){const t=s.$implicit;o.xp6(1),o.hij(" ",t.category," ")}}function lt(e,s){1&e&&(o.TgZ(0,"th",10),o._uU(1," Price "),o.qZA())}function ct(e,s){if(1&e&&(o.TgZ(0,"td",11),o._uU(1),o.qZA()),2&e){const t=s.$implicit;o.xp6(1),o.hij(" ",t.price," ")}}function dt(e,s){1&e&&(o.TgZ(0,"th",10),o._uU(1," Employee "),o.qZA())}function ut(e,s){if(1&e&&(o.TgZ(0,"td",11),o._uU(1),o.qZA()),2&e){const t=s.$implicit;o.xp6(1),o.hij(" ",t.employee," ")}}function ft(e,s){1&e&&o._UZ(0,"th",10)}function ht(e,s){if(1&e){const t=o.EpF();o.TgZ(0,"td",11)(1,"div",12)(2,"button",13),o.NdJ("click",function(){const r=o.CHM(t).$implicit,a=o.oxw();return o.KtG(a.viewProduct.emit(r.id))}),o.TgZ(3,"mat-icon"),o._uU(4,"visibility"),o.qZA()(),o.TgZ(5,"button",14),o.NdJ("click",function(){const r=o.CHM(t).$implicit,a=o.oxw();return o.KtG(a.deleteProduct.emit(r.id))}),o.TgZ(6,"mat-icon"),o._uU(7,"delete"),o.qZA()()()()}}function mt(e,s){1&e&&o._UZ(0,"tr",15)}function pt(e,s){1&e&&o._UZ(0,"tr",16),2&e&&o.Q6J("@slideOut",void 0)}let _t=(()=>{class e extends Re.f{constructor(){super()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["euris-panel-list-view"]],features:[o.qOj],decls:20,vars:9,consts:[["mat-table","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","category"],["matColumnDef","price"],["matColumnDef","employee"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"actions"],["mat-mini-fab","","type","button","color","primary","matTooltip","Click to view!","matTooltipPosition","above",3,"click"],["mat-mini-fab","","type","button","color","warn","matTooltip","Click to delete!","matTooltipPosition","above",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,n){1&t&&(o.TgZ(0,"table",0),o.ynx(1,1),o.YNc(2,st,2,0,"th",2),o.YNc(3,it,2,1,"td",3),o.BQk(),o.ynx(4,4),o.YNc(5,rt,2,0,"th",2),o.YNc(6,at,2,1,"td",3),o.BQk(),o.ynx(7,5),o.YNc(8,lt,2,0,"th",2),o.YNc(9,ct,2,1,"td",3),o.BQk(),o.ynx(10,6),o.YNc(11,dt,2,0,"th",2),o.YNc(12,ut,2,1,"td",3),o.BQk(),o.ynx(13,7),o.YNc(14,ft,1,0,"th",2),o.YNc(15,ht,8,0,"td",3),o.BQk(),o.YNc(16,mt,1,0,"tr",8),o.ALo(17,"addToArray"),o.YNc(18,pt,1,1,"tr",9),o.ALo(19,"addToArray"),o.qZA()),2&t&&(o.Q6J("dataSource",n.products),o.xp6(16),o.Q6J("matHeaderRowDef",o.xi3(17,3,n.displayedColumns,"actions")),o.xp6(2),o.Q6J("matRowDefColumns",o.xi3(19,6,n.displayedColumns,"actions")))},dependencies:[fe,q,he,W,X,me,J,K,pe,_e,ye.lW,ge.Hw,we.gM,nt],styles:["[_nghost-%COMP%]   table[_ngcontent-%COMP%]{height:100%;width:100%}[_nghost-%COMP%]     .mat-table{background-color:transparent;border-collapse:separate;border-spacing:0 15px}[_nghost-%COMP%]     th.mat-header-cell, [_nghost-%COMP%]     td.mat-cell, [_nghost-%COMP%]     td.mat-footer-cell{border:none}[_nghost-%COMP%]     tbody td{background:#eeeeee}[_nghost-%COMP%]     tbody td:first-child{border-radius:10px 0 0 10px}[_nghost-%COMP%]     tbody td:last-child{border-radius:0 10px 10px 0}[_nghost-%COMP%]     .actions button{scale:.7}[_nghost-%COMP%]     .actions button.view{background-color:#4d7db5}"],data:{animation:[(0,x.X$)("slideOut",[(0,x.eR)(":leave",[(0,x.jt)("250ms ease",(0,x.oB)({transform:"translateX(100%)",opacity:0}))])])]},changeDetection:0}),e})();const yt=function(){return["title","category","price","employee"]};function gt(e,s){if(1&e){const t=o.EpF();o.ynx(0),o.TgZ(1,"euris-panel-list-view",1),o.NdJ("viewProduct",function(i){o.CHM(t);const r=o.oxw();return o.KtG(r.viewProduct(i))})("deleteProduct",function(i){o.CHM(t);const r=o.oxw();return o.KtG(r.deleteProduct(i))}),o.qZA(),o.BQk()}if(2&e){const t=s.ngIf;o.xp6(1),o.Q6J("products",t)("displayedColumns",o.DdM(2,yt))}}let wt=(()=>{class e extends De.m{}return e.\u0275fac=function(){let s;return function(n){return(s||(s=o.n5z(e)))(n||e)}}(),e.\u0275cmp=o.Xpm({type:e,selectors:[["euris-products-panel-page"]],features:[o.qOj],decls:3,vars:3,consts:[[4,"ngIf"],[3,"products","displayedColumns","viewProduct","deleteProduct"]],template:function(t,n){1&t&&(o.YNc(0,gt,2,3,"ng-container",0),o.ALo(1,"async"),o._UZ(2,"router-outlet")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,n.products$))},dependencies:[v.O5,te.lC,_t,v.Ov],styles:["[_nghost-%COMP%]{display:block;height:auto}[_nghost-%COMP%]     euris-panel-list-view{display:block}[_nghost-%COMP%]     euris-panel-list-view thead{position:sticky;top:0;background:#fafafa;z-index:1}"],changeDetection:0}),e})();var Ct=c(4466);let Dt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[v.ez,tt,ye.ot,ge.Ps,we.AV,Ct.m]}),e})();const vt=[{path:"",component:wt,children:[{path:"create-new",loadChildren:()=>Promise.all([c.e(592),c.e(485)]).then(c.bind(c,9485)).then(e=>e.CreateProductModule)},{path:":productId",loadChildren:()=>Promise.all([c.e(592),c.e(994)]).then(c.bind(c,3994)).then(e=>e.ProductViewModule),resolve:{productId:c(8018).w}}]}];let kt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[v.ez,te.Bz.forChild(vt),Dt]}),e})()}}]);