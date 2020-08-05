// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.27/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/FindPointClusters",{clustersLabel:"\u05de\u05e6\u05d0 \u05d0\u05ea \u05d4\u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u05d4\u05e9\u05db\u05d1\u05d4 \u200e${inputLayerName}\u200e.",chooseLayerLabel:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05e9\u05db\u05d1\u05d4 \u05e9\u05e2\u05d1\u05d5\u05e8\u05d4 \u05d9\u05e9 \u05dc\u05de\u05e6\u05d5\u05d0 \u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea",minClusterPtsLabel:"\u05de\u05e1\u05e4\u05e8 \u05d4\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05dc\u05d9 \u05db\u05d3\u05d9 \u05dc\u05d4\u05d9\u05d7\u05e9\u05d1 \u05dc\u05d0\u05e9\u05db\u05d5\u05dc",
limitSearchLabel:"\u05d4\u05d2\u05d1\u05dc \u05d0\u05ea \u05d8\u05d5\u05d5\u05d7 \u05d4\u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc- (\u05d0\u05d5\u05e4\u05e6\u05d9\u05d5\u05e0\u05dc\u05d9)",limitSearchReqLabel:"\u05d4\u05d2\u05d1\u05dc \u05d0\u05ea \u05d8\u05d5\u05d5\u05d7 \u05d4\u05d7\u05d9\u05e4\u05d5\u05e9 \u05d0\u05dc",outputLayerName:"\u05de\u05e6\u05d0 \u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u200e${inputLayerName}\u200e",itemDescription:"\u05e9\u05db\u05d1\u05ea \u05d4\u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e0\u05d5\u05e6\u05e8\u05d4 \u05de\u05d4\u05e8\u05e6\u05ea \u05e4\u05ea\u05e8\u05d5\u05df \u05d0\u05d9\u05ea\u05d5\u05e8 \u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05d4\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u200e${inputLayerName}\u200e.",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7, \u05d0\u05d9\u05ea\u05d5\u05e8 \u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea, ${inputLayerName}",itemSnippet:"\u05e9\u05db\u05d1\u05ea \u05d4\u05d9\u05e9\u05d5\u05d9\u05d5\u05ea \u05e0\u05d5\u05e6\u05e8\u05d4 \u05de\u05d0\u05d9\u05ea\u05d5\u05e8 \u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea",chooseClusteringMethod:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05e9\u05d9\u05d8\u05ea \u05d4\u05d0\u05e9\u05db\u05d5\u05dc\u05d5\u05ea \u05e9\u05d1\u05d4 \u05ea\u05e8\u05e6\u05d4 \u05dc\u05d4\u05e9\u05ea\u05de\u05e9",
dbscanLabel:"\u05de\u05e8\u05d7\u05e7 \u05de\u05d5\u05d2\u05d3\u05e8 (DBSCAN)",hdbscanLabel:"\u05d4\u05ea\u05d0\u05de\u05d4 \u05e2\u05e6\u05de\u05d9\u05ea (HDBSCAN)"});