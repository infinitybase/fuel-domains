'use client';

import { BakoIDClient, RegistryContract, ResolverContract } from '@bako-id/sdk';
import { useQuery } from '@tanstack/react-query';
import { Provider } from 'fuels';

export enum NetworkType {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
  DEV = 'dev',
}

const availableNetworks = {
  [NetworkType.MAINNET]: {
    name: 'Ignition',
    url: '',
    chainId: 9889,
    explorer: 'https://app-mainnet.fuel.network/',
  },
  [NetworkType.TESTNET]: {
    name: 'Fuel Sepolia Testnet',
    url: 'https://testnet.fuel.network/v1/graphql',
    chainId: 0,
    explorer: 'https://app-testnet.fuel.network/',
  },
};

export const networkByChainId = Object.fromEntries(
  Object.values(availableNetworks).map((network) => [network.chainId, network])
);

export const getExplorer = (chainId?: number) => {
  const defaultExplorer = availableNetworks[NetworkType.MAINNET].explorer;

  return networkByChainId[chainId!]?.explorer ?? defaultExplorer;
};

export const useProfile = (domainName: string) => {
  const { data: provider, isLoading: isLoadingProvider } = useQuery({
    queryKey: ['provider', domainName],
    queryFn: async () => Provider.create(process.env.NEXT_PUBLIC_PROVIDER_URL!),
  });

  const { data: addresses, isLoading: isLoadingAddresses } = useQuery({
    queryKey: ['addresses', domainName],
    queryFn: async () => {
      const contract = ResolverContract.create(provider!);

      const owner = await contract.owner(domainName);
      const resolver = await contract.addr(domainName);

      return {
        owner: owner?.ContractId?.bits ?? owner?.Address?.bits,
        resolver: resolver?.ContractId?.bits ?? resolver?.Address?.bits,
      };
    },
    enabled: !!provider,
  });

  const { data: registry, isLoading: isLoadingMetadata } = useQuery({
    queryKey: ['metadata', domainName],
    queryFn: async () => {
      const client = new BakoIDClient(
        provider!,
        process.env.NEXT_PUBLIC_API_URL
      );
      const contract = RegistryContract.create(provider!, client);
      const metadata = await contract.getMetadata(domainName);
      const { ttl, timestamp } = await contract.getDates(domainName);
      const gracePeriod = new Date(ttl);
      gracePeriod.setDate(gracePeriod.getDate() + 90);

      return {
        ttl,
        timestamp,
        gracePeriod,
        metadata: Object.entries(metadata).map(([key, value]) => ({
          key,
          value,
        })),
      };
    },
    enabled: !!provider,
  });

  const explorerUrl = getExplorer(provider?.getChainId());
  const { owner, resolver } = addresses ?? {};

  const { metadata, ...dates } = registry ?? {};

  const isLoading =
    isLoadingProvider || isLoadingAddresses || isLoadingMetadata;

  return {
    provider,
    isLoading,
    metadata,
    dates,
    owner,
    resolver,
    explorerUrl,
  };
};