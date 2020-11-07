/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/mapboxfieldbeforewebpack.js":
/*!****************************************!*\
  !*** ./js/mapboxfieldbeforewebpack.js ***!
  \****************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../js/mapboxobjects.js */ "./js/mapboxobjects.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // エントリー詳細画面・作成画面・変更画面にてMapboxカスタムフィールドを表示

window.addEventListener("load", function () {
  createFieldMap();
});

var FieldMap = /*#__PURE__*/function (_Mymap) {
  _inherits(FieldMap, _Mymap);

  var _super = _createSuper(FieldMap);

  function FieldMap() {
    _classCallCheck(this, FieldMap);

    return _super.apply(this, arguments);
  }

  _createClass(FieldMap, [{
    key: "instantiationMap",
    // マップのインスタンス化
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'fmap',
        style: this.styleurl,
        //基本的な画面の制御プロパティ
        center: [this.lng, this.lat],
        zoom: this.zoom,
        pitch: this.pitch,
        bearing: this.bearing
      });
    }
  }]);

  return FieldMap;
}(_js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Mymap); //   エントリー「変更」画面にてインスタンス化


var FieldExsistedMap = /*#__PURE__*/function (_FieldMap) {
  _inherits(FieldExsistedMap, _FieldMap);

  var _super2 = _createSuper(FieldExsistedMap);

  function FieldExsistedMap(mapInformationObj) {
    var _this;

    _classCallCheck(this, FieldExsistedMap);

    _this = _super2.call(this, mapInformationObj);

    _this.instanceMethod();

    return _this;
  }

  _createClass(FieldExsistedMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
      this.setMapZoomToForm(this.map);
      this.addExtentionToMap(this.map);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
    }
  }]);

  return FieldExsistedMap;
}(FieldMap); //   マップカテゴリのカスタムフィールドの新規作成時にインスタンス化


var FieldDefaultMap = /*#__PURE__*/function (_FieldMap2) {
  _inherits(FieldDefaultMap, _FieldMap2);

  var _super3 = _createSuper(FieldDefaultMap);

  function FieldDefaultMap(mapInformationObj) {
    var _this2;

    _classCallCheck(this, FieldDefaultMap);

    _this2 = _super3.call(this, mapInformationObj);
    _this2.lng = 135;
    _this2.lat = 35;
    _this2.zoom = 5;
    _this2.pitch = 0;
    _this2.bearing = 0;

    _this2.instanceMethod();

    return _this2;
  } // インスタンス時によばれるメソッド


  _createClass(FieldDefaultMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setDefaultValueToForm();
      this.instantiationMap();
      this.instantiationMarker();
      this.setMapZoomToForm(this.map);
      this.addExtentionToMap(this.map);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
    }
  }]);

  return FieldDefaultMap;
}(FieldMap);

var ShowFieldMap = /*#__PURE__*/function (_FieldMap3) {
  _inherits(ShowFieldMap, _FieldMap3);

  var _super4 = _createSuper(ShowFieldMap);

  function ShowFieldMap(mapInformationObj) {
    var _this3;

    _classCallCheck(this, ShowFieldMap);

    _this3 = _super4.call(this, mapInformationObj);

    _this3.instanceMethod();

    return _this3;
  }

  _createClass(ShowFieldMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
    } // インスタンス作成時によばれるメソッド

  }, {
    key: "instantiationMarker",
    value: function instantiationMarker() {
      // マーカーを立てる
      this.marker = new this.mapboxgl.Marker({}).setLngLat(this.map.getCenter()).addTo(this.map);
    }
  }]);

  return ShowFieldMap;
}(FieldMap);

var MapFieldSize = /*#__PURE__*/function (_MapSize) {
  _inherits(MapFieldSize, _MapSize);

  var _super5 = _createSuper(MapFieldSize);

  function MapFieldSize(mapInformationObj) {
    _classCallCheck(this, MapFieldSize);

    return _super5.call(this, mapInformationObj);
  }

  return MapFieldSize;
}(_js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.MapSize); //   カスタムフィールドMapboxを作成


function createFieldMap(unitid) {
  var mapInformationObj = {
    formlngtag: document.getElementById('lng'),
    formlattag: document.getElementById('lat'),
    formzoomtag: document.getElementById('zoom'),
    formpitchtag: document.getElementById('pitch'),
    formbearingtag: document.getElementById('bearing'),
    formsizetag: document.getElementById('size'),
    formcommenttag: document.getElementById('comment'),
    maptag: document.getElementById('fmap'),
    mapwrappertag: document.getElementById('fmapwrapper'),
    geocodertag: document.getElementById('geocoder'),
    accesstoken_styleurltag: document.getElementById('accesstoken_styleurl'),
    lng: document.getElementById('fmap').dataset.lng,
    lat: document.getElementById('fmap').dataset.lat,
    zoom: document.getElementById('fmap').dataset.zoom,
    pitch: document.getElementById('fmap').dataset.pitch,
    bearing: document.getElementById('fmap').dataset.bearing,
    styleurl: document.getElementById('accesstoken_styleurl').dataset.styleurl,
    accesstoken: document.getElementById('accesstoken_styleurl').dataset.accesstoken,
    comment: document.getElementById('fmap').dataset.comment,
    mapsize: document.getElementById('fmap').dataset.mapsize,
    maptype: document.getElementById('fmap').dataset.maptype
  };

  if (mapInformationObj.maptype === 'show') {
    // エントリー詳細画面での処理
    console.log('field show');
    var mapbox_map = new ShowFieldMap(mapInformationObj);
  } else if (mapInformationObj.lng != false) {
    // マップカテゴリのカスタムフィールドを既存の場合に処理
    var _mapbox_map = new FieldExsistedMap(mapInformationObj);

    var mapbox_geocoder = new _js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Geocoder(_mapbox_map);
    console.log('field exsisted');
  } else if (mapInformationObj.maptype === 'field') {
    // マップカテゴリのカスタムフィールドを新規作成の場合に処理
    console.log('field new');

    var _mapbox_map2 = new FieldDefaultMap(mapInformationObj);

    var _mapbox_geocoder = new _js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Geocoder(_mapbox_map2);
  }
}

console.log('mapboxfield.js loaded');

/***/ }),

/***/ "./js/mapboxobjects.js":
/*!*****************************!*\
  !*** ./js/mapboxobjects.js ***!
  \*****************************/
