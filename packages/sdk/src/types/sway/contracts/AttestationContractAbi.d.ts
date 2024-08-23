/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import type {
  Contract,
  FunctionFragment,
  Interface,
  InvokeFunction,
  StdString,
} from 'fuels';

import type { Option } from './common';

export enum AttestationContractErrorInput {
  AttesterNotSet = 'AttesterNotSet',
  AttesterMismatch = 'AttesterMismatch',
  OnlyAttester = 'OnlyAttester',
  AttestationContractAlreadyInitialized = 'AttestationContractAlreadyInitialized',
}
export enum AttestationContractErrorOutput {
  AttesterNotSet = 'AttesterNotSet',
  AttesterMismatch = 'AttesterMismatch',
  OnlyAttester = 'OnlyAttester',
  AttestationContractAlreadyInitialized = 'AttestationContractAlreadyInitialized',
}

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AttestationInputInput = {
  id: StdString;
  app: StdString;
  handle: StdString;
};
export type AttestationInputOutput = AttestationInputInput;

export interface AttestationContractAbiInterface extends Interface {
  functions: {
    attest: FunctionFragment;
    verify: FunctionFragment;
    attester: FunctionFragment;
    constructor: FunctionFragment;
    set_attester: FunctionFragment;
  };
}

export class AttestationContractAbi extends Contract {
  interface: AttestationContractAbiInterface;
  functions: {
    attest: InvokeFunction<[input: AttestationInputInput], string>;
    verify: InvokeFunction<[attestation_key: string], Option<string>>;
    attester: InvokeFunction<[], AddressOutput>;
    constructor: InvokeFunction<[attester: AddressInput], void>;
    set_attester: InvokeFunction<[attester: AddressInput], void>;
  };
}
