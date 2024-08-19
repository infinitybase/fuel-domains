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

import type { Enum } from "./common";

export enum MetadataContractErrorInput { StorageNotInitialized = 'StorageNotInitialized', AlreadyInitialized = 'AlreadyInitialized', InvalidPermission = 'InvalidPermission', InvalidDomain = 'InvalidDomain' };
export enum MetadataContractErrorOutput { StorageNotInitialized = 'StorageNotInitialized', AlreadyInitialized = 'AlreadyInitialized', InvalidPermission = 'InvalidPermission', InvalidDomain = 'InvalidDomain' };

export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type MetadataRegisteredEventInput = { metadata_id: string, metadata_key: StdString, metadata_value: StdString };
export type MetadataRegisteredEventOutput = MetadataRegisteredEventInput;

interface MetadataContractAbiInterface extends Interface {
  functions: {
    constructor: FunctionFragment;
    get: FunctionFragment;
    get_all: FunctionFragment;
    save: FunctionFragment;
  };
}

export class MetadataContractAbi extends Contract {
  interface: MetadataContractAbiInterface;
  functions: {
    constructor: InvokeFunction<[storage_id: ContractIdInput], void>;
    get: InvokeFunction<[handle_name: StdString, key: StdString], StdString>;
    get_all: InvokeFunction<[handle_name: StdString], Bytes>;
    save: InvokeFunction<[handle_name: StdString, key: StdString, value: StdString], void>;
  };
}