/*! namespace exports */
/*! export Geocoder [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MapSize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Mymap [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mymap": function() { return /* binding */ Mymap; },
/* harmony export */   "MapSize": function() { return /* binding */ MapSize; },
/* harmony export */   "Geocoder": function() { return /* binding */ Geocoder; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mymap = /*#__PURE__*/function () {
  function Mymap(mapInformationObj) {
    _classCallCheck(this, Mymap);

    this.mapboxgl = mapboxgl;
    this.mapboxgl.accessToken = mapInformationObj.accesstoken;
    this.accesstoken = mapInformationObj.accesstoken;
    this.styleurl = mapInformationObj.styleurl;
    this.lng = mapInformationObj.lng;
    this.lat = mapInformationObj.lat;
    this.pitch = mapInformationObj.pitch;
    this.bearing = mapInformationObj.bearing;
    this.zoom = mapInformationObj.zoom;
    this.comment = mapInformationObj.comment;
    this.mapsize = mapInformationObj.mapsize;
    this.maptype = mapInformationObj.maptype;
    this.formlngtag = mapInformationObj.formlngtag;
    this.formlattag = mapInformationObj.formlattag;
    this.formzoomtag = mapInformationObj.formzoomtag;
    this.formpitchtag = mapInformationObj.formpitchtag;
    this.formbearingtag = mapInformationObj.formbearingtag;
    this.formsizetag = mapInformationObj.formsizetag;
    this.formcommenttag = mapInformationObj.formcommenttag;
    this.formsetstyleurltag = mapInformationObj.formsetstyleurltag;
    this.maptag = mapInformationObj.maptag;
    this.mapwrappertag = mapInformationObj.maptagwrapper;
    this.geocodertag = mapInformationObj.geocodertag;
    this.accesstoken_styleurltag = mapInformationObj.accesstoken_styleurltag;
  } // マップの情報表示


  _createClass(Mymap, [{
    key: "showMapInformaiton",
    value: function showMapInformaiton() {
      console.log('lng', this.lng);
      console.log('lat', this.lat);
      console.log('zoom', this.zoom);
      console.log('pitch', this.pitch);
      console.log('bearing', this.bearing);
      console.log('comment', this.comment);
      console.log('mapsize', this.mapsize);
      console.log('accesstoken', this.accesstoken);
      console.log('styleurl', this.styleurl);
      console.log('maptag', this.maptag);
      console.log('accesstoken_styleurltag', this.accesstoken_styleurltag);
      console.log('maptype', this.maptype);
    } // インスタンス生成

  }, {
    key: "instanceMethod",
    value: function instanceMethod() {
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.addExtentionToMap(this.map);
    } // マップのインスタンス化

  }, {
    key: "instantiationMap",
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'map',
        style: this.styleurl,
        //基本的な画面の制御プロパティ
        center: [this.lng, this.lat],
        zoom: this.zoom,
        pitch: this.pitch,
        bearing: this.bearing
      });
    } // マーカーのインスタンス化

  }, {
    key: "instantiationMarker",
    value: function instantiationMarker() {
      // マーカーを立てる
      this.marker = new this.mapboxgl.Marker({
        draggable: true
      }).setLngLat(this.map.getCenter()).addTo(this.map);
    } // ポップアップのインスタンス化

  }, {
    key: "instantiationPopup",
    value: function instantiationPopup() {
      this.popup = new mapboxgl.Popup().setHTML(this.comment);
      this.marker.setPopup(this.popup);
    } // マップの追加機能

  }, {
    key: "addExtentionToMap",
    value: function addExtentionToMap(map) {
      //拡大・縮小・方位ナビゲーション  
      map.addControl(new mapboxgl.NavigationControl(), 'top-left'); //フルスクリーンモード

      map.addControl(new mapboxgl.FullscreenControl()); //スケール表示

      map.addControl(new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
      }));
    } // htmlに持たせたデータ属性をフォームに代入

  }, {
    key: "setDefaultValueToForm",
    value: function setDefaultValueToForm() {
      this.formlngtag.value = this.lng;
      this.formlattag.value = this.lat;
      this.formzoomtag.value = this.zoom;
      this.formpitchtag.value = this.pitch;
      this.formbearingtag.value = this.bearing;
    } // 地図の角度をフォームに代入

  }, {
    key: "setMapPitchToForm",
    value: function setMapPitchToForm(map) {
      var _this = this;

      map.on('pitch', function (e) {
        // 現在のpitchレベル取得
        _this.formpitchtag.value = e.target.getPitch();
      });
    } // 地図の回転をフォームに代入

  }, {
    key: "setMapBearingToForm",
    value: function setMapBearingToForm(map) {
      var _this2 = this;

      map.on("rotate", function (e) {
        _this2.formbearingtag.value = e.target.getBearing();
      });
    } // マップをズームした際のイベント

  }, {
    key: "setMapZoomToForm",
    value: function setMapZoomToForm(map) {
      var _this3 = this;

      // ズームイベント
      map.on('zoom', function () {
        // 現在のズームレベル取得
        _this3.formzoomtag.value = map.getZoom();
      });
    } // マーカーをドロップした際のイベント設定

  }, {
    key: "getMarkerDropLocation",
    value: function getMarkerDropLocation(map) {
      var _this4 = this;

      // マーカーをドロップした位置にマップを移動
      this.marker.on('dragend', function () {
        var LngLat = _this4.marker.getLngLat();

        _this4.formlngtag.value = LngLat.lng;
        _this4.formlattag.value = LngLat.lat;
        map.flyTo({
          center: [LngLat.lng, LngLat.lat]
        });
      });
    } // ポップアップのコメントを変更

  }, {
    key: "changePopupComment",
    value: function changePopupComment() {
      var comment = document.getElementById('comment');
      this.popup.setHTML(comment.value);
    } // フォームに入力したコメントをポップアップに反映

  }, {
    key: "adaptFormCommentToPopup",
    value: function adaptFormCommentToPopup() {
      this.formcommenttag.addEventListener('change', {
        popup: this.popup,
        handleEvent: this.changePopupComment
      });
    } // フォームタグに直接数値を入力した際にマップのマーカーの位置を移動

  }, {
    key: "adaptFormLocationToMarker",
    value: function adaptFormLocationToMarker() {
      var _this5 = this;

      this.formlngtag.addEventListener('change', function () {
        _this5.map.flyTo({
          center: [_this5.formlngtag.value, _this5.formlattag.value]
        });

        _this5.marker.setLngLat([_this5.formlngtag.value, _this5.formlattag.value]).addTo(_this5.map);
      });
      this.formlattag.addEventListener('change', function () {
        _this5.map.flyTo({
          center: [_this5.formlngtag.value, _this5.formlattag.value]
        });

        _this5.marker.setLngLat([_this5.formlngtag.value, _this5.formlattag.value]).addTo(_this5.map);
      });
    }
  }]);

  return Mymap;
}();
var MapSize = /*#__PURE__*/function () {
  function MapSize(mapInformationObj) {
    _classCallCheck(this, MapSize);

    this.maptag = mapInformationObj.maptag;
    this.mapwrappertag = mapInformationObj.mapwrappertag;
    this.mapsize = mapInformationObj.mapsize;
  } // // 管理画面の地図の大きさを変更時に管理画面上の地図の大きさに反映させる
  // selectMapwrappertagSize() {
  //   let sizetag = document.getElementById('size' + this.unitid);
  //   let queryoptions = '#size' + ' option';
  //   let options = document.querySelectorAll(queryoptions);
  //   let small = document.getElementById('small');
  //   let big = document.getElementById('big');
  //   sizetag.addEventListener("change", () => {
  //     let index = sizetag.selectedIndex;
  //     if (options[index].value === 'small') {
  //       this.changeToSmall();
  //     } else {
  //       this.changeToBig();
  //     }
  //   });
  // }
  // changeToSmall() {
  //   console.log('small');
  //   this.mapwrappertag.style.maxWidth = '100%'
  //   this.mapwrappertag.style.width = '400px';
  //   this.mapwrappertag.style.height = '300px';
  //   this.maptag.style.width = '400px';
  //   this.maptag.style.height = '300px';
  // }
  // changeToBig() {
  //   console.log('big')
  //   this.mapwrappertag.style.maxWidth = '100%'
  //   this.mapwrappertag.style.width = '820px';
  //   this.mapwrappertag.style.height = '320px';
  //   this.maptag.style.width = '820px';
  //   this.maptag.style.height = '320px';
  // }


  _createClass(MapSize, [{
    key: "setMapwrappertagSize",
    value: function setMapwrappertagSize() {
      if (this.mapsize === 'big') {
        this.mapwrappertag.style.maxWidth = '100%';
        this.mapwrappertag.style.width = '820px';
        this.mapwrappertag.style.height = '320px';
        this.maptag.style.width = '820px';
        this.maptag.style.height = '320px';
      } else {
        this.mapwrappertag.style.maxWidth = '100%';
        this.mapwrappertag.style.width = '400px';
        this.mapwrappertag.style.height = '300px';
        this.maptag.style.width = '400px';
        this.maptag.style.height = '300px';
      }
    }
  }, {
    key: "setMapwrappertagMargin",
    value: function setMapwrappertagMargin() {
      this.mapwrappertag.style.marginLeft = "auto";
      this.mapwrappertag.style.marginRight = "auto";
    }
  }]);

  return MapSize;
}(); //   Mapbox検索機能のクラス

