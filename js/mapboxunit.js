/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "./js/mapboxunitbeforewebpack.js":
/*!***************************************!*\
  !*** ./js/mapboxunitbeforewebpack.js ***!
  \***************************************/
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

 // 作成されたインスタンスのユニットIDを保存

var unitidArray = []; // ユニット追加時にunitidArrayを検索。新規のユニットの場合インスタンス作成

ACMS.addListener("acmsAddUnit", function () {
  var unitIDtags = document.getElementsByClassName('unitid');
  Object.keys(unitIDtags).forEach(function (key) {
    var unitid = unitIDtags[key].dataset.unitid;

    if (unitidArray.indexOf(unitid) === -1) {
      unitidArray.push(unitid);
      createUnitMap(unitid);
    }
  });
}); // エントリー詳細画面にてMapboxユニットを表示

window.addEventListener("load", function () {
  var unitIDtags = document.getElementsByClassName('unitid');
  Object.keys(unitIDtags).forEach(function (key) {
    var unitid = unitIDtags[key].dataset.unitid;

    if (unitidArray.indexOf(unitid) === -1) {
      unitidArray.push(unitid);
      createUnitMap(unitid);
    }
  });
}); // エントリー作成・変更画面でのMapboxユニット

var UnitMap = /*#__PURE__*/function (_Mymap) {
  _inherits(UnitMap, _Mymap);

  var _super = _createSuper(UnitMap);

  function UnitMap(mapInformationObj) {
    var _this;

    _classCallCheck(this, UnitMap);

    _this = _super.call(this, mapInformationObj);
    _this.unitid = mapInformationObj.unitid;
    return _this;
  } // マップユニット作成時のスタイルをセット


  _createClass(UnitMap, [{
    key: "setUsedStyleUrl",
    value: function setUsedStyleUrl() {
      var setstyleurl = this.maptag.dataset.setstyleurl;

      if (setstyleurl != false) {
        this.styleurl = setstyleurl;
        this.formsetstyleurltag.value = setstyleurl;
      } else {
        this.formsetstyleurltag.value = this.styleurl;
      }
    } // マップのインスタンス化

  }, {
    key: "instantiationMap",
    value: function instantiationMap() {
      this.map = new this.mapboxgl.Map({
        container: 'map' + this.unitid,
        style: this.styleurl,
        //基本的な画面の制御プロパティ
        center: [this.lng, this.lat],
        zoom: this.zoom,
        pitch: this.pitch,
        bearing: this.bearing
      });
    } // フォームに入力したコメントをポップアップに反映

  }, {
    key: "adaptFormCommentToPopup",
    value: function adaptFormCommentToPopup() {
      this.formcommenttag.addEventListener('change', {
        popup: this.popup,
        unitid: this.unitid,
        handleEvent: this.changePopupComment
      });
    } // ポップアップのコメントを変更

  }, {
    key: "changePopupComment",
    value: function changePopupComment() {
      var comment = document.getElementById('comment' + this.unitid);
      this.popup.setHTML(comment.value);
    }
  }]);

  return UnitMap;
}(_js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Mymap); // 既存のMapboxユニットが存在する場合にインスタンス化


var UnitExsistedMap = /*#__PURE__*/function (_UnitMap) {
  _inherits(UnitExsistedMap, _UnitMap);

  var _super2 = _createSuper(UnitExsistedMap);

  function UnitExsistedMap(mapInformationObj) {
    var _this2;

    _classCallCheck(this, UnitExsistedMap);

    _this2 = _super2.call(this, mapInformationObj);

    _this2.instanceMethod();

    return _this2;
  } // インスタンス作成時によばれるメソッド


  _createClass(UnitExsistedMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setUsedStyleUrl();
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.setMapZoomToForm(this.map);
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
      this.addExtentionToMap(this.map, this.unitid);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.adaptFormCommentToPopup();
    }
  }]);

  return UnitExsistedMap;
}(UnitMap); // Mapboxユニットを新規作成する際にインスタンス化


var UnitDefaultMap = /*#__PURE__*/function (_UnitMap2) {
  _inherits(UnitDefaultMap, _UnitMap2);

  var _super3 = _createSuper(UnitDefaultMap);

  function UnitDefaultMap(mapInformationObj) {
    var _this3;

    _classCallCheck(this, UnitDefaultMap);

    _this3 = _super3.call(this, mapInformationObj);
    _this3.lng = 135;
    _this3.lat = 35;
    _this3.zoom = 5;
    _this3.pitch = 0;
    _this3.bearing = 0;

    _this3.instanceMethod();

    return _this3;
  } // インスタンス作成時によばれるメソッド


  _createClass(UnitDefaultMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setUsedStyleUrl();
      this.setDefaultValueToForm();
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.setMapZoomToForm(this.map);
      this.setMapPitchToForm(this.map);
      this.setMapBearingToForm(this.map);
      this.addExtentionToMap(this.map, this.unitid);
      this.getMarkerDropLocation(this.map);
      this.adaptFormLocationToMarker();
      this.adaptFormCommentToPopup();
    }
  }]);

  return UnitDefaultMap;
}(UnitMap); // エントリー詳細画面でインスタンス化


var ShowUnitMap = /*#__PURE__*/function (_UnitMap3) {
  _inherits(ShowUnitMap, _UnitMap3);

  var _super4 = _createSuper(ShowUnitMap);

  function ShowUnitMap(mapInformationObj) {
    var _this4;

    _classCallCheck(this, ShowUnitMap);

    _this4 = _super4.call(this, mapInformationObj);

    _this4.instanceMethod();

    return _this4;
  } // インスタンス生成


  _createClass(ShowUnitMap, [{
    key: "instanceMethod",
    value: function instanceMethod() {
      this.setUsedStyleUrl();
      this.instantiationMap();
      this.instantiationMarker();
      this.instantiationPopup();
      this.addExtentionToMap(this.map, this.unitid);
    } // インスタンス作成時によばれるメソッド

  }, {
    key: "instantiationMarker",
    value: function instantiationMarker() {
      // マーカーを立てる
      this.marker = new this.mapboxgl.Marker({}).setLngLat(this.map.getCenter()).addTo(this.map);
    } // マップユニット作成時のスタイルをセット

  }, {
    key: "setUsedStyleUrl",
    value: function setUsedStyleUrl() {
      var setstyleurl = this.maptag.dataset.setstyleurl;
      console.log(setstyleurl, 'setstyle ');

      if (setstyleurl != false) {
        this.styleurl = setstyleurl;
      }
    }
  }]);

  return ShowUnitMap;
}(UnitMap); // Mapboxユニットの大きさ変更用クラス


var MapUnitSize = /*#__PURE__*/function (_MapSize) {
  _inherits(MapUnitSize, _MapSize);

  var _super5 = _createSuper(MapUnitSize);

  function MapUnitSize(mapInformationObj) {
    var _this5;

    _classCallCheck(this, MapUnitSize);

    _this5 = _super5.call(this, mapInformationObj);
    _this5.unitid = mapInformationObj.unitid;

    _this5.setMapwrappertagSize();

    _this5.setMapwrappertagMargin();

    return _this5;
  } // 管理画面の地図の大きさを変更時に管理画面上の地図の大きさに反映させる


  _createClass(MapUnitSize, [{
    key: "selectMapwrappertagSize",
    value: function selectMapwrappertagSize() {
      var _this6 = this;

      var sizetag = document.getElementById('size' + this.unitid);
      var queryoptions = '#size' + this.unitid + ' option';
      var options = document.querySelectorAll(queryoptions);
      var small = document.getElementById('small');
      var big = document.getElementById('big');
      sizetag.addEventListener("change", function () {
        var index = sizetag.selectedIndex;

        if (options[index].value === 'small') {
          _this6.changeToSmall();
        } else {
          _this6.changeToBig();
        }
      });
    }
  }]);

  return MapUnitSize;
}(_js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.MapSize);

