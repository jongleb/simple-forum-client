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
var constants_1 = require("../constants");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messagesUrl = 'messages';
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get("" + constants_1.Constants.API + this.messagesUrl)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.getMessageById = function (id) {
        return this.http.get("" + constants_1.Constants.API + this.messagesUrl + "/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.sendMessage = function (msg) {
        var body = JSON.stringify(msg), headers = new http_1.Headers({
            'Content-Type': 'application/json'
        }), options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("" + constants_1.Constants.API + this.messagesUrl + "?access_token=" + JSON.parse(localStorage.getItem('currentUser')).id, body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.updateMessage = function (id, msg) {
        var body = JSON.stringify(msg), headers = new http_1.Headers({
            'Content-Type': 'application/json'
        }), options = new http_1.RequestOptions({ headers: headers });
        return this.http.put("" + constants_1.Constants.API + this.messagesUrl + "/" + id + "?access_token=" + JSON.parse(localStorage.getItem('currentUser')).id, body, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.deleteMessageById = function (id) {
        return this.http.delete("" + constants_1.Constants.API + this.messagesUrl + "/" + id + "?access_token=" + JSON.parse(localStorage.getItem('currentUser')).id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.handleError = function (error) {
        console.log(error.status);
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map