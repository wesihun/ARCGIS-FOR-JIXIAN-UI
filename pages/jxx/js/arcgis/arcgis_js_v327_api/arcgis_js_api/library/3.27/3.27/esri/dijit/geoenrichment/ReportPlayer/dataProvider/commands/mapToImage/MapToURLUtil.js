// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/MapToURLUtil","dojo/_base/declare dojo/Deferred dojo/when dojo/dom-style esri/tasks/PrintTask esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/dijit/geoenrichment/utils/UrlUtil esri/dijit/geoenrichment/utils/ImageInfoUtil ./LegendToLayerUtil".split(" "),function(l,m,g,h,n,p,q,r,t,u){var k,v=l(n,{_getPrintDefinition:function(a,b){var c=this.inherited(arguments);console.log(c);return c},_createOperationalLayers:function(a,
b){var c=this.inherited(arguments);if(b.__legendLayerId){var d=c.filter(function(a){return a.id===b.__legendLayerId})[0];c.splice(c.indexOf(d),1);c.push(d)}return c}}),e={setPrintMapTaskUrl:function(a){k=a;r.registerCORS(a)},mapToURL:function(a,b,c){var d=e._getUrlForMap(a);if(d)return d;b=g(b&&u.legendToGraphicsLayer(b,a,c),function(b){b&&a.addLayer(b);return g(e._runPrintTask(a,c,b),function(c){b&&a.removeLayer(b);var d=new m;setTimeout(function(){d.resolve(c.url)},100);return d.promise})});e._putUrlToCache(a,
b);return b},_runPrintTask:function(a,b,c){function d(){var d=new v(k),e=new p;e.map=a;var f=new q;f.exportOptions={width:3.125*h.get(b,"width"),height:3.125*h.get(b,"height"),dpi:300};f.format="png32";f.showAttribution=!1;f.__legendLayerId=c&&c.id;e.template=f;return d.execute(e)}return g(d(),function(a){return a},function(a){console.log(a);return g(d(),function(a){return a},function(a){console.log(a);return d()})})},urlToSrc:function(a,b){return b.saveImagesAsDataUrl?t.getRemoteImageDataUrl(a,{sizeLimit:1500}):
a}},f,w=0;e.enableCaching=function(){f={}};e.clearCaching=function(){f=null};e._putUrlToCache=function(a,b){f&&b&&(a.__mapToImageUtilKey=w++,f[a.__mapToImageUtilKey]=b)};e._getUrlForMap=function(a){return f&&f[a.__mapToImageUtilKey]};return e});