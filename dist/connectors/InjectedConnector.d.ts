import { InjectedConnector as BaseInjectedConnector } from '@web3-react/injected-connector';
import { ChainId } from '../types';
export declare class InjectedConnector extends BaseInjectedConnector {
    constructor(chainId: ChainId);
}
