import { ConnectorUpdate } from '@web3-react/types'
import { AbstractConnector } from '../src/connectors/AbstractConnector'
import { ChainId } from '../src/types'
import { Storage } from '../src/storage'

export class StubConnector extends AbstractConnector {
  async activate(): Promise<ConnectorUpdate> {
    return {
      provider: {
        send: () => {
          // no-op
        }
      },
      account: '0xdeadbeef'
    }
  }

  async getProvider(): Promise<any> {
    return {}
  }

  async getChainId(): Promise<number | string> {
    return ChainId.MAINNET
  }

  async getAccount(): Promise<null | string> {
    return null
  }

  deactivate(): void {
    // no-op
  }
}

export class StubClosableConnector extends StubConnector {
  async close() {
    // no-op
  }
}

export class StubStorage extends Storage {
  cache: Record<string, any> = {}

  get(key: string) {
    return this.cache[key]
  }

  set(key: string, value: any) {
    this.cache[key] = value
  }

  clear() {
    this.cache = {}
  }
}
