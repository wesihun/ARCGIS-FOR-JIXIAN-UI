// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/styles/predominance","dojo/_base/array dojo/_base/lang dojo/has ../kernel ../Color ./colors ./size".split(" "),function(n,q,v,w,k,x,r){function t(b,a){return n.map(b,function(b){b=new k(b);null!=a&&(b.a=a);return b})}function u(b,a,e,c,f){var d;if(b=x[b])switch(d={},d.colors=t(b[f]||b.stops),d.noDataColor=new k(a.noDataColor),d.opacity=a.fillOpacity||1,d.sizeInfo=c,e){case "point":d.outline={color:new k(a.outline.color),width:a.outline.width};d.size=a.size;break;case "line":d.width=a.width;
break;case "polygon":d.outline={color:new k(a.outline.color),width:a.outline.width},c&&c.marker&&null!=a.markerSize&&(c.marker.size=a.markerSize)}return d}function y(b){if("esriGeometryPoint"===b||"esriGeometryMultipoint"===b)b="point";else if("esriGeometryPolyline"===b)b="line";else if("esriGeometryPolygon"===b||"esriGeometryMultiPatch"===b)b="polygon";return b}var l={color:[153,153,153,.25],width:1},m={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by their predominant category.",
basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:l,size:8},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:1},size:8},primary:"predominant-v2",
secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},dark:{common:{noDataColor:"#aaaaaa",width:2},
primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:l,fillOpacity:.8,markerSize:8},primary:"predominant-v1",secondary:"predominant-v2 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")},
dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:1},fillOpacity:.8,markerSize:8},primary:"predominant-v2",secondary:"predominant-v1 predominant-v3 predominant-v4 predominant-v5 predominance-race predominance-money predominance-race-ethnic predominance-rainbow predominance-sequence".split(" ")}}}},p={};(function(){var b,a,e,c,f,d,g,h;for(b in m)for(c in a=m[b],e=a.basemapGroups,f=p[b]={basemaps:[].concat(e.light).concat(e.dark),point:{},line:{},polygon:{}},e)for(d=e[c],g=
0;g<d.length;g++)h=d[g],a.pointSchemes&&(f.point[h]=a.pointSchemes[c]),a.lineSchemes&&(f.line[h]=a.lineSchemes[c]),a.polygonSchemes&&(f.polygon[h]=a.polygonSchemes[c])})();l={getAvailableThemes:function(b){var a=[],e,c,f;for(e in m)c=m[e],f=p[e],b&&-1===n.indexOf(f.basemaps,b)||a.push({name:c.name,label:c.label,description:c.description,basemaps:f.basemaps.slice(0)});return a},getSchemes:function(b){var a=b.theme,e=b.basemap,c=y(b.geometryType),f=b.numColors,d=(b=r.getSchemes({theme:"default",basemap:b.basemap,
geometryType:b.geometryType}))&&b.primaryScheme,a=p[a],g,h;(g=(g=a&&a[c])&&g[e])&&(h={primaryScheme:u(g.primary,g.common,c,d,f),secondarySchemes:n.map(g.secondary,function(a){return u(a,g.common,c,d,f)})});return h},cloneScheme:function(b){var a;b&&(a=q.mixin({},b),a.colors=t(a.colors),a.noDataColor&&(a.noDataColor=new k(a.noDataColor)),a.outline&&(a.outline={color:a.outline.color&&new k(a.outline.color),width:a.outline.width}),a.sizeInfo&&(a.sizeInfo=r.cloneScheme(a.sizeInfo)));return a}};v("extend-esri")&&
q.setObject("styles.predominance",l,w);return l});