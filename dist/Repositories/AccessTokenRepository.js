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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var typescript_1 = require("@leebrooks3/typescript");
var AccessToken_1 = require("../Models/AccessToken");
var AccessTokenRepository = /** @class */ (function (_super) {
    __extends(AccessTokenRepository, _super);
    /**
     * Sets the client instance and the endpoint.
     */
    function AccessTokenRepository(client, endpoint) {
        var _this = _super.call(this, client) || this;
        _this.endpoint = 'oauth/token';
        if (endpoint) {
            _this.endpoint = endpoint;
        }
        return _this;
    }
    /** @inheritDoc */
    AccessTokenRepository.prototype.createUserToken = function (username, password, scope) {
        return __awaiter(this, void 0, void 0, function () {
            var client, attributes;
            return __generator(this, function (_a) {
                client = this.getClient();
                attributes = {
                    client_id: client.getClientId(),
                    client_secret: client.getClientSecret(),
                    grant_type: 'password',
                    password: password,
                    username: username
                };
                if (scope) {
                    attributes.scope = scope;
                }
                return [2 /*return*/, this.create(attributes)];
            });
        });
    };
    /** @inheritDoc */
    AccessTokenRepository.prototype.createClientToken = function (scope) {
        if (scope === void 0) { scope = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var client, attributes;
            return __generator(this, function (_a) {
                client = this.getClient();
                attributes = {
                    client_id: client.getClientId(),
                    client_secret: client.getClientSecret(),
                    grant_type: 'client_credentials'
                };
                if (scope) {
                    attributes.scope = scope;
                }
                return [2 /*return*/, this.create(attributes)];
            });
        });
    };
    /**
     * Creates a new resource.
     *
     * @param {CreateClientTokenRequestInterface|CreateUserTokenRequestInterface} attributes
     * @return {Promise<AccessToken>}
     */
    AccessTokenRepository.prototype.create = function (attributes) {
        return __awaiter(this, void 0, void 0, function () {
            var client, endpoint, response, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.getClient();
                        endpoint = this.getEndpoint();
                        return [4 /*yield*/, client.post(endpoint, attributes)];
                    case 1:
                        response = _a.sent();
                        payload = this.getResponseData(response);
                        return [2 /*return*/, this.makeModel(payload)];
                }
            });
        });
    };
    /** @inheritDoc */
    AccessTokenRepository.prototype.getClient = function () {
        return this.client;
    };
    /** @inheritDoc */
    AccessTokenRepository.prototype.makeModel = function (attributes) {
        return new AccessToken_1["default"]({
            accessToken: attributes.access_token,
            expiresIn: attributes.expires_in,
            refreshToken: attributes.refresh_token,
            tokenType: attributes.token_type
        });
    };
    return AccessTokenRepository;
}(typescript_1.Repository));
exports["default"] = AccessTokenRepository;
//# sourceMappingURL=AccessTokenRepository.js.map