import { AbstractConnector } from './connectors';
import { Storage } from './storage';
import { ProviderType, ChainId, ConnectionResponse, Provider } from './types';
import './declarations';
export declare class ConnectionManager {
    storage: Storage;
    connector?: AbstractConnector;
    constructor(storage: Storage);
    connect(providerType: ProviderType, chainId?: ChainId): Promise<ConnectionResponse>;
    tryPreviousConnection(): Promise<ConnectionResponse>;
    getAvailableProviders(): ProviderType[];
    disconnect(): Promise<void>;
    getProvider(): Promise<Provider>;
    createProvider(providerType: ProviderType, chainId?: ChainId): Promise<Provider>;
    getConnector(providerType: ProviderType, chainId: ChainId): AbstractConnector;
    private getConnectionData;
    private setConnectionData;
    private isClosableConnector;
    private toProvider;
    private isLegacyProvider;
}
export declare const connection: ConnectionManager;
