"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fortmatic_connector_1 = require("@web3-react/fortmatic-connector");
const configuration_1 = require("../configuration");
const types_1 = require("../types");
class FortmaticConnector extends fortmatic_connector_1.FortmaticConnector {
    constructor(chainId) {
        const { apiKeys } = configuration_1.getConfiguration()[types_1.ProviderType.FORTMATIC];
        super({ chainId, apiKey: apiKeys[chainId] });
        this.apiKeys = apiKeys;
    }
    getApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const chainId = yield this.getChainId();
            return this.apiKeys[chainId];
        });
    }
}
exports.FortmaticConnector = FortmaticConnector;
//# sourceMappingURL=FortmaticConnector.js.map