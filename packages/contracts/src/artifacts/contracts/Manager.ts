/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.4
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

import type { Option, Enum } from "./common";

export enum AccessErrorInput { NotOwner = 'NotOwner' };
export enum AccessErrorOutput { NotOwner = 'NotOwner' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum InitializationErrorInput { CannotReinitialized = 'CannotReinitialized' };
export enum InitializationErrorOutput { CannotReinitialized = 'CannotReinitialized' };
export enum ManagerErrorInput { OnlyOwner = 'OnlyOwner', RecordNotFound = 'RecordNotFound', RecordAlreadyExists = 'RecordAlreadyExists', ContractNotInitialized = 'ContractNotInitialized', ResolverAlreadyInUse = 'ResolverAlreadyInUse' };
export enum ManagerErrorOutput { OnlyOwner = 'OnlyOwner', RecordNotFound = 'RecordNotFound', RecordAlreadyExists = 'RecordAlreadyExists', ContractNotInitialized = 'ContractNotInitialized', ResolverAlreadyInUse = 'ResolverAlreadyInUse' };
export type StateInput = Enum<{ Uninitialized: undefined, Initialized: IdentityInput, Revoked: undefined }>;
export type StateOutput = Enum<{ Uninitialized: void, Initialized: IdentityOutput, Revoked: void }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type NewRecordEventInput = { name: StdString, owner: IdentityInput, resolver: IdentityInput, name_hash: string, timestamp: BigNumberish, period: BigNumberish };
export type NewRecordEventOutput = { name: StdString, owner: IdentityOutput, resolver: IdentityOutput, name_hash: string, timestamp: BN, period: number };
export type OwnerChangedEventInput = { name: StdString, name_hash: string, old_owner: IdentityInput, new_owner: IdentityInput };
export type OwnerChangedEventOutput = { name: StdString, name_hash: string, old_owner: IdentityOutput, new_owner: IdentityOutput };
export type OwnershipSetInput = { new_owner: IdentityInput };
export type OwnershipSetOutput = { new_owner: IdentityOutput };
export type OwnershipTransferredInput = { new_owner: IdentityInput, previous_owner: IdentityInput };
export type OwnershipTransferredOutput = { new_owner: IdentityOutput, previous_owner: IdentityOutput };
export type RecordDataInput = { owner: IdentityInput, resolver: IdentityInput, period: BigNumberish, timestamp: BigNumberish };
export type RecordDataOutput = { owner: IdentityOutput, resolver: IdentityOutput, period: number, timestamp: BN };
export type ResolverChangedEventInput = { name: StdString, name_hash: string, old_resolver: IdentityInput, new_resolver: IdentityInput };
export type ResolverChangedEventOutput = { name: StdString, name_hash: string, old_resolver: IdentityOutput, new_resolver: IdentityOutput };

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
      "type": "enum ManagerError",
      "concreteTypeId": "00b1211efa160123969a7efe1d4597cdb9c6b6e4b311f933e55760a79e7c28fb",
      "metadataTypeId": 1
    },
    {
      "type": "enum standards::src5::AccessError",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d",
      "metadataTypeId": 2
    },
    {
      "type": "enum standards::src5::State",
      "concreteTypeId": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 4
    },
    {
      "type": "enum std::option::Option<enum std::identity::Identity>",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "metadataTypeId": 5,
      "typeArguments": [
        "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
      ]
    },
    {
      "type": "enum std::option::Option<struct lib::abis::manager::RecordData>",
      "concreteTypeId": "f9212aadfc7e62516fa2ffae7be391807a1a2ec3dd63b662a25fd394cb0f8871",
      "metadataTypeId": 5,
      "typeArguments": [
        "a06087fea05d71c273e06e235102af0ef06e08660df4f94ecbe49e7f96ab4635"
      ]
    },
    {
      "type": "enum std::option::Option<struct std::string::String>",
      "concreteTypeId": "7c06d929390a9aeeb8ffccf8173ac0d101a9976d99dda01cce74541a81e75ac0",
      "metadataTypeId": 5,
      "typeArguments": [
        "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
      ]
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893",
      "metadataTypeId": 6
    },
    {
      "type": "struct events::NewRecordEvent",
      "concreteTypeId": "9557377d8eacf04082e65f85e3075fac7f54d73428f6a779c7768060c36dbd89",
      "metadataTypeId": 9
    },
    {
      "type": "struct events::OwnerChangedEvent",
      "concreteTypeId": "39bba09788238c3baa4c4b8b27b80b5233e43c9ec834a34db38a901a76a9f13c",
      "metadataTypeId": 10
    },
    {
      "type": "struct events::ResolverChangedEvent",
      "concreteTypeId": "1c9448d67429263ce86f33b8c35db64a7aaf74d408d085047883f527427b6ad0",
      "metadataTypeId": 11
    },
    {
      "type": "struct lib::abis::manager::RecordData",
      "concreteTypeId": "a06087fea05d71c273e06e235102af0ef06e08660df4f94ecbe49e7f96ab4635",
      "metadataTypeId": 12
    },
    {
      "type": "struct std::string::String",
      "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c",
      "metadataTypeId": 17
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5",
      "metadataTypeId": 18
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipTransferred",
      "concreteTypeId": "b3fffbcb3158d7c010c31b194b60fb7857adb4ad61bdcf4b8b42958951d9f308",
      "metadataTypeId": 19
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "enum ManagerError",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "OnlyOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "RecordNotFound",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "RecordAlreadyExists",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ContractNotInitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "ResolverAlreadyInUse",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::AccessError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "NotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum standards::src5::State",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Uninitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Initialized",
          "typeId": 4
        },
        {
          "name": "Revoked",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "Address",
          "typeId": 13
        },
        {
          "name": "ContractId",
          "typeId": 16
        }
      ]
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 7
        }
      ],
      "typeParameters": [
        7
      ]
    },
    {
      "type": "enum sway_libs::ownership::errors::InitializationError",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "CannotReinitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 7
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 8
    },
    {
      "type": "struct events::NewRecordEvent",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "name",
          "typeId": 17
        },
        {
          "name": "owner",
          "typeId": 4
        },
        {
          "name": "resolver",
          "typeId": 4
        },
        {
          "name": "name_hash",
          "typeId": 0
        },
        {
          "name": "timestamp",
          "typeId": 21
        },
        {
          "name": "period",
          "typeId": 20
        }
      ]
    },
    {
      "type": "struct events::OwnerChangedEvent",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "name",
          "typeId": 17
        },
        {
          "name": "name_hash",
          "typeId": 0
        },
        {
          "name": "old_owner",
          "typeId": 4
        },
        {
          "name": "new_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct events::ResolverChangedEvent",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "name",
          "typeId": 17
        },
        {
          "name": "name_hash",
          "typeId": 0
        },
        {
          "name": "old_resolver",
          "typeId": 4
        },
        {
          "name": "new_resolver",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct lib::abis::manager::RecordData",
      "metadataTypeId": 12,
      "components": [
        {
          "name": "owner",
          "typeId": 4
        },
        {
          "name": "resolver",
          "typeId": 4
        },
        {
          "name": "period",
          "typeId": 20
        },
        {
          "name": "timestamp",
          "typeId": 21
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 13,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::bytes::Bytes",
      "metadataTypeId": 14,
      "components": [
        {
          "name": "buf",
          "typeId": 15
        },
        {
          "name": "len",
          "typeId": 21
        }
      ]
    },
    {
      "type": "struct std::bytes::RawBytes",
      "metadataTypeId": 15,
      "components": [
        {
          "name": "ptr",
          "typeId": 8
        },
        {
          "name": "cap",
          "typeId": 21
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 16,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::string::String",
      "metadataTypeId": 17,
      "components": [
        {
          "name": "bytes",
          "typeId": 14
        }
      ]
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipSet",
      "metadataTypeId": 18,
      "components": [
        {
          "name": "new_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct sway_libs::ownership::events::OwnershipTransferred",
      "metadataTypeId": 19,
      "components": [
        {
          "name": "new_owner",
          "typeId": 4
        },
        {
          "name": "previous_owner",
          "typeId": 4
        }
      ]
    },
    {
      "type": "u16",
      "metadataTypeId": 20
    },
    {
      "type": "u64",
      "metadataTypeId": 21
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
          "name": "owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "set_owner",
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
    },
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        },
        {
          "name": "data",
          "concreteTypeId": "a06087fea05d71c273e06e235102af0ef06e08660df4f94ecbe49e7f96ab4635"
        }
      ],
      "name": "set_record",
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
    },
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        },
        {
          "name": "resolver",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "set_resolver",
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
    },
    {
      "inputs": [
        {
          "name": "resolver",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "get_name",
      "output": "7c06d929390a9aeeb8ffccf8173ac0d101a9976d99dda01cce74541a81e75ac0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "get_owner",
      "output": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "get_record",
      "output": "f9212aadfc7e62516fa2ffae7be391807a1a2ec3dd63b662a25fd394cb0f8871",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "concreteTypeId": "9a7f1d3e963c10e0a4ea70a8e20a4813d1dc5682e28f74cb102ae50d32f7f98c"
        }
      ],
      "name": "get_resolver",
      "output": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "admin",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
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
    },
    {
      "inputs": [
        {
          "name": "admin",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "add_admin",
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
    },
    {
      "inputs": [
        {
          "name": "admin",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "revoke_admin",
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
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "transfer_ownership",
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
    },
    {
      "inputs": [],
      "name": "owner",
      "output": "192bc7098e2fe60635a9918afb563e4e5419d386da2bdbf0d716b4bc8549802c",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "49857487806267683",
      "concreteTypeId": "00b1211efa160123969a7efe1d4597cdb9c6b6e4b311f933e55760a79e7c28fb"
    },
    {
      "logId": "4160095253491321915",
      "concreteTypeId": "39bba09788238c3baa4c4b8b27b80b5233e43c9ec834a34db38a901a76a9f13c"
    },
    {
      "logId": "10761130847029227584",
      "concreteTypeId": "9557377d8eacf04082e65f85e3075fac7f54d73428f6a779c7768060c36dbd89"
    },
    {
      "logId": "2059351015524214332",
      "concreteTypeId": "1c9448d67429263ce86f33b8c35db64a7aaf74d408d085047883f527427b6ad0"
    },
    {
      "logId": "2161305517876418151",
      "concreteTypeId": "1dfe7feadc1d9667a4351761230f948744068a090fe91b1bc6763a90ed5d3893"
    },
    {
      "logId": "16280289466020123285",
      "concreteTypeId": "e1ef35033ea9d2956f17c3292dea4a46ce7d61fdf37bbebe03b7b965073f43b5"
    },
    {
      "logId": "4571204900286667806",
      "concreteTypeId": "3f702ea3351c9c1ece2b84048006c8034a24cbc2bad2e740d0412b4172951d3d"
    },
    {
      "logId": "12970362301975156672",
      "concreteTypeId": "b3fffbcb3158d7c010c31b194b60fb7857adb4ad61bdcf4b8b42958951d9f308"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [];

export class ManagerInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    set_owner: FunctionFragment;
    set_record: FunctionFragment;
    set_resolver: FunctionFragment;
    get_name: FunctionFragment;
    get_owner: FunctionFragment;
    get_record: FunctionFragment;
    get_resolver: FunctionFragment;
    constructor: FunctionFragment;
    add_admin: FunctionFragment;
    revoke_admin: FunctionFragment;
    transfer_ownership: FunctionFragment;
    owner: FunctionFragment;
  };
}

export class Manager extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: ManagerInterface;
  declare functions: {
    set_owner: InvokeFunction<[name: StdString, owner: IdentityInput], void>;
    set_record: InvokeFunction<[name: StdString, data: RecordDataInput], void>;
    set_resolver: InvokeFunction<[name: StdString, resolver: IdentityInput], void>;
    get_name: InvokeFunction<[resolver: IdentityInput], Option<StdString>>;
    get_owner: InvokeFunction<[name: StdString], Option<IdentityOutput>>;
    get_record: InvokeFunction<[name: StdString], Option<RecordDataOutput>>;
    get_resolver: InvokeFunction<[name: StdString], Option<IdentityOutput>>;
    constructor: InvokeFunction<[owner: IdentityInput, admin: IdentityInput], void>;
    add_admin: InvokeFunction<[admin: IdentityInput], void>;
    revoke_admin: InvokeFunction<[admin: IdentityInput], void>;
    transfer_ownership: InvokeFunction<[new_owner: IdentityInput], void>;
    owner: InvokeFunction<[], StateOutput>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
