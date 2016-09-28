"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login/login.component");
exports.routes = [
    { path: '', redirectTo: 'messages/list', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map