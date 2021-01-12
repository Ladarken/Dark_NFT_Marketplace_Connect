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
const walletconnect_connector_1 = require("@web3-react/walletconnect-connector");
const configuration_1 = require("../configuration");
const types_1 = require("../types");
class WalletConnectConnector extends walletconnect_connector_1.WalletConnectConnector {
    constructor(chainId) {
        const { urls } = configuration_1.getConfiguration()[types_1.ProviderType.WALLET_CONNECT];
        const params = {
            rpc: { [chainId]: urls[chainId] },
            qrcode: true,
            pollingInterval: 15000
        };
        super(params);
        this.params = params;
    }
    getRpc() {
        return __awaiter(this, void 0, void 0, function* () {
            const chainId = yield this.getChainId();
            return this.params.rpc[chainId];
        });
    }
    getQrCode() {
        return this.params.qrcode;
    }
    getPollingInterval() {
        return this.params.pollingInterval;
    }
}
exports.WalletConnectConnector = WalletConnectConnector;
//# sourceMappingURL=WalletConnectConnector.js.map