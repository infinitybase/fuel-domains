/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import type {
  BigNumberish,
  BN,
  Bytes,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
  StdString,
} from 'fuels';

import type { Option, Enum, Vec } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export type PermissionInput = Enum<{ Authorized: IdentityInput, Unauthorized: [], NotFound: [] }>;
export type PermissionOutput = Enum<{ Authorized: IdentityOutput, Unauthorized: [], NotFound: [] }>;
export enum StorageContractErrorInput { AlreadyInitialized = 'AlreadyInitialized' };
export enum StorageContractErrorOutput { AlreadyInitialized = 'AlreadyInitialized' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;

interface StorageContractAbiInterface extends Interface {
  functions: {
    change: FunctionFragment;
    constructor: FunctionFragment;
    get: FunctionFragment;
    get_all: FunctionFragment;
    get_implementation: FunctionFragment;
    get_owner: FunctionFragment;
    get_primary: FunctionFragment;
    set: FunctionFragment;
    set_implementation: FunctionFragment;
    set_owner: FunctionFragment;
    set_primary: FunctionFragment;
  };
}

export class StorageContractAbi extends Contract {
  interface: StorageContractAbiInterface;
  functions: {
    change: InvokeFunction<[key: string, bytes_domain: Bytes], void>;
    constructor: InvokeFunction<[owner: AddressInput, registry_id: ContractIdInput], void>;
    get: InvokeFunction<[key: string], Option<Bytes>>;
    get_all: InvokeFunction<[owner: string], Vec<Bytes>>;
    get_implementation: InvokeFunction<[], Option<ContractIdOutput>>;
    get_owner: InvokeFunction<[], Option<AddressOutput>>;
    get_primary: InvokeFunction<[resolver: string], Option<Bytes>>;
    set: InvokeFunction<[key: string, owner: string, bytes_domain: Bytes], void>;
    set_implementation: InvokeFunction<[registry_id: ContractIdInput], void>;
    set_owner: InvokeFunction<[owner: AddressInput], void>;
    set_primary: InvokeFunction<[key: string, value: StdString], void>;
  };
}
