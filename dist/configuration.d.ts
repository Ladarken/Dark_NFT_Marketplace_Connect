import { ChainId } from './types';
export declare function getConfiguration(): Readonly<{
    storageKey: string;
    injected: {};
    formatic: {
        apiKeys: {
            [ChainId.MAINNET]: string;
            [ChainId.ROPSTEN]: string;
            [ChainId.RINKEBY]: string;
            [ChainId.KOVAN]: string;
        };
    };
    wallet_connect: {
        urls: {
            [ChainId.MAINNET]: string;
            [ChainId.ROPSTEN]: string;
            [ChainId.RINKEBY]: string;
            [ChainId.KOVAN]: string;
        };
    };
}>;
