import * as fuels from 'fuels';
import { ReactElement } from 'react';

export enum Coin {
  USD = 'USD',
  ETH = 'ETH',
}

export interface Domains {
  name: string;
  period: number;
}

type FuelDomainInput = { owner: string; resolver: string };
type FuelDomainOutput = FuelDomainInput;

type Nullable<T> = T | null;
type Domain = FuelDomainOutput & {
  name: string;
};
export type ResolverReturn = Nullable<Domain>;

export interface IChildren {
  children?: ReactElement | ReactElement[];
}

export interface RegisterDomainResponse {
  gasUsed: fuels.BN;
  transactionId: string;
  transactionResult: fuels.TransactionResult<void>;
  transactionResponse: fuels.TransactionResponse;
}

/**
 * Represents the payload for registering a domain.
 *
 * @param {string} domain - The domain name to be registered.
 * @param {fuels.Account} account - The account from Fuels to register the domain.
 * @param {string} resolver - The resolver to use for the domain. (Normally using the wallet address in B256).
 */

export interface RegisterDomainPayload {
  domain: string;
  resolver: string;
  account: fuels.Account;
}

/**
 * Resolves domain using the given parameters.
 *
 * It's a obligatory to pass the domain to resolve.
 * @param {string} domain - The domain to resolve.
 *
 * Optional parameters:
 * @param {fuels.Account} account - The account from Fuels to register the domain.
 * @param {fuels.Provider} provider - The provider from Fuels to register the domain.
 * @param {string} providerURL - The provider URL from Fuels to register the domain.
 *
 * @returns {Promise<ResolverReturn>} - A promise that resolves to the result of resolving the domain.
 */
export interface ResolverDomainPayload {
  domain: string;
  account?: fuels.Account;
  provider?: fuels.Provider;
  providerURL?: string;
}

export interface ResolverDomainResponse {
  name: string;
}
