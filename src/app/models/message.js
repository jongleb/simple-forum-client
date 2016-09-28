"use strict";
var Message = (function () {
    function Message(header, body, id) {
        if (id === void 0) { id = null; }
        this.header = header;
        this.body = body;
        this.id = id;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=message.js.map