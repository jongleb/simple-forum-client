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
var message_1 = require("../models/message");
var router_1 = require('@angular/router');
var MessageItemComponent = (function () {
    function MessageItemComponent(router) {
        this.router = router;
        this.onDeleted = new core_1.EventEmitter();
    }
    MessageItemComponent.prototype.remove = function (id) {
        this.onDeleted.emit(id);
    };
    MessageItemComponent.prototype.edit = function (id) {
        this.router.navigate([("/messages/" + id + "/edit")]);
    };
    MessageItemComponent.prototype.ngOnInit = function () {
        var storeUsr = localStorage.getItem('currentUser');
        if (!storeUsr) {
            this.userId = null;
        }
        else {
            this.userId = JSON.parse(storeUsr).userId;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageItemComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageItemComponent.prototype, "onDeleted", void 0);
    MessageItemComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/app/message/message-item.component.html',
            styleUrls: ['src/app/message/message.component.css'],
            selector: 'message-item'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MessageItemComponent);
    return MessageItemComponent;
}());
exports.MessageItemComponent = MessageItemComponent;
//# sourceMappingURL=message-item.component.js.map