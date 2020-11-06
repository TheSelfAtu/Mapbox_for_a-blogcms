/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./js/mapboxclusterbeforewebpack.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ページ読み込み時にMapboxクラスターインスタンスを作成
document.addEventListener('DOMContentLoaded', function () {
  var geodata = new Geodata();
  var mapboxFieldsTags = document.getElementsByClassName('owndata');
  Object.keys(mapboxFieldsTags).forEach(function (key) {
    geodata.pushEachFieldData(mapboxFieldsTags[key]);
    new MapboxCluster(geodata);
  });
}); // クラスター作成用のデータを保持するクラス

var Geodata = /*#__PURE__*/function () {
  function Geodata() {
    _classCallCheck(this, Geodata);

    this.featuredata = {
      "type": "FeatureCollection",
      "crs": {
        "type": "name",
        "properties": {
          "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
      },
      "features": []
    };
  }

  _createClass(Geodata, [{
    key: "pushEachFieldData",
    value: function pushEachFieldData(mapdata) {
      var url = mapdata.dataset.url;
      var title = mapdata.dataset.title;
      var lng = mapdata.dataset.lng;
      var lat = mapdata.dataset.lat;
      var geodata = {
        "type": "Feature",
        "properties": {
          "url": url,
          "title": title,
          "marker-symbol": "default_marker",
          "icon": 'tw-provincial'
        },
        "geometry": {
          "type": "Point",
          "coordinates": [lng, lat]
        }
      };
      this.featuredata.features.push(geodata);
    }
  }]);

  return Geodata;
}(); // クラスター作成用メソッドを保持するクラス


var MapboxCluster = /*#__PURE__*/function () {
  function MapboxCluster(geodata) {
    _classCallCheck(this, MapboxCluster);

    this.geodata = geodata;
    this.mapboxgl = mapboxgl;
    this.mapboxgl.accessToken = document.getElementById('accesstoken_styleurl').dataset.accesstoken;
    this.instancemethod();
  }

  _createClass(MapboxCluster, [{
    key: "instancemethod",
    value: function instancemethod() {
      this.instantiationMap();
      this.addSource();
      this.addLayer();
      this.addPopup();
      this.addMarkerImage();
      this.addClickEvent(this.map);
      this.chagePointer(this.map);
    } // マップを初期化

  }, {
    key: "instantiationMap",
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'fmap',
        style: document.getElementById('accesstoken_styleurl').dataset.styleurl,
        center: [135, 35],
        zoom: 1
      });
    } // クラスター表示のための情報を追加する

  }, {
    key: "addSource",
    value: function addSource() {
      var _this = this;

      this.map.on('load', function () {
        // Add a new source from our GeoJSON data and set the
        // 'cluster' option to true. GL-JS will add the point_count property to your source data.
        _this.map.addSource('locations', {
          type: 'geojson',
          data: _this.geodata.featuredata,
          cluster: true,
          clusterMaxZoom: 14,
          // Max zoom to cluster points on
          clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)

        });
      });
    } // クラスター表示のためのレイヤーを追加する

  }, {
    key: "addLayer",
    value: function addLayer() {
      var _this2 = this;

      this.map.on('load', function () {
        // クラスター表示の円のレイヤー
        _this2.map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'locations',
          filter: ['has', 'point_count'],
          paint: {
            // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
            'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
          }
        }); // クラスターに表示される数字のレイヤー


        _this2.map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'locations',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          }
        }); // クラスターでなくマーカーの表現


        _this2.map.addLayer({
          id: 'unclustered-point',
          type: 'symbol',
          // type: 'circle',
          source: 'locations',
          filter: ['!', ['has', 'point_count']],
          // paint: {
          //     // 'circle-color': '#ffffff',
          //     'circle-color': '#11b4da',
          //     'circle-radius': 4,
          //     'circle-stroke-width': 1,
          //     'circle-stroke-color': '#fff'
          // }
          "layout": {
            "icon-image": "map_marker",
            // 'icon-image': '{icon}-2',
            // "icon-image": "cat",
            'icon-size': 0.5,
            'icon-allow-overlap': true
          }
        });
      });
    } // ポップアップを追加

  }, {
    key: "addPopup",
    value: function addPopup() {
      var _this3 = this;

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      this.map.on('click', 'unclustered-point', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var message = '<a href=' + e.features[0].properties.url + '>' + e.features[0].properties.title + '</a>'; // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new _this3.mapboxgl.Popup().setLngLat(coordinates).setHTML(message).addTo(_this3.map);
      });
    }
  }, {
    key: "addMarkerImage",
    value: function addMarkerImage() {
      var _this4 = this;

      this.map.on('load', function () {
        _this4.map.loadImage('https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png', function (error, image) {
          if (error) throw error;

          _this4.map.addImage('map_marker', image);
        });
      });
    }
  }, {
    key: "addClickEvent",
    value: function addClickEvent(map) {
      // inspect a cluster on click
      map.on('click', 'clusters', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        var clusterId = features[0].properties.cluster_id;
        map.getSource('locations').getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) return;
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
          });
        });
      });
    } // クラスターの円にマウスを合わせた際にマウスの形が変化

  }, {
    key: "chagePointer",
    value: function chagePointer(map) {
      map.on('mouseenter', 'clusters', function () {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters', function () {
        map.getCanvas().style.cursor = '';
      });
    }
  }]);

  return MapboxCluster;
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvLi9qcy9tYXBib3hjbHVzdGVyYmVmb3Jld2VicGFjay5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW9kYXRhIiwiR2VvZGF0YSIsIm1hcGJveEZpZWxkc1RhZ3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwdXNoRWFjaEZpZWxkRGF0YSIsIk1hcGJveENsdXN0ZXIiLCJmZWF0dXJlZGF0YSIsIm1hcGRhdGEiLCJ1cmwiLCJkYXRhc2V0IiwidGl0bGUiLCJsbmciLCJsYXQiLCJmZWF0dXJlcyIsInB1c2giLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiZ2V0RWxlbWVudEJ5SWQiLCJhY2Nlc3N0b2tlbiIsImluc3RhbmNlbWV0aG9kIiwiaW5zdGFudGlhdGlvbk1hcCIsImFkZFNvdXJjZSIsImFkZExheWVyIiwiYWRkUG9wdXAiLCJhZGRNYXJrZXJJbWFnZSIsImFkZENsaWNrRXZlbnQiLCJtYXAiLCJjaGFnZVBvaW50ZXIiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsInN0eWxldXJsIiwiY2VudGVyIiwiem9vbSIsIm9uIiwidHlwZSIsImRhdGEiLCJjbHVzdGVyIiwiY2x1c3Rlck1heFpvb20iLCJjbHVzdGVyUmFkaXVzIiwiaWQiLCJzb3VyY2UiLCJmaWx0ZXIiLCJwYWludCIsImxheW91dCIsImUiLCJjb29yZGluYXRlcyIsImdlb21ldHJ5Iiwic2xpY2UiLCJtZXNzYWdlIiwicHJvcGVydGllcyIsIk1hdGgiLCJhYnMiLCJsbmdMYXQiLCJQb3B1cCIsInNldExuZ0xhdCIsInNldEhUTUwiLCJhZGRUbyIsImxvYWRJbWFnZSIsImVycm9yIiwiaW1hZ2UiLCJhZGRJbWFnZSIsInF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyIsInBvaW50IiwibGF5ZXJzIiwiY2x1c3RlcklkIiwiY2x1c3Rlcl9pZCIsImdldFNvdXJjZSIsImdldENsdXN0ZXJFeHBhbnNpb25ab29tIiwiZXJyIiwiZWFzZVRvIiwiZ2V0Q2FudmFzIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxPQUFKLEVBQWQ7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUF2QjtBQUNBQyxRQUFNLENBQUNDLElBQVAsQ0FBWUgsZ0JBQVosRUFBOEJJLE9BQTlCLENBQXNDLFVBQUNDLEdBQUQsRUFBUztBQUMzQ1AsV0FBTyxDQUFDUSxpQkFBUixDQUEwQk4sZ0JBQWdCLENBQUNLLEdBQUQsQ0FBMUM7QUFDQSxRQUFJRSxhQUFKLENBQWtCVCxPQUFsQjtBQUNILEdBSEQ7QUFJSCxDQVBELEUsQ0FTQTs7SUFDTUMsTztBQUNGLHFCQUFjO0FBQUE7O0FBQ1YsU0FBS1MsV0FBTCxHQUFtQjtBQUNmLGNBQVEsbUJBRE87QUFFZixhQUFPO0FBQUUsZ0JBQVEsTUFBVjtBQUFrQixzQkFBYztBQUFFLGtCQUFRO0FBQVY7QUFBaEMsT0FGUTtBQUdmLGtCQUFZO0FBSEcsS0FBbkI7QUFLSDs7OztzQ0FFaUJDLE8sRUFBUztBQUN2QixVQUFNQyxHQUFHLEdBQUdELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkQsR0FBNUI7QUFDQSxVQUFNRSxLQUFLLEdBQUdILE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkMsS0FBOUI7QUFDQSxVQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkUsR0FBNUI7QUFDQSxVQUFNQyxHQUFHLEdBQUdMLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkcsR0FBNUI7QUFDQSxVQUFNaEIsT0FBTyxHQUFHO0FBQUUsZ0JBQVEsU0FBVjtBQUFxQixzQkFBYztBQUFFLGlCQUFPWSxHQUFUO0FBQWMsbUJBQVNFLEtBQXZCO0FBQThCLDJCQUFpQixn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RyxDQUFDNEMsTUFBSixDQUFXO0FBQ1B0QyxrQkFBTSxFQUFFbkIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZa0MsUUFBWixDQUFxQkQsV0FEdEI7QUFFUGIsZ0JBQUksRUFBRUE7QUFGQyxXQUFYO0FBSUgsU0FUTDtBQVdILE9BakJEO0FBa0JILEssQ0FFRDs7OztpQ0FDYVAsRyxFQUFLO0FBQ2RBLFNBQUcsQ0FBQ1EsRUFBSixDQUFPLFlBQVAsRUFBcUIsVUFBckIsRUFBaUMsWUFBWTtBQUN6Q1IsV0FBRyxDQUFDNkMsU0FBSixHQUFnQnpDLEtBQWhCLENBQXNCMEMsTUFBdEIsR0FBK0IsU0FBL0I7QUFDSCxPQUZEO0FBR0E5QyxTQUFHLENBQUNRLEVBQUosQ0FBTyxZQUFQLEVBQXFCLFVBQXJCLEVBQWlDLFlBQVk7QUFDekNSLFdBQUcsQ0FBQzZDLFNBQUosR0FBZ0J6QyxLQUFoQixDQUFzQjBDLE1BQXRCLEdBQStCLEVBQS9CO0FBQ0gsT0FGRDtBQUdIIiwiZmlsZSI6Im1hcGJveGNsdXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDjg5rjg7zjgrjoqq3jgb/ovrzjgb/mmYLjgatNYXBib3jjgq/jg6njgrnjgr/jg7zjgqTjg7Pjgrnjgr/jg7PjgrnjgpLkvZzmiJBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbGV0IGdlb2RhdGEgPSBuZXcgR2VvZGF0YSgpO1xuICAgIGxldCBtYXBib3hGaWVsZHNUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3duZGF0YScpO1xuICAgIE9iamVjdC5rZXlzKG1hcGJveEZpZWxkc1RhZ3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBnZW9kYXRhLnB1c2hFYWNoRmllbGREYXRhKG1hcGJveEZpZWxkc1RhZ3Nba2V5XSlcbiAgICAgICAgbmV3IE1hcGJveENsdXN0ZXIoZ2VvZGF0YSk7XG4gICAgfSk7XG59KVxuXG4vLyDjgq/jg6njgrnjgr/jg7zkvZzmiJDnlKjjga7jg4fjg7zjgr/jgpLkv53mjIHjgZnjgovjgq/jg6njgrlcbmNsYXNzIEdlb2RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZlYXR1cmVkYXRhID0ge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICAgICAgICAgIFwiY3JzXCI6IHsgXCJ0eXBlXCI6IFwibmFtZVwiLCBcInByb3BlcnRpZXNcIjogeyBcIm5hbWVcIjogXCJ1cm46b2djOmRlZjpjcnM6T0dDOjEuMzpDUlM4NFwiIH0gfSxcbiAgICAgICAgICAgIFwiZmVhdHVyZXNcIjogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdXNoRWFjaEZpZWxkRGF0YShtYXBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG1hcGRhdGEuZGF0YXNldC51cmw7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbWFwZGF0YS5kYXRhc2V0LnRpdGxlO1xuICAgICAgICBjb25zdCBsbmcgPSBtYXBkYXRhLmRhdGFzZXQubG5nO1xuICAgICAgICBjb25zdCBsYXQgPSBtYXBkYXRhLmRhdGFzZXQubGF0O1xuICAgICAgICBjb25zdCBnZW9kYXRhID0geyBcInR5cGVcIjogXCJGZWF0dXJlXCIsIFwicHJvcGVydGllc1wiOiB7IFwidXJsXCI6IHVybCwgXCJ0aXRsZVwiOiB0aXRsZSwgXCJtYXJrZXItc3ltYm9sXCI6IFwiZGVmYXVsdF9tYXJrZXJcIiwgXCJpY29uXCI6ICd0dy1wcm92aW5jaWFsJyB9LCBcImdlb21ldHJ5XCI6IHsgXCJ0eXBlXCI6IFwiUG9pbnRcIiwgXCJjb29yZGluYXRlc1wiOiBbbG5nLCBsYXRdIH0gfVxuICAgICAgICB0aGlzLmZlYXR1cmVkYXRhLmZlYXR1cmVzLnB1c2goZ2VvZGF0YSk7XG4gICAgfVxuXG59XG5cbi8vIOOCr+ODqeOCueOCv+ODvOS9nOaIkOeUqOODoeOCveODg+ODieOCkuS/neaMgeOBmeOCi+OCr+ODqeOCuVxuY2xhc3MgTWFwYm94Q2x1c3RlciB7XG4gICAgY29uc3RydWN0b3IoZ2VvZGF0YSkge1xuICAgICAgICB0aGlzLmdlb2RhdGEgPSBnZW9kYXRhO1xuICAgICAgICB0aGlzLm1hcGJveGdsID0gbWFwYm94Z2w7XG4gICAgICAgIHRoaXMubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzdG9rZW5fc3R5bGV1cmwnKS5kYXRhc2V0LmFjY2Vzc3Rva2VuO1xuICAgICAgICB0aGlzLmluc3RhbmNlbWV0aG9kKCk7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VtZXRob2QoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcCgpO1xuICAgICAgICB0aGlzLmFkZFNvdXJjZSgpO1xuICAgICAgICB0aGlzLmFkZExheWVyKCk7XG4gICAgICAgIHRoaXMuYWRkUG9wdXAoKTtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLmFkZENsaWNrRXZlbnQodGhpcy5tYXApO1xuICAgICAgICB0aGlzLmNoYWdlUG9pbnRlcih0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8g44Oe44OD44OX44KS5Yid5pyf5YyWXG4gICAgaW5zdGFudGlhdGlvbk1hcCgpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgdGhpcy5tYXBib3hnbC5NYXAoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnZm1hcCcsXG4gICAgICAgICAgICBzdHlsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc3Rva2VuX3N0eWxldXJsJykuZGF0YXNldC5zdHlsZXVybCxcbiAgICAgICAgICAgIGNlbnRlcjogWzEzNSwgMzVdLFxuICAgICAgICAgICAgem9vbTogMSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Kv44Op44K544K/44O86KGo56S644Gu44Gf44KB44Gu5oOF5aCx44KS6L+95Yqg44GZ44KLXG4gICAgYWRkU291cmNlKCkge1xuICAgICAgICB0aGlzLm1hcC5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBzb3VyY2UgZnJvbSBvdXIgR2VvSlNPTiBkYXRhIGFuZCBzZXQgdGhlXG4gICAgICAgICAgICAvLyAnY2x1c3Rlcicgb3B0aW9uIHRvIHRydWUuIEdMLUpTIHdpbGwgYWRkIHRoZSBwb2ludF9jb3VudCBwcm9wZXJ0eSB0byB5b3VyIHNvdXJjZSBkYXRhLlxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkU291cmNlKCdsb2NhdGlvbnMnLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZ2VvZGF0YS5mZWF0dXJlZGF0YSxcbiAgICAgICAgICAgICAgICBjbHVzdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsdXN0ZXJNYXhab29tOiAxNCwgLy8gTWF4IHpvb20gdG8gY2x1c3RlciBwb2ludHMgb25cbiAgICAgICAgICAgICAgICBjbHVzdGVyUmFkaXVzOiA1MCAvLyBSYWRpdXMgb2YgZWFjaCBjbHVzdGVyIHdoZW4gY2x1c3RlcmluZyBwb2ludHMgKGRlZmF1bHRzIHRvIDUwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g44Kv44Op44K544K/44O86KGo56S644Gu44Gf44KB44Gu44Os44Kk44Ok44O844KS6L+95Yqg44GZ44KLXG4gICAgYWRkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMubWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8g44Kv44Op44K544K/44O86KGo56S644Gu5YaG44Gu44Os44Kk44Ok44O8XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih7XG4gICAgICAgICAgICAgICAgaWQ6ICdjbHVzdGVycycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnbG9jYXRpb25zJyxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IFsnaGFzJywgJ3BvaW50X2NvdW50J10sXG4gICAgICAgICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHN0ZXAgZXhwcmVzc2lvbnMgKGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjLyNleHByZXNzaW9ucy1zdGVwKVxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRocmVlIHN0ZXBzIHRvIGltcGxlbWVudCB0aHJlZSB0eXBlcyBvZiBjaXJjbGVzOlxuICAgICAgICAgICAgICAgICAgICAvLyAgICogQmx1ZSwgMjBweCBjaXJjbGVzIHdoZW4gcG9pbnQgY291bnQgaXMgbGVzcyB0aGFuIDEwMFxuICAgICAgICAgICAgICAgICAgICAvLyAgICogWWVsbG93LCAzMHB4IGNpcmNsZXMgd2hlbiBwb2ludCBjb3VudCBpcyBiZXR3ZWVuIDEwMCBhbmQgNzUwXG4gICAgICAgICAgICAgICAgICAgIC8vICAgKiBQaW5rLCA0MHB4IGNpcmNsZXMgd2hlbiBwb2ludCBjb3VudCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gNzUwXG4gICAgICAgICAgICAgICAgICAgICdjaXJjbGUtY29sb3InOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RlcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2dldCcsICdwb2ludF9jb3VudCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyM1MWJiZDYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyNmMWYwNzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgNzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgJyNmMjhjYjEnXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICdjaXJjbGUtcmFkaXVzJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0ZXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgWydnZXQnLCAncG9pbnRfY291bnQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICA3NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICA0MFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIOOCr+ODqeOCueOCv+ODvOOBq+ihqOekuuOBleOCjOOCi+aVsOWtl+OBruODrOOCpOODpOODvFxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgIGlkOiAnY2x1c3Rlci1jb3VudCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICAgICAgc291cmNlOiAnbG9jYXRpb25zJyxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IFsnaGFzJywgJ3BvaW50X2NvdW50J10sXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWZpZWxkJzogJ3twb2ludF9jb3VudF9hYmJyZXZpYXRlZH0nLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1mb250JzogWydESU4gT2ZmYyBQcm8gTWVkaXVtJywgJ0FyaWFsIFVuaWNvZGUgTVMgQm9sZCddLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1zaXplJzogMTJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIOOCr+ODqeOCueOCv+ODvOOBp+OBquOBj+ODnuODvOOCq+ODvOOBruihqOePvlxuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgICAgICAgIGlkOiAndW5jbHVzdGVyZWQtcG9pbnQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgICAgICAgICAgIC8vIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogJ2xvY2F0aW9ucycsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBbJyEnLCBbJ2hhcycsICdwb2ludF9jb3VudCddXSxcbiAgICAgICAgICAgICAgICAvLyBwYWludDoge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAnY2lyY2xlLWNvbG9yJzogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgIC8vICAgICAnY2lyY2xlLWNvbG9yJzogJyMxMWI0ZGEnLFxuICAgICAgICAgICAgICAgIC8vICAgICAnY2lyY2xlLXJhZGl1cyc6IDQsXG4gICAgICAgICAgICAgICAgLy8gICAgICdjaXJjbGUtc3Ryb2tlLXdpZHRoJzogMSxcbiAgICAgICAgICAgICAgICAvLyAgICAgJ2NpcmNsZS1zdHJva2UtY29sb3InOiAnI2ZmZidcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgXCJsYXlvdXRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImljb24taW1hZ2VcIjogXCJtYXBfbWFya2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICdpY29uLWltYWdlJzogJ3tpY29ufS0yJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gXCJpY29uLWltYWdlXCI6IFwiY2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICdpY29uLXNpemUnOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICdpY29uLWFsbG93LW92ZXJsYXAnOiB0cnVlXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDjg53jg4Pjg5fjgqLjg4Pjg5fjgpLov73liqBcbiAgICBhZGRQb3B1cCgpIHtcbiAgICAgICAgLy8gV2hlbiBhIGNsaWNrIGV2ZW50IG9jY3VycyBvbiBhIGZlYXR1cmUgaW4gdGhlIHBsYWNlcyBsYXllciwgb3BlbiBhIHBvcHVwIGF0IHRoZVxuICAgICAgICAvLyBsb2NhdGlvbiBvZiB0aGUgZmVhdHVyZSwgd2l0aCBkZXNjcmlwdGlvbiBIVE1MIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgICAgIHRoaXMubWFwLm9uKCdjbGljaycsICd1bmNsdXN0ZXJlZC1wb2ludCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGUuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnPGEgaHJlZj0nICsgZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLnVybCArICc+JyArIGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy50aXRsZSArICc8L2E+J1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoYXQgaWYgdGhlIG1hcCBpcyB6b29tZWQgb3V0IHN1Y2ggdGhhdCBtdWx0aXBsZVxuICAgICAgICAgICAgLy8gY29waWVzIG9mIHRoZSBmZWF0dXJlIGFyZSB2aXNpYmxlLCB0aGUgcG9wdXAgYXBwZWFyc1xuICAgICAgICAgICAgLy8gb3ZlciB0aGUgY29weSBiZWluZyBwb2ludGVkIHRvLlxuICAgICAgICAgICAgd2hpbGUgKE1hdGguYWJzKGUubG5nTGF0LmxuZyAtIGNvb3JkaW5hdGVzWzBdKSA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzWzBdICs9IGUubG5nTGF0LmxuZyA+IGNvb3JkaW5hdGVzWzBdID8gMzYwIDogLTM2MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3IHRoaXMubWFwYm94Z2wuUG9wdXAoKVxuICAgICAgICAgICAgICAgIC5zZXRMbmdMYXQoY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgLnNldEhUTUwobWVzc2FnZSlcbiAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRNYXJrZXJJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcC5sb2FkSW1hZ2UoXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hc3NldHMvY3VzdG9tX21hcmtlci5wbmcnLFxuICAgICAgICAgICAgICAgIChlcnJvciwgaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuYWRkSW1hZ2UoJ21hcF9tYXJrZXInLCBpbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZENsaWNrRXZlbnQobWFwKSB7XG4gICAgICAgIC8vIGluc3BlY3QgYSBjbHVzdGVyIG9uIGNsaWNrXG4gICAgICAgIG1hcC5vbignY2xpY2snLCAnY2x1c3RlcnMnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGZlYXR1cmVzID0gbWFwLnF1ZXJ5UmVuZGVyZWRGZWF0dXJlcyhlLnBvaW50LCB7XG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBbJ2NsdXN0ZXJzJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgY2x1c3RlcklkID0gZmVhdHVyZXNbMF0ucHJvcGVydGllcy5jbHVzdGVyX2lkO1xuICAgICAgICAgICAgbWFwLmdldFNvdXJjZSgnbG9jYXRpb25zJykuZ2V0Q2x1c3RlckV4cGFuc2lvblpvb20oXG4gICAgICAgICAgICAgICAgY2x1c3RlcklkLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIsIHpvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcC5lYXNlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBmZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IHpvb21cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Kv44Op44K544K/44O844Gu5YaG44Gr44Oe44Km44K544KS5ZCI44KP44Gb44Gf6Zqb44Gr44Oe44Km44K544Gu5b2i44GM5aSJ5YyWXG4gICAgY2hhZ2VQb2ludGVyKG1hcCkge1xuICAgICAgICBtYXAub24oJ21vdXNlZW50ZXInLCAnY2x1c3RlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwLm9uKCdtb3VzZWxlYXZlJywgJ2NsdXN0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFwLmdldENhbnZhcygpLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==