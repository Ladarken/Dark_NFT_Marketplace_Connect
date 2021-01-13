"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const configuration = Object.freeze({
    storageKey: 'decentraland-connect-storage-key',
    [types_1.ProviderType.INJECTED]: {},
    [types_1.ProviderType.FORTMATIC]: {
        apiKeys: {
            [types_1.ChainId.MAINNET]: 'pk_live_D7297F51E9776DD2',
            [types_1.ChainId.ROPSTEN]: 'pk_test_198DDD3CA646DE2F',
            [types_1.ChainId.RINKEBY]: 'pk_test_198DDD3CA646DE2F',
            [types_1.ChainId.KOVAN]: 'pk_test_198DDD3CA646DE2F',
            [types_1.ChainId.MATIC]: 'pk_live_D7297F51E9776DD2'
        }
    },
    [types_1.ProviderType.WALLET_CONNECT]: {
        urls: {
            [types_1.ChainId.MAINNET]: 'https://mainnet.mycustomnode.com',
            [types_1.ChainId.ROPSTEN]: 'https://ropsten.mycustomnode.com',
            [types_1.ChainId.RINKEBY]: 'https://ropsten.mycustomnode.com',
            [types_1.ChainId.KOVAN]: 'https://ropsten.mycustomnode.com',
            [types_1.ChainId.MATIC]: 'https://rpc-mainnet.matic.network'
        }
    }
});
function getConfiguration() {
    return configuration;
}
exports.getConfiguration = getConfiguration;
//# sourceMappingURL=configuration.js.map