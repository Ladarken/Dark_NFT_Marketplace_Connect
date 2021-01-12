/// <reference types="node" />
import { AbstractConnector } from '@web3-react/abstract-connector';
import { EventEmitter } from 'events';
export declare enum ProviderType {
    INJECTED = "injected",
    FORTMATIC = "formatic",
    WALLET_CONNECT = "wallet_connect"
}
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    KOVAN = 42
}
export declare type RequestArguments = {
    readonly method: string;
    readonly params?: readonly unknown[] | object;
};
export interface Provider extends EventEmitter {
    request: (reqArgs: RequestArguments) => Promise<unknown>;
    send: (method: RequestArguments['method'], params: RequestArguments['params']) => Promise<unknown>;
}
export declare type LegacyProvider = Pick<Provider, 'send'>;
export declare type ConnectionData = {
    providerType: ProviderType;
    chainId: ChainId;
};
export declare type ConnectionResponse = {
    provider: Provider;
    chainId: ChainId;
    account: null | string;
};
export interface ClosableConnector extends AbstractConnector {
    close: () => Promise<void>;
}
