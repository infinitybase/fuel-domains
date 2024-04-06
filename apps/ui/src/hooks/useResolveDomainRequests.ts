import { resolver } from '@bako-id/sdk';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';
import type { ResolverDomainPayload, ResolverReturn } from '../types';

const useResolveDomainRequests = (
  domain: string,
  options?: UseMutationOptions<ResolverReturn, unknown, ResolverDomainPayload>
) => {
  return useMutation({
    mutationKey: ['registerDomain'],
    mutationFn: () => resolver(domain),
    ...options,
  });
};

export { useResolveDomainRequests };