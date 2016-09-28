"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require('@angular/http');
var HttpInterceptor = (function (_super) {
    __extends(HttpInterceptor, _super);
    function HttpInterceptor(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    HttpInterceptor.prototype.getToken = function () {
        var usr = localStorage.getItem('currentUser');
        if (usr) {
            return "?access_token=" + JSON.parse(usr).token;
        }
        return null;
    };
    HttpInterceptor.prototype.post = function (url, body, options) {
        url = "" + url + this.getToken();
        return _super.prototype.post.call(this, url, body, options);
    };
    return HttpInterceptor;
}(http_1.Http));
exports.HttpInterceptor = HttpInterceptor;
//# sourceMappingURL=http-interceptor.service.js.map