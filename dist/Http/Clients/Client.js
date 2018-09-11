"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var typescript_1 = require("@leebrooks3/typescript");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    /**
     * Sets the client id & secret and configures the clients base url.
     */
    function Client(clientId, clientSecret, serverUrl) {
        var _this = _super.call(this, {
            baseURL: serverUrl
        }) || this;
        _this.clientId = clientId;
        _this.clientSecret = clientSecret;
        return _this;
    }
    /** @inheritDoc */
    Client.prototype.getClientId = function () {
        return this.clientId;
    };
    /** @inheritDoc */
    Client.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    return Client;
}(typescript_1.Client));
exports["default"] = Client;
//# sourceMappingURL=Client.js.map