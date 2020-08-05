// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/SizeInfoSlider/templates/SizeInfoSlider.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/SizeInfoSlider","../kernel ../numberUtils ../dijit/RendererSlider ../dijit/RendererSlider/sliderUtils ../Color dijit/_TemplatedMixin dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/debounce dojo/dom-style dojo/Evented dojo/has dojo/dom-construct dojo/dom-class dojox/gfx dojo/text!./SizeInfoSlider/templates/SizeInfoSlider.html".split(" "),function(p,q,r,k,m,l,t,u,v,g,n,d,w,x,y,z,h,A){l=v([t,l,w],{declaredClass:"esri.dijit.SizeInfoSlider",baseClass:"esriSizeInfoSlider",
templateString:A,values:null,minValue:null,maxValue:null,minSize:null,maxSize:null,histogram:null,statistics:!1,zoomOptions:null,showHistogram:!0,showStatistics:!0,showLabels:!0,showTicks:!0,showHandles:!0,histogramWidth:100,rampWidth:26,symbolWidth:50,_rampNode:null,_sliderHeight:null,_barsGroup:null,_updateTimer:null,_forceMinValue:null,_forceMaxValue:null,_isRampFlipped:!1,constructor:function(a,b){b&&(void 0!==a.minValue&&this.set("_forceMinValue",a.minValue),void 0!==a.maxValue&&this.set("_forceMaxValue",
a.maxValue),this._css={handlerTickSize:"esri-handler-tick-size"},this._updateTimeout=n(this._updateTimeout,0),this._attachSymbols=n(this._attachSymbols,0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new r({type:"SizeInfoSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?
this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=d.get(this._rampNode,"height")||155;this._createSVGSurfaces();this._slider.on("slide",g.hitch(this,function(a){this.sizeInfo.minDataValue=a.values[0];this.sizeInfo.maxDataValue=a.values[1];this._set("values",a.values);
this._fillRamp(a.values);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:g.clone(this.sizeInfo)})}));this._slider.on("handle-value-change",g.hitch(this,function(a){this.sizeInfo.minDataValue=a.values[0];this.sizeInfo.maxDataValue=a.values[1];this._set("values",a.values);this._updateRendererSlider();a=g.clone(this.sizeInfo);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,sizeInfo:a});this.emit("handle-value-change",a)}));this._slider.on("data-value-change",
g.hitch(this,function(a){this.set({minValue:a.min,maxValue:a.max});a={minValue:this.minValue,maxValue:this.maxValue,sizeInfo:g.clone(this.sizeInfo)};this.emit("data-change",a);this.emit("data-value-change",a)}));this._slider.on("stop",g.hitch(this,function(a){this.emit("handle-value-change",g.clone(this.sizeInfo))}));this._slider.on("zoom-out",g.hitch(this,function(a){this.set("zoomOptions",null)}));this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||
this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("minValue",this._updateTimeout);this.watch("maxValue",this._updateTimeout);this.watch("symbol",this._updateTimeout);this.watch("sizeInfo",this._updateTimeout);this.watch("minSize",this._updateTimeout);this.watch("maxSize",this._updateTimeout);this.watch("statistics",this._updateTimeout);this.watch("histogram",this._updateTimeout);this.watch("zoomOptions",this._updateTimeout);this.watch("showHistogram",this._toggleHistogram);
this.watch("zoomOptions",this._zoomEventHandler)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();this.countTooltips&&u.forEach(this.countTooltips,function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){this.minSize=this.sizeInfo.minSize;this.maxSize=this.sizeInfo.maxSize;this.values=[this.sizeInfo.minDataValue,
this.sizeInfo.maxDataValue];this._isRampFlipped=this.minSize>this.maxSize||this.minSize.stops&&this.minSize.stops[0]&&this.maxSize.stops&&this.maxSize.stops[0]&&this.maxSize.stops[0].size<this.minSize.stops[0].size;null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,_minZoomLabel:this.minValue,
_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});this._slider.set("values",this.values);this._slider._reset();this._slider._updateRoundedLabels();this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},
_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.set({minSize:this.sizeInfo.minSize,maxSize:this.sizeInfo.maxSize});this._isRampFlipped=this.minSize>this.maxSize||this.minSize.stops&&this.minSize.stops[0]&&this.maxSize.stops&&this.maxSize.stops[0]&&this.maxSize.stops[0].size<this.minSize.stops[0].size;this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&
this.set("minValue",this._forceMinValue);null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue);null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);null===this.sizeInfo.minDataValue&&null===this.sizeInfo.maxDataValue||0===this.sizeInfo.minDataValue&&0===this.sizeInfo.maxDataValue?null===this.minValue&&null===this.maxValue&&this.set({minValue:0,maxValue:100,
values:[20,80]}):this.minValue===this.maxValue?0===this.minValue?this.set({maxValue:100,values:[20,80]}):null===this.minValue?this.set({minValue:0,maxValue:100,values:[20,80]}):this.set({minValue:0,maxValue:2*this.minValue,values:[this.maxValue/5,this.maxValue/5*4]}):this.set("values",[this.sizeInfo.minDataValue,this.sizeInfo.maxDataValue]);null===this.minValue&&this.set("minValue",0);null===this.maxValue&&this.set("maxValue",100)},_createSVGSurfaces:function(){this._proportionalSymbolSurface=h.createSurface(this._rampNode,
this.rampWidth,this._sliderHeight);this._surfaceRect=this._proportionalSymbolSurface.createRect({width:this.rampWidth,height:this._sliderHeight});this._histogramSurface=k.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();this._attachSymbols()},_attachSymbols:function(){var a=this._isRampFlipped?this.minSize:this.maxSize;this._attachSymbol(this._slider.moveables[0],this._isRampFlipped?this.maxSize:this.minSize);this._attachSymbol(this._slider.moveables[1],
a)},_attachSymbol:function(a,b){a._symbol||(a._symbol=y.create("div",{style:"position: absolute; left: 10px;"},a));var e=d.get(a._handleContainer,"height"),c=a._symbol,f=this.symbol;f&&"simplelinesymbol"==f.type?(b=b===this.minSize?5:13,this._generateLineSymbol(a,b,e)):(b=b===this.minSize?12:48,this._generateCircleSymbol(c,b,e));return c},_generateLineSymbol:function(a,b,e){var c=a._symbol;z.add(a._tick,this._css.handlerTickSize);d.set(c,"top",e/2-b+"px");d.set(c,"height",2*b+"px");d.set(c,"width",
b-4+"px");c.innerHTML="";a=h.createSurface(c);a.rawNode.style.position="absolute";a.rawNode.style.top=1===b?"1px":b/2+"px";this.isLeftToRight()||(a.rawNode.style.left="-45px");a.setDimensions(this.rampWidth,b);a.createRect({width:this.rampWidth,height:b}).setFill(new m([0,121,193,.8]));return a},_generateCircleSymbol:function(a,b,e){var c=b/2;b=12===b?!0:!1;d.set(a,"top",e/2-(c+1)+"px");d.set(a,"height",2*(c+1)+"px");d.set(a,"width",b?2*(c+1):c+"px");d.set(a,"left",b?"8px":"10px");a.innerHTML="";
a=h.createSurface(a);a.rawNode.style.position="absolute";this.isLeftToRight()||(a.rawNode.style.left="-45px");b?(a.setDimensions(2*(c+1),2*(c+1)),a.createCircle({cx:7,cy:c+1,r:c}).setFill(new m([0,121,193,.8])).setStroke("#fff")):(a.setDimensions(c+1,2*(c+1)),a.createCircle({cx:0,cy:c+1,r:c}).setFill(new m([0,121,193,.8])).setStroke("#fff"));return a},_fillRamp:function(a){var b=this._slider,e=this._sliderHeight,c=Math.round(e-((a?a[0]:b.values[0])-b.minimum)/(b.maximum-b.minimum)*e);a=Math.round(e-
((a?a[1]:b.values[1])-b.minimum)/(b.maximum-b.minimum)*e);var b=this.rampWidth,f={color:"#fff",width:3};this._proportionalSymbolSurface.clear();this._isRampFlipped?this._proportionalSymbolSurface.createPath().moveTo(10,0).lineTo(10,a).lineTo(b,c).lineTo(b,e).lineTo(0,e).lineTo(0,0).closePath().setFill("#9a9a9a"):this._proportionalSymbolSurface.createPath().moveTo(b,0).lineTo(b,a).lineTo(10,c).lineTo(10,e).lineTo(0,e).lineTo(0,0).closePath().setFill("#9a9a9a");d.set(this._proportionalSymbolSurface.rawNode,
"overflow","visible");d.set(this._proportionalSymbolSurface.rawNode,"background-color","#d9d9d9");null!==this.zoomOptions&&!1!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(f).setTransform(h.matrix.translate(0,5)),this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(f).setTransform(h.matrix.translate(0,195))):this.toggleSliderBottom?this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(f).setTransform(h.matrix.translate(0,
195)):this.toggleSliderTop&&this._proportionalSymbolSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke(f).setTransform(h.matrix.translate(0,5)))},_clearRect:function(){this._proportionalSymbolSurface.destroy();this._histogramSurface.destroy()},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(d.set(this._barsGroup.rawNode,
"display","inline-block"),this._showHistogram()):d.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=k.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=k.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a,b=this.statistics;
a=this._slider;var e=this.zoomOptions||null,c=k.getPrecision(this.maxValue),f,d;b.min===b.max&&b.min===b.avg?(f=0,d=2*b.avg):(f=b.min,d=b.max);if(f!==a.minimum||d!==a.maximum)f=a.minimum,d=a.maximum;e&&(f=e.minSliderValue,d=e.maxSliderValue);a=this._sliderHeight*(d-b.avg)/(d-f);b=q.round([b.avg,d,f])[0];this._avgHandleObjs=k.generateAvgLine(this._histogramSurface,b,a,c,this.isLeftToRight(),this.isDate)}}});x("extend-esri")&&g.setObject("dijit.SizeInfoSlider",l,p);return l});