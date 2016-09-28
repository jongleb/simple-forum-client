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
var MessageListComponent = (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
        this.loading = false;
    }
    MessageListComponent.prototype.onDeleted = function (id) {
        var _this = this;
        this.messageService.deleteMessageById(id)
            .then(function (res) {
            if (res.count === 1) {
                _this.getMessages();
            }
        });
    };
    MessageListComponent.prototype.getMessages = function () {
        var _this = this;
        this.loading = true;
        this.messageService.getMessages()
            .then(function (messages) {
            _this.messages = messages;
            _this.loading = false;
        });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageListComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/app/message/message-list.component.html',
            styleUrls: ['src/app/message/message.component.css']
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=message-list.component.js.map