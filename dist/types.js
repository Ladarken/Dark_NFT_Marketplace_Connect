"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProviderType;
(function (ProviderType) {
    ProviderType["INJECTED"] = "injected";
    ProviderType["FORTMATIC"] = "formatic";
    ProviderType["WALLET_CONNECT"] = "wallet_connect";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
    ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
    ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
    ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
    ChainId[ChainId["MATIC"] = 137] = "MATIC";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
//# sourceMappingURL=types.js.map