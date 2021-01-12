import { WalletConnectConnector as BaseWalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ChainId } from '../types';
export declare class WalletConnectConnector extends BaseWalletConnectConnector {
    params: {
        rpc: Record<number, string>;
        qrcode: boolean;
        pollingInterval: number;
    };
    constructor(chainId: ChainId);
    getRpc(): Promise<string>;
    getQrCode(): boolean;
    getPollingInterval(): number;
}
