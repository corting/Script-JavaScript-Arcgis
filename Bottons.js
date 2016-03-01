'use strict';

var map;
require(['esri/map',
        'esri/layers/ArcGISTiledMapServiceLayer',
        'esri/layers/ArcGISDynamicMapServiceLayer',
        'esri/symbols/LineSymbol',
        'esri/layers/FeatureLayer',
          'dojo/domReady!'], 

     function(Map,
      ArcGISTiledMapServiceLayer,
      ArcGISDynamicMapServiceLayer,
      LineSymbol,
      FeatureLayer) {
     map = new Map('mapaCache',{
        center: [-56.049,38.485],
        zoom: 3,
        basemap: 'streets'
      }); 

    var btn2 = document.getElementById('btn2');
    var btn = document.getElementById('btn');
/*this botton add a base map and delete all layers*/
    btn.addEventListener('click', function(){
      var satellite = map.setBasemap('satellite');
      map.removeAllLayers()
    });

/*this other botton ad layer*/
    btn2.addEventListener('click', function(){
      var UrlCache = 'http://services.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer';
      var Urldinamic = 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer';
      var Urlfeature = 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyFeedSample/MapServer/1';
      var mapacache = new ArcGISTiledMapServiceLayer(UrlCache)
      map.addLayer(mapacache);
      var mapadinamico = new ArcGISDynamicMapServiceLayer(Urldinamic)
      map.addLayer(mapadinamico);
      var mapafeautre = new FeatureLayer(Urlfeature)
      map.addLayer(mapafeautre);
    });
  });
