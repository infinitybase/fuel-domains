import { getContractId, Manager, Nft, Registry, Resolver } from '../src';
import { logger, setup } from './utils';

const main = async () => {
  const { provider, wallet } = await setup();

  const managerId = getContractId(provider.url, 'manager');
  const resolverId = getContractId(provider.url, 'resolver');
  const registryId = getContractId(provider.url, 'registry');
  const nftId = getContractId(provider.url, 'nft');

  const manager = new Manager(managerId, wallet);
  const resolver = new Resolver(resolverId, wallet);
  const registry = new Registry(registryId, wallet);
  const nft = new Nft(nftId, wallet);

  try {
    const { value: nftOwner } = await manager.functions.owner().get();

    // @ts-ignore
    if (nftOwner === 'Uninitialized') {
      const nftConstruct = await nft.functions
        .constructor(
          { Address: { bits: wallet.address.toB256() } },
          { ContractId: { bits: registryId } },
        )
        .call();
      await nftConstruct.waitForResult();
      logger.success('NFT construct success!');
    } else if (nftOwner.Initialized) {
      logger.warn('NFT Contract is already initialized.');
    }

    const addAdminCall = await nft.functions
      .add_admin({ ContractId: { bits: registryId } })
      .call();
    await addAdminCall.waitForResult();
    logger.success('NFT admin added to registry!');
  } catch (e) {
    if (e instanceof Error && /CannotReinitialized/.test(e.message)) {
      logger.warn('NFT Contract is already initialized.');
    } else {
      logger.error('NFT construct failed', e);
    }
  }

  try {
    const { value: managerOwner } = await manager.functions.owner().get();

    // @ts-ignore
    if (managerOwner === 'Uninitialized') {
      const managerConstruct = await manager.functions
        .constructor(
          { Address: { bits: wallet.address.toB256() } },
          { ContractId: { bits: registryId } },
        )
        .call();
      await managerConstruct.waitForResult();
      logger.success('Manager construct success!');
    } else if (managerOwner.Initialized) {
      logger.warn('Manager Contract is already initialized.');
    }

    const addAdminCall = await manager.functions
      .add_admin({ ContractId: { bits: registryId } })
      .call();
    await addAdminCall.waitForResult();
    logger.success('Manager admin added to registry!');
  } catch (e) {
    if (e instanceof Error && /CannotReinitialized/.test(e.message)) {
      logger.warn('Manager Contract is already initialized.');
    } else {
      logger.error('Manager construct failed', e);
    }
  }

  try {
    const resolverConstruct = await resolver.functions
      .constructor({ bits: managerId })
      .call();
    await resolverConstruct.waitForResult();
    logger.success('Resolver construct success!');
  } catch (e) {
    if (e instanceof Error && /Contract already initialized/.test(e.message)) {
      logger.warn('Resolver Contract is already initialized.');
    } else {
      logger.error('Resolver construct failed', e);
    }
  }

  try {
    const registryConstruct = await registry.functions
      .constructor(
        { bits: wallet.address.toB256() },
        { bits: managerId },
        { bits: nftId },
      )
      .call();
    await registryConstruct.waitForResult();
    logger.success('Registry construct success!');
  } catch (e) {
    if (e instanceof Error && /CannotReinitialized/.test(e.message)) {
      logger.warn('Registry Contract is already initialized.');
    } else {
      logger.error('Registry construct failed', e);
    }
  }
};

main()
  .then(() => {
    logger.success('Done!');
    process.exit(0);
  })
  .catch((error) => {
    logger.error('Construct failed!', error);
    process.exit(1);
  });
