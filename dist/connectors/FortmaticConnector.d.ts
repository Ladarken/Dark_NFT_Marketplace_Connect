import { FortmaticConnector as BaseFortmaticConnector } from '@web3-react/fortmatic-connector';
import { ChainId } from '../types';
export declare class FortmaticConnector extends BaseFortmaticConnector {
    apiKeys: Record<number, string>;
    constructor(chainId: ChainId);
    getApiKey(): Promise<string>;
}