var Geocoder = /*#__PURE__*/function () {
  function Geocoder(mapinstance) {
    _classCallCheck(this, Geocoder);

    this.map = mapinstance.map;
    this.marker = mapinstance.marker;
    this.mapboxgl = mapinstance.mapboxgl;
    this.accesstoken = mapinstance.accesstoken;
    this.formlngtag = mapinstance.formlngtag;
    this.formlattag = mapinstance.formlattag;
    this.geocodertag = mapinstance.geocodertag;
    this.instantiationGeooder();
    this.setStyleGeocoderTag();
    this.setStyleInput();
    this.setLngLatToForm();
    this.setMarkerToLngLat();
  } // 場所検索機能の追加


  _createClass(Geocoder, [{
    key: "instantiationGeooder",
    value: function instantiationGeooder(mapinstance) {
      //  場所検索フォームを追加
      this.geocoder = new MapboxGeocoder({
        accessToken: this.accesstoken,
        mapboxgl: this.mapboxgl,
        marker: false,
        placeholder: '検索'
      });
      this.geocodertag.appendChild(this.geocoder.onAdd(this.map));
    } //   検索ボックスのスタイル変更

  }, {
    key: "setStyleGeocoderTag",
    value: function setStyleGeocoderTag() {
      this.geocodertag.style.Width = '100%';
      this.geocodertag.style.marginTop = "5px";
    } // 検索機能のフォームのパディング調整（デフォルトではアイコンとフォームが重なっている）

  }, {
    key: "setStyleInput",
    value: function setStyleInput() {
      var mapboxgl_ctrl_geocodertag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder')[0];
      mapboxgl_ctrl_geocodertag.style.minWidth = '100%';
      var geocoderinputtag = this.geocodertag.getElementsByClassName('mapboxgl-ctrl-geocoder--input')[0];
      geocoderinputtag.style.paddingLeft = "35px";
      geocoderinputtag.style.width = "100%";
    } // 地図の角度をフォームに代入

  }, {
    key: "setLngLatToForm",
    value: function setLngLatToForm() {
      var _this6 = this;

      this.geocoder.on('result', function (e) {
        var lnglat = e.result.center;
        _this6.formlngtag.value = lnglat[0];
        _this6.formlattag.value = lnglat[1];
      });
    } // 検索結果の位置にマーカーを移動

  }, {
    key: "setMarkerToLngLat",
    value: function setMarkerToLngLat() {
      var _this7 = this;

      this.geocoder.on('result', function (e) {
        var lnglat = e.result.center; // this.map.flyTo({ center: [lnglat[0], lnglat[1]] });

        _this7.marker.setLngLat([lnglat[0], lnglat[1]]).addTo(_this7.map);
      });
    }
  }]);

  return Geocoder;
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/mapboxfieldbeforewebpack.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvLi9qcy9tYXBib3hmaWVsZGJlZm9yZXdlYnBhY2suanMiLCJ3ZWJwYWNrOi8vYmVnaW5uZXIyMDIwLy4vanMvbWFwYm94b2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmVnaW5uZXIyMDIwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVGaWVsZE1hcCIsIkZpZWxkTWFwIiwibWFwIiwibWFwYm94Z2wiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsInN0eWxldXJsIiwiY2VudGVyIiwibG5nIiwibGF0Iiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsIk15bWFwIiwiRmllbGRFeHNpc3RlZE1hcCIsIm1hcEluZm9ybWF0aW9uT2JqIiwiaW5zdGFuY2VNZXRob2QiLCJpbnN0YW50aWF0aW9uTWFwIiwiaW5zdGFudGlhdGlvbk1hcmtlciIsInNldE1hcFpvb21Ub0Zvcm0iLCJhZGRFeHRlbnRpb25Ub01hcCIsImdldE1hcmtlckRyb3BMb2NhdGlvbiIsImFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIiLCJzZXRNYXBQaXRjaFRvRm9ybSIsInNldE1hcEJlYXJpbmdUb0Zvcm0iLCJGaWVsZERlZmF1bHRNYXAiLCJzZXREZWZhdWx0VmFsdWVUb0Zvcm0iLCJTaG93RmllbGRNYXAiLCJtYXJrZXIiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJnZXRDZW50ZXIiLCJhZGRUbyIsIk1hcEZpZWxkU2l6ZSIsIk1hcFNpemUiLCJ1bml0aWQiLCJmb3JtbG5ndGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1sYXR0YWciLCJmb3Jtem9vbXRhZyIsImZvcm1waXRjaHRhZyIsImZvcm1iZWFyaW5ndGFnIiwiZm9ybXNpemV0YWciLCJmb3JtY29tbWVudHRhZyIsIm1hcHRhZyIsIm1hcHdyYXBwZXJ0YWciLCJnZW9jb2RlcnRhZyIsImFjY2Vzc3Rva2VuX3N0eWxldXJsdGFnIiwiZGF0YXNldCIsImFjY2Vzc3Rva2VuIiwiY29tbWVudCIsIm1hcHNpemUiLCJtYXB0eXBlIiwiY29uc29sZSIsImxvZyIsIm1hcGJveF9tYXAiLCJtYXBib3hfZ2VvY29kZXIiLCJHZW9jb2RlciIsImFjY2Vzc1Rva2VuIiwiZm9ybXNldHN0eWxldXJsdGFnIiwibWFwdGFnd3JhcHBlciIsImluc3RhbnRpYXRpb25Qb3B1cCIsImRyYWdnYWJsZSIsInBvcHVwIiwiUG9wdXAiLCJzZXRIVE1MIiwic2V0UG9wdXAiLCJhZGRDb250cm9sIiwiTmF2aWdhdGlvbkNvbnRyb2wiLCJGdWxsc2NyZWVuQ29udHJvbCIsIlNjYWxlQ29udHJvbCIsIm1heFdpZHRoIiwidW5pdCIsInZhbHVlIiwib24iLCJlIiwidGFyZ2V0IiwiZ2V0UGl0Y2giLCJnZXRCZWFyaW5nIiwiZ2V0Wm9vbSIsIkxuZ0xhdCIsImdldExuZ0xhdCIsImZseVRvIiwiaGFuZGxlRXZlbnQiLCJjaGFuZ2VQb3B1cENvbW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcGluc3RhbmNlIiwiaW5zdGFudGlhdGlvbkdlb29kZXIiLCJzZXRTdHlsZUdlb2NvZGVyVGFnIiwic2V0U3R5bGVJbnB1dCIsInNldExuZ0xhdFRvRm9ybSIsInNldE1hcmtlclRvTG5nTGF0IiwiZ2VvY29kZXIiLCJNYXBib3hHZW9jb2RlciIsInBsYWNlaG9sZGVyIiwiYXBwZW5kQ2hpbGQiLCJvbkFkZCIsIldpZHRoIiwibWFyZ2luVG9wIiwibWFwYm94Z2xfY3RybF9nZW9jb2RlcnRhZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtaW5XaWR0aCIsImdlb2NvZGVyaW5wdXR0YWciLCJwYWRkaW5nTGVmdCIsImxuZ2xhdCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCLFlBQUk7QUFDL0JDLGdCQUFjO0FBQ2pCLENBRkQ7O0lBSU1DLFE7Ozs7Ozs7Ozs7Ozs7QUFFRjt1Q0FDbUI7QUFDakIsV0FBS0MsR0FBTCxHQUFXLElBQUksS0FBS0MsUUFBTCxDQUFjQyxHQUFsQixDQUFzQjtBQUMvQkMsaUJBQVMsRUFBRSxNQURvQjtBQUUvQkMsYUFBSyxFQUFFLEtBQUtDLFFBRm1CO0FBRy9CO0FBQ0FDLGNBQU0sRUFBRSxDQUFDLEtBQUtDLEdBQU4sRUFBVyxLQUFLQyxHQUFoQixDQUp1QjtBQUsvQkMsWUFBSSxFQUFFLEtBQUtBLElBTG9CO0FBTS9CQyxhQUFLLEVBQUUsS0FBS0EsS0FObUI7QUFPL0JDLGVBQU8sRUFBRSxLQUFLQTtBQVBpQixPQUF0QixDQUFYO0FBU0Q7Ozs7RUFia0JDLHVELEdBZ0J2Qjs7O0lBQ1FDLGdCOzs7OztBQUNKLDRCQUFZQyxpQkFBWixFQUErQjtBQUFBOztBQUFBOztBQUM3QiwrQkFBTUEsaUJBQU47O0FBQ0EsVUFBS0MsY0FBTDs7QUFGNkI7QUFHOUI7Ozs7cUNBRWdCO0FBQ2YsV0FBS0MsZ0JBQUw7QUFDQSxXQUFLQyxtQkFBTDtBQUNBLFdBQUtDLGdCQUFMLENBQXNCLEtBQUtsQixHQUEzQjtBQUNBLFdBQUttQixpQkFBTCxDQUF1QixLQUFLbkIsR0FBNUI7QUFDQSxXQUFLb0IscUJBQUwsQ0FBMkIsS0FBS3BCLEdBQWhDO0FBQ0EsV0FBS3FCLHlCQUFMO0FBQ0EsV0FBS0MsaUJBQUwsQ0FBdUIsS0FBS3RC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Q05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1hcGJveGZpZWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNeW1hcCxNYXBTaXplLEdlb2NvZGVyfSBmcm9tIFwiL2pzL21hcGJveG9iamVjdHMuanNcIlxuXG4vLyDjgqjjg7Pjg4jjg6rjg7zoqbPntLDnlLvpnaLjg7vkvZzmiJDnlLvpnaLjg7vlpInmm7TnlLvpnaLjgavjgaZNYXBib3jjgqvjgrnjgr/jg6Djg5XjgqPjg7zjg6vjg4njgpLooajnpLpcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpPT57XG4gICAgY3JlYXRlRmllbGRNYXAoKTtcbn0pO1xuICBcbmNsYXNzIEZpZWxkTWFwIGV4dGVuZHMgTXltYXAge1xuXG4gICAgLy8g44Oe44OD44OX44Gu44Kk44Oz44K544K/44Oz44K55YyWXG4gICAgaW5zdGFudGlhdGlvbk1hcCgpIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IHRoaXMubWFwYm94Z2wuTWFwKHtcbiAgICAgICAgY29udGFpbmVyOiAnZm1hcCcsXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxldXJsLFxuICAgICAgICAvL+WfuuacrOeahOOBqueUu+mdouOBruWItuW+oeODl+ODreODkeODhuOCo1xuICAgICAgICBjZW50ZXI6IFt0aGlzLmxuZywgdGhpcy5sYXRdLFxuICAgICAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgIHBpdGNoOiB0aGlzLnBpdGNoLFxuICAgICAgICBiZWFyaW5nOiB0aGlzLmJlYXJpbmcsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuLy8gICDjgqjjg7Pjg4jjg6rjg7zjgIzlpInmm7TjgI3nlLvpnaLjgavjgabjgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgY2xhc3MgRmllbGRFeHNpc3RlZE1hcCBleHRlbmRzIEZpZWxkTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgdGhpcy5pbnN0YW5jZU1ldGhvZCgpO1xuICAgIH1cbiAgXG4gICAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5zZXRNYXBab29tVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXApO1xuICAgICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2V0TWFwQmVhcmluZ1RvRm9ybSh0aGlzLm1hcCk7XG4gICAgfVxuICBcbiAgfVxuICBcbi8vICAg44Oe44OD44OX44Kr44OG44K044Oq44Gu44Kr44K544K/44Og44OV44Kj44O844Or44OJ44Gu5paw6KaP5L2c5oiQ5pmC44Gr44Kk44Oz44K544K/44Oz44K55YyWXG4gIGNsYXNzIEZpZWxkRGVmYXVsdE1hcCBleHRlbmRzIEZpZWxkTWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgdGhpcy5sbmcgPSAxMzU7XG4gICAgICB0aGlzLmxhdCA9IDM1O1xuICAgICAgdGhpcy56b29tID0gNTtcbiAgICAgIHRoaXMucGl0Y2ggPSAwO1xuICAgICAgdGhpcy5iZWFyaW5nID0gMDtcbiAgICAgIHRoaXMuaW5zdGFuY2VNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnmmYLjgavjgojjgbDjgozjgovjg6Hjgr3jg4Pjg4lcbiAgICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlVG9Gb3JtKClcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcCgpO1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFya2VyKCk7XG4gICAgICB0aGlzLnNldE1hcFpvb21Ub0Zvcm0odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGRFeHRlbnRpb25Ub01hcCh0aGlzLm1hcCk7XG4gICAgICB0aGlzLmdldE1hcmtlckRyb3BMb2NhdGlvbih0aGlzLm1hcCk7XG4gICAgICB0aGlzLmFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIoKTtcbiAgICAgIHRoaXMuc2V0TWFwUGl0Y2hUb0Zvcm0odGhpcy5tYXApO1xuICAgICAgdGhpcy5zZXRNYXBCZWFyaW5nVG9Gb3JtKHRoaXMubWFwKTtcbiAgICB9XG4gIFxuICB9XG4gIFxuICBjbGFzcyBTaG93RmllbGRNYXAgZXh0ZW5kcyBGaWVsZE1hcCB7XG4gIFxuICAgIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICB0aGlzLmluc3RhbmNlTWV0aG9kKCk7XG4gICAgfVxuICBcbiAgICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcCgpO1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFya2VyKCk7XG4gICAgfVxuXG4gIC8vIOOCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBq+OCiOOBsOOCjOOCi+ODoeOCveODg+ODiVxuICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgIC8vIOODnuODvOOCq+ODvOOCkueri+OBpuOCi1xuICAgIHRoaXMubWFya2VyID0gbmV3IHRoaXMubWFwYm94Z2wuTWFya2VyKHtcbiAgICB9KVxuICAgICAgLnNldExuZ0xhdCh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XG4gIH1cblxuICB9XG5cbiAgY2xhc3MgTWFwRmllbGRTaXplIGV4dGVuZHMgTWFwU2l6ZSB7XG4gICAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICB9XG4gIFxuICB9XG4gIFxuLy8gICDjgqvjgrnjgr/jg6Djg5XjgqPjg7zjg6vjg4lNYXBib3jjgpLkvZzmiJBcbmZ1bmN0aW9uIGNyZWF0ZUZpZWxkTWFwKHVuaXRpZCkge1xuICAgIGNvbnN0IG1hcEluZm9ybWF0aW9uT2JqID0ge1xuICAgICAgZm9ybWxuZ3RhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xuZycpLFxuICAgICAgZm9ybWxhdHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdCcpLFxuICAgICAgZm9ybXpvb210YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b29tJyksXG4gICAgICBmb3JtcGl0Y2h0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaXRjaCcpLFxuICAgICAgZm9ybWJlYXJpbmd0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZWFyaW5nJyksXG4gICAgICBmb3Jtc2l6ZXRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnKSxcbiAgICAgIGZvcm1jb21tZW50dGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpLFxuICAgICAgbWFwdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLFxuICAgICAgbWFwd3JhcHBlcnRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXB3cmFwcGVyJyksXG4gICAgICBnZW9jb2RlcnRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlb2NvZGVyJyksXG4gICAgICBhY2Nlc3N0b2tlbl9zdHlsZXVybHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc3Rva2VuX3N0eWxldXJsJyksXG4gICAgICBsbmc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbWFwJykuZGF0YXNldC5sbmcsXG4gICAgICBsYXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbWFwJykuZGF0YXNldC5sYXQsXG4gICAgICB6b29tOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQuem9vbSxcbiAgICAgIHBpdGNoOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQucGl0Y2gsXG4gICAgICBiZWFyaW5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQuYmVhcmluZyxcbiAgICAgIHN0eWxldXJsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzdG9rZW5fc3R5bGV1cmwnKS5kYXRhc2V0LnN0eWxldXJsLFxuICAgICAgYWNjZXNzdG9rZW46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLmRhdGFzZXQuYWNjZXNzdG9rZW4sXG4gICAgICBjb21tZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQuY29tbWVudCxcbiAgICAgIG1hcHNpemU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbWFwJykuZGF0YXNldC5tYXBzaXplLFxuICAgICAgbWFwdHlwZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKS5kYXRhc2V0Lm1hcHR5cGUsXG4gICAgfVxuICAgIGlmIChtYXBJbmZvcm1hdGlvbk9iai5tYXB0eXBlID09PSAnc2hvdycpIHtcbiAgICAgICAgLy8g44Ko44Oz44OI44Oq44O86Kmz57Sw55S76Z2i44Gn44Gu5Yem55CGXG4gICAgICBjb25zb2xlLmxvZygnZmllbGQgc2hvdycpXG4gICAgICBjb25zdCBtYXBib3hfbWFwID0gbmV3IFNob3dGaWVsZE1hcChtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgfWVsc2UgaWYgKG1hcEluZm9ybWF0aW9uT2JqLmxuZyAhPSBmYWxzZSkge1xuICAgICAgICAvLyDjg57jg4Pjg5fjgqvjg4bjgrTjg6rjga7jgqvjgrnjgr/jg6Djg5XjgqPjg7zjg6vjg4njgpLml6LlrZjjga7loLTlkIjjgavlh6bnkIZcbiAgICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgRmllbGRFeHNpc3RlZE1hcChtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgICBjb25zdCBtYXBib3hfZ2VvY29kZXIgPSBuZXcgR2VvY29kZXIobWFwYm94X21hcCk7XG4gICAgICBjb25zb2xlLmxvZygnZmllbGQgZXhzaXN0ZWQnKVxuICAgIH0gZWxzZSBpZiAobWFwSW5mb3JtYXRpb25PYmoubWFwdHlwZSA9PT0gJ2ZpZWxkJykge1xuICAgICAgICAvLyDjg57jg4Pjg5fjgqvjg4bjgrTjg6rjga7jgqvjgrnjgr/jg6Djg5XjgqPjg7zjg6vjg4njgpLmlrDopo/kvZzmiJDjga7loLTlkIjjgavlh6bnkIZcbiAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCBuZXcnKVxuICAgICAgY29uc3QgbWFwYm94X21hcCA9IG5ldyBGaWVsZERlZmF1bHRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuICAgIH1cbiAgfVxuICBcbiAgY29uc29sZS5sb2coJ21hcGJveGZpZWxkLmpzIGxvYWRlZCcpIiwiXG5leHBvcnQgY2xhc3MgTXltYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICAgIHRoaXMubWFwYm94Z2wgPSBtYXBib3hnbDtcbiAgICAgICAgdGhpcy5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuO1xuICAgICAgICB0aGlzLmFjY2Vzc3Rva2VuID0gbWFwSW5mb3JtYXRpb25PYmouYWNjZXNzdG9rZW47XG4gICAgICAgIHRoaXMuc3R5bGV1cmwgPSBtYXBJbmZvcm1hdGlvbk9iai5zdHlsZXVybDtcbiAgICAgICAgdGhpcy5sbmcgPSBtYXBJbmZvcm1hdGlvbk9iai5sbmc7XG4gICAgICAgIHRoaXMubGF0ID0gbWFwSW5mb3JtYXRpb25PYmoubGF0O1xuICAgICAgICB0aGlzLnBpdGNoID0gbWFwSW5mb3JtYXRpb25PYmoucGl0Y2g7XG4gICAgICAgIHRoaXMuYmVhcmluZyA9IG1hcEluZm9ybWF0aW9uT2JqLmJlYXJpbmc7XG4gICAgICAgIHRoaXMuem9vbSA9IG1hcEluZm9ybWF0aW9uT2JqLnpvb207XG4gICAgICAgIHRoaXMuY29tbWVudCA9IG1hcEluZm9ybWF0aW9uT2JqLmNvbW1lbnQ7XG4gICAgICAgIHRoaXMubWFwc2l6ZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHNpemU7XG4gICAgICAgIHRoaXMubWFwdHlwZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHR5cGU7XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1sbmd0YWdcbiAgICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybWxhdHRhZztcbiAgICAgICAgdGhpcy5mb3Jtem9vbXRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm16b29tdGFnO1xuICAgICAgICB0aGlzLmZvcm1waXRjaHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1waXRjaHRhZztcbiAgICAgICAgdGhpcy5mb3JtYmVhcmluZ3RhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1iZWFyaW5ndGFnO1xuICAgICAgICB0aGlzLmZvcm1zaXpldGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybXNpemV0YWc7XG4gICAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3JtY29tbWVudHRhZztcbiAgICAgICAgdGhpcy5mb3Jtc2V0c3R5bGV1cmx0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3Jtc2V0c3R5bGV1cmx0YWc7XG4gICAgICAgIHRoaXMubWFwdGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwdGFnO1xuICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0YWd3cmFwcGVyO1xuICAgICAgICB0aGlzLmdlb2NvZGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmouZ2VvY29kZXJ0YWc7XG4gICAgICAgIHRoaXMuYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5hY2Nlc3N0b2tlbl9zdHlsZXVybHRhZztcbiAgICB9XG5cbiAgICAvLyDjg57jg4Pjg5fjga7mg4XloLHooajnpLpcbiAgICBzaG93TWFwSW5mb3JtYWl0b24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsbmcnLCB0aGlzLmxuZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXQnLCB0aGlzLmxhdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd6b29tJywgdGhpcy56b29tKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BpdGNoJywgdGhpcy5waXRjaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiZWFyaW5nJywgdGhpcy5iZWFyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQnLCB0aGlzLmNvbW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwc2l6ZScsIHRoaXMubWFwc2l6ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3N0b2tlbicsIHRoaXMuYWNjZXNzdG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnc3R5bGV1cmwnLCB0aGlzLnN0eWxldXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcHRhZycsIHRoaXMubWFwdGFnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc3Rva2VuX3N0eWxldXJsdGFnJywgdGhpcy5hY2Nlc3N0b2tlbl9zdHlsZXVybHRhZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXB0eXBlJywgdGhpcy5tYXB0eXBlKTtcbiAgICB9XG5cbiAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnnlJ/miJBcbiAgICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFwKCk7XG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Qb3B1cCgpO1xuICAgICAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICAvLyDjg57jg4Pjg5fjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgICBpbnN0YW50aWF0aW9uTWFwKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGV1cmwsXG4gICAgICAgICAgICAvL+WfuuacrOeahOOBqueUu+mdouOBruWItuW+oeODl+ODreODkeODhuOCo1xuICAgICAgICAgICAgY2VudGVyOiBbdGhpcy5sbmcsIHRoaXMubGF0XSxcbiAgICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICAgIHBpdGNoOiB0aGlzLnBpdGNoLFxuICAgICAgICAgICAgYmVhcmluZzogdGhpcy5iZWFyaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg57jg7zjgqvjg7zjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgICAgICAvLyDjg57jg7zjgqvjg7zjgpLnq4vjgabjgotcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgdGhpcy5tYXBib3hnbC5NYXJrZXIoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnNldExuZ0xhdCh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8g44Od44OD44OX44Ki44OD44OX44Gu44Kk44Oz44K544K/44Oz44K55YyWXG4gICAgaW5zdGFudGlhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IG1hcGJveGdsLlBvcHVwKClcbiAgICAgICAgICAgIC5zZXRIVE1MKHRoaXMuY29tbWVudCk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvcHVwKHRoaXMucG9wdXApXG4gICAgfVxuXG4gICAgLy8g44Oe44OD44OX44Gu6L+95Yqg5qmf6IO9XG4gICAgYWRkRXh0ZW50aW9uVG9NYXAobWFwKSB7XG4gICAgICAgIC8v5ouh5aSn44O757iu5bCP44O75pa55L2N44OK44OT44Ky44O844K344On44OzICBcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sLCAndG9wLWxlZnQnKTtcbiAgICAgICAgLy/jg5Xjg6vjgrnjgq/jg6rjg7zjg7Pjg6Ljg7zjg4lcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLkZ1bGxzY3JlZW5Db250cm9sKTtcbiAgICAgICAgLy/jgrnjgrHjg7zjg6vooajnpLpcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLlNjYWxlQ29udHJvbCh7XG4gICAgICAgICAgICBtYXhXaWR0aDogODAsXG4gICAgICAgICAgICB1bml0OiAnbWV0cmljJ1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbOOBq+aMgeOBn+OBm+OBn+ODh+ODvOOCv+WxnuaAp+OCkuODleOCqeODvOODoOOBq+S7o+WFpVxuICAgIHNldERlZmF1bHRWYWx1ZVRvRm9ybSgpIHtcbiAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gdGhpcy5sbmc7XG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZy52YWx1ZSA9IHRoaXMubGF0O1xuICAgICAgICB0aGlzLmZvcm16b29tdGFnLnZhbHVlID0gdGhpcy56b29tO1xuICAgICAgICB0aGlzLmZvcm1waXRjaHRhZy52YWx1ZSA9IHRoaXMucGl0Y2g7XG4gICAgICAgIHRoaXMuZm9ybWJlYXJpbmd0YWcudmFsdWUgPSB0aGlzLmJlYXJpbmc7XG4gICAgfVxuXG4gICAgLy8g5Zyw5Zuz44Gu6KeS5bqm44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gICAgc2V0TWFwUGl0Y2hUb0Zvcm0obWFwKSB7XG4gICAgICAgIG1hcC5vbigncGl0Y2gnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8g54++5Zyo44GucGl0Y2jjg6zjg5njg6vlj5blvpdcbiAgICAgICAgICAgIHRoaXMuZm9ybXBpdGNodGFnLnZhbHVlID0gZS50YXJnZXQuZ2V0UGl0Y2goKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Zyw5Zuz44Gu5Zue6Lui44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gICAgc2V0TWFwQmVhcmluZ1RvRm9ybShtYXApIHtcbiAgICAgICAgbWFwLm9uKFwicm90YXRlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1iZWFyaW5ndGFnLnZhbHVlID0gZS50YXJnZXQuZ2V0QmVhcmluZygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIOODnuODg+ODl+OCkuOCuuODvOODoOOBl+OBn+mam+OBruOCpOODmeODs+ODiFxuICAgIHNldE1hcFpvb21Ub0Zvcm0obWFwKSB7XG4gICAgICAgIC8vIOOCuuODvOODoOOCpOODmeODs+ODiFxuICAgICAgICBtYXAub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDnj77lnKjjga7jgrrjg7zjg6Djg6zjg5njg6vlj5blvpdcbiAgICAgICAgICAgIHRoaXMuZm9ybXpvb210YWcudmFsdWUgPSBtYXAuZ2V0Wm9vbSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg57jg7zjgqvjg7zjgpLjg4njg63jg4Pjg5fjgZfjgZ/pmpvjga7jgqTjg5njg7Pjg4joqK3lrppcbiAgICBnZXRNYXJrZXJEcm9wTG9jYXRpb24obWFwKSB7XG4gICAgICAgIC8vIOODnuODvOOCq+ODvOOCkuODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+ODnuODg+ODl+OCkuenu+WLlVxuICAgICAgICB0aGlzLm1hcmtlci5vbignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IExuZ0xhdCA9IHRoaXMubWFya2VyLmdldExuZ0xhdCgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gTG5nTGF0LmxuZztcbiAgICAgICAgICAgIHRoaXMuZm9ybWxhdHRhZy52YWx1ZSA9IExuZ0xhdC5sYXQ7XG4gICAgICAgICAgICBtYXAuZmx5VG8oeyBjZW50ZXI6IFtMbmdMYXQubG5nLCBMbmdMYXQubGF0XSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Od44OD44OX44Ki44OD44OX44Gu44Kz44Oh44Oz44OI44KS5aSJ5pu0XG4gICAgY2hhbmdlUG9wdXBDb21tZW50KCkge1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKVxuICAgICAgICB0aGlzLnBvcHVwLnNldEhUTUwoY29tbWVudC52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8g44OV44Kp44O844Og44Gr5YWl5Yqb44GX44Gf44Kz44Oh44Oz44OI44KS44Od44OD44OX44Ki44OD44OX44Gr5Y+N5pigXG4gICAgYWRhcHRGb3JtQ29tbWVudFRvUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgeyBwb3B1cDogdGhpcy5wb3B1cCwgaGFuZGxlRXZlbnQ6IHRoaXMuY2hhbmdlUG9wdXBDb21tZW50IH0pO1xuICAgIH1cblxuICAgIC8vIOODleOCqeODvOODoOOCv+OCsOOBq+ebtOaOpeaVsOWApOOCkuWFpeWKm+OBl+OBn+mam+OBq+ODnuODg+ODl+OBruODnuODvOOCq+ODvOOBruS9jee9ruOCkuenu+WLlVxuICAgIGFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIoKSB7XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcC5mbHlUbyh7IGNlbnRlcjogW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcC5mbHlUbyh7IGNlbnRlcjogW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYXBTaXplIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgICB0aGlzLm1hcHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHRhZztcbiAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwd3JhcHBlcnRhZztcbiAgICAgICAgdGhpcy5tYXBzaXplID0gbWFwSW5mb3JtYXRpb25PYmoubWFwc2l6ZTtcbiAgICB9XG5cbiAgICAvLyAvLyDnrqHnkIbnlLvpnaLjga7lnLDlm7Pjga7lpKfjgY3jgZXjgpLlpInmm7TmmYLjgavnrqHnkIbnlLvpnaLkuIrjga7lnLDlm7Pjga7lpKfjgY3jgZXjgavlj43mmKDjgZXjgZvjgotcbiAgICAvLyBzZWxlY3RNYXB3cmFwcGVydGFnU2l6ZSgpIHtcbiAgICAvLyAgIGxldCBzaXpldGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnICsgdGhpcy51bml0aWQpO1xuICAgIC8vICAgbGV0IHF1ZXJ5b3B0aW9ucyA9ICcjc2l6ZScgKyAnIG9wdGlvbic7XG4gICAgLy8gICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnlvcHRpb25zKTtcbiAgICAvLyAgIGxldCBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbWFsbCcpO1xuICAgIC8vICAgbGV0IGJpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWcnKTtcbiAgICAvLyAgIHNpemV0YWcuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBpbmRleCA9IHNpemV0YWcuc2VsZWN0ZWRJbmRleDtcbiAgICAvLyAgICAgaWYgKG9wdGlvbnNbaW5kZXhdLnZhbHVlID09PSAnc21hbGwnKSB7XG4gICAgLy8gICAgICAgdGhpcy5jaGFuZ2VUb1NtYWxsKCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5jaGFuZ2VUb0JpZygpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjaGFuZ2VUb1NtYWxsKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NtYWxsJyk7XG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLmhlaWdodCA9ICczMDBweCc7XG4gICAgLy8gfVxuXG4gICAgLy8gY2hhbmdlVG9CaWcoKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnYmlnJylcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgIC8vICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgIC8vICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgIC8vICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAvLyB9XG5cbiAgICBzZXRNYXB3cmFwcGVydGFnU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwc2l6ZSA9PT0gJ2JpZycpIHtcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1hcHdyYXBwZXJ0YWdNYXJnaW4oKSB7XG4gICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xuICAgIH1cbn1cblxuLy8gICBNYXBib3jmpJzntKLmqZ/og73jga7jgq/jg6njgrlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG4gICAgY29uc3RydWN0b3IobWFwaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXBpbnN0YW5jZS5tYXA7XG4gICAgICAgIHRoaXMubWFya2VyID0gbWFwaW5zdGFuY2UubWFya2VyO1xuICAgICAgICB0aGlzLm1hcGJveGdsID0gbWFwaW5zdGFuY2UubWFwYm94Z2w7XG4gICAgICAgIHRoaXMuYWNjZXNzdG9rZW4gPSBtYXBpbnN0YW5jZS5hY2Nlc3N0b2tlbjtcbiAgICAgICAgdGhpcy5mb3JtbG5ndGFnID0gbWFwaW5zdGFuY2UuZm9ybWxuZ3RhZztcbiAgICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwaW5zdGFuY2UuZm9ybWxhdHRhZztcbiAgICAgICAgdGhpcy5nZW9jb2RlcnRhZyA9IG1hcGluc3RhbmNlLmdlb2NvZGVydGFnO1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25HZW9vZGVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGVHZW9jb2RlclRhZygpO1xuICAgICAgICB0aGlzLnNldFN0eWxlSW5wdXQoKTtcbiAgICAgICAgdGhpcy5zZXRMbmdMYXRUb0Zvcm0oKTtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXJUb0xuZ0xhdCgpO1xuICAgIH1cblxuICAgIC8vIOWgtOaJgOaknOe0ouapn+iDveOBrui/veWKoFxuICAgIGluc3RhbnRpYXRpb25HZW9vZGVyKG1hcGluc3RhbmNlKSB7XG4gICAgICAgIC8vICDloLTmiYDmpJzntKLjg5Xjgqnjg7zjg6DjgpLov73liqBcbiAgICAgICAgdGhpcy5nZW9jb2RlciA9IG5ldyBNYXBib3hHZW9jb2Rlcih7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3N0b2tlbixcbiAgICAgICAgICAgIG1hcGJveGdsOiB0aGlzLm1hcGJveGdsLFxuICAgICAgICAgICAgbWFya2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5qSc57SiJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdlb2NvZGVydGFnLmFwcGVuZENoaWxkKHRoaXMuZ2VvY29kZXIub25BZGQodGhpcy5tYXApKTtcbiAgICB9XG5cbiAgICAvLyAgIOaknOe0ouODnOODg+OCr+OCueOBruOCueOCv+OCpOODq+WkieabtFxuICAgIHNldFN0eWxlR2VvY29kZXJUYWcoKSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJ0YWcuc3R5bGUuV2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJ0YWcuc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcblxuICAgIH1cblxuICAgIC8vIOaknOe0ouapn+iDveOBruODleOCqeODvOODoOOBruODkeODh+OCo+ODs+OCsOiqv+aVtO+8iOODh+ODleOCqeODq+ODiOOBp+OBr+OCouOCpOOCs+ODs+OBqOODleOCqeODvOODoOOBjOmHjeOBquOBo+OBpuOBhOOCi++8iVxuICAgIHNldFN0eWxlSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IG1hcGJveGdsX2N0cmxfZ2VvY29kZXJ0YWcgPSB0aGlzLmdlb2NvZGVydGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcGJveGdsLWN0cmwtZ2VvY29kZXInKVswXTtcbiAgICAgICAgbWFwYm94Z2xfY3RybF9nZW9jb2RlcnRhZy5zdHlsZS5taW5XaWR0aCA9ICcxMDAlJztcbiAgICAgICAgY29uc3QgZ2VvY29kZXJpbnB1dHRhZyA9IHRoaXMuZ2VvY29kZXJ0YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFwYm94Z2wtY3RybC1nZW9jb2Rlci0taW5wdXQnKVswXTtcbiAgICAgICAgZ2VvY29kZXJpbnB1dHRhZy5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMzVweFwiO1xuICAgICAgICBnZW9jb2RlcmlucHV0dGFnLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICB9XG5cbiAgICAvLyDlnLDlm7Pjga7op5LluqbjgpLjg5Xjgqnjg7zjg6Djgavku6PlhaVcbiAgICBzZXRMbmdMYXRUb0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXIub24oJ3Jlc3VsdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsbmdsYXQgPSBlLnJlc3VsdC5jZW50ZXI7XG4gICAgICAgICAgICB0aGlzLmZvcm1sbmd0YWcudmFsdWUgPSBsbmdsYXRbMF07XG4gICAgICAgICAgICB0aGlzLmZvcm1sYXR0YWcudmFsdWUgPSBsbmdsYXRbMV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOaknOe0oue1kOaenOOBruS9jee9ruOBq+ODnuODvOOCq+ODvOOCkuenu+WLlVxuICAgIHNldE1hcmtlclRvTG5nTGF0KCkge1xuICAgICAgICB0aGlzLmdlb2NvZGVyLm9uKCdyZXN1bHQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG5nbGF0ID0gZS5yZXN1bHQuY2VudGVyO1xuICAgICAgICAgICAgLy8gdGhpcy5tYXAuZmx5VG8oeyBjZW50ZXI6IFtsbmdsYXRbMF0sIGxuZ2xhdFsxXV0gfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQoW2xuZ2xhdFswXSwgbG5nbGF0WzFdXSlcbiAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL21hcGJveGZpZWxkYmVmb3Jld2VicGFjay5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=