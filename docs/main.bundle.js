webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = (function () {
    function ArtistService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    ArtistService.prototype.getArtists = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'artists/' + page, options).
            map(function (res) { return res.json(); });
    };
    ArtistService.prototype.getArtist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'artist/' + id, options).
            map(function (res) { return res.json(); });
    };
    ArtistService.prototype.addArtist = function (token, artist) {
        var params = JSON.stringify(artist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'artist', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ArtistService.prototype.editArtist = function (token, id, artist) {
        var params = JSON.stringify(artist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'artist/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ArtistService.prototype.deleteArtist = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'artist/' + id, options).
            map(function (res) { return res.json(); });
    };
    ArtistService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ArtistService);
    return ArtistService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumService = (function () {
    function AlbumService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    AlbumService.prototype.getAlbums = function (token, artistId) {
        if (artistId === void 0) { artistId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (artistId == null) {
            return this._http.get(this.url + 'albums/', options)
                .map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'albums/' + artistId, options)
                .map(function (res) { return res.json(); });
        }
    };
    AlbumService.prototype.getAlbum = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'album/' + id, options)
            .map(function (res) { return res.json(); });
    };
    AlbumService.prototype.addAlbum = function (token, album) {
        var params = JSON.stringify(album);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'album', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AlbumService.prototype.editAlbum = function (token, id, album) {
        var params = JSON.stringify(album);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'album/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AlbumService.prototype.deleteAlbum = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'album/' + id, options)
            .map(function (res) { return res.json(); });
    };
    AlbumService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AlbumService);
    return AlbumService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/album.service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    // url: 'http://localhost:3977/api/',
    url: 'https://kind-of-spotify.herokuapp.com/api/'
};
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/global.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Song; });
var Song = (function () {
    function Song(
        // public _id: string, //en este caso de omite para hacerlo sencillo
        number, name, duration, file, album) {
        this.number = number;
        this.name = name;
        this.duration = duration;
        this.file = file;
        this.album = album;
    }
    return Song;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/song.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongService = (function () {
    function SongService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    SongService.prototype.getSongs = function (token, albumId) {
        if (albumId === void 0) { albumId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (albumId == null) {
            return this._http.get(this.url + 'songs/', options)
                .map(function (res) { return res.json(); });
        }
        else {
            return this._http.get(this.url + 'songs/' + albumId, options)
                .map(function (res) { return res.json(); });
        }
    };
    SongService.prototype.getSong = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'song/' + id, options)
            .map(function (res) { return res.json(); });
    };
    SongService.prototype.addSong = function (token, song) {
        var params = JSON.stringify(song);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'song', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SongService.prototype.editSong = function (token, id, song) {
        var params = JSON.stringify(song);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'song/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SongService.prototype.deleteSong = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'song/' + id, options)
            .map(function (res) { return res.json(); });
    };
    SongService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SongService);
    return SongService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/song.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UploadService);
    return UploadService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/upload.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.singup = function (user_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        var json = JSON.stringify(user_to_login);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.register = function (user_to_register, gethash) {
        if (gethash === void 0) { gethash = null; }
        var params = JSON.stringify(user_to_register);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'register', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/user.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_album_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_album__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumAddComponent = (function () {
    function AlbumAddComponent(_route, _router, _userService, _artistService, _albumService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this._albumService = _albumService;
        this.titulo = 'Crear Album nuevo';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.album = new __WEBPACK_IMPORTED_MODULE_6__models_album__["a" /* Album */]('', '', 2018, '', '');
    }
    AlbumAddComponent.prototype.ngOnInit = function () {
        console.log('album-add-components se ha cargado');
    };
    AlbumAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var artist_id = params['artist'];
            _this.album.artist = artist_id;
            _this._albumService.addAlbum(_this.token, _this.album).subscribe(function (response) {
                if (!response.album) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El album se creo correctamente!';
                    _this.album = response.album;
                    _this._router.navigate(['/editar-album', response.album._id]);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    AlbumAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album-add',
            template: __webpack_require__(388),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */], __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */]) === 'function' && _e) || Object])
    ], AlbumAddComponent);
    return AlbumAddComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/album-add.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_song_service__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(_route, _router, _userService, _albumService, _songService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._songService = _songService;
        this.titulo = 'Album detalles';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        console.log('album-detail-components se ha cargado');
        this.getAlbum();
    };
    AlbumDetailComponent.prototype.getAlbum = function () {
        var _this = this;
        console.log("El metodo ha funcionado");
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._albumService.getAlbum(_this.token, id).subscribe(function (response) {
                if (!response.album) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.album = response.album;
                    _this._songService.getSongs(_this.token, response.album._id).subscribe(function (response) {
                        if (!response.songs) {
                            _this.alertMessage = 'Este album no tiene canciones';
                        }
                        else {
                            _this.songs = response.songs;
                        }
                    }, function (error) {
                        var errorMessage = error;
                        if (errorMessage != null) {
                            var body = JSON.parse(error._body);
                            console.log(error);
                        }
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    AlbumDetailComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    AlbumDetailComponent.prototype.onCancelSong = function () {
        this.confirmado = null;
    };
    AlbumDetailComponent.prototype.onDeleteSong = function (id) {
        var _this = this;
        this._songService.deleteSong(this.token, id).subscribe(function (response) {
            if (!response.song) {
                alert('Error en el servidor');
            }
            else {
                _this.getAlbum();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                // this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    AlbumDetailComponent.prototype.startPlayer = function (song) {
        var song_player = JSON.stringify(song);
        var file_path = this.url + 'get-song-file/' + song.file;
        var image_path = this.url + 'get-image-album/' + song.album.image;
        document.getElementById("mp3-source").setAttribute("src", file_path);
        document.getElementById("player").load();
        document.getElementById("player").play();
        document.getElementById('play-song-title').innerHTML = song.name;
        document.getElementById('play-song-artist').innerHTML = song.album.artist.name;
        document.getElementById('play-image-album').setAttribute('src', image_path);
    };
    AlbumDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album-detail',
            template: __webpack_require__(691),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */]) === 'function' && _e) || Object])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/album-detail.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_album__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumEditComponent = (function () {
    function AlbumEditComponent(_route, _router, _userService, _albumService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._uploadService = _uploadService;
        this.titulo = 'Editar album';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.album = new __WEBPACK_IMPORTED_MODULE_6__models_album__["a" /* Album */]('', '', 2018, '', '');
        this.is_edit = true;
    }
    AlbumEditComponent.prototype.ngOnInit = function () {
        console.log('album-edit-components se ha cargado');
        this.getAlbum();
    };
    AlbumEditComponent.prototype.getAlbum = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._albumService.getAlbum(_this.token, id).subscribe(function (response) {
                if (!response.album) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.album = response.album;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    AlbumEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._albumService.editAlbum(_this.token, id, _this.album).subscribe(function (response) {
                if (!response.album) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El album se ha actualizado correctamente!';
                    // Subir imagen del album
                    if (!_this.filesToUpload) {
                        _this._router.navigate(['/artista', response.album.artist]);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + "upload-image-album/" + id, [], _this.filesToUpload, _this.token, 'image')
                            .then(function (result) {
                            _this._router.navigate(['/artista', response.album.artist]);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    AlbumEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AlbumEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'album-edit',
            template: __webpack_require__(388),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _e) || Object])
    ], AlbumEditComponent);
    return AlbumEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/album-edit.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_artist__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistAddComponent = (function () {
    function ArtistAddComponent(_route, _router, _userService, _artistService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this.titulo = 'Agregar artista';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.artist = new __WEBPACK_IMPORTED_MODULE_5__models_artist__["a" /* Artist */]('', '', '');
    }
    ArtistAddComponent.prototype.ngOnInit = function () {
        console.log('artist-add-components se ha cargado');
    };
    ArtistAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.artist);
        this._artistService.addArtist(this.token, this.artist).subscribe(function (response) {
            if (!response.artist) {
                _this.alertMessage = 'Error en el servidor';
            }
            else {
                _this.alertMessage = 'El artista se creo correctamente!';
                _this.artist = response.artist;
                _this._router.navigate(['/editar-artista', response.artist._id]);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                // this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    ArtistAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'artist-add',
            template: __webpack_require__(389),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object])
    ], ArtistAddComponent);
    return ArtistAddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist-add.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_album_service__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistDetailComponent = (function () {
    function ArtistDetailComponent(_route, _router, _userService, _artistService, _albumService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this._albumService = _albumService;
        this.titulo = 'Detalles artista';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
        console.log('artist-detail-components se ha cargado');
        this.getArtist();
    };
    ArtistDetailComponent.prototype.getArtist = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._artistService.getArtist(_this.token, id).subscribe(function (response) {
                if (!response.artist) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.artist = response.artist;
                    _this._albumService.getAlbums(_this.token, response.artist._id).subscribe(function (response) {
                        if (!response.albums) {
                            _this.alertMessage = 'Este artista no tiene albums';
                        }
                        else {
                            _this.albums = response.albums;
                        }
                    }, function (error) {
                        var errorMessage = error;
                        if (errorMessage != null) {
                            var body = JSON.parse(error._body);
                            console.log(error);
                        }
                    });
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    ArtistDetailComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    ArtistDetailComponent.prototype.onCancelAlbum = function () {
        this.confirmado = null;
    };
    ArtistDetailComponent.prototype.onDeleteAlbum = function (id) {
        var _this = this;
        this._albumService.deleteAlbum(this.token, id).subscribe(function (response) {
            if (!response.album) {
                alert('Error en el servidor');
            }
            else {
                _this.getArtist();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                // this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    ArtistDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'artist-detail',
            template: __webpack_require__(692),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */], __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_album_service__["a" /* AlbumService */]) === 'function' && _e) || Object])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist-detail.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_artist__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistEditComponent = (function () {
    function ArtistEditComponent(_route, _router, _userService, _artistService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this._uploadService = _uploadService;
        this.titulo = 'Editar artista';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.artist = new __WEBPACK_IMPORTED_MODULE_6__models_artist__["a" /* Artist */]('', '', '');
        this.is_edit = true;
    }
    ArtistEditComponent.prototype.ngOnInit = function () {
        console.log('artist-edit-components se ha cargado');
        this.getArtist();
    };
    ArtistEditComponent.prototype.getArtist = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._artistService.getArtist(_this.token, id).subscribe(function (response) {
                if (!response.artist) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.artist = response.artist;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    ArtistEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.artist);
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._artistService.editArtist(_this.token, id, _this.artist).subscribe(function (response) {
                if (!response.artist) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'El artista ha actualizado correctamente!';
                    // subir imagen del artista
                    if (!_this.filesToUpload) {
                        _this._router.navigate(['/artista', response.artist._id]);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + "upload-image-artist/" + id, [], _this.filesToUpload, _this.token, 'image')
                            .then(function (result) {
                            _this._router.navigate(['/artista', response.artist._id]);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    // this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    ArtistEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    ArtistEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'artist-edit',
            template: __webpack_require__(389),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _e) || Object])
    ], ArtistEditComponent);
    return ArtistEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist-edit.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistListComponent = (function () {
    function ArtistListComponent(_route, _router, _userService, _ArtistService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ArtistService = _ArtistService;
        this.titulo = 'Artistas';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
    }
    ArtistListComponent.prototype.ngOnInit = function () {
        console.log('artist-list-components se ha cargado');
        this.getArtists();
    };
    ArtistListComponent.prototype.getArtists = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._ArtistService.getArtists(_this.token, page).subscribe(function (response) {
                if (!response.artists) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.artists = response.artists;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    ArtistListComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    ArtistListComponent.prototype.onCancelArtist = function () {
        this.confirmado = null;
    };
    ArtistListComponent.prototype.onDeleteArtist = function (id) {
        var _this = this;
        this._ArtistService.deleteArtist(this.token, id).subscribe(function (response) {
            if (!response.artist) {
                alert('Error en el servidor');
            }
            else {
                _this.getArtists();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                console.log(error);
            }
        });
    };
    ArtistListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'artist-list',
            template: __webpack_require__(693),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === 'function' && _d) || Object])
    ], ArtistListComponent);
    return ArtistListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist-list.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.titulo = 'Bienvenidos';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home.components se ha cargado');
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'home',
            template: __webpack_require__(694),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/home.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_song_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_song__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SongAddComponent = (function () {
    function SongAddComponent(_route, _router, _userService, _songService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._songService = _songService;
        this.titulo = 'Crear cancion nueva';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.song = new __WEBPACK_IMPORTED_MODULE_5__models_song__["a" /* Song */](1, '', '', '', '');
    }
    SongAddComponent.prototype.ngOnInit = function () {
        console.log('song-add-components se ha cargado');
    };
    SongAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var album_id = params['album'];
            _this.song.album = album_id;
            _this._songService.addSong(_this.token, _this.song).subscribe(function (response) {
                if (!response.song) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'La cancion se creo correctamente!';
                    _this.song = response.song;
                    _this._router.navigate(['/editar-tema', response.song._id]);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    SongAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'song-add',
            template: __webpack_require__(390),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */]) === 'function' && _d) || Object])
    ], SongAddComponent);
    return SongAddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/song-add.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_song_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_song__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongEditComponent = (function () {
    function SongEditComponent(_route, _router, _userService, _songService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._songService = _songService;
        this._uploadService = _uploadService;
        this.titulo = 'Editar cancion';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.song = new __WEBPACK_IMPORTED_MODULE_6__models_song__["a" /* Song */](1, '', '', '', '');
        this.is_edit = true;
    }
    SongEditComponent.prototype.ngOnInit = function () {
        console.log('song-edit-components se ha cargado');
        this.getSong();
    };
    SongEditComponent.prototype.getSong = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._songService.getSong(_this.token, id).subscribe(function (response) {
                if (!response.song) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.song = response.song;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    console.log(error);
                }
            });
        });
    };
    SongEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._songService.editSong(_this.token, id, _this.song).subscribe(function (response) {
                if (!response.song) {
                    _this.alertMessage = 'Error en el servidor';
                }
                else {
                    _this.alertMessage = 'La cancion se ha actualizado correctamente!';
                    // Subir imagen del album
                    if (!_this.filesToUpload) {
                        _this._router.navigate(['/album', response.song.album]);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + "upload-file-song/" + id, [], _this.filesToUpload, _this.token, 'file')
                            .then(function (result) {
                            _this._router.navigate(['/album', response.song.album]);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    var body = JSON.parse(error._body);
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    SongEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    SongEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'song-edit',
            template: __webpack_require__(390),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */], __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_upload_service__["a" /* UploadService */]) === 'function' && _e) || Object])
    ], SongEditComponent);
    return SongEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/song-edit.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = (function () {
    function UserEditComponent(_userService) {
        this._userService = _userService;
        this.titulo = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        // this.user = new User('', '', '', '', '', 'ROLE_USER', '');
        this.user = this.identity; //carga en el formulario los datos de esta sesion
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        console.log('user-edit-components se ha cargado');
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.user);
        this._userService.updateUser(this.user).subscribe(function (response) {
            if (!response.user) {
                _this.alertMessage = "El usuario no se ha actualizado";
            }
            else {
                // this.user = response.user;
                localStorage.setItem('identity', JSON.stringify(_this.user));
                document.getElementById("identity_name").innerHTML = _this.user.name;
                if (!_this.filesToUpload) {
                }
                else {
                    _this.makeFileRequest(_this.url + 'upload-image-user/' + _this.user._id, [], _this.filesToUpload).then(function (result) {
                        _this.user.image = result.image;
                        localStorage.setItem('identity', JSON.stringify(_this.user));
                        var image_path = _this.url + "get-image-user/" + _this.user.image;
                        document.getElementById("image-logged").setAttribute('src', image_path);
                    }).catch(function (e) {
                        console.log(e);
                    });
                }
                _this.alertMessage = "El usuario se ha actualizado";
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log(this.filesToUpload);
    };
    UserEditComponent.prototype.makeFileRequest = function (url, params, files) {
        var token = this.token;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append('image', files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UserEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'user-edit',
            template: __webpack_require__(695),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserEditComponent);
    return UserEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/user-edit.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Album; });
var Album = (function () {
    function Album(
        // public _id: string, //en este caso de omite para hacerlo sencillo
        title, definition, year, image, artist) {
        this.title = title;
        this.definition = definition;
        this.year = year;
        this.image = image;
        this.artist = artist;
    }
    return Album;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/album.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Artist; });
var Artist = (function () {
    function Artist(
        // public _id: string, //en este caso de omite para hacerlo sencillo
        name, definition, image) {
        this.name = name;
        this.definition = definition;
        this.image = image;
    }
    return Artist;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/artist.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\">\r\n\r\n        <div class=\"col-6\">\r\n            <h1>{{titulo}}</h1>\r\n            <hr>\r\n\r\n            <div *ngIf=\"alertMessage\">\r\n                <div class=\"alert alert-info\" role=\"alert\">\r\n                    {{alertMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-6\">\r\n\r\n            <form #formAlbum=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n                <p>\r\n                    <label>Titulo</label>\r\n                    <input type=\"text\" #title=\"ngModel\" name=\"title\" [(ngModel)]=\"album.title\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!title.valid && title.touched\">\r\n                        El titulo es Obligatorio\r\n                    </span>\r\n                </p>\r\n                <p>\r\n                    <label>Descripcion</label>\r\n                    <textarea type=\"definition\" #definition=\"ngModel\" name=\"definition\" [(ngModel)]=\"album.definition\" required class=\"form-control\"></textarea>\r\n                    <span *ngIf=\"!definition.valid && definition.touched\">\r\n                        La descripcion es obligatoria\r\n                    </span>\r\n                </p>\r\n                <p>\r\n                    <label>Año</label>\r\n                    <input type=\"text\" #year=\"ngModel\" name=\"year\" [(ngModel)]=\"album.year\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!year.valid && year.touched\">\r\n                        El año es Obligatorio\r\n                    </span>\r\n                </p>\r\n                <div *ngIf=\"is_edit\">\r\n                    <div class=\"album_image_for_edit\" *ngIf=\"album.image && album.image != 'null'\">\r\n                        <img src=\"{{url + 'get-image-album/'+ album.image}}\" alt=\"\" />\r\n                    </div>\r\n                    <p>\r\n                        <label>Sube la imagen del album</label>\r\n                        <input type=\"file\" placeholder=\"Subir imagen..\" (change)=\"fileChangeEvent($event)\" />\r\n                    </p>\r\n                </div>\r\n                <input type=\"submit\" value=\"{{titulo}}\" [disabled]=\"!formAlbum.form.valid\" class=\"btn btn-success\" />\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\" *ngIf=\"!identity || identity.role != 'ROLE_ADMIN'\">\r\n        <div class=\"col\">\r\n            <h1>Error</h1>\r\n            <p>No tienes acceso a esta parte de la aplicacion</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row justify-content-center\" *ngIf = \"identity && identity.role == 'ROLE_ADMIN'\">\r\n\r\n    <div class=\"col-6\">\r\n    <h1>{{titulo}}</h1>\r\n    <hr>\r\n    \r\n    <div *ngIf=\"alertMessage\">\r\n        <div class=\"alert alert-info\" role=\"alert\">\r\n            {{alertMessage}}\r\n        </div>\r\n    </div>\r\n</div>\r\n    <div class=\"w-100\"></div>\r\n    <div class=\"col-6\">\r\n\r\n        <form #formArtist= \"ngForm\" (ngSubmit)= \"onSubmit()\">\r\n            <p>\r\n                <label>Nombre</label>\r\n                <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]= \"artist.name\" required class=\"form-control\" />\r\n                <span *ngIf= \"!name.valid && name.touched\">\r\n                    El nombre es Obligatorio\r\n                </span> \r\n            </p>\r\n            <p>\r\n                <label>Descripcion</label>\r\n                <textarea type=\"text\" #definition=\"ngModel\" name=\"definition\" [(ngModel)]= \"artist.definition\" required class=\"form-control\"></textarea>\r\n                <span *ngIf= \"!definition.valid && definition.touched\">\r\n                    La descripcion es obligatoria\r\n                </span> \r\n            </p>\r\n\r\n            <div *ngIf = \"is_edit\">\r\n                <div class=\"artist_image_for_edit\" *ngIf = \"artist.image && artist.image != 'null'\">\r\n                    <img src=\"{{url + 'get-image-artist/'+ artist.image}}\" alt=\"\" />\r\n                </div>\r\n                <p>\r\n                    <label>Sube la imagen del artista</label>\r\n                    <input type=\"file\" placeholder=\"Subir imagen..\" (change)=\"fileChangeEvent($event)\" />\r\n                </p>\r\n            </div>\r\n\r\n            <input type=\"submit\" value = \"{{titulo}}\" [disabled]=\"!formArtist.form.valid\" class=\"btn btn-success\" />\r\n            \r\n        </form> \r\n    </div>\r\n</div>\r\n    <div class=\"row justify-content-center\" *ngIf=\"!identity || identity.role != 'ROLE_ADMIN'\">\r\n        <div class=\"col\">\r\n            <h1>Error</h1>\r\n            <p>No tienes acceso a esta parte de la aplicacion</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\">\r\n\r\n        <div class=\"col-6\">\r\n            <h1>{{titulo}}</h1>\r\n            <hr>\r\n\r\n            <div *ngIf=\"alertMessage\">\r\n                <div class=\"alert alert-info\" role=\"alert\">\r\n                    {{alertMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100\"></div>\r\n        <div class=\"col-6\">\r\n\r\n            <form #formSong=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n                <p>\r\n                    <label>Numero</label>\r\n                    <input type=\"text\" #number=\"ngModel\" name=\"number\" [(ngModel)]=\"song.number\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!number.valid && number.touched\">\r\n                        El numero de la cancion es Obligatorio\r\n                    </span>\r\n                </p>\r\n                <p>\r\n                    <label>Titulo</label>\r\n                    <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"song.name\" required class=\"form-control\" />\r\n                    <span *ngIf=\"!name.valid && name.touched\">\r\n                        El titulo es Obligatorio\r\n                    </span>\r\n                </p>\r\n                <p>\r\n                    <label>Duracion</label>\r\n                    <input type=\"text\" #duration=\"ngModel\" name=\"duration\" [(ngModel)]=\"song.duration\" required class=\"form-control\">\r\n                    <span *ngIf=\"!duration.valid && duration.touched\">\r\n                        La duracion es obligatoria\r\n                    </span>\r\n                </p>\r\n                <div *ngIf=\"is_edit\">\r\n                    <div class=\"song_file_for_edit\" *ngIf=\"song.file && song.file != 'null'\">\r\n                        <audio controls>\r\n                            <source src=\"{{url + 'get-song-file/' + song.file}}\" type=\"audio/mpeg\" />\r\n                                El navegador web no soporta reproduccion de audio\r\n                        </audio>\r\n                    </div>\r\n                    <p>\r\n                        <label>Sube el fichero de audio</label>\r\n                        <input type=\"file\" placeholder=\"Subir fichero..\" (change)=\"fileChangeEvent($event)\" />\r\n                    </p>\r\n                </div>\r\n                <input type=\"submit\" value=\"{{titulo}}\" [disabled]=\"!formSong.form.valid\" class=\"btn btn-success\" />\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"row justify-content-center\" *ngIf=\"!identity || identity.role != 'ROLE_ADMIN'\">\r\n        <div class=\"col\">\r\n            <h1>Error</h1>\r\n            <p>No tienes acceso a esta parte de la aplicacion</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 412;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(531);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/main.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'MUSIFY!';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
        this.user_register = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        // Conseguir los datos del usuario identificado
        this._userService.singup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert("El usuario no esta correctamente identificado");
            }
            else {
                // crear elemento en el localstorage para tener al usuario sesión
                localStorage.setItem('identity', JSON.stringify(identity));
                // Conseguir el token para enviarselo a cada petición http
                _this._userService.singup(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert("El Token no se ha generado correctamente");
                    }
                    else {
                        // crear elemento en el localstorage para tener el token disponible 
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        var body = JSON.parse(error._body);
                        _this.errorMessage = body.message;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.errorMessage = body.message;
                console.log(error);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
        // this._router.navigate(['/']);
    };
    AppComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        console.log(this.user_register);
        this._userService.register(this.user_register).subscribe(function (response) {
            var user = response.user;
            _this.user_register = user;
            if (!user._id) {
                _this.alertRegister = 'Error al registrarse';
            }
            else {
                _this.alertRegister = 'El registro se ha realizado correctamente con ' + _this.user_register.email;
                _this.user_register = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', 'ROLE_USER', '');
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertRegister = body.message;
                console.log(error);
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(690),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/app.component.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_edit_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_artist_list_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_artist_add_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_artist_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_artist_detail_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_album_add_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_album_edit_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_album_detail_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_song_add_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_song_edit_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_player_component__ = __webpack_require__(533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_artist_list_component__["a" /* ArtistListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_artist_add_component__["a" /* ArtistAddComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_artist_edit_component__["a" /* ArtistEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_artist_detail_component__["a" /* ArtistDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_album_add_component__["a" /* AlbumAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_album_edit_component__["a" /* AlbumEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_album_detail_component__["a" /* AlbumDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_song_add_component__["a" /* SongAddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_song_edit_component__["a" /* SongEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_player_component__["a" /* PlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* appRoutingProviders */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_edit_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_artist_list_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_artist_add_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_artist_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_artist_detail_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_album_add_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_album_edit_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_album_detail_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_song_add_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_song_edit_component__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });












var appRoutes = [
    // { 
    //     path: '',
    //     redirectTo: 'artist/:page',
    //     pathMatch: 'full'
    //  },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */] },
    { path: 'artistas/:page', component: __WEBPACK_IMPORTED_MODULE_3__components_artist_list_component__["a" /* ArtistListComponent */] },
    { path: 'crear-artista', component: __WEBPACK_IMPORTED_MODULE_4__components_artist_add_component__["a" /* ArtistAddComponent */] },
    { path: 'editar-artista/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_artist_edit_component__["a" /* ArtistEditComponent */] },
    { path: 'artista/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_artist_detail_component__["a" /* ArtistDetailComponent */] },
    { path: 'mis-datos', component: __WEBPACK_IMPORTED_MODULE_2__components_user_edit_component__["a" /* UserEditComponent */] },
    { path: 'crear-album/:artist', component: __WEBPACK_IMPORTED_MODULE_7__components_album_add_component__["a" /* AlbumAddComponent */] },
    { path: 'editar-album/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_album_edit_component__["a" /* AlbumEditComponent */] },
    { path: 'album/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_album_detail_component__["a" /* AlbumDetailComponent */] },
    { path: 'crear-tema/:album', component: __WEBPACK_IMPORTED_MODULE_10__components_song_add_component__["a" /* SongAddComponent */] },
    { path: 'editar-tema/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_song_edit_component__["a" /* SongEditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_artist_list_component__["a" /* ArtistListComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/app.routing.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_song__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = (function () {
    function PlayerComponent() {
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        console.log('player cargado');
        var song = JSON.parse(localStorage.getItem('sound_song'));
        if (song) {
            this.song = song;
        }
        else {
            this.song = new __WEBPACK_IMPORTED_MODULE_1__models_song__["a" /* Song */](1, "", "", "", "");
        }
    };
    PlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'player',
            template: "\n    <div class = \"album-image\">\n        <span *ngIf = \"song.album\">\n            <img id = \"play-image-album\" src = \"{{url + 'get-image-album/' + song.album.image}}\" />\n        </span>\n        <span *ngIf = \"!song.album\">\n            <img id = \"play-image-album\" src = \"assets/images/default.png\" />\n        </span>\n    </div>\n    <div class = \"audio-file\">\n        <p>Reproduciendo</p>\n        <span id=\"play-song-title\">\n        {{song.name}}\n        </span>\n        -\n        <span id=\"play-song-artist\">\n            <span *ngIf= \"song.album.artist\">\n                {{song.album.artist.name}}\n            </span>\n        </span>\n        <audio controls id  = \"player\">\n            <source id= \"mp3-source\" src=\"{{url + 'get-song-file/'+song.file}}\" type = \"audio/mpeg\">\n            Tu navegador no es compatible\n        </audio>\n    </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerComponent);
    return PlayerComponent;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/player.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, surname, email, password, role, image) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }
    return User;
}());
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/user.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Jonas/Documents/Cursos/kinf-of-spotify-master/client/src/environment.js.map

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"row container-fluid\">\r\n  <div *ngIf=\"identity\" class=\"navigation col-lg-1\">\r\n    <h1 class=\"head-title\">\r\n      <a [routerLink]=\"['/']\">\r\n        {{title}}\r\n      </a>\r\n    </h1>\r\n    <nav id=\"navigation\">\r\n      <a href=\"#\" >\r\n        <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\r\n        Buscar\r\n      </a>\r\n      <a [routerLink]=\"['/artistas',1]\" [routerLinkActive] = \"['actived']\">\r\n        <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span>\r\n        Artistas\r\n      </a>\r\n      <a href=\"#\">\r\n        <span class=\"glyphicon glyphicon-book\" aria-hidden=\"true\"></span>\r\n        Albums\r\n      </a>\r\n    </nav>\r\n    <nav id=\"user_logged\">\r\n      <div class=\"user-image\">\r\n        <img id=\"image-logged\" src=\"{{url + 'get-image-user/' + identity.image}}\">\r\n      </div>\r\n\r\n      <span id=\"identity_name\">{{identity.name}}</span>\r\n      <a [routerLink]=\"['/mis-datos']\"  [routerLinkActive] = \"['actived']\">\r\n        <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n        Mis datos\r\n      </a>\r\n      <a (click)=\"logout()\" class=\"btn-logout\">\r\n        <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n        Salir\r\n      </a>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- <div [class.hidden]=\"!identity\" class=\"central col-lg-10\"> -->\r\n  <div *ngIf=\"identity\" class=\"central col-lg-11\">\r\n    <router-outlet></router-outlet>\r\n    <div class=\"clearfix\"></div>\r\n    <player class=\"player\"></player>\r\n  </div>\r\n\r\n  <div *ngIf=\"!identity\" class=\"col-lg-11\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <h1>Identificate</h1>\r\n        <div *ngIf=\"errorMessage\">\r\n          <div class=\"alert alert-info\" role=\"alert\">\r\n            <strong>Error: </strong> {{errorMessage}}\r\n          </div>\r\n        </div>\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-6\">\r\n          <p>\r\n            <label>Correo Electrónico:</label>\r\n            <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!email.valid && email.touched\">\r\n              El email es requerido\r\n            </span>\r\n          </p>\r\n          <p>\r\n            <label>Contraseña:</label>\r\n            <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" required/>\r\n          </p>\r\n          <input type=\"submit\" value=\"Entrar\" class=\"btn btn-primary\">\r\n        </form>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <h1>Registrate</h1>\r\n        <div *ngIf=\"alertRegister\">\r\n          <div class=\"alert alert-info\" role=\"alert\">\r\n            {{alertRegister}}\r\n          </div>\r\n        </div>\r\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"col-md-10\">\r\n          <p>\r\n            <label>Nombre:</label>\r\n            <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"user_register.name\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!name.valid && name.touched\">\r\n              El nombre es requerido\r\n            </span>\r\n          </p>\r\n          <p>\r\n            <label>Apellidos:</label>\r\n            <input type=\"text\" #surname=\"ngModel\" name=\"surname\" [(ngModel)]=\"user_register.surname\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!surname.valid && surname.touched\">\r\n              El Apellido es requerido\r\n            </span>\r\n          </p>\r\n          <p>\r\n            <label>Correo Electrónico:</label>\r\n            <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"user_register.email\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!email.valid && email.touched\">\r\n              El email es requerido\r\n            </span>\r\n          </p>\r\n          <p>\r\n            <label>Contraseña:</label>\r\n            <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"user_register.password\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!password.valid && password.touched\">\r\n              La contraseña es requerido\r\n            </span>\r\n          </p>\r\n          <input type=\"submit\" value=\"Registrarse\" class=\"btn btn-primary\">\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"album\" class=\"artist-box\">\r\n\r\n    <div id=\"album-head-card\">\r\n        <div class=\"image\">\r\n            <img src=\"{{url + 'get-image-album/' + album.image}}\" />\r\n        </div>\r\n        <div class=\"data\">\r\n            <h1>{{album.name}}</h1>\r\n            <h1>\r\n                <strong>{{album.artist.name}}</strong>\r\n            </h1>\r\n            <p>{{album.year}}</p>\r\n            <p>{{album.definition}}</p>\r\n\r\n            <a [routerLink]=\"['/crear-tema', album._id]\" class=\"btn btn-success\" *ngIf=\"identity.role == 'ROLE_ADMIN'\">\r\n                Añadir Cancion\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div id=\"gallery-songs\" *ngIf=\"songs\">\r\n        <!-- Listar los songs -->\r\n        <ul class=\"songs-list row\">\r\n            <li *ngFor=\"let song of songs\" class=\"col-12 song-item\">\r\n                <div class=\"title\">\r\n                    <a class=\"btn btn-play btn-success\" (click)=startPlayer(song)>\r\n                        <!-- <span> -->\r\n                            <img class = \"btn-icon\" src=\"../../assets/images/play.png\" alt=\"\">\r\n                        <!-- </span> -->\r\n                    </a>\r\n                    {{song.number + '. ' + song.name + ' - ' + song.duration}}\r\n\r\n                    <div class=\"buttons\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\">\r\n                        <a [routerLink]=\"['/editar-tema', song._id]\" class=\"btn btn-warning\">Editar</a>\r\n                        <a (click)=\"onDeleteConfirm(song._id)\" class=\"btn btn-danger\">Borrar</a>\r\n                    </div>\r\n                    <div class=\"seguro seguro-song\" *ngIf=\"confirmado == song._id\">\r\n                        <a (click)=\"onDeleteSong(song._id)\" class=\"btn btn-warning\">Eliminar</a>\r\n                        <a (click)=\"onCancelSong()\" class=\"btn btn-danger\">Cancelar</a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\" class=\"artist-box\">\r\n\r\n    <div id=\"artist-head-card\">\r\n        <div class=\"image\">\r\n            <img src=\"{{url + 'get-image-artist/' + artist.image}}\" *ngIf=\"artist.image && artist.image !== 'null'\" />\r\n        </div>\r\n        <div class=\"data\">\r\n            <h1>{{artist.name}}</h1>\r\n            <p class=\"definition\">{{artist.definition}}</p>\r\n\r\n            <a *ngIf=\"identity.role =='ROLE_ADMIN'\" [routerLink]=\"['/crear-album', artist._id]\" class=\"btn btn-dark\">Añadir Album</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div id=\"gallery-albums\" *ngIf=\"albums\">\r\n        <!-- Listar los Albums -->\r\n        <ul class=\"album-list row\">\r\n            <li *ngFor=\"let album of albums\" class=\"col-lg-3 mt-5 mb-5 album-item\">\r\n                <div class=\"album-image\">\r\n                    <img src=\"{{url + 'get-image-album/' + album.image}}\" />\r\n                </div>\r\n                <div class=\"album-name\">\r\n                    <p>\r\n                        <a [routerLink]=\"['/album', album._id]\">\r\n                            {{album.title}}\r\n                        </a>\r\n                    </p>\r\n                    <p>\r\n                        <a [routerLink]=\"['/artista', album.artist._id]\">\r\n                            {{album.artist.name}}\r\n                        </a>\r\n                    </p>\r\n                    <div class=\"buttons\">\r\n                        <a [routerLink]=\"['/editar-album', album._id]\" class=\"btn btn-sm btn-warning\">\r\n                            Editar</a>\r\n                        <a (click)=\"onDeleteConfirm(album._id)\" class=\"btn btn-sm btn-danger\">\r\n                            Borrar</a>\r\n                    </div>\r\n                    <div class=\"seguro\" *ngIf=\"confirmado == album._id\">\r\n                        <a (click)=\"onDeleteAlbum(album._id)\" class=\"btn btn-sm btn-danger\">\r\n                            Eliminar</a>\r\n                        <a (click)=\"onCancelAlbum()\" class=\"btn btn-sm btn-success\">\r\n                            Cancelar</a>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"identity\" class=\" container row\">\r\n    <div *ngIf=\"identity\" class=\"head-page col-12\">\r\n\r\n            <h1>{{titulo}}</h1> \r\n            <a [routerLink]=\"['/crear-artista']\" *ngIf=\"identity && identity.role == 'ROLE_ADMIN'\" class=\"btn btn-light\">\r\n                Añadir Artista\r\n            </a>\r\n    <div class=\"col-12\">\r\n        <ul class=\"pagination pull-right\">\r\n            <li>\r\n                <a [routerLink]=\"['/artistas', prev_page]\" class=\"btn btn-sm btn-outline-dark\">&laquo;</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/artistas', next_page]\" class=\"btn btn-sm btn-outline-dark\">&raquo;</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"clearflix\"></div>\r\n    <div class=\"col-12\">\r\n        <ul class=\"artist-list row\" *ngIf=\"identity\">\r\n            <li *ngFor=\"let artist of artists\" class=\"artist-item col-3\">\r\n                <div class=\"artist-image\">\r\n                    <img src=\"{{url + 'get-image-artist/' + artist.image}}\" />\r\n                </div>\r\n                <div class=\"artist-name\">\r\n                    <a [routerLink]=\"['/artista', artist._id]\">\r\n                        {{artist.name}}\r\n                    </a>\r\n                     <div class=\"buttons\">\r\n                       <a [routerLink]=\"['/editar-artista', artist._id]\" class = \"btn btn-sm btn-warning\">\r\n                        Editar</a>\r\n                       <a (click) = \"onDeleteConfirm(artist._id)\" class = \"btn btn-sm btn-danger\">\r\n                        Borrar</a>\r\n                     </div>\r\n                     <div class=\"seguro\" *ngIf = \"confirmado == artist._id\">\r\n                        <a (click)=\"onDeleteArtist(artist._id)\" class=\"btn btn-sm btn-danger\">\r\n                            Eliminar</a>\r\n                        <a (click)=\"onCancelArtist()\" class=\"btn btn-sm btn-success\">\r\n                            Cancelar</a>\r\n                     </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n    \r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"row-9 d-flex justify-content-center\">\r\n    <div class=\"jumbotron\">\r\n        <h1 class=\"display-4\">Bienvenido a MUSIFY</h1>\r\n        <p class=\"lead\">Escucha a tus artistas favoritos y empieza a a descubrir hits :D</p>\r\n        <hr class=\"my-4\">\r\n        <p class=\"lead\">\r\n            <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/artistas',1]\" role=\"button\">Ver Artistas</a>\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\r\n    <h1>{{titulo}}</h1>\r\n    <div *ngIf=\"alertMessage\">\r\n        <div class=\"alert alert-info\" role=\"alert\">\r\n            {{alertMessage}}\r\n        </div>\r\n    </div>\r\n    <form #userUpdateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-md-10\">\r\n        <p>\r\n            <label>Nombre:</label>\r\n            <input type=\"text\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"user.name\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!name.valid && name.touched\">\r\n                El nombre es requerido\r\n            </span>\r\n        </p>\r\n        <p>\r\n            <label>Apellidos:</label>\r\n            <input type=\"text\" #surname=\"ngModel\" name=\"surname\" [(ngModel)]=\"user.surname\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!surname.valid && surname.touched\">\r\n                El Apellido es requerido\r\n            </span>\r\n        </p>\r\n        <p>\r\n            <label>Correo Electrónico:</label>\r\n            <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"user.email\" class=\"form-control\" required/>\r\n            <span *ngIf=\"!email.valid && email.touched\">\r\n                El email es requerido\r\n            </span>\r\n        </p>\r\n        <div class=\"image_for_edit\">\r\n            <img src=\"{{url + 'get-image-user/' + user.image}}\" style=\"width: 50px;\">\r\n        </div>\r\n        <div class=\"image_for_edit\" *ngIf = \"user.image && user.image != 'null'\">\r\n            <img src=\"\" />\r\n        </div>\r\n        <p>\r\n            <label>Sube tu foto:</label>\r\n            <input type=\"file\" placeholder=\"Subir imagen...\" (change) = \"fileChangeEvent($event)\" />\r\n        </p>\r\n        <input type=\"submit\" value=\"Actualizar mis datos\" class=\"btn btn-primary\">\r\n    </form>\r\n</div>"

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ })

},[728]);
//# sourceMappingURL=main.bundle.map