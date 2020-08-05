//>>built
define("dojox/lang/docs",["dojo","dijit","dojox"],function(f,z,t){f.provide("dojox.lang.docs");(function(){function u(d){console.log("Warning, the API docs must be available at ../util/docscripts/api.json or ../util/docscripts/api/*.json in order for dojox.lang.docs to supply schema information, but it could not be loaded: "+d)}var g={},h=[],n=t.lang.docs._loadedDocs={},l=function(d,a){g[a]=d},q=function(d){var a=d.type||"",c,e=!1,b=!1,m,a=a.replace(/\?/,function(){e=!0;return""}),a=a.replace(/\[\]/,
function(){b=!0;return""});a.match(/HTML/)?a="string":"String"==a||"Number"==a||"Boolean"==a||"Object"==a||"Array"==a||"Integer"==a||"Function"==a?a=a.toLowerCase():"bool"==a?a="boolean":a?(c=f.getObject(a)||{},m=!0):c={};c=c||{type:a};b&&(c={items:c,type:"array"},m=!1);m||(e&&(c.optional=!0),/const/.test(d.tags)&&(c.readonly=!0));return c},v=function(d,a){var c=n[a];if(c){d.description=c.description;d.properties={};d.methods={};if(c.properties)for(var e=c.properties,b=0,m=e.length;b<m;b++)"prototype"==
e[b].scope&&((d.properties[e[b].name]=q(e[b])).description=e[b].summary);if(c.methods)for(e=c.methods,b=0,m=e.length;b<m;b++)if((a=e[b].name)&&"prototype"==e[b].scope){a=d.methods[a]={};a.description=e[b].summary;var k=e[b].parameters;if(k){a.parameters=[];for(var p=0,g=k.length;p<g;p++){var h=k[p],l=a.parameters[p]=q(h);l.name=h.name;l.optional="optional"==h.usage}}(k=e[b]["return-types"])&&k[0]&&(k=q(k[0]),k.type&&(a.returns=k))}(c=c.superclass)&&(d["extends"]=f.getObject(c))}},r=function(d){h.push(d)},
w=f.declare;f.declare=function(d){var a=w.apply(this,arguments);l(a,d);return a};f.mixin(f.declare,w);var x,y=f.require;f.require=function(d){r(d);return y.apply(this,arguments)};t.lang.docs.init=function(d){function a(){f.require=y;h=null;try{f.xhrGet({sync:!d,url:f.baseUrl+"../util/docscripts/api.json",handleAs:"text"}).addCallbacks(function(a){n=(new Function("return "+a))();a=null;l=v;for(var b in g)l(g[b],b);g=null},u)}catch(b){u(b)}}if(x)return null;x=!0;var c=function(a,c){return f.xhrGet({sync:c||
!d,url:f.baseUrl+"../util/docscripts/api/"+a+".json",handleAs:"text"}).addCallback(function(a){a=(new Function("return "+a))();for(var b in a)n[b]||(n[b]=a[b])})};try{var e=h.shift();c(e,!0).addCallbacks(function(){r=function(a){if(!n[a])try{c(a)}catch(m){n[a]={}}};f.forEach(h,function(a){r(a)});h=null;l=v;for(i in g)l(g[i],i);g=null},a)}catch(b){a()}return null}})()});