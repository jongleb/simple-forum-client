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
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var message_list_component_1 = require('./message-list.component');
var message_routing_1 = require("./message.routing");
var message_service_1 = require("./message.service");
var message_form_component_1 = require("./message-form.component");
var message_item_component_1 = require("./message-item.component");
var message_create_component_1 = require("./message-create.component");
var message_edit_component_1 = require("./message-edit.component");
var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, message_routing_1.routing],
            declarations: [
                message_list_component_1.MessageListComponent,
                message_form_component_1.MessageFormComponent,
                message_item_component_1.MessageItemComponent,
                message_create_component_1.MessageCreateComponent,
                message_edit_component_1.MessageEditComponent
            ],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map