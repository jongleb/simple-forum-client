"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var constants_1 = require("../constants");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.isLoggedIn = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (login) {
        return this.http.post(constants_1.Constants.API + "users/login", JSON.stringify(login), { headers: this.headers })
            .map(function (response) {
            if (response.json().id) {
                localStorage.setItem('currentUser', JSON.stringify(response.json()));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthService.prototype.register = function (data) {
        return this.http
            .post(constants_1.Constants.API + "users", JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        return this.http
            .post(constants_1.Constants.API + "users/logout/?access_token=" + JSON.parse(localStorage.getItem('currentUser')).id, {}, {})
            .toPromise();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map