function createUnitMap(unitid) {
  var mapInformationObj = {
    unitid: unitid,
    formlngtag: document.getElementById('lng' + unitid),
    formlattag: document.getElementById('lat' + unitid),
    formzoomtag: document.getElementById('zoom' + unitid),
    formpitchtag: document.getElementById('pitch' + unitid),
    formbearingtag: document.getElementById('bearing' + unitid),
    formsizetag: document.getElementById('size' + unitid),
    formcommenttag: document.getElementById('comment' + unitid),
    formsetstyleurltag: document.getElementById('setstyleurl' + unitid),
    maptag: document.getElementById('map' + unitid),
    mapwrappertag: document.getElementById('mapwrapper' + unitid),
    geocodertag: document.getElementById('geocoder' + unitid),
    accesstoken_styleurltag: document.getElementById('accesstoken_styleurl'),
    lng: document.getElementById('map' + unitid).dataset.lng,
    lat: document.getElementById('map' + unitid).dataset.lat,
    zoom: document.getElementById('map' + unitid).dataset.zoom,
    pitch: document.getElementById('map' + unitid).dataset.pitch,
    bearing: document.getElementById('map' + unitid).dataset.bearing,
    styleurl: document.getElementById('accesstoken_styleurl').dataset.styleurl,
    accesstoken: document.getElementById('accesstoken_styleurl').dataset.accesstoken,
    comment: document.getElementById('map' + unitid).dataset.comment,
    mapsize: document.getElementById('map' + unitid).dataset.mapsize,
    maptype: document.getElementById('map' + unitid).dataset.maptype
  };

  if (mapInformationObj.maptype === 'show') {
    // エントリー詳細画面での処理
    console.log('unit show');
    var mapunitsize = new MapUnitSize(mapInformationObj);
    var mapbox_map = new ShowUnitMap(mapInformationObj);
  } else if (mapInformationObj.lng != false) {
    // エントリー変更画面での処理
    console.log('unit exsisted');

    var _mapunitsize = new MapUnitSize(mapInformationObj);

    var _mapbox_map = new UnitExsistedMap(mapInformationObj);

    var mapbox_geocoder = new _js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Geocoder(_mapbox_map);
  } else {
    // エントリー新規作成画面での処理
    console.log('unit new');

    var _mapunitsize2 = new MapUnitSize(mapInformationObj);

    var _mapbox_map2 = new UnitDefaultMap(mapInformationObj);

    var _mapbox_geocoder = new _js_mapboxobjects_js__WEBPACK_IMPORTED_MODULE_0__.Geocoder(_mapbox_map2);
  }
}

