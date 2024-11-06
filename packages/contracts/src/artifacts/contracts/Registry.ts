/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.2
  Fuel-Core version: 0.40.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  Bytes,
  FunctionFragment,
  InvokeFunction,
  StdString,
} from 'fuels';

import type { Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum NameValidationErrorInput { InvalidLenght = 'InvalidLenght', InvalidChars = 'InvalidChars', IsEmpty = 'IsEmpty' };
export enum NameValidationErrorOutput { InvalidLenght = 'InvalidLenght', InvalidChars = 'InvalidChars', IsEmpty = 'IsEmpty' };
export enum RegistryContractErrorInput { IncorrectAssetId = 'IncorrectAssetId', InvalidAmount = 'InvalidAmount', AlreadyMinted = 'AlreadyMinted', AlreadyInitialized = 'AlreadyInitialized', ContractNotBeZero = 'ContractNotBeZero', ContractNotInitialized = 'ContractNotInitialized' };
export enum RegistryContractErrorOutput { IncorrectAssetId = 'IncorrectAssetId', InvalidAmount = 'InvalidAmount', AlreadyMinted = 'AlreadyMinted', AlreadyInitialized = 'AlreadyInitialized', ContractNotBeZero = 'ContractNotBeZero', ContractNotInitialized = 'ContractNotInitialized' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type NewNameEventInput = { name: StdString, name_hash: string, owner: IdentityInput, resolver: IdentityInput, asset_id: AssetIdInput };
export type NewNameEventOutput = { name: StdString, name_hash: string, owner: IdentityOutput, resolver: IdentityOutput, asset_id: AssetIdOutput };

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "enum RegistryContractError",
      "concreteTypeId": "80b09233651e30b7fa04b552a421e25fc4ea6dd8c3c8051ad05c9c2b4f6a13ce",
      "metadataTypeId": 1
    },
    {
      "type": "enum lib::validations::NameValidationError",
      "concreteTypeId": "3d558a9e1ceda727203eccf236db03255f30ce308181b93340f5ffb2e19831d8",
      "metadataTypeId": 2
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 3
    },
    {
      "type": "struct events::NewNameEvent",
      "concreteTypeId": "de123b38a3d90c3cc5a3b578a47a6105e998b48d85f6fcf34c1b4b3907806a75",
      "metadataTypeId": 5
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 10
    },
    {
      "type": "struct std::string::String",
      "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c",
      "metadataTypeId": 11
    },
    {
      "type": "u16",
      "concreteTypeId": "29881aad8730c5ab11d275376323d8e4ff4179aae8ccb6c13fe4902137e162ef"
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "enum RegistryContractError",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "IncorrectAssetId",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "InvalidAmount",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AlreadyMinted",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AlreadyInitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ContractNotBeZero",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ContractNotInitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum lib::validations::NameValidationError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "InvalidLenght",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "InvalidChars",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "IsEmpty",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Address",
          "typeId": 6
        },
        {
          "name": "ContractId",
          "typeId": 10
        }
      ]
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 4
    },
    {
      "type": "struct events::NewNameEvent",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "name",
          "typeId": 11
        },
        {
          "name": "name_hash",
          "typeId": 0
        },
        {
          "name": "owner",
          "typeId": 3
        },
        {
          "name": "resolver",
          "typeId": 3
        },
        {
          "name": "asset_id",
          "typeId": 7
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::bytes::Bytes",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "buf",
          "typeId": 9
        },
        {
          "name": "len",
          "typeId": 12
        }
      ]
    },
    {
      "type": "struct std::bytes::RawBytes",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "ptr",
          "typeId": 4
        },
        {
          "name": "cap",
          "typeId": 12
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::string::String",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "bytes",
          "typeId": 8
        }
      ]
    },
    {
      "type": "u64",
      "metadataTypeId": 12
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        },
        {
          "name": "resolver",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "period",
          "concreteTypeId": "29881aad8730c5ab11d275376323d8e4ff4179aae8ccb6c13fe4902137e162ef"
        }
      ],
      "name": "register",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write",
            "read"
          ]
        },
        {
          "name": "payable",
          "arguments": []
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "manager_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "token_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        }
      ],
      "name": "constructor",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "9273072382193316023",
      "concreteTypeId": "80b09233651e30b7fa04b552a421e25fc4ea6dd8c3c8051ad05c9c2b4f6a13ce"
    },
    {
      "logId": "4419591021028812583",
      "concreteTypeId": "3d558a9e1ceda727203eccf236db03255f30ce308181b93340f5ffb2e19831d8"
    },
    {
      "logId": "16001917540453911612",
      "concreteTypeId": "de123b38a3d90c3cc5a3b578a47a6105e998b48d85f6fcf34c1b4b3907806a75"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "e1a8f7a09ac9a2ed6301cda0a0c44ba28d5361e2617ea7a369d53fd6ffa141b1",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "ef8d07fbe8ff11f8a3d65ab06ca184bacb3f6980dca2238bee8ea814c407e23b",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class RegistryInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    register: FunctionFragment;
    constructor: FunctionFragment;
  };
}

export class Registry extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: RegistryInterface;
  declare functions: {
    register: InvokeFunction<[name: StdString, resolver: IdentityInput, period: BigNumberish], void>;
    constructor: InvokeFunction<[manager_id: ContractIdInput, token_id: ContractIdInput], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
