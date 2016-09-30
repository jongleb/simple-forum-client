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
var message_service_1 = require("./message.service");
var message_1 = require("../models/message");
var router_1 = require('@angular/router');
var MessageEditComponent = (function () {
    function MessageEditComponent(messageService, router, route) {
        this.messageService = messageService;
        this.router = router;
        this.route = route;
        this.message = new message_1.Message(null, null);
    }
    MessageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.id = id;
            _this.messageService.getMessageById(id).then(function (res) {
                _this.message = res;
            })
                .catch(function (res) {
                _this.router.navigate(['/messages/list']);
            });
        });
    };
    MessageEditComponent.prototype.onSubmited = function () {
        var _this = this;
        this.messageService.updateMessage(this.id, this.message)
            .then(function (res) {
            _this.router.navigate(['/messages/list']);
        })
            .catch(function (res) {
            console.log(res);
        });
    };
    MessageEditComponent = __decorate([
        core_1.Component({
            template: "<message-form (onSubmited)=\"onSubmited($event)\" [model]=\"message\"></message-form>"
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router, router_1.ActivatedRoute])
    ], MessageEditComponent);
    return MessageEditComponent;
}());
exports.MessageEditComponent = MessageEditComponent;
//# sourceMappingURL=message-edit.component.js.map