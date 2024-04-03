/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.78.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
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

import type { Option, Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export type PermissionInput = Enum<{ Authorized: IdentityInput, Unauthorized: [], NotFound: [] }>;
export type PermissionOutput = Enum<{ Authorized: IdentityOutput, Unauthorized: [], NotFound: [] }>;
export enum RegistryContractErrorInput { StorageNotInitialized = 'StorageNotInitialized', AlreadyInitialized = 'AlreadyInitialized', DomainNotAvailable = 'DomainNotAvailable', IncorrectAssetId = 'IncorrectAssetId', InvalidAmount = 'InvalidAmount', DomainNotValid = 'DomainNotValid' };
export enum RegistryContractErrorOutput { StorageNotInitialized = 'StorageNotInitialized', AlreadyInitialized = 'AlreadyInitialized', DomainNotAvailable = 'DomainNotAvailable', IncorrectAssetId = 'IncorrectAssetId', InvalidAmount = 'InvalidAmount', DomainNotValid = 'DomainNotValid' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type FuelDomainInput = { owner: string, resolver: string };
export type FuelDomainOutput = FuelDomainInput;
export type RawBytesInput = { ptr: BigNumberish, cap: BigNumberish };
export type RawBytesOutput = { ptr: BN, cap: BN };

interface RegistryContractAbiInterface extends Interface {
  functions: {
    constructor: FunctionFragment;
    register: FunctionFragment;
    resolver: FunctionFragment;
    reverse_name: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'constructor', values: [AddressInput, ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'register', values: [StdString, string]): Uint8Array;
  encodeFunctionData(functionFragment: 'resolver', values: [StdString]): Uint8Array;
  encodeFunctionData(functionFragment: 'reverse_name', values: [string]): Uint8Array;

  decodeFunctionData(functionFragment: 'constructor', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'register', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'resolver', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'reverse_name', data: BytesLike): DecodedValue;
}

export class RegistryContractAbi extends Contract {
  interface: RegistryContractAbiInterface;
  functions: {
    constructor: InvokeFunction<[owner: AddressInput, storage_id: ContractIdInput], void>;
    register: InvokeFunction<[name: StdString, resolver: string], void>;
    resolver: InvokeFunction<[name: StdString], Option<FuelDomainOutput>>;
    reverse_name: InvokeFunction<[resolver: string], StdString>;
  };
}
