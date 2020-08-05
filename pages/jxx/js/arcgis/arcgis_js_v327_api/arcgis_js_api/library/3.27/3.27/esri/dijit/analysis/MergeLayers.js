// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/MergeLayers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_mergeLayersToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"mergeLayersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n\t\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.mergeLayers}\x3c/label\x3e\r\n\t\t\t\t\t\t\t\x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n\t\t\t\t\t\t\t\t\x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n\t\t\t\t\t\t\t\t\x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.mergeLayers}\x3c/a\x3e\r\n\t\t\t\t\t\t\t\x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing padBottom0"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e                \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_mergeLayersTable" style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n             \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_mergeLayersDescription" \x3e${i18n.mergeLayersDefine}\x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n           \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"padBottom0"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseMergeLayer}\x3c/label\x3e\r\n            \x3c/td\x3e  \r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergeLayer" data-dojo-attach-point\x3d"_esriHelpMergeLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e    \r\n            \x3ctd colspan\x3d"3"\x3e\r\n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-props\x3d"required:true" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_mergeLayersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e     \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.mergeFieldsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MergingAttributes" data-dojo-attach-point\x3d"_esriHelpMergingAttributes"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e          \r\n          \x3c/tr\x3e  \r\n          \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddMergingAttributes" data-dojo-attach-point\x3d"_mergingAttributesWidget" data-dojo-props\x3d"showGeoAnalyticsParams:${showGeoAnalyticsParams}, addAsRow:true"\x3e\r\n          \x3c/tr\x3e        \r\n \t      \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName" data-dojo-attach-point\x3d"_esriHelpOutputName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_mergesToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv \x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/MergeLayers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/RadioButton dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./AnalysisRegistry ./CreditEstimator ./ItemTypes ./utils ./components/AddMergingAttributes dojo/i18n!../../nls/jsapi dojo/text!./templates/MergeLayers.html".split(" "),
function(k,v,e,l,q,c,r,w,I,n,g,t,J,p,x,u,y,z,A,B,C,K,L,M,N,O,P,Q,R,S,T,D,U,E,F,d,V,h,f,W,G,H){k=v([y,z,A,B,C,F,E],{declaredClass:"esri.dijit.analysis.MergeLayers",templateString:H,widgetsInTemplate:!0,inputLayer:null,mergeLayers:null,mergingAttributes:null,outputLayerName:null,tableTypes:[h.TABLE,h.BTABLE],stdLayerTypes:[h.FLAYER],bdLayerTypes:[h.BDATAFEATURE,h.BIGDATA],geometryTypes:[d.GeometryTypes.Point,d.GeometryTypes.MultiPoint,d.GeometryTypes.Line,d.GeometryTypes.Polygon],blankOption:{label:" ",
value:"",selected:!0},i18n:null,toolName:"MergeLayers",helpFileName:"MergeLayers",resultParameter:"MergedLayer",constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,q.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,G.mergeLayers)},postCreate:function(){this.inherited(arguments);x.add(this._form.domNode,"esriSimpleForm");this.set("showReadyToUseLayers",
!1);this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this.showGeoAnalyticsParams&&this._updateHelpTopicsForGAX();this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.mergeLayers[this._mergeLayersSelect.get("value")];a.inputLayer=c.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.mergeLayer=
c.toJson(this.constructAnalysisInputLyrObj(b));a.mergingAttributes=c.toJson(this._mergingAttributesWidget.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=c.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=c.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},
_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},b={},m;m=this.mergeLayers[this._mergeLayersSelect.get("value")];a.inputLayer=c.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.mergeLayer=c.toJson(this.constructAnalysisInputLyrObj(m));a.mergingAttributes=c.toJson(this._mergingAttributesWidget.get("mergingAttributes"));this.returnFeatureCollection||(a.OutputName=c.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showGeoAnalyticsParams&&
(this.resultParameter="output");this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=c.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(m={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(m.extent=this.map.extent._normalize(!0)),a.context=c.toJson(m));b.jobParams=a;b.itemParams={description:this.i18n.itemDescription,tags:n.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};
this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleLayerChange:function(a){this._isAnalysisSelect=!1;"browse"===a?(a=this._browsedlg.browseItems.get("query"),this.inputLayer&&(this.inputLayer.geometryType===d.GeometryTypes.Point?this._createBrowseItems({tags:["point"]},this._mergeLayersSelect):this.inputLayer.geometryType===d.GeometryTypes.Line?this._createBrowseItems({tags:["line"]},this._mergeLayersSelect):this.inputLayer.geometryType===d.GeometryTypes.Polygon&&
this._createBrowseItems({tags:["polygon"]},this._mergeLayersSelect)),this._createBrowseItems({},this._mergeLayersSelect)):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this.inputLayer&&(this.inputLayer.geometryType&&(this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!0,this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[this.inputLayer.geometryType]),
this._browseLyrsdlg.browseItems.plugIn.checkTimeFilter=this.showGeoAnalyticsParams,this._browseLyrsdlg.browseItems.plugIn.timeTypes=[this._browseLyrsdlg.browseItems.plugIn.getTimeType(this.inputLayer)],this._browseLyrsdlg.browseItems.plugIn.layerTypes=this.inputLayer.geometryType?this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes):this.stdLayerTypes:this.tableTypes),this._browseLyrsdlg.show()):""!==a&&(this._isSameLayer(this.mergeLayers[a],this.inputLayer)?this._updateAnalysisLayerUI(!0):
(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[a].name}),this._outputLayerInput.set("value",this.outputLayerName),this.set("mergeLayer",this.mergeLayers[a])))},_save:function(){},_buildUI:function(){var a=!0;this._loadConnections();f.initHelpLinks(this.domNode,this.showHelp);g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&
!f.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),f.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.mergeLayers&&this.mergeLayer&&!f.isLayerInLayers(this.mergeLayer,this.mergeLayers)&&this.mergeLayers.push(this.mergeLayer);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);
this.mergingAttributes&&this._mergingAttributesWidget.loadOptions(this.mergingAttributes);f.addReadyToUseLayerOption(this,[this._analysisSelect,this._mergeLayersSelect]);g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?
this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none")},_updateAnalysisLayerUI:function(a){var b=[],c=this._mergeLayersSelect.getOptions(),e,d,g,h,k;this.inputLayer&&(t.set(this._mergeLayersDescription,"innerHTML",n.substitute(this.i18n.mergeLayersDefine,{layername:this.inputLayer.name})),g=f.getTimeType(this.inputLayer),h=-1!==this.tableTypes.indexOf(this.inputLayer.type)?this.tableTypes:this.stdLayerTypes.concat(this.bdLayerTypes),
k=this.inputLayer.geometryType);this.mergeLayers&&(e=l.some(c,function(a){return"browse"===a.value},this),d=l.some(c,function(a){return"browselayers"===a.value},this),this._mergeLayersSelect.removeOption(c),l.forEach(this.mergeLayers,function(a,c){var e=!!this._isSameLayer(a,this.mergeLayer),d;d=-1!==h.indexOf(a.type)&&a.geometryType===k;this.showGeoAnalyticsParams&&(d=d&&f.getTimeType(a)===g);!this._isSameLayer(a,this.inputLayer)&&d&&b.push({value:c+"",label:a.name,selected:e})},this),(this.get("showReadyToUseLayers")||
this.get("showBrowseLayers")||e||d)&&b.push({type:"separator",value:""}),this.get("showReadyToUseLayers")&&e&&b.push({value:"browse",label:this.i18n.browseAnalysisTitle}),this.get("showBrowseLayers")&&d&&b.push({value:"browselayers",label:this.i18n.browseLayers}),(0===b.length||this.rerun&&!this.mergeLayer)&&b.push(this.blankOption),this._mergeLayersSelect.addOption(b),this.rerun||this._mergeLayersSelect.set("value",this._mergeLayersSelect.get("value")));a&&0<=this._mergeLayersSelect.get("value")&&
""!==this._mergeLayersSelect.get("value")&&(this.outputLayerName=n.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name,mergelayername:this.mergeLayers[this._mergeLayersSelect.get("value")].name}));this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;"browse"===a?this._createBrowseItems({},this._analysisSelect):"browselayers"===a?(this.showGeoAnalyticsParams&&(p=this._browseLyrsdlg.browseItems.get("query"),
p.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",p)),this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0,this._browseLyrsdlg.browseItems.plugIn.layerTypes=this.showGeoAnalyticsParams?this.bdLayerTypes.concat(this.stdLayerTypes).concat(this.tableTypes):this.stdLayerTypes,this._browseLyrsdlg.browseItems.plugIn.checkTimeFilter=!1,this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!this.showGeoAnalyticsParams,this._browseLyrsdlg.browseItems.plugIn.geometryTypes=
this.geometryTypes,this._browseLyrsdlg.show()):(this.set("inputLayer",this.inputLayers[a]),this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this.mergeLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._mergeLayersSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b)},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,
"onclick",e.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a;this._mergingAttributesWidget.set("inputLayer",a)},_setMergeLayerAttr:function(a){this.mergeLayer=a;this._mergingAttributesWidget.set("mergeLayer",a)},_setInputLayersAttr:function(a){this.inputLayers=a||[];this.showGeoAnalyticsParams||(this.inputLayers=l.filter(a||[],function(a){return a.type&&
"table"!==a.type.toLowerCase()}))},_setMergeLayersAttr:function(a){this.mergeLayers=a||[]},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return f.validateServiceName(a,{textInput:this._outputLayerInput})},_connect:function(a,b,c){this._pbConnects.push(q.connect(a,b,c))},_showMessages:function(a){t.set(this._bodyNode,"innerHTML",a);r.fadeIn({node:this._errorMessagePane,easing:u.quadIn,onEnd:e.hitch(this,function(){g.set(this._errorMessagePane,
{display:"block"})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();r.fadeOut({node:this._errorMessagePane,easing:u.quadOut,onEnd:e.hitch(this,function(){g.set(this._errorMessagePane,{display:"none"})})}).play()},_isSameLayer:function(a,b){return a&&b&&(a.name&&b.name&&a.name===b.name||a.url&&b.url&&a.url===b.url)},_updateHelpTopicsForGAX:function(){this._esriHelpMergeLayer.setAttribute("esriHelpTopic","mergeLayer");this._esriHelpMergingAttributes.setAttribute("esriHelpTopic","mergingAttributes");
this._esriHelpOutputName.setAttribute("esriHelpTopic","outputName")}});w("extend-esri")&&e.setObject("dijit.analysis.MergeLayers",k,D);return k});