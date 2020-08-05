// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tableViewRendering/TableViewRenderer","dojo/_base/declare dojo/_base/lang dijit/Destroyable esri/dijit/geoenrichment/ReportPlayer/config ../../supportClasses/tableJson/TableJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../../sections/sectionUtils/SectionJsonUtil ../utils/builder/utils/ChartDataUtil ../utils/ChartTypes ../../grid/coreUtils/GridDataUtil dojo/i18n!esri/nls/jsapi".split(" "),function(l,q,w,x,y,z,
A,B,C,r,h){h=h.geoenrichment.dijit.ReportPlayer.ChartContainer;var D=/_P$/i,F={buildSectionJsonFromSeriesItems:function(a,t,b,d,k,E,u){function m(e,f,g,c){e=b[e-1].data[f-1];f=e.point.fieldInfo&&D.test(e.point.fieldInfo.name);if(e.isUnavailableData)return g?x.tables.showUnavailableData?h.unavailableDataShort:"":0;c=void 0===c?e[e.valueProp]:c;return g?B.formatNumber(c,d,f,a):c}b=b.map(function(a){a=q.mixin({},a);a.data=a.data.slice();a.data.sort(function(a,b){return a.unsortedIndex-b.unsortedIndex});
return a});if(t&&C.isColumnBarLike(a)){var v=[];b[0].data.forEach(function(a,f){v.push({name:a.name,data:b.map(function(a){return q.mixin({},a.data[f],{name:a.name})})})});b=v}var n=b[0].data.length+1,l=u/n-2,p=y.createTable({numColumns:b.length+1,numRows:n,width:E,height:u,processTableCell:function(a,b,g,c,d){a.style.fields[b].verticalAlign="middle";a.style.fields[b].horizontalPadding=5;a.style.fields[b].fontSize=Math.round(Math.min(l,15-4*n/50))}});p.data.data.forEach(function(a,f){p.data.columns.forEach(function(g,
c){if(0===f)a[g.field]=0===c?d.xAxis.title||"":1===c?k?t?b[c-1].name||"":h.thisArea:1<b.length?b[c-1].name||"":d.yAxis.title||"":b[c-1].name||"";else if(0===c){g=g.field;var e;e=0===f?void 0:b[0].data[f-1].name||"";a[g]=e}else e=m(c,f,!1),c=m(c,f,!0),r.setNumericDataValue(e,a,g.field),a[g.field]=c})});return{sectionJson:A.wrapInDetailsSectionJson(p),numberFormatFunction:function(a,b){return m(b.column.index,b.gridData.index,!0,a)}}}};return l(w,{_tableSection:null,_sorting:null,renderTableForChart:function(a){var h=
this;this._destroyTable();if(a.chartSeries&&a.chartSeries.length){var b={"class":"chartContainer_tableSection"};b.initialWidth=a.width;var d=F.buildSectionJsonFromSeriesItems(a.chartType,a.isMultiFeatureChart,a.chartSeries,a.visualProperties,a.hasComparison,a.width,a.height);b.json=d.sectionJson;var k=a.viewModel.getDocumentDefaultStyles(a.theme);k.backgroundImage&&k.backgroundImage.data&&(b.json.style={backgroundColor:k.backgroundColor});a.showAnimation||(d.numberFormatFunction=null);b.viewModel=
a.viewModel;b.theme=a.theme;b.tableClass="chartContainerChartTable";b.hasFixedLayout=!1;b.parentWidget=a.parentWidget;b.initialViewMode=this._viewMode||z.PREVIEW_VALUES;b.tableParams={enableNumberAnimation:a.showAnimation,_postCreateFieldCell:function(a){if(d.numberFormatFunction){var b=d.numberFormatFunction;a.setNumberValue(r.getNumericCellValue(a),function(d){return b(d,a)},!0);setTimeout(function(){d.numberFormatFunction=null})}},onSortingChanged:function(a){h._sorting=a}};this._tableSection=
a.viewModel.layoutBuilder.createElement("section",b,a.tableNode);this._tableSection.setResizedHeight(a.height);this._tableSection.getTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(a){this._viewMode!==a&&(this._viewMode=a,this._tableSection&&this._tableSection.setViewMode(a))},getVisualState:function(){return{tableSection:this._tableSection&&this._tableSection.getVisualState()}},setVisualState:function(a){a&&a.tableSection&&this._tableSection&&this._tableSection.setVisualState(a.tableSection)},
destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy();this._tableSection=null},destroy:function(){this._destroyTable();this.inherited(arguments)}})});