console.log('mapboxunit.js loaded');

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
/******/ 	__webpack_require__("./js/mapboxunitbeforewebpack.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvLi9qcy9tYXBib3hvYmplY3RzLmpzIiwid2VicGFjazovL2JlZ2lubmVyMjAyMC8uL2pzL21hcGJveHVuaXRiZWZvcmV3ZWJwYWNrLmpzIiwid2VicGFjazovL2JlZ2lubmVyMjAyMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iZWdpbm5lcjIwMjAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JlZ2lubmVyMjAyMC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JlZ2lubmVyMjAyMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JlZ2lubmVyMjAyMC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiTXltYXAiLCJtYXBJbmZvcm1hdGlvbk9iaiIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3N0b2tlbiIsInN0eWxldXJsIiwibG5nIiwibGF0IiwicGl0Y2giLCJiZWFyaW5nIiwiem9vbSIsImNvbW1lbnQiLCJtYXBzaXplIiwibWFwdHlwZSIsImZvcm1sbmd0YWciLCJmb3JtbGF0dGFnIiwiZm9ybXpvb210YWciLCJmb3JtcGl0Y2h0YWciLCJmb3JtYmVhcmluZ3RhZyIsImZvcm1zaXpldGFnIiwiZm9ybWNvbW1lbnR0YWciLCJmb3Jtc2V0c3R5bGV1cmx0YWciLCJtYXB0YWciLCJtYXB3cmFwcGVydGFnIiwibWFwdGFnd3JhcHBlciIsImdlb2NvZGVydGFnIiwiYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWciLCJjb25zb2xlIiwibG9nIiwiaW5zdGFudGlhdGlvbk1hcCIsImluc3RhbnRpYXRpb25NYXJrZXIiLCJpbnN0YW50aWF0aW9uUG9wdXAiLCJhZGRFeHRlbnRpb25Ub01hcCIsIm1hcCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiY2VudGVyIiwibWFya2VyIiwiTWFya2VyIiwiZHJhZ2dhYmxlIiwic2V0TG5nTGF0IiwiZ2V0Q2VudGVyIiwiYWRkVG8iLCJwb3B1cCIsIlBvcHVwIiwic2V0SFRNTCIsInNldFBvcHVwIiwiYWRkQ29udHJvbCIsIk5hdmlnYXRpb25Db250cm9sIiwiRnVsbHNjcmVlbkNvbnRyb2wiLCJTY2FsZUNvbnRyb2wiLCJtYXhXaWR0aCIsInVuaXQiLCJ2YWx1ZSIsIm9uIiwiZSIsInRhcmdldCIsImdldFBpdGNoIiwiZ2V0QmVhcmluZyIsImdldFpvb20iLCJMbmdMYXQiLCJnZXRMbmdMYXQiLCJmbHlUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJjaGFuZ2VQb3B1cENvbW1lbnQiLCJNYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJHZW9jb2RlciIsIm1hcGluc3RhbmNlIiwiaW5zdGFudGlhdGlvbkdlb29kZXIiLCJzZXRTdHlsZUdlb2NvZGVyVGFnIiwic2V0U3R5bGVJbnB1dCIsInNldExuZ0xhdFRvRm9ybSIsInNldE1hcmtlclRvTG5nTGF0IiwiZ2VvY29kZXIiLCJNYXBib3hHZW9jb2RlciIsInBsYWNlaG9sZGVyIiwiYXBwZW5kQ2hpbGQiLCJvbkFkZCIsIldpZHRoIiwibWFyZ2luVG9wIiwibWFwYm94Z2xfY3RybF9nZW9jb2RlcnRhZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtaW5XaWR0aCIsImdlb2NvZGVyaW5wdXR0YWciLCJwYWRkaW5nTGVmdCIsImxuZ2xhdCIsInJlc3VsdCIsInVuaXRpZEFycmF5IiwiQUNNUyIsImFkZExpc3RlbmVyIiwidW5pdElEdGFncyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidW5pdGlkIiwiZGF0YXNldCIsImluZGV4T2YiLCJwdXNoIiwiY3JlYXRlVW5pdE1hcCIsIndpbmRvdyIsIlVuaXRNYXAiLCJzZXRzdHlsZXVybCIsIlVuaXRFeHNpc3RlZE1hcCIsImluc3RhbmNlTWV0aG9kIiwic2V0VXNlZFN0eWxlVXJsIiwic2V0TWFwWm9vbVRvRm9ybSIsInNldE1hcFBpdGNoVG9Gb3JtIiwic2V0TWFwQmVhcmluZ1RvRm9ybSIsImdldE1hcmtlckRyb3BMb2NhdGlvbiIsImFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIiLCJhZGFwdEZvcm1Db21tZW50VG9Qb3B1cCIsIlVuaXREZWZhdWx0TWFwIiwic2V0RGVmYXVsdFZhbHVlVG9Gb3JtIiwiU2hvd1VuaXRNYXAiLCJNYXBVbml0U2l6ZSIsInNldE1hcHdyYXBwZXJ0YWdTaXplIiwic2V0TWFwd3JhcHBlcnRhZ01hcmdpbiIsInNpemV0YWciLCJxdWVyeW9wdGlvbnMiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNtYWxsIiwiYmlnIiwiaW5kZXgiLCJzZWxlY3RlZEluZGV4IiwiY2hhbmdlVG9TbWFsbCIsImNoYW5nZVRvQmlnIiwibWFwdW5pdHNpemUiLCJtYXBib3hfbWFwIiwibWFwYm94X2dlb2NvZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsS0FBYjtBQUNJLGlCQUFZQyxpQkFBWixFQUErQjtBQUFBOztBQUMzQixTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtBLFFBQUwsQ0FBY0MsV0FBZCxHQUE0QkYsaUJBQWlCLENBQUNHLFdBQTlDO0FBQ0EsU0FBS0EsV0FBTCxHQUFtQkgsaUJBQWlCLENBQUNHLFdBQXJDO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkosaUJBQWlCLENBQUNJLFFBQWxDO0FBQ0EsU0FBS0MsR0FBTCxHQUFXTCxpQkFBaUIsQ0FBQ0ssR0FBN0I7QUFDQSxTQUFLQyxHQUFMLEdBQVdOLGlCQUFpQixDQUFDTSxHQUE3QjtBQUNBLFNBQUtDLEtBQUwsR0FBYVAsaUJBQWlCLENBQUNPLEtBQS9CO0FBQ0EsU0FBS0MsT0FBTCxHQUFlUixpQkFBaUIsQ0FBQ1EsT0FBakM7QUFD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Q0FBeEI7QUFDRCxHQU5NLE1BTUE7QUFDTDtBQUNBOUcsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjs7QUFDQSxRQUFNNEcsYUFBVyxHQUFHLElBQUliLFdBQUosQ0FBZ0IxSCxpQkFBaEIsQ0FBcEI7O0FBQ0EsUUFBTXdJLFlBQVUsR0FBRyxJQUFJakIsY0FBSixDQUFtQnZILGlCQUFuQixDQUFuQjs7QUFDQSxRQUFNeUksZ0JBQWUsR0FBRyxJQUFJaEUsMERBQUosQ0FBYStELFlBQWIsQ0FBeEI7QUFFRDtBQUNGOztBQUdEOUcsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRTs7Ozs7O1VDalBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYXBib3h1bml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgTXltYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgICAgIHRoaXMubWFwYm94Z2wgPSBtYXBib3hnbDtcbiAgICAgICAgdGhpcy5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IG1hcEluZm9ybWF0aW9uT2JqLmFjY2Vzc3Rva2VuO1xuICAgICAgICB0aGlzLmFjY2Vzc3Rva2VuID0gbWFwSW5mb3JtYXRpb25PYmouYWNjZXNzdG9rZW47XG4gICAgICAgIHRoaXMuc3R5bGV1cmwgPSBtYXBJbmZvcm1hdGlvbk9iai5zdHlsZXVybDtcbiAgICAgICAgdGhpcy5sbmcgPSBtYXBJbmZvcm1hdGlvbk9iai5sbmc7XG4gICAgICAgIHRoaXMubGF0ID0gbWFwSW5mb3JtYXRpb25PYmoubGF0O1xuICAgICAgICB0aGlzLnBpdGNoID0gbWFwSW5mb3JtYXRpb25PYmoucGl0Y2g7XG4gICAgICAgIHRoaXMuYmVhcmluZyA9IG1hcEluZm9ybWF0aW9uT2JqLmJlYXJpbmc7XG4gICAgICAgIHRoaXMuem9vbSA9IG1hcEluZm9ybWF0aW9uT2JqLnpvb207XG4gICAgICAgIHRoaXMuY29tbWVudCA9IG1hcEluZm9ybWF0aW9uT2JqLmNvbW1lbnQ7XG4gICAgICAgIHRoaXMubWFwc2l6ZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHNpemU7XG4gICAgICAgIHRoaXMubWFwdHlwZSA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHR5cGU7XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1sbmd0YWdcbiAgICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybWxhdHRhZztcbiAgICAgICAgdGhpcy5mb3Jtem9vbXRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm16b29tdGFnO1xuICAgICAgICB0aGlzLmZvcm1waXRjaHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1waXRjaHRhZztcbiAgICAgICAgdGhpcy5mb3JtYmVhcmluZ3RhZyA9IG1hcEluZm9ybWF0aW9uT2JqLmZvcm1iZWFyaW5ndGFnO1xuICAgICAgICB0aGlzLmZvcm1zaXpldGFnID0gbWFwSW5mb3JtYXRpb25PYmouZm9ybXNpemV0YWc7XG4gICAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3JtY29tbWVudHRhZztcbiAgICAgICAgdGhpcy5mb3Jtc2V0c3R5bGV1cmx0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5mb3Jtc2V0c3R5bGV1cmx0YWc7XG4gICAgICAgIHRoaXMubWFwdGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwdGFnO1xuICAgICAgICB0aGlzLm1hcHdyYXBwZXJ0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5tYXB0YWd3cmFwcGVyO1xuICAgICAgICB0aGlzLmdlb2NvZGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmouZ2VvY29kZXJ0YWc7XG4gICAgICAgIHRoaXMuYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWcgPSBtYXBJbmZvcm1hdGlvbk9iai5hY2Nlc3N0b2tlbl9zdHlsZXVybHRhZztcbiAgICB9XG5cbiAgICAvLyDjg57jg4Pjg5fjga7mg4XloLHooajnpLpcbiAgICBzaG93TWFwSW5mb3JtYWl0b24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsbmcnLCB0aGlzLmxuZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYXQnLCB0aGlzLmxhdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd6b29tJywgdGhpcy56b29tKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BpdGNoJywgdGhpcy5waXRjaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiZWFyaW5nJywgdGhpcy5iZWFyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQnLCB0aGlzLmNvbW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZygnbWFwc2l6ZScsIHRoaXMubWFwc2l6ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3N0b2tlbicsIHRoaXMuYWNjZXNzdG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnc3R5bGV1cmwnLCB0aGlzLnN0eWxldXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ21hcHRhZycsIHRoaXMubWFwdGFnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc3Rva2VuX3N0eWxldXJsdGFnJywgdGhpcy5hY2Nlc3N0b2tlbl9zdHlsZXVybHRhZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXB0eXBlJywgdGhpcy5tYXB0eXBlKTtcbiAgICB9XG5cbiAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnnlJ/miJBcbiAgICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTWFwKCk7XG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Qb3B1cCgpO1xuICAgICAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICAvLyDjg57jg4Pjg5fjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgICBpbnN0YW50aWF0aW9uTWFwKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyB0aGlzLm1hcGJveGdsLk1hcCh7XG4gICAgICAgICAgICBjb250YWluZXI6ICdtYXAnLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGV1cmwsXG4gICAgICAgICAgICAvL+WfuuacrOeahOOBqueUu+mdouOBruWItuW+oeODl+ODreODkeODhuOCo1xuICAgICAgICAgICAgY2VudGVyOiBbdGhpcy5sbmcsIHRoaXMubGF0XSxcbiAgICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICAgIHBpdGNoOiB0aGlzLnBpdGNoLFxuICAgICAgICAgICAgYmVhcmluZzogdGhpcy5iZWFyaW5nLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg57jg7zjgqvjg7zjga7jgqTjg7Pjgrnjgr/jg7PjgrnljJZcbiAgICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgICAgICAvLyDjg57jg7zjgqvjg7zjgpLnq4vjgabjgotcbiAgICAgICAgdGhpcy5tYXJrZXIgPSBuZXcgdGhpcy5tYXBib3hnbC5NYXJrZXIoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnNldExuZ0xhdCh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICAgICAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgLy8g44Od44OD44OX44Ki44OD44OX44Gu44Kk44Oz44K544K/44Oz44K55YyWXG4gICAgaW5zdGFudGlhdGlvblBvcHVwKCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IG1hcGJveGdsLlBvcHVwKClcbiAgICAgICAgICAgIC5zZXRIVE1MKHRoaXMuY29tbWVudCk7XG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvcHVwKHRoaXMucG9wdXApXG4gICAgfVxuXG4gICAgLy8g44Oe44OD44OX44Gu6L+95Yqg5qmf6IO9XG4gICAgYWRkRXh0ZW50aW9uVG9NYXAobWFwKSB7XG4gICAgICAgIC8v5ouh5aSn44O757iu5bCP44O75pa55L2N44OK44OT44Ky44O844K344On44OzICBcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sLCAndG9wLWxlZnQnKTtcbiAgICAgICAgLy/jg5Xjg6vjgrnjgq/jg6rjg7zjg7Pjg6Ljg7zjg4lcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLkZ1bGxzY3JlZW5Db250cm9sKTtcbiAgICAgICAgLy/jgrnjgrHjg7zjg6vooajnpLpcbiAgICAgICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLlNjYWxlQ29udHJvbCh7XG4gICAgICAgICAgICBtYXhXaWR0aDogODAsXG4gICAgICAgICAgICB1bml0OiAnbWV0cmljJ1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbOOBq+aMgeOBn+OBm+OBn+ODh+ODvOOCv+WxnuaAp+OCkuODleOCqeODvOODoOOBq+S7o+WFpVxuICAgIHNldERlZmF1bHRWYWx1ZVRvRm9ybSgpIHtcbiAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gdGhpcy5sbmc7XG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZy52YWx1ZSA9IHRoaXMubGF0O1xuICAgICAgICB0aGlzLmZvcm16b29tdGFnLnZhbHVlID0gdGhpcy56b29tO1xuICAgICAgICB0aGlzLmZvcm1waXRjaHRhZy52YWx1ZSA9IHRoaXMucGl0Y2g7XG4gICAgICAgIHRoaXMuZm9ybWJlYXJpbmd0YWcudmFsdWUgPSB0aGlzLmJlYXJpbmc7XG4gICAgfVxuXG4gICAgLy8g5Zyw5Zuz44Gu6KeS5bqm44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gICAgc2V0TWFwUGl0Y2hUb0Zvcm0obWFwKSB7XG4gICAgICAgIG1hcC5vbigncGl0Y2gnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8g54++5Zyo44GucGl0Y2jjg6zjg5njg6vlj5blvpdcbiAgICAgICAgICAgIHRoaXMuZm9ybXBpdGNodGFnLnZhbHVlID0gZS50YXJnZXQuZ2V0UGl0Y2goKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Zyw5Zuz44Gu5Zue6Lui44KS44OV44Kp44O844Og44Gr5Luj5YWlXG4gICAgc2V0TWFwQmVhcmluZ1RvRm9ybShtYXApIHtcbiAgICAgICAgbWFwLm9uKFwicm90YXRlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1iZWFyaW5ndGFnLnZhbHVlID0gZS50YXJnZXQuZ2V0QmVhcmluZygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIOODnuODg+ODl+OCkuOCuuODvOODoOOBl+OBn+mam+OBruOCpOODmeODs+ODiFxuICAgIHNldE1hcFpvb21Ub0Zvcm0obWFwKSB7XG4gICAgICAgIC8vIOOCuuODvOODoOOCpOODmeODs+ODiFxuICAgICAgICBtYXAub24oJ3pvb20nLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDnj77lnKjjga7jgrrjg7zjg6Djg6zjg5njg6vlj5blvpdcbiAgICAgICAgICAgIHRoaXMuZm9ybXpvb210YWcudmFsdWUgPSBtYXAuZ2V0Wm9vbSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDjg57jg7zjgqvjg7zjgpLjg4njg63jg4Pjg5fjgZfjgZ/pmpvjga7jgqTjg5njg7Pjg4joqK3lrppcbiAgICBnZXRNYXJrZXJEcm9wTG9jYXRpb24obWFwKSB7XG4gICAgICAgIC8vIOODnuODvOOCq+ODvOOCkuODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+ODnuODg+ODl+OCkuenu+WLlVxuICAgICAgICB0aGlzLm1hcmtlci5vbignZHJhZ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IExuZ0xhdCA9IHRoaXMubWFya2VyLmdldExuZ0xhdCgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtbG5ndGFnLnZhbHVlID0gTG5nTGF0LmxuZztcbiAgICAgICAgICAgIHRoaXMuZm9ybWxhdHRhZy52YWx1ZSA9IExuZ0xhdC5sYXQ7XG4gICAgICAgICAgICBtYXAuZmx5VG8oeyBjZW50ZXI6IFtMbmdMYXQubG5nLCBMbmdMYXQubGF0XSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g44Od44OD44OX44Ki44OD44OX44Gu44Kz44Oh44Oz44OI44KS5aSJ5pu0XG4gICAgY2hhbmdlUG9wdXBDb21tZW50KCkge1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKVxuICAgICAgICB0aGlzLnBvcHVwLnNldEhUTUwoY29tbWVudC52YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8g44OV44Kp44O844Og44Gr5YWl5Yqb44GX44Gf44Kz44Oh44Oz44OI44KS44Od44OD44OX44Ki44OD44OX44Gr5Y+N5pigXG4gICAgYWRhcHRGb3JtQ29tbWVudFRvUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuZm9ybWNvbW1lbnR0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgeyBwb3B1cDogdGhpcy5wb3B1cCwgaGFuZGxlRXZlbnQ6IHRoaXMuY2hhbmdlUG9wdXBDb21tZW50IH0pO1xuICAgIH1cblxuICAgIC8vIOODleOCqeODvOODoOOCv+OCsOOBq+ebtOaOpeaVsOWApOOCkuWFpeWKm+OBl+OBn+mam+OBq+ODnuODg+ODl+OBruODnuODvOOCq+ODvOOBruS9jee9ruOCkuenu+WLlVxuICAgIGFkYXB0Rm9ybUxvY2F0aW9uVG9NYXJrZXIoKSB7XG4gICAgICAgIHRoaXMuZm9ybWxuZ3RhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcC5mbHlUbyh7IGNlbnRlcjogW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZm9ybWxhdHRhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcC5mbHlUbyh7IGNlbnRlcjogW3RoaXMuZm9ybWxuZ3RhZy52YWx1ZSwgdGhpcy5mb3JtbGF0dGFnLnZhbHVlXSB9KTtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldExuZ0xhdChbdGhpcy5mb3JtbG5ndGFnLnZhbHVlLCB0aGlzLmZvcm1sYXR0YWcudmFsdWVdKS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNYXBTaXplIHtcbiAgICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgICAgICB0aGlzLm1hcHRhZyA9IG1hcEluZm9ybWF0aW9uT2JqLm1hcHRhZztcbiAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnID0gbWFwSW5mb3JtYXRpb25PYmoubWFwd3JhcHBlcnRhZztcbiAgICAgICAgdGhpcy5tYXBzaXplID0gbWFwSW5mb3JtYXRpb25PYmoubWFwc2l6ZTtcbiAgICB9XG5cbiAgICAvLyAvLyDnrqHnkIbnlLvpnaLjga7lnLDlm7Pjga7lpKfjgY3jgZXjgpLlpInmm7TmmYLjgavnrqHnkIbnlLvpnaLkuIrjga7lnLDlm7Pjga7lpKfjgY3jgZXjgavlj43mmKDjgZXjgZvjgotcbiAgICAvLyBzZWxlY3RNYXB3cmFwcGVydGFnU2l6ZSgpIHtcbiAgICAvLyAgIGxldCBzaXpldGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnICsgdGhpcy51bml0aWQpO1xuICAgIC8vICAgbGV0IHF1ZXJ5b3B0aW9ucyA9ICcjc2l6ZScgKyAnIG9wdGlvbic7XG4gICAgLy8gICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnlvcHRpb25zKTtcbiAgICAvLyAgIGxldCBzbWFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbWFsbCcpO1xuICAgIC8vICAgbGV0IGJpZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWcnKTtcbiAgICAvLyAgIHNpemV0YWcuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBpbmRleCA9IHNpemV0YWcuc2VsZWN0ZWRJbmRleDtcbiAgICAvLyAgICAgaWYgKG9wdGlvbnNbaW5kZXhdLnZhbHVlID09PSAnc21hbGwnKSB7XG4gICAgLy8gICAgICAgdGhpcy5jaGFuZ2VUb1NtYWxsKCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5jaGFuZ2VUb0JpZygpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjaGFuZ2VUb1NtYWxsKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ3NtYWxsJyk7XG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUubWF4V2lkdGggPSAnMTAwJSdcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgLy8gICB0aGlzLm1hcHdyYXBwZXJ0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAvLyAgIHRoaXMubWFwdGFnLnN0eWxlLmhlaWdodCA9ICczMDBweCc7XG4gICAgLy8gfVxuXG4gICAgLy8gY2hhbmdlVG9CaWcoKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnYmlnJylcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgIC8vICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAvLyAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgIC8vICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgIC8vICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAvLyB9XG5cbiAgICBzZXRNYXB3cmFwcGVydGFnU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWFwc2l6ZSA9PT0gJ2JpZycpIHtcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzgyMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzIwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnODIwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMyMHB4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xuICAgICAgICAgICAgdGhpcy5tYXB3cmFwcGVydGFnLnN0eWxlLndpZHRoID0gJzQwMHB4JztcbiAgICAgICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5oZWlnaHQgPSAnMzAwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xuICAgICAgICAgICAgdGhpcy5tYXB0YWcuc3R5bGUuaGVpZ2h0ID0gJzMwMHB4JztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1hcHdyYXBwZXJ0YWdNYXJnaW4oKSB7XG4gICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJhdXRvXCI7XG4gICAgICAgIHRoaXMubWFwd3JhcHBlcnRhZy5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xuICAgIH1cbn1cblxuLy8gICBNYXBib3jmpJzntKLmqZ/og73jga7jgq/jg6njgrlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG4gICAgY29uc3RydWN0b3IobWFwaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXBpbnN0YW5jZS5tYXA7XG4gICAgICAgIHRoaXMubWFya2VyID0gbWFwaW5zdGFuY2UubWFya2VyO1xuICAgICAgICB0aGlzLm1hcGJveGdsID0gbWFwaW5zdGFuY2UubWFwYm94Z2w7XG4gICAgICAgIHRoaXMuYWNjZXNzdG9rZW4gPSBtYXBpbnN0YW5jZS5hY2Nlc3N0b2tlbjtcbiAgICAgICAgdGhpcy5mb3JtbG5ndGFnID0gbWFwaW5zdGFuY2UuZm9ybWxuZ3RhZztcbiAgICAgICAgdGhpcy5mb3JtbGF0dGFnID0gbWFwaW5zdGFuY2UuZm9ybWxhdHRhZztcbiAgICAgICAgdGhpcy5nZW9jb2RlcnRhZyA9IG1hcGluc3RhbmNlLmdlb2NvZGVydGFnO1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25HZW9vZGVyKCk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGVHZW9jb2RlclRhZygpO1xuICAgICAgICB0aGlzLnNldFN0eWxlSW5wdXQoKTtcbiAgICAgICAgdGhpcy5zZXRMbmdMYXRUb0Zvcm0oKTtcbiAgICAgICAgdGhpcy5zZXRNYXJrZXJUb0xuZ0xhdCgpO1xuICAgIH1cblxuICAgIC8vIOWgtOaJgOaknOe0ouapn+iDveOBrui/veWKoFxuICAgIGluc3RhbnRpYXRpb25HZW9vZGVyKG1hcGluc3RhbmNlKSB7XG4gICAgICAgIC8vICDloLTmiYDmpJzntKLjg5Xjgqnjg7zjg6DjgpLov73liqBcbiAgICAgICAgdGhpcy5nZW9jb2RlciA9IG5ldyBNYXBib3hHZW9jb2Rlcih7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogdGhpcy5hY2Nlc3N0b2tlbixcbiAgICAgICAgICAgIG1hcGJveGdsOiB0aGlzLm1hcGJveGdsLFxuICAgICAgICAgICAgbWFya2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAn5qSc57SiJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdlb2NvZGVydGFnLmFwcGVuZENoaWxkKHRoaXMuZ2VvY29kZXIub25BZGQodGhpcy5tYXApKTtcbiAgICB9XG5cbiAgICAvLyAgIOaknOe0ouODnOODg+OCr+OCueOBruOCueOCv+OCpOODq+WkieabtFxuICAgIHNldFN0eWxlR2VvY29kZXJUYWcoKSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJ0YWcuc3R5bGUuV2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuZ2VvY29kZXJ0YWcuc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcblxuICAgIH1cblxuICAgIC8vIOaknOe0ouapn+iDveOBruODleOCqeODvOODoOOBruODkeODh+OCo+ODs+OCsOiqv+aVtO+8iOODh+ODleOCqeODq+ODiOOBp+OBr+OCouOCpOOCs+ODs+OBqOODleOCqeODvOODoOOBjOmHjeOBquOBo+OBpuOBhOOCi++8iVxuICAgIHNldFN0eWxlSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IG1hcGJveGdsX2N0cmxfZ2VvY29kZXJ0YWcgPSB0aGlzLmdlb2NvZGVydGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21hcGJveGdsLWN0cmwtZ2VvY29kZXInKVswXTtcbiAgICAgICAgbWFwYm94Z2xfY3RybF9nZW9jb2RlcnRhZy5zdHlsZS5taW5XaWR0aCA9ICcxMDAlJztcbiAgICAgICAgY29uc3QgZ2VvY29kZXJpbnB1dHRhZyA9IHRoaXMuZ2VvY29kZXJ0YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFwYm94Z2wtY3RybC1nZW9jb2Rlci0taW5wdXQnKVswXTtcbiAgICAgICAgZ2VvY29kZXJpbnB1dHRhZy5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiMzVweFwiO1xuICAgICAgICBnZW9jb2RlcmlucHV0dGFnLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5cbiAgICB9XG5cbiAgICAvLyDlnLDlm7Pjga7op5LluqbjgpLjg5Xjgqnjg7zjg6Djgavku6PlhaVcbiAgICBzZXRMbmdMYXRUb0Zvcm0oKSB7XG4gICAgICAgIHRoaXMuZ2VvY29kZXIub24oJ3Jlc3VsdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsbmdsYXQgPSBlLnJlc3VsdC5jZW50ZXI7XG4gICAgICAgICAgICB0aGlzLmZvcm1sbmd0YWcudmFsdWUgPSBsbmdsYXRbMF07XG4gICAgICAgICAgICB0aGlzLmZvcm1sYXR0YWcudmFsdWUgPSBsbmdsYXRbMV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOaknOe0oue1kOaenOOBruS9jee9ruOBq+ODnuODvOOCq+ODvOOCkuenu+WLlVxuICAgIHNldE1hcmtlclRvTG5nTGF0KCkge1xuICAgICAgICB0aGlzLmdlb2NvZGVyLm9uKCdyZXN1bHQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG5nbGF0ID0gZS5yZXN1bHQuY2VudGVyO1xuICAgICAgICAgICAgLy8gdGhpcy5tYXAuZmx5VG8oeyBjZW50ZXI6IFtsbmdsYXRbMF0sIGxuZ2xhdFsxXV0gfSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlci5zZXRMbmdMYXQoW2xuZ2xhdFswXSwgbG5nbGF0WzFdXSlcbiAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5tYXApO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBNeW1hcCwgTWFwU2l6ZSwgR2VvY29kZXIgfSBmcm9tIFwiL2pzL21hcGJveG9iamVjdHMuanNcIlxuXG4vLyDkvZzmiJDjgZXjgozjgZ/jgqTjg7Pjgrnjgr/jg7Pjgrnjga7jg6bjg4vjg4Pjg4hJROOCkuS/neWtmFxubGV0IHVuaXRpZEFycmF5ID0gW11cblxuLy8g44Om44OL44OD44OI6L+95Yqg5pmC44GrdW5pdGlkQXJyYXnjgpLmpJzntKLjgILmlrDopo/jga7jg6bjg4vjg4Pjg4jjga7loLTlkIjjgqTjg7Pjgrnjgr/jg7PjgrnkvZzmiJBcbkFDTVMuYWRkTGlzdGVuZXIoXCJhY21zQWRkVW5pdFwiLCAoKSA9PiB7XG4gIGxldCB1bml0SUR0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5pdGlkJyk7XG4gIE9iamVjdC5rZXlzKHVuaXRJRHRhZ3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGxldCB1bml0aWQgPSB1bml0SUR0YWdzW2tleV0uZGF0YXNldC51bml0aWQ7XG4gICAgaWYgKHVuaXRpZEFycmF5LmluZGV4T2YodW5pdGlkKSA9PT0gLTEpIHtcbiAgICAgIHVuaXRpZEFycmF5LnB1c2godW5pdGlkKTtcbiAgICAgIGNyZWF0ZVVuaXRNYXAodW5pdGlkKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIOOCqOODs+ODiOODquODvOips+e0sOeUu+mdouOBq+OBpk1hcGJveOODpuODi+ODg+ODiOOCkuihqOekulxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgbGV0IHVuaXRJRHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bml0aWQnKTtcbiAgT2JqZWN0LmtleXModW5pdElEdGFncykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgbGV0IHVuaXRpZCA9IHVuaXRJRHRhZ3Nba2V5XS5kYXRhc2V0LnVuaXRpZDtcbiAgICBpZiAodW5pdGlkQXJyYXkuaW5kZXhPZih1bml0aWQpID09PSAtMSkge1xuICAgICAgdW5pdGlkQXJyYXkucHVzaCh1bml0aWQpO1xuICAgICAgY3JlYXRlVW5pdE1hcCh1bml0aWQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8g44Ko44Oz44OI44Oq44O85L2c5oiQ44O75aSJ5pu055S76Z2i44Gn44GuTWFwYm9444Om44OL44OD44OIXG5jbGFzcyBVbml0TWFwIGV4dGVuZHMgTXltYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICB0aGlzLnVuaXRpZCA9IG1hcEluZm9ybWF0aW9uT2JqLnVuaXRpZDtcbiAgfVxuXG4gIC8vIOODnuODg+ODl+ODpuODi+ODg+ODiOS9nOaIkOaZguOBruOCueOCv+OCpOODq+OCkuOCu+ODg+ODiFxuICBzZXRVc2VkU3R5bGVVcmwoKSB7XG4gICAgY29uc3Qgc2V0c3R5bGV1cmwgPSB0aGlzLm1hcHRhZy5kYXRhc2V0LnNldHN0eWxldXJsO1xuICAgIGlmIChzZXRzdHlsZXVybCAhPSBmYWxzZSkge1xuICAgICAgdGhpcy5zdHlsZXVybCA9IHNldHN0eWxldXJsO1xuICAgICAgdGhpcy5mb3Jtc2V0c3R5bGV1cmx0YWcudmFsdWUgPSBzZXRzdHlsZXVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3Jtc2V0c3R5bGV1cmx0YWcudmFsdWUgPSB0aGlzLnN0eWxldXJsO1xuICAgIH1cbiAgfVxuXG4gIC8vIOODnuODg+ODl+OBruOCpOODs+OCueOCv+ODs+OCueWMllxuICBpbnN0YW50aWF0aW9uTWFwKCkge1xuICAgIHRoaXMubWFwID0gbmV3IHRoaXMubWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogJ21hcCcgKyB0aGlzLnVuaXRpZCxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxldXJsLFxuICAgICAgLy/ln7rmnKznmoTjgarnlLvpnaLjga7liLblvqHjg5fjg63jg5Hjg4bjgqNcbiAgICAgIGNlbnRlcjogW3RoaXMubG5nLCB0aGlzLmxhdF0sXG4gICAgICB6b29tOiB0aGlzLnpvb20sXG4gICAgICBwaXRjaDogdGhpcy5waXRjaCxcbiAgICAgIGJlYXJpbmc6IHRoaXMuYmVhcmluZyxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOODleOCqeODvOODoOOBq+WFpeWKm+OBl+OBn+OCs+ODoeODs+ODiOOCkuODneODg+ODl+OCouODg+ODl+OBq+WPjeaYoFxuICBhZGFwdEZvcm1Db21tZW50VG9Qb3B1cCgpIHtcbiAgICB0aGlzLmZvcm1jb21tZW50dGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHsgcG9wdXA6IHRoaXMucG9wdXAsIHVuaXRpZDogdGhpcy51bml0aWQsIGhhbmRsZUV2ZW50OiB0aGlzLmNoYW5nZVBvcHVwQ29tbWVudCB9KTtcbiAgfVxuXG4gIC8vIOODneODg+ODl+OCouODg+ODl+OBruOCs+ODoeODs+ODiOOCkuWkieabtFxuICBjaGFuZ2VQb3B1cENvbW1lbnQoKSB7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50JyArIHRoaXMudW5pdGlkKVxuICAgIHRoaXMucG9wdXAuc2V0SFRNTChjb21tZW50LnZhbHVlKTtcbiAgfVxufVxuXG4vLyDml6LlrZjjga5NYXBib3jjg6bjg4vjg4Pjg4jjgYzlrZjlnKjjgZnjgovloLTlkIjjgavjgqTjg7Pjgrnjgr/jg7PjgrnljJZcbmNsYXNzIFVuaXRFeHNpc3RlZE1hcCBleHRlbmRzIFVuaXRNYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKVxuICAgIHRoaXMuaW5zdGFuY2VNZXRob2QoKTtcbiAgfVxuXG4gIC8vIOOCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBq+OCiOOBsOOCjOOCi+ODoeOCveODg+ODiVxuICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICB0aGlzLnNldFVzZWRTdHlsZVVybCgpO1xuICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcCgpO1xuICAgIHRoaXMuaW5zdGFudGlhdGlvbk1hcmtlcigpO1xuICAgIHRoaXMuaW5zdGFudGlhdGlvblBvcHVwKCk7XG4gICAgdGhpcy5zZXRNYXBab29tVG9Gb3JtKHRoaXMubWFwKTtcbiAgICB0aGlzLnNldE1hcFBpdGNoVG9Gb3JtKHRoaXMubWFwKTtcbiAgICB0aGlzLnNldE1hcEJlYXJpbmdUb0Zvcm0odGhpcy5tYXApO1xuICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXAsIHRoaXMudW5pdGlkKTtcbiAgICB0aGlzLmdldE1hcmtlckRyb3BMb2NhdGlvbih0aGlzLm1hcCk7XG4gICAgdGhpcy5hZGFwdEZvcm1Mb2NhdGlvblRvTWFya2VyKCk7XG4gICAgdGhpcy5hZGFwdEZvcm1Db21tZW50VG9Qb3B1cCgpO1xuICB9XG5cbn1cblxuLy8gTWFwYm9444Om44OL44OD44OI44KS5paw6KaP5L2c5oiQ44GZ44KL6Zqb44Gr44Kk44Oz44K544K/44Oz44K55YyWXG5jbGFzcyBVbml0RGVmYXVsdE1hcCBleHRlbmRzIFVuaXRNYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICB0aGlzLmxuZyA9IDEzNTtcbiAgICB0aGlzLmxhdCA9IDM1O1xuICAgIHRoaXMuem9vbSA9IDU7XG4gICAgdGhpcy5waXRjaCA9IDA7XG4gICAgdGhpcy5iZWFyaW5nID0gMDtcbiAgICB0aGlzLmluc3RhbmNlTWV0aG9kKClcbiAgfVxuXG4gIC8vIOOCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBq+OCiOOBsOOCjOOCi+ODoeOCveODg+ODiVxuICBpbnN0YW5jZU1ldGhvZCgpIHtcbiAgICB0aGlzLnNldFVzZWRTdHlsZVVybCgpO1xuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlVG9Gb3JtKClcbiAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25Qb3B1cCgpO1xuICAgIHRoaXMuc2V0TWFwWm9vbVRvRm9ybSh0aGlzLm1hcCk7XG4gICAgdGhpcy5zZXRNYXBQaXRjaFRvRm9ybSh0aGlzLm1hcCk7XG4gICAgdGhpcy5zZXRNYXBCZWFyaW5nVG9Gb3JtKHRoaXMubWFwKTtcbiAgICB0aGlzLmFkZEV4dGVudGlvblRvTWFwKHRoaXMubWFwLCB0aGlzLnVuaXRpZCk7XG4gICAgdGhpcy5nZXRNYXJrZXJEcm9wTG9jYXRpb24odGhpcy5tYXApO1xuICAgIHRoaXMuYWRhcHRGb3JtTG9jYXRpb25Ub01hcmtlcigpO1xuICAgIHRoaXMuYWRhcHRGb3JtQ29tbWVudFRvUG9wdXAoKTtcbiAgfVxuXG59XG5cblxuLy8g44Ko44Oz44OI44Oq44O86Kmz57Sw55S76Z2i44Gn44Kk44Oz44K544K/44Oz44K55YyWXG5jbGFzcyBTaG93VW5pdE1hcCBleHRlbmRzIFVuaXRNYXAge1xuICBjb25zdHJ1Y3RvcihtYXBJbmZvcm1hdGlvbk9iaikge1xuICAgIHN1cGVyKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICB0aGlzLmluc3RhbmNlTWV0aG9kKCk7XG4gIH1cblxuICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnnlJ/miJBcbiAgaW5zdGFuY2VNZXRob2QoKSB7XG4gICAgdGhpcy5zZXRVc2VkU3R5bGVVcmwoKTtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25NYXAoKTtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25NYXJrZXIoKTtcbiAgICB0aGlzLmluc3RhbnRpYXRpb25Qb3B1cCgpO1xuICAgIHRoaXMuYWRkRXh0ZW50aW9uVG9NYXAodGhpcy5tYXAsIHRoaXMudW5pdGlkKTtcbiAgfVxuXG4gIC8vIOOCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBq+OCiOOBsOOCjOOCi+ODoeOCveODg+ODiVxuICBpbnN0YW50aWF0aW9uTWFya2VyKCkge1xuICAgIC8vIOODnuODvOOCq+ODvOOCkueri+OBpuOCi1xuICAgIHRoaXMubWFya2VyID0gbmV3IHRoaXMubWFwYm94Z2wuTWFya2VyKHtcbiAgICB9KVxuICAgICAgLnNldExuZ0xhdCh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XG4gIH1cblxuICAvLyDjg57jg4Pjg5fjg6bjg4vjg4Pjg4jkvZzmiJDmmYLjga7jgrnjgr/jgqTjg6vjgpLjgrvjg4Pjg4hcbiAgc2V0VXNlZFN0eWxlVXJsKCkge1xuICAgIGNvbnN0IHNldHN0eWxldXJsID0gdGhpcy5tYXB0YWcuZGF0YXNldC5zZXRzdHlsZXVybDtcbiAgICBjb25zb2xlLmxvZyhzZXRzdHlsZXVybCwgJ3NldHN0eWxlICcpXG4gICAgaWYgKHNldHN0eWxldXJsICE9IGZhbHNlKSB7XG4gICAgICB0aGlzLnN0eWxldXJsID0gc2V0c3R5bGV1cmw7XG4gICAgfVxuICB9XG5cblxufVxuXG4vLyBNYXBib3jjg6bjg4vjg4Pjg4jjga7lpKfjgY3jgZXlpInmm7TnlKjjgq/jg6njgrlcbmNsYXNzIE1hcFVuaXRTaXplIGV4dGVuZHMgTWFwU2l6ZSB7XG4gIGNvbnN0cnVjdG9yKG1hcEluZm9ybWF0aW9uT2JqKSB7XG4gICAgc3VwZXIobWFwSW5mb3JtYXRpb25PYmopO1xuICAgIHRoaXMudW5pdGlkID0gbWFwSW5mb3JtYXRpb25PYmoudW5pdGlkO1xuICAgIHRoaXMuc2V0TWFwd3JhcHBlcnRhZ1NpemUoKTtcbiAgICB0aGlzLnNldE1hcHdyYXBwZXJ0YWdNYXJnaW4oKTtcbiAgfVxuXG4gIC8vIOeuoeeQhueUu+mdouOBruWcsOWbs+OBruWkp+OBjeOBleOCkuWkieabtOaZguOBq+euoeeQhueUu+mdouS4iuOBruWcsOWbs+OBruWkp+OBjeOBleOBq+WPjeaYoOOBleOBm+OCi1xuICBzZWxlY3RNYXB3cmFwcGVydGFnU2l6ZSgpIHtcbiAgICBjb25zdCBzaXpldGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemUnICsgdGhpcy51bml0aWQpO1xuICAgIGNvbnN0IHF1ZXJ5b3B0aW9ucyA9ICcjc2l6ZScgKyB0aGlzLnVuaXRpZCArICcgb3B0aW9uJztcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeW9wdGlvbnMpO1xuICAgIGNvbnN0IHNtYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NtYWxsJyk7XG4gICAgY29uc3QgYmlnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZycpO1xuICAgIHNpemV0YWcuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHNpemV0YWcuc2VsZWN0ZWRJbmRleDtcbiAgICAgIGlmIChvcHRpb25zW2luZGV4XS52YWx1ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgICB0aGlzLmNoYW5nZVRvU21hbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVG9CaWcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVW5pdE1hcCh1bml0aWQpIHtcbiAgY29uc3QgbWFwSW5mb3JtYXRpb25PYmogPSB7XG4gICAgdW5pdGlkOiB1bml0aWQsXG4gICAgZm9ybWxuZ3RhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xuZycgKyB1bml0aWQpLFxuICAgIGZvcm1sYXR0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXQnICsgdW5pdGlkKSxcbiAgICBmb3Jtem9vbXRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvb20nICsgdW5pdGlkKSxcbiAgICBmb3JtcGl0Y2h0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaXRjaCcgKyB1bml0aWQpLFxuICAgIGZvcm1iZWFyaW5ndGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmVhcmluZycgKyB1bml0aWQpLFxuICAgIGZvcm1zaXpldGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l6ZScgKyB1bml0aWQpLFxuICAgIGZvcm1jb21tZW50dGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcgKyB1bml0aWQpLFxuICAgIGZvcm1zZXRzdHlsZXVybHRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHN0eWxldXJsJyArIHVuaXRpZCksXG4gICAgbWFwdGFnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCksXG4gICAgbWFwd3JhcHBlcnRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHdyYXBwZXInICsgdW5pdGlkKSxcbiAgICBnZW9jb2RlcnRhZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlb2NvZGVyJyArIHVuaXRpZCksXG4gICAgYWNjZXNzdG9rZW5fc3R5bGV1cmx0YWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLFxuICAgIGxuZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcgKyB1bml0aWQpLmRhdGFzZXQubG5nLFxuICAgIGxhdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcgKyB1bml0aWQpLmRhdGFzZXQubGF0LFxuICAgIHpvb206IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0Lnpvb20sXG4gICAgcGl0Y2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0LnBpdGNoLFxuICAgIGJlYXJpbmc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0LmJlYXJpbmcsXG4gICAgc3R5bGV1cmw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLmRhdGFzZXQuc3R5bGV1cmwsXG4gICAgYWNjZXNzdG9rZW46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3N0b2tlbl9zdHlsZXVybCcpLmRhdGFzZXQuYWNjZXNzdG9rZW4sXG4gICAgY29tbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcgKyB1bml0aWQpLmRhdGFzZXQuY29tbWVudCxcbiAgICBtYXBzaXplOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyArIHVuaXRpZCkuZGF0YXNldC5tYXBzaXplLFxuICAgIG1hcHR5cGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnICsgdW5pdGlkKS5kYXRhc2V0Lm1hcHR5cGUsXG4gIH1cbiAgaWYgKG1hcEluZm9ybWF0aW9uT2JqLm1hcHR5cGUgPT09ICdzaG93Jykge1xuICAgIC8vIOOCqOODs+ODiOODquODvOips+e0sOeUu+mdouOBp+OBruWHpueQhlxuICAgIGNvbnNvbGUubG9nKCd1bml0IHNob3cnKVxuICAgIGNvbnN0IG1hcHVuaXRzaXplID0gbmV3IE1hcFVuaXRTaXplKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICBjb25zdCBtYXBib3hfbWFwID0gbmV3IFNob3dVbml0TWFwKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgfSBlbHNlIGlmIChtYXBJbmZvcm1hdGlvbk9iai5sbmcgIT0gZmFsc2UpIHtcbiAgICAvLyDjgqjjg7Pjg4jjg6rjg7zlpInmm7TnlLvpnaLjgafjga7lh6bnkIZcbiAgICBjb25zb2xlLmxvZygndW5pdCBleHNpc3RlZCcpXG4gICAgY29uc3QgbWFwdW5pdHNpemUgPSBuZXcgTWFwVW5pdFNpemUobWFwSW5mb3JtYXRpb25PYmopO1xuICAgIGNvbnN0IG1hcGJveF9tYXAgPSBuZXcgVW5pdEV4c2lzdGVkTWFwKG1hcEluZm9ybWF0aW9uT2JqKTtcbiAgICBjb25zdCBtYXBib3hfZ2VvY29kZXIgPSBuZXcgR2VvY29kZXIobWFwYm94X21hcCk7XG4gIH0gZWxzZSB7XG4gICAgLy8g44Ko44Oz44OI44Oq44O85paw6KaP5L2c5oiQ55S76Z2i44Gn44Gu5Yem55CGXG4gICAgY29uc29sZS5sb2coJ3VuaXQgbmV3JylcbiAgICBjb25zdCBtYXB1bml0c2l6ZSA9IG5ldyBNYXBVbml0U2l6ZShtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgY29uc3QgbWFwYm94X21hcCA9IG5ldyBVbml0RGVmYXVsdE1hcChtYXBJbmZvcm1hdGlvbk9iaik7XG4gICAgY29uc3QgbWFwYm94X2dlb2NvZGVyID0gbmV3IEdlb2NvZGVyKG1hcGJveF9tYXApO1xuXG4gIH1cbn1cblxuXG5jb25zb2xlLmxvZygnbWFwYm94dW5pdC5qcyBsb2FkZWQnKVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9tYXBib3h1bml0YmVmb3Jld2VicGFjay5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=