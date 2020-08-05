// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/RasterFunctionX","dojo/_base/declare dojo/_base/lang dojo/_base/config ../raster/RasterInfo ../../../geometry/Extent ../../PixelBlock".split(" "),function(k,l,m,n,p,q){return k(null,{functionName:null,functionArguments:null,pixelType:"Unknown",rasterInfo:null,constructor:function(a){a&&(this.pixelType=a.outputPixelType||a.OutputPixelType||this.pixelType,this.renderTexture=a.renderTexture,this._initFunction())},mixinIgnoreCase:function(a,b){var c=Object.keys(a),
e=Object.keys(b),f,d,g=c.length,h;for(f=0;f<e.length;f++)if(h=b[e[f]],null!=h)for(d=0;d<g;d++)if(c[d].toLowerCase()===e[f].toLowerCase()){a[c[d]]=h;break}return a},bind:function(a){},setProcessingContext:function(a){if(!a)throw"cannot bind to layer without options";this.useWebGL=!!a.useWebGL;this._tileMode=!!a.tileMode;this._glSetting=a.glSetting;this._rawRasterInfo=a.rawRasterInfo;this._xformSetting=a.xformSetting||this._xformSetting;this.gl=this.useWebGL?this._glSetting.gl:null;this._glSetting&&
(this._glSetting.pingpong=null,this._glSetting.branches=null);var b=this.functionArguments.raster,c=this.functionArguments.raster2,e=this.functionArguments.dem,f=this.functionArguments.fillRaster,d=this.functionArguments.rasters;b&&b.functionArguments&&b.setProcessingContext(a);c&&c.functionArguments&&c.setProcessingContext(a);e&&e.functionArguments&&e.setProcessingContext(a);f&&f.functionArguments&&f.setProcessingContext(a);if(d)for(b=0;b<d.length;b++)d[b]&&d[b].functionArguments&&d[b].setProcessingContext(a);
this.bind()},updateBranchStructure:function(){var a=0,b=this.functionArguments;b.raster&&b.raster.read&&b.raster.functionArguments&&(a+=b.raster.updateBranchStructure());b.raster2&&b.raster2.read&&b.raster2.functionArguments&&(a+=b.raster2.updateBranchStructure(),b.raster2.isBranch=!0,b.raster&&b.raster.read&&(b.raster.isBranch=!0));b.rasters&&(a=b.rasters.length,b.rasters.forEach(function(a){a.read&&a.functionArguments&&(a.isBranch=!0)}));b.dem&&b.dem.read&&b.dem.functionArguments&&(a+=b.dem.updateBranchStructure());
return 1===a?0:a},read:function(a){a=this.processRasterArgument(a);return this.useWebGL?this.readGL(a):this.read2D(a)},hasTilingEffects:function(){return!1},read2D:function(){},readGL:function(){},getSourceRasterInfo:function(){var a,b={};if(this.functionArguments.raster2)b.functionArguments.raster=this._bindRaster(this.functionArguments.raster),b.functionArguments.raster2=this._bindRaster(this.functionArguments.raster2);else if(this.functionArguments.rasters)for(b.rasters=[],a=0;a<this.functionArguments.rasters.length;a++)b.rasters[a]=
this._bindRaster(this.functionArguments.rasters[a]);else b.raster=this._bindRaster(this.functionArguments.raster);return this.sourceRasterInfo=b},processRasterArgument:function(a){var b=this.bind();if(!0!==b)throw b;var c={};if(this.functionArguments.raster2)c.raster=this._readRaster(this.functionArguments.raster,a),c.raster2=this._readRaster(this.functionArguments.raster2,a);else if(this.functionArguments.rasters)for(c.rasters=[],b=0;b<this.functionArguments.rasters.length;b++)c.rasters[b]=this._readRaster(this.functionArguments.rasters[b],
a);else c.raster=this._readRaster(this.functionArguments.raster,a);return c},toJson:function(){var a=this.functionArguments,b=a.raster,c=a.raster2,a=a.rasters,b=b?b.toJson?b.toJson():b:null,c=c?c.toJson?c.toJson():c:null,e;a&&0<a.length&&(e=a.map(function(a){return a.toJson?a.toJson():a}));a=l.mixin({},this.functionArguments);a.raster=b;a.raster2=c;a.rasters=e;a=this._fixRasterFunctionJson(a);return{rasterFunction:this.functionName,rasterFunctionArguments:a,outputPixelType:this.pixelType}},_initFunction:function(a){},
_getIntegerRange:function(a){var b;switch(a){case "U8":b=[0,255];break;case "U16":b=[0,65535];break;case "U32":b=[0,4294967295];break;case "S8":b=[-128,127];break;case "S16":b=[-32768,32767];break;case "S32":b=[-2147483648,2147483647]}return b},_calculatePixelType:function(a,b){return a&&"unknown"!==a.toLowerCase()?a:b},_clonePixelData:function(a){if(null==a)return a;var b={};a.extent&&(b.extent=new p(a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax,a.extent.spatialReference));a=a.pixelBlock;
if(null==a)return b;b.pixelBlock=a.clone?a.clone():q.prototype.clone(a);return b},_readRaster:function(a,b){var c;null==a||"$$"===a?c=this._clonePixelData(b.src[Object.keys(b.src)[0]]):a&&a.rasterInfo&&!a.functionArguments?c=this._clonePixelData(b.src[a._rasterId]):isNaN(a)?a.read&&(c=a.functionArguments?a.read(b):this._clonePixelData(b)):(c=b.src?b.src[Object.keys(b.src)[0]]:b,b=c.pixelBlock,b=new Float32Array(b.width*b.height),b.fill(parseFloat(a)),c=this._clonePixelData(c),c.pixelBlock.pixels=
[b],c.isConstant=!0);return c},_bindRaster:function(a){var b;a&&"$$"!==a?isNaN(a)?a.rasterInfo?b=a.rasterInfo:a.bind&&a.bind()&&(b=a.rasterInfo):b={}:b=this._rawRasterInfo;b&&(b=b.clone?b.clone():new n(b),b.bandCount=b.bandCount||3);return b},_getOutputBand:function(a,b){switch(a){case "U8":a=new Uint8Array(b);break;case "U16":a=new Uint16Array(b);break;case "U32":a=new Uint32Array(b);break;case "S8":a=new Int8Array(b);break;case "S16":a=new Int16Array(b);break;case "S32":a=new Int32Array(b);break;
case "U32":a=new Uint32Array(b);break;case "F32":a=new Float32Array(b);break;case "F64":a=new Float64Array(b);break;default:a=new Float32Array(b)}return a},_clampBand:function(a,b,c){if(("F64"===b||"F32"===b)&&!c)return a;var e,f,d=this._getIntegerRange(b),g=a.length;if(d)for(c=d[1],d=d[0],b=this._getOutputBand(b,g),e=0;e<g;e++)f=a[e],b[e]=f>c?c:f<d?d:f;else b=a;return b},_performance:{start:function(){return this._start=self.performance&&self.performance.now()||new Date}.bind(this),elapsed:function(){return(self.performance&&
self.performance.now()||new Date)-this._start}.bind(this)},_addPerformanceMetric:function(a){m.isDebug&&(self.rasterFunctionPerformance||(self.rasterFunctionPerformance=[]),self.rasterFunctionPerformance.push(a),50<self.rasterFunctionPerformance.length&&self.rasterFunctionPerformance.shift())},_fixRasterFunctionJson:function(a){for(var b in a)a.hasOwnProperty(b)&&(null==a[b]?delete a[b]:a[b]instanceof Object&&!a[b].sourceType&&this._fixRasterFunctionJson(a[b],!0));return a}})});