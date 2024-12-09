import { Address } from 'fuels';
import { BakoIDGraphQLSDK } from '../graphql/sdk';

const UI_URL = 'https://app.bako.id';

export enum Networks {
  MAINNET = 9889,
  TESTNET = 0,
}

export type IDRecord = {
  name: string;
  owner: string;
  resolver: string;
  nameHash: string;
  timestamp: string;
  period: number;
  type?: string;
};

export type OffChainData = {
  resolversName: Record<string, string>;
  resolversAddress: Record<string, string>;
  records: Record<string, IDRecord[]>;
};

export type RegisterInput = {
  owner: string;
  domain: string;
  period: number;
  resolver: string;
  transactionId: string;
};

export type ChangeAddressInput = {
  domain: string;
  address: string;
  transactionId: string;
};

export type NetworkName = 'MAINNET' | 'TESTNET';

const resolveNetwork = (chainId: number): NetworkName => {
  switch (chainId) {
    case Networks.MAINNET:
      return 'MAINNET';
    case Networks.TESTNET:
      return 'TESTNET';
    default:
      return 'MAINNET';
  }
};

/**
 * Class representing a client for interacting with the BakoID API.
 */
export class BakoIDClient {
  private client: BakoIDGraphQLSDK;

  /**
   * Creates an instance of BakoIDClient.
   * @param {string} [apiURL] - The RPC URL.
   */
  constructor(apiURL?: string) {
    this.client = new BakoIDGraphQLSDK(apiURL);
  }

  /**
   * Retrieves records associated with a given owner.
   * @param {string} owner - The owner's identifier.
   * @param {number} chainId - The network to resolve on.
   * @returns {Promise<IDRecord[]>} A promise that resolves to the records.
   */
  async records(owner: string, chainId: number): Promise<IDRecord[]> {
    const { data } = await this.client.sdk.records({
      owner: Address.fromString(owner).toB256(),
      network: resolveNetwork(chainId),
    });

    return data.Records.map((r) => ({
      name: r.name,
      owner: r.owner,
      period: r.period,
      resolver: r.resolver,
      nameHash: r.name_hash,
      timestamp: r.timestamp,
    }));
  }

  /**
   * Retrieves the resolver address for a given name.
   * @param {string} name - The name to resolve.
   * @param {number} chainId - The network to resolve on.
   * @returns {Promise<string | null>} A promise that resolves to the resolver address.
   */
  async resolver(name: string, chainId: number) {
    const { data } = await this.client.sdk.resolver({
      name: name.replace('@', ''),
      network: resolveNetwork(chainId),
    });
    const record = data.AddressResolver.at(0);
    return record?.resolver ?? null;
  }

  /**
   * Retrieves the name associated with a given address.
   * @param {string} addr - The address to resolve.
   * @param {number} chainId - The network to resolve on.
   * @returns {Promise<{ name: string }>} A promise that resolves to the name.
   */
  async name(addr: string, chainId: number) {
    const { data } = await this.client.sdk.name({
      address: Address.fromString(addr).toB256(),
      network: resolveNetwork(chainId),
    });
    const record = data.Records.at(0);
    return record?.name ?? null;
  }

  /**
   * Retrieves the profile URL for a given name.
   * @param {string} name - The name to resolve.
   * @returns {string} The profile URL.
   */
  profile(name: string) {
    return `${UI_URL}/profile/${name.replace('@', '')}`;
  }
}
