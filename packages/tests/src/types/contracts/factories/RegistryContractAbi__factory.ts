/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { RegistryContractAbi, RegistryContractAbiInterface } from "../RegistryContractAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 13,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Metadata",
      "components": [
        {
          "name": "B256",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "Bytes",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "Int",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "String",
          "type": 17,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum NameValidationError",
      "components": [
        {
          "name": "InvalidLenght",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidChars",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IsEmpty",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        8
      ]
    },
    {
      "typeId": 6,
      "type": "enum Permission",
      "components": [
        {
          "name": "Authorized",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "Unauthorized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotFound",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum RegistryContractError",
      "components": [
        {
          "name": "StorageNotInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AlreadyInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "DomainNotAvailable",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "IncorrectAssetId",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidDomain",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidAmount",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "InvalidPermission",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotOwner",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "SameResolver",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 16,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 19,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct GracePeriod",
      "components": [
        {
          "name": "timestamp",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "period",
          "type": 19,
          "typeArguments": null
        },
        {
          "name": "grace_period",
          "type": 19,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct NewResolverEvent",
      "components": [
        {
          "name": "domain_hash",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "resolver",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 19,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "u16",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "owner",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "storage_id",
          "type": 13,
          "typeArguments": null
        }
      ],
      "name": "constructor",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "type": 17,
          "typeArguments": null
        },
        {
          "name": "resolver",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "edit_resolver",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
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
          "type": 17,
          "typeArguments": null
        },
        {
          "name": "resolver",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "period",
          "type": 18,
          "typeArguments": null
        }
      ],
      "name": "register",
      "output": {
        "name": "",
        "type": 11,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
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
          "name": "asset",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 20,
            "typeArguments": null
          }
        ]
      },
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
          "name": "asset",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 17,
            "typeArguments": null
          }
        ]
      },
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
          "name": "asset",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 17,
            "typeArguments": null
          }
        ]
      },
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
      "inputs": [],
      "name": "total_assets",
      "output": {
        "name": "",
        "type": 19,
        "typeArguments": null
      },
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
          "name": "asset",
          "type": 11,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
            "typeArguments": null
          }
        ]
      },
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
          "name": "asset",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "key",
          "type": 17,
          "typeArguments": null
        }
      ],
      "name": "metadata",
      "output": {
        "name": "",
        "type": 5,
        "typeArguments": [
          {
            "name": "",
            "type": 3,
            "typeArguments": null
          }
        ]
      },
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
          "type": 17,
          "typeArguments": null
        }
      ],
      "name": "image_url",
      "output": {
        "name": "",
        "type": 17,
        "typeArguments": null
      },
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
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "get_all",
      "output": {
        "name": "",
        "type": 12,
        "typeArguments": null
      },
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
          "type": 17,
          "typeArguments": null
        }
      ],
      "name": "get_grace_period",
      "output": {
        "name": "",
        "type": 14,
        "typeArguments": null
      },
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
      "logId": "16341732484996616845",
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": "16850777566225060202",
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": "18306683036667780221",
      "loggedType": {
        "name": "",
        "type": 15,
        "typeArguments": []
      }
    },
    {
      "logId": "2256613033834145158",
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "8ecd865d933483a43363a1a3babfd71cbc3ade9a24d8d98b7c62fdcf4f5fdbce",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "8ecd865d933483a43363a1a3babfd71cbc3ade9a24d8d98b7c62fdcf4f5fdbcf",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "93b67ee4f0f76b71456fb4385c86aec15689e1ce5f6f6ac63b71716afa052998",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b61e266e75c64ac989315805e532e6125db4ee10ad42b2038897cf0ff4ec740a",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const RegistryContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): RegistryContractAbiInterface {
    return new Interface(_abi) as unknown as RegistryContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): RegistryContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as RegistryContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<RegistryContractAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<RegistryContractAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
