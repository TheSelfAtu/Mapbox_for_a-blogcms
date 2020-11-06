/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/mapboxfieldbeforewebpack.js":
/*!****************************************!*\
  !*** ./js/mapboxfieldbeforewebpack.js ***!
  \****************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mymap": () => /* binding */ Mymap,
/* harmony export */   "MapSize": () => /* binding */ MapSize,
/* harmony export */   "Geocoder": () => /* binding */ Geocoder
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/mapboxfieldbeforewebpack.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvLi9qcy9tYXBib3hmaWVsZGJlZm9yZXdlYnBhY2suanMiLCJ3ZWJwYWNrOi8vYmVnaW5uZXIyMDIwLy4vanMvbWFwYm94b2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmVnaW5uZXIyMDIwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVGaWVsZE1hcCIsIkZpZWxkTWFwIiwibWFwIiwibWFwYm94Z2wiLCJNYXAiLCJjb250YWluZXIiLCJzdHlsZSIsInN0eWxldXJsIiwiY2VudGVyIiwibG5nIiwibGF0Iiwiem9vbSIsInBpdGNoIiwiYmVhcmluZyIsIk15bWFwIiwiRmllbGRFeHNpc3RlZE1hcCIsIm1hcEluZm9ybWF0aW9uT2JqIiwiaW5zdGFuY2VNZXRob2QiLCJpbnN0YW50aWF0aW9uTWFwIiwiaW5zdGFudGlhdGlvbk1hcmtlciIsInNldE1hcFpvb21Ub0Zvcm0iLCJhZGRFeHRlbnRpb25Ub01hcCIsImdldE1hcmtlckRyb3BMb2NhdGlvbiIsImFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIiLCJzZXRNYXBQaXRjaFRvRm9ybSIsInNldE1hcEJlYXJpbmdUb0Zvcm0iLCJGaWVsZERlZmF1bHRNYXAiLCJzZXREZWZhdWx0VmFsdWVUb0Zvcm0iLCJTaG93RmllbGRNYXAiLCJtYXJrZXIiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJnZXRDZW50ZXIiLCJhZGRUbyIsIk1hcEZpZWxkU2l6ZSIsIk1hcFNpemUiLCJ1bml0aWQiLCJmb3JtbG5ndGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1sYXR0YWciLCJmb3Jtem9vbXRhZyIsImZvcm1waXRjaHRhZyIsImZvcm1iZWFyaW5ndGFnIiwiZm9ybXNpemV0YWciLCJmb3JtY29tbWVudHRhZyIsIm1hcHRhZyIsIm1hcHdyYXBwZXJ0YWciLCJnZW9jb2RlcnRhZyIsImFjY2Vzc3Rva2VuX3N0eWxldXJsdGFnIiwiZGF0YXNldCIsImFjY2Vzc3Rva2VuIiwiY29tbWVudCIsIm1hcHNpemUiLCJtYXB0eXBlIiwiY29uc29sZSIsImxvZyIsIm1hcGJveF9tYXAiLCJtYXBib3hfZ2VvY29kZXIiLCJHZW9jb2RlciIsImFjY2Vzc1Rva2VuIiwiZm9ybXNldHN0eWxldXJsdGFnIiwibWFwdGFnd3JhcHBlciIsImluc3RhbnRpYXRpb25Qb3B1cCIsImRyYWdnYWJsZSIsInBvcHVwIiwiUG9wdXAiLCJzZXRIVE1MIiwic2V0UG9wdXAiLCJhZGRDb250cm9sIiwiTmF2aWdhdGlvbkNvbnRyb2wiLCJGdWxsc2NyZWVuQ29udHJvbCIsIlNjYWxlQ29udHJvbCIsIm1heFdpZHRoIiwidW5pdCIsInZhbHVlIiwib24iLCJlIiwidGFyZ2V0IiwiZ2V0UGl0Y2giLCJnZXRCZWFyaW5nIiwiZ2V0Wm9vbSIsIkxuZ0xhdCIsImdldExuZ0xhdCIsImZseVRvIiwiaGFuZGxlRXZlbnQiLCJjaGFuZ2VQb3B1cENvbW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcGluc3RhbmNlIiwiaW5zdGFudGlhdGlvbkdlb29kZXIiLCJzZXRTdHlsZUdlb2NvZGVyVGFnIiwic2V0U3R5bGVJbnB1dCIsInNldExuZ0xhdFRvRm9ybSIsInNldE1hcmtlclRvTG5nTGF0IiwiZ2VvY29kZXIiLCJNYXBib3hHZW9jb2RlciIsInBsYWNlaG9sZGVyIiwiYXBwZW5kQ2hpbGQiLCJvbkFkZCIsIldpZHRoIiwibWFyZ2luVG9wIiwibWFwYm94Z2xfY3RybF9nZW9jb2RlcnRhZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtaW5XaWR0aCIsImdlb2NvZGVyaW5wdXR0YWciLCJwYWRkaW5nTGVmdCIsImxuZ2xhdCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCLFlBQUk7QUFDL0JDLGdCQUFjO0FBQ2pCLENBRkQ7O0lBSU1DLFE7Ozs7Ozs7Ozs7Ozs7QUFFRjt1Q0FDbUI7QUFDakIsV0FBS0MsR0FBTCxHQUFXLElBQUksS0FBS0MsUUFBTCxDQUFjQyxHQUFsQixDQUFzQjtBQUMvQkMsaUJBQVMsRUFBRSxNQURvQjtBQUUvQkMsYUFBSyxFQUFFLEtBQUtDLFFBRm1CO0FBRy9CO0FBQ0FDLGNBQU0sRUFBRSxDQUFDLEtBQUtDLEdBQU4sRUFBVyxLQUFLQyxHQUFoQixDQUp1QjtBQUsvQkMsWUFBSSxFQUFFLEtBQUtBLElBTG9CO0FBTS9CQyxhQUFLLEVBQUUsS0FBS0EsS0FObUI7QUFPL0JDLGVBQU8sRUFBRSxLQUFLQTtBQVBpQixPQUF0QixDQUFYO0FBU0Q7Ozs7RUFia0JDLHVELEdBZ0J2Qjs7O0lBQ1FDLGdCOzs7OztBQUNKLDRCQUFZQyxpQkFBWixFQUErQjtBQUFBOztBQUFBOztBQUM3QiwrQkFBTUEsaUJBQU47O0FBQ0EsVUFBS0MsY0FBTDs7QUFGNkI7QUFHOUI7Ozs7cUNBRWdCO0FBQ2YsV0FBS0MsZ0JBQUw7QUFDQSxXQUFLQyxtQkFBTDtBQUNBLFdBQUtDLGdCQUFMLENBQXNCLEtBQUtsQixHQUEzQjtBQUNBLFdBQUttQixpQkFBTCxDQUF1QixLQUFLbkIsR0FBNUI7QUFDQSxXQUFLb0IscUJBQUwsQ0FBMkIsS0FBS3BCLEdBQWhDO0FBQ0EsV0FBS3FCLHlCQUFMO0FBQ0EsV0FBS0MsaUJBQUwsQ0FBdUIsS0FBS3RC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VUFDQSIsImZpbGUiOiJtYXBib3hmaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TXltYXAsTWFwU2l6ZSxHZW9jb2Rlcn0gZnJvbSBcIi9qcy9tYXBib3hvYmplY3RzLmpzXCJcblxuLy8g44Ko44Oz44OI44Oq44O86Kmz57Sw55S76Z2i44O75L2c5oiQ55S76Z2i44O75aSJ5pu055S76Z2i44Gr44GmTWFwYm9444Kr44K544K/44Og44OV44Kj44O844Or44OJ44KS6KGo56S6XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKT0+e1xuICAgIGNyZWF0ZUZpZWxkTWFwKCk7XG59KTtcbiAgXG5jbGFzcyBGaWVsZE1hcCBleHRlbmRzIE15bWFwIHtcblxuICAgIC8vIOODnuODg+ODl+OBruOCpOODs+OCueOCv+ODs+OCueWMllxuICAgIGluc3RhbnRpYXRpb25NYXAoKSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcCh7XG4gICAgICAgIGNvbnRhaW5lcjogJ2ZtYXAnLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXVybCxcbiAgICAgICAgLy/ln7rmnKznmoTjgarnlLvpnaLjga7liLblvqHjg5fjg63jg5Hjg4bjgqNcbiAgICAgICAgY2VudGVyOiBbdGhpcy5sbmcsIHRoaXMubGF0XSxcbiAgICAgICAgem9vbTogdGhpcy56b29tLFxuICAgICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgICAgYmVhcmluZzogdGhpcy5iZWFyaW5nLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbi8vICAg44Ko44Oz44OI44Oq44O844CM5aSJ5pu044CN55S76Z2i44Gr44Gm44Kk44Oz44K544K/44Oz44K55YyWXG4gIGNsYXNzIEZpZWxkRXhzaXN0ZWRNYXAgZXh0ZW5kcyBGaWVsZE1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIHRoaXMuaW5zdGFuY2VNZXRob2QoKTtcbiAgICB9XG4gIFxuICAgIGluc3RhbmNlTWV0aG9kKCkge1xuICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFwKCk7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICAgIHRoaXMuc2V0TWFwWm9vbVRvRm9ybSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuZ2V0TWFya2VyRHJvcExvY2F0aW9uKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuYWRhcHRGb3JtTG9jYXRpb25Ub01hcmtlcigpO1xuICAgICAgdGhpcy5zZXRNYXBQaXRjaFRvRm9ybSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLnNldE1hcEJlYXJpbmdUb0Zvcm0odGhpcy5tYXApO1xuICAgIH1cbiAgXG4gIH1cbiAgXG4vLyAgIOODnuODg+ODl+OCq+ODhuOCtOODquOBruOCq+OCueOCv+ODoOODleOCo+ODvOODq+ODieOBruaWsOimj+S9nOaIkOaZguOBq+OCpOODs+OCueOCv+ODs+OCueWMllxuICBjbGFzcyBGaWVsZERlZmF1bHRNYXAgZXh0ZW5kcyBGaWVsZE1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIHRoaXMubG5nID0gMTM1O1xuICAgICAgdGhpcy5sYXQgPSAzNTtcbiAgICAgIHRoaXMuem9vbSA9IDU7XG4gICAgICB0aGlzLnBpdGNoID0gMDtcbiAgICAgIHRoaXMuYmVhcmluZyA9IDA7XG4gICAgICB0aGlzLmluc3RhbmNlTWV0aG9kKCk7XG4gICAgfVxuXG4gICAgLy8g44Kk44Oz44K544K/44Oz44K55pmC44Gr44KI44Gw44KM44KL44Oh44K944OD44OJXG4gICAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLnNldERlZmF1bHRWYWx1ZVRvRm9ybSgpXG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgdGhpcy5zZXRNYXBab29tVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXApO1xuICAgICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2V0TWFwQmVhcmluZ1RvRm9ybSh0aGlzLm1hcCk7XG4gICAgfVxuICBcbiAgfVxuICBcbiAgY2xhc3MgU2hvd0ZpZWxkTWFwIGV4dGVuZHMgRmllbGRNYXAge1xuICBcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgdGhpcy5pbnN0YW5jZU1ldGhvZCgpO1xuICAgIH1cbiAgXG4gICAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgIH1cblxuICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnkvZzmiJDmmYLjgavjgojjgbDjgozjgovjg6Hjgr3jg4Pjg4lcbiAgaW5zdGFudGlhdGlvbk1hcmtlcigpIHtcbiAgICAvLyDjg57jg7zjgqvjg7zjgpLnq4vjgabjgotcbiAgICB0aGlzLm1hcmtlciA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcmtlcih7XG4gICAgfSlcbiAgICAgIC5zZXRMbmdMYXQodGhpcy5tYXAuZ2V0Q2VudGVyKCkpXG4gICAgICAuYWRkVG8odGhpcy5tYXApO1xuICB9XG5cbiAgfVxuXG4gIGNsYXNzIE1hcEZpZWxkU2l6ZSBleHRlbmRzIE1hcFNpemUge1xuICAgIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICBzdXBlcihtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgfVxuICBcbiAgfVxuICBcbi8vICAg44Kr44K544K/44Og44OV44Kj44O844Or44OJTWFwYm9444KS5L2c5oiQXG5mdW5jdGlvbiBjcmVhdGVGaWVsZE1hcCh1bml0aWQpIHtcbiAgICBjb25zdCBtYXBJbmZvcm1hdGlvbk9iaiA9IHtcbiAgICAgIGZvcm1sbmd0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsbmcnKSxcbiAgICAgIGZvcm1sYXR0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXQnKSxcbiAgICAgIGZvcm16b29tdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnem9vbScpLFxuICAgICAgZm9ybXBpdGNodGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGl0Y2gnKSxcbiAgICAgIGZvcm1iZWFyaW5ndGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVhcmluZycpLFxuICAgICAgZm9ybXNpemV0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJyksXG4gICAgICBmb3JtY29tbWVudHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKSxcbiAgICAgIG1hcHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKSxcbiAgICAgIG1hcHdyYXBwZXJ0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbWFwd3JhcHBlcicpLFxuICAgICAgZ2VvY29kZXJ0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9jb2RlcicpLFxuICAgICAgYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLFxuICAgICAgbG5nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQubG5nLFxuICAgICAgbGF0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQubGF0LFxuICAgICAgem9vbTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKS5kYXRhc2V0Lnpvb20sXG4gICAgICBwaXRjaDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKS5kYXRhc2V0LnBpdGNoLFxuICAgICAgYmVhcmluZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKS5kYXRhc2V0LmJlYXJpbmcsXG4gICAgICBzdHlsZXVybDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc3Rva2VuX3N0eWxldXJsJykuZGF0YXNldC5zdHlsZXVybCxcbiAgICAgIGFjY2Vzc3Rva2VuOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZXNzdG9rZW5fc3R5bGV1cmwnKS5kYXRhc2V0LmFjY2Vzc3Rva2VuLFxuICAgICAgY29tbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZtYXAnKS5kYXRhc2V0LmNvbW1lbnQsXG4gICAgICBtYXBzaXplOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm1hcCcpLmRhdGFzZXQubWFwc2l6ZSxcbiAgICAgIG1hcHR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbWFwJykuZGF0YXNldC5tYXB0eXBlLFxuICAgIH1cbiAgICBpZiAobWFwSW5mb3JtYXRpb25PYmoubWFwdHlwZSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgIC8vIOOCqOODs+ODiOODquODvOips+e0sOeUu+mdouOBp+OBruWHpueQhlxuICAgICAgY29uc29sZS5sb2coJ2ZpZWxkIHNob3cnKVxuICAgICAgY29uc3QgbWFwYm94X21hcCA9IG5ldyBTaG93RmllbGRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgIH1lbHNlIGlmIChtYXBJbmZvcm1hdGlvbk9iai5sbmcgIT0gZmFsc2UpIHtcbiAgICAgICAgLy8g44Oe44OD44OX44Kr44OG44K044Oq44Gu44Kr44K544K/44Og44OV44Kj44O844Or44OJ44KS5pei5a2Y44Gu5aC05ZCI44Gr5Yem55CGXG4gICAgICBjb25zdCBtYXBib3hfbWFwID0gbmV3IEZpZWxkRXhzaXN0ZWRNYXAobWFwSW5mb3JtYXRpb25PYmopO1xuICAgICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuICAgICAgY29uc29sZS5sb2coJ2ZpZWxkIGV4c2lzdGVkJylcbiAgICB9IGVsc2UgaWYgKG1hcEluZm9ybWF0aW9uT2JqLm1hcHR5cGUgPT09ICdmaWVsZCcpIHtcbiAgICAgICAgLy8g44Oe44OD44OX44Kr44OG44K044Oq44Gu44Kr44K544K/44Og44OV44Kj44O844Or44OJ44KS5paw6KaP5L2c5oiQ44Gu5aC05ZCI44Gr5Yem55CGXG4gICAgICBjb25zb2xlLmxvZygnZmllbGQgbmV3JylcbiAgICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgRmllbGREZWZhdWx0TWFwKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICAgIGNvbnN0IG1hcGJveF9nZW9jb2RlciA9IG5ldyBHZW9jb2RlcihtYXBib3hfbWFwKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKCdtYXBib3hmaWVsZC5qcyBsb2FkZWQnKSIsIlxuZXhwb3J0IGNsYXNzIE15bWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgICB0aGlzLm1hcGJveGdsID0gbWFwYm94Z2w7XG4gICAgICAgIHRoaXMubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBtYXBJbmZvcm1hdGlvbk9iai5hY2Nlc3N0b2tlbjtcbiAgICAgICAgdGhpcy5hY2Nlc3N0b2tlbiA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuO1xuICAgICAgICB0aGlzLnN0eWxldXJsID0gbWFwSW5mb3JtYXRpb25PYmouc3R5bGV1cmw7XG4gICAgICAgIHRoaXMubG5nID0gbWFwSW5mb3JtYXRpb25PYmoubG5nO1xuICAgICAgICB0aGlzLmxhdCA9IG1hcEluZm9ybWF0aW9uT2JqLmxhdDtcbiAgICAgICAgdGhpcy5waXRjaCA9IG1hcEluZm9ybWF0aW9uT2JqLnBpdGNoO1xuICAgICAgICB0aGlzLmJlYXJpbmcgPSBtYXBJbmZvcm1hdGlvbk9iai5iZWFyaW5nO1xuICAgICAgICB0aGlzLnpvb20gPSBtYXBJbmZvcm1hdGlvbk9iai56b29tO1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBtYXBJbmZvcm1hdGlvbk9iai5jb21tZW50O1xuICAgICAgICB0aGlzLm1hcHNpemUgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXBzaXplO1xuICAgICAgICB0aGlzLm1hcHR5cGUgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0eXBlO1xuICAgICAgICB0aGlzLmZvcm1sbmd0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3JtbG5ndGFnXG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1sYXR0YWc7XG4gICAgICAgIHRoaXMuZm9ybXpvb210YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3Jtem9vbXRhZztcbiAgICAgICAgdGhpcy5mb3JtcGl0Y2h0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3JtcGl0Y2h0YWc7XG4gICAgICAgIHRoaXMuZm9ybWJlYXJpbmd0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3JtYmVhcmluZ3RhZztcbiAgICAgICAgdGhpcy5mb3Jtc2l6ZXRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1zaXpldGFnO1xuICAgICAgICB0aGlzLmZvcm1jb21tZW50dGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybWNvbW1lbnR0YWc7XG4gICAgICAgIHRoaXMuZm9ybXNldHN0eWxldXJsdGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybXNldHN0eWxldXJsdGFnO1xuICAgICAgICB0aGlzLm1hcHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHRhZztcbiAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwdGFnd3JhcHBlcjtcbiAgICAgICAgdGhpcy5nZW9jb2RlcnRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmdlb2NvZGVydGFnO1xuICAgICAgICB0aGlzLmFjY2Vzc3Rva2VuX3N0eWxldXJsdGFnID0gbWFwSW5mb3JtYXRpb25PYmouYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWc7XG4gICAgfVxuXG4gICAgLy8g44Oe44OD44OX44Gu5oOF5aCx6KGo56S6XG4gICAgc2hvd01hcEluZm9ybWFpdG9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG5nJywgdGhpcy5sbmcpO1xuICAgICAgICBjb25zb2xlLmxvZygnbGF0JywgdGhpcy5sYXQpO1xuICAgICAgICBjb25zb2xlLmxvZygnem9vbScsIHRoaXMuem9vbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaXRjaCcsIHRoaXMucGl0Y2gpO1xuICAgICAgICBjb25zb2xlLmxvZygnYmVhcmluZycsIHRoaXMuYmVhcmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50JywgdGhpcy5jb21tZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcHNpemUnLCB0aGlzLm1hcHNpemUpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzdG9rZW4nLCB0aGlzLmFjY2Vzc3Rva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0eWxldXJsJywgdGhpcy5zdHlsZXVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXB0YWcnLCB0aGlzLm1hcHRhZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3N0b2tlbl9zdHlsZXVybHRhZycsIHRoaXMuYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWcpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwdHlwZScsIHRoaXMubWFwdHlwZSk7XG4gICAgfVxuXG4gICAgLy8g44Kk44Oz44K544K/44Oz44K555Sf5oiQXG4gICAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcCgpO1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uUG9wdXAoKTtcbiAgICAgICAgdGhpcy5hZGRFeHRlbnRpb25Ub01hcCh0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8g44Oe44OD44OX44Gu44Kk44Oz44K544K/44Oz44K55YyWXG4gICAgaW5zdGFudGlhdGlvbk1hcCgpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgdGhpcy5tYXBib3hnbC5NYXAoe1xuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJyxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxldXJsLFxuICAgICAgICAgICAgLy/ln7rmnKznmoTjgarnlLvpnaLjga7liLblvqHjg5fjg63jg5Hjg4bjgqNcbiAgICAgICAgICAgIGNlbnRlcjogW3RoaXMubG5nLCB0aGlzLmxhdF0sXG4gICAgICAgICAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgICAgICAgIGJlYXJpbmc6IHRoaXMuYmVhcmluZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Oe44O844Kr44O844Gu44Kk44Oz44K544K/44Oz44K55YyWXG4gICAgaW5zdGFudGlhdGlvbk1hcmtlcigpIHtcbiAgICAgICAgLy8g44Oe44O844Kr44O844KS56uL44Gm44KLXG4gICAgICAgIHRoaXMubWFya2VyID0gbmV3IHRoaXMubWFwYm94Z2wuTWFya2VyKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZXRMbmdMYXQodGhpcy5tYXAuZ2V0Q2VudGVyKCkpXG4gICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xuICAgIH1cblxuICAgIC8vIOODneODg+ODl+OCouODg+ODl+OBruOCpOODs+OCueOCv+ODs+OCueWMllxuICAgIGluc3RhbnRpYXRpb25Qb3B1cCgpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBtYXBib3hnbC5Qb3B1cCgpXG4gICAgICAgICAgICAuc2V0SFRNTCh0aGlzLmNvbW1lbnQpO1xuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3B1cCh0aGlzLnBvcHVwKVxuICAgIH1cblxuICAgIC8vIOODnuODg+ODl+OBrui/veWKoOapn+iDvVxuICAgIGFkZEV4dGVudGlvblRvTWFwKG1hcCkge1xuICAgICAgICAvL+aLoeWkp+ODu+e4ruWwj+ODu+aWueS9jeODiuODk+OCsuODvOOCt+ODp+ODsyAgXG4gICAgICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5OYXZpZ2F0aW9uQ29udHJvbCwgJ3RvcC1sZWZ0Jyk7XG4gICAgICAgIC8v44OV44Or44K544Kv44Oq44O844Oz44Oi44O844OJXG4gICAgICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5GdWxsc2NyZWVuQ29udHJvbCk7XG4gICAgICAgIC8v44K544Kx44O844Or6KGo56S6XG4gICAgICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5TY2FsZUNvbnRyb2woe1xuICAgICAgICAgICAgbWF4V2lkdGg6IDgwLFxuICAgICAgICAgICAgdW5pdDogJ21ldHJpYydcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIGh0bWzjgavmjIHjgZ/jgZvjgZ/jg4fjg7zjgr/lsZ7mgKfjgpLjg5Xjgqnjg7zjg6Djgavku6PlhaVcbiAgICBzZXREZWZhdWx0VmFsdWVUb0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZy52YWx1ZSA9IHRoaXMubG5nO1xuICAgICAgICB0aGlzLmZvcm1sYXR0YWcudmFsdWUgPSB0aGlzLmxhdDtcbiAgICAgICAgdGhpcy5mb3Jtem9vbXRhZy52YWx1ZSA9IHRoaXMuem9vbTtcbiAgICAgICAgdGhpcy5mb3JtcGl0Y2h0YWcudmFsdWUgPSB0aGlzLnBpdGNoO1xuICAgICAgICB0aGlzLmZvcm1iZWFyaW5ndGFnLnZhbHVlID0gdGhpcy5iZWFyaW5nO1xuICAgIH1cblxuICAgIC8vIOWcsOWbs+OBruinkuW6puOCkuODleOCqeODvOODoOOBq+S7o+WFpVxuICAgIHNldE1hcFBpdGNoVG9Gb3JtKG1hcCkge1xuICAgICAgICBtYXAub24oJ3BpdGNoJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIOePvuWcqOOBrnBpdGNo44Os44OZ44Or5Y+W5b6XXG4gICAgICAgICAgICB0aGlzLmZvcm1waXRjaHRhZy52YWx1ZSA9IGUudGFyZ2V0LmdldFBpdGNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOWcsOWbs+OBruWbnui7ouOCkuODleOCqeODvOODoOOBq+S7o+WFpVxuICAgIHNldE1hcEJlYXJpbmdUb0Zvcm0obWFwKSB7XG4gICAgICAgIG1hcC5vbihcInJvdGF0ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtYmVhcmluZ3RhZy52YWx1ZSA9IGUudGFyZ2V0LmdldEJlYXJpbmcoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDjg57jg4Pjg5fjgpLjgrrjg7zjg6DjgZfjgZ/pmpvjga7jgqTjg5njg7Pjg4hcbiAgICBzZXRNYXBab29tVG9Gb3JtKG1hcCkge1xuICAgICAgICAvLyDjgrrjg7zjg6DjgqTjg5njg7Pjg4hcbiAgICAgICAgbWFwLm9uKCd6b29tJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8g54++5Zyo44Gu44K644O844Og44Os44OZ44Or5Y+W5b6XXG4gICAgICAgICAgICB0aGlzLmZvcm16b29tdGFnLnZhbHVlID0gbWFwLmdldFpvb20oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Oe44O844Kr44O844KS44OJ44Ot44OD44OX44GX44Gf6Zqb44Gu44Kk44OZ44Oz44OI6Kit5a6aXG4gICAgZ2V0TWFya2VyRHJvcExvY2F0aW9uKG1hcCkge1xuICAgICAgICAvLyDjg57jg7zjgqvjg7zjgpLjg4njg63jg4Pjg5fjgZfjgZ/kvY3nva7jgavjg57jg4Pjg5fjgpLnp7vli5VcbiAgICAgICAgdGhpcy5tYXJrZXIub24oJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBMbmdMYXQgPSB0aGlzLm1hcmtlci5nZXRMbmdMYXQoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybWxuZ3RhZy52YWx1ZSA9IExuZ0xhdC5sbmc7XG4gICAgICAgICAgICB0aGlzLmZvcm1sYXR0YWcudmFsdWUgPSBMbmdMYXQubGF0O1xuICAgICAgICAgICAgbWFwLmZseVRvKHsgY2VudGVyOiBbTG5nTGF0LmxuZywgTG5nTGF0LmxhdF0gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOODneODg+ODl+OCouODg+ODl+OBruOCs+ODoeODs+ODiOOCkuWkieabtFxuICAgIGNoYW5nZVBvcHVwQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JylcbiAgICAgICAgdGhpcy5wb3B1cC5zZXRIVE1MKGNvbW1lbnQudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIOODleOCqeODvOODoOOBq+WFpeWKm+OBl+OBn+OCs+ODoeODs+ODiOOCkuODneODg+ODl+OCouODg+ODl+OBq+WPjeaYoFxuICAgIGFkYXB0Rm9ybUNvbW1lbnRUb1BvcHVwKCkge1xuICAgICAgICB0aGlzLmZvcm1jb21tZW50dGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHsgcG9wdXA6IHRoaXMucG9wdXAsIGhhbmRsZUV2ZW50OiB0aGlzLmNoYW5nZVBvcHVwQ29tbWVudCB9KTtcbiAgICB9XG5cbiAgICAvLyDjg5Xjgqnjg7zjg6Djgr/jgrDjgavnm7TmjqXmlbDlgKTjgpLlhaXlipvjgZfjgZ/pmpvjgavjg57jg4Pjg5fjga7jg57jg7zjgqvjg7zjga7kvY3nva7jgpLnp7vli5VcbiAgICBhZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCkge1xuICAgICAgICB0aGlzLmZvcm1sbmd0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXAuZmx5VG8oeyBjZW50ZXI6IFt0aGlzLmZvcm1sbmd0YWcudmFsdWUsIHRoaXMuZm9ybWxhdHRhZy52YWx1ZV0gfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQoW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSkuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZvcm1sYXR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXAuZmx5VG8oeyBjZW50ZXI6IFt0aGlzLmZvcm1sbmd0YWcudmFsdWUsIHRoaXMuZm9ybWxhdHRhZy52YWx1ZV0gfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQoW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSkuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTWFwU2l6ZSB7XG4gICAgY29uc3RydWN0b3IobWFwSW5mb3JtYXRpb25PYmopIHtcbiAgICAgICAgdGhpcy5tYXB0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0YWc7XG4gICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHdyYXBwZXJ0YWc7XG4gICAgICAgIHRoaXMubWFwc2l6ZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHNpemU7XG4gICAgfVxuXG4gICAgLy8gLy8g566h55CG55S76Z2i44Gu5Zyw5Zuz44Gu5aSn44GN44GV44KS5aSJ5pu05pmC44Gr566h55CG55S76Z2i5LiK44Gu5Zyw5Zuz44Gu5aSn44GN44GV44Gr5Y+N5pig44GV44Gb44KLXG4gICAgLy8gc2VsZWN0TWFwd3JhcHBlcnRhZ1NpemUoKSB7XG4gICAgLy8gICBsZXQgc2l6ZXRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJyArIHRoaXMudW5pdGlkKTtcbiAgICAvLyAgIGxldCBxdWVyeW9wdGlvbnMgPSAnI3NpemUnICsgJyBvcHRpb24nO1xuICAgIC8vICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5b3B0aW9ucyk7XG4gICAgLy8gICBsZXQgc21hbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hbGwnKTtcbiAgICAvLyAgIGxldCBiaWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlnJyk7XG4gICAgLy8gICBzaXpldGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgIC8vICAgICBsZXQgaW5kZXggPSBzaXpldGFnLnNlbGVjdGVkSW5kZXg7XG4gICAgLy8gICAgIGlmIChvcHRpb25zW2luZGV4XS52YWx1ZSA9PT0gJ3NtYWxsJykge1xuICAgIC8vICAgICAgIHRoaXMuY2hhbmdlVG9TbWFsbCgpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMuY2hhbmdlVG9CaWcoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gY2hhbmdlVG9TbWFsbCgpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzbWFsbCcpO1xuICAgIC8vICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLm1heFdpZHRoID0gJzEwMCUnXG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xuICAgIC8vICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLmhlaWdodCA9ICczMDBweCc7XG4gICAgLy8gICB0aGlzLm1hcHRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgLy8gICB0aGlzLm1hcHRhZy5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xuICAgIC8vIH1cblxuICAgIC8vIGNoYW5nZVRvQmlnKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2JpZycpXG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS53aWR0aCA9ICc4MjBweCc7XG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLmhlaWdodCA9ICczMjBweCc7XG4gICAgLy8gfVxuXG4gICAgc2V0TWFwd3JhcHBlcnRhZ1NpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcHNpemUgPT09ICdiaWcnKSB7XG4gICAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS53aWR0aCA9ICc4MjBweCc7XG4gICAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwdGFnLnN0eWxlLmhlaWdodCA9ICczMjBweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwdGFnLnN0eWxlLmhlaWdodCA9ICczMDBweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNYXB3cmFwcGVydGFnTWFyZ2luKCkge1xuICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWFyZ2luTGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWFyZ2luUmlnaHQgPSBcImF1dG9cIjtcbiAgICB9XG59XG5cbi8vICAgTWFwYm945qSc57Si5qmf6IO944Gu44Kv44Op44K5XG5leHBvcnQgY2xhc3MgR2VvY29kZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwaW5zdGFuY2UubWFwO1xuICAgICAgICB0aGlzLm1hcmtlciA9IG1hcGluc3RhbmNlLm1hcmtlcjtcbiAgICAgICAgdGhpcy5tYXBib3hnbCA9IG1hcGluc3RhbmNlLm1hcGJveGdsO1xuICAgICAgICB0aGlzLmFjY2Vzc3Rva2VuID0gbWFwaW5zdGFuY2UuYWNjZXNzdG9rZW47XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZyA9IG1hcGluc3RhbmNlLmZvcm1sbmd0YWc7XG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZyA9IG1hcGluc3RhbmNlLmZvcm1sYXR0YWc7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJ0YWcgPSBtYXBpbnN0YW5jZS5nZW9jb2RlcnRhZztcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uR2Vvb2RlcigpO1xuICAgICAgICB0aGlzLnNldFN0eWxlR2VvY29kZXJUYWcoKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZUlucHV0KCk7XG4gICAgICAgIHRoaXMuc2V0TG5nTGF0VG9Gb3JtKCk7XG4gICAgICAgIHRoaXMuc2V0TWFya2VyVG9MbmdMYXQoKTtcbiAgICB9XG5cbiAgICAvLyDloLTmiYDmpJzntKLmqZ/og73jga7ov73liqBcbiAgICBpbnN0YW50aWF0aW9uR2Vvb2RlcihtYXBpbnN0YW5jZSkge1xuICAgICAgICAvLyAg5aC05omA5qSc57Si44OV44Kp44O844Og44KS6L+95YqgXG4gICAgICAgIHRoaXMuZ2VvY29kZXIgPSBuZXcgTWFwYm94R2VvY29kZXIoe1xuICAgICAgICAgICAgYWNjZXNzVG9rZW46IHRoaXMuYWNjZXNzdG9rZW4sXG4gICAgICAgICAgICBtYXBib3hnbDogdGhpcy5tYXBib3hnbCxcbiAgICAgICAgICAgIG1hcmtlcjogZmFsc2UsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ+aknOe0oicsXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5nZW9jb2RlcnRhZy5hcHBlbmRDaGlsZCh0aGlzLmdlb2NvZGVyLm9uQWRkKHRoaXMubWFwKSk7XG4gICAgfVxuXG4gICAgLy8gICDmpJzntKLjg5zjg4Pjgq/jgrnjga7jgrnjgr/jgqTjg6vlpInmm7RcbiAgICBzZXRTdHlsZUdlb2NvZGVyVGFnKCkge1xuICAgICAgICB0aGlzLmdlb2NvZGVydGFnLnN0eWxlLldpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmdlb2NvZGVydGFnLnN0eWxlLm1hcmdpblRvcCA9IFwiNXB4XCI7XG5cbiAgICB9XG5cbiAgICAvLyDmpJzntKLmqZ/og73jga7jg5Xjgqnjg7zjg6Djga7jg5Hjg4fjgqPjg7PjgrDoqr/mlbTvvIjjg4fjg5Xjgqnjg6vjg4jjgafjga/jgqLjgqTjgrPjg7Pjgajjg5Xjgqnjg7zjg6DjgYzph43jgarjgaPjgabjgYTjgovvvIlcbiAgICBzZXRTdHlsZUlucHV0KCkge1xuICAgICAgICBjb25zdCBtYXBib3hnbF9jdHJsX2dlb2NvZGVydGFnID0gdGhpcy5nZW9jb2RlcnRhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtYXBib3hnbC1jdHJsLWdlb2NvZGVyJylbMF07XG4gICAgICAgIG1hcGJveGdsX2N0cmxfZ2VvY29kZXJ0YWcuc3R5bGUubWluV2lkdGggPSAnMTAwJSc7XG4gICAgICAgIGNvbnN0IGdlb2NvZGVyaW5wdXR0YWcgPSB0aGlzLmdlb2NvZGVydGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcGJveGdsLWN0cmwtZ2VvY29kZXItLWlucHV0JylbMF07XG4gICAgICAgIGdlb2NvZGVyaW5wdXR0YWcuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjM1cHhcIjtcbiAgICAgICAgZ2VvY29kZXJpbnB1dHRhZy5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuXG4gICAgfVxuXG4gICAgLy8g5Zyw5Zuz44Gu6KeS5bqm44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gICAgc2V0TG5nTGF0VG9Gb3JtKCkge1xuICAgICAgICB0aGlzLmdlb2NvZGVyLm9uKCdyZXN1bHQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG5nbGF0ID0gZS5yZXN1bHQuY2VudGVyO1xuICAgICAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gbG5nbGF0WzBdO1xuICAgICAgICAgICAgdGhpcy5mb3JtbGF0dGFnLnZhbHVlID0gbG5nbGF0WzFdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDmpJzntKLntZDmnpzjga7kvY3nva7jgavjg57jg7zjgqvjg7zjgpLnp7vli5VcbiAgICBzZXRNYXJrZXJUb0xuZ0xhdCgpIHtcbiAgICAgICAgdGhpcy5nZW9jb2Rlci5vbigncmVzdWx0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxuZ2xhdCA9IGUucmVzdWx0LmNlbnRlcjtcbiAgICAgICAgICAgIC8vIHRoaXMubWFwLmZseVRvKHsgY2VudGVyOiBbbG5nbGF0WzBdLCBsbmdsYXRbMV1dIH0pO1xuICAgICAgICAgICAgdGhpcy5tYXJrZXIuc2V0TG5nTGF0KFtsbmdsYXRbMF0sIGxuZ2xhdFsxXV0pXG4gICAgICAgICAgICAgICAgLmFkZFRvKHRoaXMubWFwKTtcblxuICAgICAgICB9KVxuICAgIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9tYXBib3hmaWVsZGJlZm9yZXdlYnBhY2suanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9