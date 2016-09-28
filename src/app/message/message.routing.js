"use strict";
var router_1 = require('@angular/router');
var message_list_component_1 = require("./message-list.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var message_create_component_1 = require("./message-create.component");
var message_edit_component_1 = require("./message-edit.component");
var routes = [
    { path: 'messages/list', component: message_list_component_1.MessageListComponent },
    { path: 'messages/create', component: message_create_component_1.MessageCreateComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'messages/:id/edit', component: message_edit_component_1.MessageEditComponent, canActivate: [auth_guard_service_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=message.routing.js.map