/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { Nft } from "./Nft";

const bytecode = decompressBytecode("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");

export class NftFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, Nft.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: Nft.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<Nft>> {
    const factory = new NftFactory(wallet);
    return factory.deploy(options);
  }
}
